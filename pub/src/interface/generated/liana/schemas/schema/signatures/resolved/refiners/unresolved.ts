
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/resolve"

import * as i_resolved from "../../../data/resolved"

import * as i_unresolved from "../../../data/unresolved"

export namespace Package_ {
    
    export type I = i_unresolved.Package
    
    export type O = i_resolved.Package
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Package_ = (
    context: Package_.I,
    abort: _pi.Abort<Package_.E>,
    lookups: null,
    parameters: null,
) => Package_.O

export namespace Presence_ {
    
    export type I = i_unresolved.Presence
    
    export type O = i_resolved.Presence
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Presence_ = (
    context: Presence_.I,
    abort: _pi.Abort<Presence_.E>,
    lookups: null,
    parameters: null,
) => Presence_.O

export namespace Number_Type_ {
    
    export type I = i_unresolved.Number_Type
    
    export type O = i_resolved.Number_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Number_Type_ = (
    context: Number_Type_.I,
    abort: _pi.Abort<Number_Type_.E>,
    lookups: null,
    parameters: null,
) => Number_Type_.O

export namespace Text_Type_ {
    
    export type I = i_unresolved.Text_Type
    
    export type O = i_resolved.Text_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
    abort: _pi.Abort<Text_Type_.E>,
    lookups: null,
    parameters: null,
) => Text_Type_.O

export namespace Globals_ {
    
    export type I = i_unresolved.Globals
    
    export type O = i_resolved.Globals
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
    abort: _pi.Abort<Globals_.E>,
    lookups: null,
    parameters: null,
) => Globals_.O

export namespace Group_ {
    
    export type I = i_unresolved.Group
    
    export type O = i_resolved.Group
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Group_ = (
    context: Group_.I,
    abort: _pi.Abort<Group_.E>,
    lookups: {
        readonly 'noncircular sibling modules': _pi.lookup.Acyclic<Group_.L.noncircular_sibling_modules>
        readonly 'possibly circular dependent sibling modules': _pi.lookup.Cyclic<Group_.L.possibly_circular_dependent_sibling_modules>
    },
    parameters: {
        readonly 'globals': Group_.P.globals
        readonly 'imports': Group_.P.imports
    },
) => Group_.O

export namespace Dictionary_ {
    
    export type I = i_unresolved.Dictionary
    
    export type O = i_resolved.Dictionary
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Dictionary_ = (
    context: Dictionary_.I,
    abort: _pi.Abort<Dictionary_.E>,
    lookups: {
        readonly 'noncircular sibling modules': _pi.lookup.Acyclic<Dictionary_.L.noncircular_sibling_modules>
        readonly 'possibly circular dependent sibling modules': _pi.lookup.Cyclic<Dictionary_.L.possibly_circular_dependent_sibling_modules>
    },
    parameters: {
        readonly 'globals': Dictionary_.P.globals
        readonly 'imports': Dictionary_.P.imports
    },
) => Dictionary_.O

export namespace Value_ {
    
    export type I = i_unresolved.Value
    
    export type O = i_resolved.Value
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
    lookups: {
        readonly 'noncircular sibling modules': _pi.lookup.Acyclic<Value_.L.noncircular_sibling_modules>
        readonly 'possibly circular dependent sibling modules': _pi.lookup.Cyclic<Value_.L.possibly_circular_dependent_sibling_modules>
    },
    parameters: {
        readonly 'globals': Value_.P.globals
        readonly 'imports': Value_.P.imports
    },
) => Value_.O

export namespace Module_Reference_ {
    
    export type I = i_unresolved.Module_Reference
    
    export type O = i_resolved.Module_Reference
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Module_Reference_ = (
    context: Module_Reference_.I,
    abort: _pi.Abort<Module_Reference_.E>,
    lookups: {
        readonly 'modules': _pi.lookup.Acyclic<Module_Reference_.L.modules>
    },
    parameters: {
        readonly 'imports': Module_Reference_.P.imports
    },
) => Module_Reference_.O

export namespace Value_Reference_ {
    
    export type I = i_unresolved.Value_Reference
    
    export type O = i_resolved.Value_Reference
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Value_Reference_ = (
    context: Value_Reference_.I,
    abort: _pi.Abort<Value_Reference_.E>,
    lookups: {
        readonly 'modules': _pi.lookup.Acyclic<Value_Reference_.L.modules>
    },
    parameters: {
        readonly 'imports': Value_Reference_.P.imports
    },
) => Value_Reference_.O

export namespace Value_Results_ {
    
    export type I = i_unresolved.Value_Results
    
