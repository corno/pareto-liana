
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

export namespace Relative_Location_ {
    
    export type I = string
    
    export type O = i_out.Relative_Location
    
    export namespace P {
        
    }
    
}

export type Relative_Location_ = (
    context: Relative_Location_.I,
) => Relative_Location_.O

export namespace Location_ {
    
    export type I = string
    
    export type O = i_out.Location
    
    export namespace P {
        
    }
    
}

export type Location_ = (
    context: Location_.I,
) => Location_.O

export namespace Range_ {
    
    export type I = string
    
    export type O = i_out.Range
    
    export namespace P {
        
    }
    
}

export type Range_ = (
    context: Range_.I,
) => Range_.O

export namespace Errors_ {
    
    export type I = string
    
    export type O = i_out.Errors
    
    export namespace P {
        
    }
    
}

export type Errors_ = (
    context: Errors_.I,
) => Errors_.O

export { 
    Relative_Location_ as Relative_Location, 
    Location_ as Location, 
    Range_ as Range, 
    Errors_ as Errors, 
}
