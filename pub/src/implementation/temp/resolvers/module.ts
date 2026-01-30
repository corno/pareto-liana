import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _p_temp from 'pareto-core/dist/lookup_selection'
import { _p_deprecated_block } from 'pareto-core/dist/deprecated_block'
import { _p_cc } from 'pareto-core/dist/change_context'

import * as signatures from "../../../interface/generated/liana/schemas/module/resolve"
import * as d_out from "../../../interface/generated/liana/schemas/module/data/resolved"

import * as _i_r_schema from "./schema"
import * as _i_generic from "../resolve_generic"

export const Module: signatures.Module = ($, abort, $l, $p) => _p_deprecated_block(() => {
    const p_schema_tree: d_out.Module.schema_tree = _p_cc($['schema tree'], ($) => _i_r_schema.Schema_Tree(
        $,
        abort,
        {
            'sibling schemas': _p_temp.stack.empty(),
        },
        null,
    ))
    return {
        'omit (de)serializer': $['omit (de)serializer'],
        'schema tree': p_schema_tree,
    }
})