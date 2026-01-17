
import * as _pi from "pareto-core-interface"

import * as i_resolve from "pareto-core-internals/dist/algorithm_types/refiner/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

export namespace Type_Parameters_ {
    
    export type I = i_unresolved.Type_Parameters
    
    export type O = i_resolved.Type_Parameters
    
    export namespace P {
        
    }
    
}

export type Type_Parameters_ = (
    $$_: Type_Parameters_.I,
    $$_lookups: null,
    $$_p: null,
) => Type_Parameters_.O

export namespace Presence_ {
    
    export type I = i_unresolved.Presence
    
    export type O = i_resolved.Presence
    
    export namespace P {
        
    }
    
}

export type Presence_ = (
    $$_: Presence_.I,
    $$_lookups: null,
    $$_p: null,
) => Presence_.O

export namespace Number_Type_ {
    
    export type I = i_unresolved.Number_Type
    
    export type O = i_resolved.Number_Type
    
    export namespace P {
        
    }
    
}

export type Number_Type_ = (
    $$_: Number_Type_.I,
    $$_lookups: null,
    $$_p: null,
) => Number_Type_.O

export namespace Text_Type_ {
    
    export type I = i_unresolved.Text_Type
    
    export type O = i_resolved.Text_Type
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    $$_: Text_Type_.I,
    $$_lookups: null,
    $$_p: null,
) => Text_Type_.O

export namespace Globals_ {
    
    export type I = i_unresolved.Globals
    
    export type O = i_resolved.Globals
    
    export namespace P {
        
    }
    
}

export type Globals_ = (
    $$_: Globals_.I,
    $$_lookups: null,
    $$_p: null,
) => Globals_.O

export namespace Group_ {
    
    export type I = i_unresolved.Group
    
    export type O = i_resolved.Group
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export type type_parameters = i_resolved.Type_Parameters_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Group_ = (
    $$_: Group_.I,
    $$_lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Group_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Group_.L.possibly_circular_dependent_sibling_types>
    },
    $$_p: {
        readonly 'globals': Group_.P.globals
        readonly 'type parameters': Group_.P.type_parameters
        readonly 'imports': Group_.P.imports
    },
) => Group_.O

export namespace Dictionary_ {
    
    export type I = i_unresolved.Dictionary
    
    export type O = i_resolved.Dictionary
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export type type_parameters = i_resolved.Type_Parameters_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Dictionary_ = (
    $$_: Dictionary_.I,
    $$_lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Dictionary_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Dictionary_.L.possibly_circular_dependent_sibling_types>
    },
    $$_p: {
        readonly 'globals': Dictionary_.P.globals
        readonly 'type parameters': Dictionary_.P.type_parameters
        readonly 'imports': Dictionary_.P.imports
    },
) => Dictionary_.O

export namespace Type_Node_ {
    
    export type I = i_unresolved.Type_Node
    
    export type O = i_resolved.Type_Node
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export type type_parameters = i_resolved.Type_Parameters_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Type_Node_ = (
    $$_: Type_Node_.I,
    $$_lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Type_Node_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Type_Node_.L.possibly_circular_dependent_sibling_types>
    },
    $$_p: {
        readonly 'globals': Type_Node_.P.globals
        readonly 'type parameters': Type_Node_.P.type_parameters
        readonly 'imports': Type_Node_.P.imports
    },
) => Type_Node_.O

export namespace Type_ {
    
    export type I = i_unresolved.Type
    
    export type O = i_resolved.Type
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Type_ = (
    $$_: Type_.I,
    $$_lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Type_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Type_.L.possibly_circular_dependent_sibling_types>
    },
    $$_p: {
        readonly 'globals': Type_.P.globals
        readonly 'imports': Type_.P.imports
    },
) => Type_.O

export namespace Type_Reference_ {
    
    export type I = i_unresolved.Type_Reference
    
    export type O = i_resolved.Type_Reference
    
    export namespace L {
        
