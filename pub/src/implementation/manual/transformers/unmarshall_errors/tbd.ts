import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/unmarshall_errors/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_function_loc from "astn-core/dist/interface/to_be_generated/location_to_fountain_pen"
import * as d_loc from "astn-core/dist/interface/generated/liana/schemas/location/data"

//dependencies
import * as t_loc_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"


// export type Temp_Errors = _pi.List<{
//     'range': d_loc.Range,
//     'message': d_out.Phrase
//     'severity': 
//     | ['error', null]
//     | ['warning', null]
// }>

// export const Errors: _pi.Transformer<d_in.Errors, Temp_Errors> = (
//     $,
// ) => {
//     return $.__l_map(($) => {
//         return ({
//             'range': $.range,
//             'message': _p.decide.state($.type, ($) => {
//                 switch ($[0]) {
//                     case 'error': return _p.ss($, ($) => sh.ph.composed([
//                         sh.ph.literal("Error: "),
//                         Error_Type_Error($)
//                     ]))
//                     case 'warning': return _p.ss($, ($) => sh.ph.composed([
//                         sh.ph.literal("Warning: "),
//                         Error_Type_Warning($)
//                     ]))
//                     default: return _p.au($[0])
//                 }
//             }),
//             'severity': _p.decide.state($.type, ($) => {
//                 switch ($[0]) {
//                     case 'error': return _p.ss($, ($) => ['error', null])
//                     case 'warning': return _p.ss($, ($) => ['warning', null])
//                     default: return _p.au($[0])
//                 }
//             })
//         })
//     })
// }

export const Error_Type_Error = (
    $: d_in.Errors.L.type_.error,
): d_out.Phrase => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'duplicate property': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("Duplicate property \""),
            sh.ph.literal($.name),
            sh.ph.literal("\"")
        ]))
        case 'invalid value type': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("Invalid value type, expected "),
            sh.ph.rich(
                $.expected.__l_map(($) => sh.ph.composed([
                    sh.ph.literal("'"),
                    sh.ph.literal($[0]),
                    sh.ph.literal("'")
                ])),
                sh.ph.literal(" something"),
                sh.ph.nothing(),
                sh.ph.literal(" or "),
                sh.ph.nothing(),

            )
        ]))
        case 'missing property': return _p.ss($, ($) => sh.ph.literal("Missing property '${$.name}'"))
        case 'superfluous property': return _p.ss($, ($) => sh.ph.literal("Superfluous property '${$.name}'"))
        case 'state': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'missing option name': return _p.ss($, ($) => sh.ph.literal("Missing option name"))
                case 'missing data marker': return _p.ss($, ($) => sh.ph.literal("Missing data marker"))
                case 'missing value': return _p.ss($, ($) => sh.ph.literal("Missing value"))
                case 'more than 2 items': return _p.ss($, ($) => sh.ph.literal("More than 2 items"))
                case 'option name is not a text': return _p.ss($, ($) => sh.ph.literal("Option name is not a text"))
                case 'unknown option': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("Unknown option: ${$.found}, expected one of "),
                    sh.ph.composed(
                        _p.list.from.dictionary(
                            $.expected,
                        ).convert(
                            ($, id) => sh.ph.literal("'${id}'")
                        )
                    )
                ]))
                default: return _p.au($[0])
            }
        }))
        default: return _p.au($[0])
    }
})

export const Error_Type_Warning = (
    $: d_in.Errors.L.type_.warning,
): d_out.Phrase => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'expected apostrophed string': return _p.ss($, ($) => sh.ph.literal("Expected apostrophed string"))
        case 'expected backticked string': return _p.ss($, ($) => sh.ph.literal("Expected backticked string"))
        case 'expected quoted string': return _p.ss($, ($) => sh.ph.literal("Expected quoted string"))
        case 'expected undelimited string': return _p.ss($, ($) => sh.ph.literal("Expected undelimited string"))
        default: return _p.au($[0])
    }
})