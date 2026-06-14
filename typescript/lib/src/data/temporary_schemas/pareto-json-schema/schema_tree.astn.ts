import * as p_di from 'pareto-core/dist/data/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_schema_for_legacy_json } from "./schemas/schema_for_legacy_json/$.module.astn"

export const $ = sh.st.set({
    "schema for legacy json": x_schema_for_legacy_json,
})