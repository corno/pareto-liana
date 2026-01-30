
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export namespace Text_Type_ {
    
    export namespace type_ {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export type multi_line = null
            
            export type single_line = null
            
        }
        
        export type l_state = 
            | readonly ['multi line', l_state.multi_line]
            | readonly ['single line', l_state.single_line]
        
    }
    
    export type type_ = {
        readonly 'l location': type_.l_location
        readonly 'l state': type_.l_state
    }
    
}

export type Text_Type_ = {
    readonly 'type': Text_Type_.type_
}

export namespace Number_Type_ {
    
    export namespace precision {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
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
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export type integer = null
                        
                        export type natural = null
                        
                        export type positive_natural = null
                        
                    }
                    
                    export type l_state = 
                        | readonly ['integer', l_state.integer]
                        | readonly ['natural', l_state.natural]
                        | readonly ['positive natural', l_state.positive_natural]
                    
                }
                
                export type type_ = {
                    readonly 'l location': type_.l_location
                    readonly 'l state': type_.l_state
                }
                
            }
            
            export type exact = {
                readonly 'decimal separator offset': exact.decimal_separator_offset
                readonly 'type': exact.type_
            }
            
        }
        
        export type l_state = 
            | readonly ['approximation', l_state.approximation]
            | readonly ['exact', l_state.exact]
        
    }
    
    export type precision = {
        readonly 'l location': precision.l_location
        readonly 'l state': precision.l_state
    }
    
}

export type Number_Type_ = {
    readonly 'precision': Number_Type_.precision
}

export namespace Globals_ {
    
    export namespace complexity {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export type constrained = null
            
            export type unconstrained = null
            
        }
        
        export type l_state = 
            | readonly ['constrained', l_state.constrained]
            | readonly ['unconstrained', l_state.unconstrained]
        
    }
    
    export type complexity = {
        readonly 'l location': complexity.l_location
        readonly 'l state': complexity.l_state
    }
    
    export namespace text_types {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export type l_entry = Text_Type_
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
        
    }
    
    export type text_types = {
        readonly 'l location': text_types.l_location
        readonly 'l dictionary': text_types.l_dictionary
    }
    
    export namespace number_types {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export type l_entry = Number_Type_
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
        
    }
    
    export type number_types = {
        readonly 'l location': number_types.l_location
        readonly 'l dictionary': number_types.l_dictionary
    }
    
}

export type Globals_ = {
    readonly 'complexity': Globals_.complexity
    readonly 'text types': Globals_.text_types
    readonly 'number types': Globals_.number_types
}

export namespace Module_ {
    
    export type value = Value_
    
}

export type Module_ = {
    readonly 'value': Module_.value
}

export namespace Modules_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Module_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Modules_ = {
    readonly 'l location': Modules_.l_location
    readonly 'l dictionary': Modules_.l_dictionary
}

export namespace Resolve_Logic_ {
    
    export namespace signatures {
        
        export type signatures = Signatures_
        
    }
    
    export type signatures = {
        readonly 'signatures': signatures.signatures
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
    
    export type modules = Modules_
    
    export namespace complexity {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export type constrained = Resolve_Logic_
            
            export type unconstrained = null
            
        }
        
        export type l_state = 
            | readonly ['constrained', l_state.constrained]
            | readonly ['unconstrained', l_state.unconstrained]
        
    }
    
    export type complexity = {
        readonly 'l location': complexity.l_location
        readonly 'l state': complexity.l_state
    }
    
}

export type Schema_ = {
    readonly 'imports': Schema_.imports
    readonly 'globals': Schema_.globals
    readonly 'modules': Schema_.modules
    readonly 'complexity': Schema_.complexity
}

export namespace Schema_Tree_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type schema = Schema_
        
        export type set_ = Schemas_
        
    }
    
    export type l_state = 
        | readonly ['schema', l_state.schema]
        | readonly ['set', l_state.set_]
    
}

export type Schema_Tree_ = {
    readonly 'l location': Schema_Tree_.l_location
    readonly 'l state': Schema_Tree_.l_state
}

export namespace Type_Specification_ {
    
    export type schema = Schema_Tree_
    
    export namespace schema_path {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_list {
            
            export namespace L {
                
                export type l_location = i__location.Relative_Location
                
                export type l_item = string
                
            }
            
            export type L = {
                readonly 'l location': L.l_location
                readonly 'l item': L.l_item
            }
            
        }
        
        export type l_list = _pi.List<l_list.L>
        
    }
    
    export type schema_path = {
        readonly 'l location': schema_path.l_location
        readonly 'l list': schema_path.l_list
    }
    
    export type type_ = string
    
}

export type Type_Specification_ = {
    readonly 'schema': Type_Specification_.schema
    readonly 'schema path': Type_Specification_.schema_path
    readonly 'type': Type_Specification_.type_
}

