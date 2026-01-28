
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data/unresolved"

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

export namespace Number_Type_ {
    
    export type I = string
    
    export type O = i_out.Number_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Number_Type_ = (
    context: Number_Type_.I,
    abort: _pi.Abort<Number_Type_.E>,
    parameters: {
        readonly 'document resource identifier': Number_Type_.P.document_resource_identifier
        readonly 'indentation': Number_Type_.P.indentation
    },
) => Number_Type_.O

export namespace Globals_ {
    
    export type I = string
    
    export type O = i_out.Globals
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
    abort: _pi.Abort<Globals_.E>,
    parameters: {
        readonly 'document resource identifier': Globals_.P.document_resource_identifier
        readonly 'indentation': Globals_.P.indentation
    },
) => Globals_.O

export namespace Type_ {
    
    export type I = string
    
    export type O = i_out.Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_ = (
    context: Type_.I,
    abort: _pi.Abort<Type_.E>,
    parameters: {
        readonly 'document resource identifier': Type_.P.document_resource_identifier
        readonly 'indentation': Type_.P.indentation
    },
) => Type_.O

export namespace Types_ {
    
    export type I = string
    
    export type O = i_out.Types
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Types_ = (
    context: Types_.I,
    abort: _pi.Abort<Types_.E>,
    parameters: {
        readonly 'document resource identifier': Types_.P.document_resource_identifier
        readonly 'indentation': Types_.P.indentation
    },
) => Types_.O

export namespace Resolve_Logic_ {
    
    export type I = string
    
    export type O = i_out.Resolve_Logic
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Resolve_Logic_ = (
    context: Resolve_Logic_.I,
    abort: _pi.Abort<Resolve_Logic_.E>,
    parameters: {
        readonly 'document resource identifier': Resolve_Logic_.P.document_resource_identifier
        readonly 'indentation': Resolve_Logic_.P.indentation
    },
) => Resolve_Logic_.O

export namespace Schema_ {
    
    export type I = string
    
    export type O = i_out.Schema
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
    parameters: {
        readonly 'document resource identifier': Schema_.P.document_resource_identifier
        readonly 'indentation': Schema_.P.indentation
    },
) => Schema_.O

export namespace Schema_Tree_ {
    
    export type I = string
    
    export type O = i_out.Schema_Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Schema_Tree_ = (
    context: Schema_Tree_.I,
    abort: _pi.Abort<Schema_Tree_.E>,
    parameters: {
        readonly 'document resource identifier': Schema_Tree_.P.document_resource_identifier
        readonly 'indentation': Schema_Tree_.P.indentation
    },
) => Schema_Tree_.O

export namespace Type_Specification_ {
    
    export type I = string
    
    export type O = i_out.Type_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_Specification_ = (
    context: Type_Specification_.I,
    abort: _pi.Abort<Type_Specification_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Specification_.P.document_resource_identifier
        readonly 'indentation': Type_Specification_.P.indentation
    },
) => Type_Specification_.O

export namespace Schemas_ {
    
    export type I = string
    
    export type O = i_out.Schemas
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
    abort: _pi.Abort<Schemas_.E>,
    parameters: {
        readonly 'document resource identifier': Schemas_.P.document_resource_identifier
        readonly 'indentation': Schemas_.P.indentation
    },
) => Schemas_.O

export namespace Imports_ {
    
    export type I = string
    
    export type O = i_out.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
    parameters: {
        readonly 'document resource identifier': Imports_.P.document_resource_identifier
        readonly 'indentation': Imports_.P.indentation
    },
) => Imports_.O

export namespace Presence_ {
    
    export type I = string
    
    export type O = i_out.Presence
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Presence_ = (
    context: Presence_.I,
    abort: _pi.Abort<Presence_.E>,
    parameters: {
        readonly 'document resource identifier': Presence_.P.document_resource_identifier
        readonly 'indentation': Presence_.P.indentation
    },
) => Presence_.O

export namespace Dictionary_ {
    
