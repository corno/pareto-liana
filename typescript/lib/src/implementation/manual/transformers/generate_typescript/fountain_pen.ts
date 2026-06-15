import * as p_di from 'pareto-core/dist/data/interface'
import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_ti from 'pareto-core/dist/transformer/interface'

//data types
import * as d_in from "../../../../interface/to_be_generated/generate_typescript"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as t_resolve_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/resolve/fountain_pen"
import * as t_deserialize_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize/fountain_pen"
import * as t_read_file_to_fountain_pen from "pareto-resources/dist/implementation/manual/transformers/read_file/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: p_ti.Transformer<d_in.Error, d_out.Phrase> = ($) => {
    return pt.decide.state($, ($) => {
        switch ($[0]) {
            case 'could not read source': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("could not read source"),
                t_read_file_to_fountain_pen.Error($)
            ]))
            case 'could not log': return pt.ss($, ($) => sh.ph.literal("could not log"))
            case 'could not remove interface': return pt.ss($, ($) => sh.ph.literal("could not remove interface"))
            case 'could not remove implementation': return pt.ss($, ($) => sh.ph.literal("could not remove implementation"))
            case 'could not write interface': return pt.ss($, ($) => sh.ph.literal("could not write interface"))
            case 'could not write implementation': return pt.ss($, ($) => sh.ph.literal("could not write implementation"))
            case 'could not copy generic implementation': return pt.ss($, ($) => sh.ph.literal("could not copy generic implementation"))
            case 'could not copy core interface': return pt.ss($, ($) => sh.ph.literal("could not copy core interface"))
            case 'could not resolve module': return pt.ss($, ($) => sh.ph.composed([
                // t_location_to_fountain_pen.Range(
                //     $.error.location,
                //     {
                //         'document resource identifier': t_path_to_text.Node_Path($.location),
                //         'character location reporting': $p['character location reporting'],
                //     }
                // ),
                // sh.ph.literal(": "),
                t_resolve_to_fountain_pen.Error(
                    $.error,
                )
            ]))
            case 'could not deserialize': return pt.ss($, ($) => sh.ph.composed([
                // t_location_to_fountain_pen.Range(
                //     ['in main document', pt.decide.state(t_deserialize_to_location.Error($.error), ($): d_location.Range => {
                //         switch ($[0]) {
                //             case 'range': return pt.ss($, ($) => $)
                //             case 'end of document': return pt.ss($, ($) => ({
                //                 'start': $.end,
                //                 'end': $.end,
                //             }))
                //             default: return pt.au($[0])
                //         }
                //     })],
                //     {
                //         'document resource identifier': t_path_to_text.Node_Path($.location),
                //         'character location reporting': $p['character location reporting'],
                //     }
                // ),
                // sh.ph.literal(": "),
                t_deserialize_to_fountain_pen.Error(
                    $.error,
                )
            ]))
            default: return pt.au($[0])
        }
    })
}