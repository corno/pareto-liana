

import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as x_ast } from "./schemas/ast/$.module.astn.js"
import { $ as x_atn } from "./schemas/atn/$.module.astn.js"
import { $ as x_dfa } from "./schemas/dfa/$.module.astn.js"
import { $ as x_lookahead } from "./schemas/lookahead/$.module.astn.js"

export const $ = sh.st.set({
    "ast": x_ast,
    "atn": x_atn,
    "dfa": x_dfa,
    "lookahead": x_lookahead,
})