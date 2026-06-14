import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/interface"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'constrained': _pi.Optional_Value<string>
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
            _p.boolean.from.optional($p.constrained).is_set() ? 3 : 2,
            "data",
            _p.decide.optional(
                $p.constrained,
                ($) => _p.list.literal([$]),
                () => _p.list.literal([])
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
