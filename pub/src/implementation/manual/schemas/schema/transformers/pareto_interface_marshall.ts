import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/interface"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'constrained': boolean
    }
): d_out.Module_Set.D => sh.m.module(
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
        "in": sh.import_.sibling(
            "data",
            $p.constrained
                ? ["resolved"]
                : [],
        ),
    },
    $.types.__d_map(($, id) => sh.type.transformer(
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
