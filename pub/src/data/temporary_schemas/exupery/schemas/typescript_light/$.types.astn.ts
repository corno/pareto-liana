import * as _pi from 'pareto-core-interface'

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
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Directory": type(t.dictionary(
            t.state_group({
                "file": tstate(t.group({
                    "statements": prop(t.component("Statements"))
                })),
                "directory": tstate(t.component_cyclic("Directory")),
            })
        )),

        "Statements": type(t.list(t.state_group({
            "import": tstate(t.group({
                "type": prop(t.state_group({
                    "namespace": tstate(t.text_local(text('single line'))),
                    "named": tstate(t.group({
                        "specifiers": prop(t.list(t.group({
                            "name": prop(t.text_local(text('single line'))),
                            "as": prop(t.optional(t.text_local(text('single line')))),
                        }))),
                    })),
                })),
                "from": prop(t.text_local(text('single line'))),
            })),
            "export": tstate(t.group({
                "type": prop(t.state_group({
                    "named exports": tstate(t.group({
                        "specifiers": prop(t.list(t.group({
                            "name": prop(t.text_local(text('single line'))),
                            "as": prop(t.optional(t.text_local(text('single line')))),
                        }))),
                        "from": prop(t.optional(t.text_local(text('single line')))),
                    })),
                })),
            })),
            "module declaration": tstate(t.group({ //namespace
                "export": prop(t.boolean()),
                "name": prop(t.text_local(text('single line'))),
                "block": prop(t.component_cyclic("Statements")),
            })),
            "type alias declaration": tstate(t.group({
                "export": prop(t.boolean()),
                "name": prop(t.text_local(text('single line'))),
                "parameters": prop(t.list(t.text_local(text('single line')))),
                "type": prop(t.component("Type")),
            })),
            "variable": tstate(t.group({
                "export": prop(t.boolean()),
                "const": prop(t.boolean()),
                "name": prop(t.text_local(text('single line'))),
                "type": prop(t.optional(t.component_cyclic("Type"))),
                "expression": prop(t.optional(t.component("Expression"))),
            })),
            "raw": tstate(t.component("Group")),
        }))),

        "Type": type(t.state_group({
            "boolean": tstate(t.nothing()),
            "function": tstate(t.group({
                "type parameters": prop(t.list(t.text_local(text('single line')))),
                "parameters": prop(t.list(t.group({
                    "name": prop(t.text_local(text('single line'))),
                    "type": prop(t.optional(t.component_cyclic("Type"))),
                }))),
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
                "start": prop(t.text_local(text('single line'))),
                "tail": prop(t.list(t.text_local(text('single line')))),
                "type arguments": prop(t.list(t.component_cyclic("Type"))),
            })),
            "union": tstate(t.list(t.component_cyclic("Type"))),
            "void": tstate(t.nothing()),
        })),

        "Expression": type(t.state_group({
            "raw": tstate(t.component("Block Part")),
            "number literal": tstate(t.number_local(n.approximation(10))),
            "true": tstate(t.nothing()),
            "false": tstate(t.nothing()),
            "null": tstate(t.nothing()),
            "string literal": tstate(t.component("String Literal")),
            "object literal": tstate(t.group({
                "properties": prop(t.dictionary(t.component_cyclic("Expression"))),
            })),
            "array literal": tstate(t.list(t.component_cyclic("Expression"))),
            "arrow function": tstate(t.group({
                "parameters": prop(t.list(t.group({
                    "name": prop(t.text_local(text('single line'))),
                    "type": prop(t.optional(t.component_cyclic("Type"))),
                }))),
                "return type": prop(t.optional(t.component_cyclic("Type"))),
                "type": prop(t.state_group({
                    "block": tstate(t.component_cyclic("Statements")),
                    "expression": tstate(t.component_cyclic("Expression")),
                })),
            })),
            "call": tstate(t.group({
                "function selection": prop(t.component_cyclic("Expression")),
                "arguments": prop(t.list(t.component_cyclic("Expression"))),
            }))

        })),

        "String Literal": type(t.group({
            "delimiter": prop(t.state_group({
                "quote": tstate(t.nothing()),
                "apostrophe": tstate(t.nothing()),
            })),
            "value": prop(t.text_local(text('single line')))
        })),

        "Group": type(t.list(t.component("Group Part"))),

        "Group Part": type(t.state_group({
            "nested block": tstate(t.component("Block")),
            "block": tstate(t.text_global("Output")),
            "sub group": tstate(t.component_cyclic("Group")),
            "optional": tstate(t.optional(t.component_cyclic("Group Part"))),
            "nothing": tstate(t.nothing()),
        })),

        "Block": type(t.list(t.component("Block Part"))),

        "Block Part": type(t.state_group({
            "snippet": tstate(t.text_global("Output")),
            "indent": tstate(t.component_cyclic("Group")),
            "sub block": tstate(t.component_cyclic("Block")),
            "optional": tstate(t.optional(t.component_cyclic("Block Part"))),
            "nothing": tstate(t.nothing()),
        })),

    }
)


