
import * as _pi from "pareto-core-interface"

import * as i__location from "../../../core/location"

export namespace Text_Type_ {
    
    export namespace _type {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export type multi_line = null
            
            export type single_line = null
            
        }
        
        export type state_group = 
            | readonly ['multi line', state_group.multi_line]
            | readonly ['single line', state_group.single_line]
        
    }
    
    export type _type = {
        readonly 'location': _type.location
        readonly 'state group': _type.state_group
    }
    
}

export type Text_Type_ = {
    readonly 'type': Text_Type_._type
}

export namespace Number_Type_ {
    
    export namespace precision {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
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
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export type integer = null
                        
                        export type natural = null
                        
                        export type positive_natural = null
                        
                    }
                    
                    export type state_group = 
                        | readonly ['integer', state_group.integer]
                        | readonly ['natural', state_group.natural]
                        | readonly ['positive natural', state_group.positive_natural]
                    
                }
                
                export type _type = {
                    readonly 'location': _type.location
                    readonly 'state group': _type.state_group
                }
                
            }
            
            export type exact = {
                readonly 'decimal separator offset': exact.decimal_separator_offset
                readonly 'type': exact._type
            }
            
        }
        
        export type state_group = 
            | readonly ['approximation', state_group.approximation]
            | readonly ['exact', state_group.exact]
        
    }
    
    export type precision = {
        readonly 'location': precision.location
        readonly 'state group': precision.state_group
    }
    
}

export type Number_Type_ = {
    readonly 'precision': Number_Type_.precision
}

export namespace Globals_ {
    
    export namespace complexity {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export type constrained = null
            
            export type unconstrained = null
            
        }
        
        export type state_group = 
            | readonly ['constrained', state_group.constrained]
            | readonly ['unconstrained', state_group.unconstrained]
        
    }
    
    export type complexity = {
        readonly 'location': complexity.location
        readonly 'state group': complexity.state_group
    }
    
    export namespace text_types {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export type entry = Text_Type_
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type text_types = {
        readonly 'location': text_types.location
        readonly 'dictionary': text_types.dictionary
    }
    
    export namespace number_types {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export type entry = Number_Type_
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type number_types = {
        readonly 'location': number_types.location
        readonly 'dictionary': number_types.dictionary
    }
    
}

export type Globals_ = {
    readonly 'complexity': Globals_.complexity
    readonly 'text types': Globals_.text_types
    readonly 'number types': Globals_.number_types
}

export namespace Type_Parameters_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export type entry = null
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Type_Parameters_ = {
    readonly 'location': Type_Parameters_.location
    readonly 'dictionary': Type_Parameters_.dictionary
}

export namespace Type_ {
    
    export type type_parameters = Type_Parameters_
    
    export type node = Type_Node_
    
}

export type Type_ = {
    readonly 'type parameters': Type_.type_parameters
    readonly 'node': Type_.node
}

export namespace Types_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export type entry = Type_
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Types_ = {
    readonly 'location': Types_.location
    readonly 'dictionary': Types_.dictionary
}

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
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export type constrained = Resolve_Logic_
            
            export type unconstrained = null
            
        }
        
        export type state_group = 
            | readonly ['constrained', state_group.constrained]
            | readonly ['unconstrained', state_group.unconstrained]
        
    }
    
    export type complexity = {
        readonly 'location': complexity.location
        readonly 'state group': complexity.state_group
    }
    
}

export type Schema_ = {
    readonly 'imports': Schema_.imports
    readonly 'globals': Schema_.globals
    readonly 'types': Schema_.types
    readonly 'complexity': Schema_.complexity
}

export namespace Schema_Tree_ {
    
    export type location = i__location.Location
    
    export namespace state_group {
        
        export type schema = Schema_
        
        export type _set = Schemas_
        
    }
    
    export type state_group = 
        | readonly ['schema', state_group.schema]
        | readonly ['set', state_group._set]
    
}

export type Schema_Tree_ = {
    readonly 'location': Schema_Tree_.location
    readonly 'state group': Schema_Tree_.state_group
}

export namespace Type_Specification_ {
    
    export type schema = Schema_Tree_
    
    export namespace schema_path {
        
        export type location = i__location.Location
        
        export namespace list {
            
            export namespace L {
                
                export type location = i__location.Location
                
                export type element = string
                
            }
            
            export type L = {
                readonly 'location': L.location
                readonly 'element': L.element
            }
            
        }
        
        export type list = _pi.List<list.L>
        
    }
    
    export type schema_path = {
        readonly 'location': schema_path.location
        readonly 'list': schema_path.list
    }
    
