import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_in_definition from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "../../../../interface/to_be_generated/unmashall_result"

import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'


export const Value = (
    $: d_in.Value,
    $p: {
        'definition': d_in_definition.Value,
        'definition path': string
    }
): d_out.Value => {
    const value = $
    const concrete_value = _p.decide.state($.type, ($): d_in.Value.type_.concrete => {
        switch ($[0]) {
            case 'concrete': return _p.ss($, ($) => $)
            case 'include': return _p.ss($, ($) => _pdev.implement_me("include node deserialization")) //TODO
            case 'missing data': return _p.ss($, ($) => _pdev.implement_me("missing data node deserialization")) //TODO
            default: return _p.au($[0])
        }
    })
    return {
        'definition': $p.definition,
        'definition path': $p['definition path'],
        'instance': $,
        'unmarshalled': _p.decide.state($p.definition, ($): d_out.Unmarshalled_Value_Type => {
            switch ($[0]) {
                case 'boolean': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                    return ['boolean', {
                        'definition': $,
                        'found value type': _p.decide.state(concrete_value, ($) => {
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
                                default: return ['invalid', value]
                            }
                        })
                    }]
                })
                case 'component': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => ['component', {
                    'definition': $,
                    'value': Value(
                        value,
                        {
                            'definition': _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'external': return _p.ss($, ($) => $.module['l entry']['root value'])
                                    case 'internal acyclic': return _p.ss($, ($) => $['l entry']['root value'])
                                    case 'internal': return _p.ss($, ($) => $['l entry'].get_circular_dependent()['root value'])
                                    default: return _p.au($[0])
                                }
                            }),
                            'definition path': _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'external': return _p.ss($, ($) => `${$.import['l id']}:${$.module['l id']}`)
                                    case 'internal acyclic': return _p.ss($, ($) => $['l id'])
                                    case 'internal': return _p.ss($, ($) => $['l id'])
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
                        'found value type': _p.decide.state(concrete_value, ($) => {
                            switch ($[0]) {
                                case 'dictionary': return _p.ss($, ($) => {
                                    const range = $['{'].range

                                    const op_expect_exactly_one_element = <T>($: _pi.List<T>): _pi.Optional_Value<T> => _p.number.natural.from.list($).amount_of_items() !== 1
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

                                    return ['valid', {
                                        'instance': $,
                                        'entries': op_group($.entries.__l_map(($) => {
                                            return {
                                                'id': $.id.value,
                                                'value': $
                                            }
                                        })).__d_map(($, id) => op_expect_exactly_one_element($).__decide(
                                            ($): d_out.Entry => ['unique', {
                                                'id value pair': $,
                                                'optional value': _p.optional.from.optional(
                                                    $.value,
                                                ).map(
                                                    ($) => Value(
                                                        $.value,
                                                        {
                                                            'definition': prop_def,
                                                            'definition path': `${$p['definition path']}.${id}`,
                                                        }
                                                    ),
                                                )
                                            }],
                                            (): d_out.Entry => ['multiple', {
                                                'occurences': $.__l_map(($): d_out.Entry_Data => ({
                                                    // 'id value pair': $,
                                                    'value': _p.optional.from.optional(
                                                        $.value,
                                                    ).map(
                                                        ($) => Value(
                                                            $.value,
                                                            {
                                                                'definition': prop_def,
                                                                'definition path': `${$p['definition path']}.${id}`,
                                                            }
                                                        ),
                                                    ),
                                                    'id': $.id
                                                }))
                                            }]
                                        ))
                                    }]
                                })
                                default: return ['invalid', value]
                            }
                        })
                    }]
                })
                case 'group': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                    const group_def = $
                    return ['group', {
                        'definition': $,
                        'found value type': _p.decide.state(concrete_value, ($): d_out.Group_Found_Value_Type => {

                            const concise_content = ($: d_in.Items): d_out.Group_Concise => {
                                const property_definitions_as_list = _p.list.from.dictionary(
                                    group_def
                                ).convert(
                                    ($, id) => ({
                                        'id': id,
                                        'definition': $
                                    })
                                )
                                const prop_defs_as_list_joined_with_possible_instance = _p.list.from.list(
                                    property_definitions_as_list
                                ).join(
                                    $,
                                    ($, $o) => ({
                                        'id': $.id,
                                        'definition': $.definition,
                                        'possible instance': $o
                                    })
                                )

                                return {
                                    'properties': _p.dictionary.from.list(
                                        prop_defs_as_list_joined_with_possible_instance
                                    ).convert(
                                        ($) => $.id,
                                        ($) => ({
                                            'definition': $.definition,
                                            'possible instance': $['possible instance']
                                        }),
                                        {
                                            'duplicate_id': () => _p_unreachable_code_path("the id's come from the properties in the definition")
                                        }
                                    ).__d_map(($, id) => {
                                        const def = $.definition
                                        return _p.optional.from.optional($['possible instance']).map(
                                            ($) => Value(
                                                $.value,
                                                {
                                                    'definition': def.value,
                                                    'definition path': `${$p['definition path']}.${id}`,
                                                }
                                            )
                                        )
                                    }),
                                    'superfluous properties': _p.list.from.list(
                                        _p.list.from.list(
                                            $
                                        ).join(
                                            property_definitions_as_list,
                                            ($, $o) => {
                                                const instance = $
                                                return _p.decide.boolean<_pi.Optional_Value<d_in.Items.L>>(
                                                    _p.boolean.from.optional($o).is_set(),
                                                    () => _p.optional.literal.not_set(),
                                                    () => _p.optional.literal.set(instance)
                                                )
                                            }
                                        )
                                    ).filter(
                                        ($) => $
                                    )
                                }
                            }
                            const verbose_content = ($: d_in.ID_Value_Pairs): d_out.Group_Verbose => {
                                const grouped = _p.dictionary.from.list(
                                    $
                                ).group(
                                    ($) => $.id.value,
                                )
                                const defs_joined_with_possible_instances = _p.dictionary.from.dictionary(
                                    group_def,
                                ).join(
                                    grouped,
                                    ($, $o) => ({
                                        'definition': $,
                                        'possible instances': $o
                                    })
                                )

                                const instance_groups_joined_with_defs = _p.dictionary.from.dictionary(
                                    grouped
                                ).join(
                                    group_def,
                                    ($, $o) => ({
                                        'possible definition': $o,
                                        'instances': $
                                    })
                                )
                                return {
                                    'properties': defs_joined_with_possible_instances.__d_map(($, id) => {
                                        const def = $.definition
                                        return $['possible instances'].__decide(
                                            ($) => _p.list.from.list(
                                                $
                                            ).map(
                                                ($): d_out.Possibly_Not_Set_Property => ({
                                                    'id value pair': $,
                                                    'value': _p.optional.from.optional($.value).map(
                                                        ($) => Value(
                                                            $.value,
                                                            {
                                                                'definition': def.value,
                                                                'definition path': `${$p['definition path']}.${id}`,
                                                            }
                                                        ),
                                                    )
                                                })
                                            ),
                                            () => _p.list.literal([]),
                                        )
                                    }),
                                    'superfluous properties': _p.dictionary.from.dictionary(
                                        instance_groups_joined_with_defs
                                    ).filter(
                                        ($) => _p.boolean.from.optional($['possible definition']).is_set()
                                            ? _p.optional.literal.not_set()
                                            : _p.optional.literal.set($.instances)
                                    )
                                }
                            }
                            return _p.decide.state($, ($): d_out.Group_Found_Value_Type => {
                                switch ($[0]) {
                                    case 'dictionary': return _p.ss($, ($): d_out.Group_Found_Value_Type => ['valid', {
                                        'instance': ['dictionary', $],
                                        'type': ['verbose', verbose_content($.entries)]
                                    }])
                                    case 'group': return _p.ss($, ($): d_out.Group_Found_Value_Type => {
                                        return ['valid', {
                                            'instance': ['group', $],
                                            'type': _p.decide.state($, ($): d_out.Group_Type => {
                                                switch ($[0]) {
                                                    case 'concise': return _p.ss($, ($) => ['concise', concise_content($.items)])
                                                    case 'verbose': return _p.ss($, ($) => ['verbose', verbose_content($.entries)])
                                                    default: return _p.au($[0])
                                                }
                                            })
                                        }]
                                    })
                                    case 'list': return _p.ss($, ($): d_out.Group_Found_Value_Type => ['valid', {
                                        'instance': ['list', $],
                                        'type': ['concise', concise_content($.items)]
                                    }])
                                    default: return ['invalid', value]
                                }
                            })
                        })
                    }]
                })
                case 'list': return _p.ss($, ($) => {
                    const prop_def = $.value
                    return ['list', {
                        'definition': $,
                        'found value type': _p.decide.state(concrete_value, ($) => {
                            switch ($[0]) {
                                case 'list': return _p.ss($, ($) => {
                                    return ['valid', {
                                        'instance': $,
                                        'items': _pdev.implement_me("list elements deserialization") //TODO
                                    }]
                                })
                                default: return ['invalid', value]

                            }
                        })
                    }]
                })
                case 'nothing': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                    return ['nothing', {
                        'definition': $,
                        'found value type': _p.decide.state(concrete_value, ($) => {
                            switch ($[0]) {
                                case 'nothing': return _p.ss($, ($) => ['valid', {
                                    'value': $,
                                }])
                                default: return ['invalid', value]
                            }
                        })
                    }]
                })
                case 'number': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                    return ['number', {
                        'definition': $,
                        'found value type': _p.decide.state(concrete_value, ($) => {
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
                                default: return ['invalid', value]
                            }
                        })
                    }]
                })
                case 'optional': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                    const def = $
                    return ['optional', {
                        'definition': $,
                        'found value type': _p.decide.state(concrete_value, ($) => {
                            switch ($[0]) {
                                case 'nothing': return _p.ss($, ($) => ['valid', ['not set', {
                                    'instance': $,
                                }]])
                                case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'set': return _p.ss($, ($) => ['valid', ['set', {
                                            'instance': $,
                                            'child value': Value(
                                                $.value,
                                                {
                                                    'definition': def,
                                                    'definition path': `${$p['definition path']}.O`,
                                                }
                                            )
                                        }]])
                                        default: return _p.au($[0])
                                    }
                                }))
                                default: return ['invalid', value]
                            }
                        })
                    }]
                })
                case 'reference': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                    return ['reference', {
                        'definition': $,
                        'found value type': _p.decide.state(concrete_value, ($) => {
                            switch ($[0]) {
                                case 'text': return _p.ss($, ($) => ['valid', {
                                    'instance': $,
                                }])
                                // case 'nothing': return pa.ss($, () => ['invalid', data.location])
                                default: return ['invalid', value]
                            }
                        })
                    }]
                })
                case 'state': return _p.ss($, ($): d_out.Unmarshalled_Value_Type => {
                    const def = $
                    return ['state', {
                        'definition': $,
                        'found value type': _p.decide.state(concrete_value, ($): d_out.State__found_value_type => {
                            switch ($[0]) {
                                case 'list': return _p.ss($, ($) => {
                                    return ['valid', {
                                        'instance': ['list', $],
                                        'option processing': _p.decide.list.has_first_item(
                                            $.items,
                                            ($, rest): d_out.State_Option_Processing => {
                                                const option_value = $.value
                                                return _p.decide.state($.value.type, ($): d_out.State_Option_Processing => {
                                                    switch ($[0]) {
                                                        case 'concrete': return _p.ss($, ($): d_out.State_Option_Processing => _p.decide.state($, ($) => {
                                                            switch ($[0]) {
                                                                case 'text': return _p.ss($, ($) => {
                                                                    const option_token = $
                                                                    const option_name = $.value
                                                                    return _p.decide.list.has_first_item(
                                                                        rest,
                                                                        ($, rest): d_out.State_Option_Processing => {
                                                                            const raw_value = $
                                                                            return _p.decide.list.has_items(
                                                                                rest,
                                                                                ($) => ['list format', ['too many items', null]],
                                                                                (): d_out.State_Option_Processing => _p.decide.optional(
                                                                                    def.options.__get_possible_entry_deprecated(option_name),
                                                                                    ($): d_out.State_Option_Processing => {
                                                                                        const option_def = $
                                                                                        return ['success', {
                                                                                            'option name': option_name,
                                                                                            'definition': option_def,
                                                                                            'value': Value(
                                                                                                raw_value.value,
                                                                                                {
                                                                                                    'definition': option_def.value,
                                                                                                    'definition path': `${$p['definition path']}.${option_name}`,
                                                                                                }
                                                                                            )
                                                                                        }]
                                                                                    },
                                                                                    (): d_out.State_Option_Processing => ['unknown option', {
                                                                                        'token': option_token
                                                                                    }]
                                                                                )
                                                                            )
                                                                        },
                                                                        (): d_out.State_Option_Processing => ['list format', ['missing value item', null]]
                                                                    )
                                                                })
                                                                default: return ['list format', ['option item is not a text', {
                                                                    'value': option_value
                                                                }]]
                                                            }
                                                        }))
                                                        default: return ['list format', ['option item is not a text', {
                                                            'value': option_value
                                                        }]]
                                                    }
                                                })

                                            },
                                            (): d_out.State_Option_Processing => ['list format', ['missing option item', null]]
                                        ),
                                    }]
                                })
                                case 'state': return _p.ss($, ($): d_out.State__found_value_type => {
                                    return ['valid', {
                                        'instance': ['state', $],
                                        'option processing': _p.decide.state($.status, ($): d_out.State_Option_Processing => {
                                            switch ($[0]) {
                                                case 'missing data': return _p.ss($, ($) => ['missing data', $['#']])
                                                case 'set': return _p.ss($, ($): d_out.State_Option_Processing => {
                                                    const value = $.value
                                                    const option_name = $.option.value
                                                    return _p.decide.optional(
                                                        def.options.__get_possible_entry_deprecated(option_name),
                                                        ($): d_out.State_Option_Processing => ['success', {
                                                            'option name': option_name,
                                                            'definition': $,
                                                            'value': Value(
                                                                value,
                                                                {
                                                                    'definition': $.value,
                                                                    'definition path': `${$p['definition path']}.${option_name}`,
                                                                }
                                                            )
                                                        }],
                                                        () => ['unknown option', {
                                                            'token': $.option
                                                        }]
                                                    )
                                                })
                                                default: return _p.au($[0])
                                            }
                                        }),
                                    }]
                                })
                                default: return ['invalid', value]
                            }
                        })
                    }]
                })
                case 'text': return _p.ss($, ($) => {
                    return ['text', {
                        'definition': $,
                        'found value type': _p.decide.state(concrete_value, ($) => {
                            switch ($[0]) {
                                case 'text': return _p.ss($, ($) => ['valid', {
                                    'instance': $,
                                }])
                                default: return ['invalid', value]
                            }
                        })
                    }]
                })
                default: return _p.au($[0])
            }
        })
    }
}
