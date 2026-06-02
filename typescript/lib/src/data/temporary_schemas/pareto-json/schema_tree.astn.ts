import * as _pi from 'pareto-core/dist/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_json } from "./schemas/json/$.module.astn"
import { $ as x_json_with_unique_keys } from "./schemas/json_with_unique_keys/$.module.astn"

export const $ = sh.st.set({
    "json": x_json,
    "json with unique keys": x_json_with_unique_keys,
})