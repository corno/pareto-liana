import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/assign'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_implement_me from 'pareto-core-dev/dist/implement_me'
import _p_variables from 'pareto-core/dist/_p_variables'
import _p_iterate from 'pareto-core/dist/_p_iterate'

import * as signatures from "../../../interface/signatures"

// //data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
import * as d_resource from "../../../interface/to_be_generated/generate_typescript"

//dependencies
import * as r_context_path_from_text from "pareto-resources/dist/implementation/manual/refiners/context_path/text"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/path/path"

import * as r_schema from "../../temp/resolvers/schema/unresolved_manual"
import * as t_pareto_implementation_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/implementation/serialized_typescript"
import * as t_pareto_interface_to_serialized_typescript from "pareto/dist/implementation/manual/transformers/interface/serialized_typescript"
import * as t_liana_to_pareto_implementation from "../transformers/schema/pareto_implementation"
import * as t_liana_to_pareto_interface from "../transformers/schema/pareto_interface"
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/transformers/path/text"
import * as r_node_path_from_text from "pareto-resources/dist/implementation/manual/refiners/node_path/text"
import * as r_unresolved_schema_from_loc from "../../generated/liana/schemas/schema/unresolved/refiners/list_of_characters"
import * as t_resolve_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/resolve/fountain_pen"
import * as t_deserialize_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize/fountain_pen"
import * as t_deserialize_to_location from "liana-core/dist/implementation/manual/transformers/deserialize/location"

import * as t_location_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/location/fountain_pen"
// //shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"


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

                const pub_path = t_path_to_path.extend_context_path_with_list(
                    path,
                    { 'addition': _p.list.literal(["pub", "src"]) }
                )

                const interface_module_path = t_path_to_path.create_node_path(
                    t_path_to_path.extend_context_path_with_list(
                        pub_path,
                        { 'addition': _p.list.literal(["interface", "generated"]) }
                    ),
                    {
                        'node': "liana"
                    }
                )
                const implementation_module_path = t_path_to_path.create_node_path(
                    t_path_to_path.extend_context_path_with_list(
                        pub_path,
                        { 'addition': _p.list.literal(["implementation", "generated"]) }
                    ),
                    {
                        'node': "liana"
                    }
                )


                return [

                    _p.refine_without_error_transformation(
                        (abort) => r_schema.Package(
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
                            null,
                            null,
                        ),
                        ($) => [

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
                                    sh.ph.literal(t_path_to_text.Node_Path($p.source)),
                                ])
                            ]),
                        },
                        ($) => ['could not log', null]
                    ),

                ]

            }),
        )


    ]
)