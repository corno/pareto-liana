import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved" //FIXME; this should be unresolved

import * as sh from "pareto/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "../../../../temp_flatten_dictionary"

const location = sh.t.component_imported(
    ` location`,
    "Location",
)

// const location = sh.t.nothing()

export const Schema = (
    $: d_in.Schema,
    $p: {
        'imports': d_in.Imports,
        'depth': number,
        'type':
        | ['unconstrained', null]
        | ['unresolved', null]
        | ['resolved', null]
    }
): d_out.Module_Set.D => {
    return sh.m.module(
        op_flatten_dictionary(
            _p.dictionary.literal({
                " location": _p.dictionary.literal({
                    "": sh.import_.ancestor(
                        $p.depth + 2,
                        "generic",
                        [
                            "location",
                        ],
                    )
                }),
                " imports ": _p.deprecated_cc($, ($) => {
                    // const types = $p['what to generate']
                    return $p.imports.__d_map(($) => sh.import_.ancestor(
                        $p.depth + 1 + $['schema set child']['up steps'],
                        $['schema set child'].key,
                        _p.decide.state($.schema.complexity, ($) => {
                            switch ($[0]) {
                                case 'unconstrained': return _p.ss($, ($) => [
                                    "data",
                                ])
                                case 'constrained': return _p.ss($, ($) => _p.decide.state($p.type, ($) => {
                                    switch ($[0]) {
                                        case 'unconstrained': return _p.ss($, ($) => [
                                            "data",
                                            "resolved",
                                        ])
                                        case 'unresolved': return _p.ss($, ($) => [
                                            "data",
                                            "unresolved",
                                        ])
                                        case 'resolved': return _p.ss($, ($) => [
                                            "data",
                                            "resolved",
                                        ])
                                        default: return _p.au($[0])
                                    }
                                }))
                                default: return _p.au($[0])
                            }
                        }),
                    ))
                }),
            }),
            {
                'separator': "",
            },
            () => _p.unreachable_code_path(),
        ),
        $.types.__d_map(($) => sh.type.data(Type_Node(
            $.node,
            {
                'type': $p.type,
            }
        ))),
    )
}

