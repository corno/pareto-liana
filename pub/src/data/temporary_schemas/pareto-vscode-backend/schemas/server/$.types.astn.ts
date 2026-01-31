import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    text,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Diagnostic Severity": module_(t.state({
            "error": toption(t.group({})),
            "warning": toption(t.group({})),
            "information": toption(t.group({})),
            "hint": toption(t.group({})),
        })),

        "Position": module_(t.group({
            "line": prop(t.number_local(n.natural(null))),
            "character": prop(t.number_local(n.natural(null))),
        })),

        "Range": module_(t.group({
            "start": prop(t.component("Position")),
            "end": prop(t.component("Position")),
        })),

        "Diagnostic": module_(t.group({
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

        "Diagnostics": module_(t.list(t.component("Diagnostic"))),

        "Document Data": module_(t.group({
            "file path": prop(t.text_local(text('single line'))),
            "content": prop(t.text_local(text('multi line'))),
        })),

        "Hover Texts": module_(t.list(t.text_local(text('single line')))),

        "Optional Hover Texts": module_(t.optional(t.component("Hover Texts"))),

        "On Hover Result": module_(t.group({
            "contents": prop(t.group({
                "hover texts": prop(t.component("Optional Hover Texts")),
            })),
        })),

        "Completion Items": module_(t.list(t.group({
            "label": prop(t.text_local(text('single line'))),
            "insert text": prop(t.text_local(text('single line'))),
            "documentation": prop(t.text_local(text('multi line'))),
        }))),

        "Optional Completion Items": module_(t.optional(t.component("Completion Items"))),

        "On Completion Result": module_(t.group({
            "completion items": prop(t.component("Completion Items")),
        })),

        "On Validate Document Result": module_(t.group({
            "diagnostics": prop(t.component("Diagnostics")),
        })),

        "Convert To JSON Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
        })),

        "Seal Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
        })),

        "On Completion Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "file path": prop(t.text_local(text('single line'))),
            "position": prop(t.component("Position")),
            "indent": prop(t.text_local(text('single line'))),
        })),

        "On Hover Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "file path": prop(t.text_local(text('single line'))),
            "position": prop(t.component("Position")),
        })),

        "Validate Document Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "file path": prop(t.text_local(text('single line'))),
            "tab size": prop(t.number_local(n.natural(null))),
        })),
    }
)