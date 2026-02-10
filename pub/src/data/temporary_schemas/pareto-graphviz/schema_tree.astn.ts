import * as _pi from 'pareto-core/dist/interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/liana/schemas/schema/data/unresolved"

import { $ as x_attributes } from "./schemas/attributes/$.module.astn"
import { $ as x_high_level_simple } from "./schemas/high_level_simple/$.module.astn"
import { $ as x_low_level } from "./schemas/low_level/$.module.astn"
import { $ as x_high_level } from "./schemas/high_level/$.module.astn"
import { $ as x_file_structure } from "./schemas/file_structure/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "attributes": x_attributes,
    "file structure": x_file_structure,
    "high level simple": x_high_level_simple,
    "low level": x_low_level,
    "high level": x_high_level,
})