

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema/manual"


export const $ = modules(
    {

        "Error": module_(t.group({
            "type": prop(t.state({
                "lexer": toption(t.component("Lexer Error")),
                "parser": toption(t.component("Parser Error")),
            })),
        })),

        "Lexer Error": module_(t.group({
            "range": prop(t.component_external("location", "Range")),
            "expected": prop(t.state({
                "no end of line in text": toption(t.nothing()),
                "escape character": toption(t.group({
                    "found": prop(t.optional(t.simple("Natural"))),
                })),
                "unicode character": toption(t.group({
                    "found": prop(t.optional(t.simple("Natural"))),
                })),
                "block comment termination": toption(t.nothing()),
                "text termination": toption(t.nothing()),
            }))
        })),

        "Parser Error": module_(t.group({
            "expected": prop(t.list(t.component("Expected"))),
            "cause": prop(t.state({
                "missing token": toption(t.group({
                    "end": prop(t.component_external("location", "Location")),
                })),
                "unexpected token": toption(t.group({
                    "found": prop(t.component_external("token", "Annotated Token")),
                })),
            })),
        })),

        "Expected": module_(t.state({
            "a text value": toption(t.nothing()),
            "any value": toption(t.nothing()),
            "!": toption(t.nothing()),
            ">": toption(t.nothing()),
            "}": toption(t.nothing()),
            "@": toption(t.nothing()),
            ",": toption(t.nothing()),
            ":": toption(t.nothing()),
            ")": toption(t.nothing()),
            "]": toption(t.nothing()),
            "#": toption(t.nothing()),
        })),

        "Parameters": module_(t.group({
            "tab size": prop(t.simple("Natural")),
        })),

    }
)