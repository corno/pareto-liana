
import * as p_t from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/refiner'
import type * as p_di from 'pareto-core/interface/data'
import p_implement_me from 'pareto-core-dev/implement_me'
import p_log_debug_message from 'pareto-core-dev/log_debug_message'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'

//data types
import type * as d_out from "../../../data/temp_module_specifier.js"
import type * as d_out_schema from "../../../generated/liana/schemas/schema/data/resolved.js"
import type * as d_function from "liana-core/interface/data/deserialize_resolved"
import type * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"


    export type Module_Specifier = p_i.Refiner<
        d_out.Temp_Module_Specifier,
        d_function.Error,
        d_in.List_of_Characters
    >

