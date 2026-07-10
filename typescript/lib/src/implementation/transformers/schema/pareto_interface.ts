import type * as p_i from 'pareto-core/interface/transformer'


//data types
import type * as d_in from "../../../modules/schema/interface/data/resolved.js"
import type * as d_out from "pareto/modules/interface/interface/data/resolved"

namespace interface_ {

    export type Package = p_i.Transformer<
        d_in.Package,
        d_out.Package_Set
    >

}

//dependencies
import * as t_pareto_interface_main from "./pareto_interface_main.js"

//shorthands
import * as p_xxxx from 'pareto-core-shorthands/unconstrained_manual'


export const Package: interface_.Package = ($) => {
    return p_xxxx.dictionary({
        // "generic": sh.m.set({
        //     // "location": sh.m.package_(
        //     //     {},
        //     //     {
        //     //         "Location": sh.type.data(sh.t.group({
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