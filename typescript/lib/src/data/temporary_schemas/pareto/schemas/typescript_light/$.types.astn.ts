

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema/manual"


export const $ = modules(
    {

        "Directory": module_(t.dictionary(
            t.state({
                "file": toption(t.group({
                    "statements": prop(t.component("Statements"))
                })),
                "directory": toption(t.component("Directory")),
            })
        )),

        "Block": module_(t.component("Statements")),

        "Statements": module_(t.list(t.state({
            "block": toption(t.component("Block")),
            "export": toption(t.group({
                "type": prop(t.state({
                    "named exports": toption(t.group({
                        "specifiers": prop(t.list(t.group({
                            "name": prop(t.component("Identifier")),
                            "as": prop(t.optional(t.component("Identifier"))),
                        }))),
                        "from": prop(t.optional(t.component("String Literal"))),
                    })),
                })),
            })),
            "expression": toption(t.component("Expression")),
            "import": toption(t.group({
                "type": prop(t.state({
                    "default": toption(t.component("Identifier")),
                    "namespace": toption(t.component("Identifier")),
                    "named": toption(t.group({
                        "specifiers": prop(t.list(t.group({
                            "name": prop(t.component("Identifier")),
                            "as": prop(t.optional(t.component("Identifier"))),
                        }))),
                    })),
                })),
                "from": prop(t.component("String Literal")),
            })),
            "module declaration": toption(t.group({ //namespace
                "export": prop(t.simple("boolean")),
                "name": prop(t.component("Identifier")),
                "block": prop(t.component("Block")),
            })),

            "return": toption(t.optional(t.component("Expression"))),
            "switch": toption(t.group({
                "expression": prop(t.component("Expression")),
                "clauses": prop(t.list(t.group({
                    "type": prop(t.state({
                        "case": toption(t.component("Expression")),
                        "default": toption(t.nothing()),
                    })),
                    "statements": prop(t.component("Statements")),
                }))),
            })),
            "type alias declaration": toption(t.group({
                "export": prop(t.simple("boolean")),
                "name": prop(t.component("Identifier")),
                "parameters": prop(t.list(t.component("Identifier"))),
                "type": prop(t.component("Type")),
            })),
            "variable": toption(t.group({
                "export": prop(t.simple("boolean")),
                "const": prop(t.simple("boolean")),
                "name": prop(t.component("Identifier")),
                "type": prop(t.optional(t.component("Type"))),
                "expression": prop(t.optional(t.component("Expression"))),
            })),
        }))),

        "Type": module_(t.state({
            "boolean": toption(t.nothing()),
            "function": toption(t.group({
                "type parameters": prop(t.list(t.component("Type"))),
                "parameters": prop(t.component("Function Parameters")),
                "return": prop(t.component("Type")),
            })),
            "literal type": toption(t.component("String Literal")),
            "never": toption(t.nothing()),
            "null": toption(t.nothing()),
            "number": toption(t.nothing()),
            "string": toption(t.nothing()),
            "tuple": toption(t.group({
                "readonly": prop(t.simple("boolean")),
                "elements": prop(t.list(t.component("Type"))),
            })),
            "type literal": toption(t.group({
                "properties": prop(t.list(t.group({
                    "key": prop(t.state({
                        "identifier": toption(t.component("Identifier")),
                        "string literal": toption(t.component("String Literal")),
                    })),
                    "readonly": prop(t.simple("boolean")),
                    "type": prop(t.component("Type")),
                }))),
            })),
            "type reference": toption(t.group({
                "start": prop(t.component("Identifier")),
                "tail": prop(t.list(t.component("Identifier"))),
                "type arguments": prop(t.list(t.component("Type"))),
            })),
            "union": toption(t.list(t.component("Type"))),
            "void": toption(t.nothing()),
        })),

        "Function Parameters": module_(t.list(t.group({
            "name": prop(t.component("Identifier")),
            "type": prop(t.optional(t.component("Type"))),
        }))),

        "Expression": module_(t.state({
            "array literal": toption(t.list(t.component("Expression"))),
            "arrow function": toption(t.group({
                "parameters": prop(t.component("Function Parameters")),
                "return type": prop(t.optional(t.component("Type"))),
                "body": prop(t.state({
                    "block": toption(t.component("Block")),
                    "expression": toption(t.component("Expression")),
                })),
            })),
            "assignment": toption(t.group({
                "left": prop(t.component("Expression")),
                "right": prop(t.component("Expression")),
            })),
            "call": toption(t.group({
                "function selection": prop(t.component("Expression")),
                "arguments": prop(t.list(t.component("Expression"))),
            })),
            "compare": toption(t.group({
                "left": prop(t.component("Expression")),
                "operator": prop(t.state({
                    "loosely equal": toption(t.nothing()),
                    "strictly equal": toption(t.nothing()),
                    "loosely not equal": toption(t.nothing()),
                    "strictly not equal": toption(t.nothing()),
                    "smaller than": toption(t.nothing()),
                    "smaller than or equal": toption(t.nothing()),
                    "greater than": toption(t.nothing()),
                    "greater than or equal": toption(t.nothing()),
                })),
                "right": prop(t.component("Expression")),
            })),
            "conditional": toption(t.group({
                "condition": prop(t.component("Expression")),
                "if true": prop(t.component("Expression")),
                "if false": prop(t.component("Expression")),
            })),
            "element access": toption(t.group({
                "collection": prop(t.component("Expression")),
                "index": prop(t.component("Expression")),
            })),

            "identifier": toption(t.component("Identifier")),
            "false": toption(t.nothing()),
            "null": toption(t.nothing()),
            "number literal": toption(t.simple("Approximation")),
            "object literal": toption(t.group({
                "properties": prop(t.list(t.group({
                    "key": prop(t.state({
                        "identifier": toption(t.component("Identifier")),
                        "string literal": toption(t.component("String Literal")),
                    })),
                    "value": prop(t.component("Expression")),
                }))),
            })),
            "parenthesized": toption(t.component("Expression")),
            "property access": toption(t.group({
                "object": prop(t.component("Expression")),
                "property": prop(t.component("Identifier")),
            })),
            "string literal": toption(t.component("String Literal")),
            "true": toption(t.nothing()),
            "unary operation": toption(t.group({
                "operator": prop(t.state({
                    "negation": toption(t.nothing()),
                    "logical not": toption(t.nothing()),
                })),
                "operand": prop(t.component("Expression")),
            })),
        })),

        "String Literal": module_(t.group({
            "delimiter": prop(t.state({
                "quote": toption(t.nothing()),
                "apostrophe": toption(t.nothing()),
            })),
            "value": prop(t.text_global("text"))
        })),

        "Identifier": module_(t.group({
            "value": prop(t.text_global("text"))
        })),

    }
)


