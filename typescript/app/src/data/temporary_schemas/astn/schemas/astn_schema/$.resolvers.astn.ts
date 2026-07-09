
import * as sh from "lib/shorthands/resolver/manual"




export const $ = sh.resolver_modules(
    {

        "Modules": sh.resolver(sh.r.dictionary(sh.r.group({
            "root value": sh.r.component(
                "Value",
                {
                    "globals": sh.av.parameter("globals"),
                    "imports": sh.av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": sh.al.acyclic.siblings(),
                    "possibly circular dependent sibling modules": sh.al.cyclic.siblings(),
                }
            )
        }))),

        "Globals": sh.resolver(sh.r.group({
            "text types": sh.r.dictionary(sh.r.component("Text Type", {}, {})),
        })),

        "Text Type": sh.resolver(sh.r.group({
            "type": sh.r.state({
                "multi line": sh.option(sh.r.nothing()),
                "single line": sh.option(sh.r.nothing()),
            }),
        })),


        "Value": sh.resolver(sh.r.state({
            "component": sh.option(sh.r.state({
                "external": sh.option_constrained({ "import": sh.oc.assert_set(sh.pvs.parameter("imports")) }, sh.r.group({
                    "import": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("import", []))),
                    "type": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("import", [sh.rvs.reference(), sh.rvs.group("schema"), sh.rvs.reference(), sh.rvs.group("types"), sh.rvs.component()]))),
                })),
                "internal acyclic": sh.option(sh.r.reference(sh.ls.parameter("noncircular sibling modules"))),
                "internal": sh.option(sh.r.reference(sh.ls.parameter("possibly circular dependent sibling modules"))),
            })),
            "dictionary": sh.option(sh.r.group({
                "value": sh.r.component("Value",
                    {
                        "globals": sh.av.parameter("globals"),
                        "imports": sh.av.parameter("imports"),
                    },
                    {
                        "noncircular sibling modules": sh.al.parameter("noncircular sibling modules"),
                        "possibly circular dependent sibling modules": sh.al.parameter("possibly circular dependent sibling modules"),
                    }
                ),
                "ordered": sh.r.simple(),
            })),
            "group": sh.option(sh.r.dictionary(sh.r.component("Value",
                {
                    "globals": sh.av.parameter("globals"),
                    "imports": sh.av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": sh.al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": sh.al.parameter("possibly circular dependent sibling modules"),
                }
            ))),
            "list": sh.option(sh.r.group({
                "value": sh.r.component("Value", null, null),
            })),
            "nothing": sh.option(sh.r.nothing()),

            "optional": sh.option(sh.r.component("Value", null, null)),

            "state": sh.option(sh.r.dictionary(sh.r.component("Value", null, null))),
            "text": sh.option(sh.r.state({
                "global": sh.option_constrained({ "globals": sh.oc.assert_set(sh.pvs.parameter("globals")) }, sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("globals", [sh.rvs.group("text types")])))),
                "local": sh.option(sh.r.component("Text Type", {}, {})),
            })),
        })),

        "Schemas": sh.resolver(sh.r.dictionary(sh.r.component("Schema Tree", {}, {
            "sibling schemas": sh.al.stack.push(
                sh.ls.parameter("sibling schemas"),
                sh.ls.acyclic.siblings()
            ),
        }))),

        "Schema Tree": sh.resolver(sh.r.state({
            "schema": sh.option(sh.r.component("Schema", {}, {
                "sibling schemas": sh.al.parameter("sibling schemas"),
            })),
            "set": sh.option(sh.r.component("Schemas", {}, {
                "sibling schemas": sh.al.parameter("sibling schemas"),
            }))
        })),

        "Schema": sh.resolver(sh.r.group({
            "imports": sh.r.component("Imports", {}, {
                "sibling schemas": sh.al.parameter("sibling schemas"),
            }),
            "globals": sh.r.component("Globals", {
            }, {}),
            "types": sh.r.component("Modules", {
                "globals": sh.av.optional(sh.ovi.set(sh.gvs.sibling("globals", []))),
                "imports": sh.av.optional(sh.ovi.set(sh.gvs.sibling("imports", [sh.rvs.component()]))),
            }, {
            }),
        })),

        "Imports": sh.resolver(sh.r.dictionary(sh.r.group({
            "schema set child": sh.r.reference_stack(sh.ls.parameter("sibling schemas"), {
                "schema": sh.vcr.value([sh.rvs.component()], "schema"),
            }),
            "schema": sh.r.reference_derived(sh.gvs.reference("schema set child", "schema", [])),
        }))),
    }
)