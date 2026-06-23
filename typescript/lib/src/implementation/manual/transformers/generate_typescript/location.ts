import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import * as p_ from 'pareto-core/dist/implementation/transformer'

//data types
import * as d_in from "../../../../interface/data/generate_typescript"
import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
export type Possible_Range = p_di.Optional_Value<d_location.Range>

//dependencies
import * as t_deserialize_to_location from "liana-core/dist/implementation/manual/transformers/deserialize/location"


//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose/deprecated"

export const Error: p_i.Transformer<
d_in.Error, Possible_Range
> = ($) => {
    return p_.from.state($).decide(
        ($): Possible_Range => {
            switch ($[0]) {
                case 'could not read source': return p_.ss($, ($): Possible_Range => p_.literal.not_set())
                case 'could not log': return p_.ss($, ($) => p_.literal.not_set())
                case 'could not remove interface': return p_.ss($, ($) => p_.literal.not_set())
                case 'could not remove implementation': return p_.ss($, ($) => p_.literal.not_set())
                case 'could not write interface': return p_.ss($, ($) => p_.literal.not_set())
                case 'could not write implementation': return p_.ss($, ($) => p_.literal.not_set())
                case 'could not copy generic implementation': return p_.ss($, ($) => p_.literal.not_set())
                case 'could not copy core interface': return p_.ss($, ($) => p_.literal.not_set())
                case 'could not resolve module': return p_.ss($, ($): Possible_Range => p_.literal.set(p_.from.state($.error.location).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'in main document': return p_.ss($, ($): d_location.Range => $)
                            case 'in subdocument': return p_.ss($, ($): d_location.Range => $.range)
                            default: return p_.au($[0])
                        }
                    })))
                case 'could not deserialize': return p_.ss($, ($) => p_.literal.set(
                    p_.from.state(t_deserialize_to_location.Error($.error)).decide(
                        ($): d_location.Range => {
                            switch ($[0]) {
                                case 'range': return p_.ss($, ($) => $)
                                case 'end of document': return p_.ss($, ($) => ({
                                    'start': $.end,
                                    'end': $.end,
                                }))
                                default: return p_.au($[0])
                            }
                        })
                ))
                default: return p_.au($[0])
            }
        })
}