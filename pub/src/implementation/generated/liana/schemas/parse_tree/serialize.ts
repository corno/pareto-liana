
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/parse_tree/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

import * as v_r_token from "../token/serialize"
export const Structural_Token: t_signatures.Structural_Token = ($,) => v_serialize.Document(v_marshall.Structural_Token($))
export const Text: t_signatures.Text = ($,) => v_serialize.Document(v_marshall.Text($))
export const Key_Value_Pairs: t_signatures.Key_Value_Pairs = ($,) => v_serialize.Document(v_marshall.Key_Value_Pairs($))
export const Elements: t_signatures.Elements = ($,) => v_serialize.Document(v_marshall.Elements($))
export const Value: t_signatures.Value = ($,) => v_serialize.Document(v_marshall.Value($))
export const Content: t_signatures.Content = ($,) => v_serialize.Document(v_marshall.Content($))
export const Document: t_signatures.Document = ($,) => v_serialize.Document(v_marshall.Document($))
