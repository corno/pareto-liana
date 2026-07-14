import type * as p_ from 'pareto-core/interface/schema'

import type * as s_schema from "../../submodules/schema/interface/schemas/unresolved.js"
import type * as s_resolve from "./resolve.js"

export type Package = {
    // 'id': string,
    'target path': string,
    'package': s_schema.Package
}

export type Packages = p_.Dictionary<Package>

export type Error =
    | ['could not log', null]
    | ['could not remove interface', null]
    | ['could not remove implementation', null]
    | ['could not write interface', null]
    | ['could not write implementation', null]
    | ['could not copy generic implementation', null]
    | ['could not copy core interface', null]
    | ['could not deserialize module', s_resolve.Error]