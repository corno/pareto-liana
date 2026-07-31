

import * as sh from "lib/schemas/schema/shorthands/manual"



import { $ as x_interface } from "./schemas/interface/$.module.astn.js"
import { $ as x_implementation } from "./schemas/implementation/$.module.astn.js"
import { $ as x_typescript_light } from "./schemas/typescript_light/$.module.astn.js"

export const $ = sh.st.set({
    "implementation": x_implementation,
    "interface": x_interface,
    "typescript light": x_typescript_light,
})