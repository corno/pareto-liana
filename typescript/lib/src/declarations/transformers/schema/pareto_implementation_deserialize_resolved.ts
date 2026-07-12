
import type * as p_ from 'pareto-core/interface/transformer'
import type * as p_di from 'pareto-core/interface/data'

//schemas
import type * as s_in from "../../../submodules/schema/interface/schemas/resolved.js"
import type * as s_out from "pareto/modules/implementation/interface/data/resolved"



export type Schema = p_.Transformer_With_Parameter<
    s_in.Schema,
    s_out.Package_Set.D,
    {
        'path': p_di.List<string>,
        'depth': number,
    }
>


