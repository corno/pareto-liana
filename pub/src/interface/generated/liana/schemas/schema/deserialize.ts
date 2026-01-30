
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data/unresolved"

export namespace Text_Type_ {
    
    export type I = string
    
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

export namespace Number_Type_ {
    
    export type I = string
    
    export type O = i_out.Number_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Number_Type_ = (
    context: Number_Type_.I,
    abort: _pi.Abort<Number_Type_.E>,
    parameters: {
        readonly 'document resource identifier': Number_Type_.P.document_resource_identifier
        readonly 'tab size': Number_Type_.P.tab_size
    },
) => Number_Type_.O

export namespace Globals_ {
    
    export type I = string
    
    export type O = i_out.Globals
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
    abort: _pi.Abort<Globals_.E>,
    parameters: {
        readonly 'document resource identifier': Globals_.P.document_resource_identifier
        readonly 'tab size': Globals_.P.tab_size
    },
) => Globals_.O

export namespace Type_ {
    
    export type I = string
    
    export type O = i_out.Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Type_ = (
    context: Type_.I,
    abort: _pi.Abort<Type_.E>,
    parameters: {
        readonly 'document resource identifier': Type_.P.document_resource_identifier
        readonly 'tab size': Type_.P.tab_size
    },
) => Type_.O

export namespace Types_ {
    
    export type I = string
    
    export type O = i_out.Types
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Types_ = (
    context: Types_.I,
    abort: _pi.Abort<Types_.E>,
    parameters: {
        readonly 'document resource identifier': Types_.P.document_resource_identifier
        readonly 'tab size': Types_.P.tab_size
    },
) => Types_.O

export namespace Resolve_Logic_ {
    
    export type I = string
    
    export type O = i_out.Resolve_Logic
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolve_Logic_ = (
    context: Resolve_Logic_.I,
    abort: _pi.Abort<Resolve_Logic_.E>,
    parameters: {
        readonly 'document resource identifier': Resolve_Logic_.P.document_resource_identifier
        readonly 'tab size': Resolve_Logic_.P.tab_size
    },
) => Resolve_Logic_.O

export namespace Schema_ {
    
    export type I = string
    
    export type O = i_out.Schema
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
    parameters: {
        readonly 'document resource identifier': Schema_.P.document_resource_identifier
        readonly 'tab size': Schema_.P.tab_size
    },
) => Schema_.O

export namespace Schema_Tree_ {
    
    export type I = string
    
    export type O = i_out.Schema_Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Schema_Tree_ = (
    context: Schema_Tree_.I,
    abort: _pi.Abort<Schema_Tree_.E>,
    parameters: {
        readonly 'document resource identifier': Schema_Tree_.P.document_resource_identifier
        readonly 'tab size': Schema_Tree_.P.tab_size
    },
) => Schema_Tree_.O

export namespace Type_Specification_ {
    
    export type I = string
    
    export type O = i_out.Type_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Type_Specification_ = (
    context: Type_Specification_.I,
    abort: _pi.Abort<Type_Specification_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Specification_.P.document_resource_identifier
        readonly 'tab size': Type_Specification_.P.tab_size
    },
) => Type_Specification_.O

export namespace Schemas_ {
    
    export type I = string
    
    export type O = i_out.Schemas
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
    abort: _pi.Abort<Schemas_.E>,
    parameters: {
        readonly 'document resource identifier': Schemas_.P.document_resource_identifier
        readonly 'tab size': Schemas_.P.tab_size
    },
) => Schemas_.O

export namespace Imports_ {
    
    export type I = string
    
    export type O = i_out.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
    parameters: {
        readonly 'document resource identifier': Imports_.P.document_resource_identifier
        readonly 'tab size': Imports_.P.tab_size
    },
) => Imports_.O

export namespace Presence_ {
    
    export type I = string
    
    export type O = i_out.Presence
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Presence_ = (
    context: Presence_.I,
    abort: _pi.Abort<Presence_.E>,
    parameters: {
        readonly 'document resource identifier': Presence_.P.document_resource_identifier
        readonly 'tab size': Presence_.P.tab_size
    },
) => Presence_.O

export namespace Dictionary_ {
    
