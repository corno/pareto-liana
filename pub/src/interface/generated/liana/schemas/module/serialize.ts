
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "./data/resolved"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace Module_ {
    
    export type I = i_in.Module
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
) => Module_.O

export { 
    Module_ as Module, 
}
