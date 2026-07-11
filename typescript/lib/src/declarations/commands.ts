import * as p_ from 'pareto-core/interface/command_implementation'
import * as p_inf from 'pareto-core/interface/command_interface'

import type * as command_interfaces_pareto_application_api from "pareto-application-api/interface/commands"
import type * as command_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/commands"
import type * as command_interfaces_pareto_stream_api from "pareto-stream-api/interface/commands"

import type * as query_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/queries"

//data types
import type * as d_generate_typescript from "../interface/schemas/generate_typescript.js"
import type * as d_compile_temp_schemas from "../interface/schemas/compile_temp_schemas.js"


export type compile_temp_schemas = p_.Command_Implementation<
    command_interfaces_pareto_application_api.main,
    {
        'packages': d_compile_temp_schemas.Packages
    },
    null,
    {
        'copy': command_interfaces_pareto_filesystem_unrestricted_api.copy
        'log': command_interfaces_pareto_stream_api.log
        'log error': command_interfaces_pareto_stream_api.log_error
        'make directory': command_interfaces_pareto_filesystem_unrestricted_api.make_directory
        'remove': command_interfaces_pareto_filesystem_unrestricted_api.remove
        'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
    }
>

export type generate_typescript_cli = p_.Command_Implementation<
    command_interfaces_pareto_application_api.main,
    null,
    {
        'read file': query_interfaces_pareto_filesystem_unrestricted_api.read_file
    },
    {
        'copy': command_interfaces_pareto_filesystem_unrestricted_api.copy
        'log': command_interfaces_pareto_stream_api.log
        'log error': command_interfaces_pareto_stream_api.log_error
        'make directory': command_interfaces_pareto_filesystem_unrestricted_api.make_directory
        'remove': command_interfaces_pareto_filesystem_unrestricted_api.remove
        'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
    }
>

export type generate_typescript = p_.Command_Implementation<
    p_inf.Command_Interface<
        d_generate_typescript.Error,
        d_generate_typescript.Parameters
    >,
    null,
    {
        'read file': query_interfaces_pareto_filesystem_unrestricted_api.read_file
    },
    {
        'copy': command_interfaces_pareto_filesystem_unrestricted_api.copy
        'make directory': command_interfaces_pareto_filesystem_unrestricted_api.make_directory
        'remove': command_interfaces_pareto_filesystem_unrestricted_api.remove
        'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
    }
>

export type serialize_schemas = p_.Command_Implementation<
    command_interfaces_pareto_application_api.main,
    {
        'packages': d_compile_temp_schemas.Packages
    },
    null,
    {
        'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
        'log error': command_interfaces_pareto_stream_api.log_error
    }
>