import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _psh from 'pareto-core-shorthands/dist/unconstrained'


import * as d_in from "../../../../../interface/generated/pareto/schemas/module/data/resolved"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data/resolved"

import * as sh from "exupery/dist/shorthands/interface"
import * as t_exupery_interface_main from "../../../../manual/schemas/schema/transformers/exupery_interface_main"
import * as t_exupery_interface_types from "../../../../manual/schemas/schema/transformers/exupery_interface_types"


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
    //             t_exupery_interface_types.Type_Node($.result, { 'add location': $p['add location'] }),
    //             t_exupery_interface_types.Type_Node(
    //                 $.context,
    //                 {
    //                     'add location': $p['add location'],
    //                 }
    //             ),
    //             $.parameters.__d_map(($) => _p.sg($, ($) => t_exupery_interface_types.Type_Node($, { 'add location': $p['add location'] }))),
    //         ))
    //         case 'set': return _p.ss($, ($) => Operations($, { 'add location': $p['add location'] }))
    //         default: return _p.au($[0])
    //     }
    // })))
}

export const Module = ($: d_in.Module): d_out.Module_Set => {
    return _psh.dictionary.literal({
        "core": sh.m.set({

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
        "schemas": t_exupery_interface_main.Schema_Tree($['schema tree']),
    })
}