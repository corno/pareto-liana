

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../../shorthands/schema"


export const $ = modules(
    {
        "Parameters": module_(t.group({
            "path": prop(t.component_external("path", "Context Path")),
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
            "file": toption(t.nothing()),
            "directory": toption(t.nothing()),
            "other": toption(t.nothing()),
        })),

        "Error": module_(t.component_external("unrestricted", "Error")),
        
    }
)


