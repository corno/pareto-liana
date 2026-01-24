import * as _p from 'pareto-core-shorthands/dist/unresolved_data'
import * as _pi from 'pareto-core/dist/interface'


import * as d_schema from "../interface/generated/liana/schemas/schema/data/unresolved"

/**
 * schema tree
 */
export namespace st {

    export const set = (
        schemas: _p.Raw_Or_Normal_Dictionary<d_schema.Schema_Tree>,
    ): d_schema.Schema_Tree => {
        return _p.wrap_state(['set', _p.wrap_dictionary(schemas)])
    }

    export const schema = (
        schema: d_schema.Schema,
    ): d_schema.Schema_Tree => {
        return _p.wrap_state(['schema', schema])
    }

}

export const types = (
    types: _p.Raw_Or_Normal_Dictionary<d_schema.Types.dictionary.D.entry>,
): d_schema.Types => {
    return _p.wrap_dictionary(types)
}

export const globals = (
    complexity: 'unconstrained' | 'constrained',
    text_types: _p.Raw_Or_Normal_Dictionary<d_schema.Globals.text_types.dictionary.D.entry>,
    number_types: _p.Raw_Or_Normal_Dictionary<d_schema.Globals.number_types.dictionary.D.entry>,
): d_schema.Globals => {
    return {
        'complexity': complexity === 'unconstrained'
            ? _p.wrap_state(['unconstrained', null])
            : _p.wrap_state(['constrained', null]),
        'text types': _p.wrap_dictionary(text_types),
        'number types': _p.wrap_dictionary(number_types),
    }
}

export const type = (type: d_schema.Type_Node): d_schema.Types.dictionary.D.entry => ({
    'node': type,
})

export const text = (type: 'single line' | 'multi line'): d_schema.Text_Type => ({
    'type': type === 'single line' ? _p.wrap_state(['single line', null]) : _p.wrap_state(['multi line', null]),
})

export const prop = (
    node: d_schema.Type_Node,
): d_schema.Group.dictionary.D.entry => ({
    'description': _p.optional.not_set(),
    'node': node,
})

export const tstate = (
    node: d_schema.Type_Node,
): d_schema.Type_Node.state.state.dictionary.D.entry => ({
    'description': _p.optional.not_set(),
    'node': node,
})

export const tstated = (
    description: string,
    node: d_schema.Type_Node,
): d_schema.Type_Node.state.state.dictionary.D.entry => ({
    'description': _p.optional.set(description),
    'node': node,
})

export const propd = (
    description: string,
    node: d_schema.Type_Node,
): d_schema.Group.dictionary.D.entry => ({
    'description': _p.optional.set(description),
    'node': node,
})

/**
 * number type
 */
export namespace n {

    export const integer = (decimal_separator_offset?: number): d_schema.Number_Type => ({
        'precision': _p.wrap_state<d_schema.Number_Type.precision.state>(['exact', {
            'decimal separator offset': decimal_separator_offset === undefined ? _p.optional.not_set<number>() : _p.optional.set<number>(decimal_separator_offset),
            'type': _p.wrap_state(['integer', null]),
        }])
    })

    export const approximation = (significant_digits: number): d_schema.Number_Type => ({
        'precision': _p.wrap_state<d_schema.Number_Type.precision.state>(['approximation', {
            'significant digits': significant_digits,
        }])
    })

    export const natural = (decimal_separator_offset?: number): d_schema.Number_Type => ({
        'precision': _p.wrap_state<d_schema.Number_Type.precision.state>(['exact', {
            'decimal separator offset': decimal_separator_offset === undefined ? _p.optional.not_set() : _p.optional.set(decimal_separator_offset),
            'type': _p.wrap_state(['natural', null]),
        }])
    })

    export const positive_natural = (decimal_separator_offset?: number): d_schema.Number_Type => ({
        'precision': _p.wrap_state<d_schema.Number_Type.precision.state>(['exact', {
            'decimal separator offset': decimal_separator_offset === undefined ? _p.optional.not_set() : _p.optional.set(decimal_separator_offset),
            'type': _p.wrap_state(['positive natural', null]),
        }])
    })

}

