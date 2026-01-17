import * as _pi from 'pareto-core-interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Globals = globals(

         'unconstrained',
    {
        "url": text("single line"),
        "text value": text("single line"),
        "regex": text("single line"),
        "identifier": text("single line"),
    },
    {
        "amount": n.natural(),
    },
)


