import * as p_di from 'pareto-core/dist/data/interface'
import * as pt from 'pareto-core/dist/transformer/implementation'
import p_unreachable_code_path from 'pareto-core/dist/specials/unreachable_code_path'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': p_di.List<string>,
        'depth': number
    }
): d_out.Package_Set.D => {
    const constrained = $.complexity[0] === 'constrained'

    return sh.m.package_(
        ['change context', 'text from list'],
        pt.literal.dictionary({
            "signatures": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                pt.literal.nested_list([
                    pt.literal.list([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    pt.literal.list([
                        "signatures"
                    ]),
                    constrained
                        ? pt.literal.list([
                            "resolved"
                        ])
                        : pt.literal.list([
                        ]),
                    pt.literal.list([
                        "transformers",
                        "astn sealed target"
                    ])
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
        pt.dictionary.from.dictionary(
            pt.literal.dictionary({
                "": pt.literal.dictionary({
                    "primitives to text": sh_i.import_.external(
                        "liana-core",
                        pt.literal.list([
                            "dist",
                            "implementation",
                            "manual",
                            "transformers",
                            "primitives",
                            "text",
                        ]),
                    ),
                }),
                "external ": $['schema imports'].__d_map(($, id) => constrained
                    ? sh_i.import_.ancestor(3, $['schema set child']['l value']['l id'], ["resolved", "transformers", "astn sealed target"])
                    : sh_i.import_.ancestor(2, $['schema set child']['l value']['l id'], ["transformers", "astn sealed target"])
                ),
            }),
        ).flatten(
            ($) => $,
            (parent_id, child_id) => parent_id + child_id,
            {
                duplicate_id: () => p_unreachable_code_path("the root keys are fixed; '' and 'external'"),
            }

        ),
        $.modules.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            [],
            Value(
                $['root value'],
                {
                    'type': id,
                    'subselection': pt.literal.list([])
                }
            ),
        )),
    )
}

export const Value = (
    $: d_in.Value,
    $p: {
        'type': string
        'subselection': p_di.List<d_out.Temp_Value_Type_Specification.sub_selection.L>
    },
): d_out.Assign => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'component': return pt.ss($, ($) => sh.a.select(
            sh.sv.call(
                pt.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return pt.ss($, ($) => sh.call.external(`external ${$.import['l id']}`, $.module['l id']))
                        case 'internal acyclic': return pt.ss($, ($) => sh.call.local($['l id']))
                        case 'internal': return pt.ss($, ($) => sh.call.local($['l id']))
                        default: return pt.au($[0])
                    }
                }),
                sh.a.select(sh.sv.context(pt.boolean.from.optional($.results).is_set() ? ["l value"] : [])),
                null,
                sh.lookups.not_set(),
                sh.arguments_.not_set(),
                [],
            )
        ))
        case 'dictionary': return pt.ss($, ($) => sh.a.state.literal(
            "dictionary",
            sh.a.dictionary.from.dictionary.map(
                sh.sv.context([]),
                Value(
                    $.value,
                    {
                        'type': $p.type,
                        'subselection': pt.literal.nested_list([
                            $p.subselection,
                            [
                                sh.sub.dictionary(),
                            ]
                        ]),
                    }
                )
            )
        ))
        case 'group': return pt.ss($, ($) => sh.a.state.literal(
            "group",
            sh.a.state.literal(
                "verbose",
                sh.a.dictionary.literal($.__d_map(($, id) => sh.a.change_context(
                    sh.sv.context([id]),
                    Value(
                        $.value,
                        {
                            'type': $p.type,
                            'subselection': pt.literal.nested_list([
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
        case 'list': return pt.ss($, ($) => {

            const x = Value(
                $.value,
                {
                    'type': $p.type,
                    'subselection': pt.literal.nested_list([
                        $p.subselection,
                        [
                            sh.sub.list(),
                        ]
                    ]),
                }
            )

            return sh.a.state.literal(
                "list",
                sh.a.list.from.list.map(
                    sh.sv.context(pt.boolean.from.optional($.results).is_set() ? ["l value"] : []),
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
        case 'nothing': return pt.ss($, ($) => sh.a.state.literal("nothing", sh.a.nothing()))
        case 'simple': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'global': return pt.ss($, ($) => {
                    const x = $['l entry']


                    return pt.decide.state($['l entry'].type, ($) => {
                        switch ($[0]) {
                            case 'boolean': return pt.ss($, ($) => sh.a.state.literal(
                                "text",
                                sh.a.group.literal({
                                    "delimiter": sh.a.state.literal("none", sh.a.nothing()),
                                    "value": sh.a.select(
                                        sh.sv.call(
                                            sh.call.external("primitives to text", "true false"),
                                            sh.a.select(sh.sv.context([])),
                                            null,
                                            sh.lookups.not_set(),
                                            sh.arguments_.not_set(),
                                            [],
                                        )
                                    ),
                                })
                            ))
                            case 'date': return pt.ss($, ($) => sh.a.state.literal(
                                "text",
                                sh.a.group.literal({
                                    "delimiter": sh.a.state.literal("none", sh.a.nothing()),
                                    "value": sh.a.select(
                                        sh.sv.call(
                                            sh.call.external("primitives to text", "iso date udhr"),
                                            sh.a.select(sh.sv.context([])),
                                            null,
                                            sh.lookups.not_set(),
                                            sh.arguments_.not_set(),
                                            [],
                                        )
                                    ),
                                })
                            ))
                            case 'number': return pt.ss($, ($) => sh.a.state.literal(
                                "text",
                                sh.a.group.literal({
                                    "delimiter": sh.a.state.literal("none", sh.a.nothing()),
                                    "value": sh.a.select(
                                        pt.decide.state($.precision, ($) => {
                                            switch ($[0]) {
                                                case 'approximation': return pt.ss($, ($) => sh.sv.call(
                                                    sh.call.external("primitives to text", "scientific notation"),
                                                    sh.a.select(sh.sv.context([])),
                                                    null,
                                                    sh.lookups.not_set(),
                                                    sh.arguments_.initialize({
                                                        "digits": sh.a.number.natural_literal(
                                                            $['significant digits']
                                                        )
                                                    }),
                                                    [],
                                                ))
                                                case 'exact': return pt.ss($, ($) => $['number of fractional digits'].__decide(
                                                    ($) => sh.sv.call(
                                                        sh.call.external("primitives to text", "fractional decimal"),
                                                        sh.a.select(sh.sv.context([])),
                                                        null,
                                                        sh.lookups.not_set(),
                                                        sh.arguments_.initialize({
                                                            "number of fractional digits": sh.a.number.natural_literal(
                                                                $
                                                            )
                                                        }),
                                                        [],
                                                    ),
                                                    () => sh.sv.call(
                                                        sh.call.external("primitives to text", "decimal"),
                                                        sh.a.select(sh.sv.context([])),
                                                        null,
                                                        sh.lookups.not_set(),
                                                        sh.arguments_.not_set(),
                                                        [],
                                                    )
                                                ))
                                                default: return pt.au($[0])
                                            }
                                        })
                                    ),
                                })
                            ))

                            default: return pt.au($[0])
                        }
                    })
                })
                default: return pt.au($[0])
            }
        }))

        case 'optional': return pt.ss($, ($) => sh.a.state.literal(
            "optional",
            sh.a.decide.optional(
                sh.sv.context([]),
                sh.a.state.literal(
                    "set",
                    Value(
                        $,
                        {
                            'type': $p.type,
                            'subselection': pt.literal.nested_list([
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
        case 'reference': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'derived': return pt.ss($, ($) => sh.a.state.literal("nothing", sh.a.nothing()))
                case 'selected': return pt.ss($, ($) => sh.a.state.literal("text", sh.a.group.literal({
                    "delimiter": sh.a.state.literal("apostrophe", sh.a.nothing()),
                    "value": sh.a.text.copy(sh.sv.context($.results.__decide(
                        ($) => pt.literal.list(["l value", "l id"]),
                        () => pt.literal.list(["l id"])
                    ))),
                })))
                default: return pt.au($[0])
            }
        }))
        case 'state': return pt.ss($, ($) => sh.a.state.literal(
            "state",
            sh.a.decide.state(
                sh.sv.context(pt.boolean.from.optional($.results).is_set() ? ["l value"] : []),
                $.options.__d_map(($, id) => sh.a.group.literal({
                    "option": sh.a.text.literal(id, 'identifier'),
                    "value": Value(
                        $.value,
                        {
                            'type': $p.type,
                            'subselection': pt.literal.nested_list([
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
        case 'text': return pt.ss($, ($) => sh.a.state.literal(
            "text",
            sh.a.group.literal({
                "delimiter": sh.a.state.literal("quote", sh.a.nothing()),
                "value": sh.a.text.copy(sh.sv.context([])),
            })
        ))
        default: return pt.au($[0])
    }
})

// sh.a.state.literal(
//             "text",
//             sh.a.group.literal({
//                 "delimiter": sh.a.state.literal("none", sh.a.nothing()),
//                 "value": sh.a.select(
//                     sh.sv.text_from_list(
//                         sh.sv.call(
//                             sh.call.external("primitives to text", "Number"),
//                             sh.a.select(sh.sv.context([])),
//                             null,
//                             sh.lookups.not_set(),
//                             sh.arguments_.not_set(),
//                             [],
//                         ),
//                         sh.a.select(sh.sv.context([])),
//                         []
//                     )
//                 ),
//             })
//         )