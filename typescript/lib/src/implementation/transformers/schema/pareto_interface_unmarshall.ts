import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../modules/schema/interface/data/resolved.js"
import type * as d_out from "pareto/interface/generated/liana/schemas/interface/data/resolved"

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


export const Schema: interface_.Schema = ($, $p) => {
    return sh.m.package_functions(
        p_.literal.dictionary({
            "generic": sh.import_.external(
                "liana-core",
                p_.literal.list([
                    "dist",
                    "interface",
                    "to be generated",
                    "unmarshall",
                ]),
            ),
            "out": sh.import_.ancestor(
                $p.constrained ? 3 : 2,
                "data",
                $p.constrained
                    ? p_.literal.list([
                        "unresolved",
                    ])
                    : p_.literal.list([]),
            ),
            "in": sh.import_.external(
                "astn-core",
                p_.literal.list([
                    "dist",
                    "interface",
                    "generated",
                    "liana",
                    "schemas",
                    "parse tree",
                    "data",
                ]),
            ),
        }),
        p_.from.dictionary($.modules).map(
            ($, id) => sh.type.refiner(
                sh.t.component_imported(
                    "in",
                    "Value",
                ),
                sh.t.component_imported(
                    "out",
                    id,
                ),
                sh.t.component_imported("generic", "Error"),
                null,
                null,
            )),
    )
}
