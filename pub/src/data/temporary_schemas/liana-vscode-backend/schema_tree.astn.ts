import * as _pi from 'pareto-core/dist/interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/liana/schemas/schema/data/unresolved"

import { $ as x_convert_to_json } from "./schemas/convert_to_json/$.module.astn"
import { $ as x_format } from "./schemas/format/$.module.astn"
import { $ as x_get_completion_suggestions } from "./schemas/get_completion_suggestions/$.module.astn"
import { $ as x_get_on_hover_info } from "./schemas/get_on_hover_info/$.module.astn"
import { $ as x_location } from "./schemas/location/$.module.astn"
import { $ as x_seal } from "./schemas/seal/$.module.astn"
import { $ as x_sort_alphabetically } from "./schemas/sort_alphabetically/$.module.astn"
import { $ as x_validate_document } from "./schemas/validate_document/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "convert to json": x_convert_to_json,
    "format": x_format,
    "get completion suggestions": x_get_completion_suggestions,
    "get on hover info": x_get_on_hover_info,
    "location": x_location,
    "seal": x_seal,
    "sort alphabetically": x_sort_alphabetically,
    "validate document": x_validate_document,
})