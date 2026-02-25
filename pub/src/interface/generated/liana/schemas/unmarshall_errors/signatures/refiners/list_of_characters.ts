
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data"

export namespace Errors_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Errors
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Errors_ = (
    context: Errors_.I,
    abort: _pi.Abort<Errors_.E>,
    parameters: {
        readonly 'document resource identifier': Errors_.P.document_resource_identifier
        readonly 'tab size': Errors_.P.tab_size
    },
) => Errors_.O

export { 
    Errors_ as Errors, 
}
