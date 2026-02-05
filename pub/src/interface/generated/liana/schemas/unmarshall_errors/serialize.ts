    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_in from "./data"
    
    export namespace Errors_ {
        
        export type I = i_in.Errors
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Errors_ = (
        context: Errors_.I,
    ) => Errors_.O
    
    export namespace Location_ {
        
        export type I = i_in.Location
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Location_ = (
        context: Location_.I,
    ) => Location_.O
    
    export namespace Relative_Location_ {
        
        export type I = i_in.Relative_Location
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Relative_Location_ = (
        context: Relative_Location_.I,
    ) => Relative_Location_.O
    
    export namespace Range_ {
        
        export type I = i_in.Range
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Range_ = (
        context: Range_.I,
    ) => Range_.O
    
    export { 
        Errors_ as Errors, 
        Location_ as Location, 
        Relative_Location_ as Relative_Location, 
        Range_ as Range, 
    }
