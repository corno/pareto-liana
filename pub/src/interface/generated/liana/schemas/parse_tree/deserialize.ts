
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Structural_Token_ {
    
    export type I = string
    
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
    
    export type I = string
    
    export type O = i_out.Text
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_ = (
    context: Text_.I,
    abort: _pi.Abort<Text_.E>,
) => Text_.O

export namespace Key_Value_Pairs_ {
    
    export type I = string
    
    export type O = i_out.Key_Value_Pairs
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Key_Value_Pairs_ = (
    context: Key_Value_Pairs_.I,
    abort: _pi.Abort<Key_Value_Pairs_.E>,
) => Key_Value_Pairs_.O

export namespace Elements_ {
    
    export type I = string
    
    export type O = i_out.Elements
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Elements_ = (
    context: Elements_.I,
    abort: _pi.Abort<Elements_.E>,
) => Elements_.O

export namespace Value_ {
    
    export type I = string
    
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
    
    export type I = string
    
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
    
    export type I = string
    
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
    Key_Value_Pairs_ as Key_Value_Pairs, 
    Elements_ as Elements, 
    Value_ as Value, 
    Content_ as Content, 
    Document_ as Document, 
}
