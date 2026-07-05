
import * as sh from "../../../../../shorthands/schema/manual.js"

//this schema is intended to make it easy to generate typescript code,
//but it is by design not intended to be a complete representation of the typescript language.

export const $ = sh.modules(
    {

        "Block": sh.module_(sh.t.component("Statements")),

        "Directory": sh.module_(sh.t.dictionary(
            sh.t.state({
                "file": sh.toption(sh.t.group({
                    "statements": sh.prop(sh.t.component("Statements"))
                })),
                "directory": sh.toption(sh.t.component("Directory")),
            })
        )),

        "Expression": sh.module_(sh.t.state({
            "array literal": sh.toption(sh.t.list(sh.t.component("Expression"))),
            "arrow function": sh.toption(sh.t.group({
                "declaration": sh.prop(sh.t.component("Function Declaration")),
                "body": sh.prop(sh.t.state({
                    "block": sh.toption(sh.t.component("Block")),
                    "expression": sh.toption(sh.t.component("Expression")),
                })),
            })),
            "assignment": sh.toption(sh.t.group({
                "left": sh.prop(sh.t.component("Expression")),
                "right": sh.prop(sh.t.component("Expression")),
            })),
            "call": sh.toption(sh.t.group({
                "function selection": sh.prop(sh.t.component("Expression")),
                "arguments": sh.prop(sh.t.list(sh.t.component("Expression"))),
            })),
            "compare": sh.toption(sh.t.group({
                "left": sh.prop(sh.t.component("Expression")),
                "operator": sh.prop(sh.t.state({
                    "strictly equal": sh.toption(sh.t.nothing()),
                    "strictly not equal": sh.toption(sh.t.nothing()),
                    "smaller than": sh.toption(sh.t.nothing()),
                    "smaller than or equal": sh.toption(sh.t.nothing()),
                    "greater than": sh.toption(sh.t.nothing()),
                    "greater than or equal": sh.toption(sh.t.nothing()),
                })),
                "right": sh.prop(sh.t.component("Expression")),
            })),
            "conditional": sh.toption(sh.t.group({
                "condition": sh.prop(sh.t.component("Expression")),
                "if true": sh.prop(sh.t.component("Expression")),
                "if false": sh.prop(sh.t.component("Expression")),
            })),
            "element access": sh.toption(sh.t.group({
                "collection": sh.prop(sh.t.component("Expression")),
                "index": sh.prop(sh.t.component("Expression")),
            })),

            "identifier": sh.toption(sh.t.component("Identifier")),
            "false": sh.toption(sh.t.nothing()),
            "null": sh.toption(sh.t.nothing()),
            "number literal": sh.toption(sh.t.simple("Approximation")),
            "object literal": sh.toption(sh.t.group({
                "properties": sh.prop(sh.t.list(sh.t.group({
                    "key": sh.prop(sh.t.state({
                        "identifier": sh.toption(sh.t.component("Identifier")),
                        "string literal": sh.toption(sh.t.component("String Literal")),
                    })),
                    "value": sh.prop(sh.t.component("Expression")),
                }))),
            })),
            "parenthesized": sh.toption(sh.t.component("Expression")),
            "property access": sh.toption(sh.t.group({
                "object": sh.prop(sh.t.component("Expression")),
                "property": sh.prop(sh.t.component("Identifier")),
            })),
            "string literal": sh.toption(sh.t.component("String Literal")),
            "true": sh.toption(sh.t.nothing()),
            "unary operation": sh.toption(sh.t.group({
                "operator": sh.prop(sh.t.state({
                    "negation": sh.toption(sh.t.nothing()),
                    "logical not": sh.toption(sh.t.nothing()),
                })),
                "operand": sh.prop(sh.t.component("Expression")),
            })),
        })),

        "Function Declaration": sh.module_(sh.t.group({
            "type parameters": sh.prop(sh.t.list(sh.t.component("Type"))),
            "parameters": sh.prop(sh.t.list(sh.t.group({
                "name": sh.prop(sh.t.component("Identifier")),
                "type": sh.prop(sh.t.optional(sh.t.component("Type"))),
            }))),
            "return type": sh.prop(sh.t.optional(sh.t.component("Type"))),
        })),

        "Identifier": sh.module_(sh.t.group({
            "value": sh.prop(sh.t.text_global("text"))
        })),

        "Statements": sh.module_(sh.t.list(sh.t.state({
            "block": sh.toption(sh.t.component("Block")),
            "export": sh.toption(sh.t.group({
                "type": sh.prop(sh.t.state({
                    "named exports": sh.toption(sh.t.group({
                        "specifiers": sh.prop(sh.t.list(sh.t.group({
                            "name": sh.prop(sh.t.component("Identifier")),
                            "as": sh.prop(sh.t.optional(sh.t.component("Identifier"))),
                        }))),
                        "from": sh.prop(sh.t.optional(sh.t.component("String Literal"))),
                    })),
                })),
            })),
            "expression": sh.toption(sh.t.component("Expression")),
            "import": sh.toption(sh.t.group({
                "type": sh.prop(sh.t.state({
                    "default": sh.toption(sh.t.component("Identifier")),
                    "namespace": sh.toption(sh.t.component("Identifier")),
                    "named": sh.toption(sh.t.group({
                        "specifiers": sh.prop(sh.t.list(sh.t.group({
                            "name": sh.prop(sh.t.component("Identifier")),
                            "as": sh.prop(sh.t.optional(sh.t.component("Identifier"))),
                        }))),
                    })),
                })),
                "from": sh.prop(sh.t.component("String Literal")),
            })),
            "namespace": sh.toption(sh.t.group({ //namespace
                "export": sh.prop(sh.t.simple("boolean")),
                "name": sh.prop(sh.t.component("Identifier")),
                "block": sh.prop(sh.t.component("Block")),
            })),
            "return": sh.toption(sh.t.optional(sh.t.component("Expression"))),
            "switch": sh.toption(sh.t.group({
                "expression": sh.prop(sh.t.component("Expression")),
                "clauses": sh.prop(sh.t.list(sh.t.group({
                    "type": sh.prop(sh.t.state({
                        "case": sh.toption(sh.t.component("Expression")),
                        "default": sh.toption(sh.t.nothing()),
                    })),
                    "statements": sh.prop(sh.t.component("Statements")),
                }))),
            })),
            "type alias declaration": sh.toption(sh.t.group({
                "export": sh.prop(sh.t.simple("boolean")),
                "name": sh.prop(sh.t.component("Identifier")),
                "parameters": sh.prop(sh.t.list(sh.t.component("Identifier"))),
                "type": sh.prop(sh.t.component("Type")),
            })),
            "variable": sh.toption(sh.t.group({
                "export": sh.prop(sh.t.simple("boolean")),
                "const": sh.prop(sh.t.simple("boolean")),
                "name": sh.prop(sh.t.component("Identifier")),
                "type": sh.prop(sh.t.optional(sh.t.component("Type"))),
                "expression": sh.prop(sh.t.optional(sh.t.component("Expression"))),
            })),
        }))),

        "String Literal": sh.module_(sh.t.group({
            "delimiter": sh.prop(sh.t.state({
                "quote": sh.toption(sh.t.nothing()),
                "apostrophe": sh.toption(sh.t.nothing()),
            })),
            "value": sh.prop(sh.t.text_global("text"))
        })),

        "Type": sh.module_(sh.t.state({
            "boolean": sh.toption(sh.t.nothing()),
            "function": sh.toption(sh.t.group({
                "declaration": sh.prop(sh.t.component("Function Declaration")),
                "return": sh.prop(sh.t.component("Type")),
            })),
            "literal type": sh.toption(sh.t.component("String Literal")),
            "never": sh.toption(sh.t.nothing()),
            "null": sh.toption(sh.t.nothing()),
            "number": sh.toption(sh.t.nothing()),
            "string": sh.toption(sh.t.nothing()),
            "tuple": sh.toption(sh.t.group({
                "readonly": sh.prop(sh.t.simple("boolean")),
                "elements": sh.prop(sh.t.list(sh.t.component("Type"))),
            })),
            "type literal": sh.toption(sh.t.group({
                "properties": sh.prop(sh.t.list(sh.t.group({
                    "key": sh.prop(sh.t.state({
                        "identifier": sh.toption(sh.t.component("Identifier")),
                        "string literal": sh.toption(sh.t.component("String Literal")),
                    })),
                    "readonly": sh.prop(sh.t.simple("boolean")),
                    "type": sh.prop(sh.t.component("Type")),
                }))),
            })),
            "type reference": sh.toption(sh.t.group({
                "start": sh.prop(sh.t.component("Identifier")),
                "tail": sh.prop(sh.t.list(sh.t.component("Identifier"))),
                "type arguments": sh.prop(sh.t.list(sh.t.component("Type"))),
            })),
            "undefined": sh.toption(sh.t.nothing()),
            "union": sh.toption(sh.t.list(sh.t.component("Type"))),
            "void": sh.toption(sh.t.nothing()),
        })),

    }
)


