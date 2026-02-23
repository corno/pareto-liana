import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_change_context from 'pareto-core/dist/_p_change_context'


import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

const location = sh.a.group.literal({
    "start": sh.a.group.literal({
        "absolute": sh.a.number.integer_literal(42),
        "relative": sh.a.group.literal({
            "document resource identifier": sh.a.text.literal("implement me", 'freeform'),
            "line": sh.a.number.integer_literal(42),
            "column": sh.a.number.integer_literal(42),
        })
    }),
    "end": sh.a.group.literal({
        "absolute": sh.a.number.integer_literal(42),
        "relative": sh.a.group.literal({
            "document resource identifier": sh.a.text.literal("implement me", 'freeform'),
            "line": sh.a.number.integer_literal(42),
            "column": sh.a.number.integer_literal(42),
        })
    })
})

export const Schema = (
    $: d_in.Schema,
    $p: {
        'depth': number,
        'path': _pi.List<string>,
    }
): d_out.Package_Set.D => {
    const constrained = $.complexity[0] === 'constrained'
    return sh.m.package_(
        ['change context'],
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
                    _p.list.literal(["boilerplate for migrate"])
                ])
            ),
            "out": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                _p.list.nested_literal_old([
                    _p.list.literal([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    constrained
                        ? _p.list.literal([
                            "data",
                            "unresolved",
                        ])
                        : _p.list.literal([
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
                    'subselection': _p.list.literal([]),
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
        'subselection': _pi.List<d_out.Temp_Value_Type_Specification.sub_selection.L>
        'constrained': boolean
    },
): d_out.Assign => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.a.select(sh.sv.context([])))
            case 'component': return _p.ss($, ($) => {
                return sh.a.select(
                    sh.sv.call(
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => sh.call.external($.import['l id'], $.module['l id']))
                                case 'internal': return _p.ss($, ($) => sh.call.local($['l id']))
                                case 'internal acyclic': return _p.ss($, ($) => sh.call.local($['l id']))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.a.select(sh.sv.context(_p.boolean.from.optional($.results).is_set() ? ["l value"] : [])),
                        null,
                        sh.lookups.not_set(),
                        sh.arguments_.not_set(),
                        [],
                    )
                )
            })
            case 'dictionary': return _p.ss($, ($) => {

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
                                        'subselection': _p.list.nested_literal_old([
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
                                'subselection': _p.list.nested_literal_old([
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
            case 'group': return _p.ss($, ($) => sh.a.group.literal($.__d_map(($, id) => sh.a.change_context(
                sh.sv.context([id]),
                Value(
                    $.value,
                    {
                        'type name': $p['type name'],
                        'subselection': _p.list.nested_literal_old([
                            $p.subselection,
                            [
                                sh.sub.group(id)
                            ]
                        ]),
                        'constrained': $p.constrained,
                    }
                )
            ))))
            case 'list': return _p.ss($, ($) => {

                return $p.constrained
                    ? sh.a.group.literal({
                        "l location": location,
                        "l list": sh.a.list.from.list.map(
                            sh.sv.context(_p.boolean.from.optional($.results).is_set() ? ["l value"] : []),
                            sh.a.group.literal({
                                "l item": _p_change_context($, ($) => {
                                    const tn = Value(
                                        $.value,
                                        {
                                            'type name': $p['type name'],
                                            'subselection': _p.list.nested_literal_old([
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
                                'subselection': _p.list.nested_literal_old([
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
            case 'nothing': return _p.ss($, ($) => sh.a.nothing())
            case 'number': return _p.ss($, ($) => sh.a.select(sh.sv.context([])))
            case 'optional': return _p.ss($, ($) => sh.a.optional.map(
                sh.sv.context([]),
                Value(
                    $,
                    {
                        'type name': $p['type name'],
                        'subselection': _p.list.nested_literal_old([
                            $p.subselection,
                            [
                                sh.sub.optional()
                            ]
                        ]),
                        'constrained': $p.constrained,
                    }
                )
            ))
            case 'reference': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => sh.a.nothing())
                    case 'selected': return _p.ss($, ($) => {
                        const tn = sh.a.text.copy(sh.sv.context($.results.__decide(
                            ($) => ["l value", "l id"],
                            () => ["l id"]
                        )))

                        return $p.constrained
                            ? sh.a.group.literal({
                                "l location": location,
                                "l reference": tn
                            })
                            : tn
                    })
                    default: return _p.au($[0])
                }
            }))
            case 'state': return _p.ss($, ($) => {
                const tn = sh.a.decide.state(
                    sh.sv.context(_p.boolean.from.optional($.results).is_set() ? ["l value"] : []),
                    $.options.__d_map(($, id) => sh.a.state.literal(id, Value(
                        $.value,
                        {
                            'type name': $p['type name'],
                            'subselection': _p.list.nested_literal_old([
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
                        _p.list.nested_literal_old([
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
            case 'text': return _p.ss($, ($) => sh.a.select(sh.sv.context([])))
            default: return _p.au($[0])
        }
    })
}
