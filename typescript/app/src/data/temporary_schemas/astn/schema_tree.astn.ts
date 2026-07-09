

import * as sh from "lib/shorthands/schema/manual"


import { $ as m_astn_schema } from "./schemas/astn_schema/$.module.astn.js"
import { $ as m_authoring_target } from "./schemas/authoring_target/$.module.astn.js"
import { $ as m_ide } from "./schemas/ide/$.module.astn.js"


export const $ = sh.st.set({
    "astn schema": m_astn_schema,
    "authoring target": m_authoring_target,
    "ide": m_ide,
})