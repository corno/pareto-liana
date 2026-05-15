import * as d_schema from "../generated/liana/schemas/schema/data/resolved"

export type Temp_Module_Specifier =
    | ['constrained', {
        'entry': d_schema.Resolver_Modules.D,
        'id': string
    }]
    | ['unconstrained', {
        'entry': d_schema.Module,
        'id': string
    }]