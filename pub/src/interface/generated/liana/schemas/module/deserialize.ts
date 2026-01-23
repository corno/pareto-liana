
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data/unresolved"

export namespace Module_ {
    
    export type I = string
    
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
