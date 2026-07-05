
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Document": sh.module_(sh.t.group({
            "imports": sh.prop(sh.t.dictionary(sh.t.component("Document"))),
            "definitions": sh.prop(sh.t.component("Definitions")),
            "root": sh.prop(sh.t.text_global("temp_ref")),
        })),

        "Definitions": sh.module_(sh.t.dictionary(sh.t.component("Schema"))),

        "Schema": sh.module_(sh.t.state({
            "any": sh.toption(sh.t.nothing()),
            "const": sh.toption(sh.t.component("Const Value")),
            "one of": sh.toption(sh.t.dictionary(sh.t.component("Schema"))),
            "reference": sh.toption(sh.t.group({
                "document": sh.prop(sh.t.optional(sh.t.text_global("temp_ref"))),
                "definition": sh.prop(sh.t.text_global("temp_ref")),
            })), //FIXME: reference to a definition
            "type constraint": sh.toption(sh.t.state({
                "single": sh.toption(sh.t.state({
                    "array": sh.toption(sh.t.component("Array")),
                    "boolean": sh.toption(sh.t.component("Boolean")),
                    "null": sh.toption(sh.t.component("Null")),
                    "number": sh.toption(sh.t.component("Number")),
                    "object": sh.toption(sh.t.component("Object")),
                    "string": sh.toption(sh.t.component("String")),
                })),
                "multiple": sh.toption(sh.t.group({
                    "array": sh.prop(sh.t.optional(sh.t.component("Array"))),
                    "boolean": sh.prop(sh.t.optional(sh.t.component("Boolean"))),
                    "null": sh.prop(sh.t.optional(sh.t.component("Null"))),
                    "number": sh.prop(sh.t.optional(sh.t.component("Number"))),
                    "object": sh.prop(sh.t.optional(sh.t.component("Object"))),
                    "string": sh.prop(sh.t.optional(sh.t.component("String"))),
                })),
            })),
        })),

        "Const Value": sh.module_(sh.t.state({
            "array": sh.toption(sh.t.list(sh.t.component("Const Value"))),
            "boolean": sh.toption(sh.t.simple("boolean")),
            "null": sh.toption(sh.t.nothing()),
            "number": sh.toption(sh.t.simple("number")),
            "object": sh.toption(sh.t.dictionary(sh.t.component("Const Value"))),
            "string": sh.toption(sh.t.text_global("string")),
        })),

        "Array": sh.module_(sh.t.group({
            "type": sh.prop(sh.t.state({
                "dynamic": sh.toption(sh.t.component("Schema")),
                "static": sh.toption(sh.t.group({
                    "properties": sh.prop(sh.t.dictionary(sh.t.component("Schema"))),
                })),
            }))
        })),

        "Boolean": sh.module_(sh.t.nothing()),

        "Null": sh.module_(sh.t.nothing()),

        "Number": sh.module_(sh.t.nothing()),

        "Object": sh.module_(sh.t.group({
            "type": sh.prop(sh.t.state({
                "static": sh.toption(sh.t.component("Static Object")),
                "dynamic": sh.toption(sh.t.component("Schema")),
                "mixed": sh.toption(sh.t.group({
                    "static": sh.prop(sh.t.component("Static Object")),
                    "dynamic": sh.prop(sh.t.component("Schema")),
                })),
            })),
        })),

        "Static Object": sh.module_(sh.t.group({
            "properties": sh.prop(sh.t.dictionary(sh.t.group({
                "schema": sh.prop(sh.t.component("Schema")),
                "optional": sh.toption(sh.t.simple("boolean")),
            }))),
        })),

        "String": sh.module_(sh.t.state({
            "any": sh.toption(sh.t.nothing()),
            "enum": sh.toption(sh.t.dictionary(sh.t.nothing())),
        })),

    }
)


