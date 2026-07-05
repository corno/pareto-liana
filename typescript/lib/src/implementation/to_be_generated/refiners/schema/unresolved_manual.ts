import * as p_ from 'pareto-core/implementation/refiner'
import * as p_sl from 'pareto-core/implementation/refiner/specials/lookup'
import p_variables from 'pareto-core/implementation/refiner/specials/variables'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'


import * as t_signatures from "../../../../interface/generated/liana/schemas/schema/signatures/resolved/refiners/unresolved.js"

import * as t_out from "../../../../interface/generated/liana/schemas/schema/data/resolved.js"

import * as i_generic from "../../resolve_generic.js"

import { Value as Resolver_Value } from "../resolver/unresolved_manual.js"
import { Signatures } from "../signatures/unresolved_manual.js"
import { Value, Globals } from "../modules/unresolved_manual.js"


export const Package: t_signatures.Package = ($, abort, $l, $p) => p_.literal.group_resolve(
    () => {

        const prop_omit_$po_de$pc_serializer = p_change_context(
            $['omit (de)serializer'],
            ($) => $,
        )

        const prop_schema_tree = p_change_context(
            $['schema tree'],
            ($) => Schema_Tree(
                $,
                ($) => abort(
                    $,
                ),
                {
                    'sibling schemas': p_sl.stack.empty(
                    ),
                },
                p_.literal.nothing(),
            ),
        )
        return {
            'omit (de)serializer': prop_omit_$po_de$pc_serializer,
            'schema tree': prop_schema_tree,
        }
    },
)


export const Schema_Imports: t_signatures.Schema_Imports = ($, abort, $l, $p) => p_variables(
    () => p_change_context($, ($) => i_generic.temp_resolve(
        $['l dictionary'],
        ($, id) => p_change_context($, ($) => p_change_context($, ($): t_out.Schema_Imports.D => {
            const foo = p_change_context($['l entry']['schema set child'], ($) => i_generic.get_entry_stack(
                $l['sibling schemas'],
                $,
                abort,
            ))
            const p_schema_set_child: t_out.Schema_Imports.D.schema_set_child = {
                'l value': foo,
                'l results': {
                    'schema': p_.from.state(foo['l entry']).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'schema': return p_.option($, ($) => $)
                                case 'set': return p_.option($, ($) => abort({
                                    'type': ['constraint', ['state', {
                                        'expected': "schema",
                                        'found': "set",
                                    }]],
                                    'location': loc
                                }))
                                default: return p_.au($[0])
                            }
                        })
                }
            }
            const loc = $['l entry']['schema set child']['l location']
            const p_schema: t_out.Schema_Imports.D.schema = p_change_context($['l entry']['schema'], ($) => p_schema_set_child['l results'].schema)
            return {
                'schema set child': p_schema_set_child,
                'schema': p_schema,
            }
        })),
    )))
