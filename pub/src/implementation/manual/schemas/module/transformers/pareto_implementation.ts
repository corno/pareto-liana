import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import * as _psh from 'pareto-core-shorthands/dist/unresolved_data'

import * as d_in from "../../../../../interface/generated/liana/schemas/module/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as t_pareto_implementation_main from "../../../../manual/schemas/schema/transformers/pareto_implementation_main"


export const Module = ($: d_in.Module): d_out.Module_Set => {
    return _p.dictionary.literal<d_out.Module_Set.D>({
        'schemas': t_pareto_implementation_main.Schema_Tree(
            $['schema tree'],
            {
                'path': _p.list.literal([]),
                'omit (de)serializer': $['omit (de)serializer'],
            }
        )
    })
}