        export type types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Type_Reference_ = (
    $$_: Type_Reference_.I,
    $$_lookups: {
        readonly 'types': _pi.Acyclic_Lookup<Type_Reference_.L.types>
    },
    $$_p: {
        readonly 'imports': Type_Reference_.P.imports
    },
) => Type_Reference_.O

export namespace Type_Node_Reference_ {
    
    export type I = i_unresolved.Type_Node_Reference
    
    export type O = i_resolved.Type_Node_Reference
    
    export namespace L {
        
        export type types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Type_Node_Reference_ = (
    $$_: Type_Node_Reference_.I,
    $$_lookups: {
        readonly 'types': _pi.Acyclic_Lookup<Type_Node_Reference_.L.types>
    },
    $$_p: {
        readonly 'imports': Type_Node_Reference_.P.imports
    },
) => Type_Node_Reference_.O

export namespace Node_Resolver_ {
    
    export type I = i_unresolved.Node_Resolver
    
    export type O = i_resolved.Node_Resolver
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Type_Node_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Node_Resolver_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Benchmark_
            
        }
        
        export type linked_entry = _pi.Optional_Value<linked_entry.O>
        
        export namespace current_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_dictionary = _pi.Optional_Value<current_dictionary.O>
        
        export namespace current_ordered_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_ordered_dictionary = _pi.Optional_Value<current_ordered_dictionary.O>
        
        export type signature = i_resolved.Signature_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
        export type signatures = i_resolved.Signatures_
        
        export type types = i_resolved.Types_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Node_Resolver_ = (
    $$_: Node_Resolver_.I,
    $$_lookups: {
        readonly 'sibling property resolvers': _pi.Acyclic_Lookup<Node_Resolver_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<Node_Resolver_.L.parent_sibling_property_resolvers>
    },
    $$_p: {
        readonly 'definition': Node_Resolver_.P.definition
        readonly 'list cursor': Node_Resolver_.P.list_cursor
        readonly 'linked entry': Node_Resolver_.P.linked_entry
        readonly 'current dictionary': Node_Resolver_.P.current_dictionary
        readonly 'current ordered dictionary': Node_Resolver_.P.current_ordered_dictionary
        readonly 'signature': Node_Resolver_.P.signature
        readonly 'imports': Node_Resolver_.P.imports
        readonly 'signatures': Node_Resolver_.P.signatures
        readonly 'types': Node_Resolver_.P.types
        readonly 'option constraints': Node_Resolver_.P.option_constraints
    },
) => Node_Resolver_.O

export namespace Possible_Value_Selection_ {
    
    export type I = i_unresolved.Possible_Value_Selection
    
    export type O = i_resolved.Possible_Value_Selection
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Type_Node_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Node_Resolver_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Benchmark_
            
        }
        
        export type linked_entry = _pi.Optional_Value<linked_entry.O>
        
        export namespace current_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_dictionary = _pi.Optional_Value<current_dictionary.O>
        
        export namespace current_ordered_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_ordered_dictionary = _pi.Optional_Value<current_ordered_dictionary.O>
        
        export type signature = i_resolved.Signature_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
        export type signatures = i_resolved.Signatures_
        
        export type types = i_resolved.Types_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Possible_Value_Selection_ = (
    $$_: Possible_Value_Selection_.I,
    $$_lookups: {
        readonly 'sibling property resolvers': _pi.Acyclic_Lookup<Possible_Value_Selection_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<Possible_Value_Selection_.L.parent_sibling_property_resolvers>
    },
    $$_p: {
        readonly 'definition': Possible_Value_Selection_.P.definition
        readonly 'list cursor': Possible_Value_Selection_.P.list_cursor
        readonly 'linked entry': Possible_Value_Selection_.P.linked_entry
        readonly 'current dictionary': Possible_Value_Selection_.P.current_dictionary
        readonly 'current ordered dictionary': Possible_Value_Selection_.P.current_ordered_dictionary
        readonly 'signature': Possible_Value_Selection_.P.signature
        readonly 'imports': Possible_Value_Selection_.P.imports
        readonly 'signatures': Possible_Value_Selection_.P.signatures
        readonly 'types': Possible_Value_Selection_.P.types
        readonly 'option constraints': Possible_Value_Selection_.P.option_constraints
    },
) => Possible_Value_Selection_.O

export namespace Guaranteed_Value_Selection_ {
    
