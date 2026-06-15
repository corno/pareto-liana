import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import p_unreachable_code_path from 'pareto-core/dist/implementation/specials/unreachable_code_path'
import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

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
        p_.dictionary.from.dictionary(
            p_.literal.dictionary({
                "location": p_.dictionary.from.dictionary(
                    p_.literal.dictionary({
                        "": p_.optional.from.boolean(
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
                            p_.decide.state($.schema.complexity, ($) => {
                                switch ($[0]) {
                                    case 'unconstrained': return p_.ss($, ($) => p_.literal.list([
                                        "data",
                                    ]))
                                    case 'constrained': return p_.ss($, ($) => p_.decide.state($p.type, ($) => {
                                        switch ($[0]) {
                                            case 'unconstrained': return p_.ss($, ($) => p_.literal.list([
                                                "data",
                                                "resolved",
                                            ]))
                                            case 'unresolved': return p_.ss($, ($) => p_.literal.list([
                                                "data",
                                                "unresolved",
                                            ]))
                                            case 'resolved': return p_.ss($, ($) => p_.literal.list([
                                                "data",
                                                "resolved",
                                            ]))
                                            default: return p_.au($[0])
                                        }
                                    }))
                                    default: return p_.au($[0])
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
): d_out.Module_Reference => p_.decide.state($.location, ($) => {
    switch ($[0]) {
        case 'internal': return p_.ss($, ($) => sh.mr.local($['l id']))
        case 'external': return p_.ss($, ($) => sh.mr.imported(
            "imports " + $.import['l id'],
            $.module['l id'],
        ))
        default: return p_.au($[0])
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
    return p_.decide.state($, ($) => {
        switch ($[0]) {
            case 'component': return p_.ss($, ($) => {
                const x: d_out.Value = p_.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'external': return p_.ss($, ($) => sh.t.component_imported(
                            "imports " + $.import['l id'],
                            $.module['l id'],
                        ))
                        case 'internal': return p_.ss($, ($) => sh.t.component_sibling(
                            $['l id'],
                        ))
                        case 'internal acyclic': return p_.ss($, ($) => sh.t.component_sibling( //FIXME: is this correct?
                            $['l id'],
                        ))
                        default: return p_.au($[0])
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
            case 'dictionary': return p_.ss($, ($) => add_location
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
            case 'group': return p_.ss($, ($) => sh.t.group($.__d_map(($, id) => Value(
                $.value,
                {
                    'type': $p.type,
                }
            ))))
            case 'list': return p_.ss($, ($) => {
                const list = $

                return p_.decide.state($p.type, ($) => {
                    switch ($[0]) {
                        case 'unconstrained': return p_.ss($, ($) => sh.t.list(Value(
                            list.value,
                            $p
                        )))
                        case 'unresolved': return p_.ss($, ($) => sh.t.group({
                            "l location": location,
                            "l list": sh.t.list(sh.t.group({
                                "l location": location,
                                "l item": Value(
                                    list.value,
                                    $p
                                )
                            }))
                        }))
                        case 'resolved': return p_.ss($, ($) => Value_Results(
                            list.results,
                            {
                                'base type': sh.t.list(p_.decide.optional(
                                    list.results,
                                    ($) => sh.t.group({
                                        "l results": sh.t.group(p_.dictionary.from.dictionary(
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
                        default: return p_.au($[0])
                    }
                })
            }
            )
            case 'nothing': return p_.ss($, ($) => sh.t.nothing())
            case 'simple': return p_.ss($, ($) => p_.decide.state($, ($) => {
                switch ($[0]) {
                    case 'global': return p_.ss($, ($) => Simple_Type($['l entry']))
                    default: return p_.au($[0])
                }
            }))
            case 'optional': return p_.ss($, ($) => sh.t.optional(Value(
                $,
                $p
            )))
            case 'reference': return p_.ss($, ($) => {
                const referent = $.referent

                return p_.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'derived': return p_.ss($, ($) => add_location
                            ? sh.t.nothing()
                            : Value_Reference(referent)
                        )
                        case 'selected': return p_.ss($, ($) => {
                            const selected = $
                            return p_.decide.state($p.type, ($) => {
                                switch ($[0]) {
                                    case 'unconstrained': return p_.ss($, ($) => sh.t.group({ //this is weird; a reference in an unconstrained schema
                                        "l location": location,
                                        "l reference": sh.t.text(),
                                    }))
                                    case 'resolved': return p_.ss($, ($) => {
                                        const ii = sh.t.group(
                                            p_.dictionary.from.dictionary(
                                                p_.literal.dictionary<p_di.Optional_Value<d_out.Value>>({
                                                    "l entry": p_.literal.set(p_change_context($, ($) => {
                                                        const location = Module_Reference(referent['module'])
                                                        const subselection = p_.literal.nested_list([
                                                            Value_Path(referent.path),
                                                            [
                                                                sh.sub.dictionary(),
                                                            ]
                                                        ])
                                                        return p_.decide.state(selected.dependency, ($) => {
                                                            switch ($[0]) {

                                                                case 'acyclic': return p_.ss($, ($) => sh.t.reference(
                                                                    location,
                                                                    subselection,
                                                                    'acyclic'
                                                                ))
                                                                case 'cyclic': return p_.ss($, ($) => sh.t.reference(
                                                                    location,
                                                                    subselection,
                                                                    'cyclic'
                                                                ))
                                                                case 'stack': return p_.ss($, ($) => sh.t.reference(
                                                                    location,
                                                                    subselection,
                                                                    'acyclic'
                                                                ))
                                                                default: return p_.au($[0])
                                                            }
                                                        })
                                                    })),
                                                    "l id": p_.literal.set(sh.t.text()),
                                                    "l up steps": p_.decide.state(selected.dependency, ($) => {
                                                        switch ($[0]) {
                                                            case 'acyclic': return p_.ss($, ($) => p_.literal.not_set())
                                                            case 'cyclic': return p_.ss($, ($) => p_.literal.not_set())
                                                            case 'stack': return p_.ss($, ($) => p_.literal.set(sh.t.natural()))
                                                            default: return p_.au($[0])
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
                                    case 'unresolved': return p_.ss($, ($) => sh.t.group({
                                        "l location": location,
                                        "l reference": sh.t.text(),
                                    }))
                                    default: return p_.au($[0])
                                }
                            })
                        })
                        default: return p_.au($[0])
                    }
                })
            })
            case 'state': return p_.ss($, ($) => {
                const results = $.results
                const i = sh.t.state($.options.__d_map(($, id) => Value(
                    $.value,
                    $p
                )))
                return p_.decide.state($p.type, ($) => {
                    switch ($[0]) {
                        case 'unconstrained': return p_.ss($, ($) => i)
                        case 'unresolved': return p_.ss($, ($) => sh.t.group({
                            "l location": location,
                            "l state": i
                        }))
                        case 'resolved': return p_.ss($, ($) => Value_Results(
                            results,
                            {
                                'base type': i,
                            }
                        ))
                        default: return p_.au($[0])
                    }
                })
            }
            )
            case 'text': return p_.ss($, ($) => sh.t.text())
            default: return p_.au($[0])
        }
    })
}

const Value_Results = (
    $: d_in.Value_Results,
    $p: {
        'base type': d_out.Value
    }
): d_out.Value => {
    return p_.decide.optional(
        $,
        ($) => sh.t.group({
            "l results": sh.t.group(
                p_.dictionary.from.dictionary(
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
    return $.tail['l value'].__l_map(($) => p_.decide.state($['l item']['l value'], ($) => {
        switch ($[0]) {
            case 'dictionary': return p_.ss($, ($) => sh.sub.dictionary())
            case 'group': return p_.ss($, ($) => sh.sub.group($['l id']))
            case 'list': return p_.ss($, ($) => sh.sub.list())
            case 'optional': return p_.ss($, ($) => sh.sub.optional())
            case 'state': return p_.ss($, ($) => sh.sub.state($['l id']))
            default: return p_.au($[0])
        }
    }))
}

export const Simple_Type = (
    $: d_in.Simple_Type,
): d_out.Value => {
    return p_.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'boolean': return p_.ss($, ($) => sh.t.boolean())
            case 'date': return p_.ss($, ($) => sh.t.integer())
            case 'number': return p_.ss($, ($) => p_.decide.state($.precision, ($) => {
                switch ($[0]) {
                    case 'approximation': return p_.ss($, ($) => sh.t.number_approximation())
                    case 'exact': return p_.ss($, ($) => p_.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'integer': return p_.ss($, ($) => sh.t.integer())
                            case 'natural': return p_.ss($, ($) => sh.t.natural())
                            case 'positive natural': return p_.ss($, ($) => sh.t.natural())
                            default: return p_.au($[0])
                        }
                    }))
                    default: return p_.au($[0])
                }
            }))
            default: return p_.au($[0])
        }
    })
}