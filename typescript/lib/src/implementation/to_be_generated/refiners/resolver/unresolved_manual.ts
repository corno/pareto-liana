import * as p_ from 'pareto-core/implementation/refiner'
import * as p_sl from 'pareto-core/implementation/refiner/specials/lookup'
import p_variables from 'pareto-core/implementation/refiner/specials/variables'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'


import * as t_signatures from "../../../../modules/schema/declarations/refiners/resolved/unresolved.js"

import * as t_out from "../../../../modules/schema/interface/data/resolved.js"

import * as i_generic from "../../resolve_generic.js"


export const Value: t_signatures.Resolver_Value = ($, abort, $l, $p) => {
    const loc = $['l location']
    const p_type = p_change_context($['l state'], ($): t_out.Resolver_Value => {
        switch ($[0]) {
            case 'component': return p_.option($, ($): t_out.Resolver_Value => {
                const x = $p.definition[0] !== 'component'
                    ? i_generic.abort.state_constraint_found_expected(
                        "component",
                        $p.definition,
                        loc,
                        abort,
                    )
                    : $p.definition[1]
                const p_location = p_change_context($.location['l state'], ($): t_out.Resolver_Value.component.location => {
                    switch ($[0]) {
                        case 'external': return p_.option($, ($) => {
                            const sc_schema_import = p_.from.optional($p['schema imports']).decide(
                                ($) => $,
                                () => i_generic.abort.parameter_is_set_assertion("imports", loc, abort)
                            )
                            const sc_resolver_import = p_.from.optional($p['resolver imports']).decide(
                                ($) => $,
                                () => i_generic.abort.parameter_is_set_assertion("imports", loc, abort)
                            )
                            const p_schema_import = i_generic.get_entry_acyclic(
                                p_sl.acyclic.from_resolved_dictionary(sc_schema_import),
                                $['schema import'],
                                abort,
                            )
                            const p_resolver_import = i_generic.get_entry_acyclic(
                                p_sl.acyclic.from_resolved_dictionary(sc_resolver_import),
                                $['resolver import'],
                                abort,
                            )
                            const pc_constrained: t_out.Schema.complexity.constrained = p_change_context(p_schema_import['l entry'].schema.complexity, ($) => {
                                switch ($[0]) {
                                    case 'constrained': return p_.option($, ($) => $)
                                    default: return i_generic.abort.state_constraint_found_expected("constrained", $, loc, abort)
                                }
                            })
                            return ['external', {
                                'schema import': p_schema_import,
                                'resolver import': p_resolver_import,
                                'signature': i_generic.get_entry_acyclic(
                                    p_sl.acyclic.from_resolved_dictionary(pc_constrained.signatures.signatures),
                                    $.signature,
                                    abort,
                                )
                            }]
                        })
                        case 'internal': return p_.option($, ($) => ['internal', i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(
                                $p['signatures'],
                            ),
                            $,
                            abort,
                        )])
                        default: return p_.exhaustive($[0])
                    }
                })
                const p_signature: t_out.Resolver_Value.component.signature = p_change_context(p_location, ($) => {
                    switch ($[0]) {
                        case 'external': return p_.option($, ($) => $.signature['l entry'])
                        case 'internal': return p_.option($, ($) => $['l entry'])
                        default: return p_.exhaustive($[0])
                    }
                })
                const x_type: t_out.Modules.D = p_change_context(x.type, ($) => {
                    switch ($[0]) {
                        case 'external': return p_.option($, ($) => $.module['l entry'])
                        case 'internal acyclic': return p_.option($, ($) => $['l entry'])
                        case 'internal': return p_.option($, ($) => $['l entry'].get_circular_dependent())
                        default: return p_.exhaustive($[0])
                    }
                })
                if (p_signature.module !== x_type) {
                    i_generic.abort.same_node_constraint("module.value", loc, abort)
                }
                const p_arguments: t_out.Resolver_Value.component.arguments_ = p_.from.optional($.arguments).decide(
                    ($) => {
                        const x: t_out.Resolver_Value.component.arguments_.O = {
                            'lookups': p_.from.optional($.lookups).decide(
                                ($) => p_.literal.set(i_generic.resolve_dense_dictionary(
                                    $['l dictionary'],
                                    $['l location'],
                                    abort,
                                    p_signature['resolved parameters'].lookups,
                                    ($, id, $acyclic, $cyclic) => p_change_context($, ($) => {
                                        //do additional validation
                                        return p_change_context($['l entry']['l state'], ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D => {
                                            switch ($[0]) {
                                                case 'acyclic': return p_.option($, ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D => ['acyclic', p_.from.state($['l state']).decide(
                                                    ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D.acyclic => {
                                                        switch ($[0]) {
                                                            case 'not set': return p_.option($, ($) => ['not set', null])
                                                            default: return p_.exhaustive($[0])
                                                        }
                                                    })])
                                                case 'cyclic': return p_.option($, ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D => ['cyclic', p_.from.state($['l state']).decide(
                                                    ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D.cyclic => {
                                                        switch ($[0]) {
                                                            case 'not set': return p_.option($, ($) => ['not set', null])
                                                            default: return p_.exhaustive($[0])
                                                        }
                                                    })])
                                                case 'stack': return p_.option($, ($) => ['stack', p_.from.state($['l state']).decide(
                                                    ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D.stack => {
                                                        switch ($[0]) {
                                                            case 'empty': return p_.option($, ($) => ['empty', null])
                                                            case 'push': return p_.option($, ($) => {
                                                                const p_stack = Lookup_Selection(
                                                                    $.stack,
                                                                    abort,
                                                                    $l,
                                                                    $p,
                                                                )
                                                                const p_element = Lookup_Selection(
                                                                    $.item,
                                                                    abort,
                                                                    $l,
                                                                    $p,
                                                                )
                                                                return ['push', {
                                                                    'stack': p_stack,
                                                                    'item': p_element
                                                                }]
                                                            })
                                                            default: return p_.exhaustive($[0])
                                                        }
                                                    })])
                                                case 'selection': return p_.option($, ($) => ['selection', Lookup_Selection(
                                                    $,
                                                    abort,
                                                    $l,
                                                    $p,
                                                )])
                                                default: return p_.exhaustive($[0])
                                            }
                                        })
                                    }),
                                )),
                                () => {
                                    {
                                        //additional validation
                                        if (p_signature['resolved parameters'].lookups !== $p.signature['resolved parameters'].lookups) {

                                            i_generic.abort.same_node_constraint("lookups", loc, abort)
                                        }
                                    }
                                    return p_.literal.not_set()
                                }
                            ),
                            'modules': p_.from.optional($.modules).decide(
                                ($) => {
                                    const values_location = $['l location']

                                    return p_.literal.set(i_generic.resolve_dense_dictionary(
                                        $['l dictionary'],
                                        $['l location'],
                                        abort,
                                        p_signature['resolved parameters'].modules,
                                        ($, id, $acyclic, $cyclic) => p_change_context($, ($) => {
                                            const linked_entry = i_generic.get_entry_acyclic(
                                                p_sl.acyclic.from_resolved_dictionary(p_signature['resolved parameters'].modules),
                                                {
                                                    'l reference': id,
                                                    'l location': $['l location'],
                                                },
                                                abort,
                                            )
                                            const out = p_change_context($['l entry']['l state'], ($): t_out.Resolver_Value.component.arguments_.O.modules.O.D => {
                                                switch ($[0]) {
                                                    case 'optional': return p_.option($, ($) => ['optional', Optional_Value_Initialization(
                                                        $,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )])
                                                    case 'parameter': return p_.option($, ($) => ['parameter', i_generic.get_entry_acyclic(
                                                        p_sl.acyclic.from_resolved_dictionary($p.signature['resolved parameters'].modules),
                                                        $,
                                                        abort,
                                                    )])
                                                    case 'required': return p_.option($, ($) => ['required', Guaranteed_Value_Selection(
                                                        $,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )])
                                                    default: return p_.exhaustive($[0])
                                                }
                                            })
                                            {
                                                //additional validation
                                                const benchmark = linked_entry['l entry']
                                                const focus = out

                                                const walk_path_till_end = ($: t_out.Value): t_out.Value => {
                                                    return p_change_context($, ($) => {
                                                        switch ($[0]) {
                                                            case 'component': return p_.option($, ($) => p_change_context($.type, ($) => {
                                                                switch ($[0]) {
                                                                    case 'external': return p_.option($, ($) => $.module['l entry']['root value'])
                                                                    case 'internal acyclic': return p_.option($, ($) => $['l entry']['root value'])
                                                                    case 'internal': return p_.option($, ($) => $['l entry'].get_circular_dependent()['root value']) //this is safe, once we are resolving value resolvers, all value are resolved
                                                                    default: return p_.exhaustive($[0])
                                                                }
                                                            }))
                                                            case 'reference': return p_.option($, ($) => $.referent.path['resulting node'])
                                                            default: return $
                                                        }
                                                    })
                                                }

                                                p_change_context(focus, ($) => {
                                                    switch ($[0]) {
                                                        case 'optional': return p_.option($, ($) => {

                                                            if (benchmark.presence[0] !== 'optional') {
                                                                i_generic.abort.state_constraint_found_expected("optional", benchmark.presence, values_location, abort)
                                                            }

                                                            p_change_context($, ($) => {
                                                                switch ($[0]) {
                                                                    case 'not set': return p_.option($, ($) => {
                                                                        return null
                                                                    })
                                                                    case 'selection': return p_.option($, ($) => {
                                                                        //FIXME
                                                                        p_change_context($, ($) => {
                                                                            switch ($[0]) {
                                                                                case 'parameter': return p_.option($, ($) => {
                                                                                    return null
                                                                                })
                                                                                case 'result': return p_.option($, ($) => {
                                                                                    return null
                                                                                })
                                                                                default: return p_.exhaustive($[0])
                                                                            }
                                                                        })
                                                                        return null
                                                                    })
                                                                    case 'set': return p_.option($, ($) => {

                                                                        if (walk_path_till_end(benchmark.module['resulting module']['root value']) !== walk_path_till_end($.tail['resulting node'])) {
                                                                            return i_generic.abort.same_node_constraint(
                                                                                "required argument data type",
                                                                                values_location,
                                                                                abort,
                                                                            )
                                                                        }
                                                                        return null
                                                                    })
                                                                    default: return p_.exhaustive($[0])
                                                                }
                                                            })
                                                            return null

                                                            //FIX validate that modules are the same
                                                        })
                                                        case 'parameter': return p_.option($, ($) => {
                                                            if ($['l entry'].presence[0] !== benchmark.presence[0]) {
                                                                return i_generic.abort.same_node_constraint(
                                                                    "parameter presence",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                            if ($['l entry'].module['resulting module'] !== benchmark.module['resulting module']) {
                                                                return i_generic.abort.same_node_constraint(
                                                                    "parameter data type",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                            return null
                                                        })
                                                        case 'required': return p_.option($, ($) => {
                                                            if (benchmark.presence[0] !== 'required') {
                                                                i_generic.abort.state_constraint_found_expected("required", benchmark.presence, values_location, abort)
                                                            }
                                                            if (walk_path_till_end(benchmark.module['resulting module']['root value']) !== walk_path_till_end($.tail['resulting node'])) {
                                                                return i_generic.abort.same_node_constraint(
                                                                    "required argument data type",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                            return null
                                                        })
                                                        default: return p_.exhaustive($[0])
                                                    }
                                                })
                                            }
                                            return out
                                        }),
                                    ))
                                },
                                () => {
                                    {
                                        //additional validation

                                        if (p_signature['resolved parameters'].modules !== $p.signature['resolved parameters'].modules) {
                                            return i_generic.abort.same_node_constraint(
                                                "value parameters",
                                                loc,
                                                abort,
                                            )
                                        }
                                    }
                                    return p_.literal.not_set()
                                }
                            ),
                        }
                        return p_.literal.set(x)
                    },
                    () => {
                        {
                            //additional validation
                            if (p_signature['resolved parameters'].lookups !== $p.signature['resolved parameters'].lookups) {
                                return i_generic.abort.same_node_constraint(
                                    "lookup parameters",
                                    loc,
                                    abort,
                                )
                            }
                            if (p_signature['resolved parameters'].modules !== $p.signature['resolved parameters'].modules) {
                                return i_generic.abort.same_node_constraint(
                                    "value parameters",
                                    loc,
                                    abort,
                                )
                            }
                        }

                        return p_.literal.not_set()
                    }
                )
                const p_constraints = Value_Constraints(
                    $.constraints,
                    abort,
                    p_.literal.nothing(),
                    {
                        'value': p_change_context(p_location, ($): t_out.Value => {
                            switch ($[0]) {
                                case 'external': return p_.option($, ($) => $.signature['l entry'].module['root value'])
                                case 'internal': return p_.option($, ($) => $['l entry'].module['root value'])
                                default: return p_.exhaustive($[0])
                            }
                        })
                    }
                )
                return ['component', {
                    'definition': x,
                    'location': p_location,
                    'signature': p_signature,
                    'arguments': p_arguments,
                    'constraints': p_constraints,
                }]
            })
            case 'dictionary': return p_.option($, ($) => {
                const p_definition = $p.definition[0] !== 'dictionary'
                    ? i_generic.abort.state_constraint_found_expected("dictionary", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_benchmark = i_generic.temp_optional_map(
                    $.benchmark,
                    ($): t_out.Resolver_Value.dictionary.benchmark.O => {
                        const p_selection = Guaranteed_Value_Selection(
                            $.selection,
                            abort,
                            $l,
                            $p,
                        )

                        const p_resulting_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint ('selection')
                            ? i_generic.abort.state_constraint_found_expected("dictionary", p_selection['resulting node'], loc, abort)
                            : p_selection['resulting node'][1]
                        return {
                            'selection': {
                                'l value': p_selection,
                                'l results': {
                                    'dictionary': p_resulting_dictionary,
                                }
                                // 'l constraints': {

                                // }
                            },
                            'resulting dictionary': p_resulting_dictionary,
                            'dense': $.dense
                        }
                    }
                )
                return ['dictionary', {
                    'definition': p_definition,
                    'benchmark': p_benchmark,
                    'resolver': Value(
                        $.resolver,
                        abort,
                        $l,
                        {
                            'linked entry': p_.from.optional(p_benchmark).decide(
                                ($) => p_.literal.set($),
                                () => $p['linked entry']
                            ),
                            'definition': p_definition.value,
                            'current dictionary': p_.literal.set(p_definition),
                            'current ordered dictionary': p_.literal.set(p_definition),//FIXME: is it ordered

                            'modules': $p.modules,
                            'schema imports': $p['schema imports'],
                            'resolver imports': $p['resolver imports'],
                            'signature': $p.signature,
                            'signatures': $p.signatures,
                            'list cursor': $p['list cursor'],
                            'option constraints': $p['option constraints'],
                        },
                    ),
                }]
            })
            case 'group': return p_.option($, ($) => {
                const x = $p.definition[0] !== 'group'
                    ? i_generic.abort.state_constraint_found_expected("group", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_properties = i_generic.resolve_dense_dictionary(
                    $['l dictionary'],
                    $['l location'],
                    abort,
                    x,
                    ($, id, $acyclic, $cyclic): t_out.Resolver_Value_Group.D => {

                        const p_definition = i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(x),
                            {
                                'l reference': id,
                                'l location': $['l location'],
                            },
                            abort,
                        )
                        const p_resolver = Value(
                            $['l entry'].resolver,
                            abort,
                            {
                                //special
                                'sibling property resolvers': $acyclic,
                                'parent sibling property resolvers': $l['sibling property resolvers'],

                                //copy
                            },
                            {
                                'definition': p_definition['l entry'].value,

                                'modules': $p.modules,
                                'schema imports': $p['schema imports'],
                                'resolver imports': $p['resolver imports'],
                                'signature': $p.signature,
                                'signatures': $p.signatures,
                                'list cursor': $p['list cursor'],
                                'linked entry': $p['linked entry'],
                                'current dictionary': $p['current dictionary'],
                                'option constraints': $p['option constraints'],
                                'current ordered dictionary': $p['current ordered dictionary'],
                            },
                        )
                        return {
                            'definition': p_definition['l entry'],
                            'resolver': p_resolver,
                        }
                    },
                )
                return ['group', p_properties]
            })
            case 'list': return p_.option($, ($) => {
                const p_definition = $p.definition[0] !== 'list'
                    ? i_generic.abort.state_constraint_found_expected("list", $p.definition, loc, abort)
                    : $p.definition[1]
                const p_result = i_generic.temp_optional_map(
                    $.result,
                    ($) => Module_Reference(
                        $,
                        abort,
                        {
                            'modules': p_sl.acyclic.from_resolved_dictionary($p.modules),
                        },
                        {
                            'imports': $p['schema imports'],
                        },
                    )
                )
                const p_resolver = Value(
                    $.resolver,
                    abort,
                    $l,
                    {
                        'definition': p_definition.value,
                        'list cursor': p_.from.optional(p_result).decide(
                            ($) => p_.literal.set($),
                            () => $p['list cursor']
                        ), //setting the cursor

                        'modules': $p.modules,
                        'schema imports': $p['schema imports'],
                        'resolver imports': $p['resolver imports'],
                        'signature': $p.signature,
                        'signatures': $p.signatures,
                        'linked entry': $p['linked entry'],
                        'current dictionary': $p['current dictionary'],
                        'option constraints': $p['option constraints'],
                        'current ordered dictionary': $p['current ordered dictionary'],
                    },
                )
                return ['list', {
                    'result': p_result,
                    'definition': p_definition,
                    'resolver': p_resolver,
                }]
            })
            case 'nothing': return p_.option($, ($) => {
                // const x = $p.definition[0] !== 'nothing'
                //     ? i_generic.abort.state_constraint_found_expected("nothing", $p.definition, loc, abort)
                //     : $p.definition[1]
                return ['nothing', null]
            })
            case 'simple': return p_.option($, ($) => {
                // const x = $p.definition[0] !== 'simple'
                //     ? i_generic.abort.state_constraint_found_expected("simple", $p.definition, loc, abort)
                //     : $p.definition[1]
                return ['simple', null]
            })
            case 'optional': return p_.option($, ($) => {
                const x = $p.definition[0] !== 'optional'
                    ? i_generic.abort.state_constraint_found_expected("optional", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_constraints: t_out.Resolver_Value.state.options.D.constraints = Option_Constraints(
                    $.constraints,
                    abort,
                    $l,
                    $p,
                )
                const p_resolver = Value(
                    $.resolver,
                    abort,
                    {
                        'sibling property resolvers': $l['sibling property resolvers'],
                        'parent sibling property resolvers': $l['parent sibling property resolvers'],
                    },
                    {
                        'definition': x,
                        'option constraints': p_.literal.set(p_constraints),

                        'modules': $p.modules,
                        'schema imports': $p['schema imports'],
                        'resolver imports': $p['resolver imports'],
                        'signature': $p.signature,
                        'signatures': $p.signatures,
                        'list cursor': $p['list cursor'],
                        'linked entry': $p['linked entry'],
                        'current dictionary': $p['current dictionary'],
                        'current ordered dictionary': $p['current ordered dictionary'],
                    },
                )
                return ['optional', {
                    'constraints': p_constraints,
                    'resolver': p_resolver,
                }]
            })
            case 'reference': return p_.option($, ($): t_out.Resolver_Value => {
                const p_definition = $p.definition[0] !== 'reference'
                    ? i_generic.abort.state_constraint_found_expected("reference", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['reference', {
                    'definition': p_definition,
                    'type': p_change_context($.type['l state'], ($): t_out.Resolver_Value.reference.type_ => {
                        switch ($[0]) {
                            case 'derived': return p_.option($, ($) => {
                                // const p_definition_2 = p_definition.type[0] !== 'derived'
                                //     ? i_generic.abort.state_constraint_found_expected("derived", p_definition.type, loc, abort)
                                //     : p_definition.type[1]
                                return ['derived', {
                                    'value': Guaranteed_Value_Selection(
                                        $.value,
                                        abort,
                                        $l,
                                        $p,
                                    )
                                }]
                            })
                            case 'selected': return p_.option($, ($) => {
                                const p_definition_2 = p_definition.type[0] !== 'selected'
                                    ? i_generic.abort.state_constraint_found_expected("selected", p_definition.type, loc, abort)
                                    : p_definition.type[1]
                                const p_lookup = Lookup_Selection(
                                    $.lookup,
                                    abort,
                                    $l,
                                    $p,
                                )
                                const p_constraints = Value_Constraints(
                                    $.constraints,
                                    abort,
                                    p_.literal.nothing(),
                                    {
                                        'value': p_lookup['resulting dictionary'].value
                                    }
                                )
                                return ['selected', {
                                    'definition': p_definition_2,
                                    'lookup': p_lookup,
                                    'constraints': p_constraints,
                                }]
                            })
                            default: return p_.exhaustive($[0])
                        }
                    })
                }]
            })
            case 'state': return p_.option($, ($): t_out.Resolver_Value => {
                const p_definition = $p.definition[0] !== 'state'
                    ? i_generic.abort.state_constraint_found_expected("state", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_states: t_out.Resolver_Value.state.options = i_generic.resolve_dense_dictionary(
                    $.options['l dictionary'],
                    $.options['l location'],
                    abort,
                    p_definition.options,
                    ($, id, $acyclic, $cyclic) => {

                        const x2 = i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(p_definition.options),
                            {
                                'l reference': id,
                                'l location': $['l location'],
                            },
                            abort,
                        )
                        const p_constraints: t_out.Resolver_Value.state.options.D.constraints = Option_Constraints(
                            $['l entry'].constraints,
                            abort,
                            $l,
                            $p,
                        )
                        const vr = Value(
                            $['l entry']['resolver'],
                            abort,
                            {
                                'sibling property resolvers': $l['sibling property resolvers'],
                                'parent sibling property resolvers': $l['parent sibling property resolvers'],
                            },
                            {
                                'definition': x2['l entry'].value,
                                'option constraints': p_.literal.set(p_constraints),

                                'modules': $p.modules,
                                'schema imports': $p['schema imports'],
                                'resolver imports': $p['resolver imports'],
                                'signature': $p.signature,
                                'signatures': $p.signatures,
                                'list cursor': $p['list cursor'],
                                'linked entry': $p['linked entry'],
                                'current dictionary': $p['current dictionary'],
                                'current ordered dictionary': $p['current ordered dictionary'],
                            },
                        )
                        return {
                            'constraints': p_constraints,
                            //'referenced entry': x2.entry,
                            'resolver': vr,
                        }
                    },
                )


                // case 'state': return pa.ss($, ($): _i_generic.Resolved_Step<_i_out.Resolver_Relative_Value_Selection.tail.L, _i_out.Value> => pa.deprecated_block(
                // () => {
                //     return pa.deprecated_block(
                // () => {

                //         const sc_definition: _i_out.Value.state = pa.deprecated_cc(current, ($) => {
                //             if ($[0] !== 'state') {
                //                 return pa.panic(`not a 'state' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                //             }
                //             return $[1]
                //         })
                //         const p_type: _i_out.Resolver_Relative_Value_Selection.tail.L.state.type_ = pa.deprecated_cc($['type'], ($) => Module_Reference(
                //             $,
                //             {
                //                 'location 2 string': l2s,
                //                 'parameters': ({
                //                     'lookups': ({
                //                         'imports': $l.imports,
                //                         'modules': $l.modules,
                //                     }),
                //                     'modules': p_.literal.nothing(),
                //                 }),
                //             }
                //         ))
                //         const p_states: _i_out.Resolver_Relative_Value_Selection.tail.L.state.states = pa.deprecated_cc($['states'], ($) => _i_generic.resolve_dense_dictionary(
                //             $,
                //             {
                //                 'location 2 string': l2s,
                //                 'map': ($, $p) => {
                //                     const linked_entry = _i_generic.get_ entry(
                //                         _p_temp.dictionary_to_lookup(sc_definition, null),
                //                         {
                //                             'location 2 string': l2s,
                //                             'reference': {
                //                                 'key': $.key,
                //                                 'location': $['l location']
                //                             },
                //                         }
                //                     )
                //                     return p_.from.dictionary($.value).map(
                // ($) => Value_Selection_Tail(
                //                         $,
                //                         {
                //                             'location 2 string': l2s,
                //                             'parameters': {
                //                                 'lookups': $l,
                //                                 'modules': {
                //                                     'type': linked_entry.entry
                //                                 }
                //                             },
                //                         }
                //                     ))
                //                 },
                //                 'denseness benchmark': sc_definition,
                //             }
                //         ))
                //         return {
                //             'result': p_type['resulting node'],
                //             'element': ['state', ({
                //                 'definition': sc_definition,
                //                 'states': p_states,
                //                 'type': p_type,
                //             })]
                //         }
                //     })
                // }))
                return ['state', {
                    'definition': p_definition,
                    'options': p_states,
                }]
            })
            case 'text': return p_.option($, ($) => {
                // const x = $p.definition[0] !== 'text'
                //     ? i_generic.abort.state_constraint_found_expected("text", $p.definition, loc, abort)
                //     : $p.definition[1]
                return ['text', null]
            })
            // case 'type parameter': return _pt.ss($, ($) => {

            //     const x = $p.definition[0] !== 'type parameter'
            //         ? _pt.fixme_abort("not a 'type parameter' but a '", $p.definition, "' @ ", $p['location 2 string'](loc))
            //         : $p.definition[1]
            //     return ['type parameter', null]
            // })
            default: return p_.exhaustive($[0])
        }
    })
    return p_type
}
export const Relative_Value_Selection: t_signatures.Resolver_Relative_Value_Selection = ($, abort, $l, $p) => p_variables(
    () => {

        const p_path: t_out.Resolver_Relative_Value_Selection.path = i_generic.temp_map_list_with_state(
            $.path['l list'],
            $p.value,
            ($, current): t_out.Resolver_Relative_Value_Selection.path.l_value.L => {
                const sg_loc = $['l location']
                return p_change_context($['l item']['l state'], ($): t_out.Resolver_Relative_Value_Selection.path.l_value.L => {
                    switch ($[0]) {
                        case 'component': return p_.option($, ($): t_out.Resolver_Relative_Value_Selection.path.l_value.L => {

                            const sc_definition: t_out.Value.component = p_change_context(current, ($) => {
                                if ($[0] !== 'component') {
                                    return i_generic.abort.state_constraint_expected_found("component", $, sg_loc, abort)
                                }
                                return $[1]
                            })
                            return {
                                'l item': ['component', null],
                                'l results': {
                                    'result': p_change_context(sc_definition.type, ($) => {
                                        switch ($[0]) {
                                            case 'external': return p_.option($, ($) => $.module['l entry']['root value'])
                                            case 'internal acyclic': return p_.option($, ($) => $['l entry']['root value'])
                                            case 'internal': return p_.option($, ($) => $['l entry'].get_circular_dependent()['root value']) //this is safe, the modules have been resolved at this stage
                                            default: return p_.exhaustive($[0])
                                        }
                                    })
                                }
                            }
                        })
                        case 'group': return p_.option($, ($) => {
                            const sc_definition: t_out.Value.group = p_change_context(current, ($) => {
                                if ($[0] !== 'group') {
                                    return i_generic.abort.state_constraint_expected_found("group", $, sg_loc, abort)
                                }
                                return $[1]
                            })
                            const p_child = i_generic.get_entry_acyclic(
                                p_sl.acyclic.from_resolved_dictionary(sc_definition,),
                                $,
                                abort,
                            )
                            return {
                                'l item': ['group', p_child],
                                'l results': {
                                    'result': p_child['l entry'].value
                                }
                            }
                        })
                        case 'reference': return p_.option($, ($): t_out.Resolver_Relative_Value_Selection.path.l_value.L => {

                            const sc_definition: t_out.Value.reference = p_change_context(current, ($) => {
                                if ($[0] !== 'reference') {
                                    return i_generic.abort.state_constraint_expected_found("reference", $, sg_loc, abort)
                                }
                                return $[1]
                            })
                            const referent: t_out.Value_Reference = sc_definition.referent
                            const x: t_out.Value = p_change_context(sc_definition.type, ($) => {
                                switch ($[0]) {
                                    case 'derived': return p_.option($, ($) => referent.path['resulting node'])
                                    case 'selected': return p_.option($, ($) => p_change_context(referent.path['resulting node'], ($) => {
                                        switch ($[0]) {
                                            case 'dictionary': return p_.option($, ($) => $.value)
                                            default: return i_generic.abort.state_constraint_found_expected("dictionary", $, sg_loc, abort)
                                        }
                                    }))
                                    default: return p_.exhaustive($[0])
                                }
                            })
                            return {
                                'l item': ['reference', {
                                    'definition': sc_definition
                                }],
                                'l results': {
                                    'result': x
                                }
                            }
                        })
                        default: return p_.exhaustive($[0])
                    }
                })
            },
            ($) => $['l results'].result,
            (list, result) => ({
                'l value': list,
                'l results': {
                    'result': result,
                }
            }),
        )
        return {
            'path': p_path,
            'resulting node': p_path['l results'].result, // list result
        }
    })

export const Value_Constraints: t_signatures.Resolver_Value_Constraints = ($, abort, $l, $p) => {
    return p_change_context($, ($) => i_generic.temp_resolve(
        $['l dictionary'],
        ($, id, $acyclic, $cyclic) => p_change_context($, ($) => p_variables(
            () => {
                const p_start: t_out.Resolver_Value_Constraint.start = p_change_context($['l entry'].start['l state'], ($) => {
                    switch ($[0]) {
                        case 'value': return p_.option($, ($) => ['value', null])
                        case 'sibling': return p_.option($, ($) => ['sibling', i_generic.get_entry_acyclic(
                            $acyclic,
                            $,
                            abort,
                        )])
                        default: return p_.exhaustive($[0])
                    }
                })
                const p_constraint: t_out.Resolver_Value_Constraint.constraint = Constraint(
                    $['l entry'].constraint,
                    abort,
                    p_.literal.nothing(),
                    {

                        'value': p_change_context(p_start, ($) => {
                            switch ($[0]) {
                                case 'value': return p_.option($, ($) => $p.value)
                                case 'sibling': return p_.option($, ($) => p_change_context($['l entry'].constraint.type, ($) => {
                                    switch ($[0]) {
                                        case 'state': return p_.option($, ($) => $.option['l entry'].value)
                                        case 'optional value': return p_.option($, ($) => $['selected optional value'])
                                        default: return p_.exhaustive($[0])
                                    }
                                }))
                                default: return p_.exhaustive($[0])
                            }
                        }),
                    },
                )
                return ({
                    'start': p_start,
                    'constraint': p_constraint,
                })
            })),
    ))
}

export const Guaranteed_Value_Selection: t_signatures.Resolver_Guaranteed_Value_Selection = ($, abort, $l, $p) => p_variables(
    () => p_variables(
        () => {
            const start_location = $.start['l location']
            const p_start: t_out.Resolver_Guaranteed_Value_Selection.start = p_change_context($.start['l state'], ($): t_out.Resolver_Guaranteed_Value_Selection.start => {
                switch ($[0]) {
                    case 'constraint': return p_.option($, ($): t_out.Resolver_Guaranteed_Value_Selection.start => ['constraint', p_change_context($['l state'], ($): t_out.Resolver_Guaranteed_Value_Selection.start.constraint => {
                        switch ($[0]) {
                            case 'component': return p_.option($, ($) => {
                                const loc = $['property']['l location']
                                const p_sibling = p_change_context($['property'], ($) => i_generic.get_entry_acyclic(
                                    $l['sibling property resolvers'],
                                    $,
                                    abort,
                                ))

                                const x_component = p_sibling['l entry'].resolver[0] !== 'component'
                                    ? i_generic.abort.state_constraint_found_expected("component", p_sibling['l entry'].resolver, loc, abort)
                                    : p_sibling['l entry'].resolver[1]

                                const p_constraint = p_change_context($['constraint'], ($) => i_generic.get_entry_acyclic(
                                    p_sl.acyclic.from_resolved_dictionary(x_component.constraints),
                                    $,
                                    abort,
                                ))
                                return ['component', {
                                    'property': p_sibling,
                                    'constraint': p_constraint
                                }]
                            })
                            case 'reference': return p_.option($, ($) => {
                                const loc = $['property']['l location']
                                const p_sibling = p_change_context($['property'], ($) => i_generic.get_entry_acyclic(
                                    $l['sibling property resolvers'],
                                    $,
                                    abort,
                                ))

                                const x_reference = p_sibling['l entry'].resolver[0] !== 'reference'
                                    ? i_generic.abort.state_constraint_found_expected("reference", p_sibling['l entry'].resolver, loc, abort)
                                    : p_sibling['l entry'].resolver[1]

                                const x_reference_selected = x_reference.type[0] !== 'selected'
                                    ? i_generic.abort.state_constraint_expected_found("selected", x_reference.type, loc, abort)
                                    : x_reference.type[1]

                                const p_constraint = p_change_context($['constraint'], ($) => i_generic.get_entry_acyclic(
                                    p_sl.acyclic.from_resolved_dictionary(x_reference_selected.constraints),
                                    $,
                                    abort,
                                ))
                                return ['reference', {
                                    'property': p_sibling,
                                    'constraint': p_constraint
                                }]
                            })
                            default: return p_.exhaustive($[0])
                        }
                    })])
                    case 'list cursor': return p_.option($, ($) => ['list cursor', null])
                    case 'linked entry': return p_.option($, ($) => ['linked entry', null])
                    case 'option constraint': return p_.option($, ($): t_out.Resolver_Guaranteed_Value_Selection.start => {
                        const sc = p_.from.optional($p['option constraints']).decide(
                            ($) => $,
                            () => i_generic.abort.parameter_is_set_assertion("option constraints", start_location, abort)
                        )
                        return ['option constraint', i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(sc),
                            $,
                            abort,
                        )]
                    })
                    case 'parameter': return p_.option($, ($) => ['parameter', i_generic.get_entry_acyclic(
                        p_sl.acyclic.from_resolved_dictionary($p.signature['resolved parameters'].modules),
                        $,
                        abort,
                    )])
                    case 'result': return p_.option($, ($) => ['result', p_change_context($['l state'], ($): t_out.Resolver_Guaranteed_Value_Selection.start.result => {
                        switch ($[0]) {
                            case 'list': return p_.option($, ($) => {
                                const loc = $['property']['l location']
                                const p_sibling: t_out.Resolver_Guaranteed_Value_Selection.start.result.list.property = p_change_context($['property'], ($) => i_generic.get_entry_acyclic(
                                    $l['sibling property resolvers'],
                                    $,
                                    abort,
                                ))
                                const p_list_result_a = p_change_context($['list result'], ($) => p_sibling['l entry'].resolver[0] !== 'list'
                                    ? i_generic.abort.state_constraint_found_expected("list", p_sibling['l entry'].resolver, loc, abort)
                                    : p_sibling['l entry'].resolver[1])
                                const p_list_result: t_out.Resolver_Guaranteed_Value_Selection.start.result.list.list_result = p_.from.optional(p_list_result_a.result).decide(
                                    ($) => $,
                                    () => i_generic.abort.is_set_assertion("list result", loc, abort)
                                )
                                return ['list', {
                                    'property': p_sibling,
                                    'list result': p_list_result,
                                }]
                            })
                            case 'state': return p_.option($, ($) => {
                                const loc = $['property']['l location']
                                const p_sibling: t_out.Resolver_Guaranteed_Value_Selection.start.result.state.property = p_change_context($['property'], ($) => i_generic.get_entry_acyclic(
                                    $l['sibling property resolvers'],
                                    $,
                                    abort,
                                ))
                                const P_state = p_change_context($['state'], ($) => p_sibling['l entry'].resolver[0] !== 'state'
                                    ? i_generic.abort.state_constraint_found_expected("state", p_sibling['l entry'].resolver, loc, abort)
                                    : p_sibling['l entry'].resolver[1])
                                return ['state', {
                                    'property': p_sibling,
                                    'state': P_state,
                                    'result': Module_Reference(
                                        $.result,
                                        abort,
                                        {
                                            'modules': p_sl.acyclic.from_resolved_dictionary($p.modules),
                                        },
                                        {
                                            'imports': $p['schema imports'],
                                        },
                                    )
                                }]
                            })
                            case 'optional value': return p_.option($, ($) => {
                                const loc = $['property']['l location']
                                const p_sibling: t_out.Resolver_Guaranteed_Value_Selection.start.result.optional_value.property = p_change_context($['property'], ($) => i_generic.get_entry_acyclic(
                                    $l['sibling property resolvers'],
                                    $,
                                    abort,
                                ))
                                const p_optional_value = p_change_context($['optional value'], ($) => p_sibling['l entry'].resolver[0] !== 'optional'
                                    ? i_generic.abort.state_constraint_found_expected("optional", p_sibling['l entry'].resolver, loc, abort)
                                    : p_sibling['l entry'].resolver[1])
                                return ['optional value', {
                                    'property': p_sibling,
                                    'optional value': p_optional_value,
                                    'result': Module_Reference(
                                        $.result,
                                        abort,
                                        {
                                            'modules': p_sl.acyclic.from_resolved_dictionary($p.modules),
                                        },
                                        {
                                            'imports': $p['schema imports'],
                                        },
                                    )
                                }]
                            })
                            default: return p_.exhaustive($[0])
                        }
                    })])
                    case 'sibling': return p_.option($, ($): t_out.Resolver_Guaranteed_Value_Selection.start => ['sibling', i_generic.get_entry_acyclic(
                        $l['sibling property resolvers'],
                        $,
                        abort,
                    )])
                    case 'parent sibling': return p_.option($, ($): t_out.Resolver_Guaranteed_Value_Selection.start => ['parent sibling', i_generic.get_entry_acyclic(
                        $l['parent sibling property resolvers'],
                        $,
                        abort,
                    )])
                    default: return p_.exhaustive($[0])
                }
            })
            const p_tail = Relative_Value_Selection(
                $.tail,
                abort,
                p_.literal.nothing(),
                {
                    'value': p_variables(
                        () => {
                            const pvs = ($: t_out.Resolver_Possible_Value_Selection) => p_change_context($, ($): t_out.Module => {
                                return p_change_context($, ($) => {
                                    switch ($[0]) {
                                        case 'parameter': return p_.option($, ($) => $['l entry'].module['resulting module'])
                                        case 'result': return p_.option($, ($) => p_change_context($, ($) => {
                                            switch ($[0]) {
                                                case 'state': return p_.option($, ($) => $.result['resulting module'])
                                                case 'optional value': return p_.option($, ($) => $.result['resulting module'])
                                                default: return p_.exhaustive($[0])
                                            }
                                        }))
                                        default: return p_.exhaustive($[0])
                                    }
                                })
                            })['root value']
                            const start_loc = $.start['l location']
                            const gvs_start = ($: t_out.Resolver_Guaranteed_Value_Selection.start) => p_change_context($, ($): t_out.Value => {
                                switch ($[0]) {
                                    case 'constraint': return p_.option($, ($) => p_change_context($, ($) => {
                                        switch ($[0]) {
                                            case 'component': return p_.option($, ($) => p_change_context($.constraint['l entry'].constraint.type, ($) => {
                                                switch ($[0]) {
                                                    case 'state': return p_.option($, ($) => $.option['l entry'].value)
                                                    case 'optional value': return p_.option($, ($) => $['selected optional value'])
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }))
                                            case 'reference': return p_.option($, ($) => p_change_context($.constraint['l entry'].constraint.type, ($) => {
                                                switch ($[0]) {
                                                    case 'state': return p_.option($, ($) => $.option['l entry'].value)
                                                    case 'optional value': return p_.option($, ($) => $['selected optional value'])

                                                    default: return p_.exhaustive($[0])
                                                }
                                            }))

                                            default: return p_.exhaustive($[0])
                                        }
                                    }))
                                    case 'parameter': return p_.option($, ($) => $['l entry'].module['resulting module']['root value'])
                                    case 'result': return p_.option($, ($) => p_change_context($, ($) => {
                                        switch ($[0]) {
                                            case 'state': return p_.option($, ($) => $.result['resulting module']['root value'])
                                            case 'optional value': return p_.option($, ($) => $.result['resulting module']['root value'])
                                            case 'list': return p_.option($, ($) => $['list result']['resulting module']['root value'])
                                            default: return p_.exhaustive($[0])
                                        }
                                    }))
                                    case 'list cursor': return p_.option($, ($) => p_.from.optional($p['list cursor']).decide(
                                        ($) => $['resulting module']['root value'],
                                        () => i_generic.abort.parameter_is_set_assertion("list cursor", start_loc, abort)
                                    ))
                                    case 'linked entry': return p_.option($, ($) => p_.from.optional($p['linked entry']).decide(
                                        ($) => $['resulting dictionary'].value,
                                        () => i_generic.abort.parameter_is_set_assertion("linked entry", start_loc, abort)
                                    ))
                                    case 'option constraint': return p_.option($, ($) => p_change_context($['l entry'], ($) => {
                                        switch ($[0]) {
                                            case 'state': return p_.option($, ($) => $.option['l entry'].value)
                                            case 'assert is set': return p_.option($, ($) => pvs($))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }))
                                    case 'sibling': return p_.option($, ($) => $['l entry'].definition.value)
                                    case 'parent sibling': return p_.option($, ($) => $['l entry'].definition.value)
                                    default: return p_.exhaustive($[0])
                                }
                            })
                            return gvs_start(p_start)
                        })
                },
            )
            const p_resulting_type: t_out.Value = p_tail['resulting node']
            return ({
                'start': p_start,
                'tail': p_tail,
                'resulting node': p_resulting_type,
            })
        }))

export const Option_Constraints: t_signatures.Resolver_Option_Constraints = ($, abort, $l, $p) => {
    return p_change_context($, ($) => i_generic.temp_resolve(
        $['l dictionary'],
        ($, id, $acyclic, $cyclic) => p_change_context($, ($) => p_change_context($['l entry']['l state'], ($) => {
            switch ($[0]) {
                case 'state': return p_.option($, ($) => ['state', p_variables(
                    () => {
                        const loc = $.selection.start['l location']
                        const p_selection: t_out.Resolver_Option_Constraints.D.state.selection = p_change_context($['selection'], ($) => Guaranteed_Value_Selection(
                            $,
                            abort,
                            $l,
                            $p,
                        ))
                        const p_selected_state = p_selection['resulting node'][0] !== 'state' // component constraint ('selection')
                            ? i_generic.abort.state_constraint_found_expected(
                                "state",
                                p_selection['resulting node'],
                                loc,
                                abort,
                            )
                            : p_selection['resulting node'][1]
                        const p_option: t_out.Resolver_Option_Constraints.D.state.option = p_change_context($['option'], ($) => i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(p_selected_state.options),
                            $,
                            abort,
                        ))
                        return ({
                            'selected state': p_selected_state,
                            'selection': p_selection,
                            'option': p_option,
                        })
                    })])
                case 'assert is set': return p_.option($, ($) => ['assert is set', Possibly_Optional(
                    $,
                    abort,
                    $l,
                    $p,
                )])
                default: return p_.exhaustive($[0])
            }
        })),
    ))
}

export const Constraint: t_signatures.Resolver_Constraint = ($, abort, $l, $p) => {
    const p_selection: t_out.Resolver_Constraint.selection = p_change_context($['selection'], ($) => Relative_Value_Selection(
        $,
        abort,
        p_.literal.nothing(),
        {
            'value': $p.value,
        }
    ))
    const loc = $.type['l location']
    const p_type: t_out.Resolver_Constraint.type_ = p_change_context($.type, ($) => p_change_context($['l state'], ($) => {
        switch ($[0]) {
            case 'state': return p_.option($, ($) => {
                const p_selected_state = p_selection['resulting node'][0] !== 'state' // component constraint ('selection')
                    ? i_generic.abort.state_constraint_found_expected(
                        "state",
                        p_selection['resulting node'],
                        loc,
                        abort,
                    )
                    : p_selection['resulting node'][1]
                const p_option: t_out.Resolver_Constraint.type_.state.option = p_change_context($['option'], ($) => i_generic.get_entry_acyclic(
                    p_sl.acyclic.from_resolved_dictionary(p_selected_state.options),
                    $,
                    abort,
                ))
                return ['state', {
                    'selected state': p_selected_state,
                    'option': p_option,
                }]
            })
            case 'optional value': return p_.option($, ($) => {
                const p_selected_optional_value = p_selection['resulting node'][0] !== 'optional' // component constraint ('selection')
                    ? i_generic.abort.state_constraint_found_expected(
                        "optional",
                        p_selection['resulting node'],
                        loc,
                        abort,
                    )
                    : p_selection['resulting node'][1]
                return ['optional value', {
                    'selected optional value': p_selected_optional_value,
                }]
            })
            default: return p_.exhaustive($[0])
        }
    }))
    return {
        'selection': p_selection,
        'type': p_type,
    }
}

export const Optional_Value_Initialization: t_signatures.Resolver_Optional_Value_Initialization = ($, abort, $l, $p) => p_variables(
    () => p_change_context($['l state'], ($) => {
        switch ($[0]) {
            case 'not set': return p_.option($, ($) => ['not set', null])
            case 'set': return p_.option($, ($) => ['set', Guaranteed_Value_Selection($, abort, $l, $p)])
            case 'selection': return p_.option($, ($): t_out.Resolver_Optional_Value_Initialization => {
                return ['selection', Possibly_Optional($, abort, $l, $p)]
            })
            default: return p_.exhaustive($[0])
        }
    }))

export const Possibly_Optional: t_signatures.Resolver_Possible_Value_Selection = ($, abort, $l, $p) => p_variables(
    () => {
        return p_change_context($['l state'], ($) => {
            switch ($[0]) {
                case 'parameter': return p_.option($, ($) => ['parameter', i_generic.get_entry_acyclic(
                    p_sl.acyclic.from_resolved_dictionary($p.signature['resolved parameters'].modules),
                    $,
                    abort,
                )])
                case 'result': return p_.option($, ($) => ['result', p_change_context($['l state'], ($): t_out.Resolver_Possible_Value_Selection.result => {
                    switch ($[0]) {
                        case 'state': return p_.option($, ($) => {
                            const loc = $['property']['l location']
                            const p_sibling: t_out.Resolver_Possible_Value_Selection.result.state.property = p_change_context($['property'], ($) => i_generic.get_entry_acyclic(
                                $l['sibling property resolvers'],
                                $,
                                abort,
                            ))
                            const P_state = p_change_context($['state'], ($) => p_sibling['l entry'].resolver[0] !== 'state'
                                ? i_generic.abort.state_constraint_found_expected("state", p_sibling['l entry'].resolver, loc, abort)
                                : p_sibling['l entry'].resolver[1])

                            const p_result = Module_Reference(
                                $.result,
                                abort,
                                {
                                    'modules': p_sl.acyclic.from_resolved_dictionary($p.modules),
                                },
                                {
                                    'imports': $p['schema imports'],
                                },
                            )
                            return ['state', {
                                'property': p_sibling,
                                'state': P_state,
                                'result': p_result,
                            }]
                        })
                        case 'optional value': return p_.option($, ($) => {
                            const loc = $['property']['l location']
                            const p_sibling: t_out.Resolver_Possible_Value_Selection.result.optional_value.property = p_change_context($['property'], ($) => i_generic.get_entry_acyclic(
                                $l['sibling property resolvers'],
                                $,
                                abort,
                            ))
                            const p_optional_value = p_change_context($['optional value'], ($) => p_sibling['l entry'].resolver[0] !== 'optional'
                                ? i_generic.abort.state_constraint_found_expected("optional", p_sibling['l entry'].resolver, loc, abort)
                                : p_sibling['l entry'].resolver[1])
                            const p_result = Module_Reference(
                                $.result,
                                abort,
                                {
                                    'modules': p_sl.acyclic.from_resolved_dictionary($p.modules),
                                },
                                {
                                    'imports': $p['schema imports'],
                                },
                            )
                            return ['optional value', {
                                'property': p_sibling,
                                'optional value': p_optional_value,
                                'result': p_result,
                            }]
                        })
                        default: return p_.exhaustive($[0])
                    }
                })])
                default: return p_.exhaustive($[0])
            }
        })
    })

export const Lookup_Selection: t_signatures.Resolver_Lookup_Selection = ($, abort, $l, $p) => p_variables(
    () => p_variables(
        () => {
            const loc = $.type['l location']
            const p_type: t_out.Resolver_Lookup_Selection.type_ = p_change_context($['type'], ($) => p_change_context($['l state'], ($): t_out.Resolver_Lookup_Selection.type_ => {
                switch ($[0]) {
                    case 'acyclic': return p_.option($, ($): t_out.Resolver_Lookup_Selection.type_ => ['acyclic', p_.from.state($['l state']).decide(
                        ($): t_out.Resolver_Lookup_Selection.type_.acyclic => {
                            switch ($[0]) {
                                case 'resolved dictionary': return p_.option($, ($) => {
                                    const p_selection = Guaranteed_Value_Selection(
                                        $.selection,
                                        abort,
                                        $l,
                                        $p,
                                    )

                                    const p_selected_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint (selection)
                                        ? i_generic.abort.state_constraint_found_expected(
                                            "dictionary",
                                            p_selection['resulting node'],
                                            $.selection.start['l location'], //$['selected dictionary'].location,
                                            abort,
                                        )
                                        : p_selection['resulting node'][1]

                                    return ['resolved dictionary', {
                                        'selection': p_selection,
                                        'selected dictionary': p_selected_dictionary,
                                    }]
                                })
                                case 'siblings': return p_.option($, ($) => ['siblings', p_.from.optional($p['current dictionary']).decide(
                                    ($) => $,
                                    () => i_generic.abort.parameter_is_set_assertion("current directory", loc, abort)
                                )])
                                default: return p_.exhaustive($[0])
                            }
                        })])
                    case 'cyclic': return p_.option($, ($) => ['cyclic', p_.from.state($['l state']).decide(
                        ($): t_out.Resolver_Lookup_Selection.type_.cyclic => {
                            switch ($[0]) {
                                case 'siblings': return p_.option($, ($) => ['siblings', p_.from.optional($p['current dictionary']).decide(
                                    ($) => $,
                                    () => i_generic.abort.parameter_is_set_assertion("current directory", loc, abort)
                                )])
                                default: return p_.exhaustive($[0])
                            }
                        })])
                    case 'parameter': return p_.option($, ($) => ['parameter', i_generic.get_entry_acyclic(
                        p_sl.acyclic.from_resolved_dictionary($p.signature['resolved parameters'].lookups),
                        $,
                        abort
                    )])
                    default: return p_.exhaustive($[0])
                }
            }))
            const p_resulting_dictionary = p_change_context(p_type, ($): t_out.Value.dictionary => {
                switch ($[0]) {
                    case 'acyclic': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'siblings': return p_.option($, ($) => $)
                                case 'resolved dictionary': return p_.option($, ($) => $['selected dictionary'])
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'cyclic': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'siblings': return p_.option($, ($) => $)
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'parameter': return p_.option($, ($) => $['l entry'].dictionary)
                    default: return p_.exhaustive($[0])
                }
            })
            return ({
                'type': p_type,
                'resulting dictionary': p_resulting_dictionary,
            })
        }))

export const Module_Reference: t_signatures.Module_Reference = ($, abort, $l, $p) => {
    const x: t_out.Module_Reference.location = p_change_context($.location['l state'], ($) => {
        switch ($[0]) {
            case 'external': return p_.option($, ($): t_out.Module_Reference.location => {
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
    const p_resulting_type = p_change_context(x, ($): t_out.Module => {
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