export const reference = (
    type: string,
): d_schema.Type_Reference => ({
    'location': _p.wrap_state(['internal', _p.wrap_reference(type)]),
    'resulting type': null,
})

export const part_reference = (
    type: string,
    tail: d_schema.Type_Node_Path.tail.list.L.element[],

): d_schema.Type_Node_Reference => {
    return {
        'type location': {
            'location': _p.wrap_state(['internal', _p.wrap_reference(type)]),
            'resulting type': null,
        },
        'path': {

            'tail': _p.wrap_list(tail),

            'resulting node': null,
        }
    }
}

/**
 * type node
 */
export namespace t {

    export const boolean = (): d_schema.Type_Node => {
        return _p.wrap_state(['boolean', null])
    }
    export const component = (type: string): d_schema.Type_Node => {
        return _p.wrap_state(['component', _p.wrap_state(['internal', _p.wrap_reference(type)])])
    }
    export const component_cyclic = (type: string): d_schema.Type_Node => {
        return _p.wrap_state(['component', _p.wrap_state(['internal cyclic', _p.wrap_reference(type)])])
    }
    export const component_external = (imp: string, type: string): d_schema.Type_Node => {
        return _p.wrap_state(['component', _p.wrap_state(['external', {
            'import': _p.wrap_reference(imp),
            'type': _p.wrap_reference(type),
        }])])
    }
    export const dictionary = (type: d_schema.Type_Node): d_schema.Type_Node => {
        return _p.wrap_state(['dictionary', {
            'node': type,
            'benchmark': _p.optional.not_set(),
        }])
    }
    export const group = (properties: _p.Raw_Or_Normal_Dictionary<d_schema.Group.dictionary.D.entry>): d_schema.Type_Node => {
        return _p.wrap_state(['group', _p.wrap_dictionary(properties)])
    }
    export const list = (type: d_schema.Type_Node): d_schema.Type_Node => {
        return _p.wrap_state(['list', {
            'node': type,
            'result': _p.optional.not_set(),
        }])
    }
    export const path_to_sibling = (
        type: d_schema.Type_Node,
        result: string,
    ): d_schema.Type_Node => {
        return _p.wrap_state(['list', {
            'node': type,
            'result': _p.optional.set<d_schema.Type_Reference>({
                'location': _p.wrap_state(['internal', _p.wrap_reference(result)]),
                'resulting type': null,
            }),
        }])
    }
    export const nothing = (): d_schema.Type_Node => {
        return _p.wrap_state(['nothing', null])
    }
    export const number_global = (name: string): d_schema.Type_Node => {
        return _p.wrap_state(['number', _p.wrap_state(['global', _p.wrap_reference(name)])])
    }
    export const number_local = (bt: d_schema.Number_Type): d_schema.Type_Node => {
        return _p.wrap_state(['number', _p.wrap_state(['local', bt])])
    }
    export const optional = (type: d_schema.Type_Node): d_schema.Type_Node => {
        return _p.wrap_state(['optional', type])
    }
    export const reference_derived = (
        type: string,
        tail: d_schema.Type_Node_Path.tail.list.L.element[],
    ): d_schema.Type_Node => {
        const x: d_schema.Type_Node_Reference = {
            'type location': {
                'location': _p.wrap_state(['internal', _p.wrap_reference(type)]),
                'resulting type': null,
            },
            'path': {
                'tail': _p.wrap_list(tail),
                'resulting node': null
            }
        }
        return _p.wrap_state(['reference', {
            'referent': x,
            'type': _p.wrap_state(['derived', null]),
        }])
    }
    export const reference_derived_external = (
        imp: string,
        type: string,
        tail: d_schema.Type_Node_Path.tail.list.L.element[],

    ): d_schema.Type_Node => {
        const x: d_schema.Type_Node_Reference = {
            'type location': {
                'location': _p.wrap_state(['external', {
                    'import': _p.wrap_reference(imp),
                    'type': _p.wrap_reference(type),
                }]),
                'resulting type': null,
            },
            'path': {
                'tail': _p.wrap_list(tail),
                'resulting node': null
            }
        }

        return _p.wrap_state(['reference', {
            'referent': x,
            'type': _p.wrap_state(['derived', null]),
        }])
    }

