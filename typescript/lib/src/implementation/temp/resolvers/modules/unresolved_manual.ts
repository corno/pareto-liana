import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _p_sl from 'pareto-core/dist/select_static_lookup'
import _p_variables from 'pareto-core/dist/_p_variables'
import _p_change_context from 'pareto-core/dist/_p_change_context'
import _p_create_symbol from 'pareto-core/dist/_p_create_symbol'

// import * as _i_generic from 'pareto-core/dist/algorithm_types/refiner/resolve'
import * as t_signatures from "../../../../interface/generated/liana/schemas/schema/signatures/resolved/refiners/unresolved"

import * as t_out from "../../../../interface/generated/liana/schemas/schema/data/resolved"

import * as _i_generic from "../../resolve_generic"

// import * as _r from "../../../interface/generated/liana/generic/resolved"


export const Value: t_signatures.Value = ($, abort, $l, $p) => {
    const loc = $['l location']
    return _p_change_context($['l state'], ($): t_out.Value => {
        switch ($[0]) {
            case 'simple': return _p.ss($, ($): t_out.Value => ['simple', _p_change_context($['l state'], ($): t_out.Value.simple => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($): t_out.Value.simple => ['global', _i_generic.get_entry_acyclic(
                        _p_sl.acyclic.from_resolved_dictionary(
                            $p.globals.__decide(
                                ($) => $['simple types'],
                                () => _i_generic.abort.parameter_is_set_assertion("globals", $['l location'], abort)
                            ),
                        ),
                        $,
                        abort,
                    )])
                    default: return _p.au($[0])
                }
            })])
            case 'text': return _p.ss($, ($): t_out.Value => ['text', _p_change_context($['l state'], ($): t_out.Value.text => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($): t_out.Value.text => ['global', _i_generic.get_entry_acyclic(
                        _p_sl.acyclic.from_resolved_dictionary(
                            $p.globals.__decide(
                                ($) => $['text types'],
                                () => _i_generic.abort.parameter_is_set_assertion("globals", $['l location'], abort)
                            ),
                        ),
                        $,
                        abort
                    )])
                    case 'local': return _p.ss($, ($) => ['local', Text_Type(
                        $,
                        abort,
                        _p_create_symbol(),
                        _p_create_symbol(),
                    )])
                    default: return _p.au($[0])
                }
            })])
            case 'component': return _p.ss($, ($): t_out.Value => ['component', {
                'type': _p_change_context($.type['l state'], ($): t_out.Value.component.type_ => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => {
                            const sc_import = $p.imports.__decide(
                                ($) => $,
                                () => _i_generic.abort.parameter_is_set_assertion("imports", $.import['l location'], abort)
                            )
                            const p_import = _i_generic.get_entry_acyclic(
                                _p_sl.acyclic.from_resolved_dictionary(sc_import),
                                $.import,
                                abort,
                            )
                            return ['external', {
                                'import': p_import,
                                'module': _i_generic.get_entry_acyclic(
                                    _p_sl.acyclic.from_resolved_dictionary(p_import['l entry'].schema.modules),
                                    $.module,
                                    abort,
                                )
                            }]
                        })
                        case 'internal acyclic': return _p.ss($, ($) => ['internal acyclic', _i_generic.get_entry_acyclic(
                            $l['noncircular sibling modules'],
                            $,
                            abort,
                        )])
                        case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry_cyclic(
                            $l['possibly circular dependent sibling modules'],
                            $,
                            abort
                        )])
                        default: return _p.au($[0])
                    }
                }),
                'results': Value_Results(
                    $.results,
                    abort,
                    {
                        'modules': $l['noncircular sibling modules'],
                    },
                    {
                        'imports': $p.imports,
                    },
                )
            }])
            case 'dictionary': return _p.ss($, ($) => {
                const p_type = Value(
                    $.value,
                    abort,
                    $l,
                    $p,
                )
                return ['dictionary', {
                    'value': p_type,
                }]
            })
            case 'group': return _p.ss($, ($) => ['group', _i_generic.temp_resolve(
                $['l dictionary'],
                ($, id, $acyclic, $cyclic) => ({
                    'description': $['l entry'].description,
                    'value': Value(
                        $['l entry'].value,
                        abort,
                        $l,
                        $p,
                    )
                }),
            )])
            case 'list': return _p.ss($, ($): t_out.Value => {
                const p_type = Value(
                    $.value,
                    abort,
                    $l,
                    $p,
                )
                return ['list', {
                    'value': p_type,
                    'results': Value_Results(
                        $.results,
                        abort,
                        {
                            'modules': $l['noncircular sibling modules'],
                        },
                        {
                            'imports': $p.imports,
                        },
                    )
                }]
            })
            case 'nothing': return _p.ss($, ($) => ['nothing', null])
            case 'optional': return _p.ss($, ($) => ['optional', Value(
                $,
                abort,
                $l,
                $p,
            )])

            case 'reference': return _p.ss($, ($): t_out.Value => {
                const loc = $.referent['module'].location['l location']
                const temp = $p.globals.__decide(
                    ($) => {
                        $.complexity[0] === 'unconstrained'
                            ? _i_generic.abort.state_constraint_found_expected("constrained", $.complexity, loc, abort)
                            : $.complexity[1]

                    },
                    () => _i_generic.abort.parameter_is_set_assertion("globals", loc, abort)
                )
                const p_referent = Value_Reference(
                    $.referent,
                    abort,
                    {
                        'modules': $l['noncircular sibling modules'],
                    },
                    {
                        'imports': $p.imports,
                    },
                )
                const p_type: t_out.Value.reference.type_ = _p_change_context($.type['l state'], ($) => {
                    switch ($[0]) {
                        case 'selected': return _p.ss($, ($) => {
                            return ['selected', {
                                'dictionary': _p_change_context(p_referent.path['resulting node'], ($) => { // component constraint (referent)
                                    switch ($[0]) {
                                        case 'dictionary': return _p.ss($, ($) => $)
                                        default: return _i_generic.abort.state_constraint_found_expected(
                                            "dictionary",
                                            $,
                                            loc,
                                            abort,
                                        )

                                    }
                                }),
                                'dependency': _p_change_context($.dependency['l state'], ($) => {
                                    switch ($[0]) {
                                        case 'cyclic': return _p.ss($, ($) => ['cyclic', null])
                                        case 'acyclic': return _p.ss($, ($) => ['acyclic', null])
                                        case 'stack': return _p.ss($, ($) => ['stack', $])
                                        default: return _p.au($[0])
                                    }
                                }),
                                'results': Value_Results(
                                    $.results,
                                    abort,
                                    {
                                        'modules': $l['noncircular sibling modules'],
                                    },
                                    {
                                        'imports': $p.imports,
                                    },
                                )
                            }]
                        })
                        case 'derived': return _p.ss($, ($) => ['derived', null])
                        default: return _p.au($[0])
                    }
                })

                return ['reference', {
                    'referent': p_referent,
                    'type': p_type,
                }]

                // case 'derived reference': return pa.ss($, ($) => ['derived reference', Module_Reference(
                //     $,
                //     $p
                // )])
                // : resolved.Value => {
                //     const p_type = Module_Reference(
                //         $.type,
                //         $p,
                //     )
                //     const p_dictionary = p_type.tail.result[0] !== 'dictionary'
                //         ? pa.panic(`not a dictionary @ ${$p['location 2 string'](loc)}`)
                //         : p_type.tail.result[1]

                //     return ['reference', {
                //         'type': p_type,
                //         // 'resulting dictionary': p_dictionary,
                //         'dependency': $.dependency.state
                //     }]
                // }
            })
            case 'state': return _p.ss($, ($) => ['state', {
                'options': _i_generic.temp_resolve(
                    $.options['l dictionary'],
                    ($, id, $acyclic, $cyclic) => ({
                        'constraints': Option_Constraints(
                            $['l entry'].constraints,
                            abort,
                            {
                                'modules': $l['noncircular sibling modules'],
                            },
                            {
                                'imports': $p.imports,
                            },
                        ),
                        'description': $['l entry'].description,
                        'value': Value(
                            $['l entry'].value,
                            abort,
                            $l,
                            $p,
                        ),
                    }),
                ),
                'results': Value_Results(
                    $.results,
                    abort,
                    {
                        'modules': $l['noncircular sibling modules'],
                    },
                    {
                        'imports': $p.imports,
                    },
                )
            }])
            // case 'type parameter': return _pt.ss($, ($) => ['type parameter', _i_generic.get_entry(
            //     _p_temp.dictionary_to_lookup(
            //         $p['type parameters'],
            //         _p_create_symbol(),
            //     ),
            //     {
            //         'reference': $,
            //         'location 2 string': $p['location 2 string']
            //     }
            // )])
            default: return _p.au($[0])
        }
    })
}

