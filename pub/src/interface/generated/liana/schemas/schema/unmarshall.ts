
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data/unresolved"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Schemas_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schemas
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
    abort: _pi.Abort<Schemas_.E>,
) => Schemas_.O

export namespace Schema_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
) => Schema_.O

export namespace Imports_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
) => Imports_.O

export namespace Modules_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Modules
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Modules_ = (
    context: Modules_.I,
    abort: _pi.Abort<Modules_.E>,
) => Modules_.O

export namespace Globals_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Globals
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
    abort: _pi.Abort<Globals_.E>,
) => Globals_.O

export namespace Dictionary_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Dictionary
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Dictionary_ = (
    context: Dictionary_.I,
    abort: _pi.Abort<Dictionary_.E>,
) => Dictionary_.O

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

export namespace Signatures_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Signatures
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Signatures_ = (
    context: Signatures_.I,
    abort: _pi.Abort<Signatures_.E>,
) => Signatures_.O

export namespace Signature_Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Signature_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Signature_Parameters_ = (
    context: Signature_Parameters_.I,
    abort: _pi.Abort<Signature_Parameters_.E>,
) => Signature_Parameters_.O

export namespace Value_Resolver_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Resolver_ = (
    context: Value_Resolver_.I,
    abort: _pi.Abort<Value_Resolver_.E>,
) => Value_Resolver_.O

export namespace Module_Specification_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Module_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Specification_ = (
    context: Module_Specification_.I,
    abort: _pi.Abort<Module_Specification_.E>,
) => Module_Specification_.O

export namespace Schema_Tree_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema_Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schema_Tree_ = (
    context: Schema_Tree_.I,
    abort: _pi.Abort<Schema_Tree_.E>,
) => Schema_Tree_.O

export namespace Resolve_Logic_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolve_Logic
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolve_Logic_ = (
    context: Resolve_Logic_.I,
    abort: _pi.Abort<Resolve_Logic_.E>,
) => Resolve_Logic_.O

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

export namespace Number_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Number_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Number_Type_ = (
    context: Number_Type_.I,
    abort: _pi.Abort<Number_Type_.E>,
) => Number_Type_.O

export namespace Module_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Module
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
    abort: _pi.Abort<Module_.E>,
) => Module_.O

export namespace Presence_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Presence
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Presence_ = (
    context: Presence_.I,
    abort: _pi.Abort<Presence_.E>,
) => Presence_.O

export namespace Module_Resolvers_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Module_Resolvers
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Resolvers_ = (
    context: Module_Resolvers_.I,
    abort: _pi.Abort<Module_Resolvers_.E>,
) => Module_Resolvers_.O

export namespace Benchmark_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Benchmark
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Benchmark_ = (
    context: Benchmark_.I,
    abort: _pi.Abort<Benchmark_.E>,
) => Benchmark_.O

export namespace Group_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Group_ = (
    context: Group_.I,
    abort: _pi.Abort<Group_.E>,
) => Group_.O

export namespace Value_Reference_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Reference_ = (
    context: Value_Reference_.I,
    abort: _pi.Abort<Value_Reference_.E>,
) => Value_Reference_.O

export namespace Value_Path_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Path_ = (
    context: Value_Path_.I,
    abort: _pi.Abort<Value_Path_.E>,
) => Value_Path_.O

export namespace Module_Reference_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Module_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Reference_ = (
    context: Module_Reference_.I,
    abort: _pi.Abort<Module_Reference_.E>,
) => Module_Reference_.O

export namespace Signature_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Signature
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Signature_ = (
    context: Signature_.I,
    abort: _pi.Abort<Signature_.E>,
) => Signature_.O

export namespace Relative_Value_Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Relative_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Relative_Value_Selection_ = (
    context: Relative_Value_Selection_.I,
    abort: _pi.Abort<Relative_Value_Selection_.E>,
) => Relative_Value_Selection_.O

export namespace Lookup_Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Lookup_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Lookup_Selection_ = (
    context: Lookup_Selection_.I,
    abort: _pi.Abort<Lookup_Selection_.E>,
) => Lookup_Selection_.O

export namespace Constraint_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Constraint_ = (
    context: Constraint_.I,
    abort: _pi.Abort<Constraint_.E>,
) => Constraint_.O

export namespace Option_Constraint_Resolvers_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Option_Constraint_Resolvers
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Option_Constraint_Resolvers_ = (
    context: Option_Constraint_Resolvers_.I,
    abort: _pi.Abort<Option_Constraint_Resolvers_.E>,
) => Option_Constraint_Resolvers_.O

