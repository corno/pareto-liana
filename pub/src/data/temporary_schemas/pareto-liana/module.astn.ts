import * as _pi from 'pareto-core-interface'

import * as g_ from "../../../interface/generated/pareto/schemas/module/data/unresolved"

import { module_ } from "../../../shorthands/module"

import { $ as operations } from "./operations.astn"
import { $ as schema_tree } from "./schema_tree.astn"

export const $: g_.Module = module_(
    operations,
    schema_tree,
)