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
        })),

        "Modules": module_(t.dictionary(t.group({
            "root value": prop(t.component("Value"))
        }))),

        "Value": module_(t.state({
            "component": toption(t.state({
                "external": toption(t.group({
                    "import": prop(t.reference("Imports", [])),
                    "type": prop(t.reference("Modules", [])),
                })),
                "internal acyclic": toption(t.reference("Modules", [])),
                "internal": toption(t.reference("Modules", [], 'cyclic')),
            })),
            "dictionary": toption(t.group({
                "value": prop(t.component("Value")),
                "ordered": prop(t.boolean()),
            })),
            "group": toption(t.dictionary(t.component("Value"))),
            "list": toption(t.group({
                "value": prop(t.component("Value")),
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

    }
)