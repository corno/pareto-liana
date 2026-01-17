import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { $ as m_astn_schema } from "./schemas/astn_schema/$.module.astn"
import { $ as m_authoring_target } from "./schemas/authoring_target/$.module.astn"
import { $ as m_ide } from "./schemas/ide/$.module.astn"


export const $: g_.Schema_Tree = st.set({
    "astn schema": m_astn_schema,
    "authoring target": m_authoring_target,
    "ide": m_ide,
})