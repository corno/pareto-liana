import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import p_unreachable_code_path from 'pareto-core/dist/implementation/transformer/specials/unreachable_code_path'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

namespace interface_ {
    
    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Package_Set.D,
        {
            'depth': number,
            'path': p_di.List<string>,
        }
    >

    export type Value = p_i.Transformer_With_Parameter<
        d_in.Value,
        d_out.Assign,
        {
            'temp type': string,
            'temp subselection': p_di.List<d_out_interface.Value.reference.sub_selection.L>,
            'constrained': boolean,
        }
    >
}

//shorthands
import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

//dependencies

const location = sh.a.select(
    sh.sv.call(
        sh.call.external("parse tree to location", "Value"),
        sh.a.select(sh.sv.context([])),
        null,
        sh.lookups.not_set(),
        sh.arguments_.initialize({
            "subdocument context": sh.a.optional.not_set(),
        }),
        [
        ],
    )
)

export const Schema: interface_.Schema = ($, $p) => {
    const constrained = $.complexity[0] === 'constrained'
    return sh.m.package_(
        ['change context', 'list from text', 'variables'],
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
                        "signatures",
                    ]),
                    $.complexity[0] === 'constrained'
                        ? p_.literal.list(["unresolved"])
                        : p_.literal.list([]),
                    p_.literal.list([
                        "refiners",
                        "astn parse tree"
                    ]),
                ]),
            ),
            "out": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                p_.literal.nested_list([
                    p_.literal.list([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    $.complexity[0] === 'constrained'
                        ? p_.literal.list(["data", "unresolved"])
                        : p_.literal.list(["data"]),
                ]),
            ),
        }),
        p_.from.dictionary(
            p_.literal.dictionary({
                "": p_.literal.dictionary({

                    "unmarshalled from parse tree": sh_i.import_.external(
                        "liana-core",
                        [
                            "dist",
                            "implementation",
                            "manual",
                            "refiners",
                            "unmarshalled",
                            "astn parse tree"
                        ]
                    ),
                    "parse tree to location": sh_i.import_.external(
                        "liana-core",
                        [
                            "dist",
                            "implementation",
                            "manual",
                            "transformers",
                            "parse tree",
                            "start token range"
                        ]
                    ),
                }),
                "external ": $['schema imports'].__d_map_deprecated(($, id) => constrained
                    ? sh_i.import_.ancestor(3, $['schema set child']['l value']['l id'], ["unresolved", "refiners", "astn parse tree"])
                    : sh_i.import_.ancestor(2, $['schema set child']['l value']['l id'], ["refiners", "astn parse tree"])
                ),
            }),
        ).flatten(
            ($) => $,
            (parent_id, child_id) => parent_id + child_id,
            {
                duplicate_id: () => p_unreachable_code_path("the keys in the root entry with the empty id do not conflict with the other key: 'external '")
            }
        ),
        $.modules.__d_map_deprecated(($, id) => sh.algorithm(
            "signatures",
            id,
            ['abort'],
            Value(
                $['root value'],
                {
                    'temp type': id,
                    'temp subselection': p_.literal.list([]),
                    'constrained': constrained
                }
            ),
        )),
    )
}

