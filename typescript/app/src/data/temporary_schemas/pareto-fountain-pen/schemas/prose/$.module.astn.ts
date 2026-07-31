import * as sh from "lib/schemas/schema/shorthands/manual"

import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "list of characters": sh.schema_import_("list of characters"),
    },
    {},
    globals,
    schema,
    null,
)