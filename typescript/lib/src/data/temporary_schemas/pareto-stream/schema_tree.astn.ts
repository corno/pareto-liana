

import * as sh from "../../../shorthands/schema/manual"

import { $ as m_fountain_pen } from "../pareto-fountain-pen/schemas/prose/$.module.astn"
import { $ as m_list_of_characters } from "../pareto-fountain-pen/schemas/list_of_characters/$.module.astn"

import { $ as m_get_instream_data } from "./schemas/get_instream_data/$.module.astn"
import { $ as m_log } from "./schemas/log/$.module.astn"
import { $ as m_log_error } from "./schemas/log_error/$.module.astn"
import { $ as m_write_to_stderr } from "./schemas/write_to_stderr/$.module.astn"
import { $ as m_write_to_stdout } from "./schemas/write_to_stdout/$.module.astn"

export const $ = sh.st.set({
    "fountain pen": m_fountain_pen,
    "list of characters": m_list_of_characters,


    "get instream data": m_get_instream_data,
    "log error": m_log_error,
    "log": m_log,
    "write to stderr": m_write_to_stderr,
    "write to stdout": m_write_to_stdout,
})