import * as _pi from 'pareto-core/dist/interface'

import { signatures, sig } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolve_Logic.signatures  = signatures(
    {
        "Module Set": sig.local({}, {}),
        "Module": sig.local({}, {}),
        "Temp Type Node Reference": sig.local({}, {}),
        "Expression": sig.local({}, {}),
        "Selection": sig.local({}, {}),
        "Lookup Selection": sig.local({}, {}),

    },
)