    export type I = string
    
    export type O = i_out.Dictionary
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Dictionary_ = (
    context: Dictionary_.I,
    abort: _pi.Abort<Dictionary_.E>,
    parameters: {
        readonly 'document resource identifier': Dictionary_.P.document_resource_identifier
        readonly 'indentation': Dictionary_.P.indentation
    },
) => Dictionary_.O

export namespace Signatures_ {
    
    export type I = string
    
    export type O = i_out.Signatures
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Signatures_ = (
    context: Signatures_.I,
    abort: _pi.Abort<Signatures_.E>,
    parameters: {
        readonly 'document resource identifier': Signatures_.P.document_resource_identifier
        readonly 'indentation': Signatures_.P.indentation
    },
) => Signatures_.O

export namespace Resolvers_ {
    
    export type I = string
    
    export type O = i_out.Resolvers
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Resolvers_ = (
    context: Resolvers_.I,
    abort: _pi.Abort<Resolvers_.E>,
    parameters: {
        readonly 'document resource identifier': Resolvers_.P.document_resource_identifier
        readonly 'indentation': Resolvers_.P.indentation
    },
) => Resolvers_.O

export namespace Group_ {
    
    export type I = string
    
    export type O = i_out.Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Group_ = (
    context: Group_.I,
    abort: _pi.Abort<Group_.E>,
    parameters: {
        readonly 'document resource identifier': Group_.P.document_resource_identifier
        readonly 'indentation': Group_.P.indentation
    },
) => Group_.O

export namespace Type_Reference_ {
    
    export type I = string
    
    export type O = i_out.Type_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_Reference_ = (
    context: Type_Reference_.I,
    abort: _pi.Abort<Type_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Reference_.P.document_resource_identifier
        readonly 'indentation': Type_Reference_.P.indentation
    },
) => Type_Reference_.O

export namespace Type_Node_ {
    
    export type I = string
    
    export type O = i_out.Type_Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_Node_ = (
    context: Type_Node_.I,
    abort: _pi.Abort<Type_Node_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Node_.P.document_resource_identifier
        readonly 'indentation': Type_Node_.P.indentation
    },
) => Type_Node_.O

export namespace Type_Node_Path_ {
    
    export type I = string
    
    export type O = i_out.Type_Node_Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_Node_Path_ = (
    context: Type_Node_Path_.I,
    abort: _pi.Abort<Type_Node_Path_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Node_Path_.P.document_resource_identifier
        readonly 'indentation': Type_Node_Path_.P.indentation
    },
) => Type_Node_Path_.O

export namespace Type_Node_Reference_ {
    
    export type I = string
    
    export type O = i_out.Type_Node_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_Node_Reference_ = (
    context: Type_Node_Reference_.I,
    abort: _pi.Abort<Type_Node_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Node_Reference_.P.document_resource_identifier
        readonly 'indentation': Type_Node_Reference_.P.indentation
    },
) => Type_Node_Reference_.O

export namespace Signature_Parameters_ {
    
    export type I = string
    
    export type O = i_out.Signature_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Signature_Parameters_ = (
    context: Signature_Parameters_.I,
    abort: _pi.Abort<Signature_Parameters_.E>,
    parameters: {
        readonly 'document resource identifier': Signature_Parameters_.P.document_resource_identifier
        readonly 'indentation': Signature_Parameters_.P.indentation
    },
) => Signature_Parameters_.O

export namespace Signature_ {
    
    export type I = string
    
    export type O = i_out.Signature
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Signature_ = (
    context: Signature_.I,
    abort: _pi.Abort<Signature_.E>,
    parameters: {
        readonly 'document resource identifier': Signature_.P.document_resource_identifier
        readonly 'indentation': Signature_.P.indentation
    },
) => Signature_.O

export namespace Relative_Value_Selection_ {
    
    export type I = string
    