export const Value_Results: t_signatures.Value_Results = ($, abort, $l, $p) => {
    return _i_generic.temp_optional_map(
        $,
        ($) => _i_generic.temp_resolve(
            $['l dictionary'],
            ($) => Value_Reference(
                $['l entry'],
                abort,
                {
                    'modules': $l.modules,
                },
                {
                    'imports': $p.imports,
                },
            )
        )
    )
}

export const Simple_Type: t_signatures.Simple_Type = ($, abort, $l, $p) => {
    return {
        'type': _p_change_context($.type['l state'], ($): t_out.Simple_Type.type_ => {
            switch ($[0]) {
                case 'boolean': return _p.ss($, ($) => ['boolean', null])
                case 'date': return _p.ss($, ($) => ['date', null])
                case 'number': return _p.ss($, ($) => ['number', {

                    'precision': _p_change_context($.precision['l state'], ($): t_out.Simple_Type.type_.number_.precision => {
                        switch ($[0]) {
                            case 'exact': return _p.ss($, ($) => {
                                return ['exact', {
                                    'type': _p_change_context($.type['l state'], ($) => {
                                        switch ($[0]) {
                                            case 'integer': return _p.ss($, ($) => ['integer', null])
                                            case 'natural': return _p.ss($, ($) => ['natural', null])
                                            case 'positive natural': return _p.ss($, ($) => ['positive natural', null])
                                            default: return _p.au($[0])
                                        }
                                    }),
                                    'number of fractional digits': _p_change_context($['number of fractional digits'], ($) => {
                                        return $
                                    })
                                }]
                            })
                            case 'approximation': return _p.ss($, ($) => ['approximation', {
                                'significant digits': $['significant digits']
                            }])
                            default: return _p.au($[0])
                        }
                    }),
                }])
                default: return _p.au($[0])
            }
        }),
    }
}

