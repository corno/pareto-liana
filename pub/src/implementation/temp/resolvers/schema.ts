import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'

// import * as _i_generic from 'pareto-core/dist/algorithm_types/refiner/resolve'
import * as signatures from "../../../interface/generated/pareto/schemas/schema/resolve"

import * as d_out from "../../../interface/generated/pareto/schemas/schema/data/resolved"

import * as _i_generic from "../resolve_generic"

// import * as _r from "../../../interface/generated/pareto/core/resolved"

const temp_assert = <Type, Error>(
    condition: () => _pi.Optional_Value<Error>,
    callback: () => Type,
    abort: _pi.Abort<Error>,
): Type => {
    const c = condition()
    c.__extract_data(
        ($) => {
            abort($)
        },
        () => {

        }
    )
    return callback()
}

export const Imports: signatures.Imports = ($, abort, $l, $p) => _p.deprecated_block(() => _p.deprecated_cc($, ($) => _i_generic.resolve_dictionary(
    $,
    ($, $p) => _p.deprecated_cc($, ($) => _p.deprecated_cc($, ($): d_out.Imports.D => {
        const p_schema_set_child: d_out.Imports.D.schema_set_child = _p.deprecated_cc($['schema set child'], ($) => _i_generic.get_entry_from_stack(
            $l['sibling schemas'],
            $,
            abort,
        ))
        const loc = $['schema set child'].location
        const p_schema: d_out.Imports.D.schema = _p.deprecated_cc($['schema'], ($) => _p.deprecated_cc(p_schema_set_child.entry, ($) => { // reference constraint ('schema set child')
            switch ($[0]) {
                case 'schema': return _p.ss($, ($) => $)
                case 'set': return _p.ss($, ($) => _i_generic.abort.tbd("HELP!!!", loc, abort))
                default: return _p.au($[0])
            }
        }))
        return {
            'schema set child': p_schema_set_child,
            'schema': p_schema,
        }
    })),
)))

export const Lookup_Selection: signatures.Lookup_Selection = ($, abort, $l, $p) => _p.deprecated_block(() => _p.deprecated_block(() => {
    const loc = $.type.location
    const p_type: d_out.Lookup_Selection._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): d_out.Lookup_Selection._type => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => {
                const p_selection = Guaranteed_Value_Selection(
                    $.selection,
                    abort,
                    $l,
                    $p,
                )

                const p_selected_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint (selection)
                    ? _i_generic.abort.wrong_state(
                        "dictionary",
                        p_selection['resulting node'][0],
                        $.selection.start.location, //$['selected dictionary'].location,
                        abort,
                    )
                    : p_selection['resulting node'][1]

                return ['dictionary', {
                    'selection': p_selection,
                    'selected dictionary': p_selected_dictionary,
                }]
            })
            case 'not circular dependent siblings': return _p.ss($, ($) => ['not circular dependent siblings', $p['current dictionary'].__decide(
                ($) => $,
                () => _i_generic.abort.tbd("not in a dictionary", loc, abort)
            )])
            case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry(
                _i_generic.dictionary_to_lookup($p.signature['resolved parameters'].lookups, null),
                $,
                abort
            )])
            case 'possibly circular dependent siblings': return _p.ss($, ($) => ['possibly circular dependent siblings', $p['current dictionary'].__decide(
                ($) => $,
                () => _i_generic.abort.tbd("SFSFSD", loc, abort)
            )])
            default: return _p.au($[0])
        }
    }))
    const p_resulting_dictionary = _p.deprecated_cc(p_type, ($): d_out.Type_Node.dictionary => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => $['selected dictionary'])
            case 'not circular dependent siblings': return _p.ss($, ($) => $)
            case 'parameter': return _p.ss($, ($) => $.entry.dictionary)
            case 'possibly circular dependent siblings': return _p.ss($, ($) => $)
            default: return _p.au($[0])
        }
    })
    return ({
        'type': p_type,
        'resulting dictionary': p_resulting_dictionary,
    })
}))

