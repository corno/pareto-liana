import * as p_di from 'pareto-core/dist/data/interface'
import * as pt from 'pareto-core/dist/assign'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': p_di.List<string>,
        'depth': number,
    }
): d_out.Package_Set.D => {
    return sh.m.package_(
        [],
        pt.dictionary.literal({
            "signatures": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                pt.list.nested_literal_old([
                    pt.list.literal([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    pt.list.literal([
                        "deserialize",
                    ])
                ])
            ),
        }),
        pt.dictionary.literal({
            "deserialize": sh_i.import_.ancestor(
                2,
                "unresolved",
                pt.list.literal([
                    "refiners",
                    "list of characters",
                ])),
            "resolve": sh_i.import_.sibling("unresolved", pt.list.nested_literal_old([
            ])),
        }),
        $.modules.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            ['abort', 'lookups', 'parameters'],
            sh.a.select(sh.sv.call(
                sh.call.external("resolve", id),
                sh.a.select(
                    sh.sv.call(
                        sh.call.external("deserialize", id),
                        sh.a.select(sh.sv.context([])),
                        sh.a.state.literal("tbd", sh.a.nothing()),
                        sh.lookups.not_set(),
                        sh.arguments_.initialize({
                            "tab size": sh.a.number.integer_copy(sh.sv.parameter("tab size", []))
                        }),
                        []
                    )
                ),
                sh.a.state.literal("tbd", sh.a.nothing()),
                sh.lookups.pass_through(),
                sh.arguments_.pass_through(),
                []
            ))
        )),
    )
}