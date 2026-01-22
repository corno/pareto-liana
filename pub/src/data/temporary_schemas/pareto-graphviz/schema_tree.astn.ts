import * as _pi from 'pareto-core/dist/interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/liana/schemas/schema/data/unresolved"

import { $ as x_graphviz } from "./schemas/graphviz/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "graphviz": x_graphviz,
})