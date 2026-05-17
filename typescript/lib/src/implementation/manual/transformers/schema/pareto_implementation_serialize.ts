import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

export const Schema = (
    $: d_in.Schema,
    $p: {
        'depth': number,
        'path': _pi.List<string>,
    }
): d_out.Package_Set.D => {
    const constrained = $.complexity[0] === 'constrained'

    return sh.m.package_(
        [],
        _p.dictionary.literal({
            "signatures": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                _p.list.nested_literal_old([
                    _p.list.literal([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    _p.list.literal([
                        "signatures"
                    ]),
                    constrained
                        ? _p.list.literal([
                            "resolved"
                        ])
                        : _p.list.literal([
                        ]),
                    _p.list.literal([
                        "transformers",
                        "fountain pen",
                    ])
                ])
            ),
        }),
        _p.dictionary.literal({
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
            "marshall": sh_i.import_.sibling("astn sealed target", _p.list.nested_literal_old([
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
