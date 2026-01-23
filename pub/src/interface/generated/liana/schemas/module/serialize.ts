
import * as _pi from "pareto-core/dist/interface"

import * as i_in from "./data/resolved"

export namespace Module_ {
    
    export type I = i_in.Module
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
) => Module_.O

export { 
    Module_ as Module, 
}
