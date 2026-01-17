import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { $ as x_client } from "./schemas/client/$.module.astn"
import { $ as x_server } from "./schemas/server/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "client": x_client,
    "server": x_server,
})