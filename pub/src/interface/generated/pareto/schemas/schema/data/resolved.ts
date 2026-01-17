
import * as _pi from "pareto-core-interface"

import * as i__location from "../../../core/location"

export namespace Text_Type_ {
    
    export namespace _type {
        
        export type multi_line = null
        
        export type single_line = null
        
    }
    
    export type _type = 
        | readonly ['multi line', _type.multi_line]
        | readonly ['single line', _type.single_line]
    
}

export type Text_Type_ = {
    readonly 'type': Text_Type_._type
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
            
            export namespace _type {
                
                export type integer = null
                
                export type natural = null
                
                export type positive_natural = null
                
            }
            
            export type _type = 
                | readonly ['integer', _type.integer]
                | readonly ['natural', _type.natural]
                | readonly ['positive natural', _type.positive_natural]
            
        }
        
        export type exact = {
            readonly 'decimal separator offset': exact.decimal_separator_offset
            readonly 'type': exact._type
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

export namespace Type_Parameters_ {
    
    export type D = null
    
}

export type Type_Parameters_ = _pi.Dictionary<Type_Parameters_.D>

export namespace Type_ {
    
    export type type_parameters = Type_Parameters_
    
    export type node = Type_Node_
    
}

export type Type_ = {
    readonly 'type parameters': Type_.type_parameters
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
    
    export type _set = Schemas_
    
}

export type Schema_Tree_ = 
    | readonly ['schema', Schema_Tree_.schema]
    | readonly ['set', Schema_Tree_._set]

export namespace Type_Specification_ {
    
    export type schema = Schema_Tree_
    
    export namespace schema_path {
        
        export type L = string
        
    }
    
    export type schema_path = _pi.List<schema_path.L>
    
    export type _type = string
    
}

export type Type_Specification_ = {
    readonly 'schema': Type_Specification_.schema
    readonly 'schema path': Type_Specification_.schema_path
    readonly 'type': Type_Specification_._type
}

export namespace Schemas_ {
    
    export type D = Schema_Tree_
    
}

export type Schemas_ = _pi.Dictionary<Schemas_.D>

export namespace Imports_ {
    
    export namespace D {
        
        export namespace schema_set_child {
            
            export type entry = Schemas_.D
            
            export type key = string
            
        }
        
        export type schema_set_child = {
            readonly 'entry': schema_set_child.entry
            readonly 'key': schema_set_child.key
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
    
    export type node = Type_Node_
    
    export type ordered = boolean
    
}

export type Dictionary_ = {
    readonly 'node': Dictionary_.node
    readonly 'ordered': Dictionary_.ordered
}

export namespace Signatures_ {
    
    export type D = Signature_
    
}

export type Signatures_ = _pi.Dictionary<Signatures_.D>

export namespace Resolvers_ {
    
    export namespace D {
        
        export type signature = Signatures_.D
        
        export type type_resolver = Node_Resolver_
        
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
        
        export type node = Type_Node_
        
    }
    
    export type D = {
        readonly 'description': D.description
        readonly 'node': D.node
    }
    
}

export type Group_ = _pi.Dictionary<Group_.D>

export namespace Type_Node_ {
    
    export type _boolean = null
    
    export namespace component {
        
        export namespace external {
            
            export namespace _import {
                
                export type entry = Imports_.D
                
                export type key = string
                
            }
            
            export type _import = {
                readonly 'entry': _import.entry
                readonly 'key': _import.key
            }
            
            export namespace _type {
                
                export type entry = Types_.D
                
                export type key = string
                
            }
            
            export type _type = {
                readonly 'entry': _type.entry
                readonly 'key': _type.key
            }
            
        }
        
        export type external = {
            readonly 'import': external._import
            readonly 'type': external._type
        }
        
        export namespace internal {
            
            export type entry = Types_.D
            
            export type key = string
            
        }
        
        export type internal = {
            readonly 'entry': internal.entry
            readonly 'key': internal.key
        }
        
        export namespace internal_cyclic {
            
            export type entry = Types_.D
            
            export type key = string
            
        }
        
        export type internal_cyclic = {
            readonly 'entry': _pi.Circular_Dependency<internal_cyclic.entry>
            readonly 'key': internal_cyclic.key
        }
        
    }
    
    export type component = 
        | readonly ['external', component.external]
        | readonly ['internal', component.internal]
        | readonly ['internal cyclic', component.internal_cyclic]
    
    export type dictionary = Dictionary_
    
    export type group = Group_
    
    export namespace list {
        
        export type node = Type_Node_
        
    }
    
    export type list = {
        readonly 'node': list.node
    }
    
    export type nothing = null
    
    export namespace _number {
        
        export namespace global {
            
            export type entry = Globals_.number_types.D
            
            export type key = string
            
        }
        
        export type global = {
            readonly 'entry': global.entry
            readonly 'key': global.key
        }
        
        export type local = Number_Type_
        
    }
    
    export type _number = 
        | readonly ['global', _number.global]
        | readonly ['local', _number.local]
    
    export type optional = Type_Node_
    
    export namespace reference {
        
        export type referent = Type_Node_Reference_
        
        export namespace _type {
            
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
        
        export type _type = 
            | readonly ['derived', _type.derived]
            | readonly ['selected', _type.selected]
        
    }
    
    export type reference = {
        readonly 'referent': reference.referent
        readonly 'type': reference._type
    }
    
    export namespace state_group {
        
        export namespace D {
            
            export namespace description {
                
                export type O = string
                
            }
            
            export type description = _pi.Optional_Value<description.O>
            
            export type node = Type_Node_
            
        }
        
        export type D = {
            readonly 'description': D.description
            readonly 'node': D.node
        }
        
    }
    
    export type state_group = _pi.Dictionary<state_group.D>
    
    export namespace text {
        
        export namespace global {
            
            export type entry = Globals_.text_types.D
            
            export type key = string
            
        }
        
        export type global = {
            readonly 'entry': global.entry
            readonly 'key': global.key
        }
        
        export type local = Text_Type_
        
    }
    
    export type text = 
        | readonly ['global', text.global]
        | readonly ['local', text.local]
    
}

export type Type_Node_ = 
    | readonly ['boolean', Type_Node_._boolean]
    | readonly ['component', Type_Node_.component]
    | readonly ['dictionary', Type_Node_.dictionary]
    | readonly ['group', Type_Node_.group]
    | readonly ['list', Type_Node_.list]
    | readonly ['nothing', Type_Node_.nothing]
    | readonly ['number', Type_Node_._number]
    | readonly ['optional', Type_Node_.optional]
    | readonly ['reference', Type_Node_.reference]
    | readonly ['state group', Type_Node_.state_group]
    | readonly ['text', Type_Node_.text]

export namespace Type_Reference_ {
    
    export namespace location {
        
        export namespace internal {
            
            export type entry = Types_.D
            
            export type key = string
            
        }
        
        export type internal = {
            readonly 'entry': internal.entry
            readonly 'key': internal.key
        }
        
        export namespace external {
            
            export namespace _import {
                
                export type entry = Imports_.D
                
                export type key = string
                
            }
            
            export type _import = {
                readonly 'entry': _import.entry
                readonly 'key': _import.key
            }
            
            export namespace _type {
                
                export type entry = Types_.D
                
                export type key = string
                
            }
            
            export type _type = {
                readonly 'entry': _type.entry
                readonly 'key': _type.key
            }
            
        }
        
        export type external = {
            readonly 'import': external._import
            readonly 'type': external._type
        }
        
    }
    
    export type location = 
        | readonly ['internal', location.internal]
        | readonly ['external', location.external]
    
    export type resulting_node = Type_Node_
    
}

export type Type_Reference_ = {
    readonly 'location': Type_Reference_.location
    readonly 'resulting node': Type_Reference_.resulting_node
}

export namespace Type_Node_Reference_ {
    
    export type type_location = Type_Reference_
    
    export namespace tail {
        
        export namespace L {
            
            export type dictionary = null
            
            export namespace group {
                
                export type entry = Group_.D
                
                export type key = string
                
            }
            
            export type group = {
                readonly 'entry': group.entry
                readonly 'key': group.key
            }
            
            export type list = null
            
            export type optional = null
            
            export namespace state_group {
                
                export type entry = Type_Node_.state_group.D
                
                export type key = string
                
            }
            
            export type state_group = {
                readonly 'entry': state_group.entry
                readonly 'key': state_group.key
            }
            
        }
        
        export type L = 
            | readonly ['dictionary', L.dictionary]
            | readonly ['group', L.group]
            | readonly ['list', L.list]
            | readonly ['optional', L.optional]
            | readonly ['state group', L.state_group]
        
    }
    
    export type tail = _pi.List<tail.L>
    
    export type resulting_node = Type_Node_
    
}

export type Type_Node_Reference_ = {
    readonly 'type location': Type_Node_Reference_.type_location
    readonly 'tail': Type_Node_Reference_.tail
    readonly 'resulting node': Type_Node_Reference_.resulting_node
}

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
            
            export namespace _type {
                
                export type cyclic = null
                
                export type acyclic = null
                
                export type stack = null
                
            }
            
            export type _type = 
                | readonly ['cyclic', _type.cyclic]
                | readonly ['acyclic', _type.acyclic]
                | readonly ['stack', _type.stack]
            
            export type presence = Presence_
            
        }
        
        export type D = {
            readonly 'referent': D.referent
            readonly 'dictionary': D.dictionary
            readonly 'type': D._type
            readonly 'presence': D.presence
        }
        
    }
    
    export type lookups = _pi.Dictionary<lookups.D>
    
}

export type Signature_Parameters_ = {
    readonly 'values': Signature_Parameters_.values
    readonly 'lookups': Signature_Parameters_.lookups
}

export namespace Signature_ {
    
    export type _type = Type_
    
    export namespace parameters {
        
        export type local = Signature_Parameters_
        
        export namespace same_as {
            
            export type entry = Signatures_.D
            
            export type key = string
            
        }
        
        export type same_as = {
            readonly 'entry': same_as.entry
            readonly 'key': same_as.key
        }
        
    }
    
    export type parameters = 
        | readonly ['local', parameters.local]
        | readonly ['same as', parameters.same_as]
    
    export type resolved_parameters = Signature_Parameters_
    
}

export type Signature_ = {
    readonly 'type': Signature_._type
    readonly 'parameters': Signature_.parameters
    readonly 'resolved parameters': Signature_.resolved_parameters
}

export namespace Relative_Value_Selection_ {
    
    export namespace path {
        
        export namespace L {
            
            export type component = null
            
            export namespace group {
                
                export type entry = Group_.D
                
                export type key = string
                
            }
            
            export type group = {
                readonly 'entry': group.entry
                readonly 'key': group.key
            }
            
            export namespace reference {
                
                export type definition = Type_Node_.reference
                
            }
            
            export type reference = {
                readonly 'definition': reference.definition
            }
            
        }
        
        export type L = 
            | readonly ['component', L.component]
            | readonly ['group', L.group]
            | readonly ['reference', L.reference]
        
    }
    
    export type path = _pi.List<path.L>
    
    export type resulting_node = Type_Node_
    
}

export type Relative_Value_Selection_ = {
    readonly 'path': Relative_Value_Selection_.path
    readonly 'resulting node': Relative_Value_Selection_.resulting_node
}

export namespace Lookup_Selection_ {
    
    export namespace _type {
        
        export namespace dictionary {
            
            export type selection = Guaranteed_Value_Selection_
            
            export type selected_dictionary = Dictionary_
            
        }
        
        export type dictionary = {
            readonly 'selection': dictionary.selection
            readonly 'selected dictionary': dictionary.selected_dictionary
        }
        
        export namespace parameter {
            
            export type entry = Signature_Parameters_.lookups.D
            
            export type key = string
            
        }
        
        export type parameter = {
            readonly 'entry': parameter.entry
            readonly 'key': parameter.key
        }
        
        export type not_circular_dependent_siblings = Dictionary_
        
        export type possibly_circular_dependent_siblings = Dictionary_
        
    }
    
    export type _type = 
        | readonly ['dictionary', _type.dictionary]
        | readonly ['parameter', _type.parameter]
        | readonly ['not circular dependent siblings', _type.not_circular_dependent_siblings]
        | readonly ['possibly circular dependent siblings', _type.possibly_circular_dependent_siblings]
    
    export type resulting_dictionary = Dictionary_
    
}

export type Lookup_Selection_ = {
    readonly 'type': Lookup_Selection_._type
    readonly 'resulting dictionary': Lookup_Selection_.resulting_dictionary
}

export namespace Constraint_ {
    
    export type selection = Relative_Value_Selection_
    
    export namespace _type {
        
        export namespace state {
            
            export type selected_state_group = Type_Node_.state_group
            
            export namespace state {
                
                export type entry = Type_Node_.state_group.D
                
                export type key = string
                
            }
            
            export type state = {
                readonly 'entry': state.entry
                readonly 'key': state.key
            }
            
        }
        
        export type state = {
            readonly 'selected state group': state.selected_state_group
            readonly 'state': state.state
        }
        
        export namespace optional_value {
            
            export type selected_optional_value = Type_Node_.optional
            
        }
        
        export type optional_value = {
            readonly 'selected optional value': optional_value.selected_optional_value
        }
        
    }
    
    export type _type = 
        | readonly ['state', _type.state]
        | readonly ['optional value', _type.optional_value]
    
}

export type Constraint_ = {
    readonly 'selection': Constraint_.selection
    readonly 'type': Constraint_._type
}

export namespace Option_Constraints_ {
    
    export namespace D {
        
        export namespace state {
            
            export type selection = Guaranteed_Value_Selection_
            
            export type selected_state_group = Type_Node_.state_group
            
            export namespace state {
                
                export type entry = Type_Node_.state_group.D
                
                export type key = string
                
            }
            
            export type state = {
                readonly 'entry': state.entry
                readonly 'key': state.key
            }
            
        }
        
        export type state = {
            readonly 'selection': state.selection
            readonly 'selected state group': state.selected_state_group
            readonly 'state': state.state
        }
        
        export type assert_is_set = Possible_Value_Selection_
        
    }
    
    export type D = 
        | readonly ['state', D.state]
        | readonly ['assert is set', D.assert_is_set]
    
}

export type Option_Constraints_ = _pi.Dictionary<Option_Constraints_.D>

export namespace Property_Constraints_ {
    
    export type D = Property_Constraint_
    
}

export type Property_Constraints_ = _pi.Dictionary<Property_Constraints_.D>

export namespace Reference_To_Property_Constraint_ {
    
    export type entry = Property_Constraints_.D
    
    export type key = string
    
}

export type Reference_To_Property_Constraint_ = {
    readonly 'entry': Reference_To_Property_Constraint_.entry
    readonly 'key': Reference_To_Property_Constraint_.key
}

export namespace Property_Constraint_ {
    
    export namespace start {
        
        export type property = null
        
        export type sibling = Reference_To_Property_Constraint_
        
    }
    
    export type start = 
        | readonly ['property', start.property]
        | readonly ['sibling', start.sibling]
    
    export type constraint = Constraint_
    
}

export type Property_Constraint_ = {
    readonly 'start': Property_Constraint_.start
    readonly 'constraint': Property_Constraint_.constraint
}

export namespace Optional_Value_Initialization_ {
    
    export type not_set = null
    
    export type _set = Guaranteed_Value_Selection_
    
    export type selection = Possible_Value_Selection_
    
}

export type Optional_Value_Initialization_ = 
    | readonly ['not set', Optional_Value_Initialization_.not_set]
    | readonly ['set', Optional_Value_Initialization_._set]
    | readonly ['selection', Optional_Value_Initialization_.selection]

export namespace Node_Resolver_Group_ {
    
    export namespace D {
        
        export type definition = Group_.D
        
        export type resolver = Node_Resolver_
        
    }
    
    export type D = {
        readonly 'definition': D.definition
        readonly 'resolver': D.resolver
    }
    
}

export type Node_Resolver_Group_ = _pi.Dictionary<Node_Resolver_Group_.D>

export type Node_Resolver_List_Result_ = Type_Reference_

export namespace Benchmark_ {
    
    export type selection = Guaranteed_Value_Selection_
    
    export type resulting_dictionary = Dictionary_
    
    export type dense = boolean
    
}

export type Benchmark_ = {
    readonly 'selection': Benchmark_.selection
    readonly 'resulting dictionary': Benchmark_.resulting_dictionary
    readonly 'dense': Benchmark_.dense
}

export namespace Node_Resolver_ {
    
    export type _boolean = null
    
    export namespace component {
        
        export namespace location {
            
            export namespace external {
                
                export namespace _import {
                    
                    export type entry = Imports_.D
                    
                    export type key = string
                    
                }
                
                export type _import = {
                    readonly 'entry': _import.entry
                    readonly 'key': _import.key
                }
                
                export namespace _type {
                    
                    export type entry = Signatures_.D
                    
                    export type key = string
                    
                }
                
                export type _type = {
                    readonly 'entry': _type.entry
                    readonly 'key': _type.key
                }
                
            }
            
            export type external = {
                readonly 'import': external._import
                readonly 'type': external._type
            }
            
            export namespace internal {
                
                export type entry = Signatures_.D
                
                export type key = string
                
            }
            
            export type internal = {
                readonly 'entry': internal.entry
                readonly 'key': internal.key
            }
            
        }
        
        export type location = 
            | readonly ['external', location.external]
            | readonly ['internal', location.internal]
        
        export type signature = Signatures_.D
        
        export namespace _arguments {
            
            export namespace O {
                
                export namespace values {
                    
                    export namespace O {
                        
                        export namespace D {
                            
                            export type optional = Optional_Value_Initialization_
                            
                            export type required = Guaranteed_Value_Selection_
                            
                            export namespace parameter {
                                
                                export type entry = Signature_Parameters_.values.D
                                
                                export type key = string
                                
                            }
                            
                            export type parameter = {
                                readonly 'entry': parameter.entry
                                readonly 'key': parameter.key
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
        
        export type _arguments = _pi.Optional_Value<_arguments.O>
        
        export type constraints = Property_Constraints_
        
    }
    
    export type component = {
        readonly 'location': component.location
        readonly 'signature': component.signature
        readonly 'arguments': component._arguments
        readonly 'constraints': component.constraints
    }
    
    export namespace dictionary {
        
        export type definition = Dictionary_
        
        export type resolver = Node_Resolver_
        
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
    
    export type group = Node_Resolver_Group_
    
    export namespace list {
        
        export type definition = Type_Node_.list
        
        export type resolver = Node_Resolver_
        
        export namespace result {
            
            export type O = Node_Resolver_List_Result_
            
        }
        
        export type result = _pi.Optional_Value<result.O>
        
    }
    
    export type list = {
        readonly 'definition': list.definition
        readonly 'resolver': list.resolver
        readonly 'result': list.result
    }
    
    export type nothing = null
    
    export type _number = null
    
    export namespace optional {
        
        export type constraints = Option_Constraints_
        
        export type resolver = Node_Resolver_
        
    }
    
    export type optional = {
        readonly 'constraints': optional.constraints
        readonly 'resolver': optional.resolver
    }
    
    export namespace reference {
        
        export type definition = Type_Node_.reference
        
        export namespace _type {
            
            export namespace derived {
                
                export type value = Guaranteed_Value_Selection_
                
            }
            
            export type derived = {
                readonly 'value': derived.value
            }
            
            export namespace selected {
                
                export type definition = Type_Node_.reference._type.selected
                
                export type lookup = Lookup_Selection_
                
                export type constraints = Property_Constraints_
                
            }
            
            export type selected = {
                readonly 'definition': selected.definition
                readonly 'lookup': selected.lookup
                readonly 'constraints': selected.constraints
            }
            
        }
        
        export type _type = 
            | readonly ['derived', _type.derived]
            | readonly ['selected', _type.selected]
        
    }
    
    export type reference = {
        readonly 'definition': reference.definition
        readonly 'type': reference._type
    }
    
    export namespace state_group {
        
        export type definition = Type_Node_.state_group
        
        export namespace states {
            
            export namespace D {
                
                export type constraints = Option_Constraints_
                
                export type resolver = Node_Resolver_
                
            }
            
            export type D = {
                readonly 'constraints': D.constraints
                readonly 'resolver': D.resolver
            }
            
        }
        
        export type states = _pi.Dictionary<states.D>
        
    }
    
    export type state_group = {
        readonly 'definition': state_group.definition
        readonly 'states': state_group.states
    }
    
    export type text = null
    
}

export type Node_Resolver_ = 
    | readonly ['boolean', Node_Resolver_._boolean]
    | readonly ['component', Node_Resolver_.component]
    | readonly ['dictionary', Node_Resolver_.dictionary]
    | readonly ['group', Node_Resolver_.group]
    | readonly ['list', Node_Resolver_.list]
    | readonly ['nothing', Node_Resolver_.nothing]
    | readonly ['number', Node_Resolver_._number]
    | readonly ['optional', Node_Resolver_.optional]
    | readonly ['reference', Node_Resolver_.reference]
    | readonly ['state group', Node_Resolver_.state_group]
    | readonly ['text', Node_Resolver_.text]

export namespace Guaranteed_Value_Selection_ {
    
    export namespace start {
        
        export namespace sibling {
            
            export type entry = Node_Resolver_Group_.D
            
            export type key = string
            
        }
        
        export type sibling = {
            readonly 'entry': sibling.entry
            readonly 'key': sibling.key
        }
        
        export namespace parent_sibling {
            
            export type entry = Node_Resolver_Group_.D
            
            export type key = string
            
        }
        
        export type parent_sibling = {
            readonly 'entry': parent_sibling.entry
            readonly 'key': parent_sibling.key
        }
        
        export namespace option_constraint {
            
            export type entry = Option_Constraints_.D
            
            export type key = string
            
        }
        
        export type option_constraint = {
            readonly 'entry': option_constraint.entry
            readonly 'key': option_constraint.key
        }
        
        export type list_cursor = null
        
        export type linked_entry = null
        
        export namespace constraint {
            
            export namespace component {
                
                export namespace property {
                    
                    export type entry = Node_Resolver_Group_.D
                    
                    export type key = string
                    
                }
                
                export type property = {
                    readonly 'entry': property.entry
                    readonly 'key': property.key
                }
                
                export namespace constraint {
                    
                    export type entry = Property_Constraints_.D
                    
                    export type key = string
                    
                }
                
                export type constraint = {
                    readonly 'entry': constraint.entry
                    readonly 'key': constraint.key
                }
                
            }
            
            export type component = {
                readonly 'property': component.property
                readonly 'constraint': component.constraint
            }
            
            export namespace reference {
                
                export namespace property {
                    
                    export type entry = Node_Resolver_Group_.D
                    
                    export type key = string
                    
                }
                
                export type property = {
                    readonly 'entry': property.entry
                    readonly 'key': property.key
                }
                
                export namespace constraint {
                    
                    export type entry = Property_Constraints_.D
                    
                    export type key = string
                    
                }
                
                export type constraint = {
                    readonly 'entry': constraint.entry
                    readonly 'key': constraint.key
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
            
            export type entry = Signature_Parameters_.values.D
            
            export type key = string
            
        }
        
        export type parameter = {
            readonly 'entry': parameter.entry
            readonly 'key': parameter.key
        }
        
        export namespace result {
            
            export namespace list {
                
                export namespace property {
                    
                    export type entry = Node_Resolver_Group_.D
                    
                    export type key = string
                    
                }
                
                export type property = {
                    readonly 'entry': property.entry
                    readonly 'key': property.key
                }
                
                export type list_result = Node_Resolver_.list.result.O
                
            }
            
            export type list = {
                readonly 'property': list.property
                readonly 'list result': list.list_result
            }
            
            export namespace state_group {
                
                export namespace property {
                    
                    export type entry = Node_Resolver_Group_.D
                    
                    export type key = string
                    
                }
                
                export type property = {
                    readonly 'entry': property.entry
                    readonly 'key': property.key
                }
                
                export type state_group = Node_Resolver_.state_group
                
                export type result = Type_Reference_
                
            }
            
            export type state_group = {
                readonly 'property': state_group.property
                readonly 'state group': state_group.state_group
                readonly 'result': state_group.result
            }
            
            export namespace optional_value {
                
                export namespace property {
                    
                    export type entry = Node_Resolver_Group_.D
                    
                    export type key = string
                    
                }
                
                export type property = {
                    readonly 'entry': property.entry
                    readonly 'key': property.key
                }
                
                export type optional_value = Node_Resolver_.optional
                
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
            | readonly ['state group', result.state_group]
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
    
    export type resulting_node = Type_Node_
    
}

export type Guaranteed_Value_Selection_ = {
    readonly 'start': Guaranteed_Value_Selection_.start
    readonly 'tail': Guaranteed_Value_Selection_.tail
    readonly 'resulting node': Guaranteed_Value_Selection_.resulting_node
}

export namespace Possible_Value_Selection_ {
    
    export namespace parameter {
        
        export type entry = Signature_Parameters_.values.D
        
        export type key = string
        
    }
    
    export type parameter = {
        readonly 'entry': parameter.entry
        readonly 'key': parameter.key
    }
    
    export namespace result {
        
        export namespace state_group {
            
            export namespace property {
                
                export type entry = Node_Resolver_Group_.D
                
                export type key = string
                
            }
            
            export type property = {
                readonly 'entry': property.entry
                readonly 'key': property.key
            }
            
            export type state_group = Node_Resolver_.state_group
            
            export type result = Type_Reference_
            
        }
        
        export type state_group = {
            readonly 'property': state_group.property
            readonly 'state group': state_group.state_group
            readonly 'result': state_group.result
        }
        
        export namespace optional_value {
            
            export namespace property {
                
                export type entry = Node_Resolver_Group_.D
                
                export type key = string
                
            }
            
            export type property = {
                readonly 'entry': property.entry
                readonly 'key': property.key
            }
            
            export type optional_value = Node_Resolver_.optional
            
            export type result = Type_Reference_
            
        }
        
        export type optional_value = {
            readonly 'property': optional_value.property
            readonly 'optional value': optional_value.optional_value
            readonly 'result': optional_value.result
        }
        
    }
    
    export type result = 
        | readonly ['state group', result.state_group]
        | readonly ['optional value', result.optional_value]
    
}

export type Possible_Value_Selection_ = 
    | readonly ['parameter', Possible_Value_Selection_.parameter]
    | readonly ['result', Possible_Value_Selection_.result]

export { 
    Text_Type_ as Text_Type, 
    Number_Type_ as Number_Type, 
    Globals_ as Globals, 
    Type_Parameters_ as Type_Parameters, 
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
    Type_Node_ as Type_Node, 
    Type_Reference_ as Type_Reference, 
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
