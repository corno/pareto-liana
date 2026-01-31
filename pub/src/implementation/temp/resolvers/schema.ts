import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _p_ls from 'pareto-core/dist/lookup_selection'
import { _p_deprecated_block } from 'pareto-core/dist/deprecated_block'
import { _p_cc } from 'pareto-core/dist/change_context'

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

export const Imports: signatures.Imports = ($, abort, $l, $p) => _p_deprecated_block(() => _p_cc($, ($) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id) => _p_cc($, ($) => _p_cc($, ($): d_out.Imports.D => {
        const p_schema_set_child: d_out.Imports.D.schema_set_child = _p_cc($['l entry']['schema set child'], ($) => _i_generic.get_entry_stack(
            $l['sibling schemas'],
            $,
            abort,
        ))
        const loc = $['l entry']['schema set child']['l location']
        const p_schema: d_out.Imports.D.schema = _p_cc($['l entry']['schema'], ($) => _p_cc(p_schema_set_child['l entry'], ($) => { // reference constraint ('schema set child')
            switch ($[0]) {
                case 'schema': return _p.ss($, ($) => $)
                default: return _i_generic.abort.state_constraint_found_expected("set", $, loc, abort)
            }
        }))
        return {
            'schema set child': p_schema_set_child,
            'schema': p_schema,
        }
    })),
)))

