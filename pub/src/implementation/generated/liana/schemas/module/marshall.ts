
import * as _p from "pareto-core/dist/transformer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/module/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_schema from "../schema/marshall"

export const Module: t_signatures.Module = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'omit (de)serializer': _p_cc(
            $['omit (de)serializer'],
            ($) => ['text', ({
                'delimiter': ['none', null],
                'value': v_serialize_boolean.serialize(
                    $
                ),
            })]
        ),
        'schema tree': _p_cc(
            $['schema tree'],
            ($) => v_external_schema.Schema_Tree(
                $
            )
        ),
    })
)]]
