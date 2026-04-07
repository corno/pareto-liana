import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/assign'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_implement_me from 'pareto-core-dev/dist/implement_me'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_generate_typescript from "../../../interface/to_be_generated/generate_typescript"

export type Error = _pi.Dictionary<d_generate_typescript.Error>

//data
import { $ as poormans_modules } from "../../../data/temporary_schemas/all"

//dependencies
import * as r_schema from "../../temp/resolvers/schema/unresolved_manual"
import * as t_pareto_implementation_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/implementation/serialized_typescript"
import * as t_pareto_interface_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/interface/serialized_typescript"
import * as t_liana_to_pareto_implementation from "../transformers/schema/pareto_implementation"
import * as t_liana_to_pareto_interface from "../transformers/schema/pareto_interface"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/path/path"
import * as r_context_path_from_text from "pareto-resources/dist/implementation/manual/refiners/context_path/text"
import * as t_generate_typescript_to_fp from "../transformers/generate_typescript/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: signatures.commands.compile_temp_schemas = _p.command_procedure(
    ($p, $cr, $qr) => [

        $cr.log.execute(
            {
                'message': sh.pg.sentences([
                    sh.sentence([
                        sh.ph.literal("generating..."),
                    ])
                ])
            },
            ($): d_main.Error => ({
                'exit code': 1
            })
        ),
        _p.handle_error(
            [
                _p.dictionaryx.parallel<d_generate_typescript.Parameters, Error, d_generate_typescript.Error>(
                    poormans_modules,
                    ($, id) => {

                        const path = r_context_path_from_text.Context_Path(
                            _p_list_from_text(
                                `./out/source_code/${id}`,
                                ($) => $
                            )
                        )

                        const interface_module_path = t_path_to_path.create_node_path(
                            path,
                            {
                                'node': "interface"
                            }
                        )
                        const implementation_module_path = t_path_to_path.create_node_path(
                            path,
                            {
                                'node': "implementation"
                            }
                        )

                        return [

                            //remove old implementation files
                            $cr.remove.execute(
                                {
                                    'path': implementation_module_path,
                                    'error if not exists': false,
                                },
                                ($) => ['could not remove implementation', null]
                            ),

                            //remove old interface files
                            $cr.remove.execute(
                                {
                                    'path': interface_module_path,
                                    'error if not exists': false,
                                },
                                ($) => ['could not remove interface', null]
                            ),

                            _p.refine_without_error_transformation(
                                (abort) => r_schema.Package(
                                    $.package,
                                    ($) => abort(['could not deserialize module', $]),
                                    null,
                                    null,
                                ),
                                ($) => [
                                    //write new interface files
                                    $cr['write to directory'].execute(
                                        {
                                            'generic': {
                                                'escape spaces in path': true,
                                                'prose serialize': {
                                                    'indentation': "    ",
                                                    'newline': "\n",
                                                },
                                            },
                                            'path': interface_module_path,
                                            'directory': t_pareto_interface_to_serialized_typescript.Package_Set(
                                                t_liana_to_pareto_interface.Package(
                                                    $,
                                                )
                                            ),
                                            'remove before creating': true,
                                        },
                                        ($) => ['could not write interface', null]
                                    ),
                                    //write new implementation files
                                    $cr['write to directory'].execute(
                                        {
                                            'path': implementation_module_path,
                                            'directory': t_pareto_implementation_to_serialized_typescript.Package_Set(
                                                t_liana_to_pareto_implementation.Package(
                                                    $,
                                                )
                                            ),
                                            'remove before creating': true,
                                            'generic': {
                                                'escape spaces in path': true,
                                                'prose serialize': {
                                                    'indentation': "    ",
                                                    'newline': "\n",
                                                },

                                            },
                                        },
                                        ($) => ['could not write implementation', null]
                                    ),

                                ]
                            ),

                            // //copy generic implementation files
                            // $cr.copy.execute(
                            //     {
                            //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path("./pub/src/implementation/generated/liana"), "generic"),
                            //         'target': t_path_to_path.extend_node_path(implementation_module_path, { 'addition': "generic" }),
                            //         'options': {
                            //             'recursive': _p.optional.literal.set(true),
                            //             'force': _p.optional.literal.not_set(),
                            //             'errorOnExist': _p.optional.literal.not_set(),
                            //         }
                            //     },
                            //     ($) => ['could not copy generic implementation', null]
                            // ),

                            //copy core interface files
                            // $cr.copy.execute(
                            //     {
                            //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path("./pub/src/interface/generated/liana"), "core"),
                            //         'target': t_path_to_path.extend_node_path(interface_module_path, { 'addition': "core" }),
                            //         'options': {
                            //             'recursive': _p.optional.literal.set(true),
                            //             'force': _p.optional.literal.not_set(),
                            //             'errorOnExist': _p.optional.literal.not_set(),
                            //         }
                            //     },
                            //     ($) => ['could not copy core interface', null]
                            // ),


                            //log
                            $cr.log.execute(
                                {
                                    'message': sh.pg.sentences([
                                        sh.sentence([

                                            sh.ph.literal("generated package: "),
                                            sh.ph.literal(id),
                                        ])
                                    ]),
                                },
                                ($) => ['could not log', null]
                            ),
                        ]
                    },
                    ($) => $
                )
            ],
            ($) => [
                $cr.log.execute(
                    {
                        'message': sh.pg.sentences($.__to_list(
                            ($, id) => sh.sentence([t_generate_typescript_to_fp.Error(
                                $,
                                {
                                    'id': id,
                                    'character location reporting': ['one based', null]
                                }
                            )])
                        ))
                    },
                    ($) => ({
                        'exit code': 1
                    })
                ),
            ],
            () => ({
                'exit code': 1
            })
        )
    ]
)