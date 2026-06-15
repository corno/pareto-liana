import * as p_di from 'pareto-core/dist/interface/data'
import * as pt from 'pareto-core/dist/implementation/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

export const Schema = (
    $: d_in.Schema,
    $p: {
        'depth': number,
        'path': p_di.List<string>,
    }
): d_out.Package_Set.D => {
    const constrained = $.complexity[0] === 'constrained'

    return sh.m.package_(
        [],
        pt.literal.dictionary({
            "signatures": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                pt.literal.nested_list([
                    pt.literal.list([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    pt.literal.list([
                        "signatures"
                    ]),
                    constrained
                        ? pt.literal.list([
                            "resolved"
                        ])
                        : pt.literal.list([
                        ]),
                    pt.literal.list([
                        "transformers",
                        "fountain pen",
                    ])
                ])
            ),
        }),
        pt.literal.dictionary({
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
            "marshall": sh_i.import_.sibling("astn sealed target", pt.literal.nested_list([
            ])),
        }),
        $.modules.__d_map(($, id) => sh.algorithm(
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
