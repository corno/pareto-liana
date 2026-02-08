
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/token/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/token/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_location from "../../location/refiners/astn_parse_tree"

export const Tokenizer_Result: t_signatures.Tokenizer_Result = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'leading trivia': _p_change_context(
            $.__get_entry_deprecated(
                'leading trivia',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "leading trivia"],
                    ),
                },
            ),
            ($) => Trivia(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'tokens': _p_change_context(
            $.__get_entry_deprecated(
                'tokens',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "tokens"],
                    ),
                },
            ),
            ($) => _p.list.from.list(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null],
                    ),
                ),
            ).map(
                ($) => Annotated_Token(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
        ),
        'end': _p_change_context(
            $.__get_entry_deprecated(
                'end',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "end"],
                    ),
                },
            ),
            ($) => v_external_location.Location(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Annotated_Token: t_signatures.Annotated_Token = ($, abort) => _p_change_context(
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
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "start"],
                    ),
                },
            ),
            ($) => v_external_location.Location(
                $,
                ($) => abort(
                    $,
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
            ($) => Token_Type(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'end': _p_change_context(
            $.__get_entry_deprecated(
                'end',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "end"],
                    ),
                },
            ),
            ($) => v_external_location.Location(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'trailing trivia': _p_change_context(
            $.__get_entry_deprecated(
                'trailing trivia',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "trailing trivia"],
                    ),
                },
            ),
            ($) => Trivia(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Token_Type: t_signatures.Token_Type = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Token_Type => {
            switch ($t) {
                case '!':
                    return _p_change_context(
                        $['value'],
                        ($) => ['!', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '@':
                    return _p_change_context(
                        $['value'],
                        ($) => ['@', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case ':':
                    return _p_change_context(
                        $['value'],
                        ($) => [':', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '#':
                    return _p_change_context(
                        $['value'],
                        ($) => ['#', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '{':
                    return _p_change_context(
                        $['value'],
                        ($) => ['{', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '}':
                    return _p_change_context(
                        $['value'],
                        ($) => ['}', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '[':
                    return _p_change_context(
                        $['value'],
                        ($) => ['[', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case ']':
                    return _p_change_context(
                        $['value'],
                        ($) => [']', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '(':
                    return _p_change_context(
                        $['value'],
                        ($) => ['(', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case ')':
                    return _p_change_context(
                        $['value'],
                        ($) => [')', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '<':
                    return _p_change_context(
                        $['value'],
                        ($) => ['<', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '>':
                    return _p_change_context(
                        $['value'],
                        ($) => ['>', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '~':
                    return _p_change_context(
                        $['value'],
                        ($) => ['~', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '*':
                    return _p_change_context(
                        $['value'],
                        ($) => ['*', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case '|':
                    return _p_change_context(
                        $['value'],
                        ($) => ['|', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'text':
                    return _p_change_context(
                        $['value'],
                        ($) => ['text', _p_change_context(
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
                                    ($) => Delimited_Text(
                                        $,
                                        ($) => abort(
                                            $,
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
                                    ($) => Text_Type(
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
)

export const Delimited_Text: t_signatures.Delimited_Text = ($, abort) => v_unmarshalled_from_parse_tree.Text(
    $,
    ($) => abort(
        ['expected a text', null],
    ),
)

export const Whitespace: t_signatures.Whitespace = ($, abort) => _p_change_context(
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
    }),
)

export const Trivia: t_signatures.Trivia = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'leading whitespace': _p_change_context(
            $.__get_entry_deprecated(
                'leading whitespace',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "leading whitespace"],
                    ),
                },
            ),
            ($) => Whitespace(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'comments': _p_change_context(
            $.__get_entry_deprecated(
                'comments',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "comments"],
                    ),
                },
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
                                    ($t): t_out.Trivia.comments.L.type_ => {
                                        switch ($t) {
                                            case 'line':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['line', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    )],
                                                )
                                            case 'block':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ['block', v_unmarshalled_from_parse_tree.Nothing(
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
                        'content': _p_change_context(
                            $.__get_entry_deprecated(
                                'content',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "content"],
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
                        'trailing whitespace': _p_change_context(
                            $.__get_entry_deprecated(
                                'trailing whitespace',
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "trailing whitespace"],
                                    ),
                                },
                            ),
                            ($) => Whitespace(
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
)

export const Text_Type: t_signatures.Text_Type = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Text_Type => {
            switch ($t) {
                case 'quoted':
                    return _p_change_context(
                        $['value'],
                        ($) => ['quoted', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'apostrophed':
                    return _p_change_context(
                        $['value'],
                        ($) => ['apostrophed', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'undelimited':
                    return _p_change_context(
                        $['value'],
                        ($) => ['undelimited', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'backticked':
                    return _p_change_context(
                        $['value'],
                        ($) => ['backticked', v_unmarshalled_from_parse_tree.Nothing(
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
)
