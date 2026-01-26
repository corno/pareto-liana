
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Relative_Location_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Relative_Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Relative_Location_ = (
    context: Relative_Location_.I,
    abort: _pi.Abort<Relative_Location_.E>,
) => Relative_Location_.O

export namespace Location_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Location_ = (
    context: Location_.I,
    abort: _pi.Abort<Location_.E>,
) => Location_.O

export namespace Range_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Range
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Range_ = (
    context: Range_.I,
    abort: _pi.Abort<Range_.E>,
) => Range_.O

export namespace Errors_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Errors
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Errors_ = (
    context: Errors_.I,
    abort: _pi.Abort<Errors_.E>,
) => Errors_.O

export { 
    Relative_Location_ as Relative_Location, 
    Location_ as Location, 
    Range_ as Range, 
    Errors_ as Errors, 
}
