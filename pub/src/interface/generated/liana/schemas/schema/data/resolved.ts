
import * as _pi from "pareto-core/dist/interface"

export namespace Text_Type_ {
    
    export namespace type_ {
        
        export type multi_line = null
        
        export type single_line = null
        
    }
    
    export type type_ = 
        | readonly ['multi line', type_.multi_line]
        | readonly ['single line', type_.single_line]
    
}

export type Text_Type_ = {
    readonly 'type': Text_Type_.type_
}

export namespace Number_Type_ {
    
    export namespace precision {
        
        export namespace approximation {
            
            export type significant_digits = number
            
        }
        
        export type approximation = {
            readonly 'significant digits': approximation.significant_digits
        }
        
        export namespace exact {
            
            export namespace decimal_separator_offset {
                
                export type O = number
                
            }
            
            export type decimal_separator_offset = _pi.Optional_Value<decimal_separator_offset.O>
            
            export namespace type_ {
                
                export type integer = null
                
                export type natural = null
                
                export type positive_natural = null
                
            }
            
            export type type_ = 
                | readonly ['integer', type_.integer]
                | readonly ['natural', type_.natural]
                | readonly ['positive natural', type_.positive_natural]
            
        }
        
        export type exact = {
            readonly 'decimal separator offset': exact.decimal_separator_offset
            readonly 'type': exact.type_
        }
        
    }
    
    export type precision = 
        | readonly ['approximation', precision.approximation]
        | readonly ['exact', precision.exact]
    
}

export type Number_Type_ = {
    readonly 'precision': Number_Type_.precision
}

export namespace Globals_ {
    
    export namespace complexity {
        
        export type constrained = null
        
        export type unconstrained = null
        
    }
    
    export type complexity = 
        | readonly ['constrained', complexity.constrained]
        | readonly ['unconstrained', complexity.unconstrained]
    
    export namespace text_types {
        
        export type D = Text_Type_
        
    }
    
    export type text_types = _pi.Dictionary<text_types.D>
    
    export namespace number_types {
        
        export type D = Number_Type_
        
    }
    
    export type number_types = _pi.Dictionary<number_types.D>
    
}

export type Globals_ = {
    readonly 'complexity': Globals_.complexity
    readonly 'text types': Globals_.text_types
    readonly 'number types': Globals_.number_types
}

export namespace Type_ {
    
    export type node = Value_
    
}

export type Type_ = {
    readonly 'node': Type_.node
}

export namespace Types_ {
    
    export type D = Type_
    
}

export type Types_ = _pi.Dictionary<Types_.D>

export namespace Resolve_Logic_ {
    
    export namespace signatures {
        
        export type types = Signatures_
        
    }
    
    export type signatures = {
        readonly 'types': signatures.types
    }
    
    export type resolvers = Resolvers_
    
}

export type Resolve_Logic_ = {
    readonly 'signatures': Resolve_Logic_.signatures
    readonly 'resolvers': Resolve_Logic_.resolvers
}

export namespace Schema_ {
    
    export type imports = Imports_
    
    export type globals = Globals_
    
    export type types = Types_
    
    export namespace complexity {
        
        export type constrained = Resolve_Logic_
        
        export type unconstrained = null
        
    }
    
    export type complexity = 
        | readonly ['constrained', complexity.constrained]
        | readonly ['unconstrained', complexity.unconstrained]
    
}

export type Schema_ = {
    readonly 'imports': Schema_.imports
    readonly 'globals': Schema_.globals
    readonly 'types': Schema_.types
    readonly 'complexity': Schema_.complexity
}

export namespace Schema_Tree_ {
    
    export type schema = Schema_
    
    export type set_ = Schemas_
    
}

export type Schema_Tree_ = 
    | readonly ['schema', Schema_Tree_.schema]
    | readonly ['set', Schema_Tree_.set_]

export namespace Type_Specification_ {
    
    export type schema = Schema_Tree_
    
    export namespace schema_path {
        
        export type L = string
        
    }
    
    export type schema_path = _pi.List<schema_path.L>
    
    export type type_ = string
    
}

export type Type_Specification_ = {
    readonly 'schema': Type_Specification_.schema
    readonly 'schema path': Type_Specification_.schema_path
    readonly 'type': Type_Specification_.type_
}

export namespace Schemas_ {
    
    export type D = Schema_Tree_
    
}

export type Schemas_ = _pi.Dictionary<Schemas_.D>

export namespace Imports_ {
    
    export namespace D {
        
        export namespace schema_set_child {
            
            export type l_entry = Schemas_.D
            
            export type l_id = string
            
            export type l_up_steps = number
            
        }
        
        export type schema_set_child = {
            readonly 'l entry': schema_set_child.l_entry
            readonly 'l id': schema_set_child.l_id
            readonly 'l up steps': schema_set_child.l_up_steps
        }
        
