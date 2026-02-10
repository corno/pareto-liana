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
        "Position": module_(t.group({
            "line": prop(t.number_local(n.natural(null))),
            "character": prop(t.number_local(n.natural(null))),
        })),

        "Range": module_(t.group({
            "start": prop(t.component("Position")),
            "end": prop(t.component("Position")),
        })),

        "Format Options": module_(t.group({
            "insert spaces": prop(t.boolean()),
            "preserve delimiters": prop(t.boolean()),
            "preserve final newline state": prop(t.boolean()),
            "preserve commas": prop(t.boolean()),
            "indent string": prop(t.text_local(text('single line'))),
        })),

        "Text Edit": module_(t.state({
            "replace": toption(t.component("Replace")),
            "delete": toption(t.group({
                "range": prop(t.component("Range")),
            })),
            "insert": toption(t.group({
                "location": prop(t.component("Position")),
                "text": prop(t.text_local(text('multi line'))),
            })),
        })),

        "Replace": module_(t.group({
            "range": prop(t.component("Range")),
            "text": prop(t.text_local(text('multi line'))),
        })),

        "Format Result": module_(t.list(t.component("Text Edit"))),

        "Format Error": module_(t.group({
            "message": prop(t.text_local(text('single line'))),
        })),

        "Format Parameters": module_(t.group({
            "options": prop(t.component("Format Options")),
        })),

        "Sort Alphabetically Parameters": module_(t.group({
            "position": prop(t.component("Position")),
        })),
    }
)


