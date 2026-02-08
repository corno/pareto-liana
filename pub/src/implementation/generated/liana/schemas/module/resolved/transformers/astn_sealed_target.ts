
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/module/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_schema from "../../../schema/resolved/transformers/astn_sealed_target"

export const Module: t_signatures.Module = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "omit (de)serializer": _p_change_context(
            $['omit (de)serializer'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': _p_text_from_list(
                    v_serialize_boolean.serialize(
                        $,
                    ),
                    ($) => $,
                ),
            }],
        ),
        "schema tree": _p_change_context(
            $['schema tree'],
            ($) => v_external_schema.Schema_Tree(
                $,
            ),
        ),
    },
)]]
