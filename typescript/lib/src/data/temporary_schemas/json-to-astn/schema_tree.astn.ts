import * as _pi from 'pareto-core/dist/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_legacy_json_ } from "./schemas/legacy_json_schema/$.module.astn"

export const $ = sh.st.set({
    "legacy json schema": x_legacy_json_,
})