//core
import * as p_ from 'pareto-core/implementation/command'
import * as p_temp from 'pareto-core/implementation/transformer'


import type * as interface_ from "../../declarations/commands.js"

import type * as d_main from "pareto-application-api/interface/data/main"
import type * as d_resolve from "liana-core/interface/data/resolve"
import type * as d_write_file from "pareto-filesystem-unrestricted-api/interface/generated/liana/schemas/fs_unrestricted_write_file/data"

//data
import { $ as poormans_modules } from "../../data/temporary_schemas/all.js"

//dependencies
import * as r_path_from_temp_string from "pareto-resources/implementation/manual/refiners/path_unrestricted/text"
import * as r_schema_resolved_from_unresolved from "../to_be_generated/refiners/schema/unresolved_manual.js"
import * as t_path_to_path from "pareto-resources/implementation/manual/transformers/unrestricted_path/unrestricted_path"
import * as t_schema_to_prose from "../generated/liana/schemas/schema/resolved/transformers/prose.js"
import * as t_fp_to_loc from "pareto-fountain-pen/implementation/manual/transformers/prose/list_of_characters"
import * as t_write_file_to_prose from "pareto-filesystem-unrestricted-api/implementation/manual/transformers/write_file/prose"
import * as t_resolve_to_prose from "liana-core/implementation/manual/transformers/resolve/prose"
import * as t_loc_to_prose from "liana-core/implementation/manual/transformers/location/prose"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

type My_Error =
    | ['error writing file', d_write_file.Error]
    | ['resolve error', d_resolve.Error]

export const $$: interface_.serialize_schemas = p_.command(
    ($d, $s, $q, $c) => [
        p_.s.dictionary(
            poormans_modules,
            ($, id) => [

                p_.s.handle_error<d_main.Error, My_Error>(
                    [

                        p_.s.refine(
                            (abort) => r_schema_resolved_from_unresolved.Package(
                                $.package,
                                ($) => abort(['resolve error', $]),
                                p_.literal.nothing(),
                                p_.literal.nothing(),
                            ),
                            ($v) => [
                                $c['write file'].execute(
                                    {
                                        'path': t_path_to_path.create_node_path(
                                            t_path_to_path.extend_context_path_with_single_step(r_path_from_temp_string.Context_Path($['target path']), { 'addition': "liana" }),
                                            { 'node': "module.liana.lna" }
                                        ),
                                        // 'data': p_list_from_text(
                                        //     "IMPLEMENT SERIALIZATION HERE",
                                        //     ($) => $,
                                        // )
                                        'data': t_fp_to_loc.Paragraph(
                                            t_schema_to_prose.Package(
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
                        $c['log error'].execute(
                            {
                                'message': sh.pg.sentences([
                                    sh.sentence([
                                        sh.ph.literal("Error serializing schema for module '"),
                                        sh.ph.literal(id),
                                        sh.ph.literal("': "),
                                        p_temp.from.state($).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'resolve error': return p_temp.ss($, ($) => sh.ph.composed([
                                                        t_loc_to_prose.Range(
                                                            $.location,
                                                            {
                                                                'document resource identifier': "unknown DRI",
                                                                'character location reporting': ['one based', null]
                                                            }
                                                        ),
                                                        sh.ph.literal(": "),
                                                        t_resolve_to_prose.Error(
                                                            $,
                                                        )
                                                    ]))
                                                    case 'error writing file': return p_temp.ss($, ($) => t_write_file_to_prose.Error($))
                                                    default: return p_temp.exhaustive($[0])
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