    export const reference = (
        type: string,
        tail: d_schema.Type_Node_Path.tail.list.L.element[],
        dependency?: "cyclic" | "acyclic",
    ): d_schema.Type_Node => {

        const p_type: d_schema.Type_Node.state.reference.type_ = _p.wrap_state(['selected', {
            'referent': {
                'type location': {
                    'location': _p.wrap_state(['internal', _p.wrap_reference(type)]),
                    'resulting node': null
                },
                'tail': _p.wrap_list(tail),
                'resulting node': null
            },
            'dictionary': null,
            'dependency': dependency === "cyclic" ? _p.wrap_state(['cyclic', null]) : _p.wrap_state(['acyclic', null])
        }])
        return _p.wrap_state(['reference', {
            'referent': {
                'type location': {
                    'location': _p.wrap_state(['internal', _p.wrap_reference(type)]),
                    'resulting node': null,
                    'resulting type': null,
                },
                'path': {
                    'tail': _p.wrap_list(tail),
                    'resulting node': null
                }
            },
            'type': p_type,
        }])
    }

    export const reference_stack = (
        type: string,
        tail: d_schema.Type_Node_Path.tail.list.L.element[],
    ): d_schema.Type_Node => {

        const p_type: d_schema.Type_Node.state.reference.type_ = _p.wrap_state(['selected', {
            'dictionary': null,
            'dependency': _p.wrap_state(['stack', null])
        }])
        return _p.wrap_state(['reference', {
            'referent': {
                'type location': {
                    'location': _p.wrap_state(['internal', _p.wrap_reference(type)]),
                    'resulting node': null,
                    'resulting type': null,
                },
                'path': {
                    'tail': _p.wrap_list(tail),
                    'resulting node': null
                }
            },
            'type': p_type,
        }])
    }

    export const reference_external = (
        schema: string,

        type: string,
        tail: d_schema.Type_Node_Path.tail.list.L.element[],
    ): d_schema.Type_Node => {

        const p_type: d_schema.Type_Node.state.reference.type_ = _p.wrap_state(['selected', {
            'dictionary': null,
            'dependency': _p.wrap_state(['acyclic', null]) // <-- external references cannot be cyclic, but this should not have to be specified here
        }])
        return _p.wrap_state(['reference', {
            'referent': {
                'type location': {
                    'location': _p.wrap_state(['external', {
                        'import': _p.wrap_reference(schema),
                        'type': _p.wrap_reference(type),
                    }]),
                    'resulting node': null,
                    'resulting type': null,
                },
                'path': {
                    'tail': _p.wrap_list(tail),
                    'resulting node': null
                }
            },
            'type': p_type,
        }])
    }
    export const state = (options: _p.Raw_Or_Normal_Dictionary<d_schema.Type_Node.state.state.dictionary.D.entry>): d_schema.Type_Node => {
        return _p.wrap_state(['state', _p.wrap_dictionary(options)])
    }
    export const text_global = (name: string): d_schema.Type_Node => {
        return _p.wrap_state(['text', _p.wrap_state(['global', _p.wrap_reference(name)])])
    }
    export const text_local = (bt: d_schema.Text_Type): d_schema.Type_Node => {
        return _p.wrap_state(['text', _p.wrap_state(['local', bt])])
    }
    // export const type_parameter = (name: string): unresolved.Type_Node => {
    //     return _psh.wrap_state(['type parameter', _psh.wrap_reference(name)])
    // }
}

/**
 * type node reference tail step
 */
export namespace tr {

