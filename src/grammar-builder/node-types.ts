import {CompiledGrammar, CompiledRule, CompiledTokenSymbol} from "../compiled-grammar";

/**
 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L56-L60
 */
export interface ChildQuantity {
    exists: boolean,
    required: boolean,
    multiple: boolean,
}

/**
 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L79-L85
 */
function zero () : ChildQuantity {
    return {
        exists : false,
        required : false,
        multiple : false,
    };
}

/**
 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L87-L93
 */
function one () : ChildQuantity {
    return {
        exists : true,
        required : true,
        multiple : false,
    };
}

/**
 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L95-L105
 */
function append (self : ChildQuantity, other : ChildQuantity) {
    if (other.exists) {
        if (self.exists || other.multiple) {
            self.multiple = true;
        }
        if (other.required) {
            self.required = true;
        }
        self.exists = true;
    }
}

/**
 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L107-L122
 */
function union (self : ChildQuantity, other : ChildQuantity) : boolean {
    let result = false;

    if (!self.exists && other.exists) {
        result = true;
        self.exists = true;
    }

    if (self.required && !other.required) {
        result = true;
        self.required = false;
    }

    if (!self.multiple && other.multiple) {
        result = true;
        self.multiple = true;
    }

    return result;
}

/**
 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L15-L18
 */
export interface FieldInfo {
    quantity : ChildQuantity;
    /**
     * We do not have aliasing.
     */
    types : Set<string>
}

/**
 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L21-L26
 */
export interface VariableInfo {
    ruleName : string,
    fields : Record<string, FieldInfo>;
    children : FieldInfo;
    childrenWithoutFields : FieldInfo;
    hasMultiStepProduction : boolean;
}

function extend (grammar : Pick<CompiledGrammar, "ruleName2Alias">, arr : Set<string>, other : string|CompiledTokenSymbol) : boolean {
    if (typeof other == "string") {
        other = grammar.ruleName2Alias[other] ?? other;
    }

    if (other == "") {
        return false;
    }

    if (typeof other == "string") {
        if (arr.has(other)) {
            return false;
        }

        arr.add(other);
        return true;
    }

    if (other.otherTokenKinds == undefined) {
        if (arr.has(other.tokenKind)) {
            return false;
        }

        arr.add(other.tokenKind);
        return true;
    }

    let didChange = false;
    if (!arr.has(other.tokenKind)) {
        arr.add(other.tokenKind);
        didChange = true;
    }

    for (const item of other.otherTokenKinds) {
        if (!arr.has(item)) {
            arr.add(item);
            didChange = true;
        }
    }

    return didChange;
}

function extend2 (grammar : Pick<CompiledGrammar, "ruleName2Alias">, arr : Set<string>, other : Set<string>) : boolean {
    let didChange = false;

    for (const o of other) {
        if (extend(grammar, arr, o)) {
            didChange = true;
        }
    }

    return didChange;
}

export function isVisible (grammar : Pick<CompiledGrammar, "inline"|"ruleName2Alias">, symbol : string, _hasMultiStepProduction : boolean) {
    return (!symbol.includes("$") || grammar.ruleName2Alias[symbol] != undefined) && !grammar.inline.includes(symbol);
}

export function isVisible_PreserveEnum (grammar : Pick<CompiledGrammar, "inline"|"ruleName2Alias">, symbol : string, hasMultiStepProduction : boolean) {
    if (symbol.includes("$") && grammar.ruleName2Alias[symbol] == undefined) {
        return false;
    }

    return (!grammar.inline.includes(symbol) || !hasMultiStepProduction);
}

/**
 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L147
 */
