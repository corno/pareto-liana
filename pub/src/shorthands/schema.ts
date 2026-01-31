import * as _p from 'pareto-core-shorthands/dist/unresolved_data'
import * as _pi from 'pareto-core/dist/interface'

import * as sh from 'pareto-core-shorthands/dist/unresolved_data'

import * as d_schema from "../interface/generated/liana/schemas/schema/data/unresolved"

/**
 * schema tree
 */
export namespace st {

    export const set = (
        schemas: _p.Raw_Or_Normal_Dictionary<d_schema.Schema_Tree>,
    ): d_schema.Schema_Tree => {
        return sh.state(['set', sh.dictionary(schemas)])
    }

    export const schema = (
        schema: d_schema.Schema,
    ): d_schema.Schema_Tree => {
        return sh.state(['schema', schema])
    }

}

export const modules = (
    modules: _p.Raw_Or_Normal_Dictionary<d_schema.Modules.l_dictionary.D.l_entry>,
): d_schema.Modules => {
    return sh.dictionary(modules)
}

export const globals = (
    complexity: 'unconstrained' | 'constrained',
    text_types: _p.Raw_Or_Normal_Dictionary<d_schema.Globals.text_types.l_dictionary.D.l_entry>,
    number_types: _p.Raw_Or_Normal_Dictionary<d_schema.Globals.number_types.l_dictionary.D.l_entry>,
): d_schema.Globals => {
    return {
        'complexity': complexity === 'unconstrained'
            ? sh.state(['unconstrained', null])
            : sh.state(['constrained', null]),
        'text types': sh.dictionary(text_types),
        'number types': sh.dictionary(number_types),
    }
}

export const module_ = (type: d_schema.Value): d_schema.Modules.l_dictionary.D.l_entry => ({
    'root value': type,
})

export const text = (type: 'single line' | 'multi line'): d_schema.Text_Type => ({
    'type': type === 'single line' ? sh.state(['single line', null]) : sh.state(['multi line', null]),
})

export const prop = (
    node: d_schema.Value,
): d_schema.Group.l_dictionary.D.l_entry => ({
    'description': sh.optionalx.not_set(),
    'value': node,
})

export const toption = (
    node: d_schema.Value,
): d_schema.Value.l_state.state.options.l_dictionary.D.l_entry => ({
    'constraints': _p.optionalx.not_set(),
    'description': sh.optionalx.not_set(),
    'value': node,
})

export const toption_constrained = (
    constraints: _p.Raw_Or_Normal_Dictionary<d_schema.Option_Constraints.O.l_dictionary.D.l_entry>,
    node: d_schema.Value,
): d_schema.Value.l_state.state.options.l_dictionary.D.l_entry => ({
    'constraints': _p.optionalx.set(sh.dictionary(constraints)),
    'description': sh.optionalx.not_set(),
    'value': node,
})

export const toption_with_description = (
    description: string,
    node: d_schema.Value,
): d_schema.Value.l_state.state.options.l_dictionary.D.l_entry => ({
    'constraints': _p.optionalx.not_set(),
    'description': _p.optionalx.set(description),
    'value': node,
})

export const prop_with_description = (
    description: string,
    node: d_schema.Value,
): d_schema.Group.l_dictionary.D.l_entry => ({
    'description': _p.optionalx.set(description),
    'value': node,
})

/**
 * number type
 */
export namespace n {

    export const integer = (decimal_separator_offset: null | number): d_schema.Number_Type => ({
        'precision': sh.state<d_schema.Number_Type.precision.l_state>(['exact', {
            'decimal separator offset': _p.optionalx.literal<number>(decimal_separator_offset),
            'type': sh.state(['integer', null]),
        }])
    })

    export const approximation = (significant_digits: number): d_schema.Number_Type => ({
        'precision': sh.state<d_schema.Number_Type.precision.l_state>(['approximation', {
            'significant digits': significant_digits,
        }])
    })

