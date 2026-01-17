import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    text,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Diagnostic Severity": type(t.state_group({
            "error": tstate(t.group({})),
            "warning": tstate(t.group({})),
            "information": tstate(t.group({})),
            "hint": tstate(t.group({})),
        })),

        "Position": type(t.group({
            "line": prop(t.number_local(n.natural())),
            "character": prop(t.number_local(n.natural())),
        })),

        "Range": type(t.group({
            "start": prop(t.component("Position")),
            "end": prop(t.component("Position")),
        })),

        "Diagnostic": type(t.group({
            "severity": prop(t.component("Diagnostic Severity")),
            "range": prop(t.component("Range")),
            "message": prop(t.text_local(text('single line'))),
            "related information": prop(t.optional(t.list(t.group({
                "location": prop(t.group({
                    "file path": prop(t.text_local(text('single line'))),
                    "range": prop(t.component("Range")),
                })),
                "message": prop(t.text_local(text('single line'))),
            })))),
        })),

        "Diagnostics": type(t.list(t.component("Diagnostic"))),

        "Document Data": type(t.group({
            "file path": prop(t.text_local(text('single line'))),
            "content": prop(t.text_local(text('multi line'))),
        })),

        "Hover Texts": type(t.list(t.text_local(text('single line')))),

        "Optional Hover Texts": type(t.optional(t.component("Hover Texts"))),

        "On Hover Result": type(t.group({
            "contents": prop(t.group({
                "hover texts": prop(t.component("Optional Hover Texts")),
            })),
        })),

        "Completion Items": type(t.list(t.group({
            "label": prop(t.text_local(text('single line'))),
            "insert text": prop(t.text_local(text('single line'))),
            "documentation": prop(t.text_local(text('multi line'))),
        }))),

        "Optional Completion Items": type(t.optional(t.component("Completion Items"))),

        "On Completion Result": type(t.group({
            "completion items": prop(t.component("Completion Items")),
        })),

        "On Validate Document Result": type(t.group({
            "diagnostics": prop(t.component("Diagnostics")),
        })),

        "Convert To JSON Parameters": type(t.group({
            "content": prop(t.text_local(text('multi line'))),
        })),

        "Seal Parameters": type(t.group({
            "content": prop(t.text_local(text('multi line'))),
        })),

        "On Completion Parameters": type(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "file path": prop(t.text_local(text('single line'))),
            "position": prop(t.component("Position")),
            "indent": prop(t.text_local(text('single line'))),
        })),

        "On Hover Parameters": type(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "file path": prop(t.text_local(text('single line'))),
            "position": prop(t.component("Position")),
        })),

        "Validate Document Parameters": type(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "file path": prop(t.text_local(text('single line'))),
            "tab size": prop(t.number_local(n.natural())),
        })),
    }
)