export const Number_Type: signatures.Number_Type = ($, abort, $l, $p) => {
    return {
        'precision': _p.deprecated_cc($.precision['state group'], ($): d_out.Number_Type.precision => {
            switch ($[0]) {
                case 'exact': return _p.ss($, ($) => {
                    return ['exact', {
                        'type': _p.deprecated_cc($.type['state group'], ($) => {
                            switch ($[0]) {
                                case 'integer': return _p.ss($, ($) => ['integer', null])
                                case 'natural': return _p.ss($, ($) => ['natural', null])
                                case 'positive natural': return _p.ss($, ($) => ['positive natural', null])
                                default: return _p.au($[0])
                            }
                        }),
                        'decimal separator offset': _p.deprecated_cc($['decimal separator offset'], ($) => {
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
    }
}

export const Signature_Parameters: signatures.Signature_Parameters = ($, abort, $l, $p) => {

    const p_parameters_values: d_out.Signature_Parameters.values = _i_generic.resolve_dictionary(
        $.values,
        ($, $acyclic, $cyclic) => {

            const p_schema_type = Type_Reference(
                $['data type'],
                abort,
                {
                    'types': _i_generic.dictionary_to_lookup($p.types, null),
                },
                {
                    'imports': _p.optional.not_set(),
                },

            )
            const p_presence = $.presence['state group']

            return {
                'data type': p_schema_type,
                'presence': p_presence,
            }
        },
    )
    const lookups_loc = $.lookups.location
    const p_parameters_lookups: d_out.Signature_Parameters.lookups = _i_generic.resolve_dictionary(
        $.lookups,
        ($, $acyclic, $cyclic) => {
            const p_referent = Type_Reference(
                $.referent,
                abort,
                {
                    'types': _i_generic.dictionary_to_lookup($p.types, null),
                },
                {
                    'imports': _p.optional.not_set(),
                },

            )

            const p_type: d_out.Signature_Parameters.lookups.D._type = _p.deprecated_cc($.type['state group'], ($) => {
                switch ($[0]) {
                    case 'acyclic': return _p.ss($, ($) => ['acyclic', null])
                    case 'cyclic': return _p.ss($, ($) => ['cyclic', null])
                    case 'stack': return _p.ss($, ($) => ['stack', $])
                    default: return _p.au($[0])
                }
            })
            const p_presence = $.presence['state group']
            return {
                'referent': p_referent,
                'dictionary': _p.deprecated_cc(p_referent['resulting node'], ($) => { // component constraint (referent)
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => $)
                        // default: return _i_generic.abort.tbd(`not a 'dictionary' but a '${$[0]}' @ ${$p['location 2 string'](lookups_loc)}`)
                        default: return _i_generic.abort.wrong_state(
                            "dictionary",
                            $[0],
                            lookups_loc,
                            abort,
                        )

                    }
                }),
                'type': p_type,
                'presence': p_presence,
            }
        },
    )
    return {
        'lookups': p_parameters_lookups,
        'values': p_parameters_values,
    }
}
export const Globals: signatures.Globals = ($, abort, $l, $p) => {
    const p_number_types: d_out.Globals.number_types = _i_generic.resolve_dictionary(
        $['number types'],
        ($, $acyclic, $cyclic) => Number_Type(
            $,
            abort,
            null,
            null,
        ),
    )
    const p_text_types: d_out.Globals.text_types = _i_generic.resolve_dictionary(
        $['text types'],
        ($, $acyclic, $cyclic) => Text_Type(
            $,
            abort,
            null,
            null,
        ),
    )
    return {
        'number types': p_number_types,
        'text types': p_text_types,
        'complexity': $['complexity']['state group'],
    }
}

export const Signature: signatures.Signature = ($, abort, $l, $p) => {
    const p_parameters: d_out.Signature.parameters = _p.deprecated_cc($.parameters['state group'], ($): d_out.Signature.parameters => {
        switch ($[0]) {
            case 'local': return _p.ss($, ($) => ['local', Signature_Parameters(
                $,
                abort,
                null,
                {
                    'imports': $p.imports,
                    'types': $p.types,
                },
            )])
            case 'same as': return _p.ss($, ($) => ['same as', _i_generic.get_entry(
                $l['sibling signatures'],
                $,
                abort,
            )])
            default: return _p.au($[0])
        }
    })
    return {
        'type': $p.type,
        'parameters': p_parameters,
        'resolved parameters': _p.deprecated_cc(p_parameters, ($) => {
            switch ($[0]) {
                case 'local': return _p.ss($, ($) => $)
                case 'same as': return _p.ss($, ($) => $.entry['resolved parameters'])
                default: return _p.au($[0])
            }
        })
    }
}

export const Signatures: signatures.Signatures = ($, abort, $l, $p) => {
    return _i_generic.resolve_dense_ordered_dictionary(
        $,
        abort,
        $p.types,
        ($, ref, $acyclic, $cyclic) => {
            const p_linked_entry = _i_generic.get_entry(
                _i_generic.dictionary_to_lookup($p.types, null),
                ref,
                abort,
            )

            return Signature(
                $,
                abort,
                {
                    'sibling signatures': $acyclic,
                },
                {
                    'imports': $p.imports,
                    'types': $p.types,
                    'type': p_linked_entry.entry,
                },
            )
        },

    )
}

export const Schema_Tree: signatures.Schema_Tree = ($, abort, $l, $p) => _p.deprecated_block(() => _p.deprecated_cc($['state group'], ($): d_out.Schemas.D => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => ['schema', _p.deprecated_block(() => {
            const p_imports = Imports(
                $.imports,
                abort,
                {
                    'sibling schemas': $l['sibling schemas'],

                },
                null,

            )
            const p_globals: d_out.Schema.globals = _p.deprecated_cc($['globals'], ($) => Globals(
                $,
                abort,
                null,
                null,
            ))
            const p_types: d_out.Types = _i_generic.resolve_ordered_dictionary(
                $.types,
                ($, $acyclic, $cyclic) => {
                    const p_type_parameters: d_out.Type.type_parameters = _i_generic.resolve_dictionary(
                        $['type parameters'],
                        ($, $acyclic, $cyclic) => {
                            return $
                        },
                    )
                    const p_type = Type_Node(
                        $.node,
                        abort,
                        {
                            'noncircular sibling types': $acyclic,
                            'possibly circular dependent sibling types': $cyclic,
                        },
                        {
                            'imports': _p.optional.set(p_imports),
                            'globals': _p.optional.set(p_globals),
                            'type parameters': p_type_parameters,
                        },

                    )
                    return {
                        'type parameters': p_type_parameters,
                        'node': p_type,

                    }
                },
            )
            const p_complexity: d_out.Schema.complexity = _p.deprecated_cc($.complexity['state group'], ($) => {
                switch ($[0]) {
                    case 'constrained': return _p.ss($, ($) => {

                        const p_signatures: d_out.Resolve_Logic.signatures = _p.deprecated_cc($.signatures, ($) => {
                            const p_types_2: d_out.Resolve_Logic.signatures.types = _p.deprecated_cc($, ($) => Signatures(
                                $.types,
                                abort,
                                null,
                                {
                                    'imports': p_imports,
                                    'types': p_types,
                                },
                            ))
                            return {
                                'types': p_types_2,
                            }
                        })
                        const p_resolvers: d_out.Resolve_Logic.resolvers = _i_generic.resolve_dense_ordered_dictionary(
                            $.resolvers,
                            abort,
                            p_signatures.types,
                            ($, ref, $acyclic, $cyclic) => {

                                const key = ref.key

                                const p_linked_entry = _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(p_types, null),
                                    ref,
                                    abort,
                                )
                                const p_signature = _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(p_signatures.types, null),
                                    ref,
                                    abort,
                                )

                                const p_type_resolver = Node_Resolver(
                                    $['type resolver'],
                                    abort,
                                    {
                                        'sibling property resolvers': _i_generic.acyclic.not_set(),
                                        'parent sibling property resolvers': _i_generic.acyclic.not_set(),

                                    },
                                    {
                                        'list cursor': _p.optional.not_set(),
                                        'linked entry': _p.optional.not_set(),
                                        'current dictionary': _p.optional.not_set(),
                                        'current ordered dictionary': _p.optional.not_set(),
                                        'option constraints': _p.optional.not_set(),

                                        'definition': p_linked_entry.entry.node,
                                        'signature': p_signature.entry,

                                        'types': p_types,
                                        'imports': _p.optional.set(p_imports),
                                        'signatures': p_signatures.types
                                    },
                                )
                                return {
                                    'signature': p_signature.entry,
                                    'type resolver': p_type_resolver,
                                }
                            },
                        )
                        return ['constrained', {
                            'signatures': p_signatures,
                            'resolvers': p_resolvers,
                        }]
                    })
                    case 'unconstrained': return _p.ss($, ($) => ['unconstrained', null])
                    default: return _p.au($[0])
                }
            })
            return ({
                'imports': p_imports,
                'globals': p_globals,
                'types': p_types,
                'complexity': p_complexity,
            })
        })])
        case 'set':
        case 'set': return _p.ss($, ($) => ['set', Schemas(
            $,
            abort,
            $l,
            $p,
        )])
        default: return _p.au($[0])
    }
}))

export const Schemas: signatures.Schemas = ($, abort, $l, $p) => _p.deprecated_block(() => _i_generic.resolve_ordered_dictionary(
    $,
    ($, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => Schema_Tree(
        $,
        abort,
        {
            'sibling schemas': _i_generic.push_stack($l['sibling schemas'], $acyclic)
        },
        null,
    )),
))

export const Text_Type: signatures.Text_Type = ($, abort, $l, $p) => {
    return {
        'type': _p.deprecated_cc($.type['state group'], ($): d_out.Text_Type._type => {
            switch ($[0]) {
                case 'single line': return _p.ss($, ($) => ['single line', null])
                case 'multi line': return _p.ss($, ($) => ['multi line', null])
                default: return _p.au($[0])
            }
        }),
    }
}

export const Type_Node: signatures.Type_Node = ($, abort, $l, $p) => {
    const loc = $.location
    return _p.deprecated_cc($['state group'], ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($): d_out.Type_Node => ['boolean', null])
            case 'number': return _p.ss($, ($): d_out.Type_Node => ['number', _p.deprecated_cc($['state group'], ($): d_out.Type_Node._number => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($): d_out.Type_Node._number => ['global', _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup($p.globals.__decide(
                            ($) => $['number types'],
                            () => _i_generic.abort.tbd("globals not set", $.location, abort)
                        ),
                            null
                        ),
                        $,
                        abort,
                    )])
                    case 'local': return _p.ss($, ($) => ['local', Number_Type(
                        $,
                        abort,
                        null,
                        null,
                    )])
                    default: return _p.au($[0])
                }
            })])
            case 'text': return _p.ss($, ($): d_out.Type_Node => ['text', _p.deprecated_cc($['state group'], ($): d_out.Type_Node.text => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($): d_out.Type_Node.text => ['global', _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(
                            $p.globals.__decide(
                                ($) => $['text types'],
                                () => _i_generic.abort.tbd("globals not set", $.location, abort)
                            ),
                            null
                        ),
                        $,
                        abort
                    )])
                    case 'local': return _p.ss($, ($) => ['local', Text_Type(
                        $,
                        abort,
                        null,
                        null,
                    )])
                    default: return _p.au($[0])
                }
            })])
            case 'component': return _p.ss($, ($): d_out.Type_Node => ['component', _p.deprecated_cc($['state group'], ($): d_out.Type_Node.component => {
                switch ($[0]) {
                    case 'external': return _p.ss($, ($) => {
                        const sc_import = $p.imports.__decide(
                            ($) => $,
                            () => _i_generic.abort.tbd("missing", $.import.location, abort)
                        )
                        const p_import = _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(sc_import, null),
                            $.import,
                            abort,
                        )
                        return ['external', {
                            'import': p_import,
                            'type': _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(p_import.entry.schema.types, null),
                                $.type,
                                abort,
                            )
                        }]
                    })
                    case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry(
                        $l['noncircular sibling types'],
                        $,
                        abort,
                    )])
                    case 'internal cyclic': return _p.ss($, ($) => ['internal cyclic', _i_generic.get_possibly_circular_dependent_sibling_entry(
                        $l['possibly circular dependent sibling types'],
                        $,
                        abort
                    )])
                    default: return _p.au($[0])
                }
            })])
            case 'dictionary': return _p.ss($, ($) => {
                const p_type = Type_Node(
                    $.node,
                    abort,
                    $l,
                    $p,
                )
                return ['dictionary', {
                    'node': p_type,
                    'ordered': $.ordered,
                }]
            })
            case 'group': return _p.ss($, ($) => ['group', _i_generic.resolve_ordered_dictionary(
                $,
                ($, $acyclic, $cyclic) => ({
                    'description': $.description,
                    'node': Type_Node(
                        $.node,
                        abort,
                        $l,
                        $p,
                    )
                }),
            )])
            case 'list': return _p.ss($, ($) => {
                const p_type = Type_Node(
                    $.node,
                    abort,
                    $l,
                    $p,
                )
                return ['list', {
                    'node': p_type,
                }]
            })
            case 'nothing': return _p.ss($, ($) => ['nothing', null])
            case 'optional': return _p.ss($, ($) => ['optional', Type_Node(
                $,
                abort,
                $l,
                $p,
            )])

            case 'reference': return _p.ss($, ($): d_out.Type_Node => {
                const loc = $.referent['type location'].location.location
                $p.globals.__decide(
                    ($) => {
                        if ($.complexity[0] === 'unconstrained') {
                            _i_generic.abort.tbd(`schema complexity setting is 'unconstrained', so references are not allowed`, loc, abort)
                        }
                    },
                    () => {
                        _i_generic.abort.tbd(`schema doesn't have settings, so no references are allowed`, loc, abort)
                    }
                )
                const p_referent = Type_Node_Reference(
                    $.referent,
                    abort,
                    {
                        'types': $l['noncircular sibling types'],
                    },
                    {
                        'imports': $p.imports,
                    },
                )
                const p_type: d_out.Type_Node.reference._type = _p.deprecated_cc($.type['state group'], ($) => {
                    switch ($[0]) {
                        case 'selected': return _p.ss($, ($) => {
                            return ['selected', {
                                'dictionary': _p.deprecated_cc(p_referent['resulting node'], ($) => { // component constraint (referent)
                                    switch ($[0]) {
                                        case 'dictionary': return _p.ss($, ($) => $)
                                        default: return _i_generic.abort.wrong_state(
                                            "dictionary",
                                            $[0],
                                            loc,
                                            abort,
                                        )

                                    }
                                }),
                                'dependency': _p.deprecated_cc($.dependency['state group'], ($) => {
                                    switch ($[0]) {
                                        case 'cyclic': return _p.ss($, ($) => ['cyclic', null])
                                        case 'acyclic': return _p.ss($, ($) => ['acyclic', null])
                                        case 'stack': return _p.ss($, ($) => ['stack', $])
                                        default: return _p.au($[0])
                                    }
                                })
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

                // case 'derived reference': return pa.ss($, ($) => ['derived reference', Type_Reference(
                //     $,
                //     $p
                // )])
                // : resolved.Type_Node => {
                //     const p_type = Type_Reference(
                //         $.type,
                //         $p,
                //     )
                //     const p_dictionary = p_type.tail.result[0] !== 'dictionary'
                //         ? pa.panic(`not a dictionary @ ${$p['location 2 string'](loc)}`)
                //         : p_type.tail.result[1]

                //     return ['reference', {
                //         'type': p_type,
                //         // 'resulting dictionary': p_dictionary,
                //         'dependency': $.dependency['state group']
                //     }]
                // }
            })
            case 'state group': return _p.ss($, ($) => ['state group', _i_generic.resolve_dictionary(
                $,
                ($, $acyclic, $cyclic) => ({
                    'description': $.description,
                    'node': Type_Node(
                        $.node,
                        abort,
                        $l,
                        $p,
                    ),
                }),
            )])
            // case 'type parameter': return _pt.ss($, ($) => ['type parameter', _i_generic.get_entry(
            //     _i_generic.dictionary_to_lookup(
            //         $p['type parameters'],
            //         null,
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

export const Type_Parameters: signatures.Type_Parameters = ($, abort, $l, $p) => _i_generic.resolve_dictionary(
    $,
    ($, $acyclic, $cyclic) => {
        return $
    },
)

export const Type_Reference: signatures.Type_Reference = ($, abort, $l, $p) => {
    const x: d_out.Type_Reference.location = _p.deprecated_cc($.location['state group'], ($) => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($): d_out.Type_Reference.location => {
                const sc_import = $p.imports.__decide(
                    ($) => $,
                    () => _i_generic.abort.tbd("missing", $.import.location, abort)
                )
                const p_import = _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup(sc_import, null),
                    $.import,
                    abort
                )
                return ['external', {
                    'import': p_import,
                    'type': _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(p_import.entry.schema.types, null),
                        $.type,
                        abort,
                    )
                }]
            })
            case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry(
                $l['types'],
                $,
                abort,
            )])
            default: return _p.au($[0])
        }
    })
    return {
        'location': x,
        'resulting node': _p.deprecated_cc(x, ($): d_out.Type_Node => {
            switch ($[0]) {
                case 'external': return _p.ss($, ($) => $.type.entry.node)
                case 'internal': return _p.ss($, ($) => $.entry.node)
                default: return _p.au($[0])
            }
        })
    }
}


