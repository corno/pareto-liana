import * as p from 'pareto-core/dist/command'
import * as pa from 'pareto-core/dist/assign'
import p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import p_variables from 'pareto-core/dist/_p_variables'
import p_iterate from 'pareto-core/dist/_p_iterate'
import p_create_symbol from 'pareto-core/dist/_p_create_symbol'

import * as signatures from "../../../interface/signatures"

// //data types
import * as d_resource from "../../../interface/to_be_generated/generate_typescript"
import * as d_schema from "../../../interface/generated/liana/schemas/schema/data/resolved"

//dependencies
import { $$ as c_write_to_directory } from "pareto-fountain-pen-file-structure/dist/implementation/manual/commands/write_to_directory"
import { $$ as c_write_to_file } from "pareto-fountain-pen-file-structure/dist/implementation/manual/commands/write_to_file"
import * as r_schema from "../../temp/resolvers/schema/unresolved_manual"
import * as r_unresolved_schema_from_loc from "../../generated/liana/schemas/schema/unresolved/refiners/list_of_characters"
import * as t_liana_to_pareto_implementation from "../transformers/schema/pareto_implementation"
import * as t_liana_to_pareto_interface from "../transformers/schema/pareto_interface"
import * as t_pareto_implementation_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/implementation/serialized_typescript"
import * as t_pareto_interface_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/interface/serialized_typescript"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/unrestricted_path"

// //shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"
import p_change_context from 'pareto-core/dist/_p_change_context'


export const $$: signatures.commands.generate_typescript = p.command_procedure(
    ($d, $s, $q, $c) => [

        p.query(
            $q['read file'](
                $d.source,
                ($): d_resource.Error => ['could not read source', $]
            ),
            ($) => $,
            ($v2) => p_variables(() => {
                const path = $d.target

                const lib_path = t_path_to_path.extend_context_path_with_list(
                    path,
                    { 'addition': p.list.literal(["typescript", "lib", "src"]) }
                )

                const interface_module_path = t_path_to_path.create_node_path(
                    t_path_to_path.extend_context_path_with_list(
                        lib_path,
                        { 'addition': p.list.literal(["interface", "generated"]) }
                    ),
                    {
                        'node': "liana"
                    }
                )
                const implementation_module_path = t_path_to_path.create_node_path(
                    t_path_to_path.extend_context_path_with_list(
                        lib_path,
                        { 'addition': p.list.literal(["implementation", "generated"]) }
                    ),
                    {
                        'node': "liana"
                    }
                )


                return [

                    p.refine_without_error_transformation(
                        (abort): d_schema.Package => pa.decide.state($d.type, ($) => {
                            switch ($[0]) {
                                case 'module specification': return pa.ss($, ($) => p_variables(() => {
                                    const x = r_schema.Module_Specification(
                                        r_unresolved_schema_from_loc.Module_Specification(
                                            $v2,
                                            ($) => abort(['could not deserialize', {
                                                'location': $d.source,
                                                'error': $,
                                            }]),
                                            {
                                                'tab size': 4,
                                            }
                                        ),
                                        ($) => abort(['could not resolve module', {
                                            'location': $d.source,
                                            'error': $,
                                        }]),
                                        p_create_symbol(),
                                        p_create_symbol(),
                                    )
                                    return {
                                        'omit (de)serializer': false,
                                        'schema tree': x.schema
                                    }
                                }))
                                case 'package': return pa.ss($, ($) => r_schema.Package(
                                    r_unresolved_schema_from_loc.Package(
                                        $v2,
                                        ($) => abort(['could not deserialize', {
                                            'location': $d.source,
                                            'error': $,
                                        }]),
                                        {
                                            'tab size': 4,
                                        }
                                    ),
                                    ($) => abort(['could not resolve module', {
                                        'location': $d.source,
                                        'error': $,
                                    }]),
                                    p_create_symbol(),
                                    p_create_symbol(),
                                ))
                                default: return pa.au($[0])
                            }
                        }),
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



                ]

            }),
        )


    ]
)