    export type I = string
    
    export type O = i_out.Dictionary
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Dictionary_ = (
    context: Dictionary_.I,
    abort: _pi.Abort<Dictionary_.E>,
    parameters: {
        readonly 'document resource identifier': Dictionary_.P.document_resource_identifier
        readonly 'tab size': Dictionary_.P.tab_size
    },
) => Dictionary_.O

export namespace Signatures_ {
    
    export type I = string
    
    export type O = i_out.Signatures
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Signatures_ = (
    context: Signatures_.I,
    abort: _pi.Abort<Signatures_.E>,
    parameters: {
        readonly 'document resource identifier': Signatures_.P.document_resource_identifier
        readonly 'tab size': Signatures_.P.tab_size
    },
) => Signatures_.O

export namespace Resolvers_ {
    
    export type I = string
    
    export type O = i_out.Resolvers
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolvers_ = (
    context: Resolvers_.I,
    abort: _pi.Abort<Resolvers_.E>,
    parameters: {
        readonly 'document resource identifier': Resolvers_.P.document_resource_identifier
        readonly 'tab size': Resolvers_.P.tab_size
    },
) => Resolvers_.O

export namespace Group_ {
    
    export type I = string
    
    export type O = i_out.Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Group_ = (
    context: Group_.I,
    abort: _pi.Abort<Group_.E>,
    parameters: {
        readonly 'document resource identifier': Group_.P.document_resource_identifier
        readonly 'tab size': Group_.P.tab_size
    },
) => Group_.O

export namespace Node_Resolver_Group_ {
    
    export type I = string
    
    export type O = i_out.Node_Resolver_Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_Resolver_Group_ = (
    context: Node_Resolver_Group_.I,
    abort: _pi.Abort<Node_Resolver_Group_.E>,
    parameters: {
        readonly 'document resource identifier': Node_Resolver_Group_.P.document_resource_identifier
        readonly 'tab size': Node_Resolver_Group_.P.tab_size
    },
) => Node_Resolver_Group_.O

export namespace Value_Constraints_ {
    
    export type I = string
    
    export type O = i_out.Value_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Value_Constraints_ = (
    context: Value_Constraints_.I,
    abort: _pi.Abort<Value_Constraints_.E>,
    parameters: {
        readonly 'document resource identifier': Value_Constraints_.P.document_resource_identifier
        readonly 'tab size': Value_Constraints_.P.tab_size
    },
) => Value_Constraints_.O

export namespace Type_Reference_ {
    
    export type I = string
    
    export type O = i_out.Type_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Type_Reference_ = (
    context: Type_Reference_.I,
    abort: _pi.Abort<Type_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Reference_.P.document_resource_identifier
        readonly 'tab size': Type_Reference_.P.tab_size
    },
) => Type_Reference_.O

export namespace Type_Node_ {
    
    export type I = string
    
    export type O = i_out.Type_Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Type_Node_ = (
    context: Type_Node_.I,
    abort: _pi.Abort<Type_Node_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Node_.P.document_resource_identifier
        readonly 'tab size': Type_Node_.P.tab_size
    },
) => Type_Node_.O

export namespace Option_Constraints_ {
    
    export type I = string
    
    export type O = i_out.Option_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Option_Constraints_ = (
    context: Option_Constraints_.I,
    abort: _pi.Abort<Option_Constraints_.E>,
    parameters: {
        readonly 'document resource identifier': Option_Constraints_.P.document_resource_identifier
        readonly 'tab size': Option_Constraints_.P.tab_size
    },
) => Option_Constraints_.O

export namespace Value_Constraint_Resolvers_ {
    
    export type I = string
    
    export type O = i_out.Value_Constraint_Resolvers
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Value_Constraint_Resolvers_ = (
    context: Value_Constraint_Resolvers_.I,
    abort: _pi.Abort<Value_Constraint_Resolvers_.E>,
    parameters: {
        readonly 'document resource identifier': Value_Constraint_Resolvers_.P.document_resource_identifier
        readonly 'tab size': Value_Constraint_Resolvers_.P.tab_size
    },
) => Value_Constraint_Resolvers_.O

export namespace Signature_Parameters_ {
    
