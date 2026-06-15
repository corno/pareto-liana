import * as p_di from 'pareto-core/dist/data/interface'
import * as pt from 'pareto-core/dist/transformer/implementation'
import p_change_context from 'pareto-core/dist/specials/change_context'


import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

const location = sh.a.state.literal("in main document", sh.a.group.literal({
    "start": sh.a.group.literal({
        "absolute": sh.a.number.integer_literal(42),
        "relative": sh.a.group.literal({
            "line": sh.a.number.integer_literal(42),
            "column": sh.a.number.integer_literal(42),
        })
    }),
    "end": sh.a.group.literal({
        "absolute": sh.a.number.integer_literal(42),
        "relative": sh.a.group.literal({
            "line": sh.a.number.integer_literal(42),
            "column": sh.a.number.integer_literal(42),
        })
    })
}))

export const Schema = (
    $: d_in.Schema,
    $p: {
        'depth': number,
        'path': p_di.List<string>,
    }
): d_out.Package_Set.D => {
    const constrained = $.complexity[0] === 'constrained'
    return sh.m.package_(
        ['change context'],
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
                        "boilerplate for migrate"
                    ])
                ])
            ),
            "out": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                pt.literal.nested_list([
                    pt.literal.list([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    constrained
                        ? pt.literal.list([
                            "data",
                            "unresolved",
                        ])
                        : pt.literal.list([
                            "data",
                        ])
                ])
            ),
        }),
        $['schema imports'].__d_map(($, id) => constrained
            ? sh_i.import_.ancestor(3, $['schema set child']['l value']['l id'], ["resolved", "transformers", "boilerplate for migrate"])
            : sh_i.import_.ancestor(2, $['schema set child']['l value']['l id'], ["transformers", "boilerplate for migrate"])),
        $.modules.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            [],
            Value(
                $['root value'],
                {
                    'type name': id,
                    'subselection': pt.literal.list([]),
                    'constrained': constrained,
                }
            ),
        )),
    )

}
export const Value = (
    $: d_in.Value,
    $p: {
        'type name': string
        'subselection': p_di.List<d_out.Temp_Value_Type_Specification.sub_selection.L>
        'constrained': boolean
    },
): d_out.Assign => {
    return pt.decide.state($, ($) => {
        switch ($[0]) {
            case 'component': return pt.ss($, ($) => {
                return sh.a.select(
                    sh.sv.call(
                        pt.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'external': return pt.ss($, ($) => sh.call.external($.import['l id'], $.module['l id']))
                                case 'internal': return pt.ss($, ($) => sh.call.local($['l id']))
                                case 'internal acyclic': return pt.ss($, ($) => sh.call.local($['l id']))
                                default: return pt.au($[0])
                            }
                        }),
                        sh.a.select(sh.sv.context(pt.boolean.from.optional($.results).is_set() ? ["l value"] : [])),
                        null,
                        sh.lookups.not_set(),
                        sh.arguments_.not_set(),
                        [],
                    )
                )
            })
            case 'dictionary': return pt.ss($, ($) => {

                return $p.constrained
                    ? sh.a.group.literal({
                        "l location": location,
                        "l dictionary": sh.a.dictionary.from.dictionary.map(
                            sh.sv.context([]),
                            sh.a.group.literal({
                                "l entry": Value(
                                    $.value,
                                    {
                                        'type name': $p['type name'],
                                        'subselection': pt.literal.nested_list([
                                            $p.subselection,
                                            [
                                                sh.sub.group("l dictionary"),
                                                sh.sub.dictionary(),
                                                sh.sub.group("l entry"),
                                            ]
                                        ]),
                                        'constrained': $p.constrained,
                                    }
                                ),
                                "l location": location
                            })
                        )
                    })
                    : sh.a.dictionary.from.dictionary.map(
                        sh.sv.context([]),
                        Value(
                            $.value,
                            {
                                'type name': $p['type name'],
                                'subselection': pt.literal.nested_list([
                                    $p.subselection,
                                    [
                                        sh.sub.dictionary()
                                    ]
                                ]),
                                'constrained': $p.constrained,
                            }
                        )
                    )
            })
            case 'group': return pt.ss($, ($) => sh.a.group.literal($.__d_map(($, id) => sh.a.change_context(
                sh.sv.context([id]),
                Value(
                    $.value,
                    {
                        'type name': $p['type name'],
                        'subselection': pt.literal.nested_list([
                            $p.subselection,
                            [
                                sh.sub.group(id)
                            ]
                        ]),
                        'constrained': $p.constrained,
                    }
                )
            ))))
            case 'list': return pt.ss($, ($) => {

                return $p.constrained
                    ? sh.a.group.literal({
                        "l location": location,
                        "l list": sh.a.list.from.list.map(
                            sh.sv.context(pt.boolean.from.optional($.results).is_set() ? ["l value"] : []),
                            sh.a.group.literal({
                                "l item": p_change_context($, ($) => {
                                    const tn = Value(
                                        $.value,
                                        {
                                            'type name': $p['type name'],
                                            'subselection': pt.literal.nested_list([
                                                $p.subselection,
                                                [
                                                    sh.sub.group("l list"),
                                                    sh.sub.list(),
                                                    sh.sub.group("l item"),
                                                ]
                                            ]),
                                            'constrained': $p.constrained,
                                        }
                                    )
                                    return $.results.__decide(
                                        ($) => sh.a.change_context(
                                            sh.sv.context(["l item"]),
                                            tn
                                        ),
                                        () => tn
                                    )
                                }),
                                "l location": location
                            })
                        )
                    })
                    : sh.a.list.from.list.map(
                        sh.sv.context([]),
                        Value(
                            $.value,
                            {
                                'type name': $p['type name'],
                                'subselection': pt.literal.nested_list([
                                    $p.subselection,
                                    [
                                        sh.sub.list()
                                    ]
                                ]),
                                'constrained': $p.constrained,
                            }
                        )
                    )

            })
            case 'nothing': return pt.ss($, ($) => sh.a.nothing())
            case 'simple': return pt.ss($, ($) => sh.a.select(sh.sv.context([])))
            case 'optional': return pt.ss($, ($) => sh.a.optional.map(
                sh.sv.context([]),
                Value(
                    $,
                    {
                        'type name': $p['type name'],
                        'subselection': pt.literal.nested_list([
                            $p.subselection,
                            [
                                sh.sub.optional()
                            ]
                        ]),
                        'constrained': $p.constrained,
                    }
                )
            ))
            case 'reference': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return pt.ss($, ($) => sh.a.nothing())
                    case 'selected': return pt.ss($, ($) => {
                        const tn = sh.a.text.copy(sh.sv.context($.results.__decide(
                            ($) => pt.literal.list(["l value", "l id"]),
                            () => pt.literal.list(["l id"])
                        )))

                        return $p.constrained
                            ? sh.a.group.literal({
                                "l location": location,
                                "l reference": tn
                            })
                            : tn
                    })
                    default: return pt.au($[0])
                }
            }))
            case 'state': return pt.ss($, ($) => {
                const tn = sh.a.decide.state(
                    sh.sv.context(pt.boolean.from.optional($.results).is_set() ? ["l value"] : []),
                    $.options.__d_map(($, id) => sh.a.state.literal(id, Value(
                        $.value,
                        {
                            'type name': $p['type name'],
                            'subselection': pt.literal.nested_list([
                                $p.subselection,
                                $p.constrained
                                    ? [
                                        sh.sub.group("l state"),
                                        sh.sub.state(id)
                                    ]
                                    : [
                                        sh.sub.state(id)
                                    ]
                            ]),
                            'constrained': $p.constrained,
                        }
                    ))),
                    sh.type_node_reference(
                        "out",
                        $p['type name'],
                        pt.literal.nested_list([
                            $p.subselection,
                            $p.constrained
                                ? [
                                    sh.sub.group("l state"),
                                ]
                                : [
                                ]
                        ]),
                    ),
                )
                return $p.constrained
                    ? sh.a.group.literal({
                        "l location": location,
                        "l state": tn
                    })
                    : tn
            })
            case 'text': return pt.ss($, ($) => sh.a.select(sh.sv.context([])))
            default: return pt.au($[0])
        }
    })
}
