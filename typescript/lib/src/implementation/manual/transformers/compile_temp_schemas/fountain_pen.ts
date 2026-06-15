import * as pt from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

import * as d_in from "../../../../interface/data/compile_temp_schemas"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

import * as t_resolve_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/resolve/fountain_pen"
import * as t_location_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/location/fountain_pen"
//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: p_i.Transformer_With_Parameter<d_in.Error, d_out.Phrase, {
    'id': string,
    'character location reporting': ['zero based', null] | ['one based', null]
}> = ($, $p) => {
    return sh.ph.composed([
            sh.ph.literal("error in package '"),
            sh.ph.literal($p.id),
            sh.ph.literal("': "),
            pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'could not log': return pt.ss($, ($) => sh.ph.literal("could not log"))
                    case 'could not remove interface': return pt.ss($, ($) => sh.ph.literal("could not remove interface"))
                    case 'could not remove implementation': return pt.ss($, ($) => sh.ph.literal("could not remove implementation"))
                    case 'could not write interface': return pt.ss($, ($) => sh.ph.literal("could not write interface"))
                    case 'could not write implementation': return pt.ss($, ($) => sh.ph.literal("could not write implementation"))
                    case 'could not copy generic implementation': return pt.ss($, ($) => sh.ph.literal("could not copy generic implementation"))
                    case 'could not copy core interface': return pt.ss($, ($) => sh.ph.literal("could not copy core interface"))
                    case 'could not deserialize module': return pt.ss($, ($) => sh.ph.composed([
                        t_location_to_fountain_pen.Range(
                            $.location,
                            {
                                'document resource identifier': "unknown DRI",
                                'character location reporting': ['one based', null],
                            }
                        ),
                        sh.ph.literal(": "),
                        t_resolve_to_fountain_pen.Error(
                            $,
                        )
                    ]))
                    default: return pt.au($[0])
                }
            })
        ])
}