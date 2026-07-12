import * as p_ from 'pareto-core/implementation/command'
import * as p_t from 'pareto-core/implementation/transformer'


import type * as interface_ from "../../declarations/commands.js"

//schemas
import type * as s_main from "pareto-application-api/interface/data/main"
import type * as s_generate_typescript from "../../interface/schemas/compile_temp_schemas.js"

//dependencies
import { $$ as c_write_to_directory } from "pareto-fountain-pen-file-structure/implementation/commands/write_to_directory"
import { $$ as c_write_to_file } from "pareto-fountain-pen-file-structure/implementation/commands/write_to_file"
import * as r_schema from "../to_be_generated/refiners/schema/unresolved_manual.js"
import * as t_pareto_implementation_to_serialized_typescript from "pareto/implementation/transformers/implementation/serialized_typescript"
import * as t_pareto_interface_to_serialized_typescript from "pareto/implementation/transformers/interface/serialized_typescript"
import * as t_liana_to_pareto_implementation from "../transformers/schema/pareto_implementation.js"
import * as t_liana_to_pareto_interface from "../transformers/schema/pareto_interface.js"
import * as t_path_to_path from "pareto-resources/implementation/transformers/unrestricted_path/unrestricted_path"
import * as r_context_path_from_text from "pareto-resources/implementation/refiners/path_unrestricted/text"
import * as t_generate_typescript_to_prose from "../transformers/compile_temp_schemas/prose.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: interface_.compile_temp_schemas = p_.command(
    ($d, $s, $q, $c) => [

        $c.log.execute(
            {
                'message': sh.pg.sentences([
                    sh.sentence([
                        sh.ph.literal("generating..."),
                    ])
                ])
            },
            ($): s_main.Error => ({
                'exit code': 1
            })
        ),
        p_.s.handle_error(
            [
                p_.s.dictionary(
                    $s.packages,
                    ($, id): p_.Command_Block<s_generate_typescript.Error> => {

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

                            p_.s.refine(
                                (abort) => r_schema.Package(
                                    $.package,
                                    ($) => abort(['could not deserialize module', $]),
                                    p_.literal.nothing(),
                                    p_.literal.nothing(),
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
                            //             'recursive': p_.literal.set(true),
                            //             'force': p_.literal.not_set(),
                            //             'errorOnExist': p_.literal.not_set(),
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
                            //             'recursive': p_.literal.set(true),
                            //             'force': p_.literal.not_set(),
                            //             'errorOnExist': p_.literal.not_set(),
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
                        'message': sh.pg.sentences(p_t.from.dictionary($).convert_to_list(
                            ($, id) => sh.sentence([t_generate_typescript_to_prose.Error(
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