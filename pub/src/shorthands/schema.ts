import * as _p from 'pareto-core-shorthands/dist/unresolved_data'
import * as _pi from 'pareto-core/dist/interface'

import * as sh from 'pareto-core-shorthands/dist/unresolved_data'

import * as d_target from "../interface/generated/liana/schemas/schema/data/unresolved"

export const package_ = (
    schema_tree: d_target.Schema_Tree,
    omit_de_serializer: boolean,
): d_target.Package => ({
    'omit (de)serializer': omit_de_serializer,
    'schema tree': schema_tree,
})


/**
 * schema tree
 */
export namespace st {

    export const set = (
        schemas: _p.Raw_Or_Normal_Dictionary<d_target.Schema_Tree>,
    ): d_target.Schema_Tree => {
        return sh.state(['set', sh.dictionary(schemas)])
    }

    export const schema = (
        schema: d_target.Schema,
    ): d_target.Schema_Tree => {
        return sh.state(['schema', schema])
    }

}

export const modules = (
    modules: _p.Raw_Or_Normal_Dictionary<d_target.Modules.l_dictionary.D.l_entry>,
): d_target.Modules => {
    return sh.dictionary(modules)
}

export const globals = (
    complexity: 'unconstrained' | 'constrained',
    text_types: _p.Raw_Or_Normal_Dictionary<d_target.Globals.text_types.l_dictionary.D.l_entry>,
    number_types: _p.Raw_Or_Normal_Dictionary<d_target.Globals.number_types.l_dictionary.D.l_entry>,
): d_target.Globals => {
    return {
        'complexity': complexity === 'unconstrained'
            ? sh.state(['unconstrained', null])
            : sh.state(['constrained', null]),
        'text types': sh.dictionary(text_types),
        'number types': sh.dictionary(number_types),
    }
}

export const module_ = (type: d_target.Value): d_target.Modules.l_dictionary.D.l_entry => ({
    'root value': type,
})

export const text = (type: 'single line' | 'multi line'): d_target.Text_Type => ({
    'type': type === 'single line' ? sh.state(['single line', null]) : sh.state(['multi line', null]),
})

export const prop = (
    node: d_target.Value,
): d_target.Group.l_dictionary.D.l_entry => ({
    'description': sh.optionalx.not_set(),
    'value': node,
})

export const toption = (
    node: d_target.Value,
): d_target.Value.l_state.state.options.l_dictionary.D.l_entry => ({
    'constraints': _p.optionalx.not_set(),
    'description': sh.optionalx.not_set(),
    'value': node,
})

export const toption_constrained = (
    constraints: _p.Raw_Or_Normal_Dictionary<d_target.Option_Constraints.O.l_dictionary.D.l_entry>,
    node: d_target.Value,
): d_target.Value.l_state.state.options.l_dictionary.D.l_entry => ({
    'constraints': _p.optionalx.set(sh.dictionary(constraints)),
    'description': sh.optionalx.not_set(),
    'value': node,
})

export const toption_with_description = (
    description: string,
    node: d_target.Value,
): d_target.Value.l_state.state.options.l_dictionary.D.l_entry => ({
    'constraints': _p.optionalx.not_set(),
    'description': _p.optionalx.set(description),
    'value': node,
})

export const prop_with_description = (
    description: string,
    node: d_target.Value,
): d_target.Group.l_dictionary.D.l_entry => ({
    'description': _p.optionalx.set(description),
    'value': node,
})

/**
 * number type
 */
export namespace n {

    export const integer = (decimal_separator_offset: null | number): d_target.Number_Type => ({
        'precision': sh.state<d_target.Number_Type.precision.l_state>(['exact', {
            'decimal separator offset': _p.optionalx.literal<number>(decimal_separator_offset),
            'type': sh.state(['integer', null]),
        }])
    })

    export const approximation = (significant_digits: number): d_target.Number_Type => ({
        'precision': sh.state<d_target.Number_Type.precision.l_state>(['approximation', {
            'significant digits': significant_digits,
        }])
    })

