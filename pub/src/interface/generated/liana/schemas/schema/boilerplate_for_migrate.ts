
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "./data/unresolved"

import * as i_in from "./data/resolved"

export namespace Package_ {
    
    export type I = i_in.Package
    
    export type O = i_out.Package
    
    export namespace P {
        
    }
    
}

export type Package_ = (
    context: Package_.I,
) => Package_.O

export namespace Schemas_ {
    
    export type I = i_in.Schemas
    
    export type O = i_out.Schemas
    
    export namespace P {
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
) => Schemas_.O

export namespace Schema_ {
    
    export type I = i_in.Schema
    
    export type O = i_out.Schema
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
) => Schema_.O

export namespace Schema_Imports_ {
    
    export type I = i_in.Schema_Imports
    
    export type O = i_out.Schema_Imports
    
    export namespace P {
        
    }
    
}

export type Schema_Imports_ = (
    context: Schema_Imports_.I,
) => Schema_Imports_.O

export namespace Modules_ {
    
    export type I = i_in.Modules
    
    export type O = i_out.Modules
    
    export namespace P {
        
    }
    
}

export type Modules_ = (
    context: Modules_.I,
) => Modules_.O

export namespace Globals_ {
    
    export type I = i_in.Globals
    
    export type O = i_out.Globals
    
    export namespace P {
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
) => Globals_.O

export namespace Dictionary_ {
    
    export type I = i_in.Dictionary
    
    export type O = i_out.Dictionary
    
    export namespace P {
        
    }
    
}

export type Dictionary_ = (
    context: Dictionary_.I,
) => Dictionary_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
) => Value_.O

export namespace Resolver_ {
    
    export type I = i_in.Resolver
    
    export type O = i_out.Resolver
    
    export namespace P {
        
    }
    
}

export type Resolver_ = (
    context: Resolver_.I,
) => Resolver_.O

export namespace Resolver_Imports_ {
    
    export type I = i_in.Resolver_Imports
    
    export type O = i_out.Resolver_Imports
    
    export namespace P {
        
    }
    
}

export type Resolver_Imports_ = (
    context: Resolver_Imports_.I,
) => Resolver_Imports_.O

export namespace Resolver_Signatures_ {
    
    export type I = i_in.Resolver_Signatures
    
    export type O = i_out.Resolver_Signatures
    
    export namespace P {
        
    }
    
}

export type Resolver_Signatures_ = (
    context: Resolver_Signatures_.I,
) => Resolver_Signatures_.O

export namespace Resolver_Signature_Parameters_ {
    
    export type I = i_in.Resolver_Signature_Parameters
    
    export type O = i_out.Resolver_Signature_Parameters
    
    export namespace P {
        
    }
    
}

export type Resolver_Signature_Parameters_ = (
    context: Resolver_Signature_Parameters_.I,
) => Resolver_Signature_Parameters_.O

export namespace Resolver_Value_ {
    
    export type I = i_in.Resolver_Value
    
    export type O = i_out.Resolver_Value
    
    export namespace P {
        
    }
    
}

export type Resolver_Value_ = (
    context: Resolver_Value_.I,
) => Resolver_Value_.O

export namespace Module_Specification_ {
    
    export type I = i_in.Module_Specification
    
    export type O = i_out.Module_Specification
    
    export namespace P {
        
    }
    
}

export type Module_Specification_ = (
    context: Module_Specification_.I,
) => Module_Specification_.O

export namespace Schema_Tree_ {
    
    export type I = i_in.Schema_Tree
    
    export type O = i_out.Schema_Tree
    
    export namespace P {
        
    }
    
}

export type Schema_Tree_ = (
    context: Schema_Tree_.I,
) => Schema_Tree_.O

export namespace Text_Type_ {
    
    export type I = i_in.Text_Type
    
    export type O = i_out.Text_Type
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
) => Text_Type_.O

export namespace Number_Type_ {
    
    export type I = i_in.Number_Type
    
    export type O = i_out.Number_Type
    
    export namespace P {
        
    }
    
}

export type Number_Type_ = (
    context: Number_Type_.I,
) => Number_Type_.O

export namespace Module_ {
    
    export type I = i_in.Module
    
    export type O = i_out.Module
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
) => Module_.O

export namespace Presence_ {
    
    export type I = i_in.Presence
    
    export type O = i_out.Presence
    
    export namespace P {
        
    }
    
}

export type Presence_ = (
    context: Presence_.I,
) => Presence_.O

export namespace Resolver_Modules_ {
    
    export type I = i_in.Resolver_Modules
    
    export type O = i_out.Resolver_Modules
    
    export namespace P {
        
    }
    
}

export type Resolver_Modules_ = (
    context: Resolver_Modules_.I,
) => Resolver_Modules_.O

export namespace Resolver_Benchmark_ {
    
