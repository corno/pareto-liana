import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../../declarations/transformers/schema/pareto_implementation_deserialize_resolved.js"

//shorthands
import * as sh from "pareto/shorthands/implementation/target"
import * as sh_i from "pareto/shorthands/interface/target"

export const Schema: interface_.Schema = ($,
    $p) => {
    return sh.m.package_(
        p_.literal.list([]),
        p_.literal.dictionary({
            "signatures": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                p_.literal.segmented_list([
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
            "resolve": sh_i.import_.sibling(
                "unresolved",
                p_.literal.list([])
            ),
        }),
        p_.from.dictionary($.modules).map(
            ($,
                id) => sh.algorithm(
                    "signatures",
                    id,
                    p_.literal.list(['abort',
                        'lookups',
                        'parameters']),
                    sh.a.select(
                        sh.sv.call(
                            sh.call.external(
                                "resolve",
                                id
                            ),
                            sh.a.select(
                                sh.sv.call(
                                    sh.call.external(
                                        "deserialize",
                                        id
                                    ),
                                    sh.a.select(
                                        sh.sv.context(
                                            p_.literal.list([])
                                        )),
                                    sh.a.state.literal(
                                        "tbd",
                                        sh.a.nothing()),
                                    sh.lookups.not_set(),
                                    sh.arguments_.initialize(
                                        p_.literal.dictionary({
                                            "tab size": sh.a.number.integer_copy(
                                                sh.sv.parameter(
                                                    "tab size",
                                                    p_.literal.list([])
                                                ))
                                        }),
                                    ),
                                    p_.literal.list([])
                                )
                            ),
                            sh.a.state.literal(
                                "tbd",
                                sh.a.nothing()
                            ),
                            sh.lookups.pass_through(),
                            sh.arguments_.pass_through(),
                            p_.literal.list([])
                        ))
                )),
    )
}