

import * as sh from "lib/shorthands/schema/manual"

import { $ as x_json_with_guaranteed_unique_keys } from "./schemas/json_with_guaranteed_unique_keys/$.module.astn.js"
import { $ as x_json_without_guaranteed_unique_keys } from "./schemas/json_without_guaranteed_unique_keys/$.module.astn.js"

export const $ = sh.st.set({
    "json with guaranteed unique keys": x_json_with_guaranteed_unique_keys,
    "json without guaranteed unique keys": x_json_without_guaranteed_unique_keys,
})