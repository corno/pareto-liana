
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Relative_Location_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Relative_Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Relative_Location_ = (
    context: Relative_Location_.I,
    abort: _pi.Abort<Relative_Location_.E>,
) => Relative_Location_.O

export namespace Location_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Location_ = (
    context: Location_.I,
    abort: _pi.Abort<Location_.E>,
) => Location_.O

export namespace Range_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Range
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Range_ = (
    context: Range_.I,
    abort: _pi.Abort<Range_.E>,
) => Range_.O

export namespace Whitespace_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Whitespace
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Whitespace_ = (
    context: Whitespace_.I,
    abort: _pi.Abort<Whitespace_.E>,
) => Whitespace_.O

export namespace Trivia_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Trivia
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Trivia_ = (
    context: Trivia_.I,
    abort: _pi.Abort<Trivia_.E>,
) => Trivia_.O

export namespace Delimited_Text_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Delimited_Text
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Delimited_Text_ = (
    context: Delimited_Text_.I,
    abort: _pi.Abort<Delimited_Text_.E>,
) => Delimited_Text_.O

export namespace Text_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Text_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
    abort: _pi.Abort<Text_Type_.E>,
) => Text_Type_.O

export namespace Token_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Token_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Token_Type_ = (
    context: Token_Type_.I,
    abort: _pi.Abort<Token_Type_.E>,
) => Token_Type_.O

export namespace Annotated_Token_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Annotated_Token
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Annotated_Token_ = (
    context: Annotated_Token_.I,
    abort: _pi.Abort<Annotated_Token_.E>,
) => Annotated_Token_.O

export namespace Tokenizer_Result_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Tokenizer_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Tokenizer_Result_ = (
    context: Tokenizer_Result_.I,
    abort: _pi.Abort<Tokenizer_Result_.E>,
) => Tokenizer_Result_.O

export { 
    Relative_Location_ as Relative_Location, 
    Location_ as Location, 
    Range_ as Range, 
    Whitespace_ as Whitespace, 
    Trivia_ as Trivia, 
    Delimited_Text_ as Delimited_Text, 
    Text_Type_ as Text_Type, 
    Token_Type_ as Token_Type, 
    Annotated_Token_ as Annotated_Token, 
    Tokenizer_Result_ as Tokenizer_Result, 
}