    export type O = i_out.Relative_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Relative_Value_Selection_ = (
    context: Relative_Value_Selection_.I,
    abort: _pi.Abort<Relative_Value_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Relative_Value_Selection_.P.document_resource_identifier
        readonly 'indentation': Relative_Value_Selection_.P.indentation
    },
) => Relative_Value_Selection_.O

export namespace Lookup_Selection_ {
    
    export type I = string
    
    export type O = i_out.Lookup_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Lookup_Selection_ = (
    context: Lookup_Selection_.I,
    abort: _pi.Abort<Lookup_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Lookup_Selection_.P.document_resource_identifier
        readonly 'indentation': Lookup_Selection_.P.indentation
    },
) => Lookup_Selection_.O

export namespace Constraint_ {
    
    export type I = string
    
    export type O = i_out.Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Constraint_ = (
    context: Constraint_.I,
    abort: _pi.Abort<Constraint_.E>,
    parameters: {
        readonly 'document resource identifier': Constraint_.P.document_resource_identifier
        readonly 'indentation': Constraint_.P.indentation
    },
) => Constraint_.O

export namespace Option_Constraints_ {
    
    export type I = string
    
    export type O = i_out.Option_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Option_Constraints_ = (
    context: Option_Constraints_.I,
    abort: _pi.Abort<Option_Constraints_.E>,
    parameters: {
        readonly 'document resource identifier': Option_Constraints_.P.document_resource_identifier
        readonly 'indentation': Option_Constraints_.P.indentation
    },
) => Option_Constraints_.O

export namespace Property_Constraints_ {
    
    export type I = string
    
    export type O = i_out.Property_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Property_Constraints_ = (
    context: Property_Constraints_.I,
    abort: _pi.Abort<Property_Constraints_.E>,
    parameters: {
        readonly 'document resource identifier': Property_Constraints_.P.document_resource_identifier
        readonly 'indentation': Property_Constraints_.P.indentation
    },
) => Property_Constraints_.O

export namespace Reference_To_Property_Constraint_ {
    
    export type I = string
    
    export type O = i_out.Reference_To_Property_Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Reference_To_Property_Constraint_ = (
    context: Reference_To_Property_Constraint_.I,
    abort: _pi.Abort<Reference_To_Property_Constraint_.E>,
    parameters: {
        readonly 'document resource identifier': Reference_To_Property_Constraint_.P.document_resource_identifier
        readonly 'indentation': Reference_To_Property_Constraint_.P.indentation
    },
) => Reference_To_Property_Constraint_.O

export namespace Property_Constraint_ {
    
    export type I = string
    
    export type O = i_out.Property_Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Property_Constraint_ = (
    context: Property_Constraint_.I,
    abort: _pi.Abort<Property_Constraint_.E>,
    parameters: {
        readonly 'document resource identifier': Property_Constraint_.P.document_resource_identifier
        readonly 'indentation': Property_Constraint_.P.indentation
    },
) => Property_Constraint_.O

export namespace Optional_Value_Initialization_ {
    
    export type I = string
    
    export type O = i_out.Optional_Value_Initialization
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Optional_Value_Initialization_ = (
    context: Optional_Value_Initialization_.I,
    abort: _pi.Abort<Optional_Value_Initialization_.E>,
    parameters: {
        readonly 'document resource identifier': Optional_Value_Initialization_.P.document_resource_identifier
        readonly 'indentation': Optional_Value_Initialization_.P.indentation
    },
) => Optional_Value_Initialization_.O

export namespace Node_Resolver_Group_ {
    
    export type I = string
    
    export type O = i_out.Node_Resolver_Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Node_Resolver_Group_ = (
    context: Node_Resolver_Group_.I,
    abort: _pi.Abort<Node_Resolver_Group_.E>,
    parameters: {
        readonly 'document resource identifier': Node_Resolver_Group_.P.document_resource_identifier
        readonly 'indentation': Node_Resolver_Group_.P.indentation
    },
) => Node_Resolver_Group_.O

export namespace Node_Resolver_List_Result_ {
    
    export type I = string
    