export const Type_Node_Reference: signatures.Type_Node_Reference = ($, abort, $l, $p) => {
    const p_type_location = Type_Reference(
        $['type location'],
        abort,
        $l,
        $p,
    )
    const p_tail_x: d_out.Type_Node_Reference.tail = _i_generic.resolve_path(
        $.tail,
        p_type_location['resulting node'],
        ($, current): d_out.Type_Node_Reference.tail.L => {
            const sg_loc = $.location
            return _p.deprecated_cc($['state group'], ($): d_out.Type_Node_Reference.tail.L => {
                switch ($[0]) {
                    case 'dictionary': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.dictionary = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'dictionary') {
                                return _i_generic.abort.tbd(`not a 'dictionary' but a '${$[0]}'`, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            '_': ['dictionary', null],
                            'referred': sc_definition.node
                        }
                    })
                    case 'group': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.group = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'group') {
                                return _i_generic.abort.tbd(`not a 'group' but a '${$[0]}'`, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(sc_definition, null),
                            $,
                            abort,
                        )
                        return {
                            '_': ['group', p_child],
                            'referred': p_child.entry.node
                        }
                    })
                    case 'list': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.list = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'list') {
                                return _i_generic.abort.tbd(`not a 'list' but a '${$[0]}'`, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            '_': ['list', null],
                            'referred': sc_definition.node
                        }
                    })
                    case 'optional': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.optional = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'optional') {
                                return _i_generic.abort.tbd(`not a 'optional' but a '${$[0]}'`, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            '_': ['optional', null],
                            'referred': sc_definition
                        }
                    })
                    case 'state group': return _p.ss($, ($) => {
                        const p_state_group: d_out.Type_Node.state_group = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'state group') {
                                return _i_generic.abort.tbd(`not a 'state group' but a '${$[0]}'`, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(p_state_group, null),
                            $,
                            abort,
                        )
                        return {
                            '_': ['state group', p_child],
                            'referred': p_child.entry.node
                        }
                    })
                    default: return _p.au($[0])
                }
            })
        }
    )
    return {
        'type location': p_type_location,
        'tail': p_tail_x,
        'resulting node': p_tail_x.referred
    }
}

