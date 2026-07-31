import * as sh from "lib/schemas/signatures/shorthands/manual"

export const $  = sh.signatures(
    {
        "Package": sh.sig.local({}, {}),
        "Package Set": sh.sig.local({}, {}),
        "Imports": sh.sig.local({}, {}),
        "Value": sh.sig.local({}, {}),
        "Module Reference": sh.sig.local({}, {}),
    },
)