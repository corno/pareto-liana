

import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as x_completion_suggestions } from "./schemas/completion_suggestions/$.module.astn.js"
import { $ as x_convert_to_json } from "./schemas/convert_to_json/$.module.astn.js"
import { $ as x_diagnostics } from "./schemas/diagnostics/$.module.astn.js"
import { $ as x_format } from "./schemas/format/$.module.astn.js"
import { $ as x_get_completion_suggestions } from "./schemas/get_completion_suggestions/$.module.astn.js"
import { $ as x_get_on_hover_info } from "./schemas/get_on_hover_info/$.module.astn.js"
import { $ as x_hover_info } from "./schemas/hover_info/$.module.astn.js"
import { $ as x_astn_location } from "../astn-core/schemas/location/$.module.astn.js"
import { $ as x_location } from "./schemas/location/$.module.astn.js"
import { $ as x_path_unrestricted } from "../pareto-resources/schemas/filesystem_unrestricted/path/$.module.astn.js"
import { $ as x_seal } from "./schemas/seal/$.module.astn.js"
import { $ as x_sort_alphabetically } from "./schemas/sort_alphabetically/$.module.astn.js"
import { $ as x_text_edits } from "./schemas/text_edits/$.module.astn.js"
import { $ as x_unmarshall_errors } from "./schemas/unmarshall_errors/$.module.astn.js"

export const $ = sh.st.set({
    "completion suggestions": x_completion_suggestions,
    "convert to json": x_convert_to_json,
    "diagnostics": x_diagnostics,
    "format": x_format,
    "get completion suggestions": x_get_completion_suggestions,
    "get on hover info": x_get_on_hover_info,
    "hover info": x_hover_info,
    "astn location": x_astn_location,
    "location": x_location,
    "fs unrestricted path": x_path_unrestricted,
    "seal": x_seal,
    "sort alphabetically": x_sort_alphabetically,
    "text edits": x_text_edits,
    "unmarshall errors": x_unmarshall_errors
})