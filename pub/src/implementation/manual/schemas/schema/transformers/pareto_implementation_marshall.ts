import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/expression'
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
        'path': _pi.List<string>,
        'depth': number
    }
): d_out.Package_Set.D => {
    const constrained = $.complexity[0] === 'constrained'

    return sh.m.package_(
        ['change context', 'text from list'],
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
                    _p.list.literal(["marshall"])
                ])
            ),
            "out": sh_i.import_.external(
                "astn-core",
                [
                    "dist",
                    "interface",
                    "generated",
                    "liana",
                    "schemas",
                    "sealed target",
                    "data",
                ],
            ),

        }),
        op_flatten_dictionary(
            _p.dictionary.literal({
                "serialize": _p.dictionary.literal({
                    "number": sh_i.import_.external(
                        "liana-core",
                        _p.list.literal([
                            "dist",
                            "implementation",
                            "manual",
                            "primitives",
                            "integer",
                            "serializers",
                            "decimal",
                        ]),
                    ),
                    "boolean": sh_i.import_.external(
                        "liana-core",
                        _p.list.literal([
                            "dist",
                            "implementation",
                            "manual",
                            "primitives",
                            "boolean",
                            "serializers",
                            "true false",
                        ]),
                    ),
                }),
                "external": $.imports.__d_map(($, id) => constrained
                    ? sh_i.import_.ancestor(3, $['schema set child']['l id'], ["resolved", "transformers", "astn sealed target"])
                    : sh_i.import_.ancestor(2, $['schema set child']['l id'], ["transformers", "astn sealed target"])
                ),
            }),
            {
                'separator': " ",
            },
            () => _p_unreachable_code_path(),
        ),
        $.modules.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            [],
            Value(
                $['root value'],
                {
                    'type': id,
                    'subselection': _p.list.literal([])
                }
            ),
        )),
    )
}

export const Value = (
    $: d_in.Value,
    $p: {
        'type': string
        'subselection': _pi.List<d_out.Temp_Value_Type_Specification.sub_selection.L>
    },
): d_out.Assign => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => sh.a.state.literal(
            "text",
            sh.a.group.literal({
                "delimiter": sh.a.state.literal("none", sh.a.nothing()),
                "value": sh.a.select(
                    sh.sv.text_from_list(
                        sh.sv.call(
                            sh.call.external("serialize boolean", "serialize"),
                            sh.a.select(sh.sv.context([])),
                            null,
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        ),
                        sh.a.select(sh.sv.context([])),
                        []
                    )
                ),
            })
        ))
        case 'component': return _p.ss($, ($) => sh.a.select(
            sh.sv.call(
                _p.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => sh.call.external(`external ${$.import['l id']}`, $.module['l id']))
                        case 'internal acyclic': return _p.ss($, ($) => sh.call.local($['l id']))
                        case 'internal': return _p.ss($, ($) => sh.call.local($['l id']))
                        default: return _p.au($[0])
                    }
                }),
                sh.a.select(sh.sv.context(_p.boolean.optional_is_set($.results) ? ["l value"] : [])),
                null,
                sh.lookups.not_set(),
                sh.arguments_.not_set(),
                [],
            )
        ))
        case 'dictionary': return _p.ss($, ($) => sh.a.state.literal(
            "dictionary",
            sh.a.dictionary.map(
                sh.sv.context([]),
                Value(
                    $.value,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal_old([
                            $p.subselection,
                            [
                                sh.sub.dictionary(),
                            ]
                        ]),
                    }
                )
            )
        ))
        case 'group': return _p.ss($, ($) => sh.a.state.literal(
            "group",
            sh.a.state.literal(
                "verbose",
                sh.a.dictionary.literal($.__d_map(($, id) => sh.a.change_context(
                    sh.sv.context([id]),
                    Value(
                        $.value,
                        {
                            'type': $p.type,
                            'subselection': _p.list.nested_literal_old([
                                $p.subselection,
                                [
                                    sh.sub.group(id),
                                ]
                            ]),
                        }
                    )
                )))
            )
        ))
        case 'list': return _p.ss($, ($) => {

            const x = Value(
                $.value,
                {
                    'type': $p.type,
                    'subselection': _p.list.nested_literal_old([
                        $p.subselection,
                        [
                            sh.sub.list(),
                        ]
                    ]),
                }
            )

            return sh.a.state.literal(
                "list",
                sh.a.list.map(
                    sh.sv.context(_p.boolean.optional_is_set($.results) ? ["l value"] : []),
                    $.results.__decide(
                        ($) => sh.a.change_context(
                            sh.sv.context(["l item"]),
                            x,
                        ),
                        () => x
                    )
                )
            )
        })
        case 'nothing': return _p.ss($, ($) => sh.a.state.literal("nothing", sh.a.nothing()))
        case 'number': return _p.ss($, ($) => sh.a.state.literal(
            "text",
            sh.a.group.literal({
                "delimiter": sh.a.state.literal("none", sh.a.nothing()),
                "value": sh.a.select(
                    sh.sv.text_from_list(
                        sh.sv.call(
                            sh.call.external("serialize number", "serialize"),
                            sh.a.select(sh.sv.context([])),
                            null,
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        ),
                        sh.a.select(sh.sv.context([])),
                        []
                    )
                ),
            })
        ))
        case 'optional': return _p.ss($, ($) => sh.a.state.literal(
            "optional",
            sh.a.decide.optional(
                sh.sv.context([]),
                sh.a.state.literal(
                    "set",
                    Value(
                        $,
                        {
                            'type': $p.type,
                            'subselection': _p.list.nested_literal_old([
                                $p.subselection,
                                [
                                    sh.sub.optional(),
                                ]
                            ]),
                        }
                    ),
                ),
                sh.a.state.literal(
                    "not set",
                    sh.a.nothing()
                ),
                sh.type_node_reference(
                    "out",
                    "Value",
                    [sh.sub.state("optional")]
                ),
            )))
        case 'reference': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'derived': return _p.ss($, ($) => sh.a.state.literal("nothing", sh.a.nothing()))
                case 'selected': return _p.ss($, ($) => sh.a.state.literal("text", sh.a.group.literal({
                    "delimiter": sh.a.state.literal("backtick", sh.a.nothing()),
                    "value": sh.a.text.copy(sh.sv.context(["l id"])),
                })))
                default: return _p.au($[0])
            }
        }))
        case 'state': return _p.ss($, ($) => sh.a.state.literal(
            "state",
            sh.a.decide.state(
                sh.sv.context(_p.boolean.optional_is_set($.results) ? ["l value"] : []),
                $.options.__d_map(($, id) => sh.a.group.literal({
                    "option": sh.a.text.literal(id, 'identifier'),
                    "value": Value(
                        $.value,
                        {
                            'type': $p.type,
                            'subselection': _p.list.nested_literal_old([
                                $p.subselection,
                                [
                                    sh.sub.state(id),
                                ]
                            ]),
                        }
                    )
                })),
                sh.type_node_reference(
                    "out",
                    "Value",
                    [sh.sub.state("state")]
                ),
            )
        ))
        case 'text': return _p.ss($, ($) => sh.a.state.literal(
            "text",
            sh.a.group.literal({
                "delimiter": sh.a.state.literal("quote", sh.a.nothing()),
                "value": sh.a.text.copy(sh.sv.context([])),
            })
        ))
        default: return _p.au($[0])
    }
})