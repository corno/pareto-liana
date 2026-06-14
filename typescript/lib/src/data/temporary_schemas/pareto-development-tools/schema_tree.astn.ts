import * as p_di from 'pareto-core/dist/data/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_structure } from "./schemas/structure/$.module.astn"

export const $ = sh.st.set({
    "structure": x_structure,
})