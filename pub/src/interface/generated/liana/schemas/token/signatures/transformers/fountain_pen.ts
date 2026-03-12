
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "../../data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace Tokenizer_Result_ {
    
    export type I = i_in.Tokenizer_Result
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Tokenizer_Result_ = (
    context: Tokenizer_Result_.I,
) => Tokenizer_Result_.O

export namespace Annotated_Token_ {
    
    export type I = i_in.Annotated_Token
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Annotated_Token_ = (
    context: Annotated_Token_.I,
) => Annotated_Token_.O

export namespace Whitespace_ {
    
    export type I = i_in.Whitespace
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Whitespace_ = (
    context: Whitespace_.I,
) => Whitespace_.O

export namespace Trivia_ {
    
    export type I = i_in.Trivia
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Trivia_ = (
    context: Trivia_.I,
) => Trivia_.O

export namespace Text_ {
    
    export type I = i_in.Text
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Text_ = (
    context: Text_.I,
) => Text_.O

export namespace Text_Type_ {
    
    export type I = i_in.Text_Type
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
) => Text_Type_.O

export { 
    Tokenizer_Result_ as Tokenizer_Result, 
    Annotated_Token_ as Annotated_Token, 
    Whitespace_ as Whitespace, 
    Trivia_ as Trivia, 
    Text_ as Text, 
    Text_Type_ as Text_Type, 
}
