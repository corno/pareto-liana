import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Tokenizer Result": type(t.group({
            "leading trivia": prop(t.component("Trivia")),
            "tokens": prop(t.list(t.component("Annotated Token"))),
            "end": prop(t.component_external("location", "Location")),
        })),

        "Annotated Token": type(t.group({
            "start": prop(t.component_external("location", "Location")),
            "type": prop(t.component("Token Type")),
            "end": prop(t.component_external("location", "Location")),
            "trailing trivia": prop(t.component("Trivia")),
        })),

        "Token Type": type(t.state({
            "!": tstate(t.nothing()), //header

            "@": tstate(t.nothing()), //include
            ":": tstate(t.nothing()), //colon
            "#": tstate(t.nothing()), //missing data

            //concrete values
            "{": tstate(t.nothing()), //dictionary open
            "}": tstate(t.nothing()), //dictionary close

            "[": tstate(t.nothing()), //list open
            "]": tstate(t.nothing()), //list close

            "(": tstate(t.nothing()), //verbose group open
            ")": tstate(t.nothing()), //verbose group close
            "<": tstate(t.nothing()), //concise group open
            ">": tstate(t.nothing()), //concise group close

            "~": tstate(t.nothing()), //nothing / not set
            "*": tstate(t.nothing()), //set

            "|": tstate(t.nothing()), //state

            "text": tstate(t.group({
                "value": prop(t.component("Delimited Text")),
                "type": prop(t.component("Text Type")),
            })),
        })),

        "Delimited Text": type(t.text_local(text('single line'))),

        "Whitespace": type(t.group({
            "range": prop(t.component_external("location", "Range")),
            "value": prop(t.text_local(text('single line'))),
        })),
        
        "Trivia": type(t.group({
            "leading whitespace": prop(t.component("Whitespace")),
            "comments": prop(t.list(t.group({
                "type": prop(t.state({
                    "line": tstate(t.nothing()),
                    "block": tstate(t.nothing()),
                })),
                "content": prop(t.text_local(text('single line'))),
                "range": prop(t.component_external("location", "Range")),
                "trailing whitespace": prop(t.component("Whitespace")),
            }))),
        })),

        "Text Type": type(t.state({
            "quoted": tstate(t.nothing()),
            "apostrophed": tstate(t.nothing()),
            "undelimited": tstate(t.nothing()),
            "backticked": tstate(t.nothing()),
        })),
    }
)