    export type O = i_resolved.Value_Results
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Value_Results_ = (
    context: Value_Results_.I,
    abort: _pi.Abort<Value_Results_.E>,
    lookups: {
        readonly 'modules': _pi.lookup.Acyclic<Value_Results_.L.modules>
    },
    parameters: {
        readonly 'imports': Value_Results_.P.imports
    },
) => Value_Results_.O

export namespace Option_Constraints_ {
    
    export type I = i_unresolved.Option_Constraints
    
    export type O = i_resolved.Option_Constraints
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Option_Constraints_ = (
    context: Option_Constraints_.I,
    abort: _pi.Abort<Option_Constraints_.E>,
    lookups: {
        readonly 'modules': _pi.lookup.Acyclic<Option_Constraints_.L.modules>
    },
    parameters: {
        readonly 'imports': Option_Constraints_.P.imports
    },
) => Option_Constraints_.O

export namespace Module_ {
    
    export type I = i_unresolved.Module
    
    export type O = i_resolved.Module
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Module_ = (
    context: Module_.I,
    abort: _pi.Abort<Module_.E>,
    lookups: {
        readonly 'noncircular sibling modules': _pi.lookup.Acyclic<Module_.L.noncircular_sibling_modules>
        readonly 'possibly circular dependent sibling modules': _pi.lookup.Cyclic<Module_.L.possibly_circular_dependent_sibling_modules>
    },
    parameters: {
        readonly 'globals': Module_.P.globals
        readonly 'imports': Module_.P.imports
    },
) => Module_.O

export namespace Value_Path_ {
    
    export type I = i_unresolved.Value_Path
    
    export type O = i_resolved.Value_Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type module_ = i_resolved.Module_
        
    }
    
}

export type Value_Path_ = (
    context: Value_Path_.I,
    abort: _pi.Abort<Value_Path_.E>,
    lookups: null,
    parameters: {
        readonly 'module': Value_Path_.P.module_
    },
) => Value_Path_.O

export namespace Schemas_ {
    
    export type I = i_unresolved.Schemas
    
    export type O = i_resolved.Schemas
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
    abort: _pi.Abort<Schemas_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.lookup.Stack<Schemas_.L.sibling_schemas>
    },
    parameters: null,
) => Schemas_.O

export namespace Resolver_Value_ {
    
    export type I = i_unresolved.Resolver_Value
    
    export type O = i_resolved.Resolver_Value
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Value_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Resolver_Value_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Resolver_Benchmark_
            
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
        
        export type signature = i_resolved.Resolver_Signature_
        
        export namespace schema_imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type schema_imports = _pi.Optional_Value<schema_imports.O>
        
        export namespace resolver_imports {
            
            export type O = i_resolved.Resolver_Imports_
            
        }
        
        export type resolver_imports = _pi.Optional_Value<resolver_imports.O>
        
        export type signatures = i_resolved.Resolver_Signatures_
        
        export type modules = i_resolved.Modules_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Resolver_Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Resolver_Value_ = (
    context: Resolver_Value_.I,
    abort: _pi.Abort<Resolver_Value_.E>,
    lookups: {
        readonly 'sibling property resolvers': _pi.lookup.Acyclic<Resolver_Value_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Resolver_Value_.L.parent_sibling_property_resolvers>
    },
    parameters: {
        readonly 'definition': Resolver_Value_.P.definition
        readonly 'list cursor': Resolver_Value_.P.list_cursor
        readonly 'linked entry': Resolver_Value_.P.linked_entry
        readonly 'current dictionary': Resolver_Value_.P.current_dictionary
        readonly 'current ordered dictionary': Resolver_Value_.P.current_ordered_dictionary
        readonly 'signature': Resolver_Value_.P.signature
        readonly 'schema imports': Resolver_Value_.P.schema_imports
        readonly 'resolver imports': Resolver_Value_.P.resolver_imports
        readonly 'signatures': Resolver_Value_.P.signatures
        readonly 'modules': Resolver_Value_.P.modules
        readonly 'option constraints': Resolver_Value_.P.option_constraints
    },
) => Resolver_Value_.O

export namespace Resolver_Possible_Value_Selection_ {
    
    export type I = i_unresolved.Resolver_Possible_Value_Selection
    
    export type O = i_resolved.Resolver_Possible_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Value_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Resolver_Value_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Resolver_Benchmark_
            
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
        
        export type signature = i_resolved.Resolver_Signature_
        
        export namespace schema_imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type schema_imports = _pi.Optional_Value<schema_imports.O>
        
        export namespace resolver_imports {
            
            export type O = i_resolved.Resolver_Imports_
            
        }
        
        export type resolver_imports = _pi.Optional_Value<resolver_imports.O>
        
        export type signatures = i_resolved.Resolver_Signatures_
        