export namespace Schemas_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Schema_Tree_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Schemas_ = {
    readonly 'l location': Schemas_.l_location
    readonly 'l dictionary': Schemas_.l_dictionary
}

export namespace Imports_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export namespace schema_set_child {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type schema_set_child = {
                    readonly 'l location': schema_set_child.l_location
                    readonly 'l reference': schema_set_child.l_reference
                }
                
                export type schema = null
                
            }
            
            export type l_entry = {
                readonly 'schema set child': l_entry.schema_set_child
                readonly 'schema': l_entry.schema
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Imports_ = {
    readonly 'l location': Imports_.l_location
    readonly 'l dictionary': Imports_.l_dictionary
}

export namespace Presence_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type optional = null
        
        export type required = null
        
    }
    
    export type l_state = 
        | readonly ['optional', l_state.optional]
        | readonly ['required', l_state.required]
    
}

export type Presence_ = {
    readonly 'l location': Presence_.l_location
    readonly 'l state': Presence_.l_state
}

export namespace Dictionary_ {
    
    export type value = Value_
    
}

export type Dictionary_ = {
    readonly 'value': Dictionary_.value
}

export namespace Signatures_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Signature_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Signatures_ = {
    readonly 'l location': Signatures_.l_location
    readonly 'l dictionary': Signatures_.l_dictionary
}