    export const d = (): d_schema.Type_Node_Path.tail.list.L.element => {
        return _p.wrap_state(['dictionary', null])
    }
    export const g = (grp: string): d_schema.Type_Node_Path.tail.list.L.element => {
        return _p.wrap_state(['group', _p.wrap_reference(grp)])
    }
    export const s = (state: string): d_schema.Type_Node_Path.tail.list.L.element => {
        return _p.wrap_state(['state', _p.wrap_reference(state)])
    }
    export const o = (): d_schema.Type_Node_Path.tail.list.L.element => {
        return _p.wrap_state(['optional', null])
    }
}



export const sig_params = (
    values: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.values.dictionary.D.entry>,
    lookups: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.lookups.dictionary.D.entry>,
): d_schema.Signature_Parameters => {
    return {
        'values': _p.wrap_dictionary(values),
        'lookups': _p.wrap_dictionary(lookups),
    }
}

/**
 * signature
 */
export namespace sig {

    export const local = (
        values: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.values.dictionary.D.entry>,
        lookups: _p.Raw_Or_Normal_Dictionary<d_schema.Signature_Parameters.lookups.dictionary.D.entry>,
    ): d_schema.Signatures.dictionary.D.entry => {
        return {
            'type': null,
            'parameters': _p.wrap_state(['local', {
                'values': _p.wrap_dictionary(values),
                'lookups': _p.wrap_dictionary(lookups),
            }]),
            'resolved parameters': null,
        }
    }

    export const same_as = (
        name: string
    ): d_schema.Signatures.dictionary.D.entry => {
        return {
            'type': null,
            'parameters': _p.wrap_state(['same as', _p.wrap_reference(name)]),
            'resolved parameters': null,
        }
    }
}

export const value_parameter = (
    name: string,
    presence?: 'optional' | 'required',
): d_schema.Signature_Parameters.values.dictionary.D.entry => {
    return {
        'data type': {
            'location': _p.wrap_state(['internal', _p.wrap_reference(name)]),
            'resulting type': null,
        },
        'presence': presence === 'optional'
            ? _p.wrap_state(['optional', null])
            : _p.wrap_state(['required', null]),
    }
}

export const value_parameter_external = (
    imp: string,
    type: string,
    presence?: 'optional' | 'required',
): d_schema.Signature_Parameters.values.dictionary.D.entry => {
    return {
        'data type': {
            'location': _p.wrap_state(['external', {
                'import': _p.wrap_reference(imp),
                'type': _p.wrap_reference(type),
            }]),
            'resulting type': null,
        },
        'presence': presence === 'optional'
            ? _p.wrap_state(['optional', null])
            : _p.wrap_state(['required', null]),
    }
}

export const lookup_parameter = (
    name: string,
    type?: 'acyclic' | 'cyclic' | 'stack',
    presence?: 'optional' | 'required',
): d_schema.Signature_Parameters.lookups.dictionary.D.entry => {
    return {
        'referent': {
            'location': _p.wrap_state(['internal', _p.wrap_reference(name)]),
            'resulting type': null,
        },
        'dictionary': null,
        'type': type === 'cyclic'
            ? _p.wrap_state(['cyclic', null])
            : type === 'stack'
                ? _p.wrap_state(['stack', null])
                : _p.wrap_state(['acyclic', null]),
        'presence': presence === 'optional'
            ? _p.wrap_state(['optional', null])
            : _p.wrap_state(['required', null]),
    }
}

/**
 * lookup selection
 */
export namespace ls {

