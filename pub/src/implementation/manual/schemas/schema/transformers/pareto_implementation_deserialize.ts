import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'
import { _p_unreachable_code_path } from 'pareto-core/dist/unreachable_code_path'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "../../../../temp_flatten_dictionary"

export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports,
    }
): d_out.Package_Set.D => {
    return sh.m.package_(
        'deserializer',
        [],
        _p.dictionary.literal({
            "signatures": sh_i.import_.ancestor(
                5,
                "interface",
                _p.list.nested_literal_old([
                    _p.list.literal([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    _p.list.literal([
                        "deserialize"
                    ])
                ])
            ),
        }),
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "deserialize": sh_i.import_.external(
                        "astn-core",
                        [
                            "dist",
                            "implementation",
                            "manual",
                            "schemas",
                            "parse tree",
                            "deserializers",
                        ],
                    ),
                    "unmarshall": sh_i.import_.sibling("unmarshall", _p.list.nested_literal_old([
                    ])),
                }),
                "r ": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child']['l id'], ["deserialize"]))
            }),
            {
                'separator': "",
            },
            () => _p_unreachable_code_path(),
        ),
        $.modules.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            true,
            false,
            true,
            sh.e.select(sh.s.call(
                sh.call.external("unmarshall", id),
                sh.e.select(
                    sh.s.call(
                        sh.call.external("deserialize", "Document"),
                        sh.e.select(sh.s.context([])),
                        sh.e.state.literal("tbd", sh.e.nothing()),
                        sh.lookups.not_set(),
                        sh.arguments_.initialize({
                            "document resource identifier": sh.e.text.copy(sh.s.parameter("document resource identifier", [])),
                            "tab size": sh.e.number.integer_copy(sh.s.parameter("tab size", []))
                        }),
                        ["content"]
                    )
                ),
                sh.e.state.literal("tbd", sh.e.nothing()),
                sh.lookups.not_set(),
                sh.arguments_.not_set(),
                []
            ))
        )),
    )
}