import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'depth': number,
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
                            "unresolved"
                        ])
                        : _p.list.literal([
                        ]),
                    _p.list.literal([
                        "refiners",
                        "list of characters",
                    ])
                ])
            ),
        }),
        _p.dictionary.literal({
            "deserialize": sh_i.import_.external(
                "astn-core",
                [
                    "dist",
                    "implementation",
                    "manual",
                    "refiners",
                    "parse tree",
                    "list of characters",
                ],
            ),
            "unmarshall": sh_i.import_.sibling("astn parse tree", _p.list.nested_literal_old([
            ])),
        }),
        $.modules.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            ['abort', 'parameters'],
            sh.a.select(sh.sv.call(
                sh.call.external("unmarshall", id),
                sh.a.select(
                    sh.sv.call(
                        sh.call.external("deserialize", "Document"),
                        sh.a.select(sh.sv.context([])),
                        sh.a.state.literal("parse error", sh.a.select(sh.sv.context([]))),
                        sh.lookups.not_set(),
                        sh.arguments_.initialize({
                            "tab size": sh.a.number.integer_copy(sh.sv.parameter("tab size", []))
                        }),
                        ["content"]
                    )
                ),
                sh.a.state.literal("unmarshall error", sh.a.select(sh.sv.context([]))),
                sh.lookups.not_set(),
                sh.arguments_.not_set(),
                []
            ))
        )),
    )
}