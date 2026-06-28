
import * as sh from "../../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Context Path")),
        })),

        "Result": sh.module_(sh.t.dictionary(sh.t.group({
            "node type": sh.prop(sh.t.component("Node Type")),

            /**
             * The context directory is the directory that was read to produce the listing
             * it is provided so that there is no need to store a variable
             */
            "context directory": sh.prop(sh.t.component_external("path", "Context Path")),
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
        }))),

        "Node Type": sh.module_(sh.t.state({
            "file": sh.toption(sh.t.nothing()),
            "directory": sh.toption(sh.t.nothing()),
            "other": sh.toption(sh.t.nothing()),
        })),

        "Error": sh.module_(sh.t.component_external("unrestricted", "Error")),
        
    }
)