    export type O = i_out.Node_Resolver_List_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Node_Resolver_List_Result_ = (
    context: Node_Resolver_List_Result_.I,
    abort: _pi.Abort<Node_Resolver_List_Result_.E>,
    parameters: {
        readonly 'document resource identifier': Node_Resolver_List_Result_.P.document_resource_identifier
        readonly 'indentation': Node_Resolver_List_Result_.P.indentation
    },
) => Node_Resolver_List_Result_.O

export namespace Benchmark_ {
    
    export type I = string
    
    export type O = i_out.Benchmark
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Benchmark_ = (
    context: Benchmark_.I,
    abort: _pi.Abort<Benchmark_.E>,
    parameters: {
        readonly 'document resource identifier': Benchmark_.P.document_resource_identifier
        readonly 'indentation': Benchmark_.P.indentation
    },
) => Benchmark_.O

export namespace Node_Resolver_ {
    
    export type I = string
    
    export type O = i_out.Node_Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Node_Resolver_ = (
    context: Node_Resolver_.I,
    abort: _pi.Abort<Node_Resolver_.E>,
    parameters: {
        readonly 'document resource identifier': Node_Resolver_.P.document_resource_identifier
        readonly 'indentation': Node_Resolver_.P.indentation
    },
) => Node_Resolver_.O

export namespace Guaranteed_Value_Selection_ {
    
    export type I = string
    
    export type O = i_out.Guaranteed_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Guaranteed_Value_Selection_ = (
    context: Guaranteed_Value_Selection_.I,
    abort: _pi.Abort<Guaranteed_Value_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Guaranteed_Value_Selection_.P.document_resource_identifier
        readonly 'indentation': Guaranteed_Value_Selection_.P.indentation
    },
) => Guaranteed_Value_Selection_.O

export namespace Possible_Value_Selection_ {
    
    export type I = string
    
    export type O = i_out.Possible_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Possible_Value_Selection_ = (
    context: Possible_Value_Selection_.I,
    abort: _pi.Abort<Possible_Value_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Possible_Value_Selection_.P.document_resource_identifier
        readonly 'indentation': Possible_Value_Selection_.P.indentation
    },
) => Possible_Value_Selection_.O

export { 
    Text_Type_ as Text_Type, 
    Number_Type_ as Number_Type, 
    Globals_ as Globals, 
    Type_ as Type, 
    Types_ as Types, 
    Resolve_Logic_ as Resolve_Logic, 
    Schema_ as Schema, 
    Schema_Tree_ as Schema_Tree, 
    Type_Specification_ as Type_Specification, 
    Schemas_ as Schemas, 
    Imports_ as Imports, 
    Presence_ as Presence, 
    Dictionary_ as Dictionary, 
    Signatures_ as Signatures, 
    Resolvers_ as Resolvers, 
    Group_ as Group, 
    Type_Reference_ as Type_Reference, 
    Type_Node_ as Type_Node, 
    Type_Node_Path_ as Type_Node_Path, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Signature_Parameters_ as Signature_Parameters, 
    Signature_ as Signature, 
    Relative_Value_Selection_ as Relative_Value_Selection, 
    Lookup_Selection_ as Lookup_Selection, 
    Constraint_ as Constraint, 
    Option_Constraints_ as Option_Constraints, 
    Property_Constraints_ as Property_Constraints, 
    Reference_To_Property_Constraint_ as Reference_To_Property_Constraint, 
    Property_Constraint_ as Property_Constraint, 
    Optional_Value_Initialization_ as Optional_Value_Initialization, 
    Node_Resolver_Group_ as Node_Resolver_Group, 
    Node_Resolver_List_Result_ as Node_Resolver_List_Result, 
    Benchmark_ as Benchmark, 
    Node_Resolver_ as Node_Resolver, 
    Guaranteed_Value_Selection_ as Guaranteed_Value_Selection, 
    Possible_Value_Selection_ as Possible_Value_Selection, 
}
