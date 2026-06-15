import * as p_i from 'pareto-core/dist/transformer/interface'
import * as p_di from 'pareto-core/dist/data/interface'
import * as pt from 'pareto-core/dist/transformer/implementation'

//data types
import * as d_in from "../../../../interface/to_be_generated/generate_typescript"
import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
export type Possible_Range = p_di.Optional_Value<d_location.Range>

//dependencies
import * as t_deserialize_to_location from "liana-core/dist/implementation/manual/transformers/deserialize/location"


//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: p_i.Transformer<d_in.Error, Possible_Range> = ($) => {
    return pt.decide.state($, ($): Possible_Range => {
        switch ($[0]) {
            case 'could not read source': return pt.ss($, ($): Possible_Range => pt.literal.not_set())
            case 'could not log': return pt.ss($, ($) => pt.literal.not_set())
            case 'could not remove interface': return pt.ss($, ($) => pt.literal.not_set())
            case 'could not remove implementation': return pt.ss($, ($) => pt.literal.not_set())
            case 'could not write interface': return pt.ss($, ($) => pt.literal.not_set())
            case 'could not write implementation': return pt.ss($, ($) => pt.literal.not_set())
            case 'could not copy generic implementation': return pt.ss($, ($) => pt.literal.not_set())
            case 'could not copy core interface': return pt.ss($, ($) => pt.literal.not_set())
            case 'could not resolve module': return pt.ss($, ($): Possible_Range => pt.literal.set( pt.decide.state($.error.location, ($) => {
                switch ($[0]) {
                    case 'in main document': return pt.ss($, ($): d_location.Range => $)
                    case 'in subdocument':return pt.ss($, ($): d_location.Range => $.range)
                    default: return pt.au($[0])
                }
            })))
            case 'could not deserialize': return pt.ss($, ($) => pt.literal.set(
                pt.decide.state(t_deserialize_to_location.Error($.error), ($): d_location.Range => {
                    switch ($[0]) {
                        case 'range': return pt.ss($, ($) => $)
                        case 'end of document': return pt.ss($, ($) => ({
                            'start': $.end,
                            'end': $.end,
                        }))
                        default: return pt.au($[0])
                    }
                })
            ))
            default: return pt.au($[0])
        }
    })
}