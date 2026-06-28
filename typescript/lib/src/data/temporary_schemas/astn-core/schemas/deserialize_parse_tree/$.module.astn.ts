



import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "parse tree": sh.schema_import_("parse tree"),
        "token": sh.schema_import_("token"),
        "location": sh.schema_import_("location"),
    },
    {
        // "parse tree": resolver_import_("parse tree"),
        // "token": resolver_import_("token"),
        // "location": resolver_import_("location"),
    },
    globals,
    schema,
    null,
)