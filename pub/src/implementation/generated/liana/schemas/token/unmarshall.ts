
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/token/unmarshall"

import * as t_external_location from "../location/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_location from "../location/unmarshall"

export const Whitespace: t_signatures.Whitespace = ($, abort) => _p_cc(
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
    })
)

export const Trivia: t_signatures.Trivia = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'leading whitespace': _p_cc(
            $.__get_entry(
                'leading whitespace',
                ($) => abort(
                    ['no such entry', "leading whitespace"]
                )
            ),
            ($) => Whitespace(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'comments': _p_cc(
            $.__get_entry(
                'comments',
                ($) => abort(
                    ['no such entry', "comments"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.List(
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
                        'content': _p_cc(
                            $.__get_entry(
                                'content',
                                ($) => abort(
                                    ['no such entry', "content"]
                                )
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
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
                        'trailing whitespace': _p_cc(
                            $.__get_entry(
                                'trailing whitespace',
                                ($) => abort(
                                    ['no such entry', "trailing whitespace"]
                                )
                            ),
                            ($) => Whitespace(
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

export const Delimited_Text: t_signatures.Delimited_Text = ($, abort) => v_unmarshalled_from_parse_tree.Text(
    $,
    ($) => abort(
        ['expected a text', null]
    )
)

export const Text_Type: t_signatures.Text_Type = ($, abort) => _p_unreachable_code_path(
)

export const Token_Type: t_signatures.Token_Type = ($, abort) => _p_unreachable_code_path(
)

export const Annotated_Token: t_signatures.Annotated_Token = ($, abort) => _p_cc(
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
            ($) => v_external_location.Location(
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
            ($) => Token_Type(
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
            ($) => v_external_location.Location(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'trailing trivia': _p_cc(
            $.__get_entry(
                'trailing trivia',
                ($) => abort(
                    ['no such entry', "trailing trivia"]
                )
            ),
            ($) => Trivia(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Tokenizer_Result: t_signatures.Tokenizer_Result = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'leading trivia': _p_cc(
            $.__get_entry(
                'leading trivia',
                ($) => abort(
                    ['no such entry', "leading trivia"]
                )
            ),
            ($) => Trivia(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'tokens': _p_cc(
            $.__get_entry(
                'tokens',
                ($) => abort(
                    ['no such entry', "tokens"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.List(
                $,
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => Annotated_Token(
                    $,
                    ($) => abort(
                        $
                    )
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
            ($) => v_external_location.Location(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)
