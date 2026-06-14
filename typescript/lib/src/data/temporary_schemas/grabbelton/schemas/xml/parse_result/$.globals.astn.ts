import * as p_di from 'pareto-core/dist/data/interface'

import {
    globals,
    n,
    text,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $ = globals(

         'unconstrained',
    {
        "Text Value": text('single line'),
    },
    {
        "Natural": n.natural(null),
    },
)


