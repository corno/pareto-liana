
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {

        "Document": sh.module_(sh.t.group({
            "css": sh.prop(sh.t.text_global("multi line text")),
            "root": sh.prop(sh.t.component("Flow Element")),
        })),

        "Flow Element": sh.module_(sh.t.state({
            "div": sh.toption(sh.t.component("Flow Content")),
            "dimensioned div": sh.toption(sh.t.group({
                "width": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                "height": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                "content": sh.prop(sh.t.component("Flow Content")),
            })),
            "classified div": sh.toption(sh.t.group({
                "classes": sh.prop(sh.t.component("Classes")),
                "content": sh.prop(sh.t.component("Flow Content")),
            })),
            "table": sh.toption(sh.t.group({
                "classes": sh.prop(sh.t.component("Classes")),
                "sections": sh.prop(sh.t.list(sh.t.group({
                    "classes": sh.prop(sh.t.component("Classes")),
                    "type": sh.prop(sh.t.state({
                        "header": sh.toption(sh.t.nothing()),
                        "body": sh.toption(sh.t.nothing()),
                        "footer": sh.toption(sh.t.nothing()),
                    })),
                    "rows": sh.prop(sh.t.list(sh.t.group({
                        "classes": sh.prop(sh.t.component("Classes")),
                        "height": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                        "cells": sh.prop(sh.t.list(sh.t.group({
                            "type": sh.prop(sh.t.state({
                                "th": sh.toption(sh.t.nothing()),
                                "td": sh.toption(sh.t.nothing()),
                            })),
                            "colspan": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                            "classes": sh.prop(sh.t.component("Classes")),
                            "content": sh.prop(sh.t.component("Flow Content")),
                        }))),
                    }))),
                }))),
            })),
            "span": sh.toption(sh.t.component("Phrasing Content")),
            "label": sh.toption(sh.t.group({
                "classes": sh.prop(sh.t.component("Classes")),
                "text": sh.prop(sh.t.text_global("text")),
                "content": sh.prop(sh.t.component("Flow Content")),
            })),
            "img": sh.toption(sh.t.group({
                "classes": sh.prop(sh.t.component("Classes")),
                "src": sh.prop(sh.t.text_global("text")),
                "alt": sh.prop(sh.t.text_global("text")),
                "width": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                "height": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
            })),
            "svg": sh.toption(sh.t.group({
                "classes": sh.prop(sh.t.component("Classes")),
                "content": sh.prop(sh.t.component_external("xml", "Mixed Content")),
                "width": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
                "height": sh.prop(sh.t.optional(sh.t.simple("Natural"))),
            })),

        })),

        "Flow Content": sh.module_(sh.t.list(sh.t.component("Flow Element"))),

        "Classes": sh.module_(sh.t.list(sh.t.text_global("text"))),

        "Phrasing Content": sh.module_(sh.t.list(sh.t.component("Phrasing Element"))),

        //this one should be publicly available, so it is not inlined, even though it is only used once
        "Phrasing Element": sh.module_(sh.t.state({
            "span": sh.toption(sh.t.component("Phrasing Content")),
            "classified span": sh.toption(sh.t.group({
                "classes": sh.prop(sh.t.component("Classes")),
                "content": sh.prop(sh.t.component("Phrasing Content")),
            })),
            "titled span": sh.toption(sh.t.group({
                "title": sh.prop(sh.t.text_global("text")),
                "content": sh.prop(sh.t.component("Phrasing Content")),
            })),
            "a": sh.toption(sh.t.group({
                "text": sh.prop(sh.t.text_global("text")),
                "href": sh.prop(sh.t.text_global("text")),
            })),
            "p": sh.toption(sh.t.group({
                "text": sh.prop(sh.t.text_global("text")),
            })),
        }))
    }
)