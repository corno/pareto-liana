import * as _pi from 'pareto-core/dist/interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Globals = globals(

    'unconstrained',
    {
        "Identifier": text('single line'),
        "Output": text('single line'),
        "text": text('single line'),
    },
    {
        "Approximation": n.approximation(10),
        "boolean": n.boolean(),
    },
)