        export type modules = i_resolved.Modules_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Resolver_Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Resolver_Possible_Value_Selection_ = (
    context: Resolver_Possible_Value_Selection_.I,
    abort: _pi.Abort<Resolver_Possible_Value_Selection_.E>,
    lookups: {
        readonly 'sibling property resolvers': _pi.lookup.Acyclic<Resolver_Possible_Value_Selection_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Resolver_Possible_Value_Selection_.L.parent_sibling_property_resolvers>
    },
    parameters: {
        readonly 'definition': Resolver_Possible_Value_Selection_.P.definition
        readonly 'list cursor': Resolver_Possible_Value_Selection_.P.list_cursor
        readonly 'linked entry': Resolver_Possible_Value_Selection_.P.linked_entry
        readonly 'current dictionary': Resolver_Possible_Value_Selection_.P.current_dictionary
        readonly 'current ordered dictionary': Resolver_Possible_Value_Selection_.P.current_ordered_dictionary
        readonly 'signature': Resolver_Possible_Value_Selection_.P.signature
        readonly 'schema imports': Resolver_Possible_Value_Selection_.P.schema_imports
        readonly 'resolver imports': Resolver_Possible_Value_Selection_.P.resolver_imports
        readonly 'signatures': Resolver_Possible_Value_Selection_.P.signatures
        readonly 'modules': Resolver_Possible_Value_Selection_.P.modules
        readonly 'option constraints': Resolver_Possible_Value_Selection_.P.option_constraints
    },
) => Resolver_Possible_Value_Selection_.O

export namespace Resolver_Guaranteed_Value_Selection_ {
    
    export type I = i_unresolved.Resolver_Guaranteed_Value_Selection
    
    export type O = i_resolved.Resolver_Guaranteed_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Value_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Resolver_Value_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Resolver_Benchmark_
            
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
        
        export type signature = i_resolved.Resolver_Signature_
        
        export namespace schema_imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type schema_imports = _pi.Optional_Value<schema_imports.O>
        
        export namespace resolver_imports {
            
            export type O = i_resolved.Resolver_Imports_
            
        }
        
        export type resolver_imports = _pi.Optional_Value<resolver_imports.O>
        
        export type signatures = i_resolved.Resolver_Signatures_
        
        export type modules = i_resolved.Modules_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Resolver_Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Resolver_Guaranteed_Value_Selection_ = (
    context: Resolver_Guaranteed_Value_Selection_.I,
    abort: _pi.Abort<Resolver_Guaranteed_Value_Selection_.E>,
    lookups: {
        readonly 'sibling property resolvers': _pi.lookup.Acyclic<Resolver_Guaranteed_Value_Selection_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Resolver_Guaranteed_Value_Selection_.L.parent_sibling_property_resolvers>
    },
    parameters: {
        readonly 'definition': Resolver_Guaranteed_Value_Selection_.P.definition
        readonly 'list cursor': Resolver_Guaranteed_Value_Selection_.P.list_cursor
        readonly 'linked entry': Resolver_Guaranteed_Value_Selection_.P.linked_entry
        readonly 'current dictionary': Resolver_Guaranteed_Value_Selection_.P.current_dictionary
        readonly 'current ordered dictionary': Resolver_Guaranteed_Value_Selection_.P.current_ordered_dictionary
        readonly 'signature': Resolver_Guaranteed_Value_Selection_.P.signature
        readonly 'schema imports': Resolver_Guaranteed_Value_Selection_.P.schema_imports
        readonly 'resolver imports': Resolver_Guaranteed_Value_Selection_.P.resolver_imports
        readonly 'signatures': Resolver_Guaranteed_Value_Selection_.P.signatures
        readonly 'modules': Resolver_Guaranteed_Value_Selection_.P.modules
        readonly 'option constraints': Resolver_Guaranteed_Value_Selection_.P.option_constraints
    },
) => Resolver_Guaranteed_Value_Selection_.O

export namespace Resolver_Benchmark_ {
    
    export type I = i_unresolved.Resolver_Benchmark
    
    export type O = i_resolved.Resolver_Benchmark
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Value_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Resolver_Value_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Resolver_Benchmark_
            
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
        
        export type signature = i_resolved.Resolver_Signature_
        
        export namespace schema_imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type schema_imports = _pi.Optional_Value<schema_imports.O>
        
        export namespace resolver_imports {
            
            export type O = i_resolved.Resolver_Imports_
            
        }
        
        export type resolver_imports = _pi.Optional_Value<resolver_imports.O>
        
        export type signatures = i_resolved.Resolver_Signatures_
        
