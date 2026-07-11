
import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as d_out from "../../../interface/schemas/temp_module_specifier.js"
import type * as d_function from "liana-core/interface/data/deserialize_resolved"
import type * as d_in from "pareto-fountain-pen/interface/data/list_of_characters"


export type Module_Specifier = p_.Refiner<
    d_out.Temp_Module_Specifier,
    d_function.Error,
    d_in.List_of_Characters
>