export namespace Resolvers_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export type signature = null
                
                export type type_resolver = Value_Resolver_
                
            }
            
            export type l_entry = {
                readonly 'signature': l_entry.signature
                readonly 'type resolver': l_entry.type_resolver
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Resolvers_ = {
    readonly 'l location': Resolvers_.l_location
    readonly 'l dictionary': Resolvers_.l_dictionary
}

export namespace Group_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export namespace description {
                    
                    export type O = string
                    
                }
                
                export type description = _pi.Optional_Value<description.O>
                
                export type value = Value_
                
            }
            
            export type l_entry = {
                readonly 'description': l_entry.description
                readonly 'value': l_entry.value
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Group_ = {
    readonly 'l location': Group_.l_location
    readonly 'l dictionary': Group_.l_dictionary
}

export namespace Value_Resolver_Group_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export type definition = null
                
                export type resolver = Value_Resolver_
                
            }
            
            export type l_entry = {
                readonly 'definition': l_entry.definition
                readonly 'resolver': l_entry.resolver
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Value_Resolver_Group_ = {
    readonly 'l location': Value_Resolver_Group_.l_location
    readonly 'l dictionary': Value_Resolver_Group_.l_dictionary
}

export namespace Value_Constraints_ {
    
    export namespace O {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export type l_entry = Value_Reference_
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
        
    }
    
    export type O = {
        readonly 'l location': O.l_location
        readonly 'l dictionary': O.l_dictionary
    }
    
}

export type Value_Constraints_ = _pi.Optional_Value<Value_Constraints_.O>

export namespace Module_Reference_ {
    
    export namespace location {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export namespace internal {
                
                export type l_location = i__location.Relative_Location
                
                export type l_reference = string
                
            }
            
            export type internal = {
                readonly 'l location': internal.l_location
                readonly 'l reference': internal.l_reference
            }
            
            export namespace external {
                
                export namespace import_ {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type import_ = {
                    readonly 'l location': import_.l_location
                    readonly 'l reference': import_.l_reference
                }
                
                export namespace type_ {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type type_ = {
                    readonly 'l location': type_.l_location
                    readonly 'l reference': type_.l_reference
                }
                
            }
            
            export type external = {
                readonly 'import': external.import_
                readonly 'type': external.type_
            }
            
        }
        
        export type l_state = 
            | readonly ['internal', l_state.internal]
            | readonly ['external', l_state.external]
        
    }
    
    export type location = {
        readonly 'l location': location.l_location
        readonly 'l state': location.l_state
    }
    
    export type resulting_type = null
    
}

export type Module_Reference_ = {
    readonly 'location': Module_Reference_.location
    readonly 'resulting type': Module_Reference_.resulting_type
}

export namespace Value_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type boolean_ = null
        
        export namespace component {
            
            export namespace type_ {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export namespace external {
                        
                        export namespace import_ {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type import_ = {
                            readonly 'l location': import_.l_location
                            readonly 'l reference': import_.l_reference
                        }
                        
                        export namespace type_ {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type type_ = {
                            readonly 'l location': type_.l_location
                            readonly 'l reference': type_.l_reference
                        }
                        
                    }
                    
                    export type external = {
                        readonly 'import': external.import_
                        readonly 'type': external.type_
                    }
                    
                    export namespace internal {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_reference = string
                        
                    }
                    
                    export type internal = {
                        readonly 'l location': internal.l_location
                        readonly 'l reference': internal.l_reference
                    }
                    
                    export namespace internal_cyclic {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_reference = string
                        
                    }
                    
                    export type internal_cyclic = {
                        readonly 'l location': internal_cyclic.l_location
                        readonly 'l reference': internal_cyclic.l_reference
                    }
                    
                }
                
                export type l_state = 
                    | readonly ['external', l_state.external]
                    | readonly ['internal', l_state.internal]
                    | readonly ['internal cyclic', l_state.internal_cyclic]
                
            }
            
            export type type_ = {
                readonly 'l location': type_.l_location
                readonly 'l state': type_.l_state
            }
            
            export type constraints = Value_Constraints_
            
        }
        
        export type component = {
            readonly 'type': component.type_
            readonly 'constraints': component.constraints
        }
        
        export type dictionary = Dictionary_
        
        export type group = Group_
        
        export namespace list {
            
            export type value = Value_
            
            export namespace result {
                
                export type O = Module_Reference_
                
            }
            
            export type result = _pi.Optional_Value<result.O>
            
        }
        
        export type list = {
            readonly 'value': list.value
            readonly 'result': list.result
        }
        
        export type nothing = null
        
        export namespace number_ {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export namespace global {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type global = {
                    readonly 'l location': global.l_location
                    readonly 'l reference': global.l_reference
                }
                
                export type local = Number_Type_
                
            }
            
            export type l_state = 
                | readonly ['global', l_state.global]
                | readonly ['local', l_state.local]
            
        }
        
        export type number_ = {
            readonly 'l location': number_.l_location
            readonly 'l state': number_.l_state
        }
        
        export type optional = Value_
        
        export namespace reference {
            
            export type referent = Value_Reference_
            
            export namespace type_ {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export type derived = null
                    
                    export namespace selected {
                        
                        export type dictionary = null
                        
                        export namespace dependency {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_state {
                                
                                export type acyclic = null
                                
                                export type cyclic = null
                                
                                export type stack = null
                                
                            }
                            
                            export type l_state = 
                                | readonly ['acyclic', l_state.acyclic]
                                | readonly ['cyclic', l_state.cyclic]
                                | readonly ['stack', l_state.stack]
                            
                        }
                        
                        export type dependency = {
                            readonly 'l location': dependency.l_location
                            readonly 'l state': dependency.l_state
                        }
                        
                    }
                    
                    export type selected = {
                        readonly 'dictionary': selected.dictionary
                        readonly 'dependency': selected.dependency
                    }
                    
                }
                
                export type l_state = 
                    | readonly ['derived', l_state.derived]
                    | readonly ['selected', l_state.selected]
                
            }
            
            export type type_ = {
                readonly 'l location': type_.l_location
                readonly 'l state': type_.l_state
            }
            
        }
        
        export type reference = {
            readonly 'referent': reference.referent
            readonly 'type': reference.type_
        }
        
        export namespace state {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_entry {
                        
                        export namespace description {
                            
                            export type O = string
                            
                        }
                        
                        export type description = _pi.Optional_Value<description.O>
                        
                        export type value = Value_
                        
                    }
                    
                    export type l_entry = {
                        readonly 'description': l_entry.description
                        readonly 'value': l_entry.value
                    }
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
            
        }
        
        export type state = {
            readonly 'l location': state.l_location
            readonly 'l dictionary': state.l_dictionary
        }
        
        export namespace text {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export namespace global {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type global = {
                    readonly 'l location': global.l_location
                    readonly 'l reference': global.l_reference
                }
                
                export type local = Text_Type_
                
            }
            
            export type l_state = 
                | readonly ['global', l_state.global]
                | readonly ['local', l_state.local]
            
        }
        
        export type text = {
            readonly 'l location': text.l_location
            readonly 'l state': text.l_state
        }
        
    }
    
    export type l_state = 
        | readonly ['boolean', l_state.boolean_]
        | readonly ['component', l_state.component]
        | readonly ['dictionary', l_state.dictionary]
        | readonly ['group', l_state.group]
        | readonly ['list', l_state.list]
        | readonly ['nothing', l_state.nothing]
        | readonly ['number', l_state.number_]
        | readonly ['optional', l_state.optional]
        | readonly ['reference', l_state.reference]
        | readonly ['state', l_state.state]
        | readonly ['text', l_state.text]
    
}

export type Value_ = {
    readonly 'l location': Value_.l_location
    readonly 'l state': Value_.l_state
}

export namespace Option_Constraints_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export namespace state {
                        
                        export type selection = Guaranteed_Value_Selection_
                        
                        export type selected_state = null
                        
                        export namespace option {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type option = {
                            readonly 'l location': option.l_location
                            readonly 'l reference': option.l_reference
                        }
                        
                    }
                    
