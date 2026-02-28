import * as _pi from 'pareto-core/dist/interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/liana/schemas/schema/data/unresolved"

import { $ as x_astn_location } from "../astn-core/schemas/location/$.module.astn"
import { $ as x_astn_parse_tree } from "../astn-core/schemas/parse_tree/$.module.astn"
import { $ as x_astn_schema } from "../astn/schemas/astn_schema/$.module.astn"
import { $ as x_astn_token } from "../astn-core/schemas/token/$.module.astn"
import { $ as x_load_document } from "./schemas/load_document/$.module.astn"
import { $ as x_number_types } from "./schemas/number_types/$.module.astn"
import { $ as x_schema } from "./schemas/schema/$.module.astn"
import { $ as x_unmarshall_errors } from "./schemas/unmarshall_errors/$.module.astn"


export const $: g_.Schema_Tree = st.set({
    "astn schema": x_astn_schema,
    "load dcocument": x_load_document,
    "location": x_astn_location,
    "number types": x_number_types,
    "parse tree": x_astn_parse_tree,
    "schema": x_schema,
    "token": x_astn_token,
    "unmarshall errors": x_unmarshall_errors
})