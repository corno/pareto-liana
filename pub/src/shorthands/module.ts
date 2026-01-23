import * as _p from 'pareto-core-shorthands/dist/unresolved_data'
import * as _pi from 'pareto-core/dist/interface'

import * as unresolved from "../interface/generated/liana/schemas/module/data/unresolved"

import * as unresolved_schema from "../interface/generated/liana/schemas/schema/data/unresolved"

export const module_ = (
    schema_tree: unresolved_schema.Schema_Tree,
    omit_de_serializer?: boolean,
): unresolved.Module => ({
    'omit (de)serializer': omit_de_serializer === undefined ? false : omit_de_serializer,
    'schema tree': schema_tree,
})
