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
        "Serialization Chunk": module_(t.group({
            "serializationFormatVersion": prop(t.text_local(text('single line'))),
            "languages": prop(t.list(t.group({
                "key": prop(t.text_local(text('single line'))),
                "version": prop(t.text_local(text('single line'))),
            }))),
            "nodes": prop(t.list(t.group({
                "id": prop(t.text_local(text('single line'))),
                "parent": prop(t.optional(t.text_local(text('single line')))),
                "classifier": prop(t.component("Meta Pointer")),
                "properties": prop(t.list(t.group({
                    "property": prop(t.component("Meta Pointer")),
                    "value": prop(t.text_local(text('single line'))),
                }))),
                "references": prop(t.list(t.group({
                    "reference": prop(t.component("Meta Pointer")),
                    "targets": prop(t.component("Targets")),
                }))),
                "containments": prop(t.list(t.group({
                    "containment": prop(t.component("Meta Pointer")),
                    "children": prop(t.list(t.text_local(text('single line')))),
                }))),
                "annotations": prop(t.list(t.text_local(text('single line')))),
            }))),
        })),

        "Targets": module_(t.list(t.group({
            "resolveInfo": prop(t.text_local(text('single line'))),
            "reference": prop(t.optional(t.text_local(text('single line')))),
        }))),

        "Meta Pointer": module_(t.group({
            "language": prop(t.text_local(text('single line'))),
            "key": prop(t.text_local(text('single line'))),
            "version": prop(t.text_local(text('single line'))),
        })),
    }
)

