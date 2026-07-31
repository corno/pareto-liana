

import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as m_deserialize_parse_tree } from "./schemas/deserialize_parse_tree/$.module.astn.js"
import { $ as m_location } from "./schemas/location/$.module.astn.js"
import { $ as m_parse_tree } from "./schemas/parse_tree/$.module.astn.js"
import { $ as m_sealed_target } from "./schemas/sealed_target/$.module.astn.js"
import { $ as m_token } from "./schemas/token/$.module.astn.js"


export const $ = sh.st.set({
    "deserialize parse tree": m_deserialize_parse_tree,
    "location": m_location,
    "parse tree": m_parse_tree,
    "sealed target": m_sealed_target,
    "token": m_token,
})