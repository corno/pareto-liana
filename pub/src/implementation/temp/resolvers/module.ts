
import * as _p from "pareto-core/dist/refiner"
import * as _p_ls from 'pareto-core/dist/lookup_selection'

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_out from "../../../interface/generated/liana/schemas/module/data/resolved"

import * as t_signatures from "../../../interface/generated/liana/schemas/module/resolve"

import * as v_external_schema from "./schema"

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
                    'sibling schemas': _p_ls.stack.empty(),
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
