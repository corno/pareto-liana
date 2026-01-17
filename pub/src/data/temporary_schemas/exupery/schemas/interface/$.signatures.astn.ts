import * as _pi from 'pareto-core-interface'

import { signatures, sig } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Resolve_Logic.signatures  = signatures(
    {
        "Module": sig.local({}, {}),
        "Module Set": sig.local({}, {}),
        "Imports": sig.local({}, {}),
        "Type": sig.local({}, {}),
    },
)