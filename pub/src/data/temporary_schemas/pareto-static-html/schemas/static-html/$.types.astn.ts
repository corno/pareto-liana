import * as _pi from 'pareto-core/dist/interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Document": type(t.group({
            "css": prop(t.text_local(text('multi line'))),
            "root": prop(t.component("Flow Content")),
        })),

        "Flow Content": type(t.list(t.state({
            "div": tstate(t.component_cyclic("Flow Content")),
            "dimensioned div": tstate(t.group({
                "width": prop(t.optional(t.number_local(n.natural(null)))),
                "height": prop(t.optional(t.number_local(n.natural(null)))),
                "content": prop(t.component_cyclic("Flow Content")),
            })),
            "classified div": tstate(t.group({
                "classes": prop(t.component("Classes")),
                "content": prop(t.component_cyclic("Flow Content")),
            })),
            "table": tstate(t.group({
                "classes": prop(t.component("Classes")),
                "sections": prop(t.list(t.group({
                    "classes": prop(t.component("Classes")),
                    "type": prop(t.state({
                        "header": tstate(t.nothing()),
                        "body": tstate(t.nothing()),
                        "footer": tstate(t.nothing()),
                    })),
                    "rows": prop(t.list(t.group({
                        "classes": prop(t.component("Classes")),
                        "type": prop(t.state({
                            "th": tstate(t.nothing()),
                            "td": tstate(t.nothing()),
                        })),
                        "height": prop(t.optional(t.number_local(n.natural(null)))),
                        "cells": prop(t.list(t.group({
                            "classes": prop(t.component("Classes")),
                            "content": prop(t.component_cyclic("Flow Content")),
                        }))),
                    }))),
                }))),
            })),
            "span": tstate(t.component("Phrasing Content")),
            "label": tstate(t.group({
                "classes": prop(t.component("Classes")),
                "text": prop(t.text_local(text('single line'))),
                "content": prop(t.component_cyclic("Flow Content")),
            })),
            "img": tstate(t.group({
                "classes": prop(t.component("Classes")),
                "src": prop(t.text_local(text('single line'))),
                "alt": prop(t.text_local(text('single line'))),
                "width": prop(t.optional(t.number_local(n.natural(null)))),
                "height": prop(t.optional(t.number_local(n.natural(null)))),
            })),
            "svg": tstate(t.group({
                "classes": prop(t.component("Classes")),
                "content": prop(t.text_local(text('multi line'))),
                "width": prop(t.optional(t.number_local(n.natural(null)))),
                "height": prop(t.optional(t.number_local(n.natural(null)))),
            })),

        }))),

        "Classes": type(t.list(t.text_local(text('single line')))),

        "Phrasing Content": type(t.list(t.state({
            "span": tstate(t.component_cyclic("Phrasing Content")),
            "classified span": tstate(t.group({
                "classes": prop(t.component("Classes")),
                "content": prop(t.component_cyclic("Phrasing Content")),
            })),
            "titled span": tstate(t.group({
                "title": prop(t.text_local(text('single line'))),
                "content": prop(t.component_cyclic("Phrasing Content")),
            })),
            "a": tstate(t.group({
                "text": prop(t.text_local(text('single line'))),
                "href": prop(t.text_local(text('single line'))),
            })),
            "p": tstate(t.group({
                "text": prop(t.text_local(text('single line'))),
            })),
        }))),
    }
)