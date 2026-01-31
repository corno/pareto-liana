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
        "M3": module_(t.group({
            "id": prop(t.component("ID")),
            "version": prop(t.text_local(text('single line'))),
            "dependencies": prop(t.list(t.component("Raw Reference"))),
            "entities": prop(t.dictionary(t.group({
                "id": prop(t.component("ID")),
                "type": prop(t.state({
                    "classifier": toption(t.group({
                        "type": prop(t.state({
                            "concept": toption(t.group({
                                "abstract": prop(t.text_local(text('single line'))),
                                "partition": prop(t.text_local(text('single line'))),
                                "extends": prop(t.optional(t.component("Raw Reference"))),
                                "implements": prop(t.list(t.component("Raw Reference"))),
                            })),
                            "interface": toption(t.group({
                                "extends": prop(t.list(t.component("Raw Reference"))),
                            })),
                            //annotation needs to be implemented
                        })),
                        "features": prop(t.dictionary(t.group({
                            "id": prop(t.component("ID")),
                            "optional": prop(t.text_local(text('single line'))),
                            "type": prop(t.state({
                                "property": toption(t.group({
                                    "type": prop(t.component("Raw Reference")),
                                })),
                                "link": toption(t.group({
                                    "multiple": prop(t.text_local(text('single line'))),
                                    "type": prop(t.component("Raw Reference")),
                                    "link type": prop(t.state({
                                        "containment": toption(t.nothing()),
                                        "reference": toption(t.nothing()),
                                    }))
                                })),
                            })),
                        }))),
                    })),
                    "datatype": toption(t.state({
                        "enumeration": toption(t.dictionary(t.component("ID"))),
                        // structured data type and primitive type need to be implemented
                    })),
                })),
            }))),
        })),
        "ID": module_(t.optional(t.group({
            "key": prop(t.text_local(text('single line'))),
            "id": prop(t.text_local(text('single line'))),
        }))),
        "Raw Reference": module_(t.group({
            "resolveInfo": prop(t.text_local(text('single line'))),
            "reference": prop(t.optional(t.text_local(text('single line')))),
        })),
    }
)