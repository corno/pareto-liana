
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Structural_Token_ {
    
    export type I = string
    
    export type O = i_out.Structural_Token
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Structural_Token_ = (
    context: Structural_Token_.I,
    abort: _pi.Abort<Structural_Token_.E>,
    parameters: {
        readonly 'document resource identifier': Structural_Token_.P.document_resource_identifier
        readonly 'indentation': Structural_Token_.P.indentation
    },
) => Structural_Token_.O

export namespace Text_ {
    
    export type I = string
    
    export type O = i_out.Text
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Text_ = (
    context: Text_.I,
    abort: _pi.Abort<Text_.E>,
    parameters: {
        readonly 'document resource identifier': Text_.P.document_resource_identifier
        readonly 'indentation': Text_.P.indentation
    },
) => Text_.O

export namespace ID_Value_Pairs_ {
    
    export type I = string
    
    export type O = i_out.ID_Value_Pairs
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type ID_Value_Pairs_ = (
    context: ID_Value_Pairs_.I,
    abort: _pi.Abort<ID_Value_Pairs_.E>,
    parameters: {
        readonly 'document resource identifier': ID_Value_Pairs_.P.document_resource_identifier
        readonly 'indentation': ID_Value_Pairs_.P.indentation
    },
) => ID_Value_Pairs_.O

export namespace Items_ {
    
    export type I = string
    
    export type O = i_out.Items
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Items_ = (
    context: Items_.I,
    abort: _pi.Abort<Items_.E>,
    parameters: {
        readonly 'document resource identifier': Items_.P.document_resource_identifier
        readonly 'indentation': Items_.P.indentation
    },
) => Items_.O

export namespace Value_ {
    
    export type I = string
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
    parameters: {
        readonly 'document resource identifier': Value_.P.document_resource_identifier
        readonly 'indentation': Value_.P.indentation
    },
) => Value_.O

export namespace Content_ {
    
    export type I = string
    
    export type O = i_out.Content
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Content_ = (
    context: Content_.I,
    abort: _pi.Abort<Content_.E>,
    parameters: {
        readonly 'document resource identifier': Content_.P.document_resource_identifier
        readonly 'indentation': Content_.P.indentation
    },
) => Content_.O

export namespace Document_ {
    
    export type I = string
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: _pi.Abort<Document_.E>,
    parameters: {
        readonly 'document resource identifier': Document_.P.document_resource_identifier
        readonly 'indentation': Document_.P.indentation
    },
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
