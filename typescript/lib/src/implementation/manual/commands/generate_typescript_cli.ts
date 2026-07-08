import * as p_ from 'pareto-core/implementation/command'
import * as p_temp from 'pareto-core/implementation/transformer'
import p_iterate from 'pareto-core/implementation/refiner/specials/iterate'

import * as interface_ from "../../../interface/declarations/commands.js"

// //data types
import type * as d_main from "pareto-application-api/interface/data/main"
import type * as d_resource from "../../../interface/data/generate_typescript.js"
import type * as d_path from "pareto-resources/interface/generated/liana/schemas/fs_unrestricted_path/data"
type My_Error_1 =
    | ['too many arguments', null]
    | ['missing', {
        'expected': Expected,
    }]
    | ['invalid source path', null]
    | ['processing', null]

type Expected =
    | ['source path', null]
    | ['target path', null]

type Res = {
    'source': d_path.Node_Path
    'target': d_path.Context_Path
}

//dependencies
import * as c_generate_typescript from "./generate_typescript.js"
import * as r_unrestricted_path_from_text from "pareto-resources/implementation/manual/refiners/path_unrestricted/text"
import * as t_generate_typescript_to_prose from "../transformers/generate_typescript/prose.js"
import * as t_path_to_text from "pareto-resources/implementation/manual/transformers/unrestricted_path/text"

// //shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: interface_.generate_typescript_cli = p_.command(
    ($d, $s, $q, $c) => [

        p_.s.handle_error<d_main.Error, My_Error_1>(
            [
                p_.s.refine(
                    (abort) => p_iterate<
                        Res,
                        string,
                        null
                    >({
                        list: $d.arguments,
                        end_info: null,
                        on_dangling_item: () => abort(['too many arguments', null]),
                        // create_expectation_error: (expected, found) => ['missing', { 'expected': expected }],
                        assign: (iterator) => ({

                            'source': r_unrestricted_path_from_text.Node_Path(
                                iterator.consume(
                                    ($) => abort(['missing', {
                                        'expected': ['source path', null]
                                    }]),
                                    ($) => $,
                                ),
                                () => abort(['invalid source path', null]),
                                { 'pedantic': false }
                            ),
                            'target': r_unrestricted_path_from_text.Context_Path(
                                iterator.consume(
                                    ($) => abort(['missing', {
                                        'expected': ['target path', null]
                                    }]),
                                    ($) => $,
                                ),
                            ),
                        })
                    }),
                    ($v) => [
                        p_.s.handle_error<My_Error_1, d_resource.Error>(
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
                                                t_generate_typescript_to_prose.Error($),
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
                                p_temp.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'missing': return p_temp.ss($, ($) => p_temp.from.state($.expected).decide(
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'source path': return p_temp.ss($, ($) => sh.ph.literal("missing source path argument"))
                                                        case 'target path': return p_temp.ss($, ($) => sh.ph.literal("missing target path argument"))
                                                        default: return p_temp.exhaustive($[0])
                                                    }
                                                }
                                            ))
                                            case 'invalid source path': return p_temp.ss($, ($) => sh.ph.literal("invalid source path argument"))
                                            case 'too many arguments': return p_temp.ss($, ($) => sh.ph.literal("too many arguments"))
                                            case 'processing': return p_temp.ss($, ($) => sh.ph.literal("error while processing"))
                                            default: return p_temp.exhaustive($[0])
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