export function getVariableInfo (
    grammar : Pick<CompiledGrammar, "inline"|"rules"|"ruleName2Alias"|"ruleName2Label">,
    isVisibleDelegate : (grammar : Pick<CompiledGrammar, "inline"|"ruleName2Alias">, symbol : string, hasMultiStepProduction : boolean) => boolean = isVisible
) : Record<string, VariableInfo> {
    const byName : Record<string, CompiledRule[]> = {};
    for (const rule of grammar.rules) {
        let rules = byName[rule.name];
        if (rules == undefined) {
            rules = [];
            byName[rule.name] = rules;
        }

        rules.push(rule);
    }
    const variables = [
        ...Object.keys(byName),
        ...Object.keys(grammar.ruleName2Alias),
    ];

    let didChange = true;
    let allInitialized = false;
    const result : Record<string, VariableInfo> = {};
    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<variables.length; ++i) {
        const ruleName = grammar.ruleName2Alias[variables[i]] ?? variables[i];
        result[ruleName] = {
            ruleName,
            fields : {},
            children : {
                quantity : one(),
                types : new Set(),
            },
            childrenWithoutFields : {
                quantity : one(),
                types : new Set(),
            },
            hasMultiStepProduction : false,
        };
    }

    while (didChange) {
        didChange = false;

        for (let i=0; i<variables.length; ++i) {
            const variable = variables[i];

            //todo deep clone?
            const variableInfo = result[grammar.ruleName2Alias[variable] ?? variable];

            for (const production of byName[variable]) {
                const production_field_quantities : Record<string, ChildQuantity> = {};
                const production_children_quantity = zero();
                const production_children_without_fields_quantity = zero();
                let production_has_uninitialized_invisible_children = false;

                if (production.symbols.length > 1) {
                    variableInfo.hasMultiStepProduction = true;
                }

                //https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L185
                for (const step of production.symbols) {
                    const childSymbol = step;
                    didChange ||= extend(grammar, variableInfo.children.types, childSymbol);

                    const childIsHidden = (
                        typeof childSymbol == "string" &&
                        !isVisibleDelegate(grammar, childSymbol, variableInfo.hasMultiStepProduction) &&
                        grammar.ruleName2Alias[childSymbol] == undefined
                    );
                    //https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L202-L204
                    if (!childIsHidden) {
                        append(
                            production_children_quantity,
                            one()
                        );
                    }

                    const fieldName = typeof childSymbol == "string" ?
                        grammar.ruleName2Label[childSymbol] :
                        undefined;

                    if (fieldName != undefined) {
                        let fieldInfo = variableInfo.fields[fieldName];
                        if (fieldInfo == undefined) {
                            fieldInfo = {
                                quantity : one(),
                                types : new Set(),
                            };
                            variableInfo.fields[fieldName] = fieldInfo;
                        }

                        //https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L213
                        didChange ||= extend(grammar, fieldInfo.types, childSymbol);

                        let production_field_quantity = production_field_quantities[fieldName];
                        if (production_field_quantity == undefined) {
                            production_field_quantity = zero();
                            production_field_quantities[fieldName] = production_field_quantity;
                        }

                        /**
                         * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L220
                         */
                        if (childIsHidden && typeof step == "string") {
                            const childVariableInfo = result[grammar.ruleName2Alias[step] ?? step];

                            didChange ||= extend2(grammar, fieldInfo.types, childVariableInfo.children.types);

                            append(production_field_quantity, childVariableInfo.children.quantity);
                        } else {
                            append(production_field_quantity, one());
                        }
                    } else {
                        /**
                         * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L233
                         */
                        append(
                            production_children_without_fields_quantity,
                            one()
                        );
                        didChange ||= extend(grammar, variableInfo.childrenWithoutFields.types, childSymbol);
                    }

                    /**
                     * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L241
                     */
                    if (childIsHidden && typeof step == "string") {
                        const childVariableInfo = result[grammar.ruleName2Alias[step] ?? step];

                        /**
                         * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L246
                         */
                        if (childVariableInfo.hasMultiStepProduction) {
                            variableInfo.hasMultiStepProduction = true;
                        }

                        for (const [fieldName, childFieldInfo] of Object.entries(childVariableInfo.fields)) {
                            let quantity = production_field_quantities[fieldName];
                            if (quantity == undefined) {
                                quantity = zero();
                                production_field_quantities[fieldName] = quantity;
                            }
                            append(quantity, childFieldInfo.quantity);

                            let fieldInfo = variableInfo.fields[fieldName];
                            if (fieldInfo == undefined) {
                                fieldInfo = {
                                    quantity : one(),
                                    types : new Set(),
                                };
                                variableInfo.fields[fieldName] = fieldInfo;
                            }

                            didChange ||= extend2(grammar, fieldInfo.types, childFieldInfo.types);
                        }

                        /**
                         * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L269
                         */
                        append(production_children_quantity, childVariableInfo.children.quantity);
                        didChange ||= extend2(grammar, variableInfo.children.types, childVariableInfo.children.types);

                        if (fieldName == undefined) {
                            const grandchildrenInfo = childVariableInfo.childrenWithoutFields;
                            if (grandchildrenInfo.types.size > 0) {
                                append(
                                    production_children_without_fields_quantity,
                                    childVariableInfo.childrenWithoutFields.quantity
                                );
                                didChange ||= extend2(
                                    grammar,
                                    variableInfo.childrenWithoutFields.types,
                                    childVariableInfo.childrenWithoutFields.types
                                );
                            }
                        }
                    }

                    const variableIndex = typeof childSymbol == "string" ?
                        variables.indexOf(childSymbol) :
                        -1;
                    if (variableIndex >= i && !allInitialized) {
                        production_has_uninitialized_invisible_children = true;
                    }
                }

                /**
                 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L300
                 */
                if (!production_has_uninitialized_invisible_children) {
                    if (union(
                        variableInfo.children.quantity,
                        production_children_quantity
                    )) {
                        didChange = true;
                    }

                    if (union(
                        variableInfo.childrenWithoutFields.quantity,
                        production_children_without_fields_quantity
                    )) {
                        didChange = true;
                    }

                    for (const [fieldName, fieldInfo] of Object.entries(variableInfo.fields)) {
                        if (union(
                            fieldInfo.quantity,
                            production_field_quantities[fieldName] ?? zero()
                        )) {
                            didChange = true;
                        }
                    }
                }
            }
        }

        allInitialized = true;
    }

    for (const variableInfo of Object.values(result)) {
        variableInfo.children.types = new Set(
            [...variableInfo.children.types]
                .filter(type => isVisibleDelegate(grammar, type, variableInfo.hasMultiStepProduction))
        );

        for (const [_, fieldInfo] of Object.entries(variableInfo.fields)) {
            fieldInfo.types = new Set(
                [...fieldInfo.types]
                    .filter(type => isVisibleDelegate(grammar, type, false))
            );
        }

        for (const fieldName of Object.keys(variableInfo.fields)) {
            const fieldInfo = variableInfo.fields[fieldName];
            if (fieldInfo.types.size == 0) {
                delete variableInfo.fields[fieldName];
            }
        }

        variableInfo.childrenWithoutFields.types = new Set(
            [...variableInfo.childrenWithoutFields.types]
                .filter(type => isVisibleDelegate(grammar, type, variableInfo.hasMultiStepProduction))
        );
    }

    return result;
}
