

import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as x_git } from "./schemas/git/$.module.astn.js"

export const $ = sh.st.set({
    "git": x_git,
})