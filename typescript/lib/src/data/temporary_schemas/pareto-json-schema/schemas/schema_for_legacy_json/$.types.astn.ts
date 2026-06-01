import * as _pi from 'pareto-core/dist/interface'

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

        "Schema": module_(t.group({
            "definitions": prop(t.dictionary(t.component("Value"))),
            "root": prop(t.text_global("text")), //FIXME: reference to a definition
        })),

        "Value": module_(t.state({
            "any": toption(t.nothing()),
            "any of": toption(t.group({
                "array": prop(t.optional(t.component("Array"))),
                "boolean": prop(t.optional(t.component("Boolean"))),
                "null": prop(t.optional(t.component("Null"))),
                "number": prop(t.optional(t.component("Number"))),
                "object": prop(t.optional(t.component("Object"))),
                "string": prop(t.optional(t.component("String"))),

                "else": prop(t.optional(t.text_global("text"))),//FIXME: reference to a definition
            })),
            "definition reference": toption(t.text_global("text")), //FIXME: reference to a definition

            "array": toption(t.component("Array")),
            "boolean": toption(t.component("Boolean")),
            "null": toption(t.component("Null")),
            "number": toption(t.component("Number")),
            "object": toption(t.component("Object")),
            "string": toption(t.component("String")),
        })),

        "Array": module_(t.group({
            "type": prop(t.state({
                "dynamic": toption(t.component("Value")),
                "static": toption(t.group({
                    "properties": prop(t.dictionary(t.component("Value"))),
                })),
            }))
        })),

        "Boolean": module_(t.nothing()),

        "Null": module_(t.nothing()),

        "Number": module_(t.nothing()),

        "Object": module_(t.group({
            "type": prop(t.state({
                "static": toption(t.component("Static Object")),
                "dynamic": toption(t.component("Value")),
                "mixed": toption(t.group({
                    "static": prop(t.component("Static Object")),
                    "dynamic": prop(t.component("Value")),
                })),
            })),
        })),

        "Static Object": module_(t.group({
            "properties": prop(t.dictionary(t.group({
                "definition": prop(t.component("Value")),
                "optional": prop(t.simple("boolean")),
            }))),
        })),

        "String": module_(t.state({
            "any": toption(t.nothing()),
            "enum": toption(t.dictionary(t.nothing())),
        })),

    }
)


