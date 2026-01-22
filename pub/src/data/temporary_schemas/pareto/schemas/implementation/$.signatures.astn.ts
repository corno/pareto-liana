import * as _pi from 'pareto-core/dist/interface'

import { signatures, sig } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolve_Logic.signatures  = signatures(
    {
        "Abort Expression": sig.local({}, {}),
        "Module Set": sig.local({}, {}),
        "Module": sig.local({}, {}),
        "Type Reference": sig.local({}, {}),
        "Type Node Reference": sig.local({}, {}),
        "Expression": sig.local({}, {}),
        "Selection": sig.local({}, {}),
    },
)