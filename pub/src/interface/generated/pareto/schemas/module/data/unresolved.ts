
import * as _pi from "pareto-core-interface"

import * as i__location from "../../../core/location"

import * as i__imports_schema from "../../schema/data/unresolved"

export namespace Operations_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
                    export namespace operation {
                        
                        export type type_parameters = i__imports_schema.Type_Parameters
                        
                        export type context = i__imports_schema.Type_Node
                        
                        export namespace parameters {
                            
                            export type location = i__location.Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Location
                                    
                                    export type entry = i__imports_schema.Type_Node
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly 'entry': D.entry
                                }
                                
                            }
                            
                            export type dictionary = _pi.Dictionary<dictionary.D>
                            
                        }
                        
                        export type parameters = {
                            readonly 'location': parameters.location
                            readonly 'dictionary': parameters.dictionary
                        }
                        
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
                
                export type state_group = 
                    | readonly ['operation', state_group.operation]
                    | readonly ['set', state_group._set]
                
            }
            
            export type entry = {
                readonly 'location': entry.location
                readonly 'state group': entry.state_group
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Operations_ = {
    readonly 'location': Operations_.location
    readonly 'dictionary': Operations_.dictionary
}

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
