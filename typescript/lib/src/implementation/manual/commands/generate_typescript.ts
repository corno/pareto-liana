import * as p_ from 'pareto-core/implementation/command'
import * as p_temp from 'pareto-core/implementation/transformer'
import p_variables from 'pareto-core/implementation/command/specials/variables'


import * as interface_ from "../../../interface/commands.js"

// //data types
import * as d_resource from "../../../interface/data/generate_typescript.js"
import * as d_schema from "../../../interface/generated/liana/schemas/schema/data/resolved.js"

//dependencies
import { $$ as c_write_to_directory } from "pareto-fountain-pen-file-structure/implementation/manual/commands/write_to_directory"
import { $$ as c_write_to_file } from "pareto-fountain-pen-file-structure/implementation/manual/commands/write_to_file"
import * as r_schema from "../../to_be_generated/refiners/schema/unresolved_manual.js"
import * as r_unresolved_schema_from_loc from "../../generated/liana/schemas/schema/unresolved/refiners/list_of_characters.js"
import * as t_liana_to_pareto_implementation from "../transformers/schema/pareto_implementation.js"
import * as t_liana_to_pareto_interface from "../transformers/schema/pareto_interface.js"
import * as t_pareto_implementation_to_serialized_typescript from "pareto/implementation/manual/transformers/implementation/serialized_typescript"
import * as t_pareto_interface_to_serialized_typescript from "pareto/implementation/manual/transformers/interface/serialized_typescript"
import * as t_path_to_path from "pareto-resources/implementation/manual/transformers/unrestricted_path/unrestricted_path"

export const $$: interface_.generate_typescript = p_.command(
    ($d, $s, $q, $c) => [

        p_.s.query(
            $q['read file'](
                $d.source,
                ($): d_resource.Error => ['could not read source', $]
            ),
            ($v2) => p_variables(
                () => {
                    const path = $d.target

                    const lib_path = t_path_to_path.extend_context_path_with_list(
                        path,
                        { 'addition': p_.literal.list(["typescript", "lib", "src"]) }
                    )

                    const interface_module_path = t_path_to_path.create_node_path(
                        t_path_to_path.extend_context_path_with_list(
                            lib_path,
                            { 'addition': p_.literal.list(["interface", "generated"]) }
                        ),
                        {
                            'node': "liana"
                        }
                    )
                    const implementation_module_path = t_path_to_path.create_node_path(
                        t_path_to_path.extend_context_path_with_list(
                            lib_path,
                            { 'addition': p_.literal.list(["implementation", "generated"]) }
                        ),
                        {
                            'node': "liana"
                        }
                    )


                    return [

                        p_.s.refine(
                            (abort): d_schema.Package => p_temp.from.state($d.type).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'module specification': return p_temp.ss($, ($) => p_variables(
                                            () => {
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
                                                    p_.literal.nothing(),
                                                    p_.literal.nothing(),
                                                )
                                                return {
                                                    'omit (de)serializer': false,
                                                    'schema tree': x.schema
                                                }
                                            }))
                                        case 'package': return p_temp.ss($, ($) => r_schema.Package(
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
                                            p_.literal.nothing(),
                                            p_.literal.nothing(),
                                        ))
                                        default: return p_temp.au($[0])
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



                    ]

                }),
        )


    ]
)