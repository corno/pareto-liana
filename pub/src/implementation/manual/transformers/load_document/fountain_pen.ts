import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/to_be_generated/load_document"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_function_loc from "astn-core/dist/interface/to_be_generated/location_to_fountain_pen"

export namespace signatures {
    export type Error = _pi.Transformer_With_Parameter<d_in.Error, d_out.Phrase, d_function_loc.Parameters>
}

import * as sh from "pareto-fountain-pen/dist/shorthands/prose"



//dependencies
import * as t_deserialize_parse_tree_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/fountain_pen"
import * as t_deserialize_resolved_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize_resolved/fountain_pen"




export const Error: signatures.Error = ($, $p) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'no schema file': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("no schema file @ "),
            sh.ph.literal($['file location'])
        ]))
        case 'deserialize': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {

                case 'schema error': return _p.ss($, ($) => {
                    return sh.ph.composed([
                        sh.ph.literal("error in schema"),
                        sh.ph.literal(": "),
                        t_deserialize_resolved_to_fountain_pen.Error($.error, $p)
                    ])
                })
                case 'unmarshall error': return _p.ss($, ($) => sh.ph.literal("error during marshalling (TBD)"))
                case 'parse error': return _p.ss($, ($) => t_deserialize_parse_tree_to_fountain_pen.Error($, $p))
                default: return _p.au($[0])
            }
        }))
        default: return _p.au($[0])
    }
})