import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {


        "Tokenizer Result": type(t.group({
            "leading whitespace": prop(t.text_global("Text Value")),
            "tokens": prop(t.list(t.component("Annotated Token"))),
        })),

        "Token": type(t.state_group({
            "<": tstate(t.nothing()),
            "/": tstate(t.nothing()),
            ">": tstate(t.nothing()),
            "/>": tstate(t.nothing()),
            "?": tstate(t.nothing()),
            "=": tstate(t.nothing()),
            "string": tstate(t.text_global("Text Value")),
            "comment": tstate(t.text_global("Text Value")),
            "identifier": tstate(t.text_global("Text Value")),
            "text node": tstate(t.text_global("Text Value")),
            "invalid": tstate(t.nothing()),

        })),

        "Annotation": type(t.group({
            "position": prop(t.number_local(n.natural())),
            "line": prop(t.number_local(n.natural())),
            "column": prop(t.number_local(n.natural())),
        })),


        "Annotated Token": type(t.group({
            "type": prop(t.component("Token")),
            "annotation": prop(t.component("Annotation")),
            "trailing whitespace": prop(t.text_global("Text Value")),
        })),

        "Document": type(t.group({
            "declaration": prop(t.optional(t.group({
                "attributes": prop(t.component("Attributes")),
            }))),
            "children": prop(t.component("Content")),
        })),
        "Attributes": type(t.dictionary(t.text_global("Text Value"))),
        "Content": type(t.group({
            "preceding chardata": prop(t.optional(t.text_global("Text Value"))),
            "nodes": prop(t.list(t.group({
                "type": prop(t.state_group({
                    "cdata": tstate(t.text_global("Text Value")),
                    "comment": tstate(t.text_global("Text Value")),
                    "element": tstate(t.component_cyclic("Element")),
                    "processing instruction": tstate(t.group({
                        "target": prop(t.text_global("Text Value")),
                        "data": prop(t.text_global("Text Value")),
                    })),
                    "entity reference": tstate(t.text_global("Text Value")),
                })),
                "trailing chardata": prop(t.optional(t.text_global("Text Value"))),
            })))
        })),
        "Element": type(t.group({
            "name": prop(t.text_global("Text Value")),
            "attributes": prop(t.component("Attributes")),
            //"mixed": t.boolean(),
            "children": prop(t.component_cyclic("Content")),
        })),
    }
)