    export const parameter = (parameter: string): d_schema.Lookup_Selection => {
        return {
            'type': _p.wrap_state(['parameter', _p.wrap_reference(parameter)]),
            'resulting dictionary': null
        }
    }
    export const not_circular_dependent_siblings = (): d_schema.Lookup_Selection => {
        return {
            'type': _p.wrap_state(['not circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }
    export const possibly_circular_dependent_siblings = (): d_schema.Lookup_Selection => {
        return {
            'type': _p.wrap_state(['possibly circular dependent siblings', null]),
            'resulting dictionary': null
        }
    }

}

/**
 * node resolver lookup arguments
 */
export namespace al {


    export const not_set = (

    ): d_schema.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry => {
        return _p.wrap_state(['not set', null])
    }

    export const empty_stack = (

    ): d_schema.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry => {
        return _p.wrap_state(['empty stack', null])
    }

    /**
     * creates a new stack of lookup selections from an existing stack and a new element
     */
    export const stack = (
        stack: d_schema.Lookup_Selection,
        element: d_schema.Lookup_Selection,
    ): d_schema.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry => {
        return _p.wrap_state(['stack', {
            'stack': stack,
            'element': element,
        }])
    }

    /**
     * provides a dictionary by selecting a value (that is guaranteed to be a dictionary)
     */
    export const dictionary = (value_selection: d_schema.Guaranteed_Value_Selection): d_schema.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry => {
        return _p.wrap_state(['selection', {
            'type': _p.wrap_state(['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }])
    }

    /**
     * selects a lookup parameter of this resolver and passes it to the next resolver
     */
    export const parameter = (parameter: string): d_schema.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry => {
        return _p.wrap_state(['selection', {
            'type': _p.wrap_state(['parameter', _p.wrap_reference(parameter)]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of an ordered dictionary
     */
    export const not_circular_dependent_siblings = (): d_schema.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry => {
        return _p.wrap_state(['selection', {
            'type': _p.wrap_state(['not circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

    /**
     * this one is only usable in the context of a dictionary (ordered or not)
     */
    export const possibly_circular_dependent_siblings = (): d_schema.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry => {
        return _p.wrap_state(['selection', {
            'type': _p.wrap_state(['possibly circular dependent siblings', null]),
            'resulting dictionary': null,
        }])
    }

}

/**
 * value selection path step
 */
export namespace vst {

    export const component = (
    ): d_schema.Relative_Value_Selection.path.list.L.element => {
        return _p.wrap_state(['component', null])
    }

    export const group = (
        property: string,
    ): d_schema.Relative_Value_Selection.path.list.L.element => {
        return _p.wrap_state(['group', _p.wrap_reference(property)])
    }

    export const reference = (
    ): d_schema.Relative_Value_Selection.path.list.L.element => {
        return _p.wrap_state(['reference', {
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
        return _p.wrap_state(['not set', null])
    }

    export const set = (
        value: d_schema.Guaranteed_Value_Selection,
    ): d_schema.Optional_Value_Initialization => {
        return _p.wrap_state(['set', value])
    }

    export const selection = (
        selection: d_schema.Possible_Value_Selection,
    ): d_schema.Optional_Value_Initialization => {
        return _p.wrap_state(['selection', selection])
    }

}

/**
 * possible value selection
 */
export namespace pvs {
    export const state = (
        state: string,
        result: d_schema.Type_Reference,
    ): d_schema.Possible_Value_Selection => {
        return _p.wrap_state(['result', _p.wrap_state(['state', {
            'property': _p.wrap_reference(state),
            'state': null,
            'result': result,
        }])])
    }

    export const optional_value = (
        optional_value: string,
        result: d_schema.Type_Reference,
    ): d_schema.Possible_Value_Selection => {
        return _p.wrap_state(['result', _p.wrap_state(['optional value', {
            'property': _p.wrap_reference(optional_value),
            'optional value': null,
            'result': result,
        }])])
    }

    export const parameter = (
        parameter: string,
    ): d_schema.Possible_Value_Selection => {
        return _p.wrap_state(['parameter', _p.wrap_reference(parameter)])
    }

}

/**
 * guaranteed value selection
 */
export namespace gvs {

    export const dictionary = (value_selection: d_schema.Guaranteed_Value_Selection): d_schema.Lookup_Selection => {
        return {
            'type': _p.wrap_state(['dictionary', {
                'selection': value_selection,
                'selected dictionary': null,
            }]),
            'resulting dictionary': null,
        }
    }
    export const component = (
        component: string,
        constraint: string,
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state(['constraint', _p.wrap_state(['component', {
                'property': _p.wrap_reference(component),
                'constraint': _p.wrap_reference(constraint),
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const reference = (
        reference: string,
        constraint: string,
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state(['constraint', _p.wrap_state(['reference', {
                'property': _p.wrap_reference(reference),
                'constraint': _p.wrap_reference(constraint),
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list = (
        list: string,
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state<d_schema.Guaranteed_Value_Selection.start.state>(['result', _p.wrap_state(['list', {
                'property': _p.wrap_reference(list),
                'list result': null,
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const state = (
        state: string,
        result: d_schema.Type_Reference,
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state<d_schema.Possible_Value_Selection.state>(['result', _p.wrap_state(['state', {
                'property': _p.wrap_reference(state),
                'state': null,
                'result': result,
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const optional_value = (
        optional_value: string,
        result: d_schema.Type_Reference,
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state<d_schema.Possible_Value_Selection.state>(['result', _p.wrap_state(['optional value', {
                'property': _p.wrap_reference(optional_value),
                'optional value': null,
                'result': result,
            }])]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parameter = (
        parameter: string,
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state<d_schema.Possible_Value_Selection.state>(['parameter', _p.wrap_reference(parameter)]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const list_cursor = (
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state(['list cursor', null]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const linked_entry = (
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state(['linked entry', null]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const sibling = (
        sibling: string,
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state(['sibling', _p.wrap_reference(sibling)]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const parent_sibling = (
        parent_sibling: string,
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state(['parent sibling', _p.wrap_reference(parent_sibling)]),
            'tail': {
                'path': _p.wrap_list(tail),
                'resulting node': null,
            },
            'resulting node': null,
        }
    }

    export const option_constraint = (
        constraint: string,
        tail: d_schema.Relative_Value_Selection.path.list.L.element[],
    ): d_schema.Guaranteed_Value_Selection => {
        return {
            'start': _p.wrap_state(['option constraint', _p.wrap_reference(constraint)]),
            'tail': {
                'path': _p.wrap_list(tail),
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
    ): d_schema.Node_Resolver.state.component.arguments_.O.values.O.dictionary.D.entry => {
        return _p.wrap_state(['parameter', _p.wrap_reference(parameter)])
    }

    export const required = (
        value: d_schema.Guaranteed_Value_Selection,
    ): d_schema.Node_Resolver.state.component.arguments_.O.values.O.dictionary.D.entry => {
        return _p.wrap_state(['required', value])
    }

    export const optional = (
        value: d_schema.Optional_Value_Initialization,
    ): d_schema.Node_Resolver.state.component.arguments_.O.values.O.dictionary.D.entry => {
        return _p.wrap_state(['optional', value])
    }

}

export const state = (
    resolver: d_schema.Node_Resolver,
): d_schema.Node_Resolver.state.state.states.dictionary.D.entry => {
    return {
        'constraints': _p.wrap_dictionary({}),
        'resolver': resolver,
    }
}

export const state_constrained = (
    constraints: _p.Raw_Or_Normal_Dictionary<d_schema.Option_Constraints.dictionary.D.entry>,
    resolver: d_schema.Node_Resolver,
): d_schema.Node_Resolver.state.state.states.dictionary.D.entry => {
    return {
        'constraints': _p.wrap_dictionary(constraints),
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
    ): d_schema.Option_Constraints.dictionary.D.entry => {
        return _p.wrap_state(['state', {
            'selection': value_selection,
            'selected state': null,
            'option': _p.wrap_reference(state),
        }])
    }

    export const assert_set = (
        possibly_optional: d_schema.Possible_Value_Selection,
    ): d_schema.Option_Constraints.dictionary.D.entry => {
        return _p.wrap_state(['assert is set', possibly_optional])
    }

}

/**
 * property constraint
 */
export namespace pc {

    export const property = (
        value_selection_tail: d_schema.Relative_Value_Selection.path.list.L.element[],
        state: string,
    ): d_schema.Property_Constraints.dictionary.D.entry => {
        return {
            'start': _p.wrap_state(['property', null]),
            'constraint': {
                'selection': {
                    'path': _p.wrap_list(value_selection_tail),
                    'resulting node': null,
                },
                'type': _p.wrap_state(['state', {
                    'selected state': null,
                    'option': _p.wrap_reference(state),
                }])
            },
        }
    }

    export const constraint = (
        constraint: string,
        value_selection_tail: d_schema.Relative_Value_Selection.path.list.L.element[],
        state?: string,
    ): d_schema.Property_Constraints.dictionary.D.entry => {
        return {
            'start': _p.wrap_state(['sibling', _p.wrap_reference(constraint)]),
            'constraint': {
                'selection': {
                    'path': _p.wrap_list(value_selection_tail),
                    'resulting node': null,
                },
                'type': state === undefined
                    ? _p.wrap_state(['optional value', {
                        'selected optional value': null,
                    }])
                    : _p.wrap_state(['state', {
                        'selected state': null,
                        'option': _p.wrap_reference(state),
                    }])
            },
        }
    }

}

/**
 * node resolver
 */
export namespace r {

    export const text = (): d_schema.Node_Resolver => {
        return _p.wrap_state(['text', null])
    }

    export const boolean = (): d_schema.Node_Resolver => {
        return _p.wrap_state(['boolean', null])
    }

    export const number = (): d_schema.Node_Resolver => {
        return _p.wrap_state(['number', null])
    }
    export const component = (
        type: string,
        values: null | _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.state.component.arguments_.O.values.O.dictionary.D.entry>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry>,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Property_Constraints.dictionary.D.entry>,
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['component', {
            'location': _p.wrap_state(['internal', _p.wrap_reference(type)]),
            'signature': null,
            'arguments': _p.optional.set({
                'values': values === null ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(values)),
                'lookups': lookups === null ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(lookups)),
            }),
            'constraints': _p.wrap_dictionary(constraints === undefined ? {} : constraints),
        }])
    }
    export const component_external = (
        imp: string,
        type: string,
        values: null | _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.state.component.arguments_.O.values.O.dictionary.D.entry>,
        lookups: null | _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry>,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Property_Constraints.dictionary.D.entry>,
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['component', {
            'location': _p.wrap_state(['external', {
                'import': _p.wrap_reference(imp),
                'type': _p.wrap_reference(type),
            }]),
            'signature': null,
            'arguments': _p.optional.set({
                'values': values === null ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(values)),
                'lookups': lookups === null ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(lookups)),
            }),
            'constraints': _p.wrap_dictionary(constraints === undefined ? {} : constraints),
        }])
    }

    export const dictionary = (resolver: d_schema.Node_Resolver): d_schema.Node_Resolver => {
        return _p.wrap_state(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': _p.optional.not_set(),
        }])
    }

    export const dictionary_linked = (
        dense: 'dense' | 'sparse',
        selection: d_schema.Guaranteed_Value_Selection,
        resolver: d_schema.Node_Resolver,
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['dictionary', {
            'definition': null,
            'resolver': resolver,
            'benchmark': _p.optional.set({
                'selection': selection,
                'resulting dictionary': null,
                'dense': dense === 'dense',
            }),
        }])
    }

    export const group = (
        properties: _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver_Group.dictionary.D.entry.resolver> //FIXME: remove the 'this entry' step
    ): d_schema.Node_Resolver => {
        const temp_dict = _p.wrap_dictionary(properties)
        return _p.wrap_state(['group', {
            'location': temp_dict.location,
            'dictionary': temp_dict.dictionary.__d_map(($) => {
                return {
                    'location': $.location,
                    'entry': {
                        'definition': null,
                        'resolver': $.entry
                    },
                }
            })
        }])
    }

    export const list = (
        type_resolver: d_schema.Node_Resolver
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': _p.optional.not_set<d_schema.Node_Resolver.state.list.result.O>(),
        }])
    }
    export const list_with_result = (
        type_resolver: d_schema.Node_Resolver,
        result: d_schema.Type_Reference,

    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['list', {
            'definition': null,
            'resolver': type_resolver,
            'result': _p.optional.set(result),
        }])
    }

    export const nothing = (): d_schema.Node_Resolver => {
        return _p.wrap_state(['nothing', null])
    }

    export const optional = (
        type_resolver: d_schema.Node_Resolver
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['optional', {
            'constraints': _p.wrap_dictionary<d_schema.Option_Constraints.dictionary.D.entry>({}),
            'resolver': type_resolver,
        }])
    }

    export const optional_constrained = (
        constraints: _p.Raw_Or_Normal_Dictionary<d_schema.Option_Constraints.dictionary.D.entry>,
        type_resolver: d_schema.Node_Resolver
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['optional', {
            'constraints': _p.wrap_dictionary(constraints),
            'resolver': type_resolver,
        }])
    }

    export const reference_derived = (
        value_selection: d_schema.Guaranteed_Value_Selection
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['reference', {
            'definition': null,
            'type': _p.wrap_state(['derived', {
                'value': value_selection,
            }])
        }])
    }

    export const reference = (
        lookup_selection: d_schema.Lookup_Selection,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Property_Constraints.dictionary.D.entry>,
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['reference', {
            'definition': null,
            'type': _p.wrap_state(['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': _p.wrap_dictionary(constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const reference_stack = (
        lookup_selection: d_schema.Lookup_Selection,
        constraints?: _p.Raw_Or_Normal_Dictionary<d_schema.Property_Constraints.dictionary.D.entry>,
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['reference', {
            'definition': null,
            'type': _p.wrap_state(['selected', {
                'definition': null,
                'lookup': lookup_selection,
                'constraints': _p.wrap_dictionary(constraints === undefined ? {} : constraints),
            }])
        }])
    }

    export const state = (
        states: _p.Raw_Or_Normal_Dictionary<d_schema.Node_Resolver.state.state.states.dictionary.D.entry>
    ): d_schema.Node_Resolver => {
        return _p.wrap_state(['state', {
            'definition': null,
            'states': _p.wrap_dictionary(states),
        }])
    }
}

export const resolver = (
    type_resolver: d_schema.Node_Resolver
): d_schema.Resolvers.dictionary.D.entry => {
    return {
        'signature': null,
        'type resolver': type_resolver,
    }
}

export const signatures = (
    signatures: _p.Raw_Or_Normal_Dictionary<d_schema.Signatures.dictionary.D.entry>,
): d_schema.Resolve_Logic.signatures => {
    return {
        'types': _p.wrap_dictionary(signatures)
    }
}


export const resolvers = (
    resolvers: _p.Raw_Or_Normal_Dictionary<d_schema.Resolvers.dictionary.D.entry>,
): d_schema.Resolvers => {
    return _p.wrap_dictionary(resolvers)
}
export const import_ = (
    name: string,
): d_schema.Imports.dictionary.D.entry => {
    return {
        'schema set child': _p.wrap_stack_reference(name),
        'schema': null,
    }
}

export const constrained = (
    signatures: d_schema.Resolve_Logic.signatures,
    resolvers: d_schema.Resolvers,
): d_schema.Schema.complexity.state.constrained => {
    return {
        'signatures': signatures,
        'resolvers': resolvers,
    }
}

export const unconstrained = (
): d_schema.Schema.complexity.state.unconstrained => {
    return null
}
export const schema_ = (
    imports: _p.Raw_Or_Normal_Dictionary<d_schema.Imports.dictionary.D.entry>,
    globals: d_schema.Globals,
    types: d_schema.Types,
    resolve: null | d_schema.Schema.complexity.state.constrained,
): d_schema.Schemas.dictionary.D.entry => {
    return _p.wrap_state(['schema', {
        'imports': _p.wrap_dictionary(imports),
        'globals': globals,
        'types': types,
        'complexity': resolve === null
            ? _p.wrap_state(['unconstrained', null])
            : _p.wrap_state(['constrained', resolve])
    }])
}