import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import * as _psh from 'pareto-core-shorthands/dist/unconstrained'


import * as d_in from "../../../../../interface/generated/pareto/schemas/module/data/resolved"
import * as d_out from "pareto/dist/interface/generated/pareto/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/interface"
import * as t_pareto_interface_main from "../../../../manual/schemas/schema/transformers/pareto_interface_main"
import * as t_pareto_interface_types from "../../../../manual/schemas/schema/transformers/pareto_interface_types"


export const Operations = (
    $: d_in.Operations,
    $p: {
        'add location': boolean
    }
): d_out.Type => {
    return sh.t.group({})
    // return sh.t.group($.__d_map(($) => _p.sg($, ($) => {
    //     switch ($[0]) {
    //         case 'operation': return _p.ss($, ($) => sh.type.transformer(
    //             t_pareto_interface_types.Type_Node($.result, { 'add location': $p['add location'] }),
    //             t_pareto_interface_types.Type_Node(
    //                 $.context,
    //                 {
    //                     'add location': $p['add location'],
    //                 }
    //             ),
    //             $.parameters.__d_map(($) => _p.sg($, ($) => t_pareto_interface_types.Type_Node($, { 'add location': $p['add location'] }))),
    //         ))
    //         case 'set': return _p.ss($, ($) => Operations($, { 'add location': $p['add location'] }))
    //         default: return _p.au($[0])
    //     }
    // })))
}

export const Module = ($: d_in.Module): d_out.Module_Set => {
    return _psh.dictionary.literal({
        "generic": sh.m.set({
            "resolve.ts": sh.m.module(
                {
                    "location": sh.import_.sibling("location", []),
                },
                {
                    "Error": sh.type.data(sh.t.group({
                        "type": sh.t.state_group({
                            "cyclic lookup in acyclic context": sh.t.text(),
                            "missing required entry": sh.t.text(),
                            "no context lookup": sh.t.nothing(),
                            "no such entry": sh.t.text(),
                            "not the same node": sh.t.text(),
                            "wrong state": sh.t.group({
                                "expected": sh.t.text(),
                                "found": sh.t.text(),
                            }),
                            "tbd": sh.t.text(),
                        }),
                        "location": sh.t.component_imported("location", "Location",),
                    })),
                }
            ),
            "location.ts": sh.m.module(
                {},
                {
                    "Location": sh.type.data(sh.t.group({
                        "file": sh.t.text(),
                        "line": sh.t.natural(),
                        "column": sh.t.natural(),
                    })),
                }
            ),

        }),

        // "operations": m.module(
        //     {
        //         "core": i.sibling(
        //             "core",
        //             [
        //                 "resolved"
        //             ],
        //             {
        //                 "Source": pa.sg($, ($) => t.null_()),
        //             },
        //         )
        //     },
        //     {},
        //     {
        //         "operations": type({}, Operations($.operations))
        //     },
        // ),
        "schemas": t_pareto_interface_main.Schema_Tree($['schema tree']),
    })
}