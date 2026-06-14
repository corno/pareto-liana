import * as pt from 'pareto-core-shorthands/dist/unresolved_data'
import * as pi from 'pareto-core/dist/interface'

import * as sh from 'pareto-core-shorthands/dist/unresolved_data'

import * as d_target from "../interface/generated/liana/schemas/schema/data/unresolved"

import * as temp_schema from "./schema"

export const resolver_modules = (
    resolvers: pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Modules.l_dictionary.D.l_entry>,
): d_target.Resolver_Modules => {
    return sh.dictionary(resolvers)
}


export const module_reference = temp_schema.module_reference


/**
 * lookup selection
 */
export namespace ls {

    export const parameter = (parameter: string): d_target.Resolver_Lookup_Selection => {
        return {
            'type': sh.state(['parameter', sh.reference(parameter)]),
            'resulting dictionary': null
        }
    }

    export namespace acyclic {

        export const siblings = (): d_target.Resolver_Lookup_Selection => {
            return {
                'type': sh.state(['acyclic', sh.state(['siblings', null])]),
                'resulting dictionary': null
            }
        }

        export const resolved_dictionary = (
            value_selection: d_target.Resolver_Guaranteed_Value_Selection
        ): d_target.Resolver_Lookup_Selection => {
            return {
                'type': sh.state(['acyclic', sh.state(['resolved dictionary', {
                    'selection': value_selection,
                    'selected dictionary': null,
                }])]),
                'resulting dictionary': null,
            }
        }
    }

    export namespace cyclic {

        export const siblings = (): d_target.Resolver_Lookup_Selection => {
            return {
                'type': sh.state(['cyclic', sh.state(['siblings', null])]),
                'resulting dictionary': null
            }
        }
    }

}

/**
 * node resolver lookup arguments
 */
export namespace al {

    export namespace acyclic {

        export const not_set = (
        ): d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
            return sh.state(['acyclic', sh.state(['not set', null])])
        }

        /**
         * this one is only usable in the context of an ordered dictionary
         */
        export const siblings = (): d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
            return sh.state(['selection', {
                'type': sh.state(['acyclic', sh.state(['siblings', null])]),
                'resulting dictionary': null,
            }])
        }

        export const dictionary = (value_selection: d_target.Resolver_Guaranteed_Value_Selection): d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
            return sh.state(['selection', {
                'type': sh.state(['acyclic', sh.state(['resolved dictionary', {
                    'selection': value_selection,
                    'selected dictionary': null,
                }])]),

                'resulting dictionary': null,
            }])
        }

    }

    export namespace cyclic {


        /**
         * this one is only usable in the context of a dictionary (ordered or not)
         */
        export const siblings = (

        ): d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
            return sh.state(['selection', {
                'type': sh.state(['cyclic', sh.state(['siblings', null])]),
                'resulting dictionary': null,
            }])
        }


        export const not_set = (
        ): d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
            return sh.state(['cyclic', sh.state(['not set', null])])
        }
    }

    export namespace stack {

        export const empty = (

        ): d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
            return sh.state(['stack', sh.state(['empty', null])])
        }


        export const push = (
            stack: d_target.Resolver_Lookup_Selection,
            item: d_target.Resolver_Lookup_Selection,
        ): d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
            return sh.state(['stack', sh.state(['push', {
                'stack': stack,
                'item': item,
            }])])
        }

    }


    /**
     * selects a lookup parameter of this resolver and passes it to the next resolver
     */
    export const parameter = (parameter: string): d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
        return sh.state(['selection', {
            'type': sh.state(['parameter', sh.reference(parameter)]),
            'resulting dictionary': null,
        }])
    }



}

/**
 * value selection path step
 */
export namespace rvs {

    export const component = (
    ): d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item => {
        return sh.state(['component', null])
    }

    export const group = (
        property: string,
    ): d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item => {
        return sh.state(['group', sh.reference(property)])
    }

    export const reference = (
    ): d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item => {
        return sh.state(['reference', {
            'definition': null,
        }])
    }

}

/**
 * optional value initialization
 */
export namespace ovi {

    export const not_set = (

    ): d_target.Resolver_Optional_Value_Initialization => {
        return sh.state(['not set', null])
    }

