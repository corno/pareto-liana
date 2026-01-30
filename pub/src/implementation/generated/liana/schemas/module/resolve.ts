
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as _pdev from "pareto-core-dev"

import * as t_out from "../../../../../interface/generated/liana/schemas/module/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/module/resolve"

import * as v_external_schema from "../schema/resolve"

export const Module: t_signatures.Module = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_omit_$po_de$pc_serializer = _p_cc(
            $['omit (de)serializer'],
            ($) => $
        )
        
        const prop_schema_tree = _p_cc(
            $['schema tree'],
            ($) => v_external_schema.Schema_Tree(
                $,
                ($) => abort(
                    $
                ),
                {
                    'sibling schemas': _pdev.implement_me(
                        'empty stack'
                    ),
                },
                null
            )
        )
        return {
            'omit (de)serializer': prop_omit_$po_de$pc_serializer,
            'schema tree': prop_schema_tree,
        }
    }
)
