import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_di from 'pareto-core/dist/data/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/interface"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'constrained': boolean
    }
): d_out.Package_Set.D => sh.m.package_functions(
    {
        "out": sh.import_.ancestor(
            $p.constrained ? 3 : 2,
            "data",
            $p.constrained
                ? [
                    "unresolved",
                ]
                : [],
        ),
        "in": sh.import_.ancestor(
            $p.constrained ? 3 : 2,
            "data",
            $p.constrained
                ? [
                    "resolved",
                ]
                : [],
        )
    },
    $.modules.__d_map(
        ($, id) => sh.type.transformer(
            sh.t.component_imported(
                "in",
                id,
            ),
            sh.t.component_imported(
                "out",
                id,
            ),
            null
        )
    ),
)
