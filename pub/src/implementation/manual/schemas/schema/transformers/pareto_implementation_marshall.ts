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
        'constrained': boolean
    }
): d_out.Package_Set.D => sh.m.package_(
    'transformer',
    ['change context'],
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
            "external": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child']['l id'], ["marshall"]))
        }),
        {
            'separator': " ",
        },
        () => _p_unreachable_code_path(),
    ),
    $.modules.__d_map(($, id) => sh.algorithm(
        "signatures",
        id,
        false,
        false,
        false,
        Value(
            $['root value'],
            {
                'type': id,
                'subselection': _p.list.literal([])
            }
        ),
    )),
)

export const Value = (
    $: d_in.Value,
    $p: {
        'type': string
        'subselection': _pi.List<d_out.Temp_Type_Node_Reference.sub_selection.L>
    },
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => sh.e.state.literal(
            "text",
            sh.e.group.literal({
                "delimiter": sh.e.state.literal("none", sh.e.nothing()),
                "value": sh.e.select(
                    sh.s.call(
                        sh.call.external("serialize boolean", "serialize"),
                        sh.e.select(sh.s.context([])),
                        null,
                        sh.lookups.not_set(),
                        sh.arguments_.not_set(),
                        [],
                    )),
            })
        ))
        case 'component': return _p.ss($, ($) => sh.e.select(
            sh.s.call(
                _p.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => sh.call.external(`external ${$.import['l id']}`, $.module['l id']))
                        case 'internal acyclic': return _p.ss($, ($) => sh.call.local($['l id']))
                        case 'internal': return _p.ss($, ($) => sh.call.local($['l id']))
                        default: return _p.au($[0])
                    }
                }),
                sh.e.select(sh.s.context(_p.boolean.optional_is_set($.results) ? ["l value"] : [])),
                null,
                sh.lookups.not_set(),
                sh.arguments_.not_set(),
                [],
            )
        ))
        case 'dictionary': return _p.ss($, ($) => sh.e.state.literal(
            "dictionary",
            sh.e.dictionary.map(
                sh.s.context([]),
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
        case 'group': return _p.ss($, ($) => sh.e.state.literal(
            "group",
            sh.e.state.literal(
                "verbose",
                sh.e.dictionary.literal($.__d_map(($, id) => sh.e.change_context(
                    sh.s.context([id]),
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

            return sh.e.state.literal(
                "list",
                sh.e.list.map(
                    sh.s.context(_p.boolean.optional_is_set($.results) ? ["l value"] : []),
                    $.results.__decide(
                        ($) => sh.e.change_context(
                            sh.s.context(["l item"]),
                            x,
                        ),
                        () => x
                    )
                )
            )
        })
        case 'nothing': return _p.ss($, ($) => sh.e.state.literal("nothing", sh.e.nothing()))
        case 'number': return _p.ss($, ($) => sh.e.state.literal(
            "text",
            sh.e.group.literal({
                "delimiter": sh.e.state.literal("none", sh.e.nothing()),
                "value": sh.e.select(
                    sh.s.call(
                        sh.call.external("serialize number", "serialize"),
                        sh.e.select(sh.s.context([])),
                        null,
                        sh.lookups.not_set(),
                        sh.arguments_.not_set(),
                        [],
                    )
                )
            })
        ))
        case 'optional': return _p.ss($, ($) => sh.e.state.literal(
            "optional",
            sh.e.decide.optional(
                sh.s.context([]),
                sh.e.state.literal(
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
                sh.e.state.literal(
                    "not set",
                    sh.e.nothing()
                ),
                sh.type_node_reference(
                    "out",
                    "Value",
                    [sh.sub.state("optional")]
                ),
            )))
        case 'reference': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'derived': return _p.ss($, ($) => sh.e.state.literal("nothing", sh.e.nothing()))
                case 'selected': return _p.ss($, ($) => sh.e.state.literal("text", sh.e.group.literal({
                    "delimiter": sh.e.state.literal("backtick", sh.e.nothing()),
                    "value": sh.e.text.copy(sh.s.context(["l id"])),
                })))
                default: return _p.au($[0])
            }
        }))
        case 'state': return _p.ss($, ($) => sh.e.state.literal(
            "state",
            sh.e.decide.state(
                sh.s.context(_p.boolean.optional_is_set($.results) ? ["l value"] : []),
                $.options.__d_map(($, id) => sh.e.group.literal({
                    "option": sh.e.text.literal(id, 'identifier'),
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
        case 'text': return _p.ss($, ($) => sh.e.state.literal(
            "text",
            sh.e.group.literal({
                "delimiter": sh.e.state.literal("quote", sh.e.nothing()),
                "value": sh.e.text.copy(sh.s.context([])),
            })
        ))
        default: return _p.au($[0])
    }
})