                    export type state = {
                        readonly 'selection': state.selection
                        readonly 'selected state': state.selected_state
                        readonly 'option': state.option
                    }
                    
                    export type assert_is_set = Possible_Value_Selection_
                    
                }
                
                export type l_state = 
                    | readonly ['state', l_state.state]
                    | readonly ['assert is set', l_state.assert_is_set]
                
            }
            
            export type l_entry = {
                readonly 'l location': l_entry.l_location
                readonly 'l state': l_entry.l_state
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Option_Constraints_ = {
    readonly 'l location': Option_Constraints_.l_location
    readonly 'l dictionary': Option_Constraints_.l_dictionary
}

export namespace Value_Constraint_Resolvers_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Value_Constraint_Resolver_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Value_Constraint_Resolvers_ = {
    readonly 'l location': Value_Constraint_Resolvers_.l_location
    readonly 'l dictionary': Value_Constraint_Resolvers_.l_dictionary
}

export namespace Signature_Parameters_ {
    
    export namespace modules {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_entry {
                    
                    export type module_ = Module_Reference_
                    
                    export type presence = Presence_
                    
                }
                
                export type l_entry = {
                    readonly 'module': l_entry.module_
                    readonly 'presence': l_entry.presence
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
        
    }
    
    export type modules = {
        readonly 'l location': modules.l_location
        readonly 'l dictionary': modules.l_dictionary
    }
    
    export namespace lookups {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_entry {
                    
                    export type referent = Module_Reference_
                    
                    export type dictionary = null
                    
                    export namespace type_ {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_state {
                            
                            export type cyclic = null
                            
                            export type acyclic = null
                            
                            export type stack = null
                            
                        }
                        
                        export type l_state = 
                            | readonly ['cyclic', l_state.cyclic]
                            | readonly ['acyclic', l_state.acyclic]
                            | readonly ['stack', l_state.stack]
                        
                    }
                    
                    export type type_ = {
                        readonly 'l location': type_.l_location
                        readonly 'l state': type_.l_state
                    }
                    
                    export type presence = Presence_
                    
                }
                
                export type l_entry = {
                    readonly 'referent': l_entry.referent
                    readonly 'dictionary': l_entry.dictionary
                    readonly 'type': l_entry.type_
                    readonly 'presence': l_entry.presence
                }
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
        
    }
    
    export type lookups = {
        readonly 'l location': lookups.l_location
        readonly 'l dictionary': lookups.l_dictionary
    }
    
}

export type Signature_Parameters_ = {
    readonly 'modules': Signature_Parameters_.modules
    readonly 'lookups': Signature_Parameters_.lookups
}

export namespace Optional_Value_Initialization_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type not_set = null
        
        export type set_ = Guaranteed_Value_Selection_
        
        export type selection = Possible_Value_Selection_
        
    }
    
    export type l_state = 
        | readonly ['not set', l_state.not_set]
        | readonly ['set', l_state.set_]
        | readonly ['selection', l_state.selection]
    
}

export type Optional_Value_Initialization_ = {
    readonly 'l location': Optional_Value_Initialization_.l_location
    readonly 'l state': Optional_Value_Initialization_.l_state
}

export namespace Lookup_Selection_ {
    
    export namespace type_ {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export namespace dictionary {
                
                export type selection = Guaranteed_Value_Selection_
                
                export type selected_dictionary = null
                
            }
            
            export type dictionary = {
                readonly 'selection': dictionary.selection
                readonly 'selected dictionary': dictionary.selected_dictionary
            }
            
            export namespace parameter {
                
                export type l_location = i__location.Relative_Location
                
                export type l_reference = string
                
            }
            
            export type parameter = {
                readonly 'l location': parameter.l_location
                readonly 'l reference': parameter.l_reference
            }
            
            export type not_circular_dependent_siblings = null
            
            export type possibly_circular_dependent_siblings = null
            
        }
        
        export type l_state = 
            | readonly ['dictionary', l_state.dictionary]
            | readonly ['parameter', l_state.parameter]
            | readonly ['not circular dependent siblings', l_state.not_circular_dependent_siblings]
            | readonly ['possibly circular dependent siblings', l_state.possibly_circular_dependent_siblings]
        
    }
    
    export type type_ = {
        readonly 'l location': type_.l_location
        readonly 'l state': type_.l_state
    }
    
    export type resulting_dictionary = null
    
}

export type Lookup_Selection_ = {
    readonly 'type': Lookup_Selection_.type_
    readonly 'resulting dictionary': Lookup_Selection_.resulting_dictionary
}

export type Value_Resolver_List_Result_ = Module_Reference_

