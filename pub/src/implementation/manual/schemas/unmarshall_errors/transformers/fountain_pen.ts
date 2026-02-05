import * as _p from 'pareto-core/dist/expression'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/unmarshall_errors/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Errors = (
    $: d_in.Errors,
    $p: {
        'line offset': number
        'column offset': number
        'document path': string
    }
): d_out.Paragraph => {
    return sh.pg.sentences($.__l_map(($) => {
        return sh.ph.composed([
            sh.ph.literal($p['document path']),
            sh.ph.literal(":"),
            sh.ph.decimal($.range.start.relative.line + $p['line offset']),
            sh.ph.literal(":"),
            sh.ph.decimal($.range.start.relative.column + $p['column offset']),
            sh.ph.literal(": "),
            _p.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'error': return _p.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("Error: "),
                        Error_Type_Error($)
                    ]))
                    case 'warning': return _p.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("Warning: "),
                        Error_Type_Warning($)
                    ]))
                    default: return _p.au($[0])
                }
            })
        ])
    }))
}

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
                //  ${s_list_of_separated_texts($.expected.__l_map(($) => `'${$[0]}'`), { 'separator': ` or ` })}.`)
        ]))
        case 'missing property': return _p.ss($, ($) => sh.ph.literal("Missing property '${$.name}'"))
        case 'superfluous property': return _p.ss($, ($) => sh.ph.literal("Superfluous property '${$.name}'"))
        case 'state': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'missing state name': return _p.ss($, ($) => sh.ph.literal("Missing state name"))
                case 'missing data marker': return _p.ss($, ($) => sh.ph.literal("Missing data marker"))
                case 'missing value': return _p.ss($, ($) => sh.ph.literal("Missing value"))
                case 'more than 2 items': return _p.ss($, ($) => sh.ph.literal("More than 2 items"))
                case 'state is not a string': return _p.ss($, ($) => sh.ph.literal("State is not a string"))
                case 'unknown state': return _p.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("Unknown state: ${$.found}, expected one of "),
                    sh.ph.composed(
                        _p.list.from_dictionary(
                            $.expected,
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