        export type schema = Schema_
        
    }
    
    export type D = {
        readonly 'schema set child': D.schema_set_child
        readonly 'schema': D.schema
    }
    
}

export type Imports_ = _pi.Dictionary<Imports_.D>

export namespace Presence_ {
    
    export type optional = null
    
    export type required = null
    
}

export type Presence_ = 
    | readonly ['optional', Presence_.optional]
    | readonly ['required', Presence_.required]

export namespace Dictionary_ {
    
    export type node = Value_
    
}

export type Dictionary_ = {
    readonly 'node': Dictionary_.node
}

export namespace Signatures_ {
    
    export type D = Signature_
    
}

export type Signatures_ = _pi.Dictionary<Signatures_.D>

export namespace Resolvers_ {
    
    export namespace D {
        
        export type signature = Signatures_.D
        
        export type type_resolver = Value_Resolver_
        
    }
    
    export type D = {
        readonly 'signature': D.signature
        readonly 'type resolver': D.type_resolver
    }
    
}

export type Resolvers_ = _pi.Dictionary<Resolvers_.D>

export namespace Group_ {
    
    export namespace D {
        
        export namespace description {
            
            export type O = string
            
        }
        
        export type description = _pi.Optional_Value<description.O>
        
        export type node = Value_
        
    }
    
    export type D = {
        readonly 'description': D.description
        readonly 'node': D.node
    }
    
}

export type Group_ = _pi.Dictionary<Group_.D>

export namespace Value_Resolver_Group_ {
    
    export namespace D {
        
        export type definition = Group_.D
        
        export type resolver = Value_Resolver_
        
    }
    
    export type D = {
        readonly 'definition': D.definition
        readonly 'resolver': D.resolver
    }
    
}

export type Value_Resolver_Group_ = _pi.Dictionary<Value_Resolver_Group_.D>

export namespace Value_Constraints_ {
    
    export namespace O {
        
        export type D = Value_Reference_
        
    }
    
    export type O = _pi.Dictionary<O.D>
    
}

export type Value_Constraints_ = _pi.Optional_Value<Value_Constraints_.O>

export namespace Type_Reference_ {
    
    export namespace location {
        
        export namespace internal {
            
            export type l_entry = Types_.D
            
            export type l_id = string
            
        }
        
        export type internal = {
            readonly 'l entry': internal.l_entry
            readonly 'l id': internal.l_id
        }
        
        export namespace external {
            
            export namespace import_ {
                
                export type l_entry = Imports_.D
                
                export type l_id = string
                
            }
            
            export type import_ = {
                readonly 'l entry': import_.l_entry
                readonly 'l id': import_.l_id
            }
            
            export namespace type_ {
                
                export type l_entry = Types_.D
                
                export type l_id = string
                
            }
            
            export type type_ = {
                readonly 'l entry': type_.l_entry
                readonly 'l id': type_.l_id
            }
            
        }
        
        export type external = {
            readonly 'import': external.import_
            readonly 'type': external.type_
        }
        
    }
    
    export type location = 
        | readonly ['internal', location.internal]
        | readonly ['external', location.external]
    
    export type resulting_type = Type_
    
}

export type Type_Reference_ = {
    readonly 'location': Type_Reference_.location
    readonly 'resulting type': Type_Reference_.resulting_type
}

export namespace Value_ {
    
    export type boolean_ = null
    
    export namespace component {
        
        export namespace type_ {
            
            export namespace external {
                
                export namespace import_ {
                    
                    export type l_entry = Imports_.D
                    
                    export type l_id = string
                    
                }
                
                export type import_ = {
                    readonly 'l entry': import_.l_entry
                    readonly 'l id': import_.l_id
                }
                
                export namespace type_ {
                    
                    export type l_entry = Types_.D
                    
                    export type l_id = string
                    
                }
                
                export type type_ = {
                    readonly 'l entry': type_.l_entry
                    readonly 'l id': type_.l_id
                }
                
            }
            
            export type external = {
                readonly 'import': external.import_
                readonly 'type': external.type_
            }
            
            export namespace internal {
                
                export type l_entry = Types_.D
                
                export type l_id = string
                
            }
            
            export type internal = {
                readonly 'l entry': internal.l_entry
                readonly 'l id': internal.l_id
            }
            
            export namespace internal_cyclic {
                
                export type l_entry = _pi.Circular_Dependency<Types_.D>
                
                export type l_id = string
                
            }
            
            export type internal_cyclic = {
                readonly 'l entry': internal_cyclic.l_entry
                readonly 'l id': internal_cyclic.l_id
            }
            
        }
        
        export type type_ = 
            | readonly ['external', type_.external]
            | readonly ['internal', type_.internal]
            | readonly ['internal cyclic', type_.internal_cyclic]
        
