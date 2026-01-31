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
        $.modules.__d_map(($) => sh.type.data(Value(
            $['root value'],
            {
                'type': $p.type,
            }
        ))),
    )
}

export const Module_Reference = (
    $: d_in.Module_Reference,
): d_out.Module_Reference => _p.decide.state($.location, ($) => {
    switch ($[0]) {
        case 'internal': return _p.ss($, ($) => sh.mr.local($['l id']))
        case 'external': return _p.ss($, ($) => sh.mr.imported(
            ` imports ${$.import['l id']}`,
            $.module['l id'],
        ))
        default: return _p.au($[0])
    }
})

export const Value = (
    $: d_in.Value,
    $p: {
        'type':
        | ['unconstrained', null]
        | ['unresolved', null]
        | ['resolved', null]
    }
): d_out.Value => {

    const add_location = $p.type[0] === 'unresolved'
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.t.boolean())
            case 'component': return _p.ss($, ($) => {
                const x: d_out.Value = _p.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => sh.t.component_imported(
                            ` imports ${$.import['l id']}`,
                            $.module['l id'],
                        ))
                        case 'internal': return _p.ss($, ($) => sh.t.component_sibling(
                            $['l id'],
                        ))
                        case 'internal cyclic': return _p.ss($, ($) => sh.t.component_sibling( //FIXME: is this correct?
                            $['l id'],
                        ))
                        default: return _p.au($[0])
                    }
                })
                return $p.type[0] === 'resolved'
                    ? Value_Results(
                        $.results,
                        {
                            'base type': x,
                        }
                    )
                    : x
            })
            case 'dictionary': return _p.ss($, ($) => add_location
                ? sh.t.group({
                    "l location": location,
                    "l dictionary": sh.t.dictionary(sh.t.group({
                        "l location": location,
                        "l entry": Value(
                            $.value,
                            {
                                'type': $p.type,
                            }
                        )
                    }))
                })
                : sh.t.dictionary(Value(
                    $.value,
                    $p
                ))
            )
            case 'group': return _p.ss($, ($) => sh.t.group($.__d_map(($, id) => Value(
                $.value,
                {
                    'type': $p.type,
                }
            ))))
            case 'list': return _p.ss($, ($) => {
                const list = $

                return _p.decide.state($p.type, ($) => {
                    switch ($[0]) {
                        case 'unconstrained': return _p.ss($, ($) => sh.t.list(Value(
                            list.value,
                            $p
                        )))
                        case 'unresolved': return _p.ss($, ($) => sh.t.group({
                            "l location": location,
                            "l list": sh.t.list(sh.t.group({
                                "l location": location,
                                "l item": Value(
                                    list.value,
                                    $p
                                )
                            }))
                        }))
                        case 'resolved': return _p.ss($, ($) => Value_Results(
                            list.results,
                            {
                                'base type': sh.t.list(_p.decide.optional(
                                    list.results,
                                    ($) => sh.t.group({
                                        "l results": sh.t.group(_p.dictionary.map(
                                            $,
                                            ($) => Value_Reference($)
                                        )),
                                        "l item": Value(
                                            list.value,
                                            $p
                                        )
                                    }),
                                    () => Value(
                                        list.value,
                                        $p
                                    )
                                )),
                            }
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
            case 'optional': return _p.ss($, ($) => sh.t.optional(Value(
                $,
                $p
            )))
            case 'reference': return _p.ss($, ($) => {
                const referent = $.referent

                return _p.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'derived': return _p.ss($, ($) => add_location
                            ? sh.t.nothing()
                            : Value_Reference(referent)
                        )
                        case 'selected': return _p.ss($, ($) => {
                            const selected = $
                            return _p.decide.state($p.type, ($) => {
                                switch ($[0]) {
                                    case 'unconstrained': return _p.ss($, ($) => sh.t.group({ //this is weird; a reference in an unconstrained schema
                                        "l location": location,
                                        "l reference": sh.t.text(),
                                    }))
                                    case 'resolved': return _p.ss($, ($) => sh.t.group(_p.dictionary.filter(
                                        _p.dictionary.literal<_pi.Optional_Value<d_out.Value>>({
                                            "l entry": _p.optional.set(_p_cc($, ($) => {
                                                return sh.t.reference(
                                                    Module_Reference(referent['module']),
                                                    _p.list.nested_literal_old([
                                                        Value_Path(referent.path),
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
                                        "l reference": sh.t.text(),
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        })
                        default: return _p.au($[0])
                    }
                })
            })
            case 'state': return _p.ss($, ($) => {
                const results = $.results
                const i = sh.t.state($.options.__d_map(($, id) => Value(
                    $.value,
                    $p
                )))
                return _p.decide.state($p.type, ($) => {
                    switch ($[0]) {
                        case 'unconstrained': return _p.ss($, ($) => i)
                        case 'unresolved': return _p.ss($, ($) => sh.t.group({
                            "l location": location,
                            "l state": i
                        }))
                        case 'resolved': return _p.ss($, ($) => Value_Results(
                            results,
                            {
                                'base type': i,
                            }
                        ))
                        default: return _p.au($[0])
                    }
                })
            }
            )
            case 'text': return _p.ss($, ($) => sh.t.text())
            default: return _p.au($[0])
        }
    })
}

const Value_Results = (
    $: d_in.Value_Results,
    $p: {
        'base type': d_out.Value
    }
): d_out.Value => {
    return _p.decide.optional(
        $,
        ($) => sh.t.group({
            "l results": sh.t.group(_p.dictionary.map(
                $,
                ($) => Value_Reference($)
            )),
            "l value": $p['base type'],
        }),
        () => $p['base type']
    )
}

const Value_Reference = (
    $: d_in.Value_Reference,
): d_out.Value => {
    return sh.t.reference(
        Module_Reference($['module']),
        Value_Path($.path)
    )
}

const Value_Path = (
    $: d_in.Value_Path,

): _pi.List<d_out.Value.reference.sub_selection.L> => {
    return $.tail['l value'].__l_map(($) => _p.decide.state($['l item']['l value'], ($) => {
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
): d_out.Value => _p.decide.state($.precision, ($) => {
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