

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {

        "Document": module_(t.component("Value")),

        "Value": module_(t.state({
            "array": toption(t.list(t.component("Value"))),
            "object": toption(t.dictionary(t.component("Value"))),
            "number": toption(t.state({
                //FIX, this should be one type, not two
                "integer": toption(t.simple("Integer")),
                "float": toption(t.simple("Approximation")),
            })),
            "string": toption(t.text_global("Text Value")),
            "boolean": toption(t.simple("boolean")),
            "null": toption(t.nothing()),
        })),

    }
)
