import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/to_be_generated/load_pareto_document"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export namespace signatures {
    export type Error = _pi.Transformer<d_in.Error, d_out.Phrase>
}

import * as sh from "pareto-fountain-pen/dist/shorthands/block"



//dependencies
import * as t_deserialize_parse_tree_to_fountain_pen from "astn-core/dist/implementation/manual/schemas/deserialize_parse_tree/transformers/fountain_pen"
import * as t_deserialize_resolved_to_fountain_pen from "liana-core/dist/implementation/manual/schemas/deserialize_resolved/transformers/fountain_pen"




export const Error: signatures.Error = ($) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'no schema file': return _p.ss($, ($) => sh.ph.literal("no schema file @ ${$['file location']}"))
        case 'deserialize': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {

                case 'schema error': return _p.ss($, ($) => {
                    return sh.ph.composed([
                        sh.ph.literal("error in schema @ ${$['file location']}: "),
                        t_deserialize_resolved_to_fountain_pen.Error($.error)
                    ])
                })
                case 'unmarshall error': return _p.ss($, ($) => sh.ph.literal("error during marshalling (TBD)"))
                case 'parse error': return _p.ss($, ($) => t_deserialize_parse_tree_to_fountain_pen.Error($, { 'position info': ['zero based', null] }))
                default: return _p.au($[0])
            }
        }))
        default: return _p.au($[0])
    }
})