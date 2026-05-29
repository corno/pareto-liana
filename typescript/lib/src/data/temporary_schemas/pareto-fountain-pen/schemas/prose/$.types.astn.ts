import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    text,
    n,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        
        "Paragraph": module_(t.state({
            "composed": toption(t.list(t.component("Paragraph"))),
            "sentences": toption(t.list(t.component("Sentence"))),
            "optional": toption(t.optional(t.component("Paragraph"))),
            "nothing": toption(t.nothing()),
            "rich list": toption(t.group({
                "items": prop(t.list(t.component("Sentence"))),
                "if empty": prop(t.optional(t.component("Sentence"))),
                "if not empty": prop(t.group({
                    "before": prop(t.optional(t.component("Sentence"))),
                    "indent": prop(t.simple("boolean")),
                    "separator": prop(t.optional(t.component("Phrase"))),
                    "after": prop(t.optional(t.component("Sentence"))),
                })),
            }))
        })),

        "Sentence": module_(t.list(t.component("Phrase"))),

        "Phrase": module_(t.state({
            "value": toption(t.state({
                "text": toption(t.text_global("Output")),
                "list of characters": toption(t.component_external("list of characters", "List of Characters")),
            })),
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

    }
)


