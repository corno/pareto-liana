import * as sh from "../../../../../shorthands/signatures/manual"

export const $  = sh.signatures(
    {
        "Package": sh.sig.local({}, {}),
        "Package Set": sh.sig.local({}, {}),
        "Imports": sh.sig.local({}, {}),
        "Value": sh.sig.local({}, {}),
        "Module Reference": sh.sig.local({}, {}),
    },
)