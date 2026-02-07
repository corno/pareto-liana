
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/module/unmarshall"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/module/data/unresolved"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_schema from "../../../schema/unresolved/refiners/astn_parse_tree"

export const Module: t_signatures.Module = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'omit (de)serializer': _p_change_context(
            $.__get_entry(
                'omit (de)serializer',
                ($) => abort(
                    ['no such entry', "omit (de)serializer"],
                ),
            ),
            ($) => v_deserialize_boolean.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid boolean', null],
                ),
            ),
        ),
        'schema tree': _p_change_context(
            $.__get_entry(
                'schema tree',
                ($) => abort(
                    ['no such entry', "schema tree"],
                ),
            ),
            ($) => v_external_schema.Schema_Tree(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)