    export const natural = (decimal_separator_offset: null | number): d_schema.Number_Type => ({
        'precision': sh.state<d_schema.Number_Type.precision.l_state>(['exact', {
            'decimal separator offset': _p.optionalx.literal<number>(decimal_separator_offset),
            'type': sh.state(['natural', null]),
        }])
    })

    export const positive_natural = (decimal_separator_offset: null | number): d_schema.Number_Type => ({
        'precision': sh.state<d_schema.Number_Type.precision.l_state>(['exact', {
            'decimal separator offset': _p.optionalx.literal<number>(decimal_separator_offset),
            'type': sh.state(['positive natural', null]),
        }])
    })

}

export const module_reference = (
    type: string,
): d_schema.Module_Reference => ({
    'location': sh.state(['internal', sh.reference(type)]),
    'resulting module': null,
})

export const value_reference = (
    type: string,
    tail: d_schema.Value_Path.tail.l_list.L.l_item[],

): d_schema.Value_Reference => {
    return {
        'module': {
            'location': sh.state(['internal', sh.reference(type)]),
            'resulting module': null,
        },
        'path': {

            'tail': sh.list(tail),

            'resulting node': null,
        }
    }
}

/**
 * type node
 */
export namespace t {

    export const boolean = (): d_schema.Value => {
        return sh.state(['boolean', null])
    }

    export const component = (type: string): d_schema.Value => {
        return sh.state(['component', {
            'type': sh.state(['internal', sh.reference(type)]),
            'constraints': sh.optionalx.not_set(),
        }])
    }

    export const component_constrained = (
        type: string,
        constraints: sh.Raw_Or_Normal_Dictionary<d_schema.Value_Constraints.O.l_dictionary.D.l_entry>,
    ): d_schema.Value => {
        return sh.state(['component', {
            'type': sh.state(['internal', sh.reference(type)]),
            'constraints': sh.optionalx.set(sh.dictionary(constraints)),
        }])
    }

    export const component_cyclic = (type: string): d_schema.Value => {
        return sh.state(['component', {
            'type': sh.state(['internal cyclic', sh.reference(type)]),
            'constraints': sh.optionalx.not_set(),
        }])
    }

    export const component_external = (imp: string, type: string): d_schema.Value => {
        return sh.state(['component', {
            'type': sh.state(['external', {
                'import': sh.reference(imp),
                'module': sh.reference(type),
            }]),
            'constraints': sh.optionalx.not_set(),
        }])
    }

    export const dictionary = (type: d_schema.Value): d_schema.Value => {
        return sh.state(['dictionary', {
            'value': type,
            'benchmark': sh.optionalx.not_set(),
        }])
    }

    export const group = (properties: _p.Raw_Or_Normal_Dictionary<d_schema.Group.l_dictionary.D.l_entry>): d_schema.Value => {
        return sh.state(['group', sh.dictionary(properties)])
    }

    export const list = (type: d_schema.Value): d_schema.Value => {
        return sh.state(['list', {
            'value': type,
            'result': sh.optionalx.not_set(),
        }])
    }

    export const path_to_sibling = (
        type: d_schema.Value,
        result: string,
    ): d_schema.Value => {
        return sh.state(['list', {
            'value': type,
            'result': _p.optionalx.set<d_schema.Module_Reference>({
                'location': sh.state(['internal', sh.reference(result)]),
                'resulting module': null,
            }),
        }])
    }

    export const nothing = (): d_schema.Value => {
        return sh.state(['nothing', null])
    }

    export const number_global = (name: string): d_schema.Value => {
        return sh.state(['number', sh.state(['global', sh.reference(name)])])
    }

    export const number_local = (bt: d_schema.Number_Type): d_schema.Value => {
        return sh.state(['number', sh.state(['local', bt])])
    }

    export const optional = (type: d_schema.Value): d_schema.Value => {
        return sh.state(['optional', type])
    }

