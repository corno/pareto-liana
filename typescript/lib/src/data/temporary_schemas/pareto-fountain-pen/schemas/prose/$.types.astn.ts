
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        
        "Paragraph": sh.module_(sh.t.state({
            "composed": sh.toption(sh.t.list(sh.t.component("Paragraph"))),
            "sentences": sh.toption(sh.t.list(sh.t.component("Sentence"))),
            "optional": sh.toption(sh.t.optional(sh.t.component("Paragraph"))),
            "nothing": sh.toption(sh.t.nothing()),
            "rich list": sh.toption(sh.t.group({
                "items": sh.prop(sh.t.list(sh.t.component("Sentence"))),
                "if empty": sh.prop(sh.t.optional(sh.t.component("Sentence"))),
                "if not empty": sh.prop(sh.t.group({
                    "before": sh.prop(sh.t.optional(sh.t.component("Sentence"))),
                    "indent": sh.prop(sh.t.simple("boolean")),
                    "separator": sh.prop(sh.t.optional(sh.t.component("Phrase"))),
                    "after": sh.prop(sh.t.optional(sh.t.component("Sentence"))),
                })),
            }))
        })),

        "Sentence": sh.module_(sh.t.list(sh.t.component("Phrase"))),

        "Phrase": sh.module_(sh.t.state({
            "value": sh.toption(sh.t.state({
                "text": sh.toption(sh.t.text_global("Output")),
                "list of characters": sh.toption(sh.t.component_external("list of characters", "List of Characters")),
            })),
            "indent": sh.toption(sh.t.component("Paragraph")),
            "composed": sh.toption(sh.t.list(sh.t.component("Phrase"))),
            "optional": sh.toption(sh.t.optional(sh.t.component("Phrase"))),
            "nothing": sh.toption(sh.t.nothing()),
            "rich list": sh.toption(sh.t.group({
                "items": sh.prop(sh.t.list(sh.t.component("Phrase"))),
                "if empty": sh.prop(sh.t.component("Phrase")),
                "if not empty": sh.prop(sh.t.group({
                    "before": sh.prop(sh.t.component("Phrase")),
                    "separator": sh.prop(sh.t.component("Phrase")),
                    "after": sh.prop(sh.t.component("Phrase")),
                })),
            })),
        })),

    }
)


