import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/expression'
import * as _pdev from 'pareto-core-dev'
import _p_change_context from 'pareto-core/dist/_p_change_context'


import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

const location = sh.e.group.literal({
    "document resource identifier": sh.e.text.literal("implement me", 'freeform'),
    "line": sh.e.number.integer_literal(42),
    "column": sh.e.number.integer_literal(42),
})

export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
    }
): d_out.Package_Set.D => {
    const constrained = $.complexity[0] === 'constrained'
    return sh.m.package_(
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
                _p.list.literal(["migrate boilerplate"])
            ])
        ),
        "out": sh_i.import_.ancestor(
            5,
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
    $.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child']['l id'], ["migrate boilerplate"])),
    $.modules.__d_map(($, id) => sh.algorithm(
        "signatures",
        id,
        false,
        false,
        false,
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
): d_out.Expression => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.e.select(sh.s.context([])))
            case 'component': return _p.ss($, ($) => {
                return sh.e.select(
                    sh.s.call(
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => sh.call.external($.import['l id'], $.module['l id']))
                                case 'internal': return _p.ss($, ($) => sh.call.local($['l id']))
                                case 'internal acyclic': return _p.ss($, ($) => sh.call.local($['l id']))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.e.select(sh.s.context(_p.boolean.optional_is_set($.results) ? ["l value"] : [])),
                        null,
                        sh.lookups.not_set(),
                        sh.arguments_.not_set(),
                        [],
                    )
                )
            })
            case 'dictionary': return _p.ss($, ($) => {

                return $p.constrained
                    ? sh.e.group.literal({
                        "l location": location,
                        "l dictionary": sh.e.dictionary.map(
                            sh.s.context([]),
                            sh.e.group.literal({
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
                    : sh.e.dictionary.map(
                        sh.s.context([]),
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
            case 'group': return _p.ss($, ($) => sh.e.group.literal($.__d_map(($, id) => sh.e.change_context(
                sh.s.context([id]),
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
                    ? sh.e.group.literal({
                        "l location": location,
                        "l list": sh.e.list.map(
                            sh.s.context(_p.boolean.optional_is_set($.results) ? ["l value"] : []),
                            sh.e.group.literal({
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
                                        ($) => sh.e.change_context(
                                            sh.s.context(["l item"]),
                                            tn
                                        ),
                                        () => tn
                                    )
                                }),
                                "l location": location
                            })
                        )
                    })
                    : sh.e.list.map(
                        sh.s.context([]),
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
            case 'nothing': return _p.ss($, ($) => sh.e.nothing())
            case 'number': return _p.ss($, ($) => sh.e.select(sh.s.context([])))
            case 'optional': return _p.ss($, ($) => sh.e.optional.map(
                sh.s.context([]),
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
                    case 'derived': return _p.ss($, ($) => sh.e.nothing())
                    case 'selected': return _p.ss($, ($) => {
                        const tn = sh.e.select(sh.s.context(["l id"]))

                        return $p.constrained
                            ? sh.e.group.literal({
                                "l location": location,
                                "l reference": tn
                            })
                            : tn
                    })
                    default: return _p.au($[0])
                }
            }))
            case 'state': return _p.ss($, ($) => {
                const tn = sh.e.decide.state(
                sh.s.context(_p.boolean.optional_is_set($.results) ? ["l value"] : []),
                    $.options.__d_map(($, id) => sh.e.state.literal(id, Value(
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
                    ? sh.e.group.literal({
                        "l location": location,
                        "l state": tn
                    })
                    : tn
            })
            case 'text': return _p.ss($, ($) => sh.e.select(sh.s.context([])))
            default: return _p.au($[0])
        }
    })
}
