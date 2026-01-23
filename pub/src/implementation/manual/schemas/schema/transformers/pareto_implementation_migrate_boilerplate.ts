import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

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
        )
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
                'type': key,
                'subselection': _p.list.literal([])
            }
        ),
    )),
)

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'type': string
        'subselection': _pi.List<d_out_interface.Type.reference.sub_selection.L>
    },
): d_out.Expression => {
    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
            case 'component': return _p.ss($, ($) => sh.e.call(
                _p.sg($, ($) => {
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
            case 'dictionary': return _p.ss($, ($) => sh.e.dictionary_map(
                sh.s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal_old([
                            $p.subselection,
                            [
                                sh_i.sub.dictionary()
                            ]
                        ]),
                    }
                )
            ))
            case 'group': return _p.ss($, ($) => sh.e.group($.__d_map(($, key) => sh.e.change_context(
                sh.s.from_context([key]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal_old([
                            $p.subselection,
                            [
                                sh_i.sub.group(key)
                            ]
                        ]),
                    }
                )
            ))))
            case 'list': return _p.ss($, ($) => sh.e.list_map(
                sh.s.from_context([]),
                Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal_old([
                            $p.subselection,
                            [
                                sh_i.sub.list()
                            ]
                        ]),
                    }
                )
            ))
            case 'nothing': return _p.ss($, ($) => sh.e.null_())
            case 'number': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
            case 'optional': return _p.ss($, ($) => sh.e.optional_map(
                sh.s.from_context([]),
                Type_Node(
                    $,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal_old([
                            $p.subselection,
                            [
                                sh_i.sub.optional()
                            ]
                        ]),
                    }
                )
            ))
            case 'reference': return _p.ss($, ($) => _p.sg($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => sh.e.null_())
                    case 'selected': return _p.ss($, ($) => sh.e.select_from_context_deprecated(["key"]))
                    default: return _p.au($[0])
                }
            }))
            case 'state group': return _p.ss($, ($) => sh.e.decide_state_group(
                sh.s.from_context([]),
                $.__d_map(($, key) => sh.e.case_(key, Type_Node(
                    $.node,
                    {
                        'type': $p.type,
                        'subselection': _p.list.nested_literal_old([
                            $p.subselection,
                            [
                                sh_i.sub.state_group(key)
                            ]
                        ]),
                    }
                ))),
                sh.type_node_reference(
                    "out",
                    $p.type,
                    $p.subselection,
                ),
            ))
            case 'text': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
            default: return _p.au($[0])
        }
    })
}
