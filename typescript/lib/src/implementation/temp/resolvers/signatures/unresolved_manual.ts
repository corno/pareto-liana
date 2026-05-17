import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _p_sl from 'pareto-core/dist/select_static_lookup'
import _p_variables from 'pareto-core/dist/_p_variables'
import _p_change_context from 'pareto-core/dist/_p_change_context'

// import * as _i_generic from 'pareto-core/dist/algorithm_types/refiner/resolve'
import * as t_signatures from "../../../../interface/generated/liana/schemas/schema/signatures/resolved/refiners/unresolved"

import * as t_out from "../../../../interface/generated/liana/schemas/schema/data/resolved"

import * as _i_generic from "../../resolve_generic"

import { Module_Reference } from "../modules/unresolved_manual"

export const Signatures: t_signatures.Resolver_Signatures = ($, abort, $l, $p) => {
    return _i_generic.resolve_dense_dictionary(
        $['l dictionary'],
        $['l location'],
        abort,
        $p.modules,
        ($, id, $acyclic, $cyclic) => {
            const p_linked_entry = _i_generic.get_entry_acyclic(
                _p_sl.acyclic.from_resolved_dictionary($p.modules),
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
    const p_parameters: t_out.Resolver_Signature.parameters = _p_change_context($.parameters['l state'], ($): t_out.Resolver_Signature.parameters => {
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
        'resolved parameters': _p_change_context(p_parameters, ($) => {
            switch ($[0]) {
                case 'local': return _p.ss($, ($) => $)
                case 'same as': return _p.ss($, ($) => $['l entry']['resolved parameters'])
                default: return _p.au($[0])
            }
        })
    }
}

export const Signature_Parameters: t_signatures.Resolver_Signature_Parameters = ($, abort, $l, $p) => {

    const p_parameters_values: t_out.Resolver_Signature_Parameters.modules = _i_generic.temp_resolve(
        $.modules['l dictionary'],
        ($, id, $acyclic, $cyclic) => {

            const p_schema_type = Module_Reference(
                $['l entry'].module,
                abort,
                {
                    'modules': _p_sl.acyclic.from_resolved_dictionary($p.modules),
                },
                {
                    'imports': _p.optional.literal.not_set(),
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
    const p_parameters_lookups: t_out.Resolver_Signature_Parameters.lookups = _i_generic.temp_resolve(
        $.lookups['l dictionary'],
        ($, id, $acyclic, $cyclic) => {
            const p_referent = Module_Reference(
                $['l entry'].referent,
                abort,
                {
                    'modules': _p_sl.acyclic.from_resolved_dictionary($p.modules),
                },
                {
                    'imports': _p.optional.literal.not_set(),
                },

            )

            const p_type: t_out.Resolver_Signature_Parameters.lookups.D.type_ = _p_change_context($['l entry'].type['l state'], ($) => {
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
                'dictionary': _p_change_context(p_referent['resulting module']['root value'], ($) => { // component constraint (referent)
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