        export type constraints = Value_Constraints_
        
    }
    
    export type component = {
        readonly 'type': component.type_
        readonly 'constraints': component.constraints
    }
    
    export type dictionary = Dictionary_
    
    export type group = Group_
    
    export namespace list {
        
        export type node = Value_
        
        export namespace result {
            
            export type O = Type_Reference_
            
        }
        
        export type result = _pi.Optional_Value<result.O>
        
    }
    
    export type list = {
        readonly 'node': list.node
        readonly 'result': list.result
    }
    
    export type nothing = null
    
    export namespace number_ {
        
        export namespace global {
            
            export type l_entry = Globals_.number_types.D
            
            export type l_id = string
            
        }
        
        export type global = {
            readonly 'l entry': global.l_entry
            readonly 'l id': global.l_id
        }
        
        export type local = Number_Type_
        
    }
    
    export type number_ = 
        | readonly ['global', number_.global]
        | readonly ['local', number_.local]
    
    export type optional = Value_
    
    export namespace reference {
        
        export type referent = Value_Reference_
        
        export namespace type_ {
            
            export type derived = null
            
            export namespace selected {
                
                export type dictionary = Dictionary_
                
                export namespace dependency {
                    
                    export type acyclic = null
                    
                    export type cyclic = null
                    
                    export type stack = null
                    
                }
                
                export type dependency = 
                    | readonly ['acyclic', dependency.acyclic]
                    | readonly ['cyclic', dependency.cyclic]
                    | readonly ['stack', dependency.stack]
                
            }
            
            export type selected = {
                readonly 'dictionary': selected.dictionary
                readonly 'dependency': selected.dependency
            }
            
        }
        
        export type type_ = 
            | readonly ['derived', type_.derived]
            | readonly ['selected', type_.selected]
        
    }
    
    export type reference = {
        readonly 'referent': reference.referent
        readonly 'type': reference.type_
    }
    
    export namespace state {
        
        export namespace D {
            
            export namespace description {
                
                export type O = string
                
            }
            
            export type description = _pi.Optional_Value<description.O>
            
            export type node = Value_
            
        }
        
        export type D = {
            readonly 'description': D.description
            readonly 'node': D.node
        }
        
    }
    
    export type state = _pi.Dictionary<state.D>
    
    export namespace text {
        
        export namespace global {
            
            export type l_entry = Globals_.text_types.D
            
            export type l_id = string
            
        }
        
        export type global = {
            readonly 'l entry': global.l_entry
            readonly 'l id': global.l_id
        }
        
        export type local = Text_Type_
        
    }
    
    export type text = 
        | readonly ['global', text.global]
        | readonly ['local', text.local]
    
}

export type Value_ = 
    | readonly ['boolean', Value_.boolean_]
    | readonly ['component', Value_.component]
    | readonly ['dictionary', Value_.dictionary]
    | readonly ['group', Value_.group]
    | readonly ['list', Value_.list]
    | readonly ['nothing', Value_.nothing]
    | readonly ['number', Value_.number_]
    | readonly ['optional', Value_.optional]
    | readonly ['reference', Value_.reference]
    | readonly ['state', Value_.state]
    | readonly ['text', Value_.text]

export namespace Option_Constraints_ {
    
    export namespace D {
        
        export namespace state {
            
            export type selection = Guaranteed_Value_Selection_
            
            export type selected_state = Value_.state
            
            export namespace option {
                
                export type l_entry = Value_.state.D
                
                export type l_id = string
                
            }
            
            export type option = {
                readonly 'l entry': option.l_entry
                readonly 'l id': option.l_id
            }
            
        }
        
        export type state = {
            readonly 'selection': state.selection
            readonly 'selected state': state.selected_state
            readonly 'option': state.option
        }
        
        export type assert_is_set = Possible_Value_Selection_
        
    }
    
    export type D = 
        | readonly ['state', D.state]
        | readonly ['assert is set', D.assert_is_set]
    
}

export type Option_Constraints_ = _pi.Dictionary<Option_Constraints_.D>

export namespace Value_Constraint_Resolvers_ {
    
    export type D = Value_Constraint_Resolver_
    
}

export type Value_Constraint_Resolvers_ = _pi.Dictionary<Value_Constraint_Resolvers_.D>

export namespace Signature_Parameters_ {
    
    export namespace values {
        
        export namespace D {
            
            export type data_type = Type_Reference_
            
            export type presence = Presence_
            
        }
        
        export type D = {
            readonly 'data type': D.data_type
            readonly 'presence': D.presence
        }
        
    }
    
    export type values = _pi.Dictionary<values.D>
    
    export namespace lookups {
        
        export namespace D {
            
            export type referent = Type_Reference_
            
            export type dictionary = Dictionary_
            
            export namespace type_ {
                