export namespace Value_Resolver_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export type boolean_ = null
        
        export namespace component {
            
            export type definition = null
            
            export namespace location {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export namespace external {
                        
                        export namespace import_ {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type import_ = {
                            readonly 'l location': import_.l_location
                            readonly 'l reference': import_.l_reference
                        }
                        
                        export namespace type_ {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type type_ = {
                            readonly 'l location': type_.l_location
                            readonly 'l reference': type_.l_reference
                        }
                        
                    }
                    
                    export type external = {
                        readonly 'import': external.import_
                        readonly 'type': external.type_
                    }
                    
                    export namespace internal {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_reference = string
                        
                    }
                    
                    export type internal = {
                        readonly 'l location': internal.l_location
                        readonly 'l reference': internal.l_reference
                    }
                    
                }
                
                export type l_state = 
                    | readonly ['external', l_state.external]
                    | readonly ['internal', l_state.internal]
                
            }
            
            export type location = {
                readonly 'l location': location.l_location
                readonly 'l state': location.l_state
            }
            
            export type signature = null
            
            export namespace arguments_ {
                
                export namespace O {
                    
                    export namespace modules {
                        
                        export namespace O {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export namespace l_entry {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
                                            export type optional = Optional_Value_Initialization_
                                            
                                            export type required = Guaranteed_Value_Selection_
                                            
                                            export namespace parameter {
                                                
                                                export type l_location = i__location.Relative_Location
                                                
                                                export type l_reference = string
                                                
                                            }
                                            
                                            export type parameter = {
                                                readonly 'l location': parameter.l_location
                                                readonly 'l reference': parameter.l_reference
                                            }
                                            
                                        }
                                        
                                        export type l_state = 
                                            | readonly ['optional', l_state.optional]
                                            | readonly ['required', l_state.required]
                                            | readonly ['parameter', l_state.parameter]
                                        
                                    }
                                    
                                    export type l_entry = {
                                        readonly 'l location': l_entry.l_location
                                        readonly 'l state': l_entry.l_state
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'l location': D.l_location
                                    readonly 'l entry': D.l_entry
                                }
                                
                            }
                            
                            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                            
                        }
                        
                        export type O = {
                            readonly 'l location': O.l_location
                            readonly 'l dictionary': O.l_dictionary
                        }
                        
                    }
                    
                    export type modules = _pi.Optional_Value<modules.O>
                    
                    export namespace lookups {
                        
                        export namespace O {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export namespace l_dictionary {
                                
                                export namespace D {
                                    
                                    export type l_location = i__location.Relative_Location
                                    
                                    export namespace l_entry {
                                        
                                        export type l_location = i__location.Relative_Location
                                        
                                        export namespace l_state {
                                            
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
                                        
                                        export type l_state = 
                                            | readonly ['empty stack', l_state.empty_stack]
                                            | readonly ['not set', l_state.not_set]
                                            | readonly ['selection', l_state.selection]
                                            | readonly ['stack', l_state.stack]
                                        
                                    }
                                    
                                    export type l_entry = {
                                        readonly 'l location': l_entry.l_location
                                        readonly 'l state': l_entry.l_state
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'l location': D.l_location
                                    readonly 'l entry': D.l_entry
                                }
                                
                            }
                            
                            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                            
                        }
                        
                        export type O = {
                            readonly 'l location': O.l_location
                            readonly 'l dictionary': O.l_dictionary
                        }
                        
                    }
                    
                    export type lookups = _pi.Optional_Value<lookups.O>
                    
                }
                
                export type O = {
                    readonly 'modules': O.modules
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
            
            export type definition = null
            
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
            
            export type definition = null
            
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
            
            export type definition = null
            
            export namespace type_ {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export namespace derived {
                        
                        export type value = Guaranteed_Value_Selection_
                        
                    }
                    
                    export type derived = {
                        readonly 'value': derived.value
                    }
                    
                    export namespace selected {
                        
                        export type definition = null
                        
                        export type lookup = Lookup_Selection_
                        
                        export type constraints = Value_Constraint_Resolvers_
                        
                    }
                    
                    export type selected = {
                        readonly 'definition': selected.definition
                        readonly 'lookup': selected.lookup
                        readonly 'constraints': selected.constraints
                    }
                    
                }
                
                export type l_state = 
                    | readonly ['derived', l_state.derived]
                    | readonly ['selected', l_state.selected]
                
            }
            
            export type type_ = {
                readonly 'l location': type_.l_location
                readonly 'l state': type_.l_state
            }
            
        }
        
        export type reference = {
            readonly 'definition': reference.definition
            readonly 'type': reference.type_
        }
        
        export namespace state {
            
            export type definition = null
            
            export namespace states {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_dictionary {
                    
                    export namespace D {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export namespace l_entry {
                            
                            export type constraints = Option_Constraints_
                            
                            export type resolver = Value_Resolver_
                            
                        }
                        
                        export type l_entry = {
                            readonly 'constraints': l_entry.constraints
                            readonly 'resolver': l_entry.resolver
                        }
                        
                    }
                    
                    export type D = {
                        readonly 'l location': D.l_location
                        readonly 'l entry': D.l_entry
                    }
                    
                }
                
                export type l_dictionary = _pi.Dictionary<l_dictionary.D>
                
            }
            
            export type states = {
                readonly 'l location': states.l_location
                readonly 'l dictionary': states.l_dictionary
            }
            
        }
        
        export type state = {
            readonly 'definition': state.definition
            readonly 'states': state.states
        }
        
        export type text = null
        
    }
    
    export type l_state = 
        | readonly ['boolean', l_state.boolean_]
        | readonly ['component', l_state.component]
        | readonly ['dictionary', l_state.dictionary]
        | readonly ['group', l_state.group]
        | readonly ['list', l_state.list]
        | readonly ['nothing', l_state.nothing]
        | readonly ['number', l_state.number_]
        | readonly ['optional', l_state.optional]
        | readonly ['reference', l_state.reference]
        | readonly ['state', l_state.state]
        | readonly ['text', l_state.text]
    
}

