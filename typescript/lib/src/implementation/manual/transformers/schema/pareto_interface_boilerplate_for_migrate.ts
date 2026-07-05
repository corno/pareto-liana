import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved.js"
import * as d_out from "pareto/interface/generated/liana/schemas/interface/data/resolved"

namespace interface_ {

    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Package_Set.D,
        {
            'constrained': boolean
        }
    >

}

//shorthands
import * as sh from "pareto/shorthands/interface/target"


export const Schema: interface_.Schema = ($, $p) => sh.m.package_functions(
    p_.literal.dictionary({
        "out": sh.import_.ancestor(
            $p.constrained ? 3 : 2,
            "data",
            $p.constrained
                ? p_.literal.list([
                    "unresolved",
                ])
                : p_.literal.list([]),
        ),
        "in": sh.import_.ancestor(
            $p.constrained ? 3 : 2,
            "data",
            $p.constrained
                ? p_.literal.list([
                    "resolved",
                ])
                : p_.literal.list([]),
        )
    }),
    p_.from.dictionary($.modules).map(
        ($, id) => sh.type.transformer(
            sh.t.component_imported(
                "in",
                id,
            ),
            sh.t.component_imported(
                "out",
                id,
            ),
            null
        )
    ),
)