                export type cyclic = null
                
                export type acyclic = null
                
                export type stack = null
                
            }
            
            export type type_ = 
                | readonly ['cyclic', type_.cyclic]
                | readonly ['acyclic', type_.acyclic]
                | readonly ['stack', type_.stack]
            
            export type presence = Presence_
            
        }
        
        export type D = {
            readonly 'referent': D.referent
            readonly 'dictionary': D.dictionary
            readonly 'type': D.type_
            readonly 'presence': D.presence
        }
        
    }
    
    export type lookups = _pi.Dictionary<lookups.D>
    
}

export type Signature_Parameters_ = {
    readonly 'values': Signature_Parameters_.values
    readonly 'lookups': Signature_Parameters_.lookups
}

export namespace Optional_Value_Initialization_ {
    
    export type not_set = null
    
    export type set_ = Guaranteed_Value_Selection_
    
    export type selection = Possible_Value_Selection_
    
}

export type Optional_Value_Initialization_ = 
    | readonly ['not set', Optional_Value_Initialization_.not_set]
    | readonly ['set', Optional_Value_Initialization_.set_]
    | readonly ['selection', Optional_Value_Initialization_.selection]

export namespace Lookup_Selection_ {
    
    export namespace type_ {
        
        export namespace dictionary {
            
            export type selection = Guaranteed_Value_Selection_
            
            export type selected_dictionary = Dictionary_
            
        }
        
        export type dictionary = {
            readonly 'selection': dictionary.selection
            readonly 'selected dictionary': dictionary.selected_dictionary
        }
        
        export namespace parameter {
            
            export type l_entry = Signature_Parameters_.lookups.D
            
            export type l_id = string
            
        }
        
        export type parameter = {
            readonly 'l entry': parameter.l_entry
            readonly 'l id': parameter.l_id
        }
        
        export type not_circular_dependent_siblings = Dictionary_
        
        export type possibly_circular_dependent_siblings = Dictionary_
        
    }
    
    export type type_ = 
        | readonly ['dictionary', type_.dictionary]
        | readonly ['parameter', type_.parameter]
        | readonly ['not circular dependent siblings', type_.not_circular_dependent_siblings]
        | readonly ['possibly circular dependent siblings', type_.possibly_circular_dependent_siblings]
    
    export type resulting_dictionary = Dictionary_
    
}

export type Lookup_Selection_ = {
    readonly 'type': Lookup_Selection_.type_
    readonly 'resulting dictionary': Lookup_Selection_.resulting_dictionary
}

export type Value_Resolver_List_Result_ = Type_Reference_

export namespace Value_Resolver_ {
    
    export type boolean_ = null
    
    export namespace component {
        
        export type definition = Value_.component
        
        export namespace location {
            
            export namespace external {
                
                export namespace import_ {
                    
                    export type l_entry = Imports_.D
                    
                    export type l_id = string
                    
                }
                
                export type import_ = {
                    readonly 'l entry': import_.l_entry
                    readonly 'l id': import_.l_id
                }
                
                export namespace type_ {
                    
                    export type l_entry = Signatures_.D
                    
                    export type l_id = string
                    
                }
                
                export type type_ = {
                    readonly 'l entry': type_.l_entry
                    readonly 'l id': type_.l_id
                }
                
            }
            
            export type external = {
                readonly 'import': external.import_
                readonly 'type': external.type_
            }
            
            export namespace internal {
                
                export type l_entry = Signatures_.D
                
                export type l_id = string
                
            }
            
            export type internal = {
                readonly 'l entry': internal.l_entry
                readonly 'l id': internal.l_id
            }
            
        }
        
        export type location = 
            | readonly ['external', location.external]
            | readonly ['internal', location.internal]
        
        export type signature = Signatures_.D
        
        export namespace arguments_ {
            
            export namespace O {
                
                export namespace values {
                    
                    export namespace O {
                        
                        export namespace D {
                            
                            export type optional = Optional_Value_Initialization_
                            
                            export type required = Guaranteed_Value_Selection_
                            
                            export namespace parameter {
                                
                                export type l_entry = Signature_Parameters_.values.D
                                
                                export type l_id = string
                                
                            }
                            
                            export type parameter = {
                                readonly 'l entry': parameter.l_entry
                                readonly 'l id': parameter.l_id
                            }
                            
                        }
                        
                        export type D = 
                            | readonly ['optional', D.optional]
                            | readonly ['required', D.required]
                            | readonly ['parameter', D.parameter]
                        
                    }
                    
                    export type O = _pi.Dictionary<O.D>
                    
                }
                
                export type values = _pi.Optional_Value<values.O>
                
                export namespace lookups {
                    
                    export namespace O {
                        
                        export namespace D {
                            
                            export type empty_stack = null
                            
                            export type not_set = null
                            
