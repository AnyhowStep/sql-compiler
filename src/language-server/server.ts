/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
    createConnection,
    TextDocuments,
    Diagnostic,
    DiagnosticSeverity,
    ProposedFeatures,
    InitializeParams,
    DidChangeConfigurationNotification,
    CompletionItem,
    CompletionItemKind,
    TextDocumentPositionParams,
    TextDocumentSyncKind,
    InitializeResult,
    DiagnosticRelatedInformation,
} from 'vscode-languageserver';

import {
    TextDocument
} from 'vscode-languageserver-textdocument';
import {findAllMacros} from "../macro-definition-grammar";
import {expandStringContent, traceDiagnostic} from "../macro";
import {parse} from "../mysql-grammar";
import * as parserNodeLinter from "../parser-node-linter";
//import {emitSourceFile} from "../emitter";


// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
    let capabilities = params.capabilities;

    // Does the client support the `workspace/configuration` request?
    // If not, we fall back using global settings.
    hasConfigurationCapability = !!(
        capabilities.workspace && !!capabilities.workspace.configuration
    );
    hasWorkspaceFolderCapability = !!(
        capabilities.workspace && !!capabilities.workspace.workspaceFolders
    );
    hasDiagnosticRelatedInformationCapability = !!(
        capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation
    );

    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            // Tell the client that this server supports code completion.
            completionProvider: {
                resolveProvider: true
            }
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    return result;
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // Register for all configuration changes.
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(_event => {
            connection.console.log('Workspace folder change event received.');
        });
    }
});

// The example settings
interface ExampleSettings {
    maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
//const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
//let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(_change => {
    if (hasConfigurationCapability) {
        // Reset all cached document settings
        documentSettings.clear();
    } else {
        /*globalSettings = <ExampleSettings>(
            (change.settings.languageServerExample || defaultSettings)
        );*/
    }

    // Revalidate all open text documents
    documents.all().forEach(validateTextDocument);
});
/*
function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: 'languageServerExample'
        });
        documentSettings.set(resource, result);
    }
    return result;
}
*/
// Only keep settings for open documents
documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    // In this simple example we get the settings for every validate run.
    //let settings = await getDocumentSettings(textDocument.uri);

    // The validator creates diagnostics for all uppercase words length 2 and more
    let text = textDocument.getText();

    const macros = findAllMacros(
        textDocument.uri,
        text
    );

    for (let i=macros.length-1; i>=0; --i) {
        const macro = macros[i];
        text = (
            text.substring(0, macro.start) +
            " ".repeat(macro.end - macro.start) +
            text.substring(macro.end)
        );
    }

    const expanded = expandStringContent(
        textDocument.uri,
        macros,
        text
    );

    const parsed = parse(
        textDocument.uri,
        expanded.expandedText,
        {}
    );

    const linter = parserNodeLinter.makeLinter();
    parserNodeLinter.registerAllRules(linter);
    const lintResult = linter.run(parsed.sourceFile);

    /*
    const binderState = bind(
        [parsed],
        {
            defaultSchemaName : "test",
        }
    )
    */

    const diagnostics: Diagnostic[] = [];
    for (const error of [
        ...parsed.sourceFile.syntacticErrors,
        ...parsed.scanner.getSyntacticErrors(),
        ...lintResult.syntacticErrors,
        //...parsed.semanticErrors,
        //...binderState.semanticErrors,
    ]) {

        const traced = traceDiagnostic(
            error,
            expanded,
            (filename) => {
                if (filename != textDocument.uri) {
                    throw new Error(`match not found`);
                }
                return expanded;
            }
        );
        const diagnostic : Diagnostic = {
            severity : traced.category as DiagnosticSeverity,
            range : {
                start : textDocument.positionAt(traced.start),
                end : textDocument.positionAt(traced.start + traced.length),
            },
            message : traced.messageText,
            source : `mysql(${traced.code})`
        };

        if (hasDiagnosticRelatedInformationCapability) {
            diagnostic.relatedInformation = traced.relatedRanges?.map(
                (r) : DiagnosticRelatedInformation => {
                    return {
                        location: {
                            uri: r.filename,
                            range: {
                                start : textDocument.positionAt(r.start),
                                end : textDocument.positionAt(r.start + r.length),
                            }
                        },
                        message : r.messageText ?? "",
                    };
                }
            );
        }

        diagnostics.push(diagnostic);
    }

    // Send the computed diagnostics to VSCode.
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
    // Monitored files have change in VSCode
    connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
    (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
        // The pass parameter contains the position of the text document in
        // which code complete got requested. For the example we ignore this
        // info and always provide the same completion items.
        return [
            {
                label: 'TypeScript',
                kind: CompletionItemKind.Text,
                data: 1
            },
            {
                label: 'JavaScript',
                kind: CompletionItemKind.Text,
                data: 2
            }
        ];
    }
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
    (item: CompletionItem): CompletionItem => {
        if (item.data === 1) {
            item.detail = 'TypeScript details';
            item.documentation = 'TypeScript documentation';
        } else if (item.data === 2) {
            item.detail = 'JavaScript details';
            item.documentation = 'JavaScript documentation';
        }
        return item;
    }
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