    export const set = (
        value: d_target.Resolver_Guaranteed_Value_Selection,
    ): d_target.Resolver_Optional_Value_Initialization => {
        return sh.state(['set', value])
    }

    export const selection = (
        selection: d_target.Resolver_Possible_Value_Selection,
    ): d_target.Resolver_Optional_Value_Initialization => {
        return sh.state(['selection', selection])
    }

}

/**
 * possible value selection
 */
export namespace pvs {
    export const state = (
        state: string,
        result: d_target.Module_Reference,
    ): d_target.Resolver_Possible_Value_Selection => {
        return sh.state<d_target.Resolver_Possible_Value_Selection.l_state>(['result', sh.state<d_target.Resolver_Possible_Value_Selection.l_state.result.l_state>(['state', {
            'property': sh.reference(state),
            'state': null,
            'result': result,
        }])])
    }

    export const optional_value = (
        optional_value: string,
        result: d_target.Module_Reference,
    ): d_target.Resolver_Possible_Value_Selection => {
        return sh.state<d_target.Resolver_Possible_Value_Selection.l_state>(['result', sh.state<d_target.Resolver_Possible_Value_Selection.l_state.result.l_state>(['optional value', {
            'property': sh.reference(optional_value),
            'optional value': null,
            'result': result,
        }])])
    }

    export const parameter = (
        parameter: string,
    ): d_target.Resolver_Possible_Value_Selection => {
        return sh.state(['parameter', sh.reference(parameter)])
    }

}

/**
 * guaranteed value selection
 */
export namespace gvs {

