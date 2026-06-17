import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

namespace interface_ {

    export type Package = p_i.Transformer<
        d_in.Package,
        d_out.Package_Set
    >

}

//dependencies
import * as t_pareto_implementation_main from "./pareto_implementation_main"


export const Package: interface_.Package = ($) => {
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