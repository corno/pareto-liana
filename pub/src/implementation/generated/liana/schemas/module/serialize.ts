
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/module/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

import * as v_r_schema from "../schema/serialize"
export const Module: t_signatures.Module = ($) => v_serialize.Document(
    v_marshall.Module(
        $
    )
)
