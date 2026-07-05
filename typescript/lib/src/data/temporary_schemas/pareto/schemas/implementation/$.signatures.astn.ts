import * as sh from "../../../../../shorthands/signatures/manual.js"

export const $  = sh.signatures(
    {
        "Package Set": sh.sig.local({}, {}),
        "Package": sh.sig.local({}, {}),
        "Temp Value Type Specification": sh.sig.local({}, {}),
        "Assign": sh.sig.local({}, {}),
        "Select Value": sh.sig.local({}, {}),
        "Select Lookup": sh.sig.local({}, {}),

    },
)