import * as _p from 'pareto-core/dist/query'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/to_be_generated/load_pareto_file"

//depencencies
import { $$x as q_load_pareto_document } from "./load_pareto_document"

export const $$x: signatures.queries.load_pareto_file = _p.query_function(
    ($p, $qr) => $qr['read file'](
        $p['file path'],
        ($): d.Error => ['read file', $]
    ).query_without_error_transformation(
        ($) => q_load_pareto_document(
            {
                'read file': $qr['read file'],
            },
        )(
            {
                'content': _p_text_from_list(
                    $,
                    ($) => $
                ),
                'file path': $p['file path'],
            },
            ($): d.Error => ['document', $]
        )
    )
)