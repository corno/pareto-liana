import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    t,
    tr,
    module_,
    text,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Schema Tree": module_(t.state({
            "set": tstate(t.component("Schemas")),
            "schema": tstate(t.component("Schema")),
        })),

        "Schemas": module_(t.dictionary(t.component_cyclic("Schema Tree"))),

        "Schema": module_(t.group({
            "imports": prop(t.component_cyclic("Imports")),
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
            "node": prop(t.component_cyclic("Value"))
        })),

        "Value": module_(t.state({
            //"boolean": t.nothing(),
            "component": tstate(t.state({
                "external": tstate(t.group({
                    "import": prop(t.reference("Imports", [])),
                    "type": prop(t.reference("Modules", [])),
                })),
                "internal": tstate(t.reference("Modules", [])),
                "internal cyclic": tstate(t.reference("Modules", [], 'cyclic')),
            })),
            "dictionary": tstate(t.component("Dictionary")),
            "group": tstate(t.component("Group")),
            "list": tstate(t.group({
                "node": prop(t.component_cyclic("Value")),
            })),
            "nothing": tstate(t.nothing()),
            "optional": tstate(t.component_cyclic("Value")),
            "state": tstate(t.dictionary(t.component_cyclic("Value"))),
            "text": tstate(t.state({
                "global": tstate(t.reference("Globals", [tr.g("text types")])),
                "local": tstate(t.component("Text Type")),
            })),
        })),

        "Text Type": module_(t.group({
            "type": prop(t.state({
                "multi line": tstate(t.nothing()),
                "single line": tstate(t.nothing()),
            })),
        })),

        "Group": module_(t.dictionary(t.component_cyclic("Value"))),

        "Dictionary": module_(t.group({
            "node": prop(t.component_cyclic("Value")),
            "ordered": prop(t.boolean()),
        })),

    }
)