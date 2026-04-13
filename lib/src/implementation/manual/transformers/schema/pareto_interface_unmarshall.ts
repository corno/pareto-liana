import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/interface"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'constrained': boolean
    }
): d_out.Package_Set.D => {
    return sh.m.package_functions(
        {
            "generic": sh.import_.external(
                "liana-core",
                [
                    "dist",
                    "interface",
                    "to be generated",
                    "unmarshall",
                ],
            ),
            "out": sh.import_.ancestor(
                $p.constrained ? 3: 2,
                "data",
                $p.constrained
                    ? [
                        "unresolved",
                    ]
                    : [],
            ),
            "in": sh.import_.external(
                "astn-core",
                [
                    "dist",
                    "interface",
                    "generated",
                    "liana",
                    "schemas",
                    "parse tree",
                    "data",
                ],
            ),
        },
        $.modules.__d_map(($, id) => sh.type.refiner(
            sh.t.component_imported(
                "in",
                "Value",
            ),
            sh.t.component_imported(
                "out",
                id,
            ),
            sh.t.component_imported("generic", "Error"),
            null,
            null,
        )),
    )
}
