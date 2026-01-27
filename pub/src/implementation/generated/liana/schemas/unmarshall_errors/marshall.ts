
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/unmarshall_errors/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Relative_Location: t_signatures.Relative_Location = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'line': _p.deprecated_cc($['line'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_number.serialize($),
    })]),
    'column': _p.deprecated_cc($['column'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_number.serialize($),
    })]),
}))]]
export const Location: t_signatures.Location = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'relative': _p.deprecated_cc($['relative'], ($,) => Relative_Location($)),
    'absolute': _p.deprecated_cc($['absolute'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_number.serialize($),
    })]),
}))]]
export const Range: t_signatures.Range = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'start': _p.deprecated_cc($['start'], ($,) => Location($)),
    'end': _p.deprecated_cc($['end'], ($,) => Location($)),
}))]]
export const Errors: t_signatures.Errors = ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
    'range': _p.deprecated_cc($['range'], ($,) => Range($)),
    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'error':
                return _p.ss($, ($,) => ({
                    'option': 'error',
                    'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'invalid value type':
                                return _p.ss($, ($,) => ({
                                    'option': 'invalid value type',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'expected': _p.deprecated_cc($['expected'], ($,) => ['list', $.__l_map(($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'text':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'text',
                                                        'value': ['nothing', null],
                                                    }))
                                                case 'verbose group':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'verbose group',
                                                        'value': ['nothing', null],
                                                    }))
                                                case 'concise group':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'concise group',
                                                        'value': ['nothing', null],
                                                    }))
                                                case 'dictionary':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'dictionary',
                                                        'value': ['nothing', null],
                                                    }))
                                                case 'not set':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'not set',
                                                        'value': ['nothing', null],
                                                    }))
                                                case 'set':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'set',
                                                        'value': ['nothing', null],
                                                    }))
                                                case 'list':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'list',
                                                        'value': ['nothing', null],
                                                    }))
                                                case 'state':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'state',
                                                        'value': ['nothing', null],
                                                    }))
                                                default:
                                                    return _p.au($[0])
                                            }
                                        })])]),
                                    }))]],
                                }))
                            case 'duplicate property':
                                return _p.ss($, ($,) => ({
                                    'option': 'duplicate property',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'name': _p.deprecated_cc($['name'], ($,) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                    }))]],
                                }))
                            case 'missing property':
                                return _p.ss($, ($,) => ({
                                    'option': 'missing property',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'name': _p.deprecated_cc($['name'], ($,) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                    }))]],
                                }))
                            case 'superfluous property':
                                return _p.ss($, ($,) => ({
                                    'option': 'superfluous property',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'name': _p.deprecated_cc($['name'], ($,) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                    }))]],
                                }))
                            case 'state':
                                return _p.ss($, ($,) => ({
                                    'option': 'state',
                                    'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                        switch ($[0]) {
                                            case 'more than 2 items':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'more than 2 items',
                                                    'value': ['nothing', null],
                                                }))
                                            case 'missing state name':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'missing state name',
                                                    'value': ['nothing', null],
                                                }))
                                            case 'state is not a string':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'state is not a string',
                                                    'value': ['nothing', null],
                                                }))
                                            case 'missing value':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'missing value',
                                                    'value': ['nothing', null],
                                                }))
                                            case 'unknown state':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'unknown state',
                                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                                        'found': _p.deprecated_cc($['found'], ($,) => ['text', ({
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        })]),
                                                        'expected': _p.deprecated_cc($['expected'], ($,) => ['dictionary', $.__d_map(($,id,) => ['nothing', null])]),
                                                    }))]],
                                                }))
                                            case 'missing data marker':
                                                return _p.ss($, ($,) => ({
                                                    'option': 'missing data marker',
                                                    'value': ['nothing', null],
                                                }))
                                            default:
                                                return _p.au($[0])
                                        }
                                    })],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })],
                }))
            case 'warning':
                return _p.ss($, ($,) => ({
                    'option': 'warning',
                    'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'expected apostrophed string':
                                return _p.ss($, ($,) => ({
                                    'option': 'expected apostrophed string',
                                    'value': ['nothing', null],
                                }))
                            case 'expected quoted string':
                                return _p.ss($, ($,) => ({
                                    'option': 'expected quoted string',
                                    'value': ['nothing', null],
                                }))
                            case 'expected backticked string':
                                return _p.ss($, ($,) => ({
                                    'option': 'expected backticked string',
                                    'value': ['nothing', null],
                                }))
                            case 'expected undelimited string':
                                return _p.ss($, ($,) => ({
                                    'option': 'expected undelimited string',
                                    'value': ['nothing', null],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })],
                }))
            default:
                return _p.au($[0])
        }
    })]),
}))]])]
