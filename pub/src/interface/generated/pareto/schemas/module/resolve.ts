
import * as _pi from "pareto-core-interface"

import * as i_resolve from "pareto-core-internals/dist/algorithm_types/refiner/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

export namespace Module_ {
    
    export type I = i_unresolved.Module
    
    export type O = i_resolved.Module
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    $$_: Module_.I,
    $$_lookups: null,
    $$_p: null,
) => Module_.O

export namespace Operations_ {
    
    export type I = i_unresolved.Operations
    
    export type O = i_resolved.Operations
    
    export namespace P {
        
    }
    
}

export type Operations_ = (
    $$_: Operations_.I,
    $$_lookups: null,
    $$_p: null,
) => Operations_.O

export { 
    Module_ as Module, 
    Operations_ as Operations, 
}
