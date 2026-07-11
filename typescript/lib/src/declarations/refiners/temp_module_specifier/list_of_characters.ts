
import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as s_out from "../../../interface/schemas/temp_module_specifier.js"
import type * as s_function from "liana-core/interface/data/deserialize_resolved"
import type * as s_in from "pareto-fountain-pen/interface/data/list_of_characters"


export type Module_Specifier = p_.Refiner<
    s_out.Temp_Module_Specifier,
    s_function.Error,
    s_in.List_of_Characters
>

