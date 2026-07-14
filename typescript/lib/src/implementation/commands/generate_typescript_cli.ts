import * as p_ from 'pareto-core/implementation/command'
import * as p_temp from 'pareto-core/implementation/transformer'
import p_iterate from 'pareto-core/implementation/refiner/specials/iterate'

//interface dependencies
import type * as command_interfaces_pareto_application_api from "pareto-application-api/interface/commands"
import type * as command_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/commands"
import type * as command_interfaces_pareto_stream_api from "pareto-stream-api/interface/commands"
import type * as query_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/queries"

// //schemas
import type * as s_main from "./main.js"
import type * as s_resource from "../../interface/schemas/generate_typescript.js"
import type * as s_path from "../../../interface/schemas/fs_unrestricted_path"
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
    'source': s_path.Node_Path
    'target': s_path.Context_Path
}

//dependencies
import * as c_generate_typescript from "./generate_typescript.js"
import * as r_unrestricted_path_from_text from "pareto-resources/implementation/refiners/path_unrestricted/text"
import * as t_generate_typescript_to_prose from "../transformers/generate_typescript/prose.js"
import * as t_path_to_text from "pareto-resources/implementation/transformers/unrestricted_path/text"

// //shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: p_.Command_Implementation<
    command_interfaces_pareto_application_api.main,
    null,
    {
        'read file': query_interfaces_pareto_filesystem_unrestricted_api.read_file
    },
    {
        'copy': command_interfaces_pareto_filesystem_unrestricted_api.copy
        'log': command_interfaces_pareto_stream_api.log
        'log error': command_interfaces_pareto_stream_api.log_error
        'make directory': command_interfaces_pareto_filesystem_unrestricted_api.make_directory
        'remove': command_interfaces_pareto_filesystem_unrestricted_api.remove
        'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
    }
> = p_.command(
    ($d, $s, $q, $c) => [

        p_.s.handle_error<s_main.Error, My_Error_1>(
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
                        p_.s.handle_error<My_Error_1, s_resource.Error>(
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