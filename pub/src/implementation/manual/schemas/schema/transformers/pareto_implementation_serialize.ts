import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'

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
        'constrained': boolean
    }
): d_out.Module_Set.D => {
    return sh.m.module(
        'serializer',
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
                        "serialize"
                    ])
                ])
            ),
        }),
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "serialize": sh_i.import_.external(
                        "astn-core",
                        [
                            "dist",
                            "implementation",
                            "manual",
                            "schemas",
                            "sealed target",
                            "serializers",
                        ],
                    ),
                    "marshall": sh_i.import_.sibling("marshall", _p.list.nested_literal_old([
                    ])),
                }),
                "r ": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child'].id, ["serialize"]))
            }),
            {
                'separator': "",
            },
            () => _p.unreachable_code_path(),
        ),
        $.types.__d_map(($, id) => sh.algorithm(
            sh.type_reference("signatures", id),
            false,
            false,
            false,
            sh.e.call(
                sh.s.from_variable_import("serialize", "Document", []),
                sh.e.call(
                    sh.s.from_variable_import("marshall", id, []),
                    sh.e.select_from_context_deprecated([]),
                    false,
                    {}
                ),
                false,
                {}
            )
        )),
    )
}