    export const component = (
        component: string,
        constraint: string,
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state(['constraint', sh.state<d_target.Resolver_Guaranteed_Value_Selection.start.l_state.constraint.l_state>(['component', {
                'property': sh.reference(component),
                'constraint': sh.reference(constraint),
            }])]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const reference = (
        reference: string,
        constraint: string,
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state(['constraint', sh.state<d_target.Resolver_Guaranteed_Value_Selection.start.l_state.constraint.l_state>(['reference', {
                'property': sh.reference(reference),
                'constraint': sh.reference(constraint),
            }])]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list = (
        list: string,
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state<d_target.Resolver_Guaranteed_Value_Selection.start.l_state>(['result', sh.state<d_target.Resolver_Guaranteed_Value_Selection.start.l_state.result.l_state>(['list', {
                'property': sh.reference(list),
                'list result': null,
            }])]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const state = (
        state: string,
        result: d_target.Module_Reference,
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state<d_target.Resolver_Possible_Value_Selection.l_state>(['result', sh.state<d_target.Resolver_Possible_Value_Selection.l_state.result.l_state>(['state', {
                'property': sh.reference(state),
                'state': null,
                'result': result,
            }])]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const optional_value = (
        optional_value: string,
        result: d_target.Module_Reference,
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state<d_target.Resolver_Possible_Value_Selection.l_state>(['result', sh.state<d_target.Resolver_Possible_Value_Selection.l_state.result.l_state>(['optional value', {
                'property': sh.reference(optional_value),
                'optional value': null,
                'result': result,
            }])]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parameter = (
        parameter: string,
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state<d_target.Resolver_Possible_Value_Selection.l_state>(['parameter', sh.reference(parameter)]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list_cursor = (
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state(['list cursor', null]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const linked_entry = (
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state(['linked entry', null]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const sibling = (
        sibling: string,
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state(['sibling', sh.reference(sibling)]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parent_sibling = (
        parent_sibling: string,
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state(['parent sibling', sh.reference(parent_sibling)]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const option_constraint = (
        constraint: string,
        tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_target.Resolver_Guaranteed_Value_Selection => {
        return {
            'start': sh.state(['option constraint', sh.reference(constraint)]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

}

/**
 * node resolver value argument
 */
export namespace av {

    export const parameter = (
        parameter: string,
    ): d_target.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry => {
        return sh.state(['parameter', sh.reference(parameter)])
    }

    export const required = (
        value: d_target.Resolver_Guaranteed_Value_Selection,
    ): d_target.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry => {
        return sh.state(['required', value])
    }

    export const optional = (
        value: d_target.Resolver_Optional_Value_Initialization,
    ): d_target.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry => {
        return sh.state(['optional', value])
    }

}

export const option = (
    resolver: d_target.Resolver_Value,
): d_target.Resolver_Value.l_state.state.options.l_dictionary.D.l_entry => {
    return {
        'constraints': sh.dictionary({}),
        'resolver': resolver,
    }
}

export const option_constrained = (
    constraints: pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Option_Constraints.l_dictionary.D.l_entry>,
    resolver: d_target.Resolver_Value,
): d_target.Resolver_Value.l_state.state.options.l_dictionary.D.l_entry => {
    return {
        'constraints': sh.dictionary(constraints),
        'resolver': resolver,
    }
}

/**
 * option constraint
 */
export namespace oc {

    export const state = (
        value_selection: d_target.Resolver_Guaranteed_Value_Selection,
        state: string,
    ): d_target.Resolver_Option_Constraints.l_dictionary.D.l_entry => {
        return sh.state(['state', {
            'selection': value_selection,
            'selected state': null,
            'option': sh.reference(state),
        }])
    }

    export const assert_set = (
        possibly_optional: d_target.Resolver_Possible_Value_Selection,
    ): d_target.Resolver_Option_Constraints.l_dictionary.D.l_entry => {
        return sh.state(['assert is set', possibly_optional])
    }

}

/**
 * value constraint resolvers
 */
export namespace vcr {

    /**
     * starting from the value
     */
    export const value = (
        value_selection_tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
        state?: string,
    ): d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry => {
        return {
            'start': sh.state(['value', null]),
            'constraint': {
                'selection': {
                    'path': sh.list(value_selection_tail),
                    'resulting node': null,
                },
                'type': state === undefined
                    ? sh.state(['optional value', {
                        'selected optional value': null,
                    }])
                    : sh.state(['state', {
                        'selected state': null,
                        'option': sh.reference(state),
                    }])
            },
        }
    }

    export const constraint = (
        constraint: string,
        value_selection_tail: d_target.Resolver_Relative_Value_Selection.path.l_list.L.l_item[],
        state?: string,
    ): d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry => {
        return {
            'start': sh.state(['sibling', sh.reference(constraint)]),
            'constraint': {
                'selection': {
                    'path': sh.list(value_selection_tail),
                    'resulting node': null,
                },
                'type': state === undefined
                    ? sh.state(['optional value', {
                        'selected optional value': null,
                    }])
                    : sh.state(['state', {
                        'selected state': null,
                        'option': sh.reference(state),
                    }])
            },
        }
    }

}

/**
 * node resolver
 */
export namespace r {

    export const text = (): d_target.Resolver_Value => {
        return sh.state(['text', null])
    }

    export const simple = (): d_target.Resolver_Value => {
        return sh.state(['simple', null])
    }

    export const component = (
        type: string,
        modules: null | pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry>,
        lookups: null | pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Value => {
        return sh.state(['component', {
            'definition': null,
            'location': sh.state(['internal', sh.reference(type)]),
            'signature': null,
            'arguments': pt.optionalx.set({
                'modules': modules === null ? sh.optionalx.not_set() : pt.optionalx.set(sh.dictionary(modules)),
                'lookups': lookups === null ? sh.optionalx.not_set() : pt.optionalx.set(sh.dictionary(lookups)),
            }),
            'constraints': sh.dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>({}),
        }])
    }
    export const component_constrained = (
        type: string,
        modules: null | pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry>,
        lookups: null | pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry>,
        constraints: pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Value => {
        return sh.state(['component', {
            'definition': null,
            'location': sh.state(['internal', sh.reference(type)]),
            'signature': null,
            'arguments': pt.optionalx.set({
                'modules': modules === null ? sh.optionalx.not_set() : pt.optionalx.set(sh.dictionary(modules)),
                'lookups': lookups === null ? sh.optionalx.not_set() : pt.optionalx.set(sh.dictionary(lookups)),
            }),
            'constraints': sh.dictionary(constraints),
        }])
    }
    export const component_external = (
        imp: string,
        type: string,
        modules: null | pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry>,
        lookups: null | pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry>,
        constraints?: pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Value => {
        return sh.state(['component', {
            'definition': null,
            'location': sh.state(['external', {
                'resolver import': sh.reference(imp),
                'schema import': sh.reference(imp),
                'signature': sh.reference(type),
            }]),
            'signature': null,
            'arguments': pt.optionalx.set({
                'modules': modules === null ? sh.optionalx.not_set() : pt.optionalx.set(sh.dictionary(modules)),
                'lookups': lookups === null ? sh.optionalx.not_set() : pt.optionalx.set(sh.dictionary(lookups)),
            }),
            'constraints': sh.dictionary(constraints === undefined ? {} : constraints),
        }])
    }

    export const dictionary = (resolver: d_target.Resolver_Value): d_target.Resolver_Value => {
        return sh.state(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': sh.optionalx.not_set(),
        }])
    }

    export const dictionary_linked = (
        dense: 'dense' | 'sparse',
        selection: d_target.Resolver_Guaranteed_Value_Selection,
        resolver: d_target.Resolver_Value,
    ): d_target.Resolver_Value => {
        return sh.state(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': pt.optionalx.set({
                'selection': selection,
                'resulting dictionary': null,
                'dense': dense === 'dense',
            }),
        }])
    }

    export const group = (
        properties: pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value_Group.l_dictionary.D.l_entry.resolver> //FIXME: remove the 'this entry' step
    ): d_target.Resolver_Value => {
        const temp_dict = sh.dictionary(properties)
        return sh.state(['group', {
            'l location': temp_dict['l location'],
            'l dictionary': temp_dict['l dictionary'].__d_map(($) => {
                return {
                    'l location': $['l location'],
                    'l entry': {
                        'definition': null,
                        'resolver': $['l entry']
                    },
                }
            })
        }])
    }

    export const list = (
        type_resolver: d_target.Resolver_Value
    ): d_target.Resolver_Value => {
        return sh.state(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': pt.optionalx.not_set<d_target.Resolver_Value.l_state.list.result.O>(),
        }])
    }
    export const list_with_result = (
        type_resolver: d_target.Resolver_Value,
        result: d_target.Module_Reference,

    ): d_target.Resolver_Value => {
        return sh.state(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': pt.optionalx.set(result),
        }])
    }

    export const nothing = (): d_target.Resolver_Value => {
        return sh.state(['nothing', null])
    }

    export const optional = (
        type_resolver: d_target.Resolver_Value
    ): d_target.Resolver_Value => {
        return sh.state(['optional', {
            'constraints': sh.dictionary<d_target.Resolver_Option_Constraints.l_dictionary.D.l_entry>({}),
            'resolver': type_resolver,
        }])
    }

    export const optional_constrained = (
        constraints: pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Option_Constraints.l_dictionary.D.l_entry>,
        type_resolver: d_target.Resolver_Value
    ): d_target.Resolver_Value => {
        return sh.state(['optional', {
            'constraints': sh.dictionary(constraints),
            'resolver': type_resolver,
        }])
    }

    export const reference_derived = (
        value_selection: d_target.Resolver_Guaranteed_Value_Selection
    ): d_target.Resolver_Value => {
        return sh.state(['reference', {
            'definition': null,
            'type': sh.state(['derived', {
                'value': value_selection,
            }])
        }])
    }

    export const reference = (
        lookup_selection: d_target.Resolver_Lookup_Selection,
        constraints?: pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Value => {
        return sh.state(['reference', {
            'definition': null,
            'type': sh.state(['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': sh.dictionary(constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const reference_stack = (
        lookup_selection: d_target.Resolver_Lookup_Selection,
        constraints?: pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Value => {
        return sh.state(['reference', {
            'definition': null,
            'type': sh.state(['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': sh.dictionary(constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const state = (
        states: pt.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.state.options.l_dictionary.D.l_entry>
    ): d_target.Resolver_Value => {
        return sh.state(['state', {
            'definition': null,
            'options': sh.dictionary(states),
        }])
    }
}

export const resolver = (
    value_resolver: d_target.Resolver_Value
): d_target.Resolver_Modules.l_dictionary.D.l_entry => {
    return {
        'signature': null,
        'root value resolver': value_resolver,
    }
}