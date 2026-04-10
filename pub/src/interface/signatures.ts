import * as _pi from 'pareto-core/dist/interface'

import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as resources_fountain_pen from "pareto-fountain-pen-file-structure/dist/interface/resources"
import * as resources from "./resources"

import * as d_package from "./to_be_generated/compile_temp_schemas"

export namespace commands {

    export type compile_temp_schemas = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'copy': resources_pareto.commands.copy
            'log': resources_pareto.commands.log
            'log error': resources_pareto.commands.log_error
            'make directory': resources_pareto.commands.make_directory
            'remove': resources_pareto.commands.remove
            'write to directory': resources_fountain_pen.commands.write_to_directory
        },
        null
    >

    export type generate_typescript_cli = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'copy': resources_pareto.commands.copy
            'log': resources_pareto.commands.log
            'log error': resources_pareto.commands.log_error
            'make directory': resources_pareto.commands.make_directory
            'remove': resources_pareto.commands.remove
            'write to directory': resources_fountain_pen.commands.write_to_directory
        },
        {
            'read file': resources_pareto.queries.read_file
        }
    >

    export type generate_typescript = _pi.Command_Procedure<
        resources.commands.generate_typescript,
        {
            'copy': resources_pareto.commands.copy
            'log': resources_pareto.commands.log
            'log error': resources_pareto.commands.log_error
            'make directory': resources_pareto.commands.make_directory
            'remove': resources_pareto.commands.remove
            'write to directory': resources_fountain_pen.commands.write_to_directory
        },
        {
            'read file': resources_pareto.queries.read_file
        }
    >

    export type serialize_schemas = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'write file': resources_pareto.commands.write_file
            'log error': resources_pareto.commands.log_error
        },
        null
    >

}