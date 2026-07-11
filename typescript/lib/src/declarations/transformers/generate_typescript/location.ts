import type * as p_ from 'pareto-core/interface/transformer'
import type * as p_di from 'pareto-core/interface/data'


//data types
import type * as d_in from "../../../interface/schemas/generate_typescript.js"
import type * as d_location from "astn-core/interface/data/location"

export namespace d_out {

    export type Possible_Range = p_di.Optional_Value<d_location.Range>

}


export type Error = p_.Transformer<
    d_in.Error,
    d_out.Possible_Range
>

