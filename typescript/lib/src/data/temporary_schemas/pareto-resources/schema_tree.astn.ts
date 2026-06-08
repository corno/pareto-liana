import * as _pi from 'pareto-core/dist/interface'

import * as sh from "../../../shorthands/schema"


import { $ as m_list_of_characters } from "../pareto-fountain-pen/schemas/list_of_characters/$.module.astn"
import { $ as m_execute_any_command_executable } from "./schemas/execute/any_command_executable/$.module.astn"
import { $ as m_execute_any_query_executable } from "./schemas/execute/any_query_executable/$.module.astn"
import { $ as m_execute_any_smelly_command_executable } from "./schemas/execute/any_smelly_command_executable/$.module.astn"
import { $ as m_execute_command_executable } from "./schemas/execute/command_executable/$.module.astn"
import { $ as m_execute_query_executable } from "./schemas/execute/query_executable/$.module.astn"
import { $ as m_execute_query_executable_and_catch } from "./schemas/execute/query_executable_and_catch/$.module.astn"
import { $ as m_execute_smelly_command_executable } from "./schemas/execute/smelly_command_executable/$.module.astn"
import { $ as m_fountain_pen } from "../pareto-fountain-pen/schemas/prose/$.module.astn"
import { $ as m_fs_sandboxed_chmod } from "./schemas/fs/sandboxed/chmod/$.module.astn"
import { $ as m_fs_sandboxed_copy } from "./schemas/fs/sandboxed/copy/$.module.astn"
import { $ as m_fs_sandboxed_make_directory } from "./schemas/fs/sandboxed/make_directory/$.module.astn"
import { $ as m_fs_sandboxed_path } from "./schemas/fs/sandboxed/path/$.module.astn"
import { $ as m_fs_sandboxed_read_directory } from "./schemas/fs/sandboxed/read_directory/$.module.astn"
import { $ as m_fs_sandboxed_read_file } from "./schemas/fs/sandboxed/read_file/$.module.astn"
import { $ as m_fs_sandboxed_remove } from "./schemas/fs/sandboxed/remove/$.module.astn"
import { $ as m_fs_sandboxed_stat } from "./schemas/fs/sandboxed/stat/$.module.astn"
import { $ as m_fs_sandboxed_stat_possible_node } from "./schemas/fs/sandboxed/stat_possible_node/$.module.astn"
import { $ as m_fs_sandboxed_write_file } from "./schemas/fs/sandboxed/write_file/$.module.astn"
import { $ as m_fs_unrestricted_chmod } from "./schemas/fs/unrestricted/chmod/$.module.astn"
import { $ as m_fs_unrestricted_copy } from "./schemas/fs/unrestricted/copy/$.module.astn"
import { $ as m_fs_unrestricted_make_directory } from "./schemas/fs/unrestricted/make_directory/$.module.astn"
import { $ as m_fs_unrestricted_path } from "./schemas/fs/unrestricted/path/$.module.astn"
import { $ as m_fs_unrestricted_read_directory } from "./schemas/fs/unrestricted/read_directory/$.module.astn"
import { $ as m_fs_unrestricted_read_file } from "./schemas/fs/unrestricted/read_file/$.module.astn"
import { $ as m_fs_unrestricted_remove } from "./schemas/fs/unrestricted/remove/$.module.astn"
import { $ as m_fs_unrestricted_stat } from "./schemas/fs/unrestricted/stat/$.module.astn"
import { $ as m_fs_unrestricted_stat_possible_node } from "./schemas/fs/unrestricted/stat_possible_node/$.module.astn"
import { $ as m_fs_unrestricted_write_file } from "./schemas/fs/unrestricted/write_file/$.module.astn"
import { $ as m_path_non_normalized } from "./schemas/non_normalized_path/$.module.astn"
import { $ as m_stream_get_instream_data } from "./schemas/stream/get_instream_data/$.module.astn"
import { $ as m_stream_log } from "./schemas/stream/log/$.module.astn"
import { $ as m_stream_log_error } from "./schemas/stream/log_error/$.module.astn"
import { $ as m_stream_write_to_stderr } from "./schemas/stream/write_to_stderr/$.module.astn"
import { $ as m_stream_write_to_stdout } from "./schemas/stream/write_to_stdout/$.module.astn"
import { $ as m_terminal_output } from "./schemas/terminal_output/$.module.astn"

export const $ = sh.st.set({

    "execute any command executable": m_execute_any_command_executable,
    "execute any query executable": m_execute_any_query_executable,
    "execute any smelly command executable": m_execute_any_smelly_command_executable,
    "execute command executable": m_execute_command_executable,
    "execute query executable and catch": m_execute_query_executable_and_catch,
    "execute query executable": m_execute_query_executable,
    "execute smelly command executable": m_execute_smelly_command_executable,

    "fountain pen": m_fountain_pen,
    "terminal output": m_terminal_output,
    "list of characters": m_list_of_characters,

    "path non normalized": m_path_non_normalized,

    "fs sandboxed chmod": m_fs_sandboxed_chmod,
    "fs sandboxed copy": m_fs_sandboxed_copy,
    "fs sandboxed make directory": m_fs_sandboxed_make_directory,
    "fs sandboxed path": m_fs_sandboxed_path,
    "fs sandboxed read directory": m_fs_sandboxed_read_directory,
    "fs sandboxed read file": m_fs_sandboxed_read_file,
    "fs sandboxed remove": m_fs_sandboxed_remove,
    "fs sandboxed stat possible node": m_fs_sandboxed_stat_possible_node,
    "fs sandboxed stat": m_fs_sandboxed_stat,
    "fs sandboxed write file": m_fs_sandboxed_write_file,

    "fs unrestricted chmod": m_fs_unrestricted_chmod,
    "fs unrestricted copy": m_fs_unrestricted_copy,
    "fs unrestricted make directory": m_fs_unrestricted_make_directory,
    "fs unrestricted path": m_fs_unrestricted_path,
    "fs unrestricted read directory": m_fs_unrestricted_read_directory,
    "fs unrestricted read file": m_fs_unrestricted_read_file,
    "fs unrestricted remove": m_fs_unrestricted_remove,
    "fs unrestricted stat possible node": m_fs_unrestricted_stat_possible_node,
    "fs unrestricted stat": m_fs_unrestricted_stat,
    "fs unrestricted write file": m_fs_unrestricted_write_file,


    "stream get instream data": m_stream_get_instream_data,
    "stream log error": m_stream_log_error,
    "stream log": m_stream_log,
    "stream write to stderr": m_stream_write_to_stderr,
    "stream write to stdout": m_stream_write_to_stdout,
})