import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Directory": module_(t.dictionary(
            t.state({
                "file": toption(t.group({
                    "statements": prop(t.component("Statements"))
                })),
                "directory": toption(t.component_cyclic("Directory")),
            })
        )),

        "Block": module_(t.component_cyclic("Statements")),

        "Statements": module_(t.list(t.state({
            "block": toption(t.component_cyclic("Block")),
            "export": toption(t.group({
                "type": prop(t.state({
                    "named exports": toption(t.group({
                        "specifiers": prop(t.list(t.group({
                            "name": prop(t.component("Identifier")),
                            "as": prop(t.optional(t.component("Identifier"))),
                        }))),
                        "from": prop(t.optional(t.text_local(text('single line')))),
                    })),
                })),
            })),
            "expression": toption(t.component_cyclic("Expression")),
            "import": toption(t.group({
                "type": prop(t.state({
                    "namespace": toption(t.component("Identifier")),
                    "named": toption(t.group({
                        "specifiers": prop(t.list(t.group({
                            "name": prop(t.component("Identifier")),
                            "as": prop(t.optional(t.component("Identifier"))),
                        }))),
                    })),
                })),
                "from": prop(t.text_local(text('single line'))),
            })),
            "module declaration": toption(t.group({ //namespace
                "export": prop(t.boolean()),
                "name": prop(t.component("Identifier")),
                "block": prop(t.component_cyclic("Block")),
            })),

            "return": toption(t.optional(t.component_cyclic("Expression"))),
            "switch": toption(t.group({
                "expression": prop(t.component_cyclic("Expression")),
                "clauses": prop(t.list(t.group({
                    "type": prop(t.state({
                        "case": toption(t.component_cyclic("Expression")),
                        "default": toption(t.nothing()),
                    })),
                    "statements": prop(t.component_cyclic("Statements")),
                }))),
            })),
            "type alias declaration": toption(t.group({
                "export": prop(t.boolean()),
                "name": prop(t.component("Identifier")),
                "parameters": prop(t.list(t.component("Identifier"))),
                "type": prop(t.component("Type")),
            })),
            "variable": toption(t.group({
                "export": prop(t.boolean()),
                "const": prop(t.boolean()),
                "name": prop(t.component("Identifier")),
                "type": prop(t.optional(t.component_cyclic("Type"))),
                "expression": prop(t.optional(t.component("Expression"))),
            })),
        }))),

        "Type": module_(t.state({
            "boolean": toption(t.nothing()),
            "function": toption(t.group({
                "type parameters": prop(t.list(t.component_cyclic("Type"))),
                "parameters": prop(t.component("Function Parameters")),
                "return": prop(t.component_cyclic("Type")),
            })),
            "literal type": toption(t.component("String Literal")),
            "null": toption(t.nothing()),
            "number": toption(t.nothing()),
            "string": toption(t.nothing()),
            "tuple": toption(t.group({
                "readonly": prop(t.boolean()),
                "elements": prop(t.list(t.component_cyclic("Type"))),
            })),
            "type literal": toption(t.group({
                "properties": prop(t.dictionary(t.group({
                    "readonly": prop(t.boolean()),
                    "type": prop(t.component_cyclic("Type")),
                }))),
            })),
            "type reference": toption(t.group({
                "start": prop(t.component("Identifier")),
                "tail": prop(t.list(t.component("Identifier"))),
                "type arguments": prop(t.list(t.component_cyclic("Type"))),
            })),
            "union": toption(t.list(t.component_cyclic("Type"))),
            "void": toption(t.nothing()),
        })),

        "Function Parameters": module_(t.list(t.group({
            "name": prop(t.component("Identifier")),
            "type": prop(t.optional(t.component_cyclic("Type"))),
        }))),

        "Expression": module_(t.state({
            "array literal": toption(t.list(t.component_cyclic("Expression"))),
            "arrow function": toption(t.group({
                "parameters": prop(t.component("Function Parameters")),
                "return type": prop(t.optional(t.component_cyclic("Type"))),
                "body": prop(t.state({
                    "block": toption(t.component_cyclic("Block")),
                    "expression": toption(t.component_cyclic("Expression")),
                })),
            })),
            "assignment": toption(t.group({
                "left": prop(t.component_cyclic("Expression")),
                "right": prop(t.component_cyclic("Expression")),
            })),
            "call": toption(t.group({
                "function selection": prop(t.component_cyclic("Expression")),
                "arguments": prop(t.list(t.component_cyclic("Expression"))),
            })),
            "compare": toption(t.group({
                "left": prop(t.component_cyclic("Expression")),
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
                "right": prop(t.component_cyclic("Expression")),
            })),
            "conditional": toption(t.group({
                "condition": prop(t.component_cyclic("Expression")),
                "if true": prop(t.component_cyclic("Expression")),
                "if false": prop(t.component_cyclic("Expression")),
            })),
            "element access": toption(t.group({
                "collection": prop(t.component_cyclic("Expression")),
                "index": prop(t.component_cyclic("Expression")),
            })),

            "identifier": toption(t.component("Identifier")),
            "false": toption(t.nothing()),
            "null": toption(t.nothing()),
            "number literal": toption(t.number_local(n.approximation(10))),
            "object literal": toption(t.group({
                "properties": prop(t.dictionary(t.component_cyclic("Expression"))),
            })),
            "parenthesized": toption(t.component_cyclic("Expression")),
            "property access": toption(t.group({
                "object": prop(t.component_cyclic("Expression")),
                "property": prop(t.component("Identifier")),
            })),
            "string literal": toption(t.component("String Literal")),
            "true": toption(t.nothing()),
            "unary operation": toption(t.group({
                "operator": prop(t.state({
                    "negation": toption(t.nothing()),
                    "logical not": toption(t.nothing()),
                })),
                "operand": prop(t.component_cyclic("Expression")),
            })),
        })),

        "String Literal": module_(t.group({
            "delimiter": prop(t.state({
                "quote": toption(t.nothing()),
                "apostrophe": toption(t.nothing()),
            })),
            "value": prop(t.text_local(text('single line')))
        })),

        "Identifier": module_(t.group({
            "value": prop(t.text_local(text('single line')))
        })),

    }
)


