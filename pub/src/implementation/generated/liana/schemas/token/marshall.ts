
import * as _p from "pareto-core/dist/transformer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/token/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_location from "../location/marshall"

export const Whitespace: t_signatures.Whitespace = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'range': _p_cc(
            $['range'],
            ($) => v_external_location.Range(
                $
            )
        ),
        'value': _p_cc(
            $['value'],
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
    })
)]]

export const Trivia: t_signatures.Trivia = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'leading whitespace': _p_cc(
            $['leading whitespace'],
            ($) => Whitespace(
                $
            )
        ),
        'comments': _p_cc(
            $['comments'],
            ($) => ['list', $.__l_map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'type': _p_cc(
                            $['type'],
                            ($) => ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'line':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'line',
                                                    'value': ['nothing', null],
                                                })
                                            )
                                        case 'block':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'block',
                                                    'value': ['nothing', null],
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
                        'content': _p_cc(
                            $['content'],
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                        'range': _p_cc(
                            $['range'],
                            ($) => v_external_location.Range(
                                $
                            )
                        ),
                        'trailing whitespace': _p_cc(
                            $['trailing whitespace'],
                            ($) => Whitespace(
                                $
                            )
                        ),
                    })
                )]]
            )]
        ),
    })
)]]

export const Delimited_Text: t_signatures.Delimited_Text = ($) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]

export const Text_Type: t_signatures.Text_Type = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'quoted':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'quoted',
                        'value': ['nothing', null],
                    })
                )
            case 'apostrophed':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'apostrophed',
                        'value': ['nothing', null],
                    })
                )
            case 'undelimited':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'undelimited',
                        'value': ['nothing', null],
                    })
                )
            case 'backticked':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'backticked',
                        'value': ['nothing', null],
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]

export const Token_Type: t_signatures.Token_Type = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case '!':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '!',
                        'value': ['nothing', null],
                    })
                )
            case '@':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '@',
                        'value': ['nothing', null],
                    })
                )
            case ':':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': ':',
                        'value': ['nothing', null],
                    })
                )
            case '#':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '#',
                        'value': ['nothing', null],
                    })
                )
            case '{':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '{',
                        'value': ['nothing', null],
                    })
                )
            case '}':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '}',
                        'value': ['nothing', null],
                    })
                )
            case '[':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '[',
                        'value': ['nothing', null],
                    })
                )
            case ']':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': ']',
                        'value': ['nothing', null],
                    })
                )
            case '(':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '(',
                        'value': ['nothing', null],
                    })
                )
            case ')':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': ')',
                        'value': ['nothing', null],
                    })
                )
            case '<':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '<',
                        'value': ['nothing', null],
                    })
                )
            case '>':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '>',
                        'value': ['nothing', null],
                    })
                )
            case '~':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '~',
                        'value': ['nothing', null],
                    })
                )
            case '*':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '*',
                        'value': ['nothing', null],
                    })
                )
            case '|':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': '|',
                        'value': ['nothing', null],
                    })
                )
            case 'text':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'text',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            ({
                                'value': _p_cc(
                                    $['value'],
                                    ($) => Delimited_Text(
                                        $
                                    )
                                ),
                                'type': _p_cc(
                                    $['type'],
                                    ($) => Text_Type(
                                        $
                                    )
                                ),
                            })
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

export const Annotated_Token: t_signatures.Annotated_Token = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'start': _p_cc(
            $['start'],
            ($) => v_external_location.Location(
                $
            )
        ),
        'type': _p_cc(
            $['type'],
            ($) => Token_Type(
                $
            )
        ),
        'end': _p_cc(
            $['end'],
            ($) => v_external_location.Location(
                $
            )
        ),
        'trailing trivia': _p_cc(
            $['trailing trivia'],
            ($) => Trivia(
                $
            )
        ),
    })
)]]

export const Tokenizer_Result: t_signatures.Tokenizer_Result = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'leading trivia': _p_cc(
            $['leading trivia'],
            ($) => Trivia(
                $
            )
        ),
        'tokens': _p_cc(
            $['tokens'],
            ($) => ['list', $.__l_map(
                ($) => Annotated_Token(
                    $
                )
            )]
        ),
        'end': _p_cc(
            $['end'],
            ($) => v_external_location.Location(
                $
            )
        ),
    })
)]]
