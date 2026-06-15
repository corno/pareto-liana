import * as p_ from 'pareto-core/dist/implementation/transformer'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import { m } from "pareto/dist/shorthands/interface"
import * as sh from "pareto/dist/shorthands/interface"

import * as t_boilerplate_for_migrate from "./pareto_interface_boilerplate_for_migrate"
import * as t_resolve from "./pareto_interface_resolve"
import * as t_types from "./pareto_interface_types"

import * as t_marshall from "./pareto_interface_marshall"
import * as t_unmarshall from "./pareto_interface_unmarshall"

import * as t_serialize from "./pareto_interface_serialize"
import * as t_deserialize from "./pareto_interface_deserialize"
import * as t_deserialize_resolved from "./pareto_interface_deserialize_resolved"


export const Schema = (
    $: d_in.Schema,
    $p: {
        'omit (de)serializer': boolean
    }
): d_out.Package_Set.D => {
    const schema = $
    const constrainedx: boolean = p_.decide.state($.complexity, ($) => {
        switch ($[0]) {
            case 'constrained': return p_.ss($, ($) => true)
            case 'unconstrained': return p_.ss($, ($) => false)
            default: return p_.au($[0])
        }
    })
    return sh.m.set({

        "data": constrainedx
            ? m.set(p_.literal.dictionary({
                "resolved": t_types.Schema(
                    schema,
                    {
                        'imports': schema['schema imports'],
                        'depth': 1,
                        'type': ['resolved', null],
                    }
                ),
                "unresolved": t_types.Schema(
                    schema,
                    {
                        'imports': schema['schema imports'],
                        'depth': 1,
                        'type': ['unresolved', null],
                    }
                ),
            }))
            : t_types.Schema(
                schema,
                {
                    'imports': schema['schema imports'],
                    'depth': 0,
                    'type': ['unconstrained', null],
                }
            ),
        "signatures": $p['omit (de)serializer']
            ? sh.m.set({})
            : p_.decide.state($.complexity, ($): d_out.Package_Set.D => {
                switch ($[0]) {
                    case 'constrained': return p_.ss($, ($): d_out.Package_Set.D => sh.m.set({
                        "resolved": sh.m.set({
                            "transformers": sh.m.set({
                                "astn sealed target": t_marshall.Schema(
                                    schema,
                                    {
                                        'constrained': p_.literal.set("resolved"),
                                    }
                                ),
                                "boilerplate for migrate": t_boilerplate_for_migrate.Schema(schema, {
                                    'constrained': true,
                                }),
                                "fountain pen": t_serialize.Schema(schema, {
                                    'constrained': true,
                                })
                            }),
                            "refiners": sh.m.set({
                                "unresolved": t_resolve.Signatures($.signatures.signatures
                                ),
                                // "list of characters": t_deserialize_resolved.Schema(schema, {
                                //     'depth': 7,
                                //     'path': $p.path,
                                // }),
                            }),
                        }),
                        "unresolved": sh.m.set({
                            "refiners": sh.m.set({
                                "astn parse tree": t_unmarshall.Schema(schema, {
                                    'constrained': true,
                                }),
                                "list of characters": t_deserialize.Schema(schema, {
                                    'constrained': true,
                                }),
                            }),
                            // "transformers": sh.m.set({
                            //     "astn sealed target": t_marshall.Schema(
                            //         schema,
                            //         {
                            //             'constrained': p_.literal.set("unresolved"),
                            //         }
                            //     ),
                            // }),
                        }),
                    }))
                    case 'unconstrained': return p_.ss($, ($) => sh.m.set({
                        "transformers": sh.m.set({
                            "astn sealed target": t_marshall.Schema(
                                schema,
                                {
                                    'constrained': p_.literal.not_set(),
                                }
                            ),
                            "fountain pen": t_serialize.Schema(schema, {
                                'constrained': false,
                            }),
                            "boilerplate for migrate": t_boilerplate_for_migrate.Schema(schema, {
                                'constrained': false,
                            }),
                        }),
                        "refiners": sh.m.set({
                            "astn parse tree": t_unmarshall.Schema(schema, {
                                'constrained': false,
                            }),
                            "list of characters": t_deserialize.Schema(schema, {
                                'constrained': false,
                            }),
                        }),
                    }))
                    default: return p_.au($[0])
                }
            })
    })
    // return m.set(p_.dictionary.from.dictionary(
    //     p_.dictionary.literal<p_di.Optional_Value<d_out.Package_Set.D>>({
    //         "data": p_.literal.set(constrained
    //             ? m.set(p_.literal.dictionary({
    //                 "resolved": t_types.Schema(
    //                     schema,
    //                     {
    //                         'imports': schema['schema imports'],
    //                         'depth': 1,
    //                         'type': ['resolved', null],
    //                     }
    //                 ),
    //                 "unresolved": t_types.Schema(
    //                     schema,
    //                     {
    //                         'imports': schema['schema imports'],
    //                         'depth': 1,
    //                         'type': ['unresolved', null],
    //                     }
    //                 ),
    //             }))
    //             : t_types.Schema(
    //                 schema,
    //                 {
    //                     'imports': schema['schema imports'],
    //                     'depth': 0,
    //                     'type': ['unconstrained', null],
    //                 }
    //             ),
    //         ),

    //         "resolve": p_.decide.state($.complexity, ($) => {
    //             switch ($[0]) {
    //                 case 'constrained': return p_.ss($, ($) => p_.literal.set(t_resolve.Signatures(
    //                     $.signatures.signatures
    //                 )))
    //                 case 'unconstrained': return p_.ss($, ($) => p_.literal.not_set())
    //                 default: return p_.au($[0])
    //             }
    //         }),
    //         "boilerplate for migrate": p_.literal.set(t_migrate_boilerplate.Schema(
    //             schema,
    //             {
    //                 'constrained': constrained
    //             }
    //         )),
    //         "unmarshall": p_.optional.from.boolean(
    //             !$p['omit (de)serializer'],
    //         ).convert(
    //             () => t_unmarshall.Schema(
    //                 schema,
    //                 {
    //                     'constrained': constrained
    //                 }
    //             )
    //         ),
    //         "marshall": p_.optional.from.boolean(
    //             !$p['omit (de)serializer'],
    //         ).convert(
    //             () => t_marshall.Schema(
    //                 schema,
    //                 {
    //                     'constrained': constrained
    //                 }
    //             )
    //         ),
    //         "serialize": p_.optional.from.boolean(
    //             !$p['omit (de)serializer'],
    //         ).convert(
    //             () => t_serialize.Schema(
    //                 schema,
    //                 {
    //                     'constrained': constrained
    //                 }
    //             ),
    //         ),
    //         "deserialize": p_.optional.from.boolean(
    //             !$p['omit (de)serializer'],
    //         ).convert(
    //             () => t_deserialize.Schema(
    //                 schema,
    //                 {
    //                     'constrained': constrained
    //                 }
    //             )
    //         ),

    //         //this needs some work; merging the parameters for deserialization with the parameters for resolving.
    //         // "deserialize resolved": p_.optional.from_boolean(
    //         //     constrained,
    //         //     t_deserialize_resolved.Schema(
    //         //         schema,
    //         //         {
    //         //             'constrained': constrained
    //         //         }
    //         //     )
    //         // ),


    //     }),
    // ).filter(
    //     ($) => $
    // ))
}

export const Schema_Tree = (
    $: d_in.Schema_Tree,
    $p: {
        'omit (de)serializer': boolean
    }
): d_out.Package_Set.D => p_.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return p_.ss($, ($) => Schema($, $p))
        case 'set': return p_.ss($, ($) => Schemas($, $p))
        default: return p_.au($[0])
    }
})


export const Schemas = (
    $: d_in.Schemas,
    $p: {
        'omit (de)serializer': boolean
    }
): d_out.Package_Set.D => m.set($.__d_map(($) => p_.decide.state($, ($) => {
    switch ($[0]) {
        case 'schema': return p_.ss($, ($) => Schema($, $p))
        case 'set': return p_.ss($, ($) => Schemas($, $p))
        default: return p_.au($[0])
    }
})))