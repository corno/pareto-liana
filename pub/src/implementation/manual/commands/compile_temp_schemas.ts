import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/assign'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_resolve from "liana-core/dist/interface/to_be_generated/resolve"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export type Error = _pi.Dictionary<Package_Error>

export type Package_Error =
    | ['could not log', null]
    | ['could not remove interface', null]
    | ['could not remove implementation', null]
    | ['could not write interface', null]
    | ['could not write implementation', null]
    | ['could not copy generic implementation', null]
    | ['could not copy core interface', null]
    | ['could not deserialize module', d_resolve.Error]




//data
import { Module, $ as poormans_modules } from "../../../data/temporary_schemas/all"

//dependencies
import * as r_liana_module from "../../temp/resolvers/module/unresolved"
import * as t_pareto_implementation_to_serialized_typescript from "pareto/dist/implementation/manual/schemas/implementation/transformers/serialized_typescript"
import * as t_pareto_interface_to_serialized_typescript from "pareto/dist/implementation/manual/schemas/interface/transformers/serialized_typescript"
import * as t_liana_to_pareto_implementation from "../schemas/module/transformers/pareto_implementation"
import * as t_liana_to_pareto_interface from "../schemas/module/transformers/pareto_interface"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/schemas/path/transformers/path"
import * as r_context_path_from_text from "pareto-resources/dist/implementation/manual/schemas/context_path/refiners/text"
import * as t_resolve_to_fountain_pen from "liana-core/dist/implementation/manual/schemas/resolve/transformers/fountain_pen"
//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error = ($: Error): d_fp.Paragraph => {
    return sh.pg.sentences($.__to_list(
        ($, id) => sh.sentence([
            sh.ph.literal("error in package '"),
            sh.ph.literal(id),
            sh.ph.literal("': "),
            _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'could not log': return _p.ss($, ($) => sh.ph.literal("could not log"))
                    case 'could not remove interface': return _p.ss($, ($) => sh.ph.literal("could not remove interface"))
                    case 'could not remove implementation': return _p.ss($, ($) => sh.ph.literal("could not remove implementation"))
                    case 'could not write interface': return _p.ss($, ($) => sh.ph.literal("could not write interface"))
                    case 'could not write implementation': return _p.ss($, ($) => sh.ph.literal("could not write implementation"))
                    case 'could not copy generic implementation': return _p.ss($, ($) => sh.ph.literal("could not copy generic implementation"))
                    case 'could not copy core interface': return _p.ss($, ($) => sh.ph.literal("could not copy core interface"))
                    case 'could not deserialize module': return _p.ss($, ($) => t_resolve_to_fountain_pen.Error($))
                    default: return _p.au($[0])
                }
            })
        ])
    ))
}
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

                _p.dictionaryx.parallel<Module, Error, Package_Error>(
                    poormans_modules,
                    ($, id) => {

                        const interface_module_path = t_path_to_path.create_node_path(
                            r_context_path_from_text.Context_Path(
                                _p_list_from_text(
                                    `./out/source_code/${id}`,
                                    ($) => $
                                )
                            ),
                            {
                                'node': "interface"
                            }
                        )
                        const implementation_module_path = t_path_to_path.create_node_path(
                            r_context_path_from_text.Context_Path(
                                _p_list_from_text(
                                    `./out/source_code/${id}`,
                                    ($) => $
                                )
                            ),
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
                                (abort) => r_liana_module.Module(
                                    $.module,
                                    ($) => abort(['could not deserialize module', $]),
                                    null,
                                    null,
                                ),
                                ($) => [
                                    //write new interface files
                                    $cr['write to directory'].execute(
                                        {
                                            'escape spaces in path': true,
                                            'path': interface_module_path,
                                            'directory': t_pareto_interface_to_serialized_typescript.Package_Set(
                                                t_liana_to_pareto_interface.Module(
                                                    $,
                                                )
                                            ),
                                            'indentation': "    ",
                                            'newline': "\n",
                                            'remove before creating': true,
                                        },
                                        ($) => ['could not write interface', null]
                                    ),
                                    //write new implementation files
                                    $cr['write to directory'].execute(
                                        {
                                            'escape spaces in path': true,
                                            'path': implementation_module_path,
                                            'directory': t_pareto_implementation_to_serialized_typescript.Package_Set(
                                                t_liana_to_pareto_implementation.Module(
                                                    $,
                                                )
                                            ),
                                            'indentation': "    ",
                                            'newline': "\n",
                                            'remove before creating': true,
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
                        'message': Error($)
                    },
                    ($) => ({
                        'exit code': 1
                    })
                ),
            ],
            ({
                'exit code': 1
            })
        )
    ]
)