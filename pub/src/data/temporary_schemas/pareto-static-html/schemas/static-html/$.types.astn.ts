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
            "css": prop(t.text_local(text('multi line'))),
            "root": prop(t.component("Flow Content")),
        })),

        "Flow Content": module_(t.list(t.state({
            "div": toption(t.component_cyclic("Flow Content")),
            "dimensioned div": toption(t.group({
                "width": prop(t.optional(t.number_local(n.natural(null)))),
                "height": prop(t.optional(t.number_local(n.natural(null)))),
                "content": prop(t.component_cyclic("Flow Content")),
            })),
            "classified div": toption(t.group({
                "classes": prop(t.component("Classes")),
                "content": prop(t.component_cyclic("Flow Content")),
            })),
            "table": toption(t.group({
                "classes": prop(t.component("Classes")),
                "sections": prop(t.list(t.group({
                    "classes": prop(t.component("Classes")),
                    "type": prop(t.state({
                        "header": toption(t.nothing()),
                        "body": toption(t.nothing()),
                        "footer": toption(t.nothing()),
                    })),
                    "rows": prop(t.list(t.group({
                        "classes": prop(t.component("Classes")),
                        "type": prop(t.state({
                            "th": toption(t.nothing()),
                            "td": toption(t.nothing()),
                        })),
                        "height": prop(t.optional(t.number_local(n.natural(null)))),
                        "cells": prop(t.list(t.group({
                            "classes": prop(t.component("Classes")),
                            "content": prop(t.component_cyclic("Flow Content")),
                        }))),
                    }))),
                }))),
            })),
            "span": toption(t.component("Phrasing Content")),
            "label": toption(t.group({
                "classes": prop(t.component("Classes")),
                "text": prop(t.text_local(text('single line'))),
                "content": prop(t.component_cyclic("Flow Content")),
            })),
            "img": toption(t.group({
                "classes": prop(t.component("Classes")),
                "src": prop(t.text_local(text('single line'))),
                "alt": prop(t.text_local(text('single line'))),
                "width": prop(t.optional(t.number_local(n.natural(null)))),
                "height": prop(t.optional(t.number_local(n.natural(null)))),
            })),
            "svg": toption(t.group({
                "classes": prop(t.component("Classes")),
                "content": prop(t.text_local(text('multi line'))),
                "width": prop(t.optional(t.number_local(n.natural(null)))),
                "height": prop(t.optional(t.number_local(n.natural(null)))),
            })),

        }))),

        "Classes": module_(t.list(t.text_local(text('single line')))),

        "Phrasing Content": module_(t.list(t.state({
            "span": toption(t.component_cyclic("Phrasing Content")),
            "classified span": toption(t.group({
                "classes": prop(t.component("Classes")),
                "content": prop(t.component_cyclic("Phrasing Content")),
            })),
            "titled span": toption(t.group({
                "title": prop(t.text_local(text('single line'))),
                "content": prop(t.component_cyclic("Phrasing Content")),
            })),
            "a": toption(t.group({
                "text": prop(t.text_local(text('single line'))),
                "href": prop(t.text_local(text('single line'))),
            })),
            "p": toption(t.group({
                "text": prop(t.text_local(text('single line'))),
            })),
        }))),
    }
)