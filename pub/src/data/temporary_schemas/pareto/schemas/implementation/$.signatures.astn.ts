import * as _pi from 'pareto-core/dist/interface'

import { signatures, sig } from "../../../../../shorthands/signatures"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolver.signatures  = signatures(
    {
        "Package Set": sig.local({}, {}),
        "Package": sig.local({}, {}),
        "Temp Value Type Specification": sig.local({}, {}),
        "Assign": sig.local({}, {}),
        "Select Value": sig.local({}, {}),
        "Select Lookup": sig.local({}, {}),

    },
)