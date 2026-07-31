



import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"
import { $ as signatures } from "./$.signatures.astn.js"
import { $ as resolver } from "./$.resolvers.astn.js"

export const $ = sh.schema_(
    {}, {},
    globals,
    schema,
    sh.constrained(
        signatures,
        resolver,
    ),
)