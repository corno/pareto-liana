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

        "Document": module_(t.group({
            "css": prop(t.text_global("multi line text")),
            "root": prop(t.component("Flow Element")),
        })),

        "Flow Element": module_(t.state({
            "div": toption(t.component("Flow Content")),
            "dimensioned div": toption(t.group({
                "width": prop(t.optional(t.simple("Natural"))),
                "height": prop(t.optional(t.simple("Natural"))),
                "content": prop(t.component("Flow Content")),
            })),
            "classified div": toption(t.group({
                "classes": prop(t.component("Classes")),
                "content": prop(t.component("Flow Content")),
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
                        "height": prop(t.optional(t.simple("Natural"))),
                        "cells": prop(t.list(t.group({
                            "classes": prop(t.component("Classes")),
                            "content": prop(t.component("Flow Content")),
                        }))),
                    }))),
                }))),
            })),
            "span": toption(t.component("Phrasing Content")),
            "label": toption(t.group({
                "classes": prop(t.component("Classes")),
                "text": prop(t.text_global("text")),
                "content": prop(t.component("Flow Content")),
            })),
            "img": toption(t.group({
                "classes": prop(t.component("Classes")),
                "src": prop(t.text_global("text")),
                "alt": prop(t.text_global("text")),
                "width": prop(t.optional(t.simple("Natural"))),
                "height": prop(t.optional(t.simple("Natural"))),
            })),
            "svg": toption(t.group({
                "classes": prop(t.component("Classes")),
                "content": prop(t.component_external("xml", "Mixed Content")),
                "width": prop(t.optional(t.simple("Natural"))),
                "height": prop(t.optional(t.simple("Natural"))),
            })),

        })),

        "Flow Content": module_(t.list(t.component("Flow Element"))),

        "Classes": module_(t.list(t.text_global("text"))),

        "Phrasing Content": module_(t.list(t.component("Phrasing Element"))),

        //this one should be publicly available, so it is not inlined, even though it is only used once
        "Phrasing Element": module_(t.state({
            "span": toption(t.component("Phrasing Content")),
            "classified span": toption(t.group({
                "classes": prop(t.component("Classes")),
                "content": prop(t.component("Phrasing Content")),
            })),
            "titled span": toption(t.group({
                "title": prop(t.text_global("text")),
                "content": prop(t.component("Phrasing Content")),
            })),
            "a": toption(t.group({
                "text": prop(t.text_global("text")),
                "href": prop(t.text_global("text")),
            })),
            "p": toption(t.group({
                "text": prop(t.text_global("text")),
            })),
        }))
    }
)