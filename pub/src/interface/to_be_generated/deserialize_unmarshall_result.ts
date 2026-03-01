import * as d_parse_result from "astn-core/dist/interface/generated/liana/schemas/deserialize_parse_tree/data"
import * as d_deserialize_schema from "liana-core/dist/interface/to_be_generated/deserialize_resolved"

export type Parameters = {
    'instance path': string
    'tab size': number
    'schema': {
        'content': string
        'path': string
    }
}

export type Error =
    | ['schema error', {
        'error': d_deserialize_schema.Error,
        'file location': string
    }]
    | ['parse error', d_parse_result.Error]
    | ['unmarshall error', null]