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
    types : string[]
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

function extend (arr : string[], other : string|CompiledTokenSymbol) : boolean {
    if (typeof other == "string") {
        if (arr.includes(other)) {
            return false;
        }

        arr.push(other);
        return true;
    }

    if (other.otherTokenKinds == undefined) {
        if (arr.includes(other.tokenKind)) {
            return false;
        }

        arr.push(other.tokenKind);
        return true;
    }

    let didChange = false;
    if (!arr.includes(other.tokenKind)) {
        arr.push(other.tokenKind);
        didChange = true;
    }

    for (const item of other.otherTokenKinds) {
        if (!arr.includes(item)) {
            arr.push(item);
            didChange = true;
        }
    }

    return didChange;
}

function extend2 (arr : string[], other : string[]) : boolean {
    let didChange = false;

    for (const o of other) {
        if (extend(arr, o)) {
            didChange = true;
        }
    }

    return didChange;
}

function isVisible (grammar : Pick<CompiledGrammar, "inline">, symbol : string) {
    return !symbol.includes("$") && !grammar.inline.includes(symbol);
}

function isVisible2 (grammar : Pick<CompiledGrammar, "inline">, symbol : string, _hasMultiStepProduction : boolean) {
    return !symbol.includes("$") && !grammar.inline.includes(symbol);
}

/**
 * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L147
 */
export function getVariableInfo (
    grammar : Pick<CompiledGrammar, "inline"|"rules"|"ruleName2Label">
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
    const variables = Object.keys(byName);

    let didChange = true;
    let allInitialized = false;
    const result : Record<string, VariableInfo> = {};
    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<variables.length; ++i) {
        const ruleName = variables[i];
        result[ruleName] = {
            ruleName,
            fields : {},
            children : {
                quantity : one(),
                types : [],
            },
            childrenWithoutFields : {
                quantity : one(),
                types : [],
            },
            hasMultiStepProduction : false,
        };
    }

    while (didChange) {
        didChange = false;

        for (let i=0; i<variables.length; ++i) {
            const variable = variables[i];

            //todo deep clone?
            const variableInfo = result[variable];

            for (const production of byName[variable]) {
                const production_field_quantities : Record<string, ChildQuantity> = {};
                const production_children_quantity = zero();
                const production_children_without_fields_quantity = zero();
                let production_has_uninitialized_invisible_children = false;

                if (production.symbols.length > 1) {
                    variableInfo.hasMultiStepProduction = true;
                }

                for (const step of production.symbols) {
                    const childSymbol = step;
                    didChange ||= extend(variableInfo.children.types, childSymbol);

                    const childIsHidden = (
                        typeof childSymbol == "string" &&
                        !isVisible(grammar, childSymbol)
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
                                types : [],
                            };
                            variableInfo.fields[fieldName] = fieldInfo;
                        }

                        //https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L213
                        didChange ||= extend(fieldInfo.types, childSymbol);

                        let production_field_quantity = production_field_quantities[fieldName];
                        if (production_field_quantity == undefined) {
                            production_field_quantity = zero();
                            production_field_quantities[fieldName] = production_field_quantity;
                        }

                        /**
                         * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L220
                         */
                        if (childIsHidden && typeof step == "string") {
                            const childVariableInfo = result[step];

                            didChange ||= extend2(fieldInfo.types, childVariableInfo.children.types);

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
                        didChange ||= extend(variableInfo.childrenWithoutFields.types, childSymbol);
                    }

                    /**
                     * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L241
                     */
                    if (childIsHidden && typeof step == "string") {
                        const childVariableInfo = result[step];

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
                                    types : [],
                                };
                                variableInfo.fields[fieldName] = fieldInfo;
                            }

                            didChange ||= extend2(fieldInfo.types, childFieldInfo.types);
                        }

                        /**
                         * https://github.com/tree-sitter/tree-sitter/blob/master/cli/src/generate/node_types.rs#L269
                         */
                        append(production_children_quantity, childVariableInfo.children.quantity);
                        didChange ||= extend2(variableInfo.children.types, childVariableInfo.children.types);

                        if (fieldName == undefined) {
                            const grandchildrenInfo = childVariableInfo.childrenWithoutFields;
                            if (grandchildrenInfo.types.length > 0) {
                                append(
                                    production_children_without_fields_quantity,
                                    childVariableInfo.childrenWithoutFields.quantity
                                );
                                didChange ||= extend2(
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
        variableInfo.children.types = variableInfo.children.types
            .filter(type => isVisible(grammar, type));

        for (const [_, fieldInfo] of Object.entries(variableInfo.fields)) {
            fieldInfo.types = fieldInfo.types
                .filter(type => isVisible2(grammar, type, variableInfo.hasMultiStepProduction));
        }

        for (const fieldName of Object.keys(variableInfo.fields)) {
            const fieldInfo = variableInfo.fields[fieldName];
            if (fieldInfo.types.length == 0) {
                delete variableInfo.fields[fieldName];
            }
        }

        variableInfo.childrenWithoutFields.types = variableInfo.childrenWithoutFields.types
            .filter(type => isVisible(grammar, type));
    }

    return result;
}
