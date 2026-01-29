
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/parse_tree/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_token from "../token/marshall"

import * as v_external_location from "../location/marshall"

export const Structural_Token: t_signatures.Structural_Token = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'trailing trivia': _p_cc(
            $['trailing trivia'],
            ($) => v_external_token.Trivia(
                $
            )
        ),
        'range': _p_cc(
            $['range'],
            ($) => v_external_location.Range(
                $
            )
        ),
    }
)]]

export const Text: t_signatures.Text = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'trailing trivia': _p_cc(
            $['trailing trivia'],
            ($) => v_external_token.Trivia(
                $
            )
        ),
        'range': _p_cc(
            $['range'],
            ($) => v_external_location.Range(
                $
            )
        ),
        'value': _p_cc(
            $['value'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }]
        ),
        'type': _p_cc(
            $['type'],
            ($) => v_external_token.Text_Type(
                $
            )
        ),
    }
)]]

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($) => ['list', $.__l_map(
    ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'id': _p_cc(
                $['id'],
                ($) => Text(
                    $
                )
            ),
            'value': _p_cc(
                $['value'],
                ($) => ['optional', $.__decide(
                    ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                        {
                            ':': _p_cc(
                                $[':'],
                                ($) => Structural_Token(
                                    $
                                )
                            ),
                            'value': _p_cc(
                                $['value'],
                                ($) => Value(
                                    $
                                )
                            ),
                        }
                    )]]],
                    () => ['not set', null]
                )]
            ),
        }
    )]]
)]

export const Items: t_signatures.Items = ($) => ['list', $.__l_map(
    ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'value': _p_cc(
                $['value'],
                ($) => Value(
                    $
                )
            ),
        }
    )]]
)]

export const Value: t_signatures.Value = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'type': _p_cc(
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
                                                                    '{': _p_cc(
                                                                        $['{'],
                                                                        ($) => Structural_Token(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'entries': _p_cc(
                                                                        $['entries'],
                                                                        ($) => ID_Value_Pairs(
                                                                            $
                                                                        )
                                                                    ),
                                                                    '}': _p_cc(
                                                                        $['}'],
                                                                        ($) => Structural_Token(
                                                                            $
                                                                        )
                                                                    ),
                                                                }
                                                            )]],
                                                        })
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
                                                                                            '<': _p_cc(
                                                                                                $['<'],
                                                                                                ($) => Structural_Token(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'items': _p_cc(
                                                                                                $['items'],
                                                                                                ($) => Items(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            '>': _p_cc(
                                                                                                $['>'],
                                                                                                ($) => Structural_Token(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        case 'verbose':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'verbose',
                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                        {
                                                                                            '(': _p_cc(
                                                                                                $['('],
                                                                                                ($) => Structural_Token(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'entries': _p_cc(
                                                                                                $['entries'],
                                                                                                ($) => ID_Value_Pairs(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            ')': _p_cc(
                                                                                                $[')'],
                                                                                                ($) => Structural_Token(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )],
                                                        })
                                                    )
                                                case 'list':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'list',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    '[': _p_cc(
                                                                        $['['],
                                                                        ($) => Structural_Token(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'items': _p_cc(
                                                                        $['items'],
                                                                        ($) => Items(
                                                                            $
                                                                        )
                                                                    ),
                                                                    ']': _p_cc(
                                                                        $[']'],
                                                                        ($) => Structural_Token(
                                                                            $
                                                                        )
                                                                    ),
                                                                }
                                                            )]],
                                                        })
                                                    )
                                                case 'nothing':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'nothing',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    '~': _p_cc(
                                                                        $['~'],
                                                                        ($) => Structural_Token(
                                                                            $
                                                                        )
                                                                    ),
                                                                }
                                                            )]],
                                                        })
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
                                                                                            '*': _p_cc(
                                                                                                $['*'],
                                                                                                ($) => Structural_Token(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                            'value': _p_cc(
                                                                                                $['value'],
                                                                                                ($) => Value(
                                                                                                    $
                                                                                                )
                                                                                            ),
                                                                                        }
                                                                                    )]],
                                                                                })
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )],
                                                        })
                                                    )
                                                case 'state':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'state',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    '|': _p_cc(
                                                                        $['|'],
                                                                        ($) => Structural_Token(
                                                                            $
                                                                        )
                                                                    ),
                                                                    'status': _p_cc(
                                                                        $['status'],
                                                                        ($) => ['state', _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'missing data':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'missing data',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        '#': _p_cc(
                                                                                                            $['#'],
                                                                                                            ($) => Structural_Token(
                                                                                                                $
                                                                                                            )
                                                                                                        ),
                                                                                                    }
                                                                                                )]],
                                                                                            })
                                                                                        )
                                                                                    case 'set':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'set',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        'option': _p_cc(
                                                                                                            $['option'],
                                                                                                            ($) => Text(
                                                                                                                $
                                                                                                            )
                                                                                                        ),
                                                                                                        'value': _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => Value(
                                                                                                                $
                                                                                                            )
                                                                                                        ),
                                                                                                    }
                                                                                                )]],
                                                                                            })
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0]
                                                                                        )
                                                                                }
                                                                            }
                                                                        )]
                                                                    ),
                                                                }
                                                            )]],
                                                        })
                                                    )
                                                case 'text':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'text',
                                                            'value': Text(
                                                                $
                                                            ),
                                                        })
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    )],
                                })
                            )
                        case 'include':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'include',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            '@': _p_cc(
                                                $['@'],
                                                ($) => Structural_Token(
                                                    $
                                                )
                                            ),
                                            'path': _p_cc(
                                                $['path'],
                                                ($) => Text(
                                                    $
                                                )
                                            ),
                                        }
                                    )]],
                                })
                            )
                        case 'missing data':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'missing data',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            '#': _p_cc(
                                                $['#'],
                                                ($) => Structural_Token(
                                                    $
                                                )
                                            ),
                                        }
                                    )]],
                                })
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )]
        ),
    }
)]]

export const Content: t_signatures.Content = ($) => Value(
    $
)

export const Document: t_signatures.Document = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'header': _p_cc(
            $['header'],
            ($) => ['optional', $.__decide(
                ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                    {
                        '!': _p_cc(
                            $['!'],
                            ($) => Structural_Token(
                                $
                            )
                        ),
                        'value': _p_cc(
                            $['value'],
                            ($) => Value(
                                $
                            )
                        ),
                    }
                )]]],
                () => ['not set', null]
            )]
        ),
        'content': _p_cc(
            $['content'],
            ($) => Content(
                $
            )
        ),
    }
)]]
