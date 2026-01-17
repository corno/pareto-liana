import * as _pi from 'pareto-core-interface'

import {
    types,
    n,
    t,
    tr,
    type,
    text,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Schema Tree": type(t.state_group({
            "set": tstate(t.component("Schemas")),
            "schema": tstate(t.component("Schema")),
        })),

        "Schemas": type(t.dictionary(t.component_cyclic("Schema Tree"), 'ordered')),

        "Schema": type(t.group({
            "imports": prop(t.component_cyclic("Imports")),
            "globals": prop(t.component("Globals")),
            "types": prop(t.component("Types")),
        })),

        "Imports": type(t.dictionary(t.group({
            "schema set child": prop(t.reference_stack("Schemas", [])),
            "schema": prop(t.reference_derived("Schema", [])),
        }))),

        "Globals": type(t.group({
            "text types": prop(t.dictionary(t.component("Text Type"))),
            // "number types": t.dictionary(t.component("Number Type")),
        })),

        "Types": type(t.dictionary(t.component("Type"), 'ordered')),

        "Type": type(t.group({
            // "type parameters": t.component("Type Parameters"),
            "node": prop(t.component_cyclic("Type Node"))
        })),

        "Type Node": type(t.state_group({
            //"boolean": t.nothing(),
            "component": tstate(t.state_group({
                "external": tstate(t.group({
                    "import": prop(t.reference("Imports", [])),
                    "type": prop(t.reference("Types", [])),
                })),
                "internal": tstate(t.reference("Types", [])),
                "internal cyclic": tstate(t.reference("Types", [], 'cyclic')),
            })),
            "dictionary": tstate(t.component("Dictionary")),
            "group": tstate(t.component("Group")),
            "list": tstate(t.group({
                "node": prop(t.component_cyclic("Type Node")),
            })),
            "nothing": tstate(t.nothing()),
            "optional": tstate(t.component_cyclic("Type Node")),
            "state group": tstate(t.dictionary(t.component_cyclic("Type Node"))),
            "text": tstate(t.state_group({
                "global": tstate(t.reference("Globals", [tr.g("text types")])),
                "local": tstate(t.component("Text Type")),
            })),
        })),

        "Text Type": type(t.group({
            "type": prop(t.state_group({
                "multi line": tstate(t.nothing()),
                "single line": tstate(t.nothing()),
            })),
        })),

        "Group": type(t.dictionary(t.component_cyclic("Type Node"))),

        "Dictionary": type(t.group({
            "node": prop(t.component_cyclic("Type Node")),
            "ordered": prop(t.boolean()),
        })),

    }
)