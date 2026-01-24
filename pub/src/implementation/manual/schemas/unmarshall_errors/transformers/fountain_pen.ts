import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core/dist/interface'
import * as _pd from 'pareto-core/dist/deserializer'
import * as _ps from 'pareto-core/dist/serializer'

import * as d_in from "../../../../../interface/generated/liana/schemas/unmarshall_errors/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const s_list_of_separated_texts: _pi.Serializer_With_Parameters<_pi.List<string>, { 'separator': string }> = ($, $p) => {
    let is_first = true
    return _ps.text.from_list(_p.list.deprecated_build<number>(
        ($i) => {
            $.__for_each(($) => {
                if (!is_first) {
                    $i['add list'](_pd.list.from_text($p.separator, ($) => $))
                }
                $i['add list'](_pd.list.from_text($, ($) => $))
                is_first = false

            })
        }),
        ($) => $,
    )
}

export const Errors = (
    $: d_in.Errors,
    $p: {
        'line offset': number
        'column offset': number
        'document path': string
    }
): d_out.Group => {
    return sh.group([sh.g.sub($.__l_map(($) => {
        return sh.g.nested_block([
            sh.b.snippet(`${$p['document path']}:${$.range.start.relative.line + $p['line offset']}:${$.range.start.relative.column + $p['column offset']}: `),
            _p.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'error': return _p.ss($, ($) => sh.b.sub([
                        sh.b.snippet(`Error: `),
                        Error_Type_Error($)
                    ]))
                    case 'warning': return _p.ss($, ($) => sh.b.sub([
                        sh.b.snippet(`Warning: `),
                        Error_Type_Warning($)
                    ]))
                    default: return _p.au($[0])
                }
            })
        ])
    }))])
}

export const Error_Type_Error = (
    $: d_in.Errors.L.type_.error,
): d_out.Block_Part => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'duplicate property': return _p.ss($, ($) => sh.b.snippet(`Duplicate property "${$.name}"`))
        case 'invalid value type': return _p.ss($, ($) => sh.b.snippet(`Invalid value type, expected ${s_list_of_separated_texts($.expected.__l_map(($) => `'${$[0]}'`), { 'separator': ` or ` })}.`))
        case 'missing property': return _p.ss($, ($) => sh.b.snippet(`Missing property '${$.name}'`))
        case 'superfluous property': return _p.ss($, ($) => sh.b.snippet(`Superfluous property '${$.name}'`))
        case 'state': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'missing state name': return _p.ss($, ($) => sh.b.snippet(`Missing state name`))
                case 'missing data marker': return _p.ss($, ($) => sh.b.snippet(`Missing data marker`))
                case 'missing value': return _p.ss($, ($) => sh.b.snippet(`Missing value`))
                case 'more than 2 elements': return _p.ss($, ($) => sh.b.snippet(`More than 2 elements`))
                case 'state is not a string': return _p.ss($, ($) => sh.b.snippet(`State is not a string`))
                case 'unknown state': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet(`Unknown state: ${$.found}, expected one of `),
                    sh.b.sub(
                        _p.list.from_dictionary(
                            $.expected,
                            ($, key) => sh.b.snippet(`'${key}'`)
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
): d_out.Block_Part => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'expected apostrophed string': return _p.ss($, ($) => sh.b.snippet(`Expected apostrophed string`))
        case 'expected backticked string': return _p.ss($, ($) => sh.b.snippet(`Expected backticked string`))
        case 'expected quoted string': return _p.ss($, ($) => sh.b.snippet(`Expected quoted string`))
        case 'expected undelimited string': return _p.ss($, ($) => sh.b.snippet(`Expected undelimited string`))
        default: return _p.au($[0])
    }
})