
import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as d_out from "../../../data/temp_module_specifier.js"
import type * as d_function from "liana-core/interface/data/deserialize_resolved"
import type * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"


export type Module_Specifier = p_.Refiner<
    d_out.Temp_Module_Specifier,
    d_function.Error,
    d_in.List_of_Characters
>

