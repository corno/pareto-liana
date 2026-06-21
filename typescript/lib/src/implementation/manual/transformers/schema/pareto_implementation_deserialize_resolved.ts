import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

export namespace interface_ {

    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Package_Set.D,
        {
            'path': p_di.List<string>,
            'depth': number,
        }
    >

}

//shorthands
import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

export const Schema: interface_.Schema = ($, $p) => {
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
                        "deserialize",
                    ])
                ])
            ),
        }),
        p_.literal.dictionary({
            "deserialize": sh_i.import_.ancestor(
                2,
                "unresolved",
                p_.literal.list([
                    "refiners",
                    "list of characters",
                ])),
            "resolve": sh_i.import_.sibling("unresolved", p_.literal.list([
            ])),
        }),
        $.modules.__d_map_deprecated(($, id) => sh.algorithm(
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