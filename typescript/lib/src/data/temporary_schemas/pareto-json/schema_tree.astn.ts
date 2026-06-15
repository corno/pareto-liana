

import * as sh from "../../../shorthands/schema"

import { $ as x_json_with_guaranteed_unique_keys } from "./schemas/json_with_guaranteed_unique_keys/$.module.astn"
import { $ as x_json_without_guaranteed_unique_keys } from "./schemas/json_without_guaranteed_unique_keys/$.module.astn"

export const $ = sh.st.set({
    "json with guaranteed unique keys": x_json_with_guaranteed_unique_keys,
    "json without guaranteed unique keys": x_json_without_guaranteed_unique_keys,
})