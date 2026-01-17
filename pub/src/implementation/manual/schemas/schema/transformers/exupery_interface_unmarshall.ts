import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data/resolved"

import * as sh from "exupery/dist/shorthands/interface"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'constrained': boolean
    }
): d_out.Module_Set.D => {
    return sh.m.module(
        {
            "out": sh.import_.sibling(
                "data types",
                [
                    "target",
                ],
            ),
            "in": sh.import_.external(
                "astn",
                [
                    "dist",
                    "interface",
                    "generated",
                    "pareto",
                    "schemas",
                    "authoring parse tree",
                    "data types",
                    "target",
                ],
            ),
        },
        $.types.__d_map(($, key) => sh.type.refiner(
            sh.t.component_imported(
                "in",
                "Value",
            ),
            sh.t.component_imported(
                "out",
                key,
            ),
            null,
            null,
            null,
        )),
    )
}
