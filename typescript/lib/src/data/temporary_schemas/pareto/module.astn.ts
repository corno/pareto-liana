import * as p_di from 'pareto-core/dist/data/interface'



import { package_ } from "../../../shorthands/schema"

import { $ as schema_tree } from "./schema_tree.astn"

export const $ = package_(
    schema_tree,
    false,
)