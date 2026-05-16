import * as _pi from 'pareto-core/dist/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_attributes } from "./schemas/attributes/$.module.astn"
import { $ as x_file_structure } from "./schemas/file_structure/$.module.astn"
import { $ as x_high_level } from "./schemas/high_level/$.module.astn"
import { $ as x_high_level_simple } from "./schemas/high_level_simple/$.module.astn"
import { $ as x_html } from "../pareto-static-html/schemas/static-html/$.module.astn"
import { $ as x_low_level } from "./schemas/low_level/$.module.astn"
import { $ as x_xml } from "../pareto-static-html/schemas/xml/$.module.astn"

export const $ = sh.st.set({
    "attributes": x_attributes,
    "file structure": x_file_structure,
    "high level simple": x_high_level_simple,
    "high level": x_high_level,
    "html": x_html,
    "low level": x_low_level,
    "xml": x_xml,
})