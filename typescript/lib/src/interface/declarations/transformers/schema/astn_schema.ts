import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//data types
import type * as d_in from "../../../generated/liana/schemas/schema/data/resolved.js"
import type * as d_out from "../../../generated/liana/schemas/astn_schema/data/unresolved.js"

export namespace interface_ {
    export type Schema = p_i.Transformer<
        d_in.Schema,
        d_out.Schema
    >
    export type Globals = p_i.Transformer<
        d_in.Globals,
        d_out.Globals
    >
    export type Schema_Imports = p_i.Transformer<
        d_in.Schema_Imports,
        d_out.Imports
    >
    export type Module = p_i.Transformer<
        d_in.Module,
        d_out.Modules.l_dictionary.D.l_entry
    >
    export type Value = p_i.Transformer<
        d_in.Value,
        d_out.Value
    >
    export type Text_Type = p_i.Transformer<
        d_in.Text_Type,
        d_out.Text_Type
    >
}
