

import * as sh from "../../../shorthands/schema/manual"


import { $ as x_structure } from "./schemas/structure/$.module.astn"

export const $ = sh.st.set({
    "structure": x_structure,
})