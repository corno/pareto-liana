import type * as p_ from 'pareto-core/interface/transformer'
import type * as p_di from 'pareto-core/interface/data'


//data types
import type * as s_in from "../../../interface/schemas/generate_typescript.js"
import type * as s_location from "astn-core/interface/data/location"

export namespace s_out {

    export type Possible_Range = p_di.Optional_Value<s_location.Range>

}


export type Error = p_.Transformer<
    s_in.Error,
    s_out.Possible_Range
>

