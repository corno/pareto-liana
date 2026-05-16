import * as _pi from 'pareto-core/dist/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_static_html } from "./schemas/static-html/$.module.astn"
import { $ as x_xml } from "./schemas/xml/$.module.astn"

export const $ = sh.st.set({
    "static-html": x_static_html,
    "xml": x_xml,
})