export const Option_Constraints: signatures.Option_Constraints = ($, abort, $l, $p) => {
    return _p.deprecated_cc($, ($) => _i_generic.resolve_dictionary(
        $,
        ($, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => _p.deprecated_cc($['state group'], ($) => {
            switch ($[0]) {
                case 'state': return _p.ss($, ($) => ['state', _p.deprecated_block(() => {
                    const loc = $.selection.start.location
                    const p_selection: d_out.Option_Constraints.D.state.selection = _p.deprecated_cc($['selection'], ($) => Guaranteed_Value_Selection(
                        $,
                        abort,
                        $l,
                        $p,
                    ))
                    const p_selected_state_group = p_selection['resulting node'][0] !== 'state group' // component constraint ('selection')
                        ? _i_generic.abort.wrong_state(
                            "state group",
                            p_selection['resulting node'][0],
                            loc,
                            abort,
                        )
                        : p_selection['resulting node'][1]
                    const p_state: d_out.Option_Constraints.D.state.state = _p.deprecated_cc($['state'], ($) => _i_generic.get_entry(
                        _i_generic.dictionary_to_lookup(p_selected_state_group, null),
                        $,
                        abort,
                    ))
                    return ({
                        'selected state group': p_selected_state_group,
                        'selection': p_selection,
                        'state': p_state,
                    })
                })])
                case 'assert is set': return _p.ss($, ($) => ['assert is set', Possibly_Optional(
                    $,
                    abort,
                    $l,
                    $p,
                )])
                default: return _p.au($[0])
            }
        })),
    ))
}

export const Constraint: signatures.Constraint = ($, abort, $l, $p) => {
    const p_selection: d_out.Constraint.selection = _p.deprecated_cc($['selection'], ($) => Relative_Value_Selection(
        $,
        abort,
        null,
        {
            'node': $p.node,
        }
    ))
    const loc = $.type.location
    const p_type: d_out.Constraint._type = _p.deprecated_cc($.type, ($) => _p.deprecated_cc($['state group'], ($) => {
        switch ($[0]) {
            case 'state': return _p.ss($, ($) => {
                const p_selected_state_group = p_selection['resulting node'][0] !== 'state group' // component constraint ('selection')
                    ? _i_generic.abort.wrong_state(
                        "state group",
                        p_selection['resulting node'][0],
                        loc,
                        abort,
                    )
                    : p_selection['resulting node'][1]
                const p_state: d_out.Constraint._type.state.state = _p.deprecated_cc($['state'], ($) => _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup(p_selected_state_group, null),
                    $,
                    abort,
                ))
                return ['state', {
                    'selected state group': p_selected_state_group,
                    'state': p_state,
                }]
            })
            case 'optional value': return _p.ss($, ($) => {
                const p_selected_optional_value = p_selection['resulting node'][0] !== 'optional' // component constraint ('selection')
                    ? _i_generic.abort.wrong_state(
                        "optional",
                        p_selection['resulting node'][0],
                        loc,
                        abort,
                    )
                    : p_selection['resulting node'][1]
                return ['optional value', {
                    'selected optional value': p_selected_optional_value,
                }]
            })
            default: return _p.au($[0])
        }
    }))
    return {
        'selection': p_selection,
        'type': p_type,
    }
}

