
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/token/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"
export const Relative_Location: t_signatures.Relative_Location = ($,) => v_serialize.Document(v_marshall.Relative_Location($))
export const Location: t_signatures.Location = ($,) => v_serialize.Document(v_marshall.Location($))
export const Range: t_signatures.Range = ($,) => v_serialize.Document(v_marshall.Range($))
export const Whitespace: t_signatures.Whitespace = ($,) => v_serialize.Document(v_marshall.Whitespace($))
export const Trivia: t_signatures.Trivia = ($,) => v_serialize.Document(v_marshall.Trivia($))
export const Delimited_Text: t_signatures.Delimited_Text = ($,) => v_serialize.Document(v_marshall.Delimited_Text($))
export const Text_Type: t_signatures.Text_Type = ($,) => v_serialize.Document(v_marshall.Text_Type($))
export const Token_Type: t_signatures.Token_Type = ($,) => v_serialize.Document(v_marshall.Token_Type($))
export const Annotated_Token: t_signatures.Annotated_Token = ($,) => v_serialize.Document(v_marshall.Annotated_Token($))
export const Tokenizer_Result: t_signatures.Tokenizer_Result = ($,) => v_serialize.Document(v_marshall.Tokenizer_Result($))
