import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import * as _pdev from 'pareto-core-dev'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "../../../temp_flatten_dictionary"

export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'depth': number,
    }
): d_out.Package_Set.D => {
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
                        "deserialize",
                    ])
                ])
            ),
        }),
        _p.dictionary.literal({
            "deserialize": sh_i.import_.ancestor(
                2,
                "unresolved",
                _p.list.literal([
                    "refiners",
                    "list of characters",
                ])),
            "resolve": sh_i.import_.sibling("unresolved", _p.list.nested_literal_old([
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
                            "document resource identifier": sh.a.text.copy(sh.sv.parameter("document resource identifier", [])),
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