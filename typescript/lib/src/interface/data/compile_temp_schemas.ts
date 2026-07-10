import type * as p_ from 'pareto-core/interface/data'

import type * as d_schema from "../../modules/schema/interface/data/unresolved.js"
import type * as d_resolve from "liana-core/interface/data/resolve"

export type Package = {
    // 'id': string,
    'target path': string,
    'package': d_schema.Package
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
    | ['could not deserialize module', d_resolve.Error]