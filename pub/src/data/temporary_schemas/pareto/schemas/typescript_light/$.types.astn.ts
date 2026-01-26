import * as _pi from 'pareto-core/dist/interface'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Directory": type(t.dictionary(
            t.state({
                "file": tstate(t.group({
                    "statements": prop(t.component("Statements"))
                })),
                "directory": tstate(t.component_cyclic("Directory")),
            })
        )),

        "Statements": type(t.list(t.state({
            "block": tstate(t.component_cyclic("Statements")),
            "export": tstate(t.group({
                "type": prop(t.state({
                    "named exports": tstate(t.group({
                        "specifiers": prop(t.list(t.group({
                            "name": prop(t.component("Identifier")),
                            "as": prop(t.optional(t.component("Identifier"))),
                        }))),
                        "from": prop(t.optional(t.text_local(text('single line')))),
                    })),
                })),
            })),
            "expression": tstate(t.component_cyclic("Expression")),
            "import": tstate(t.group({
                "type": prop(t.state({
                    "namespace": tstate(t.component("Identifier")),
                    "named": tstate(t.group({
                        "specifiers": prop(t.list(t.group({
                            "name": prop(t.component("Identifier")),
                            "as": prop(t.optional(t.component("Identifier"))),
                        }))),
                    })),
                })),
                "from": prop(t.text_local(text('single line'))),
            })),
            "module declaration": tstate(t.group({ //namespace
                "export": prop(t.boolean()),
                "name": prop(t.component("Identifier")),
                "block": prop(t.component_cyclic("Statements")),
            })),

            "return": tstate(t.optional(t.component_cyclic("Expression"))),
            "switch": tstate(t.group({
                "expression": prop(t.component_cyclic("Expression")),
                "clauses": prop(t.list(t.group({
                    "type": prop(t.state({
                        "case": tstate(t.component_cyclic("Expression")),
                        "default": tstate(t.nothing()),
                    })),
                    "statements": prop(t.component_cyclic("Statements")),
                }))),
            })),
            "type alias declaration": tstate(t.group({
                "export": prop(t.boolean()),
                "name": prop(t.component("Identifier")),
                "parameters": prop(t.list(t.component("Identifier"))),
                "type": prop(t.component("Type")),
            })),
            "variable": tstate(t.group({
                "export": prop(t.boolean()),
                "const": prop(t.boolean()),
                "name": prop(t.component("Identifier")),
                "type": prop(t.optional(t.component_cyclic("Type"))),
                "expression": prop(t.optional(t.component("Expression"))),
            })),
        }))),

        "Type": type(t.state({
            "boolean": tstate(t.nothing()),
            "function": tstate(t.group({
                "type parameters": prop(t.list(t.component_cyclic("Type"))),
                "parameters": prop(t.component("Function Parameters")),
                "return": prop(t.component_cyclic("Type")),
            })),
            "literal type": tstate(t.component("String Literal")),
            "null": tstate(t.nothing()),
            "number": tstate(t.nothing()),
            "string": tstate(t.nothing()),
            "tuple": tstate(t.group({
                "readonly": prop(t.boolean()),
                "elements": prop(t.list(t.component_cyclic("Type"))),
            })),
            "type literal": tstate(t.group({
                "properties": prop(t.dictionary(t.group({
                    "readonly": prop(t.boolean()),
                    "type": prop(t.component_cyclic("Type")),
                }))),
            })),
            "type reference": tstate(t.group({
                "start": prop(t.component("Identifier")),
                "tail": prop(t.list(t.component("Identifier"))),
                "type arguments": prop(t.list(t.component_cyclic("Type"))),
            })),
            "union": tstate(t.list(t.component_cyclic("Type"))),
            "void": tstate(t.nothing()),
        })),

        "Function Parameters": type(t.list(t.group({
            "name": prop(t.component("Identifier")),
            "type": prop(t.optional(t.component_cyclic("Type"))),
        }))),

        "Expression": type(t.state({
            "array literal": tstate(t.list(t.component_cyclic("Expression"))),
            "arrow function": tstate(t.group({
                "parameters": prop(t.component("Function Parameters")),
                "return type": prop(t.optional(t.component_cyclic("Type"))),
                "body": prop(t.state({
                    "block": tstate(t.component_cyclic("Statements")),
                    "expression": tstate(t.component_cyclic("Expression")),
                })),
            })),
            "assignment": tstate(t.group({
                "left": prop(t.component_cyclic("Expression")),
                "right": prop(t.component_cyclic("Expression")),
            })),
            "call": tstate(t.group({
                "function selection": prop(t.component_cyclic("Expression")),
                "arguments": prop(t.list(t.component_cyclic("Expression"))),
            })),
            "compare": tstate(t.group({
                "left": prop(t.component_cyclic("Expression")),
                "operator": prop(t.state({
                    "loosely equal": tstate(t.nothing()),
                    "strictly equal": tstate(t.nothing()),
                    "loosely not equal": tstate(t.nothing()),
                    "strictly not equal": tstate(t.nothing()),
                    "smaller than": tstate(t.nothing()),
                    "smaller than or equal": tstate(t.nothing()),
                    "greater than": tstate(t.nothing()),
                    "greater than or equal": tstate(t.nothing()),
                })),
                "right": prop(t.component_cyclic("Expression")),
            })),
            "conditional": tstate(t.group({
                "condition": prop(t.component_cyclic("Expression")),
                "if true": prop(t.component_cyclic("Expression")),
                "if false": prop(t.component_cyclic("Expression")),
            })),
            "element access": tstate(t.group({
                "collection": prop(t.component_cyclic("Expression")),
                "index": prop(t.component_cyclic("Expression")),
            })),

            "identifier": tstate(t.component("Identifier")),
            "false": tstate(t.nothing()),
            "null": tstate(t.nothing()),
            "number literal": tstate(t.number_local(n.approximation(10))),
            "object literal": tstate(t.group({
                "properties": prop(t.dictionary(t.component_cyclic("Expression"))),
            })),
            "parenthesized": tstate(t.component_cyclic("Expression")),
            "property access": tstate(t.group({
                "object": prop(t.component_cyclic("Expression")),
                "property": prop(t.component("Identifier")),
            })),
            "string literal": tstate(t.component("String Literal")),
            "true": tstate(t.nothing()),
            "unary operation": tstate(t.group({
                "operator": prop(t.state({
                    "negation": tstate(t.nothing()),
                    "logical not": tstate(t.nothing()),
                })),
                "operand": prop(t.component_cyclic("Expression")),
            })),
        })),

        "String Literal": type(t.group({
            "delimiter": prop(t.state({
                "quote": tstate(t.nothing()),
                "apostrophe": tstate(t.nothing()),
            })),
            "value": prop(t.text_local(text('single line')))
        })),

        "Identifier": type(t.group({
            "value": prop(t.text_local(text('single line')))
        })),

    }
)


