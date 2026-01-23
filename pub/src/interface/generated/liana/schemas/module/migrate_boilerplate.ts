
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data/unresolved"

import * as i_in from "./data/resolved"

export namespace Operations_ {
    
    export type I = i_in.Operations
    
    export type O = i_out.Operations
    
    export namespace P {
        
    }
    
}

export type Operations_ = (
    context: Operations_.I,
) => Operations_.O

export namespace Module_ {
    
    export type I = i_in.Module
    
    export type O = i_out.Module
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
) => Module_.O

export { 
    Operations_ as Operations, 
    Module_ as Module, 
}
