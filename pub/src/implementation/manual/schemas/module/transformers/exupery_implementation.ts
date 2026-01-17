import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _psh from 'pareto-core-internals/dist/algorithm_types/transformer/deprecated_shorthands_for_unresolved'

import * as d_in from "../../../../../interface/generated/pareto/schemas/module/data/resolved"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data/resolved"

import * as t_exupery_implementation_main from "../../../../manual/schemas/schema/transformers/exupery_implementation_main"


export const Module = ($: d_in.Module): d_out.Module_Set => {
    return _p.dictionary.literal<d_out.Module_Set.D>({
        'schemas': t_exupery_implementation_main.Schema_Tree(
            $['schema tree'],
            {
                'path': _p.list.literal([]),
            }
        )
    })
}