import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

namespace interface_ {

    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Package_Set.D,
        {
            'depth': number
            'path': p_di.List<string>
        }
    >

    export type Value = p_i.Transformer_With_Parameter<
        d_in.Value,
        d_out.Assign,
        {
            'type name': string
            'subselection': p_di.List<d_out.Temp_Value_Type_Specification.sub_selection.L>
            'constrained': boolean
        }
    >

}

//shorthands
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

export const Schema: interface_.Schema = ($, $p) => {
    const constrained = $.complexity[0] === 'constrained'
    return sh.m.package_(
        ['change context'],
        p_.literal.dictionary({
            "signatures": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                p_.literal.segmented_list([
                    p_.literal.list([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    p_.literal.list([
                        "signatures"
                    ]),
                    constrained
                        ? p_.literal.list([
                            "resolved"
                        ])
                        : p_.literal.list([
                        ]),
                    p_.literal.list([
                        "transformers",
                        "boilerplate for migrate"
                    ])
                ])
            ),
            "out": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                p_.literal.segmented_list([
                    p_.literal.list([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    constrained
                        ? p_.literal.list([
                            "data",
                            "unresolved",
                        ])
                        : p_.literal.list([
                            "data",
                        ])
                ])
            ),
        }),
        p_.from.dictionary($['schema imports']).map(
            ($, id) => constrained
                ? sh_i.import_.ancestor(3, $['schema set child']['l value']['l id'], ["resolved", "transformers", "boilerplate for migrate"])
                : sh_i.import_.ancestor(2, $['schema set child']['l value']['l id'], ["transformers", "boilerplate for migrate"])),
        p_.from.dictionary($.modules).map(
            ($, id) => sh.algorithm(
                "signatures",
                id,
                [],
                Value(
                    $['root value'],
                    {
                        'type name': id,
                        'subselection': p_.literal.list([]),
                        'constrained': constrained,
                    }
                ),
            )),
    )

}
export const Value: interface_.Value = ($, $p) => {
    return p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'component': return p_.ss($, ($) => {
                    return sh.a.select(
                        sh.sv.call(
                            p_.from.state($.type).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'external': return p_.ss($, ($) => sh.call.external($.import['l id'], $.module['l id']))
                                        case 'internal': return p_.ss($, ($) => sh.call.local($['l id']))
                                        case 'internal acyclic': return p_.ss($, ($) => sh.call.local($['l id']))
                                        default: return p_.au($[0])
                                    }
                                }),
                            sh.a.select(
                                sh.sv.context(
                                    p_.from.optional($.results).decide<d_out.Select_Value.regular.tail>(
                                        ($) => p_.literal.list(["l value"]),
                                        () => p_.literal.list([])
                                    )
                                )
                            ),
                            null,
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        )
                    )
                })
                case 'dictionary': return p_.ss($, ($) => {

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
                                            'subselection': p_.literal.segmented_list([
                                                $p.subselection,
                                                p_.literal.list([
                                                    sh.sub.group("l dictionary"),
                                                    sh.sub.dictionary(),
                                                    sh.sub.group("l entry"),
                                                ])
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
                                    'subselection': p_.literal.chain(
                                        $p.subselection,
                                        sh.sub.dictionary()
                                    ),
                                    'constrained': $p.constrained,
                                }
                            )
                        )
                })
                case 'group': return p_.ss($, ($) => sh.a.group.literal(p_.from.dictionary($).map(
                    ($, id) => sh.a.change_context(
                        sh.sv.context([id]),
                        Value(
                            $.value,
                            {
                                'type name': $p['type name'],
                                'subselection': p_.literal.chain(
                                    $p.subselection,
                                    sh.sub.group(id)
                                ),
                                'constrained': $p.constrained,
                            }
                        )
                    ))))
                case 'list': return p_.ss($, ($) => {

                    return $p.constrained
                        ? sh.a.group.literal({
                            "l location": location,
                            "l list": sh.a.list.from.list.map(
                                sh.sv.context(p_.from.optional($.results).decide(
                                    ($) => p_.literal.list(["l value"]),
                                    () => p_.literal.list([])
                                )),
                                sh.a.group.literal({
                                    "l item": p_change_context($, ($) => {
                                        const tn = Value(
                                            $.value,
                                            {
                                                'type name': $p['type name'],
                                                'subselection': p_.literal.segmented_list([
                                                    $p.subselection,
                                                    p_.literal.list([
                                                        sh.sub.group("l list"),
                                                        sh.sub.list(),
                                                        sh.sub.group("l item"),
                                                    ])
                                                ]),
                                                'constrained': $p.constrained,
                                            }
                                        )
                                        return p_.from.optional($.results).decide(
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
                                    'subselection': p_.literal.chain(
                                        $p.subselection,
                                        sh.sub.list()
                                    ),
                                    'constrained': $p.constrained,
                                }
                            )
                        )

                })
                case 'nothing': return p_.ss($, ($) => sh.a.nothing())
                case 'simple': return p_.ss($, ($) => sh.a.select(sh.sv.context([])))
                case 'optional': return p_.ss($, ($) => sh.a.optional.map(
                    sh.sv.context([]),
                    Value(
                        $,
                        {
                            'type name': $p['type name'],
                            'subselection': p_.literal.chain(
                                $p.subselection,
                                sh.sub.optional()
                            ),
                            'constrained': $p.constrained,
                        }
                    )
                ))
                case 'reference': return p_.ss($, ($) => p_.from.state($.type).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'derived': return p_.ss($, ($) => sh.a.nothing())
                            case 'selected': return p_.ss($, ($) => {
                                const tn = sh.a.text.copy(sh.sv.context(p_.from.optional($.results).decide(
                                    ($) => p_.literal.list(["l value", "l id"]),
                                    () => p_.literal.list(["l id"])
                                )))

                                return $p.constrained
                                    ? sh.a.group.literal({
                                        "l location": location,
                                        "l reference": tn
                                    })
                                    : tn
                            })
                            default: return p_.au($[0])
                        }
                    }))
                case 'state': return p_.ss($, ($) => {
                    const tn = sh.a.decide.state(
                        sh.sv.context(p_.from.optional($.results).decide(
                            ($) => p_.literal.list(["l value"]),
                            () => p_.literal.list([])
                        )),
                        p_.from.dictionary($.options).map(
                            ($, id) => sh.a.state.literal(id, Value(
                                $.value,
                                {
                                    'type name': $p['type name'],
                                    'subselection': p_.literal.segmented_list([
                                        $p.subselection,
                                        $p.constrained
                                            ? p_.literal.list([
                                                sh.sub.group("l state"),
                                                sh.sub.state(id)
                                            ])
                                            : p_.literal.list([
                                                sh.sub.state(id)
                                            ])
                                    ]),
                                    'constrained': $p.constrained,
                                }
                            ))),
                        sh.type_node_reference(
                            "out",
                            $p['type name'],
                            p_.literal.segmented_list([
                                $p.subselection,
                                $p.constrained
                                    ? p_.literal.list([
                                        sh.sub.group("l state"),
                                    ])
                                    : p_.literal.list([])
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
                case 'text': return p_.ss($, ($) => sh.a.select(sh.sv.context([])))
                default: return p_.au($[0])
            }
        })
}
