import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { $ as x_ast } from "./schemas/ast/$.module.astn"
import { $ as x_atn } from "./schemas/atn/$.module.astn"
import { $ as x_dfa } from "./schemas/dfa/$.module.astn"
import { $ as x_lookahead } from "./schemas/lookahead/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "ast": x_ast,
    "atn": x_atn,
    "dfa": x_dfa,
    "lookahead": x_lookahead,
})