export type Value_Resolver_ = {
    readonly 'l location': Value_Resolver_.l_location
    readonly 'l state': Value_Resolver_.l_state
}

export namespace Relative_Value_Selection_ {
    
    export namespace path {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_list {
            
            export namespace L {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_item {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export type component = null
                        
                        export namespace group {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type group = {
                            readonly 'l location': group.l_location
                            readonly 'l reference': group.l_reference
                        }
                        
                        export namespace reference {
                            
                            export type definition = null
                            
                        }
                        
                        export type reference = {
                            readonly 'definition': reference.definition
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['component', l_state.component]
                        | readonly ['group', l_state.group]
                        | readonly ['reference', l_state.reference]
                    
                }
                
                export type l_item = {
                    readonly 'l location': l_item.l_location
                    readonly 'l state': l_item.l_state
                }
                
            }
            
            export type L = {
                readonly 'l location': L.l_location
                readonly 'l item': L.l_item
            }
            
        }
        
        export type l_list = _pi.List<l_list.L>
        
    }
    
    export type path = {
        readonly 'l location': path.l_location
        readonly 'l list': path.l_list
    }
    
    export type resulting_node = null
    
}

export type Relative_Value_Selection_ = {
    readonly 'path': Relative_Value_Selection_.path
    readonly 'resulting node': Relative_Value_Selection_.resulting_node
}

export namespace Guaranteed_Value_Selection_ {
    
    export namespace start {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export namespace sibling {
                
                export type l_location = i__location.Relative_Location
                
                export type l_reference = string
                
            }
            
            export type sibling = {
                readonly 'l location': sibling.l_location
                readonly 'l reference': sibling.l_reference
            }
            
            export namespace parent_sibling {
                
                export type l_location = i__location.Relative_Location
                
                export type l_reference = string
                
            }
            
            export type parent_sibling = {
                readonly 'l location': parent_sibling.l_location
                readonly 'l reference': parent_sibling.l_reference
            }
            
            export namespace option_constraint {
                
                export type l_location = i__location.Relative_Location
                
                export type l_reference = string
                
            }
            
            export type option_constraint = {
                readonly 'l location': option_constraint.l_location
                readonly 'l reference': option_constraint.l_reference
            }
            
            export type list_cursor = null
            
            export type linked_entry = null
            
            export namespace constraint {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export namespace component {
                        
                        export namespace property {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type property = {
                            readonly 'l location': property.l_location
                            readonly 'l reference': property.l_reference
                        }
                        
                        export namespace constraint {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type constraint = {
                            readonly 'l location': constraint.l_location
                            readonly 'l reference': constraint.l_reference
                        }
                        
                    }
                    
                    export type component = {
                        readonly 'property': component.property
                        readonly 'constraint': component.constraint
                    }
                    
                    export namespace reference {
                        
                        export namespace property {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type property = {
                            readonly 'l location': property.l_location
                            readonly 'l reference': property.l_reference
                        }
                        
                        export namespace constraint {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type constraint = {
                            readonly 'l location': constraint.l_location
                            readonly 'l reference': constraint.l_reference
                        }
                        
                    }
                    
                    export type reference = {
                        readonly 'property': reference.property
                        readonly 'constraint': reference.constraint
                    }
                    
                }
                
                export type l_state = 
                    | readonly ['component', l_state.component]
                    | readonly ['reference', l_state.reference]
                
            }
            
            export type constraint = {
                readonly 'l location': constraint.l_location
                readonly 'l state': constraint.l_state
            }
            
            export namespace parameter {
                
                export type l_location = i__location.Relative_Location
                
                export type l_reference = string
                
            }
            
            export type parameter = {
                readonly 'l location': parameter.l_location
                readonly 'l reference': parameter.l_reference
            }
            
