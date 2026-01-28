import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

const location = sh.e.group({
    "file": sh.e.text_literal("implement me", 'freeform'),
    "line": sh.e.integer(42),
    "column": sh.e.integer(42),
})

export const Schema = (
    $: d_in.Schema,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports,
        'constrained': boolean,
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
                $p.constrained
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
    $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child'].id, ["migrate boilerplate"])),
    $.types.__d_map(($, id) => sh.algorithm(
        sh.type_reference("signatures", id),
        false,
        false,
        false,
        Type_Node(
            $.node,
            {
                'type name': id,
                'subselection': _p.list.literal([]),
                'constrained': $p.constrained,
            }
        ),
    )),
)

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'type name': string
        'subselection': _pi.List<d_out.Type_Node_Reference.sub_selection.L>
        'constrained': boolean
    },
): d_out.Expression => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
            case 'component': return _p.ss($, ($) => sh.e.call(
                _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => sh.s.from_variable_import(`${$.import.id}`, $.type.id, []))
                        case 'internal': return _p.ss($, ($) => sh.s.from_variable($.id, []))
                        case 'internal cyclic': return _p.ss($, ($) => sh.s.from_variable($.id, []))
                        default: return _p.au($[0])
                    }
                }),
                sh.e.select_from_context_deprecated([]),
                null,
                null
            ))
            case 'dictionary': return _p.ss($, ($) => {

                return $p.constrained
                    ? sh.e.group({
                        "location": location,
                        "dictionary": sh.e.dictionary_map(
                            sh.s.from_context([]),
                            sh.e.group({
                                "entry": Type_Node(
                                    $.node,
                                    {
                                        'type name': $p['type name'],
                                        'subselection': _p.list.nested_literal_old([
                                            $p.subselection,
                                            [
                                                sh.sub.group("dictionary"),
                                                sh.sub.dictionary(),
                                                sh.sub.group("entry"),
                                            ]
                                        ]),
                                        'constrained': $p.constrained,
                                    }
                                ),
                                "location": location
                            })
                        )
                    })
                    : sh.e.dictionary_map(
                        sh.s.from_context([]),
                        Type_Node(
                            $.node,
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
            case 'group': return _p.ss($, ($) => sh.e.group($.__d_map(($, id) => sh.e.change_context(
                sh.s.from_context([id]),
                Type_Node(
                    $.node,
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
                    ? sh.e.group({
                        "location": location,
                        "list": sh.e.list_map(
                            sh.s.from_context(
                                $.result.__decide(
                                    ($) => ["list"],
                                    () => [],
                                )
                            ),
                            sh.e.group({
                                "item": _p.deprecated_cc($, ($) => {
                                    const tn = Type_Node(
                                        $.node,
                                        {
                                            'type name': $p['type name'],
                                            'subselection': _p.list.nested_literal_old([
                                                $p.subselection,
                                                [
                                                    sh.sub.group("list"),
                                                    sh.sub.list(),
                                                    sh.sub.group("item"),
                                                ]
                                            ]),
                                            'constrained': $p.constrained,
                                        }
                                    )
                                    return $.result.__decide(
                                        ($) => sh.e.change_context(
                                            sh.s.from_context(["item"]),
                                            tn
                                        ),
                                        () => tn
                                    )
                                }),
                                "location": location
                            })
                        )
                    })
                    : sh.e.list_map(
                        sh.s.from_context([]),
                        Type_Node(
                            $.node,
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
            case 'nothing': return _p.ss($, ($) => sh.e.null_())
            case 'number': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
            case 'optional': return _p.ss($, ($) => sh.e.optional_map(
                sh.s.from_context([]),
                Type_Node(
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
                    case 'derived': return _p.ss($, ($) => sh.e.null_())
                    case 'selected': return _p.ss($, ($) => {
                        const tn = sh.e.select_from_context_deprecated(["id"])

                        return $p.constrained
                            ? sh.e.group({
                                "location": location,
                                "id": tn
                            })
                            : tn
                    })
                    default: return _p.au($[0])
                }
            }))
            case 'state': return _p.ss($, ($) => {
                const tn = sh.e.decide_state(
                    sh.s.from_context([]),
                    $.__d_map(($, id) => sh.e.state_literal(id, Type_Node(
                        $.node,
                        {
                            'type name': $p['type name'],
                            'subselection': _p.list.nested_literal_old([
                                $p.subselection,
                                $p.constrained
                                    ? [
                                        sh.sub.group("state"),
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
                                    sh.sub.group("state"),
                                ]
                                : [
                                ]
                        ]),
                    ),
                )
                return $p.constrained
                    ? sh.e.group({
                        "location": location,
                        "state": tn
                    })
                    : tn
            })
            case 'text': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
            default: return _p.au($[0])
        }
    })
}
