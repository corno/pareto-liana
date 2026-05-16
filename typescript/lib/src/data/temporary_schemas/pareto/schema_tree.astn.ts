import * as _pi from 'pareto-core/dist/interface'

import * as sh from "../../../shorthands/schema"



import { $ as x_interface } from "./schemas/interface/$.module.astn"
import { $ as x_implementation } from "./schemas/implementation/$.module.astn"
import { $ as x_typescript_light } from "./schemas/typescript_light/$.module.astn"

export const $ = sh.st.set({
    "implementation": x_implementation,
    "interface": x_interface,
    "typescript light": x_typescript_light,
})