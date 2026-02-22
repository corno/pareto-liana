
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/unmarshall_errors/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/unmarshall_errors/data"

export const Errors: t_signatures.Errors = ($) => _p.list.from.list(
    $,
).map(
    ($) => ({
        'range': _p_change_context(
            $['range'],
            ($) => Range(
                $,
            ),
        ),
        'type': _p_change_context(
            $['type'],
            ($) => _p.decide.state(
                $,
                ($): t_out.Errors.L.type_ => {
                    switch ($[0]) {
                        case 'error':
                            return _p.ss(
                                $,
                                ($) => ['error', _p.decide.state(
                                    $,
                                    ($): t_out.Errors.L.type_.error => {
                                        switch ($[0]) {
                                            case 'invalid value type':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['invalid value type', {
                                                        'expected': _p_change_context(
                                                            $['expected'],
                                                            ($) => _p.list.from.list(
                                                                $,
                                                            ).map(
                                                                ($) => _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Errors.L.type_.error.invalid_value_type.expected.L => {
                                                                        switch ($[0]) {
                                                                            case 'text':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['text', null],
                                                                                )
                                                                            case 'verbose group':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['verbose group', null],
                                                                                )
                                                                            case 'concise group':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['concise group', null],
                                                                                )
                                                                            case 'dictionary':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['dictionary', null],
                                                                                )
                                                                            case 'not set':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['not set', null],
                                                                                )
                                                                            case 'set':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['set', null],
                                                                                )
                                                                            case 'list':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['list', null],
                                                                                )
                                                                            case 'state':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['state', null],
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        ),
                                                    }],
                                                )
                                            case 'duplicate property':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['duplicate property', {
                                                        'name': _p_change_context(
                                                            $['name'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'missing property':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['missing property', {
                                                        'name': _p_change_context(
                                                            $['name'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'superfluous property':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['superfluous property', {
                                                        'name': _p_change_context(
                                                            $['name'],
                                                            ($) => $,
                                                        ),
                                                    }],
                                                )
                                            case 'state':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['state', _p.decide.state(
                                                        $,
                                                        ($): t_out.Errors.L.type_.error.state => {
                                                            switch ($[0]) {
                                                                case 'more than 2 items':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['more than 2 items', null],
                                                                    )
                                                                case 'missing state name':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['missing state name', null],
                                                                    )
                                                                case 'state is not a string':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['state is not a string', null],
                                                                    )
                                                                case 'missing value':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['missing value', null],
                                                                    )
                                                                case 'unknown state':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['unknown state', {
                                                                            'found': _p_change_context(
                                                                                $['found'],
                                                                                ($) => $,
                                                                            ),
                                                                            'expected': _p_change_context(
                                                                                $['expected'],
                                                                                ($) => _p.dictionary.from.dictionary(
                                                                                    $,
                                                                                ).map(
                                                                                    ($, id) => null,
                                                                                ),
                                                                            ),
                                                                        }],
                                                                    )
                                                                case 'missing data marker':
                                                                    return _p.ss(
                                                                        $,
                                                                        ($) => ['missing data marker', null],
                                                                    )
                                                                default:
                                                                    return _p.au(
                                                                        $[0],
                                                                    )
                                                            }
                                                        },
                                                    )],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                )],
                            )
                        case 'warning':
                            return _p.ss(
                                $,
                                ($) => ['warning', _p.decide.state(
                                    $,
                                    ($): t_out.Errors.L.type_.warning => {
                                        switch ($[0]) {
                                            case 'expected apostrophed string':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['expected apostrophed string', null],
                                                )
                                            case 'expected quoted string':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['expected quoted string', null],
                                                )
                                            case 'expected backticked string':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['expected backticked string', null],
                                                )
                                            case 'expected undelimited string':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['expected undelimited string', null],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                )],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        ),
    }),
)

export const Location: t_signatures.Location = ($) => ({
    'relative': _p_change_context(
        $['relative'],
        ($) => Relative_Location(
            $,
        ),
    ),
    'absolute': _p_change_context(
        $['absolute'],
        ($) => $,
    ),
})

export const Relative_Location: t_signatures.Relative_Location = ($) => ({
    'line': _p_change_context(
        $['line'],
        ($) => $,
    ),
    'column': _p_change_context(
        $['column'],
        ($) => $,
    ),
})

export const Range: t_signatures.Range = ($) => ({
    'start': _p_change_context(
        $['start'],
        ($) => Location(
            $,
        ),
    ),
    'end': _p_change_context(
        $['end'],
        ($) => Location(
            $,
        ),
    ),
})
