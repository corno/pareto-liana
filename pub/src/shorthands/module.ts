import * as _p from 'pareto-core-shorthands/dist/unresolved_data'
import * as _pi from 'pareto-core-interface'

import * as unresolved from "../interface/generated/pareto/schemas/module/data/unresolved"

import * as unresolved_schema from "../interface/generated/pareto/schemas/schema/data/unresolved"

export const module_ = (
    operations: unresolved.Operations,
    schema_tree: unresolved_schema.Schema_Tree
): unresolved.Module => ({
    'operations': operations,
    'schema tree': schema_tree,
})

export const operations = (
    operations: _p.Raw_Or_Normal_Dictionary<unresolved.Operations.dictionary.D.entry>,
): unresolved.Operations => _p.wrap_dictionary(operations)

export const operation = (
    type_parameters: _p.Raw_Or_Normal_Dictionary<unresolved_schema.Type_Parameters.dictionary.D.entry>,
    context: unresolved.Operations.dictionary.D.entry.state_group.operation.context,
    parameters: _p.Raw_Or_Normal_Dictionary<unresolved.Operations.dictionary.D.entry.state_group.operation.parameters.dictionary.D.entry>,
    result: unresolved.Operations.dictionary.D.entry.state_group.operation.result
): unresolved.Operations.dictionary.D.entry => {
    return _p.wrap_state_group(['operation', {
        'type parameters': _p.wrap_dictionary(type_parameters),
        'context': context,
        'parameters': _p.wrap_dictionary(parameters),
        'result': result
    }])
}

export const set = (
    operations: _p.Raw_Or_Normal_Dictionary<unresolved.Operations.dictionary.D.entry>
): unresolved.Operations.dictionary.D.entry => {
    return _p.wrap_state_group(['set', _p.wrap_dictionary(operations)])
}
