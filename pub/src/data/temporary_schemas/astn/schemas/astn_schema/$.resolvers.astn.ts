import * as _pi from 'pareto-core/dist/interface'

import {
    resolvers, r, resolver, al, ls, av, gvs, ovi, rvs, state, state_constrained, oc, pc, pvs, reference,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"


export const $: g_.Module_Resolvers = resolvers(
    {
        "Module": resolver(r.group({
            "node": r.component("Value", {
                "globals": av.parameter("globals"),
                "imports": av.parameter("imports"),
            }, {
                "noncircular sibling modules": al.parameter(("noncircular sibling modules")),
                "possibly circular dependent sibling modules": al.parameter(("possibly circular dependent sibling modules")),
            })
        })),

        "Modules": resolver(r.dictionary(r.component("Module", {
            "globals": av.parameter("globals"),
            "imports": av.parameter("imports"),
        }, {
            "noncircular sibling modules": al.not_circular_dependent_siblings(),
            "possibly circular dependent sibling modules": al.possibly_circular_dependent_siblings(),
        }))),

        "Globals": resolver(r.group({
            "text types": r.dictionary(r.component("Text Type", {}, {})),
        })),

        "Text Type": resolver(r.group({
            "type": r.state({
                "multi line": state(r.nothing()),
                "single line": state(r.nothing()),
            }),
        })),

        "Group": resolver(r.dictionary(r.component("Value",
            {
                "globals": av.parameter("globals"),
                "imports": av.parameter("imports"),
            },
            {
                "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
            }
        ))),

        "Dictionary": resolver(r.group({
            "node": r.component("Value",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            ),
            "ordered": r.boolean(),
        })),

        "Value": resolver(r.state({
            "component": state(r.state({
                "external": state_constrained({ "import": oc.assert_set(pvs.parameter("imports")) }, r.group({
                    "import": r.reference(gvs.dictionary(gvs.option_constraint("import", []))),
                    "type": r.reference(gvs.dictionary(gvs.sibling("import", [rvs.reference(), rvs.group("schema"), rvs.reference(), rvs.group("types"), rvs.component()]))),
                })),
                "internal": state(r.reference(ls.parameter("noncircular sibling modules"))),
                "internal cyclic": state(r.reference(ls.parameter("possibly circular dependent sibling modules"))),
            })),
            "dictionary": state(r.component("Dictionary",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            )),
            "group": state(r.component("Group",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            )),
            "list": state(r.group({
                "node": r.component("Value", null, null),
            })),
            "nothing": state(r.nothing()),

            "optional": state(r.component("Value", null, null)),

            "state": state(r.dictionary(r.component("Value", null, null))),
            "text": state(r.state({
                "global": state_constrained({ "globals": oc.assert_set(pvs.parameter("globals")) }, r.reference(gvs.dictionary(gvs.option_constraint("globals", [rvs.group("text types")])))),
                "local": state(r.component("Text Type", {}, {})),
            })),
        })),

        "Schemas": resolver(r.dictionary(r.component("Schema Tree", {}, {
            "sibling schemas": al.stack(
                ls.parameter("sibling schemas"),
                ls.not_circular_dependent_siblings()
            ),
        }))),

        "Schema Tree": resolver(r.state({
            "schema": state(r.component("Schema", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            })),
            "set": state(r.component("Schemas", {}, {
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
                "schema": pc.property([rvs.component()], "schema"),
            }),
            "schema": r.reference_derived(gvs.reference("schema set child", "schema", [])),
        }))),
    }
)