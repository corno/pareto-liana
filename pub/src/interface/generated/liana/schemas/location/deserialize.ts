
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Relative_Location_ {
    
    export type I = string
    
    export type O = i_out.Relative_Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Relative_Location_ = (
    context: Relative_Location_.I,
    abort: _pi.Abort<Relative_Location_.E>,
    parameters: {
        readonly 'document resource identifier': Relative_Location_.P.document_resource_identifier
        readonly 'tab size': Relative_Location_.P.tab_size
    },
) => Relative_Location_.O

export namespace Location_ {
    
    export type I = string
    
    export type O = i_out.Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Location_ = (
    context: Location_.I,
    abort: _pi.Abort<Location_.E>,
    parameters: {
        readonly 'document resource identifier': Location_.P.document_resource_identifier
        readonly 'tab size': Location_.P.tab_size
    },
) => Location_.O

export namespace Range_ {
    
    export type I = string
    
    export type O = i_out.Range
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Range_ = (
    context: Range_.I,
    abort: _pi.Abort<Range_.E>,
    parameters: {
        readonly 'document resource identifier': Range_.P.document_resource_identifier
        readonly 'tab size': Range_.P.tab_size
    },
) => Range_.O

export { 
    Relative_Location_ as Relative_Location, 
    Location_ as Location, 
    Range_ as Range, 
}
