import * as sh from "../../../../../shorthands/schema"

import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "list of characters": sh.schema_import_("list of characters"),
    },
    {},
    globals,
    schema,
    null,
)