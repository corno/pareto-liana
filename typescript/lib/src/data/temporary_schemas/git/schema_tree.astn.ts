import * as p_di from 'pareto-core/dist/data/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_git } from "./schemas/git/$.module.astn"

export const $ = sh.st.set({
    "git": x_git,
})