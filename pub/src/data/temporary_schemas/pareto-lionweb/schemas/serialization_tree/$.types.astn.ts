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
            "root node id": prop(t.text_local(text('single line'))),
            "node tree": prop(t.component("Node")),
        })),

        "Node": type(t.group({
            "classifier": prop(t.text_local(text('single line'))),
            "properties": prop(t.dictionary(t.text_local(text('single line')))),
            "containments": prop(t.dictionary(t.dictionary(t.component_cyclic("Node")))),
            "references": prop(t.dictionary(t.component("Targets"))),
            "annotations": prop(t.list(t.text_local(text('single line')))),
        })),

        "Targets": type(t.list(t.group({
            "resolveInfo": prop(t.text_local(text('single line'))),
            "reference": prop(t.optional(t.text_local(text('single line')))),
        }))),
    }
)