import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "../../../../interface/to_be_generated/unmashall_result"
import * as d_out from "../../../../interface/generated/liana/schemas/unmarshall_errors/data"
import * as d_in_astn_parse_tree from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

//dependencies
import * as t_astn_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Optional_Value = (
    $: d_in.Optional_Value,
): d_out.Errors => {
    return $.__decide(
        ($) => Value($),

        () => _p.list.literal([]), //FIXME! optional node not set is often an error
    )
}

export const Value = (
    $: d_in.Value,
): d_out.Errors => {
    return _p.decide.state($.unmarshalled, ($): d_out.Errors => {
        switch ($[0]) {
            case 'group': return _p.ss($, ($) => _p.decide.state($['found value type'], ($): d_out.Errors => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => {
                        const group_start_token = _p.decide.state($.instance, ($): d_in_astn_parse_tree.Structural_Token => {
                            switch ($[0]) {
                                case 'dictionary': return _p.ss($, ($) => $['{'])
                                case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'verbose': return _p.ss($, ($) => $['('])
                                        case 'concise': return _p.ss($, ($) => $['<'])
                                        default: return _p.au($[0])
                                    }
                                }))
                                case 'list': return _p.ss($, ($) => $['['])
                                default: return _p.au($[0])
                            }
                        })
                        return _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'concise': return _p.ss($, ($) => _p.list.nested_literal_old([
                                    _p.list.from.list(
                                        $.properties.__to_list<d_out.Errors>(
                                            ($, id) => $.__decide(
                                                ($) => Value($),
                                                (): d_out.Errors => _p.list.literal([
                                                    {
                                                        'range': group_start_token.range,
                                                        'type': ['error', ['missing property', {
                                                            name: id
                                                        }]]
                                                    }
                                                ])
                                            )
                                        )
                                    ).flatten(
                                        ($) => $
                                    ),
                                    $['superfluous properties'].__l_map(($): d_out.Errors.L => ({
                                        'range': t_astn_parse_tree_to_location.Value($.value),
                                        'type': ['error', ['superfluous property', {
                                            'name': _p.optional.literal.not_set()
                                        }]]
                                    }))
                                ]))
                                case 'verbose': return _p.ss($, ($) => _p.list.nested_literal_old([
                                    _p.list.nested_literal_old([
                                        _p.list.from.dictionary(
                                            $.properties,
                                        ).flatten(
                                            ($, id): d_out.Errors => {
                                                return _p.decide.list($).has_single_item(
                                                    ($) => $.value.__decide(
                                                        ($) => Value($),
                                                        () => _p.list.literal([{
                                                            'range': $['id value pair'].id.range,
                                                            'type': ['error', ['missing property', {
                                                                name: id
                                                            }]]
                                                        }])
                                                    ),
                                                    () => _p.list.from.list(
                                                        $,
                                                    ).flatten<d_out.Errors.L>(
                                                        ($) => _p.list.nested_literal_old<d_out.Errors.L>([
                                                            _p.list.literal<d_out.Errors.L>([
                                                                {
                                                                    'range': $['id value pair'].id.range,
                                                                    'type': ['error', ['duplicate property', {
                                                                        name: id
                                                                    }]]
                                                                }
                                                            ]),
                                                            $.value.__decide(
                                                                ($) => Value($),
                                                                () => _p.list.literal([{
                                                                    'range': $['id value pair'].id.range,
                                                                    'type': ['error', ['missing property', {
                                                                        name: id
                                                                    }]]
                                                                }])
                                                            ),
                                                        ])
                                                    ),
                                                    () => _p.list.literal<d_out.Errors.L>([
                                                        {
                                                            'range': group_start_token.range,
                                                            'type': ['error', ['duplicate property', {
                                                                name: id
                                                            }]]
                                                        }
                                                    ]),
                                                )
                                            }
                                        ),
                                    ]),
                                    _p.list.from.dictionary(
                                        $['superfluous properties'],
                                    ).flatten<d_out.Errors.L>(
                                        ($) => $.__l_map(($): d_out.Errors.L => ({
                                            'range': $.id.range,
                                            'type': ['error', ['superfluous property', {
                                                'name': _p.optional.literal.set($.id.value)
                                            }]]
                                        }))
                                    )
                                ]))
                                default: return _p.au($[0])
                            }
                        })
                    })
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': t_astn_parse_tree_to_location.Value($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['verbose group', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'dictionary': return _p.ss($, ($) => _p.decide.state($['found value type'], ($): d_out.Errors => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => {
                        return _p.list.from.list(
                            $.entries,
                        ).flatten(
                            ($) => _p.list.nested_literal_old<d_out.Errors.L>([
                                _p.list.literal([
                                    {
                                        'range': $['id value pair'].id.range,
                                        'type': ['error', ['duplicate property', {
                                            name: $['id value pair'].id.value
                                        }]]
                                    }
                                ]),
                                Optional_Value($.value)
                            ])
                        )
                    })
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': t_astn_parse_tree_to_location.Value($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['dictionary', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'number': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => $['correct string type']
                        ? _p.list.literal([])
                        : _p.list.literal<d_out.Errors.L>([{
                            'range': $.instance.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': t_astn_parse_tree_to_location.Value($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'boolean': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => $['correct string type']
                        ? _p.list.literal([])
                        : _p.list.literal<d_out.Errors.L>([{
                            'range': $.instance.range,
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': t_astn_parse_tree_to_location.Value($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'list': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.list.from.list(
                        $.items
                    ).flatten(
                        ($) => Value($)
                    ))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': t_astn_parse_tree_to_location.Value($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['list', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'nothing': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.list.literal([]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': t_astn_parse_tree_to_location.Value($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'reference': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.list.literal([]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': t_astn_parse_tree_to_location.Value($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'component': return _p.ss($, ($) => {
                return Value($.value)
            })
            case 'optional': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'set': return _p.ss($, ($) => Value($['child value']))
                            case 'not set': return _p.ss($, ($) => _p.list.literal([]))
                            default: return _p.au($[0])
                        }
                    }))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': t_astn_parse_tree_to_location.Value($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['set', null], ['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'state': return _p.ss($, ($) => {
                const sg_def = $.definition
                return _p.decide.state($['found value type'], ($): d_out.Errors => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($): d_out.Errors => {
                            const start_token = _p.decide.state($.instance, ($): d_in_astn_parse_tree.Structural_Token => {
                                switch ($[0]) {
                                    case 'list': return _p.ss($, ($) => $['['])
                                    case 'state': return _p.ss($, ($) => $['|'])
                                    default: return _p.au($[0])
                                }
                            })
                            return _p.decide.state($['option processing'], ($): d_out.Errors => {
                                switch ($[0]) {
                                    case 'error': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'list format': return _p.ss($, ($) => _p.decide.state($, ($): d_out.Errors => {
                                                switch ($[0]) {
                                                    case 'missing option item': return _p.ss($, ($): d_out.Errors => _p.list.literal([
                                                        {
                                                            'range': start_token.range,
                                                            'type': ['error', ['state', ['missing option name', null]]] //FIXME wrong error
                                                        }
                                                    ]))
                                                    case 'option item is not a text': return _p.ss($, ($) => _p.list.literal([
                                                        {
                                                            'range': start_token.range,
                                                            'type': ['error', ['state', ['option name is not a text', null]]] //FIXME wrong error
                                                        }
                                                    ]))
                                                    case 'missing value item': return _p.ss($, ($) => _p.list.literal([
                                                        {
                                                            'range': start_token.range,
                                                            'type': ['error', ['state', ['missing value', null]]] //FIXME wrong error
                                                        }
                                                    ]))
                                                    case 'too many items': return _p.ss($, ($) => _p.list.literal([
                                                        {
                                                            'range': start_token.range,
                                                            'type': ['error', ['state', ['more than 2 items', null]]] //FIXME wrong error
                                                        }
                                                    ]))
                                                    default: return _p.au($[0])
                                                }
                                            }))
                                            case 'unknown option': return _p.ss($, ($) => _p.list.literal([
                                                {
                                                    'range': start_token.range,
                                                    'type': ['error', ['state', ['unknown option', {
                                                        'found': $.token.value,
                                                        'expected': sg_def.options.__d_map(($) => null)
                                                    }]]]
                                                }
                                            ]))

                                            default: return _p.au($[0])
                                        }
                                    }))
                                    case 'missing data': return _p.ss($, ($) => _p.list.literal([
                                        {
                                            'range': $.range,
                                            'type': ['error', ['state', ['option name is not a text', null]]] //FIXME wrong error
                                        }
                                    ]))
                                    case 'success': return _p.ss($, ($) => Value($.value))
                                    default: return _p.au($[0])
                                }
                            })
                        })
                        case 'invalid': return _p.ss($, ($) => _p.list.literal([
                            {
                                'range': t_astn_parse_tree_to_location.Value($),
                                'type': ['error', ['invalid value type', {
                                    'expected': _p.list.literal([['state', null]]),
                                }]]
                            }
                        ]))
                        // case 'more than 2 elements': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['more than 2 elements', null]]]
                        // }]))
                        // case 'missing state name': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing state name', null]]]
                        // }]))
                        // case 'state is not a string': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['state is not a string', null]]]
                        // }]))
                        // case 'missing value': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $,
                        //     'type': ['error', ['state', ['missing value', null]]]
                        // }]))
                        // case 'unknown state': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': $.range,
                        //     'type': ['error', ['state', ['unknown state', {
                        //         'found': $.found,
                        //         'expected': $.expected
                        //     }]]]
                        // }]))
                        default: return _p.au($[0])
                    }
                })
            })
            case 'text': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.list.literal([])
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': t_astn_parse_tree_to_location.Value($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            default: return _p.au($[0])
        }
    })
}