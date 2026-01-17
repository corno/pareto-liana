import * as _pi from 'pareto-core-interface'

import { signatures, sig, value_parameter_external, } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Resolve_Logic.signatures = signatures(
    {
        "Module": sig.local({}, {}),
        "Operations": sig.local({
            //"globals": value_parameter_external("schema", "Globals"),
        }, {}),
    },
)