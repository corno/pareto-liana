import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/to_be_generated/temp_unmashall_result"
import * as d_in_token from "astn-core/dist/interface/generated/pareto/schemas/token/data"
import * as d_out from "../../../../../interface/generated/pareto/schemas/unmarshall_errors/data"

export const Optional_Node = (
    $: d_in.Optional_Node,
    $p: null
): d_out.Errors => {
    return $.__decide(
        ($) => Node($, $p),
        () => _p.list.literal([]), //FIXME! optional node not set is often an error
    )
}

const convert_range = (r: d_in_token.Range): d_out.Range => {
    return r
}

export const Group_Content = (
    $: d_in.Group_Content,
    $p: {
        'group range': d_in_token.Range
    }
): d_out.Errors => {
    return _p.list.nested_literal([
        _p.list.flatten(
            _p.list.from_dictionary(
                $.properties,
                ($, key) => _p.sg($, ($): d_out.Errors => {
                    switch ($[0]) {
                        case 'multiple': return _p.ss($, ($) => _p.list.flatten(
                            $,
                            ($) => _p.list.nested_literal([
                                _p.list.literal<d_out.Errors.L>([
                                    {
                                        'range': convert_range($.key.range),
                                        'type': ['error', ['duplicate property', {
                                            name: key
                                        }]]
                                    }
                                ]),
                                Optional_Node($.node, null)
                            ])
                        ))
                        case 'missing': return _p.ss($, ($) => _p.list.literal([
                            {
                                'range': convert_range($p['group range']),
                                'type': ['error', ['missing property', {
                                    name: key
                                }]]
                            }
                        ]))
                        case 'unique': return _p.ss($, ($) => Optional_Node($.node, null))
                        default: return _p.au($[0])
                    }
                })
            ),
            ($) => $
        ),
        _p.list.flatten(
            _p.list.from_dictionary(
                $['superfluous entries'],
                ($, key): d_out.Errors => _p.list.flatten(
                    $,
                    ($) => _p.list.literal([
                        {
                            'range': convert_range($),
                            'type': ['error', ['superfluous property', {
                                name: key
                            }]]
                        }
                    ])
                )),
            ($) => $
        )
    ])
}

export const Node = (
    $: d_in.Node,
    $p: null
): d_out.Errors => {
    return _p.sg($.type, ($): d_out.Errors => {
        switch ($[0]) {
            case 'group': return _p.ss($, ($) => _p.sg($['found value type'], ($): d_out.Errors => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => _p.sg($, ($) => {
                        switch ($[0]) {
                            case 'concise': return _p.ss($, ($) => Group_Content($.content, {
                                'group range': $.value['<'].range
                            }))
                            case 'verbose': return _p.ss($, ($) => Group_Content($.content, {
                                'group range': $.value['('].range
                            }))

                            default: return _p.au($[0])
                        }
                    }))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': convert_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['verbose group', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'dictionary': return _p.ss($, ($) => _p.sg($['found value type'], ($): d_out.Errors => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => {
                        return _p.list.flatten(
                            _p.list.from_dictionary(
                                $.entries,
                                ($, key) => _p.sg($, ($): d_out.Errors => {
                                    switch ($[0]) {
                                        case 'unique': return _p.ss($, ($) => Optional_Node($, $p))
                                        case 'multiple': return _p.ss($, ($) => _p.list.flatten(
                                            $,
                                            ($) => _p.list.nested_literal<d_out.Errors.L>([
                                                _p.list.literal([
                                                    {
                                                        'range': convert_range($.key.range),
                                                        'type': ['error', ['duplicate property', {
                                                            name: key
                                                        }]]
                                                    }
                                                ]),
                                                Optional_Node($.node, $p)
                                            ])
                                        ))
                                        default: return _p.au($[0])
                                    }
                                })
                            ),
                            ($) => $
                        )
                    })
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': convert_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['dictionary', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'number': return _p.ss($, ($) => _p.sg($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => $['correct string type']
                        ? _p.list.literal([])
                        : _p.list.literal<d_out.Errors.L>([{
                            'range': convert_range($.range),
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': convert_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'boolean': return _p.ss($, ($) => _p.sg($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => $['correct string type']
                        ? _p.list.literal([])
                        : _p.list.literal<d_out.Errors.L>([{
                            'range': convert_range($.range),
                            'type': ['warning', ['expected undelimited string', null]]
                        }]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': convert_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'list': return _p.ss($, ($) => _p.sg($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.list.flatten($.elements, ($) => Node($, $p)))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': convert_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['list', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'nothing': return _p.ss($, ($) => _p.sg($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.list.literal([]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': convert_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'reference': return _p.ss($, ($) => _p.sg($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.list.literal([]))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': convert_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['text', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'component': return _p.ss($, ($) => {
                return Node($.node, $p)
            })
            case 'optional': return _p.ss($, ($) => _p.sg($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($): d_out.Errors => _p.sg($, ($) => {
                        switch ($[0]) {
                            case 'set': return _p.ss($, ($) => Node($['child node'], $p))
                            case 'not set': return _p.ss($, ($) => _p.list.literal([]))
                            default: return _p.au($[0])
                        }
                    }))
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': convert_range($),
                            'type': ['error', ['invalid value type', {
                                'expected': _p.list.literal([['set', null], ['not set', null]]),
                            }]]
                        }
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'state group': return _p.ss($, ($) => {
                const sg_def = $.definition
                return _p.sg($['found value type'], ($): d_out.Errors => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => {
                            return _p.sg($['value type'], ($) => {
                                switch ($[0]) {
                                    case 'state': return _p.ss($, ($) => _p.sg($['value substatus'], ($) => {
                                        switch ($[0]) {
                                            case 'missing data': return _p.ss($, ($) => _p.list.literal([
                                                {
                                                    'range': convert_range($.range),
                                                    'type': ['error', ['state', ['state is not a string', null]]] //FIXME wrong error
                                                }
                                            ]))
                                            case 'set': return _p.ss($, ($) => {
                                                {
                                                    const xx = $.value
                                                    return $['found state definition'].__decide(
                                                        ($) => Node($.node, $p),
                                                        (): d_out.Errors => _p.list.literal([
                                                            {
                                                                'range': convert_range(xx.state.range),
                                                                'type': ['error', ['state', ['unknown state', {
                                                                    'found': xx.state.value,
                                                                    'expected': sg_def.__d_map(($) => null)
                                                                }]]]
                                                            }
                                                        ])
                                                    )
                                                }
                                            })
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        })
                        case 'invalid': return _p.ss($, ($) => _p.list.literal([
                            {
                                'range': convert_range($),
                                'type': ['error', ['invalid value type', {
                                    'expected': _p.list.literal([['state', null]]),
                                }]]
                            }
                        ]))
                        // case 'more than 2 elements': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': convert_range($),
                        //     'type': ['error', ['state', ['more than 2 elements', null]]]
                        // }]))
                        // case 'missing state name': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': convert_range($),
                        //     'type': ['error', ['state', ['missing state name', null]]]
                        // }]))
                        // case 'state is not a string': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': convert_range($),
                        //     'type': ['error', ['state', ['state is not a string', null]]]
                        // }]))
                        // case 'missing value': return _p.ss($, ($) => _p.list.literal([{
                        //     'range': convert_range($),
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
            case 'text': return _p.ss($, ($) => _p.sg($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.list.literal([])
                    case 'invalid': return _p.ss($, ($) => _p.list.literal([
                        {
                            'range': convert_range($),
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