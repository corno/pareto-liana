import * as _p from 'pareto-core-transformer'

//FIXME, this one should be moved to pareto-targets

import * as d_in from "../../../../../interface/generated/pareto/schemas/module/data/resolved"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data"

//transformations
import * as t_pareto_to_exupery_implementation from "./exupery_implementation"
import * as t_implementation_to_typescript_temp from "exupery/dist/implementation/manual/schemas/implementation/transformers/typescript_light"
import * as t_typescript_light_to_fountain_pen_block from "exupery/dist/implementation/manual/schemas/typescript_light/transformers/fountain_pen_block"

//resolvers
// import * as r_exupery_implementation from "exupery/dist/implementation/generated/pareto/schemas/implementation/resolve"


export const Module = ($: d_in.Module): d_out.Directory => {
    return t_typescript_light_to_fountain_pen_block.Directory(
        t_implementation_to_typescript_temp.Module_Set(
            t_pareto_to_exupery_implementation.Module($),
            // r_exupery_implementation.r_Module_Set(
            //     t_pareto_to_exupery_implementation.Module($),
            //     {
            //         'parameters': {
            //             'lookups': null,
            //             'values': null,
            //         },
            //         'location 2 string': location_to_string
            //     }
            // ),
            {
                'phase': 'development',
            }
        )
    )
}