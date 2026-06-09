import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/assign'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_variables from 'pareto-core/dist/_p_variables'
import _p_iterate from 'pareto-core/dist/_p_iterate'
import _p_create_symbol from 'pareto-core/dist/_p_create_symbol'

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
import _p_cc from 'pareto-core/dist/_p_change_context'


export const $$: signatures.commands.generate_typescript = _p.command_procedure(
    ($p, $cr, $qr) => [

        _p.query(
            $qr['read file'](
                $p.source,
                ($): d_resource.Error => ['could not read source', $]
            ),
            ($) => $,
            ($v2) => _p_variables(() => {
                const path = $p.target

                const lib_path = t_path_to_path.extend_context_path_with_list(
                    path,
                    { 'addition': _p.list.literal(["typescript", "lib", "src"]) }
                )

                const interface_module_path = t_path_to_path.create_node_path(
                    t_path_to_path.extend_context_path_with_list(
                        lib_path,
                        { 'addition': _p.list.literal(["interface", "generated"]) }
                    ),
                    {
                        'node': "liana"
                    }
                )
                const implementation_module_path = t_path_to_path.create_node_path(
                    t_path_to_path.extend_context_path_with_list(
                        lib_path,
                        { 'addition': _p.list.literal(["implementation", "generated"]) }
                    ),
                    {
                        'node': "liana"
                    }
                )


                return [

                    _p.refine_without_error_transformation(
                        (abort): d_schema.Package => _p.decide.state($p.type, ($) => {
                            switch ($[0]) {
                                case 'module specification': return _p.ss($, ($) => _p_variables(() => {
                                    const x = r_schema.Module_Specification(
                                        r_unresolved_schema_from_loc.Module_Specification(
                                            $v2,
                                            ($) => abort(['could not deserialize', {
                                                'location': $p.source,
                                                'error': $,
                                            }]),
                                            {
                                                'tab size': 4,
                                            }
                                        ),
                                        ($) => abort(['could not resolve module', {
                                            'location': $p.source,
                                            'error': $,
                                        }]),
                                        _p_create_symbol(),
                                        _p_create_symbol(),
                                    )
                                    return {
                                        'omit (de)serializer': false,
                                        'schema tree': x.schema
                                    }
                                }))
                                case 'package': return _p.ss($, ($) => r_schema.Package(
                                    r_unresolved_schema_from_loc.Package(
                                        $v2,
                                        ($) => abort(['could not deserialize', {
                                            'location': $p.source,
                                            'error': $,
                                        }]),
                                        {
                                            'tab size': 4,
                                        }
                                    ),
                                    ($) => abort(['could not resolve module', {
                                        'location': $p.source,
                                        'error': $,
                                    }]),
                                    _p_create_symbol(),
                                    _p_create_symbol(),
                                ))
                                default: return _p.au($[0])
                            }
                        }),
                        ($) => [

                            //write new interface files
                            c_write_to_directory(
                                {
                                    'remove': $cr.remove,
                                    'write to file': c_write_to_file(
                                        {
                                            'write file': $cr['write file'],
                                        },
                                        null,
                                        null,
                                    ),
                                },
                                null,
                                null,
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
                                {
                                    'remove': $cr.remove,
                                    'write to file': c_write_to_file(
                                        {
                                            'write file': $cr['write file'],
                                        },
                                        null,
                                        null,
                                    ),
                                },
                                null,
                                null,
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
                    // $cr.copy.execute(
                    //     {
                    //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path("./lib/src/implementation/generated/liana"), "generic"),
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
                    //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path("./lib/src/interface/generated/liana"), "core"),
                    //         'target': t_path_to_path.extend_node_path(interface_module_path, { 'addition': "core" }),
                    //         'options': {
                    //             'recursive': _p.optional.literal.set(true),
                    //             'force': _p.optional.literal.not_set(),
                    //             'errorOnExist': _p.optional.literal.not_set(),
                    //         }
                    //     },
                    //     ($) => ['could not copy core interface', null]
                    // ),



                ]

            }),
        )


    ]
)