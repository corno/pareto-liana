

import { signatures, sig } from "../../../../../shorthands/signatures/manual"


export const $  = signatures(
    {
        "Package": sig.local({}, {}),
        "Package Set": sig.local({}, {}),
        "Imports": sig.local({}, {}),
        "Value": sig.local({}, {}),
        "Module Reference": sig.local({}, {}),
    },
)