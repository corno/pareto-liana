
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/parse_tree/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_token from "../../token/transformers/astn_sealed_target"

import * as v_external_location from "../../location/transformers/astn_sealed_target"

export const Document: t_signatures.Document = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "header": _p_change_context(
            $['header'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                    {
                        "!": _p_change_context(
                            $['!'],
                            ($) => Structural_Token(
                                $,
                            ),
                        ),
                        "value": _p_change_context(
                            $['value'],
                            ($) => Value(
                                $,
                            ),
                        ),
                    },
                )]]],
                () => ['not set', null],
            )],
        ),
        "content": _p_change_context(
            $['content'],
            ($) => Content(
                $,
            ),
        ),
    },
)]]

export const Content: t_signatures.Content = ($) => Value(
    $,
)

export const Value: t_signatures.Value = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'concrete':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'concrete',
                                    'value': ['state', _p.decide.state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'dictionary':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'dictionary',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "{": _p_change_context(
                                                                        $['{'],
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "entries": _p_change_context(
                                                                        $['entries'],
                                                                        ($) => ID_Value_Pairs(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "}": _p_change_context(
                                                                        $['}'],
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'group':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'group',
                                                            'value': ['state', _p.decide.state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'concise':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'concise',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            "<": _p_change_context(
                                                                                                $['<'],
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            "items": _p_change_context(
                                                                                                $['items'],
                                                                                                ($) => Items(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ">": _p_change_context(
                                                                                                $['>'],
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        },
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        case 'verbose':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'verbose',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            "(": _p_change_context(
                                                                                                $['('],
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            "entries": _p_change_context(
                                                                                                $['entries'],
                                                                                                ($) => ID_Value_Pairs(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ")": _p_change_context(
                                                                                                $[')'],
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        },
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )],
                                                        }),
                                                    )
                                                case 'list':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'list',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "[": _p_change_context(
                                                                        $['['],
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "items": _p_change_context(
                                                                        $['items'],
                                                                        ($) => Items(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "]": _p_change_context(
                                                                        $[']'],
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'nothing':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'nothing',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "~": _p_change_context(
                                                                        $['~'],
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'optional':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'optional',
                                                            'value': ['state', _p.decide.state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'set':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'set',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            "*": _p_change_context(
                                                                                                $['*'],
                                                                                                ($) => Structural_Token(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            "value": _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => Value(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                        },
                                                                                    )]],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )],
                                                        }),
                                                    )
                                                case 'state':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'state',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "|": _p_change_context(
                                                                        $['|'],
                                                                        ($) => Structural_Token(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "status": _p_change_context(
                                                                        $['status'],
                                                                        ($) => ['state', _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'missing':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'missing',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        "#": _p_change_context(
                                                                                                            $['#'],
                                                                                                            ($) => Structural_Token(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    },
                                                                                                )]],
                                                                                            }),
                                                                                        )
                                                                                    case 'set':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'set',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        "option": _p_change_context(
                                                                                                            $['option'],
                                                                                                            ($) => Text(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "value": _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => Value(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    },
                                                                                                )]],
                                                                                            }),
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0],
                                                                                        )
                                                                                }
                                                                            },
                                                                        )],
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'text':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'text',
                                                            'value': Text(
                                                                $,
                                                            ),
                                                        }),
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                }),
                            )
                        case 'include':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'include',
                                    'value': Include(
                                        $,
                                    ),
                                }),
                            )
                        case 'missing':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'missing',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "#": _p_change_context(
                                                $['#'],
                                                ($) => Structural_Token(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Include: t_signatures.Include = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "@": _p_change_context(
            $['@'],
            ($) => Structural_Token(
                $,
            ),
        ),
        "path": _p_change_context(
            $['path'],
            ($) => Text(
                $,
            ),
        ),
    },
)]]

export const Structural_Token: t_signatures.Structural_Token = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "trailing trivia": _p_change_context(
            $['trailing trivia'],
            ($) => v_external_token.Trivia(
                $,
            ),
        ),
        "range": _p_change_context(
            $['range'],
            ($) => v_external_location.Range(
                $,
            ),
        ),
    },
)]]

export const Text: t_signatures.Text = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "trailing trivia": _p_change_context(
            $['trailing trivia'],
            ($) => v_external_token.Trivia(
                $,
            ),
        ),
        "range": _p_change_context(
            $['range'],
            ($) => v_external_location.Range(
                $,
            ),
        ),
        "token": _p_change_context(
            $['token'],
            ($) => v_external_token.Text(
                $,
            ),
        ),
    },
)]]

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ID_Value_Pair(
        $,
    ),
)]

export const ID_Value_Pair: t_signatures.ID_Value_Pair = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "id": _p_change_context(
            $['id'],
            ($) => Text(
                $,
            ),
        ),
        "value": _p_change_context(
            $['value'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                    {
                        ":": _p_change_context(
                            $[':'],
                            ($) => Structural_Token(
                                $,
                            ),
                        ),
                        "value": _p_change_context(
                            $['value'],
                            ($) => Value(
                                $,
                            ),
                        ),
                    },
                )]]],
                () => ['not set', null],
            )],
        ),
    },
)]]

export const Items: t_signatures.Items = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            "value": _p_change_context(
                $['value'],
                ($) => Value(
                    $,
                ),
            ),
        },
    )]],
)]