    export type I = i_unresolved.Guaranteed_Value_Selection
    
    export type O = i_resolved.Guaranteed_Value_Selection
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Type_Node_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Node_Resolver_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Benchmark_
            
        }
        
        export type linked_entry = _pi.Optional_Value<linked_entry.O>
        
        export namespace current_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_dictionary = _pi.Optional_Value<current_dictionary.O>
        
        export namespace current_ordered_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_ordered_dictionary = _pi.Optional_Value<current_ordered_dictionary.O>
        
        export type signature = i_resolved.Signature_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
        export type signatures = i_resolved.Signatures_
        
        export type types = i_resolved.Types_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Guaranteed_Value_Selection_ = (
    $$_: Guaranteed_Value_Selection_.I,
    $$_lookups: {
        readonly 'sibling property resolvers': _pi.Acyclic_Lookup<Guaranteed_Value_Selection_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<Guaranteed_Value_Selection_.L.parent_sibling_property_resolvers>
    },
    $$_p: {
        readonly 'definition': Guaranteed_Value_Selection_.P.definition
        readonly 'list cursor': Guaranteed_Value_Selection_.P.list_cursor
        readonly 'linked entry': Guaranteed_Value_Selection_.P.linked_entry
        readonly 'current dictionary': Guaranteed_Value_Selection_.P.current_dictionary
        readonly 'current ordered dictionary': Guaranteed_Value_Selection_.P.current_ordered_dictionary
        readonly 'signature': Guaranteed_Value_Selection_.P.signature
        readonly 'imports': Guaranteed_Value_Selection_.P.imports
        readonly 'signatures': Guaranteed_Value_Selection_.P.signatures
        readonly 'types': Guaranteed_Value_Selection_.P.types
        readonly 'option constraints': Guaranteed_Value_Selection_.P.option_constraints
    },
) => Guaranteed_Value_Selection_.O

export namespace Benchmark_ {
    
    export type I = i_unresolved.Benchmark
    
    export type O = i_resolved.Benchmark
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Type_Node_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Node_Resolver_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Benchmark_
            
        }
        
        export type linked_entry = _pi.Optional_Value<linked_entry.O>
        
        export namespace current_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_dictionary = _pi.Optional_Value<current_dictionary.O>
        
        export namespace current_ordered_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_ordered_dictionary = _pi.Optional_Value<current_ordered_dictionary.O>
        
        export type signature = i_resolved.Signature_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
        export type signatures = i_resolved.Signatures_
        
        export type types = i_resolved.Types_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Benchmark_ = (
    $$_: Benchmark_.I,
    $$_lookups: {
        readonly 'sibling property resolvers': _pi.Acyclic_Lookup<Benchmark_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<Benchmark_.L.parent_sibling_property_resolvers>
    },
    $$_p: {
        readonly 'definition': Benchmark_.P.definition
        readonly 'list cursor': Benchmark_.P.list_cursor
        readonly 'linked entry': Benchmark_.P.linked_entry
        readonly 'current dictionary': Benchmark_.P.current_dictionary
        readonly 'current ordered dictionary': Benchmark_.P.current_ordered_dictionary
        readonly 'signature': Benchmark_.P.signature
        readonly 'imports': Benchmark_.P.imports
        readonly 'signatures': Benchmark_.P.signatures
        readonly 'types': Benchmark_.P.types
        readonly 'option constraints': Benchmark_.P.option_constraints
    },
) => Benchmark_.O

export namespace Optional_Value_Initialization_ {
    
    export type I = i_unresolved.Optional_Value_Initialization
    
    export type O = i_resolved.Optional_Value_Initialization
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Type_Node_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Node_Resolver_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Benchmark_
            
        }
        
        export type linked_entry = _pi.Optional_Value<linked_entry.O>
        