export const Resolver_Imports: t_signatures.Resolver_Imports = ($, abort, $l, $p) => p_variables(
    () => p_change_context($, ($) => i_generic.temp_resolve(
        $['l dictionary'],
        ($, id) => p_change_context($, ($) => p_change_context($, ($): t_out.Resolver_Imports.D => {
            const loc = $['l entry']['schema set child']['l location']
            const foo = p_change_context($['l entry']['schema set child'], ($) => i_generic.get_entry_stack(
                $l['sibling schemas'],
                $,
                abort,
            ))
            const p_schema_set_child: t_out.Resolver_Imports.D.schema_set_child = {
                'l value': foo,
                'l results': {
                    'resolver': p_.from.state(foo['l entry']).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'schema': return p_.option($, ($) => p_.from.state($.complexity).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'constrained': return p_.option($, ($) => $)
                                            case 'unconstrained': return p_.option($, ($) => abort({
                                                'type': ['constraint', ['state', {
                                                    'expected': "constrained",
                                                    'found': "unconstrained",
                                                }]],
                                                'location': loc
                                            }))
                                            default: return p_.au($[0])
                                        }
                                    }))
                                case 'set': return p_.option($, ($) => abort({
                                    'type': ['constraint', ['state', {
                                        'expected': "schema",
                                        'found': "set",
                                    }]],
                                    'location': loc
                                }))
                                default: return p_.au($[0])
                            }
                        })
                }
            }
            const p_schema: t_out.Resolver_Imports.D.resolver = p_change_context($['l entry']['resolver'], ($) => p_schema_set_child['l results'].resolver)
            return {
                'schema set child': p_schema_set_child,
                'resolver': p_schema,
            }
        })),
    )))

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $l, $p) => p_variables(
    () => p_change_context($['l state'], ($): t_out.Schemas.D => {
        switch ($[0]) {
            case 'schema': return p_.option($, ($) => ['schema', p_variables(
                () => {
                    const p_schema_imports = Schema_Imports(
                        $['schema imports'],
                        abort,
                        {
                            'sibling schemas': $l['sibling schemas'],

                        },
                        p_.literal.nothing(),

                    )
                    const p_resolver_imports = Resolver_Imports(
                        $['resolver imports'],
                        abort,
                        {
                            'sibling schemas': $l['sibling schemas'],

                        },
                        p_.literal.nothing(),

                    )
                    const p_globals: t_out.Schema.globals = p_change_context($['globals'], ($) => Globals(
                        $,
                        abort,
                        p_.literal.nothing(),
                        p_.literal.nothing(),
                    ))
                    const p_types: t_out.Modules = i_generic.temp_resolve(
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
                                    'imports': p_.literal.set(p_schema_imports),
                                    'globals': p_.literal.set(p_globals),
                                },

                            )
                            return {
                                'root value': p_type,

                            }
                        },
                    )
                    const p_complexity: t_out.Schema.complexity = p_change_context($.complexity['l state'], ($) => {
                        switch ($[0]) {
                            case 'constrained': return p_.option($, ($) => {

                                const p_signatures: t_out.Resolver.signatures = p_change_context($.signatures, ($) => {
                                    const p_types_2: t_out.Resolver.signatures.signatures = p_change_context($, ($) => Signatures(
                                        $.signatures,
                                        abort,
                                        p_.literal.nothing(),
                                        {
                                            'imports': p_schema_imports,
                                            'modules': p_types,
                                        },
                                    ))
                                    return {
                                        'signatures': p_types_2,
                                    }
                                })
                                const p_modules: t_out.Resolver.modules = i_generic.resolve_dense_dictionary(
                                    $.modules['l dictionary'],
                                    $.modules['l location'],
                                    abort,
                                    p_signatures.signatures,
                                    ($, id, $acyclic, $cyclic) => {

                                        const p_linked_entry = i_generic.get_entry_acyclic(
                                            p_sl.acyclic.from_resolved_dictionary(p_types),
                                            {
                                                'l reference': id,
                                                'l location': $['l location'],
                                            },
                                            abort,
                                        )
                                        const p_signature = i_generic.get_entry_acyclic(
                                            p_sl.acyclic.from_resolved_dictionary(p_signatures.signatures),
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
                                                'sibling property resolvers': p_sl.acyclic.not_set(),
                                                'parent sibling property resolvers': p_sl.acyclic.not_set(),

                                            },
                                            {
                                                'list cursor': p_.literal.not_set(),
                                                'linked entry': p_.literal.not_set(),
                                                'current dictionary': p_.literal.not_set(),
                                                'current ordered dictionary': p_.literal.not_set(),
                                                'option constraints': p_.literal.not_set(),

                                                'definition': p_linked_entry['l entry']['root value'],
                                                'signature': p_signature['l entry'],

                                                'modules': p_types,
                                                'schema imports': p_.literal.set(p_schema_imports),
                                                'resolver imports': p_.literal.set(p_resolver_imports),
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
                            case 'unconstrained': return p_.option($, ($) => ['unconstrained', null])
                            default: return p_.au($[0])
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
            case 'set': return p_.option($, ($) => ['set', Schemas(
                $,
                abort,
                $l,
                $p,
            )])
            default: return p_.au($[0])
        }
    }))

export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => p_variables(
    () => i_generic.temp_resolve(
        $['l dictionary'],
        ($, id, $acyclic, $cyclic) => p_change_context($, ($) => Schema_Tree(
            $['l entry'],
            abort,
            {
                'sibling schemas': p_sl.stack.push($l['sibling schemas'], $acyclic)
            },
            p_.literal.nothing(),
        )),
    ))



export const Module_Specification: t_signatures.Module_Specification = ($, abort, $l, $p) => p_variables(
    () => ({
        'schema': Schema_Tree(
            $.schema,
            abort,
            {
                'sibling schemas': p_sl.stack.empty(),
            },
            $p,
        ),
        'schema path': p_.from.list($['schema path']['l list']).map(
            ($) => $['l item']),
        'complexity': p_.from.state($.complexity['l state']).decide(
            ($) => {
                switch ($[0]) {
                    case 'constrained': return p_.option($, ($) => ['constrained', {
                        'module resolver': $['module resolver']
                    }])
                    case 'unconstrained': return p_.option($, ($) => ['unconstrained', {
                        'module': $.module
                    }])
                    default: return p_.au($[0])
                }
            })
    }))