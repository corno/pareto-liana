import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

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
import * as sh from "pareto/dist/shorthands/interface"


export const Schema: interface_.Schema = ($, $p) => sh.m.package_functions(
    {
        "generic": sh.import_.external(
            "liana-core",
            [
                "dist",
                "interface",
                "to be generated",
                "deserialize",
            ],
        ),
        "in": sh.import_.external(
            "pareto-fountain-pen",
            [
                "dist",
                "interface",
                "to be generated",
                "list of characters",
            ],
        ),
        "out": sh.import_.ancestor(
            $p.constrained ? 3 : 2,
            "data",
            $p.constrained
                ? [
                    "resolved",
                ]
                : [],
        ),
    },
    $.modules.__d_map(($, id) => sh.type.refiner(
        sh.t.component_imported(
            "in",
            "List of Characters",
        ),
        sh.t.component_imported(
            "out",
            id,
        ),
        sh.t.component_imported("generic", "Error"),
        null,
        {
            "tab size": sh.t.natural(),
        },
    )),
)
