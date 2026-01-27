
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Structural_Token_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Structural_Token
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Structural_Token_ = (
    context: Structural_Token_.I,
    abort: _pi.Abort<Structural_Token_.E>,
) => Structural_Token_.O

export namespace Text_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Text
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_ = (
    context: Text_.I,
    abort: _pi.Abort<Text_.E>,
) => Text_.O

export namespace ID_Value_Pairs_ {
    
    export type I = i_in.Value
    
    export type O = i_out.ID_Value_Pairs
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type ID_Value_Pairs_ = (
    context: ID_Value_Pairs_.I,
    abort: _pi.Abort<ID_Value_Pairs_.E>,
) => ID_Value_Pairs_.O

export namespace Items_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Items
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Items_ = (
    context: Items_.I,
    abort: _pi.Abort<Items_.E>,
) => Items_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
) => Value_.O

export namespace Content_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Content
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Content_ = (
    context: Content_.I,
    abort: _pi.Abort<Content_.E>,
) => Content_.O

export namespace Document_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: _pi.Abort<Document_.E>,
) => Document_.O

export { 
    Structural_Token_ as Structural_Token, 
    Text_ as Text, 
    ID_Value_Pairs_ as ID_Value_Pairs, 
    Items_ as Items, 
    Value_ as Value, 
    Content_ as Content, 
    Document_ as Document, 
}
