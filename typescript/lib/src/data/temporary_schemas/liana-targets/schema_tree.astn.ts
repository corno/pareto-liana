import * as pi from 'pareto-core/dist/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_alan_light } from "./schemas/alan_light/$.module.astn"

export const $ = sh.st.set({
    "alan light": x_alan_light,
})