import * as p_ci from 'pareto-core/dist/interface/command'

import * as commands_pareto from "pareto-resources/dist/interface/resources"
import * as commands_pareto_stream from "pareto-stream/dist/interface/commands"

//data types
import * as d_generate_typescript from "./data/generate_typescript"


export namespace commands {

    export type generate_typescript = p_ci.Command<
        d_generate_typescript.Error,
        d_generate_typescript.Parameters
    >
}

export namespace procedures {

    export type compile_temp_schemas = p_ci.Command_Procedure<
        commands_pareto.resources.commands.main,
        null,
        null,
        {
            'copy': commands_pareto.filesystem_unrestricted.commands.copy
            'log': commands_pareto_stream.commands.log
            'log error': commands_pareto_stream.commands.log_error
            'make directory': commands_pareto.filesystem_unrestricted.commands.make_directory
            'remove': commands_pareto.filesystem_unrestricted.commands.remove
            'write file': commands_pareto.filesystem_unrestricted.commands.write_file
        }
    >

    export type generate_typescript_cli = p_ci.Command_Procedure<
        commands_pareto.resources.commands.main,
        null,
        {
            'read file': commands_pareto.filesystem_unrestricted.queries.read_file
        },
        {
            'copy': commands_pareto.filesystem_unrestricted.commands.copy
            'log': commands_pareto_stream.commands.log
            'log error': commands_pareto_stream.commands.log_error
            'make directory': commands_pareto.filesystem_unrestricted.commands.make_directory
            'remove': commands_pareto.filesystem_unrestricted.commands.remove
            'write file': commands_pareto.filesystem_unrestricted.commands.write_file
        }
    >

    export type generate_typescript = p_ci.Command_Procedure<
        commands.generate_typescript,
        null,
        {
            'read file': commands_pareto.filesystem_unrestricted.queries.read_file
        },
        {
            'copy': commands_pareto.filesystem_unrestricted.commands.copy
            'make directory': commands_pareto.filesystem_unrestricted.commands.make_directory
            'remove': commands_pareto.filesystem_unrestricted.commands.remove
            'write file': commands_pareto.filesystem_unrestricted.commands.write_file
        }
    >

    export type serialize_schemas = p_ci.Command_Procedure<
        commands_pareto.resources.commands.main,
        null,
        null,
        {
            'write file': commands_pareto.filesystem_unrestricted.commands.write_file
            'log error': commands_pareto_stream.commands.log_error
        }
    >

}