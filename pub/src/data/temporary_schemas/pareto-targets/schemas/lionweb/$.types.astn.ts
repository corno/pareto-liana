import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "SerializationChunk": type(t.group({
            "serializationFormatVersion": prop(t.text_global("String")),
            "languages": prop(t.list(t.group({
                "key": prop(t.text_global("Id")),
                "version": prop(t.text_global("String")),
            }))),
            "nodes": prop(t.list(t.group({
                "id": prop(t.text_global("Id")),
                "parent": prop(t.optional(t.text_global("String"))),
                "annotations": prop(t.list(t.text_global("Id"))),
                "classifier": prop(t.component("MetaPointer")),
                "containments": prop(t.list(t.group({
                    "containment": prop(t.component("MetaPointer")),
                    "children": prop(t.list(t.text_global("Id"))),
                }))),
                "properties": prop(t.list(t.group({
                    "value": prop(t.text_global("Id")),
                    "property": prop(t.component("MetaPointer"))
                }))),
                "references": prop(t.list(t.group({
                    "targets": prop(t.list(t.group({
                        "reference": prop(t.text_global("Id")),
                        "resolveInfo": prop(t.text_global("String")),
                    }))),
                    "reference": prop(t.component("MetaPointer"))
                }))),
            }))),
        })),
        
        "MetaPointer": type(t.group({
            "language": prop(t.text_global("Id")),
            "version": prop(t.text_global("String")),
            "key": prop(t.text_global("Id")),
        })),

        "SerializationChunks": type(t.dictionary(t.component("SerializationChunk"))),
    }
)


