import * as _pi from "pareto-core-interface"
    
    import * as _i_out from "./data"
    import * as _i_in from "astn-core/dist/interface/generated/pareto/schemas/parse_tree/data"
    
    // **** TYPES
    
    export type Structural_Token = (
        $$_: _i_in.Value,
        $$_p: {
            
        },
    ) => _i_out.Structural_Token
    
    export type String = (
        $$_: _i_in.Value,
        $$_p: {
            
        },
    ) => _i_out.Text
    
    export type Key_Value_Pairs = (
        $$_: _i_in.Value,
        $$_p: {
            
        },
    ) => _i_out.Key_Value_Pairs
    
    export type Elements = (
        $$_: _i_in.Value,
        $$_p: {
            
        },
    ) => _i_out.Elements
    
    export type Concrete_Value = (
        $$_: _i_in.Value,
        $$_p: {
            
        },
    ) => _i_out.Value._type.concrete
    
    export type Value = (
        $$_: _i_in.Value,
        $$_p: {
            
        },
    ) => _i_out.Value
    
    export type Content = (
        $$_: _i_in.Value,
        $$_p: {
            
        },
    ) => _i_out.Content
    
    export type Document = (
        $$_: _i_in.Value,
        $$_p: {
            
        },
    ) => _i_out.Document
    
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace Structural_Token {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in.Value
        
        export namespace PARAMS {
            
            export namespace value_deserializers {
            }
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out.Structural_Token
    }
    
    export namespace String {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in.Value
        
        export namespace PARAMS {
            

        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out.Text
    }
    
    export namespace Key_Value_Pairs {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in.Value
        
        export namespace PARAMS {
            
  
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out.Key_Value_Pairs
    }
    
    export namespace Elements {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in.Value
        
        export namespace PARAMS {
            

        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out.Elements
    }
    
    export namespace Concrete_Value {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in.Value
        
        export namespace PARAMS {
            

        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out.Value._type.concrete
    }
    
    export namespace Value {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in.Value
        
        export namespace PARAMS {
            

        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out.Value
    }
    
    export namespace Content {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in.Value
        
        export namespace PARAMS {
            

        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out.Content
    }
    
    export namespace Document {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in.Value
        
        export namespace PARAMS {
            

        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out.Document
    }