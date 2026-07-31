


import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as x_boekhouding } from "./schemas/boekhouding/$.module.astn.js"
import { $ as x_boekhouding_oude_model } from "./schemas/boekhouding_oude_model/$.module.astn.js"


export const $ = sh.st.set({
    "boekhouding": x_boekhouding,
    "boekhouding oude model": x_boekhouding_oude_model,
})