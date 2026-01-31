import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    t,
    vp,
    module_,
    text,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Schema Tree": module_(t.state({
            "set": toption(t.component("Schemas")),
            "schema": toption(t.component("Schema")),
        })),

        "Schemas": module_(t.dictionary(t.component("Schema Tree"))),

        "Schema": module_(t.group({
            "imports": prop(t.component("Imports")),
            "globals": prop(t.component("Globals")),
            "types": prop(t.component("Modules")),
        })),

        "Imports": module_(t.dictionary(t.group({
            "schema set child": prop(t.reference_stack("Schemas", [])),
            "schema": prop(t.reference_derived("Schema", [])),
        }))),

        "Globals": module_(t.group({
            "text types": prop(t.dictionary(t.component("Text Type"))),
            // "number types": t.dictionary(t.component("Number Type")),
        })),

        "Modules": module_(t.dictionary(t.component("Module"))),

        "Module": module_(t.group({
            // "type parameters": t.component("Type Parameters"),
            "node": prop(t.component("Value"))
        })),

        "Value": module_(t.state({
            //"boolean": t.nothing(),
            "component": toption(t.state({
                "external": toption(t.group({
                    "import": prop(t.reference("Imports", [])),
                    "type": prop(t.reference("Modules", [])),
                })),
                "internal": toption(t.reference("Modules", [])),
                "internal cyclic": toption(t.reference("Modules", [], 'cyclic')),
            })),
            "dictionary": toption(t.component("Dictionary")),
            "group": toption(t.component("Group")),
            "list": toption(t.group({
                "node": prop(t.component("Value")),
            })),
            "nothing": toption(t.nothing()),
            "optional": toption(t.component("Value")),
            "state": toption(t.dictionary(t.component("Value"))),
            "text": toption(t.state({
                "global": toption(t.reference("Globals", [vp.g("text types")])),
                "local": toption(t.component("Text Type")),
            })),
        })),

        "Text Type": module_(t.group({
            "type": prop(t.state({
                "multi line": toption(t.nothing()),
                "single line": toption(t.nothing()),
            })),
        })),

        "Group": module_(t.dictionary(t.component("Value"))),

        "Dictionary": module_(t.group({
            "node": prop(t.component("Value")),
            "ordered": prop(t.boolean()),
        })),

    }
)