
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../../interface/schemas/unresolved.js"

import * as i_in from "astn-core/interface/data/parse_tree"

export namespace Package_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Package
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Package_ = (
    context: Package_.I,
    abort: p_i.Abort<Package_.E>,
) => Package_.O

export namespace Schemas_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schemas
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
    abort: p_i.Abort<Schemas_.E>,
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
    abort: p_i.Abort<Schema_.E>,
) => Schema_.O

export namespace Schema_Imports_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema_Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schema_Imports_ = (
    context: Schema_Imports_.I,
    abort: p_i.Abort<Schema_Imports_.E>,
) => Schema_Imports_.O

export namespace Modules_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Modules
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Modules_ = (
    context: Modules_.I,
    abort: p_i.Abort<Modules_.E>,
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
    abort: p_i.Abort<Globals_.E>,
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
    abort: p_i.Abort<Dictionary_.E>,
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
    abort: p_i.Abort<Value_.E>,
) => Value_.O

export namespace Resolver_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_ = (
    context: Resolver_.I,
    abort: p_i.Abort<Resolver_.E>,
) => Resolver_.O

export namespace Resolver_Imports_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Imports_ = (
    context: Resolver_Imports_.I,
    abort: p_i.Abort<Resolver_Imports_.E>,
) => Resolver_Imports_.O

export namespace Resolver_Signatures_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Signatures
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Signatures_ = (
    context: Resolver_Signatures_.I,
    abort: p_i.Abort<Resolver_Signatures_.E>,
) => Resolver_Signatures_.O

export namespace Resolver_Signature_Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Signature_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Signature_Parameters_ = (
    context: Resolver_Signature_Parameters_.I,
    abort: p_i.Abort<Resolver_Signature_Parameters_.E>,
) => Resolver_Signature_Parameters_.O

export namespace Resolver_Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Value_ = (
    context: Resolver_Value_.I,
    abort: p_i.Abort<Resolver_Value_.E>,
) => Resolver_Value_.O

export namespace Module_Specification_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Module_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Specification_ = (
    context: Module_Specification_.I,
    abort: p_i.Abort<Module_Specification_.E>,
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
    abort: p_i.Abort<Schema_Tree_.E>,
) => Schema_Tree_.O

export namespace Text_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Text_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
    abort: p_i.Abort<Text_Type_.E>,
) => Text_Type_.O

export namespace Simple_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Simple_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Simple_Type_ = (
    context: Simple_Type_.I,
    abort: p_i.Abort<Simple_Type_.E>,
) => Simple_Type_.O

export namespace Module_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Module
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_ = (
    context: Module_.I,
    abort: p_i.Abort<Module_.E>,
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
    abort: p_i.Abort<Presence_.E>,
) => Presence_.O

export namespace Resolver_Modules_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Modules
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Modules_ = (
    context: Resolver_Modules_.I,
    abort: p_i.Abort<Resolver_Modules_.E>,
) => Resolver_Modules_.O

export namespace Resolver_Benchmark_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Benchmark
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Benchmark_ = (
    context: Resolver_Benchmark_.I,
    abort: p_i.Abort<Resolver_Benchmark_.E>,
) => Resolver_Benchmark_.O

export namespace Group_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Group_ = (
    context: Group_.I,
    abort: p_i.Abort<Group_.E>,
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
    abort: p_i.Abort<Value_Reference_.E>,
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
    abort: p_i.Abort<Value_Path_.E>,
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
    abort: p_i.Abort<Module_Reference_.E>,
) => Module_Reference_.O

export namespace Resolver_Signature_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Signature
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Signature_ = (
    context: Resolver_Signature_.I,
    abort: p_i.Abort<Resolver_Signature_.E>,
) => Resolver_Signature_.O

export namespace Resolver_Relative_Value_Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Relative_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Relative_Value_Selection_ = (
    context: Resolver_Relative_Value_Selection_.I,
    abort: p_i.Abort<Resolver_Relative_Value_Selection_.E>,
) => Resolver_Relative_Value_Selection_.O

export namespace Resolver_Lookup_Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Lookup_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Lookup_Selection_ = (
    context: Resolver_Lookup_Selection_.I,
    abort: p_i.Abort<Resolver_Lookup_Selection_.E>,
) => Resolver_Lookup_Selection_.O