        export type modules = i_resolved.Modules_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Resolver_Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Resolver_Benchmark_ = (
    context: Resolver_Benchmark_.I,
    abort: _pi.Abort<Resolver_Benchmark_.E>,
    lookups: {
        readonly 'sibling property resolvers': _pi.lookup.Acyclic<Resolver_Benchmark_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Resolver_Benchmark_.L.parent_sibling_property_resolvers>
    },
    parameters: {
        readonly 'definition': Resolver_Benchmark_.P.definition
        readonly 'list cursor': Resolver_Benchmark_.P.list_cursor
        readonly 'linked entry': Resolver_Benchmark_.P.linked_entry
        readonly 'current dictionary': Resolver_Benchmark_.P.current_dictionary
        readonly 'current ordered dictionary': Resolver_Benchmark_.P.current_ordered_dictionary
        readonly 'signature': Resolver_Benchmark_.P.signature
        readonly 'schema imports': Resolver_Benchmark_.P.schema_imports
        readonly 'resolver imports': Resolver_Benchmark_.P.resolver_imports
        readonly 'signatures': Resolver_Benchmark_.P.signatures
        readonly 'modules': Resolver_Benchmark_.P.modules
        readonly 'option constraints': Resolver_Benchmark_.P.option_constraints
    },
) => Resolver_Benchmark_.O

export namespace Resolver_Optional_Value_Initialization_ {
    
    export type I = i_unresolved.Resolver_Optional_Value_Initialization
    
    export type O = i_resolved.Resolver_Optional_Value_Initialization
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Value_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Resolver_Value_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Resolver_Benchmark_
            
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
        
        export type signature = i_resolved.Resolver_Signature_
        
        export namespace schema_imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type schema_imports = _pi.Optional_Value<schema_imports.O>
        
        export namespace resolver_imports {
            
            export type O = i_resolved.Resolver_Imports_
            
        }
        
        export type resolver_imports = _pi.Optional_Value<resolver_imports.O>
        
        export type signatures = i_resolved.Resolver_Signatures_
        
        export type modules = i_resolved.Modules_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Resolver_Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Resolver_Optional_Value_Initialization_ = (
    context: Resolver_Optional_Value_Initialization_.I,
    abort: _pi.Abort<Resolver_Optional_Value_Initialization_.E>,
    lookups: {
        readonly 'sibling property resolvers': _pi.lookup.Acyclic<Resolver_Optional_Value_Initialization_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Resolver_Optional_Value_Initialization_.L.parent_sibling_property_resolvers>
    },
    parameters: {
        readonly 'definition': Resolver_Optional_Value_Initialization_.P.definition
        readonly 'list cursor': Resolver_Optional_Value_Initialization_.P.list_cursor
        readonly 'linked entry': Resolver_Optional_Value_Initialization_.P.linked_entry
        readonly 'current dictionary': Resolver_Optional_Value_Initialization_.P.current_dictionary
        readonly 'current ordered dictionary': Resolver_Optional_Value_Initialization_.P.current_ordered_dictionary
        readonly 'signature': Resolver_Optional_Value_Initialization_.P.signature
        readonly 'schema imports': Resolver_Optional_Value_Initialization_.P.schema_imports
        readonly 'resolver imports': Resolver_Optional_Value_Initialization_.P.resolver_imports
        readonly 'signatures': Resolver_Optional_Value_Initialization_.P.signatures
        readonly 'modules': Resolver_Optional_Value_Initialization_.P.modules
        readonly 'option constraints': Resolver_Optional_Value_Initialization_.P.option_constraints
    },
) => Resolver_Optional_Value_Initialization_.O

export namespace Resolver_Lookup_Selection_ {
    
    export type I = i_unresolved.Resolver_Lookup_Selection
    
    export type O = i_resolved.Resolver_Lookup_Selection
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Value_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Resolver_Value_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Resolver_Benchmark_
            
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
        
        export type signature = i_resolved.Resolver_Signature_
        
        export namespace schema_imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type schema_imports = _pi.Optional_Value<schema_imports.O>
        
        export namespace resolver_imports {
            
            export type O = i_resolved.Resolver_Imports_
            
        }
        
        export type resolver_imports = _pi.Optional_Value<resolver_imports.O>
        
        export type signatures = i_resolved.Resolver_Signatures_
        
