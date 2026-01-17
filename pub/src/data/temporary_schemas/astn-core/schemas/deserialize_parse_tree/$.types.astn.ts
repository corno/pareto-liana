import * as _pi from 'pareto-core-interface'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Error": type(t.group({
            "type": prop(t.state_group({
                "lexer": tstate(t.component("Lexer Error")),
                "parser": tstate(t.component("Parser Error")),
            })),
        })),

        "Lexer Error": type(t.state_group({
            "dangling slash": tstate(t.group({
                "range": prop(t.component_external("token", "Range")),
                "at end of input": prop(t.boolean()),
            })),
            "invalid unicode escape sequence": tstate(t.group({
                "range": prop(t.component_external("token", "Range")),
            })),
            "missing character after escape": tstate(t.group({
                "range": prop(t.component_external("token", "Range")),
            })),
            // "unexpected character": tstate(t.group({
            //     "character": prop(t.number_local(n.natural())),
            //     "location": prop(t.component_external("token", "Location")),
            // })),
            "unexpected control character": tstate(t.group({
                "character": prop(t.number_local(n.natural())),
                "location": prop(t.component_external("token", "Location")),
            })),
            "unexpected control character in text": tstate(t.group({
                "character": prop(t.number_local(n.natural())),
                "range": prop(t.component_external("token", "Range")),
            })),
            "unexpected end of line in delimited text": tstate(t.group({
                "range": prop(t.component_external("token", "Range")),
            })),
            "unknown escape character": tstate(t.group({
                "character": prop(t.number_local(n.natural())),
                "range": prop(t.component_external("token", "Range")),
            })),
            "unterminated block comment": tstate(t.group({
                "range": prop(t.component_external("token", "Range")),
            })),
            "unterminated text": tstate(t.group({
                "range": prop(t.component_external("token", "Range")),
            })),
            "unterminated unicode escape sequence": tstate(t.group({
                "range": prop(t.component_external("token", "Range")),
            })),
        })),

        "Parser Error": type(t.group({
            "expected": prop(t.list(t.component("Expected"))),
            "cause": prop(t.state_group({
                "missing token": tstate(t.nothing()),
                "unexpected token": tstate(t.group({
                    "found": prop(t.component_external("token", "Annotated Token")),
                })),
            })),
        })),

        "Expected": type(t.state_group({
            "a text value": tstate(t.nothing()),
            "any value": tstate(t.nothing()),
            "!": tstate(t.nothing()),
            ">": tstate(t.nothing()),
            "}": tstate(t.nothing()),
            "@": tstate(t.nothing()),
            ",": tstate(t.nothing()),
            ":": tstate(t.nothing()),
            ")": tstate(t.nothing()),
            "]": tstate(t.nothing()),
            "#": tstate(t.nothing()),
        }))

    }
)