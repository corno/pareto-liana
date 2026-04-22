import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "../../../../interface/to_be_generated/generate_typescript"
import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
export type Possible_Range = _pi.Optional_Value<d_location.Range>

//dependencies
import * as t_deserialize_to_location from "liana-core/dist/implementation/manual/transformers/deserialize/location"


//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: _pi.Transformer<d_in.Error, Possible_Range> = ($) => {
    return _p.decide.state($, ($): Possible_Range => {
        switch ($[0]) {
            case 'could not read source': return _p.ss($, ($): Possible_Range => _p.optional.literal.not_set())
            case 'could not log': return _p.ss($, ($) => _p.optional.literal.not_set())
            case 'could not remove interface': return _p.ss($, ($) => _p.optional.literal.not_set())
            case 'could not remove implementation': return _p.ss($, ($) => _p.optional.literal.not_set())
            case 'could not write interface': return _p.ss($, ($) => _p.optional.literal.not_set())
            case 'could not write implementation': return _p.ss($, ($) => _p.optional.literal.not_set())
            case 'could not copy generic implementation': return _p.ss($, ($) => _p.optional.literal.not_set())
            case 'could not copy core interface': return _p.ss($, ($) => _p.optional.literal.not_set())
            case 'could not resolve module': return _p.ss($, ($): Possible_Range => _p.optional.literal.set( _p.decide.state($.error.location, ($) => {
                switch ($[0]) {
                    case 'in main document': return _p.ss($, ($): d_location.Range => $)
                    case 'in subdocument':return _p.ss($, ($): d_location.Range => $.range)
                    default: return _p.au($[0])
                }
            })))
            case 'could not deserialize': return _p.ss($, ($) => _p.optional.literal.set(
                _p.decide.state(t_deserialize_to_location.Error($.error), ($): d_location.Range => {
                    switch ($[0]) {
                        case 'range': return _p.ss($, ($) => $)
                        case 'end of document': return _p.ss($, ($) => ({
                            'start': $.end,
                            'end': $.end,
                        }))
                        default: return _p.au($[0])
                    }
                })
            ))
            default: return _p.au($[0])
        }
    })
}