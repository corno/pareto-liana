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
            3, //5,
            "interface",
            _p.list.nested_literal_old([
                _p.list.literal([
                    // "generated",
                    // "pareto",
                    "schemas"
                ]),
                $p.path,
                _p.list.literal(["marshall"])
            ])
        ),
        "out": sh_i.import_.external(
            "astn",
            [
                "dist",
                "interface",
                "generated",
                "pareto",
                "schemas",
                "sealed target",
                "data types",
                "source",
            ],
        ),
    }),
    $p.imports.__d_map(($, key) => sh_i.import_.ancestor(1, $['schema set child'].key, ["marshall"])),
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
        'subselection': _pi.List<d_out.Type_Node_Reference.sub_selection.L>
    },
): d_out.Expression => {

    const string = (value: d_out.Expression, delimiter: 'quote' | 'backtick' | 'none'): d_out.Expression => {
        return sh.e.state_literal(
            "text",
            sh.e.group({
                "delimiter": sh.e.state_literal(delimiter, sh.e.null_()),
                "value": value,
            })
        )
    }

    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => string(
                sh.e.implement_me(),
                'backtick' //FIXME should be 'none'
            ))
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
            case 'dictionary': return _p.ss($, ($) => sh.e.state_literal(
                "dictionary",
                sh.e.dictionary_map(
                    sh.s.from_context([]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': _p.list.nested_literal_old([
                                $p.subselection,
                                [
                                    sh.sub.dictionary(),
                                ]
                            ]),
                        }
                    )
                )
            ))
            case 'group': return _p.ss($, ($) => sh.e.state_literal(
                "verbose group",
                sh.e.dictionary_literal($.__d_map(($, key) => sh.e.change_context(
                    sh.s.from_context([key]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': _p.list.nested_literal_old([
                                $p.subselection,
                                [
                                    sh.sub.group(key),
                                ]
                            ]),
                        }
                    )
                )))
            ))
            case 'list': return _p.ss($, ($) => sh.e.state_literal(
                "list",
                sh.e.list_map(
                    sh.s.from_context([]),
                    Type_Node(
                        $.node,
                        {
                            'type': $p.type,
                            'subselection': _p.list.nested_literal_old([
                                $p.subselection,
                                [
                                    sh.sub.list(),
                                ]
                            ]),
                        }
                    )
                )))
            case 'nothing': return _p.ss($, ($) => sh.e.state_literal("nothing", sh.e.null_()))
            case 'number': return _p.ss($, ($) => string(
                sh.e.implement_me(),
                'backtick'//FIXME should be 'none'
            ))
            case 'optional': return _p.ss($, ($) => sh.e.state_literal(
                "optional",
                sh.e.decide_optional(
                    sh.s.from_context([]),
                    sh.e.state_literal(
                        "set",
                        Type_Node(
                            $,
                            {
                                'type': $p.type,
                                'subselection': _p.list.nested_literal_old([
                                    $p.subselection,
                                    [
                                        sh.sub.optional(),
                                    ]
                                ]),
                            }
                        ),
                    ),
                    sh.e.state_literal(
                        "not set",
                        sh.e.null_()
                    ),
                    sh.type_node_reference(
                        "out",
                        "Value",
                        [sh.sub.state("optional")]
                    ),
                )))
            case 'reference': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => sh.e.state_literal("nothing", sh.e.null_()))
                    case 'selected': return _p.ss($, ($) => string(sh.e.select_from_context_deprecated(["key"]), 'backtick'))
                    default: return _p.au($[0])
                }
            }))
            case 'state group': return _p.ss($, ($) => sh.e.state_literal(
                "state",
                sh.e.decide_state_group(
                    sh.s.from_context([]),
                    $.__d_map(($, key) => sh.e.group({
                        "state": sh.e.string(key, 'quote'),
                        "value": Type_Node(
                            $.node,
                            {
                                'type': $p.type,
                                'subselection': _p.list.nested_literal_old([
                                    $p.subselection,
                                    [
                                        sh.sub.state(key),
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
            case 'text': return _p.ss($, ($) => string(sh.e.select_from_context_deprecated([]), 'quote'))
            default: return _p.au($[0])
        }
    })
}
