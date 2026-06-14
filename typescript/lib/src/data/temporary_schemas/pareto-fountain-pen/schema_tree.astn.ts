import * as p_di from 'pareto-core/dist/data/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_lines } from "./schemas/lines/$.module.astn"
import { $ as x_list_of_characters } from "./schemas/list_of_characters/$.module.astn"
import { $ as x_prose } from "./schemas/prose/$.module.astn"
import { $ as x_semi_lines } from "./schemas/semi_lines/$.module.astn"
import { $ as x_text } from "./schemas/text/$.module.astn"


export const $ = sh.st.set({
    "lines": x_lines,
    "list of characters": x_list_of_characters,
    "prose": x_prose,
    "semi lines": x_semi_lines,
    "text": x_text,
})