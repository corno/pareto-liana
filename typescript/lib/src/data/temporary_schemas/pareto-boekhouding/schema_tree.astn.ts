import * as _pi from 'pareto-core/dist/interface'


import * as sh from "../../../shorthands/schema"


import { $ as x_boekhouding } from "./schemas/boekhouding/$.module.astn"
import { $ as x_boekhouding_oude_model } from "./schemas/boekhouding_oude_model/$.module.astn"


export const $ = sh.st.set({
    "boekhouding": x_boekhouding,
    "boekhouding oude model": x_boekhouding_oude_model,
})