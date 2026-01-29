
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/unmarshall_errors/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/unmarshall_errors/data"

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
                ($) => _p_cc(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            ['expected a state', null]
                        )
                    ),
                    ($) => _p.decide.text(
                        $['option']['value'],
                        ($t): t_out.Errors.L.type_ => {
                            switch ($t) {
                                case 'error':
                                    return _p_cc(
                                        $['value'],
                                        ($) => ['error', _p_cc(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null]
                                                )
                                            ),
                                            ($) => _p.decide.text(
                                                $['option']['value'],
                                                ($t): t_out.Errors.L.type_.error => {
                                                    switch ($t) {
                                                        case 'invalid value type':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['invalid value type', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'expected': _p_cc(
                                                                            $.__get_entry(
                                                                                'expected',
                                                                                ($) => abort(
                                                                                    ['no such entry', "expected"]
                                                                                )
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.List(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a list', null]
                                                                                )
                                                                            ).__l_map(
                                                                                ($) => _p_cc(
                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a state', null]
                                                                                        )
                                                                                    ),
                                                                                    ($) => _p.decide.text(
                                                                                        $['option']['value'],
                                                                                        ($t): t_out.Errors.L.type_.error.invalid_value_type.expected.L => {
                                                                                            switch ($t) {
                                                                                                case 'text':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ['text', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null]
                                                                                                            )
                                                                                                        )]
                                                                                                    )
                                                                                                case 'verbose group':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ['verbose group', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null]
                                                                                                            )
                                                                                                        )]
                                                                                                    )
                                                                                                case 'concise group':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ['concise group', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null]
                                                                                                            )
                                                                                                        )]
                                                                                                    )
                                                                                                case 'dictionary':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null]
                                                                                                            )
                                                                                                        )]
                                                                                                    )
                                                                                                case 'not set':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null]
                                                                                                            )
                                                                                                        )]
                                                                                                    )
                                                                                                case 'set':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ['set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null]
                                                                                                            )
                                                                                                        )]
                                                                                                    )
                                                                                                case 'list':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ['list', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null]
                                                                                                            )
                                                                                                        )]
                                                                                                    )
                                                                                                case 'state':
                                                                                                    return _p_cc(
                                                                                                        $['value'],
                                                                                                        ($) => ['state', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null]
                                                                                                            )
                                                                                                        )]
                                                                                                    )
                                                                                                default:
                                                                                                    return abort(
                                                                                                        ['unknown option', $['option']['value']]
                                                                                                    )
                                                                                            }
                                                                                        }
                                                                                    )
                                                                                )
                                                                            )
                                                                        ),
                                                                    })
                                                                )]
                                                            )
                                                        case 'duplicate property':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['duplicate property', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'name': _p_cc(
                                                                            $.__get_entry(
                                                                                'name',
                                                                                ($) => abort(
                                                                                    ['no such entry', "name"]
                                                                                )
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null]
                                                                                )
                                                                            )
                                                                        ),
                                                                    })
                                                                )]
                                                            )
                                                        case 'missing property':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['missing property', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'name': _p_cc(
                                                                            $.__get_entry(
                                                                                'name',
                                                                                ($) => abort(
                                                                                    ['no such entry', "name"]
                                                                                )
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null]
                                                                                )
                                                                            )
                                                                        ),
                                                                    })
                                                                )]
                                                            )
                                                        case 'superfluous property':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['superfluous property', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null]
                                                                        )
                                                                    ),
                                                                    ($) => ({
                                                                        'name': _p_cc(
                                                                            $.__get_entry(
                                                                                'name',
                                                                                ($) => abort(
                                                                                    ['no such entry', "name"]
                                                                                )
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null]
                                                                                )
                                                                            )
                                                                        ),
                                                                    })
                                                                )]
                                                            )
                                                        case 'state':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['state', _p_cc(
                                                                    v_unmarshalled_from_parse_tree.State(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a state', null]
                                                                        )
                                                                    ),
                                                                    ($) => _p.decide.text(
                                                                        $['option']['value'],
                                                                        ($t): t_out.Errors.L.type_.error.state => {
                                                                            switch ($t) {
                                                                                case 'more than 2 items':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ['more than 2 items', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null]
                                                                                            )
                                                                                        )]
                                                                                    )
                                                                                case 'missing state name':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ['missing state name', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null]
                                                                                            )
                                                                                        )]
                                                                                    )
                                                                                case 'state is not a string':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ['state is not a string', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null]
                                                                                            )
                                                                                        )]
                                                                                    )
                                                                                case 'missing value':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ['missing value', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null]
                                                                                            )
                                                                                        )]
                                                                                    )
                                                                                case 'unknown state':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ['unknown state', _p_cc(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null]
                                                                                                )
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'found': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'found',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "found"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a text', null]
                                                                                                        )
                                                                                                    )
                                                                                                ),
                                                                                                'expected': _p_cc(
                                                                                                    $.__get_entry(
                                                                                                        'expected',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "expected"]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a dictionary', null]
                                                                                                        )
                                                                                                    ).__d_map(
                                                                                                        ($, id) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null]
                                                                                                            )
                                                                                                        )
                                                                                                    )
                                                                                                ),
                                                                                            })
                                                                                        )]
                                                                                    )
                                                                                case 'missing data marker':
                                                                                    return _p_cc(
                                                                                        $['value'],
                                                                                        ($) => ['missing data marker', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null]
                                                                                            )
                                                                                        )]
                                                                                    )
                                                                                default:
                                                                                    return abort(
                                                                                        ['unknown option', $['option']['value']]
                                                                                    )
                                                                            }
                                                                        }
                                                                    )
                                                                )]
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']]
                                                            )
                                                    }
                                                }
                                            )
                                        )]
                                    )
                                case 'warning':
                                    return _p_cc(
                                        $['value'],
                                        ($) => ['warning', _p_cc(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null]
                                                )
                                            ),
                                            ($) => _p.decide.text(
                                                $['option']['value'],
                                                ($t): t_out.Errors.L.type_.warning => {
                                                    switch ($t) {
                                                        case 'expected apostrophed string':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['expected apostrophed string', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )]
                                                            )
                                                        case 'expected quoted string':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['expected quoted string', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )]
                                                            )
                                                        case 'expected backticked string':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['expected backticked string', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )]
                                                            )
                                                        case 'expected undelimited string':
                                                            return _p_cc(
                                                                $['value'],
                                                                ($) => ['expected undelimited string', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null]
                                                                    )
                                                                )]
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']]
                                                            )
                                                    }
                                                }
                                            )
                                        )]
                                    )
                                default:
                                    return abort(
                                        ['unknown option', $['option']['value']]
                                    )
                            }
                        }
                    )
                )
            ),
        })
    )
)
