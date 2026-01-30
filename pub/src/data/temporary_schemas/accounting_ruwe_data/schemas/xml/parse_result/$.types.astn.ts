import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    tstate,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {


        "Tokenizer Result": module_(t.group({
            "leading whitespace": prop(t.text_global("Text Value")),
            "tokens": prop(t.list(t.component("Annotated Token"))),
        })),

        "Token": module_(t.state({
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

        "Annotation": module_(t.group({
            "position": prop(t.number_local(n.natural(null))),
            "line": prop(t.number_local(n.natural(null))),
            "column": prop(t.number_local(n.natural(null))),
        })),


        "Annotated Token": module_(t.group({
            "type": prop(t.component("Token")),
            "annotation": prop(t.component("Annotation")),
            "trailing whitespace": prop(t.text_global("Text Value")),
        })),

        "Document": module_(t.group({
            "declaration": prop(t.optional(t.group({
                "attributes": prop(t.component("Attributes")),
            }))),
            "children": prop(t.component("Content")),
        })),
        "Attributes": module_(t.dictionary(t.text_global("Text Value"))),
        "Content": module_(t.group({
            "preceding chardata": prop(t.optional(t.text_global("Text Value"))),
            "nodes": prop(t.list(t.group({
                "type": prop(t.state({
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
        "Element": module_(t.group({
            "name": prop(t.text_global("Text Value")),
            "attributes": prop(t.component("Attributes")),
            //"mixed": t.boolean(),
            "children": prop(t.component_cyclic("Content")),
        })),
    }
)


