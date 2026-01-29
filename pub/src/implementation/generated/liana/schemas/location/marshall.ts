
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/location/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Relative_Location: t_signatures.Relative_Location = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'document resource identifier': _p_cc(
            $['document resource identifier'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }]
        ),
        'line': _p_cc(
            $['line'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize(
                    $
                ),
            }]
        ),
        'column': _p_cc(
            $['column'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize(
                    $
                ),
            }]
        ),
    }
)]]

export const Location: t_signatures.Location = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'relative': _p_cc(
            $['relative'],
            ($) => Relative_Location(
                $
            )
        ),
        'absolute': _p_cc(
            $['absolute'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize(
                    $
                ),
            }]
        ),
    }
)]]

export const Range: t_signatures.Range = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'start': _p_cc(
            $['start'],
            ($) => Location(
                $
            )
        ),
        'end': _p_cc(
            $['end'],
            ($) => Location(
                $
            )
        ),
    }
)]]