        export namespace current_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_dictionary = _pi.Optional_Value<current_dictionary.O>
        
        export namespace current_ordered_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_ordered_dictionary = _pi.Optional_Value<current_ordered_dictionary.O>
        
        export type signature = i_resolved.Signature_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
        export type signatures = i_resolved.Signatures_
        
        export type types = i_resolved.Types_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Optional_Value_Initialization_ = (
    $$_: Optional_Value_Initialization_.I,
    $$_lookups: {
        readonly 'sibling property resolvers': _pi.Acyclic_Lookup<Optional_Value_Initialization_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<Optional_Value_Initialization_.L.parent_sibling_property_resolvers>
    },
    $$_p: {
        readonly 'definition': Optional_Value_Initialization_.P.definition
        readonly 'list cursor': Optional_Value_Initialization_.P.list_cursor
        readonly 'linked entry': Optional_Value_Initialization_.P.linked_entry
        readonly 'current dictionary': Optional_Value_Initialization_.P.current_dictionary
        readonly 'current ordered dictionary': Optional_Value_Initialization_.P.current_ordered_dictionary
        readonly 'signature': Optional_Value_Initialization_.P.signature
        readonly 'imports': Optional_Value_Initialization_.P.imports
        readonly 'signatures': Optional_Value_Initialization_.P.signatures
        readonly 'types': Optional_Value_Initialization_.P.types
        readonly 'option constraints': Optional_Value_Initialization_.P.option_constraints
    },
) => Optional_Value_Initialization_.O

export namespace Lookup_Selection_ {
    
    export type I = i_unresolved.Lookup_Selection
    
    export type O = i_resolved.Lookup_Selection
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Type_Node_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Node_Resolver_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Benchmark_
            
        }
        
        export type linked_entry = _pi.Optional_Value<linked_entry.O>
        
        export namespace current_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_dictionary = _pi.Optional_Value<current_dictionary.O>
        
        export namespace current_ordered_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_ordered_dictionary = _pi.Optional_Value<current_ordered_dictionary.O>
        
        export type signature = i_resolved.Signature_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
        export type signatures = i_resolved.Signatures_
        
        export type types = i_resolved.Types_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Lookup_Selection_ = (
    $$_: Lookup_Selection_.I,
    $$_lookups: {
        readonly 'sibling property resolvers': _pi.Acyclic_Lookup<Lookup_Selection_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<Lookup_Selection_.L.parent_sibling_property_resolvers>
    },
    $$_p: {
        readonly 'definition': Lookup_Selection_.P.definition
        readonly 'list cursor': Lookup_Selection_.P.list_cursor
        readonly 'linked entry': Lookup_Selection_.P.linked_entry
        readonly 'current dictionary': Lookup_Selection_.P.current_dictionary
        readonly 'current ordered dictionary': Lookup_Selection_.P.current_ordered_dictionary
        readonly 'signature': Lookup_Selection_.P.signature
        readonly 'imports': Lookup_Selection_.P.imports
        readonly 'signatures': Lookup_Selection_.P.signatures
        readonly 'types': Lookup_Selection_.P.types
        readonly 'option constraints': Lookup_Selection_.P.option_constraints
    },
) => Lookup_Selection_.O

export namespace Option_Constraints_ {
    
    export type I = i_unresolved.Option_Constraints
    
    export type O = i_resolved.Option_Constraints
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Type_Node_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Node_Resolver_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Benchmark_
            
        }
        
        export type linked_entry = _pi.Optional_Value<linked_entry.O>
        
        export namespace current_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_dictionary = _pi.Optional_Value<current_dictionary.O>
        
        export namespace current_ordered_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_ordered_dictionary = _pi.Optional_Value<current_ordered_dictionary.O>
        
        export type signature = i_resolved.Signature_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
        export type signatures = i_resolved.Signatures_
        
