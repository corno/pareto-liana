import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import * as _pdev from 'pareto-core-dev'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "../../../../temp_flatten_dictionary"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'depth': number,
        'path': _pi.List<string>,
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
                        "serialize"
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
                    "schemas",
                    "sealed target",
                    "transformers",
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
