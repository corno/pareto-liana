import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../submodules/schema/interface/schemas/resolved.js"
import type * as s_out from "pareto/modules/interface/interface/data/resolved"

namespace interface_ {

    export type Schema = p_i.Transformer_With_Parameter<
        s_in.Schema,
        s_out.Package_Set.D,
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
