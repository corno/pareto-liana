import * as d_parse_result from "astn-core/dist/interface/generated/pareto/schemas/deserialize_parse_tree/data"
import * as d_deserialize_schema from "../to_be_generated/deserialize_schema"

export type Error =
    | ['schema error', {
        'error': d_deserialize_schema.Error,
        'file location': string
    }]
    | ['parse error', d_parse_result.Error]
    | ['unmarshall error', null]