export const Property_Constraints: signatures.Property_Constraints = ($, abort, $l, $p) => {
    return _p.deprecated_cc($, ($) => _i_generic.resolve_ordered_dictionary(
        $,
        ($, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => _p.deprecated_block(() => {
            const p_start: d_out.Property_Constraint.start = _p.deprecated_cc($.start['state group'], ($) => {
                switch ($[0]) {
                    case 'property': return _p.ss($, ($) => ['property', null])
                    case 'sibling': return _p.ss($, ($) => ['sibling', _i_generic.get_entry(
                        $acyclic,
                        $,
                        abort,
                    )])
                    default: return _p.au($[0])
                }
            })
            const p_constraint: d_out.Property_Constraint.constraint = Constraint(
                $.constraint,
                abort,
                null,
                {

                    'node': _p.deprecated_cc(p_start, ($) => {
                        switch ($[0]) {
                            case 'property': return _p.ss($, ($) => $p.node)
                            case 'sibling': return _p.ss($, ($) => _p.deprecated_cc($.entry.constraint.type, ($) => {
                                switch ($[0]) {
                                    case 'state': return _p.ss($, ($) => $.state.entry.node)
                                    case 'optional value': return _p.ss($, ($) => $['selected optional value'])
                                    default: return _p.au($[0])
                                }
                            }))
                            default: return _p.au($[0])
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

export const Node_Resolver: signatures.Node_Resolver = ($, abort, $l, $p) => {
    const loc = $.location
    const p_type = _p.deprecated_cc($['state group'], ($): d_out.Node_Resolver => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'boolean'
                    ? _i_generic.abort.wrong_state(
                        "boolean",
                        $p.definition[0],
                        loc,
                        abort,
                    )
                    : $p.definition[1]
                return ['boolean', null]
            })
            case 'component': return _p.ss($, ($): d_out.Node_Resolver => {
                const x = $p.definition[0] !== 'component'
                    ? _i_generic.abort.wrong_state(
                        "component",
                        $p.definition[0],
                        loc,
                        abort,
                    )
                    : $p.definition[1]
                const p_location = _p.deprecated_cc($.location['state group'], ($): d_out.Node_Resolver.component.location => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => {
                            const sc_import = $p.imports.__decide(
                                ($) => $,
                                () => _i_generic.abort.tbd("missing", loc, abort)
                            )
                            const p_import = _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(sc_import, null),
                                $.import,
                                abort,
                            )
                            const pc_constrained: d_out.Schema.complexity.constrained = _p.deprecated_cc(p_import.entry.schema.complexity, ($) => {
                                switch ($[0]) {
                                    case 'constrained': return _p.ss($, ($) => $)
                                    case 'unconstrained': return _p.ss($, ($) => _i_generic.abort.tbd(`not constrained`, loc, abort))
                                    default: return _p.au($[0])
                                }
                            })
                            return ['external', {
                                'import': p_import,
                                'type': _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(pc_constrained.signatures.types, null),
                                    $.type,
                                    abort,
                                )
                            }]
                        })
                        case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(
                                $p['signatures'],
                                null,
                            ),
                            $,
                            abort,
                        )])
                        default: return _p.au($[0])
                    }
                })
                const p_signature: d_out.Node_Resolver.component.signature = _p.deprecated_cc(p_location, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => $.type.entry)
                        case 'internal': return _p.ss($, ($) => $.entry)
                        default: return _p.au($[0])
                    }
                })
                const x_type: d_out.Types.D = _p.deprecated_cc(x, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => $.type.entry)
                        case 'internal': return _p.ss($, ($) => $.entry)
                        case 'internal cyclic': return _p.ss($, ($) => $.entry['get circular dependent']())
                        default: return _p.au($[0])
                    }
                })
                if (p_signature.type.node !== x_type.node) {
                    _i_generic.abort.tbd("type mismatch", loc, abort)
                }
                const p_arguments: d_out.Node_Resolver.component._arguments = $.arguments.__decide(
                    ($) => {
                        const x: d_out.Node_Resolver.component._arguments.O = {
                            'lookups': $.lookups.__decide(
                                ($) => _p.optional.set(_i_generic.resolve_dense_dictionary(
                                    $,
                                    abort,
                                    p_signature['resolved parameters'].lookups,
                                    ($, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => {
                                        //do additional validation
                                        return _p.deprecated_cc($['state group'], ($): d_out.Node_Resolver.component._arguments.O.lookups.O.D => {
                                            switch ($[0]) {
                                                case 'empty stack': return _p.ss($, ($) => ['empty stack', null])
                                                case 'not set': return _p.ss($, ($) => ['not set', null])
                                                case 'selection': return _p.ss($, ($) => ['selection', Lookup_Selection(
                                                    $,
                                                    abort,
                                                    $l,
                                                    $p,
                                                )])
                                                case 'stack': return _p.ss($, ($) => {
                                                    const p_stack = Lookup_Selection(
                                                        $.stack,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )
                                                    const p_element = Lookup_Selection(
                                                        $.element,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )
                                                    return ['stack', {
                                                        'stack': p_stack,
                                                        'element': p_element
                                                    }]
                                                })
                                                default: return _p.au($[0])
                                            }
                                        })
                                    }),
                                )),
                                () => {
                                    {
                                        //additional validation
                                        if (p_signature['resolved parameters'].lookups !== $p.signature['resolved parameters'].lookups) {

                                            _i_generic.abort.tbd("lookup parameters mismatch", loc, abort)
                                        }
                                    }
                                    return _p.optional.not_set()
                                }
                            ),
                            'values': $.values.__decide(
                                ($) => {
                                    const values_location = $.location

                                    return _p.optional.set(_i_generic.resolve_dense_dictionary(
                                        $,
                                        abort,
                                        p_signature['resolved parameters'].values,
                                        ($, ref, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => {
                                            const linked_entry = _i_generic.get_entry(
                                                _i_generic.dictionary_to_lookup(p_signature['resolved parameters'].values, null),
                                                ref,
                                                abort,
                                            )
                                            const out = _p.deprecated_cc($['state group'], ($): d_out.Node_Resolver.component._arguments.O.values.O.D => {
                                                switch ($[0]) {
                                                    case 'optional': return _p.ss($, ($) => ['optional', Possible_Value_Selection(
                                                        $,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )])
                                                    case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry(
                                                        _i_generic.dictionary_to_lookup($p.signature['resolved parameters'].values, null),
                                                        $,
                                                        abort,
                                                    )])
                                                    case 'required': return _p.ss($, ($) => ['required', Guaranteed_Value_Selection(
                                                        $,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )])
                                                    default: return _p.au($[0])
                                                }
                                            })
                                            {
                                                //additional validation
                                                const benchmark = linked_entry.entry
                                                const key = ref.key
                                                const focus = out

                                                const walk_path_till_end = ($: d_out.Type_Node): d_out.Type_Node => {
                                                    return _p.deprecated_cc($, ($) => {
                                                        switch ($[0]) {
                                                            case 'component': return _p.ss($, ($) => _p.deprecated_cc($, ($) => {
                                                                switch ($[0]) {
                                                                    case 'external': return _p.ss($, ($) => $.type.entry.node)
                                                                    case 'internal': return _p.ss($, ($) => $.entry.node)
                                                                    case 'internal cyclic': return _p.ss($, ($) => $.entry['get circular dependent']().node) //IS THIS SAFE? I Am using a computed value (only available after resolving)
                                                                    default: return _p.au($[0])
                                                                }
                                                            }))
                                                            case 'reference': return _p.ss($, ($) => $.referent['resulting node'])
                                                            default: return $
                                                        }
                                                    })
                                                }

                                                _p.deprecated_cc(focus, ($) => {
                                                    switch ($[0]) {
                                                        case 'optional': return _p.ss($, ($) => {

                                                            if (benchmark.presence[0] !== 'optional') {
                                                                _i_generic.abort.tbd(`argument ${key} is not optional`, values_location, abort)
                                                            }

                                                            _p.deprecated_cc($, ($) => {
                                                                switch ($[0]) {
                                                                    case 'not set': return _p.ss($, ($) => { })
                                                                    case 'selection': return _p.ss($, ($) => {
                                                                        //FIXME
                                                                        _p.deprecated_cc($, ($) => {
                                                                            switch ($[0]) {
                                                                                case 'parameter': return _p.ss($, ($) => { })
                                                                                case 'result': return _p.ss($, ($) => { })
                                                                                default: _p.au($[0])
                                                                            }
                                                                        })
                                                                    })
                                                                    case 'set': return _p.ss($, ($) => {

                                                                        if (walk_path_till_end(benchmark['data type']['resulting node']) !== walk_path_till_end($.tail['resulting node'])) {
                                                                            return _i_generic.abort.not_the_same_node(
                                                                                "required argument data type",
                                                                                values_location,
                                                                                abort,
                                                                            )
                                                                        }
                                                                    })
                                                                    default: _p.au($[0])
                                                                }
                                                            })

                                                            //FIX validate that types are the same
                                                        })
                                                        case 'parameter': return _p.ss($, ($) => {
                                                            if ($.entry.presence[0] !== benchmark.presence[0]) {
                                                                return _i_generic.abort.not_the_same_node(
                                                                    "parameter presence",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                            if ($.entry['data type']['resulting node'] !== benchmark['data type']['resulting node']) {
                                                                return _i_generic.abort.not_the_same_node(
                                                                    "parameter data type",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                        })
                                                        case 'required': return _p.ss($, ($) => {
                                                            if (benchmark.presence[0] !== 'required') {
                                                                _i_generic.abort.tbd(`argument ${key} is not required`, values_location, abort)
                                                            }
                                                            if (walk_path_till_end(benchmark['data type']['resulting node']) !== walk_path_till_end($.tail['resulting node'])) {
                                                                return _i_generic.abort.not_the_same_node(
                                                                    "required argument data type",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }

                                                        })
                                                        default: return _p.au($[0])
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

                                        if (p_signature['resolved parameters'].values !== $p.signature['resolved parameters'].values) {
                                            return _i_generic.abort.not_the_same_node(
                                                "value parameters",
                                                loc,
                                                abort,
                                            )
                                        }
                                    }
                                    return _p.optional.not_set()
                                }
                            ),
                        }
                        return _p.optional.set(x)
                    },
                    () => {
                        {
                            //additional validation
                            if (p_signature['resolved parameters'].lookups !== $p.signature['resolved parameters'].lookups) {
                                return _i_generic.abort.not_the_same_node(
                                    "lookup parameters",
                                    loc,
                                    abort,
                                )
                            }
                            if (p_signature['resolved parameters'].values !== $p.signature['resolved parameters'].values) {
                                return _i_generic.abort.not_the_same_node(
                                    "value parameters",
                                    loc,
                                    abort,
                                )
                            }
                        }

                        return _p.optional.not_set()
                    }
                )
                const p_constraints = Property_Constraints(
                    $.constraints,
                    abort,
                    null,
                    {
                        'node': _p.deprecated_cc(p_location, ($): d_out.Type_Node => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => $.type.entry.type.node)
                                case 'internal': return _p.ss($, ($) => $.entry.type.node)
                                default: return _p.au($[0])
                            }
                        })
                    }
                )
                return ['component', {
                    'location': p_location,
                    'signature': p_signature,
                    'arguments': p_arguments,
                    'constraints': p_constraints,
                }]
            })
            case 'dictionary': return _p.ss($, ($) => {
                const p_definition = $p.definition[0] !== 'dictionary'
                    ? _i_generic.abort.wrong_state("dictionary", $p.definition[0], loc, abort)
                    : $p.definition[1]

                const p_benchmark = $.benchmark.__o_map(($) => {
                    const p_selection = Guaranteed_Value_Selection(
                        $.selection,
                        abort,
                        $l,
                        $p,
                    )

                    const p_resulting_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint ('selection')
                        ? _i_generic.abort.wrong_state("dictionary", p_selection['resulting node'][0], loc, abort)
                        : p_selection['resulting node'][1]
                    return {
                        'selection': p_selection,
                        'resulting dictionary': p_resulting_dictionary,
                        'dense': $.dense
                    }
                })
                return ['dictionary', {
                    'definition': p_definition,
                    'benchmark': p_benchmark,
                    'resolver': Node_Resolver(
                        $.resolver,
                        abort,
                        $l,
                        {
                            'linked entry': p_benchmark.__decide( //optional value result ('benchmark')
                                ($) => _p.optional.set($),
                                () => $p['linked entry']
                            ),
                            'definition': p_definition.node,
                            'current dictionary': _p.optional.set(p_definition),
                            'current ordered dictionary': _p.optional.set(p_definition),//FIXME: is it ordered

                            'types': $p.types,
                            'imports': $p.imports,
                            'signature': $p.signature,
                            'signatures': $p.signatures,
                            'list cursor': $p['list cursor'],
                            'option constraints': $p['option constraints'],
                        },
                    ),
                }]
            })
            case 'group': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'group'
                    ? _i_generic.abort.wrong_state("group", $p.definition[0], loc, abort)
                    : $p.definition[1]

                const p_properties = _i_generic.resolve_dense_ordered_dictionary(
                    $,
                    abort,
                    x,
                    ($, ref, $acyclic, $cyclic): d_out.Node_Resolver_Group.D => {

                        const p_definition = _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(x, null),
                            ref,
                            abort,
                        )
                        const p_resolver = Node_Resolver(
                            $.resolver,
                            abort,
                            {
                                //special
                                'sibling property resolvers': $acyclic,
                                'parent sibling property resolvers': $l['sibling property resolvers'],

                                //copy
                            },
                            {
                                'definition': p_definition.entry.node,

                                'types': $p.types,
                                'imports': $p.imports,
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
                            'definition': p_definition.entry,
                            'resolver': p_resolver,
                        }
                    },
                )
                return ['group', p_properties]
            })
            case 'list': return _p.ss($, ($) => {
                const p_definition = $p.definition[0] !== 'list'
                    ? _i_generic.abort.wrong_state("list", $p.definition[0], loc, abort)
                    : $p.definition[1]
                const p_result = $.result.__o_map(($) => Type_Reference(
                    $,
                    abort,
                    {
                        'types': _i_generic.dictionary_to_lookup($p.types, null),
                    },
                    {
                        'imports': $p.imports,
                    },
                ))
                const p_resolver = Node_Resolver(
                    $.resolver,
                    abort,
                    $l,
                    {
                        'definition': p_definition.node,
                        'list cursor': p_result.__decide( // optional value result ('result')
                            ($) => _p.optional.set($),
                            () => $p['list cursor']
                        ), //setting the cursor

                        'types': $p.types,
                        'imports': $p.imports,
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
            case 'nothing': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'nothing'
                    ? _i_generic.abort.wrong_state("nothing", $p.definition[0], loc, abort)
                    : $p.definition[1]
                return ['nothing', null]
            })
            case 'number': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'number'
                    ? _i_generic.abort.wrong_state("number", $p.definition[0], loc, abort)
                    : $p.definition[1]
                return ['number', null]
            })
            case 'optional': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'optional'
                    ? _i_generic.abort.wrong_state("optional", $p.definition[0], loc, abort)
                    : $p.definition[1]

                const p_constraints: d_out.Node_Resolver.state_group.states.D.constraints = Option_Constraints(
                    $.constraints,
                    abort,
                    $l,
                    $p,
                )
                const p_resolver = Node_Resolver(
                    $.resolver,
                    abort,
                    {
                        'sibling property resolvers': $l['sibling property resolvers'],
                        'parent sibling property resolvers': $l['parent sibling property resolvers'],
                    },
                    {
                        'definition': x,
                        'option constraints': _p.optional.set(p_constraints),

                        'types': $p.types,
                        'imports': $p.imports,
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
            case 'reference': return _p.ss($, ($): d_out.Node_Resolver => {
                const p_definition = $p.definition[0] !== 'reference'
                    ? _i_generic.abort.wrong_state("reference", $p.definition[0], loc, abort)
                    : $p.definition[1]
                return ['reference', {
                    'definition': p_definition,
                    'type': _p.deprecated_cc($.type['state group'], ($): d_out.Node_Resolver.reference._type => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => {
                                const p_definition_2 = p_definition.type[0] !== 'derived'
                                    ? _i_generic.abort.wrong_state("derived", p_definition.type[0], loc, abort)
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
                            case 'selected': return _p.ss($, ($) => {
                                const p_definition_2 = p_definition.type[0] !== 'selected'
                                    ? _i_generic.abort.wrong_state("selected", p_definition.type[0], loc, abort)
                                    : p_definition.type[1]
                                const p_lookup = Lookup_Selection(
                                    $.lookup,
                                    abort,
                                    $l,
                                    $p,
                                )
                                const p_constraints = Property_Constraints(
                                    $.constraints,
                                    abort,
                                    null,
                                    {
                                        'node': p_lookup['resulting dictionary'].node
                                    }
                                )
                                return ['selected', {
                                    'definition': p_definition_2,
                                    'lookup': p_lookup,
                                    'constraints': p_constraints,
                                }]
                            })
                            default: return _p.au($[0])
                        }
                    })
                }]
            })
            case 'state group': return _p.ss($, ($): d_out.Node_Resolver => {
                const p_definition = $p.definition[0] !== 'state group'
                    ? _i_generic.abort.wrong_state("state group", $p.definition[0], loc, abort)
                    : $p.definition[1]

                const p_states: d_out.Node_Resolver.state_group.states = _i_generic.resolve_dense_dictionary(
                    $.states,
                    abort,
                    p_definition,
                    ($, ref, $acyclic, $cyclic) => {

                        const x2 = _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(p_definition, null),
                            ref,
                            abort,
                        )
                        const p_constraints: d_out.Node_Resolver.state_group.states.D.constraints = Option_Constraints(
                            $.constraints,
                            abort,
                            $l,
                            $p,
                        )
                        const vr = Node_Resolver(
                            $['resolver'],
                            abort,
                            {
                                'sibling property resolvers': $l['sibling property resolvers'],
                                'parent sibling property resolvers': $l['parent sibling property resolvers'],
                            },
                            {
                                'definition': x2.entry.node,
                                'option constraints': _p.optional.set(p_constraints),

                                'types': $p.types,
                                'imports': $p.imports,
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


                // case 'state group': return pa.ss($, ($): _i_generic.Resolved_Step<_i_out.Relative_Value_Selection.tail.L, _i_out.Type_Node> => pa.deprecated_block(() => {
                //     return pa.deprecated_block(() => {

                //         const sc_definition: _i_out.Type_Node.state_group = pa.deprecated_cc(current, ($) => {
                //             if ($[0] !== 'state group') {
                //                 return pa.panic(`not a 'state group' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                //             }
                //             return $[1]
                //         })
                //         const p_type: _i_out.Relative_Value_Selection.tail.L.state_group._type = pa.deprecated_cc($['type'], ($) => Type_Reference(
                //             $,
                //             {
                //                 'location 2 string': l2s,
                //                 'parameters': ({
                //                     'lookups': ({
                //                         'imports': $l.imports,
                //                         'types': $l.types,
                //                     }),
                //                     'values': null,
                //                 }),
                //             }
                //         ))
                //         const p_states: _i_out.Relative_Value_Selection.tail.L.state_group.states = pa.deprecated_cc($['states'], ($) => _i_generic.resolve_dense_dictionary(
                //             $,
                //             {
                //                 'location 2 string': l2s,
                //                 'map': ($, $p) => {
                //                     const linked_entry = _i_generic.get_entry(
                //                         _i_generic.dictionary_to_lookup(sc_definition, null),
                //                         {
                //                             'location 2 string': l2s,
                //                             'reference': {
                //                                 'key': $.key,
                //                                 'location': $.location
                //                             },
                //                         }
                //                     )
                //                     return $.value.__d_map(($) => Value_Selection_Tail(
                //                         $,
                //                         {
                //                             'location 2 string': l2s,
                //                             'parameters': {
                //                                 'lookups': $l,
                //                                 'values': {
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
                //             'element': ['state group', ({
                //                 'definition': sc_definition,
                //                 'states': p_states,
                //                 'type': p_type,
                //             })]
                //         }
                //     })
                // }))
                return ['state group', {
                    'definition': p_definition,
                    'states': p_states,
                }]
            })
            case 'text': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'text'
                    ? _i_generic.abort.wrong_state("text", $p.definition[0], loc, abort)
                    : $p.definition[1]
                return ['text', null]
            })
            // case 'type parameter': return _pt.ss($, ($) => {

            //     const x = $p.definition[0] !== 'type parameter'
            //         ? _pt.fixme_abort("not a 'type parameter' but a '", $p.definition[0], "' @ ", $p['location 2 string'](loc))
            //         : $p.definition[1]
            //     return ['type parameter', null]
            // })
            default: return _p.au($[0])
        }
    })
    return p_type
}

export const Relative_Value_Selection: signatures.Relative_Value_Selection = ($, abort, $l, $p) => _p.deprecated_block(() => {

    const p_path: d_out.Relative_Value_Selection.path = _i_generic.resolve_path(
        $.path,
        $p.node,
        ($, current): d_out.Relative_Value_Selection.path.L => {
            const sg_loc = $.location
            return _p.deprecated_cc($['state group'], ($): d_out.Relative_Value_Selection.path.L => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => {

                        const sc_definition: d_out.Type_Node.component = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'component') {
                                return _i_generic.abort.tbd(`not a 'component' but a '${$[0]}'`, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            '_': ['component', null],
                            'referred': _p.deprecated_cc(sc_definition, ($) => {
                                switch ($[0]) {
                                    case 'external': return _p.ss($, ($) => $.type.entry.node)
                                    case 'internal': return _p.ss($, ($) => $.entry.node)
                                    case 'internal cyclic': return _p.ss($, ($) => $.entry['get circular dependent']().node) //this is safe, the types have been resolved at this stage
                                    default: return _p.au($[0])
                                }
                            })
                        }
                    })
                    case 'group': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.group = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'group') {
                                return _i_generic.abort.tbd(`not a 'group' but a '${$[0]}'`, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(sc_definition, null),
                            $,
                            abort,
                        )
                        return {
                            '_': ['group', p_child],
                            'referred': p_child.entry.node
                        }
                    })
                    case 'reference': return _p.ss($, ($): d_out.Relative_Value_Selection.path.L => {

                        const sc_definition: d_out.Type_Node.reference = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'reference') {
                                return _i_generic.abort.tbd(`not a 'reference' but a '${$[0]}'`, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const referent: d_out.Type_Node_Reference = sc_definition.referent
                        const x: d_out.Type_Node = _p.deprecated_cc(sc_definition.type, ($) => {
                            switch ($[0]) {
                                case 'derived': return _p.ss($, ($) => referent['resulting node'])
                                case 'selected': return _p.ss($, ($) => _p.deprecated_cc(referent['resulting node'], ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return _p.ss($, ($) => $.node)
                                        default: return _i_generic.abort.tbd("not a dictionary @ ", sg_loc, abort)
                                    }
                                }))
                                default: return _p.au($[0])
                            }
                        })
                        return {
                            '_': ['reference', {
                                'definition': sc_definition
                            }],
                            'referred': x
                        }
                    })
                    default: return _p.au($[0])
                }
            })
        }
    )
    return {
        'path': p_path,
        'resulting node': p_path.referred, // list result
    }
})

