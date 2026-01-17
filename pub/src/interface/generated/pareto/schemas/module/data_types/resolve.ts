import * as _pi from "pareto-core-interface"
    
    import * as _i_resolve from "pareto-core-internals/dist/algorithm_types/refiner/resolve"
    import * as _i_resolved from "../data/resolved"
    import * as _i_unresolved from "../data/unresolved"
    
    // **** TYPES
    
    export type Module = (
        $$_: _i_unresolved.Module,
        abort: _pi.Abort<null>,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
        },
    ) => _i_resolved.Module
    
    export type Operations = (
        $$_: _i_unresolved.Operations,
        abort: _pi.Abort<null>,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
        },
    ) => _i_resolved.Operations