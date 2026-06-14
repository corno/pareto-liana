import * as p_di from 'pareto-core/dist/data/interface'

import * as sh from "../../../shorthands/schema"


import { $ as m_deserialize_parse_tree } from "./schemas/deserialize_parse_tree/$.module.astn"
import { $ as m_location } from "./schemas/location/$.module.astn"
import { $ as m_parse_tree } from "./schemas/parse_tree/$.module.astn"
import { $ as m_sealed_target } from "./schemas/sealed_target/$.module.astn"
import { $ as m_token } from "./schemas/token/$.module.astn"


export const $ = sh.st.set({
    "deserialize parse tree": m_deserialize_parse_tree,
    "location": m_location,
    "parse tree": m_parse_tree,
    "sealed target": m_sealed_target,
    "token": m_token,
})