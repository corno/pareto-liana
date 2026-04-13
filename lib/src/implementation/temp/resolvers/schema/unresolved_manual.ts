import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _p_sl from 'pareto-core/dist/select_lookup'
import _p_variables from 'pareto-core/dist/_p_variables'
import _p_change_context from 'pareto-core/dist/_p_change_context'

// import * as _i_generic from 'pareto-core/dist/algorithm_types/refiner/resolve'
import * as t_signatures from "../../../../interface/generated/liana/schemas/schema/signatures/resolved/refiners/unresolved"

import * as t_out from "../../../../interface/generated/liana/schemas/schema/data/resolved"

import * as _i_generic from "../../resolve_generic"

// import * as _r from "../../../interface/generated/liana/generic/resolved"


import  { Value as Resolver_Value } from "../resolver/unresolved_manual"
import  { Signatures } from "../signatures/unresolved_manual"
import  { Value, Globals } from "../modules/unresolved_manual"


export const Package: t_signatures.Package = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {

        const prop_omit_$po_de$pc_serializer = _p_change_context(
            $['omit (de)serializer'],
            ($) => $,
        )

        const prop_schema_tree = _p_change_context(
            $['schema tree'],
            ($) => Schema_Tree(
                $,
                ($) => abort(
                    $,
                ),
                {
                    'sibling schemas': _p_sl.stack.empty(
                    ),
                },
                null,
            ),
        )
        return {
            'omit (de)serializer': prop_omit_$po_de$pc_serializer,
            'schema tree': prop_schema_tree,
        }
    },
)


