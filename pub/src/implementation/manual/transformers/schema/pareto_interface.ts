import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _psh from 'pareto-core-shorthands/dist/unconstrained'


import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/interface"
import * as t_pareto_interface_main from "./pareto_interface_main"


export const Package = ($: d_in.Package): d_out.Package_Set => {
    return _psh.dictionary.literal({
        // "generic": sh.m.set({
        //     // "location": sh.m.package_(
        //     //     {},
        //     //     {
        //     //         "Location": sh.type.data(sh.t.group({
        //     //             "document resource identifier": sh.t.text(),
        //     //             "line": sh.t.natural(),
        //     //             "column": sh.t.natural(),
        //     //         })),
        //     //     }
        //     // ),
        //     "unmarshall": sh.m.package_data(
        //         {},
        //         {
        //             "Error": sh.type.data(sh.t.state({
        //                 "expected a dictionary": sh.t.nothing(),
        //                 "expected a group": sh.t.nothing(),
        //                 "expected a list": sh.t.nothing(),
        //                 "expected a nothing": sh.t.nothing(),
        //                 "expected an optional": sh.t.nothing(),
        //                 "expected a state": sh.t.nothing(),
        //                 "expected a text": sh.t.nothing(),
        //                 "not a valid number": sh.t.nothing(),
        //                 "not a valid boolean": sh.t.nothing(),
        //                 "no such entry": sh.t.text(),
        //                 "unknown option": sh.t.text(),
        //             }))
        //         }
        //     ),
        //     "resolve": sh.m.package_data(
        //         {
        //             // "location": sh.import_.external("location", []),
        //         },
        //         {
        //             "Error": sh.type.data(sh.t.group({
        //                 "type": sh.t.state({
        //                     "constraint": sh.t.state({
        //                         "state": sh.t.group({
        //                             "expected": sh.t.text(),
        //                             "found": sh.t.text(),
        //                         }),
        //                         "optional value is not set": sh.t.nothing(),
        //                         "same node": sh.t.text(),
        //                     }),
        //                     "lookup": sh.t.state({
        //                         "cycle detected": sh.t.nothing(),
        //                         "no context lookup": sh.t.nothing(),
        //                         "no such entry": sh.t.text(),
        //                     }),
        //                     "missing required entries": sh.t.dictionary(sh.t.nothing()),
        //                 }),
        //                 "location": sh.t.component_imported("location", "Location",),
        //             })),
        //         }
        //     ),
        //     "deserialize": sh.m.package_data(
        //         {
        //             "unmarshall": sh.import_.sibling("unmarshall", []),
        //         },
        //         {
        //             "Error": sh.type.data(sh.t.state({
        //                 "tbd": sh.t.nothing()
        //             })),

        //             // "Parameters": sh.type.data(sh.t.group({
        //             //     "document resource identifier": sh.t.text(),
        //             //     "indentation": sh.t.natural(),
        //             // })),
        //         }
        //     ),

        // }),
        "schemas": t_pareto_interface_main.Schema_Tree(
            $['schema tree'],
            {
                'omit (de)serializer': $['omit (de)serializer'],
            }
        ),
    })
}