        export type types = i_resolved.Types_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Option_Constraints_ = (
    $$_: Option_Constraints_.I,
    $$_lookups: {
        readonly 'sibling property resolvers': _pi.Acyclic_Lookup<Option_Constraints_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<Option_Constraints_.L.parent_sibling_property_resolvers>
    },
    $$_p: {
        readonly 'definition': Option_Constraints_.P.definition
        readonly 'list cursor': Option_Constraints_.P.list_cursor
        readonly 'linked entry': Option_Constraints_.P.linked_entry
        readonly 'current dictionary': Option_Constraints_.P.current_dictionary
        readonly 'current ordered dictionary': Option_Constraints_.P.current_ordered_dictionary
        readonly 'signature': Option_Constraints_.P.signature
        readonly 'imports': Option_Constraints_.P.imports
        readonly 'signatures': Option_Constraints_.P.signatures
        readonly 'types': Option_Constraints_.P.types
        readonly 'option constraints': Option_Constraints_.P.option_constraints
    },
) => Option_Constraints_.O

export namespace Node_Resolver_List_Result_ {
    
    export type I = i_unresolved.Node_Resolver_List_Result
    
    export type O = i_resolved.Node_Resolver_List_Result
    
    export namespace L {
        
        export type types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Node_Resolver_List_Result_ = (
    $$_: Node_Resolver_List_Result_.I,
    $$_lookups: {
        readonly 'types': _pi.Acyclic_Lookup<Node_Resolver_List_Result_.L.types>
    },
    $$_p: {
        readonly 'imports': Node_Resolver_List_Result_.P.imports
    },
) => Node_Resolver_List_Result_.O

export namespace Node_Resolver_Group_ {
    
    export type I = i_unresolved.Node_Resolver_Group
    
    export type O = i_resolved.Node_Resolver_Group
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Node_Resolver_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Group_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Node_Resolver_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Benchmark_
            
        }
        
        export type linked_entry = _pi.Optional_Value<linked_entry.O>
        
        export namespace current_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_dictionary = _pi.Optional_Value<current_dictionary.O>
        
        export namespace current_ordered_dictionary {
            
            export type O = i_resolved.Dictionary_
            
        }
        
        export type current_ordered_dictionary = _pi.Optional_Value<current_ordered_dictionary.O>
        
        export type signature = i_resolved.Signature_
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
        export type signatures = i_resolved.Signatures_
        
        export type types = i_resolved.Types_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Node_Resolver_Group_ = (
    $$_: Node_Resolver_Group_.I,
    $$_lookups: {
        readonly 'sibling property resolvers': _pi.Acyclic_Lookup<Node_Resolver_Group_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<Node_Resolver_Group_.L.parent_sibling_property_resolvers>
    },
    $$_p: {
        readonly 'definition': Node_Resolver_Group_.P.definition
        readonly 'list cursor': Node_Resolver_Group_.P.list_cursor
        readonly 'linked entry': Node_Resolver_Group_.P.linked_entry
        readonly 'current dictionary': Node_Resolver_Group_.P.current_dictionary
        readonly 'current ordered dictionary': Node_Resolver_Group_.P.current_ordered_dictionary
        readonly 'signature': Node_Resolver_Group_.P.signature
        readonly 'imports': Node_Resolver_Group_.P.imports
        readonly 'signatures': Node_Resolver_Group_.P.signatures
        readonly 'types': Node_Resolver_Group_.P.types
        readonly 'option constraints': Node_Resolver_Group_.P.option_constraints
    },
) => Node_Resolver_Group_.O

export namespace Relative_Value_Selection_ {
    
    export type I = i_unresolved.Relative_Value_Selection
    
    export type O = i_resolved.Relative_Value_Selection
    
    export namespace P {
        
        export type node = i_resolved.Type_Node_
        
    }
    
}

export type Relative_Value_Selection_ = (
    $$_: Relative_Value_Selection_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'node': Relative_Value_Selection_.P.node
    },
) => Relative_Value_Selection_.O

export namespace Constraint_ {
    
    export type I = i_unresolved.Constraint
    
    export type O = i_resolved.Constraint
    
    export namespace P {
        
