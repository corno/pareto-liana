
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Array Definition": sh.module_(sh.t.component("Definition")),
        "Boolean Definition": sh.module_(sh.t.nothing()),
        "Null Definition": sh.module_(sh.t.nothing()),
        "Number Definition": sh.module_(sh.t.nothing()),
        "Object Definition": sh.module_(sh.t.group({
            "type": sh.prop(sh.t.state({
                "static": sh.toption(sh.t.group({
                    "properties": sh.prop(sh.t.dictionary(sh.t.group({
                        "definition": sh.prop(sh.t.component("Definition")),
                        "optional": sh.prop(sh.t.simple("boolean")),
                    }))),
                })),
                "dynamic": sh.toption(sh.t.component("Definition")),
            })),
        })),
        "String Definition": sh.module_(sh.t.state({
            "any": sh.toption(sh.t.nothing()),
            "enum": sh.toption(sh.t.dictionary(sh.t.nothing())),
        })),
        "Definition": sh.module_(sh.t.state({
            "any": sh.toption(sh.t.nothing()),
            "any of": sh.toption(sh.t.group({
                "array": sh.prop(sh.t.optional(sh.t.component("Array Definition"))),
                "boolean": sh.prop(sh.t.optional(sh.t.component("Boolean Definition"))),
                "null": sh.prop(sh.t.optional(sh.t.component("Null Definition"))),
                "number": sh.prop(sh.t.optional(sh.t.component("Number Definition"))),
                "object": sh.prop(sh.t.optional(sh.t.component("Object Definition"))),
                "string": sh.prop(sh.t.optional(sh.t.component("String Definition"))),

                "else": sh.prop(sh.t.optional(sh.t.text_global("text"))),//reference to a definition
            })),
            "definition reference": sh.toption(sh.t.text_global("text")),

            "array": sh.toption(sh.t.component("Array Definition")),
            "boolean": sh.toption(sh.t.component("Boolean Definition")),
            "null": sh.toption(sh.t.component("Null Definition")),
            "number": sh.toption(sh.t.component("Number Definition")),
            "object": sh.toption(sh.t.component("Object Definition")),
            "string": sh.toption(sh.t.component("String Definition")),
        })),
        "Schema": sh.module_(sh.t.group({
            "definitions": sh.prop(sh.t.dictionary(sh.t.component("Definition"))),
            "root": sh.prop(sh.t.text_global("text")),
        })),

        "Errors": sh.module_(sh.t.list(sh.t.group({
            "path": sh.prop(sh.t.text_global("text")),
            "type": sh.prop(sh.t.state({
                "not the right type": sh.toption(sh.t.group({
                    "expected": sh.prop(sh.t.component("Value Type")),
                    "actual": sh.prop(sh.t.component("Value Type")),
                })),
                "type not allowed": sh.toption(sh.t.group({
                    "type": sh.prop(sh.t.component("Value Type")),
                })),
                "missing property": sh.toption(sh.t.text_global("text")),
                "superfluous property": sh.toption(sh.t.group({
                    "name": sh.prop(sh.t.text_global("text")),
                    "type": sh.prop(sh.t.component("Value Type")),
                })),
            })),
        }))),

        "Value Type": sh.module_(sh.t.state({
            "array": sh.toption(sh.t.nothing()),
            "boolean": sh.toption(sh.t.nothing()),
            "null": sh.toption(sh.t.nothing()),
            "number": sh.toption(sh.t.nothing()),
            "object": sh.toption(sh.t.nothing()),
            "string": sh.toption(sh.t.nothing()),
        })),
    }
)


