import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

import * as d_definition from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_in_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
import * as d_out from "../../../../interface/to_be_generated/unmashall_result"

import * as t_ast_to_range from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

export const op_expect_exactly_one_element = <T>($: _pi.List<T>): _pi.Optional_Value<T> => _p.number.natural.from.list($).amount_of_items() !== 1
    ? _p.optional.literal.not_set()
    // there is an element, so this statement will always return a 'set'
    : $.__deprecated_get_possible_item_at(0)

type ID_Value_Pair<T> = {
    'id': string,
    'value': T,
}

const op_group = <T>(
    $: _pi.List<ID_Value_Pair<T>>,
): _pi.Dictionary<_pi.List<T>> => _p.dictionary.from.list($).group(($) => $.id).__d_map(($) => $.__l_map(($) => $.value))

export const Optional_Node = (
    $: _pi.Optional_Value<d_in.Value>,
    $p: {
        'definition': d_definition.Value,
    }
): d_out.Optional_Node => _p.optional.from.optional(
    $,
).map(
    ($) => Node($, $p),
)

export const Node_Type = (
    $: d_in.Value.type_.concrete,
    $p: {
        'definition': d_definition.Value,
        'range': d_in_location.Range,
        'temp value': d_in.Value,
    }
): d_out.Unmarshalled_Value_Type => {
    const data = $
    return _p.decide.state($p.definition, ($): d_out.Unmarshalled_Value_Type => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                return ['boolean', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($) => {
                        switch ($[0]) {
                            case 'text': return _p.ss($, ($) => ['valid', {
                                'instance': $,
                                // 'parsed': xx,
                                'range': $.range,
                                'correct string type': _p.decide.state($.type, ($) => {
                                    switch ($[0]) {
                                        case 'quoted': return false
                                        case 'apostrophed': return false
                                        case 'undelimited': return true
                                        case 'backticked': return false
                                        default: return _p.au($[0])
                                    }
                                })
                            }])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'component': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => ['component', {
                'definition': $,
                'value': Node(
                    $p['temp value'],
                    {
                        'definition': _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => $.module['l entry']['root value'])
                                case 'internal acyclic': return _p.ss($, ($) => $['l entry']['root value'])
                                case 'internal': return _p.ss($, ($) => $['l entry'].get_circular_dependent()['root value'])
                                default: return _p.au($[0])
                            }
                        }),
                    }
                )
            }])
            case 'dictionary': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                const prop_def = $.value
                return ['dictionary', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return _p.ss($, ($) => {
                                return ['valid', {
                                    'instance': $,
                                    'entries': op_group($.entries.__l_map(($) => {
                                        return {
                                            'id': $.id.value,
                                            'value': $
                                        }
                                    })).__d_map(($) => op_expect_exactly_one_element($).__decide(
                                        ($): d_out.Entry => ['unique', Optional_Node(
                                            _p.optional.from.optional(
                                                $.value,
                                            ).map(
                                                ($) => $.value,
                                            ),
                                            {
                                                'definition': prop_def,
                                            },
                                        )],
                                        (): d_out.Entry => ['multiple', $.__l_map(($): d_out.Entry_Data => ({
                                            'node': Optional_Node(
                                                _p.optional.from.optional(
                                                    $.value,
                                                ).map(
                                                    ($) => $.value,
                                                ),
                                                {
                                                    'definition': prop_def,
                                                },
                                            ),
                                            'id': $.id
                                        }))]
                                    ))
                                }]
                            })
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'group': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                const group_def = $
                // pa.sg(data.type, ($) => {
                // //     switch ($[0]) {
                // //         case 'verbose group': return pa.ss($, ($) => {
                // //             impure.list['select clashing keys']($.entries.__d_map(($) => {
                // //                 return {
                // //                     'key': $.key.value,
                // //                     'value': $
                // //                 }
                // //             })).__d_map(($, id) => {
                // //                 _pdev.log_debug_message(`clashing key: ${key}`)
                // //             })
                // //             const properties = impure.list['to dictionary, overwrite clashing keys']($.entries.__d_map(($) => {
                // //                 return {
                // //                     'key': $.key.value,
                // //                     'value': $
                // //                 }
                // //             }))
                // //             group_def.__d_map(($, id) => {
                // //                 properties.get_entry(key).__decide(
                // //                     ($) => {
                // //                         _pdev.log_debug_message(`property ${key} found in data`)
                // //                         // do_node(
                // //                         //     $.type,
                // //                         //     $.value
                // //                         // )
                // //                     },
                // //                     () => {
                // //                         _pdev.log_debug_message(`property ${key} not found in data`)
                // //                     }
                // //                 )

                // //             })

                // //         })
                // //         default: return _pdev.implement_me("xx")
                // //     }
                // // })
                return ['group', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($) => {
                        const value = $
                        return _p.decide.state($, ($) => {
                            switch ($[0]) {
                                // case 'group': return _p.ss($, ($): d_out.Group_Found_Value_Type => {
                                //     const entries = op_group(_p.decide.state($, ($): d_in.Key_Value_Pairs => {
                                //         switch ($[0]) {
                                //             case 'dictionary': return _p.ss($, ($) => $.entries)
                                //             case 'verbose group': return _p.ss($, ($) => $.entries)
                                //             default: return _p.au($[0])
                                //         }
                                //     }).__l_map(($) => {
                                //         return {
                                //             'key': $.key.value,
                                //             'value': $
                                //         }
                                //     }))
                                //     const range: d_in_token.Range = _p.decide.state($, ($) => {
                                //         switch ($[0]) {
                                //             case 'dictionary': return _p.ss($, ($) => $['{'].range)
                                //             case 'verbose group': return _p.ss($, ($) => $['('].range)
                                //             default: return _p.au($[0])
                                //         }
                                //     })
                                //     const op_dictionary_merge = <Main, Supporting>(
                                //         $: _pi.Dictionary<Main>,
                                //         $p: { 'supporting dictionary': _pi.Dictionary<Supporting> }
                                //     ): _pi.Dictionary<{
                                //         'context': Main
                                //         'supporting': _pi.Optional_Value<Supporting>
                                //     }> => $.__d_map(($, id) => ({
                                //         'context': $,
                                //         'supporting': $p['supporting dictionary'].__get_possible_entry_deprecated(
                                //             key,
                                //         ),
                                //     }))
                                //     return ['valid', ['verbose', {
                                //         'value': $,
                                //         'content': {
                                //             'superfluous entries': _p.dictionary.filter(
                                //                 op_dictionary_merge(
                                //                     entries,
                                //                     {
                                //                         'supporting dictionary': group_def.dictionary
                                //                     }
                                //                 ), ($) => {
                                //                     return $.supporting.__decide( //drop all the ones for which there is a definition
                                //                         ($) => _p.optional.literal.not_set(),
                                //                         () => _p.optional.literal.set($.context)
                                //                     )
                                //                 }
                                //             ).__d_map(
                                //                 ($) => $.__l_map(
                                //                     ($) => $.key.range
                                //                 )
                                //             ), //select the locations
                                //             'properties': op_dictionary_merge(
                                //                 group_def.dictionary,
                                //                 {
                                //                     'supporting dictionary': entries
                                //                 }
                                //             ).__d_map(($) => {
                                //                 const prop_def = $.context
                                //                 return $.supporting.__decide(
                                //                     ($): d_out.Property => op_expect_exactly_one_element($).__decide(
                                //                         ($): d_out.Property => ['unique', {
                                //                             'node': Optional_Node(
                                //                                 $.value.__o_map(
                                //                                     ($) => $.value,
                                //                                 ),
                                //                                 {
                                //                                     'definition': prop_def.node,
                                //                                 },
                                //                             ),
                                //                             'key': $.key
                                //                         }],
                                //                         (): d_out.Property => ['multiple', $.__l_map(($): d_out.Entry_Data => ({
                                //                             'node': Optional_Node(
                                //                                 $.value.__o_map(
                                //                                     ($) => $.value,
                                //                                 ),
                                //                                 {
                                //                                     'definition': prop_def.node,
                                //                                 },
                                //                             ),
                                //                             'key': $.key,
                                //                         }))]
                                //                     ),
                                //                     (): d_out.Property => ['missing', range]
                                //                 )
                                //             })
                                //         }
                                //     }]]
                                // })
                                default: return ['invalid', $p.range]
                            }
                        })
                    })
                }]
            })
            case 'list': return _p.ss($, ($) => {
                const prop_def = $.value
                return ['list', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($) => {
                        switch ($[0]) {
                            case 'list': return _p.ss($, ($) => {
                                return ['valid', {
                                    'instance': $,
                                    'elements': _pdev.implement_me("list elements deserialization") //TODO
                                }]
                            })
                            default: return ['invalid', $p.range]

                        }
                    })
                }]
            })
            case 'nothing': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                return ['nothing', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($) => {
                        switch ($[0]) {
                            case 'nothing': return _p.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'number': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                return ['number', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($) => {
                        switch ($[0]) {
                            case 'text': return _p.ss($, ($) => ['valid', {
                                'instance': $,
                                'range': $.range,
                                'correct string type': _p.decide.state($.type, ($) => {
                                    switch ($[0]) {
                                        case 'quoted': return true
                                        case 'apostrophed': return false
                                        case 'undelimited': return true
                                        case 'backticked': return false
                                        default: return _p.au($[0])
                                    }
                                })
                            }])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'optional': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                const def = $
                return ['optional', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($) => {
                        switch ($[0]) {
                            case 'nothing': return _p.ss($, ($) => ['valid', ['not set', {
                                'instance': $,
                            }]])
                            case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                switch ($[0]) {
                                    case 'set': return _p.ss($, ($) => ['valid', ['set', {
                                        'instance': $,
                                        'child node': Node(
                                            $.value,
                                            {
                                                'definition': def,
                                            }
                                        )
                                    }]])
                                    default: return _p.au($[0])
                                }
                            }))
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'reference': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                return ['reference', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($) => {
                        switch ($[0]) {
                            case 'text': return _p.ss($, ($) => ['valid', {
                                'instance': $,
                            }])
                            // case 'nothing': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'state': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                const def = $
                return ['state', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($): d_out.State__found_value_type => {
                        switch ($[0]) {
                            case 'state': return _p.ss($, ($): d_out.State__found_value_type => {
                                const tv = $
                                return ['valid', {
                                    'value type': ['state', {
                                        'value substatus': _p.decide.state($.status, ($): d_out.Option_found_value__typevalid_value__typeSG_state_value_substatus => {
                                            switch ($[0]) {
                                                case 'missing data': return _p.ss($, ($) => ['missing data', $['#']])
                                                case 'set': return _p.ss($, ($): d_out.Option_found_value__typevalid_value__typeSG_state_value_substatus => {
                                                    const value = $.value
                                                    return ['set', {
                                                        'instance': $,
                                                        'found option definition': _p.optional.from.optional(
                                                            def.options.__get_possible_entry_deprecated($.option.value),
                                                        ).map(
                                                            ($) => ({
                                                                'definition': $,
                                                                'node': Node(
                                                                    value,
                                                                    {
                                                                        'definition': $.value,
                                                                    }
                                                                )
                                                            })
                                                        ),
                                                    }]
                                                })
                                                default: return _p.au($[0])
                                            }
                                        })
                                    }]
                                }]
                            })
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'text': return _p.ss($, ($) => {
                return ['text', {
                    'definition': $,
                    'found value type': _p.decide.state(data, ($) => {
                        switch ($[0]) {
                            case 'text': return _p.ss($, ($) => ['valid', {
                                'instance': $,
                            }])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            default: return _p.au($[0])
        }
    })
}

export const Node = (
    $: d_in.Value,
    $p: {
        'definition': d_definition.Value,
    }
): d_out.Value => {
    const datax = $
    return {
        'definition': $p.definition,
        'instance': datax,
        'unmarshalled': _p.decide.state(datax.type, ($) => {
            switch ($[0]) {
                case 'concrete': return _p.ss($, ($) => {
                    const data = $
                    return Node_Type(data, {
                        'definition': $p.definition,
                        'range': t_ast_to_range.Value(datax),
                        'temp value': datax,
                    })
                })
                case 'include': return _p.ss($, ($) => _pdev.implement_me("include node deserialization")) //TODO
                case 'missing data': return _p.ss($, ($) => _pdev.implement_me("missing data node deserialization")) //TODO
                default: return _p.au($[0])
            }
        })
    }
}