export const Value: interface_.Value = ($, $p) => {
    return p_.from.state($).decide(($) => {
        switch ($[0]) {
            case 'component': return p_.ss($, ($) => {
                return sh.a.select(
                    sh.sv.call(
                        p_.from.state($.type).decide(($) => {
                            switch ($[0]) {
                                case 'external': return p_.ss($, ($) => sh.call.external(`external ${$.import['l id']}`, $.module['l id']))
                                case 'internal': return p_.ss($, ($) => sh.call.local($['l id']))
                                case 'internal acyclic': return p_.ss($, ($) => sh.call.local($['l id']))
                                default: return p_.au($[0])
                            }
                        }),
                        sh.a.select(sh.sv.context([])),
                        sh.a.select(sh.sv.context([])),
                        sh.lookups.not_set(),
                        sh.arguments_.not_set(),
                        [],
                    )
                )
            })
            case 'dictionary': return p_.ss($, ($) => {
                return sh.a.change_context(
                    sh.sv.call(
                        sh.call.external("unmarshalled from parse tree", "Dictionary"),
                        sh.a.select(sh.sv.context([])),
                        sh.a.select(sh.sv.context([])),
                        sh.lookups.not_set(),
                        sh.arguments_.initialize({
                            "subdocument context": sh.a.optional.not_set(),
                        }),
                        [
                        ],
                    ),
                    $p.constrained
                        ? sh.a.group.literal({
                            "l location": sh.a.select(
                                sh.sv.call(
                                    sh.call.external("parse tree to location", "Value"),
                                    sh.a.select(sh.sv.context(["value"])),
                                    null,
                                    sh.lookups.not_set(),
                                    sh.arguments_.initialize({
                                        "subdocument context": sh.a.optional.not_set(),
                                    }),
                                    [

                                    ],
                                )
                            ),
                            "l dictionary": sh.a.dictionary.from.dictionary.map(
                                sh.sv.context(["entries"]),
                                sh.a.group.literal({
                                    "l location": location,
                                    "l entry": Value(
                                        $.value,
                                        {
                                            'temp type': $p['temp type'],
                                            'temp subselection': p_.literal.nested_list([
                                                $p['temp subselection'],
                                                p_.literal.list([
                                                    sh_i.sub.group("l dictionary"),
                                                    sh_i.sub.dictionary(),
                                                    sh_i.sub.group("l entry"),

                                                ])
                                            ]),
                                            'constrained': $p.constrained
                                        }
                                    )
                                }),
                            )
                        })
                        : sh.a.dictionary.from.dictionary.map(
                            sh.sv.context(["entries"]),
                            Value(
                                $.value,
                                {
                                    'temp type': $p['temp type'],
                                    'temp subselection': p_.literal.nested_list([
                                        $p['temp subselection'],
                                        p_.literal.list([
                                            sh_i.sub.dictionary(),
                                        ])
                                    ]),
                                    'constrained': $p.constrained
                                }
                            ),
                        )
                )
            })
            case 'group': return p_.ss($, ($) => sh.a.change_context(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "Verbose Group"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.select(sh.sv.context([])),
                    sh.lookups.not_set(),
                    sh.arguments_.initialize({
                        "expected properties": sh.a.dictionary.literal($.__d_map_deprecated(($) => sh.a.nothing())),
                        "subdocument context": sh.a.optional.not_set(),
                    }),
                    [
                    ],
                ),
                sh.a.variables(
                    {
                        "verbose group range": sh.a.select(
                            sh.sv.call(
                                sh.call.external("parse tree to location", "Value"),
                                sh.a.select(sh.sv.context(["value"])),
                                null,
                                sh.lookups.not_set(),
                                sh.arguments_.initialize({
                                    "subdocument context": sh.a.optional.not_set(),
                                }),
                                [

                                ],
                            )
                        ),
                    },
                    sh.a.group.literal($.__d_map_deprecated(($, id) => sh.a.change_context(
                        sh.sv.call(
                            sh.call.external("unmarshalled from parse tree", "Property"),
                            sh.a.select(sh.sv.context([])),
                            sh.a.select(sh.sv.context([])),
                            sh.lookups.not_set(),
                            sh.arguments_.initialize({
                                "id": sh.a.text.literal(id, 'identifier'),
                                "subdocument context": sh.a.optional.not_set(),
                            }),
                            [
                            ],
                        ),
                        Value(
                            $.value,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': p_.literal.nested_list([
                                    $p['temp subselection'],
                                    p_.literal.list([
                                        sh_i.sub.group(id),
                                    ])
                                ]),
                                'constrained': $p.constrained
                            }
                        )
                    )))
                ),
            ))
            case 'list': return p_.ss($, ($) => {
                return $p.constrained
                    ? sh.a.group.literal({
                        "l location": location,
                        "l list": sh.a.list.from.list.map(
                            sh.sv.call(
                                sh.call.external("unmarshalled from parse tree", "List"),
                                sh.a.select(sh.sv.context([])),
                                sh.a.select(sh.sv.context([])),
                                sh.lookups.not_set(),
                                sh.arguments_.initialize({
                                    "subdocument context": sh.a.optional.not_set(),
                                }),
                                [
                                    "items"
                                ],
                            ),
                            sh.a.change_context(
                                sh.sv.context(["value"]),
                                sh.a.group.literal({
                                    "l location": location,
                                    "l item": Value(
                                        $.value,
                                        {
                                            'temp type': $p['temp type'],
                                            'temp subselection': p_.literal.nested_list([
                                                $p['temp subselection'],
                                                p_.literal.list([
                                                    sh_i.sub.group("l list"),
                                                    sh_i.sub.list(),
                                                    sh_i.sub.group("l item"),
                                                ])
                                            ]),
                                            'constrained': $p.constrained
                                        }
                                    )
                                })
                            )
                        )
                    })
                    : sh.a.list.from.list.map(
                        sh.sv.call(
                            sh.call.external("unmarshalled from parse tree", "List"),
                            sh.a.select(sh.sv.context([])),
                            sh.a.select(sh.sv.context([])),
                            sh.lookups.not_set(),
                            sh.arguments_.initialize({
                                "subdocument context": sh.a.optional.not_set(),
                            }),
                            [
                                "items"
                            ],
                        ),
                        sh.a.change_context(
                            sh.sv.context(["value"]),
                            Value(
                                $.value,
                                {
                                    'temp type': $p['temp type'],
                                    'temp subselection': p_.literal.nested_list([
                                        $p['temp subselection'],
                                        p_.literal.list([
                                            sh_i.sub.list(),
                                        ])
                                    ]),
                                    'constrained': $p.constrained
                                }
                            )
                        ),
                    )
            })
            case 'nothing': return p_.ss($, ($) => sh.a.select(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "Nothing"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.select(sh.sv.context([])),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [
                    ],
                )
            ))
            case 'simple': return p_.ss($, ($) => p_.from.state($).decide(($) => {
                switch ($[0]) {
                    case 'global': return p_.ss($, ($) => p_.from.state($['l entry'].type).decide(($) => {
                        switch ($[0]) {
                            case 'boolean': return p_.ss($, ($) => sh.a.select(
                                sh.sv.call(
                                    sh.call.external("unmarshalled from parse tree", "Boolean"),
                                    sh.a.select(sh.sv.context([])),

                                    sh.a.select(sh.sv.context([])),
                                    sh.lookups.not_set(),
                                    sh.arguments_.initialize({
                                        "type": sh.a.state.literal("true/false", sh.a.nothing()),
                                        "subdocument context": sh.a.optional.not_set(),
                                    }),
                                    [
                                    ],
                                ),
                            ))
                            case 'date': return p_.ss($, ($) => sh.a.select(
                                sh.sv.call(
                                    sh.call.external("unmarshalled from parse tree", "Number"),
                                    sh.a.select(sh.sv.context([])),

                                    sh.a.select(sh.sv.context([])),
                                    sh.lookups.not_set(),
                                    sh.arguments_.initialize({
                                        "type": sh.a.state.literal("iso date", sh.a.nothing()),
                                        "subdocument context": sh.a.optional.not_set(),
                                    }),
                                    [
                                    ],
                                ),
                            ))
                            case 'number': return p_.ss($, ($) => sh.a.select(
                                sh.sv.call(
                                    sh.call.external("unmarshalled from parse tree", "Number"),
                                    sh.a.select(sh.sv.context([])),
                                    sh.a.select(sh.sv.context([])),
                                    sh.lookups.not_set(),
                                    sh.arguments_.initialize({
                                        "type": p_.from.state($.precision).decide(($) => {
                                            switch ($[0]) {
                                                case 'approximation': return p_.ss($, ($) => sh.a.state.literal("scientific notation", sh.a.group.literal({
                                                    "precision": sh.a.number.natural_literal($['significant digits']),
                                                })))
                                                case 'exact': return p_.ss($, ($) => p_.from.optional($['number of fractional digits']).decide(
                                                    ($) => sh.a.state.literal("fractional decimal", sh.a.group.literal({
                                                        "digits": sh.a.number.natural_literal($),
                                                    })),
                                                    () => sh.a.state.literal("decimal", sh.a.nothing())
                                                ))
                                                default: return p_.au($[0])
                                            }
                                        }),
                                        "subdocument context": sh.a.optional.not_set(),
                                    }),
                                    [
                                    ],
                                ),
                            ))

                            default: return p_.au($[0])
                        }
                    }))
                    default: return p_.au($[0])
                }
            }))
            case 'optional': return p_.ss($, ($) => sh.a.optional.map(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "Optional"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.select(sh.sv.context([])),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [
                        "optional",
                    ],
                ),
                Value(
                    $,
                    {
                        'temp type': $p['temp type'],
                        'temp subselection': p_.literal.nested_list([
                            $p['temp subselection'],
                            p_.literal.list([
                                sh_i.sub.optional(),
                            ])
                        ]),
                        'constrained': $p.constrained
                    }
                ),
            ))
            case 'reference': return p_.ss($, ($) => p_.from.state($.type).decide(($) => {
                switch ($[0]) {
                    case 'derived': return p_.ss($, ($) => sh.a.select(
                        sh.sv.call(
                            sh.call.external("unmarshalled from parse tree", "Nothing"),
                            sh.a.select(sh.sv.context([])),
                            sh.a.select(sh.sv.context([])),
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [
                            ],
                        )
                    ))
                    case 'selected': return p_.ss($, ($) => sh.a.group.literal({
                        "l location": location,
                        "l reference": sh.a.select(
                            sh.sv.call(
                                sh.call.external("unmarshalled from parse tree", "Text"),
                                sh.a.select(sh.sv.context([])),
                                sh.a.select(sh.sv.context([])),
                                sh.lookups.not_set(),
                                sh.arguments_.not_set(),
                                [
                                ],
                            )
                        ),
                    }))
                    default: return p_.au($[0])
                }
            }))
            case 'state': return p_.ss($, ($) => sh.a.change_context(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "State"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.select(sh.sv.context([])),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [
                    ],
                ),
                sh.a.decide.text(
                    sh.sv.context(["option", "token", "value"]),
                    $.options.__d_map_deprecated(
                        ($, id) => sh.a.change_context(
                            sh.sv.context(["value"]),
                            $p.constrained
                                ? sh.a.group.literal({
                                    "l location": location,
                                    "l state": sh.a.state.literal(
                                        id,
                                        Value(
                                            $.value,
                                            {
                                                'temp type': $p['temp type'],
                                                'temp subselection': p_.literal.nested_list([
                                                    $p['temp subselection'],
                                                    p_.literal.list([
                                                        sh_i.sub.group("l state"),
                                                        sh_i.sub.state(id),
                                                    ])
                                                ]),
                                                'constrained': $p.constrained
                                            }
                                        )
                                    )
                                })
                                : sh.a.state.literal(
                                    id,
                                    Value(
                                        $.value,
                                        {
                                            'temp type': $p['temp type'],
                                            'temp subselection': p_.literal.nested_list([
                                                $p['temp subselection'],
                                                p_.literal.list([
                                                    sh_i.sub.state(id),
                                                ])
                                            ]),
                                            'constrained': $p.constrained
                                        }
                                    )
                                )
                        ),
                    ),
                    sh.a.abort(sh.a.state.literal("liana", sh.a.group.literal({
                        "type": sh.a.state.literal("state", sh.a.state.literal("unknown option", sh.a.select(sh.sv.context(["option", "token", "value"])))),
                        "range": sh.a.select(
                            sh.sv.call(
                                sh.call.external("parse tree to location", "Value"),
                                sh.a.select(sh.sv.context(["value"])),
                                null,
                                sh.lookups.not_set(),
                                sh.arguments_.initialize({
                                    "subdocument context": sh.a.optional.not_set(),
                                }),
                                [
                                ],
                            )
                        ),
                    }))),
                    sh.type_node_reference("out", $p['temp type'], $p['temp subselection']))
            ))
            case 'text': return p_.ss($, ($) => sh.a.select(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "Text"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.select(sh.sv.context([])),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [
                    ],
                )
            ))
            default: return p_.au($[0])
        }
    })
}
