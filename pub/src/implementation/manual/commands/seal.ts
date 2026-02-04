import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as signatures from "../../../modules/common_tool_signatures/interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_transform_file from "../../../modules/common_tool_signatures/interface/to_be_generated/transform_file"

//dependencies
import { $$x as q_load_pareto_file } from "../queries/load_pareto_file"
import * as r_file_in_file_out_from_main from "../../../modules/common_tool_signatures/implementation/manual/schemas/file_in_file_out/refiners/main"
import * as t_transform_file_to_fp from "../../../modules/common_tool_signatures/implementation/manual/schemas/transform_file/transformers/fountain_pen"
import * as t_load_pareto_file_to_fp from "../schemas/load_pareto_file/transformers/fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/text"


export const $$: signatures.commands.transform_file = _p.command_procedure(($p, $cr, $qr) => [

    _p.handle_error<d_main.Error, d_transform_file.Error>(
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
                            ($): d_transform_file.Error => ['processing', t_load_pareto_file_to_fp.Error($)]
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
                    'lines': _p.list.literal([
                        _p_text_from_list(
                            t_fp_to_text.Block_Part(
                                t_transform_file_to_fp.My_Error($),
                                {
                                    'indentation': `    `,
                                    'newline': `\n`,
                                }
                            ),
                            ($) => $,
                        )
                    ])
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
