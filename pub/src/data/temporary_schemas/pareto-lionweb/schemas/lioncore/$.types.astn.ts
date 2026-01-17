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
        "M3": type(t.group({
            "id": prop(t.component("ID")),
            "version": prop(t.text_local(text('single line'))),
            "dependencies": prop(t.list(t.component("Raw Reference"))),
            "entities": prop(t.dictionary(t.group({
                "id": prop(t.component("ID")),
                "type": prop(t.state_group({
                    "classifier": tstate(t.group({
                        "type": prop(t.state_group({
                            "concept": tstate(t.group({
                                "abstract": prop(t.text_local(text('single line'))),
                                "partition": prop(t.text_local(text('single line'))),
                                "extends": prop(t.optional(t.component("Raw Reference"))),
                                "implements": prop(t.list(t.component("Raw Reference"))),
                            })),
                            "interface": tstate(t.group({
                                "extends": prop(t.list(t.component("Raw Reference"))),
                            })),
                            //annotation needs to be implemented
                        })),
                        "features": prop(t.dictionary(t.group({
                            "id": prop(t.component("ID")),
                            "optional": prop(t.text_local(text('single line'))),
                            "type": prop(t.state_group({
                                "property": tstate(t.group({
                                    "type": prop(t.component("Raw Reference")),
                                })),
                                "link": tstate(t.group({
                                    "multiple": prop(t.text_local(text('single line'))),
                                    "type": prop(t.component("Raw Reference")),
                                    "link type": prop(t.state_group({
                                        "containment": tstate(t.nothing()),
                                        "reference": tstate(t.nothing()),
                                    }))
                                })),
                            })),
                        }))),
                    })),
                    "datatype": tstate(t.state_group({
                        "enumeration": tstate(t.dictionary(t.component("ID"))),
                        // structured data type and primitive type need to be implemented
                    })),
                })),
            }))),
        })),
        "ID": type(t.optional(t.group({
            "key": prop(t.text_local(text('single line'))),
            "id": prop(t.text_local(text('single line'))),
        }))),
        "Raw Reference": type(t.group({
            "resolveInfo": prop(t.text_local(text('single line'))),
            "reference": prop(t.optional(t.text_local(text('single line')))),
        })),
    }
)