import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import * as _psh from 'pareto-core-shorthands/dist/unconstrained'


import * as d_in from "../../../../../interface/generated/liana/schemas/module/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/interface"
import * as t_pareto_interface_main from "../../../../manual/schemas/schema/transformers/pareto_interface_main"


export const Module = ($: d_in.Module): d_out.Module_Set => {
    return _psh.dictionary.literal({
        "generic": sh.m.set({
            "resolve": sh.m.module(
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
            "location": sh.m.module(
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
        "schemas": t_pareto_interface_main.Schema_Tree(
            $['schema tree'],
            {
                'omit (de)serializer': $['omit (de)serializer'],
            }
        ),
    })
}