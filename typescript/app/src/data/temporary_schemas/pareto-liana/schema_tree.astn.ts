

import * as sh from "lib/shorthands/schema/manual"


import { $ as x_astn_location } from "../astn-core/schemas/location/$.module.astn.js"
import { $ as x_astn_schema } from "../astn/schemas/astn_schema/$.module.astn.js"
import { $ as x_schema } from "./schemas/schema/$.module.astn.js"


export const $ = sh.st.set({
    "astn schema": x_astn_schema,
    "location": x_astn_location,
    "schema": x_schema,
})