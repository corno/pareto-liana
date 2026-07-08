import * as p_i from 'pareto-core/interface/transformer'
import * as p_di from 'pareto-core/interface/data'
import * as p_ from 'pareto-core/implementation/transformer'

//data types
import type * as d_in from "../../../../interface/data/generate_typescript.js"
import type * as d_location from "astn-core/interface/generated/liana/schemas/location/data"

export namespace d_out {

    export type Possible_Range = p_di.Optional_Value<d_location.Range>

}

export namespace interface_ {
    export type Error = p_i.Transformer<
        d_in.Error,
        d_out.Possible_Range
    >
}


//dependencies
import * as t_deserialize_to_location from "liana-core/implementation/manual/transformers/deserialize/location"



export const Error: interface_.Error = ($) => {
    return p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'could not read source': return p_.option($, ($) => p_.literal.not_set())
                case 'could not log': return p_.option($, ($) => p_.literal.not_set())
                case 'could not remove interface': return p_.option($, ($) => p_.literal.not_set())
                case 'could not remove implementation': return p_.option($, ($) => p_.literal.not_set())
                case 'could not write interface': return p_.option($, ($) => p_.literal.not_set())
                case 'could not write implementation': return p_.option($, ($) => p_.literal.not_set())
                case 'could not copy generic implementation': return p_.option($, ($) => p_.literal.not_set())
                case 'could not copy core interface': return p_.option($, ($) => p_.literal.not_set())
                case 'could not resolve module': return p_.option($, ($) => p_.literal.set(p_.from.state($.error.location).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'in main document': return p_.option($, ($) => $)
                            case 'in subdocument': return p_.option($, ($) => $.range)
                            default: return p_.exhaustive($[0])
                        }
                    })))
                case 'could not deserialize': return p_.option($, ($) => p_.literal.set(
                    p_.from.state(t_deserialize_to_location.Error($.error)).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'range': return p_.option($, ($) => $)
                                case 'end of document': return p_.option($, ($) => ({
                                    'start': $.end,
                                    'end': $.end,
                                }))
                                default: return p_.exhaustive($[0])
                            }
                        })
                ))
                default: return p_.exhaustive($[0])
            }
        })
}