    export type I = string
    
    export type O = i_out.Signature_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Signature_Parameters_ = (
    context: Signature_Parameters_.I,
    abort: _pi.Abort<Signature_Parameters_.E>,
    parameters: {
        readonly 'document resource identifier': Signature_Parameters_.P.document_resource_identifier
        readonly 'tab size': Signature_Parameters_.P.tab_size
    },
) => Signature_Parameters_.O

export namespace Optional_Value_Initialization_ {
    
    export type I = string
    
    export type O = i_out.Optional_Value_Initialization
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Optional_Value_Initialization_ = (
    context: Optional_Value_Initialization_.I,
    abort: _pi.Abort<Optional_Value_Initialization_.E>,
    parameters: {
        readonly 'document resource identifier': Optional_Value_Initialization_.P.document_resource_identifier
        readonly 'tab size': Optional_Value_Initialization_.P.tab_size
    },
) => Optional_Value_Initialization_.O

export namespace Lookup_Selection_ {
    
    export type I = string
    
    export type O = i_out.Lookup_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Lookup_Selection_ = (
    context: Lookup_Selection_.I,
    abort: _pi.Abort<Lookup_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Lookup_Selection_.P.document_resource_identifier
        readonly 'tab size': Lookup_Selection_.P.tab_size
    },
) => Lookup_Selection_.O

export namespace Node_Resolver_List_Result_ {
    
    export type I = string
    
    export type O = i_out.Node_Resolver_List_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_Resolver_List_Result_ = (
    context: Node_Resolver_List_Result_.I,
    abort: _pi.Abort<Node_Resolver_List_Result_.E>,
    parameters: {
        readonly 'document resource identifier': Node_Resolver_List_Result_.P.document_resource_identifier
        readonly 'tab size': Node_Resolver_List_Result_.P.tab_size
    },
) => Node_Resolver_List_Result_.O

export namespace Node_Resolver_ {
    
    export type I = string
    
    export type O = i_out.Node_Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_Resolver_ = (
    context: Node_Resolver_.I,
    abort: _pi.Abort<Node_Resolver_.E>,
    parameters: {
        readonly 'document resource identifier': Node_Resolver_.P.document_resource_identifier
        readonly 'tab size': Node_Resolver_.P.tab_size
    },
) => Node_Resolver_.O

export namespace Relative_Value_Selection_ {
    
    export type I = string
    
    export type O = i_out.Relative_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Relative_Value_Selection_ = (
    context: Relative_Value_Selection_.I,
    abort: _pi.Abort<Relative_Value_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Relative_Value_Selection_.P.document_resource_identifier
        readonly 'tab size': Relative_Value_Selection_.P.tab_size
    },
) => Relative_Value_Selection_.O

export namespace Guaranteed_Value_Selection_ {
    
    export type I = string
    
    export type O = i_out.Guaranteed_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Guaranteed_Value_Selection_ = (
    context: Guaranteed_Value_Selection_.I,
    abort: _pi.Abort<Guaranteed_Value_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Guaranteed_Value_Selection_.P.document_resource_identifier
        readonly 'tab size': Guaranteed_Value_Selection_.P.tab_size
    },
) => Guaranteed_Value_Selection_.O

export namespace Benchmark_ {
    
    export type I = string
    
    export type O = i_out.Benchmark
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Benchmark_ = (
    context: Benchmark_.I,
    abort: _pi.Abort<Benchmark_.E>,
    parameters: {
        readonly 'document resource identifier': Benchmark_.P.document_resource_identifier
        readonly 'tab size': Benchmark_.P.tab_size
    },
) => Benchmark_.O

export namespace Type_Node_Path_ {
    
    export type I = string
    
    export type O = i_out.Type_Node_Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Type_Node_Path_ = (
    context: Type_Node_Path_.I,
    abort: _pi.Abort<Type_Node_Path_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Node_Path_.P.document_resource_identifier
        readonly 'tab size': Type_Node_Path_.P.tab_size
    },
) => Type_Node_Path_.O

export namespace Type_Node_Reference_ {
    
