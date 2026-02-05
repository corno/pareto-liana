    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/resolve"
    
    import * as i_resolved from "./data/resolved"
    
    import * as i_unresolved from "./data/unresolved"
    
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
                
                export type O = i_resolved.Imports_
                
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
                
                export type O = i_resolved.Imports_
                
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
                
                export type O = i_resolved.Imports_
                
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
                
                export type O = i_resolved.Imports_
                
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
                
                export type O = i_resolved.Imports_
                
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
                
                export type O = i_resolved.Imports_
                
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
                
                export type O = i_resolved.Imports_
                
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
                
                export type O = i_resolved.Imports_
                
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
    
    export namespace Value_Resolver_ {
        
        export type I = i_unresolved.Value_Resolver
        
        export type O = i_resolved.Value_Resolver
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace L {
            
            export type parent_sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace P {
            
            export type definition = i_resolved.Value_
            
            export namespace list_cursor {
                
                export type O = i_resolved.Value_Resolver_List_Result_
                
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
            
            export type modules = i_resolved.Modules_
            
            export namespace option_constraints {
                
                export type O = i_resolved.Option_Constraint_Resolvers_
                
            }
            
            export type option_constraints = _pi.Optional_Value<option_constraints.O>
            
        }
        
    }
    
    export type Value_Resolver_ = (
        context: Value_Resolver_.I,
        abort: _pi.Abort<Value_Resolver_.E>,
        lookups: {
            readonly 'sibling property resolvers': _pi.lookup.Acyclic<Value_Resolver_.L.sibling_property_resolvers>
            readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Value_Resolver_.L.parent_sibling_property_resolvers>
        },
        parameters: {
            readonly 'definition': Value_Resolver_.P.definition
            readonly 'list cursor': Value_Resolver_.P.list_cursor
            readonly 'linked entry': Value_Resolver_.P.linked_entry
            readonly 'current dictionary': Value_Resolver_.P.current_dictionary
            readonly 'current ordered dictionary': Value_Resolver_.P.current_ordered_dictionary
            readonly 'signature': Value_Resolver_.P.signature
            readonly 'imports': Value_Resolver_.P.imports
            readonly 'signatures': Value_Resolver_.P.signatures
            readonly 'modules': Value_Resolver_.P.modules
            readonly 'option constraints': Value_Resolver_.P.option_constraints
        },
    ) => Value_Resolver_.O
    
    export namespace Possible_Value_Selection_ {
        
        export type I = i_unresolved.Possible_Value_Selection
        
        export type O = i_resolved.Possible_Value_Selection
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace L {
            
            export type parent_sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace P {
            
            export type definition = i_resolved.Value_
            
            export namespace list_cursor {
                
                export type O = i_resolved.Value_Resolver_List_Result_
                
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
            
            export type modules = i_resolved.Modules_
            
            export namespace option_constraints {
                
                export type O = i_resolved.Option_Constraint_Resolvers_
                
            }
            
            export type option_constraints = _pi.Optional_Value<option_constraints.O>
            
        }
        
    }
    
    export type Possible_Value_Selection_ = (
        context: Possible_Value_Selection_.I,
        abort: _pi.Abort<Possible_Value_Selection_.E>,
        lookups: {
            readonly 'sibling property resolvers': _pi.lookup.Acyclic<Possible_Value_Selection_.L.sibling_property_resolvers>
            readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Possible_Value_Selection_.L.parent_sibling_property_resolvers>
        },
        parameters: {
            readonly 'definition': Possible_Value_Selection_.P.definition
            readonly 'list cursor': Possible_Value_Selection_.P.list_cursor
            readonly 'linked entry': Possible_Value_Selection_.P.linked_entry
            readonly 'current dictionary': Possible_Value_Selection_.P.current_dictionary
            readonly 'current ordered dictionary': Possible_Value_Selection_.P.current_ordered_dictionary
            readonly 'signature': Possible_Value_Selection_.P.signature
            readonly 'imports': Possible_Value_Selection_.P.imports
            readonly 'signatures': Possible_Value_Selection_.P.signatures
            readonly 'modules': Possible_Value_Selection_.P.modules
            readonly 'option constraints': Possible_Value_Selection_.P.option_constraints
        },
    ) => Possible_Value_Selection_.O
    
    export namespace Guaranteed_Value_Selection_ {
        
        export type I = i_unresolved.Guaranteed_Value_Selection
        
        export type O = i_resolved.Guaranteed_Value_Selection
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace L {
            
            export type parent_sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace P {
            
            export type definition = i_resolved.Value_
            
            export namespace list_cursor {
                
                export type O = i_resolved.Value_Resolver_List_Result_
                
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
            
            export type modules = i_resolved.Modules_
            
            export namespace option_constraints {
                
                export type O = i_resolved.Option_Constraint_Resolvers_
                
            }
            
            export type option_constraints = _pi.Optional_Value<option_constraints.O>
            
        }
        
    }
    
    export type Guaranteed_Value_Selection_ = (
        context: Guaranteed_Value_Selection_.I,
        abort: _pi.Abort<Guaranteed_Value_Selection_.E>,
        lookups: {
            readonly 'sibling property resolvers': _pi.lookup.Acyclic<Guaranteed_Value_Selection_.L.sibling_property_resolvers>
            readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Guaranteed_Value_Selection_.L.parent_sibling_property_resolvers>
        },
        parameters: {
            readonly 'definition': Guaranteed_Value_Selection_.P.definition
            readonly 'list cursor': Guaranteed_Value_Selection_.P.list_cursor
            readonly 'linked entry': Guaranteed_Value_Selection_.P.linked_entry
            readonly 'current dictionary': Guaranteed_Value_Selection_.P.current_dictionary
            readonly 'current ordered dictionary': Guaranteed_Value_Selection_.P.current_ordered_dictionary
            readonly 'signature': Guaranteed_Value_Selection_.P.signature
            readonly 'imports': Guaranteed_Value_Selection_.P.imports
            readonly 'signatures': Guaranteed_Value_Selection_.P.signatures
            readonly 'modules': Guaranteed_Value_Selection_.P.modules
            readonly 'option constraints': Guaranteed_Value_Selection_.P.option_constraints
        },
    ) => Guaranteed_Value_Selection_.O
    
    export namespace Benchmark_ {
        
        export type I = i_unresolved.Benchmark
        
        export type O = i_resolved.Benchmark
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace L {
            
            export type parent_sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace P {
            
            export type definition = i_resolved.Value_
            
            export namespace list_cursor {
                
                export type O = i_resolved.Value_Resolver_List_Result_
                
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
            
            export type modules = i_resolved.Modules_
            
            export namespace option_constraints {
                
                export type O = i_resolved.Option_Constraint_Resolvers_
                
            }
            
            export type option_constraints = _pi.Optional_Value<option_constraints.O>
            
        }
        
    }
    
    export type Benchmark_ = (
        context: Benchmark_.I,
        abort: _pi.Abort<Benchmark_.E>,
        lookups: {
            readonly 'sibling property resolvers': _pi.lookup.Acyclic<Benchmark_.L.sibling_property_resolvers>
            readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Benchmark_.L.parent_sibling_property_resolvers>
        },
        parameters: {
            readonly 'definition': Benchmark_.P.definition
            readonly 'list cursor': Benchmark_.P.list_cursor
            readonly 'linked entry': Benchmark_.P.linked_entry
            readonly 'current dictionary': Benchmark_.P.current_dictionary
            readonly 'current ordered dictionary': Benchmark_.P.current_ordered_dictionary
            readonly 'signature': Benchmark_.P.signature
            readonly 'imports': Benchmark_.P.imports
            readonly 'signatures': Benchmark_.P.signatures
            readonly 'modules': Benchmark_.P.modules
            readonly 'option constraints': Benchmark_.P.option_constraints
        },
    ) => Benchmark_.O
    
    export namespace Optional_Value_Initialization_ {
        
        export type I = i_unresolved.Optional_Value_Initialization
        
        export type O = i_resolved.Optional_Value_Initialization
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace L {
            
            export type parent_sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace P {
            
            export type definition = i_resolved.Value_
            
            export namespace list_cursor {
                
                export type O = i_resolved.Value_Resolver_List_Result_
                
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
            
            export type modules = i_resolved.Modules_
            
            export namespace option_constraints {
                
                export type O = i_resolved.Option_Constraint_Resolvers_
                
            }
            
            export type option_constraints = _pi.Optional_Value<option_constraints.O>
            
        }
        
    }
    
    export type Optional_Value_Initialization_ = (
        context: Optional_Value_Initialization_.I,
        abort: _pi.Abort<Optional_Value_Initialization_.E>,
        lookups: {
            readonly 'sibling property resolvers': _pi.lookup.Acyclic<Optional_Value_Initialization_.L.sibling_property_resolvers>
            readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Optional_Value_Initialization_.L.parent_sibling_property_resolvers>
        },
        parameters: {
            readonly 'definition': Optional_Value_Initialization_.P.definition
            readonly 'list cursor': Optional_Value_Initialization_.P.list_cursor
            readonly 'linked entry': Optional_Value_Initialization_.P.linked_entry
            readonly 'current dictionary': Optional_Value_Initialization_.P.current_dictionary
            readonly 'current ordered dictionary': Optional_Value_Initialization_.P.current_ordered_dictionary
            readonly 'signature': Optional_Value_Initialization_.P.signature
            readonly 'imports': Optional_Value_Initialization_.P.imports
            readonly 'signatures': Optional_Value_Initialization_.P.signatures
            readonly 'modules': Optional_Value_Initialization_.P.modules
            readonly 'option constraints': Optional_Value_Initialization_.P.option_constraints
        },
    ) => Optional_Value_Initialization_.O
    
    export namespace Lookup_Selection_ {
        
        export type I = i_unresolved.Lookup_Selection
        
        export type O = i_resolved.Lookup_Selection
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace L {
            
            export type parent_sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace P {
            
            export type definition = i_resolved.Value_
            
            export namespace list_cursor {
                
                export type O = i_resolved.Value_Resolver_List_Result_
                
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
            
            export type modules = i_resolved.Modules_
            
            export namespace option_constraints {
                
                export type O = i_resolved.Option_Constraint_Resolvers_
                
            }
            
            export type option_constraints = _pi.Optional_Value<option_constraints.O>
            
        }
        
    }
    
    export type Lookup_Selection_ = (
        context: Lookup_Selection_.I,
        abort: _pi.Abort<Lookup_Selection_.E>,
        lookups: {
            readonly 'sibling property resolvers': _pi.lookup.Acyclic<Lookup_Selection_.L.sibling_property_resolvers>
            readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Lookup_Selection_.L.parent_sibling_property_resolvers>
        },
        parameters: {
            readonly 'definition': Lookup_Selection_.P.definition
            readonly 'list cursor': Lookup_Selection_.P.list_cursor
            readonly 'linked entry': Lookup_Selection_.P.linked_entry
            readonly 'current dictionary': Lookup_Selection_.P.current_dictionary
            readonly 'current ordered dictionary': Lookup_Selection_.P.current_ordered_dictionary
            readonly 'signature': Lookup_Selection_.P.signature
            readonly 'imports': Lookup_Selection_.P.imports
            readonly 'signatures': Lookup_Selection_.P.signatures
            readonly 'modules': Lookup_Selection_.P.modules
            readonly 'option constraints': Lookup_Selection_.P.option_constraints
        },
    ) => Lookup_Selection_.O
    
    export namespace Option_Constraint_Resolvers_ {
        
        export type I = i_unresolved.Option_Constraint_Resolvers
        
        export type O = i_resolved.Option_Constraint_Resolvers
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace L {
            
            export type parent_sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace P {
            
            export type definition = i_resolved.Value_
            
            export namespace list_cursor {
                
                export type O = i_resolved.Value_Resolver_List_Result_
                
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
            
            export type modules = i_resolved.Modules_
            
            export namespace option_constraints {
                
                export type O = i_resolved.Option_Constraint_Resolvers_
                
            }
            
            export type option_constraints = _pi.Optional_Value<option_constraints.O>
            
        }
        
    }
    
    export type Option_Constraint_Resolvers_ = (
        context: Option_Constraint_Resolvers_.I,
        abort: _pi.Abort<Option_Constraint_Resolvers_.E>,
        lookups: {
            readonly 'sibling property resolvers': _pi.lookup.Acyclic<Option_Constraint_Resolvers_.L.sibling_property_resolvers>
            readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Option_Constraint_Resolvers_.L.parent_sibling_property_resolvers>
        },
        parameters: {
            readonly 'definition': Option_Constraint_Resolvers_.P.definition
            readonly 'list cursor': Option_Constraint_Resolvers_.P.list_cursor
            readonly 'linked entry': Option_Constraint_Resolvers_.P.linked_entry
            readonly 'current dictionary': Option_Constraint_Resolvers_.P.current_dictionary
            readonly 'current ordered dictionary': Option_Constraint_Resolvers_.P.current_ordered_dictionary
            readonly 'signature': Option_Constraint_Resolvers_.P.signature
            readonly 'imports': Option_Constraint_Resolvers_.P.imports
            readonly 'signatures': Option_Constraint_Resolvers_.P.signatures
            readonly 'modules': Option_Constraint_Resolvers_.P.modules
            readonly 'option constraints': Option_Constraint_Resolvers_.P.option_constraints
        },
    ) => Option_Constraint_Resolvers_.O
    
    export namespace Value_Resolver_List_Result_ {
        
        export type I = i_unresolved.Value_Resolver_List_Result
        
        export type O = i_resolved.Value_Resolver_List_Result
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type modules = i_resolved.Modules_.D
            
        }
        
        export namespace P {
            
            export namespace imports {
                
                export type O = i_resolved.Imports_
                
            }
            
            export type imports = _pi.Optional_Value<imports.O>
            
        }
        
    }
    
    export type Value_Resolver_List_Result_ = (
        context: Value_Resolver_List_Result_.I,
        abort: _pi.Abort<Value_Resolver_List_Result_.E>,
        lookups: {
            readonly 'modules': _pi.lookup.Acyclic<Value_Resolver_List_Result_.L.modules>
        },
        parameters: {
            readonly 'imports': Value_Resolver_List_Result_.P.imports
        },
    ) => Value_Resolver_List_Result_.O
    
    export namespace Value_Resolver_Group_ {
        
        export type I = i_unresolved.Value_Resolver_Group
        
        export type O = i_resolved.Value_Resolver_Group
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace L {
            
            export type parent_sibling_property_resolvers = i_resolved.Value_Resolver_Group_.D
            
        }
        
        export namespace P {
            
            export type definition = i_resolved.Group_
            
            export namespace list_cursor {
                
                export type O = i_resolved.Value_Resolver_List_Result_
                
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
            
            export type modules = i_resolved.Modules_
            
            export namespace option_constraints {
                
                export type O = i_resolved.Option_Constraint_Resolvers_
                
            }
            
            export type option_constraints = _pi.Optional_Value<option_constraints.O>
            
        }
        
    }
    
    export type Value_Resolver_Group_ = (
        context: Value_Resolver_Group_.I,
        abort: _pi.Abort<Value_Resolver_Group_.E>,
        lookups: {
            readonly 'sibling property resolvers': _pi.lookup.Acyclic<Value_Resolver_Group_.L.sibling_property_resolvers>
            readonly 'parent sibling property resolvers': _pi.lookup.Acyclic<Value_Resolver_Group_.L.parent_sibling_property_resolvers>
        },
        parameters: {
            readonly 'definition': Value_Resolver_Group_.P.definition
            readonly 'list cursor': Value_Resolver_Group_.P.list_cursor
            readonly 'linked entry': Value_Resolver_Group_.P.linked_entry
            readonly 'current dictionary': Value_Resolver_Group_.P.current_dictionary
            readonly 'current ordered dictionary': Value_Resolver_Group_.P.current_ordered_dictionary
            readonly 'signature': Value_Resolver_Group_.P.signature
            readonly 'imports': Value_Resolver_Group_.P.imports
            readonly 'signatures': Value_Resolver_Group_.P.signatures
            readonly 'modules': Value_Resolver_Group_.P.modules
            readonly 'option constraints': Value_Resolver_Group_.P.option_constraints
        },
    ) => Value_Resolver_Group_.O
    
    export namespace Relative_Value_Selection_ {
        
        export type I = i_unresolved.Relative_Value_Selection
        
        export type O = i_resolved.Relative_Value_Selection
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type value = i_resolved.Value_
            
        }
        
    }
    
    export type Relative_Value_Selection_ = (
        context: Relative_Value_Selection_.I,
        abort: _pi.Abort<Relative_Value_Selection_.E>,
        lookups: null,
        parameters: {
            readonly 'value': Relative_Value_Selection_.P.value
        },
    ) => Relative_Value_Selection_.O
    
    export namespace Constraint_ {
        
        export type I = i_unresolved.Constraint
        
        export type O = i_resolved.Constraint
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type value = i_resolved.Value_
            
        }
        
    }
    
    export type Constraint_ = (
        context: Constraint_.I,
        abort: _pi.Abort<Constraint_.E>,
        lookups: null,
        parameters: {
            readonly 'value': Constraint_.P.value
        },
    ) => Constraint_.O
    
    export namespace Value_Constraint_Resolvers_ {
        
        export type I = i_unresolved.Value_Constraint_Resolvers
        
        export type O = i_resolved.Value_Constraint_Resolvers
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type value = i_resolved.Value_
            
        }
        
    }
    
    export type Value_Constraint_Resolvers_ = (
        context: Value_Constraint_Resolvers_.I,
        abort: _pi.Abort<Value_Constraint_Resolvers_.E>,
        lookups: null,
        parameters: {
            readonly 'value': Value_Constraint_Resolvers_.P.value
        },
    ) => Value_Constraint_Resolvers_.O
    
    export namespace Value_Constraint_Resolver_ {
        
        export type I = i_unresolved.Value_Constraint_Resolver
        
        export type O = i_resolved.Value_Constraint_Resolver
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type property_constraints = i_resolved.Value_Constraint_Resolvers_.D
            
        }
        
        export namespace P {
            
        }
        
    }
    
    export type Value_Constraint_Resolver_ = (
        context: Value_Constraint_Resolver_.I,
        abort: _pi.Abort<Value_Constraint_Resolver_.E>,
        lookups: {
            readonly 'property constraints': _pi.lookup.Acyclic<Value_Constraint_Resolver_.L.property_constraints>
        },
        parameters: null,
    ) => Value_Constraint_Resolver_.O
    
    export namespace Resolve_Logic_ {
        
        export type I = i_unresolved.Resolve_Logic
        
        export type O = i_resolved.Resolve_Logic
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type modules = i_resolved.Modules_
            
            export type imports = i_resolved.Imports_
            
        }
        
    }
    
    export type Resolve_Logic_ = (
        context: Resolve_Logic_.I,
        abort: _pi.Abort<Resolve_Logic_.E>,
        lookups: null,
        parameters: {
            readonly 'modules': Resolve_Logic_.P.modules
            readonly 'imports': Resolve_Logic_.P.imports
        },
    ) => Resolve_Logic_.O
    
    export namespace Signature_Parameters_ {
        
        export type I = i_unresolved.Signature_Parameters
        
        export type O = i_resolved.Signature_Parameters
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type modules = i_resolved.Modules_
            
            export type imports = i_resolved.Imports_
            
        }
        
    }
    
    export type Signature_Parameters_ = (
        context: Signature_Parameters_.I,
        abort: _pi.Abort<Signature_Parameters_.E>,
        lookups: null,
        parameters: {
            readonly 'modules': Signature_Parameters_.P.modules
            readonly 'imports': Signature_Parameters_.P.imports
        },
    ) => Signature_Parameters_.O
    
    export namespace Signature_ {
        
        export type I = i_unresolved.Signature
        
        export type O = i_resolved.Signature
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_signatures = i_resolved.Signatures_.D
            
        }
        
        export namespace P {
            
            export type modules = i_resolved.Modules_
            
            export type module_ = i_resolved.Module_
            
            export type imports = i_resolved.Imports_
            
        }
        
    }
    
    export type Signature_ = (
        context: Signature_.I,
        abort: _pi.Abort<Signature_.E>,
        lookups: {
            readonly 'sibling signatures': _pi.lookup.Acyclic<Signature_.L.sibling_signatures>
        },
        parameters: {
            readonly 'modules': Signature_.P.modules
            readonly 'module': Signature_.P.module_
            readonly 'imports': Signature_.P.imports
        },
    ) => Signature_.O
    
    export namespace Signatures_ {
        
        export type I = i_unresolved.Signatures
        
        export type O = i_resolved.Signatures
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type modules = i_resolved.Modules_
            
            export type imports = i_resolved.Imports_
            
        }
        
    }
    
    export type Signatures_ = (
        context: Signatures_.I,
        abort: _pi.Abort<Signatures_.E>,
        lookups: null,
        parameters: {
            readonly 'modules': Signatures_.P.modules
            readonly 'imports': Signatures_.P.imports
        },
    ) => Signatures_.O
    
    export namespace Module_Resolvers_ {
        
        export type I = i_unresolved.Module_Resolvers
        
        export type O = i_resolved.Module_Resolvers
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type signatures = i_resolved.Signatures_
            
            export type modules = i_resolved.Modules_
            
            export type imports = i_resolved.Imports_
            
        }
        
    }
    
    export type Module_Resolvers_ = (
        context: Module_Resolvers_.I,
        abort: _pi.Abort<Module_Resolvers_.E>,
        lookups: null,
        parameters: {
            readonly 'signatures': Module_Resolvers_.P.signatures
            readonly 'modules': Module_Resolvers_.P.modules
            readonly 'imports': Module_Resolvers_.P.imports
        },
    ) => Module_Resolvers_.O
    
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
    
    export namespace Imports_ {
        
        export type I = i_unresolved.Imports
        
        export type O = i_resolved.Imports
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type sibling_schemas = i_resolved.Schemas_.D
            
        }
        
        export namespace P {
            
        }
        
    }
    
    export type Imports_ = (
        context: Imports_.I,
        abort: _pi.Abort<Imports_.E>,
        lookups: {
            readonly 'sibling schemas': _pi.lookup.Stack<Imports_.L.sibling_schemas>
        },
        parameters: null,
    ) => Imports_.O
    
    export namespace Reference_To_Value_Constraint_Resolver_ {
        
        export type I = i_unresolved.Reference_To_Value_Constraint_Resolver
        
        export type O = i_resolved.Reference_To_Value_Constraint_Resolver
        
        export type E = i_generic.Error
        
        export namespace L {
            
            export type property_constraints = i_resolved.Value_Constraint_Resolvers_.D
            
        }
        
        export namespace P {
            
        }
        
    }
    
    export type Reference_To_Value_Constraint_Resolver_ = (
        context: Reference_To_Value_Constraint_Resolver_.I,
        abort: _pi.Abort<Reference_To_Value_Constraint_Resolver_.E>,
        lookups: {
            readonly 'property constraints': _pi.lookup.Acyclic<Reference_To_Value_Constraint_Resolver_.L.property_constraints>
        },
        parameters: null,
    ) => Reference_To_Value_Constraint_Resolver_.O
    
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
                
                export type O = i_resolved.Imports_
                
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
        Value_Resolver_ as Value_Resolver, 
        Possible_Value_Selection_ as Possible_Value_Selection, 
        Guaranteed_Value_Selection_ as Guaranteed_Value_Selection, 
        Benchmark_ as Benchmark, 
        Optional_Value_Initialization_ as Optional_Value_Initialization, 
        Lookup_Selection_ as Lookup_Selection, 
        Option_Constraint_Resolvers_ as Option_Constraint_Resolvers, 
        Value_Resolver_List_Result_ as Value_Resolver_List_Result, 
        Value_Resolver_Group_ as Value_Resolver_Group, 
        Relative_Value_Selection_ as Relative_Value_Selection, 
        Constraint_ as Constraint, 
        Value_Constraint_Resolvers_ as Value_Constraint_Resolvers, 
        Value_Constraint_Resolver_ as Value_Constraint_Resolver, 
        Resolve_Logic_ as Resolve_Logic, 
        Signature_Parameters_ as Signature_Parameters, 
        Signature_ as Signature, 
        Signatures_ as Signatures, 
        Module_Resolvers_ as Module_Resolvers, 
        Schemas_ as Schemas, 
        Module_Specification_ as Module_Specification, 
        Schema_Tree_ as Schema_Tree, 
        Schema_ as Schema, 
        Imports_ as Imports, 
        Reference_To_Value_Constraint_Resolver_ as Reference_To_Value_Constraint_Resolver, 
        Modules_ as Modules, 
    }