                            export type selection = Lookup_Selection_
                            
                            export namespace stack {
                                
                                export type stack = Lookup_Selection_
                                
                                export type element = Lookup_Selection_
                                
                            }
                            
                            export type stack = {
                                readonly 'stack': stack.stack
                                readonly 'element': stack.element
                            }
                            
                        }
                        
                        export type D = 
                            | readonly ['empty stack', D.empty_stack]
                            | readonly ['not set', D.not_set]
                            | readonly ['selection', D.selection]
                            | readonly ['stack', D.stack]
                        
                    }
                    
                    export type O = _pi.Dictionary<O.D>
                    
                }
                
                export type lookups = _pi.Optional_Value<lookups.O>
                
            }
            
            export type O = {
                readonly 'values': O.values
                readonly 'lookups': O.lookups
            }
            
        }
        
        export type arguments_ = _pi.Optional_Value<arguments_.O>
        
        export type constraints = Value_Constraint_Resolvers_
        
    }
    
    export type component = {
        readonly 'definition': component.definition
        readonly 'location': component.location
        readonly 'signature': component.signature
        readonly 'arguments': component.arguments_
        readonly 'constraints': component.constraints
    }
    
    export namespace dictionary {
        
        export type definition = Dictionary_
        
        export type resolver = Value_Resolver_
        
        export namespace benchmark {
            
            export type O = Benchmark_
            
        }
        
        export type benchmark = _pi.Optional_Value<benchmark.O>
        
    }
    
    export type dictionary = {
        readonly 'definition': dictionary.definition
        readonly 'resolver': dictionary.resolver
        readonly 'benchmark': dictionary.benchmark
    }
    
    export type group = Value_Resolver_Group_
    
    export namespace list {
        
        export type definition = Value_.list
        
        export type resolver = Value_Resolver_
        
        export namespace result {
            
            export type O = Value_Resolver_List_Result_
            
        }
        
        export type result = _pi.Optional_Value<result.O>
        
    }
    
    export type list = {
        readonly 'definition': list.definition
        readonly 'resolver': list.resolver
        readonly 'result': list.result
    }
    
    export type nothing = null
    
    export type number_ = null
    
    export namespace optional {
        
        export type constraints = Option_Constraints_
        
        export type resolver = Value_Resolver_
        
    }
    
    export type optional = {
        readonly 'constraints': optional.constraints
        readonly 'resolver': optional.resolver
    }
    
    export namespace reference {
        
        export type definition = Value_.reference
        
        export namespace type_ {
            
            export namespace derived {
                
                export type value = Guaranteed_Value_Selection_
                
            }
            
            export type derived = {
                readonly 'value': derived.value
            }
            
            export namespace selected {
                
                export type definition = Value_.reference.type_.selected
                
                export type lookup = Lookup_Selection_
                
                export type constraints = Value_Constraint_Resolvers_
                
            }
            
            export type selected = {
                readonly 'definition': selected.definition
                readonly 'lookup': selected.lookup
                readonly 'constraints': selected.constraints
            }
            
        }
        
        export type type_ = 
            | readonly ['derived', type_.derived]
            | readonly ['selected', type_.selected]
        
    }
    
    export type reference = {
        readonly 'definition': reference.definition
        readonly 'type': reference.type_
    }
    
    export namespace state {
        
        export type definition = Value_.state
        
        export namespace states {
            
            export namespace D {
                
                export type constraints = Option_Constraints_
                
                export type resolver = Value_Resolver_
                
            }
            
            export type D = {
                readonly 'constraints': D.constraints
                readonly 'resolver': D.resolver
            }
            
        }
        
        export type states = _pi.Dictionary<states.D>
        
    }
    
    export type state = {
        readonly 'definition': state.definition
        readonly 'states': state.states
    }
    
    export type text = null
    
}

export type Value_Resolver_ = 
    | readonly ['boolean', Value_Resolver_.boolean_]
    | readonly ['component', Value_Resolver_.component]
    | readonly ['dictionary', Value_Resolver_.dictionary]
    | readonly ['group', Value_Resolver_.group]
    | readonly ['list', Value_Resolver_.list]
    | readonly ['nothing', Value_Resolver_.nothing]
    | readonly ['number', Value_Resolver_.number_]
    | readonly ['optional', Value_Resolver_.optional]
    | readonly ['reference', Value_Resolver_.reference]
    | readonly ['state', Value_Resolver_.state]
    | readonly ['text', Value_Resolver_.text]

export namespace Relative_Value_Selection_ {
    
    export namespace path {
        
        export namespace l_list {
            
            export namespace L {
                
                export type l_result = Value_
                
                export namespace l_item {
                    
                    export type component = null
                    
                    export namespace group {
                        
                        export type l_entry = Group_.D
                        
                        export type l_id = string
                        
                    }
                    
