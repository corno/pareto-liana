import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Error": module_(t.group({
            "type": prop(t.state({
                "lexer": toption(t.component("Lexer Error")),
                "parser": toption(t.component("Parser Error")),
            })),
        })),

        "Lexer Error": module_(t.group({
            "range": prop(t.component_external("location", "Range")),
            "type": prop(t.state({
                "dangling slash": toption(t.group({
                    "at end of input": prop(t.boolean()),
                })),
                "invalid unicode escape sequence": toption(t.nothing()),
                "missing character after escape": toption(t.nothing()),
                // "unexpected character": tstate(t.group({
                //     "character": prop(t.number_local(n.natural(null))),
                //     "location": prop(t.component_external("token", "Location")),
                // })),
                "unexpected control character": toption(t.group({
                    "character": prop(t.number_local(n.natural(null))),
                })),
                "unexpected control character in text": toption(t.group({
                    "character": prop(t.number_local(n.natural(null))),
                })),
                "unexpected end of line in delimited text": toption(t.nothing()),
                "unknown escape character": toption(t.group({
                    "character": prop(t.number_local(n.natural(null))),
                })),
                "unterminated block comment": toption(t.nothing()),
                "unterminated text": toption(t.nothing()),
                "unterminated unicode escape sequence": toption(t.nothing()),
                "unexpected": toption(t.group({
                    "expected": prop(t.list(t.state({
                        "end of block comment": toption(t.nothing()),
                        "end of delimited text": toption(t.nothing()),
                    })))
                }))
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
            "document resource identifier": prop(t.text_local(text('single line'))),
            "tab size": prop(t.number_local(n.natural(null))),
        })),

    }
)