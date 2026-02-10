import * as _pi from 'pareto-core/dist/interface'

import * as g_ from "../../../interface/generated/liana/schemas/schema/data/unresolved"

import { package_ } from "../../../shorthands/schema"

import { $ as schema_tree } from "./schema_tree.astn"

export const $: g_.Package = package_(
    schema_tree,
)