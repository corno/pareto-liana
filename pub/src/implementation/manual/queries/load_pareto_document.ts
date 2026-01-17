import * as _p from 'pareto-core-query'

//interface
import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/to_be_generated/load_pareto_document"

//depencencies

import { $$ as ds_unmarshall_result } from "../schemas/unmarshall_result/deserializers"
import { create_node_path } from "pareto-resources/dist/implementation/manual/schemas/path/transformers/path"
import * as s_path from "pareto-resources/dist/implementation/manual/schemas/path/serializers"

export const $$: signatures.queries.load_pareto_document = _p.query_function(($p, $qr) => {

    const schema_path = create_node_path($p['file path'].context, "astn-schema")

    const schema_path_text = s_path.Node_Path(schema_path)

    return $qr['read file'](
        schema_path,
        (): d.Error => ['no schema file', {
            'file location': schema_path_text,
        }]
    ).refine_without_error_transformation(
        ($, abort) => ds_unmarshall_result(
            $p.content,
            ($)=> abort(['deserialize', $]),
            {
                'instance path': s_path.Node_Path($p['file path']),
                'schema content': $,
                'schema path': schema_path_text,
            },
        ),

    )
}
)
