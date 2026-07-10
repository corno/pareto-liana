
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../interface/data/compile_temp_schemas.js"
import type * as d_out from "pareto-fountain-pen/interface/data/prose"

export namespace d_function {
    export type Parameters = {
        'id': string,
        'character location reporting': ['zero based', null] | ['one based', null]
    }
}


export type Error = p_.Transformer_With_Parameter<
    d_in.Error,
    d_out.Phrase,
    d_function.Parameters
>

