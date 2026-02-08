
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/location/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Range: t_signatures.Range = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "start": _p_change_context(
            $['start'],
            ($) => Location(
                $,
            ),
        ),
        "end": _p_change_context(
            $['end'],
            ($) => Location(
                $,
            ),
        ),
    },
)]]

export const Location: t_signatures.Location = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "relative": _p_change_context(
            $['relative'],
            ($) => Relative_Location(
                $,
            ),
        ),
        "absolute": _p_change_context(
            $['absolute'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': _p_text_from_list(
                    v_serialize_number.serialize(
                        $,
                    ),
                    ($) => $,
                ),
            }],
        ),
    },
)]]

export const Relative_Location: t_signatures.Relative_Location = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "document resource identifier": _p_change_context(
            $['document resource identifier'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "line": _p_change_context(
            $['line'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': _p_text_from_list(
                    v_serialize_number.serialize(
                        $,
                    ),
                    ($) => $,
                ),
            }],
        ),
        "column": _p_change_context(
            $['column'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': _p_text_from_list(
                    v_serialize_number.serialize(
                        $,
                    ),
                    ($) => $,
                ),
            }],
        ),
    },
)]]
