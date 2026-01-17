import * as _p from 'pareto-core-refiner'

import * as _i_generic from 'pareto-core-internals/dist/algorithm_types/refiner/resolve'
import * as d_signatures from "../../../interface/generated/pareto/schemas/module/data_types/resolve"

import * as d_out from "../../../interface/generated/pareto/schemas/module/data/unresolved"

import * as _i_r_schema from "./schema"


export const Module: d_signatures.Module = ($, abort, $p) => _p.deprecated_block(() => {
    const p_schema_tree: d_out.Module.schema_tree = _p.deprecated_cc($['schema tree'], ($) => _i_r_schema.Schema_Tree(
        $,
        {
            'location 2 string': $p['location 2 string'],
            'parameters': ({
                'lookups': ({
                    'sibling schemas': _p.list.literal([
                    ]),
                }),
                'values': null,
            }),
        }
    ))
    const p_operations: d_out.Module.operations = _p.deprecated_cc($['operations'], ($) => Operations(
        $,
        {
            'location 2 string': $p['location 2 string'],
            'parameters': $p['parameters'],
        }
    ))
    return ({
        'schema tree': p_schema_tree,
        'operations': p_operations,
    })
})

export const Operations: d_signatures.Operations = ($, abort, $p) => _p.deprecated_block(() => {
    return _i_generic.resolve_dictionary(
        $,
        {
            'location 2 string': $p['location 2 string'],
            'map': ($, $x) => _p.deprecated_cc($['value'], ($) => _p.deprecated_cc($['state group'], ($): d_out.Operations.dictionary.D.entry => {
                switch ($[0]) {
                    case 'operation': return _p.ss($, ($) => ['operation', _p.deprecated_block(() => {
                        return _p.deprecated_block(() => {
                            const p_type_parameters: d_out.Operations.dictionary.D.entry.state_group.operation.type_parameters = _p.deprecated_cc($['type parameters'], ($) => _i_r_schema.Type_Parameters(
                                $,
                                {
                                    'location 2 string': $p['location 2 string'],
                                    'parameters': $p['parameters'],
                                }
                            ))
                            const p_context: d_out.Operations.dictionary.D.entry.state_group.operation.context = _p.deprecated_cc($['context'], ($) => _i_r_schema.Type_Node(
                                $,
                                {
                                    'location 2 string': $p['location 2 string'],
                                    'parameters': ({
                                        'lookups': ({
                                            'noncircular sibling types': _p.optional.not_set(),
                                            'possibly circular dependent sibling types': _p.optional.not_set(),
                                        }),
                                        'values': {
                                            'imports': _p.optional.not_set(),
                                            'globals': _p.optional.not_set(),
                                            'type parameters': p_type_parameters,
                                        },
                                    }),
                                }
                            ))
                            const p_parameters: d_out.Operations.dictionary.D.entry.state_group.operation.parameters = _p.deprecated_cc($['parameters'], ($) => _i_generic.resolve_dictionary(
                                $,
                                {
                                    'location 2 string': $p['location 2 string'],
                                    'map': ($, $x) => _p.deprecated_cc($['value'], ($) => _i_r_schema.Type_Node(
                                        $,
                                        {
                                            'location 2 string': $p['location 2 string'],
                                            'parameters': ({
                                                'lookups': ({
                                                    'noncircular sibling types': _p.optional.not_set(),
                                                    'possibly circular dependent sibling types': _p.optional.not_set(),
                                                }),
                                                'values': {
                                                    'imports': _p.optional.not_set(),
                                                    'globals': _p.optional.not_set(),
                                                    'type parameters': p_type_parameters,
                                                },
                                            }),
                                        }
                                    )),
                                }
                            ))
                            const p_result: d_out.Operations.dictionary.D.entry.state_group.operation.result = _p.deprecated_cc($['result'], ($) => _i_r_schema.Type_Node(
                                $,
                                {
                                    'location 2 string': $p['location 2 string'],
                                    'parameters': ({
                                        'lookups': ({
                                            'noncircular sibling types': _p.optional.not_set(),
                                            'possibly circular dependent sibling types': _p.optional.not_set(),
                                        }),
                                        'values': {
                                            'imports': _p.optional.not_set(),
                                            'globals': _p.optional.not_set(),
                                            'type parameters': p_type_parameters,
                                        },
                                    }),
                                }
                            ))
                            return ({
                                'context': p_context,
                                'parameters': p_parameters,
                                'result': p_result,
                                'type parameters': p_type_parameters,
                            })
                        })
                    })])
                    case 'set': return _p.ss($, ($) => ['set', _p.deprecated_block(() => {
                        return Operations(
                            $,
                            {
                                'location 2 string': $p['location 2 string'],
                                'parameters': $p['parameters'],
                            }
                        )
                    })])
                    default: return _p.au($[0])
                }
            })),
        }
    )
})
