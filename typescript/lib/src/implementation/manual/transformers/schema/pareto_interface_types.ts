import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_di from 'pareto-core/dist/data/interface'
import p_unreachable_code_path from 'pareto-core/dist/specials/unreachable_code_path'
import p_change_context from 'pareto-core/dist/specials/change_context'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved" //FIXME; this should be unresolved

import * as sh from "pareto/dist/shorthands/interface"

const location = sh.t.component_imported(
    "location",
    "Range",
)

export const Schema = (
    $: d_in.Schema,
    $p: {
        'imports': d_in.Schema_Imports,
        'depth': number,
        'type':
        | ['unconstrained', null]
        | ['unresolved', null]
        | ['resolved', null]
    }
): d_out.Package_Set.D => {
    const add_location = $p.type[0] === 'unresolved'

    return sh.m.package_data(
        pt.dictionary.from.dictionary(
            pt.literal.dictionary({
                "location": pt.dictionary.from.dictionary(
                    pt.literal.dictionary({
                        "": pt.optional.from.boolean(
                            add_location,
                        ).convert(
                            () => sh.import_.external(
                                "liana-core",
                                [
                                    "dist",
                                    "interface",
                                    "to be generated",
                                    "document and location",
                                ]
                            )
                        )
                    }),
                ).map_optionally(
                    ($) => $
                ),
                "imports ": p_change_context($, ($) => {
                    // const types = $p['what to generate']
                    return $p.imports.__d_map(
                        ($) => sh.import_.ancestor(
                            $p.depth + 1 + $['schema set child']['l value']['l up steps'],
                            $['schema set child']['l value']['l id'],
                            pt.decide.state($.schema.complexity, ($) => {
                                switch ($[0]) {
                                    case 'unconstrained': return pt.ss($, ($) => pt.literal.list([
                                        "data",
                                    ]))
                                    case 'constrained': return pt.ss($, ($) => pt.decide.state($p.type, ($) => {
                                        switch ($[0]) {
                                            case 'unconstrained': return pt.ss($, ($) => pt.literal.list([
                                                "data",
                                                "resolved",
                                            ]))
                                            case 'unresolved': return pt.ss($, ($) => pt.literal.list([
                                                "data",
                                                "unresolved",
                                            ]))
                                            case 'resolved': return pt.ss($, ($) => pt.literal.list([
                                                "data",
                                                "resolved",
                                            ]))
                                            default: return pt.au($[0])
                                        }
                                    }))
                                    default: return pt.au($[0])
                                }
                            }),
                        )
                    )
                }),
            }),
        ).flatten(
            ($) => $,
            (parent_id, child_id) => parent_id + child_id,
            {
                duplicate_id: () => p_unreachable_code_path("the root keys are fixed; 'location' and 'imports'"),
            }

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
): d_out.Module_Reference => pt.decide.state($.location, ($) => {
    switch ($[0]) {
        case 'internal': return pt.ss($, ($) => sh.mr.local($['l id']))
        case 'external': return pt.ss($, ($) => sh.mr.imported(
            "imports " + $.import['l id'],
            $.module['l id'],
        ))
        default: return pt.au($[0])
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
    return pt.decide.state($, ($) => {
        switch ($[0]) {
            case 'component': return pt.ss($, ($) => {
                const x: d_out.Value = pt.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return pt.ss($, ($) => sh.t.component_imported(
                            "imports " + $.import['l id'],
                            $.module['l id'],
                        ))
                        case 'internal': return pt.ss($, ($) => sh.t.component_sibling(
                            $['l id'],
                        ))
                        case 'internal acyclic': return pt.ss($, ($) => sh.t.component_sibling( //FIXME: is this correct?
                            $['l id'],
                        ))
                        default: return pt.au($[0])
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
            case 'dictionary': return pt.ss($, ($) => add_location
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
            case 'group': return pt.ss($, ($) => sh.t.group($.__d_map(($, id) => Value(
                $.value,
                {
                    'type': $p.type,
                }
            ))))
            case 'list': return pt.ss($, ($) => {
                const list = $

                return pt.decide.state($p.type, ($) => {
                    switch ($[0]) {
                        case 'unconstrained': return pt.ss($, ($) => sh.t.list(Value(
                            list.value,
                            $p
                        )))
                        case 'unresolved': return pt.ss($, ($) => sh.t.group({
                            "l location": location,
                            "l list": sh.t.list(sh.t.group({
                                "l location": location,
                                "l item": Value(
                                    list.value,
                                    $p
                                )
                            }))
                        }))
                        case 'resolved': return pt.ss($, ($) => Value_Results(
                            list.results,
                            {
                                'base type': sh.t.list(pt.decide.optional(
                                    list.results,
                                    ($) => sh.t.group({
                                        "l results": sh.t.group(pt.dictionary.from.dictionary(
                                            $,
                                        ).map(
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
                        default: return pt.au($[0])
                    }
                })
            }
            )
            case 'nothing': return pt.ss($, ($) => sh.t.nothing())
            case 'simple': return pt.ss($, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'global': return pt.ss($, ($) => Simple_Type($['l entry']))
                    default: return pt.au($[0])
                }
            }))
            case 'optional': return pt.ss($, ($) => sh.t.optional(Value(
                $,
                $p
            )))
            case 'reference': return pt.ss($, ($) => {
                const referent = $.referent

                return pt.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'derived': return pt.ss($, ($) => add_location
                            ? sh.t.nothing()
                            : Value_Reference(referent)
                        )
                        case 'selected': return pt.ss($, ($) => {
                            const selected = $
                            return pt.decide.state($p.type, ($) => {
                                switch ($[0]) {
                                    case 'unconstrained': return pt.ss($, ($) => sh.t.group({ //this is weird; a reference in an unconstrained schema
                                        "l location": location,
                                        "l reference": sh.t.text(),
                                    }))
                                    case 'resolved': return pt.ss($, ($) => {
                                        const ii = sh.t.group(
                                            pt.dictionary.from.dictionary(
                                                pt.literal.dictionary<p_di.Optional_Value<d_out.Value>>({
                                                    "l entry": pt.literal.set(p_change_context($, ($) => {
                                                        const location = Module_Reference(referent['module'])
                                                        const subselection = pt.literal.nested_list([
                                                            Value_Path(referent.path),
                                                            [
                                                                sh.sub.dictionary(),
                                                            ]
                                                        ])
                                                        return pt.decide.state(selected.dependency, ($) => {
                                                            switch ($[0]) {

                                                                case 'acyclic': return pt.ss($, ($) => sh.t.reference(
                                                                    location,
                                                                    subselection,
                                                                    'acyclic'
                                                                ))
                                                                case 'cyclic': return pt.ss($, ($) => sh.t.reference(
                                                                    location,
                                                                    subselection,
                                                                    'cyclic'
                                                                ))
                                                                case 'stack': return pt.ss($, ($) => sh.t.reference(
                                                                    location,
                                                                    subselection,
                                                                    'acyclic'
                                                                ))
                                                                default: return pt.au($[0])
                                                            }
                                                        })
                                                    })),
                                                    "l id": pt.literal.set(sh.t.text()),
                                                    "l up steps": pt.decide.state(selected.dependency, ($) => {
                                                        switch ($[0]) {
                                                            case 'acyclic': return pt.ss($, ($) => pt.literal.not_set())
                                                            case 'cyclic': return pt.ss($, ($) => pt.literal.not_set())
                                                            case 'stack': return pt.ss($, ($) => pt.literal.set(sh.t.natural()))
                                                            default: return pt.au($[0])
                                                        }
                                                    })
                                                }),
                                            ).map_optionally(
                                                ($) => $,
                                            )
                                        )
                                        return Value_Results(
                                            selected.results,
                                            {
                                                'base type': ii,
                                            }
                                        )
                                    })
                                    case 'unresolved': return pt.ss($, ($) => sh.t.group({
                                        "l location": location,
                                        "l reference": sh.t.text(),
                                    }))
                                    default: return pt.au($[0])
                                }
                            })
                        })
                        default: return pt.au($[0])
                    }
                })
            })
            case 'state': return pt.ss($, ($) => {
                const results = $.results
                const i = sh.t.state($.options.__d_map(($, id) => Value(
                    $.value,
                    $p
                )))
                return pt.decide.state($p.type, ($) => {
                    switch ($[0]) {
                        case 'unconstrained': return pt.ss($, ($) => i)
                        case 'unresolved': return pt.ss($, ($) => sh.t.group({
                            "l location": location,
                            "l state": i
                        }))
                        case 'resolved': return pt.ss($, ($) => Value_Results(
                            results,
                            {
                                'base type': i,
                            }
                        ))
                        default: return pt.au($[0])
                    }
                })
            }
            )
            case 'text': return pt.ss($, ($) => sh.t.text())
            default: return pt.au($[0])
        }
    })
}

const Value_Results = (
    $: d_in.Value_Results,
    $p: {
        'base type': d_out.Value
    }
): d_out.Value => {
    return pt.decide.optional(
        $,
        ($) => sh.t.group({
            "l results": sh.t.group(
                pt.dictionary.from.dictionary(
                    $,
                ).map(
                    ($) => Value_Reference($)
                )
            ),
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

): p_di.List<d_out.Value.reference.sub_selection.L> => {
    return $.tail['l value'].__l_map(($) => pt.decide.state($['l item']['l value'], ($) => {
        switch ($[0]) {
            case 'dictionary': return pt.ss($, ($) => sh.sub.dictionary())
            case 'group': return pt.ss($, ($) => sh.sub.group($['l id']))
            case 'list': return pt.ss($, ($) => sh.sub.list())
            case 'optional': return pt.ss($, ($) => sh.sub.optional())
            case 'state': return pt.ss($, ($) => sh.sub.state($['l id']))
            default: return pt.au($[0])
        }
    }))
}

export const Simple_Type = (
    $: d_in.Simple_Type,
): d_out.Value => {
    return pt.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'boolean': return pt.ss($, ($) => sh.t.boolean())
            case 'date': return pt.ss($, ($) => sh.t.integer())
            case 'number': return pt.ss($, ($) => pt.decide.state($.precision, ($) => {
                switch ($[0]) {
                    case 'approximation': return pt.ss($, ($) => sh.t.number_approximation())
                    case 'exact': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'integer': return pt.ss($, ($) => sh.t.integer())
                            case 'natural': return pt.ss($, ($) => sh.t.natural())
                            case 'positive natural': return pt.ss($, ($) => sh.t.natural())
                            default: return pt.au($[0])
                        }
                    }))
                    default: return pt.au($[0])
                }
            }))
            default: return pt.au($[0])
        }
    })
}