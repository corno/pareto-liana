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


export const $ = modules(
    {

        "Tokenizer Result": module_(t.group({
            "leading trivia": prop(t.component("Trivia")),
            "tokens": prop(t.list(t.component("Annotated Token"))),
            "end": prop(t.component_external("location", "Location")),
        })),

        "Annotated Token": module_(t.group({
            "start": prop(t.component_external("location", "Location")),
            "type": prop(t.state({
                "!": toption(t.nothing()), //header

                "@": toption(t.nothing()), //include
                ":": toption(t.nothing()), //colon
                "#": toption(t.nothing()), //missing data

                //concrete values
                "{": toption(t.nothing()), //dictionary open
                "}": toption(t.nothing()), //dictionary close

                "[": toption(t.nothing()), //list open
                "]": toption(t.nothing()), //list close

                "(": toption(t.nothing()), //verbose group open
                ")": toption(t.nothing()), //verbose group close
                "<": toption(t.nothing()), //concise group open
                ">": toption(t.nothing()), //concise group close

                "~": toption(t.nothing()), //nothing
                "_": toption(t.nothing()), //not set
                "*": toption(t.nothing()), //set

                "|": toption(t.nothing()), //state
                "text": toption(t.component("Text")),
            })),
            "end": prop(t.component_external("location", "Location")),
            "trailing trivia": prop(t.component("Trivia")),
        })),

        "Whitespace": module_(t.optional(t.group({
            "range": prop(t.component_external("location", "Range")),
            "value": prop(t.text_global("text")),
        }))),

        "Trivia": module_(t.group({
            "leading whitespace": prop(t.component("Whitespace")),
            "comments": prop(t.list(t.group({
                "type": prop(t.state({
                    "line": toption(t.nothing()),
                    "block": toption(t.nothing()),
                })),
                "content": prop(t.text_global("text")),
                "range": prop(t.component_external("location", "Range")),
                "trailing whitespace": prop(t.component("Whitespace")),
            }))),
        })),

        "Text": module_(t.group({
            "value": prop(t.text_global("text")),
            "type": prop(t.component("Text Type")),
        })),

        "Text Type": module_(t.state({
            "quoted": toption(t.nothing()),
            "apostrophed": toption(t.nothing()),
            "undelimited": toption(t.nothing()),
            "backticked": toption(t.nothing()),
        })),
    }
)