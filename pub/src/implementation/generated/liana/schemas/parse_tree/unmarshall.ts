
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/parse_tree/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/parse_tree/data"

import * as t_external_token from "../token/unmarshall"

import * as t_external_location from "../location/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_token from "../token/unmarshall"

import * as v_external_location from "../location/unmarshall"

export const Structural_Token: t_signatures.Structural_Token = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'trailing trivia': _p_cc(
            $.__get_entry(
                'trailing trivia',
                ($) => abort(
                    ['no such entry', "trailing trivia"]
                )
            ),
            ($) => v_external_token.Trivia(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'range': _p_cc(
            $.__get_entry(
                'range',
                ($) => abort(
                    ['no such entry', "range"]
                )
            ),
            ($) => v_external_location.Range(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Text: t_signatures.Text = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'trailing trivia': _p_cc(
            $.__get_entry(
                'trailing trivia',
                ($) => abort(
                    ['no such entry', "trailing trivia"]
                )
            ),
            ($) => v_external_token.Trivia(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'range': _p_cc(
            $.__get_entry(
                'range',
                ($) => abort(
                    ['no such entry', "range"]
                )
            ),
            ($) => v_external_location.Range(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'value': _p_cc(
            $.__get_entry(
                'value',
                ($) => abort(
                    ['no such entry', "value"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
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
            ($) => v_external_token.Text_Type(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($, abort) => v_unmarshalled_from_parse_tree.List(
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
            'id': _p_cc(
                $.__get_entry(
                    'id',
                    ($) => abort(
                        ['no such entry', "id"]
                    )
                ),
                ($) => Text(
                    $,
                    ($) => abort(
                        $
                    )
                )
            ),
            'value': _p_cc(
                $.__get_entry(
                    'value',
                    ($) => abort(
                        ['no such entry', "value"]
                    )
                ),
                ($) => v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null]
                    )
                ).__o_map(
                    ($) => _p_cc(
                        v_unmarshalled_from_parse_tree.Group(
                            $,
                            ($) => abort(
                                ['expected a group', null]
                            )
                        ),
                        ($) => ({
                            ':': _p_cc(
                                $.__get_entry(
                                    ':',
                                    ($) => abort(
                                        ['no such entry', ":"]
                                    )
                                ),
                                ($) => Structural_Token(
                                    $,
                                    ($) => abort(
                                        $
                                    )
                                )
                            ),
                            'value': _p_cc(
                                $.__get_entry(
                                    'value',
                                    ($) => abort(
                                        ['no such entry', "value"]
                                    )
                                ),
                                ($) => Value(
                                    $,
                                    ($) => abort(
                                        $
                                    )
                                )
                            ),
                        })
                    )
                )
            ),
        })
    )
)

export const Items: t_signatures.Items = ($, abort) => v_unmarshalled_from_parse_tree.List(
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
            'value': _p_cc(
                $.__get_entry(
                    'value',
                    ($) => abort(
                        ['no such entry', "value"]
                    )
                ),
                ($) => Value(
                    $,
                    ($) => abort(
                        $
                    )
                )
            ),
        })
    )
)

export const Value: t_signatures.Value = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
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
                    ($t): t_out.Value.type_ => {
                        switch ($t) {
                            case 'concrete':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['concrete', _p_cc(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null]
                                            )
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Value.type_.concrete => {
                                                switch ($t) {
                                                    case 'dictionary':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ['dictionary', _p_cc(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null]
                                                                    )
                                                                ),
                                                                ($) => ({
                                                                    '{': _p_cc(
                                                                        $.__get_entry(
                                                                            '{',
                                                                            ($) => abort(
                                                                                ['no such entry', "{"]
                                                                            )
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                    'entries': _p_cc(
                                                                        $.__get_entry(
                                                                            'entries',
                                                                            ($) => abort(
                                                                                ['no such entry', "entries"]
                                                                            )
                                                                        ),
                                                                        ($) => ID_Value_Pairs(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                    '}': _p_cc(
                                                                        $.__get_entry(
                                                                            '}',
                                                                            ($) => abort(
                                                                                ['no such entry', "}"]
                                                                            )
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            )]
                                                        )
                                                    case 'group':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ['group', _p_cc(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null]
                                                                    )
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Value.type_.concrete.group => {
                                                                        switch ($t) {
                                                                            case 'concise':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ['concise', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            '<': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    '<',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "<"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'items': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'items',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "items"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Items(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            '>': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    '>',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', ">"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                        })
                                                                                    )]
                                                                                )
                                                                            case 'verbose':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ['verbose', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            '(': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    '(',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "("]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'entries': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'entries',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "entries"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => ID_Value_Pairs(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            ')': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    ')',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', ")"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                        })
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
                                                    case 'list':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ['list', _p_cc(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null]
                                                                    )
                                                                ),
                                                                ($) => ({
                                                                    '[': _p_cc(
                                                                        $.__get_entry(
                                                                            '[',
                                                                            ($) => abort(
                                                                                ['no such entry', "["]
                                                                            )
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                    'items': _p_cc(
                                                                        $.__get_entry(
                                                                            'items',
                                                                            ($) => abort(
                                                                                ['no such entry', "items"]
                                                                            )
                                                                        ),
                                                                        ($) => Items(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                    ']': _p_cc(
                                                                        $.__get_entry(
                                                                            ']',
                                                                            ($) => abort(
                                                                                ['no such entry', "]"]
                                                                            )
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            )]
                                                        )
                                                    case 'nothing':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ['nothing', _p_cc(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null]
                                                                    )
                                                                ),
                                                                ($) => ({
                                                                    '~': _p_cc(
                                                                        $.__get_entry(
                                                                            '~',
                                                                            ($) => abort(
                                                                                ['no such entry', "~"]
                                                                            )
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                })
                                                            )]
                                                        )
                                                    case 'optional':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ['optional', _p_cc(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null]
                                                                    )
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Value.type_.concrete.optional => {
                                                                        switch ($t) {
                                                                            case 'set':
                                                                                return _p_cc(
                                                                                    $['value'],
                                                                                    ($) => ['set', _p_cc(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null]
                                                                                            )
                                                                                        ),
                                                                                        ($) => ({
                                                                                            '*': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    '*',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "*"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                            'value': _p_cc(
                                                                                                $.__get_entry(
                                                                                                    'value',
                                                                                                    ($) => abort(
                                                                                                        ['no such entry', "value"]
                                                                                                    )
                                                                                                ),
                                                                                                ($) => Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )
                                                                                            ),
                                                                                        })
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
                                                    case 'state':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ['state', _p_cc(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null]
                                                                    )
                                                                ),
                                                                ($) => ({
                                                                    '|': _p_cc(
                                                                        $.__get_entry(
                                                                            '|',
                                                                            ($) => abort(
                                                                                ['no such entry', "|"]
                                                                            )
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $
                                                                            )
                                                                        )
                                                                    ),
                                                                    'status': _p_cc(
                                                                        $.__get_entry(
                                                                            'status',
                                                                            ($) => abort(
                                                                                ['no such entry', "status"]
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
                                                                                ($t): t_out.Value.type_.concrete.state.status => {
                                                                                    switch ($t) {
                                                                                        case 'missing data':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['missing data', _p_cc(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        '#': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                '#',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "#"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Structural_Token(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                    })
                                                                                                )]
                                                                                            )
                                                                                        case 'set':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['set', _p_cc(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'option': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'option',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "option"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'value': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'value',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "value"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => Value(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                    })
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
                                                            )]
                                                        )
                                                    case 'text':
                                                        return _p_cc(
                                                            $['value'],
                                                            ($) => ['text', Text(
                                                                $,
                                                                ($) => abort(
                                                                    $
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
                            case 'include':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['include', _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            '@': _p_cc(
                                                $.__get_entry(
                                                    '@',
                                                    ($) => abort(
                                                        ['no such entry', "@"]
                                                    )
                                                ),
                                                ($) => Structural_Token(
                                                    $,
                                                    ($) => abort(
                                                        $
                                                    )
                                                )
                                            ),
                                            'path': _p_cc(
                                                $.__get_entry(
                                                    'path',
                                                    ($) => abort(
                                                        ['no such entry', "path"]
                                                    )
                                                ),
                                                ($) => Text(
                                                    $,
                                                    ($) => abort(
                                                        $
                                                    )
                                                )
                                            ),
                                        })
                                    )]
                                )
                            case 'missing data':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['missing data', _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            '#': _p_cc(
                                                $.__get_entry(
                                                    '#',
                                                    ($) => abort(
                                                        ['no such entry', "#"]
                                                    )
                                                ),
                                                ($) => Structural_Token(
                                                    $,
                                                    ($) => abort(
                                                        $
                                                    )
                                                )
                                            ),
                                        })
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

export const Content: t_signatures.Content = ($, abort) => Value(
    $,
    ($) => abort(
        $
    )
)

export const Document: t_signatures.Document = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'header': _p_cc(
            $.__get_entry(
                'header',
                ($) => abort(
                    ['no such entry', "header"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Optional(
                $,
                ($) => abort(
                    ['expected an optional', null]
                )
            ).__o_map(
                ($) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ),
                    ($) => ({
                        '!': _p_cc(
                            $.__get_entry(
                                '!',
                                ($) => abort(
                                    ['no such entry', "!"]
                                )
                            ),
                            ($) => Structural_Token(
                                $,
                                ($) => abort(
                                    $
                                )
                            )
                        ),
                        'value': _p_cc(
                            $.__get_entry(
                                'value',
                                ($) => abort(
                                    ['no such entry', "value"]
                                )
                            ),
                            ($) => Value(
                                $,
                                ($) => abort(
                                    $
                                )
                            )
                        ),
                    })
                )
            )
        ),
        'content': _p_cc(
            $.__get_entry(
                'content',
                ($) => abort(
                    ['no such entry', "content"]
                )
            ),
            ($) => Content(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)
