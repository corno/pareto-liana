import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/transformer'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_resolve from "../../../interface/generated/liana/generic/resolve"
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

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

//dependencies
import * as r_liana_module from "../../temp/resolvers/module"
import * as t_liana_module_to_fountain_pen_block__implementation from "../schemas/module/transformers/temp_typescript_implementation"
import * as t_liana_module_to_fountain_pen_block__interface from "../schemas/module/transformers/temp_typescript_interface"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/schemas/path/transformers/path"
import * as ds_context_path from "pareto-resources/dist/implementation/manual/schemas/context_path/deserializers"
import * as t_fp_to_lines from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/lines"

export const Error = ($: Error): d_fp.Group_Part => {
    return sh.g.sub($.__to_list(
        ($, key) => sh.g.nested_block([
            sh.b.snippet(`error in package ${key}: `),
            _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'could not log': return _p.ss($, ($) => sh.b.snippet(`could not log`))
                    case 'could not remove interface': return _p.ss($, ($) => sh.b.snippet(`could not remove interface`))
                    case 'could not remove implementation': return _p.ss($, ($) => sh.b.snippet(`could not remove implementation`))
                    case 'could not write interface': return _p.ss($, ($) => sh.b.snippet(`could not write interface`))
                    case 'could not write implementation': return _p.ss($, ($) => sh.b.snippet(`could not write implementation`))
                    case 'could not copy generic implementation': return _p.ss($, ($) => sh.b.snippet(`could not copy generic implementation`))
                    case 'could not copy core interface': return _p.ss($, ($) => sh.b.snippet(`could not copy core interface`))
                    case 'could not deserialize module': return _p.ss($, ($) => sh.b.sub([
                        sh.b.snippet($.location.file + `:` + $.location.line + `:` + $.location.column + `: `),
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'constraint': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'state': return _p.ss($, ($) => sh.b.snippet(`expected '${$.expected}' but found '${$.found}'`))
                                        case 'optional value': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'set': return _p.ss($, ($) => sh.b.snippet(`expected ${$} to be set`))
                                                default: return _p.au($[0])
                                            }
                                        }))
                                        case 'same node': return _p.ss($, ($) => sh.b.snippet(`${$}, not the same node`))
                                        default: return _p.au($[0])
                                    }
                                }))
                                case 'lookup': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'cyclic lookup in acyclic context': return _p.ss($, ($) => sh.b.snippet(`cyclic lookup in acyclic context: ${$}`))
                                        case 'no such entry': return _p.ss($, ($) => sh.b.snippet(`no such entry: ${$}`))
                                        case 'optional lookup not set': return _p.ss($, ($) => sh.b.snippet(`there is is no context where this entry can be looked up`))
                                        default: return _p.au($[0])
                                    }
                                }))
                                case 'missing required entries': return _p.ss($, ($) => sh.b.sub([
                                    sh.b.snippet(`missing required entries:`),
                                    sh.b.indent([
                                        sh.g.sub($.__to_list(($, key) => sh.g.simple_block(`- ${key}`)))
                                    ])
                                ]))
                                default: return _p.au($[0])
                            }
                        })
                    ]))
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
                'lines': _p.list.literal([`generating...`])
            },
            ($): d_main.Error => ({
                'exit code': 1
            })
        ),
        _p.create_error_handling_context(
            [

                _p.dictionaryx.parallel<Module, Error, Package_Error>(
                    poormans_modules,
                    ($, key) => {

                        const interface_module_path = t_path_to_path.create_node_path(ds_context_path.Context_Path(`./out/source_code/${key}`), `interface`)
                        const implementation_module_path = t_path_to_path.create_node_path(ds_context_path.Context_Path(`./out/source_code/${key}`), `implementation`)

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
                                            'directory': t_liana_module_to_fountain_pen_block__interface.Module(
                                                $,
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
                                            'directory': t_liana_module_to_fountain_pen_block__implementation.Module(
                                                $,
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
                            //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path(`./pub/src/implementation/generated/liana`), `generic`),
                            //         'target': t_path_to_path.extend_node_path(implementation_module_path, { 'addition': `generic` }),
                            //         'options': {
                            //             'recursive': _p.optional.set(true),
                            //             'force': _p.optional.not_set(),
                            //             'errorOnExist': _p.optional.not_set(),
                            //         }
                            //     },
                            //     ($) => ['could not copy generic implementation', null]
                            // ),

                            //copy core interface files
                            // $cr.copy.execute(
                            //     {
                            //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path(`./pub/src/interface/generated/liana`), `core`),
                            //         'target': t_path_to_path.extend_node_path(interface_module_path, { 'addition': `core` }),
                            //         'options': {
                            //             'recursive': _p.optional.set(true),
                            //             'force': _p.optional.not_set(),
                            //             'errorOnExist': _p.optional.not_set(),
                            //         }
                            //     },
                            //     ($) => ['could not copy core interface', null]
                            // ),


                            //log
                            $cr.log.execute(
                                {
                                    'lines': _p.list.literal([`generated package: ${key}`])
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
                        'lines': t_fp_to_lines.Group_Part(Error($), {'indentation': '    '})
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