                    export type group = {
                        readonly 'l entry': group.l_entry
                        readonly 'l id': group.l_id
                    }
                    
                    export namespace reference {
                        
                        export type definition = Value_.reference
                        
                    }
                    
                    export type reference = {
                        readonly 'definition': reference.definition
                    }
                    
                }
                
                export type l_item = 
                    | readonly ['component', l_item.component]
                    | readonly ['group', l_item.group]
                    | readonly ['reference', l_item.reference]
                
            }
            
            export type L = {
                readonly 'l result': L.l_result
                readonly 'l item': L.l_item
            }
            
        }
        
        export type l_list = _pi.List<l_list.L>
        
        export type l_result = Value_
        
    }
    
    export type path = {
        readonly 'l list': path.l_list
        readonly 'l result': path.l_result
    }
    
    export type resulting_node = Value_
    
}

export type Relative_Value_Selection_ = {
    readonly 'path': Relative_Value_Selection_.path
    readonly 'resulting node': Relative_Value_Selection_.resulting_node
}

export namespace Guaranteed_Value_Selection_ {
    
    export namespace start {
        
        export namespace sibling {
            
            export type l_entry = Value_Resolver_Group_.D
            
            export type l_id = string
            
        }
        
        export type sibling = {
            readonly 'l entry': sibling.l_entry
            readonly 'l id': sibling.l_id
        }
        
        export namespace parent_sibling {
            
            export type l_entry = Value_Resolver_Group_.D
            
            export type l_id = string
            
        }
        
        export type parent_sibling = {
            readonly 'l entry': parent_sibling.l_entry
            readonly 'l id': parent_sibling.l_id
        }
        
        export namespace option_constraint {
            
            export type l_entry = Option_Constraints_.D
            
            export type l_id = string
            
        }
        
        export type option_constraint = {
            readonly 'l entry': option_constraint.l_entry
            readonly 'l id': option_constraint.l_id
        }
        
        export type list_cursor = null
        
        export type linked_entry = null
        
        export namespace constraint {
            
            export namespace component {
                
                export namespace property {
                    
                    export type l_entry = Value_Resolver_Group_.D
                    
                    export type l_id = string
                    
                }
                
                export type property = {
                    readonly 'l entry': property.l_entry
                    readonly 'l id': property.l_id
                }
                
                export namespace constraint {
                    
                    export type l_entry = Value_Constraint_Resolvers_.D
                    
                    export type l_id = string
                    
                }
                
                export type constraint = {
                    readonly 'l entry': constraint.l_entry
                    readonly 'l id': constraint.l_id
                }
                
            }
            
            export type component = {
                readonly 'property': component.property
                readonly 'constraint': component.constraint
            }
            
            export namespace reference {
                
                export namespace property {
                    
                    export type l_entry = Value_Resolver_Group_.D
                    
                    export type l_id = string
                    
                }
                
                export type property = {
                    readonly 'l entry': property.l_entry
                    readonly 'l id': property.l_id
                }
                
                export namespace constraint {
                    
                    export type l_entry = Value_Constraint_Resolvers_.D
                    
                    export type l_id = string
                    
                }
                
                export type constraint = {
                    readonly 'l entry': constraint.l_entry
                    readonly 'l id': constraint.l_id
                }
                
            }
            
            export type reference = {
                readonly 'property': reference.property
                readonly 'constraint': reference.constraint
            }
            
        }
        
        export type constraint = 
            | readonly ['component', constraint.component]
            | readonly ['reference', constraint.reference]
        
        export namespace parameter {
            
            export type l_entry = Signature_Parameters_.values.D
            
            export type l_id = string
            
        }
        
        export type parameter = {
            readonly 'l entry': parameter.l_entry
            readonly 'l id': parameter.l_id
        }
        
        export namespace result {
            
            export namespace list {
                
                export namespace property {
                    
                    export type l_entry = Value_Resolver_Group_.D
                    
                    export type l_id = string
                    
                }
                
                export type property = {
                    readonly 'l entry': property.l_entry
                    readonly 'l id': property.l_id
                }
                
                export type list_result = Value_Resolver_.list.result.O
                
            }
            
            export type list = {
                readonly 'property': list.property
                readonly 'list result': list.list_result
            }
            
            export namespace state {
                
                export namespace property {
                    
                    export type l_entry = Value_Resolver_Group_.D
                    
                    export type l_id = string
                    
                }
                
                export type property = {
                    readonly 'l entry': property.l_entry
                    readonly 'l id': property.l_id
                }
                
                export type state = Value_Resolver_.state
                
                export type result = Type_Reference_
                
            }
            
            export type state = {
                readonly 'property': state.property
                readonly 'state': state.state
                readonly 'result': state.result
            }
            
            export namespace optional_value {
                
                export namespace property {
                    
