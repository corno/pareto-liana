import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import * as sh from "pareto/dist/shorthands/interface"



export const Signatures = (
    $: d_in.Resolver_Signatures,
): d_out.Package_Set.D => {
    return sh.m.package_functions(
        {
            "generic": sh.import_.external(
                "liana-core",
                [
                    "dist",
                    "interface",
                    "to be generated",
                    "resolve",
                ],
            ),
            "resolved": sh.import_.ancestor(
                3,
                "data",
                ["resolved"]
            ),
            "unresolved": sh.import_.ancestor(
                3,
                "data",
                ["unresolved"]
            ),
        },
        $.__d_map(
            ($, id) => sh.type.refiner(
                sh.t.component_imported("unresolved", id),
                sh.t.component_imported("resolved", id),
                sh.t.component_imported("generic", "Error"),
                $['resolved parameters'].lookups.__d_map(($): d_out.Package.content.functions.D.type_.refiner.lookups.O.D => {
                    const y = sh.t.reference(
                        Module_Reference($.referent),
                        _p.list.literal([
                            sh.sub.dictionary()
                        ])
                    )
                    return _p.decide.state($.type, ($) => {
                        switch ($[0]) {
                            case 'acyclic': return _p.ss($, ($) => ['acyclic', y])
                            case 'cyclic': return _p.ss($, ($) => ['cyclic', y])
                            case 'stack': return _p.ss($, ($) => ['stack', y])
                            default: return _p.au($[0])
                        }
                    })
                }),
                $['resolved parameters'].modules.__d_map(($) => {
                    const temp_2 = sh.t.reference(
                        Module_Reference($['module']),
                        _p.list.literal([])
                    )
                    return _p.decide.state($.presence, ($) => {
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

export const Module_Reference = (
    $: d_in.Module_Reference,
): d_out.Module_Reference => {

    return _p.decide.state($.location, ($) => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($) => sh.mr.imported(
                `imports ${$.import['l id']}`,
                $.module['l id'],
            ))
            case 'internal': return _p.ss($, ($) => sh.mr.imported(
                "resolved",
                $['l id'],
            ))
            default: return _p.au($[0])
        }
    })
}

export const Value_Path = (
    $: d_in.Value_Path,
): d_out.Value.reference.sub_selection => {
    const tail: _pi.List<d_out.Value.reference.sub_selection.L> = $.tail['l value'].__l_map(($) => _p.decide.state($['l item']['l value'], ($) => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => sh.sub.dictionary())
            case 'group': return _p.ss($, ($) => sh.sub.group($['l id']))
            case 'list': return _p.ss($, ($) => sh.sub.list())
            case 'optional': return _p.ss($, ($) => sh.sub.optional())
            case 'state': return _p.ss($, ($) => sh.sub.state($['l id']))
            default: return _p.au($[0])
        }
    }))
    return tail
}

// export const Type_Part_Reference = (
//     $: d_in.Type_Node_Reference,
//     $p: {
//         'add dictionary tail': boolean
//     }

// ): d_out.Type => {

//     return Module_Reference(
//         $['type location'],
//         {
//             'reference sub part': Type_Node_Path($.path.tail),
//             _p.list.nested_literal_old([
//             tail,
//             [
//                 sh.sub.dictionary()
//             ]
//         ])
//         }
//     )
// }