    export const reference_derived = (
        type: string,
        tail: d_schema.Value_Path.tail.l_list.L.l_item[],
    ): d_schema.Value => {
        const x: d_schema.Value_Reference = {
            'module': {
                'location': sh.state(['internal', sh.reference(type)]),
                'resulting module': null,
            },
            'path': {
                'tail': sh.list(tail),
                'resulting node': null
            }
        }
        return sh.state(['reference', {
            'referent': x,
            'type': sh.state(['derived', null]),
        }])
    }

    export const reference_derived_external = (
        imp: string,
        type: string,
        tail: d_schema.Value_Path.tail.l_list.L.l_item[],

    ): d_schema.Value => {
        const x: d_schema.Value_Reference = {
            'module': {
                'location': sh.state(['external', {
                    'import': sh.reference(imp),
                    'module': sh.reference(type),
                }]),
                'resulting module': null,
            },
            'path': {
                'tail': sh.list(tail),
                'resulting node': null
            }
        }

        return sh.state(['reference', {
            'referent': x,
            'type': sh.state(['derived', null]),
        }])
    }

    export const reference = (
        type: string,
        tail: d_schema.Value_Path.tail.l_list.L.l_item[],
        dependency?: "cyclic" | "acyclic",
    ): d_schema.Value => {

        const p_type: d_schema.Value.l_state.reference.type_ = sh.state(['selected', {
            'referent': {
                'module': {
                    'location': sh.state(['internal', sh.reference(type)]),
                    'resulting node': null
                },
                'tail': sh.list(tail),
                'resulting node': null
            },
            'dictionary': null,
            'dependency': dependency === "cyclic" ? sh.state(['cyclic', null]) : sh.state(['acyclic', null])
        }])
        return sh.state(['reference', {
            'referent': {
                'module': {
                    'location': sh.state(['internal', sh.reference(type)]),
                    'resulting node': null,
                    'resulting module': null,
                },
                'path': {
                    'tail': sh.list(tail),
                    'resulting node': null
                }
            },
            'type': p_type,
        }])
    }

    export const reference_stack = (
        type: string,
        tail: d_schema.Value_Path.tail.l_list.L.l_item[],
    ): d_schema.Value => {

        const p_type: d_schema.Value.l_state.reference.type_ = sh.state(['selected', {
            'dictionary': null,
            'dependency': sh.state(['stack', null])
        }])
        return sh.state(['reference', {
            'referent': {
                'module': {
                    'location': sh.state(['internal', sh.reference(type)]),
                    'resulting node': null,
                    'resulting module': null,
                },
                'path': {
                    'tail': sh.list(tail),
                    'resulting node': null
                }
            },
            'type': p_type,
        }])
    }

    export const reference_external = (
        schema: string,

        type: string,
        tail: d_schema.Value_Path.tail.l_list.L.l_item[],
    ): d_schema.Value => {

        const p_type: d_schema.Value.l_state.reference.type_ = sh.state(['selected', {
            'dictionary': null,
            'dependency': sh.state(['acyclic', null]) // <-- external references cannot be cyclic, but this should not have to be specified here
        }])
        return sh.state(['reference', {
            'referent': {
                'module': {
                    'location': sh.state(['external', {
                        'import': sh.reference(schema),
                        'module': sh.reference(type),
                    }]),
                    'resulting node': null,
                    'resulting module': null,
                },
                'path': {
                    'tail': sh.list(tail),
                    'resulting node': null
                }
            },
            'type': p_type,
        }])
    }

    export const state = (
        options: _p.Raw_Or_Normal_Dictionary<d_schema.Value.l_state.state.options.l_dictionary.D.l_entry>
    ): d_schema.Value => {
        return sh.state(['state', {
            'options': sh.dictionary(options),
            'constraints': sh.optionalx.not_set(),
        }])
    }
    export const state_with_result = (
        options: _p.Raw_Or_Normal_Dictionary<d_schema.Value.l_state.state.options.l_dictionary.D.l_entry>,
        constraints: _p.Raw_Or_Normal_Dictionary<d_schema.Value_Constraints.O.l_dictionary.D.l_entry>,
    ): d_schema.Value => {
        return sh.state(['state', {
            'options': sh.dictionary(options),
            'constraints': sh.optionalx.set(sh.dictionary(constraints)),
        }])
    }

