
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Relative_Location_ {
    
    export type I = string
    
    export type O = i_out.Relative_Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Relative_Location_ = (
    context: Relative_Location_.I,
    abort: _pi.Abort<Relative_Location_.E>,
    parameters: {
        readonly 'document resource identifier': Relative_Location_.P.document_resource_identifier
        readonly 'indentation': Relative_Location_.P.indentation
    },
) => Relative_Location_.O

export namespace Location_ {
    
    export type I = string
    
    export type O = i_out.Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Location_ = (
    context: Location_.I,
    abort: _pi.Abort<Location_.E>,
    parameters: {
        readonly 'document resource identifier': Location_.P.document_resource_identifier
        readonly 'indentation': Location_.P.indentation
    },
) => Location_.O

export namespace Range_ {
    
    export type I = string
    
    export type O = i_out.Range
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Range_ = (
    context: Range_.I,
    abort: _pi.Abort<Range_.E>,
    parameters: {
        readonly 'document resource identifier': Range_.P.document_resource_identifier
        readonly 'indentation': Range_.P.indentation
    },
) => Range_.O

export namespace Whitespace_ {
    
    export type I = string
    
    export type O = i_out.Whitespace
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Whitespace_ = (
    context: Whitespace_.I,
    abort: _pi.Abort<Whitespace_.E>,
    parameters: {
        readonly 'document resource identifier': Whitespace_.P.document_resource_identifier
        readonly 'indentation': Whitespace_.P.indentation
    },
) => Whitespace_.O

export namespace Trivia_ {
    
    export type I = string
    
    export type O = i_out.Trivia
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Trivia_ = (
    context: Trivia_.I,
    abort: _pi.Abort<Trivia_.E>,
    parameters: {
        readonly 'document resource identifier': Trivia_.P.document_resource_identifier
        readonly 'indentation': Trivia_.P.indentation
    },
) => Trivia_.O

export namespace Delimited_Text_ {
    
    export type I = string
    
    export type O = i_out.Delimited_Text
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Delimited_Text_ = (
    context: Delimited_Text_.I,
    abort: _pi.Abort<Delimited_Text_.E>,
    parameters: {
        readonly 'document resource identifier': Delimited_Text_.P.document_resource_identifier
        readonly 'indentation': Delimited_Text_.P.indentation
    },
) => Delimited_Text_.O

export namespace Text_Type_ {
    
    export type I = string
    
    export type O = i_out.Text_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
    abort: _pi.Abort<Text_Type_.E>,
    parameters: {
        readonly 'document resource identifier': Text_Type_.P.document_resource_identifier
        readonly 'indentation': Text_Type_.P.indentation
    },
) => Text_Type_.O

export namespace Token_Type_ {
    
    export type I = string
    
    export type O = i_out.Token_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Token_Type_ = (
    context: Token_Type_.I,
    abort: _pi.Abort<Token_Type_.E>,
    parameters: {
        readonly 'document resource identifier': Token_Type_.P.document_resource_identifier
        readonly 'indentation': Token_Type_.P.indentation
    },
) => Token_Type_.O

export namespace Annotated_Token_ {
    
    export type I = string
    
    export type O = i_out.Annotated_Token
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Annotated_Token_ = (
    context: Annotated_Token_.I,
    abort: _pi.Abort<Annotated_Token_.E>,
    parameters: {
        readonly 'document resource identifier': Annotated_Token_.P.document_resource_identifier
        readonly 'indentation': Annotated_Token_.P.indentation
    },
) => Annotated_Token_.O

export namespace Tokenizer_Result_ {
    
    export type I = string
    
    export type O = i_out.Tokenizer_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Tokenizer_Result_ = (
    context: Tokenizer_Result_.I,
    abort: _pi.Abort<Tokenizer_Result_.E>,
    parameters: {
        readonly 'document resource identifier': Tokenizer_Result_.P.document_resource_identifier
        readonly 'indentation': Tokenizer_Result_.P.indentation
    },
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
