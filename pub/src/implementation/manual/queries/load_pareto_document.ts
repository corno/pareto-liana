import * as _p from 'pareto-core/dist/query'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//interface
import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/to_be_generated/load_pareto_document"

//depencencies

import { $$x as ds_unmarshall_result } from "../refiners/unmarshall_result/list_of_characters"
import { create_node_path } from "pareto-resources/dist/implementation/manual/transformers/path/path"
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/transformers/path/text"

export const $$x: signatures.queries.load_pareto_document = _p.query_function(
    ($p, $qr) => {

        const schema_path = create_node_path($p['file path'].context, { 'node': "astn-schema"})

        const schema_path_text = _p_text_from_list(
            t_path_to_text.Node_Path(schema_path),
            ($) => $
        )

        return $qr['read file'](
            schema_path,
            (): d.Error => ['no schema file', {
                'file location': schema_path_text,
            }]
        ).refine_without_error_transformation(
            ($, abort) => ds_unmarshall_result(
                _p_list_from_text(
                    $p.content,
                    ($) => $
                ),
                ($) => abort(['deserialize', $]),
                {
                    'instance path': _p_text_from_list(
                        t_path_to_text.Node_Path($p['file path']),
                        ($) => $,
                    ),
                    'schema content': _p_text_from_list(
                        $,
                        ($) => $
                    ),
                    'schema path': schema_path_text,
                },
            ),

        )
    }
)
