import * as p_di from 'pareto-core/dist/data/interface'

import * as sh from "../../../shorthands/schema"


import { $ as x_generic } from "./schemas/generic/$.module.astn"
import { $ as x_lioncore } from "./schemas/lioncore/$.module.astn"
import { $ as x_location } from "../astn-core/schemas/location/$.module.astn"
import { $ as x_serialization_chunk } from "./schemas/serialization_chunk/$.module.astn"
import { $ as x_serialization_tree } from "./schemas/serialization_tree/$.module.astn"

export const $ = sh.st.set({
    "generic": x_generic,
    "lioncore": x_lioncore,
    "location": x_location,
    "serialization chunk": x_serialization_chunk,
    "serialization tree": x_serialization_tree,
})