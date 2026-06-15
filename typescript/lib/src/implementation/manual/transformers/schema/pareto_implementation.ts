import * as p_ from 'pareto-core/dist/implementation/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as t_pareto_implementation_main from "./pareto_implementation_main"


export const Package = ($: d_in.Package): d_out.Package_Set => {
    return p_.literal.dictionary<d_out.Package_Set.D>({
        'schemas': t_pareto_implementation_main.Schema_Tree(
            $['schema tree'],
            {
                'path': p_.literal.list([]),
                'omit (de)serializer': $['omit (de)serializer'],
            }
        )
    })
}