        export type node = i_resolved.Type_Node_
        
    }
    
}

export type Constraint_ = (
    $$_: Constraint_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'node': Constraint_.P.node
    },
) => Constraint_.O

export namespace Property_Constraints_ {
    
    export type I = i_unresolved.Property_Constraints
    
    export type O = i_resolved.Property_Constraints
    
    export namespace P {
        
        export type node = i_resolved.Type_Node_
        
    }
    
}

export type Property_Constraints_ = (
    $$_: Property_Constraints_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'node': Property_Constraints_.P.node
    },
) => Property_Constraints_.O

export namespace Property_Constraint_ {
    
    export type I = i_unresolved.Property_Constraint
    
    export type O = i_resolved.Property_Constraint
    
    export namespace L {
        
        export type property_constraints = i_resolved.Property_Constraints_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Property_Constraint_ = (
    $$_: Property_Constraint_.I,
    $$_lookups: {
        readonly 'property constraints': _pi.Acyclic_Lookup<Property_Constraint_.L.property_constraints>
    },
    $$_p: null,
) => Property_Constraint_.O

export namespace Resolve_Logic_ {
    
    export type I = i_unresolved.Resolve_Logic
    
    export type O = i_resolved.Resolve_Logic
    
    export namespace P {
        
        export type types = i_resolved.Types_
        
        export type imports = i_resolved.Imports_
        
    }
    
}

export type Resolve_Logic_ = (
    $$_: Resolve_Logic_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'types': Resolve_Logic_.P.types
        readonly 'imports': Resolve_Logic_.P.imports
    },
) => Resolve_Logic_.O

export namespace Signature_Parameters_ {
    
    export type I = i_unresolved.Signature_Parameters
    
    export type O = i_resolved.Signature_Parameters
    
    export namespace P {
        
        export type types = i_resolved.Types_
        
        export type imports = i_resolved.Imports_
        
    }
    
}

export type Signature_Parameters_ = (
    $$_: Signature_Parameters_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'types': Signature_Parameters_.P.types
        readonly 'imports': Signature_Parameters_.P.imports
    },
) => Signature_Parameters_.O

export namespace Signature_ {
    
    export type I = i_unresolved.Signature
    
    export type O = i_resolved.Signature
    
    export namespace L {
        
        export type sibling_signatures = i_resolved.Signatures_.D
        
    }
    
    export namespace P {
        
        export type types = i_resolved.Types_
        
        export type _type = i_resolved.Type_
        
        export type imports = i_resolved.Imports_
        
    }
    
}

export type Signature_ = (
    $$_: Signature_.I,
    $$_lookups: {
        readonly 'sibling signatures': _pi.Acyclic_Lookup<Signature_.L.sibling_signatures>
    },
    $$_p: {
        readonly 'types': Signature_.P.types
        readonly 'type': Signature_.P._type
        readonly 'imports': Signature_.P.imports
    },
) => Signature_.O

export namespace Signatures_ {
    
    export type I = i_unresolved.Signatures
    
    export type O = i_resolved.Signatures
    
    export namespace P {
        
        export type types = i_resolved.Types_
        
        export type imports = i_resolved.Imports_
        
    }
    
}

export type Signatures_ = (
    $$_: Signatures_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'types': Signatures_.P.types
        readonly 'imports': Signatures_.P.imports
    },
) => Signatures_.O

export namespace Resolvers_ {
    
    export type I = i_unresolved.Resolvers
    
    export type O = i_resolved.Resolvers
    
    export namespace P {
        
        export type signatures = i_resolved.Signatures_
        
        export type types = i_resolved.Types_
        
        export type imports = i_resolved.Imports_
        
    }
    
}

export type Resolvers_ = (
    $$_: Resolvers_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'signatures': Resolvers_.P.signatures
        readonly 'types': Resolvers_.P.types
        readonly 'imports': Resolvers_.P.imports
    },
) => Resolvers_.O

export namespace Schemas_ {
    
    export type I = i_unresolved.Schemas
    
    export type O = i_resolved.Schemas
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schemas_ = (
    $$_: Schemas_.I,
    $$_lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Schemas_.L.sibling_schemas>
    },
    $$_p: null,
) => Schemas_.O

export namespace Type_Specification_ {
    