        export type modules = i_resolved.Modules_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Resolver_Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Resolver_Lookup_Selection_ = (
    context: Resolver_Lookup_Selection_.I,
    abort: _pi.Abort<Resolver_Lookup_Selection_.E>,
    lookups: {
        readonly 'sibling property resolvers': _pi.lookup.Acyclic<Resolver_Lookup_Selection_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Resolver_Lookup_Selection_.L.parent_sibling_property_resolvers>
    },
    parameters: {
        readonly 'definition': Resolver_Lookup_Selection_.P.definition
        readonly 'list cursor': Resolver_Lookup_Selection_.P.list_cursor
        readonly 'linked entry': Resolver_Lookup_Selection_.P.linked_entry
        readonly 'current dictionary': Resolver_Lookup_Selection_.P.current_dictionary
        readonly 'current ordered dictionary': Resolver_Lookup_Selection_.P.current_ordered_dictionary
        readonly 'signature': Resolver_Lookup_Selection_.P.signature
        readonly 'schema imports': Resolver_Lookup_Selection_.P.schema_imports
        readonly 'resolver imports': Resolver_Lookup_Selection_.P.resolver_imports
        readonly 'signatures': Resolver_Lookup_Selection_.P.signatures
        readonly 'modules': Resolver_Lookup_Selection_.P.modules
        readonly 'option constraints': Resolver_Lookup_Selection_.P.option_constraints
    },
) => Resolver_Lookup_Selection_.O

export namespace Resolver_Option_Constraints_ {
    
    export type I = i_unresolved.Resolver_Option_Constraints
    
    export type O = i_resolved.Resolver_Option_Constraints
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Value_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Resolver_Value_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Resolver_Benchmark_
            
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
        
        export type signature = i_resolved.Resolver_Signature_
        
        export namespace schema_imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type schema_imports = _pi.Optional_Value<schema_imports.O>
        
        export namespace resolver_imports {
            
            export type O = i_resolved.Resolver_Imports_
            
        }
        
        export type resolver_imports = _pi.Optional_Value<resolver_imports.O>
        
        export type signatures = i_resolved.Resolver_Signatures_
        
        export type modules = i_resolved.Modules_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Resolver_Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Resolver_Option_Constraints_ = (
    context: Resolver_Option_Constraints_.I,
    abort: _pi.Abort<Resolver_Option_Constraints_.E>,
    lookups: {
        readonly 'sibling property resolvers': _pi.lookup.Acyclic<Resolver_Option_Constraints_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Resolver_Option_Constraints_.L.parent_sibling_property_resolvers>
    },
    parameters: {
        readonly 'definition': Resolver_Option_Constraints_.P.definition
        readonly 'list cursor': Resolver_Option_Constraints_.P.list_cursor
        readonly 'linked entry': Resolver_Option_Constraints_.P.linked_entry
        readonly 'current dictionary': Resolver_Option_Constraints_.P.current_dictionary
        readonly 'current ordered dictionary': Resolver_Option_Constraints_.P.current_ordered_dictionary
        readonly 'signature': Resolver_Option_Constraints_.P.signature
        readonly 'schema imports': Resolver_Option_Constraints_.P.schema_imports
        readonly 'resolver imports': Resolver_Option_Constraints_.P.resolver_imports
        readonly 'signatures': Resolver_Option_Constraints_.P.signatures
        readonly 'modules': Resolver_Option_Constraints_.P.modules
        readonly 'option constraints': Resolver_Option_Constraints_.P.option_constraints
    },
) => Resolver_Option_Constraints_.O

export namespace Resolver_Value_List_Result_ {
    
    export type I = i_unresolved.Resolver_Value_List_Result
    
    export type O = i_resolved.Resolver_Value_List_Result
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Resolver_Value_List_Result_ = (
    context: Resolver_Value_List_Result_.I,
    abort: _pi.Abort<Resolver_Value_List_Result_.E>,
    lookups: {
        readonly 'modules': _pi.lookup.Acyclic<Resolver_Value_List_Result_.L.modules>
    },
    parameters: {
        readonly 'imports': Resolver_Value_List_Result_.P.imports
    },
) => Resolver_Value_List_Result_.O

export namespace Resolver_Value_Group_ {
    
    export type I = i_unresolved.Resolver_Value_Group
    
    export type O = i_resolved.Resolver_Value_Group
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace L {
        
        export type parent_sibling_property_resolvers = i_resolved.Resolver_Value_Group_.D
        
    }
    
    export namespace P {
        
        export type definition = i_resolved.Group_
        
        export namespace list_cursor {
            
            export type O = i_resolved.Resolver_Value_List_Result_
            
        }
        
        export type list_cursor = _pi.Optional_Value<list_cursor.O>
        
        export namespace linked_entry {
            
            export type O = i_resolved.Resolver_Benchmark_
            
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
        
        export type signature = i_resolved.Resolver_Signature_
        
        export namespace schema_imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type schema_imports = _pi.Optional_Value<schema_imports.O>
        
        export namespace resolver_imports {
            
            export type O = i_resolved.Resolver_Imports_
            
        }
        
