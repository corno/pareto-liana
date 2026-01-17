import * as _pi from "pareto-core-interface"
    
    import * as _i_resolved from "../data/resolved"
    import * as _i_unresolved from "../data/unresolved"
    
    // **** TYPES
    
    export type Type_Parameters = (
        $$_: _i_unresolved.Type_Parameters,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Type_Parameters
    
    export type Presence = (
        $$_: _i_unresolved.Presence,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Presence
    
    export type Number_Type = (
        $$_: _i_unresolved.Number_Type,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Number_Type
    
    export type Text_Type = (
        $$_: _i_unresolved.Text_Type,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Text_Type
    
    export type Globals = (
        $$_: _i_unresolved.Globals,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Globals
    
    export type Group = (
        $$_: _i_unresolved.Group,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'globals': _pi.Optional_Value<_i_resolved.Globals>
                    readonly 'type parameters': _i_resolved.Type_Parameters
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                }
                readonly 'lookups': {
                    readonly 'noncircular sibling types': _pi.Acyclic_Lookup<_i_resolved.Types.D>
                    readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<_i_resolved.Types.D>
                }
            }
            
        },
    ) => _i_resolved.Group
    
    export type Dictionary = (
        $$_: _i_unresolved.Dictionary,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'globals': _pi.Optional_Value<_i_resolved.Globals>
                    readonly 'type parameters': _i_resolved.Type_Parameters
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                }
                readonly 'lookups': {
                    readonly 'noncircular sibling types': _pi.Acyclic_Lookup<_i_resolved.Types.D>
                    readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<_i_resolved.Types.D>
                }
            }
            
        },
    ) => _i_resolved.Dictionary
    
    export type Type_Node = (
        $$_: _i_unresolved.Type_Node,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'globals': _pi.Optional_Value<_i_resolved.Globals>
                    readonly 'type parameters': _i_resolved.Type_Parameters
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                }
                readonly 'lookups': {
                    readonly 'noncircular sibling types': _pi.Acyclic_Lookup<_i_resolved.Types.D>
                    readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<_i_resolved.Types.D>
                }
            }
            
        },
    ) => _i_resolved.Type_Node
    
    export type Type = (
        $$_: _i_unresolved.Type,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'globals': _pi.Optional_Value<_i_resolved.Globals>
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                }
                readonly 'lookups': {
                    readonly 'noncircular sibling types': _pi.Acyclic_Lookup<_i_resolved.Types.D>
                    readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<_i_resolved.Types.D>
                }
            }
            
        },
    ) => _i_resolved.Type
    
    export type Type_Reference = (
        $$_: _i_unresolved.Type_Reference,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                }
                readonly 'lookups': {
                    readonly 'types': _pi.Acyclic_Lookup<_i_resolved.Types.D>
                }
            }
            
        },
    ) => _i_resolved.Type_Reference
    
    export type Type_Node_Reference = (
        $$_: _i_unresolved.Type_Node_Reference,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                }
                readonly 'lookups': {
                    readonly 'types': _pi.Acyclic_Lookup<_i_resolved.Types.D>
                }
            }
            
        },
    ) => _i_resolved.Type_Node_Reference
    
    export type Node_Resolver = (
        $$_: _i_unresolved.Node_Resolver,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'definition': _i_resolved.Type_Node
                    readonly 'list cursor': _pi.Optional_Value<_i_resolved.Node_Resolver_List_Result>
                    readonly 'linked entry': _pi.Optional_Value<_i_resolved.Benchmark>
                    readonly 'current dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'current ordered dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'signature': _i_resolved.Signature
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                    readonly 'signatures': _i_resolved.Signatures
                    readonly 'types': _i_resolved.Types
                    readonly 'option constraints': _pi.Optional_Value<_i_resolved.Option_Constraints>
                }
                readonly 'lookups': {
                    readonly 'sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                    readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                }
            }
            
        },
    ) => _i_resolved.Node_Resolver
    
    export type Possible_Value_Selection = (
        $$_: _i_unresolved.Possible_Value_Selection,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'definition': _i_resolved.Type_Node
                    readonly 'list cursor': _pi.Optional_Value<_i_resolved.Node_Resolver_List_Result>
                    readonly 'linked entry': _pi.Optional_Value<_i_resolved.Benchmark>
                    readonly 'current dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'current ordered dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'signature': _i_resolved.Signature
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                    readonly 'signatures': _i_resolved.Signatures
                    readonly 'types': _i_resolved.Types
                    readonly 'option constraints': _pi.Optional_Value<_i_resolved.Option_Constraints>
                }
                readonly 'lookups': {
                    readonly 'sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                    readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                }
            }
            
        },
    ) => _i_resolved.Possible_Value_Selection
    
    export type Guaranteed_Value_Selection = (
        $$_: _i_unresolved.Guaranteed_Value_Selection,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'definition': _i_resolved.Type_Node
                    readonly 'list cursor': _pi.Optional_Value<_i_resolved.Node_Resolver_List_Result>
                    readonly 'linked entry': _pi.Optional_Value<_i_resolved.Benchmark>
                    readonly 'current dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'current ordered dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'signature': _i_resolved.Signature
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                    readonly 'signatures': _i_resolved.Signatures
                    readonly 'types': _i_resolved.Types
                    readonly 'option constraints': _pi.Optional_Value<_i_resolved.Option_Constraints>
                }
                readonly 'lookups': {
                    readonly 'sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                    readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                }
            }
            
        },
    ) => _i_resolved.Guaranteed_Value_Selection
    
    export type Benchmark = (
        $$_: _i_unresolved.Benchmark,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'definition': _i_resolved.Type_Node
                    readonly 'list cursor': _pi.Optional_Value<_i_resolved.Node_Resolver_List_Result>
                    readonly 'linked entry': _pi.Optional_Value<_i_resolved.Benchmark>
                    readonly 'current dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'current ordered dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'signature': _i_resolved.Signature
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                    readonly 'signatures': _i_resolved.Signatures
                    readonly 'types': _i_resolved.Types
                    readonly 'option constraints': _pi.Optional_Value<_i_resolved.Option_Constraints>
                }
                readonly 'lookups': {
                    readonly 'sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                    readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                }
            }
            
        },
    ) => _i_resolved.Benchmark
    
    export type Optional_Value_Initialization = (
        $$_: _i_unresolved.Optional_Value_Initialization,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'definition': _i_resolved.Type_Node
                    readonly 'list cursor': _pi.Optional_Value<_i_resolved.Node_Resolver_List_Result>
                    readonly 'linked entry': _pi.Optional_Value<_i_resolved.Benchmark>
                    readonly 'current dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'current ordered dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'signature': _i_resolved.Signature
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                    readonly 'signatures': _i_resolved.Signatures
                    readonly 'types': _i_resolved.Types
                    readonly 'option constraints': _pi.Optional_Value<_i_resolved.Option_Constraints>
                }
                readonly 'lookups': {
                    readonly 'sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                    readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                }
            }
            
        },
    ) => _i_resolved.Optional_Value_Initialization
    
    export type Lookup_Selection = (
        $$_: _i_unresolved.Lookup_Selection,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'definition': _i_resolved.Type_Node
                    readonly 'list cursor': _pi.Optional_Value<_i_resolved.Node_Resolver_List_Result>
                    readonly 'linked entry': _pi.Optional_Value<_i_resolved.Benchmark>
                    readonly 'current dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'current ordered dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'signature': _i_resolved.Signature
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                    readonly 'signatures': _i_resolved.Signatures
                    readonly 'types': _i_resolved.Types
                    readonly 'option constraints': _pi.Optional_Value<_i_resolved.Option_Constraints>
                }
                readonly 'lookups': {
                    readonly 'sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                    readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                }
            }
            
        },
    ) => _i_resolved.Lookup_Selection
    
    export type Option_Constraints = (
        $$_: _i_unresolved.Option_Constraints,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'definition': _i_resolved.Type_Node
                    readonly 'list cursor': _pi.Optional_Value<_i_resolved.Node_Resolver_List_Result>
                    readonly 'linked entry': _pi.Optional_Value<_i_resolved.Benchmark>
                    readonly 'current dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'current ordered dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'signature': _i_resolved.Signature
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                    readonly 'signatures': _i_resolved.Signatures
                    readonly 'types': _i_resolved.Types
                    readonly 'option constraints': _pi.Optional_Value<_i_resolved.Option_Constraints>
                }
                readonly 'lookups': {
                    readonly 'sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                    readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                }
            }
            
        },
    ) => _i_resolved.Option_Constraints
    
    export type Node_Resolver_List_Result = (
        $$_: _i_unresolved.Node_Resolver_List_Result,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                }
                readonly 'lookups': {
                    readonly 'types': _pi.Acyclic_Lookup<_i_resolved.Types.D>
                }
            }
            
        },
    ) => _i_resolved.Node_Resolver_List_Result
    
    export type Node_Resolver_Group = (
        $$_: _i_unresolved.Node_Resolver_Group,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'definition': _i_resolved.Group
                    readonly 'list cursor': _pi.Optional_Value<_i_resolved.Node_Resolver_List_Result>
                    readonly 'linked entry': _pi.Optional_Value<_i_resolved.Benchmark>
                    readonly 'current dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'current ordered dictionary': _pi.Optional_Value<_i_resolved.Dictionary>
                    readonly 'signature': _i_resolved.Signature
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                    readonly 'signatures': _i_resolved.Signatures
                    readonly 'types': _i_resolved.Types
                    readonly 'option constraints': _pi.Optional_Value<_i_resolved.Option_Constraints>
                }
                readonly 'lookups': {
                    readonly 'sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                    readonly 'parent sibling property resolvers': _pi.Acyclic_Lookup<_i_resolved.Node_Resolver_Group.D>
                }
            }
            
        },
    ) => _i_resolved.Node_Resolver_Group
    
    export type Relative_Value_Selection = (
        $$_: _i_unresolved.Relative_Value_Selection,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'node': _i_resolved.Type_Node
                }
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Relative_Value_Selection
    
    export type Constraint = (
        $$_: _i_unresolved.Constraint,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'node': _i_resolved.Type_Node
                }
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Constraint
    
    export type Property_Constraints = (
        $$_: _i_unresolved.Property_Constraints,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'node': _i_resolved.Type_Node
                }
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Property_Constraints
    
    export type Property_Constraint = (
        $$_: _i_unresolved.Property_Constraint,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': {
                    readonly 'property constraints': _pi.Acyclic_Lookup<_i_resolved.Property_Constraints.D>
                }
            }
            
        },
    ) => _i_resolved.Property_Constraint
    
    export type Resolve_Logic = (
        $$_: _i_unresolved.Resolve_Logic,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'types': _i_resolved.Types
                    readonly 'imports': _i_resolved.Imports
                }
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Resolve_Logic
    
    export type Signature_Parameters = (
        $$_: _i_unresolved.Signature_Parameters,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'types': _i_resolved.Types
                    readonly 'imports': _i_resolved.Imports
                }
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Signature_Parameters
    
    export type Signature = (
        $$_: _i_unresolved.Signature,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'types': _i_resolved.Types
                    readonly 'type': _i_resolved.Type
                    readonly 'imports': _i_resolved.Imports
                }
                readonly 'lookups': {
                    readonly 'sibling signatures': _pi.Acyclic_Lookup<_i_resolved.Signatures.D>
                }
            }
            
        },
    ) => _i_resolved.Signature
    
    export type Signatures = (
        $$_: _i_unresolved.Signatures,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'types': _i_resolved.Types
                    readonly 'imports': _i_resolved.Imports
                }
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Signatures
    
    export type Resolvers = (
        $$_: _i_unresolved.Resolvers,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'signatures': _i_resolved.Signatures
                    readonly 'types': _i_resolved.Types
                    readonly 'imports': _i_resolved.Imports
                }
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Resolvers
    
    export type Schemas = (
        $$_: _i_unresolved.Schemas,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': {
                    readonly 'sibling schemas': _pi.Stack_Lookup<_i_resolved.Schemas.D>
                }
            }
            
        },
    ) => _i_resolved.Schemas
    
    export type Type_Specification = (
        $$_: _i_unresolved.Type_Specification,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Type_Specification
    
    export type Schema_Tree = (
        $$_: _i_unresolved.Schema_Tree,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': {
                    readonly 'sibling schemas': _pi.Stack_Lookup<_i_resolved.Schemas.D>
                }
            }
            
        },
    ) => _i_resolved.Schema_Tree
    
    export type Schema = (
        $$_: _i_unresolved.Schema,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': {
                    readonly 'sibling schemas': _pi.Stack_Lookup<_i_resolved.Schemas.D>
                }
            }
            
        },
    ) => _i_resolved.Schema
    
    export type Imports = (
        $$_: _i_unresolved.Imports,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': {
                    readonly 'sibling schemas': _pi.Stack_Lookup<_i_resolved.Schemas.D>
                }
            }
            
        },
    ) => _i_resolved.Imports
    
    export type Reference_To_Property_Constraint = (
        $$_: _i_unresolved.Reference_To_Property_Constraint,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': null
                readonly 'lookups': {
                    readonly 'property constraints': _pi.Acyclic_Lookup<_i_resolved.Property_Constraints.D>
                }
            }
            
        },
    ) => _i_resolved.Reference_To_Property_Constraint
    
    export type Types = (
        $$_: _i_unresolved.Types,
        $$_p: {
            readonly 'parameters': {
                readonly 'values': {
                    readonly 'globals': _pi.Optional_Value<_i_resolved.Globals>
                    readonly 'imports': _pi.Optional_Value<_i_resolved.Imports>
                }
                readonly 'lookups': null
            }
            
        },
    ) => _i_resolved.Types