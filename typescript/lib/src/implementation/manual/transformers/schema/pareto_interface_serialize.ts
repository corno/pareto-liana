import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'

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
            "in": sh.import_.ancestor(
                $p.constrained ? 3: 2,
                "data",
                $p.constrained
                    ? [
                        "resolved",
                    ]
                    : [],
            ),
            "out": sh.import_.external(
                "pareto-fountain-pen",
                [
                    "dist",
                    "interface",
                    "generated",
                    "liana",
                    "schemas",
                    "prose",
                    "data",
                ],
            ),
        },
        $.modules.__d_map(($, id) => sh.type.transformer(
            sh.t.component_imported(
                "in",
                id,
            ),
            sh.t.component_imported(
                "out",
                "Paragraph",
            ),
            null,
        )),
    )
}