export const Possible_Value_Selection: signatures.Optional_Value_Initialization = ($, abort, $l, $p) => _p.deprecated_block(() => _p.deprecated_cc($['state group'], ($) => {
    switch ($[0]) {
        case 'not set': return _p.ss($, ($) => ['not set', null])
        case 'set': return _p.ss($, ($) => ['set', Guaranteed_Value_Selection($, abort, $l, $p)])
        case 'selection': return _p.ss($, ($): d_out.Optional_Value_Initialization => {
            return ['selection', Possibly_Optional($, abort, $l, $p)]
        })
        default: return _p.au($[0])
    }
}))

export const Possibly_Optional: signatures.Possible_Value_Selection = ($, abort, $l, $p) => _p.deprecated_block(() => {
    return _p.deprecated_cc($['state group'], ($) => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry(
                _i_generic.dictionary_to_lookup($p.signature['resolved parameters'].values, null),
                $,
                abort,
            )])
            case 'result': return _p.ss($, ($) => ['result', _p.deprecated_cc($['state group'], ($): d_out.Possible_Value_Selection.result => {
                switch ($[0]) {
                    case 'state group': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Possible_Value_Selection.result.state_group.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_state_group = _p.deprecated_cc($['state group'], ($) => p_sibling.entry.resolver[0] !== 'state group'
                            ? _i_generic.abort.wrong_state("state group", p_sibling.entry.resolver[0], loc, abort)
                            : p_sibling.entry.resolver[1])

                        const p_result = Type_Reference(
                            $.result,
                            abort,
                            {
                                'types': _i_generic.dictionary_to_lookup($p.types, null),
                            },
                            {
                                'imports': $p.imports,
                            },
                        )
                        return ['state group', {
                            'property': p_sibling,
                            'state group': p_state_group,
                            'result': p_result,
                        }]
                    })
                    case 'optional value': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Possible_Value_Selection.result.optional_value.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_optional_value = _p.deprecated_cc($['optional value'], ($) => p_sibling.entry.resolver[0] !== 'optional'
                            ? _i_generic.abort.wrong_state("optional", p_sibling.entry.resolver[0], loc, abort)
                            : p_sibling.entry.resolver[1])
                        const p_result = Type_Reference(
                            $.result,
                            abort,
                            {
                                'types': _i_generic.dictionary_to_lookup($p.types, null),
                            },
                            {
                                'imports': $p.imports,
                            },
                        )
                        return ['optional value', {
                            'property': p_sibling,
                            'optional value': p_optional_value,
                            'result': p_result,
                        }]
                    })
                    default: return _p.au($[0])
                }
            })])
            default: return _p.au($[0])
        }
    })
})

