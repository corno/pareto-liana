import * as pt from 'pareto-core/dist/command'
import * as pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/assign'
import p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import p_create_symbol from 'pareto-core/dist/_p_create_symbol'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_generate_typescript from "../../../interface/to_be_generated/compile_temp_schemas"

export type Error = pi.Dictionary<d_generate_typescript.Error>

//data
import { $ as poormans_modules } from "../../../data/temporary_schemas/all"

//dependencies
import { $$ as c_write_to_directory } from "pareto-fountain-pen-file-structure/dist/implementation/manual/commands/write_to_directory"
import { $$ as c_write_to_file } from "pareto-fountain-pen-file-structure/dist/implementation/manual/commands/write_to_file"
import * as r_schema from "../../temp/resolvers/schema/unresolved_manual"
import * as t_pareto_implementation_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/implementation/serialized_typescript"
import * as t_pareto_interface_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/interface/serialized_typescript"
import * as t_liana_to_pareto_implementation from "../transformers/schema/pareto_implementation"
import * as t_liana_to_pareto_interface from "../transformers/schema/pareto_interface"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/unrestricted_path"
import * as r_context_path_from_text from "pareto-resources/dist/implementation/manual/refiners/path_unrestricted/text"
import * as t_generate_typescript_to_fp from "../transformers/compile_temp_schemas/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: signatures.commands.compile_temp_schemas = pt.command_procedure(
    ($d, $s, $q, $c) => [

        $c.log.execute(
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
        pt.handle_error(
            [
                pt.dictionaryx.parallel<d_generate_typescript.Parameters, Error, d_generate_typescript.Error>(
                    poormans_modules,
                    ($, id) => {

                        const path = r_context_path_from_text.Context_Path(
                            `./out/source_code/${id}`
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
                            $c.remove.execute(
                                {
                                    'path': t_path_to_path.extend_context_path_with_single_step(
                                        path,
                                        {
                                            'addition': "implementation"
                                        }
                                    ),
                                    'error if not exists': false,
                                },
                                ($) => ['could not remove implementation', null]
                            ),

                            //remove old interface files
                            $c.remove.execute(
                                {
                                    'path': t_path_to_path.extend_context_path_with_single_step(
                                        path,
                                        {
                                            'addition': "interface"
                                        }
                                    ),
                                    'error if not exists': false,
                                },
                                ($) => ['could not remove interface', null]
                            ),

                            pt.refine_without_error_transformation(
                                (abort) => r_schema.Package(
                                    $.package,
                                    ($) => abort(['could not deserialize module', $]),
                                    p_create_symbol(),
                                    p_create_symbol(),
                                ),
                                ($) => [
                                    //write new interface files
                                    c_write_to_directory(
                                        null,
                                        null,
                                        {
                                            'remove': $c.remove,
                                            'write to file': c_write_to_file(
                                                null,
                                                null,
                                                {
                                                    'write file': $c['write file'],
                                                },
                                            ),
                                        },
                                    ).execute(
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
                                    c_write_to_directory(
                                        null,
                                        null,
                                        {
                                            'remove': $c.remove,
                                            'write to file': c_write_to_file(
                                                null,
                                                null,
                                                {
                                                    'write file': $c['write file'],
                                                },
                                            ),
                                        },
                                    ).execute(
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
                            // $c.copy.execute(
                            //     {
                            //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path("./lib/src/implementation/generated/liana"), "generic"),
                            //         'target': t_path_to_path.extend_node_path(implementation_module_path, { 'addition': "generic" }),
                            //         'options': {
                            //             'recursive': pt.optional.literal.set(true),
                            //             'force': pt.optional.literal.not_set(),
                            //             'errorOnExist': pt.optional.literal.not_set(),
                            //         }
                            //     },
                            //     ($) => ['could not copy generic implementation', null]
                            // ),

                            //copy core interface files
                            // $c.copy.execute(
                            //     {
                            //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path("./lib/src/interface/generated/liana"), "core"),
                            //         'target': t_path_to_path.extend_node_path(interface_module_path, { 'addition': "core" }),
                            //         'options': {
                            //             'recursive': pt.optional.literal.set(true),
                            //             'force': pt.optional.literal.not_set(),
                            //             'errorOnExist': pt.optional.literal.not_set(),
                            //         }
                            //     },
                            //     ($) => ['could not copy core interface', null]
                            // ),


                            //log
                            $c.log.execute(
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
                $c.log.execute(
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