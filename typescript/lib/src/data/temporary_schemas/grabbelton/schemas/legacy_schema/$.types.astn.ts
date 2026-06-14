import * as pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    text,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "Array Definition": module_(t.component("Definition")),
        "Boolean Definition": module_(t.nothing()),
        "Null Definition": module_(t.nothing()),
        "Number Definition": module_(t.nothing()),
        "Object Definition": module_(t.group({
            "type": prop(t.state({
                "static": toption(t.group({
                    "properties": prop(t.dictionary(t.group({
                        "definition": prop(t.component("Definition")),
                        "optional": prop(t.simple("boolean")),
                    }))),
                })),
                "dynamic": toption(t.component("Definition")),
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

                "else": prop(t.optional(t.text_global("text"))),//reference to a definition
            })),
            "definition reference": toption(t.text_global("text")),

            "array": toption(t.component("Array Definition")),
            "boolean": toption(t.component("Boolean Definition")),
            "null": toption(t.component("Null Definition")),
            "number": toption(t.component("Number Definition")),
            "object": toption(t.component("Object Definition")),
            "string": toption(t.component("String Definition")),
        })),
        "Schema": module_(t.group({
            "definitions": prop(t.dictionary(t.component("Definition"))),
            "root": prop(t.text_global("text")),
        })),

        "Errors": module_(t.list(t.group({
            "path": prop(t.text_global("text")),
            "type": prop(t.state({
                "not the right type": toption(t.group({
                    "expected": prop(t.component("Value Type")),
                    "actual": prop(t.component("Value Type")),
                })),
                "type not allowed": toption(t.group({
                    "type": prop(t.component("Value Type")),
                })),
                "missing property": toption(t.text_global("text")),
                "superfluous property": toption(t.group({
                    "name": prop(t.text_global("text")),
                    "type": prop(t.component("Value Type")),
                })),
            })),
        }))),

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


