



import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"
import { $ as signatures } from "./$.signatures.astn"
import { $ as resolver } from "./$.resolvers.astn"

export const $ = sh.schema_(
    {
        "interface": sh.schema_import_("interface"),
    },
    {
        "interface": sh.resolver_import_("interface"),
    },
    globals,
    schema,
    sh.constrained(
        signatures,
        resolver,
    ),
)