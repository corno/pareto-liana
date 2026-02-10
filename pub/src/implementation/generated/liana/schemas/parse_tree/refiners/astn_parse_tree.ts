
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/parse_tree/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/parse_tree/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

import * as v_external_token from "../../token/refiners/astn_parse_tree"

import * as v_external_location from "../../location/refiners/astn_parse_tree"

export const Document: t_signatures.Document = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'header': _p_change_context(
            $.__get_entry_deprecated(
                'header',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "header"],
                    ),
                },
            ),
            ($) => _p.optional.from.optional(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null],
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
                        '!': _p_change_context(
                            $.__get_entry_deprecated(
                                '!',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "!"],
                                    ),
                                },
                            ),
                            ($) => Structural_Token(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'value': _p_change_context(
                            $.__get_entry_deprecated(
                                'value',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "value"],
                                    ),
                                },
                            ),
                            ($) => Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                    }),
                ),
            ),
        ),
        'content': _p_change_context(
            $.__get_entry_deprecated(
                'content',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "content"],
                    ),
                },
            ),
            ($) => Content(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Content: t_signatures.Content = ($, abort) => Value(
    $,
    ($) => abort(
        $,
    ),
)

export const Value: t_signatures.Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'type': _p_change_context(
            $.__get_entry_deprecated(
                'type',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "type"],
                    ),
                },
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
                    ($t): t_out.Value.type_ => {
                        switch ($t) {
                            case 'concrete':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['concrete', _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Value.type_.concrete => {
                                                switch ($t) {
                                                    case 'dictionary':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ['dictionary', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    '{': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            '{',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "{"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'entries': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'entries',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "entries"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => ID_Value_Pairs(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    '}': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            '}',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "}"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            )],
                                                        )
                                                    case 'group':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ['group', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Value.type_.concrete.group => {
                                                                        switch ($t) {
                                                                            case 'concise':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ['concise', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            '<': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    '<',
                                                                                                    {
                                                                                                        no_such_entry: ($) => abort(
                                                                                                            ['no such entry', "<"],
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'items': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'items',
                                                                                                    {
                                                                                                        no_such_entry: ($) => abort(
                                                                                                            ['no such entry', "items"],
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Items(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            '>': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    '>',
                                                                                                    {
                                                                                                        no_such_entry: ($) => abort(
                                                                                                            ['no such entry', ">"],
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    )],
                                                                                )
                                                                            case 'verbose':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ['verbose', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            '(': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    '(',
                                                                                                    {
                                                                                                        no_such_entry: ($) => abort(
                                                                                                            ['no such entry', "("],
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'entries': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'entries',
                                                                                                    {
                                                                                                        no_such_entry: ($) => abort(
                                                                                                            ['no such entry', "entries"],
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ID_Value_Pairs(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            ')': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    ')',
                                                                                                    {
                                                                                                        no_such_entry: ($) => abort(
                                                                                                            ['no such entry', ")"],
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
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
                                                    case 'list':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ['list', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    '[': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            '[',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "["],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'items': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'items',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "items"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => Items(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    ']': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            ']',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "]"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            )],
                                                        )
                                                    case 'nothing':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ['nothing', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    '~': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            '~',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "~"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }),
                                                            )],
                                                        )
                                                    case 'optional':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ['optional', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.State(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a state', null],
                                                                    ),
                                                                ),
                                                                ($) => _p.decide.text(
                                                                    $['option']['value'],
                                                                    ($t): t_out.Value.type_.concrete.optional => {
                                                                        switch ($t) {
                                                                            case 'set':
                                                                                return _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ['set', _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a group', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => ({
                                                                                            '*': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    '*',
                                                                                                    {
                                                                                                        no_such_entry: ($) => abort(
                                                                                                            ['no such entry', "*"],
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'value': _p_change_context(
                                                                                                $.__get_entry_deprecated(
                                                                                                    'value',
                                                                                                    {
                                                                                                        no_such_entry: ($) => abort(
                                                                                                            ['no such entry', "value"],
                                                                                                        ),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }),
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
                                                    case 'state':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ['state', _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Group(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a group', null],
                                                                    ),
                                                                ),
                                                                ($) => ({
                                                                    '|': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            '|',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "|"],
                                                                                ),
                                                                            },
                                                                        ),
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'status': _p_change_context(
                                                                        $.__get_entry_deprecated(
                                                                            'status',
                                                                            {
                                                                                no_such_entry: ($) => abort(
                                                                                    ['no such entry', "status"],
                                                                                ),
                                                                            },
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
                                                                                ($t): t_out.Value.type_.concrete.state.status => {
                                                                                    switch ($t) {
                                                                                        case 'missing data':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['missing data', _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        '#': _p_change_context(
                                                                                                            $.__get_entry_deprecated(
                                                                                                                '#',
                                                                                                                {
                                                                                                                    no_such_entry: ($) => abort(
                                                                                                                        ['no such entry', "#"],
                                                                                                                    ),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Structural_Token(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                )],
                                                                                            )
                                                                                        case 'set':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['set', _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'option': _p_change_context(
                                                                                                            $.__get_entry_deprecated(
                                                                                                                'option',
                                                                                                                {
                                                                                                                    no_such_entry: ($) => abort(
                                                                                                                        ['no such entry', "option"],
                                                                                                                    ),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                        'value': _p_change_context(
                                                                                                            $.__get_entry_deprecated(
                                                                                                                'value',
                                                                                                                {
                                                                                                                    no_such_entry: ($) => abort(
                                                                                                                        ['no such entry', "value"],
                                                                                                                    ),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Value(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
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
                                                            )],
                                                        )
                                                    case 'text':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ['text', Text(
                                                                $,
                                                                ($) => abort(
                                                                    $,
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
                            case 'include':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['include', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            '@': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    '@',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "@"],
                                                        ),
                                                    },
                                                ),
                                                ($) => Structural_Token(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'path': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'path',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "path"],
                                                        ),
                                                    },
                                                ),
                                                ($) => Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }),
                                    )],
                                )
                            case 'missing data':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['missing data', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            '#': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    '#',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "#"],
                                                        ),
                                                    },
                                                ),
                                                ($) => Structural_Token(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }),
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
)

export const Structural_Token: t_signatures.Structural_Token = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'trailing trivia': _p_change_context(
            $.__get_entry_deprecated(
                'trailing trivia',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "trailing trivia"],
                    ),
                },
            ),
            ($) => v_external_token.Trivia(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'range': _p_change_context(
            $.__get_entry_deprecated(
                'range',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "range"],
                    ),
                },
            ),
            ($) => v_external_location.Range(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Text: t_signatures.Text = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'trailing trivia': _p_change_context(
            $.__get_entry_deprecated(
                'trailing trivia',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "trailing trivia"],
                    ),
                },
            ),
            ($) => v_external_token.Trivia(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'range': _p_change_context(
            $.__get_entry_deprecated(
                'range',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "range"],
                    ),
                },
            ),
            ($) => v_external_location.Range(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'value': _p_change_context(
            $.__get_entry_deprecated(
                'value',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "value"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'type': _p_change_context(
            $.__get_entry_deprecated(
                'type',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "type"],
                    ),
                },
            ),
            ($) => v_external_token.Text_Type(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($, abort) => _p.list.from.list(
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
            'id': _p_change_context(
                $.__get_entry_deprecated(
                    'id',
                    {
                        no_such_entry: ($) => abort(
                            ['no such entry', "id"],
                        ),
                    },
                ),
                ($) => Text(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
            'value': _p_change_context(
                $.__get_entry_deprecated(
                    'value',
                    {
                        no_such_entry: ($) => abort(
                            ['no such entry', "value"],
                        ),
                    },
                ),
                ($) => _p.optional.from.optional(
                    v_unmarshalled_from_parse_tree.Optional(
                        $,
                        ($) => abort(
                            ['expected an optional', null],
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
                            ':': _p_change_context(
                                $.__get_entry_deprecated(
                                    ':',
                                    {
                                        no_such_entry: ($) => abort(
                                            ['no such entry', ":"],
                                        ),
                                    },
                                ),
                                ($) => Structural_Token(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                            'value': _p_change_context(
                                $.__get_entry_deprecated(
                                    'value',
                                    {
                                        no_such_entry: ($) => abort(
                                            ['no such entry', "value"],
                                        ),
                                    },
                                ),
                                ($) => Value(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        }),
                    ),
                ),
            ),
        }),
    ),
)

export const Items: t_signatures.Items = ($, abort) => _p.list.from.list(
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
            'value': _p_change_context(
                $.__get_entry_deprecated(
                    'value',
                    {
                        no_such_entry: ($) => abort(
                            ['no such entry', "value"],
                        ),
                    },
                ),
                ($) => Value(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
        }),
    ),
)
