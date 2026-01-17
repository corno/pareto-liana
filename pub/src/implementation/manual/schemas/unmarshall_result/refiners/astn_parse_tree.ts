import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

import * as d_definition from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_in from "astn-core/dist/interface/generated/pareto/schemas/parse_tree/data"
import * as d_in_token from "astn-core/dist/interface/generated/pareto/schemas/token/data"
import * as d_out from "../../../../../interface/to_be_generated/temp_unmashall_result"

import * as t_ast_to_range from "astn/dist/implementation/manual/schemas/parse_tree/transformers/token"


import { $$ as op_expect_exactly_one_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"

type Key_Value_Pair<T> = {
    'key': string,
    'value': T,
}

const op_group = <T>(
    $: _pi.List<Key_Value_Pair<T>>,
): _pi.Dictionary<_pi.List<T>> => _p.dictionary.group_list($, ($) => $.key).__d_map(($) => $.__l_map(($) => $.value))

export const Optional_Node = (
    $: _pi.Optional_Value<d_in.Value>,
    $p: {
        'definition': d_definition.Type_Node,
    }
): d_out.Optional_Node => $.__o_map(
    ($) => Node($, $p),
)

export const Node_Type = (
    $: d_in.Value._type.concrete,
    $p: {
        'definition': d_definition.Type_Node,
        'range': d_in_token.Range,
        'temp value': d_in.Value,
    }
): d_out.Node_Type => {
    const data = $
    return _p.sg($p.definition, ($): d_out.Node_Type => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($): d_out.Node_Type => {
                return ['boolean', {
                    'definition': $,
                    'found value type': _p.sg(data, ($) => {
                        switch ($[0]) {
                            case 'text': return _p.ss($, ($) => ['valid', {
                                'value': $,
                                'range': $.range,
                                'correct string type': _p.sg($.type, ($) => {
                                    switch ($[0]) {
                                        case 'quoted': return false
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
            case 'component': return _p.ss($, ($): d_out.Node_Type => ['component', {
                'definition': $,
                'node': Node(
                    $p['temp value'],
                    {
                        'definition': _p.sg($, ($) => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => $.type.entry.node)
                                case 'internal': return _p.ss($, ($) => $.entry.node)
                                case 'internal cyclic': return _p.ss($, ($) => $.entry['get circular dependent']().node)
                                default: return _p.au($[0])
                            }
                        }),
                    }
                )
            }])
            case 'dictionary': return _p.ss($, ($): d_out.Node_Type => {
                const prop_def = $.node
                return ['dictionary', {
                    'definition': $,
                    'found value type': _p.sg(data, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return _p.ss($, ($) => {
                                return ['valid', {
                                    'value': $,
                                    'entries': op_group($.entries.__l_map(($) => {
                                        return {
                                            'key': $.key.value,
                                            'value': $
                                        }
                                    })).__d_map(($) => op_expect_exactly_one_element($).__decide(
                                        ($): d_out.Entry => ['unique', Optional_Node(
                                            $.value.__o_map(
                                                ($) => $.value,
                                            ),
                                            {
                                                'definition': prop_def,
                                            },
                                        )],
                                        (): d_out.Entry => ['multiple', $.__l_map(($): d_out.Entry_Data => ({
                                            'node': Optional_Node(
                                                $.value.__o_map(
                                                    ($) => $.value,
                                                ),
                                                {
                                                    'definition': prop_def,
                                                },
                                            ),
                                            'key': $.key
                                        }))]
                                    ))
                                }]
                            })
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'group': return _p.ss($, ($): d_out.Node_Type => {
                const group_def = $
                // pa.sg(data.type, ($) => {
                // //     switch ($[0]) {
                // //         case 'verbose group': return pa.ss($, ($) => {
                // //             impure.list['select clashing keys']($.entries.__d_map(($) => {
                // //                 return {
                // //                     'key': $.key.value,
                // //                     'value': $
                // //                 }
                // //             })).__d_map(($, key) => {
                // //                 _pdev.log_debug_message(`clashing key: ${key}`)
                // //             })
                // //             const properties = impure.list['to dictionary, overwrite clashing keys']($.entries.__d_map(($) => {
                // //                 return {
                // //                     'key': $.key.value,
                // //                     'value': $
                // //                 }
                // //             }))
                // //             group_def.__d_map(($, key) => {
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
                    'found value type': _p.sg(data, ($) => {
                        const value = $
                        return _p.sg($, ($) => {
                            switch ($[0]) {
                                // case 'group': return _p.ss($, ($): d_out.Group_Found_Value_Type => {
                                //     const entries = op_group(_p.sg($, ($): d_in.Key_Value_Pairs => {
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
                                //     const range: d_in_token.Range = _p.sg($, ($) => {
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
                                //     }> => $.__d_map(($, key) => ({
                                //         'context': $,
                                //         'supporting': $p['supporting dictionary'].__get_possible_entry(
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
                                //                         ($) => _p.optional.not_set(),
                                //                         () => _p.optional.set($.context)
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
                const prop_def = $.node
                return ['list', {
                    'definition': $,
                    'found value type': _p.sg(data, ($) => {
                        switch ($[0]) {
                            case 'list': return _p.ss($, ($) => {
                                return ['valid', {
                                    'value': $,
                                    'elements': _pdev.implement_me("list elements deserialization") //TODO
                                }]
                            })
                            default: return ['invalid', $p.range]

                        }
                    })
                }]
            })
            case 'nothing': return _p.ss($, ($): d_out.Node_Type => {
                return ['nothing', {
                    'definition': $,
                    'found value type': _p.sg(data, ($) => {
                        switch ($[0]) {
                            case 'nothing': return _p.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'number': return _p.ss($, ($): d_out.Node_Type => {
                return ['number', {
                    'definition': $,
                    'found value type': _p.sg(data, ($) => {
                        switch ($[0]) {
                            case 'text': return _p.ss($, ($) => ['valid', {
                                'value': $,
                                'range': $.range,
                                'correct string type': _p.sg($.type, ($) => {
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
            case 'optional': return _p.ss($, ($): d_out.Node_Type => {
                const def = $
                return ['optional', {
                    'definition': $,
                    'found value type': _p.sg(data, ($) => {
                        switch ($[0]) {
                            case 'nothing': return _p.ss($, ($) => ['valid', ['not set', {
                                'value': $,
                            }]])
                            case 'optional': return _p.ss($, ($) => _p.sg($, ($) => {
                                switch ($[0]) {
                                    case 'set': return _p.ss($, ($) => ['valid', ['set', {
                                        'value': $,
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
            case 'reference': return _p.ss($, ($): d_out.Node_Type => {
                return ['reference', {
                    'definition': $,
                    'found value type': _p.sg(data, ($) => {
                        switch ($[0]) {
                            case 'text': return _p.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            // case 'nothing': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'state group': return _p.ss($, ($): d_out.Node_Type => {
                const def = $
                return ['state group', {
                    'definition': $,
                    'found value type': _p.sg(data, ($): d_out.State_found_value_type => {
                        switch ($[0]) {
                            case 'state group': return _p.ss($, ($): d_out.State_found_value_type => {
                                const tv = $
                                return ['valid', {
                                    'value type': ['state', {
                                        'value substatus': _p.sg($.status, ($): d_out.State_found_value__typevalid_value__typeSG_state_value_substatus => {
                                            switch ($[0]) {
                                                case 'missing data': return _p.ss($, ($) => ['missing data', $['#']])
                                                case 'set': return _p.ss($, ($): d_out.State_found_value__typevalid_value__typeSG_state_value_substatus => {
                                                    const state = $.state
                                                    const value = $.value
                                                    return ['set', {
                                                        'value': $,
                                                        'found state definition': def.__get_possible_entry($.state.value).__o_map(
                                                            ($) => ({
                                                                'definition': $,
                                                                'node': Node(
                                                                    value,
                                                                    {
                                                                        'definition': $.node,
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
                            // case 'ordered collection': return _p.ss($, ($) => {
                            //     const elements = _p.sg($, ($): d_in.Elements => {
                            //         switch ($[0]) {
                            //             case 'list': return _p.ss($, ($) => $.elements)
                            //             case 'concise group': return _p.ss($, ($) => $.elements)
                            //             default: return _p.au($[0])
                            //         }
                            //     })
                            //     const range = _p.sg($, ($): _in_token.Range => {
                            //         switch ($[0]) {
                            //             case 'list': return _p.ss($, ($) => $['['].range)
                            //             case 'concise group': return _p.ss($, ($) => $['<'].range)
                            //             default: return _p.au($[0])
                            //         }
                            //     })
                            //     if (elements.__get_length() > 2) {
                            //         return ['more than 2 elements', range]
                            //     }
                            //     const first = elements.__get_possible_element_at(0)
                            //     return first.__decide<d_out.State_Status>(
                            //         ($) => {
                            //             if ($.value.type[0] !== 'string') {
                            //                 return ['state is not a string', t_ast_to_range.Value(data)]
                            //             }
                            //             const state_name = $.value.type[1].value
                            //             const state_name_range = $.value.type[1].range
                            //             return elements.__get_possible_element_at(1).__decide<d_out.State_Status>(
                            //                 ($) => {
                            //                     const value = $.value
                            //                     return def.get_entry(state_name).__decide<d_out.State_Status>(
                            //                         ($) => ['valid', {
                            //                             'node': Node(
                            //                                 value,
                            //                                 {
                            //                                     'definition': $,
                            //                                 },
                            //                             )
                            //                         }],
                            //                         () => ['invalid', ['unknown state', {
                            //                             'range': state_name_range,
                            //                             'found': state_name,
                            //                             'expected': def.__d_map(($) => null)
                            //                         }]]
                            //                     )
                            //                 },
                            //                 () => ['invalid', ['missing value', t_ast_to_range.Value(data)]]
                            //             )
                            //         },
                            //         () => ['invalid', ['missing state name', range]]
                            //     )

                            // })
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            case 'text': return _p.ss($, ($) => {
                return ['text', {
                    'definition': $,
                    'found value type': _p.sg(data, ($) => {
                        switch ($[0]) {
                            case 'text': return _p.ss($, ($) => ['valid', {
                                'value': $,
                            }])
                            // case 'not set': return pa.ss($, () => ['invalid', data.location])
                            default: return ['invalid', $p.range]
                        }
                    })
                }]
            })
            // case 'type parameter': return _p.ss($, ($) => _pdev.implement_me("xx"))
            default: return _p.au($[0])
        }
    })
}

export const Node = (
    $: d_in.Value,
    $p: {
        'definition': d_definition.Type_Node,
    }
): d_out.Node => {
    const datax = $
    return {
        'definition': $p.definition,
        'value': datax,
        'type': _p.sg(datax.type, ($) => {
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