export const Guaranteed_Value_Selection: signatures.Guaranteed_Value_Selection = ($, abort, $l, $p) => _p.deprecated_block(() => _p.deprecated_block(() => {
    const start_location = $.start.location
    const p_start: d_out.Guaranteed_Value_Selection.start = _p.deprecated_cc($.start['state group'], ($): d_out.Guaranteed_Value_Selection.start => {
        switch ($[0]) {
            case 'constraint': return _p.ss($, ($): d_out.Guaranteed_Value_Selection.start => ['constraint', _p.deprecated_cc($['state group'], ($): d_out.Guaranteed_Value_Selection.start.constraint => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))

                        const x_component = p_sibling.entry.resolver[0] !== 'component'
                            ? _i_generic.abort.wrong_state("component", p_sibling.entry.resolver[0], loc, abort)
                            : p_sibling.entry.resolver[1]

                        const p_constraint = _p.deprecated_cc($['constraint'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(x_component.constraints, null),
                            $,
                            abort,
                        ))
                        return ['component', {
                            'property': p_sibling,
                            'constraint': p_constraint
                        }]
                    })
                    case 'reference': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))

                        const x_reference = p_sibling.entry.resolver[0] !== 'reference'
                            ? _i_generic.abort.wrong_state("reference", p_sibling.entry.resolver[0], loc, abort)
                            : p_sibling.entry.resolver[1]

                        const x_reference_selected = x_reference.type[0] !== 'selected'
                            ? _i_generic.abort.wrong_state("selected", x_reference.type[0], loc, abort)
                            : x_reference.type[1]

                        const p_constraint = _p.deprecated_cc($['constraint'], ($) => _i_generic.get_entry(
                            _i_generic.dictionary_to_lookup(x_reference_selected.constraints, null),
                            $,
                            abort,
                        ))
                        return ['reference', {
                            'property': p_sibling,
                            'constraint': p_constraint
                        }]
                    })
                    default: return _p.au($[0])
                }
            })])
            case 'list cursor': return _p.ss($, ($) => ['list cursor', null])
            case 'linked entry': return _p.ss($, ($) => ['linked entry', null])
            case 'option constraint': return _p.ss($, ($): d_out.Guaranteed_Value_Selection.start => {
                const sc = $p['option constraints'].__decide(
                    ($) => $,
                    () => _i_generic.abort.wrong_state("option", "not in an option", start_location, abort)
                )
                return ['option constraint', _i_generic.get_entry(
                    _i_generic.dictionary_to_lookup(sc, null),
                    $,
                    abort,
                )]
            })
            case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry(
                _i_generic.dictionary_to_lookup($p.signature['resolved parameters'].values, null),
                $,
                abort,
            )])
            case 'result': return _p.ss($, ($) => ['result', _p.deprecated_cc($['state group'], ($): d_out.Guaranteed_Value_Selection.start.result => {
                switch ($[0]) {
                    case 'list': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Guaranteed_Value_Selection.start.result.list.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_list_result_a = _p.deprecated_cc($['list result'], ($) => p_sibling.entry.resolver[0] !== 'list'
                            ? _i_generic.abort.wrong_state("list", p_sibling.entry.resolver[0], loc, abort)
                            : p_sibling.entry.resolver[1])
                        const p_list_result: d_out.Guaranteed_Value_Selection.start.result.list.list_result = p_list_result_a.result.__decide(
                            ($) => $,
                            () => _i_generic.abort.tbd("there is no list result", loc, abort)
                        )
                        return ['list', {
                            'property': p_sibling,
                            'list result': p_list_result,
                        }]
                    })
                    case 'state group': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Guaranteed_Value_Selection.start.result.state_group.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_state_group = _p.deprecated_cc($['state group'], ($) => p_sibling.entry.resolver[0] !== 'state group'
                            ? _i_generic.abort.wrong_state("state group", p_sibling.entry.resolver[0], loc, abort)
                            : p_sibling.entry.resolver[1])
                        return ['state group', {
                            'property': p_sibling,
                            'state group': p_state_group,
                            'result': Type_Reference(
                                $.result,
                                abort,
                                {
                                    'types': _i_generic.dictionary_to_lookup($p.types, null),
                                },
                                {
                                    'imports': $p.imports,
                                },
                            )
                        }]
                    })
                    case 'optional value': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Guaranteed_Value_Selection.start.result.optional_value.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_optional_value = _p.deprecated_cc($['optional value'], ($) => p_sibling.entry.resolver[0] !== 'optional'
                            ? _i_generic.abort.wrong_state("optional", p_sibling.entry.resolver[0], loc, abort)
                            : p_sibling.entry.resolver[1])
                        return ['optional value', {
                            'property': p_sibling,
                            'optional value': p_optional_value,
                            'result': Type_Reference(
                                $.result,
                                abort,
                                {
                                    'types': _i_generic.dictionary_to_lookup($p.types, null),
                                },
                                {
                                    'imports': $p.imports,
                                },
                            )
                        }]
                    })
                    default: return _p.au($[0])
                }
            })])
            case 'sibling': return _p.ss($, ($): d_out.Guaranteed_Value_Selection.start => ['sibling', _i_generic.get_entry(
                $l['sibling property resolvers'],
                $,
                abort,
            )])
            case 'parent sibling': return _p.ss($, ($): d_out.Guaranteed_Value_Selection.start => ['parent sibling', _i_generic.get_entry(
                $l['parent sibling property resolvers'],
                $,
                abort,
            )])
            default: return _p.au($[0])
        }
    })
    const p_tail = Relative_Value_Selection(
        $.tail,
        abort,
        null,
        {
            'node': _p.deprecated_block(() => {
                const pvs = ($: d_out.Possible_Value_Selection) => _p.deprecated_cc($, ($): d_out.Type_Node => {
                    return _p.deprecated_cc($, ($) => {
                        switch ($[0]) {
                            case 'parameter': return _p.ss($, ($) => $.entry['data type']['resulting node'])
                            case 'result': return _p.ss($, ($) => _p.deprecated_cc($, ($) => {
                                switch ($[0]) {
                                    case 'state group': return _p.ss($, ($) => $.result['resulting node'])
                                    case 'optional value': return _p.ss($, ($) => $.result['resulting node'])
                                    default: return _p.au($[0])
                                }
                            }))
                            default: return _p.au($[0])
                        }
                    })
                })
                const start_loc = $.start.location
                const gvs_start = ($: d_out.Guaranteed_Value_Selection.start) => _p.deprecated_cc($, ($): d_out.Type_Node => {
                    switch ($[0]) {
                        case 'constraint': return _p.ss($, ($) => _p.deprecated_cc($, ($) => {
                            switch ($[0]) {
                                case 'component': return _p.ss($, ($) => _p.deprecated_cc($.constraint.entry.constraint.type, ($) => {
                                    switch ($[0]) {
                                        case 'state': return _p.ss($, ($) => $.state.entry.node)
                                        case 'optional value': return _p.ss($, ($) => $['selected optional value'])
                                        default: return _p.au($[0])
                                    }
                                }))
                                case 'reference': return _p.ss($, ($) => _p.deprecated_cc($.constraint.entry.constraint.type, ($) => {
                                    switch ($[0]) {
                                        case 'state': return _p.ss($, ($) => $.state.entry.node)
                                        case 'optional value': return _p.ss($, ($) => $['selected optional value'])

                                        default: return _p.au($[0])
                                    }
                                }))

                                default: return _p.au($[0])
                            }
                        }))
                        case 'parameter': return _p.ss($, ($) => $.entry['data type']['resulting node'])
                        case 'result': return _p.ss($, ($) => _p.deprecated_cc($, ($) => {
                            switch ($[0]) {
                                case 'state group': return _p.ss($, ($) => $.result['resulting node'])
                                case 'optional value': return _p.ss($, ($) => $.result['resulting node'])
                                case 'list': return _p.ss($, ($) => $['list result']['resulting node'])
                                default: return _p.au($[0])
                            }
                        }))
                        case 'list cursor': return _p.ss($, ($) => $p['list cursor'].__decide(
                            ($) => $['resulting node'],
                            () => _i_generic.abort.tbd("there is no cursor", start_loc, abort)
                        ))
                        case 'linked entry': return _p.ss($, ($) => $p['linked entry'].__decide(
                            ($) => $['resulting dictionary'].node,
                            () => _i_generic.abort.tbd(`there is no linked entry`, start_loc, abort)
                        ))
                        case 'option constraint': return _p.ss($, ($) => _p.deprecated_cc($.entry, ($) => {
                            switch ($[0]) {
                                case 'state': return _p.ss($, ($) => $.state.entry.node)
                                case 'assert is set': return _p.ss($, ($) => pvs($))
                                default: return _p.au($[0])
                            }
                        }))
                        case 'sibling': return _p.ss($, ($) => $.entry.definition.node)
                        case 'parent sibling': return _p.ss($, ($) => $.entry.definition.node)
                        default: return _p.au($[0])
                    }
                })
                return gvs_start(p_start)
            })
        },
    )
    const p_resulting_type: d_out.Type_Node = p_tail['resulting node']
    return ({
        'start': p_start,
        'tail': p_tail,
        'resulting node': p_resulting_type,
    })
}))

export const Type_Specification: signatures.Type_Specification = ($, abort, $l, $p) => _p.deprecated_block(() => ({
    'schema': Schema_Tree(
        $.schema,
        abort,
        {
            'sibling schemas': _i_generic.stack.empty(),
        },
        $p,
    ),
    'schema path': $['schema path'].list.__l_map(($) => $.element),
    'type': $.type,
}))