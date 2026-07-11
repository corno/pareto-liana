import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as s_in from "../../../modules/schema/interface/schemas/resolved.js"
import type * as s_out from "pareto/modules/implementation/interface/data/resolved"

namespace interface_ {

    export type Package = p_i.Transformer<
        s_in.Package,
        s_out.Package_Set
    >

}

//dependencies
import * as t_pareto_implementation_main from "./pareto_implementation_main.js"


export const Package: interface_.Package = ($) => {
    return p_.literal.dictionary<s_out.Package_Set.D>({
        'schemas': t_pareto_implementation_main.Schema_Tree(
            $['schema tree'],
            {
                'path': p_.literal.list([]),
                'omit (de)serializer': $['omit (de)serializer'],
            }
        )
    })
}