    export const text_global = (name: string): d_schema.Value => {
        return sh.state(['text', sh.state(['global', sh.reference(name)])])
    }
    
    export const text_local = (bt: d_schema.Text_Type): d_schema.Value => {
        return sh.state(['text', sh.state(['local', bt])])
    }

    // export const type_parameter = (name: string): unresolved.Value => {
    //     return _psh.wrap_state(['type parameter', _psh.wrap_reference(name)])
    // }
}

/**
 * Value Path tail step
 */
export namespace vp {

    export const d = (): d_schema.Value_Path.tail.l_list.L.l_item => {
        return sh.state(['dictionary', null])
    }
    export const g = (grp: string): d_schema.Value_Path.tail.l_list.L.l_item => {
        return sh.state(['group', sh.reference(grp)])
    }
    export const s = (state: string): d_schema.Value_Path.tail.l_list.L.l_item => {
        return sh.state(['state', sh.reference(state)])
    }
    export const o = (): d_schema.Value_Path.tail.l_list.L.l_item => {
        return sh.state(['optional', null])
    }
}



export const sig_params = (
    modules: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.modules.l_dictionary.D.l_entry>,
    lookups: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.lookups.l_dictionary.D.l_entry>,
): d_schema.Signature_Parameters => {
    return {
        'modules': sh.dictionary(modules),
        'lookups': sh.dictionary(lookups),
    }
}

/**
 * signature
 */
export namespace sig {

    export const local = (
        modules: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.modules.l_dictionary.D.l_entry>,
        lookups: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.lookups.l_dictionary.D.l_entry>,
    ): d_schema.Signatures.l_dictionary.D.l_entry => {
        return {
            'module': null,
            'parameters': sh.state(['local', {
                'modules': sh.dictionary(modules),
                'lookups': sh.dictionary(lookups),
            }]),
            'resolved parameters': null,
        }
    }

    export const same_as = (
        name: string
    ): d_schema.Signatures.l_dictionary.D.l_entry => {
        return {
            'module': null,
            'parameters': sh.state(['same as', sh.reference(name)]),
            'resolved parameters': null,
        }
    }
}

export const value_parameter = (
    name: string,
    presence?: 'optional' | 'required',
): d_schema.Signature_Parameters.modules.l_dictionary.D.l_entry => {
    return {
        'module': {
            'location': sh.state(['internal', sh.reference(name)]),
            'resulting module': null,
        },
        'presence': presence === 'optional'
            ? sh.state(['optional', null])
            : sh.state(['required', null]),
    }
}

export const value_parameter_external = (
    imp: string,
    type: string,
    presence?: 'optional' | 'required',
): d_schema.Signature_Parameters.modules.l_dictionary.D.l_entry => {
    return {
        'module': {
            'location': sh.state(['external', {
                'import': sh.reference(imp),
                'module': sh.reference(type),
            }]),
            'resulting module': null,
        },
        'presence': presence === 'optional'
            ? sh.state(['optional', null])
            : sh.state(['required', null]),
    }
}

export const lookup_parameter = (
    name: string,
    type?: 'acyclic' | 'cyclic' | 'stack',
    presence?: 'optional' | 'required',
): d_schema.Signature_Parameters.lookups.l_dictionary.D.l_entry => {
    return {
        'referent': {
            'location': sh.state(['internal', sh.reference(name)]),
            'resulting module': null,
        },
        'dictionary': null,
        'type': type === 'cyclic'
            ? sh.state(['cyclic', null])
            : type === 'stack'
                ? sh.state(['stack', null])
                : sh.state(['acyclic', null]),
        'presence': presence === 'optional'
            ? sh.state(['optional', null])
            : sh.state(['required', null]),
    }
}

