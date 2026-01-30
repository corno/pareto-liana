import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import { _p_unreachable_code_path } from 'pareto-core/dist/unreachable_code_path'
import { _p_cc } from 'pareto-core/dist/change_context'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved" //FIXME; this should be unresolved

import * as sh from "pareto/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "../../../../temp_flatten_dictionary"

const location = sh.t.component_imported(
    ` location`,
    "Relative Location",
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
    const add_location = $p.type[0] === 'unresolved'

    return sh.m.module(
        op_flatten_dictionary(
            _p.dictionary.literal({
                " location": _p.dictionary.filter(
                    _p.dictionary.literal({
                        "": _p.optional.from_boolean(
                            add_location,
                            sh.import_.external(
                                "astn-core",
                                [
                                    "dist",
                                    "interface",
                                    "generated",
                                    "liana",
                                    "schemas",
                                    "location",
                                    "data",
                                ]
                            )
                        )
                    }),
                    ($) => $
                ),
                " imports ": _p_cc($, ($) => {
                    // const types = $p['what to generate']
                    return $p.imports.__d_map(($) => sh.import_.ancestor(
                        $p.depth + 1 + $['schema set child']['l up steps'],
                        $['schema set child']['l id'],
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
            () => _p_unreachable_code_path(),
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
        case 'internal': return _p.ss($, ($) => sh.tr.local($['l id']))
        case 'external': return _p.ss($, ($) => sh.tr.imported(
            ` imports ${$.import['l id']}`,
            $.type['l id'],
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
                        ` imports ${$.import['l id']}`,
                        $.type['l id'],
                    ))
                    case 'internal': return _p.ss($, ($) => sh.t.component_sibling(
                        $['l id'],
                    ))
                    case 'internal cyclic': return _p.ss($, ($) => sh.t.component_sibling( //FIXME: is this correct?
                        $['l id'],
                    ))
                    default: return _p.au($[0])
                }
            }))
            case 'dictionary': return _p.ss($, ($) => add_location
                ? sh.t.group({
                    "l location": location,
                    "l value": sh.t.dictionary(sh.t.group({
                        "l location": location,
                        "l entry": Type_Node(
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
            case 'group': return _p.ss($, ($) => sh.t.group($.__d_map(($, id) => Type_Node(
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
                            "l location": location,
                            "l value": sh.t.list(sh.t.group({
                                "l location": location,
                                "l item": Type_Node(
                                    list.node,
                                    $p
                                )
                            }))
                        }))
                        case 'resolved': return _p.ss($, ($) => list.result.__decide(
                            ($) => sh.t.group({
                                "l list": sh.t.list(sh.t.group({
                                    "l result": sh.t.reference(
                                        Type_Reference($),
                                        []
                                    ),
                                    "l item": Type_Node(
                                        list.node,
                                        $p
                                    )
                                })),
                                "l result": sh.t.reference(
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
                    case 'global': return _p.ss($, ($) => Number_Type($['l entry']))
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
                                    case 'unconstrained': return _p.ss($, ($) => sh.t.group({ //this is weird; a reference in an unconstrained schema
                                        "l location": location,
                                        "l value": sh.t.text(),
                                    }))
                                    case 'resolved': return _p.ss($, ($) => sh.t.group(_p.dictionary.filter(
                                        _p.dictionary.literal<_pi.Optional_Value<d_out.Type_Node>>({
                                            "l entry": _p.optional.set(_p_cc($, ($) => {
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
                                            "l id": _p.optional.set(sh.t.text()),
                                            "l up steps": _p.decide.state(selected.dependency, ($) => {
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
                                        "l location": location,
                                        "l value": sh.t.text(),
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
                    "l location": location,
                    "l value": sh.t.state($.__d_map(($, id) => Type_Node(
                        $.node,
                        $p
                    )))
                })
                : sh.t.state($.__d_map(($, id) => Type_Node(
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
    return $['l list'].__l_map(($) => _p.decide.state($['l item'], ($) => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => sh.sub.dictionary())
            case 'group': return _p.ss($, ($) => sh.sub.group($['l id']))
            case 'list': return _p.ss($, ($) => sh.sub.list())
            case 'optional': return _p.ss($, ($) => sh.sub.optional())
            case 'state': return _p.ss($, ($) => sh.sub.state($['l id']))
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