        export type resolver_imports = _pi.Optional_Value<resolver_imports.O>
        
        export type signatures = i_resolved.Resolver_Signatures_
        
        export type modules = i_resolved.Modules_
        
        export namespace option_constraints {
            
            export type O = i_resolved.Resolver_Option_Constraints_
            
        }
        
        export type option_constraints = _pi.Optional_Value<option_constraints.O>
        
    }
    
}

export type Resolver_Value_Group_ = (
    context: Resolver_Value_Group_.I,
    abort: _pi.Abort<Resolver_Value_Group_.E>,
    lookups: {
        readonly 'sibling property resolvers': _pi.lookup.Acyclic<Resolver_Value_Group_.L.sibling_property_resolvers>
        readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Resolver_Value_Group_.L.parent_sibling_property_resolvers>
    },
    parameters: {
        readonly 'definition': Resolver_Value_Group_.P.definition
        readonly 'list cursor': Resolver_Value_Group_.P.list_cursor
        readonly 'linked entry': Resolver_Value_Group_.P.linked_entry
        readonly 'current dictionary': Resolver_Value_Group_.P.current_dictionary
        readonly 'current ordered dictionary': Resolver_Value_Group_.P.current_ordered_dictionary
        readonly 'signature': Resolver_Value_Group_.P.signature
        readonly 'schema imports': Resolver_Value_Group_.P.schema_imports
        readonly 'resolver imports': Resolver_Value_Group_.P.resolver_imports
        readonly 'signatures': Resolver_Value_Group_.P.signatures
        readonly 'modules': Resolver_Value_Group_.P.modules
        readonly 'option constraints': Resolver_Value_Group_.P.option_constraints
    },
) => Resolver_Value_Group_.O

export namespace Resolver_Relative_Value_Selection_ {
    
    export type I = i_unresolved.Resolver_Relative_Value_Selection
    
    export type O = i_resolved.Resolver_Relative_Value_Selection
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type value = i_resolved.Value_
        
    }
    
}

export type Resolver_Relative_Value_Selection_ = (
    context: Resolver_Relative_Value_Selection_.I,
    abort: _pi.Abort<Resolver_Relative_Value_Selection_.E>,
    lookups: null,
    parameters: {
        readonly 'value': Resolver_Relative_Value_Selection_.P.value
    },
) => Resolver_Relative_Value_Selection_.O

export namespace Resolver_Constraint_ {
    
    export type I = i_unresolved.Resolver_Constraint
    
    export type O = i_resolved.Resolver_Constraint
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type value = i_resolved.Value_
        
    }
    
}

export type Resolver_Constraint_ = (
    context: Resolver_Constraint_.I,
    abort: _pi.Abort<Resolver_Constraint_.E>,
    lookups: null,
    parameters: {
        readonly 'value': Resolver_Constraint_.P.value
    },
) => Resolver_Constraint_.O

export namespace Resolver_Optional_Value_Constraints_ {
    
    export type I = i_unresolved.Resolver_Optional_Value_Constraints
    
    export type O = i_resolved.Resolver_Optional_Value_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type value = i_resolved.Value_
        
    }
    
}

export type Resolver_Optional_Value_Constraints_ = (
    context: Resolver_Optional_Value_Constraints_.I,
    abort: _pi.Abort<Resolver_Optional_Value_Constraints_.E>,
    lookups: null,
    parameters: {
        readonly 'value': Resolver_Optional_Value_Constraints_.P.value
    },
) => Resolver_Optional_Value_Constraints_.O

export namespace Resolver_Value_Constraints_ {
    
    export type I = i_unresolved.Resolver_Value_Constraints
    
    export type O = i_resolved.Resolver_Value_Constraints
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type value = i_resolved.Value_
        
    }
    
}

export type Resolver_Value_Constraints_ = (
    context: Resolver_Value_Constraints_.I,
    abort: _pi.Abort<Resolver_Value_Constraints_.E>,
    lookups: null,
    parameters: {
        readonly 'value': Resolver_Value_Constraints_.P.value
    },
) => Resolver_Value_Constraints_.O

export namespace Resolver_Value_Constraint_ {
    
    export type I = i_unresolved.Resolver_Value_Constraint
    
    export type O = i_resolved.Resolver_Value_Constraint
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type property_constraints = i_resolved.Resolver_Value_Constraints_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Resolver_Value_Constraint_ = (
    context: Resolver_Value_Constraint_.I,
    abort: _pi.Abort<Resolver_Value_Constraint_.E>,
    lookups: {
        readonly 'property constraints': _pi.lookup.Acyclic<Resolver_Value_Constraint_.L.property_constraints>
    },
    parameters: null,
) => Resolver_Value_Constraint_.O

export namespace Resolver_ {
    