export const Lookup_Selection: signatures.Lookup_Selection = ($, abort, $l, $p) => _p_deprecated_block(() => _p_deprecated_block(() => {
    const loc = $.type['l location']
    const p_type: d_out.Lookup_Selection.type_ = _p_cc($['type'], ($) => _p_cc($['l state'], ($): d_out.Lookup_Selection.type_ => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => {
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
                _p_ls.acyclic.select_from_dictionary($p.signature['resolved parameters'].lookups),
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
    const p_resulting_dictionary = _p_cc(p_type, ($): d_out.Value.dictionary => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => $['selected dictionary'])
            case 'not circular dependent siblings': return _p.ss($, ($) => $)
            case 'parameter': return _p.ss($, ($) => $['l entry'].dictionary)
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
        'precision': _p_cc($.precision['l state'], ($): d_out.Number_Type.precision => {
            switch ($[0]) {
                case 'exact': return _p.ss($, ($) => {
                    return ['exact', {
                        'type': _p_cc($.type['l state'], ($) => {
                            switch ($[0]) {
                                case 'integer': return _p.ss($, ($) => ['integer', null])
                                case 'natural': return _p.ss($, ($) => ['natural', null])
                                case 'positive natural': return _p.ss($, ($) => ['positive natural', null])
                                default: return _p.au($[0])
                            }
                        }),
                        'decimal separator offset': _p_cc($['decimal separator offset'], ($) => {
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

    const p_parameters_values: d_out.Signature_Parameters.modules = _p.dictionary.resolve(
        $.modules['l dictionary'],
        ($, id, $acyclic, $cyclic) => {

            const p_schema_type = Module_Reference(
                $['l entry'].module,
                abort,
                {
                    'modules': _p_ls.acyclic.select_from_dictionary($p.modules),
                },
                {
                    'imports': _p.optional.not_set(),
                },

            )
            const p_presence = $['l entry'].presence['l state']

            return {
                'module': p_schema_type,
                'presence': p_presence,
            }
        },
    )
    const lookups_loc = $.lookups['l location']
    const p_parameters_lookups: d_out.Signature_Parameters.lookups = _p.dictionary.resolve(
        $.lookups['l dictionary'],
        ($, id, $acyclic, $cyclic) => {
            const p_referent = Module_Reference(
                $['l entry'].referent,
                abort,
                {
                    'modules': _p_ls.acyclic.select_from_dictionary($p.modules),
                },
                {
                    'imports': _p.optional.not_set(),
                },

            )

            const p_type: d_out.Signature_Parameters.lookups.D.type_ = _p_cc($['l entry'].type['l state'], ($) => {
                switch ($[0]) {
                    case 'acyclic': return _p.ss($, ($) => ['acyclic', null])
                    case 'cyclic': return _p.ss($, ($) => ['cyclic', null])
                    case 'stack': return _p.ss($, ($) => ['stack', $])
                    default: return _p.au($[0])
                }
            })
            const p_presence = $['l entry'].presence['l state']
            return {
                'referent': p_referent,
                'dictionary': _p_cc(p_referent['resulting module']['root value'], ($) => { // component constraint (referent)
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => $)
                        // default: return _i_generic.abort.tbd(`not a 'dictionary' but a '${$[0]}' @ ${$p['location 2 string'](lookups_loc)}`)
                        default: return _i_generic.abort.state_constraint_found_expected(
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
        'modules': p_parameters_values,
    }
}
export const Globals: signatures.Globals = ($, abort, $l, $p) => {
    const p_number_types: d_out.Globals.number_types = _p.dictionary.resolve(
        $['number types']['l dictionary'],
        ($, id, $acyclic, $cyclic) => Number_Type(
            $['l entry'],
            abort,
            null,
            null,
        ),
    )
    const p_text_types: d_out.Globals.text_types = _p.dictionary.resolve(
        $['text types']['l dictionary'],
        ($, id, $acyclic, $cyclic) => Text_Type(
            $['l entry'],
            abort,
            null,
            null,
        ),
    )
    return {
        'number types': p_number_types,
        'text types': p_text_types,
        'complexity': $['complexity']['l state'],
    }
}

export const Signature: signatures.Signature = ($, abort, $l, $p) => {
    const p_parameters: d_out.Signature.parameters = _p_cc($.parameters['l state'], ($): d_out.Signature.parameters => {
        switch ($[0]) {
            case 'local': return _p.ss($, ($) => ['local', Signature_Parameters(
                $,
                abort,
                null,
                {
                    'imports': $p.imports,
                    'modules': $p.modules,
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
        'module': $p.module,
        'parameters': p_parameters,
        'resolved parameters': _p_cc(p_parameters, ($) => {
            switch ($[0]) {
                case 'local': return _p.ss($, ($) => $)
                case 'same as': return _p.ss($, ($) => $['l entry']['resolved parameters'])
                default: return _p.au($[0])
            }
        })
    }
}

export const Signatures: signatures.Signatures = ($, abort, $l, $p) => {
    return _i_generic.resolve_dense_dictionary(
        $['l dictionary'],
        $['l location'],
        abort,
        $p.modules,
        ($, id, $acyclic, $cyclic) => {
            const p_linked_entry = _i_generic.get_entry_acyclic(
                _p_ls.acyclic.select_from_dictionary($p.modules),
                {
                    'l reference': id,
                    'l location': $['l location'],
                },
                abort,
            )

            return Signature(
                $['l entry'],
                abort,
                {
                    'sibling signatures': $acyclic,
                },
                {
                    'imports': $p.imports,
                    'modules': $p.modules,
                    'module': p_linked_entry['l entry'],
                },
            )
        },

    )
}

export const Schema_Tree: signatures.Schema_Tree = ($, abort, $l, $p) => _p_deprecated_block(() => _p_cc($['l state'], ($): d_out.Schemas.D => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => ['schema', _p_deprecated_block(() => {
            const p_imports = Imports(
                $.imports,
                abort,
                {
                    'sibling schemas': $l['sibling schemas'],

                },
                null,

            )
            const p_globals: d_out.Schema.globals = _p_cc($['globals'], ($) => Globals(
                $,
                abort,
                null,
                null,
            ))
            const p_types: d_out.Modules = _p.dictionary.resolve(
                $.modules['l dictionary'],
                ($, id, $acyclic, $cyclic) => {
                    const p_type = Value(
                        $['l entry']['root value'],
                        abort,
                        {
                            'noncircular sibling modules': $acyclic,
                            'possibly circular dependent sibling modules': $cyclic,
                        },
                        {
                            'imports': _p.optional.set(p_imports),
                            'globals': _p.optional.set(p_globals),
                        },

                    )
                    return {
                        'root value': p_type,

                    }
                },
            )
            const p_complexity: d_out.Schema.complexity = _p_cc($.complexity['l state'], ($) => {
                switch ($[0]) {
                    case 'constrained': return _p.ss($, ($) => {

                        const p_signatures: d_out.Resolve_Logic.signatures = _p_cc($.signatures, ($) => {
                            const p_types_2: d_out.Resolve_Logic.signatures.signatures = _p_cc($, ($) => Signatures(
                                $.signatures,
                                abort,
                                null,
                                {
                                    'imports': p_imports,
                                    'modules': p_types,
                                },
                            ))
                            return {
                                'signatures': p_types_2,
                            }
                        })
                        const p_resolvers: d_out.Resolve_Logic.resolvers = _i_generic.resolve_dense_dictionary(
                            $.resolvers['l dictionary'],
                            $.resolvers['l location'],
                            abort,
                            p_signatures.signatures,
                            ($, id, $acyclic, $cyclic) => {

                                const p_linked_entry = _i_generic.get_entry_acyclic(
                                    _p_ls.acyclic.select_from_dictionary(p_types),
                                    {
                                        'l reference': id,
                                        'l location': $['l location'],
                                    },
                                    abort,
                                )
                                const p_signature = _i_generic.get_entry_acyclic(
                                    _p_ls.acyclic.select_from_dictionary(p_signatures.signatures),
                                    {
                                        'l reference': id,
                                        'l location': $['l location'],
                                    },
                                    abort,
                                )

                                const p_type_resolver = Value_Resolver(
                                    $['l entry']['root value resolver'],
                                    abort,
                                    {
                                        'sibling property resolvers': _p_ls.acyclic.not_set(),
                                        'parent sibling property resolvers': _p_ls.acyclic.not_set(),

                                    },
                                    {
                                        'list cursor': _p.optional.not_set(),
                                        'linked entry': _p.optional.not_set(),
                                        'current dictionary': _p.optional.not_set(),
                                        'current ordered dictionary': _p.optional.not_set(),
                                        'option constraints': _p.optional.not_set(),

                                        'definition': p_linked_entry['l entry']['root value'],
                                        'signature': p_signature['l entry'],

                                        'modules': p_types,
                                        'imports': _p.optional.set(p_imports),
                                        'signatures': p_signatures.signatures
                                    },
                                )
                                return {
                                    'signature': p_signature['l entry'],
                                    'root value resolver': p_type_resolver,
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
                'modules': p_types,
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

export const Schemas: signatures.Schemas = ($, abort, $l, $p) => _p_deprecated_block(() => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $acyclic, $cyclic) => _p_cc($, ($) => Schema_Tree(
        $['l entry'],
        abort,
        {
            'sibling schemas': _p_ls.stack.push($l['sibling schemas'], $acyclic)
        },
        null,
    )),
))

export const Text_Type: signatures.Text_Type = ($, abort, $l, $p) => {
    return {
        'type': _p_cc($.type['l state'], ($): d_out.Text_Type.type_ => {
            switch ($[0]) {
                case 'single line': return _p.ss($, ($) => ['single line', null])
                case 'multi line': return _p.ss($, ($) => ['multi line', null])
                default: return _p.au($[0])
            }
        }),
    }
}

export const Option_Constraints: signatures.Option_Constraints = ($, abort, $l, $p) => {
    return _p.optional.map(
        $,
        ($) => _p.dictionary.resolve(
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

export const Value_Results: signatures.Value_Results = ($, abort, $l, $p) => {
    return _p.optional.map(
        $,
        ($) => _p.dictionary.resolve(
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

export const Value: signatures.Value = ($, abort, $l, $p) => {
    const loc = $['l location']
    return _p_cc($['l state'], ($): d_out.Value => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($): d_out.Value => ['boolean', null])
            case 'number': return _p.ss($, ($): d_out.Value => ['number', _p_cc($['l state'], ($): d_out.Value.number_ => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($): d_out.Value.number_ => ['global', _i_generic.get_entry_acyclic(
                        _p_ls.acyclic.select_from_dictionary(
                            $p.globals.__decide(
                                ($) => $['number types'],
                                () => _i_generic.abort.is_set_assertion("globals", $['l location'], abort)
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
            case 'text': return _p.ss($, ($): d_out.Value => ['text', _p_cc($['l state'], ($): d_out.Value.text => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($): d_out.Value.text => ['global', _i_generic.get_entry_acyclic(
                        _p_ls.acyclic.select_from_dictionary(
                            $p.globals.__decide(
                                ($) => $['text types'],
                                () => _i_generic.abort.is_set_assertion("globals", $['l location'], abort)
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
            case 'component': return _p.ss($, ($): d_out.Value => ['component', {
                'type': _p_cc($.type['l state'], ($): d_out.Value.component.type_ => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => {
                            const sc_import = $p.imports.__decide(
                                ($) => $,
                                () => _i_generic.abort.is_set_assertion("imports", $.import['l location'], abort)
                            )
                            const p_import = _i_generic.get_entry_acyclic(
                                _p_ls.acyclic.select_from_dictionary(sc_import),
                                $.import,
                                abort,
                            )
                            return ['external', {
                                'import': p_import,
                                'module': _i_generic.get_entry_acyclic(
                                    _p_ls.acyclic.select_from_dictionary(p_import['l entry'].schema.modules),
                                    $.module,
                                    abort,
                                )
                            }]
                        })
                        case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry_acyclic(
                            $l['noncircular sibling modules'],
                            $,
                            abort,
                        )])
                        case 'internal cyclic': return _p.ss($, ($) => ['internal cyclic', _i_generic.get_entry_cyclic(
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
            case 'group': return _p.ss($, ($) => ['group', _p.dictionary.resolve(
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
            case 'list': return _p.ss($, ($): d_out.Value => {
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

            case 'reference': return _p.ss($, ($): d_out.Value => {
                const loc = $.referent['module'].location['l location']
                const temp = $p.globals.__decide(
                    ($) => {
                        $.complexity[0] === 'unconstrained'
                            ? _i_generic.abort.state_constraint_found_expected("constrained", $.complexity, loc, abort)
                            : $.complexity[1]

                    },
                    () => _i_generic.abort.is_set_assertion("globals", loc, abort)
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
                const p_type: d_out.Value.reference.type_ = _p_cc($.type['l state'], ($) => {
                    switch ($[0]) {
                        case 'selected': return _p.ss($, ($) => {
                            return ['selected', {
                                'dictionary': _p_cc(p_referent.path['resulting node'], ($) => { // component constraint (referent)
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
                                'dependency': _p_cc($.dependency['l state'], ($) => {
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
                'options': _p.dictionary.resolve(
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

export const Module_Reference: signatures.Module_Reference = ($, abort, $l, $p) => {
    const x: d_out.Module_Reference.location = _p_cc($.location['l state'], ($) => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($): d_out.Module_Reference.location => {
                const sc_import = $p.imports.__decide(
                    ($) => $,
                    () => _i_generic.abort.is_set_assertion("imports", $.import['l location'], abort)
                )
                const p_import = _i_generic.get_entry_acyclic(
                    _p_ls.acyclic.select_from_dictionary(sc_import),
                    $.import,
                    abort
                )
                return ['external', {
                    'import': p_import,
                    'module': _i_generic.get_entry_acyclic(
                        _p_ls.acyclic.select_from_dictionary(p_import['l entry'].schema.modules),
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
    const p_resulting_type = _p_cc(x, ($): d_out.Module => {
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


export const Value_Reference: signatures.Value_Reference = ($, abort, $l, $p) => {
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
            null,
            {
                'module': p_module_location['resulting module']
            },
        ),
    }
}


export const Value_Path: signatures.Value_Path = ($, abort, $l, $p) => {
    const p_tail_x: d_out.Value_Path.tail = _p.list.map_with_state(
        $.tail['l list'],
        $p.module['root value'],
        ($, current): d_out.Value_Path.tail.l_value.L => {
            const sg_loc = $['l location']
            return _p_cc($['l item']['l state'], ($): d_out.Value_Path.tail.l_value.L => {
                switch ($[0]) {
                    case 'dictionary': return _p.ss($, ($): d_out.Value_Path.tail.l_value.L => {
                        const sc_definition: d_out.Value.dictionary = _p_cc(current, ($) => {
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
                        const sc_definition: d_out.Value.group = _p_cc(current, ($) => {
                            if ($[0] !== 'group') {
                                return _i_generic.abort.state_constraint_found_expected("group", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry_acyclic(
                            _p_ls.acyclic.select_from_dictionary(sc_definition),
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
                        const sc_definition: d_out.Value.list = _p_cc(current, ($) => {
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
                    case 'optional': return _p.ss($, ($): d_out.Value_Path.tail.l_value.L => {
                        const sc_definition: d_out.Value.optional = _p_cc(current, ($) => {
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
                    case 'state': return _p.ss($, ($): d_out.Value_Path.tail.l_value.L => {
                        const P_state: d_out.Value.state = _p_cc(current, ($) => {
                            if ($[0] !== 'state') {
                                return _i_generic.abort.state_constraint_found_expected("state", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry_acyclic(
                            _p_ls.acyclic.select_from_dictionary(P_state.options),
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

export const Option_Constraint_Resolvers: signatures.Option_Constraint_Resolvers = ($, abort, $l, $p) => {
    return _p_cc($, ($) => _p.dictionary.resolve(
        $['l dictionary'],
        ($, id, $acyclic, $cyclic) => _p_cc($, ($) => _p_cc($['l entry']['l state'], ($) => {
            switch ($[0]) {
                case 'state': return _p.ss($, ($) => ['state', _p_deprecated_block(() => {
                    const loc = $.selection.start['l location']
                    const p_selection: d_out.Option_Constraint_Resolvers.D.state.selection = _p_cc($['selection'], ($) => Guaranteed_Value_Selection(
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
                    const p_option: d_out.Option_Constraint_Resolvers.D.state.option = _p_cc($['option'], ($) => _i_generic.get_entry_acyclic(
                        _p_ls.acyclic.select_from_dictionary(p_selected_state.options),
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
    const p_selection: d_out.Constraint.selection = _p_cc($['selection'], ($) => Relative_Value_Selection(
        $,
        abort,
        null,
        {
            'value': $p.value,
        }
    ))
    const loc = $.type['l location']
    const p_type: d_out.Constraint.type_ = _p_cc($.type, ($) => _p_cc($['l state'], ($) => {
        switch ($[0]) {
            case 'state': return _p.ss($, ($) => {
                const p_selected_state = p_selection['resulting node'][0] !== 'state' // component constraint ('selection')
                    ? _i_generic.abort.state_constraint_found_expected(
                        "state",
                        p_selection['resulting node'],
                        loc,
                        abort,
                    )
                    : p_selection['resulting node'][1]
                const p_option: d_out.Constraint.type_.state.option = _p_cc($['option'], ($) => _i_generic.get_entry_acyclic(
                    _p_ls.acyclic.select_from_dictionary(p_selected_state.options),
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
            default: return _p.au($[0])
        }
    }))
    return {
        'selection': p_selection,
        'type': p_type,
    }
}

export const Value_Constraint_Resolvers: signatures.Value_Constraint_Resolvers = ($, abort, $l, $p) => {
    return _p_cc($, ($) => _p.dictionary.resolve(
        $['l dictionary'],
        ($, id, $acyclic, $cyclic) => _p_cc($, ($) => _p_deprecated_block(() => {
            const p_start: d_out.Value_Constraint_Resolver.start = _p_cc($['l entry'].start['l state'], ($) => {
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
            const p_constraint: d_out.Value_Constraint_Resolver.constraint = Constraint(
                $['l entry'].constraint,
                abort,
                null,
                {

                    'value': _p_cc(p_start, ($) => {
                        switch ($[0]) {
                            case 'property': return _p.ss($, ($) => $p.value)
                            case 'sibling': return _p.ss($, ($) => _p_cc($['l entry'].constraint.type, ($) => {
                                switch ($[0]) {
                                    case 'state': return _p.ss($, ($) => $.option['l entry'].value)
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

export const Value_Resolver: signatures.Value_Resolver = ($, abort, $l, $p) => {
    const loc = $['l location']
    const p_type = _p_cc($['l state'], ($): d_out.Value_Resolver => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'boolean'
                    ? _i_generic.abort.state_constraint_found_expected(
                        "boolean",
                        $p.definition,
                        loc,
                        abort,
                    )
                    : $p.definition[1]
                return ['boolean', null]
            })
            case 'component': return _p.ss($, ($): d_out.Value_Resolver => {
                const x = $p.definition[0] !== 'component'
                    ? _i_generic.abort.state_constraint_found_expected(
                        "component",
                        $p.definition,
                        loc,
                        abort,
                    )
                    : $p.definition[1]
                const p_location = _p_cc($.location['l state'], ($): d_out.Value_Resolver.component.location => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => {
                            const sc_import = $p.imports.__decide(
                                ($) => $,
                                () => _i_generic.abort.is_set_assertion("imports", loc, abort)
                            )
                            const p_import = _i_generic.get_entry_acyclic(
                                _p_ls.acyclic.select_from_dictionary(sc_import),
                                $.import,
                                abort,
                            )
                            const pc_constrained: d_out.Schema.complexity.constrained = _p_cc(p_import['l entry'].schema.complexity, ($) => {
                                switch ($[0]) {
                                    case 'constrained': return _p.ss($, ($) => $)
                                    default: return _i_generic.abort.state_constraint_found_expected("constrained", $, loc, abort)
                                }
                            })
                            return ['external', {
                                'import': p_import,
                                'signature': _i_generic.get_entry_acyclic(
                                    _p_ls.acyclic.select_from_dictionary(pc_constrained.signatures.signatures),
                                    $.signature,
                                    abort,
                                )
                            }]
                        })
                        case 'internal': return _p.ss($, ($) => ['internal', _i_generic.get_entry_acyclic(
                            _p_ls.acyclic.select_from_dictionary(
                                $p['signatures'],
                            ),
                            $,
                            abort,
                        )])
                        default: return _p.au($[0])
                    }
                })
                const p_signature: d_out.Value_Resolver.component.signature = _p_cc(p_location, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => $.signature['l entry'])
                        case 'internal': return _p.ss($, ($) => $['l entry'])
                        default: return _p.au($[0])
                    }
                })
                const x_type: d_out.Modules.D = _p_cc(x.type, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => $.module['l entry'])
                        case 'internal': return _p.ss($, ($) => $['l entry'])
                        case 'internal cyclic': return _p.ss($, ($) => $['l entry'].get_circular_dependent())
                        default: return _p.au($[0])
                    }
                })
                if (p_signature.module !== x_type) {
                    _i_generic.abort.same_node_constraint("module.value", loc, abort)
                }
                const p_arguments: d_out.Value_Resolver.component.arguments_ = $.arguments.__decide(
                    ($) => {
                        const x: d_out.Value_Resolver.component.arguments_.O = {
                            'lookups': $.lookups.__decide(
                                ($) => _p.optional.set(_i_generic.resolve_dense_dictionary(
                                    $['l dictionary'],
                                    $['l location'],
                                    abort,
                                    p_signature['resolved parameters'].lookups,
                                    ($, id, $acyclic, $cyclic) => _p_cc($, ($) => {
                                        //do additional validation
                                        return _p_cc($['l entry']['l state'], ($): d_out.Value_Resolver.component.arguments_.O.lookups.O.D => {
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
                            'modules': $.modules.__decide(
                                ($) => {
                                    const values_location = $['l location']

                                    return _p.optional.set(_i_generic.resolve_dense_dictionary(
                                        $['l dictionary'],
                                        $['l location'],
                                        abort,
                                        p_signature['resolved parameters'].modules,
                                        ($, id, $acyclic, $cyclic) => _p_cc($, ($) => {
                                            const linked_entry = _i_generic.get_entry_acyclic(
                                                _p_ls.acyclic.select_from_dictionary(p_signature['resolved parameters'].modules),
                                                {
                                                    'l reference': id,
                                                    'l location': $['l location'],
                                                },
                                                abort,
                                            )
                                            const out = _p_cc($['l entry']['l state'], ($): d_out.Value_Resolver.component.arguments_.O.modules.O.D => {
                                                switch ($[0]) {
                                                    case 'optional': return _p.ss($, ($) => ['optional', Possible_Value_Selection(
                                                        $,
                                                        abort,
                                                        $l,
                                                        $p,
                                                    )])
                                                    case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                                                        _p_ls.acyclic.select_from_dictionary($p.signature['resolved parameters'].modules),
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
                                                const benchmark = linked_entry['l entry']
                                                const focus = out

                                                const walk_path_till_end = ($: d_out.Value): d_out.Value => {
                                                    return _p_cc($, ($) => {
                                                        switch ($[0]) {
                                                            case 'component': return _p.ss($, ($) => _p_cc($.type, ($) => {
                                                                switch ($[0]) {
                                                                    case 'external': return _p.ss($, ($) => $.module['l entry']['root value'])
                                                                    case 'internal': return _p.ss($, ($) => $['l entry']['root value'])
                                                                    case 'internal cyclic': return _p.ss($, ($) => $['l entry'].get_circular_dependent()['root value']) //IS THIS SAFE? I Am using a computed value (only available after resolving)
                                                                    default: return _p.au($[0])
                                                                }
                                                            }))
                                                            case 'reference': return _p.ss($, ($) => $.referent.path['resulting node'])
                                                            default: return $
                                                        }
                                                    })
                                                }

                                                _p_cc(focus, ($) => {
                                                    switch ($[0]) {
                                                        case 'optional': return _p.ss($, ($) => {

                                                            if (benchmark.presence[0] !== 'optional') {
                                                                _i_generic.abort.state_constraint_found_expected("optional", benchmark.presence, values_location, abort)
                                                            }

                                                            _p_cc($, ($) => {
                                                                switch ($[0]) {
                                                                    case 'not set': return _p.ss($, ($) => { })
                                                                    case 'selection': return _p.ss($, ($) => {
                                                                        //FIXME
                                                                        _p_cc($, ($) => {
                                                                            switch ($[0]) {
                                                                                case 'parameter': return _p.ss($, ($) => { })
                                                                                case 'result': return _p.ss($, ($) => { })
                                                                                default: _p.au($[0])
                                                                            }
                                                                        })
                                                                    })
                                                                    case 'set': return _p.ss($, ($) => {

                                                                        if (walk_path_till_end(benchmark.module['resulting module']['root value']) !== walk_path_till_end($.tail['resulting node'])) {
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

                                                            //FIX validate that modules are the same
                                                        })
                                                        case 'parameter': return _p.ss($, ($) => {
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
                                                        })
                                                        case 'required': return _p.ss($, ($) => {
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

                                        if (p_signature['resolved parameters'].modules !== $p.signature['resolved parameters'].modules) {
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
                            if (p_signature['resolved parameters'].modules !== $p.signature['resolved parameters'].modules) {
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
                const p_constraints = Value_Constraint_Resolvers(
                    $.constraints,
                    abort,
                    null,
                    {
                        'value': _p_cc(p_location, ($): d_out.Value => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => $.signature['l entry'].module['root value'])
                                case 'internal': return _p.ss($, ($) => $['l entry'].module['root value'])
                                default: return _p.au($[0])
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
            case 'dictionary': return _p.ss($, ($) => {
                const p_definition = $p.definition[0] !== 'dictionary'
                    ? _i_generic.abort.state_constraint_found_expected("dictionary", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_benchmark = _p.optional.map(
                    $.benchmark,
                    ($): d_out.Value_Resolver.dictionary.benchmark.O => {
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
                    'resolver': Value_Resolver(
                        $.resolver,
                        abort,
                        $l,
                        {
                            'linked entry': p_benchmark.__decide( //optional value result ('benchmark')
                                ($) => _p.optional.set($),
                                () => $p['linked entry']
                            ),
                            'definition': p_definition.value,
                            'current dictionary': _p.optional.set(p_definition),
                            'current ordered dictionary': _p.optional.set(p_definition),//FIXME: is it ordered

                            'modules': $p.modules,
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
                    ? _i_generic.abort.state_constraint_found_expected("group", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_properties = _i_generic.resolve_dense_dictionary(
                    $['l dictionary'],
                    $['l location'],
                    abort,
                    x,
                    ($, id, $acyclic, $cyclic): d_out.Value_Resolver_Group.D => {

                        const p_definition = _i_generic.get_entry_acyclic(
                            _p_ls.acyclic.select_from_dictionary(x),
                            {
                                'l reference': id,
                                'l location': $['l location'],
                            },
                            abort,
                        )
                        const p_resolver = Value_Resolver(
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
                            'definition': p_definition['l entry'],
                            'resolver': p_resolver,
                        }
                    },
                )
                return ['group', p_properties]
            })
            case 'list': return _p.ss($, ($) => {
                const p_definition = $p.definition[0] !== 'list'
                    ? _i_generic.abort.state_constraint_found_expected("list", $p.definition, loc, abort)
                    : $p.definition[1]
                const p_result = _p.optional.map(
                    $.result,
                    ($) => Module_Reference(
                        $,
                        abort,
                        {
                            'modules': _p_ls.acyclic.select_from_dictionary($p.modules),
                        },
                        {
                            'imports': $p.imports,
                        },
                    )
                )
                const p_resolver = Value_Resolver(
                    $.resolver,
                    abort,
                    $l,
                    {
                        'definition': p_definition.value,
                        'list cursor': p_result.__decide( // optional value result ('result')
                            ($) => _p.optional.set($),
                            () => $p['list cursor']
                        ), //setting the cursor

                        'modules': $p.modules,
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
                    ? _i_generic.abort.state_constraint_found_expected("nothing", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['nothing', null]
            })
            case 'number': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'number'
                    ? _i_generic.abort.state_constraint_found_expected("number", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['number', null]
            })
            case 'optional': return _p.ss($, ($) => {
                const x = $p.definition[0] !== 'optional'
                    ? _i_generic.abort.state_constraint_found_expected("optional", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_constraints: d_out.Value_Resolver.state.states.D.constraints = Option_Constraint_Resolvers(
                    $.constraints,
                    abort,
                    $l,
                    $p,
                )
                const p_resolver = Value_Resolver(
                    $.resolver,
                    abort,
                    {
                        'sibling property resolvers': $l['sibling property resolvers'],
                        'parent sibling property resolvers': $l['parent sibling property resolvers'],
                    },
                    {
                        'definition': x,
                        'option constraints': _p.optional.set(p_constraints),

                        'modules': $p.modules,
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
            case 'reference': return _p.ss($, ($): d_out.Value_Resolver => {
                const p_definition = $p.definition[0] !== 'reference'
                    ? _i_generic.abort.state_constraint_found_expected("reference", $p.definition, loc, abort)
                    : $p.definition[1]
                return ['reference', {
                    'definition': p_definition,
                    'type': _p_cc($.type['l state'], ($): d_out.Value_Resolver.reference.type_ => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => {
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
                            case 'selected': return _p.ss($, ($) => {
                                const p_definition_2 = p_definition.type[0] !== 'selected'
                                    ? _i_generic.abort.state_constraint_found_expected("selected", p_definition.type, loc, abort)
                                    : p_definition.type[1]
                                const p_lookup = Lookup_Selection(
                                    $.lookup,
                                    abort,
                                    $l,
                                    $p,
                                )
                                const p_constraints = Value_Constraint_Resolvers(
                                    $.constraints,
                                    abort,
                                    null,
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
                            default: return _p.au($[0])
                        }
                    })
                }]
            })
            case 'state': return _p.ss($, ($): d_out.Value_Resolver => {
                const p_definition = $p.definition[0] !== 'state'
                    ? _i_generic.abort.state_constraint_found_expected("state", $p.definition, loc, abort)
                    : $p.definition[1]

                const p_states: d_out.Value_Resolver.state.states = _i_generic.resolve_dense_dictionary(
                    $.states['l dictionary'],
                    $.states['l location'],
                    abort,
                    p_definition.options,
                    ($, id, $acyclic, $cyclic) => {

                        const x2 = _i_generic.get_entry_acyclic(
                            _p_ls.acyclic.select_from_dictionary(p_definition.options),
                            {
                                'l reference': id,
                                'l location': $['l location'],
                            },
                            abort,
                        )
                        const p_constraints: d_out.Value_Resolver.state.states.D.constraints = Option_Constraint_Resolvers(
                            $['l entry'].constraints,
                            abort,
                            $l,
                            $p,
                        )
                        const vr = Value_Resolver(
                            $['l entry']['resolver'],
                            abort,
                            {
                                'sibling property resolvers': $l['sibling property resolvers'],
                                'parent sibling property resolvers': $l['parent sibling property resolvers'],
                            },
                            {
                                'definition': x2['l entry'].value,
                                'option constraints': _p.optional.set(p_constraints),

                                'modules': $p.modules,
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


                // case 'state': return pa.ss($, ($): _i_generic.Resolved_Step<_i_out.Relative_Value_Selection.tail.L, _i_out.Value> => pa.deprecated_block(() => {
                //     return pa.deprecated_block(() => {

                //         const sc_definition: _i_out.Value.state = pa.deprecated_cc(current, ($) => {
                //             if ($[0] !== 'state') {
                //                 return pa.panic(`not a 'state' but a '${$[0]}' @ ${$p['location 2 string'](sg_loc)}`)
                //             }
                //             return $[1]
                //         })
                //         const p_type: _i_out.Relative_Value_Selection.tail.L.state.type_ = pa.deprecated_cc($['type'], ($) => Module_Reference(
                //             $,
                //             {
                //                 'location 2 string': l2s,
                //                 'parameters': ({
                //                     'lookups': ({
                //                         'imports': $l.imports,
                //                         'modules': $l.modules,
                //                     }),
                //                     'modules': null,
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
                    'states': p_states,
                }]
            })
            case 'text': return _p.ss($, ($) => {
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
            default: return _p.au($[0])
        }
    })
    return p_type
}

export const Relative_Value_Selection: signatures.Relative_Value_Selection = ($, abort, $l, $p) => _p_deprecated_block(() => {

    const p_path: d_out.Relative_Value_Selection.path = _p.list.map_with_state(
        $.path['l list'],
        $p.value,
        ($, current): d_out.Relative_Value_Selection.path.l_value.L => {
            const sg_loc = $['l location']
            return _p_cc($['l item']['l state'], ($): d_out.Relative_Value_Selection.path.l_value.L => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($): d_out.Relative_Value_Selection.path.l_value.L => {

                        const sc_definition: d_out.Value.component = _p_cc(current, ($) => {
                            if ($[0] !== 'component') {
                                return _i_generic.abort.state_constraint_expected_found("component", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        return {
                            'l item': ['component', null],
                            'l results': {
                                'result': _p_cc(sc_definition.type, ($) => {
                                    switch ($[0]) {
                                        case 'external': return _p.ss($, ($) => $.module['l entry']['root value'])
                                        case 'internal': return _p.ss($, ($) => $['l entry']['root value'])
                                        case 'internal cyclic': return _p.ss($, ($) => $['l entry'].get_circular_dependent()['root value']) //this is safe, the modules have been resolved at this stage
                                        default: return _p.au($[0])
                                    }
                                })
                            }
                        }
                    })
                    case 'group': return _p.ss($, ($) => {
                        const sc_definition: d_out.Value.group = _p_cc(current, ($) => {
                            if ($[0] !== 'group') {
                                return _i_generic.abort.state_constraint_expected_found("group", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const p_child = _i_generic.get_entry_acyclic(
                            _p_ls.acyclic.select_from_dictionary(sc_definition,),
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
                    case 'reference': return _p.ss($, ($): d_out.Relative_Value_Selection.path.l_value.L => {

                        const sc_definition: d_out.Value.reference = _p_cc(current, ($) => {
                            if ($[0] !== 'reference') {
                                return _i_generic.abort.state_constraint_expected_found("reference", $, sg_loc, abort)
                            }
                            return $[1]
                        })
                        const referent: d_out.Value_Reference = sc_definition.referent
                        const x: d_out.Value = _p_cc(sc_definition.type, ($) => {
                            switch ($[0]) {
                                case 'derived': return _p.ss($, ($) => referent.path['resulting node'])
                                case 'selected': return _p.ss($, ($) => _p_cc(referent.path['resulting node'], ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return _p.ss($, ($) => $.value)
                                        default: return _i_generic.abort.state_constraint_found_expected("dictionary", $, sg_loc, abort)
                                    }
                                }))
                                default: return _p.au($[0])
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
                    default: return _p.au($[0])
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

export const Possible_Value_Selection: signatures.Optional_Value_Initialization = ($, abort, $l, $p) => _p_deprecated_block(() => _p_cc($['l state'], ($) => {
    switch ($[0]) {
        case 'not set': return _p.ss($, ($) => ['not set', null])
        case 'set': return _p.ss($, ($) => ['set', Guaranteed_Value_Selection($, abort, $l, $p)])
        case 'selection': return _p.ss($, ($): d_out.Optional_Value_Initialization => {
            return ['selection', Possibly_Optional($, abort, $l, $p)]
        })
        default: return _p.au($[0])
    }
}))

export const Possibly_Optional: signatures.Possible_Value_Selection = ($, abort, $l, $p) => _p_deprecated_block(() => {
    return _p_cc($['l state'], ($) => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                _p_ls.acyclic.select_from_dictionary($p.signature['resolved parameters'].modules),
                $,
                abort,
            )])
            case 'result': return _p.ss($, ($) => ['result', _p_cc($['l state'], ($): d_out.Possible_Value_Selection.result => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling: d_out.Possible_Value_Selection.result.state.property = _p_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const P_state = _p_cc($['state'], ($) => p_sibling['l entry'].resolver[0] !== 'state'
                            ? _i_generic.abort.state_constraint_found_expected("state", p_sibling['l entry'].resolver, loc, abort)
                            : p_sibling['l entry'].resolver[1])

                        const p_result = Module_Reference(
                            $.result,
                            abort,
                            {
                                'modules': _p_ls.acyclic.select_from_dictionary($p.modules),
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
                        const loc = $['property']['l location']
                        const p_sibling: d_out.Possible_Value_Selection.result.optional_value.property = _p_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_optional_value = _p_cc($['optional value'], ($) => p_sibling['l entry'].resolver[0] !== 'optional'
                            ? _i_generic.abort.state_constraint_found_expected("optional", p_sibling['l entry'].resolver, loc, abort)
                            : p_sibling['l entry'].resolver[1])
                        const p_result = Module_Reference(
                            $.result,
                            abort,
                            {
                                'modules': _p_ls.acyclic.select_from_dictionary($p.modules),
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

export const Guaranteed_Value_Selection: signatures.Guaranteed_Value_Selection = ($, abort, $l, $p) => _p_deprecated_block(() => _p_deprecated_block(() => {
    const start_location = $.start['l location']
    const p_start: d_out.Guaranteed_Value_Selection.start = _p_cc($.start['l state'], ($): d_out.Guaranteed_Value_Selection.start => {
        switch ($[0]) {
            case 'constraint': return _p.ss($, ($): d_out.Guaranteed_Value_Selection.start => ['constraint', _p_cc($['l state'], ($): d_out.Guaranteed_Value_Selection.start.constraint => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling = _p_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))

                        const x_component = p_sibling['l entry'].resolver[0] !== 'component'
                            ? _i_generic.abort.state_constraint_found_expected("component", p_sibling['l entry'].resolver, loc, abort)
                            : p_sibling['l entry'].resolver[1]

                        const p_constraint = _p_cc($['constraint'], ($) => _i_generic.get_entry_acyclic(
                            _p_ls.acyclic.select_from_dictionary(x_component.constraints),
                            $,
                            abort,
                        ))
                        return ['component', {
                            'property': p_sibling,
                            'constraint': p_constraint
                        }]
                    })
                    case 'reference': return _p.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling = _p_cc($['property'], ($) => _i_generic.get_entry_acyclic(
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

                        const p_constraint = _p_cc($['constraint'], ($) => _i_generic.get_entry_acyclic(
                            _p_ls.acyclic.select_from_dictionary(x_reference_selected.constraints),
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
                    _p_ls.acyclic.select_from_dictionary(sc),
                    $,
                    abort,
                )]
            })
            case 'parameter': return _p.ss($, ($) => ['parameter', _i_generic.get_entry_acyclic(
                _p_ls.acyclic.select_from_dictionary($p.signature['resolved parameters'].modules),
                $,
                abort,
            )])
            case 'result': return _p.ss($, ($) => ['result', _p_cc($['l state'], ($): d_out.Guaranteed_Value_Selection.start.result => {
                switch ($[0]) {
                    case 'list': return _p.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling: d_out.Guaranteed_Value_Selection.start.result.list.property = _p_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_list_result_a = _p_cc($['list result'], ($) => p_sibling['l entry'].resolver[0] !== 'list'
                            ? _i_generic.abort.state_constraint_found_expected("list", p_sibling['l entry'].resolver, loc, abort)
                            : p_sibling['l entry'].resolver[1])
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
                        const loc = $['property']['l location']
                        const p_sibling: d_out.Guaranteed_Value_Selection.start.result.state.property = _p_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const P_state = _p_cc($['state'], ($) => p_sibling['l entry'].resolver[0] !== 'state'
                            ? _i_generic.abort.state_constraint_found_expected("state", p_sibling['l entry'].resolver, loc, abort)
                            : p_sibling['l entry'].resolver[1])
                        return ['state', {
                            'property': p_sibling,
                            'state': P_state,
                            'result': Module_Reference(
                                $.result,
                                abort,
                                {
                                    'modules': _p_ls.acyclic.select_from_dictionary($p.modules),
                                },
                                {
                                    'imports': $p.imports,
                                },
                            )
                        }]
                    })
                    case 'optional value': return _p.ss($, ($) => {
                        const loc = $['property']['l location']
                        const p_sibling: d_out.Guaranteed_Value_Selection.start.result.optional_value.property = _p_cc($['property'], ($) => _i_generic.get_entry_acyclic(
                            $l['sibling property resolvers'],
                            $,
                            abort,
                        ))
                        const p_optional_value = _p_cc($['optional value'], ($) => p_sibling['l entry'].resolver[0] !== 'optional'
                            ? _i_generic.abort.state_constraint_found_expected("optional", p_sibling['l entry'].resolver, loc, abort)
                            : p_sibling['l entry'].resolver[1])
                        return ['optional value', {
                            'property': p_sibling,
                            'optional value': p_optional_value,
                            'result': Module_Reference(
                                $.result,
                                abort,
                                {
                                    'modules': _p_ls.acyclic.select_from_dictionary($p.modules),
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
            'value': _p_deprecated_block(() => {
                const pvs = ($: d_out.Possible_Value_Selection) => _p_cc($, ($): d_out.Module => {
                    return _p_cc($, ($) => {
                        switch ($[0]) {
                            case 'parameter': return _p.ss($, ($) => $['l entry'].module['resulting module'])
                            case 'result': return _p.ss($, ($) => _p_cc($, ($) => {
                                switch ($[0]) {
                                    case 'state': return _p.ss($, ($) => $.result['resulting module'])
                                    case 'optional value': return _p.ss($, ($) => $.result['resulting module'])
                                    default: return _p.au($[0])
                                }
                            }))
                            default: return _p.au($[0])
                        }
                    })
                })['root value']
                const start_loc = $.start['l location']
                const gvs_start = ($: d_out.Guaranteed_Value_Selection.start) => _p_cc($, ($): d_out.Value => {
                    switch ($[0]) {
                        case 'constraint': return _p.ss($, ($) => _p_cc($, ($) => {
                            switch ($[0]) {
                                case 'component': return _p.ss($, ($) => _p_cc($.constraint['l entry'].constraint.type, ($) => {
                                    switch ($[0]) {
                                        case 'state': return _p.ss($, ($) => $.option['l entry'].value)
                                        case 'optional value': return _p.ss($, ($) => $['selected optional value'])
                                        default: return _p.au($[0])
                                    }
                                }))
                                case 'reference': return _p.ss($, ($) => _p_cc($.constraint['l entry'].constraint.type, ($) => {
                                    switch ($[0]) {
                                        case 'state': return _p.ss($, ($) => $.option['l entry'].value)
                                        case 'optional value': return _p.ss($, ($) => $['selected optional value'])

                                        default: return _p.au($[0])
                                    }
                                }))

                                default: return _p.au($[0])
                            }
                        }))
                        case 'parameter': return _p.ss($, ($) => $['l entry'].module['resulting module']['root value'])
                        case 'result': return _p.ss($, ($) => _p_cc($, ($) => {
                            switch ($[0]) {
                                case 'state': return _p.ss($, ($) => $.result['resulting module']['root value'])
                                case 'optional value': return _p.ss($, ($) => $.result['resulting module']['root value'])
                                case 'list': return _p.ss($, ($) => $['list result']['resulting module']['root value'])
                                default: return _p.au($[0])
                            }
                        }))
                        case 'list cursor': return _p.ss($, ($) => $p['list cursor'].__decide(
                            ($) => $['resulting module']['root value'],
                            () => _i_generic.abort.is_set_assertion("list cursor", start_loc, abort)
                        ))
                        case 'linked entry': return _p.ss($, ($) => $p['linked entry'].__decide(
                            ($) => $['resulting dictionary'].value,
                            () => _i_generic.abort.is_set_assertion("linked entry", start_loc, abort)
                        ))
                        case 'option constraint': return _p.ss($, ($) => _p_cc($['l entry'], ($) => {
                            switch ($[0]) {
                                case 'state': return _p.ss($, ($) => $.option['l entry'].value)
                                case 'assert is set': return _p.ss($, ($) => pvs($))
                                default: return _p.au($[0])
                            }
                        }))
                        case 'sibling': return _p.ss($, ($) => $['l entry'].definition.value)
                        case 'parent sibling': return _p.ss($, ($) => $['l entry'].definition.value)
                        default: return _p.au($[0])
                    }
                })
                return gvs_start(p_start)
            })
        },
    )
    const p_resulting_type: d_out.Value = p_tail['resulting node']
    return ({
        'start': p_start,
        'tail': p_tail,
        'resulting node': p_resulting_type,
    })
}))

export const Type_Specification: signatures.Module_Specification = ($, abort, $l, $p) => _p_deprecated_block(() => ({
    'schema': Schema_Tree(
        $.schema,
        abort,
        {
            'sibling schemas': _p_ls.stack.empty(),
        },
        $p,
    ),
    'schema path': $['schema path']['l list'].__l_map(($) => $['l item']),
    'module': $.module,
}))