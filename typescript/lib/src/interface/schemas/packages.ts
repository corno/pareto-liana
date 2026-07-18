import type * as p_ from 'pareto-core/interface/schema'

import type * as s_schema from "../../modules/liana.generated/modules/schema/interface/schemas/unresolved.js"

export type Package = {
    // 'id': string,
    'target path': string,
    'package': s_schema.Package
}

export type Packages = p_.Dictionary<Package>