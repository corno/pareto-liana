import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

namespace interface_ {

    export type Resolver_Signatures = p_i.Transformer<
        d_in.Resolver_Signatures,
        d_out.Package_Set.D
    >

}

//shorthands
import * as sh from "pareto/dist/shorthands/interface"


export const Resolver_Signatures: interface_.Resolver_Signatures = ($) => {
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
        p_.from.dictionary($).map(
            ($, id) => sh.type.refiner(
                sh.t.component_imported("unresolved", id),
                sh.t.component_imported("resolved", id),
                sh.t.component_imported("generic", "Error"),
                $['resolved parameters'].lookups.__d_map_deprecated(($): d_out.Package.content.functions.D.type_.refiner.lookups.O.D => {
                    const y = sh.t.reference(
                        Module_Reference($.referent),
                        p_.literal.list([
                            sh.sub.dictionary()
                        ])
                    )
                    return p_.from.state($.type).decide(($) => {
                        switch ($[0]) {
                            case 'acyclic': return p_.ss($, ($) => ['acyclic', y])
                            case 'cyclic': return p_.ss($, ($) => ['cyclic', y])
                            case 'stack': return p_.ss($, ($) => ['stack', y])
                            default: return p_.au($[0])
                        }
                    })
                }),
                $['resolved parameters'].modules.__d_map_deprecated(($) => {
                    const temp_2 = sh.t.reference(
                        Module_Reference($['module']),
                        p_.literal.list([])
                    )
                    return p_.from.state($.presence).decide(($) => {
                        switch ($[0]) {
                            case 'optional': return sh.t.optional(temp_2)
                            case 'required': return temp_2
                            default: return p_.au($[0])
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

    return p_.from.state($.location).decide(($) => {
        switch ($[0]) {
            case 'external': return p_.ss($, ($) => sh.mr.imported(
                `imports ${$.import['l id']}`,
                $.module['l id'],
            ))
            case 'internal': return p_.ss($, ($) => sh.mr.imported(
                "resolved",
                $['l id'],
            ))
            default: return p_.au($[0])
        }
    })
}

export const Value_Path = (
    $: d_in.Value_Path,
): d_out.Value.reference.sub_selection => {
    const tail: d_out.Value.reference.sub_selection = p_.from.list($.tail['l value']).map(($) => p_.from.state($['l item']['l value']).decide(($) => {
        switch ($[0]) {
            case 'dictionary': return p_.ss($, ($) => sh.sub.dictionary())
            case 'group': return p_.ss($, ($) => sh.sub.group($['l id']))
            case 'list': return p_.ss($, ($) => sh.sub.list())
            case 'optional': return p_.ss($, ($) => sh.sub.optional())
            case 'state': return p_.ss($, ($) => sh.sub.state($['l id']))
            default: return p_.au($[0])
        }
    }))
    return tail
}
