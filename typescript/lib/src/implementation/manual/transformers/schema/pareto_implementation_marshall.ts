import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import p_unreachable_code_path from 'pareto-core/dist/implementation/specials/unreachable_code_path'


//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

namespace interface_ {

    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Package_Set.D,
        {
            'path': p_di.List<string>,
            'depth': number,
        }
    >

    export type Value = p_i.Transformer_With_Parameter<
        d_in.Value,
        d_out.Assign,
        {
            'type': string
            'subselection': p_di.List<d_out.Temp_Value_Type_Specification.sub_selection.L>
        }
    >

}

//shorthands
import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

export const Schema: interface_.Schema = ($, $p) => {
    const constrained = $.complexity[0] === 'constrained'

    return sh.m.package_(
        ['change context', 'text from list'],
        p_.literal.dictionary({
            "signatures": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                p_.literal.nested_list([
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
        p_.dictionary.from.dictionary(
            p_.literal.dictionary({
                "": p_.literal.dictionary({
                    "primitives to text": sh_i.import_.external(
                        "liana-core",
                        p_.literal.list([
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
                    'subselection': p_.literal.list([])
                }
            ),
        )),
    )
}

export const Value: interface_.Value = ($, $p) => p_.decide.state($, ($) => {
    switch ($[0]) {
        case 'component': return p_.ss($, ($) => sh.a.select(
            sh.sv.call(
                p_.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return p_.ss($, ($) => sh.call.external(`external ${$.import['l id']}`, $.module['l id']))
                        case 'internal acyclic': return p_.ss($, ($) => sh.call.local($['l id']))
                        case 'internal': return p_.ss($, ($) => sh.call.local($['l id']))
                        default: return p_.au($[0])
                    }
                }),
                sh.a.select(sh.sv.context(p_.boolean.from.optional($.results).is_set() ? ["l value"] : [])),
                null,
                sh.lookups.not_set(),
                sh.arguments_.not_set(),
                [],
            )
        ))
        case 'dictionary': return p_.ss($, ($) => sh.a.state.literal(
            "dictionary",
            sh.a.dictionary.from.dictionary.map(
                sh.sv.context([]),
                Value(
                    $.value,
                    {
                        'type': $p.type,
                        'subselection': p_.literal.nested_list([
                            $p.subselection,
                            [
                                sh.sub.dictionary(),
                            ]
                        ]),
                    }
                )
            )
        ))
        case 'group': return p_.ss($, ($) => sh.a.state.literal(
            "group",
            sh.a.state.literal(
                "verbose",
                sh.a.dictionary.literal($.__d_map(($, id) => sh.a.change_context(
                    sh.sv.context([id]),
                    Value(
                        $.value,
                        {
                            'type': $p.type,
                            'subselection': p_.literal.nested_list([
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
        case 'list': return p_.ss($, ($) => {

            const x = Value(
                $.value,
                {
                    'type': $p.type,
                    'subselection': p_.literal.nested_list([
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
                    sh.sv.context(p_.boolean.from.optional($.results).is_set() ? ["l value"] : []),
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
        case 'nothing': return p_.ss($, ($) => sh.a.state.literal("nothing", sh.a.nothing()))
        case 'simple': return p_.ss($, ($) => p_.decide.state($, ($) => {
            switch ($[0]) {
                case 'global': return p_.ss($, ($) => {
                    const x = $['l entry']


                    return p_.decide.state($['l entry'].type, ($) => {
                        switch ($[0]) {
                            case 'boolean': return p_.ss($, ($) => sh.a.state.literal(
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
                            case 'date': return p_.ss($, ($) => sh.a.state.literal(
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
                            case 'number': return p_.ss($, ($) => sh.a.state.literal(
                                "text",
                                sh.a.group.literal({
                                    "delimiter": sh.a.state.literal("none", sh.a.nothing()),
                                    "value": sh.a.select(
                                        p_.decide.state($.precision, ($) => {
                                            switch ($[0]) {
                                                case 'approximation': return p_.ss($, ($) => sh.sv.call(
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
                                                case 'exact': return p_.ss($, ($) => $['number of fractional digits'].__decide(
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
                                                default: return p_.au($[0])
                                            }
                                        })
                                    ),
                                })
                            ))

                            default: return p_.au($[0])
                        }
                    })
                })
                default: return p_.au($[0])
            }
        }))

        case 'optional': return p_.ss($, ($) => sh.a.state.literal(
            "optional",
            sh.a.decide.optional(
                sh.sv.context([]),
                sh.a.state.literal(
                    "set",
                    Value(
                        $,
                        {
                            'type': $p.type,
                            'subselection': p_.literal.nested_list([
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
        case 'reference': return p_.ss($, ($) => p_.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'derived': return p_.ss($, ($) => sh.a.state.literal("nothing", sh.a.nothing()))
                case 'selected': return p_.ss($, ($) => sh.a.state.literal("text", sh.a.group.literal({
                    "delimiter": sh.a.state.literal("apostrophe", sh.a.nothing()),
                    "value": sh.a.text.copy(sh.sv.context($.results.__decide(
                        ($) => p_.literal.list(["l value", "l id"]),
                        () => p_.literal.list(["l id"])
                    ))),
                })))
                default: return p_.au($[0])
            }
        }))
        case 'state': return p_.ss($, ($) => sh.a.state.literal(
            "state",
            sh.a.decide.state(
                sh.sv.context(p_.boolean.from.optional($.results).is_set() ? ["l value"] : []),
                $.options.__d_map(($, id) => sh.a.group.literal({
                    "option": sh.a.text.literal(id, 'identifier'),
                    "value": Value(
                        $.value,
                        {
                            'type': $p.type,
                            'subselection': p_.literal.nested_list([
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
        case 'text': return p_.ss($, ($) => sh.a.state.literal(
            "text",
            sh.a.group.literal({
                "delimiter": sh.a.state.literal("quote", sh.a.nothing()),
                "value": sh.a.text.copy(sh.sv.context([])),
            })
        ))
        default: return p_.au($[0])
    }
})