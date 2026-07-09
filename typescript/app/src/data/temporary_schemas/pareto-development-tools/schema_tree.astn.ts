

import * as sh from "lib/shorthands/schema/manual"


import { $ as x_structure } from "./schemas/structure/$.module.astn.js"

export const $ = sh.st.set({
    "structure": x_structure,
})