export const Type_Reference = (
    $: d_in.Type_Reference,
): d_out.Type_Reference => _p.decide.state($.location, ($) => {
    switch ($[0]) {
        case 'internal': return _p.ss($, ($) => sh.tr.local($.key))
        case 'external': return _p.ss($, ($) => sh.tr.imported(
            ` imports ${$.import.key}`,
            $.type.key,
        ))
        default: return _p.au($[0])
    }
})

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'type':
        | ['unconstrained', null]
        | ['unresolved', null]
        | ['resolved', null]
    }
): d_out.Type_Node => {

    const add_location = $p.type[0] === 'unresolved'
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.t.boolean())
            case 'component': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'external': return _p.ss($, ($) => sh.t.component_imported(
                        ` imports ${$.import.key}`,
                        $.type.key,
                    ))
                    case 'internal': return _p.ss($, ($) => sh.t.component_sibling(
                        $.key,
                    ))
                    case 'internal cyclic': return _p.ss($, ($) => sh.t.component_sibling( //FIXME: is this correct?
                        $.key,
                    ))
                    default: return _p.au($[0])
                }
            }))
            case 'dictionary': return _p.ss($, ($) => add_location
                ? sh.t.group({
                    "location": location,
                    "dictionary": sh.t.dictionary(sh.t.group({
                        "location": location,
                        "entry": Type_Node(
                            $.node,
                            {
                                'type': $p.type,
                            }
                        )
                    }))
                })
                : sh.t.dictionary(Type_Node(
                    $.node,
                    $p
                ))
            )
            case 'group': return _p.ss($, ($) => sh.t.group($.__d_map(($, key) => Type_Node(
                $.node,
                {
                    'type': $p.type,
                }
            ))))
            case 'list': return _p.ss($, ($) => {
                const list = $

                return _p.decide.state($p.type, ($) => {
                    switch ($[0]) {
                        case 'unconstrained': return _p.ss($, ($) => sh.t.list(Type_Node(
                            list.node,
                            $p
                        )))
                        case 'unresolved': return _p.ss($, ($) => sh.t.group({
                            "location": location,
                            "list": sh.t.list(sh.t.group({
                                "location": location,
                                "element": Type_Node(
                                    list.node,
                                    $p
                                )
                            }))
                        }))
                        case 'resolved': return _p.ss($, ($) => list.result.__decide(
                            ($) => sh.t.group({
                                "list": sh.t.list(sh.t.group({
                                    "result": sh.t.reference(
                                        Type_Reference($),
                                        []
                                    ),
                                    "element": Type_Node(
                                        list.node,
                                        $p
                                    )
                                })),
                                "result": sh.t.reference(
                                    Type_Reference($),
                                    []
                                )
                            }),
                            () => sh.t.list(Type_Node(
                                list.node,
                                $p
                            ))
                        ))
                        default: return _p.au($[0])
                    }
                })
            }
            )
            case 'nothing': return _p.ss($, ($) => sh.t.nothing())
            case 'number': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($) => Number_Type($.entry))
                    case 'local': return _p.ss($, ($) => Number_Type($))
                    default: return _p.au($[0])
                }
            }))
            case 'optional': return _p.ss($, ($) => sh.t.optional(Type_Node(
                $,
                $p
            )))
            case 'reference': return _p.ss($, ($) => {
                const referent = $.referent

                return _p.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'derived': return _p.ss($, ($) => add_location
                            ? sh.t.nothing()
                            : sh.t.reference(
                                Type_Reference(referent['type location']),
                                Type_Node_Reference__tail(referent.path.tail)
                            )
                        )
                        case 'selected': return _p.ss($, ($) => {
                            const selected = $
                            return _p.decide.state($p.type, ($) => {
                                switch ($[0]) {
                                    case 'unconstrained': return _p.ss($, ($) => sh.t.group({
                                        "location": location,
                                        "key": sh.t.text(),
                                    }))
                                    case 'resolved': return _p.ss($, ($) => sh.t.group(_p.dictionary.filter(
                                        _p.dictionary.literal<_pi.Optional_Value<d_out.Type_Node>>({
                                            "entry": _p.optional.set(_p.deprecated_cc($, ($) => {
                                                return sh.t.reference(
                                                    Type_Reference(referent['type location']),
                                                    _p.list.nested_literal_old([
                                                        Type_Node_Reference__tail(referent.path.tail),
                                                        [
                                                            sh.sub.dictionary(),
                                                        ]
                                                    ]),
                                                    _p.decide.state(selected.dependency, ($) => {
                                                        switch ($[0]) {

                                                            case 'acyclic': return _p.ss($, ($) => 'acyclic')
                                                            case 'cyclic': return _p.ss($, ($) => 'cyclic')
                                                            case 'stack': return _p.ss($, ($) => 'acyclic')
                                                            default: return _p.au($[0])
                                                        }
                                                    })
                                                )
                                            })),
                                            "key": _p.optional.set(sh.t.text()),
                                            "up steps": _p.decide.state(selected.dependency, ($) => {
                                                switch ($[0]) {
                                                    case 'acyclic': return _p.ss($, ($) => _p.optional.not_set())
                                                    case 'cyclic': return _p.ss($, ($) => _p.optional.not_set())
                                                    case 'stack': return _p.ss($, ($) => _p.optional.set(sh.t.natural()))
                                                    default: return _p.au($[0])
                                                }
                                            })
                                        }),
                                        ($) => $,
                                    )))
                                    case 'unresolved': return _p.ss($, ($) => sh.t.group({
                                        "location": location,
                                        "key": sh.t.text(),
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        })
                        default: return _p.au($[0])
                    }
                })
            })
            case 'state': return _p.ss($, ($) => add_location
                ? sh.t.group({
                    "location": location,
                    "state": sh.t.state($.__d_map(($, key) => Type_Node(
                        $.node,
                        $p
                    )))
                })
                : sh.t.state($.__d_map(($, key) => Type_Node(
                    $.node,
                    $p
                )))
            )
            case 'text': return _p.ss($, ($) => sh.t.text())
            default: return _p.au($[0])
        }
    })
}

const Type_Node_Reference__tail = (
    $: d_in.Type_Node_Path.tail,

): _pi.List<d_out.Type_Node.reference.sub_selection.L> => {
    return $.list.__l_map(($) => _p.decide.state($.element, ($) => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => sh.sub.dictionary())
            case 'group': return _p.ss($, ($) => sh.sub.group($.key))
            case 'list': return _p.ss($, ($) => sh.sub.list())
            case 'optional': return _p.ss($, ($) => sh.sub.optional())
            case 'state': return _p.ss($, ($) => sh.sub.state($.key))
            default: return _p.au($[0])
        }
    }))
}

export const Number_Type = (
    $: d_in.Number_Type
): d_out.Type_Node => _p.decide.state($.precision, ($) => {
    switch ($[0]) {
        case 'approximation': return _p.ss($, ($) => sh.t.number_approximation())
        case 'exact': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'integer': return _p.ss($, ($) => sh.t.integer())
                case 'natural': return _p.ss($, ($) => sh.t.natural())
                case 'positive natural': return _p.ss($, ($) => sh.t.natural())
                default: return _p.au($[0])
            }
        }))
        default: return _p.au($[0])
    }
})