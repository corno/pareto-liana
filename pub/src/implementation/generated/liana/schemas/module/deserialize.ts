
import * as _p from "pareto-core/dist/deserializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/module/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"

import * as v_r_schema from "../schema/deserialize"

export const Module: t_signatures.Module = ($, abort, $p) => v_unmarshall.Module(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        }
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)
