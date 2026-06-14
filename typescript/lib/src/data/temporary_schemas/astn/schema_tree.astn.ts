import * as p_di from 'pareto-core/dist/data/interface'

import * as sh from "../../../shorthands/schema"


import { $ as m_astn_schema } from "./schemas/astn_schema/$.module.astn"
import { $ as m_authoring_target } from "./schemas/authoring_target/$.module.astn"
import { $ as m_ide } from "./schemas/ide/$.module.astn"


export const $ = sh.st.set({
    "astn schema": m_astn_schema,
    "authoring target": m_authoring_target,
    "ide": m_ide,
})