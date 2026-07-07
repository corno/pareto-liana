import * as p_ from 'pareto-core/interface/command'

import * as command_actions_pareto_stream_api from "pareto-stream-api/interface/command_actions"
import * as command_actions_pareto_application_api from "pareto-application-api/interface/command_actions"
import * as command_actions_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/command_actions"
import * as command_actions from "./command_actions.js"
import * as query_actions_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/query_actions"


export type compile_temp_schemas = p_.Command_Procedure<
    command_actions_pareto_application_api.main,
    null,
    null,
    {
        'copy': command_actions_pareto_filesystem_unrestricted_api.copy
        'log': command_actions_pareto_stream_api.log
        'log error': command_actions_pareto_stream_api.log_error
        'make directory': command_actions_pareto_filesystem_unrestricted_api.make_directory
        'remove': command_actions_pareto_filesystem_unrestricted_api.remove
        'write file': command_actions_pareto_filesystem_unrestricted_api.write_file
    }
>

export type generate_typescript_cli = p_.Command_Procedure<
    command_actions_pareto_application_api.main,
    null,
    {
        'read file': query_actions_pareto_filesystem_unrestricted_api.read_file
    },
    {
        'copy': command_actions_pareto_filesystem_unrestricted_api.copy
        'log': command_actions_pareto_stream_api.log
        'log error': command_actions_pareto_stream_api.log_error
        'make directory': command_actions_pareto_filesystem_unrestricted_api.make_directory
        'remove': command_actions_pareto_filesystem_unrestricted_api.remove
        'write file': command_actions_pareto_filesystem_unrestricted_api.write_file
    }
>

export type generate_typescript = p_.Command_Procedure<
    command_actions.generate_typescript,
    null,
    {
        'read file': query_actions_pareto_filesystem_unrestricted_api.read_file
    },
    {
        'copy': command_actions_pareto_filesystem_unrestricted_api.copy
        'make directory': command_actions_pareto_filesystem_unrestricted_api.make_directory
        'remove': command_actions_pareto_filesystem_unrestricted_api.remove
        'write file': command_actions_pareto_filesystem_unrestricted_api.write_file
    }
>

export type serialize_schemas = p_.Command_Procedure<
    command_actions_pareto_application_api.main,
    null,
    null,
    {
        'write file': command_actions_pareto_filesystem_unrestricted_api.write_file
        'log error': command_actions_pareto_stream_api.log_error
    }
>