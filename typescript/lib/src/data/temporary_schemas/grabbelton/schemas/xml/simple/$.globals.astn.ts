

import {
    globals,
    n,
    text,
} from "../../../../../../shorthands/schema/manual"
import * as g_ from "../../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $ = globals(

         'unconstrained',
    {
        "Text Value": text('single line'),
    },
    {
        "Position": n.natural(null),
    },
)


