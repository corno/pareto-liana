
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../../data/unresolved"

export namespace Package_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Package
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Package_ = (
    context: Package_.I,
    abort: _pi.Abort<Package_.E>,
    parameters: {
        readonly 'document resource identifier': Package_.P.document_resource_identifier
        readonly 'tab size': Package_.P.tab_size
    },
) => Package_.O

export namespace Schemas_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Schema_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Schema_Imports_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Schema_Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Schema_Imports_ = (
    context: Schema_Imports_.I,
    abort: _pi.Abort<Schema_Imports_.E>,
    parameters: {
        readonly 'document resource identifier': Schema_Imports_.P.document_resource_identifier
        readonly 'tab size': Schema_Imports_.P.tab_size
    },
) => Schema_Imports_.O

export namespace Modules_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Modules
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Modules_ = (
    context: Modules_.I,
    abort: _pi.Abort<Modules_.E>,
    parameters: {
        readonly 'document resource identifier': Modules_.P.document_resource_identifier
        readonly 'tab size': Modules_.P.tab_size
    },
) => Modules_.O

export namespace Globals_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Dictionary_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Value_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
    parameters: {
        readonly 'document resource identifier': Value_.P.document_resource_identifier
        readonly 'tab size': Value_.P.tab_size
    },
) => Value_.O

export namespace Resolver_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_ = (
    context: Resolver_.I,
    abort: _pi.Abort<Resolver_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_.P.document_resource_identifier
        readonly 'tab size': Resolver_.P.tab_size
    },
) => Resolver_.O

export namespace Resolver_Imports_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Imports_ = (
    context: Resolver_Imports_.I,
    abort: _pi.Abort<Resolver_Imports_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Imports_.P.document_resource_identifier
        readonly 'tab size': Resolver_Imports_.P.tab_size
    },
) => Resolver_Imports_.O

export namespace Resolver_Signatures_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Signatures
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Signatures_ = (
    context: Resolver_Signatures_.I,
    abort: _pi.Abort<Resolver_Signatures_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Signatures_.P.document_resource_identifier
        readonly 'tab size': Resolver_Signatures_.P.tab_size
    },
) => Resolver_Signatures_.O

export namespace Resolver_Signature_Parameters_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Signature_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Signature_Parameters_ = (
    context: Resolver_Signature_Parameters_.I,
    abort: _pi.Abort<Resolver_Signature_Parameters_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Signature_Parameters_.P.document_resource_identifier
        readonly 'tab size': Resolver_Signature_Parameters_.P.tab_size
    },
) => Resolver_Signature_Parameters_.O

export namespace Resolver_Value_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Value_ = (
    context: Resolver_Value_.I,
    abort: _pi.Abort<Resolver_Value_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Value_.P.document_resource_identifier
        readonly 'tab size': Resolver_Value_.P.tab_size
    },
) => Resolver_Value_.O

export namespace Module_Specification_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Module_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Module_Specification_ = (
    context: Module_Specification_.I,
    abort: _pi.Abort<Module_Specification_.E>,
    parameters: {
        readonly 'document resource identifier': Module_Specification_.P.document_resource_identifier
        readonly 'tab size': Module_Specification_.P.tab_size
    },
) => Module_Specification_.O

export namespace Schema_Tree_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Number_Type_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Module_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Module
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Module_ = (
    context: Module_.I,
    abort: _pi.Abort<Module_.E>,
    parameters: {
        readonly 'document resource identifier': Module_.P.document_resource_identifier
        readonly 'tab size': Module_.P.tab_size
    },
) => Module_.O

export namespace Presence_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Resolver_Modules_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Modules
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Modules_ = (
    context: Resolver_Modules_.I,
    abort: _pi.Abort<Resolver_Modules_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Modules_.P.document_resource_identifier
        readonly 'tab size': Resolver_Modules_.P.tab_size
    },
) => Resolver_Modules_.O

export namespace Resolver_Benchmark_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Benchmark
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Benchmark_ = (
    context: Resolver_Benchmark_.I,
    abort: _pi.Abort<Resolver_Benchmark_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Benchmark_.P.document_resource_identifier
        readonly 'tab size': Resolver_Benchmark_.P.tab_size
    },
) => Resolver_Benchmark_.O

export namespace Group_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Value_Reference_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Value_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Value_Reference_ = (
    context: Value_Reference_.I,
    abort: _pi.Abort<Value_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Value_Reference_.P.document_resource_identifier
        readonly 'tab size': Value_Reference_.P.tab_size
    },
) => Value_Reference_.O

export namespace Value_Path_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Value_Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Value_Path_ = (
    context: Value_Path_.I,
    abort: _pi.Abort<Value_Path_.E>,
    parameters: {
        readonly 'document resource identifier': Value_Path_.P.document_resource_identifier
        readonly 'tab size': Value_Path_.P.tab_size
    },
) => Value_Path_.O

export namespace Module_Reference_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Module_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Module_Reference_ = (
    context: Module_Reference_.I,
    abort: _pi.Abort<Module_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Module_Reference_.P.document_resource_identifier
        readonly 'tab size': Module_Reference_.P.tab_size
    },
) => Module_Reference_.O

export namespace Resolver_Signature_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Signature
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Signature_ = (
    context: Resolver_Signature_.I,
    abort: _pi.Abort<Resolver_Signature_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Signature_.P.document_resource_identifier
        readonly 'tab size': Resolver_Signature_.P.tab_size
    },
) => Resolver_Signature_.O

