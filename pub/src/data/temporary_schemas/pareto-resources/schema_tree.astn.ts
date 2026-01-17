import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { $ as m_copy } from "./schemas/copy/$.module.astn"
import { $ as m_execute_any_command_executable } from "./schemas/execute_any_command_executable/$.module.astn"
import { $ as m_execute_any_query_executable } from "./schemas/execute_any_query_executable/$.module.astn"
import { $ as m_execute_any_smelly_command_executable } from "./schemas/execute_any_smelly_command_executable/$.module.astn"
import { $ as m_execute_command_executable } from "./schemas/execute_command_executable/$.module.astn"
import { $ as m_execute_query_executable } from "./schemas/execute_query_executable/$.module.astn"
import { $ as m_execute_query_executable_and_catch } from "./schemas/execute_query_executable_and_catch/$.module.astn"
import { $ as m_execute_smelly_command_executable } from "./schemas/execute_smelly_command_executable/$.module.astn"
import { $ as m_get_instream_data } from "./schemas/get_instream_data/$.module.astn"
import { $ as m_log } from "./schemas/log/$.module.astn"
import { $ as m_log_error } from "./schemas/log_error/$.module.astn"
import { $ as m_make_directory } from "./schemas/make_directory/$.module.astn"
import { $ as m_path } from "./schemas/path/$.module.astn"
import { $ as m_read_directory } from "./schemas/read_directory/$.module.astn"
import { $ as m_read_file } from "./schemas/read_file/$.module.astn"
import { $ as m_remove } from "./schemas/remove/$.module.astn"
import { $ as m_stat } from "./schemas/stat/$.module.astn"
import { $ as m_write_file } from "./schemas/write_file/$.module.astn"
import { $ as m_write_to_stderr } from "./schemas/write_to_stderr/$.module.astn"
import { $ as m_write_to_stdout } from "./schemas/write_to_stdout/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "copy": m_copy,
    "execute any command executable": m_execute_any_command_executable,
    "execute any query executable": m_execute_any_query_executable,
    "execute any smelly command executable": m_execute_any_smelly_command_executable,
    "execute command executable": m_execute_command_executable,
    "execute query executable and catch": m_execute_query_executable_and_catch,
    "execute query executable": m_execute_query_executable,
    "execute smelly command executable": m_execute_smelly_command_executable,
    "get instream data": m_get_instream_data,
    "log error": m_log_error,
    "log": m_log,
    "make directory": m_make_directory,
    "path": m_path,
    "read directory": m_read_directory,
    "read file": m_read_file,
    "remove": m_remove,
    "stat": m_stat,
    "write file": m_write_file,
    "write to stderr": m_write_to_stderr,
    "write to stdout": m_write_to_stdout,
})