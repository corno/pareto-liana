import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'

import * as signatures from "../../../interface/generated/pareto/schemas/module/resolve"
import * as d_out from "../../../interface/generated/pareto/schemas/module/data/resolved"

import * as _i_r_schema from "./schema"
import * as _i_generic from "../resolve_generic"

export const Module: signatures.Module = ($, abort, $l, $p) => _p.deprecated_block(() => {
    const p_schema_tree: d_out.Module.schema_tree = _p.deprecated_cc($['schema tree'], ($) => _i_r_schema.Schema_Tree(
        $,
        abort,
        {
            'sibling schemas': _i_generic.stack.empty(),
        },
        null,
    ))
    const p_operations: d_out.Module.operations = _p.deprecated_cc($['operations'], ($) => Operations(
        $,
        abort,
        $l,
        $p,
    ))
    return ({
        'schema tree': p_schema_tree,
        'operations': p_operations,
    })
})

export const Operations: signatures.Operations = ($, abort, $l, $p) => _p.deprecated_block(() => {
    return _i_generic.resolve_dictionary(
        $,
        ($, $x) => _p.deprecated_cc($, ($) => _p.deprecated_cc($['state group'], ($): d_out.Operations.D => {
            switch ($[0]) {
                case 'operation': return _p.ss($, ($) => ['operation', _p.deprecated_block(() => {
                    return _p.deprecated_block(() => {
                        const p_type_parameters: d_out.Operations.D.operation.type_parameters = _p.deprecated_cc($['type parameters'], ($) => _i_r_schema.Type_Parameters(
                            $,
                            abort,
                            $l,
                            $p
                        ))
                        const p_context: d_out.Operations.D.operation.context = _p.deprecated_cc($['context'], ($) => _i_r_schema.Type_Node(
                            $,
                            abort,
                            {
                                'noncircular sibling types': _i_generic.acyclic.not_set(),
                                'possibly circular dependent sibling types': _i_generic.cyclic.not_set(),
                            },
                            {
                                'imports': _p.optional.not_set(),
                                'globals': _p.optional.not_set(),
                                'type parameters': p_type_parameters,
                            }
                        ))
                        const p_parameters: d_out.Operations.D.operation.parameters = _p.deprecated_cc($['parameters'], ($) => _i_generic.resolve_dictionary(
                            $,
                            ($, $x) => _p.deprecated_cc($, ($) => _i_r_schema.Type_Node(
                                $,
                                abort,
                                {
                                    'noncircular sibling types': _i_generic.acyclic.not_set(),
                                    'possibly circular dependent sibling types': _i_generic.cyclic.not_set(),
                                },
                                {
                                    'imports': _p.optional.not_set(),
                                    'globals': _p.optional.not_set(),
                                    'type parameters': p_type_parameters,
                                },
                            )),
                        ))
                        const p_result: d_out.Operations.D.operation.result = _p.deprecated_cc($['result'], ($) => _i_r_schema.Type_Node(
                            $,
                            abort,
                            {
                                'noncircular sibling types': _i_generic.acyclic.not_set(),
                                'possibly circular dependent sibling types': _i_generic.cyclic.not_set(),
                            },
                            {
                                'imports': _p.optional.not_set(),
                                'globals': _p.optional.not_set(),
                                'type parameters': p_type_parameters,
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
                        abort,
                        $l,
                        $p
                    )
                })])
                default: return _p.au($[0])
            }
        })),
    )
})
