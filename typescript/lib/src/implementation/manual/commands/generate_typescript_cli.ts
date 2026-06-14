import * as p_ from 'pareto-core/dist/command/implementation'
import * as p_t from 'pareto-core/dist/assign'
import p_iterate from 'pareto-core/dist/specials/iterate'

import * as signatures from "../../../interface/commands"

// //data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_resource from "../../../interface/to_be_generated/generate_typescript"
type My_Error_1 =
    | ['too many arguments', null]
    | ['missing source path', null]
    | ['invalid source path', null]
    | ['missing target path', null]
    | ['processing', null]

//dependencies
import * as c_generate_typescript from "./generate_typescript"
import * as r_unrestricted_path_from_text from "pareto-resources/dist/implementation/manual/refiners/path_unrestricted/text"
import * as t_generate_typescript_to_fp from "../transformers/generate_typescript/fountain_pen"
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/text"

// //shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: signatures.procedures.generate_typescript_cli = p_.command_procedure(
    ($d, $s, $q, $c) => [

        p_.handle_error<d_main.Error, My_Error_1>(
            [


                p_.refine_without_error_transformation(
                    (abort) => p_iterate(
                        $d.arguments,
                        null,
                        (iterator) => iterator.assert_finished(
                            () => ({
                                'source': r_unrestricted_path_from_text.Node_Path(
                                    iterator.consume(
                                        ($) => $,
                                        () => abort(['missing source path', null])
                                    ),
                                    () => abort(['invalid source path', null]),
                                    { 'pedantic': true }
                                ),
                                'target': r_unrestricted_path_from_text.Context_Path(
                                    iterator.consume(
                                        ($) => $,
                                        () => abort(['missing target path', null])
                                    ),
                                )
                            }),
                            {
                                'not_finished': ($) => abort(['too many arguments', null])
                            }
                        )
                    ),
                    ($v) => [


                        p_.handle_error<My_Error_1, d_resource.Error>(
                            [


                                c_generate_typescript.$$(
                                    null,
                                    $q,
                                    $c,
                                ).execute(
                                    {
                                        'source': $v.source,
                                        'target': $v.target,
                                        'type': ['package', null]
                                    },
                                    ($) => $,
                                ),
                                //log
                                $c.log.execute(
                                    {
                                        'message': sh.pg.sentences([
                                            sh.sentence([

                                                sh.ph.literal("generated package: "),
                                                sh.ph.literal(t_path_to_text.Node_Path($v.source)),
                                            ])
                                        ]),
                                    },
                                    ($) => ['could not log', null]
                                ),

                            ],
                            ($) => [
                                $c['log error'].execute(
                                    {
                                        'message': sh.pg.sentences([
                                            sh.sentence([
                                                t_generate_typescript_to_fp.Error($),
                                            ])
                                        ])
                                    },
                                    ($) => ['processing', null]
                                )
                            ],
                            () => ['processing', null]
                        ),

                    ]
                )
            ],
            ($) => [
                $c['log error'].execute(
                    {
                        'message': sh.pg.sentences([
                            sh.sentence([
                                p_t.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'missing source path': return p_t.ss($, ($) => sh.ph.literal("missing source path argument"))
                                        case 'invalid source path': return p_t.ss($, ($) => sh.ph.literal("invalid source path argument"))
                                        case 'missing target path': return p_t.ss($, ($) => sh.ph.literal("missing target path argument"))
                                        case 'too many arguments': return p_t.ss($, ($) => sh.ph.literal("too many arguments"))
                                        case 'processing': return p_t.ss($, ($) => sh.ph.literal("error while processing"))
                                        default: return p_t.au($[0])
                                    }
                                })
                            ])
                        ])
                    },
                    ($) => ({
                        'exit code': 2
                    })
                )
            ],
            () => ({
                'exit code': 1,
            })
        ),

    ]
)