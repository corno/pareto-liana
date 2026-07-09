

import * as sh from "lib/shorthands/schema/manual"


import { $ as x_git } from "./schemas/git/$.module.astn.js"

export const $ = sh.st.set({
    "git": x_git,
})