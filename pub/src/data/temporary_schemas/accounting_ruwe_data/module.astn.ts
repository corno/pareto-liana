import * as _pi from 'pareto-core/dist/interface'

import * as g_ from "../../../interface/generated/liana/schemas/module/data/unresolved"

import { module_ } from "../../../shorthands/module"

import { $ as schema_tree } from "./schema_tree.astn"

export const $: g_.Module = module_(
    schema_tree,
)