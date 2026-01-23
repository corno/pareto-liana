
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

export namespace Module_ {
    
    export type I = i_unresolved.Module
    
    export type O = i_resolved.Module
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
    abort: _pi.Abort<Module_.E>,
    lookups: null,
    parameters: null,
) => Module_.O

export namespace Operations_ {
    
    export type I = i_unresolved.Operations
    
    export type O = i_resolved.Operations
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Operations_ = (
    context: Operations_.I,
    abort: _pi.Abort<Operations_.E>,
    lookups: null,
    parameters: null,
) => Operations_.O

export { 
    Module_ as Module, 
    Operations_ as Operations, 
}
