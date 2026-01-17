import * as _pi from 'pareto-core-interface'

import {
    resolvers, r, resolver, al, ls, av, gvs, ovi, vst, state, state_constrained, oc, pc, pvs, reference,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"


export const $: g_.Resolvers = resolvers(
    {
        "Type": resolver(r.group({
            "node": r.component("Type Node", {
                "globals": av.parameter("globals"),
                "imports": av.parameter("imports"),
            }, {
                "noncircular sibling types": al.parameter(("noncircular sibling types")),
                "possibly circular dependent sibling types": al.parameter(("possibly circular dependent sibling types")),
            })
        })),

        "Types": resolver(r.dictionary(r.component("Type", {
            "globals": av.parameter("globals"),
            "imports": av.parameter("imports"),
        }, {
            "noncircular sibling types": al.not_circular_dependent_siblings(),
            "possibly circular dependent sibling types": al.possibly_circular_dependent_siblings(),
        }))),

        "Globals": resolver(r.group({
            "text types": r.dictionary(r.component("Text Type", {}, {})),
        })),

        "Text Type": resolver(r.group({
            "type": r.state_group({
                "multi line": state(r.nothing()),
                "single line": state(r.nothing()),
            }),
        })),

        "Group": resolver(r.dictionary(r.component("Type Node",
            {
                "globals": av.parameter("globals"),
                "imports": av.parameter("imports"),
            },
            {
                "noncircular sibling types": al.parameter("noncircular sibling types"),
                "possibly circular dependent sibling types": al.parameter("possibly circular dependent sibling types"),
            }
        ))),

        "Dictionary": resolver(r.group({
            "node": r.component("Type Node",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling types": al.parameter("noncircular sibling types"),
                    "possibly circular dependent sibling types": al.parameter("possibly circular dependent sibling types"),
                }
            ),
            "ordered": r.boolean(),
        })),

        "Type Node": resolver(r.state_group({
            "component": state(r.state_group({
                "external": state_constrained({ "import": oc.assert_set(pvs.parameter("imports")) }, r.group({
                    "import": r.reference(gvs.dictionary(gvs.option_constraint("import", []))),
                    "type": r.reference(gvs.dictionary(gvs.sibling("import", [vst.reference(), vst.group("schema"), vst.reference(), vst.group("types"), vst.component()]))),
                })),
                "internal": state(r.reference(ls.parameter("noncircular sibling types"))),
                "internal cyclic": state(r.reference(ls.parameter("possibly circular dependent sibling types"))),
            })),
            "dictionary": state(r.component("Dictionary",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling types": al.parameter("noncircular sibling types"),
                    "possibly circular dependent sibling types": al.parameter("possibly circular dependent sibling types"),
                }
            )),
            "group": state(r.component("Group",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling types": al.parameter("noncircular sibling types"),
                    "possibly circular dependent sibling types": al.parameter("possibly circular dependent sibling types"),
                }
            )),
            "list": state(r.group({
                "node": r.component("Type Node", null, null),
            })),
            "nothing": state(r.nothing()),

            "optional": state(r.component("Type Node", null, null)),

            "state group": state(r.dictionary(r.component("Type Node", null, null))),
            "text": state(r.state_group({
                "global": state_constrained({ "globals": oc.assert_set(pvs.parameter("globals")) }, r.reference(gvs.dictionary(gvs.option_constraint("globals", [vst.group("text types")])))),
                "local": state(r.component("Text Type", {}, {})),
            })),
        })),

        "Schemas": resolver(r.dictionary(r.component("Schema Tree", {}, {
            "sibling schemas": al.stack(
                ls.parameter("sibling schemas"),
                ls.not_circular_dependent_siblings()
            ),
        }))),

        "Schema Tree": resolver(r.state_group({
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
            "types": r.component("Types", {
                "globals": av.optional(ovi.set(gvs.sibling("globals", []))),
                "imports": av.optional(ovi.set(gvs.sibling("imports", [vst.component()]))),
            }, {
            }),
        })),

        "Imports": resolver(r.dictionary(r.group({
            "schema set child": r.reference_stack(ls.parameter("sibling schemas"), {
                "schema": pc.property([vst.component()], "schema"),
            }),
            "schema": r.reference_derived(gvs.reference("schema set child", "schema", [])),
        }))),
    }
)