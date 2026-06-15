import * as pt from 'pareto-core/dist/assign'
import * as p_sl from 'pareto-core/dist/select_static_lookup'
import p_variables from 'pareto-core/dist/specials/variables'
import p_change_context from 'pareto-core/dist/specials/change_context'
import p_create_symbol from 'pareto-core/dist/specials/create_symbol'

import * as t_signatures from "../../../../interface/generated/liana/schemas/schema/signatures/resolved/refiners/unresolved"

import * as t_out from "../../../../interface/generated/liana/schemas/schema/data/resolved"

import * as _i_generic from "../../resolve_generic"


export const Value: t_signatures.Resolver_Value = ($, abort, $l, $p) => {
    const loc = $['l location']
    const p_type = p_change_context($['l state'], ($): t_out.Resolver_Value => {
        switch ($[0]) {
            case 'component': return pt.ss($, ($): t_out.Resolver_Value => {
                const x = $p.definition[0] !== 'component'
                    ? _i_generic.abort.state_constraint_found_expected(
                        "component",
                        $p.definition,
                        loc,
                        abort,
                    )
                    : $p.definition[1]
                const p_location = p_change_context($.location['l state'], ($): t_out.Resolver_Value.component.location => {
                    switch ($[0]) {
                        case 'external': return pt.ss($, ($) => {
                            const sc_schema_import = $p['schema imports'].__decide(
                                ($) => $,
                                () => _i_generic.abort.parameter_is_set_assertion("imports", loc, abort)
                            )
                            const sc_resolver_import = $p['resolver imports'].__decide(
                                ($) => $,
                                () => _i_generic.abort.parameter_is_set_assertion("imports", loc, abort)
                            )
                            const p_schema_import = _i_generic.get_entry_acyclic(
                                p_sl.acyclic.from_resolved_dictionary(sc_schema_import),
                                $['schema import'],
                                abort,
                            )
                            const p_resolver_import = _i_generic.get_entry_acyclic(
                                p_sl.acyclic.from_resolved_dictionary(sc_resolver_import),
                                $['resolver import'],
                                abort,
                            )
                            const pc_constrained: t_out.Schema.complexity.constrained = p_change_context(p_schema_import['l entry'].schema.complexity, ($) => {
                                switch ($[0]) {
                                    case 'constrained': return pt.ss($, ($) => $)
                                    default: return _i_generic.abort.state_constraint_found_expected("constrained", $, loc, abort)
                                }
                            })
                            return ['external', {
                                'schema import': p_schema_import,
                                'resolver import': p_resolver_import,
                                'signature': _i_generic.get_entry_acyclic(
                                    p_sl.acyclic.from_resolved_dictionary(pc_constrained.signatures.signatures),
                                    $.signature,
                                    abort,
                                )
                            }]
                        })
                        case 'internal': return pt.ss($, ($) => ['internal', _i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(
                                $p['signatures'],
                            ),
                            $,
                            abort,
                        )])
                        default: return pt.au($[0])
                    }
                })
                const p_signature: t_out.Resolver_Value.component.signature = p_change_context(p_location, ($) => {
                    switch ($[0]) {
                        case 'external': return pt.ss($, ($) => $.signature['l entry'])
                        case 'internal': return pt.ss($, ($) => $['l entry'])
                        default: return pt.au($[0])
                    }
                })
                const x_type: t_out.Modules.D = p_change_context(x.type, ($) => {
                    switch ($[0]) {
                        case 'external': return pt.ss($, ($) => $.module['l entry'])
                        case 'internal acyclic': return pt.ss($, ($) => $['l entry'])
                        case 'internal': return pt.ss($, ($) => $['l entry'].get_circular_dependent())
                        default: return pt.au($[0])
                    }
                })
                if (p_signature.module !== x_type) {
                    _i_generic.abort.same_node_constraint("module.value", loc, abort)
                }
                const p_arguments: t_out.Resolver_Value.component.arguments_ = $.arguments.__decide(
                    ($) => {
                        const x: t_out.Resolver_Value.component.arguments_.O = {
                            'lookups': $.lookups.__decide(
                                ($) => pt.literal.set(_i_generic.resolve_dense_dictionary(
                                    $['l dictionary'],
                                    $['l location'],
                                    abort,
                                    p_signature['resolved parameters'].lookups,
                                    ($, id, $acyclic, $cyclic) => p_change_context($, ($) => {
                                        //do additional validation
                                        return p_change_context($['l entry']['l state'], ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D => {
                                            switch ($[0]) {
                                                case 'acyclic': return pt.ss($, ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D => ['acyclic', pt.decide.state($['l state'], ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D.acyclic => {
                                                    switch ($[0]) {
                                                        case 'not set': return pt.ss($, ($) => ['not set', null])
                                                        default: return pt.au($[0])
                                                    }
                                                })])
                                                case 'cyclic': return pt.ss($, ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D => ['cyclic', pt.decide.state($['l state'], ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D.cyclic => {
                                                    switch ($[0]) {
                                                        case 'not set': return pt.ss($, ($) => ['not set', null])
                                                        default: return pt.au($[0])
                                                    }
                                                })])
                                                case 'stack': return pt.ss($, ($) => ['stack', pt.decide.state($['l state'], ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D.stack => {
                                                    switch ($[0]) {
                                                        case 'empty': return pt.ss($, ($) => ['empty', null])
                                                        case 'push': return pt.ss($, ($) => {
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
                                                        default: return pt.au($[0])
                                                    }
                                                })])
                                                case 'selection': return pt.ss($, ($) => ['selection', Lookup_Selection(
                                                    $,
                                                    abort,
                                                    $l,
                                                    $p,
                                                )])
                                                default: return pt.au($[0])
                                            }
                                        })
                                    }),
                                )),
                                () => {
                                    {
                                        //additional validation
                                        if (p_signature['resolved parameters'].lookups !== $p.signature['resolved parameters'].lookups) {

                                            _i_generic.abort.same_node_constraint("lookups", loc, abort)
                                        }
                                    }
                                    return pt.literal.not_set()
                                }
                            ),
                            'modules': $.modules.__decide(
                                ($) => {
                                    const values_location = $['l location']

                                    return pt.literal.set(_i_generic.resolve_dense_dictionary(
                                        $['l dictionary'],
                                        $['l location'],
                                        abort,
                                        p_signature['resolved parameters'].modules,
                                        ($, id, $acyclic, $cyclic) => p_change_context($, ($) => {
                                            const linked_entry = _i_generic.get_entry_acyclic(
                                                p_sl.acyclic.from_resolved_dictionary(p_signature['resolved parameters'].modules),
                                                {
                                                    'l reference': id,
                                                    'l location': $['l location'],
                                                },
                                                abort,
                                            )
                                            const out = p_change_context($['l entry']['l state'], ($): t_out.Resolver_Value.component.arguments_.O.modules.O.D => {
                                                switch ($[0]) {
                                                    case 'optional': return pt.ss($, ($) => ['optional', Optional_Value_Initialization(
                                                        $,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )])
                                                    case 'parameter': return pt.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                                                        p_sl.acyclic.from_resolved_dictionary($p.signature['resolved parameters'].modules),
                                                        $,
                                                        abort,
                                                    )])
                                                    case 'required': return pt.ss($, ($) => ['required', Guaranteed_Value_Selection(
                                                        $,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )])
                                                    default: return pt.au($[0])
                                                }
                                            })
                                            {
                                                //additional validation
                                                const benchmark = linked_entry['l entry']
                                                const focus = out

                                                const walk_path_till_end = ($: t_out.Value): t_out.Value => {
                                                    return p_change_context($, ($) => {
                                                        switch ($[0]) {
                                                            case 'component': return pt.ss($, ($) => p_change_context($.type, ($) => {
                                                                switch ($[0]) {
                                                                    case 'external': return pt.ss($, ($) => $.module['l entry']['root value'])
                                                                    case 'internal acyclic': return pt.ss($, ($) => $['l entry']['root value'])
                                                                    case 'internal': return pt.ss($, ($) => $['l entry'].get_circular_dependent()['root value']) //this is safe, once we are resolving value resolvers, all value are resolved
                                                                    default: return pt.au($[0])
                                                                }
                                                            }))
                                                            case 'reference': return pt.ss($, ($) => $.referent.path['resulting node'])
                                                            default: return $
                                                        }
                                                    })
                                                }

                                                p_change_context(focus, ($) => {
                                                    switch ($[0]) {
                                                        case 'optional': return pt.ss($, ($) => {

                                                            if (benchmark.presence[0] !== 'optional') {
                                                                _i_generic.abort.state_constraint_found_expected("optional", benchmark.presence, values_location, abort)
                                                            }

                                                            p_change_context($, ($) => {
                                                                switch ($[0]) {
                                                                    case 'not set': return pt.ss($, ($) => {
                                                                        return null
                                                                    })
                                                                    case 'selection': return pt.ss($, ($) => {
                                                                        //FIXME
                                                                        p_change_context($, ($) => {
                                                                            switch ($[0]) {
                                                                                case 'parameter': return pt.ss($, ($) => {
                                                                                    return null
                                                                                })
                                                                                case 'result': return pt.ss($, ($) => {
                                                                                    return null
                                                                                })
                                                                                default: pt.au($[0])
                                                                            }
                                                                        })
                                                                        return null
                                                                    })
                                                                    case 'set': return pt.ss($, ($) => {

                                                                        if (walk_path_till_end(benchmark.module['resulting module']['root value']) !== walk_path_till_end($.tail['resulting node'])) {
                                                                            return _i_generic.abort.same_node_constraint(
                                                                                "required argument data type",
                                                                                values_location,
                                                                                abort,
                                                                            )
                                                                        }
                                                                        return null
                                                                    })
                                                                    default: pt.au($[0])
                                                                }
                                                            })
                                                            return null

                                                            //FIX validate that modules are the same
                                                        })
                                                        case 'parameter': return pt.ss($, ($) => {
                                                            if ($['l entry'].presence[0] !== benchmark.presence[0]) {
                                                                return _i_generic.abort.same_node_constraint(
                                                                    "parameter presence",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                            if ($['l entry'].module['resulting module'] !== benchmark.module['resulting module']) {
                                                                return _i_generic.abort.same_node_constraint(
                                                                    "parameter data type",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                            return null
                                                        })
                                                        case 'required': return pt.ss($, ($) => {
                                                            if (benchmark.presence[0] !== 'required') {
                                                                _i_generic.abort.state_constraint_found_expected("required", benchmark.presence, values_location, abort)
                                                            }
                                                            if (walk_path_till_end(benchmark.module['resulting module']['root value']) !== walk_path_till_end($.tail['resulting node'])) {
                                                                return _i_generic.abort.same_node_constraint(
                                                                    "required argument data type",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                            return null
                                                        })
                                                        default: return pt.au($[0])
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
                                            return _i_generic.abort.same_node_constraint(
                                                "value parameters",
                                                loc,
                                                abort,
                                            )
                                        }
                                    }
                                    return pt.literal.not_set()
                                }
                            ),
                        }
                        return pt.literal.set(x)
                    },
                    () => {
                        {
                            //additional validation
                            if (p_signature['resolved parameters'].lookups !== $p.signature['resolved parameters'].lookups) {
                                return _i_generic.abort.same_node_constraint(
                                    "lookup parameters",
                                    loc,
                                    abort,
                                )
                            }
                            if (p_signature['resolved parameters'].modules !== $p.signature['resolved parameters'].modules) {
                                return _i_generic.abort.same_node_constraint(
                                    "value parameters",
                                    loc,
                                    abort,
                                )
                            }
                        }

                        return pt.literal.not_set()
                    }
                )
                const p_constraints = Value_Constraints(
                    $.constraints,
                    abort,
                    p_create_symbol(),
                    {
                        'value': p_change_context(p_location, ($): t_out.Value => {
                            switch ($[0]) {
                                case 'external': return pt.ss($, ($) => $.signature['l entry'].module['root value'])
                                case 'internal': return pt.ss($, ($) => $['l entry'].module['root value'])
                                default: return pt.au($[0])
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
            case 'dictionary': return pt.ss($, ($) => {
                const p_definition = $p.definition[0] !== 'dictionary'
                    ? _i_generic.abort.state_constraint_found_expected("dictionary", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_benchmark = _i_generic.temp_optional_map(
                    $.benchmark,
                    ($): t_out.Resolver_Value.dictionary.benchmark.O => {
                        const p_selection = Guaranteed_Value_Selection(
                            $.selection,
                            abort,
                            $l,
                            $p,
                        )

                        const p_resulting_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint ('selection')
                            ? _i_generic.abort.state_constraint_found_expected("dictionary", p_selection['resulting node'], loc, abort)
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
                            'linked entry': p_benchmark.__decide( //optional value result ('benchmark')
                                ($) => pt.literal.set($),
                                () => $p['linked entry']
                            ),
                            'definition': p_definition.value,
                            'current dictionary': pt.literal.set(p_definition),
                            'current ordered dictionary': pt.literal.set(p_definition),//FIXME: is it ordered

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
            case 'group': return pt.ss($, ($) => {
                const x = $p.definition[0] !== 'group'
                    ? _i_generic.abort.state_constraint_found_expected("group", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_properties = _i_generic.resolve_dense_dictionary(
                    $['l dictionary'],
                    $['l location'],
                    abort,
                    x,
                    ($, id, $acyclic, $cyclic): t_out.Resolver_Value_Group.D => {

                        const p_definition = _i_generic.get_entry_acyclic(
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
            case 'list': return pt.ss($, ($) => {
                const p_definition = $p.definition[0] !== 'list'
                    ? _i_generic.abort.state_constraint_found_expected("list", $p.definition, loc, abort)
                    : $p.definition[1]
                const p_result = _i_generic.temp_optional_map(
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
                        'list cursor': p_result.__decide( // optional value result ('result')
                            ($) => pt.literal.set($),
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
            case 'nothing': return pt.ss($, ($) => {
                const x = $p.definition[0] !== 'nothing'
                    ? _i_generic.abort.state_constraint_found_expected("nothing", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['nothing', null]
            })
            case 'simple': return pt.ss($, ($) => {
                const x = $p.definition[0] !== 'simple'
                    ? _i_generic.abort.state_constraint_found_expected("simple", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['simple', null]
            })
            case 'optional': return pt.ss($, ($) => {
                const x = $p.definition[0] !== 'optional'
                    ? _i_generic.abort.state_constraint_found_expected("optional", $p.definition, loc, abort)
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
                        'option constraints': pt.literal.set(p_constraints),

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
            case 'reference': return pt.ss($, ($): t_out.Resolver_Value => {
                const p_definition = $p.definition[0] !== 'reference'
                    ? _i_generic.abort.state_constraint_found_expected("reference", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['reference', {
                    'definition': p_definition,
                    'type': p_change_context($.type['l state'], ($): t_out.Resolver_Value.reference.type_ => {
                        switch ($[0]) {
                            case 'derived': return pt.ss($, ($) => {
                                const p_definition_2 = p_definition.type[0] !== 'derived'
                                    ? _i_generic.abort.state_constraint_found_expected("derived", p_definition.type, loc, abort)
                                    : p_definition.type[1]
                                return ['derived', {
                                    'value': Guaranteed_Value_Selection(
                                        $.value,
                                        abort,
                                        $l,
                                        $p,
                                    )
                                }]
                            })
                            case 'selected': return pt.ss($, ($) => {
                                const p_definition_2 = p_definition.type[0] !== 'selected'
                                    ? _i_generic.abort.state_constraint_found_expected("selected", p_definition.type, loc, abort)
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
                                    p_create_symbol(),
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
                            default: return pt.au($[0])
                        }
                    })
                }]
            })
            case 'state': return pt.ss($, ($): t_out.Resolver_Value => {
                const p_definition = $p.definition[0] !== 'state'
                    ? _i_generic.abort.state_constraint_found_expected("state", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_states: t_out.Resolver_Value.state.options = _i_generic.resolve_dense_dictionary(
                    $.options['l dictionary'],
                    $.options['l location'],
                    abort,
                    p_definition.options,
                    ($, id, $acyclic, $cyclic) => {

                        const x2 = _i_generic.get_entry_acyclic(
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
                                'option constraints': pt.literal.set(p_constraints),

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


                // case 'state': return pa.ss($, ($): _i_generic.Resolved_Step<_i_out.Resolver_Relative_Value_Selection.tail.L, _i_out.Value> => pa.deprecated_block(() => {
                //     return pa.deprecated_block(() => {

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
                //                     'modules': p_create_symbol(),
                //                 }),
                //             }
                //         ))
                //         const p_states: _i_out.Resolver_Relative_Value_Selection.tail.L.state.states = pa.deprecated_cc($['states'], ($) => _i_generic.resolve_dense_dictionary(
                //             $,
                //             {
                //                 'location 2 string': l2s,
                //                 'map': ($, $p) => {
                //                     const linked_entry = _i_generic.get_entry(
                //                         _p_temp.dictionary_to_lookup(sc_definition, null),
                //                         {
                //                             'location 2 string': l2s,
                //                             'reference': {
                //                                 'key': $.key,
                //                                 'location': $['l location']
                //                             },
                //                         }
                //                     )
                //                     return $.value.__d_map(($) => Value_Selection_Tail(
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
            case 'text': return pt.ss($, ($) => {
                const x = $p.definition[0] !== 'text'
                    ? _i_generic.abort.state_constraint_found_expected("text", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['text', null]
            })
            // case 'type parameter': return _pt.ss($, ($) => {

            //     const x = $p.definition[0] !== 'type parameter'
            //         ? _pt.fixme_abort("not a 'type parameter' but a '", $p.definition, "' @ ", $p['location 2 string'](loc))
            //         : $p.definition[1]
            //     return ['type parameter', null]
            // })
            default: return pt.au($[0])
        }
    })
    return p_type
}
export const Relative_Value_Selection: t_signatures.Resolver_Relative_Value_Selection = ($, abort, $l, $p) => p_variables(() => {

    const p_path: t_out.Resolver_Relative_Value_Selection.path = _i_generic.temp_map_list_with_state(
        $.path['l list'],
        $p.value,
        ($, current): t_out.Resolver_Relative_Value_Selection.path.l_value.L => {
            const sg_loc = $['l location']
            return p_change_context($['l item']['l state'], ($): t_out.Resolver_Relative_Value_Selection.path.l_value.L => {
                switch ($[0]) {
                    case 'component': return pt.ss($, ($): t_out.Resolver_Relative_Value_Selection.path.l_value.L => {

                        const sc_definition: t_out.Value.component = p_change_context(current, ($) => {
                            if ($[0] !== 'component') {
                                return _i_generic.abort.state_constraint_expected_found("component", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            'l item': ['component', null],
                            'l results': {
                                'result': p_change_context(sc_definition.type, ($) => {
                                    switch ($[0]) {
                                        case 'external': return pt.ss($, ($) => $.module['l entry']['root value'])
                                        case 'internal acyclic': return pt.ss($, ($) => $['l entry']['root value'])
                                        case 'internal': return pt.ss($, ($) => $['l entry'].get_circular_dependent()['root value']) //this is safe, the modules have been resolved at this stage
                                        default: return pt.au($[0])
                                    }
                                })
                            }
                        }
                    })
                    case 'group': return pt.ss($, ($) => {
                        const sc_definition: t_out.Value.group = p_change_context(current, ($) => {
                            if ($[0] !== 'group') {
                                return _i_generic.abort.state_constraint_expected_found("group", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry_acyclic(
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
                    case 'reference': return pt.ss($, ($): t_out.Resolver_Relative_Value_Selection.path.l_value.L => {

                        const sc_definition: t_out.Value.reference = p_change_context(current, ($) => {
                            if ($[0] !== 'reference') {
                                return _i_generic.abort.state_constraint_expected_found("reference", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const referent: t_out.Value_Reference = sc_definition.referent
                        const x: t_out.Value = p_change_context(sc_definition.type, ($) => {
                            switch ($[0]) {
                                case 'derived': return pt.ss($, ($) => referent.path['resulting node'])
                                case 'selected': return pt.ss($, ($) => p_change_context(referent.path['resulting node'], ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return pt.ss($, ($) => $.value)
                                        default: return _i_generic.abort.state_constraint_found_expected("dictionary", $, sg_loc, abort)
                                    }
                                }))
                                default: return pt.au($[0])
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
                    default: return pt.au($[0])
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
    return p_change_context($, ($) => _i_generic.temp_resolve(
        $['l dictionary'],
        ($, id, $acyclic, $cyclic) => p_change_context($, ($) => p_variables(() => {
            const p_start: t_out.Resolver_Value_Constraint.start = p_change_context($['l entry'].start['l state'], ($) => {
                switch ($[0]) {
                    case 'value': return pt.ss($, ($) => ['value', null])
                    case 'sibling': return pt.ss($, ($) => ['sibling', _i_generic.get_entry_acyclic(
                        $acyclic,
                        $,
                        abort,
                    )])
                    default: return pt.au($[0])
                }
            })
            const p_constraint: t_out.Resolver_Value_Constraint.constraint = Constraint(
                $['l entry'].constraint,
                abort,
                p_create_symbol(),
                {

                    'value': p_change_context(p_start, ($) => {
                        switch ($[0]) {
                            case 'value': return pt.ss($, ($) => $p.value)
                            case 'sibling': return pt.ss($, ($) => p_change_context($['l entry'].constraint.type, ($) => {
                                switch ($[0]) {
                                    case 'state': return pt.ss($, ($) => $.option['l entry'].value)
                                    case 'optional value': return pt.ss($, ($) => $['selected optional value'])
                                    default: return pt.au($[0])
                                }
                            }))
                            default: return pt.au($[0])
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

export const Guaranteed_Value_Selection: t_signatures.Resolver_Guaranteed_Value_Selection = ($, abort, $l, $p) => p_variables(() => p_variables(() => {
    const start_location = $.start['l location']
    const p_start: t_out.Resolver_Guaranteed_Value_Selection.start = p_change_context($.start['l state'], ($): t_out.Resolver_Guaranteed_Value_Selection.start => {
        switch ($[0]) {
            case 'constraint': return pt.ss($, ($): t_out.Resolver_Guaranteed_Value_Selection.start => ['constraint', p_change_context($['l state'], ($): t_out.Resolver_Guaranteed_Value_Selection.start.constraint => {
                switch ($[0]) {
                    case 'component': return pt.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling = p_change_context($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))

                        const x_component = p_sibling['l entry'].resolver[0] !== 'component'
                            ? _i_generic.abort.state_constraint_found_expected("component", p_sibling['l entry'].resolver, loc, abort)
                            : p_sibling['l entry'].resolver[1]

                        const p_constraint = p_change_context($['constraint'], ($) => _i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(x_component.constraints),
                            $,
                            abort,
                        ))
                        return ['component', {
                            'property': p_sibling,
                            'constraint': p_constraint
                        }]
                    })
                    case 'reference': return pt.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling = p_change_context($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))

                        const x_reference = p_sibling['l entry'].resolver[0] !== 'reference'
                            ? _i_generic.abort.state_constraint_found_expected("reference", p_sibling['l entry'].resolver, loc, abort)
                            : p_sibling['l entry'].resolver[1]

                        const x_reference_selected = x_reference.type[0] !== 'selected'
                            ? _i_generic.abort.state_constraint_expected_found("selected", x_reference.type, loc, abort)
                            : x_reference.type[1]

                        const p_constraint = p_change_context($['constraint'], ($) => _i_generic.get_entry_acyclic(
                            p_sl.acyclic.from_resolved_dictionary(x_reference_selected.constraints),
                            $,
                            abort,
                        ))
                        return ['reference', {
                            'property': p_sibling,
                            'constraint': p_constraint
                        }]
                    })
                    default: return pt.au($[0])
                }
            })])
            case 'list cursor': return pt.ss($, ($) => ['list cursor', null])
            case 'linked entry': return pt.ss($, ($) => ['linked entry', null])
            case 'option constraint': return pt.ss($, ($): t_out.Resolver_Guaranteed_Value_Selection.start => {
                const sc = $p['option constraints'].__decide(
                    ($) => $,
                    () => _i_generic.abort.parameter_is_set_assertion("option constraints", start_location, abort)
                )
                return ['option constraint', _i_generic.get_entry_acyclic(
                    p_sl.acyclic.from_resolved_dictionary(sc),
                    $,
                    abort,
                )]
            })
            case 'parameter': return pt.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                p_sl.acyclic.from_resolved_dictionary($p.signature['resolved parameters'].modules),
                $,
                abort,
            )])
            case 'result': return pt.ss($, ($) => ['result', p_change_context($['l state'], ($): t_out.Resolver_Guaranteed_Value_Selection.start.result => {
                switch ($[0]) {
                    case 'list': return pt.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling: t_out.Resolver_Guaranteed_Value_Selection.start.result.list.property = p_change_context($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_list_result_a = p_change_context($['list result'], ($) => p_sibling['l entry'].resolver[0] !== 'list'
                            ? _i_generic.abort.state_constraint_found_expected("list", p_sibling['l entry'].resolver, loc, abort)
                            : p_sibling['l entry'].resolver[1])
                        const p_list_result: t_out.Resolver_Guaranteed_Value_Selection.start.result.list.list_result = p_list_result_a.result.__decide(
                            ($) => $,
                            () => _i_generic.abort.is_set_assertion("list result", loc, abort)
                        )
                        return ['list', {
                            'property': p_sibling,
                            'list result': p_list_result,
                        }]
                    })
                    case 'state': return pt.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling: t_out.Resolver_Guaranteed_Value_Selection.start.result.state.property = p_change_context($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const P_state = p_change_context($['state'], ($) => p_sibling['l entry'].resolver[0] !== 'state'
                            ? _i_generic.abort.state_constraint_found_expected("state", p_sibling['l entry'].resolver, loc, abort)
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
                    case 'optional value': return pt.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling: t_out.Resolver_Guaranteed_Value_Selection.start.result.optional_value.property = p_change_context($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_optional_value = p_change_context($['optional value'], ($) => p_sibling['l entry'].resolver[0] !== 'optional'
                            ? _i_generic.abort.state_constraint_found_expected("optional", p_sibling['l entry'].resolver, loc, abort)
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
                    default: return pt.au($[0])
                }
            })])
            case 'sibling': return pt.ss($, ($): t_out.Resolver_Guaranteed_Value_Selection.start => ['sibling', _i_generic.get_entry_acyclic(
                $l['sibling property resolvers'],
                $,
                abort,
            )])
            case 'parent sibling': return pt.ss($, ($): t_out.Resolver_Guaranteed_Value_Selection.start => ['parent sibling', _i_generic.get_entry_acyclic(
                $l['parent sibling property resolvers'],
                $,
                abort,
            )])
            default: return pt.au($[0])
        }
    })
    const p_tail = Relative_Value_Selection(
        $.tail,
        abort,
        p_create_symbol(),
        {
            'value': p_variables(() => {
                const pvs = ($: t_out.Resolver_Possible_Value_Selection) => p_change_context($, ($): t_out.Module => {
                    return p_change_context($, ($) => {
                        switch ($[0]) {
                            case 'parameter': return pt.ss($, ($) => $['l entry'].module['resulting module'])
                            case 'result': return pt.ss($, ($) => p_change_context($, ($) => {
                                switch ($[0]) {
                                    case 'state': return pt.ss($, ($) => $.result['resulting module'])
                                    case 'optional value': return pt.ss($, ($) => $.result['resulting module'])
                                    default: return pt.au($[0])
                                }
                            }))
                            default: return pt.au($[0])
                        }
                    })
                })['root value']
                const start_loc = $.start['l location']
                const gvs_start = ($: t_out.Resolver_Guaranteed_Value_Selection.start) => p_change_context($, ($): t_out.Value => {
                    switch ($[0]) {
                        case 'constraint': return pt.ss($, ($) => p_change_context($, ($) => {
                            switch ($[0]) {
                                case 'component': return pt.ss($, ($) => p_change_context($.constraint['l entry'].constraint.type, ($) => {
                                    switch ($[0]) {
                                        case 'state': return pt.ss($, ($) => $.option['l entry'].value)
                                        case 'optional value': return pt.ss($, ($) => $['selected optional value'])
                                        default: return pt.au($[0])
                                    }
                                }))
                                case 'reference': return pt.ss($, ($) => p_change_context($.constraint['l entry'].constraint.type, ($) => {
                                    switch ($[0]) {
                                        case 'state': return pt.ss($, ($) => $.option['l entry'].value)
                                        case 'optional value': return pt.ss($, ($) => $['selected optional value'])

                                        default: return pt.au($[0])
                                    }
                                }))

                                default: return pt.au($[0])
                            }
                        }))
                        case 'parameter': return pt.ss($, ($) => $['l entry'].module['resulting module']['root value'])
                        case 'result': return pt.ss($, ($) => p_change_context($, ($) => {
                            switch ($[0]) {
                                case 'state': return pt.ss($, ($) => $.result['resulting module']['root value'])
                                case 'optional value': return pt.ss($, ($) => $.result['resulting module']['root value'])
                                case 'list': return pt.ss($, ($) => $['list result']['resulting module']['root value'])
                                default: return pt.au($[0])
                            }
                        }))
                        case 'list cursor': return pt.ss($, ($) => $p['list cursor'].__decide(
                            ($) => $['resulting module']['root value'],
                            () => _i_generic.abort.parameter_is_set_assertion("list cursor", start_loc, abort)
                        ))
                        case 'linked entry': return pt.ss($, ($) => $p['linked entry'].__decide(
                            ($) => $['resulting dictionary'].value,
                            () => _i_generic.abort.parameter_is_set_assertion("linked entry", start_loc, abort)
                        ))
                        case 'option constraint': return pt.ss($, ($) => p_change_context($['l entry'], ($) => {
                            switch ($[0]) {
                                case 'state': return pt.ss($, ($) => $.option['l entry'].value)
                                case 'assert is set': return pt.ss($, ($) => pvs($))
                                default: return pt.au($[0])
                            }
                        }))
                        case 'sibling': return pt.ss($, ($) => $['l entry'].definition.value)
                        case 'parent sibling': return pt.ss($, ($) => $['l entry'].definition.value)
                        default: return pt.au($[0])
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
    return p_change_context($, ($) => _i_generic.temp_resolve(
        $['l dictionary'],
        ($, id, $acyclic, $cyclic) => p_change_context($, ($) => p_change_context($['l entry']['l state'], ($) => {
            switch ($[0]) {
                case 'state': return pt.ss($, ($) => ['state', p_variables(() => {
                    const loc = $.selection.start['l location']
                    const p_selection: t_out.Resolver_Option_Constraints.D.state.selection = p_change_context($['selection'], ($) => Guaranteed_Value_Selection(
                        $,
                        abort,
                        $l,
                        $p,
                    ))
                    const p_selected_state = p_selection['resulting node'][0] !== 'state' // component constraint ('selection')
                        ? _i_generic.abort.state_constraint_found_expected(
                            "state",
                            p_selection['resulting node'],
                            loc,
                            abort,
                        )
                        : p_selection['resulting node'][1]
                    const p_option: t_out.Resolver_Option_Constraints.D.state.option = p_change_context($['option'], ($) => _i_generic.get_entry_acyclic(
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
                case 'assert is set': return pt.ss($, ($) => ['assert is set', Possibly_Optional(
                    $,
                    abort,
                    $l,
                    $p,
                )])
                default: return pt.au($[0])
            }
        })),
    ))
}

export const Constraint: t_signatures.Resolver_Constraint = ($, abort, $l, $p) => {
    const p_selection: t_out.Resolver_Constraint.selection = p_change_context($['selection'], ($) => Relative_Value_Selection(
        $,
        abort,
        p_create_symbol(),
        {
            'value': $p.value,
        }
    ))
    const loc = $.type['l location']
    const p_type: t_out.Resolver_Constraint.type_ = p_change_context($.type, ($) => p_change_context($['l state'], ($) => {
        switch ($[0]) {
            case 'state': return pt.ss($, ($) => {
                const p_selected_state = p_selection['resulting node'][0] !== 'state' // component constraint ('selection')
                    ? _i_generic.abort.state_constraint_found_expected(
                        "state",
                        p_selection['resulting node'],
                        loc,
                        abort,
                    )
                    : p_selection['resulting node'][1]
                const p_option: t_out.Resolver_Constraint.type_.state.option = p_change_context($['option'], ($) => _i_generic.get_entry_acyclic(
                    p_sl.acyclic.from_resolved_dictionary(p_selected_state.options),
                    $,
                    abort,
                ))
                return ['state', {
                    'selected state': p_selected_state,
                    'option': p_option,
                }]
            })
            case 'optional value': return pt.ss($, ($) => {
                const p_selected_optional_value = p_selection['resulting node'][0] !== 'optional' // component constraint ('selection')
                    ? _i_generic.abort.state_constraint_found_expected(
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
            default: return pt.au($[0])
        }
    }))
    return {
        'selection': p_selection,
        'type': p_type,
    }
}

export const Optional_Value_Initialization: t_signatures.Resolver_Optional_Value_Initialization = ($, abort, $l, $p) => p_variables(() => p_change_context($['l state'], ($) => {
    switch ($[0]) {
        case 'not set': return pt.ss($, ($) => ['not set', null])
        case 'set': return pt.ss($, ($) => ['set', Guaranteed_Value_Selection($, abort, $l, $p)])
        case 'selection': return pt.ss($, ($): t_out.Resolver_Optional_Value_Initialization => {
            return ['selection', Possibly_Optional($, abort, $l, $p)]
        })
        default: return pt.au($[0])
    }
}))

export const Possibly_Optional: t_signatures.Resolver_Possible_Value_Selection = ($, abort, $l, $p) => p_variables(() => {
    return p_change_context($['l state'], ($) => {
        switch ($[0]) {
            case 'parameter': return pt.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                p_sl.acyclic.from_resolved_dictionary($p.signature['resolved parameters'].modules),
                $,
                abort,
            )])
            case 'result': return pt.ss($, ($) => ['result', p_change_context($['l state'], ($): t_out.Resolver_Possible_Value_Selection.result => {
                switch ($[0]) {
                    case 'state': return pt.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling: t_out.Resolver_Possible_Value_Selection.result.state.property = p_change_context($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const P_state = p_change_context($['state'], ($) => p_sibling['l entry'].resolver[0] !== 'state'
                            ? _i_generic.abort.state_constraint_found_expected("state", p_sibling['l entry'].resolver, loc, abort)
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
                    case 'optional value': return pt.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling: t_out.Resolver_Possible_Value_Selection.result.optional_value.property = p_change_context($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_optional_value = p_change_context($['optional value'], ($) => p_sibling['l entry'].resolver[0] !== 'optional'
                            ? _i_generic.abort.state_constraint_found_expected("optional", p_sibling['l entry'].resolver, loc, abort)
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
                    default: return pt.au($[0])
                }
            })])
            default: return pt.au($[0])
        }
    })
})

export const Lookup_Selection: t_signatures.Resolver_Lookup_Selection = ($, abort, $l, $p) => p_variables(() => p_variables(() => {
    const loc = $.type['l location']
    const p_type: t_out.Resolver_Lookup_Selection.type_ = p_change_context($['type'], ($) => p_change_context($['l state'], ($): t_out.Resolver_Lookup_Selection.type_ => {
        switch ($[0]) {
            case 'acyclic': return pt.ss($, ($): t_out.Resolver_Lookup_Selection.type_ => ['acyclic', pt.decide.state($['l state'], ($): t_out.Resolver_Lookup_Selection.type_.acyclic => {
                switch ($[0]) {
                    case 'resolved dictionary': return pt.ss($, ($) => {
                        const p_selection = Guaranteed_Value_Selection(
                            $.selection,
                            abort,
                            $l,
                            $p,
                        )

                        const p_selected_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint (selection)
                            ? _i_generic.abort.state_constraint_found_expected(
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
                    case 'siblings': return pt.ss($, ($) => ['siblings', $p['current dictionary'].__decide(
                        ($) => $,
                        () => _i_generic.abort.parameter_is_set_assertion("current directory", loc, abort)
                    )])
                    default: return pt.au($[0])
                }
            })])
            case 'cyclic': return pt.ss($, ($) => ['cyclic', pt.decide.state($['l state'], ($): t_out.Resolver_Lookup_Selection.type_.cyclic => {
                switch ($[0]) {
                    case 'siblings': return pt.ss($, ($) => ['siblings', $p['current dictionary'].__decide(
                        ($) => $,
                        () => _i_generic.abort.parameter_is_set_assertion("current directory", loc, abort)
                    )])
                    default: return pt.au($[0])
                }
            })])
            case 'parameter': return pt.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                p_sl.acyclic.from_resolved_dictionary($p.signature['resolved parameters'].lookups),
                $,
                abort
            )])
            default: return pt.au($[0])
        }
    }))
    const p_resulting_dictionary = p_change_context(p_type, ($): t_out.Value.dictionary => {
        switch ($[0]) {
            case 'acyclic': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'siblings': return pt.ss($, ($) => $)
                    case 'resolved dictionary': return pt.ss($, ($) => $['selected dictionary'])
                    default: return pt.au($[0])
                }
            }))
            case 'cyclic': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'siblings': return pt.ss($, ($) => $)
                    default: return pt.au($[0])
                }
            }))
            case 'parameter': return pt.ss($, ($) => $['l entry'].dictionary)
            default: return pt.au($[0])
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
            case 'external': return pt.ss($, ($): t_out.Module_Reference.location => {
                const sc_import = $p.imports.__decide(
                    ($) => $,
                    () => _i_generic.abort.parameter_is_set_assertion("imports", $.import['l location'], abort)
                )
                const p_import = _i_generic.get_entry_acyclic(
                    p_sl.acyclic.from_resolved_dictionary(sc_import),
                    $.import,
                    abort
                )
                return ['external', {
                    'import': p_import,
                    'module': _i_generic.get_entry_acyclic(
                        p_sl.acyclic.from_resolved_dictionary(p_import['l entry'].schema.modules),
                        $.module,
                        abort,
                    )
                }]
            })
            case 'internal': return pt.ss($, ($) => ['internal', _i_generic.get_entry_acyclic(
                $l['modules'],
                $,
                abort,
            )])
            default: return pt.au($[0])
        }
    })
    const p_resulting_type = p_change_context(x, ($): t_out.Module => {
        switch ($[0]) {
            case 'external': return pt.ss($, ($) => $.module['l entry'])
            case 'internal': return pt.ss($, ($) => $['l entry'])
            default: return pt.au($[0])
        }
    })
    return {
        'location': x,
        'resulting module': p_resulting_type,
        'resulting value': p_resulting_type['root value'],
    }
}