import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    text,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Array Definition": module_(t.group({
            "type": prop(t.state({
                "list": toption(t.component_cyclic("Definition"))
                //FIXME concise group
            }))
        })),
        "Boolean Definition": module_(t.nothing()),
        "Null Definition": module_(t.nothing()),
        "Number Definition": module_(t.nothing()),
        "Object Definition": module_(t.group({
            "type": prop(t.state({
                "verbose group": toption(t.group({
                    "properties": prop(t.dictionary(t.group({
                        "definition": prop(t.component_cyclic("Definition")),
                        "optional": prop(t.boolean()),
                    }))),
                })),
                "dictionary": toption(t.component_cyclic("Definition")),
            })),
        })),
        "String Definition": module_(t.state({
            "any": toption(t.nothing()),
            "enum": toption(t.dictionary(t.nothing())),
        })),
        "Definition": module_(t.state({
            "any": toption(t.nothing()),
            "any of": toption(t.group({
                "array": prop(t.optional(t.component("Array Definition"))),
                "boolean": prop(t.optional(t.component("Boolean Definition"))),
                "null": prop(t.optional(t.component("Null Definition"))),
                "number": prop(t.optional(t.component("Number Definition"))),
                "object": prop(t.optional(t.component("Object Definition"))),
                "string": prop(t.optional(t.component("String Definition"))),

                "else": prop(t.optional(t.text_local(text("single line")))),//reference to a definition
            })),
            "definition reference": toption(t.text_local(text("single line"))),

            "array": toption(t.component("Array Definition")),
            "boolean": toption(t.component("Boolean Definition")),
            "null": toption(t.component("Null Definition")),
            "number": toption(t.component("Number Definition")),
            "object": toption(t.component("Object Definition")),
            "string": toption(t.component("String Definition")),
        })),
        "Schema": module_(t.group({
            "definitions": prop(t.dictionary(t.component("Definition"))),
            "root": prop(t.text_local(text("single line"))),
        })),

        "Error": module_(t.group({
            "path": prop(t.text_local(text("single line"))),
            "type": prop(t.state({
                "not the right type": toption(t.group({
                    "expected": prop(t.component("Value Type")),
                    "actual": prop(t.component("Value Type")),
                })),
                "type not allowed": toption(t.group({
                    "type": prop(t.component("Value Type")),
                })),
                "missing property": toption(t.text_local(text("single line"))),
                "superfluous property": toption(t.group({
                    "name": prop(t.text_local(text("single line"))),
                    "type": prop(t.component("Value Type")),
                })),
            })),
        })),

        "Value Type": module_(t.state({
            "array": toption(t.nothing()),
            "boolean": toption(t.nothing()),
            "null": toption(t.nothing()),
            "number": toption(t.nothing()),
            "object": toption(t.nothing()),
            "string": toption(t.nothing()),
        })),
    }
)


