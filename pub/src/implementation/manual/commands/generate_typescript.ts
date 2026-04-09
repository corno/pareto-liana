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
import * as d_resolve from "liana-core/dist/interface/to_be_generated/resolve"
import * as d_read_file from "pareto-resources/dist/interface/generated/liana/schemas/read_file/data"
import * as d_deserialize from "liana-core/dist/interface/to_be_generated/deserialize"
import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
// import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

// export type Error = _pi.Dictionary<Package_Error>

export type My_Error =
    | ['too many arguments', null]
    | ['missing source path', null]
    | ['invalid source path', null]
    | ['missing target path', null]
    | ['could not read source', null]
    | ['could not log', null]
    | ['could not read source', d_read_file.Error]
    | ['could not remove interface', null]
    | ['could not remove implementation', null]
    | ['could not write interface', null]
    | ['could not write implementation', null]
    | ['could not copy generic implementation', null]
    | ['could not copy core interface', null]
    | ['could not resolve module', d_resolve.Error]
    | ['could not deserialize', d_deserialize.Error]

// //data
// import { $ as poormans_modules } from "../../../data/temporary_schemas/all"

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

        _p.handle_error<d_main.Error, My_Error>(
            [


                _p.refine_without_error_transformation(
                    (abort) => _p_iterate(
                        $p.arguments,
                        null,
                        (iterator) => iterator.assert_finished(
                            () => ({
                                'source': r_node_path_from_text.Node_Path(
                                    iterator.consume(
                                        ($) => $,
                                        () => abort(['missing source path', null])
                                    ),
                                    () => abort(['invalid source path', null]),
                                    { 'pedantic': true }
                                ),
                                'target': r_context_path_from_text.Context_Path(
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
                    ($v) => _p_variables(() => {
                        const path = $v.target

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

                            _p.query(
                                $qr['read file'](
                                    $v.source,
                                    ($): My_Error => ['could not read source', $]
                                ),
                                ($) => $,
                                ($v2) => [

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
                                            r_unresolved_schema_from_loc.Package(
                                                $v2,
                                                ($) => abort(['could not deserialize', $]),
                                                {
                                                    'tab size': 4,
                                                }
                                            ),
                                            ($) => abort(['could not resolve module', $]),
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
                                                    sh.ph.literal(t_path_to_text.Node_Path($v.source)),
                                                ])
                                            ]),
                                        },
                                        ($) => ['could not log', null]
                                    ),

                                ]

                            ),

                        ]
                    })
                )
            ],
            ($) => [
                $cr['log error'].execute(
                    {
                        'message': sh.pg.sentences([
                            sh.sentence([
                                _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'missing source path': return _p.ss($, ($) => sh.ph.literal("missing source path argument"))
                                        case 'invalid source path': return _p.ss($, ($) => sh.ph.literal("invalid source path argument"))
                                        case 'missing target path': return _p.ss($, ($) => sh.ph.literal("missing target path argument"))
                                        case 'too many arguments': return _p.ss($, ($) => sh.ph.literal("too many arguments"))
                                        case 'could not read source': return _p.ss($, ($) => sh.ph.literal("could not read source"))
                                        case 'could not log': return _p.ss($, ($) => sh.ph.literal("could not log"))
                                        case 'could not remove interface': return _p.ss($, ($) => sh.ph.literal("could not remove interface"))
                                        case 'could not remove implementation': return _p.ss($, ($) => sh.ph.literal("could not remove implementation"))
                                        case 'could not write interface': return _p.ss($, ($) => sh.ph.literal("could not write interface"))
                                        case 'could not write implementation': return _p.ss($, ($) => sh.ph.literal("could not write implementation"))
                                        case 'could not copy generic implementation': return _p.ss($, ($) => sh.ph.literal("could not copy generic implementation"))
                                        case 'could not copy core interface': return _p.ss($, ($) => sh.ph.literal("could not copy core interface"))
                                        case 'could not resolve module': return _p.ss($, ($) => sh.ph.composed([
                                            t_location_to_fountain_pen.Range(
                                                $.location,
                                                {
                                                    'document resource identifier': "unknown DRI",
                                                    'character location reporting': ['one based', null],
                                                }
                                            ),
                                            sh.ph.literal(": "),
                                            t_resolve_to_fountain_pen.Error(
                                                $,
                                            )
                                        ]))
                                        case 'could not deserialize': return _p.ss($, ($) => sh.ph.composed([
                                            t_location_to_fountain_pen.Range(
                                                ['in main document', _p.decide.state(t_deserialize_to_location.Error($), ($): d_location.Range => {
                                                    switch ($[0]) {
                                                        case 'range': return _p.ss($, ($) => $)
                                                        case 'end of document': return _p.ss($, ($) => ({
                                                            'start': $.end,
                                                            'end': $.end,
                                                        }))
                                                        default: return _p.au($[0])
                                                    }
                                                })],
                                                {
                                                    'document resource identifier': "unknown DRI",
                                                    'character location reporting': ['one based', null],
                                                }
                                            ),
                                            sh.ph.literal(": "),
                                            t_deserialize_to_fountain_pen.Error(
                                                $,
                                            )
                                        ]))
                                        default: return _p.au($[0])
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