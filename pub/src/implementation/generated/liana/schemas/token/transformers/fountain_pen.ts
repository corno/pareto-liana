
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/token/signatures/transformers/fountain_pen"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

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

export const Text: t_signatures.Text = ($) => v_serialize.Document(
    v_marshall.Text(
        $,
    ),
)

export const Text_Type: t_signatures.Text_Type = ($) => v_serialize.Document(
    v_marshall.Text_Type(
        $,
    ),
)
