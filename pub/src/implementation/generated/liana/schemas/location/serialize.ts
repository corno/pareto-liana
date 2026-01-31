
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/location/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Range: t_signatures.Range = ($) => v_serialize.Document(
    v_marshall.Range(
        $
    )
)

export const Location: t_signatures.Location = ($) => v_serialize.Document(
    v_marshall.Location(
        $
    )
)

export const Relative_Location: t_signatures.Relative_Location = ($) => v_serialize.Document(
    v_marshall.Relative_Location(
        $
    )
)
