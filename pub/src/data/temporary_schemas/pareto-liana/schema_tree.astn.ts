import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { $ as x_module } from "./schemas/module/$.module.astn"
import { $ as x_schema } from "./schemas/schema/$.module.astn"
import { $ as x_unmarshall_errors } from "./schemas/unmarshall_errors/$.module.astn"
import { $ as x_unmarshall_result } from "./schemas/unmarshall_result/$.module.astn"
import { $ as x_astn_schema } from "../astn/schemas/astn_schema/$.module.astn"
import { $ as x_astn_parse_tree } from "../astn-core/schemas/parse_tree/$.module.astn"
import { $ as x_astn_token } from "../astn-core/schemas/token/$.module.astn"


export const $: g_.Schema_Tree = st.set({
    "parse tree": x_astn_parse_tree,
    "token": x_astn_token,
    "astn schema": x_astn_schema,
    "module": x_module,
    "schema": x_schema,
    "unmarshall result": x_unmarshall_result,
    "unmarshall errors": x_unmarshall_errors
})