                    export type l_entry = Value_Resolver_Group_.D
                    
                    export type l_id = string
                    
                }
                
                export type property = {
                    readonly 'l entry': property.l_entry
                    readonly 'l id': property.l_id
                }
                
                export type optional_value = Value_Resolver_.optional
                
                export type result = Type_Reference_
                
            }
            
            export type optional_value = {
                readonly 'property': optional_value.property
                readonly 'optional value': optional_value.optional_value
                readonly 'result': optional_value.result
            }
            
        }
        
        export type result = 
            | readonly ['list', result.list]
            | readonly ['state', result.state]
            | readonly ['optional value', result.optional_value]
        
    }
    
    export type start = 
        | readonly ['sibling', start.sibling]
        | readonly ['parent sibling', start.parent_sibling]
        | readonly ['option constraint', start.option_constraint]
        | readonly ['list cursor', start.list_cursor]
        | readonly ['linked entry', start.linked_entry]
        | readonly ['constraint', start.constraint]
        | readonly ['parameter', start.parameter]
        | readonly ['result', start.result]
    
    export type tail = Relative_Value_Selection_
    
    export type resulting_node = Value_
    
}

export type Guaranteed_Value_Selection_ = {
    readonly 'start': Guaranteed_Value_Selection_.start
    readonly 'tail': Guaranteed_Value_Selection_.tail
    readonly 'resulting node': Guaranteed_Value_Selection_.resulting_node
}

export namespace Benchmark_ {
    
    export namespace selection {
        
        export type l_component = Guaranteed_Value_Selection_
        
        export namespace l_constraints {
            
            export type dictionary = Value_.dictionary
            
        }
        
        export type l_constraints = {
            readonly 'dictionary': l_constraints.dictionary
        }
        
    }
    
    export type selection = {
        readonly 'l component': selection.l_component
        readonly 'l constraints': selection.l_constraints
    }
    
    export type resulting_dictionary = Dictionary_
    
    export type dense = boolean
    
}

export type Benchmark_ = {
    readonly 'selection': Benchmark_.selection
    readonly 'resulting dictionary': Benchmark_.resulting_dictionary
    readonly 'dense': Benchmark_.dense
}

export namespace Value_Path_ {
    
    export namespace tail {
        
        export namespace l_list {
            
            export namespace L {
                
                export type l_result = Value_
                
                export namespace l_item {
                    
                    export type dictionary = null
                    
                    export namespace group {
                        
                        export type l_entry = Group_.D
                        
                        export type l_id = string
                        
                    }
                    
                    export type group = {
                        readonly 'l entry': group.l_entry
                        readonly 'l id': group.l_id
                    }
                    
                    export type list = null
                    
                    export type optional = null
                    
                    export namespace state {
                        
                        export type l_entry = Value_.state.D
                        
                        export type l_id = string
                        
                    }
                    
                    export type state = {
                        readonly 'l entry': state.l_entry
                        readonly 'l id': state.l_id
                    }
                    
                }
                
                export type l_item = 
                    | readonly ['dictionary', l_item.dictionary]
                    | readonly ['group', l_item.group]
                    | readonly ['list', l_item.list]
                    | readonly ['optional', l_item.optional]
                    | readonly ['state', l_item.state]
                
            }
            
            export type L = {
                readonly 'l result': L.l_result
                readonly 'l item': L.l_item
            }
            
        }
        
        export type l_list = _pi.List<l_list.L>
        
        export type l_result = Value_
        
    }
    
    export type tail = {
        readonly 'l list': tail.l_list
        readonly 'l result': tail.l_result
    }
    
    export type resulting_node = Value_
    
}

export type Value_Path_ = {
    readonly 'tail': Value_Path_.tail
    readonly 'resulting node': Value_Path_.resulting_node
}

export namespace Value_Reference_ {
    
    export type type_location = Type_Reference_
    
    export type path = Value_Path_
    
}

export type Value_Reference_ = {
    readonly 'type location': Value_Reference_.type_location
    readonly 'path': Value_Reference_.path
}

export namespace Signature_ {
    
    export type type_ = Type_
    
    export namespace parameters {
        
        export type local = Signature_Parameters_
        
        export namespace same_as {
            
            export type l_entry = Signatures_.D
            
            export type l_id = string
            
        }
        
        export type same_as = {
            readonly 'l entry': same_as.l_entry
            readonly 'l id': same_as.l_id
        }
        
    }
    
    export type parameters = 
        | readonly ['local', parameters.local]
        | readonly ['same as', parameters.same_as]
    
    export type resolved_parameters = Signature_Parameters_
    
}

export type Signature_ = {
    readonly 'type': Signature_.type_
    readonly 'parameters': Signature_.parameters
    readonly 'resolved parameters': Signature_.resolved_parameters
}

