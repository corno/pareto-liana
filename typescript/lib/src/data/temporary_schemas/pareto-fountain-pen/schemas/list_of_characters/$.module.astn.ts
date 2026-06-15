import * as sh from "../../../../../shorthands/schema"

import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {}, {},
    globals,
    schema,
    null,
)