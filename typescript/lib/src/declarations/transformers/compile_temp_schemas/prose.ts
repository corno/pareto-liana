
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/compile_temp_schemas.js"
import type * as s_out from "pareto-fountain-pen/interface/data/prose"

export namespace s_function {
    export type Parameters = {
        'id': string,
        'character location reporting': ['zero based', null] | ['one based', null]
    }
}


export type Error = p_.Transformer_With_Parameter<
    s_in.Error,
    s_out.Phrase,
    s_function.Parameters
>

