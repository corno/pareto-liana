
import type * as d_resolve from "liana-core/interface/data/resolve"
import type * as d_read_file from "pareto-filesystem-unrestricted-api/interface/data/fs_unrestricted_read_file"
import type * as d_deserialize from "liana-core/interface/data/deserialize"
import type * as d_path from "pareto-resources/interface/data/fs_unrestricted_path"


export type Error =
    | ['could not log', null]
    | ['could not read source', d_read_file.Error]
    | ['could not remove interface', null]
    | ['could not remove implementation', null]
    | ['could not write interface', null]
    | ['could not write implementation', null]
    | ['could not copy generic implementation', null]
    | ['could not copy core interface', null]
    | ['could not resolve module', {
        'location': d_path.Node_Path,
        'error': d_resolve.Error
    }]
    | ['could not deserialize', {
        'location': d_path.Node_Path,
        'error': d_deserialize.Error
    }]

export type Parameters = {
    'source': d_path.Node_Path,
    'target': d_path.Context_Path,
    'type':
    | ['module specification', null]
    | ['package', null]
}