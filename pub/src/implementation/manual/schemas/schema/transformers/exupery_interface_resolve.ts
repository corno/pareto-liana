import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/interface/data/resolved"

import * as sh from "exupery/dist/shorthands/interface"



export const Signatures = (
    $: d_in.Signatures,
): d_out.Module_Set.D => {
    return sh.m.module(
        {
            "resolve": sh.import_.external("pareto-core-internals", ["dist", "algorithm types", "refiner", "resolve"]),
            "resolved": sh.import_.sibling("data", ["resolved"]),
            "unresolved": sh.import_.sibling("data", ["unresolved"]),
        },
        $.__d_map(
            ($, key) => sh.type.refiner(
                sh.t.component_imported("unresolved", key),
                sh.t.component_imported("resolved", key),
                null,
                $['resolved parameters'].lookups.__d_map(($): d_out.Module.types.D.algorithm._type.refiner.lookups.O.D => {
                    const x = $.referent
                    return _p.sg($.type, ($) => {
                        switch ($[0]) {
                            case 'acyclic': return _p.ss($, ($) => ['acyclic', Type_Reference(x, { 'reference sub part': _p.list.literal([sh.sub.dictionary()]) })])
                            case 'cyclic': return _p.ss($, ($) => ['cyclic', Type_Reference(x, { 'reference sub part': _p.list.literal([sh.sub.dictionary()]) })])
                            case 'stack': return _p.ss($, ($) => ['stack', Type_Reference(x, { 'reference sub part': _p.list.literal([sh.sub.dictionary()]) })])
                            default: return _p.au($[0])
                        }
                    })
                }),
                $['resolved parameters'].values.__d_map(($) => {
                    const temp_2 = Type_Reference($['data type'], { 'reference sub part': _p.list.literal([]) })
                    return _p.sg($.presence, ($) => {
                        switch ($[0]) {
                            case 'optional': return sh.t.optional(temp_2)
                            case 'required': return temp_2
                            default: return _p.au($[0])
                        }
                    })
                }),
            )
        ),
    )
}

export const Type_Reference = (
    $: d_in.Type_Reference,
    $p: {
        'reference sub part': _pi.List<d_out.Type.reference.sub_selection.L>
    }
): d_out.Type => {

    return _p.sg($.location, ($) => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($) => sh.t.reference_imported(
                `imports ${$.import.key}`,
                $.type.key,
                $p['reference sub part'],

            ))
            case 'internal': return _p.ss($, ($) => sh.t.reference_imported(
                "resolved",
                $.key,
                $p['reference sub part'],
            ))
            default: return _p.au($[0])
        }
    })
}

export const Type_Part_Reference = (
    $: d_in.Type_Node_Reference,
    $p: {
        'add dictionary tail': boolean
    }

): d_out.Type => {
    const Component_Sub_Selection = (
        $: d_in.Type_Node_Reference.tail,

    ): _pi.List<d_out.Type.reference.sub_selection.L> => {
        const tail: _pi.List<d_out.Type.reference.sub_selection.L> = $.__l_map(($) => _p.sg($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => sh.sub.dictionary())
                case 'group': return _p.ss($, ($) => sh.sub.group($.key))
                case 'list': return _p.ss($, ($) => sh.sub.list())
                case 'optional': return _p.ss($, ($) => sh.sub.optional())
                case 'state group': return _p.ss($, ($) => sh.sub.state_group($.key))
                default: return _p.au($[0])
            }
        }))
        return $p['add dictionary tail']
            ? _p.list.nested_literal([
                tail,
                [
                    sh.sub.dictionary()
                ]
            ])
            : tail
    }

    return Type_Reference(
        $['type location'],
        {
            'reference sub part': Component_Sub_Selection($.tail),
        }
    )
}
