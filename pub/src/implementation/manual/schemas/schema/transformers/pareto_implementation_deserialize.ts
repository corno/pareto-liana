import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "../../../../temp_flatten_dictionary"

export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports,
    }
): d_out.Module_Set.D => {
    return sh.m.module(
        'deserializer',
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
                "r ": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child'].key, ["deserialize"]))
            }),
            {
                'separator': "",
            },
            () => _p.unreachable_code_path(),
        ),
        $.types.__d_map(($, id) => sh.algorithm(
            sh.type_reference("signatures", id),
            true,
            false,
            false,
            sh.e.call(
                sh.s.from_variable_import("unmarshall", id, []),
                sh.e.call(
                    sh.s.from_variable_import("deserialize", "Document", []),
                    sh.e.select_from_context_deprecated([]),
                    false,

                ),
                false,
                {
                    "uri": sh.e.text_literal("FIXME URI", 'freeform'),
                    "indentation": sh.e.integer(4)
                }
            )
        )),
    )
}