    export type I = i_in.Resolver_Benchmark
    
    export type O = i_out.Resolver_Benchmark
    
    export namespace P {
        
    }
    
}

export type Resolver_Benchmark_ = (
    context: Resolver_Benchmark_.I,
) => Resolver_Benchmark_.O

export namespace Group_ {
    
    export type I = i_in.Group
    
    export type O = i_out.Group
    
    export namespace P {
        
    }
    
}

export type Group_ = (
    context: Group_.I,
) => Group_.O

export namespace Value_Reference_ {
    
    export type I = i_in.Value_Reference
    
    export type O = i_out.Value_Reference
    
    export namespace P {
        
    }
    
}

export type Value_Reference_ = (
    context: Value_Reference_.I,
) => Value_Reference_.O

export namespace Value_Path_ {
    
    export type I = i_in.Value_Path
    
    export type O = i_out.Value_Path
    
    export namespace P {
        
    }
    
}

export type Value_Path_ = (
    context: Value_Path_.I,
) => Value_Path_.O

export namespace Module_Reference_ {
    
    export type I = i_in.Module_Reference
    
    export type O = i_out.Module_Reference
    
    export namespace P {
        
    }
    
}

export type Module_Reference_ = (
    context: Module_Reference_.I,
) => Module_Reference_.O

export namespace Resolver_Signature_ {
    
    export type I = i_in.Resolver_Signature
    
    export type O = i_out.Resolver_Signature
    
    export namespace P {
        
    }
    
}

export type Resolver_Signature_ = (
    context: Resolver_Signature_.I,
) => Resolver_Signature_.O

export namespace Resolver_Relative_Value_Selection_ {
    
    export type I = i_in.Resolver_Relative_Value_Selection
    
    export type O = i_out.Resolver_Relative_Value_Selection
    
    export namespace P {
        
    }
    
}

export type Resolver_Relative_Value_Selection_ = (
    context: Resolver_Relative_Value_Selection_.I,
) => Resolver_Relative_Value_Selection_.O

export namespace Resolver_Lookup_Selection_ {
    
    export type I = i_in.Resolver_Lookup_Selection
    
    export type O = i_out.Resolver_Lookup_Selection
    
    export namespace P {
        
    }
    
}

export type Resolver_Lookup_Selection_ = (
    context: Resolver_Lookup_Selection_.I,
) => Resolver_Lookup_Selection_.O

export namespace Resolver_Contraint_ {
    
    export type I = i_in.Resolver_Contraint
    
    export type O = i_out.Resolver_Contraint
    
    export namespace P {
        
    }
    
}

export type Resolver_Contraint_ = (
    context: Resolver_Contraint_.I,
) => Resolver_Contraint_.O

export namespace Resolver_Option_Constraints_ {
    
    export type I = i_in.Resolver_Option_Constraints
    
    export type O = i_out.Resolver_Option_Constraints
    
    export namespace P {
        
    }
    
}

export type Resolver_Option_Constraints_ = (
    context: Resolver_Option_Constraints_.I,
) => Resolver_Option_Constraints_.O

export namespace Optional_Value_Constraint_Resolvers_ {
    
    export type I = i_in.Optional_Value_Constraint_Resolvers
    
    export type O = i_out.Optional_Value_Constraint_Resolvers
    
    export namespace P {
        
    }
    
}

export type Optional_Value_Constraint_Resolvers_ = (
    context: Optional_Value_Constraint_Resolvers_.I,
) => Optional_Value_Constraint_Resolvers_.O

export namespace Resolver_Value_Constraints_ {
    
    export type I = i_in.Resolver_Value_Constraints
    
    export type O = i_out.Resolver_Value_Constraints
    
    export namespace P {
        
    }
    
}

export type Resolver_Value_Constraints_ = (
    context: Resolver_Value_Constraints_.I,
) => Resolver_Value_Constraints_.O

export namespace Reference_To_Value_Constraint_Resolver_ {
    
    export type I = i_in.Reference_To_Value_Constraint_Resolver
    
    export type O = i_out.Reference_To_Value_Constraint_Resolver
    
    export namespace P {
        
    }
    
}

export type Reference_To_Value_Constraint_Resolver_ = (
    context: Reference_To_Value_Constraint_Resolver_.I,
) => Reference_To_Value_Constraint_Resolver_.O

export namespace Value_Constraint_Resolver_ {
    
    export type I = i_in.Value_Constraint_Resolver
    
    export type O = i_out.Value_Constraint_Resolver
    
    export namespace P {
        
    }
    
}

export type Value_Constraint_Resolver_ = (
    context: Value_Constraint_Resolver_.I,
) => Value_Constraint_Resolver_.O

export namespace Resolver_Optional_Value_Initialization_ {
    
    export type I = i_in.Resolver_Optional_Value_Initialization
    