    export type I = i_unresolved.Resolver
    
    export type O = i_resolved.Resolver
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type modules = i_resolved.Modules_
        
        export type resolver_imports = i_resolved.Resolver_Imports_
        
        export type schema_imports = i_resolved.Schema_Imports_
        
    }
    
}

export type Resolver_ = (
    context: Resolver_.I,
    abort: _pi.Abort<Resolver_.E>,
    lookups: null,
    parameters: {
        readonly 'modules': Resolver_.P.modules
        readonly 'resolver imports': Resolver_.P.resolver_imports
        readonly 'schema imports': Resolver_.P.schema_imports
    },
) => Resolver_.O

export namespace Resolver_Signature_Parameters_ {
    
    export type I = i_unresolved.Resolver_Signature_Parameters
    
    export type O = i_resolved.Resolver_Signature_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type modules = i_resolved.Modules_
        
        export type imports = i_resolved.Schema_Imports_
        
    }
    
}

export type Resolver_Signature_Parameters_ = (
    context: Resolver_Signature_Parameters_.I,
    abort: _pi.Abort<Resolver_Signature_Parameters_.E>,
    lookups: null,
    parameters: {
        readonly 'modules': Resolver_Signature_Parameters_.P.modules
        readonly 'imports': Resolver_Signature_Parameters_.P.imports
    },
) => Resolver_Signature_Parameters_.O

export namespace Resolver_Signature_ {
    
    export type I = i_unresolved.Resolver_Signature
    
    export type O = i_resolved.Resolver_Signature
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_signatures = i_resolved.Resolver_Signatures_.D
        
    }
    
    export namespace P {
        
        export type modules = i_resolved.Modules_
        
        export type module_ = i_resolved.Module_
        
        export type imports = i_resolved.Schema_Imports_
        
    }
    
}

export type Resolver_Signature_ = (
    context: Resolver_Signature_.I,
    abort: _pi.Abort<Resolver_Signature_.E>,
    lookups: {
        readonly 'sibling signatures': _pi.lookup.Acyclic<Resolver_Signature_.L.sibling_signatures>
    },
    parameters: {
        readonly 'modules': Resolver_Signature_.P.modules
        readonly 'module': Resolver_Signature_.P.module_
        readonly 'imports': Resolver_Signature_.P.imports
    },
) => Resolver_Signature_.O

export namespace Resolver_Signatures_ {
    
    export type I = i_unresolved.Resolver_Signatures
    
    export type O = i_resolved.Resolver_Signatures
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type modules = i_resolved.Modules_
        
        export type imports = i_resolved.Schema_Imports_
        
    }
    
}

export type Resolver_Signatures_ = (
    context: Resolver_Signatures_.I,
    abort: _pi.Abort<Resolver_Signatures_.E>,
    lookups: null,
    parameters: {
        readonly 'modules': Resolver_Signatures_.P.modules
        readonly 'imports': Resolver_Signatures_.P.imports
    },
) => Resolver_Signatures_.O

export namespace Resolver_Modules_ {
    
    export type I = i_unresolved.Resolver_Modules
    
    export type O = i_resolved.Resolver_Modules
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type signatures = i_resolved.Resolver_Signatures_
        
        export type modules = i_resolved.Modules_
        
        export type schema_imports = i_resolved.Schema_Imports_
        
        export type resolver_imports = i_resolved.Resolver_Imports_
        
    }
    
}

export type Resolver_Modules_ = (
    context: Resolver_Modules_.I,
    abort: _pi.Abort<Resolver_Modules_.E>,
    lookups: null,
    parameters: {
        readonly 'signatures': Resolver_Modules_.P.signatures
        readonly 'modules': Resolver_Modules_.P.modules
        readonly 'schema imports': Resolver_Modules_.P.schema_imports
        readonly 'resolver imports': Resolver_Modules_.P.resolver_imports
    },
) => Resolver_Modules_.O

export namespace Resolver_Reference_To_Value_Constraint_ {
    
    export type I = i_unresolved.Resolver_Reference_To_Value_Constraint
    
    export type O = i_resolved.Resolver_Reference_To_Value_Constraint
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type property_constraints = i_resolved.Resolver_Value_Constraints_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Resolver_Reference_To_Value_Constraint_ = (
    context: Resolver_Reference_To_Value_Constraint_.I,
    abort: _pi.Abort<Resolver_Reference_To_Value_Constraint_.E>,
    lookups: {
        readonly 'property constraints': _pi.lookup.Acyclic<Resolver_Reference_To_Value_Constraint_.L.property_constraints>
    },
    parameters: null,
) => Resolver_Reference_To_Value_Constraint_.O

export namespace Resolver_Imports_ {
    
