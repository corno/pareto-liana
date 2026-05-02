import * as _pi from 'pareto-core/dist/interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/liana/schemas/schema/data/unresolved"

import { $ as x_json } from "./schemas/json/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "json": x_json,
})