export namespace Resolver_Relative_Value_Selection_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Relative_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Relative_Value_Selection_ = (
    context: Resolver_Relative_Value_Selection_.I,
    abort: _pi.Abort<Resolver_Relative_Value_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Relative_Value_Selection_.P.document_resource_identifier
        readonly 'tab size': Resolver_Relative_Value_Selection_.P.tab_size
    },
) => Resolver_Relative_Value_Selection_.O

export namespace Resolver_Lookup_Selection_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Lookup_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Lookup_Selection_ = (
    context: Resolver_Lookup_Selection_.I,
    abort: _pi.Abort<Resolver_Lookup_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Lookup_Selection_.P.document_resource_identifier
        readonly 'tab size': Resolver_Lookup_Selection_.P.tab_size
    },
) => Resolver_Lookup_Selection_.O

export namespace Resolver_Constraint_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Constraint_ = (
    context: Resolver_Constraint_.I,
    abort: _pi.Abort<Resolver_Constraint_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Constraint_.P.document_resource_identifier
        readonly 'tab size': Resolver_Constraint_.P.tab_size
    },
) => Resolver_Constraint_.O

export namespace Resolver_Option_Constraints_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Option_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Option_Constraints_ = (
    context: Resolver_Option_Constraints_.I,
    abort: _pi.Abort<Resolver_Option_Constraints_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Option_Constraints_.P.document_resource_identifier
        readonly 'tab size': Resolver_Option_Constraints_.P.tab_size
    },
) => Resolver_Option_Constraints_.O

export namespace Resolver_Optional_Value_Constraints_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Optional_Value_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Optional_Value_Constraints_ = (
    context: Resolver_Optional_Value_Constraints_.I,
    abort: _pi.Abort<Resolver_Optional_Value_Constraints_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Optional_Value_Constraints_.P.document_resource_identifier
        readonly 'tab size': Resolver_Optional_Value_Constraints_.P.tab_size
    },
) => Resolver_Optional_Value_Constraints_.O

export namespace Resolver_Value_Constraints_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Value_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Value_Constraints_ = (
    context: Resolver_Value_Constraints_.I,
    abort: _pi.Abort<Resolver_Value_Constraints_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Value_Constraints_.P.document_resource_identifier
        readonly 'tab size': Resolver_Value_Constraints_.P.tab_size
    },
) => Resolver_Value_Constraints_.O

export namespace Resolver_Reference_To_Value_Constraint_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Reference_To_Value_Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Reference_To_Value_Constraint_ = (
    context: Resolver_Reference_To_Value_Constraint_.I,
    abort: _pi.Abort<Resolver_Reference_To_Value_Constraint_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Reference_To_Value_Constraint_.P.document_resource_identifier
        readonly 'tab size': Resolver_Reference_To_Value_Constraint_.P.tab_size
    },
) => Resolver_Reference_To_Value_Constraint_.O

export namespace Resolver_Value_Constraint_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Value_Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Value_Constraint_ = (
    context: Resolver_Value_Constraint_.I,
    abort: _pi.Abort<Resolver_Value_Constraint_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Value_Constraint_.P.document_resource_identifier
        readonly 'tab size': Resolver_Value_Constraint_.P.tab_size
    },
) => Resolver_Value_Constraint_.O

export namespace Resolver_Optional_Value_Initialization_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Optional_Value_Initialization
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Optional_Value_Initialization_ = (
    context: Resolver_Optional_Value_Initialization_.I,
    abort: _pi.Abort<Resolver_Optional_Value_Initialization_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Optional_Value_Initialization_.P.document_resource_identifier
        readonly 'tab size': Resolver_Optional_Value_Initialization_.P.tab_size
    },
) => Resolver_Optional_Value_Initialization_.O

export namespace Resolver_Value_Group_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Value_Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Value_Group_ = (
    context: Resolver_Value_Group_.I,
    abort: _pi.Abort<Resolver_Value_Group_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Value_Group_.P.document_resource_identifier
        readonly 'tab size': Resolver_Value_Group_.P.tab_size
    },
) => Resolver_Value_Group_.O

export namespace Resolver_Value_List_Result_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Value_List_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Value_List_Result_ = (
    context: Resolver_Value_List_Result_.I,
    abort: _pi.Abort<Resolver_Value_List_Result_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Value_List_Result_.P.document_resource_identifier
        readonly 'tab size': Resolver_Value_List_Result_.P.tab_size
    },
) => Resolver_Value_List_Result_.O

export namespace Value_Results_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Value_Results
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Value_Results_ = (
    context: Value_Results_.I,
    abort: _pi.Abort<Value_Results_.E>,
    parameters: {
        readonly 'document resource identifier': Value_Results_.P.document_resource_identifier
        readonly 'tab size': Value_Results_.P.tab_size
    },
) => Value_Results_.O

export namespace Option_Constraints_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Resolver_Guaranteed_Value_Selection_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Guaranteed_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Guaranteed_Value_Selection_ = (
    context: Resolver_Guaranteed_Value_Selection_.I,
    abort: _pi.Abort<Resolver_Guaranteed_Value_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Guaranteed_Value_Selection_.P.document_resource_identifier
        readonly 'tab size': Resolver_Guaranteed_Value_Selection_.P.tab_size
    },
) => Resolver_Guaranteed_Value_Selection_.O

export namespace Resolver_Possible_Value_Selection_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Resolver_Possible_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Resolver_Possible_Value_Selection_ = (
    context: Resolver_Possible_Value_Selection_.I,
    abort: _pi.Abort<Resolver_Possible_Value_Selection_.E>,
    parameters: {
        readonly 'document resource identifier': Resolver_Possible_Value_Selection_.P.document_resource_identifier
        readonly 'tab size': Resolver_Possible_Value_Selection_.P.tab_size
    },
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
