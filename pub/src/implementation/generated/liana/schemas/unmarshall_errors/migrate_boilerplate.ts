
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/unmarshall_errors/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/unmarshall_errors/data"
export const Relative_Location: t_signatures.Relative_Location = ($,) => ({
    'line': _p.deprecated_cc($['line'], ($,) => $),
    'column': _p.deprecated_cc($['column'], ($,) => $),
})
export const Location: t_signatures.Location = ($,) => ({
    'relative': _p.deprecated_cc($['relative'], ($,) => Relative_Location($)),
    'absolute': _p.deprecated_cc($['absolute'], ($,) => $),
})
export const Range: t_signatures.Range = ($,) => ({
    'start': _p.deprecated_cc($['start'], ($,) => Location($)),
    'end': _p.deprecated_cc($['end'], ($,) => Location($)),
})
export const Errors: t_signatures.Errors = ($,) => $.__l_map(($,) => ({
    'range': _p.deprecated_cc($['range'], ($,) => Range($)),
    'type': _p.deprecated_cc($['type'], ($,) => _p.decide.state($, ($,): t_out.Errors.L.type_ => {
        switch ($[0]) {
            case 'error':
                return _p.ss($, ($,) => ['error', _p.decide.state($, ($,): t_out.Errors.L.type_.error => {
                    switch ($[0]) {
                        case 'invalid value type':
                            return _p.ss($, ($,) => ['invalid value type', ({
                                'expected': _p.deprecated_cc($['expected'], ($,) => $.__l_map(($,) => _p.decide.state($, ($,): t_out.Errors.L.type_.error.invalid_value_type.expected.L => {
                                    switch ($[0]) {
                                        case 'text':
                                            return _p.ss($, ($,) => ['text', null])
                                        case 'verbose group':
                                            return _p.ss($, ($,) => ['verbose group', null])
                                        case 'concise group':
                                            return _p.ss($, ($,) => ['concise group', null])
                                        case 'dictionary':
                                            return _p.ss($, ($,) => ['dictionary', null])
                                        case 'not set':
                                            return _p.ss($, ($,) => ['not set', null])
                                        case 'set':
                                            return _p.ss($, ($,) => ['set', null])
                                        case 'list':
                                            return _p.ss($, ($,) => ['list', null])
                                        case 'state':
                                            return _p.ss($, ($,) => ['state', null])
                                        default:
                                            return _p.au($[0])
                                    }
                                }))),
                            })])
                        case 'duplicate property':
                            return _p.ss($, ($,) => ['duplicate property', ({
                                'name': _p.deprecated_cc($['name'], ($,) => $),
                            })])
                        case 'missing property':
                            return _p.ss($, ($,) => ['missing property', ({
                                'name': _p.deprecated_cc($['name'], ($,) => $),
                            })])
                        case 'superfluous property':
                            return _p.ss($, ($,) => ['superfluous property', ({
                                'name': _p.deprecated_cc($['name'], ($,) => $),
                            })])
                        case 'state':
                            return _p.ss($, ($,) => ['state', _p.decide.state($, ($,): t_out.Errors.L.type_.error.state => {
                                switch ($[0]) {
                                    case 'more than 2 items':
                                        return _p.ss($, ($,) => ['more than 2 items', null])
                                    case 'missing state name':
                                        return _p.ss($, ($,) => ['missing state name', null])
                                    case 'state is not a string':
                                        return _p.ss($, ($,) => ['state is not a string', null])
                                    case 'missing value':
                                        return _p.ss($, ($,) => ['missing value', null])
                                    case 'unknown state':
                                        return _p.ss($, ($,) => ['unknown state', ({
                                            'found': _p.deprecated_cc($['found'], ($,) => $),
                                            'expected': _p.deprecated_cc($['expected'], ($,) => $.__d_map(($,id,) => null)),
                                        })])
                                    case 'missing data marker':
                                        return _p.ss($, ($,) => ['missing data marker', null])
                                    default:
                                        return _p.au($[0])
                                }
                            })])
                        default:
                            return _p.au($[0])
                    }
                })])
            case 'warning':
                return _p.ss($, ($,) => ['warning', _p.decide.state($, ($,): t_out.Errors.L.type_.warning => {
                    switch ($[0]) {
                        case 'expected apostrophed string':
                            return _p.ss($, ($,) => ['expected apostrophed string', null])
                        case 'expected quoted string':
                            return _p.ss($, ($,) => ['expected quoted string', null])
                        case 'expected backticked string':
                            return _p.ss($, ($,) => ['expected backticked string', null])
                        case 'expected undelimited string':
                            return _p.ss($, ($,) => ['expected undelimited string', null])
                        default:
                            return _p.au($[0])
                    }
                })])
            default:
                return _p.au($[0])
        }
    })),
}))
