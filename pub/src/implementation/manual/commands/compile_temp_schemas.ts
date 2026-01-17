import * as _p from 'pareto-core-command'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
export type Package_Error =
    | ['could not log', null]
    | ['could not remove interface', null]
    | ['could not remove implementation', null]
    | ['could not write interface', null]
    | ['could not write implementation', null]
    | ['could not copy generic implementation', null]
    | ['could not copy core interface', null]


//data
import { Module, $ as poormans_modules } from "../../../data/temporary_schemas/all"

//dependencies
import * as r_pareto_module from "../../temp/resolvers/module"
import * as t_pareto_module_to_fountain_pen_block__implementation from "../schemas/module/transformers/temp_typescript_implementation"
import * as t_pareto_module_to_fountain_pen_block__interface from "../schemas/module/transformers/temp_typescript_interface"
import * as t_pareto_module_to_fountain_pen_block__interface2 from "../schemas/module/transformers/temp_typescript_interface"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/schemas/path/transformers/path"
import * as ds_context_path from "pareto-resources/dist/implementation/manual/schemas/context_path/deserializers"

export const $$: signatures.commands.compile_temp_schemas = _p.command_procedure(
    ($p, $cr, $qr) => [

        $cr.log.execute(
            {
                'lines': _p.list.literal([`generating...`])
            },
            ($) => ({
                'exit code': 1
            })
        ),

        _p.dictionaryx.parallel<Module, d_main.Error, Package_Error>(
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

                    //write new interface files
                    $cr['write to directory'].execute(
                        {
                            'escape spaces in path': true,
                            'path': interface_module_path,
                            'directory': t_pareto_module_to_fountain_pen_block__interface.Module(
                                r_pareto_module.Module(
                                    $.module,
                                    {
                                        'parameters': {
                                            'lookups': null,
                                            'values': null,
                                        },
                                        'location 2 string': () => "XX" //location_to_string
                                    }
                                ),
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
                            'directory': t_pareto_module_to_fountain_pen_block__implementation.Module(
                                r_pareto_module.Module(
                                    $.module,
                                    {
                                        'parameters': {
                                            'lookups': null,
                                            'values': null,
                                        },
                                        'location 2 string': () => "XX" //location_to_string
                                    }
                                ),
                            ),
                            'indentation': "    ",
                            'newline': "\n",
                            'remove before creating': true,
                        },
                        ($) => ['could not write implementation', null]
                    ),

                    // //copy generic implementation files
                    // $cr.copy.execute(
                    //     {
                    //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path(`./pub/src/implementation/generated/pareto`), `generic`),
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
                    //         'source': t_path_to_path.create_node_path(ds_context_path.Context_Path(`./pub/src/interface/generated/pareto`), `core`),
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
            ($):d_main.Error => ({
                'exit code': 1
            })
        )
    ]
)