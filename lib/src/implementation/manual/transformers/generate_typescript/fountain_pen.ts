import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "../../../../interface/to_be_generated/generate_typescript"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"

//dependencies
import * as t_resolve_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/resolve/fountain_pen"
import * as t_location_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/location/fountain_pen"
import * as t_deserialize_to_fountain_pen from "liana-core/dist/implementation/manual/transformers/deserialize/fountain_pen"
import * as t_deserialize_to_location from "liana-core/dist/implementation/manual/transformers/deserialize/location"
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/transformers/path/text"
import * as t_read_file_to_fountain_pen from "pareto-resources/dist/implementation/manual/transformers/read_file/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: _pi.Transformer_With_Parameter<d_in.Error, d_out.Phrase, {
    'character location reporting': ['zero based', null] | ['one based', null]
}> = ($, $p) => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'could not read source': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("could not read source"),
                t_read_file_to_fountain_pen.Error($)
            ]))
            case 'could not log': return _p.ss($, ($) => sh.ph.literal("could not log"))
            case 'could not remove interface': return _p.ss($, ($) => sh.ph.literal("could not remove interface"))
            case 'could not remove implementation': return _p.ss($, ($) => sh.ph.literal("could not remove implementation"))
            case 'could not write interface': return _p.ss($, ($) => sh.ph.literal("could not write interface"))
            case 'could not write implementation': return _p.ss($, ($) => sh.ph.literal("could not write implementation"))
            case 'could not copy generic implementation': return _p.ss($, ($) => sh.ph.literal("could not copy generic implementation"))
            case 'could not copy core interface': return _p.ss($, ($) => sh.ph.literal("could not copy core interface"))
            case 'could not resolve module': return _p.ss($, ($) => sh.ph.composed([
                t_location_to_fountain_pen.Range(
                    $.error.location,
                    {
                        'document resource identifier': t_path_to_text.Node_Path($.location),
                        'character location reporting': $p['character location reporting'],
                    }
                ),
                sh.ph.literal(": "),
                t_resolve_to_fountain_pen.Error(
                    $.error,
                )
            ]))
            case 'could not deserialize': return _p.ss($, ($) => sh.ph.composed([
                t_location_to_fountain_pen.Range(
                    ['in main document', _p.decide.state(t_deserialize_to_location.Error($.error), ($): d_location.Range => {
                        switch ($[0]) {
                            case 'range': return _p.ss($, ($) => $)
                            case 'end of document': return _p.ss($, ($) => ({
                                'start': $.end,
                                'end': $.end,
                            }))
                            default: return _p.au($[0])
                        }
                    })],
                    {
                        'document resource identifier': t_path_to_text.Node_Path($.location),
                        'character location reporting': $p['character location reporting'],
                    }
                ),
                sh.ph.literal(": "),
                t_deserialize_to_fountain_pen.Error(
                    $.error,
                )
            ]))
            default: return _p.au($[0])
        }
    })
}