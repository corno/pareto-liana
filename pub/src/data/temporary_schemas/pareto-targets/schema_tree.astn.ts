import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { $ as x_alan_light } from "./schemas/alan_light/$.module.astn"
import { $ as x_pareto_documentation } from "./schemas/pareto_documentation/$.module.astn"
import { $ as x_grapviz_low_level } from "./schemas/graphviz/low_level/$.module.astn"
import { $ as x_grapviz_high_level } from "./schemas/graphviz/high_level/$.module.astn"
import { $ as x_lionweb } from "./schemas/lionweb/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "alan light": x_alan_light,
    "pareto documentation": x_pareto_documentation,
    "graphviz low level": x_grapviz_low_level,
    "graphviz high level": x_grapviz_high_level,
    "lionweb": x_lionweb,
})