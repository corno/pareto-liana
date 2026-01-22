import * as _pi from 'pareto-core/dist/interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/liana/schemas/schema/data/unresolved"

import { $ as x_legacy_json_ } from "./schemas/legacy_json_schema/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "legacy json schema": x_legacy_json_,
})