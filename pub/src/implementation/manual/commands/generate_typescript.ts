import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/assign'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_implement_me from 'pareto-core-dev/dist/implement_me'
import _p_variables from 'pareto-core/dist/_p_variables'

import * as signatures from "../../../interface/signatures"

// //data types
// import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
// import * as d_resolve from "liana-core/dist/interface/to_be_generated/resolve"
// import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

// export type Error = _pi.Dictionary<Package_Error>

// export type Package_Error =
//     | ['could not log', null]
//     | ['could not remove interface', null]
//     | ['could not remove implementation', null]
//     | ['could not write interface', null]
//     | ['could not write implementation', null]
//     | ['could not copy generic implementation', null]
//     | ['could not copy core interface', null]
//     | ['could not deserialize module', d_resolve.Error]

// //data
// import { $ as poormans_modules } from "../../../data/temporary_schemas/all"

// //dependencies
// import * as r_schema from "../../temp/resolvers/schema/unresolved_manual"
// import * as t_pareto_implementation_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/implementation/serialized_typescript"
// import * as t_pareto_interface_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/interface/serialized_typescript"
// import * as t_liana_to_pareto_implementation from "../transformers/schema/pareto_implementation"
// import * as t_liana_to_pareto_interface from "../transformers/schema/pareto_interface"
// import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/path/path"
// import * as r_context_path_from_text from "pareto-resources/dist/implementation/manual/refiners/context_path/text"

// //shorthands
// import * as sh from "pareto-fountain-pen/dist/shorthands/prose"


export const $$: signatures.commands.generate_typescript = _p.command_procedure(
    ($p, $cr, $qr) => [


        //         _p.
        //         $cr.log.execute(
        //             {
        //                 'message': sh.pg.sentences([
        //                     sh.sentence([
        //                         sh.ph.literal("generating..."),
        //                     ])
        //                 ])
        //             },
        //             ($): d_main.Error => ({
        //                 'exit code': 1
        //             })
        //         ),
        //         _p.handle_error(
        //             [

        //             ],
        //             ($) => [
        //                 $cr.log.execute(
        //                     {
        //                         'message': Error(
        //                             $,
        //                             {
        //                                 'character location reporting': ['one based', null]
        //                             }
        //                         )
        //                     },
        //                     ($) => ({
        //                         'exit code': 1
        //                     })
        //                 ),
        //             ],
        //             () => ({
        //                 'exit code': 1
        //             })
        //         )
    ]
)