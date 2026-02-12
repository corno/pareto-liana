
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "./data"

export namespace Range_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Location_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Relative_Location_ {
    
    export type I = i_in.List_of_Characters
    
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

export { 
    Range_ as Range, 
    Location_ as Location, 
    Relative_Location_ as Relative_Location, 
}
