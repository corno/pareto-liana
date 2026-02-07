import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    text,
    n,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Directory": module_(t.dictionary(
            t.component("Node")
        )),

        "Node": module_(t.state({
            "file": toption(t.component("Paragraph")),
            "directory": toption(t.component("Directory")),
        })),

        "Paragraph": module_(t.state({
            "composed": toption(t.list(t.component("Paragraph"))),
            "sentences": toption(t.list(t.component("Sentence"))),
            "optional": toption(t.optional(t.component("Paragraph"))),
            "nothing": toption(t.nothing()),
            "rich list": toption(t.group({
                "items": prop(t.list(t.component("Sentence"))),
                "if empty": prop(t.component("Sentence")),
                "if not empty": prop(t.group({
                    "indent": prop(t.boolean()),
                    "before": prop(t.component("Phrase")),
                    "separator": prop(t.component("Phrase")),
                    "after": prop(t.component("Phrase")),
                })),
            }))
        })),

        "Sentence": module_(t.list(t.component("Phrase"))),

        "Phrase": module_(t.state({
            "single line": toption(t.component("Single Line")),
            "indent": toption(t.component("Paragraph")),
            "composed": toption(t.list(t.component("Phrase"))),
            "optional": toption(t.optional(t.component("Phrase"))),
            "nothing": toption(t.nothing()),
            "rich list": toption(t.group({
                "items": prop(t.list(t.component("Phrase"))),
                "if empty": prop(t.component("Phrase")),
                "if not empty": prop(t.group({
                    "before": prop(t.component("Phrase")),
                    "separator": prop(t.component("Phrase")),
                    "after": prop(t.component("Phrase")),
                })),
            })),
        })),

        "Single Line": module_(t.list(t.state({
            "snippet": toption(t.text_global("Output")),
            "serialize": toption(t.component("List of Characters")),
            "rich list": toption(t.group({
                "items": prop(t.list(t.component("Single Line"))),
                "if empty": prop(t.component("Single Line")),
                "if not empty": prop(t.group({
                    "before": prop(t.component("Single Line")),
                    "separator": prop(t.component("Single Line")),
                    "after": prop(t.component("Single Line")),
                })),
            })),
        }))),

        "List of Characters": module_(t.list(t.number_local(n.natural(null)))),
    }
)


