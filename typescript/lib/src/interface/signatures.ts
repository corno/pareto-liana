import * as _pi from 'pareto-core/dist/interface'

import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as resources_fountain_pen from "pareto-fountain-pen-file-structure/dist/interface/resources"
import * as resources from "./resources"

import * as d_package from "./to_be_generated/compile_temp_schemas"

export namespace commands {

    export type compile_temp_schemas = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'copy': resources_pareto.commands.fs_unrestricted_copy
            'log': resources_pareto.commands.stream_log
            'log error': resources_pareto.commands.stream_log_error
            'make directory': resources_pareto.commands.fs_unrestricted_make_directory
            'remove': resources_pareto.commands.fs_unrestricted_remove
            'write file': resources_pareto.commands.fs_unrestricted_write_file
        },
        null
    >

    export type generate_typescript_cli = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'copy': resources_pareto.commands.fs_unrestricted_copy
            'log': resources_pareto.commands.stream_log
            'log error': resources_pareto.commands.stream_log_error
            'make directory': resources_pareto.commands.fs_unrestricted_make_directory
            'remove': resources_pareto.commands.fs_unrestricted_remove
            'write file': resources_pareto.commands.fs_unrestricted_write_file
        },
        {
            'read file': resources_pareto.queries.fs_unrestricted_read_file
        }
    >

    export type generate_typescript = _pi.Command_Procedure<
        resources.commands.generate_typescript,
        {
            'copy': resources_pareto.commands.fs_unrestricted_copy
            'make directory': resources_pareto.commands.fs_unrestricted_make_directory
            'remove': resources_pareto.commands.fs_unrestricted_remove
            'write file': resources_pareto.commands.fs_unrestricted_write_file
        },
        {
            'read file': resources_pareto.queries.fs_unrestricted_read_file
        }
    >

    export type serialize_schemas = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'write file': resources_pareto.commands.fs_unrestricted_write_file
            'log error': resources_pareto.commands.stream_log_error
        },
        null
    >

}