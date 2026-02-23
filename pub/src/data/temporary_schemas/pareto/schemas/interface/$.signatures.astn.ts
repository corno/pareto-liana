import * as _pi from 'pareto-core/dist/interface'

import { signatures, sig } from "../../../../../shorthands/signatures"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolver.signatures  = signatures(
    {
        "Package": sig.local({}, {}),
        "Package Set": sig.local({}, {}),
        "Imports": sig.local({}, {}),
        "Value": sig.local({}, {}),
        "Module Reference": sig.local({}, {}),
    },
)