    export type _type = string
    
}

export type Type_Specification_ = {
    readonly 'schema': Type_Specification_.schema
    readonly 'schema path': Type_Specification_.schema_path
    readonly 'type': Type_Specification_._type
}

export namespace Schemas_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export type entry = Schema_Tree_
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Schemas_ = {
    readonly 'location': Schemas_.location
    readonly 'dictionary': Schemas_.dictionary
}

export namespace Imports_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export namespace schema_set_child {
                    
                    export type location = i__location.Location
                    
                    export type key = string
                    
                }
                
                export type schema_set_child = {
                    readonly 'location': schema_set_child.location
                    readonly 'key': schema_set_child.key
                }
                
                export type schema = null
                
            }
            
            export type entry = {
                readonly 'schema set child': entry.schema_set_child
                readonly 'schema': entry.schema
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Imports_ = {
    readonly 'location': Imports_.location
    readonly 'dictionary': Imports_.dictionary
}

export namespace Presence_ {
    
    export type location = i__location.Location
    
    export namespace state_group {
        
        export type optional = null
        
        export type required = null
        
    }
    
    export type state_group = 
        | readonly ['optional', state_group.optional]
        | readonly ['required', state_group.required]
    
}

export type Presence_ = {
    readonly 'location': Presence_.location
    readonly 'state group': Presence_.state_group
}

export namespace Dictionary_ {
    
    export type node = Type_Node_
    
    export type ordered = boolean
    
}

export type Dictionary_ = {
    readonly 'node': Dictionary_.node
    readonly 'ordered': Dictionary_.ordered
}

export namespace Signatures_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export type entry = Signature_
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Signatures_ = {
    readonly 'location': Signatures_.location
    readonly 'dictionary': Signatures_.dictionary
}

export namespace Resolvers_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export type signature = null
                
                export type type_resolver = Node_Resolver_
                
            }
            
            export type entry = {
                readonly 'signature': entry.signature
                readonly 'type resolver': entry.type_resolver
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Resolvers_ = {
    readonly 'location': Resolvers_.location
    readonly 'dictionary': Resolvers_.dictionary
}

export namespace Group_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export namespace description {
                    
                    export type O = string
                    
                }
                
                export type description = _pi.Optional_Value<description.O>
                
                export type node = Type_Node_
                
            }
            
            export type entry = {
                readonly 'description': entry.description
                readonly 'node': entry.node
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Group_ = {
    readonly 'location': Group_.location
    readonly 'dictionary': Group_.dictionary
}

export namespace Type_Node_ {
    
    export type location = i__location.Location
    
    export namespace state_group {
        
        export type _boolean = null
        
        export namespace component {
            
            export type location = i__location.Location
            
            export namespace state_group {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export type location = i__location.Location
                        
                        export type key = string
                        
                    }
                    
                    export type _import = {
                        readonly 'location': _import.location
                        readonly 'key': _import.key
                    }
                    
                    export namespace _type {
                        
                        export type location = i__location.Location
                        
                        export type key = string
                        
                    }
                    
                    export type _type = {
                        readonly 'location': _type.location
                        readonly 'key': _type.key
                    }
                    
                }
                
                export type external = {
                    readonly 'import': external._import
                    readonly 'type': external._type
                }
                
                export namespace internal {
                    
                    export type location = i__location.Location
                    
                    export type key = string
                    
                }
                
                export type internal = {
                    readonly 'location': internal.location
                    readonly 'key': internal.key
                }
                
                export namespace internal_cyclic {
                    
                    export type location = i__location.Location
                    
                    export type key = string
                    
                }
                
                export type internal_cyclic = {
                    readonly 'location': internal_cyclic.location
                    readonly 'key': internal_cyclic.key
                }
                
            }
            
            export type state_group = 
                | readonly ['external', state_group.external]
                | readonly ['internal', state_group.internal]
                | readonly ['internal cyclic', state_group.internal_cyclic]
            
        }
        
        export type component = {
            readonly 'location': component.location
            readonly 'state group': component.state_group
        }
        
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
            
            export type location = i__location.Location
            
            export namespace state_group {
                
                export namespace global {
                    
                    export type location = i__location.Location
                    
                    export type key = string
                    
                }
                
                export type global = {
                    readonly 'location': global.location
                    readonly 'key': global.key
                }
                
                export type local = Number_Type_
                
            }
            
            export type state_group = 
                | readonly ['global', state_group.global]
                | readonly ['local', state_group.local]
            
        }
        
        export type _number = {
            readonly 'location': _number.location
            readonly 'state group': _number.state_group
        }
        
        export type optional = Type_Node_
        
        export namespace reference {
            
            export type referent = Type_Node_Reference_
            
            export namespace _type {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
                    export type derived = null
                    
                    export namespace selected {
                        
                        export type dictionary = null
                        
                        export namespace dependency {
                            
                            export type location = i__location.Location
                            
                            export namespace state_group {
                                
                                export type acyclic = null
                                
                                export type cyclic = null
                                
                                export type stack = null
                                
                            }
                            
                            export type state_group = 
                                | readonly ['acyclic', state_group.acyclic]
                                | readonly ['cyclic', state_group.cyclic]
                                | readonly ['stack', state_group.stack]
                            
                        }
                        
                        export type dependency = {
                            readonly 'location': dependency.location
                            readonly 'state group': dependency.state_group
                        }
                        
                    }
                    
                    export type selected = {
                        readonly 'dictionary': selected.dictionary
                        readonly 'dependency': selected.dependency
                    }
                    
                }
                
                export type state_group = 
                    | readonly ['derived', state_group.derived]
                    | readonly ['selected', state_group.selected]
                
            }
            
            export type _type = {
                readonly 'location': _type.location
                readonly 'state group': _type.state_group
            }
            
        }
        
        export type reference = {
            readonly 'referent': reference.referent
            readonly 'type': reference._type
        }
        
        export namespace state_group {
            
            export type location = i__location.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Location
                    
                    export namespace entry {
                        
                        export namespace description {
                            
                            export type O = string
                            
                        }
                        
                        export type description = _pi.Optional_Value<description.O>
                        
                        export type node = Type_Node_
                        
                    }
                    
                    export type entry = {
                        readonly 'description': entry.description
                        readonly 'node': entry.node
                    }
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type state_group = {
            readonly 'location': state_group.location
            readonly 'dictionary': state_group.dictionary
        }
        
        export namespace text {
            
            export type location = i__location.Location
            
            export namespace state_group {
                
                export namespace global {
                    
                    export type location = i__location.Location
                    
                    export type key = string
                    
                }
                
                export type global = {
                    readonly 'location': global.location
                    readonly 'key': global.key
                }
                
                export type local = Text_Type_
                
            }
            
            export type state_group = 
                | readonly ['global', state_group.global]
                | readonly ['local', state_group.local]
            
        }
        
        export type text = {
            readonly 'location': text.location
            readonly 'state group': text.state_group
        }
        
    }
    
    export type state_group = 
        | readonly ['boolean', state_group._boolean]
        | readonly ['component', state_group.component]
        | readonly ['dictionary', state_group.dictionary]
        | readonly ['group', state_group.group]
        | readonly ['list', state_group.list]
        | readonly ['nothing', state_group.nothing]
        | readonly ['number', state_group._number]
        | readonly ['optional', state_group.optional]
        | readonly ['reference', state_group.reference]
        | readonly ['state group', state_group.state_group]
        | readonly ['text', state_group.text]
    
}

