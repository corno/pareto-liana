import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/to_be_generated/load_pareto_document"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data"

export namespace signatures {
    export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>
}

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import * as t_deserialize_parse_tree_to_fountain_pen from "astn-core/dist/implementation/manual/schemas/deserialize_parse_tree/transformers/fountain_pen"

export const Error: signatures.Error = ($) => _p.sg($, ($) => {
    switch ($[0]) {
        case 'no schema file': return _p.ss($, ($) => sh.b.snippet(`no schema file @ ${$['file location']}`))
        case 'deserialize': return _p.ss($, ($) => _p.sg($, ($) => {
            switch ($[0]) {

                case 'schema error': return _p.ss($, ($) => {
                    return sh.b.sub([
                        sh.b.snippet(`error in schema @ ${$['file location']}: `),
                        sh.b.snippet(`FIXME`)
                        //t_deserialize_parse_tree_to_fountain_pen.Error($.error, { 'position info': ['zero based', null] }),
                    ])
                })
                case 'unmarshall error': return _p.ss($, ($) => sh.b.snippet(`error during marshalling (TBD)`))
                case 'parse error': return _p.ss($, ($) => t_deserialize_parse_tree_to_fountain_pen.Error($, { 'position info': ['zero based', null] }))
                default: return _p.au($[0])
            }
        }))
        default: return _p.au($[0])
    }
})