
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/module/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/module/data/unresolved"

import * as v_schema from "../schema/migrate_boilerplate"

export const Module: t_signatures.Module = ($) => ({
    'omit (de)serializer': _p_cc(
        $['omit (de)serializer'],
        ($) => $
    ),
    'schema tree': _p_cc(
        $['schema tree'],
        ($) => v_schema.Schema_Tree(
            $
        )
    ),
})
