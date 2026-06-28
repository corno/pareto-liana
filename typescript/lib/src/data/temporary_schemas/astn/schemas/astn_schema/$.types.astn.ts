
import * as sh from "../../../../../shorthands/schema/manual"



export const $ = sh.modules(
    {

        "Schema Tree": sh.module_(sh.t.state({
            "set": sh.toption(sh.t.component("Schemas")),
            "schema": sh.toption(sh.t.component("Schema")),
        })),

        "Schemas": sh.module_(sh.t.dictionary(sh.t.component("Schema Tree"))),

        "Schema": sh.module_(sh.t.group({
            "imports": sh.prop(sh.t.component("Imports")),
            "globals": sh.prop(sh.t.component("Globals")),
            "types": sh.prop(sh.t.component("Modules")),
        })),

        "Imports": sh.module_(sh.t.dictionary(sh.t.group({
            "schema set child": sh.prop(sh.t.reference_stack("Schemas", [], {
                "schema": sh.value_reference("Schema", []),
            })),
            "schema": sh.prop(sh.t.reference_derived("Schema", [])),
        }))),

        "Globals": sh.module_(sh.t.group({
            "text types": sh.prop(sh.t.dictionary(sh.t.component("Text Type"))),
        })),

        "Modules": sh.module_(sh.t.dictionary(sh.t.group({
            "root value": sh.prop(sh.t.component("Value"))
        }))),

        "Value": sh.module_(sh.t.state({
            "component": sh.toption(sh.t.state({
                "external": sh.toption(sh.t.group({
                    "import": sh.prop(sh.t.reference("Imports", [])),
                    "type": sh.prop(sh.t.reference("Modules", [])),
                })),
                "internal acyclic": sh.toption(sh.t.reference("Modules", [])),
                "internal": sh.toption(sh.t.reference("Modules", [], 'cyclic')),
            })),
            "dictionary": sh.toption(sh.t.group({
                "value": sh.prop(sh.t.component("Value")),
                "ordered": sh.prop(sh.t.simple("boolean")),
            })),
            "group": sh.toption(sh.t.dictionary(sh.t.component("Value"))),
            "list": sh.toption(sh.t.group({
                "value": sh.prop(sh.t.component("Value")),
            })),
            "nothing": sh.toption(sh.t.nothing()),
            "optional": sh.toption(sh.t.component("Value")),
            "state": sh.toption(sh.t.dictionary(sh.t.component("Value"))),
            "text": sh.toption(sh.t.state({
                "global": sh.toption(sh.t.reference("Globals", [sh.vp.g("text types")])),
                "local": sh.toption(sh.t.component("Text Type")),
            })),
        })),

        "Text Type": sh.module_(sh.t.group({
            "type": sh.prop(sh.t.state({
                "multi line": sh.toption(sh.t.nothing()),
                "single line": sh.toption(sh.t.nothing()),
            })),
        })),

    }
)