export namespace Value_Constraint_Resolvers_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Constraint_Resolvers
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Constraint_Resolvers_ = (
    context: Value_Constraint_Resolvers_.I,
    abort: _pi.Abort<Value_Constraint_Resolvers_.E>,
) => Value_Constraint_Resolvers_.O

export namespace Reference_To_Value_Constraint_Resolver_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Reference_To_Value_Constraint_Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Reference_To_Value_Constraint_Resolver_ = (
    context: Reference_To_Value_Constraint_Resolver_.I,
    abort: _pi.Abort<Reference_To_Value_Constraint_Resolver_.E>,
) => Reference_To_Value_Constraint_Resolver_.O

export namespace Value_Constraint_Resolver_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Constraint_Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Constraint_Resolver_ = (
    context: Value_Constraint_Resolver_.I,
    abort: _pi.Abort<Value_Constraint_Resolver_.E>,
) => Value_Constraint_Resolver_.O

export namespace Optional_Value_Initialization_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Optional_Value_Initialization
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Optional_Value_Initialization_ = (
    context: Optional_Value_Initialization_.I,
    abort: _pi.Abort<Optional_Value_Initialization_.E>,
) => Optional_Value_Initialization_.O

export namespace Value_Resolver_Group_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Resolver_Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Resolver_Group_ = (
    context: Value_Resolver_Group_.I,
    abort: _pi.Abort<Value_Resolver_Group_.E>,
) => Value_Resolver_Group_.O

export namespace Value_Resolver_List_Result_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Resolver_List_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Resolver_List_Result_ = (
    context: Value_Resolver_List_Result_.I,
    abort: _pi.Abort<Value_Resolver_List_Result_.E>,
) => Value_Resolver_List_Result_.O

export namespace Value_Results_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Results
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Results_ = (
    context: Value_Results_.I,
    abort: _pi.Abort<Value_Results_.E>,
) => Value_Results_.O

export namespace Option_Constraints_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Option_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Option_Constraints_ = (
    context: Option_Constraints_.I,
    abort: _pi.Abort<Option_Constraints_.E>,
) => Option_Constraints_.O

export namespace Guaranteed_Value_Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Guaranteed_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Guaranteed_Value_Selection_ = (
    context: Guaranteed_Value_Selection_.I,
    abort: _pi.Abort<Guaranteed_Value_Selection_.E>,
) => Guaranteed_Value_Selection_.O

export namespace Possible_Value_Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Possible_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Possible_Value_Selection_ = (
    context: Possible_Value_Selection_.I,
    abort: _pi.Abort<Possible_Value_Selection_.E>,
) => Possible_Value_Selection_.O

export { 
    Schemas_ as Schemas, 
    Schema_ as Schema, 
    Imports_ as Imports, 
    Modules_ as Modules, 
    Globals_ as Globals, 
    Dictionary_ as Dictionary, 
    Value_ as Value, 
    Signatures_ as Signatures, 
    Signature_Parameters_ as Signature_Parameters, 
    Value_Resolver_ as Value_Resolver, 
    Module_Specification_ as Module_Specification, 
    Schema_Tree_ as Schema_Tree, 
    Resolve_Logic_ as Resolve_Logic, 
    Text_Type_ as Text_Type, 
    Number_Type_ as Number_Type, 
    Module_ as Module, 
    Presence_ as Presence, 
    Module_Resolvers_ as Module_Resolvers, 
    Benchmark_ as Benchmark, 
    Group_ as Group, 
    Value_Reference_ as Value_Reference, 
    Value_Path_ as Value_Path, 
    Module_Reference_ as Module_Reference, 
    Signature_ as Signature, 
    Relative_Value_Selection_ as Relative_Value_Selection, 
    Lookup_Selection_ as Lookup_Selection, 
    Constraint_ as Constraint, 
    Option_Constraint_Resolvers_ as Option_Constraint_Resolvers, 
    Value_Constraint_Resolvers_ as Value_Constraint_Resolvers, 
    Reference_To_Value_Constraint_Resolver_ as Reference_To_Value_Constraint_Resolver, 
    Value_Constraint_Resolver_ as Value_Constraint_Resolver, 
    Optional_Value_Initialization_ as Optional_Value_Initialization, 
    Value_Resolver_Group_ as Value_Resolver_Group, 
    Value_Resolver_List_Result_ as Value_Resolver_List_Result, 
    Value_Results_ as Value_Results, 
    Option_Constraints_ as Option_Constraints, 
    Guaranteed_Value_Selection_ as Guaranteed_Value_Selection, 
    Possible_Value_Selection_ as Possible_Value_Selection, 
}
