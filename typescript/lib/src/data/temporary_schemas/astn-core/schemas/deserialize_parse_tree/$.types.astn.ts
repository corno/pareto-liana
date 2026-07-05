
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {

        "Error": sh.module_(sh.t.group({
            "type": sh.prop(sh.t.state({
                "lexer": sh.toption(sh.t.component("Lexer Error")),
                "parser": sh.toption(sh.t.component("Parser Error")),
            })),
        })),

        "Lexer Error": sh.module_(sh.t.group({
            "range": sh.prop(sh.t.component_external("location", "Range")),
            "expected": sh.prop(sh.t.state({
                "no end of line in text": sh.toption(sh.t.nothing()),
                "escape character": sh.toption(sh.t.group({
                    "found": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                })),
                "unicode character": sh.toption(sh.t.group({
                    "found": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                })),
                "block comment termination": sh.toption(sh.t.nothing()),
                "text termination": sh.toption(sh.t.nothing()),
            }))
        })),

        "Parser Error": sh.module_(sh.t.group({
            "expected": sh.prop(sh.t.list(sh.t.component("Expected"))),
            "cause": sh.prop(sh.t.state({
                "missing token": sh.toption(sh.t.group({
                    "end": sh.prop(sh.t.component_external("location", "Location")),
                })),
                "unexpected token": sh.toption(sh.t.group({
                    "found": sh.prop(sh.t.component_external("token", "Annotated Token")),
                })),
            })),
        })),

        "Expected": sh.module_(sh.t.state({
            "a text value": sh.toption(sh.t.nothing()),
            "any value": sh.toption(sh.t.nothing()),
            "!": sh.toption(sh.t.nothing()),
            ">": sh.toption(sh.t.nothing()),
            "}": sh.toption(sh.t.nothing()),
            "@": sh.toption(sh.t.nothing()),
            ",": sh.toption(sh.t.nothing()),
            ":": sh.toption(sh.t.nothing()),
            ")": sh.toption(sh.t.nothing()),
            "]": sh.toption(sh.t.nothing()),
            "#": sh.toption(sh.t.nothing()),
        })),

        "Parameters": sh.module_(sh.t.group({
            "tab size": sh.prop(sh.t.simple("Natural")),
        })),

    }
)