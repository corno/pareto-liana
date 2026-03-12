
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/token/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_location from "../../location/transformers/astn_sealed_target"

export const Tokenizer_Result: t_signatures.Tokenizer_Result = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "leading trivia": _p_change_context(
            $['leading trivia'],
            ($) => Trivia(
                $,
            ),
        ),
        "tokens": _p_change_context(
            $['tokens'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => Annotated_Token(
                    $,
                ),
            )],
        ),
        "end": _p_change_context(
            $['end'],
            ($) => v_external_location.Location(
                $,
            ),
        ),
    },
)]]

export const Annotated_Token: t_signatures.Annotated_Token = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "start": _p_change_context(
            $['start'],
            ($) => v_external_location.Location(
                $,
            ),
        ),
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case '!':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '!',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '@':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '@',
                                    'value': ['nothing', null],
                                }),
                            )
                        case ':':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': ':',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '#':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '#',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '{':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '{',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '}':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '}',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '[':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '[',
                                    'value': ['nothing', null],
                                }),
                            )
                        case ']':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': ']',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '(':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '(',
                                    'value': ['nothing', null],
                                }),
                            )
                        case ')':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': ')',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '<':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '<',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '>':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '>',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '~':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '~',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '*':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '*',
                                    'value': ['nothing', null],
                                }),
                            )
                        case '|':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': '|',
                                    'value': ['nothing', null],
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
        ),
        "end": _p_change_context(
            $['end'],
            ($) => v_external_location.Location(
                $,
            ),
        ),
        "trailing trivia": _p_change_context(
            $['trailing trivia'],
            ($) => Trivia(
                $,
            ),
        ),
    },
)]]

export const Whitespace: t_signatures.Whitespace = ($) => ['optional', _p.decide.optional(
    $,
    ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
        {
            "range": _p_change_context(
                $['range'],
                ($) => v_external_location.Range(
                    $,
                ),
            ),
            "value": _p_change_context(
                $['value'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
        },
    )]]],
    () => ['not set', null],
)]

export const Trivia: t_signatures.Trivia = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "leading whitespace": _p_change_context(
            $['leading whitespace'],
            ($) => Whitespace(
                $,
            ),
        ),
        "comments": _p_change_context(
            $['comments'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "type": _p_change_context(
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
                                                }),
                                            )
                                        case 'block':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'block',
                                                    'value': ['nothing', null],
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
                        "content": _p_change_context(
                            $['content'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "range": _p_change_context(
                            $['range'],
                            ($) => v_external_location.Range(
                                $,
                            ),
                        ),
                        "trailing whitespace": _p_change_context(
                            $['trailing whitespace'],
                            ($) => Whitespace(
                                $,
                            ),
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Text: t_signatures.Text = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "value": _p_change_context(
            $['value'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "type": _p_change_context(
            $['type'],
            ($) => Text_Type(
                $,
            ),
        ),
    },
)]]

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
                    }),
                )
            case 'apostrophed':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'apostrophed',
                        'value': ['nothing', null],
                    }),
                )
            case 'undelimited':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'undelimited',
                        'value': ['nothing', null],
                    }),
                )
            case 'backticked':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'backticked',
                        'value': ['nothing', null],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]
