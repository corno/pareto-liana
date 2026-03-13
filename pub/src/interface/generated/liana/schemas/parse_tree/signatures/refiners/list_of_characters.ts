
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data"

export namespace Document_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: _pi.Abort<Document_.E>,
    parameters: {
        readonly 'tab size': Document_.P.tab_size
    },
) => Document_.O

export namespace Content_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Content
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Content_ = (
    context: Content_.I,
    abort: _pi.Abort<Content_.E>,
    parameters: {
        readonly 'tab size': Content_.P.tab_size
    },
) => Content_.O

export namespace Value_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
    parameters: {
        readonly 'tab size': Value_.P.tab_size
    },
) => Value_.O

export namespace Include_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Include
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Include_ = (
    context: Include_.I,
    abort: _pi.Abort<Include_.E>,
    parameters: {
        readonly 'tab size': Include_.P.tab_size
    },
) => Include_.O

export namespace Structural_Token_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Structural_Token
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Structural_Token_ = (
    context: Structural_Token_.I,
    abort: _pi.Abort<Structural_Token_.E>,
    parameters: {
        readonly 'tab size': Structural_Token_.P.tab_size
    },
) => Structural_Token_.O

export namespace Text_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Text
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Text_ = (
    context: Text_.I,
    abort: _pi.Abort<Text_.E>,
    parameters: {
        readonly 'tab size': Text_.P.tab_size
    },
) => Text_.O

export namespace ID_Value_Pairs_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.ID_Value_Pairs
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type ID_Value_Pairs_ = (
    context: ID_Value_Pairs_.I,
    abort: _pi.Abort<ID_Value_Pairs_.E>,
    parameters: {
        readonly 'tab size': ID_Value_Pairs_.P.tab_size
    },
) => ID_Value_Pairs_.O

export namespace ID_Value_Pair_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.ID_Value_Pair
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type ID_Value_Pair_ = (
    context: ID_Value_Pair_.I,
    abort: _pi.Abort<ID_Value_Pair_.E>,
    parameters: {
        readonly 'tab size': ID_Value_Pair_.P.tab_size
    },
) => ID_Value_Pair_.O

export namespace Items_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Items
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Items_ = (
    context: Items_.I,
    abort: _pi.Abort<Items_.E>,
    parameters: {
        readonly 'tab size': Items_.P.tab_size
    },
) => Items_.O

export { 
    Document_ as Document, 
    Content_ as Content, 
    Value_ as Value, 
    Include_ as Include, 
    Structural_Token_ as Structural_Token, 
    Text_ as Text, 
    ID_Value_Pairs_ as ID_Value_Pairs, 
    ID_Value_Pair_ as ID_Value_Pair, 
    Items_ as Items, 
}