export const Option_Constraints: t_signatures.Option_Constraints = ($, abort, $l, $p) => {
    return _i_generic.temp_optional_map(
        $,
        ($) => _i_generic.temp_resolve(
            $['l dictionary'],
            ($) => Value_Reference(
                $['l entry'],
                abort,
                {
                    'modules': $l.modules,
                },
                {
                    'imports': $p.imports,
                },
            )
        )
    )
}

export const Value_Reference: t_signatures.Value_Reference = ($, abort, $l, $p) => {
    const p_module_location = Module_Reference(
        $['module'],
        abort,
        $l,
        $p,
    )
    return {
        'module': p_module_location,
        'path': Value_Path(
            $.path,
            abort,
            _p_create_symbol(),
            {
                'module': p_module_location['resulting module']
            },
        ),
    }
}

export const Module_Reference: t_signatures.Module_Reference = ($, abort, $l, $p) => {
    const x: t_out.Module_Reference.location = _p_change_context($.location['l state'], ($) => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($): t_out.Module_Reference.location => {
                const sc_import = $p.imports.__decide(
                    ($) => $,
                    () => _i_generic.abort.parameter_is_set_assertion("imports", $.import['l location'], abort)
                )
                const p_import = _i_generic.get_entry_acyclic(
                    _p_sl.acyclic.from_resolved_dictionary(sc_import),
                    $.import,
                    abort
                )
                return ['external', {
                    'import': p_import,
                    'module': _i_generic.get_entry_acyclic(
                        _p_sl.acyclic.from_resolved_dictionary(p_import['l entry'].schema.modules),
                        $.module,
                        abort,
                    )
                }]
            })
            case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry_acyclic(
                $l['modules'],
                $,
                abort,
            )])
            default: return _p.au($[0])
        }
    })
    const p_resulting_type = _p_change_context(x, ($): t_out.Module => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($) => $.module['l entry'])
            case 'internal': return _p.ss($, ($) => $['l entry'])
            default: return _p.au($[0])
        }
    })
    return {
        'location': x,
        'resulting module': p_resulting_type,
        'resulting value': p_resulting_type['root value'],
    }
}

