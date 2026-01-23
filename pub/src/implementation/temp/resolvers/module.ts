import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'

import * as signatures from "../../../interface/generated/liana/schemas/module/resolve"
import * as d_out from "../../../interface/generated/liana/schemas/module/data/resolved"

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
    return ({
        'omit (de)serializer': $['omit (de)serializer'],
        'schema tree': p_schema_tree,
    })
})