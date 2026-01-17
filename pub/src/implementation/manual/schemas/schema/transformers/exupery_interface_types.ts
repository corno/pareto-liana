import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data/resolved"

import * as sh from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"

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
                        "core",
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
                        _p.sg($p.type, ($) => {
                            switch ($[0]) {
                                case 'unconstrained': return _p.ss($, ($) => [
                                    "data",
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
                'add location': _p.sg($p.type, ($) => {
                    switch ($[0]) {
                        case 'unconstrained': return _p.ss($, ($) => false)
                        case 'unresolved': return _p.ss($, ($) => true)
                        case 'resolved': return _p.ss($, ($) => false)
                        default: return _p.au($[0])
                    }
                }),
            }
        ))),
    )
}

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'add location': boolean,
    }
): d_out.Type => _p.sg($, ($) => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => sh.t.boolean())
        case 'component': return _p.ss($, ($) => _p.sg($, ($) => {
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
        case 'dictionary': return _p.ss($, ($) => $p['add location']
            ? sh.t.group({
                "location": location,
                "dictionary": sh.t.dictionary(sh.t.group({
                    "location": location,
                    "entry": Type_Node(
                        $.node,
                        {
                            'add location': $p['add location'],
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
                'add location': $p['add location'],
            }
        ))))
        case 'list': return _p.ss($, ($) => $p['add location']
            ? sh.t.group({
                "location": location,
                "list": sh.t.list(sh.t.group({
                    "location": location,
                    "element": Type_Node(
                        $.node,
                        $p
                    )
                }))
            })
            : sh.t.list(Type_Node(
                $.node,
                $p
            ))
        )
        case 'nothing': return _p.ss($, ($) => sh.t.nothing())
        case 'number': return _p.ss($, ($) => _p.sg($, ($) => {
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
            return _p.sg($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => $p['add location']
                        ? sh.t.nothing()
                        : Type_Node_Reference(
                            referent,
                            {
                                'tail': Type_Node_Reference__tail(referent.tail),
                                'circular_dependent': false,
                            }
                        )
                    )
                    case 'selected': return _p.ss($, ($) => $p['add location']
                        ? sh.t.group({
                            "location": location,
                            "key": sh.t.text(),
                        })
                        : sh.t.group({
                            "entry": _p.deprecated_cc($, ($) => {
                                const temp_tnr = Type_Node_Reference(
                                    referent,
                                    {
                                        'tail': _p.list.nested_literal([
                                            Type_Node_Reference__tail(referent.tail),
                                            [
                                                sh.sub.dictionary(),
                                            ]
                                        ]),
                                        'circular_dependent': _p.sg($.dependency, ($) => {
                                            switch ($[0]) {
                                                case 'acyclic': return _p.ss($, ($) => false)
                                                case 'cyclic': return _p.ss($, ($) => true)
                                                case 'stack': return _p.ss($, ($) => false)
                                                default: return _p.au($[0])
                                            }
                                        }),
                                    }
                                )
                                return temp_tnr
                            }),
                            "key": sh.t.text(),
                        })
                    )
                    default: return _p.au($[0])
                }
            })
        })
        case 'state group': return _p.ss($, ($) => $p['add location']
            ? sh.t.group({
                "location": location,
                "state group": sh.t.state_group($.__d_map(($, key) => Type_Node(
                    $.node,
                    $p
                )))
            })
            : sh.t.state_group($.__d_map(($, key) => Type_Node(
                $.node,
                $p
            )))
        )
        case 'text': return _p.ss($, ($) => sh.t.text())
        default: return _p.au($[0])
    }
})

const Type_Node_Reference__tail = (
    $: d_in.Type_Node_Reference.tail,

): _pi.List<d_out.Type.reference.sub_selection.L> => {
    return $.__l_map(($) => _p.sg($, ($) => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => sh.sub.dictionary())
            case 'group': return _p.ss($, ($) => sh.sub.group($.key))
            case 'list': return _p.ss($, ($) => sh.sub.list())
            case 'optional': return _p.ss($, ($) => sh.sub.optional())
            case 'state group': return _p.ss($, ($) => sh.sub.state_group($.key))
            default: return _p.au($[0])
        }
    }))
}

export const Type_Node_Reference = (
    $: d_in.Type_Node_Reference,
    $p: {
        'tail': _pi.List<d_out.Type.reference.sub_selection.L>,
        circular_dependent: boolean,
    }

): d_out.Type => _p.sg($['type location'].location, ($) => {
    switch ($[0]) {
        case 'external': return _p.ss($, ($) => sh.t.reference_imported(
            `imports ${$.import.key}`,
            $.type.key,
            $p.tail,

        ))
        case 'internal': return _p.ss($, ($) => sh.t.reference_sibling(
            $.key,
            $p.circular_dependent,
            $p.tail,
        ))
        default: return _p.au($[0])
    }
})

export const Number_Type = (
    $: d_in.Number_Type
): d_out.Type => _p.sg($.precision, ($) => {
    switch ($[0]) {
        case 'approximation': return _p.ss($, ($) => sh.t.number_approximation())
        case 'exact': return _p.ss($, ($) => _p.sg($.type, ($) => {
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