export type Type_Node_ = {
    readonly 'location': Type_Node_.location
    readonly 'state group': Type_Node_.state_group
}

export namespace Type_Reference_ {
    
    export namespace location {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export namespace internal {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type internal = {
                readonly 'location': internal.location
                readonly 'key': internal.key
            }
            
            export namespace external {
                
                export namespace _import {
                    
                    export type location = i__location.Location
                    
                    export type key = string
                    
                }
                
                export type _import = {
                    readonly 'location': _import.location
                    readonly 'key': _import.key
                }
                
                export namespace _type {
                    
                    export type location = i__location.Location
                    
                    export type key = string
                    
                }
                
                export type _type = {
                    readonly 'location': _type.location
                    readonly 'key': _type.key
                }
                
            }
            
            export type external = {
                readonly 'import': external._import
                readonly 'type': external._type
            }
            
        }
        
        export type state_group = 
            | readonly ['internal', state_group.internal]
            | readonly ['external', state_group.external]
        
    }
    
    export type location = {
        readonly 'location': location.location
        readonly 'state group': location.state_group
    }
    
    export type resulting_node = null
    
}

export type Type_Reference_ = {
    readonly 'location': Type_Reference_.location
    readonly 'resulting node': Type_Reference_.resulting_node
}

export namespace Type_Node_Reference_ {
    
    export type type_location = Type_Reference_
    
    export namespace tail {
        
        export type location = i__location.Location
        
        export namespace list {
            
            export namespace L {
                
                export type location = i__location.Location
                
                export namespace element {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export type dictionary = null
                        
