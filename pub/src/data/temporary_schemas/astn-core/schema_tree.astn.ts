import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { $ as m_parse_tree } from "./schemas/parse_tree/$.module.astn"
import { $ as m_deserialize_parse_tree } from "./schemas/deserialize_parse_tree/$.module.astn"
import { $ as m_sealed_target } from "./schemas/sealed_target/$.module.astn"
import { $ as m_token } from "./schemas/token/$.module.astn"


export const $: g_.Schema_Tree = st.set({
    "parse tree": m_parse_tree,
    "deserialize parse tree": m_deserialize_parse_tree,
    "sealed target": m_sealed_target,
    "token": m_token,
})