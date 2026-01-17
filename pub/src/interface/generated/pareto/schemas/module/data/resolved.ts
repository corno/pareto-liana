
import * as _pi from "pareto-core-interface"

import * as i__location from "../../../core/location"

import * as i__imports_schema from "../../schema/data/resolved"

export namespace Operations_ {
    
    export namespace D {
        
        export namespace operation {
            
            export type type_parameters = i__imports_schema.Type_Parameters
            
            export type context = i__imports_schema.Type_Node
            
            export namespace parameters {
                
                export type D = i__imports_schema.Type_Node
                
            }
            
            export type parameters = _pi.Dictionary<parameters.D>
            
            export type result = i__imports_schema.Type_Node
            
        }
        
        export type operation = {
            readonly 'type parameters': operation.type_parameters
            readonly 'context': operation.context
            readonly 'parameters': operation.parameters
            readonly 'result': operation.result
        }
        
        export type _set = Operations_
        
    }
    
    export type D = 
        | readonly ['operation', D.operation]
        | readonly ['set', D._set]
    
}

export type Operations_ = _pi.Dictionary<Operations_.D>

export namespace Module_ {
    
    export type schema_tree = i__imports_schema.Schema_Tree
    
    export type operations = Operations_
    
}

export type Module_ = {
    readonly 'schema tree': Module_.schema_tree
    readonly 'operations': Module_.operations
}

export { 
    Operations_ as Operations, 
    Module_ as Module, 
}