    export type O = i_out.Resolver_Optional_Value_Initialization
    
    export namespace P {
        
    }
    
}

export type Resolver_Optional_Value_Initialization_ = (
    context: Resolver_Optional_Value_Initialization_.I,
) => Resolver_Optional_Value_Initialization_.O

export namespace Value_Resolver_Group_ {
    
    export type I = i_in.Value_Resolver_Group
    
    export type O = i_out.Value_Resolver_Group
    
    export namespace P {
        
    }
    
}

export type Value_Resolver_Group_ = (
    context: Value_Resolver_Group_.I,
) => Value_Resolver_Group_.O

export namespace Value_Resolver_List_Result_ {
    
    export type I = i_in.Value_Resolver_List_Result
    
    export type O = i_out.Value_Resolver_List_Result
    
    export namespace P {
        
    }
    
}

export type Value_Resolver_List_Result_ = (
    context: Value_Resolver_List_Result_.I,
) => Value_Resolver_List_Result_.O

export namespace Value_Results_ {
    
    export type I = i_in.Value_Results
    
    export type O = i_out.Value_Results
    
    export namespace P {
        
    }
    
}

export type Value_Results_ = (
    context: Value_Results_.I,
) => Value_Results_.O

export namespace Option_Constraints_ {
    
    export type I = i_in.Option_Constraints
    
    export type O = i_out.Option_Constraints
    
    export namespace P {
        
    }
    
}

export type Option_Constraints_ = (
    context: Option_Constraints_.I,
) => Option_Constraints_.O

export namespace Resolver_Guaranteed_Value_Selection_ {
    
    export type I = i_in.Resolver_Guaranteed_Value_Selection
    
    export type O = i_out.Resolver_Guaranteed_Value_Selection
    
    export namespace P {
        
    }
    
}

export type Resolver_Guaranteed_Value_Selection_ = (
    context: Resolver_Guaranteed_Value_Selection_.I,
) => Resolver_Guaranteed_Value_Selection_.O

export namespace Resolver_Possible_Value_Selection_ {
    
    export type I = i_in.Resolver_Possible_Value_Selection
    
    export type O = i_out.Resolver_Possible_Value_Selection
    
    export namespace P {
        
    }
    
}

export type Resolver_Possible_Value_Selection_ = (
    context: Resolver_Possible_Value_Selection_.I,
) => Resolver_Possible_Value_Selection_.O

export { 
    Package_ as Package, 
    Schemas_ as Schemas, 
    Schema_ as Schema, 
    Schema_Imports_ as Schema_Imports, 
    Modules_ as Modules, 
    Globals_ as Globals, 
    Dictionary_ as Dictionary, 
    Value_ as Value, 
    Resolver_ as Resolver, 
    Resolver_Imports_ as Resolver_Imports, 
    Resolver_Signatures_ as Resolver_Signatures, 
    Resolver_Signature_Parameters_ as Resolver_Signature_Parameters, 
    Resolver_Value_ as Resolver_Value, 
    Module_Specification_ as Module_Specification, 
    Schema_Tree_ as Schema_Tree, 
    Text_Type_ as Text_Type, 
    Number_Type_ as Number_Type, 
    Module_ as Module, 
    Presence_ as Presence, 
    Resolver_Modules_ as Resolver_Modules, 
    Resolver_Benchmark_ as Resolver_Benchmark, 
    Group_ as Group, 
    Value_Reference_ as Value_Reference, 
    Value_Path_ as Value_Path, 
    Module_Reference_ as Module_Reference, 
    Resolver_Signature_ as Resolver_Signature, 
    Resolver_Relative_Value_Selection_ as Resolver_Relative_Value_Selection, 
    Resolver_Lookup_Selection_ as Resolver_Lookup_Selection, 
    Resolver_Contraint_ as Resolver_Contraint, 
    Resolver_Option_Constraints_ as Resolver_Option_Constraints, 
    Optional_Value_Constraint_Resolvers_ as Optional_Value_Constraint_Resolvers, 
    Resolver_Value_Constraints_ as Resolver_Value_Constraints, 
    Reference_To_Value_Constraint_Resolver_ as Reference_To_Value_Constraint_Resolver, 
    Value_Constraint_Resolver_ as Value_Constraint_Resolver, 
    Resolver_Optional_Value_Initialization_ as Resolver_Optional_Value_Initialization, 
    Value_Resolver_Group_ as Value_Resolver_Group, 
    Value_Resolver_List_Result_ as Value_Resolver_List_Result, 
    Value_Results_ as Value_Results, 
    Option_Constraints_ as Option_Constraints, 
    Resolver_Guaranteed_Value_Selection_ as Resolver_Guaranteed_Value_Selection, 
    Resolver_Possible_Value_Selection_ as Resolver_Possible_Value_Selection, 
}
