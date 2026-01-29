
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/unmarshall_errors/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Relative_Location: t_signatures.Relative_Location = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
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

export const Errors: t_signatures.Errors = ($, abort) => v_unmarshalled_from_parse_tree.List(
    $,
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_cc(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null]
            )
        ),
        ($) => ({
            'range': _p_cc(
                $.__get_entry(
                    'range',
                    ($) => abort(
                        ['no such entry', "range"]
                    )
                ),
                ($) => Range(
                    $,
                    ($) => abort(
                        $
                    )
                )
            ),
            'type': _p_cc(
                $.__get_entry(
                    'type',
                    ($) => abort(
                        ['no such entry', "type"]
                    )
                ),
                ($) => _p_unreachable_code_path(
                )
            ),
        })
    )
)