    export const natural = (decimal_separator_offset: null | number): d_target.Number_Type => ({
        'precision': sh.state<d_target.Number_Type.precision.l_state>(['exact', {
            'decimal separator offset': _p.optionalx.literal<number>(decimal_separator_offset),
            'type': sh.state(['natural', null]),
        }])
    })

    export const positive_natural = (decimal_separator_offset: null | number): d_target.Number_Type => ({
        'precision': sh.state<d_target.Number_Type.precision.l_state>(['exact', {
            'decimal separator offset': _p.optionalx.literal<number>(decimal_separator_offset),
            'type': sh.state(['positive natural', null]),
        }])
    })

}

export const module_reference = (
    type: string,
): d_target.Module_Reference => ({
    'location': sh.state(['internal', sh.reference(type)]),
    'resulting module': null,
})

export const value_reference = (
    type: string,
    tail: d_target.Value_Path.tail.l_list.L.l_item[],

): d_target.Value_Reference => {
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

    export const boolean = (): d_target.Value => {
        return sh.state(['boolean', null])
    }

    export const component_acyclic = (type: string): d_target.Value => {
        return sh.state(['component', {
            'type': sh.state(['internal acyclic', sh.reference(type)]),
            'results': sh.optionalx.not_set(),
        }])
    }

    export const component_with_results = (
        type: string,
        results: sh.Raw_Or_Normal_Dictionary<d_target.Value_Results.O.l_dictionary.D.l_entry>,
    ): d_target.Value => {
        return sh.state(['component', {
            'type': sh.state(['internal', sh.reference(type)]),
            'results': sh.optionalx.set(sh.dictionary(results)),
        }])
    }

    export const component = (type: string): d_target.Value => {
        return sh.state(['component', {
            'type': sh.state(['internal', sh.reference(type)]),
            'results': sh.optionalx.not_set(),
        }])
    }

    export const component_external = (imp: string, type: string): d_target.Value => {
        return sh.state(['component', {
            'type': sh.state(['external', {
                'import': sh.reference(imp),
                'module': sh.reference(type),
            }]),
            'results': sh.optionalx.not_set(),
        }])
    }

    export const dictionary = (type: d_target.Value): d_target.Value => {
        return sh.state(['dictionary', {
            'value': type,
            'benchmark': sh.optionalx.not_set(),
        }])
    }

    export const group = (properties: _p.Raw_Or_Normal_Dictionary<d_target.Group.l_dictionary.D.l_entry>): d_target.Value => {
        return sh.state(['group', sh.dictionary(properties)])
    }

    export const list = (type: d_target.Value): d_target.Value => {
        return sh.state(['list', {
            'value': type,
            'results': sh.optionalx.not_set(),
        }])
    }

    export const list_with_results = (
        type: d_target.Value,
        results: sh.Raw_Or_Normal_Dictionary<d_target.Value_Results.O.l_dictionary.D.l_entry>,
    ): d_target.Value => {
        return sh.state(['list', {
            'value': type,
            'results': sh.optionalx.set(sh.dictionary(results)),
        }])
    }

    export const nothing = (): d_target.Value => {
        return sh.state(['nothing', null])
    }

    export const number_global = (name: string): d_target.Value => {
        return sh.state(['number', sh.state(['global', sh.reference(name)])])
    }

    export const number_local = (bt: d_target.Number_Type): d_target.Value => {
        return sh.state(['number', sh.state(['local', bt])])
    }

    export const optional = (type: d_target.Value): d_target.Value => {
        return sh.state(['optional', type])
    }

    export const reference_derived = (
        type: string,
        tail: d_target.Value_Path.tail.l_list.L.l_item[],
    ): d_target.Value => {
        const x: d_target.Value_Reference = {
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
        tail: d_target.Value_Path.tail.l_list.L.l_item[],

    ): d_target.Value => {
        const x: d_target.Value_Reference = {
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
        tail: d_target.Value_Path.tail.l_list.L.l_item[],
        dependency?: "cyclic" | "acyclic",
        results?: _p.Raw_Or_Normal_Dictionary<d_target.Value_Results.O.l_dictionary.D.l_entry>,
    ): d_target.Value => {

        const p_type: d_target.Value.l_state.reference.type_ = sh.state(['selected', {
            'referent': {
                'module': {
                    'location': sh.state(['internal', sh.reference(type)]),
                    'resulting node': null
                },
                'tail': sh.list(tail),
                'resulting node': null
            },
            'dictionary': null,
            'dependency': dependency === "cyclic" ? sh.state(['cyclic', null]) : sh.state(['acyclic', null]),
            'results': results ? sh.optionalx.set(sh.dictionary(results)) : sh.optionalx.not_set(),
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
        tail: d_target.Value_Path.tail.l_list.L.l_item[],
        results?: _p.Raw_Or_Normal_Dictionary<d_target.Value_Results.O.l_dictionary.D.l_entry>,
    ): d_target.Value => {

        const p_type: d_target.Value.l_state.reference.type_ = sh.state(['selected', {
            'dictionary': null,
            'dependency': sh.state(['stack', null]),
            'results': results ? sh.optionalx.set(sh.dictionary(results)) : sh.optionalx.not_set(),
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
        tail: d_target.Value_Path.tail.l_list.L.l_item[],
    ): d_target.Value => {

        const p_type: d_target.Value.l_state.reference.type_ = sh.state(['selected', {
            'dictionary': null,
            'dependency': sh.state(['acyclic', null]), // <-- external references cannot be cyclic, but this should not have to be specified here
            'results': sh.optionalx.not_set(),
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
        options: _p.Raw_Or_Normal_Dictionary<d_target.Value.l_state.state.options.l_dictionary.D.l_entry>
    ): d_target.Value => {
        return sh.state(['state', {
            'options': sh.dictionary(options),
            'results': sh.optionalx.not_set(),
        }])
    }
    export const state_with_result = (
        options: _p.Raw_Or_Normal_Dictionary<d_target.Value.l_state.state.options.l_dictionary.D.l_entry>,
        results: _p.Raw_Or_Normal_Dictionary<d_target.Value_Results.O.l_dictionary.D.l_entry>,
    ): d_target.Value => {
        return sh.state(['state', {
            'options': sh.dictionary(options),
            'results': sh.optionalx.set(sh.dictionary(results)),
        }])
    }

    export const text_global = (name: string): d_target.Value => {
        return sh.state(['text', sh.state(['global', sh.reference(name)])])
    }

    export const text_local = (bt: d_target.Text_Type): d_target.Value => {
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

    export const d = (): d_target.Value_Path.tail.l_list.L.l_item => {
        return sh.state(['dictionary', null])
    }
    export const g = (grp: string): d_target.Value_Path.tail.l_list.L.l_item => {
        return sh.state(['group', sh.reference(grp)])
    }
    export const s = (state: string): d_target.Value_Path.tail.l_list.L.l_item => {
        return sh.state(['state', sh.reference(state)])
    }
    export const o = (): d_target.Value_Path.tail.l_list.L.l_item => {
        return sh.state(['optional', null])
    }
}



export const sig_params = (
    modules: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Signature_Parameters.modules.l_dictionary.D.l_entry>,
    lookups: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry>,
): d_target.Resolver_Signature_Parameters => {
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
        modules: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Signature_Parameters.modules.l_dictionary.D.l_entry>,
        lookups: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Signatures.l_dictionary.D.l_entry => {
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
    ): d_target.Resolver_Signatures.l_dictionary.D.l_entry => {
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
): d_target.Resolver_Signature_Parameters.modules.l_dictionary.D.l_entry => {
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
): d_target.Resolver_Signature_Parameters.modules.l_dictionary.D.l_entry => {
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
): d_target.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry => {
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
): d_target.Resolver_Value.l_state.state.states.l_dictionary.D.l_entry => {
    return {
        'constraints': sh.dictionary({}),
        'resolver': resolver,
    }
}

export const option_constrained = (
    constraints: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Option_Constraints.l_dictionary.D.l_entry>,
    resolver: d_target.Resolver_Value,
): d_target.Resolver_Value.l_state.state.states.l_dictionary.D.l_entry => {
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

    export const boolean = (): d_target.Resolver_Value => {
        return sh.state(['boolean', null])
    }

    export const number = (): d_target.Resolver_Value => {
        return sh.state(['number', null])
    }
    export const component = (
        type: string,
        modules: null | _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Value => {
        return sh.state(['component', {
            'definition': null,
            'location': sh.state(['internal', sh.reference(type)]),
            'signature': null,
            'arguments': _p.optionalx.set({
                'modules': modules === null ? sh.optionalx.not_set() : _p.optionalx.set(sh.dictionary(modules)),
                'lookups': lookups === null ? sh.optionalx.not_set() : _p.optionalx.set(sh.dictionary(lookups)),
            }),
            'constraints': sh.dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>({}),
        }])
    }
    export const component_constrained = (
        type: string,
        modules: null | _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry>,
        constraints: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Value => {
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
        modules: null | _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry>,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>,
    ): d_target.Resolver_Value => {
        return sh.state(['component', {
            'definition': null,
            'location': sh.state(['external', {
                'resolver import': sh.reference(imp),
                'schema import': sh.reference(imp),
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
            'benchmark': _p.optionalx.set({
                'selection': selection,
                'resulting dictionary': null,
                'dense': dense === 'dense',
            }),
        }])
    }

    export const group = (
        properties: _p.Raw_Or_Normal_Dictionary<d_target.Value_Resolver_Group.l_dictionary.D.l_entry.resolver> //FIXME: remove the 'this entry' step
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
            'result': _p.optionalx.not_set<d_target.Resolver_Value.l_state.list.result.O>(),
        }])
    }
    export const list_with_result = (
        type_resolver: d_target.Resolver_Value,
        result: d_target.Module_Reference,

    ): d_target.Resolver_Value => {
        return sh.state(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': _p.optionalx.set(result),
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
        constraints: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Option_Constraints.l_dictionary.D.l_entry>,
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
        constraints?: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>,
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
        constraints?: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value_Constraints.l_dictionary.D.l_entry>,
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
        states: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Value.l_state.state.states.l_dictionary.D.l_entry>
    ): d_target.Resolver_Value => {
        return sh.state(['state', {
            'definition': null,
            'states': sh.dictionary(states),
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

export const signatures = (
    signatures: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Signatures.l_dictionary.D.l_entry>,
): d_target.Resolver.signatures => {
    return {
        'signatures': sh.dictionary(signatures)
    }
}


export const resolver_modules = (
    resolvers: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Modules.l_dictionary.D.l_entry>,
): d_target.Resolver_Modules => {
    return sh.dictionary(resolvers)
}
export const schema_import_ = (
    name: string,
): d_target.Schema_Imports.l_dictionary.D.l_entry => {
    return {
        'schema set child': sh.reference(name),
        'schema': null,
    }
}
export const resolver_import_ = (
    name: string,
): d_target.Resolver_Imports.l_dictionary.D.l_entry => {
    return {
        'schema set child': sh.reference(name),
        'resolver': null,
    }
}

export const constrained = (
    signatures: d_target.Resolver.signatures,
    resolvers: d_target.Resolver_Modules,
): d_target.Schema.complexity.l_state.constrained => {
    return {
        'signatures': signatures,
        'modules': resolvers,
    }
}

export const unconstrained = (
): d_target.Schema.complexity.l_state.unconstrained => {
    return null
}
export const schema_ = (
    schema_imports: _p.Raw_Or_Normal_Dictionary<d_target.Schema_Imports.l_dictionary.D.l_entry>,
    resolver_imports: _p.Raw_Or_Normal_Dictionary<d_target.Resolver_Imports.l_dictionary.D.l_entry>,
    globals: d_target.Globals,
    modules: d_target.Modules,
    resolve: null | d_target.Schema.complexity.l_state.constrained,
): d_target.Schemas.l_dictionary.D.l_entry => {
    return sh.state(['schema', {
        'schema imports': sh.dictionary(schema_imports),
        'resolver imports': sh.dictionary(resolver_imports),
        'globals': globals,
        'modules': modules,
        'complexity': resolve === null
            ? sh.state(['unconstrained', null])
            : sh.state(['constrained', resolve])
    }])
}