export const Schema_Imports: t_signatures.Schema_Imports = ($, abort, $l, $p) => _p_variables(() => _p_change_context($, ($) => _i_generic.temp_resolve(
    $['l dictionary'],
    ($, id) => _p_change_context($, ($) => _p_change_context($, ($): t_out.Schema_Imports.D => {
        const foo = _p_change_context($['l entry']['schema set child'], ($) => _i_generic.get_entry_stack(
            $l['sibling schemas'],
            $,
            abort,
        ))
        const p_schema_set_child: t_out.Schema_Imports.D.schema_set_child = {
            'l value': foo,
            'l results': {
                'schema': _p.decide.state(foo['l entry'], ($) => {
                    switch ($[0]) {
                        case 'schema': return _p.ss($, ($) => $)
                        case 'set': return _p.ss($, ($) => abort({
                            'type': ['constraint', ['state', {
                                'expected': "schema",
                                'found': "set",
                            }]],
                            'location': loc
                        }))
                        default: return _p.au($[0])
                    }
                })
            }
        }
        const loc = $['l entry']['schema set child']['l location']
        const p_schema: t_out.Schema_Imports.D.schema = _p_change_context($['l entry']['schema'], ($) => p_schema_set_child['l results'].schema)
        return {
            'schema set child': p_schema_set_child,
            'schema': p_schema,
        }
    })),
)))
export const Resolver_Imports: t_signatures.Resolver_Imports = ($, abort, $l, $p) => _p_variables(() => _p_change_context($, ($) => _i_generic.temp_resolve(
    $['l dictionary'],
    ($, id) => _p_change_context($, ($) => _p_change_context($, ($): t_out.Resolver_Imports.D => {
        const loc = $['l entry']['schema set child']['l location']
        const foo = _p_change_context($['l entry']['schema set child'], ($) => _i_generic.get_entry_stack(
            $l['sibling schemas'],
            $,
            abort,
        ))
        const p_schema_set_child: t_out.Resolver_Imports.D.schema_set_child = {
            'l value': foo,
            'l results': {
                'resolver': _p.decide.state(foo['l entry'], ($) => {
                    switch ($[0]) {
                        case 'schema': return _p.ss($, ($) => _p.decide.state($.complexity, ($) => {
                            switch ($[0]) {
                                case 'constrained': return _p.ss($, ($) => $)
                                case 'unconstrained': return _p.ss($, ($) => abort({
                                    'type': ['constraint', ['state', {
                                        'expected': "constrained",
                                        'found': "unconstrained",
                                    }]],
                                    'location': loc
                                }))
                                default: return _p.au($[0])
                            }
                        }))
                        case 'set': return _p.ss($, ($) => abort({
                            'type': ['constraint', ['state', {
                                'expected': "schema",
                                'found': "set",
                            }]],
                            'location': loc
                        }))
                        default: return _p.au($[0])
                    }
                })
            }
        }
        const p_schema: t_out.Resolver_Imports.D.resolver = _p_change_context($['l entry']['resolver'], ($) => p_schema_set_child['l results'].resolver)
        return {
            'schema set child': p_schema_set_child,
            'resolver': p_schema,
        }
    })),
)))

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $l, $p) => _p_variables(() => _p_change_context($['l state'], ($): t_out.Schemas.D => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => ['schema', _p_variables(() => {
            const p_schema_imports = Schema_Imports(
                $['schema imports'],
                abort,
                {
                    'sibling schemas': $l['sibling schemas'],

                },
                null,

            )
            const p_resolver_imports = Resolver_Imports(
                $['resolver imports'],
                abort,
                {
                    'sibling schemas': $l['sibling schemas'],

                },
                null,

            )
            const p_globals: t_out.Schema.globals = _p_change_context($['globals'], ($) => Globals(
                $,
                abort,
                null,
                null,
            ))
            const p_types: t_out.Modules = _i_generic.temp_resolve(
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
                            'imports': _p.optional.literal.set(p_schema_imports),
                            'globals': _p.optional.literal.set(p_globals),
                        },

                    )
                    return {
                        'root value': p_type,

                    }
                },
            )
            const p_complexity: t_out.Schema.complexity = _p_change_context($.complexity['l state'], ($) => {
                switch ($[0]) {
                    case 'constrained': return _p.ss($, ($) => {

                        const p_signatures: t_out.Resolver.signatures = _p_change_context($.signatures, ($) => {
                            const p_types_2: t_out.Resolver.signatures.signatures = _p_change_context($, ($) => Signatures(
                                $.signatures,
                                abort,
                                null,
                                {
                                    'imports': p_schema_imports,
                                    'modules': p_types,
                                },
                            ))
                            return {
                                'signatures': p_types_2,
                            }
                        })
                        const p_modules: t_out.Resolver.modules = _i_generic.resolve_dense_dictionary(
                            $.modules['l dictionary'],
                            $.modules['l location'],
                            abort,
                            p_signatures.signatures,
                            ($, id, $acyclic, $cyclic) => {

                                const p_linked_entry = _i_generic.get_entry_acyclic(
                                    _p_sl.acyclic.from_resolved_dictionary(p_types),
                                    {
                                        'l reference': id,
                                        'l location': $['l location'],
                                    },
                                    abort,
                                )
                                const p_signature = _i_generic.get_entry_acyclic(
                                    _p_sl.acyclic.from_resolved_dictionary(p_signatures.signatures),
                                    {
                                        'l reference': id,
                                        'l location': $['l location'],
                                    },
                                    abort,
                                )

                                const p_type_resolver = Resolver_Value(
                                    $['l entry']['root value resolver'],
                                    abort,
                                    {
                                        'sibling property resolvers': _p_sl.acyclic.not_set(),
                                        'parent sibling property resolvers': _p_sl.acyclic.not_set(),

                                    },
                                    {
                                        'list cursor': _p.optional.literal.not_set(),
                                        'linked entry': _p.optional.literal.not_set(),
                                        'current dictionary': _p.optional.literal.not_set(),
                                        'current ordered dictionary': _p.optional.literal.not_set(),
                                        'option constraints': _p.optional.literal.not_set(),

                                        'definition': p_linked_entry['l entry']['root value'],
                                        'signature': p_signature['l entry'],

                                        'modules': p_types,
                                        'schema imports': _p.optional.literal.set(p_schema_imports),
                                        'resolver imports': _p.optional.literal.set(p_resolver_imports),
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
                            'modules': p_modules,
                        }]
                    })
                    case 'unconstrained': return _p.ss($, ($) => ['unconstrained', null])
                    default: return _p.au($[0])
                }
            })
            return ({
                'schema imports': p_schema_imports,
                'resolver imports': p_resolver_imports,
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

export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => _p_variables(() => _i_generic.temp_resolve(
    $['l dictionary'],
    ($, id, $acyclic, $cyclic) => _p_change_context($, ($) => Schema_Tree(
        $['l entry'],
        abort,
        {
            'sibling schemas': _p_sl.stack.push($l['sibling schemas'], $acyclic)
        },
        null,
    )),
))



export const Module_Specification: t_signatures.Module_Specification = ($, abort, $l, $p) => _p_variables(() => ({
    'schema': Schema_Tree(
        $.schema,
        abort,
        {
            'sibling schemas': _p_sl.stack.empty(),
        },
        $p,
    ),
    'schema path': $['schema path']['l list'].__l_map(($) => $['l item']),
    'module': $.module,
}))