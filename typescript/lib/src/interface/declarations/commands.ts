import * as p_ from 'pareto-core/interface/command'

import type * as actions_commands_pareto_stream_api from "pareto-stream-api/interface/command_actions"
import type * as actions_commands_pareto_application_api from "pareto-application-api/interface/command_actions"
import type * as actions_commands_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/command_actions"
import * as command_actions from "../actions/commands.js"
import type * as actions_queries_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/query_actions"


export type compile_temp_schemas = p_.Command<
    actions_commands_pareto_application_api.main,
    null,
    null,
    {
        'copy': actions_commands_pareto_filesystem_unrestricted_api.copy
        'log': actions_commands_pareto_stream_api.log
        'log error': actions_commands_pareto_stream_api.log_error
        'make directory': actions_commands_pareto_filesystem_unrestricted_api.make_directory
        'remove': actions_commands_pareto_filesystem_unrestricted_api.remove
        'write file': actions_commands_pareto_filesystem_unrestricted_api.write_file
    }
>

export type generate_typescript_cli = p_.Command<
    actions_commands_pareto_application_api.main,
    null,
    {
        'read file': actions_queries_pareto_filesystem_unrestricted_api.read_file
    },
    {
        'copy': actions_commands_pareto_filesystem_unrestricted_api.copy
        'log': actions_commands_pareto_stream_api.log
        'log error': actions_commands_pareto_stream_api.log_error
        'make directory': actions_commands_pareto_filesystem_unrestricted_api.make_directory
        'remove': actions_commands_pareto_filesystem_unrestricted_api.remove
        'write file': actions_commands_pareto_filesystem_unrestricted_api.write_file
    }
>

export type generate_typescript = p_.Command<
    command_actions.generate_typescript,
    null,
    {
        'read file': actions_queries_pareto_filesystem_unrestricted_api.read_file
    },
    {
        'copy': actions_commands_pareto_filesystem_unrestricted_api.copy
        'make directory': actions_commands_pareto_filesystem_unrestricted_api.make_directory
        'remove': actions_commands_pareto_filesystem_unrestricted_api.remove
        'write file': actions_commands_pareto_filesystem_unrestricted_api.write_file
    }
>

export type serialize_schemas = p_.Command<
    actions_commands_pareto_application_api.main,
    null,
    null,
    {
        'write file': actions_commands_pareto_filesystem_unrestricted_api.write_file
        'log error': actions_commands_pareto_stream_api.log_error
    }
>