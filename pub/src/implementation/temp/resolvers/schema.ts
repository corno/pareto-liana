import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _p_temp from '../temp_core'

// import * as _i_generic from 'pareto-core/dist/algorithm_types/refiner/resolve'
import * as signatures from "../../../interface/generated/liana/schemas/schema/resolve"

import * as d_out from "../../../interface/generated/liana/schemas/schema/data/resolved"

import * as _i_generic from "../resolve_generic"

// import * as _r from "../../../interface/generated/liana/generic/resolved"

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

export const Imports: signatures.Imports = ($, abort, $l, $p) => _p.deprecated_block(() => _p.deprecated_cc($, ($) => _p.dictionary.resolve(
    $.dictionary,
    ($, key) => _p.deprecated_cc($, ($) => _p.deprecated_cc($, ($): d_out.Imports.D => {
        const p_schema_set_child: d_out.Imports.D.schema_set_child = _p.deprecated_cc($.entry['schema set child'], ($) => _i_generic.get_entry_stack(
            $l['sibling schemas'],
            $,
            abort,
        ))
        const loc = $.entry['schema set child'].location
        const p_schema: d_out.Imports.D.schema = _p.deprecated_cc($.entry['schema'], ($) => _p.deprecated_cc(p_schema_set_child.entry, ($) => { // reference constraint ('schema set child')
            switch ($[0]) {
                case 'schema': return _p.ss($, ($) => $)
                default: return _i_generic.abort.state_constraint("set", $, loc, abort)
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
    const p_type: d_out.Lookup_Selection.type_ = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($.state, ($): d_out.Lookup_Selection.type_ => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => {
                const p_selection = Guaranteed_Value_Selection(
                    $.selection,
                    abort,
                    $l,
                    $p,
                )

                const p_selected_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint (selection)
                    ? _i_generic.abort.state_constraint(
                        "dictionary",
                        p_selection['resulting node'],
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
                () => _i_generic.abort.is_set_assertion("current directory", loc, abort)
            )])
            case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                _p_temp.dictionary_to_lookup($p.signature['resolved parameters'].lookups),
                $,
                abort
            )])
            case 'possibly circular dependent siblings': return _p.ss($, ($) => ['possibly circular dependent siblings', $p['current dictionary'].__decide(
                ($) => $,
                () => _i_generic.abort.is_set_assertion("current directory", loc, abort)
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
        'precision': _p.deprecated_cc($.precision.state, ($): d_out.Number_Type.precision => {
            switch ($[0]) {
                case 'exact': return _p.ss($, ($) => {
                    return ['exact', {
                        'type': _p.deprecated_cc($.type.state, ($) => {
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

    const p_parameters_values: d_out.Signature_Parameters.values = _p.dictionary.resolve(
        $.values.dictionary,
        ($, key, $acyclic, $cyclic) => {

            const p_schema_type = Type_Reference(
                $.entry['data type'],
                abort,
                {
                    'types': _p_temp.dictionary_to_lookup($p.types),
                },
                {
                    'imports': _p.optional.not_set(),
                },

            )
            const p_presence = $.entry.presence.state

            return {
                'data type': p_schema_type,
                'presence': p_presence,
            }
        },
    )
    const lookups_loc = $.lookups.location
    const p_parameters_lookups: d_out.Signature_Parameters.lookups = _p.dictionary.resolve(
        $.lookups.dictionary,
        ($, key, $acyclic, $cyclic) => {
            const p_referent = Type_Reference(
                $.entry.referent,
                abort,
                {
                    'types': _p_temp.dictionary_to_lookup($p.types),
                },
                {
                    'imports': _p.optional.not_set(),
                },

            )

            const p_type: d_out.Signature_Parameters.lookups.D.type_ = _p.deprecated_cc($.entry.type.state, ($) => {
                switch ($[0]) {
                    case 'acyclic': return _p.ss($, ($) => ['acyclic', null])
                    case 'cyclic': return _p.ss($, ($) => ['cyclic', null])
                    case 'stack': return _p.ss($, ($) => ['stack', $])
                    default: return _p.au($[0])
                }
            })
            const p_presence = $.entry.presence.state
            return {
                'referent': p_referent,
                'dictionary': _p.deprecated_cc(p_referent['resulting type'].node, ($) => { // component constraint (referent)
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => $)
                        // default: return _i_generic.abort.tbd(`not a 'dictionary' but a '${$[0]}' @ ${$p['location 2 string'](lookups_loc)}`)
                        default: return _i_generic.abort.state_constraint(
                            "dictionary",
                            $,
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
    const p_number_types: d_out.Globals.number_types = _p.dictionary.resolve(
        $['number types'].dictionary,
        ($, key, $acyclic, $cyclic) => Number_Type(
            $.entry,
            abort,
            null,
            null,
        ),
    )
    const p_text_types: d_out.Globals.text_types = _p.dictionary.resolve(
        $['text types'].dictionary,
        ($, key, $acyclic, $cyclic) => Text_Type(
            $.entry,
            abort,
            null,
            null,
        ),
    )
    return {
        'number types': p_number_types,
        'text types': p_text_types,
        'complexity': $['complexity'].state,
    }
}

export const Signature: signatures.Signature = ($, abort, $l, $p) => {
    const p_parameters: d_out.Signature.parameters = _p.deprecated_cc($.parameters.state, ($): d_out.Signature.parameters => {
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
            case 'same as': return _p.ss($, ($) => ['same as', _i_generic.get_entry_acyclic(
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
    return _i_generic.resolve_dense_dictionary(
        $.dictionary,
        $.location,
        abort,
        $p.types,
        ($, key, $acyclic, $cyclic) => {
            const p_linked_entry = _i_generic.get_entry_acyclic(
                _p_temp.dictionary_to_lookup($p.types),
                {
                    'key': key,
                    'location': $.location,
                },
                abort,
            )

            return Signature(
                $.entry,
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

export const Schema_Tree: signatures.Schema_Tree = ($, abort, $l, $p) => _p.deprecated_block(() => _p.deprecated_cc($.state, ($): d_out.Schemas.D => {
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
            const p_types: d_out.Types = _p.dictionary.resolve(
                $.types.dictionary,
                ($, key, $acyclic, $cyclic) => {
                    const p_type = Type_Node(
                        $.entry.node,
                        abort,
                        {
                            'noncircular sibling types': $acyclic,
                            'possibly circular dependent sibling types': $cyclic,
                        },
                        {
                            'imports': _p.optional.set(p_imports),
                            'globals': _p.optional.set(p_globals),
                        },

                    )
                    return {
                        'node': p_type,

                    }
                },
            )
            const p_complexity: d_out.Schema.complexity = _p.deprecated_cc($.complexity.state, ($) => {
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
                        const p_resolvers: d_out.Resolve_Logic.resolvers = _i_generic.resolve_dense_dictionary(
                            $.resolvers.dictionary,
                            $.resolvers.location,
                            abort,
                            p_signatures.types,
                            ($, key, $acyclic, $cyclic) => {

                                const p_linked_entry = _i_generic.get_entry_acyclic(
                                    _p_temp.dictionary_to_lookup(p_types),
                                    {
                                        'key': key,
                                        'location': $.location,
                                    },
                                    abort,
                                )
                                const p_signature = _i_generic.get_entry_acyclic(
                                    _p_temp.dictionary_to_lookup(p_signatures.types),
                                    {
                                        'key': key,
                                        'location': $.location,
                                    },
                                    abort,
                                )

                                const p_type_resolver = Node_Resolver(
                                    $.entry['type resolver'],
                                    abort,
                                    {
                                        'sibling property resolvers': _p_temp.acyclic.not_set(),
                                        'parent sibling property resolvers': _p_temp.acyclic.not_set(),

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

export const Schemas: signatures.Schemas = ($, abort, $l, $p) => _p.deprecated_block(() => _p.dictionary.resolve(
    $.dictionary,
    ($, key, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => Schema_Tree(
        $.entry,
        abort,
        {
            'sibling schemas': _p_temp.push_stack($l['sibling schemas'], $acyclic)
        },
        null,
    )),
))

export const Text_Type: signatures.Text_Type = ($, abort, $l, $p) => {
    return {
        'type': _p.deprecated_cc($.type.state, ($): d_out.Text_Type.type_ => {
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
    return _p.deprecated_cc($.state, ($): d_out.Type_Node => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($): d_out.Type_Node => ['boolean', null])
            case 'number': return _p.ss($, ($): d_out.Type_Node => ['number', _p.deprecated_cc($.state, ($): d_out.Type_Node.number_ => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($): d_out.Type_Node.number_ => ['global', _i_generic.get_entry_acyclic(
                        _p_temp.dictionary_to_lookup(
                            $p.globals.__decide(
                                ($) => $['number types'],
                                () => _i_generic.abort.is_set_assertion("globals", $.location, abort)
                            ),
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
            case 'text': return _p.ss($, ($): d_out.Type_Node => ['text', _p.deprecated_cc($.state, ($): d_out.Type_Node.text => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($): d_out.Type_Node.text => ['global', _i_generic.get_entry_acyclic(
                        _p_temp.dictionary_to_lookup(
                            $p.globals.__decide(
                                ($) => $['text types'],
                                () => _i_generic.abort.is_set_assertion("globals", $.location, abort)
                            ),
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
            case 'component': return _p.ss($, ($): d_out.Type_Node => ['component', _p.deprecated_cc($.state, ($): d_out.Type_Node.component => {
                switch ($[0]) {
                    case 'external': return _p.ss($, ($) => {
                        const sc_import = $p.imports.__decide(
                            ($) => $,
                            () => _i_generic.abort.is_set_assertion("imports", $.import.location, abort)
                        )
                        const p_import = _i_generic.get_entry_acyclic(
                            _p_temp.dictionary_to_lookup(sc_import),
                            $.import,
                            abort,
                        )
                        return ['external', {
                            'import': p_import,
                            'type': _i_generic.get_entry_acyclic(
                                _p_temp.dictionary_to_lookup(p_import.entry.schema.types),
                                $.type,
                                abort,
                            )
                        }]
                    })
                    case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry_acyclic(
                        $l['noncircular sibling types'],
                        $,
                        abort,
                    )])
                    case 'internal cyclic': return _p.ss($, ($) => ['internal cyclic', _i_generic.get_entry_cyclic(
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
                }]
            })
            case 'group': return _p.ss($, ($) => ['group', _p.dictionary.resolve(
                $.dictionary,
                ($, key, $acyclic, $cyclic) => ({
                    'description': $.entry.description,
                    'node': Type_Node(
                        $.entry.node,
                        abort,
                        $l,
                        $p,
                    )
                }),
            )])
            case 'list': return _p.ss($, ($): d_out.Type_Node => {
                const p_type = Type_Node(
                    $.node,
                    abort,
                    $l,
                    $p,
                )
                return ['list', {
                    'node': p_type,
                    'result': $.result.__o_map(($) => Type_Reference(
                        $,
                        abort,
                        {
                            'types': $l['noncircular sibling types'],
                        },
                        {
                            'imports': $p.imports,
                        },
                    ))
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
                const temp = $p.globals.__decide(
                    ($) => {
                        $.complexity[0] === 'unconstrained'
                            ? _i_generic.abort.state_constraint("constrained", $.complexity, loc, abort)
                            : $.complexity[1]

                    },
                    () => _i_generic.abort.is_set_assertion("globals", loc, abort)
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
                const p_type: d_out.Type_Node.reference.type_ = _p.deprecated_cc($.type.state, ($) => {
                    switch ($[0]) {
                        case 'selected': return _p.ss($, ($) => {
                            return ['selected', {
                                'dictionary': _p.deprecated_cc(p_referent.path['resulting node'], ($) => { // component constraint (referent)
                                    switch ($[0]) {
                                        case 'dictionary': return _p.ss($, ($) => $)
                                        default: return _i_generic.abort.state_constraint(
                                            "dictionary",
                                            $,
                                            loc,
                                            abort,
                                        )

                                    }
                                }),
                                'dependency': _p.deprecated_cc($.dependency.state, ($) => {
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
                //         'dependency': $.dependency.state
                //     }]
                // }
            })
            case 'state': return _p.ss($, ($) => ['state', _p.dictionary.resolve(
                $.dictionary,
                ($, key, $acyclic, $cyclic) => ({
                    'description': $.entry.description,
                    'node': Type_Node(
                        $.entry.node,
                        abort,
                        $l,
                        $p,
                    ),
                }),
            )])
            // case 'type parameter': return _pt.ss($, ($) => ['type parameter', _i_generic.get_entry(
            //     _p_temp.dictionary_to_lookup(
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

export const Type_Reference: signatures.Type_Reference = ($, abort, $l, $p) => {
    const x: d_out.Type_Reference.location = _p.deprecated_cc($.location.state, ($) => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($): d_out.Type_Reference.location => {
                const sc_import = $p.imports.__decide(
                    ($) => $,
                    () => _i_generic.abort.is_set_assertion("imports", $.import.location, abort)
                )
                const p_import = _i_generic.get_entry_acyclic(
                    _p_temp.dictionary_to_lookup(sc_import),
                    $.import,
                    abort
                )
                return ['external', {
                    'import': p_import,
                    'type': _i_generic.get_entry_acyclic(
                        _p_temp.dictionary_to_lookup(p_import.entry.schema.types),
                        $.type,
                        abort,
                    )
                }]
            })
            case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry_acyclic(
                $l['types'],
                $,
                abort,
            )])
            default: return _p.au($[0])
        }
    })
    const p_resulting_type = _p.deprecated_cc(x, ($): d_out.Type => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($) => $.type.entry)
            case 'internal': return _p.ss($, ($) => $.entry)
            default: return _p.au($[0])
        }
    })
    return {
        'location': x,
        'resulting type': p_resulting_type,
        'resulting node': p_resulting_type.node,
    }
}


export const Type_Node_Reference: signatures.Type_Node_Reference = ($, abort, $l, $p) => {
    const p_type_location = Type_Reference(
        $['type location'],
        abort,
        $l,
        $p,
    )
    return {
        'type location': p_type_location,
        'path': Type_Node_Path(
            $.path,
            abort,
            null,
            {
                'type': p_type_location['resulting type']
            },
        ),
    }
}


export const Type_Node_Path: signatures.Type_Node_Path = ($, abort, $l, $p) => {
    const p_tail_x: d_out.Type_Node_Path.tail = _p_temp.map_with_state(
        $.tail.list,
        $p.type.node,
        ($, current): d_out.Type_Node_Path.tail.list.L => {
            const sg_loc = $.location
            return _p.deprecated_cc($.element.state, ($): d_out.Type_Node_Path.tail.list.L => {
                switch ($[0]) {
                    case 'dictionary': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.dictionary = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'dictionary') {
                                return _i_generic.abort.state_constraint("dictionary", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            'element': ['dictionary', null],
                            'result': sc_definition.node
                        }
                    })
                    case 'group': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.group = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'group') {
                                return _i_generic.abort.state_constraint("group", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry_acyclic(
                            _p_temp.dictionary_to_lookup(sc_definition),
                            $,
                            abort,
                        )
                        return {
                            'element': ['group', p_child],
                            'result': p_child.entry.node
                        }
                    })
                    case 'list': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.list = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'list') {
                                return _i_generic.abort.state_constraint("list", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            'element': ['list', null],
                            'result': sc_definition.node
                        }
                    })
                    case 'optional': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.optional = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'optional') {
                                return _i_generic.abort.state_constraint("optional", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            'element': ['optional', null],
                            'result': sc_definition
                        }
                    })
                    case 'state': return _p.ss($, ($) => {
                        const P_state: d_out.Type_Node.state = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'state') {
                                return _i_generic.abort.state_constraint("state", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry_acyclic(
                            _p_temp.dictionary_to_lookup(P_state),
                            $,
                            abort,
                        )
                        return {
                            'element': ['state', p_child],
                            'result': p_child.entry.node
                        }
                    })
                    default: return _p.au($[0])
                }
            })
        },
        ($, current) => $.result,
        (list, result) => ({
            'list': list,
            'result': result,
        })
    )
    return {
        'tail': p_tail_x,
        'resulting node': p_tail_x.result
    }
}

export const Option_Constraints: signatures.Option_Constraints = ($, abort, $l, $p) => {
    return _p.deprecated_cc($, ($) => _p.dictionary.resolve(
        $.dictionary,
        ($, key, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => _p.deprecated_cc($.entry.state, ($) => {
            switch ($[0]) {
                case 'state': return _p.ss($, ($) => ['state', _p.deprecated_block(() => {
                    const loc = $.selection.start.location
                    const p_selection: d_out.Option_Constraints.D.state.selection = _p.deprecated_cc($['selection'], ($) => Guaranteed_Value_Selection(
                        $,
                        abort,
                        $l,
                        $p,
                    ))
                    const p_selected_state = p_selection['resulting node'][0] !== 'state' // component constraint ('selection')
                        ? _i_generic.abort.state_constraint(
                            "state",
                            p_selection['resulting node'],
                            loc,
                            abort,
                        )
                        : p_selection['resulting node'][1]
                    const p_option: d_out.Option_Constraints.D.state.option = _p.deprecated_cc($['option'], ($) => _i_generic.get_entry_acyclic(
                        _p_temp.dictionary_to_lookup(p_selected_state),
                        $,
                        abort,
                    ))
                    return ({
                        'selected state': p_selected_state,
                        'selection': p_selection,
                        'option': p_option,
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
    const p_type: d_out.Constraint.type_ = _p.deprecated_cc($.type, ($) => _p.deprecated_cc($.state, ($) => {
        switch ($[0]) {
            case 'state': return _p.ss($, ($) => {
                const p_selected_state = p_selection['resulting node'][0] !== 'state' // component constraint ('selection')
                    ? _i_generic.abort.state_constraint(
                        "state",
                        p_selection['resulting node'],
                        loc,
                        abort,
                    )
                    : p_selection['resulting node'][1]
                const p_option: d_out.Constraint.type_.state.option = _p.deprecated_cc($['option'], ($) => _i_generic.get_entry_acyclic(
                    _p_temp.dictionary_to_lookup(p_selected_state),
                    $,
                    abort,
                ))
                return ['state', {
                    'selected state': p_selected_state,
                    'option': p_option,
                }]
            })
            case 'optional value': return _p.ss($, ($) => {
                const p_selected_optional_value = p_selection['resulting node'][0] !== 'optional' // component constraint ('selection')
                    ? _i_generic.abort.state_constraint(
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
            default: return _p.au($[0])
        }
    }))
    return {
        'selection': p_selection,
        'type': p_type,
    }
}

export const Property_Constraints: signatures.Property_Constraints = ($, abort, $l, $p) => {
    return _p.deprecated_cc($, ($) => _p.dictionary.resolve(
        $.dictionary,
        ($, key, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => _p.deprecated_block(() => {
            const p_start: d_out.Property_Constraint.start = _p.deprecated_cc($.entry.start.state, ($) => {
                switch ($[0]) {
                    case 'property': return _p.ss($, ($) => ['property', null])
                    case 'sibling': return _p.ss($, ($) => ['sibling', _i_generic.get_entry_acyclic(
                        $acyclic,
                        $,
                        abort,
                    )])
                    default: return _p.au($[0])
                }
            })
            const p_constraint: d_out.Property_Constraint.constraint = Constraint(
                $.entry.constraint,
                abort,
                null,
                {

                    'node': _p.deprecated_cc(p_start, ($) => {
                        switch ($[0]) {
                            case 'property': return _p.ss($, ($) => $p.node)
                            case 'sibling': return _p.ss($, ($) => _p.deprecated_cc($.entry.constraint.type, ($) => {
                                switch ($[0]) {
                                    case 'state': return _p.ss($, ($) => $.option.entry.node)
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
    const p_type = _p.deprecated_cc($.state, ($): d_out.Node_Resolver => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'boolean'
                    ? _i_generic.abort.state_constraint(
                        "boolean",
                        $p.definition,
                        loc,
                        abort,
                    )
                    : $p.definition[1]
                return ['boolean', null]
            })
            case 'component': return _p.ss($, ($): d_out.Node_Resolver => {
                const x = $p.definition[0] !== 'component'
                    ? _i_generic.abort.state_constraint(
                        "component",
                        $p.definition,
                        loc,
                        abort,
                    )
                    : $p.definition[1]
                const p_location = _p.deprecated_cc($.location.state, ($): d_out.Node_Resolver.component.location => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => {
                            const sc_import = $p.imports.__decide(
                                ($) => $,
                                () => _i_generic.abort.is_set_assertion("imports", loc, abort)
                            )
                            const p_import = _i_generic.get_entry_acyclic(
                                _p_temp.dictionary_to_lookup(sc_import),
                                $.import,
                                abort,
                            )
                            const pc_constrained: d_out.Schema.complexity.constrained = _p.deprecated_cc(p_import.entry.schema.complexity, ($) => {
                                switch ($[0]) {
                                    case 'constrained': return _p.ss($, ($) => $)
                                    default: return _i_generic.abort.state_constraint("constrained", $, loc, abort)
                                }
                            })
                            return ['external', {
                                'import': p_import,
                                'type': _i_generic.get_entry_acyclic(
                                    _p_temp.dictionary_to_lookup(pc_constrained.signatures.types),
                                    $.type,
                                    abort,
                                )
                            }]
                        })
                        case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry_acyclic(
                            _p_temp.dictionary_to_lookup(
                                $p['signatures'],
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
                        case 'internal cyclic': return _p.ss($, ($) => $.entry.get_circular_dependent())
                        default: return _p.au($[0])
                    }
                })
                if (p_signature.type.node !== x_type.node) {
                    _i_generic.abort.same_node_constraint("type.node", loc, abort)
                }
                const p_arguments: d_out.Node_Resolver.component.arguments_ = $.arguments.__decide(
                    ($) => {
                        const x: d_out.Node_Resolver.component.arguments_.O = {
                            'lookups': $.lookups.__decide(
                                ($) => _p.optional.set(_i_generic.resolve_dense_dictionary(
                                    $.dictionary,
                                    $.location,
                                    abort,
                                    p_signature['resolved parameters'].lookups,
                                    ($, key, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => {
                                        //do additional validation
                                        return _p.deprecated_cc($.entry.state, ($): d_out.Node_Resolver.component.arguments_.O.lookups.O.D => {
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

                                            _i_generic.abort.same_node_constraint("lookups", loc, abort)
                                        }
                                    }
                                    return _p.optional.not_set()
                                }
                            ),
                            'values': $.values.__decide(
                                ($) => {
                                    const values_location = $.location

                                    return _p.optional.set(_i_generic.resolve_dense_dictionary(
                                        $.dictionary,
                                        $.location,
                                        abort,
                                        p_signature['resolved parameters'].values,
                                        ($, key, $acyclic, $cyclic) => _p.deprecated_cc($, ($) => {
                                            const linked_entry = _i_generic.get_entry_acyclic(
                                                _p_temp.dictionary_to_lookup(p_signature['resolved parameters'].values),
                                                {
                                                    'key': key,
                                                    'location': $.location,
                                                },
                                                abort,
                                            )
                                            const out = _p.deprecated_cc($.entry.state, ($): d_out.Node_Resolver.component.arguments_.O.values.O.D => {
                                                switch ($[0]) {
                                                    case 'optional': return _p.ss($, ($) => ['optional', Possible_Value_Selection(
                                                        $,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )])
                                                    case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                                                        _p_temp.dictionary_to_lookup($p.signature['resolved parameters'].values),
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
                                                const focus = out

                                                const walk_path_till_end = ($: d_out.Type_Node): d_out.Type_Node => {
                                                    return _p.deprecated_cc($, ($) => {
                                                        switch ($[0]) {
                                                            case 'component': return _p.ss($, ($) => _p.deprecated_cc($, ($) => {
                                                                switch ($[0]) {
                                                                    case 'external': return _p.ss($, ($) => $.type.entry.node)
                                                                    case 'internal': return _p.ss($, ($) => $.entry.node)
                                                                    case 'internal cyclic': return _p.ss($, ($) => $.entry.get_circular_dependent().node) //IS THIS SAFE? I Am using a computed value (only available after resolving)
                                                                    default: return _p.au($[0])
                                                                }
                                                            }))
                                                            case 'reference': return _p.ss($, ($) => $.referent.path['resulting node'])
                                                            default: return $
                                                        }
                                                    })
                                                }

                                                _p.deprecated_cc(focus, ($) => {
                                                    switch ($[0]) {
                                                        case 'optional': return _p.ss($, ($) => {

                                                            if (benchmark.presence[0] !== 'optional') {
                                                                _i_generic.abort.state_constraint("optional", benchmark.presence, values_location, abort)
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

                                                                        if (walk_path_till_end(benchmark['data type']['resulting type'].node) !== walk_path_till_end($.tail['resulting node'])) {
                                                                            return _i_generic.abort.same_node_constraint(
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
                                                                return _i_generic.abort.same_node_constraint(
                                                                    "parameter presence",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                            if ($.entry['data type']['resulting type'] !== benchmark['data type']['resulting type']) {
                                                                return _i_generic.abort.same_node_constraint(
                                                                    "parameter data type",
                                                                    values_location,
                                                                    abort,
                                                                )
                                                            }
                                                        })
                                                        case 'required': return _p.ss($, ($) => {
                                                            if (benchmark.presence[0] !== 'required') {
                                                                _i_generic.abort.state_constraint("required", benchmark.presence, values_location, abort)
                                                            }
                                                            if (walk_path_till_end(benchmark['data type']['resulting type'].node) !== walk_path_till_end($.tail['resulting node'])) {
                                                                return _i_generic.abort.same_node_constraint(
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
                                            return _i_generic.abort.same_node_constraint(
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
                                return _i_generic.abort.same_node_constraint(
                                    "lookup parameters",
                                    loc,
                                    abort,
                                )
                            }
                            if (p_signature['resolved parameters'].values !== $p.signature['resolved parameters'].values) {
                                return _i_generic.abort.same_node_constraint(
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
                    ? _i_generic.abort.state_constraint("dictionary", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_benchmark = $.benchmark.__o_map(($) => {
                    const p_selection = Guaranteed_Value_Selection(
                        $.selection,
                        abort,
                        $l,
                        $p,
                    )

                    const p_resulting_dictionary = p_selection['resulting node'][0] !== 'dictionary' // component constraint ('selection')
                        ? _i_generic.abort.state_constraint("dictionary", p_selection['resulting node'], loc, abort)
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
                    ? _i_generic.abort.state_constraint("group", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_properties = _i_generic.resolve_dense_dictionary(
                    $.dictionary,
                    $.location,
                    abort,
                    x,
                    ($, key, $acyclic, $cyclic): d_out.Node_Resolver_Group.D => {

                        const p_definition = _i_generic.get_entry_acyclic(
                            _p_temp.dictionary_to_lookup(x),
                            {
                                'key': key,
                                'location': $.location,
                            },
                            abort,
                        )
                        const p_resolver = Node_Resolver(
                            $.entry.resolver,
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
                    ? _i_generic.abort.state_constraint("list", $p.definition, loc, abort)
                    : $p.definition[1]
                const p_result = $.result.__o_map(($) => Type_Reference(
                    $,
                    abort,
                    {
                        'types': _p_temp.dictionary_to_lookup($p.types),
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
                    ? _i_generic.abort.state_constraint("nothing", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['nothing', null]
            })
            case 'number': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'number'
                    ? _i_generic.abort.state_constraint("number", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['number', null]
            })
            case 'optional': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'optional'
                    ? _i_generic.abort.state_constraint("optional", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_constraints: d_out.Node_Resolver.state.states.D.constraints = Option_Constraints(
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
                    ? _i_generic.abort.state_constraint("reference", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['reference', {
                    'definition': p_definition,
                    'type': _p.deprecated_cc($.type.state, ($): d_out.Node_Resolver.reference.type_ => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => {
                                const p_definition_2 = p_definition.type[0] !== 'derived'
                                    ? _i_generic.abort.state_constraint("derived", p_definition.type, loc, abort)
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
                                    ? _i_generic.abort.state_constraint("selected", p_definition.type, loc, abort)
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
            case 'state': return _p.ss($, ($): d_out.Node_Resolver => {
                const p_definition = $p.definition[0] !== 'state'
                    ? _i_generic.abort.state_constraint("state", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_states: d_out.Node_Resolver.state.states = _i_generic.resolve_dense_dictionary(
                    $.states.dictionary,
                    $.states.location,
                    abort,
                    p_definition,
                    ($, key, $acyclic, $cyclic) => {

                        const x2 = _i_generic.get_entry_acyclic(
                            _p_temp.dictionary_to_lookup(p_definition),
                            {
                                'key': key,
                                'location': $.location,
                            },
                            abort,
                        )
                        const p_constraints: d_out.Node_Resolver.state.states.D.constraints = Option_Constraints(
                            $.entry.constraints,
                            abort,
                            $l,
                            $p,
                        )
                        const vr = Node_Resolver(
                            $.entry['resolver'],
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


                // case 'state': return pa.ss($, ($): _i_generic.Resolved_Step<_i_out.Relative_Value_Selection.tail.L, _i_out.Type_Node> => pa.deprecated_block(() => {
                //     return pa.deprecated_block(() => {

                //         const sc_definition: _i_out.Type_Node.state = pa.deprecated_cc(current, ($) => {
                //             if ($[0] !== 'state') {
                //                 return pa.panic(`not a 'state' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                //             }
                //             return $[1]
                //         })
                //         const p_type: _i_out.Relative_Value_Selection.tail.L.state.type_ = pa.deprecated_cc($['type'], ($) => Type_Reference(
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
                //         const p_states: _i_out.Relative_Value_Selection.tail.L.state.states = pa.deprecated_cc($['states'], ($) => _i_generic.resolve_dense_dictionary(
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
                    'states': p_states,
                }]
            })
            case 'text': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'text'
                    ? _i_generic.abort.state_constraint("text", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['text', null]
            })
            // case 'type parameter': return _pt.ss($, ($) => {

            //     const x = $p.definition[0] !== 'type parameter'
            //         ? _pt.fixme_abort("not a 'type parameter' but a '", $p.definition, "' @ ", $p['location 2 string'](loc))
            //         : $p.definition[1]
            //     return ['type parameter', null]
            // })
            default: return _p.au($[0])
        }
    })
    return p_type
}

export const Relative_Value_Selection: signatures.Relative_Value_Selection = ($, abort, $l, $p) => _p.deprecated_block(() => {

    const p_path: d_out.Relative_Value_Selection.path = _p_temp.map_with_state(
        $.path.list,
        $p.node,
        ($, current): d_out.Relative_Value_Selection.path.list.L => {
            const sg_loc = $.location
            return _p.deprecated_cc($.element.state, ($): d_out.Relative_Value_Selection.path.list.L => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => {

                        const sc_definition: d_out.Type_Node.component = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'component') {
                                return _i_generic.abort.state_constraint("component", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            'element': ['component', null],
                            'result': _p.deprecated_cc(sc_definition, ($) => {
                                switch ($[0]) {
                                    case 'external': return _p.ss($, ($) => $.type.entry.node)
                                    case 'internal': return _p.ss($, ($) => $.entry.node)
                                    case 'internal cyclic': return _p.ss($, ($) => $.entry.get_circular_dependent().node) //this is safe, the types have been resolved at this stage
                                    default: return _p.au($[0])
                                }
                            })
                        }
                    })
                    case 'group': return _p.ss($, ($) => {
                        const sc_definition: d_out.Type_Node.group = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'group') {
                                return _i_generic.abort.state_constraint("group", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry_acyclic(
                            _p_temp.dictionary_to_lookup(sc_definition,),
                            $,
                            abort,
                        )
                        return {
                            'element': ['group', p_child],
                            'result': p_child.entry.node
                        }
                    })
                    case 'reference': return _p.ss($, ($): d_out.Relative_Value_Selection.path.list.L => {

                        const sc_definition: d_out.Type_Node.reference = _p.deprecated_cc(current, ($) => {
                            if ($[0] !== 'reference') {
                                return _i_generic.abort.state_constraint("reference", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const referent: d_out.Type_Node_Reference = sc_definition.referent
                        const x: d_out.Type_Node = _p.deprecated_cc(sc_definition.type, ($) => {
                            switch ($[0]) {
                                case 'derived': return _p.ss($, ($) => referent.path['resulting node'])
                                case 'selected': return _p.ss($, ($) => _p.deprecated_cc(referent.path['resulting node'], ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return _p.ss($, ($) => $.node)
                                        default: return _i_generic.abort.state_constraint("dictionary", $, sg_loc, abort)
                                    }
                                }))
                                default: return _p.au($[0])
                            }
                        })
                        return {
                            'element': ['reference', {
                                'definition': sc_definition
                            }],
                            'result': x
                        }
                    })
                    default: return _p.au($[0])
                }
            })
        },
        ($) => $.result,
        (list, result) => ({
            'list': list,
            'result': result,
        }),
    )
    return {
        'path': p_path,
        'resulting node': p_path.result, // list result
    }
})

export const Possible_Value_Selection: signatures.Optional_Value_Initialization = ($, abort, $l, $p) => _p.deprecated_block(() => _p.deprecated_cc($.state, ($) => {
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
    return _p.deprecated_cc($.state, ($) => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                _p_temp.dictionary_to_lookup($p.signature['resolved parameters'].values),
                $,
                abort,
            )])
            case 'result': return _p.ss($, ($) => ['result', _p.deprecated_cc($.state, ($): d_out.Possible_Value_Selection.result => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Possible_Value_Selection.result.state.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const P_state = _p.deprecated_cc($['state'], ($) => p_sibling.entry.resolver[0] !== 'state'
                            ? _i_generic.abort.state_constraint("state", p_sibling.entry.resolver, loc, abort)
                            : p_sibling.entry.resolver[1])

                        const p_result = Type_Reference(
                            $.result,
                            abort,
                            {
                                'types': _p_temp.dictionary_to_lookup($p.types),
                            },
                            {
                                'imports': $p.imports,
                            },
                        )
                        return ['state', {
                            'property': p_sibling,
                            'state': P_state,
                            'result': p_result,
                        }]
                    })
                    case 'optional value': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Possible_Value_Selection.result.optional_value.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_optional_value = _p.deprecated_cc($['optional value'], ($) => p_sibling.entry.resolver[0] !== 'optional'
                            ? _i_generic.abort.state_constraint("optional", p_sibling.entry.resolver, loc, abort)
                            : p_sibling.entry.resolver[1])
                        const p_result = Type_Reference(
                            $.result,
                            abort,
                            {
                                'types': _p_temp.dictionary_to_lookup($p.types),
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
    const p_start: d_out.Guaranteed_Value_Selection.start = _p.deprecated_cc($.start.state, ($): d_out.Guaranteed_Value_Selection.start => {
        switch ($[0]) {
            case 'constraint': return _p.ss($, ($): d_out.Guaranteed_Value_Selection.start => ['constraint', _p.deprecated_cc($.state, ($): d_out.Guaranteed_Value_Selection.start.constraint => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))

                        const x_component = p_sibling.entry.resolver[0] !== 'component'
                            ? _i_generic.abort.state_constraint("component", p_sibling.entry.resolver, loc, abort)
                            : p_sibling.entry.resolver[1]

                        const p_constraint = _p.deprecated_cc($['constraint'], ($) => _i_generic.get_entry_acyclic(
                            _p_temp.dictionary_to_lookup(x_component.constraints),
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
                        const p_sibling = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))

                        const x_reference = p_sibling.entry.resolver[0] !== 'reference'
                            ? _i_generic.abort.state_constraint("reference", p_sibling.entry.resolver, loc, abort)
                            : p_sibling.entry.resolver[1]

                        const x_reference_selected = x_reference.type[0] !== 'selected'
                            ? _i_generic.abort.state_constraint("selected", x_reference.type, loc, abort)
                            : x_reference.type[1]

                        const p_constraint = _p.deprecated_cc($['constraint'], ($) => _i_generic.get_entry_acyclic(
                            _p_temp.dictionary_to_lookup(x_reference_selected.constraints),
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
                    () => _i_generic.abort.is_set_assertion("option constraints", start_location, abort)
                )
                return ['option constraint', _i_generic.get_entry_acyclic(
                    _p_temp.dictionary_to_lookup(sc),
                    $,
                    abort,
                )]
            })
            case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                _p_temp.dictionary_to_lookup($p.signature['resolved parameters'].values),
                $,
                abort,
            )])
            case 'result': return _p.ss($, ($) => ['result', _p.deprecated_cc($.state, ($): d_out.Guaranteed_Value_Selection.start.result => {
                switch ($[0]) {
                    case 'list': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Guaranteed_Value_Selection.start.result.list.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_list_result_a = _p.deprecated_cc($['list result'], ($) => p_sibling.entry.resolver[0] !== 'list'
                            ? _i_generic.abort.state_constraint("list", p_sibling.entry.resolver, loc, abort)
                            : p_sibling.entry.resolver[1])
                        const p_list_result: d_out.Guaranteed_Value_Selection.start.result.list.list_result = p_list_result_a.result.__decide(
                            ($) => $,
                            () => _i_generic.abort.is_set_assertion("list result", loc, abort)
                        )
                        return ['list', {
                            'property': p_sibling,
                            'list result': p_list_result,
                        }]
                    })
                    case 'state': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Guaranteed_Value_Selection.start.result.state.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const P_state = _p.deprecated_cc($['state'], ($) => p_sibling.entry.resolver[0] !== 'state'
                            ? _i_generic.abort.state_constraint("state", p_sibling.entry.resolver, loc, abort)
                            : p_sibling.entry.resolver[1])
                        return ['state', {
                            'property': p_sibling,
                            'state': P_state,
                            'result': Type_Reference(
                                $.result,
                                abort,
                                {
                                    'types': _p_temp.dictionary_to_lookup($p.types),
                                },
                                {
                                    'imports': $p.imports,
                                },
                            )
                        }]
                    })
                    case 'optional value': return _p.ss($, ($) => {
                        const loc = $['property'].location
                        const p_sibling: d_out.Guaranteed_Value_Selection.start.result.optional_value.property = _p.deprecated_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_optional_value = _p.deprecated_cc($['optional value'], ($) => p_sibling.entry.resolver[0] !== 'optional'
                            ? _i_generic.abort.state_constraint("optional", p_sibling.entry.resolver, loc, abort)
                            : p_sibling.entry.resolver[1])
                        return ['optional value', {
                            'property': p_sibling,
                            'optional value': p_optional_value,
                            'result': Type_Reference(
                                $.result,
                                abort,
                                {
                                    'types': _p_temp.dictionary_to_lookup($p.types),
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
            case 'sibling': return _p.ss($, ($): d_out.Guaranteed_Value_Selection.start => ['sibling', _i_generic.get_entry_acyclic(
                $l['sibling property resolvers'],
                $,
                abort,
            )])
            case 'parent sibling': return _p.ss($, ($): d_out.Guaranteed_Value_Selection.start => ['parent sibling', _i_generic.get_entry_acyclic(
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
                            case 'parameter': return _p.ss($, ($) => $.entry['data type']['resulting type'].node)
                            case 'result': return _p.ss($, ($) => _p.deprecated_cc($, ($) => {
                                switch ($[0]) {
                                    case 'state': return _p.ss($, ($) => $.result['resulting type'].node)
                                    case 'optional value': return _p.ss($, ($) => $.result['resulting type'].node)
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
                                        case 'state': return _p.ss($, ($) => $.option.entry.node)
                                        case 'optional value': return _p.ss($, ($) => $['selected optional value'])
                                        default: return _p.au($[0])
                                    }
                                }))
                                case 'reference': return _p.ss($, ($) => _p.deprecated_cc($.constraint.entry.constraint.type, ($) => {
                                    switch ($[0]) {
                                        case 'state': return _p.ss($, ($) => $.option.entry.node)
                                        case 'optional value': return _p.ss($, ($) => $['selected optional value'])

                                        default: return _p.au($[0])
                                    }
                                }))

                                default: return _p.au($[0])
                            }
                        }))
                        case 'parameter': return _p.ss($, ($) => $.entry['data type']['resulting type'].node)
                        case 'result': return _p.ss($, ($) => _p.deprecated_cc($, ($) => {
                            switch ($[0]) {
                                case 'state': return _p.ss($, ($) => $.result['resulting type'].node)
                                case 'optional value': return _p.ss($, ($) => $.result['resulting type'].node)
                                case 'list': return _p.ss($, ($) => $['list result']['resulting type'].node)
                                default: return _p.au($[0])
                            }
                        }))
                        case 'list cursor': return _p.ss($, ($) => $p['list cursor'].__decide(
                            ($) => $['resulting type'].node,
                            () => _i_generic.abort.is_set_assertion("list cursor", start_loc, abort)
                        ))
                        case 'linked entry': return _p.ss($, ($) => $p['linked entry'].__decide(
                            ($) => $['resulting dictionary'].node,
                            () => _i_generic.abort.is_set_assertion("linked entry", start_loc, abort)
                        ))
                        case 'option constraint': return _p.ss($, ($) => _p.deprecated_cc($.entry, ($) => {
                            switch ($[0]) {
                                case 'state': return _p.ss($, ($) => $.option.entry.node)
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
            'sibling schemas': _p_temp.stack.empty(),
        },
        $p,
    ),
    'schema path': $['schema path'].list.__l_map(($) => $.element),
    'type': $.type,
}))