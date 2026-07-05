import * as d_schema from "../generated/liana/schemas/schema/data/resolved.js"

export type Temp_Module_Specifier =
    | ['constrained', {
        'resolver': d_schema.Resolver
        'module resolver': {
            'entry': d_schema.Resolver_Modules.D,
            'id': string
        }
    }]
    | ['unconstrained', {
        'module': {
            'entry': d_schema.Module,
            'id': string
        }
    }]