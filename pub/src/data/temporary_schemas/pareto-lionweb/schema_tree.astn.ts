import * as _pi from 'pareto-core/dist/interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/liana/schemas/schema/data/unresolved"

import { $ as x_generic } from "./schemas/generic/$.module.astn"
import { $ as x_lioncore } from "./schemas/lioncore/$.module.astn"
import { $ as x_location } from "../astn-core/schemas/location/$.module.astn"
import { $ as x_serialization_chunk } from "./schemas/serialization_chunk/$.module.astn"
import { $ as x_serialization_tree } from "./schemas/serialization_tree/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "generic": x_generic,
    "lioncore": x_lioncore,
    "location": x_location,
    "serialization chunk": x_serialization_chunk,
    "serialization tree": x_serialization_tree,
})