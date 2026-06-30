import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_sl from 'pareto-core/dist/implementation/refiner/specials/lookup'
import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'


import * as t_signatures from "../../../../interface/generated/liana/schemas/schema/signatures/resolved/refiners/unresolved"

import * as t_out from "../../../../interface/generated/liana/schemas/schema/data/resolved"

import * as i_generic from "../../resolve_generic"

import { Module_Reference } from "../modules/unresolved_manual"

export const Signatures: t_signatures.Resolver_Signatures = ($, abort, $l, $p) => {
    return i_generic.resolve_dense_dictionary(
        $['l dictionary'],
        $['l location'],
        abort,
        $p.modules,
        ($, id, $acyclic, $cyclic) => {
            const p_linked_entry = i_generic.get_entry_acyclic(
                p_sl.acyclic.from_resolved_dictionary($p.modules),
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

export const Signature: t_signatures.Resolver_Signature = ($, abort, $l, $p) => {
    const p_parameters: t_out.Resolver_Signature.parameters = p_change_context($.parameters['l state'], ($): t_out.Resolver_Signature.parameters => {
        switch ($[0]) {
            case 'local': return p_.option($, ($) => ['local', Signature_Parameters(
                $,
                abort,
                p_.literal.nothing(),
                {
                    'imports': $p.imports,
                    'modules': $p.modules,
                },
            )])
            case 'same as': return p_.option($, ($) => ['same as', i_generic.get_entry_acyclic(
                $l['sibling signatures'],
                $,
                abort,
            )])
            default: return p_.au($[0])
        }
    })
    return {
        'module': $p.module,
        'parameters': p_parameters,
        'resolved parameters': p_change_context(p_parameters, ($) => {
            switch ($[0]) {
                case 'local': return p_.option($, ($) => $)
                case 'same as': return p_.option($, ($) => $['l entry']['resolved parameters'])
                default: return p_.au($[0])
            }
        })
    }
}

export const Signature_Parameters: t_signatures.Resolver_Signature_Parameters = ($, abort, $l, $p) => {

    const p_parameters_values: t_out.Resolver_Signature_Parameters.modules = i_generic.temp_resolve(
        $.modules['l dictionary'],
        ($, id, $acyclic, $cyclic) => {

            const p_schema_type = Module_Reference(
                $['l entry'].module,
                abort,
                {
                    'modules': p_sl.acyclic.from_resolved_dictionary($p.modules),
                },
                {
                    'imports': p_.literal.not_set(),
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
    const p_parameters_lookups: t_out.Resolver_Signature_Parameters.lookups = i_generic.temp_resolve(
        $.lookups['l dictionary'],
        ($, id, $acyclic, $cyclic) => {
            const p_referent = Module_Reference(
                $['l entry'].referent,
                abort,
                {
                    'modules': p_sl.acyclic.from_resolved_dictionary($p.modules),
                },
                {
                    'imports': p_.literal.not_set(),
                },

            )

            const p_type: t_out.Resolver_Signature_Parameters.lookups.D.type_ = p_change_context($['l entry'].type['l state'], ($) => {
                switch ($[0]) {
                    case 'acyclic': return p_.option($, ($) => ['acyclic', null])
                    case 'cyclic': return p_.option($, ($) => ['cyclic', null])
                    case 'stack': return p_.option($, ($) => ['stack', $])
                    default: return p_.au($[0])
                }
            })
            const p_presence = $['l entry'].presence['l state']
            return {
                'referent': p_referent,
                'dictionary': p_change_context(p_referent['resulting module']['root value'], ($) => { // component constraint (referent)
                    switch ($[0]) {
                        case 'dictionary': return p_.option($, ($) => $)
                        default: return i_generic.abort.state_constraint_found_expected(
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
