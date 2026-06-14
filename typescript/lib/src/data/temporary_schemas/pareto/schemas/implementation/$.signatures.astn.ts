import * as pi from 'pareto-core/dist/interface'

import { signatures, sig } from "../../../../../shorthands/signatures"


export const $  = signatures(
    {
        "Package Set": sig.local({}, {}),
        "Package": sig.local({}, {}),
        "Temp Value Type Specification": sig.local({}, {}),
        "Assign": sig.local({}, {}),
        "Select Value": sig.local({}, {}),
        "Select Lookup": sig.local({}, {}),

    },
)