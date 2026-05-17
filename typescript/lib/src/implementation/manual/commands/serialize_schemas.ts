//core
import * as _p from 'pareto-core/dist/command'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as signatures from "../../../interface/signatures"

import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_resolve from "liana-core/dist/interface/to_be_generated/resolve"
import * as d_write_file from "pareto-resources/dist/interface/generated/liana/schemas/write_file/data"

//data
import { $ as poormans_modules } from "../../../data/temporary_schemas/all"

//dependencies
import * as r_path_from_temp_string from "pareto-resources/dist/implementation/manual/refiners/path/text"
import * as r_schema_resolved_from_unresolved from "../../temp/resolvers/schema/unresolved_manual"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/path/path"
import * as t_schema_to_fp from "../../generated/liana/schemas/schema/resolved/transformers/fountain_pen"
import * as t_fp_to_loc from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"
import * as t_write_file_to_fp from "pareto-resources/dist/implementation/manual/transformers/write_file/fountain_pen"
import * as t_resolve_to_fp from "liana-core/dist/implementation/manual/transformers/resolve/fountain_pen"
import * as t_loc_to_fp from "liana-core/dist/implementation/manual/transformers/location/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

type My_Error =
    | ['error writing file', d_write_file.Error]
    | ['resolve error', d_resolve.Error]

export const $$: signatures.commands.serialize_schemas = _p.command_procedure(
    ($p, $cr, $qr) => [
        _p.dictionaryx.parallel(
            poormans_modules,
            ($, id) => [

                _p.handle_error<d_main.Error, My_Error>(
                    [

                        _p.refine_without_error_transformation(
                            (abort) => r_schema_resolved_from_unresolved.Package(
                                $.package,
                                ($) => abort(['resolve error', $]),
                                null,
                                null,
                            ),
                            ($v) => [
                                $cr['write file'].execute(
                                    {
                                        'path': t_path_to_path.create_node_path(
                                            t_path_to_path.extend_context_path_with_single_step(r_path_from_temp_string.Context_Path($['target path']), { 'addition': "liana" }),
                                            { 'node': "module.liana.lna" }
                                        ),
                                        // 'data': _p_list_from_text(
                                        //     "IMPLEMENT SERIALIZATION HERE",
                                        //     ($) => $,
                                        // )
                                        'data': t_fp_to_loc.Paragraph(
                                            t_schema_to_fp.Package(
                                                $v,
                                            ),
                                            {
                                                'indentation': "    ",
                                                'newline': '\n'
                                            }
                                        ),
                                    },
                                    ($) => ['error writing file', $]
                                )

                            ]
                        )
                    ],
                    ($) => [
                        $cr['log error'].execute(
                            {
                                'message': sh.pg.sentences([
                                    sh.sentence([
                                        sh.ph.literal("Error serializing schema for module '"),
                                        sh.ph.literal(id),
                                        sh.ph.literal("': "),
                                        _p.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'resolve error': return _p.ss($, ($) => sh.ph.composed([
                                                    t_loc_to_fp.Range(
                                                        $.location,
                                                        {
                                                            'document resource identifier': "unknown DRI",
                                                            'character location reporting': ['one based', null]
                                                        }
                                                    ),
                                                    sh.ph.literal(": "),
                                                    t_resolve_to_fp.Error(
                                                        $,
                                                    )
                                                ]))
                                                case 'error writing file': return _p.ss($, ($) => t_write_file_to_fp.Error($))
                                                default: return _p.au($[0])
                                            }
                                        })
                                    ]),

                                ])
                            },
                            ($) => ({
                                'exit code': 2,
                            })
                        )
                    ],
                    () => ({
                        'exit code': 2,
                    })
                )

            ],
            ($) => ({
                'exit code': 1
            })

        )
    ]
)