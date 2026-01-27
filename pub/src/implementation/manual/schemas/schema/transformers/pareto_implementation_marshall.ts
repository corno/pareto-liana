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
): d_out.Module_Set.D => sh.m.module(
    'transformer',
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
            "external": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child'].key, ["marshall"]))
        }),
        {
            'separator': " ",
        },
        () => _p.unreachable_code_path(),
    ),
    $.types.__d_map(($, id) => sh.algorithm(
        sh.type_reference("signatures", id),
        false,
        false,
        false,
        Type_Node(
            $.node,
            {
                'type': id,
                'subselection': _p.list.literal([])
            }
        ),
    )),
)

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'type': string
        'subselection': _pi.List<d_out.Type_Node_Reference.sub_selection.L>
    },
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => sh.e.state_literal(
            "text",
            sh.e.group({
                "delimiter": sh.e.state_literal("none", sh.e.null_()),
                "value": sh.e.call(
                    sh.s.from_variable_import("serialize boolean", "serialize", []),
                    sh.e.select_from_context_deprecated([]),
                    false,
                ),
            })
        ))
        case 'component': return _p.ss($, ($) => sh.e.call(
            _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'external': return _p.ss($, ($) => sh.s.from_variable_import(`external ${$.import.key}`, $.type.key, []))
                    case 'internal': return _p.ss($, ($) => sh.s.from_variable($.key, []))
                    case 'internal cyclic': return _p.ss($, ($) => sh.s.from_variable($.key, []))
                    default: return _p.au($[0])
                }
            }),
            sh.e.select_from_context_deprecated([]),
            false,
        ))
        case 'dictionary': return _p.ss($, ($) => sh.e.state_literal(
            "dictionary",
            sh.e.dictionary_map(
                sh.s.from_context([]),
                Type_Node(
                    $.node,
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
        case 'group': return _p.ss($, ($) => sh.e.state_literal(
            "group",
            sh.e.state_literal(
                "verbose",
                sh.e.dictionary_literal($.__d_map(($, id) => sh.e.change_context(
                    sh.s.from_context([id]),
                    Type_Node(
                        $.node,
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

            const x = Type_Node(
                $.node,
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

            return sh.e.state_literal(
                "list",
                sh.e.list_map(
                    sh.s.from_context($.result.__decide(
                        ($) => ["list"],
                        () => []
                    )),
                    $.result.__decide(
                        ($) => sh.e.change_context(
                            sh.s.from_context(["element"]),
                            x,
                        ),
                        () => x
                    )
                )
            )
        })
        case 'nothing': return _p.ss($, ($) => sh.e.state_literal("nothing", sh.e.null_()))
        case 'number': return _p.ss($, ($) => sh.e.state_literal(
            "text",
            sh.e.group({
                "delimiter": sh.e.state_literal("none", sh.e.null_()),
                "value": sh.e.call(
                    sh.s.from_variable_import("serialize number", "serialize", []),
                    sh.e.select_from_context_deprecated([]),
                    false,
                )
            })
        ))
        case 'optional': return _p.ss($, ($) => sh.e.state_literal(
            "optional",
            sh.e.decide_optional(
                sh.s.from_context([]),
                sh.e.state_literal(
                    "set",
                    Type_Node(
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
                sh.e.state_literal(
                    "not set",
                    sh.e.null_()
                ),
                sh.type_node_reference(
                    "out",
                    "Value",
                    [sh.sub.state("optional")]
                ),
            )))
        case 'reference': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'derived': return _p.ss($, ($) => sh.e.state_literal("nothing", sh.e.null_()))
                case 'selected': return _p.ss($, ($) => sh.e.state_literal("text", sh.e.group({
                    "delimiter": sh.e.state_literal("backtick", sh.e.null_()),
                    "value": sh.e.select_from_context_deprecated(["key"]),
                })))
                default: return _p.au($[0])
            }
        }))
        case 'state': return _p.ss($, ($) => sh.e.state_literal(
            "state",
            sh.e.decide_state(
                sh.s.from_context([]),
                $.__d_map(($, id) => sh.e.group({
                    "option": sh.e.text_literal(id, 'identifier'),
                    "value": Type_Node(
                        $.node,
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
        case 'text': return _p.ss($, ($) => sh.e.state_literal(
            "text",
            sh.e.group({
                "delimiter": sh.e.state_literal("quote", sh.e.null_()),
                "value": sh.e.select_from_context_deprecated([]),
            })
        ))
        default: return _p.au($[0])
    }
})