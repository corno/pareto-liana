import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

namespace interface_ {

    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Package_Set.D,
        {
            'constrained': p_di.Optional_Value<string>
        }
    >

}

//shorthands
import * as sh from "pareto/dist/shorthands/interface"


export const Schema: interface_.Schema = ($, $p) => sh.m.package_functions(
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
            p_.from.optional($p.constrained).decide(
                ($) => 3,
                () => 2,
            ),
            "data",
            p_.from.optional(
                $p.constrained,
            ).decide(
                ($) => p_.literal.list([$]),
                () => p_.literal.list([])
            )
        ),
    },
    $.modules.__d_map_deprecated(($, id) => sh.type.transformer(
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
