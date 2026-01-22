import * as d_parse_result from "astn-core/dist/interface/generated/liana/schemas/deserialize_parse_tree/data"
import * as d_resolve from "../generated/liana/generic/resolve"


export type Error =
    | ['parse error', d_parse_result.Error]
    | ['resolve errorx', d_resolve.Error]