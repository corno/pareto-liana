

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
        "Document": module_(t.group({
            "imports": prop(t.dictionary(t.component("Document"))),
            "definitions": prop(t.component("Definitions")),
            "root": prop(t.text_global("temp_ref")),
        })),

        "Definitions": module_(t.dictionary(t.component("Schema"))),

        "Schema": module_(t.state({
            "any": toption(t.nothing()),
            "const": toption(t.component("Const Value")),
            "one of": toption(t.dictionary(t.component("Schema"))),
            "reference": toption(t.group({
                "document": prop(t.optional(t.text_global("temp_ref"))),
                "definition": prop(t.text_global("temp_ref")),
            })), //FIXME: reference to a definition
            "type constraint": toption(t.state({
                "single": toption(t.state({
                    "array": toption(t.component("Array")),
                    "boolean": toption(t.component("Boolean")),
                    "null": toption(t.component("Null")),
                    "number": toption(t.component("Number")),
                    "object": toption(t.component("Object")),
                    "string": toption(t.component("String")),
                })),
                "multiple": toption(t.group({
                    "array": prop(t.optional(t.component("Array"))),
                    "boolean": prop(t.optional(t.component("Boolean"))),
                    "null": prop(t.optional(t.component("Null"))),
                    "number": prop(t.optional(t.component("Number"))),
                    "object": prop(t.optional(t.component("Object"))),
                    "string": prop(t.optional(t.component("String"))),
                })),
            })),
        })),

        "Const Value": module_(t.state({
            "array": toption(t.list(t.component("Const Value"))),
            "boolean": toption(t.simple("boolean")),
            "null": toption(t.nothing()),
            "number": toption(t.simple("number")),
            "object": toption(t.dictionary(t.component("Const Value"))),
            "string": toption(t.text_global("string")),
        })),

        "Array": module_(t.group({
            "type": prop(t.state({
                "dynamic": toption(t.component("Schema")),
                "static": toption(t.group({
                    "properties": prop(t.dictionary(t.component("Schema"))),
                })),
            }))
        })),

        "Boolean": module_(t.nothing()),

        "Null": module_(t.nothing()),

        "Number": module_(t.nothing()),

        "Object": module_(t.group({
            "type": prop(t.state({
                "static": toption(t.component("Static Object")),
                "dynamic": toption(t.component("Schema")),
                "mixed": toption(t.group({
                    "static": prop(t.component("Static Object")),
                    "dynamic": prop(t.component("Schema")),
                })),
            })),
        })),

        "Static Object": module_(t.group({
            "properties": prop(t.dictionary(t.group({
                "schema": prop(t.component("Schema")),
                "optional": toption(t.simple("boolean")),
            }))),
        })),

        "String": module_(t.state({
            "any": toption(t.nothing()),
            "enum": toption(t.dictionary(t.nothing())),
        })),

    }
)


