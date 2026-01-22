import * as _p from 'pareto-core/dist/transformer'

//FIXME, this one should be moved to pareto-targets

import * as d_in_s from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_in from "../../../../../interface/generated/liana/schemas/module/data/resolved"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

//transformations

import * as t_interface_to_typescript_temp from "pareto/dist/implementation/manual/schemas/interface/transformers/typescript_light"
import * as t_liana_to_pareto_interface from "./pareto_interface"
import * as t_typescript_light_to_fountain_pen_block from "pareto/dist/modules/typescript_light/implementation/manual/schemas/typescript_light/transformers/fountain_pen_block"

//resolvers
// import * as r_pareto_interface from "pareto/dist/implementation/generated/liana/schemas/interface/resolve"


export const Module = ($: d_in.Module): d_out.Directory => {
    return t_typescript_light_to_fountain_pen_block.Directory(
        t_interface_to_typescript_temp.Module_Set(
            t_liana_to_pareto_interface.Module($),

            // r_pareto_interface.r_Module_Set(
            //     t_pareto_to_pareto_interface.Module($),
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