export namespace Resolver_Constraint_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Constraint_ = (
    context: Resolver_Constraint_.I,
    abort: p_i.Abort<Resolver_Constraint_.E>,
) => Resolver_Constraint_.O

export namespace Resolver_Option_Constraints_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Option_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Option_Constraints_ = (
    context: Resolver_Option_Constraints_.I,
    abort: p_i.Abort<Resolver_Option_Constraints_.E>,
) => Resolver_Option_Constraints_.O

export namespace Resolver_Optional_Value_Constraints_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Optional_Value_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Optional_Value_Constraints_ = (
    context: Resolver_Optional_Value_Constraints_.I,
    abort: p_i.Abort<Resolver_Optional_Value_Constraints_.E>,
) => Resolver_Optional_Value_Constraints_.O

export namespace Resolver_Value_Constraints_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Value_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Value_Constraints_ = (
    context: Resolver_Value_Constraints_.I,
    abort: p_i.Abort<Resolver_Value_Constraints_.E>,
) => Resolver_Value_Constraints_.O

export namespace Resolver_Reference_To_Value_Constraint_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Reference_To_Value_Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Reference_To_Value_Constraint_ = (
    context: Resolver_Reference_To_Value_Constraint_.I,
    abort: p_i.Abort<Resolver_Reference_To_Value_Constraint_.E>,
) => Resolver_Reference_To_Value_Constraint_.O

export namespace Resolver_Value_Constraint_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Value_Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Value_Constraint_ = (
    context: Resolver_Value_Constraint_.I,
    abort: p_i.Abort<Resolver_Value_Constraint_.E>,
) => Resolver_Value_Constraint_.O

export namespace Resolver_Optional_Value_Initialization_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Optional_Value_Initialization
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Optional_Value_Initialization_ = (
    context: Resolver_Optional_Value_Initialization_.I,
    abort: p_i.Abort<Resolver_Optional_Value_Initialization_.E>,
) => Resolver_Optional_Value_Initialization_.O

export namespace Resolver_Value_Group_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Value_Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Value_Group_ = (
    context: Resolver_Value_Group_.I,
    abort: p_i.Abort<Resolver_Value_Group_.E>,
) => Resolver_Value_Group_.O

export namespace Resolver_Value_List_Result_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Value_List_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Value_List_Result_ = (
    context: Resolver_Value_List_Result_.I,
    abort: p_i.Abort<Resolver_Value_List_Result_.E>,
) => Resolver_Value_List_Result_.O

export namespace Value_Results_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Results
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Results_ = (
    context: Value_Results_.I,
    abort: p_i.Abort<Value_Results_.E>,
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
    abort: p_i.Abort<Option_Constraints_.E>,
) => Option_Constraints_.O

export namespace Resolver_Guaranteed_Value_Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Guaranteed_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Guaranteed_Value_Selection_ = (
    context: Resolver_Guaranteed_Value_Selection_.I,
    abort: p_i.Abort<Resolver_Guaranteed_Value_Selection_.E>,
) => Resolver_Guaranteed_Value_Selection_.O

export namespace Resolver_Possible_Value_Selection_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Resolver_Possible_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Resolver_Possible_Value_Selection_ = (
    context: Resolver_Possible_Value_Selection_.I,
    abort: p_i.Abort<Resolver_Possible_Value_Selection_.E>,
) => Resolver_Possible_Value_Selection_.O

export type { 
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
    Simple_Type_ as Simple_Type, 
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
    Resolver_Constraint_ as Resolver_Constraint, 
    Resolver_Option_Constraints_ as Resolver_Option_Constraints, 
    Resolver_Optional_Value_Constraints_ as Resolver_Optional_Value_Constraints, 
    Resolver_Value_Constraints_ as Resolver_Value_Constraints, 
    Resolver_Reference_To_Value_Constraint_ as Resolver_Reference_To_Value_Constraint, 
    Resolver_Value_Constraint_ as Resolver_Value_Constraint, 
    Resolver_Optional_Value_Initialization_ as Resolver_Optional_Value_Initialization, 
    Resolver_Value_Group_ as Resolver_Value_Group, 
    Resolver_Value_List_Result_ as Resolver_Value_List_Result, 
    Value_Results_ as Value_Results, 
    Option_Constraints_ as Option_Constraints, 
    Resolver_Guaranteed_Value_Selection_ as Resolver_Guaranteed_Value_Selection, 
    Resolver_Possible_Value_Selection_ as Resolver_Possible_Value_Selection, 
}
