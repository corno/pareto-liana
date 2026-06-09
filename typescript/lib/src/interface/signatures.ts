import * as _pi from 'pareto-core/dist/interface'

import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as resources_pareto_stream from "pareto-stream/dist/interface/resources"
import * as resources_fountain_pen from "pareto-fountain-pen-file-structure/dist/interface/resources"
import * as resources from "./resources"

import * as d_package from "./to_be_generated/compile_temp_schemas"

export namespace commands {

    export type compile_temp_schemas = _pi.Command_Procedure<
        resources_pareto.resources.commands.main,
        {
            'copy': resources_pareto.filesystem_unrestricted.commands.copy
            'log': resources_pareto_stream.commands.log
            'log error': resources_pareto_stream.commands.log_error
            'make directory': resources_pareto.filesystem_unrestricted.commands.make_directory
            'remove': resources_pareto.filesystem_unrestricted.commands.remove
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        },
        null,
        null
    >

    export type generate_typescript_cli = _pi.Command_Procedure<
        resources_pareto.resources.commands.main,
        {
            'copy': resources_pareto.filesystem_unrestricted.commands.copy
            'log': resources_pareto_stream.commands.log
            'log error': resources_pareto_stream.commands.log_error
            'make directory': resources_pareto.filesystem_unrestricted.commands.make_directory
            'remove': resources_pareto.filesystem_unrestricted.commands.remove
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        },
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file
        },
        null
    >

    export type generate_typescript = _pi.Command_Procedure<
        resources.commands.generate_typescript,
        {
            'copy': resources_pareto.filesystem_unrestricted.commands.copy
            'make directory': resources_pareto.filesystem_unrestricted.commands.make_directory
            'remove': resources_pareto.filesystem_unrestricted.commands.remove
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        },
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file
        },
        null
    >

    export type serialize_schemas = _pi.Command_Procedure<
        resources_pareto.resources.commands.main,
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
            'log error': resources_pareto_stream.commands.log_error
        },
        null,
        null
    >

}