import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    text,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Array Definition": type(t.group({
            "type": prop(t.state_group({
                "list": tstate(t.component_cyclic("Definition"))
                //FIXME concise group
            }))
        })),
        "Boolean Definition": type(t.nothing()),
        "Null Definition": type(t.nothing()),
        "Number Definition": type(t.nothing()),
        "Object Definition": type(t.group({
            "type": prop(t.state_group({
                "verbose group": tstate(t.group({
                    "properties": prop(t.dictionary(t.group({
                        "definition": prop(t.component_cyclic("Definition")),
                        "optional": prop(t.boolean()),
                    }))),
                })),
                "dictionary": tstate(t.component_cyclic("Definition")),
            })),
        })),
        "String Definition": type(t.state_group({
            "any": tstate(t.nothing()),
            "enum": tstate(t.dictionary(t.nothing())),
        })),
        "Definition": type(t.state_group({
            "any": tstate(t.nothing()),
            "any of": tstate(t.group({
                "array": prop(t.optional(t.component("Array Definition"))),
                "boolean": prop(t.optional(t.component("Boolean Definition"))),
                "null": prop(t.optional(t.component("Null Definition"))),
                "number": prop(t.optional(t.component("Number Definition"))),
                "object": prop(t.optional(t.component("Object Definition"))),
                "string": prop(t.optional(t.component("String Definition"))),

                "else": prop(t.optional(t.text_local(text("single line")))),//reference to a definition
            })),
            "definition reference": tstate(t.text_local(text("single line"))),

            "array": tstate(t.component("Array Definition")),
            "boolean": tstate(t.component("Boolean Definition")),
            "null": tstate(t.component("Null Definition")),
            "number": tstate(t.component("Number Definition")),
            "object": tstate(t.component("Object Definition")),
            "string": tstate(t.component("String Definition")),
        })),
        "Schema": type(t.group({
            "definitions": prop(t.dictionary(t.component("Definition"))),
            "root": prop(t.text_local(text("single line"))),
        })),

        "Error": type(t.group({
            "path": prop(t.text_local(text("single line"))),
            "type": prop(t.state_group({
                "not the right type": tstate(t.group({
                    "expected": prop(t.component("Value Type")),
                    "actual": prop(t.component("Value Type")),
                })),
                "type not allowed": tstate(t.group({
                    "type": prop(t.component("Value Type")),
                })),
                "missing property": tstate(t.text_local(text("single line"))),
                "superfluous property": tstate(t.group({
                    "name": prop(t.text_local(text("single line"))),
                    "type": prop(t.component("Value Type")),
                })),
            })),
        })),

        "Value Type": type(t.state_group({
            "array": tstate(t.nothing()),
            "boolean": tstate(t.nothing()),
            "null": tstate(t.nothing()),
            "number": tstate(t.nothing()),
            "object": tstate(t.nothing()),
            "string": tstate(t.nothing()),
        })),
    }
)


