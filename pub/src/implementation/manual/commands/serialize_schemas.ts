//core
import * as _p from 'pareto-core/dist/command'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as signatures from "../../../interface/signatures"

//data
import { $ as poormans_modules } from "../../../data/temporary_schemas/all"

//dependencies
import * as ds_path from "pareto-resources/dist/implementation/manual/schemas/context_path/refiners/temp_string"
import * as r_module from "../../temp/resolvers/module"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/schemas/path/transformers/path"

export const $$: signatures.commands.serialize_schemas = _p.command_procedure(
    ($p, $cr, $qr) => [
        _p.dictionaryx.parallel(
            poormans_modules,
            ($, id) => [

                $cr['write file'].execute(
                    {
                        'path': t_path_to_path.create_node_path(ds_path.Context_Path($['target path']), { 'node': `module.astn` }),
                        'data': _p_list_from_text(
                            "IMPLEMENT SERIALIZATION HERE",
                            ($) => $,
                        )
                        // 'data': s_serialize.Document(
                        //     t_m_module.Module(
                        //         r_module.Module(
                        //             $.module,
                        //             {
                        //                 'parameters': {
                        //                     'lookups': null,
                        //                     'values': null,
                        //                 },
                        //                 'location 2 string': location_to_string
                        //             }
                        //         ),
                        //         {
                        //             'value serializers': {
                        //                 'boolean': ($) => $ ? "true" : "false",
                        //                 'default number': () => "FIXME NUMBER",
                        //                 'custom numbers': null
                        //             }
                        //         }
                        //     )
                        // ),
                    },
                    ($) => $
                )
            ],
            ($) => ({
                'exit code': 1
            })

        )
    ]
)