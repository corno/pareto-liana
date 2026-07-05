

import * as sh from "../../../shorthands/schema/manual.js"


import { $ as x_generic } from "./schemas/generic/$.module.astn.js"
import { $ as x_lioncore } from "./schemas/lioncore/$.module.astn.js"
import { $ as x_location } from "../astn-core/schemas/location/$.module.astn.js"
import { $ as x_serialization_chunk } from "./schemas/serialization_chunk/$.module.astn.js"
import { $ as x_serialization_tree } from "./schemas/serialization_tree/$.module.astn.js"

export const $ = sh.st.set({
    "generic": x_generic,
    "lioncore": x_lioncore,
    "location": x_location,
    "serialization chunk": x_serialization_chunk,
    "serialization tree": x_serialization_tree,
})