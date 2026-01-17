import * as _pi from 'pareto-core-interface'

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { schema_, constrained } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $: g_.Schemas.dictionary.D.entry = schema_(
    {},
    globals,
    schema,
    null,
)
