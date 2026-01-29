
import * as _p from "pareto-core/dist/deserializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/parse_tree/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"

import * as v_r_token from "../token/deserialize"

import * as v_r_location from "../location/deserialize"

export const Structural_Token: t_signatures.Structural_Token = ($, abort, $p) => v_unmarshall.Structural_Token(
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

export const Text: t_signatures.Text = ($, abort, $p) => v_unmarshall.Text(
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

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($, abort, $p) => v_unmarshall.ID_Value_Pairs(
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

export const Items: t_signatures.Items = ($, abort, $p) => v_unmarshall.Items(
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

export const Value: t_signatures.Value = ($, abort, $p) => v_unmarshall.Value(
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

export const Content: t_signatures.Content = ($, abort, $p) => v_unmarshall.Content(
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

export const Document: t_signatures.Document = ($, abort, $p) => v_unmarshall.Document(
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
