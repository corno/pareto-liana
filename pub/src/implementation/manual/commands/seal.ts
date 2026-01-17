import * as _p from 'pareto-core-command'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../../modules/common_tool_signatures/interface/signatures"


//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_transform_file from "../../../modules/common_tool_signatures/interface/to_be_generated/transform_file"

//dependencies
import { $$ as q_load_pareto_file } from "../queries/load_pareto_file"
import * as r_file_in_file_out_from_main from "../../../modules/common_tool_signatures/implementation/manual/schemas/file_in_file_out/refiners/main"
import * as s_path from "pareto-resources/dist/implementation/manual/schemas/path/serializers"
import * as s_transform_file from "../../../modules/common_tool_signatures/implementation/manual/schemas/transform_file/serializers"

//data types

//dependencies
import { $$ as create_file_to_file_command } from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"
import * as s_load_pareto_file from "../schemas/load_pareto_file/serializers"
// import * as t_parse_result_to_fp from "astn/dist/implementation/manual/schemas/parse_tree/transformers/token"
import * as s_fp from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"


export const $$: signatures.commands.transform_file = _p.command_procedure(($p, $cr, $qr) => [

    _p.create_error_handling_context<d_main.Error, d_transform_file.Error>(
        [

            _p.refine_without_error_transformation(
                (abort) => r_file_in_file_out_from_main.Parameters($p, ($) => abort(['file in file out', ['command line arguments', $]])),
                ($r) => [
                    _p.query(
                        q_load_pareto_file({
                            'read file': $qr['read file']
                        })(
                            {
                                'file path': $r.in,
                            },
                            ($): d_transform_file.Error => ['processing', s_load_pareto_file.Error($)]
                        ),
                        ($) => $,
                        ($) => [

                           $cr['write file'].execute(
                                {
                                    'data': "FIXME: SERALIZED DATA",
                                    'path': $r.out,
                                },
                                ($) => ['file in file out', ['writing file', $]]
                            )

                        ]
                    ),
                ]
            ),
        ],
        ($) => [
            $cr['log error'].execute(
                {
                    'lines': _p.list.literal([s_transform_file.My_Error($)])
                },
                ($) => ({
                    'exit code': 2
                })
            )
        ],
        {
            'exit code': 1
        },
    ),
])
