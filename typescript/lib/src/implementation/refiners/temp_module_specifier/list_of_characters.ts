import * as p_ from 'pareto-core/implementation/refiner'
import * as p_t from 'pareto-core/implementation/transformer'
import type * as p_di from 'pareto-core/interface/data'
import p_implement_me from 'pareto-core-dev/implement_me'
import p_log_debug_message from 'pareto-core-dev/log_debug_message'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'

import type * as interface_ from "../../../declarations/refiners/temp_module_specifier/list_of_characters.js"

//data types
import type * as d_out from "../../../interface/schemas/temp_module_specifier.js"
import type * as d_out_schema from "../../../modules/schema/interface/schemas/resolved.js"

//dependencies
import * as r_schema_resolved_from_unresolved from "../../to_be_generated/refiners/schema/unresolved_manual.js"
import * as r_schema_unresolved_from_loc from "../../../modules/schema/implementation/refiners/unresolved/list_of_characters.js"

export const Module_Specifier: interface_.Module_Specifier = ($, abort) => {
    const almost_resolved_module_specification = r_schema_resolved_from_unresolved.Module_Specification(
        r_schema_unresolved_from_loc.Module_Specification(
            $,
            ($) => abort(['deserialize', $]),
            {
                'tab size': 4,
            }
        ),
        ($) => abort(['resolve error', $]),
        p_.literal.nothing(),
        p_.literal.nothing(),
    )

    const temp_find_schema = (
        $: d_out_schema.Schema_Tree,
        schema_path: p_di.List<string>,
    ): d_out_schema.Schema => {
        const st = $

        type Element_And_Rest<T extends p_di.Value> = {
            'element': T
            'rest': p_di.List<T>
        }
        const temp_pop_first_element = <T extends p_di.Value>($: p_di.List<T>): p_di.Optional_Value<Element_And_Rest<T>> => {
            const arr = $
            return p_.from.optional(
                $.__deprecated_get_possible_item_at(0),
            ).map(
                ($) => ({
                    'rest': p_list_build_deprecated(
                        ($i) => {
                            let is_first = true
                            p_.from.list(arr).map(
                                ($) => {
                                    if (!is_first) {
                                        $i['add item']($)
                                    }
                                    is_first = false
                                    return null
                                })
                        }),
                    'element': $,
                }),
            )
        }
        return p_.from.optional(temp_pop_first_element(schema_path)).decide(
            ($) => {
                const split = $
                return p_.from.state(st).decide(
                    ($) => {
                        switch ($[0]) {

                            case 'schema': return p_.option($, ($) => p_implement_me(`(FIXME: make this a reference) the selected tree is a schema, not a set, can't do this step: ${split.element} `))
                            case 'set': return p_.option($, ($) => p_t.from.dictionary($).get_possible_entry(
                                split.element,
                                ($) => temp_find_schema($, split.rest),
                                () => p_implement_me(`(FIXME: make this a reference) schema not found: '${split.element}'`)
                            ))
                            default: return p_.exhaustive($[0])
                        }
                    })
            },
            () => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'schema': return p_.option($, ($) => $)
                        case 'set': return p_.option($, ($) => p_implement_me("(FIXME: make this a reference) the selected tree is a set, not a schema"))
                        default: return p_.exhaustive($[0])
                    }
                })
        )
    }
    const $_schema = temp_find_schema(almost_resolved_module_specification.schema, almost_resolved_module_specification['schema path'])

    return p_.from.state(almost_resolved_module_specification.complexity).decide(
        ($): d_out.Temp_Module_Specifier => {
            switch ($[0]) {
                case 'constrained': return p_.option($, ($): d_out.Temp_Module_Specifier => {
                    const $p_resolver = p_.from.state($_schema.complexity).decide(
                        ($): d_out_schema.Resolver => {
                            switch ($[0]) {
                                case 'constrained': return p_.option($, ($) => $)
                                case 'unconstrained': return p_.option($, ($) => abort(['resolve error', {
                                    'location': ['in main document', {
                                        'start': {
                                            'absolute': 0,
                                            'relative': {
                                                'column': 0,
                                                'line': 0,
                                            }
                                        },
                                        'end': {
                                            'absolute': 0,
                                            'relative': {
                                                'column': 0,
                                                'line': 0,
                                            }
                                        },
                                    }],
                                    'type': ['constraint', ['state', {
                                        'expected': "constrained",
                                        'found': "unconstrained",
                                    }]]
                                }]))
                                default: return p_.exhaustive($[0])
                            }
                        })
                    return ['constrained', {
                        'resolver': $p_resolver,
                        'module resolver': {
                            'entry': p_t.from.dictionary($p_resolver.modules).get_possible_entry(
                                $['module resolver'],
                                ($) => $,
                                () => {
                                    p_.from.dictionary($_schema.modules).map(
                                        ($, id) => {
                                            p_log_debug_message(`available type: ${id}`, () => { })
                                            return null
                                        }
                                    )
                                    p_implement_me(`(FIXME: make this a reference) root type ${$['module resolver']} not found`)
                                }
                            ),
                            'id': $['module resolver'],
                        }
                    }]
                })
                case 'unconstrained': return p_.option($, ($) => {

                    return ['unconstrained', {
                        'module': {
                            'entry': p_.from.dictionary($_schema.modules).get_entry(
                                $.module,
                                {
                                    'no_such_entry': () => {
                                        p_.from.dictionary($_schema.modules).map(
                                            ($, id) => {
                                                p_log_debug_message(`available type: ${id}`, () => { })
                                                return null
                                            }
                                        )
                                        return p_implement_me(`(FIXME: make this a reference) root type ${$.module} not found`)
                                    }
                                }
                            ),
                            'id': $.module,
                        }
                    }]
                })
                default: return p_.exhaustive($[0])
            }
        })


}