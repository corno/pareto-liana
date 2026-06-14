import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'
import * as _psh from 'pareto-core-shorthands/dist/unresolved_data'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as t_pareto_implementation_main from "./pareto_implementation_main"


export const Package = ($: d_in.Package): d_out.Package_Set => {
    return pt.dictionary.literal<d_out.Package_Set.D>({
        'schemas': t_pareto_implementation_main.Schema_Tree(
            $['schema tree'],
            {
                'path': pt.list.literal([]),
                'omit (de)serializer': $['omit (de)serializer'],
            }
        )
    })
}