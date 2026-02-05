    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_generic from "astn-core/dist/interface/to_be_generated/deserialize"
    
    import * as i_out from "./data/unresolved"
    
    export namespace Module_ {
        
        export type I = string
        
        export type O = i_out.Module
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Module_ = (
        context: Module_.I,
        abort: _pi.Abort<Module_.E>,
        parameters: {
            readonly 'document resource identifier': Module_.P.document_resource_identifier
            readonly 'tab size': Module_.P.tab_size
        },
    ) => Module_.O
    
    export { 
        Module_ as Module, 
    }