    export type I = i_unresolved.Resolver_Imports
    
    export type O = i_resolved.Resolver_Imports
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Resolver_Imports_ = (
    context: Resolver_Imports_.I,
    abort: _pi.Abort<Resolver_Imports_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.lookup.Stack<Resolver_Imports_.L.sibling_schemas>
    },
    parameters: null,
) => Resolver_Imports_.O

export namespace Module_Specification_ {
    
    export type I = i_unresolved.Module_Specification
    
    export type O = i_resolved.Module_Specification
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Module_Specification_ = (
    context: Module_Specification_.I,
    abort: _pi.Abort<Module_Specification_.E>,
    lookups: null,
    parameters: null,
) => Module_Specification_.O

export namespace Schema_Tree_ {
    
    export type I = i_unresolved.Schema_Tree
    
    export type O = i_resolved.Schema_Tree
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schema_Tree_ = (
    context: Schema_Tree_.I,
    abort: _pi.Abort<Schema_Tree_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.lookup.Stack<Schema_Tree_.L.sibling_schemas>
    },
    parameters: null,
) => Schema_Tree_.O

export namespace Schema_ {
    
    export type I = i_unresolved.Schema
    
    export type O = i_resolved.Schema
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.lookup.Stack<Schema_.L.sibling_schemas>
    },
    parameters: null,
) => Schema_.O

export namespace Schema_Imports_ {
    
    export type I = i_unresolved.Schema_Imports
    
    export type O = i_resolved.Schema_Imports
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schema_Imports_ = (
    context: Schema_Imports_.I,
    abort: _pi.Abort<Schema_Imports_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.lookup.Stack<Schema_Imports_.L.sibling_schemas>
    },
    parameters: null,
) => Schema_Imports_.O

export namespace Modules_ {
    
    export type I = i_unresolved.Modules
    
    export type O = i_resolved.Modules
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Schema_Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Modules_ = (
    context: Modules_.I,
    abort: _pi.Abort<Modules_.E>,
    lookups: null,
    parameters: {
        readonly 'globals': Modules_.P.globals
        readonly 'imports': Modules_.P.imports
    },
) => Modules_.O

export { 
    Package_ as Package, 
    Presence_ as Presence, 
    Number_Type_ as Number_Type, 
    Text_Type_ as Text_Type, 
    Globals_ as Globals, 
    Group_ as Group, 
    Dictionary_ as Dictionary, 
    Value_ as Value, 
    Module_Reference_ as Module_Reference, 
    Value_Reference_ as Value_Reference, 
    Value_Results_ as Value_Results, 
    Option_Constraints_ as Option_Constraints, 
    Module_ as Module, 
    Value_Path_ as Value_Path, 
    Schemas_ as Schemas, 
    Resolver_Value_ as Resolver_Value, 
    Resolver_Possible_Value_Selection_ as Resolver_Possible_Value_Selection, 
    Resolver_Guaranteed_Value_Selection_ as Resolver_Guaranteed_Value_Selection, 
    Resolver_Benchmark_ as Resolver_Benchmark, 
    Resolver_Optional_Value_Initialization_ as Resolver_Optional_Value_Initialization, 
    Resolver_Lookup_Selection_ as Resolver_Lookup_Selection, 
    Resolver_Option_Constraints_ as Resolver_Option_Constraints, 
    Resolver_Value_List_Result_ as Resolver_Value_List_Result, 
    Resolver_Value_Group_ as Resolver_Value_Group, 
    Resolver_Relative_Value_Selection_ as Resolver_Relative_Value_Selection, 
    Resolver_Constraint_ as Resolver_Constraint, 
    Resolver_Optional_Value_Constraints_ as Resolver_Optional_Value_Constraints, 
    Resolver_Value_Constraints_ as Resolver_Value_Constraints, 
    Resolver_Value_Constraint_ as Resolver_Value_Constraint, 
    Resolver_ as Resolver, 
    Resolver_Signature_Parameters_ as Resolver_Signature_Parameters, 
    Resolver_Signature_ as Resolver_Signature, 
    Resolver_Signatures_ as Resolver_Signatures, 
    Resolver_Modules_ as Resolver_Modules, 
    Resolver_Reference_To_Value_Constraint_ as Resolver_Reference_To_Value_Constraint, 
    Resolver_Imports_ as Resolver_Imports, 
    Module_Specification_ as Module_Specification, 
    Schema_Tree_ as Schema_Tree, 
    Schema_ as Schema, 
    Schema_Imports_ as Schema_Imports, 
    Modules_ as Modules, 
}
