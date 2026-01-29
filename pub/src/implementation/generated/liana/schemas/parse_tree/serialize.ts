
import * as _p from "pareto-core/dist/serializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/parse_tree/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

import * as v_r_token from "../token/serialize"

import * as v_r_location from "../location/serialize"

export const Structural_Token: t_signatures.Structural_Token = ($) => v_serialize.Document(
    v_marshall.Structural_Token(
        $
    )
)

export const Text: t_signatures.Text = ($) => v_serialize.Document(
    v_marshall.Text(
        $
    )
)

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($) => v_serialize.Document(
    v_marshall.ID_Value_Pairs(
        $
    )
)

export const Items: t_signatures.Items = ($) => v_serialize.Document(
    v_marshall.Items(
        $
    )
)

export const Value: t_signatures.Value = ($) => v_serialize.Document(
    v_marshall.Value(
        $
    )
)

export const Content: t_signatures.Content = ($) => v_serialize.Document(
    v_marshall.Content(
        $
    )
)

export const Document: t_signatures.Document = ($) => v_serialize.Document(
    v_marshall.Document(
        $
    )
)
