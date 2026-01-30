import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Parameters": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
        })),

        "Error": module_(t.state({
            "directory does not exist": tstate(t.nothing()),
            "node is not a directory": tstate(t.nothing()),
        })),

        "Result": module_(t.dictionary(t.group({
            "node type": prop(t.component("Node Type")),

            /**
             * The context directory is the directory that was read to produce the listing
             * it is provided so that there is no need to store a variable
             */
            "context directory": prop(t.component_external("path", "Context Path")),
            "path": prop(t.component_external("path", "Node Path")),
        }))),

        "Node Type": module_(t.state({
            "file": tstate(t.nothing()),
            "directory": tstate(t.nothing()),
            "other": tstate(t.nothing()),
        })),
    }
)


