
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data/unresolved"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Module_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Module
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
) => Module_.O

export { 
    Module_ as Module, 
}
