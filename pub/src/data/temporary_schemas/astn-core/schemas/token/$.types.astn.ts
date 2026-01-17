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

        "Tokenizer Result": type(t.group({
            "leading trivia": prop(t.component("Trivia")),
            "tokens": prop(t.list(t.component("Annotated Token"))),
            "end": prop(t.component("Location")),
        })),

        "Annotated Token": type(t.group({
            "start": prop(t.component("Location")),
            "type": prop(t.component("Token Type")),
            "end": prop(t.component("Location")),
            "trailing trivia": prop(t.component("Trivia")),
        })),

        "Token Type": type(t.state_group({
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

            "|": tstate(t.nothing()), //state group

            "text": tstate(t.group({
                "value": prop(t.component("Delimited Text")),
                "type": prop(t.component("Text Type")),
            })),
        })),

        "Delimited Text": type(t.text_local(text('single line'))),

        "Whitespace": type(t.group({
            "range": prop(t.component("Range")),
            "value": prop(t.text_local(text('single line'))),
        })),

        "Range": type(t.group({
            "start": prop(t.component("Location")),
            "end": prop(t.component("Location")),
        })),
        
        "Trivia": type(t.group({
            "leading whitespace": prop(t.component("Whitespace")),
            "comments": prop(t.list(t.group({
                "type": prop(t.state_group({
                    "line": tstate(t.nothing()),
                    "block": tstate(t.nothing()),
                })),
                "content": prop(t.text_local(text('single line'))),
                "range": prop(t.component("Range")),
                "trailing whitespace": prop(t.component("Whitespace")),
            }))),
        })),

        "Text Type": type(t.state_group({
            "quoted": tstate(t.nothing()),
            "apostrophed": tstate(t.nothing()),
            "undelimited": tstate(t.nothing()),
            "backticked": tstate(t.nothing()),
        })),

        "Location": type(t.group({
            "relative": prop(t.component("Relative Location")), //if at the end of the document, this is not set
            "absolute": prop(t.number_local(n.natural())),
        })),

        "Relative Location": type(t.group({
            "uri": prop(t.text_local(text('single line'))),
            "line": prop(t.number_local(n.natural())),
            "column": prop(t.number_local(n.natural())), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),
    }
)