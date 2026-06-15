

import { signatures, sig } from "../../../../../shorthands/signatures"


export const $  = signatures(
    {
        "Package": sig.local({}, {}),
        "Package Set": sig.local({}, {}),
        "Imports": sig.local({}, {}),
        "Value": sig.local({}, {}),
        "Module Reference": sig.local({}, {}),
    },
)