                        export namespace group {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type group = {
                            readonly 'location': group.location
                            readonly 'key': group.key
                        }
                        
                        export type list = null
                        
                        export type optional = null
                        
                        export namespace state_group {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type state_group = {
                            readonly 'location': state_group.location
                            readonly 'key': state_group.key
                        }
                        
                    }
                    
                    export type state_group = 
                        | readonly ['dictionary', state_group.dictionary]
                        | readonly ['group', state_group.group]
                        | readonly ['list', state_group.list]
                        | readonly ['optional', state_group.optional]
                        | readonly ['state group', state_group.state_group]
                    
                }
                
                export type element = {
                    readonly 'location': element.location
                    readonly 'state group': element.state_group
                }
                
            }
            
            export type L = {
                readonly 'location': L.location
                readonly 'element': L.element
            }
            
        }
        
        export type list = _pi.List<list.L>
        
    }
    
    export type tail = {
        readonly 'location': tail.location
        readonly 'list': tail.list
    }
    
    export type resulting_node = null
    
}

export type Type_Node_Reference_ = {
    readonly 'type location': Type_Node_Reference_.type_location
    readonly 'tail': Type_Node_Reference_.tail
    readonly 'resulting node': Type_Node_Reference_.resulting_node
}

export namespace Signature_Parameters_ {
    
    export namespace values {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export type data_type = Type_Reference_
                    
                    export type presence = Presence_
                    
                }
                
