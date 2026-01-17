import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data/resolved"

import * as sh from "exupery/dist/shorthands/interface"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'imports': d_in.Imports
    }
): d_out.Module_Set.D => {
    return sh.m.module(

        {
            "in": sh.import_.sibling(
                "data types",
                [
                    "source",
                ],
            ),
        },
        $.types.__d_map(($, key) => sh.type.transformer(
            sh.t.component_imported(
                "in",
                key,
            ),
            sh.t.text(),
            null,
        )),
    )
}
