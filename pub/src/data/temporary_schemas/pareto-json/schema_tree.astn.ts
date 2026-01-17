import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { $ as x_json } from "./schemas/json/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "json": x_json,
})