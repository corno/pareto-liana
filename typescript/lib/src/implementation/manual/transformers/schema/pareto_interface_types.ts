import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import p_unreachable_code_path from 'pareto-core/dist/implementation/transformer/specials/unreachable_code_path'
import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved" //FIXME; this should be unresolved

namespace interface_ {

    export type Schema = p_i.Transformer_With_Parameter<
        d_in.Schema,
        d_out.Package_Set.D,
        {
            'imports': d_in.Schema_Imports,
            'depth': number,
            'type':
            | ['unconstrained', null]
            | ['unresolved', null]
            | ['resolved', null]
        }
    >

    export type Module_Reference = p_i.Transformer<
        d_in.Module_Reference,
        d_out.Module_Reference
    >

    export type Value = p_i.Transformer_With_Parameter<
        d_in.Value,
        d_out.Value,
        {
            'type':
            | ['unconstrained', null]
            | ['unresolved', null]
            | ['resolved', null]
        }
    >

    export type Value_Results = p_i.Transformer_With_Parameter<
        d_in.Value_Results,
        d_out.Value,
        {
            'base type': d_out.Value
        }
    >

    export type Simple_Type = p_i.Transformer<
        d_in.Simple_Type,
        d_out.Value
    >

    export type Value_Path = p_i.Transformer<
        d_in.Value_Path,
        d_out.Value.reference.sub_selection
    >

}

//dependencies
import * as sh from "pareto/dist/shorthands/interface"

const location = sh.t.component_imported(
    "location",
    "Range",
)

export const Schema: interface_.Schema = ($, $p) => {
    const add_location = $p.type[0] === 'unresolved'

    return sh.m.package_data(
        p_.from.dictionary(
            p_.literal.dictionary({
                "location": p_.from.dictionary(
                    p_.literal.dictionary({
                        "": p_.from.boolean(
                            add_location,
                        ).convert_to_optional(
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
                    return $p.imports.__d_map_deprecated(
                        ($) => sh.import_.ancestor(
                            $p.depth + 1 + $['schema set child']['l value']['l up steps'],
                            $['schema set child']['l value']['l id'],
                            p_.from.state($.schema.complexity).decide(($) => {
                                switch ($[0]) {
                                    case 'unconstrained': return p_.ss($, ($) => p_.literal.list([
                                        "data",
                                    ]))
                                    case 'constrained': return p_.ss($, ($) => p_.from.state($p.type).decide(($) => {
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
        $.modules.__d_map_deprecated(($) => sh.type.data(Value(
            $['root value'],
            {
                'type': $p.type,
            }
        ))),
    )
}

export const Module_Reference: interface_.Module_Reference = ($) => p_.from.state($.location).decide(($) => {
    switch ($[0]) {
        case 'internal': return p_.ss($, ($) => sh.mr.local($['l id']))
        case 'external': return p_.ss($, ($) => sh.mr.imported(
            "imports " + $.import['l id'],
            $.module['l id'],
        ))
        default: return p_.au($[0])
    }
})

export const Value: interface_.Value = ($, $p) => {

    return p_.from.state($).decide(($) => {
        switch ($[0]) {
            case 'component': return p_.ss($, ($) => {
                const x: d_out.Value = p_.from.state($.type).decide(($) => {
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
            case 'dictionary': return p_.ss($, ($) => $p.type[0] === 'unresolved'
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
            case 'group': return p_.ss($, ($) => sh.t.group($.__d_map_deprecated(($, id) => Value(
                $.value,
                {
                    'type': $p.type,
                }
            ))))
            case 'list': return p_.ss($, ($) => {
                const list = $

                return p_.from.state($p.type).decide(($) => {
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
                                'base type': sh.t.list(p_.from.optional(
                                    list.results,
                                ).decide(
                                    ($) => sh.t.group({
                                        "l results": sh.t.group(p_.from.dictionary(
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
            case 'simple': return p_.ss($, ($) => p_.from.state($).decide(($) => {
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

                return p_.from.state($.type).decide(($) => {
                    switch ($[0]) {
                        case 'derived': return p_.ss($, ($) => $p.type[0] === 'unresolved'
                            ? sh.t.nothing()
                            : Value_Reference(referent)
                        )
                        case 'selected': return p_.ss($, ($) => {
                            const selected = $
                            return p_.from.state($p.type).decide(($) => {
                                switch ($[0]) {
                                    case 'unconstrained': return p_.ss($, ($) => sh.t.group({ //this is weird; a reference in an unconstrained schema
                                        "l location": location,
                                        "l reference": sh.t.text(),
                                    }))
                                    case 'resolved': return p_.ss($, ($) => {
                                        return Value_Results(
                                            selected.results,
                                            {
                                                'base type': sh.t.group(
                                                    p_.from.dictionary(
                                                        p_.literal.dictionary<p_di.Optional_Value<d_out.Value>>({
                                                            "l entry": p_.literal.set(p_change_context($, ($) => {
                                                                const location = Module_Reference(referent['module'])
                                                                const subselection = p_.literal.nested_list([
                                                                    Value_Path(referent.path),
                                                                    [
                                                                        sh.sub.dictionary(),
                                                                    ]
                                                                ])
                                                                return p_.from.state(selected.dependency).decide(($) => {
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
                                                            "l up steps": p_.from.state(selected.dependency).decide(($) => {
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
                                                ),
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
                const i = sh.t.state($.options.__d_map_deprecated(($, id) => Value(
                    $.value,
                    $p
                )))
                return p_.from.state($p.type).decide(($) => {
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

const Value_Results: interface_.Value_Results = ($, $p) => {
    return p_.from.optional(
        $,
    ).decide(
        ($) => sh.t.group({
            "l results": sh.t.group(
                p_.from.dictionary(
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

const Value_Path: interface_.Value_Path = ($) => {
    return $.tail['l value'].__l_map_deprecated(($) => p_.from.state($['l item']['l value']).decide(($) => {
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

export const Simple_Type: interface_.Simple_Type = ($) => {
    return p_.from.state($.type).decide(($) => {
        switch ($[0]) {
            case 'boolean': return p_.ss($, ($) => sh.t.boolean())
            case 'date': return p_.ss($, ($) => sh.t.integer())
            case 'number': return p_.ss($, ($) => p_.from.state($.precision).decide(($) => {
                switch ($[0]) {
                    case 'approximation': return p_.ss($, ($) => sh.t.number_approximation())
                    case 'exact': return p_.ss($, ($) => p_.from.state($.type).decide(($) => {
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