            export namespace result {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_state {
                    
                    export namespace list {
                        
                        export namespace property {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type property = {
                            readonly 'l location': property.l_location
                            readonly 'l reference': property.l_reference
                        }
                        
                        export type list_result = null
                        
                    }
                    
                    export type list = {
                        readonly 'property': list.property
                        readonly 'list result': list.list_result
                    }
                    
                    export namespace state {
                        
                        export namespace property {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type property = {
                            readonly 'l location': property.l_location
                            readonly 'l reference': property.l_reference
                        }
                        
                        export type state = null
                        
                        export type result = Module_Reference_
                        
                    }
                    
                    export type state = {
                        readonly 'property': state.property
                        readonly 'state': state.state
                        readonly 'result': state.result
                    }
                    
                    export namespace optional_value {
                        
                        export namespace property {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type property = {
                            readonly 'l location': property.l_location
                            readonly 'l reference': property.l_reference
                        }
                        
                        export type optional_value = null
                        
                        export type result = Module_Reference_
                        
                    }
                    
                    export type optional_value = {
                        readonly 'property': optional_value.property
                        readonly 'optional value': optional_value.optional_value
                        readonly 'result': optional_value.result
                    }
                    
                }
                
                export type l_state = 
                    | readonly ['list', l_state.list]
                    | readonly ['state', l_state.state]
                    | readonly ['optional value', l_state.optional_value]
                
            }
            
            export type result = {
                readonly 'l location': result.l_location
                readonly 'l state': result.l_state
            }
            
        }
        
        export type l_state = 
            | readonly ['sibling', l_state.sibling]
            | readonly ['parent sibling', l_state.parent_sibling]
            | readonly ['option constraint', l_state.option_constraint]
            | readonly ['list cursor', l_state.list_cursor]
            | readonly ['linked entry', l_state.linked_entry]
            | readonly ['constraint', l_state.constraint]
            | readonly ['parameter', l_state.parameter]
            | readonly ['result', l_state.result]
        
    }
    
    export type start = {
        readonly 'l location': start.l_location
        readonly 'l state': start.l_state
    }
    
    export type tail = Relative_Value_Selection_
    
    export type resulting_node = null
    
}

export type Guaranteed_Value_Selection_ = {
    readonly 'start': Guaranteed_Value_Selection_.start
    readonly 'tail': Guaranteed_Value_Selection_.tail
    readonly 'resulting node': Guaranteed_Value_Selection_.resulting_node
}

export namespace Benchmark_ {
    
    export type selection = Guaranteed_Value_Selection_
    
    export type resulting_dictionary = null
    
    export type dense = boolean
    
}

export type Benchmark_ = {
    readonly 'selection': Benchmark_.selection
    readonly 'resulting dictionary': Benchmark_.resulting_dictionary
    readonly 'dense': Benchmark_.dense
}

export namespace Value_Path_ {
    
    export namespace tail {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_list {
            
            export namespace L {
                
                export type l_location = i__location.Relative_Location
                
                export namespace l_item {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export namespace l_state {
                        
                        export type dictionary = null
                        
                        export namespace group {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type group = {
                            readonly 'l location': group.l_location
                            readonly 'l reference': group.l_reference
                        }
                        
                        export type list = null
                        
                        export type optional = null
                        
                        export namespace state {
                            
                            export type l_location = i__location.Relative_Location
                            
                            export type l_reference = string
                            
                        }
                        
                        export type state = {
                            readonly 'l location': state.l_location
                            readonly 'l reference': state.l_reference
                        }
                        
                    }
                    
                    export type l_state = 
                        | readonly ['dictionary', l_state.dictionary]
                        | readonly ['group', l_state.group]
                        | readonly ['list', l_state.list]
                        | readonly ['optional', l_state.optional]
                        | readonly ['state', l_state.state]
                    
                }
                
                export type l_item = {
                    readonly 'l location': l_item.l_location
                    readonly 'l state': l_item.l_state
                }
                
            }
            
            export type L = {
                readonly 'l location': L.l_location
                readonly 'l item': L.l_item
            }
            
        }
        
        export type l_list = _pi.List<l_list.L>
        
    }
    
    export type tail = {
        readonly 'l location': tail.l_location
        readonly 'l list': tail.l_list
    }
    
    export type resulting_node = null
    
}

export type Value_Path_ = {
    readonly 'tail': Value_Path_.tail
    readonly 'resulting node': Value_Path_.resulting_node
}

export namespace Value_Reference_ {
    
    export type type_location = Module_Reference_
    
    export type path = Value_Path_
    
}

export type Value_Reference_ = {
    readonly 'type location': Value_Reference_.type_location
    readonly 'path': Value_Reference_.path
}

export namespace Signature_ {
    
    export type module_ = null
    
    export namespace parameters {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export type local = Signature_Parameters_
            
