import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

const location = sh.e.group({
    "file": sh.e.text_literal("implement me", 'quote'),
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
    $p.imports.__d_map(($, key) => sh_i.import_.ancestor(1, $['schema set child'].key, ["migrate boilerplate"])),
    $.types.__d_map(($, key) => sh.algorithm(
        sh.type_reference("signatures", key),
        false,
        false,
        false,
        Type_Node(
            $.node,
            {
                'type name': key,
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
                        case 'external': return _p.ss($, ($) => sh.s.from_variable_import(`${$.import.key}`, $.type.key, []))
                        case 'internal': return _p.ss($, ($) => sh.s.from_variable($.key, []))
                        case 'internal cyclic': return _p.ss($, ($) => sh.s.from_variable($.key, []))
                        default: return _p.au($[0])
                    }
                }),
                sh.e.select_from_context_deprecated([]),
                false,
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
            case 'group': return _p.ss($, ($) => sh.e.group($.__d_map(($, key) => sh.e.change_context(
                sh.s.from_context([key]),
                Type_Node(
                    $.node,
                    {
                        'type name': $p['type name'],
                        'subselection': _p.list.nested_literal_old([
                            $p.subselection,
                            [
                                sh.sub.group(key)
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
                                "element": _p.deprecated_cc($, ($) => {
                                    const tn = Type_Node(
                                        $.node,
                                        {
                                            'type name': $p['type name'],
                                            'subselection': _p.list.nested_literal_old([
                                                $p.subselection,
                                                [
                                                    sh.sub.group("list"),
                                                    sh.sub.list(),
                                                    sh.sub.group("element"),
                                                ]
                                            ]),
                                            'constrained': $p.constrained,
                                        }
                                    )
                                    return $.result.__decide(
                                        ($) => sh.e.change_context(
                                            sh.s.from_context(["element"]),
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
                        const tn = sh.e.select_from_context_deprecated(["key"])

                        return $p.constrained
                            ? sh.e.group({
                                "location": location,
                                "key": tn
                            })
                            : tn
                    })
                    default: return _p.au($[0])
                }
            }))
            case 'state': return _p.ss($, ($) => {
                const tn = sh.e.decide_state(
                    sh.s.from_context([]),
                    $.__d_map(($, key) => sh.e.state_literal(key, Type_Node(
                        $.node,
                        {
                            'type name': $p['type name'],
                            'subselection': _p.list.nested_literal_old([
                                $p.subselection,
                                $p.constrained
                                    ? [
                                        sh.sub.group("state"),
                                        sh.sub.state(key)
                                    ]
                                    : [
                                        sh.sub.state(key)
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
