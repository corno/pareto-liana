
import * as _p from 'pareto-core/dist/expression'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/token/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Tokenizer_Result: t_signatures.Tokenizer_Result = ($) => v_serialize.Document(
    v_marshall.Tokenizer_Result(
        $,
    ),
)

export const Annotated_Token: t_signatures.Annotated_Token = ($) => v_serialize.Document(
    v_marshall.Annotated_Token(
        $,
    ),
)

export const Token_Type: t_signatures.Token_Type = ($) => v_serialize.Document(
    v_marshall.Token_Type(
        $,
    ),
)

export const Delimited_Text: t_signatures.Delimited_Text = ($) => v_serialize.Document(
    v_marshall.Delimited_Text(
        $,
    ),
)

export const Whitespace: t_signatures.Whitespace = ($) => v_serialize.Document(
    v_marshall.Whitespace(
        $,
    ),
)

export const Trivia: t_signatures.Trivia = ($) => v_serialize.Document(
    v_marshall.Trivia(
        $,
    ),
)

export const Text_Type: t_signatures.Text_Type = ($) => v_serialize.Document(
    v_marshall.Text_Type(
        $,
    ),
)
