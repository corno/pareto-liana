import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_di from 'pareto-core/dist/data/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/interface"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'constrained': p_di.Optional_Value<string>
    }
): d_out.Package_Set.D => sh.m.package_functions(
    {
        "out": sh.import_.external(
            "astn-core",
            [
                "dist",
                "interface",
                "generated",
                "liana",
                "schemas",
                "sealed target",
                "data",
            ],
        ),
        "in": sh.import_.ancestor(
            pt.boolean.from.optional($p.constrained).is_set() ? 3 : 2,
            "data",
            pt.decide.optional(
                $p.constrained,
                ($) => pt.literal.list([$]),
                () => pt.literal.list([])
            )
        ),
    },
    $.modules.__d_map(($, id) => sh.type.transformer(
        sh.t.component_imported(
            "in",
            id,
        ),
        sh.t.component_imported(
            "out",
            "Value",
        ),
        null,
    )),
)
