

import {
    resolver_modules, r, resolver, al, ls, av, gvs, ovi, rvs, option, option_constrained, oc, vcr, pvs,
} from "../../../../../shorthands/resolver/manual"




export const $ = resolver_modules(
    {

        "Modules": resolver(r.dictionary(r.group({
            "root value": r.component(
                "Value",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.acyclic.siblings(),
                    "possibly circular dependent sibling modules": al.cyclic.siblings(),
                }
            )
        }))),

        "Globals": resolver(r.group({
            "text types": r.dictionary(r.component("Text Type", {}, {})),
        })),

        "Text Type": resolver(r.group({
            "type": r.state({
                "multi line": option(r.nothing()),
                "single line": option(r.nothing()),
            }),
        })),


        "Value": resolver(r.state({
            "component": option(r.state({
                "external": option_constrained({ "import": oc.assert_set(pvs.parameter("imports")) }, r.group({
                    "import": r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("import", []))),
                    "type": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("import", [rvs.reference(), rvs.group("schema"), rvs.reference(), rvs.group("types"), rvs.component()]))),
                })),
                "internal acyclic": option(r.reference(ls.parameter("noncircular sibling modules"))),
                "internal": option(r.reference(ls.parameter("possibly circular dependent sibling modules"))),
            })),
            "dictionary": option(r.group({
                "value": r.component("Value",
                    {
                        "globals": av.parameter("globals"),
                        "imports": av.parameter("imports"),
                    },
                    {
                        "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                        "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                    }
                ),
                "ordered": r.simple(),
            })),
            "group": option(r.dictionary(r.component("Value",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            ))),
            "list": option(r.group({
                "value": r.component("Value", null, null),
            })),
            "nothing": option(r.nothing()),

            "optional": option(r.component("Value", null, null)),

            "state": option(r.dictionary(r.component("Value", null, null))),
            "text": option(r.state({
                "global": option_constrained({ "globals": oc.assert_set(pvs.parameter("globals")) }, r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("globals", [rvs.group("text types")])))),
                "local": option(r.component("Text Type", {}, {})),
            })),
        })),

        "Schemas": resolver(r.dictionary(r.component("Schema Tree", {}, {
            "sibling schemas": al.stack.push(
                ls.parameter("sibling schemas"),
                ls.acyclic.siblings()
            ),
        }))),

        "Schema Tree": resolver(r.state({
            "schema": option(r.component("Schema", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            })),
            "set": option(r.component("Schemas", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            }))
        })),

        "Schema": resolver(r.group({
            "imports": r.component("Imports", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            }),
            "globals": r.component("Globals", {
            }, {}),
            "types": r.component("Modules", {
                "globals": av.optional(ovi.set(gvs.sibling("globals", []))),
                "imports": av.optional(ovi.set(gvs.sibling("imports", [rvs.component()]))),
            }, {
            }),
        })),

        "Imports": resolver(r.dictionary(r.group({
            "schema set child": r.reference_stack(ls.parameter("sibling schemas"), {
                "schema": vcr.value([rvs.component()], "schema"),
            }),
            "schema": r.reference_derived(gvs.reference("schema set child", "schema", [])),
        }))),
    }
)