    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"
    
    import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"
    
    import * as i_out from "./data"
    
    export namespace Tokenizer_Result_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Tokenizer_Result
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Tokenizer_Result_ = (
        context: Tokenizer_Result_.I,
        abort: _pi.Abort<Tokenizer_Result_.E>,
        parameters: {
            readonly 'document resource identifier': Tokenizer_Result_.P.document_resource_identifier
            readonly 'tab size': Tokenizer_Result_.P.tab_size
        },
    ) => Tokenizer_Result_.O
    
    export namespace Annotated_Token_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Annotated_Token
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Annotated_Token_ = (
        context: Annotated_Token_.I,
        abort: _pi.Abort<Annotated_Token_.E>,
        parameters: {
            readonly 'document resource identifier': Annotated_Token_.P.document_resource_identifier
            readonly 'tab size': Annotated_Token_.P.tab_size
        },
    ) => Annotated_Token_.O
    
    export namespace Token_Type_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Token_Type
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Token_Type_ = (
        context: Token_Type_.I,
        abort: _pi.Abort<Token_Type_.E>,
        parameters: {
            readonly 'document resource identifier': Token_Type_.P.document_resource_identifier
            readonly 'tab size': Token_Type_.P.tab_size
        },
    ) => Token_Type_.O
    
    export namespace Delimited_Text_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Delimited_Text
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Delimited_Text_ = (
        context: Delimited_Text_.I,
        abort: _pi.Abort<Delimited_Text_.E>,
        parameters: {
            readonly 'document resource identifier': Delimited_Text_.P.document_resource_identifier
            readonly 'tab size': Delimited_Text_.P.tab_size
        },
    ) => Delimited_Text_.O
    
    export namespace Whitespace_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Whitespace
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Whitespace_ = (
        context: Whitespace_.I,
        abort: _pi.Abort<Whitespace_.E>,
        parameters: {
            readonly 'document resource identifier': Whitespace_.P.document_resource_identifier
            readonly 'tab size': Whitespace_.P.tab_size
        },
    ) => Whitespace_.O
    
    export namespace Trivia_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Trivia
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Trivia_ = (
        context: Trivia_.I,
        abort: _pi.Abort<Trivia_.E>,
        parameters: {
            readonly 'document resource identifier': Trivia_.P.document_resource_identifier
            readonly 'tab size': Trivia_.P.tab_size
        },
    ) => Trivia_.O
    
    export namespace Text_Type_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Text_Type
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Text_Type_ = (
        context: Text_Type_.I,
        abort: _pi.Abort<Text_Type_.E>,
        parameters: {
            readonly 'document resource identifier': Text_Type_.P.document_resource_identifier
            readonly 'tab size': Text_Type_.P.tab_size
        },
    ) => Text_Type_.O
    
    export { 
        Tokenizer_Result_ as Tokenizer_Result, 
        Annotated_Token_ as Annotated_Token, 
        Token_Type_ as Token_Type, 
        Delimited_Text_ as Delimited_Text, 
        Whitespace_ as Whitespace, 
        Trivia_ as Trivia, 
        Text_Type_ as Text_Type, 
    }
