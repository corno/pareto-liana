import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Serialization Chunk": type(t.group({
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

        "Targets": type(t.list(t.group({
            "resolveInfo": prop(t.text_local(text('single line'))),
            "reference": prop(t.optional(t.text_local(text('single line')))),
        }))),

        "Meta Pointer": type(t.group({
            "language": prop(t.text_local(text('single line'))),
            "key": prop(t.text_local(text('single line'))),
            "version": prop(t.text_local(text('single line'))),
        })),
    }
)

