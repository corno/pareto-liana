import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

namespace interface_ {

    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Package_Set.D,
        {
            'depth': number,
            'path': p_di.List<string>,
        }
    >

}

//shorthands
import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

export const Schema: interface_.Schema = ($, $p) => {
    const constrained = $.complexity[0] === 'constrained'

    return sh.m.package_(
        [],
        p_.literal.dictionary({
            "signatures": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                p_.literal.nested_list([
                    p_.literal.list([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    p_.literal.list([
                        "signatures"
                    ]),
                    constrained
                        ? p_.literal.list([
                            "resolved"
                        ])
                        : p_.literal.list([
                        ]),
                    p_.literal.list([
                        "transformers",
                        "fountain pen",
                    ])
                ])
            ),
        }),
        p_.literal.dictionary({
            "serialize": sh_i.import_.external(
                "astn-core",
                [
                    "dist",
                    "implementation",
                    "manual",
                    "transformers",
                    "sealed target",
                    "fountain pen",
                ],
            ),
            "marshall": sh_i.import_.sibling("astn sealed target", p_.literal.list([
            ])),
        }),
        $.modules.__d_map_deprecated(($, id) => sh.algorithm(
            "signatures",
            id,
            [],
            sh.a.select(
                sh.sv.call(
                    sh.call.external("serialize", "Document"),
                    sh.a.select(
                        sh.sv.call(
                            sh.call.external("marshall", id),
                            sh.a.select(sh.sv.context([])),
                            null,
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        )
                    ),
                    null,
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                )
            )
        )),
    )
}
