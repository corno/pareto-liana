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


export const $ = modules(
    {
        
        "Serialization Chunk": module_(t.group({
            "serializationFormatVersion": prop(t.text_global("text")),
            "languages": prop(t.list(t.group({
                "key": prop(t.text_global("text")),
                "version": prop(t.text_global("text")),
            }))),
            "nodes": prop(t.list(t.group({
                "id": prop(t.text_global("text")),
                "range": prop(t.component_external("location", "Range")),
                "parent": prop(t.optional(t.text_global("text"))),
                "classifier": prop(t.component("Meta Pointer")),
                "properties": prop(t.list(t.group({
                    "property": prop(t.component("Meta Pointer")),
                    "value": prop(t.text_global("text")),
                }))),
                "references": prop(t.list(t.group({
                    "reference": prop(t.component("Meta Pointer")),
                    "targets": prop(t.component("Targets")),
                }))),
                "containments": prop(t.list(t.group({
                    "containment": prop(t.component("Meta Pointer")),
                    "children": prop(t.list(t.text_global("text"))),
                }))),
                "annotations": prop(t.list(t.text_global("text"))),
            }))),
        })),

        "Targets": module_(t.list(t.group({
            "resolveInfo": prop(t.text_global("text")),
            "reference": prop(t.optional(t.text_global("text"))),
        }))),

        "Meta Pointer": module_(t.group({
            "language": prop(t.text_global("text")),
            "key": prop(t.text_global("text")),
            "version": prop(t.text_global("text")),
        })),
    }
)