            export namespace same_as {
                
                export type l_location = i__location.Relative_Location
                
                export type l_reference = string
                
            }
            
            export type same_as = {
                readonly 'l location': same_as.l_location
                readonly 'l reference': same_as.l_reference
            }
            
        }
        
        export type l_state = 
            | readonly ['local', l_state.local]
            | readonly ['same as', l_state.same_as]
        
    }
    
    export type parameters = {
        readonly 'l location': parameters.l_location
        readonly 'l state': parameters.l_state
    }
    
    export type resolved_parameters = null
    
}

export type Signature_ = {
    readonly 'module': Signature_.module_
    readonly 'parameters': Signature_.parameters
    readonly 'resolved parameters': Signature_.resolved_parameters
}

export namespace Constraint_ {
    
    export type selection = Relative_Value_Selection_
    
    export namespace type_ {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export namespace state {
                
                export type selected_state = null
                
                export namespace option {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type option = {
                    readonly 'l location': option.l_location
                    readonly 'l reference': option.l_reference
                }
                
            }
            
            export type state = {
                readonly 'selected state': state.selected_state
                readonly 'option': state.option
            }
            
            export namespace optional_value {
                
                export type selected_optional_value = null
                
            }
            
            export type optional_value = {
                readonly 'selected optional value': optional_value.selected_optional_value
            }
            
        }
        
        export type l_state = 
            | readonly ['state', l_state.state]
            | readonly ['optional value', l_state.optional_value]
        
    }
    
    export type type_ = {
        readonly 'l location': type_.l_location
        readonly 'l state': type_.l_state
    }
    
}

export type Constraint_ = {
    readonly 'selection': Constraint_.selection
    readonly 'type': Constraint_.type_
}

export namespace Reference_To_Value_Constraint_Resolver_ {
    
    export type l_location = i__location.Relative_Location
    
    export type l_reference = string
    
}

export type Reference_To_Value_Constraint_Resolver_ = {
    readonly 'l location': Reference_To_Value_Constraint_Resolver_.l_location
    readonly 'l reference': Reference_To_Value_Constraint_Resolver_.l_reference
}

export namespace Value_Constraint_Resolver_ {
    
    export namespace start {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export type property = null
            
            export type sibling = Reference_To_Value_Constraint_Resolver_
            
        }
        
        export type l_state = 
            | readonly ['property', l_state.property]
            | readonly ['sibling', l_state.sibling]
        
    }
    
    export type start = {
        readonly 'l location': start.l_location
        readonly 'l state': start.l_state
    }
    
    export type constraint = Constraint_
    
}

export type Value_Constraint_Resolver_ = {
    readonly 'start': Value_Constraint_Resolver_.start
    readonly 'constraint': Value_Constraint_Resolver_.constraint
}

export namespace Possible_Value_Selection_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export namespace parameter {
            
            export type l_location = i__location.Relative_Location
            
            export type l_reference = string
            
        }
        
        export type parameter = {
            readonly 'l location': parameter.l_location
            readonly 'l reference': parameter.l_reference
        }
        
        export namespace result {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export namespace state {
                    
                    export namespace property {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_reference = string
                        
                    }
                    
                    export type property = {
                        readonly 'l location': property.l_location
                        readonly 'l reference': property.l_reference
                    }
                    
                    export type state = null
                    
                    export type result = Module_Reference_
                    
                }
                
                export type state = {
                    readonly 'property': state.property
                    readonly 'state': state.state
                    readonly 'result': state.result
                }
                
                export namespace optional_value {
                    
                    export namespace property {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_reference = string
                        
                    }
                    
                    export type property = {
                        readonly 'l location': property.l_location
                        readonly 'l reference': property.l_reference
                    }
                    
                    export type optional_value = null
                    
                    export type result = Module_Reference_
                    
                }
                
                export type optional_value = {
                    readonly 'property': optional_value.property
                    readonly 'optional value': optional_value.optional_value
                    readonly 'result': optional_value.result
                }
                
            }
            
            export type l_state = 
                | readonly ['state', l_state.state]
                | readonly ['optional value', l_state.optional_value]
            
        }
        
        export type result = {
            readonly 'l location': result.l_location
            readonly 'l state': result.l_state
        }
        
    }
    
    export type l_state = 
        | readonly ['parameter', l_state.parameter]
        | readonly ['result', l_state.result]
    
}

export type Possible_Value_Selection_ = {
    readonly 'l location': Possible_Value_Selection_.l_location
    readonly 'l state': Possible_Value_Selection_.l_state
}

export { 
    Text_Type_ as Text_Type, 
    Number_Type_ as Number_Type, 
    Globals_ as Globals, 
    Module_ as Module, 
    Modules_ as Modules, 
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
    Module_Reference_ as Module_Reference, 
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
