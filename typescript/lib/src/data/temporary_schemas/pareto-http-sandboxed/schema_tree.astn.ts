

import * as sh from "../../../shorthands/schema"

import { $ as m_http_call } from "./schemas/http_call/$.module.astn"
import { $ as m_uri } from "./schemas/uri/$.module.astn"

export const $ = sh.st.set({
    "uri": m_uri,
    "http call": m_http_call,
})