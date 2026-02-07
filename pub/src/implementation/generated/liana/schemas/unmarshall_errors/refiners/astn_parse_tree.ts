
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/unmarshall_errors/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/unmarshall_errors/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Errors: t_signatures.Errors = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'range': _p_change_context(
                $.__get_entry_deprecated(
                    'range',
                    ($) => abort(
                        ['no such entry', "range"],
                    ),
                ),
                ($) => Range(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
            'type': _p_change_context(
                $.__get_entry_deprecated(
                    'type',
                    ($) => abort(
                        ['no such entry', "type"],
                    ),
                ),
                ($) => _p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            ['expected a state', null],
                        ),
                    ),
                    ($) => _p.decide.text(
                        $['option']['value'],
                        ($t): t_out.Errors.L.type_ => {
                            switch ($t) {
                                case 'error':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['error', _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
                                                ),
                                            ),
                                            ($) => _p.decide.text(
                                                $['option']['value'],
                                                ($t): t_out.Errors.L.type_.error => {
                                                    switch ($t) {
                                                        case 'invalid value type':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['invalid value type', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'expected': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'expected',
                                                                                ($) => abort(
                                                                                    ['no such entry', "expected"],
                                                                                ),
                                                                            ),
                                                                            ($) => _p.list.from.list(
                                                                                v_unmarshalled_from_parse_tree.List(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a list', null],
                                                                                    ),
                                                                                ),
                                                                            ).map(
                                                                                ($) => _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a state', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p.decide.text(
                                                                                        $['option']['value'],
                                                                                        ($t): t_out.Errors.L.type_.error.invalid_value_type.expected.L => {
                                                                                            switch ($t) {
                                                                                                case 'text':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['text', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null],
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'verbose group':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['verbose group', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null],
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'concise group':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['concise group', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null],
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'dictionary':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null],
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'not set':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null],
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'set':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null],
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'list':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['list', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null],
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                case 'state':
                                                                                                    return _p_change_context(
                                                                                                        $['value'],
                                                                                                        ($) => ['state', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null],
                                                                                                            ),
                                                                                                        )],
                                                                                                    )
                                                                                                default:
                                                                                                    return abort(
                                                                                                        ['unknown option', $['option']['value']],
                                                                                                    )
                                                                                            }
                                                                                        },
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                )],
                                                            )
                                                        case 'duplicate property':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['duplicate property', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'name': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'name',
                                                                                ($) => abort(
                                                                                    ['no such entry', "name"],
                                                                                ),
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                )],
                                                            )
                                                        case 'missing property':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['missing property', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'name': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'name',
                                                                                ($) => abort(
                                                                                    ['no such entry', "name"],
                                                                                ),
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                )],
                                                            )
                                                        case 'superfluous property':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['superfluous property', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a group', null],
                                                                        ),
                                                                    ),
                                                                    ($) => ({
                                                                        'name': _p_change_context(
                                                                            $.__get_entry_deprecated(
                                                                                'name',
                                                                                ($) => abort(
                                                                                    ['no such entry', "name"],
                                                                                ),
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a text', null],
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }),
                                                                )],
                                                            )
                                                        case 'state':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['state', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.State(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a state', null],
                                                                        ),
                                                                    ),
                                                                    ($) => _p.decide.text(
                                                                        $['option']['value'],
                                                                        ($t): t_out.Errors.L.type_.error.state => {
                                                                            switch ($t) {
                                                                                case 'more than 2 items':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['more than 2 items', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null],
                                                                                            ),
                                                                                        )],
                                                                                    )
                                                                                case 'missing state name':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['missing state name', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null],
                                                                                            ),
                                                                                        )],
                                                                                    )
                                                                                case 'state is not a string':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['state is not a string', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null],
                                                                                            ),
                                                                                        )],
                                                                                    )
                                                                                case 'missing value':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['missing value', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null],
                                                                                            ),
                                                                                        )],
                                                                                    )
                                                                                case 'unknown state':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['unknown state', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    ['expected a group', null],
                                                                                                ),
                                                                                            ),
                                                                                            ($) => ({
                                                                                                'found': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'found',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "found"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a text', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                                'expected': _p_change_context(
                                                                                                    $.__get_entry_deprecated(
                                                                                                        'expected',
                                                                                                        ($) => abort(
                                                                                                            ['no such entry', "expected"],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => _p.dictionary.from.dictionary(
                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a dictionary', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    ).map(
                                                                                                        ($, id) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a nothing', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                ),
                                                                                            }),
                                                                                        )],
                                                                                    )
                                                                                case 'missing data marker':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['missing data marker', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a nothing', null],
                                                                                            ),
                                                                                        )],
                                                                                    )
                                                                                default:
                                                                                    return abort(
                                                                                        ['unknown option', $['option']['value']],
                                                                                    )
                                                                            }
                                                                        },
                                                                    ),
                                                                )],
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        )],
                                    )
                                case 'warning':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['warning', _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
                                                ),
                                            ),
                                            ($) => _p.decide.text(
                                                $['option']['value'],
                                                ($t): t_out.Errors.L.type_.warning => {
                                                    switch ($t) {
                                                        case 'expected apostrophed string':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['expected apostrophed string', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'expected quoted string':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['expected quoted string', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'expected backticked string':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['expected backticked string', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        case 'expected undelimited string':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ['expected undelimited string', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        )],
                                    )
                                default:
                                    return abort(
                                        ['unknown option', $['option']['value']],
                                    )
                            }
                        },
                    ),
                ),
            ),
        }),
    ),
)

export const Location: t_signatures.Location = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'relative': _p_change_context(
            $.__get_entry_deprecated(
                'relative',
                ($) => abort(
                    ['no such entry', "relative"],
                ),
            ),
            ($) => Relative_Location(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'absolute': _p_change_context(
            $.__get_entry_deprecated(
                'absolute',
                ($) => abort(
                    ['no such entry', "absolute"],
                ),
            ),
            ($) => v_deserialize_number.deserialize(
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
                    ['not a valid number', null],
                ),
            ),
        ),
    }),
)

export const Relative_Location: t_signatures.Relative_Location = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'line': _p_change_context(
            $.__get_entry_deprecated(
                'line',
                ($) => abort(
                    ['no such entry', "line"],
                ),
            ),
            ($) => v_deserialize_number.deserialize(
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
                    ['not a valid number', null],
                ),
            ),
        ),
        'column': _p_change_context(
            $.__get_entry_deprecated(
                'column',
                ($) => abort(
                    ['no such entry', "column"],
                ),
            ),
            ($) => v_deserialize_number.deserialize(
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
                    ['not a valid number', null],
                ),
            ),
        ),
    }),
)

export const Range: t_signatures.Range = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'start': _p_change_context(
            $.__get_entry_deprecated(
                'start',
                ($) => abort(
                    ['no such entry', "start"],
                ),
            ),
            ($) => Location(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'end': _p_change_context(
            $.__get_entry_deprecated(
                'end',
                ($) => abort(
                    ['no such entry', "end"],
                ),
            ),
            ($) => Location(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)
