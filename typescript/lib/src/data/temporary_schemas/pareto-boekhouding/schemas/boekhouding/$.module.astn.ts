import * as pi from 'pareto-core/dist/interface'



import { schema_, constrained } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"
import { $ as signatures } from "./$.signatures.astn"
import { $ as resolver } from "./$.resolvers.astn"

export const $ = schema_(
    {}, {},
    globals,
    schema,
    constrained(
        signatures,
        resolver,
    ),
)