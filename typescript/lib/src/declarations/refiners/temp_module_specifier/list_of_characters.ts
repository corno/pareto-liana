
import type * as p_ from 'pareto-core/interface/refiner'

//schemas
import type * as s_function from "../../../interface/schemas/deserialize_resolved.js"
import type * as s_in from "../../../interface/schemas/list_of_characters.js"
import type * as s_out from "../../../interface/schemas/temp_module_specifier.js"


export type Module_Specifier = p_.Refiner<
    s_out.Temp_Module_Specifier,
    s_function.Error,
    s_in.List_Of_Characters
>