export namespace Constraint_ {
    
    export type selection = Relative_Value_Selection_
    
    export namespace type_ {
        
        export namespace state {
            
            export type selected_state = Value_.state
            
            export namespace option {
                
                export type l_entry = Value_.state.D
                
                export type l_id = string
                
            }
            
            export type option = {
                readonly 'l entry': option.l_entry
                readonly 'l id': option.l_id
            }
            
        }
        
        export type state = {
            readonly 'selected state': state.selected_state
            readonly 'option': state.option
        }
        
        export namespace optional_value {
            
            export type selected_optional_value = Value_.optional
            
        }
        
        export type optional_value = {
            readonly 'selected optional value': optional_value.selected_optional_value
        }
        
    }
    
    export type type_ = 
        | readonly ['state', type_.state]
        | readonly ['optional value', type_.optional_value]
    
}

export type Constraint_ = {
    readonly 'selection': Constraint_.selection
    readonly 'type': Constraint_.type_
}

export namespace Reference_To_Value_Constraint_Resolver_ {
    
    export type l_entry = Value_Constraint_Resolvers_.D
    
    export type l_id = string
    
}

export type Reference_To_Value_Constraint_Resolver_ = {
    readonly 'l entry': Reference_To_Value_Constraint_Resolver_.l_entry
    readonly 'l id': Reference_To_Value_Constraint_Resolver_.l_id
}

export namespace Value_Constraint_Resolver_ {
    
    export namespace start {
        
        export type property = null
        
        export type sibling = Reference_To_Value_Constraint_Resolver_
        
    }
    
    export type start = 
        | readonly ['property', start.property]
        | readonly ['sibling', start.sibling]
    
    export type constraint = Constraint_
    
}

export type Value_Constraint_Resolver_ = {
    readonly 'start': Value_Constraint_Resolver_.start
    readonly 'constraint': Value_Constraint_Resolver_.constraint
}

export namespace Possible_Value_Selection_ {
    
    export namespace parameter {
        
        export type l_entry = Signature_Parameters_.values.D
        
        export type l_id = string
        
    }
    
    export type parameter = {
        readonly 'l entry': parameter.l_entry
        readonly 'l id': parameter.l_id
    }
    
    export namespace result {
        
        export namespace state {
            
            export namespace property {
                
                export type l_entry = Value_Resolver_Group_.D
                
                export type l_id = string
                
            }
            
            export type property = {
                readonly 'l entry': property.l_entry
                readonly 'l id': property.l_id
            }
            
            export type state = Value_Resolver_.state
            
            export type result = Type_Reference_
            
        }
        
        export type state = {
            readonly 'property': state.property
            readonly 'state': state.state
            readonly 'result': state.result
        }
        
        export namespace optional_value {
            
            export namespace property {
                
                export type l_entry = Value_Resolver_Group_.D
                
                export type l_id = string
                
            }
            
            export type property = {
                readonly 'l entry': property.l_entry
                readonly 'l id': property.l_id
            }
            
            export type optional_value = Value_Resolver_.optional
            
            export type result = Type_Reference_
            
        }
        
        export type optional_value = {
            readonly 'property': optional_value.property
            readonly 'optional value': optional_value.optional_value
            readonly 'result': optional_value.result
        }
        
    }
    
    export type result = 
        | readonly ['state', result.state]
        | readonly ['optional value', result.optional_value]
    
}

export type Possible_Value_Selection_ = 
    | readonly ['parameter', Possible_Value_Selection_.parameter]
    | readonly ['result', Possible_Value_Selection_.result]

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
    Value_Resolver_Group_ as Value_Resolver_Group, 
    Value_Constraints_ as Value_Constraints, 
    Type_Reference_ as Type_Reference, 
    Value_ as Value, 
    Option_Constraints_ as Option_Constraints, 
    Value_Constraint_Resolvers_ as Value_Constraint_Resolvers, 
    Signature_Parameters_ as Signature_Parameters, 
    Optional_Value_Initialization_ as Optional_Value_Initialization, 
    Lookup_Selection_ as Lookup_Selection, 
    Value_Resolver_List_Result_ as Value_Resolver_List_Result, 
    Value_Resolver_ as Value_Resolver, 
    Relative_Value_Selection_ as Relative_Value_Selection, 
    Guaranteed_Value_Selection_ as Guaranteed_Value_Selection, 
    Benchmark_ as Benchmark, 
    Value_Path_ as Value_Path, 
    Value_Reference_ as Value_Reference, 
    Signature_ as Signature, 
    Constraint_ as Constraint, 
    Reference_To_Value_Constraint_Resolver_ as Reference_To_Value_Constraint_Resolver, 
    Value_Constraint_Resolver_ as Value_Constraint_Resolver, 
    Possible_Value_Selection_ as Possible_Value_Selection, 
}
