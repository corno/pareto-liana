
import type * as s_resolve from "liana-core/interface/data/resolve"
import type * as s_read_file from "pareto-filesystem-unrestricted-api/interface/data/fs_unrestricted_read_file"
import type * as s_deserialize from "liana-core/interface/data/deserialize"
import type * as s_path from "pareto-resources/interface/data/fs_unrestricted_path"


export type Error =
    | ['could not log', null]
    | ['could not read source', s_read_file.Error]
    | ['could not remove interface', null]
    | ['could not remove implementation', null]
    | ['could not write interface', null]
    | ['could not write implementation', null]
    | ['could not copy generic implementation', null]
    | ['could not copy core interface', null]
    | ['could not resolve module', {
        'location': s_path.Node_Path,
        'error': s_resolve.Error
    }]
    | ['could not deserialize', {
        'location': s_path.Node_Path,
        'error': s_deserialize.Error
    }]

export type Parameters = {
    'source': s_path.Node_Path,
    'target': s_path.Context_Path,
    'type':
    | ['module specification', null]
    | ['package', null]
}