
import type * as p_ from 'pareto-core/interface/transformer'
import type * as p_di from 'pareto-core/interface/data'

//data types
import type * as d_in from "../../../generated/liana/schemas/schema/data/resolved.js"
import type * as d_out from "pareto/interface/generated/liana/schemas/implementation/data/resolved"



    export type Schema = p_.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Package_Set.D,
        {
            'path': p_di.List<string>,
            'depth': number,
        }
    >


