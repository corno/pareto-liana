import * as _p from 'pareto-core-transformer'

//FIXME, this one should be moved to pareto-targets

import * as d_in_s from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_in from "../../../../../interface/generated/pareto/schemas/module/data/resolved"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data"

//transformations

import * as t_interface_to_typescript_temp from "exupery/dist/implementation/manual/schemas/interface/transformers/typescript_light"
import * as t_pareto_to_exupery_interface from "./exupery_interface"
import * as t_typescript_light_to_fountain_pen_block from "exupery/dist/implementation/manual/schemas/typescript_light/transformers/fountain_pen_block"

//resolvers
// import * as r_exupery_interface from "exupery/dist/implementation/generated/pareto/schemas/interface/resolve"


export const Module = ($: d_in.Module): d_out.Directory => {
    return t_typescript_light_to_fountain_pen_block.Directory(
        t_interface_to_typescript_temp.Module_Set(
            t_pareto_to_exupery_interface.Module($),

            // r_exupery_interface.r_Module_Set(
            //     t_pareto_to_exupery_interface.Module($),
            //     {
            //         'parameters': {
            //             'lookups': null,
            //             'values': null,
            //         },
            //         'location 2 string': location_to_string
            //     }
            // )
        )
    )
}