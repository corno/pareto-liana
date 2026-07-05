

import * as sh from "../../../shorthands/schema/manual.js"


import { $ as x_git } from "./schemas/git/$.module.astn.js"

export const $ = sh.st.set({
    "git": x_git,
})