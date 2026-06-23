

import * as sh from "../../../shorthands/schema/manual"


import { $ as x_astn_location } from "../astn-core/schemas/location/$.module.astn"
import { $ as x_astn_schema } from "../astn/schemas/astn_schema/$.module.astn"
import { $ as x_schema } from "./schemas/schema/$.module.astn"


export const $ = sh.st.set({
    "astn schema": x_astn_schema,
    "location": x_astn_location,
    "schema": x_schema,
})