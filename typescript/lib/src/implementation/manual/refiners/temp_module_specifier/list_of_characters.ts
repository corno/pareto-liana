import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'
import p_implement_me from 'pareto-core-dev/dist/implement_me'
import p_log_debug_message from 'pareto-core-dev/dist/log_debug_message'
import * as _p_temp from 'pareto-core/dist/assign'
import p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import p_create_symbol from 'pareto-core/dist/_p_create_symbol'

//data types
import * as d_out from "../../../../interface/to_be_generated/temp_module_specifier"
import * as d_out_schema from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_function from "liana-core/dist/interface/to_be_generated/deserialize_resolved"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"


//dependencies
import * as r_schema_resolved_from_unresolved from "../../../temp/resolvers/schema/unresolved_manual"
import * as r_schema_unresolved_from_loc from "../../../generated/liana/schemas/schema/unresolved/refiners/list_of_characters"

export type Module_Specifier = pi.Refiner<
    d_out.Temp_Module_Specifier,
    d_function.Error,
    d_in.List_of_Characters
>

export const Module_Specifier: Module_Specifier = ($, abort) => {


    const almost_resolved_module_specification = r_schema_resolved_from_unresolved.Module_Specification(
        r_schema_unresolved_from_loc.Module_Specification(
            $,
            ($) => abort(['deserialize', $]),
            {
                'tab size': 4,
            }
        ),
        ($) => abort(['resolve error', $]),
        p_create_symbol(),
        p_create_symbol(),
    )

    const temp_find_schema = (
        $: d_out_schema.Schema_Tree,
        schema_path: pi.List<string>,
    ): d_out_schema.Schema => {
        const st = $

        type Element_And_Rest<T extends pi.Value> = {
            'element': T
            'rest': pi.List<T>
        }
        const temp_pop_first_element = <T extends pi.Value>($: pi.List<T>): pi.Optional_Value<Element_And_Rest<T>> => {
            const arr = $
            return pt.optional.from.optional(
                $.__deprecated_get_possible_item_at(0),
            ).map(
                ($) => ({
                    'rest': p_list_build_deprecated(($i) => {
                        let is_first = true
                        arr.__l_map(($) => {
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
        return temp_pop_first_element(schema_path).__decide(
            ($) => {
                const split = $
                return _p_temp.decide.state(st, ($) => {
                    switch ($[0]) {

                        case 'schema': return _p_temp.ss($, ($) => p_implement_me(`(FIXME: make this a reference) the selected tree is a schema, not a set, can't do this step: ${split.element} `))
                        case 'set': return _p_temp.ss($, ($) => $.__get_possible_entry_deprecated(split.element).__decide(
                            ($) => temp_find_schema($, split.rest),
                            () => p_implement_me(`(FIXME: make this a reference) schema not found: '${split.element}'`)
                        ))
                        default: return _p_temp.au($[0])
                    }
                })
            },
            () => _p_temp.decide.state($, ($) => {
                switch ($[0]) {
                    case 'schema': return _p_temp.ss($, ($) => $)
                    case 'set': return _p_temp.ss($, ($) => p_implement_me("(FIXME: make this a reference) the selected tree is a set, not a schema"))
                    default: return _p_temp.au($[0])
                }
            })
        )
    }
    const schema = temp_find_schema(almost_resolved_module_specification.schema, almost_resolved_module_specification['schema path'])

    return pt.decide.state(almost_resolved_module_specification.complexity, ($): d_out.Temp_Module_Specifier => {
        switch ($[0]) {
            case 'constrained': return pt.ss($, ($): d_out.Temp_Module_Specifier => {
                const constrained_schema = pt.decide.state(schema.complexity, ($): d_out_schema.Resolver => {
                    switch ($[0]) {
                        case 'constrained': return pt.ss($, ($) => $)
                        case 'unconstrained': return pt.ss($, ($) => abort(['resolve error', {
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
                        default: return pt.au($[0])
                    }
                })
                return ['constrained', {
                    'resolver': constrained_schema,
                    'module resolver': {
                        'entry': constrained_schema.modules.__get_possible_entry_deprecated($['module resolver']).__decide(
                            ($) => $,
                            () => {
                                schema.modules.__d_map(($, id) => {
                                    p_log_debug_message(`available type: ${id}`, () => { })
                                    return null
                                })
                                p_implement_me(`(FIXME: make this a reference) root type ${$['module resolver']} not found`)
                            }
                        ),
                        'id': $['module resolver'],
                    }
                }]
            })
            case 'unconstrained': return pt.ss($, ($) => {

                return ['unconstrained', {
                    'module': {
                        'entry': schema.modules.__get_possible_entry_deprecated($.module).__decide(
                            ($) => $,
                            () => {
                                schema.modules.__d_map(($, id) => {
                                    p_log_debug_message(`available type: ${id}`, () => { })
                                    return null
                                })
                                p_implement_me(`(FIXME: make this a reference) root type ${$.module} not found`)
                            }
                        ),
                        'id': $.module,
                    }
                }]
            })
            default: return pt.au($[0])
        }
    })


}