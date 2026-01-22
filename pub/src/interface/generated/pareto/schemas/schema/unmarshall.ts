import * as _pi from "pareto-core/dist/interface"
    
    import * as _i_out from "./data/unresolved"
    import * as _i_in from "astn-core/dist/interface/generated/pareto/schemas/parse_tree/data"
    // import * as _i_vd from "./value_deserializers"
    
    // **** TYPES

    export type Unmarshall_Error = null
    
    export type Text_Type = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Text_Type
    
    export type Number_Type = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Number_Type
    
    export type Globals = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Globals
    
    export type Presence = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Presence
    
    export type Type_Parameters = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Type_Parameters
    
    export type Type = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Type
    
    export type Types = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Types
    
    export type Dictionary = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Dictionary
    
    export type Signatures = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Signatures
    
    export type Resolvers = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Resolvers
    
    export type Resolve_Logic = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Resolve_Logic
    
    export type Group = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Group
    
    export type Schema = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Schema
    
    export type Schema_Tree = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Schema_Tree
    
    export type Schemas = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Schemas
    
    export type Imports = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Imports
    
    export type Type_Node = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Type_Node
    
    export type Type_Reference = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Type_Reference
    
    export type Type_Node_Reference = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Type_Node_Reference
    
    export type Signature_Parameters = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Signature_Parameters
    
    export type Signature = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Signature
    
    export type Relative_Value_Selection = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Relative_Value_Selection
    
    export type Lookup_Selection = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Lookup_Selection
    
    export type Constraint = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Constraint
    
    export type Option_Constraints = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Option_Constraints
    
    export type Property_Constraints = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Property_Constraints
    
    export type Reference_To_Property_Constraint = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Reference_To_Property_Constraint
    
    export type Property_Constraint = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Property_Constraint
    
    export type Optional_Value_Initialization = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Optional_Value_Initialization
    
    export type Node_Resolver_Group = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Node_Resolver_Group
    
    export type Node_Resolver_List_Result = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Node_Resolver_List_Result
    
    export type Benchmark = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Benchmark
    
    export type Type_Specification = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Type_Specification
    
    export type Node_Resolver = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Node_Resolver
    
    export type Guaranteed_Value_Selection = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Guaranteed_Value_Selection
    
    export type Possible_Value_Selection = (
        $$_: _i_in.Value,
        abort: _pi.Abort<Unmarshall_Error>,
    ) => _i_out.Possible_Value_Selection
    