    export type I = i_unresolved.Type_Specification
    
    export type O = i_resolved.Type_Specification
    
    export namespace P {
        
    }
    
}

export type Type_Specification_ = (
    $$_: Type_Specification_.I,
    $$_lookups: null,
    $$_p: null,
) => Type_Specification_.O

export namespace Schema_Tree_ {
    
    export type I = i_unresolved.Schema_Tree
    
    export type O = i_resolved.Schema_Tree
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schema_Tree_ = (
    $$_: Schema_Tree_.I,
    $$_lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Schema_Tree_.L.sibling_schemas>
    },
    $$_p: null,
) => Schema_Tree_.O

export namespace Schema_ {
    
    export type I = i_unresolved.Schema
    
    export type O = i_resolved.Schema
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    $$_: Schema_.I,
    $$_lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Schema_.L.sibling_schemas>
    },
    $$_p: null,
) => Schema_.O

export namespace Imports_ {
    
    export type I = i_unresolved.Imports
    
    export type O = i_resolved.Imports
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    $$_: Imports_.I,
    $$_lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Imports_.L.sibling_schemas>
    },
    $$_p: null,
) => Imports_.O

export namespace Reference_To_Property_Constraint_ {
    
    export type I = i_unresolved.Reference_To_Property_Constraint
    
    export type O = i_resolved.Reference_To_Property_Constraint
    
    export namespace L {
        
        export type property_constraints = i_resolved.Property_Constraints_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Reference_To_Property_Constraint_ = (
    $$_: Reference_To_Property_Constraint_.I,
    $$_lookups: {
        readonly 'property constraints': _pi.Acyclic_Lookup<Reference_To_Property_Constraint_.L.property_constraints>
    },
    $$_p: null,
) => Reference_To_Property_Constraint_.O

export namespace Types_ {
    
    export type I = i_unresolved.Types
    
    export type O = i_resolved.Types
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Types_ = (
    $$_: Types_.I,
    $$_lookups: null,
    $$_p: {
        readonly 'globals': Types_.P.globals
        readonly 'imports': Types_.P.imports
    },
) => Types_.O

export { 
    Type_Parameters_ as Type_Parameters, 
    Presence_ as Presence, 
    Number_Type_ as Number_Type, 
    Text_Type_ as Text_Type, 
    Globals_ as Globals, 
    Group_ as Group, 
    Dictionary_ as Dictionary, 
    Type_Node_ as Type_Node, 
    Type_ as Type, 
    Type_Reference_ as Type_Reference, 
    Type_Node_Reference_ as Type_Node_Reference, 
    Node_Resolver_ as Node_Resolver, 
    Possible_Value_Selection_ as Possible_Value_Selection, 
    Guaranteed_Value_Selection_ as Guaranteed_Value_Selection, 
    Benchmark_ as Benchmark, 
    Optional_Value_Initialization_ as Optional_Value_Initialization, 
    Lookup_Selection_ as Lookup_Selection, 
    Option_Constraints_ as Option_Constraints, 
    Node_Resolver_List_Result_ as Node_Resolver_List_Result, 
    Node_Resolver_Group_ as Node_Resolver_Group, 
    Relative_Value_Selection_ as Relative_Value_Selection, 
    Constraint_ as Constraint, 
    Property_Constraints_ as Property_Constraints, 
    Property_Constraint_ as Property_Constraint, 
    Resolve_Logic_ as Resolve_Logic, 
    Signature_Parameters_ as Signature_Parameters, 
    Signature_ as Signature, 
    Signatures_ as Signatures, 
    Resolvers_ as Resolvers, 
    Schemas_ as Schemas, 
    Type_Specification_ as Type_Specification, 
    Schema_Tree_ as Schema_Tree, 
    Schema_ as Schema, 
    Imports_ as Imports, 
    Reference_To_Property_Constraint_ as Reference_To_Property_Constraint, 
    Types_ as Types, 
}
