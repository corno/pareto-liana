import * as p_ from 'pareto-core/implementation/refiner'
import * as p_sl from 'pareto-core/implementation/refiner/specials/lookup'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'


import * as t_signatures from "../../../../modules/schema.generated/declarations/refiners/resolved/unresolved.js"

import * as s_out from "../../../../modules/schema.generated/schemas/resolved/schema.js"

import * as i_generic from "../../resolve_generic.js"

export const Value: t_signatures.Value = ($, abort, $l, $p) => {
    return p_change_context($['l state'], ($): s_out.Value => {
        switch ($[0]) {
            case 'simple': return p_.option($, ($): s_out.Value => ['simple', p_change_context($['l state'], ($): s_out.Value.simple => {
                switch ($[0]) {
                    case 'global': return p_.option($, ($): s_out.Value.simple => ['global', i_generic.get_entry_acyclic(
                        p_sl.acyclic.from_resolved_dictionary(
                            p_.from.optional($p.globals).decide(
                                ($) => $['simple types'],
                                () => i_generic.abort.parameter_is_set_assertion("globals", $['l location'], abort)
                            ),
                        ),
                        $,
                        abort,
                    )])
                    default: return p_.exhaustive($[0])
                }
            })])
            case 'text': return p_.option($, ($): s_out.Value => ['text', p_change_context($['l state'], ($): s_out.Value.text => {
                switch ($[0]) {
                    case 'global': return p_.option($, ($): s_out.Value.text => ['global', i_generic.get_entry_acyclic(
                        p_sl.acyclic.from_resolved_dictionary(
                            p_.from.optional($p.globals).decide(
                                ($) => $['text types'],
                                () => i_generic.abort.parameter_is_set_assertion("globals", $['l location'], abort)
                            ),
                        ),
                        $,
                        abort
                    )])
                    case 'local': return p_.option($, ($) => ['local', Text_Type(
                        $,
                        abort,
                        p_.literal.nothing(),
                        p_.literal.nothing(),
                    )])
                    default: return p_.exhaustive($[0])
                }
            })])
            case 'component': return p_.option($, ($): s_out.Value => ['component', {
                'type': p_change_context($.type['l state'], ($): s_out.Value.component.type_ => {
                    switch ($[0]) {
                        case 'external': return p_.option($, ($) => {
                            const sc_import = p_.from.optional($p.imports).decide(
                                ($) => $,
                                () => i_generic.abort.parameter_is_set_assertion("imports", $.import['l location'], abort)
                            )
                            const p_import = i_generic.get_entry_acyclic(
                                p_sl.acyclic.from_resolved_dictionary(sc_import),
                                $.import,
                                abort,
                            )
                            return ['external', {
                                'import': p_import,
                                'module': i_generic.get_entry_acyclic(
                                    p_sl.acyclic.from_resolved_dictionary(p_import['l entry'].schema.modules),
                                    $.module,
                                    abort,
                                )
                            }]
                        })
                        case 'internal acyclic': return p_.option($, ($) => ['internal acyclic', i_generic.get_entry_acyclic(
                            $l['noncircular sibling modules'],
                            $,
                            abort,
                        )])
                        case 'internal': return p_.option($, ($) => ['internal', i_generic.get_entry_cyclic(
                            $l['possibly circular dependent sibling modules'],
                            $,
                            abort
                        )])
                        default: return p_.exhaustive($[0])
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
            case 'dictionary': return p_.option($, ($) => {
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
            case 'group': return p_.option($, ($) => ['group', i_generic.temp_resolve(
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
            case 'list': return p_.option($, ($): s_out.Value => {
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
            case 'nothing': return p_.option($, ($) => ['nothing', null])
            case 'optional': return p_.option($, ($) => ['optional', Value(
                $,
                abort,
                $l,
                $p,
            )])

            case 'reference': return p_.option($, ($): s_out.Value => {
                const loc = $.referent['module'].location['l location']
                // $p.globals.__deprecated_extract_data(
                //     ($) => {
                //         $.complexity[0] === 'unconstrained'
                //             ? i_generic.abort.state_constraint_found_expected("constrained", $.complexity, loc, abort)
                //             : $.complexity[1]

                //     },
                //     () => i_generic.abort.parameter_is_set_assertion("globals", loc, abort)
                // )
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
                const p_type: s_out.Value.reference.type_ = p_change_context($.type['l state'], ($) => {
                    switch ($[0]) {
                        case 'selected': return p_.option($, ($) => {
                            return ['selected', {
                                'dictionary': p_change_context(p_referent.path['resulting node'], ($) => { // component constraint (referent)
                                    switch ($[0]) {
                                        case 'dictionary': return p_.option($, ($) => $)
                                        default: return i_generic.abort.state_constraint_found_expected(
                                            "dictionary",
                                            $,
                                            loc,
                                            abort,
                                        )

                                    }
                                }),
                                'dependency': p_change_context($.dependency['l state'], ($) => {
                                    switch ($[0]) {
                                        case 'cyclic': return p_.option($, ($) => ['cyclic', null])
                                        case 'acyclic': return p_.option($, ($) => ['acyclic', null])
                                        case 'stack': return p_.option($, ($) => ['stack', $])
                                        default: return p_.exhaustive($[0])
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
                        case 'derived': return p_.option($, ($) => ['derived', null])
                        default: return p_.exhaustive($[0])
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
            case 'state': return p_.option($, ($) => ['state', {
                'options': i_generic.temp_resolve(
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
            // case 'type parameter': return _pt.ss($, ($) => ['type parameter', _i_generic.get_ entry(
            //     _p_temp.dictionary_to_lookup(
            //         $p['type parameters'],
            //         p_.literal.nothing(),
            //     ),
            //     {
            //         'reference': $,
            //         'location 2 string': $p['location 2 string']
            //     }
            // )])
            default: return p_.exhaustive($[0])
        }
    })
}

export const Value_Results: t_signatures.Value_Results = ($, abort, $l, $p) => {
    return i_generic.temp_optional_map(
        $,
        ($) => i_generic.temp_resolve(
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
        'type': p_change_context($.type['l state'], ($): s_out.Simple_Type.type_ => {
            switch ($[0]) {
                case 'boolean': return p_.option($, ($) => ['boolean', null])
                case 'date': return p_.option($, ($) => ['date', null])
                case 'number': return p_.option($, ($) => ['number', {

                    'precision': p_change_context($.precision['l state'], ($): s_out.Simple_Type.type_.number_.precision => {
                        switch ($[0]) {
                            case 'exact': return p_.option($, ($) => {
                                return ['exact', {
                                    'type': p_change_context($.type['l state'], ($) => {
                                        switch ($[0]) {
                                            case 'integer': return p_.option($, ($) => ['integer', null])
                                            case 'natural': return p_.option($, ($) => ['natural', null])
                                            case 'positive natural': return p_.option($, ($) => ['positive natural', null])
                                            default: return p_.exhaustive($[0])
                                        }
                                    }),
                                    'number of fractional digits': p_change_context($['number of fractional digits'], ($) => {
                                        return $
                                    })
                                }]
                            })
                            case 'approximation': return p_.option($, ($) => ['approximation', {
                                'significant digits': $['significant digits']
                            }])
                            default: return p_.exhaustive($[0])
                        }
                    }),
                }])
                default: return p_.exhaustive($[0])
            }
        }),
    }
}

export const Option_Constraints: t_signatures.Option_Constraints = ($, abort, $l, $p) => {
    return i_generic.temp_optional_map(
        $,
        ($) => i_generic.temp_resolve(
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
            p_.literal.nothing(),
            {
                'module': p_module_location['resulting module']
            },
        ),
    }
}

export const Module_Reference: t_signatures.Module_Reference = ($, abort, $l, $p) => {
    const x: s_out.Module_Reference.location = p_change_context($.location['l state'], ($) => {
        switch ($[0]) {
            case 'external': return p_.option($, ($): s_out.Module_Reference.location => {
                const sc_import = p_.from.optional($p.imports).decide(
                    ($) => $,
                    () => i_generic.abort.parameter_is_set_assertion("imports", $.import['l location'], abort)
                )
                const p_import = i_generic.get_entry_acyclic(
                    p_sl.acyclic.from_resolved_dictionary(sc_import),
                    $.import,
                    abort
                )
                return ['external', {
                    'import': p_import,
                    'module': i_generic.get_entry_acyclic(
                        p_sl.acyclic.from_resolved_dictionary(p_import['l entry'].schema.modules),
                        $.module,
                        abort,
                    )
                }]
            })
            case 'internal': return p_.option($, ($) => ['internal', i_generic.get_entry_acyclic(
                $l['modules'],
                $,
                abort,
            )])
            default: return p_.exhaustive($[0])
        }
    })
    const p_resulting_type = p_change_context(x, ($): s_out.Module => {
        switch ($[0]) {
            case 'external': return p_.option($, ($) => $.module['l entry'])
            case 'internal': return p_.option($, ($) => $['l entry'])
            default: return p_.exhaustive($[0])
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
        'type': p_change_context($.type['l state'], ($): s_out.Text_Type.type_ => {
            switch ($[0]) {
                case 'single line': return p_.option($, ($) => ['single line', null])
                case 'multi line': return p_.option($, ($) => ['multi line', null])
                default: return p_.exhaustive($[0])
            }
        }),
        'link': p_change_context($.link['l state'], ($): s_out.Text_Type.link => {
            switch ($[0]) {
                case 'no': return p_.option($, ($) => ['no', null])
                case 'yes': return p_.option($, ($) => ['yes', {
                    'path prefix': $['path prefix'],
                    'path suffix': $['path suffix'],
                }])
                default: return p_.exhaustive($[0])
            }
        }),
    }
}
export const Value_Path: t_signatures.Value_Path = ($, abort, $l, $p) => {
    const p_tail_x: s_out.Value_Path.tail = i_generic.temp_map_list_with_state(
        $.tail['l list'],
        $p.module['root value'],
        ($, current): s_out.Value_Path.tail.l_value.L => {
            const sg_loc = $['l location']
            return p_change_context($['l item']['l state'], ($): s_out.Value_Path.tail.l_value.L => {
                switch ($[0]) {
                    case 'dictionary': return p_.option($, ($): s_out.Value_Path.tail.l_value.L => {
                        const sc_definition: s_out.Value.dictionary = p_change_context(current, ($) => {
                            if ($[0] !== 'dictionary') {
                                return i_generic.abort.state_constraint_found_expected("dictionary", $, sg_loc, abort)
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
                    case 'group': return p_.option($, ($) => {
                        const sc_definition: s_out.Value.group = p_change_context(current, ($) => {
                            if ($[0] !== 'group') {
                                return i_generic.abort.state_constraint_found_expected("group", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(sc_definition),
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
                    case 'list': return p_.option($, ($) => {
                        const sc_definition: s_out.Value.list = p_change_context(current, ($) => {
                            if ($[0] !== 'list') {
                                return i_generic.abort.state_constraint_found_expected("list", $, sg_loc, abort)
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
                    case 'optional': return p_.option($, ($): s_out.Value_Path.tail.l_value.L => {
                        const sc_definition: s_out.Value.optional = p_change_context(current, ($) => {
                            if ($[0] !== 'optional') {
                                return i_generic.abort.state_constraint_found_expected("optional", $, sg_loc, abort)
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
                    case 'state': return p_.option($, ($): s_out.Value_Path.tail.l_value.L => {
                        const P_state: s_out.Value.state = p_change_context(current, ($) => {
                            if ($[0] !== 'state') {
                                return i_generic.abort.state_constraint_found_expected("state", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(P_state.options),
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
                    default: return p_.exhaustive($[0])
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
    const p_simple_types: s_out.Globals.simple_types = i_generic.temp_resolve(
        $['simple types']['l dictionary'],
        ($, id, $acyclic, $cyclic) => Simple_Type(
            $['l entry'],
            abort,
            p_.literal.nothing(),
            p_.literal.nothing(),
        ),
    )
    const p_text_types: s_out.Globals.text_types = i_generic.temp_resolve(
        $['text types']['l dictionary'],
        ($, id, $acyclic, $cyclic) => Text_Type(
            $['l entry'],
            abort,
            p_.literal.nothing(),
            p_.literal.nothing(),
        ),
    )
    return {
        'simple types': p_simple_types,
        'text types': p_text_types,
        'complexity': $['complexity']['l state'],
    }
}