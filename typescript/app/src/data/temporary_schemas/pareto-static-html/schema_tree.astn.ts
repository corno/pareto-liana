

import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as x_static_html } from "./schemas/static-html/$.module.astn.js"
import { $ as x_xml } from "./schemas/xml/$.module.astn.js"

export const $ = sh.st.set({
    "static-html": x_static_html,
    "xml": x_xml,
})