    export type I = string
    
    export type O = i_out.Type_Node_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Type_Node_Reference_ = (
    context: Type_Node_Reference_.I,
    abort: _pi.Abort<Type_Node_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Node_Reference_.P.document_resource_identifier
        readonly 'tab size': Type_Node_Reference_.P.tab_size
    },
) => Type_Node_Reference_.O

export namespace Signature_ {
    
    export type I = string
    
    export type O = i_out.Signature
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Signature_ = (
    context: Signature_.I,
    abort: _pi.Abort<Signature_.E>,
    parameters: {
        readonly 'document resource identifier': Signature_.P.document_resource_identifier
        readonly 'tab size': Signature_.P.tab_size
    },
) => Signature_.O

export namespace Constraint_ {
    
    export type I = string
    
    export type O = i_out.Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Constraint_ = (
    context: Constraint_.I,
    abort: _pi.Abort<Constraint_.E>,
    parameters: {
        readonly 'document resource identifier': Constraint_.P.document_resource_identifier
        readonly 'tab size': Constraint_.P.tab_size
    },
) => Constraint_.O

export namespace Reference_To_Value_Constraint_Resolver_ {
    
    export type I = string
    
    export type O = i_out.Reference_To_Value_Constraint_Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Reference_To_Value_Constraint_Resolver_ = (
    context: Reference_To_Value_Constraint_Resolver_.I,
    abort: _pi.Abort<Reference_To_Value_Constraint_Resolver_.E>,
    parameters: {
        readonly 'document resource identifier': Reference_To_Value_Constraint_Resolver_.P.document_resource_identifier
        readonly 'tab size': Reference_To_Value_Constraint_Resolver_.P.tab_size
    },
) => Reference_To_Value_Constraint_Resolver_.O

export namespace Value_Constraint_Resolver_ {
    
    export type I = string
    
    export type O = i_out.Value_Constraint_Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Value_Constraint_Resolver_ = (
    context: Value_Constraint_Resolver_.I,
    abort: _pi.Abort<Value_Constraint_Resolver_.E>,
    parameters: {
        readonly 'document resource identifier': Value_Constraint_Resolver_.P.document_resource_identifier
        readonly 'tab size': Value_Constraint_Resolver_.P.tab_size
    },
) => Value_Constraint_Resolver_.O

export namespace Possible_Value_Selection_ {
    
    export type I = string
    
    export type O = i_out.Possible_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Possible_Value_Selection_ = (
    context: Possible_Value_Selection_.I,
    abort: _pi.Abort<Possible_Value_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Possible_Value_Selection_.P.document_resource_identifier
        readonly 'tab size': Possible_Value_Selection_.P.tab_size
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
    Node_Resolver_Group_ as Node_Resolver_Group, 
    Value_Constraints_ as Value_Constraints, 
    Type_Reference_ as Type_Reference, 
    Type_Node_ as Type_Node, 
    Option_Constraints_ as Option_Constraints, 
    Value_Constraint_Resolvers_ as Value_Constraint_Resolvers, 
    Signature_Parameters_ as Signature_Parameters, 
    Optional_Value_Initialization_ as Optional_Value_Initialization, 
    Lookup_Selection_ as Lookup_Selection, 
    Node_Resolver_List_Result_ as Node_Resolver_List_Result, 
    Node_Resolver_ as Node_Resolver, 
    Relative_Value_Selection_ as Relative_Value_Selection, 
    Guaranteed_Value_Selection_ as Guaranteed_Value_Selection, 
    Benchmark_ as Benchmark, 
    Type_Node_Path_ as Type_Node_Path, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Signature_ as Signature, 
    Constraint_ as Constraint, 
    Reference_To_Value_Constraint_Resolver_ as Reference_To_Value_Constraint_Resolver, 
    Value_Constraint_Resolver_ as Value_Constraint_Resolver, 
    Possible_Value_Selection_ as Possible_Value_Selection, 
}