/**
 * lookup selection
 */
export namespace ls {

    export const parameter = (parameter: string): d_schema.Lookup_Selection => {
        return {
            'type': sh.state(['parameter', sh.reference(parameter)]),
            'resulting dictionary': null
        }
    }
    export const not_circular_dependent_siblings = (): d_schema.Lookup_Selection => {
        return {
            'type': sh.state(['not circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }
    export const possibly_circular_dependent_siblings = (): d_schema.Lookup_Selection => {
        return {
            'type': sh.state(['possibly circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }

}

/**
 * node resolver lookup arguments
 */
export namespace al {


    export const not_set = (

    ): d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
        return sh.state(['not set', null])
    }

    export const empty_stack = (

    ): d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
        return sh.state(['empty stack', null])
    }

    /**
     * creates a new stack of lookup selections from an existing stack and a new element
     */
    export const stack = (
        stack: d_schema.Lookup_Selection,
        element: d_schema.Lookup_Selection,
    ): d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
        return sh.state(['stack', {
            'stack': stack,
            'element': element,
        }])
    }

    /**
     * provides a dictionary by selecting a value (that is guaranteed to be a dictionary)
     */
    export const dictionary = (value_selection: d_schema.Guaranteed_Value_Selection): d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
        return sh.state(['selection', {
            'type': sh.state(['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }])
    }

    /**
     * selects a lookup parameter of this resolver and passes it to the next resolver
     */
    export const parameter = (parameter: string): d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
        return sh.state(['selection', {
            'type': sh.state(['parameter', sh.reference(parameter)]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of an ordered dictionary
     */
    export const not_circular_dependent_siblings = (): d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
        return sh.state(['selection', {
            'type': sh.state(['not circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of a dictionary (ordered or not)
     */
    export const possibly_circular_dependent_siblings = (): d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
        return sh.state(['selection', {
            'type': sh.state(['possibly circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

}

/**
 * value selection path step
 */
export namespace rvs {

    export const component = (
    ): d_schema.Relative_Value_Selection.path.l_list.L.l_item => {
        return sh.state(['component', null])
    }

    export const group = (
        property: string,
    ): d_schema.Relative_Value_Selection.path.l_list.L.l_item => {
        return sh.state(['group', sh.reference(property)])
    }

    export const reference = (
    ): d_schema.Relative_Value_Selection.path.l_list.L.l_item => {
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

    ): d_schema.Optional_Value_Initialization => {
        return sh.state(['not set', null])
    }

    export const set = (
        value: d_schema.Guaranteed_Value_Selection,
    ): d_schema.Optional_Value_Initialization => {
        return sh.state(['set', value])
    }

    export const selection = (
        selection: d_schema.Possible_Value_Selection,
    ): d_schema.Optional_Value_Initialization => {
        return sh.state(['selection', selection])
    }

}

/**
 * possible value selection
 */
export namespace pvs {
    export const state = (
        state: string,
        result: d_schema.Module_Reference,
    ): d_schema.Possible_Value_Selection => {
        return sh.state<d_schema.Possible_Value_Selection.l_state>(['result', sh.state<d_schema.Possible_Value_Selection.l_state.result.l_state>(['state', {
            'property': sh.reference(state),
            'state': null,
            'result': result,
        }])])
    }

    export const optional_value = (
        optional_value: string,
        result: d_schema.Module_Reference,
    ): d_schema.Possible_Value_Selection => {
        return sh.state<d_schema.Possible_Value_Selection.l_state>(['result', sh.state<d_schema.Possible_Value_Selection.l_state.result.l_state>(['optional value', {
            'property': sh.reference(optional_value),
            'optional value': null,
            'result': result,
        }])])
    }

    export const parameter = (
        parameter: string,
    ): d_schema.Possible_Value_Selection => {
        return sh.state(['parameter', sh.reference(parameter)])
    }

}

/**
 * guaranteed value selection
 */
export namespace gvs {

    export const dictionary = (value_selection: d_schema.Guaranteed_Value_Selection): d_schema.Lookup_Selection => {
        return {
            'type': sh.state(['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }
    }
    export const component = (
        component: string,
        constraint: string,
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': sh.state(['constraint', sh.state<d_schema.Guaranteed_Value_Selection.start.l_state.constraint.l_state>(['component', {
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
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': sh.state(['constraint', sh.state<d_schema.Guaranteed_Value_Selection.start.l_state.constraint.l_state>(['reference', {
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
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': sh.state<d_schema.Guaranteed_Value_Selection.start.l_state>(['result', sh.state<d_schema.Guaranteed_Value_Selection.start.l_state.result.l_state>(['list', {
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
        result: d_schema.Module_Reference,
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': sh.state<d_schema.Possible_Value_Selection.l_state>(['result', sh.state<d_schema.Possible_Value_Selection.l_state.result.l_state>(['state', {
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
        result: d_schema.Module_Reference,
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': sh.state<d_schema.Possible_Value_Selection.l_state>(['result', sh.state<d_schema.Possible_Value_Selection.l_state.result.l_state>(['optional value', {
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
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': sh.state<d_schema.Possible_Value_Selection.l_state>(['parameter', sh.reference(parameter)]),
            'tail': {
                'path': sh.list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list_cursor = (
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
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
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
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
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
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
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
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
        tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
    ): d_schema.Guaranteed_Value_Selection => {
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
    ): d_schema.Value_Resolver.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry => {
        return sh.state(['parameter', sh.reference(parameter)])
    }

    export const required = (
        value: d_schema.Guaranteed_Value_Selection,
    ): d_schema.Value_Resolver.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry => {
        return sh.state(['required', value])
    }

    export const optional = (
        value: d_schema.Optional_Value_Initialization,
    ): d_schema.Value_Resolver.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry => {
        return sh.state(['optional', value])
    }

}

export const option = (
    resolver: d_schema.Value_Resolver,
): d_schema.Value_Resolver.l_state.state.states.l_dictionary.D.l_entry => {
    return {
        'constraints': sh.dictionary({}),
        'resolver': resolver,
    }
}

export const option_constrained = (
    constraints: _p.Raw_Or_Normal_Dictionary<d_schema.Option_Constraint_Resolvers.l_dictionary.D.l_entry>,
    resolver: d_schema.Value_Resolver,
): d_schema.Value_Resolver.l_state.state.states.l_dictionary.D.l_entry => {
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
        value_selection: d_schema.Guaranteed_Value_Selection,
        state: string,
    ): d_schema.Option_Constraint_Resolvers.l_dictionary.D.l_entry => {
        return sh.state(['state', {
            'selection': value_selection,
            'selected state': null,
            'option': sh.reference(state),
        }])
    }

    export const assert_set = (
        possibly_optional: d_schema.Possible_Value_Selection,
    ): d_schema.Option_Constraint_Resolvers.l_dictionary.D.l_entry => {
        return sh.state(['assert is set', possibly_optional])
    }

}

/**
 * property constraint
 */
export namespace pc {

    export const property = (
        value_selection_tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
        state: string,
    ): d_schema.Value_Constraint_Resolvers.l_dictionary.D.l_entry => {
        return {
            'start': sh.state(['property', null]),
            'constraint': {
                'selection': {
                    'path': sh.list(value_selection_tail),
                    'resulting node': null,
                },
                'type': sh.state(['state', {
                    'selected state': null,
                    'option': sh.reference(state),
                }])
            },
        }
    }

    export const constraint = (
        constraint: string,
        value_selection_tail: d_schema.Relative_Value_Selection.path.l_list.L.l_item[],
        state?: string,
    ): d_schema.Value_Constraint_Resolvers.l_dictionary.D.l_entry => {
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

    export const text = (): d_schema.Value_Resolver => {
        return sh.state(['text', null])
    }

    export const boolean = (): d_schema.Value_Resolver => {
        return sh.state(['boolean', null])
    }

    export const number = (): d_schema.Value_Resolver => {
        return sh.state(['number', null])
    }
    export const component = (
        type: string,
        modules: null | _p.Raw_Or_Normal_Dictionary<d_schema.Value_Resolver.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry>,
    ): d_schema.Value_Resolver => {
        return sh.state(['component', {
            'definition': null,
            'location': sh.state(['internal', sh.reference(type)]),
            'signature': null,
            'arguments': _p.optionalx.set({
                'modules': modules === null ? sh.optionalx.not_set() : _p.optionalx.set(sh.dictionary(modules)),
                'lookups': lookups === null ? sh.optionalx.not_set() : _p.optionalx.set(sh.dictionary(lookups)),
            }),
            'constraints': sh.dictionary<d_schema.Value_Constraint_Resolvers.l_dictionary.D.l_entry>({}),
        }])
    }
    export const component_constrained = (
        type: string,
        modules: null | _p.Raw_Or_Normal_Dictionary<d_schema.Value_Resolver.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry>,
        constraints: _p.Raw_Or_Normal_Dictionary<d_schema.Value_Constraint_Resolvers.l_dictionary.D.l_entry>,
    ): d_schema.Value_Resolver => {
        return sh.state(['component', {
            'definition': null,
            'location': sh.state(['internal', sh.reference(type)]),
            'signature': null,
            'arguments': _p.optionalx.set({
                'modules': modules === null ? sh.optionalx.not_set() : _p.optionalx.set(sh.dictionary(modules)),
                'lookups': lookups === null ? sh.optionalx.not_set() : _p.optionalx.set(sh.dictionary(lookups)),
            }),
            'constraints': sh.dictionary(constraints),
        }])
    }
    export const component_external = (
        imp: string,
        type: string,
        modules: null | _p.Raw_Or_Normal_Dictionary<d_schema.Value_Resolver.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_schema.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry>,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Value_Constraint_Resolvers.l_dictionary.D.l_entry>,
    ): d_schema.Value_Resolver => {
        return sh.state(['component', {
            'definition': null,
            'location': sh.state(['external', {
                'import': sh.reference(imp),
                'signature': sh.reference(type),
            }]),
            'signature': null,
            'arguments': _p.optionalx.set({
                'modules': modules === null ? sh.optionalx.not_set() : _p.optionalx.set(sh.dictionary(modules)),
                'lookups': lookups === null ? sh.optionalx.not_set() : _p.optionalx.set(sh.dictionary(lookups)),
            }),
            'constraints': sh.dictionary(constraints === undefined ? {} : constraints),
        }])
    }

    export const dictionary = (resolver: d_schema.Value_Resolver): d_schema.Value_Resolver => {
        return sh.state(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': sh.optionalx.not_set(),
        }])
    }

    export const dictionary_linked = (
        dense: 'dense' | 'sparse',
        selection: d_schema.Guaranteed_Value_Selection,
        resolver: d_schema.Value_Resolver,
    ): d_schema.Value_Resolver => {
        return sh.state(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': _p.optionalx.set({
                'selection': selection,
                'resulting dictionary': null,
                'dense': dense === 'dense',
            }),
        }])
    }

    export const group = (
        properties: _p.Raw_Or_Normal_Dictionary<d_schema.Value_Resolver_Group.l_dictionary.D.l_entry.resolver> //FIXME: remove the 'this entry' step
    ): d_schema.Value_Resolver => {
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
        type_resolver: d_schema.Value_Resolver
    ): d_schema.Value_Resolver => {
        return sh.state(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': _p.optionalx.not_set<d_schema.Value_Resolver.l_state.list.result.O>(),
        }])
    }
    export const list_with_result = (
        type_resolver: d_schema.Value_Resolver,
        result: d_schema.Module_Reference,

    ): d_schema.Value_Resolver => {
        return sh.state(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': _p.optionalx.set(result),
        }])
    }

    export const nothing = (): d_schema.Value_Resolver => {
        return sh.state(['nothing', null])
    }

    export const optional = (
        type_resolver: d_schema.Value_Resolver
    ): d_schema.Value_Resolver => {
        return sh.state(['optional', {
            'constraints': sh.dictionary<d_schema.Option_Constraint_Resolvers.l_dictionary.D.l_entry>({}),
            'resolver': type_resolver,
        }])
    }

    export const optional_constrained = (
        constraints: _p.Raw_Or_Normal_Dictionary<d_schema.Option_Constraint_Resolvers.l_dictionary.D.l_entry>,
        type_resolver: d_schema.Value_Resolver
    ): d_schema.Value_Resolver => {
        return sh.state(['optional', {
            'constraints': sh.dictionary(constraints),
            'resolver': type_resolver,
        }])
    }

    export const reference_derived = (
        value_selection: d_schema.Guaranteed_Value_Selection
    ): d_schema.Value_Resolver => {
        return sh.state(['reference', {
            'definition': null,
            'type': sh.state(['derived', {
                'value': value_selection,
            }])
        }])
    }

    export const reference = (
        lookup_selection: d_schema.Lookup_Selection,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Value_Constraint_Resolvers.l_dictionary.D.l_entry>,
    ): d_schema.Value_Resolver => {
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
        lookup_selection: d_schema.Lookup_Selection,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Value_Constraint_Resolvers.l_dictionary.D.l_entry>,
    ): d_schema.Value_Resolver => {
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
        states: _p.Raw_Or_Normal_Dictionary<d_schema.Value_Resolver.l_state.state.states.l_dictionary.D.l_entry>
    ): d_schema.Value_Resolver => {
        return sh.state(['state', {
            'definition': null,
            'states': sh.dictionary(states),
        }])
    }
}

export const resolver = (
    value_resolver: d_schema.Value_Resolver
): d_schema.Module_Resolvers.l_dictionary.D.l_entry => {
    return {
        'signature': null,
        'root value resolver': value_resolver,
    }
}

export const signatures = (
    signatures: _p.Raw_Or_Normal_Dictionary<d_schema.Signatures.l_dictionary.D.l_entry>,
): d_schema.Resolve_Logic.signatures => {
    return {
        'signatures': sh.dictionary(signatures)
    }
}


export const resolvers = (
    resolvers: _p.Raw_Or_Normal_Dictionary<d_schema.Module_Resolvers.l_dictionary.D.l_entry>,
): d_schema.Module_Resolvers => {
    return sh.dictionary(resolvers)
}
export const import_ = (
    name: string,
): d_schema.Imports.l_dictionary.D.l_entry => {
    return {
        'schema set child': sh.reference(name),
        'schema': null,
    }
}

export const constrained = (
    signatures: d_schema.Resolve_Logic.signatures,
    resolvers: d_schema.Module_Resolvers,
): d_schema.Schema.complexity.l_state.constrained => {
    return {
        'signatures': signatures,
        'resolvers': resolvers,
    }
}

export const unconstrained = (
): d_schema.Schema.complexity.l_state.unconstrained => {
    return null
}
export const schema_ = (
    imports: _p.Raw_Or_Normal_Dictionary<d_schema.Imports.l_dictionary.D.l_entry>,
    globals: d_schema.Globals,
    modules: d_schema.Modules,
    resolve: null | d_schema.Schema.complexity.l_state.constrained,
): d_schema.Schemas.l_dictionary.D.l_entry => {
    return sh.state(['schema', {
        'imports': sh.dictionary(imports),
        'globals': globals,
        'modules': modules,
        'complexity': resolve === null
            ? sh.state(['unconstrained', null])
            : sh.state(['constrained', resolve])
    }])
}