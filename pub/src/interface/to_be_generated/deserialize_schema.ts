import * as d_parse_result from "astn-core/dist/interface/generated/pareto/schemas/deserialize_parse_tree/data"


export type Error =
    | ['parse error', d_parse_result.Error]
    | ['resolve errorx', null]