export const Text_Type: t_signatures.Text_Type = ($, abort, $l, $p) => {
    return {
        'type': _p_change_context($.type['l state'], ($): t_out.Text_Type.type_ => {
            switch ($[0]) {
                case 'single line': return _p.ss($, ($) => ['single line', null])
                case 'multi line': return _p.ss($, ($) => ['multi line', null])
                default: return _p.au($[0])
            }
        }),
    }
}
export const Value_Path: t_signatures.Value_Path = ($, abort, $l, $p) => {
    const p_tail_x: t_out.Value_Path.tail = _i_generic.temp_map_list_with_state(
        $.tail['l list'],
        $p.module['root value'],
        ($, current): t_out.Value_Path.tail.l_value.L => {
            const sg_loc = $['l location']
            return _p_change_context($['l item']['l state'], ($): t_out.Value_Path.tail.l_value.L => {
                switch ($[0]) {
                    case 'dictionary': return _p.ss($, ($): t_out.Value_Path.tail.l_value.L => {
                        const sc_definition: t_out.Value.dictionary = _p_change_context(current, ($) => {
                            if ($[0] !== 'dictionary') {
                                return _i_generic.abort.state_constraint_found_expected("dictionary", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            'l item': {
                                'l value': ['dictionary', null],
                                'l results': {
                                    'value': sc_definition.value,
                                }
                            },
                            'l results': {
                                'result': sc_definition.value
                            }
                        }
                    })
                    case 'group': return _p.ss($, ($) => {
                        const sc_definition: t_out.Value.group = _p_change_context(current, ($) => {
                            if ($[0] !== 'group') {
                                return _i_generic.abort.state_constraint_found_expected("group", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry_acyclic(
                            _p_sl.acyclic.from_resolved_dictionary(sc_definition),
                            $,
                            abort,
                        )
                        return {
                            'l item': {
                                'l value': ['group', p_child],
                                'l results': {
                                    'value': p_child['l entry'].value,
                                }
                            },
                            'l results': {
                                'result': p_child['l entry'].value
                            }
                        }
                    })
                    case 'list': return _p.ss($, ($) => {
                        const sc_definition: t_out.Value.list = _p_change_context(current, ($) => {
                            if ($[0] !== 'list') {
                                return _i_generic.abort.state_constraint_found_expected("list", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            'l item': {
                                'l value': ['list', null],
                                'l results': {
                                    'value': sc_definition.value
                                }
                            },
                            'l results': {
                                'result': sc_definition.value
                            }
                        }
                    })
                    case 'optional': return _p.ss($, ($): t_out.Value_Path.tail.l_value.L => {
                        const sc_definition: t_out.Value.optional = _p_change_context(current, ($) => {
                            if ($[0] !== 'optional') {
                                return _i_generic.abort.state_constraint_found_expected("optional", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            'l item': {
                                'l value': ['optional', null],
                                'l results': {
                                    'value': sc_definition
                                }
                            },
                            'l results': {
                                'result': sc_definition
                            }
                        }
                    })
                    case 'state': return _p.ss($, ($): t_out.Value_Path.tail.l_value.L => {
                        const P_state: t_out.Value.state = _p_change_context(current, ($) => {
                            if ($[0] !== 'state') {
                                return _i_generic.abort.state_constraint_found_expected("state", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry_acyclic(
                            _p_sl.acyclic.from_resolved_dictionary(P_state.options),
                            $,
                            abort,
                        )
                        return {
                            'l item': {
                                'l value': ['state', p_child],
                                'l results': {
                                    'value': p_child['l entry'].value
                                }
                            },
                            'l results': {
                                'result': p_child['l entry'].value
                            }
                        }
                    })
                    default: return _p.au($[0])
                }
            })
        },
        ($, current) => $['l results'].result,
        (list, result) => ({
            'l value': list,
            'l results': {
                'result': result,
            },
        })
    )
    return {
        'tail': p_tail_x,
        'resulting node': p_tail_x['l results'].result
    }
}
export const Globals: t_signatures.Globals = ($, abort, $l, $p) => {
    const p_simple_types: t_out.Globals.simple_types = _i_generic.temp_resolve(
        $['simple types']['l dictionary'],
        ($, id, $acyclic, $cyclic) => Simple_Type(
            $['l entry'],
            abort,
            _p_create_symbol(),
            _p_create_symbol(),
        ),
    )
    const p_text_types: t_out.Globals.text_types = _i_generic.temp_resolve(
        $['text types']['l dictionary'],
        ($, id, $acyclic, $cyclic) => Text_Type(
            $['l entry'],
            abort,
            _p_create_symbol(),
            _p_create_symbol(),
        ),
    )
    return {
        'simple types': p_simple_types,
        'text types': p_text_types,
        'complexity': $['complexity']['l state'],
    }
}