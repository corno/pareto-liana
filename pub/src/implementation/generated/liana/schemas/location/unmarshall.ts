
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/location/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/location/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Range: t_signatures.Range = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'start': _p_cc(
            $.__get_entry(
                'start',
                ($) => abort(
                    ['no such entry', "start"]
                )
            ),
            ($) => Location(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'end': _p_cc(
            $.__get_entry(
                'end',
                ($) => abort(
                    ['no such entry', "end"]
                )
            ),
            ($) => Location(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Location: t_signatures.Location = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'relative': _p_cc(
            $.__get_entry(
                'relative',
                ($) => abort(
                    ['no such entry', "relative"]
                )
            ),
            ($) => Relative_Location(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'absolute': _p_cc(
            $.__get_entry(
                'absolute',
                ($) => abort(
                    ['no such entry', "absolute"]
                )
            ),
            ($) => v_deserialize_number.deserialize(
                v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                ),
                ($) => abort(
                    ['not a valid number', null]
                )
            )
        ),
    })
)

export const Relative_Location: t_signatures.Relative_Location = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'document resource identifier': _p_cc(
            $.__get_entry(
                'document resource identifier',
                ($) => abort(
                    ['no such entry', "document resource identifier"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'line': _p_cc(
            $.__get_entry(
                'line',
                ($) => abort(
                    ['no such entry', "line"]
                )
            ),
            ($) => v_deserialize_number.deserialize(
                v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                ),
                ($) => abort(
                    ['not a valid number', null]
                )
            )
        ),
        'column': _p_cc(
            $.__get_entry(
                'column',
                ($) => abort(
                    ['no such entry', "column"]
                )
            ),
            ($) => v_deserialize_number.deserialize(
                v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                ),
                ($) => abort(
                    ['not a valid number', null]
                )
            )
        ),
    })
)
