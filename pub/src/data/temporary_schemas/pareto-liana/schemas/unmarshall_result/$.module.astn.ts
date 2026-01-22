import * as _pi from 'pareto-core/dist/interface'

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

import { schema_, constrained, import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $: g_.Schemas.dictionary.D.entry = schema_(
    {
        "schema": import_("schema"),
        "parse tree": import_("parse tree"),
        "token": import_("token"),
    },
    globals,
    schema,
    null,
)