                export type entry = {
                    readonly 'data type': entry.data_type
                    readonly 'presence': entry.presence
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type values = {
        readonly 'location': values.location
        readonly 'dictionary': values.dictionary
    }
    
    export namespace lookups {
        
        export type location = i__location.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Location
                
                export namespace entry {
                    
                    export type referent = Type_Reference_
                    
                    export type dictionary = null
                    
                    export namespace _type {
                        
                        export type location = i__location.Location
                        
                        export namespace state_group {
                            
                            export type cyclic = null
                            
                            export type acyclic = null
                            
                            export type stack = null
                            
                        }
                        
                        export type state_group = 
                            | readonly ['cyclic', state_group.cyclic]
                            | readonly ['acyclic', state_group.acyclic]
                            | readonly ['stack', state_group.stack]
                        
                    }
                    
                    export type _type = {
                        readonly 'location': _type.location
                        readonly 'state group': _type.state_group
                    }
                    
                    export type presence = Presence_
                    
                }
                
                export type entry = {
                    readonly 'referent': entry.referent
                    readonly 'dictionary': entry.dictionary
                    readonly 'type': entry._type
                    readonly 'presence': entry.presence
                }
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type lookups = {
        readonly 'location': lookups.location
        readonly 'dictionary': lookups.dictionary
    }
    
}

export type Signature_Parameters_ = {
    readonly 'values': Signature_Parameters_.values
    readonly 'lookups': Signature_Parameters_.lookups
}

export namespace Signature_ {
    
    export type _type = null
    
    export namespace parameters {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export type local = Signature_Parameters_
            
            export namespace same_as {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type same_as = {
                readonly 'location': same_as.location
                readonly 'key': same_as.key
            }
            
        }
        
        export type state_group = 
            | readonly ['local', state_group.local]
            | readonly ['same as', state_group.same_as]
        
    }
    
    export type parameters = {
        readonly 'location': parameters.location
        readonly 'state group': parameters.state_group
    }
    
    export type resolved_parameters = null
    
}

export type Signature_ = {
    readonly 'type': Signature_._type
    readonly 'parameters': Signature_.parameters
    readonly 'resolved parameters': Signature_.resolved_parameters
}

export namespace Relative_Value_Selection_ {
    
    export namespace path {
        
        export type location = i__location.Location
        
        export namespace list {
            
            export namespace L {
                
                export type location = i__location.Location
                
                export namespace element {
                    
                    export type location = i__location.Location
                    
                    export namespace state_group {
                        
                        export type component = null
                        
                        export namespace group {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type group = {
                            readonly 'location': group.location
                            readonly 'key': group.key
                        }
                        
                        export namespace reference {
                            
                            export type definition = null
                            
                        }
                        
                        export type reference = {
                            readonly 'definition': reference.definition
                        }
                        
                    }
                    
                    export type state_group = 
                        | readonly ['component', state_group.component]
                        | readonly ['group', state_group.group]
                        | readonly ['reference', state_group.reference]
                    
                }
                
                export type element = {
                    readonly 'location': element.location
                    readonly 'state group': element.state_group
                }
                
            }
            
            export type L = {
                readonly 'location': L.location
                readonly 'element': L.element
            }
            
        }
        
        export type list = _pi.List<list.L>
        
    }
    
    export type path = {
        readonly 'location': path.location
        readonly 'list': path.list
    }
    
    export type resulting_node = null
    
}

export type Relative_Value_Selection_ = {
    readonly 'path': Relative_Value_Selection_.path
    readonly 'resulting node': Relative_Value_Selection_.resulting_node
}

export namespace Lookup_Selection_ {
    
    export namespace _type {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export namespace dictionary {
                
                export type selection = Guaranteed_Value_Selection_
                
                export type selected_dictionary = null
                
            }
            
            export type dictionary = {
                readonly 'selection': dictionary.selection
                readonly 'selected dictionary': dictionary.selected_dictionary
            }
            
            export namespace parameter {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type parameter = {
                readonly 'location': parameter.location
                readonly 'key': parameter.key
            }
            
            export type not_circular_dependent_siblings = null
            
            export type possibly_circular_dependent_siblings = null
            
        }
        
        export type state_group = 
            | readonly ['dictionary', state_group.dictionary]
            | readonly ['parameter', state_group.parameter]
            | readonly ['not circular dependent siblings', state_group.not_circular_dependent_siblings]
            | readonly ['possibly circular dependent siblings', state_group.possibly_circular_dependent_siblings]
        
    }
    
    export type _type = {
        readonly 'location': _type.location
        readonly 'state group': _type.state_group
    }
    
    export type resulting_dictionary = null
    
}

export type Lookup_Selection_ = {
    readonly 'type': Lookup_Selection_._type
    readonly 'resulting dictionary': Lookup_Selection_.resulting_dictionary
}

export namespace Constraint_ {
    
    export type selection = Relative_Value_Selection_
    
    export namespace _type {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export namespace state {
                
                export type selected_state_group = null
                
                export namespace state {
                    
                    export type location = i__location.Location
                    
                    export type key = string
                    
                }
                
                export type state = {
                    readonly 'location': state.location
                    readonly 'key': state.key
                }
                
            }
            
            export type state = {
                readonly 'selected state group': state.selected_state_group
                readonly 'state': state.state
            }
            
            export namespace optional_value {
                
                export type selected_optional_value = null
                
            }
            
            export type optional_value = {
                readonly 'selected optional value': optional_value.selected_optional_value
            }
            
        }
        
        export type state_group = 
            | readonly ['state', state_group.state]
            | readonly ['optional value', state_group.optional_value]
        
    }
    
    export type _type = {
        readonly 'location': _type.location
        readonly 'state group': _type.state_group
    }
    
}

export type Constraint_ = {
    readonly 'selection': Constraint_.selection
    readonly 'type': Constraint_._type
}

export namespace Option_Constraints_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
                    export namespace state {
                        
                        export type selection = Guaranteed_Value_Selection_
                        
                        export type selected_state_group = null
                        
                        export namespace state {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type state = {
                            readonly 'location': state.location
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
                
                export type state_group = 
                    | readonly ['state', state_group.state]
                    | readonly ['assert is set', state_group.assert_is_set]
                
            }
            
            export type entry = {
                readonly 'location': entry.location
                readonly 'state group': entry.state_group
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Option_Constraints_ = {
    readonly 'location': Option_Constraints_.location
    readonly 'dictionary': Option_Constraints_.dictionary
}

export namespace Property_Constraints_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export type entry = Property_Constraint_
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Property_Constraints_ = {
    readonly 'location': Property_Constraints_.location
    readonly 'dictionary': Property_Constraints_.dictionary
}

export namespace Reference_To_Property_Constraint_ {
    
    export type location = i__location.Location
    
    export type key = string
    
}

export type Reference_To_Property_Constraint_ = {
    readonly 'location': Reference_To_Property_Constraint_.location
    readonly 'key': Reference_To_Property_Constraint_.key
}

export namespace Property_Constraint_ {
    
    export namespace start {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export type property = null
            
            export type sibling = Reference_To_Property_Constraint_
            
        }
        
        export type state_group = 
            | readonly ['property', state_group.property]
            | readonly ['sibling', state_group.sibling]
        
    }
    
    export type start = {
        readonly 'location': start.location
        readonly 'state group': start.state_group
    }
    
    export type constraint = Constraint_
    
}

export type Property_Constraint_ = {
    readonly 'start': Property_Constraint_.start
    readonly 'constraint': Property_Constraint_.constraint
}

export namespace Optional_Value_Initialization_ {
    
    export type location = i__location.Location
    
    export namespace state_group {
        
        export type not_set = null
        
        export type _set = Guaranteed_Value_Selection_
        
        export type selection = Possible_Value_Selection_
        
    }
    
    export type state_group = 
        | readonly ['not set', state_group.not_set]
        | readonly ['set', state_group._set]
        | readonly ['selection', state_group.selection]
    
}

export type Optional_Value_Initialization_ = {
    readonly 'location': Optional_Value_Initialization_.location
    readonly 'state group': Optional_Value_Initialization_.state_group
}

export namespace Node_Resolver_Group_ {
    
    export type location = i__location.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Location
            
            export namespace entry {
                
                export type definition = null
                
                export type resolver = Node_Resolver_
                
            }
            
            export type entry = {
                readonly 'definition': entry.definition
                readonly 'resolver': entry.resolver
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Node_Resolver_Group_ = {
    readonly 'location': Node_Resolver_Group_.location
    readonly 'dictionary': Node_Resolver_Group_.dictionary
}

export type Node_Resolver_List_Result_ = Type_Reference_

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

export namespace Node_Resolver_ {
    
    export type location = i__location.Location
    
    export namespace state_group {
        
        export type _boolean = null
        
        export namespace component {
            
            export namespace location {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
                    export namespace external {
                        
                        export namespace _import {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type _import = {
                            readonly 'location': _import.location
                            readonly 'key': _import.key
                        }
                        
                        export namespace _type {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type _type = {
                            readonly 'location': _type.location
                            readonly 'key': _type.key
                        }
                        
                    }
                    
                    export type external = {
                        readonly 'import': external._import
                        readonly 'type': external._type
                    }
                    
                    export namespace internal {
                        
                        export type location = i__location.Location
                        
                        export type key = string
                        
                    }
                    
                    export type internal = {
                        readonly 'location': internal.location
                        readonly 'key': internal.key
                    }
                    
                }
                
                export type state_group = 
                    | readonly ['external', state_group.external]
                    | readonly ['internal', state_group.internal]
                
            }
            
            export type location = {
                readonly 'location': location.location
                readonly 'state group': location.state_group
            }
            
            export type signature = null
            
            export namespace _arguments {
                
                export namespace O {
                    
                    export namespace values {
                        
                        export namespace O {
                            
                            export type location = i__location.Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Location
                                    
                                    export namespace entry {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace state_group {
                                            
                                            export type optional = Optional_Value_Initialization_
                                            
                                            export type required = Guaranteed_Value_Selection_
                                            
                                            export namespace parameter {
                                                
                                                export type location = i__location.Location
                                                
                                                export type key = string
                                                
                                            }
                                            
                                            export type parameter = {
                                                readonly 'location': parameter.location
                                                readonly 'key': parameter.key
                                            }
                                            
                                        }
                                        
                                        export type state_group = 
                                            | readonly ['optional', state_group.optional]
                                            | readonly ['required', state_group.required]
                                            | readonly ['parameter', state_group.parameter]
                                        
                                    }
                                    
                                    export type entry = {
                                        readonly 'location': entry.location
                                        readonly 'state group': entry.state_group
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly 'entry': D.entry
                                }
                                
                            }
                            
                            export type dictionary = _pi.Dictionary<dictionary.D>
                            
                        }
                        
                        export type O = {
                            readonly 'location': O.location
                            readonly 'dictionary': O.dictionary
                        }
                        
                    }
                    
                    export type values = _pi.Optional_Value<values.O>
                    
                    export namespace lookups {
                        
                        export namespace O {
                            
                            export type location = i__location.Location
                            
                            export namespace dictionary {
                                
                                export namespace D {
                                    
                                    export type location = i__location.Location
                                    
                                    export namespace entry {
                                        
                                        export type location = i__location.Location
                                        
                                        export namespace state_group {
                                            
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
                                        
                                        export type state_group = 
                                            | readonly ['empty stack', state_group.empty_stack]
                                            | readonly ['not set', state_group.not_set]
                                            | readonly ['selection', state_group.selection]
                                            | readonly ['stack', state_group.stack]
                                        
                                    }
                                    
                                    export type entry = {
                                        readonly 'location': entry.location
                                        readonly 'state group': entry.state_group
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'location': D.location
                                    readonly 'entry': D.entry
                                }
                                
                            }
                            
                            export type dictionary = _pi.Dictionary<dictionary.D>
                            
                        }
                        
                        export type O = {
                            readonly 'location': O.location
                            readonly 'dictionary': O.dictionary
                        }
                        
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
            
            export type definition = null
            
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
            
            export type definition = null
            
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
            
            export type definition = null
            
            export namespace _type {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
                    export namespace derived {
                        
                        export type value = Guaranteed_Value_Selection_
                        
                    }
                    
                    export type derived = {
                        readonly 'value': derived.value
                    }
                    
                    export namespace selected {
                        
                        export type definition = null
                        
                        export type lookup = Lookup_Selection_
                        
                        export type constraints = Property_Constraints_
                        
                    }
                    
                    export type selected = {
                        readonly 'definition': selected.definition
                        readonly 'lookup': selected.lookup
                        readonly 'constraints': selected.constraints
                    }
                    
                }
                
                export type state_group = 
                    | readonly ['derived', state_group.derived]
                    | readonly ['selected', state_group.selected]
                
            }
            
            export type _type = {
                readonly 'location': _type.location
                readonly 'state group': _type.state_group
            }
            
        }
        
        export type reference = {
            readonly 'definition': reference.definition
            readonly 'type': reference._type
        }
        
        export namespace state_group {
            
            export type definition = null
            
            export namespace states {
                
                export type location = i__location.Location
                
                export namespace dictionary {
                    
                    export namespace D {
                        
                        export type location = i__location.Location
                        
                        export namespace entry {
                            
                            export type constraints = Option_Constraints_
                            
                            export type resolver = Node_Resolver_
                            
                        }
                        
                        export type entry = {
                            readonly 'constraints': entry.constraints
                            readonly 'resolver': entry.resolver
                        }
                        
                    }
                    
                    export type D = {
                        readonly 'location': D.location
                        readonly 'entry': D.entry
                    }
                    
                }
                
                export type dictionary = _pi.Dictionary<dictionary.D>
                
            }
            
            export type states = {
                readonly 'location': states.location
                readonly 'dictionary': states.dictionary
            }
            
        }
        
        export type state_group = {
            readonly 'definition': state_group.definition
            readonly 'states': state_group.states
        }
        
        export type text = null
        
    }
    
    export type state_group = 
        | readonly ['boolean', state_group._boolean]
        | readonly ['component', state_group.component]
        | readonly ['dictionary', state_group.dictionary]
        | readonly ['group', state_group.group]
        | readonly ['list', state_group.list]
        | readonly ['nothing', state_group.nothing]
        | readonly ['number', state_group._number]
        | readonly ['optional', state_group.optional]
        | readonly ['reference', state_group.reference]
        | readonly ['state group', state_group.state_group]
        | readonly ['text', state_group.text]
    
}

export type Node_Resolver_ = {
    readonly 'location': Node_Resolver_.location
    readonly 'state group': Node_Resolver_.state_group
}

export namespace Guaranteed_Value_Selection_ {
    
    export namespace start {
        
        export type location = i__location.Location
        
        export namespace state_group {
            
            export namespace sibling {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type sibling = {
                readonly 'location': sibling.location
                readonly 'key': sibling.key
            }
            
            export namespace parent_sibling {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type parent_sibling = {
                readonly 'location': parent_sibling.location
                readonly 'key': parent_sibling.key
            }
            
            export namespace option_constraint {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type option_constraint = {
                readonly 'location': option_constraint.location
                readonly 'key': option_constraint.key
            }
            
            export type list_cursor = null
            
            export type linked_entry = null
            
            export namespace constraint {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
                    export namespace component {
                        
                        export namespace property {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type property = {
                            readonly 'location': property.location
                            readonly 'key': property.key
                        }
                        
                        export namespace constraint {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type constraint = {
                            readonly 'location': constraint.location
                            readonly 'key': constraint.key
                        }
                        
                    }
                    
                    export type component = {
                        readonly 'property': component.property
                        readonly 'constraint': component.constraint
                    }
                    
                    export namespace reference {
                        
                        export namespace property {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type property = {
                            readonly 'location': property.location
                            readonly 'key': property.key
                        }
                        
                        export namespace constraint {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type constraint = {
                            readonly 'location': constraint.location
                            readonly 'key': constraint.key
                        }
                        
                    }
                    
                    export type reference = {
                        readonly 'property': reference.property
                        readonly 'constraint': reference.constraint
                    }
                    
                }
                
                export type state_group = 
                    | readonly ['component', state_group.component]
                    | readonly ['reference', state_group.reference]
                
            }
            
            export type constraint = {
                readonly 'location': constraint.location
                readonly 'state group': constraint.state_group
            }
            
            export namespace parameter {
                
                export type location = i__location.Location
                
                export type key = string
                
            }
            
            export type parameter = {
                readonly 'location': parameter.location
                readonly 'key': parameter.key
            }
            
            export namespace result {
                
                export type location = i__location.Location
                
                export namespace state_group {
                    
                    export namespace list {
                        
                        export namespace property {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type property = {
                            readonly 'location': property.location
                            readonly 'key': property.key
                        }
                        
                        export type list_result = null
                        
                    }
                    
                    export type list = {
                        readonly 'property': list.property
                        readonly 'list result': list.list_result
                    }
                    
                    export namespace state_group {
                        
                        export namespace property {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type property = {
                            readonly 'location': property.location
                            readonly 'key': property.key
                        }
                        
                        export type state_group = null
                        
                        export type result = Type_Reference_
                        
                    }
                    
                    export type state_group = {
                        readonly 'property': state_group.property
                        readonly 'state group': state_group.state_group
                        readonly 'result': state_group.result
                    }
                    
                    export namespace optional_value {
                        
                        export namespace property {
                            
                            export type location = i__location.Location
                            
                            export type key = string
                            
                        }
                        
                        export type property = {
                            readonly 'location': property.location
                            readonly 'key': property.key
                        }
                        
                        export type optional_value = null
                        
                        export type result = Type_Reference_
                        
                    }
                    
                    export type optional_value = {
                        readonly 'property': optional_value.property
                        readonly 'optional value': optional_value.optional_value
                        readonly 'result': optional_value.result
                    }
                    
                }
                
                export type state_group = 
                    | readonly ['list', state_group.list]
                    | readonly ['state group', state_group.state_group]
                    | readonly ['optional value', state_group.optional_value]
                
            }
            
            export type result = {
                readonly 'location': result.location
                readonly 'state group': result.state_group
            }
            
        }
        
        export type state_group = 
            | readonly ['sibling', state_group.sibling]
            | readonly ['parent sibling', state_group.parent_sibling]
            | readonly ['option constraint', state_group.option_constraint]
            | readonly ['list cursor', state_group.list_cursor]
            | readonly ['linked entry', state_group.linked_entry]
            | readonly ['constraint', state_group.constraint]
            | readonly ['parameter', state_group.parameter]
            | readonly ['result', state_group.result]
        
    }
    
    export type start = {
        readonly 'location': start.location
        readonly 'state group': start.state_group
    }
    
    export type tail = Relative_Value_Selection_
    
    export type resulting_node = null
    
}

export type Guaranteed_Value_Selection_ = {
    readonly 'start': Guaranteed_Value_Selection_.start
    readonly 'tail': Guaranteed_Value_Selection_.tail
    readonly 'resulting node': Guaranteed_Value_Selection_.resulting_node
}

export namespace Possible_Value_Selection_ {
    
    export type location = i__location.Location
    
    export namespace state_group {
        
        export namespace parameter {
            
            export type location = i__location.Location
            
            export type key = string
            
        }
        
        export type parameter = {
            readonly 'location': parameter.location
            readonly 'key': parameter.key
        }
        
        export namespace result {
            
            export type location = i__location.Location
            
            export namespace state_group {
                
                export namespace state_group {
                    
                    export namespace property {
                        
                        export type location = i__location.Location
                        
                        export type key = string
                        
                    }
                    
                    export type property = {
                        readonly 'location': property.location
                        readonly 'key': property.key
                    }
                    
                    export type state_group = null
                    
                    export type result = Type_Reference_
                    
                }
                
                export type state_group = {
                    readonly 'property': state_group.property
                    readonly 'state group': state_group.state_group
                    readonly 'result': state_group.result
                }
                
                export namespace optional_value {
                    
                    export namespace property {
                        
                        export type location = i__location.Location
                        
                        export type key = string
                        
                    }
                    
                    export type property = {
                        readonly 'location': property.location
                        readonly 'key': property.key
                    }
                    
                    export type optional_value = null
                    
                    export type result = Type_Reference_
                    
                }
                
                export type optional_value = {
                    readonly 'property': optional_value.property
                    readonly 'optional value': optional_value.optional_value
                    readonly 'result': optional_value.result
                }
                
            }
            
            export type state_group = 
                | readonly ['state group', state_group.state_group]
                | readonly ['optional value', state_group.optional_value]
            
        }
        
        export type result = {
            readonly 'location': result.location
            readonly 'state group': result.state_group
        }
        
    }
    
    export type state_group = 
        | readonly ['parameter', state_group.parameter]
        | readonly ['result', state_group.result]
    
}

export type Possible_Value_Selection_ = {
    readonly 'location': Possible_Value_Selection_.location
    readonly 'state group': Possible_Value_Selection_.state_group
}

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
