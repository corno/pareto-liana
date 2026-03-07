import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Document": module_(t.group({
            "doc type": prop(t.optional(t.group({
                "name": prop(t.text_local(text('single line'))),
            }))),
            "root": prop(t.component("Element")),
        })),

        "Element": module_(t.group({
            "name": prop(t.component("Qualified Name")),
            "attributes": prop(t.list(t.group({
                "name": prop(t.component("Qualified Name")),
                "value": prop(t.text_local(text('single line'))),
            }))),
            "content type": prop(t.state({
                "empty": toption(t.group({})),
                "text only": toption(t.group({
                    "value": prop(t.text_local(text('single line'))),
                })),
                "mixed": toption(t.component("Mixed Content")),
                "nodes only": toption(t.group({
                    "children": prop(t.list(t.component("Node"))),
                })),

            })),
        })),

        "Mixed Content": module_(t.list(t.state({
            "node": toption(t.component("Node")),
            "text": toption(t.group({
                "value": prop(t.text_local(text('single line'))),
            })),
        }))),

        "Qualified Name": module_(t.group({
            "namespace prefix": prop(t.optional(t.text_local(text('single line')))),
            "local name": prop(t.text_local(text('single line'))),
        })),

        "Node": module_(t.state({
            "element": toption(t.component("Element")),
            "comment": toption(t.text_local(text('single line'))),
            "cdata": toption(t.text_local(text('single line'))),
            "processing instruction": toption(t.group({
                "target": prop(t.text_local(text('single line'))),
                "data": prop(t.text_local(text('single line'))),
            })),
        }))

    }
)