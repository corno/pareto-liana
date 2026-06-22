import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

namespace interface_ {

    export type Schema_Tree = p_i.Transformer_With_Parameter<
        d_in.Schema_Tree,
        d_out.Package_Set.D,
        {
            'path': p_di.List<string>,
            'omit (de)serializer': boolean
        }
    >

    export type Schemas = p_i.Transformer_With_Parameter<
        d_in.Schemas,
        d_out.Package_Set.D,
        {
            'path': p_di.List<string>,
            'omit (de)serializer': boolean
        }
    >

}

//shorthands
import * as sh from "pareto/dist/shorthands/implementation"

//dependencies
import * as t_boilerplate_for_migrate from "./pareto_implementation_boilerplate_for_migrate"
import * as t_resolve from "./pareto_implementation_resolve"
import * as t_serialize from "./pareto_implementation_serialize"
import * as t_deserialize from "./pareto_implementation_deserialize"
import * as t_marshall from "./pareto_implementation_marshall"
import * as t_unmarshall from "./pareto_implementation_unmarshall"

export const Schema_Tree: interface_.Schema_Tree = ($, $p) => {
    return p_.from.state($).decide(($) => {
        switch ($[0]) {
            case 'schema': return p_.ss($, ($) => {
                const imports = $['resolver imports']
                const schema = $

                return $p['omit (de)serializer']
                    ? sh.m.set({})
                    : p_.from.state($.complexity).decide(($): d_out.Package_Set.D => {
                        switch ($[0]) {
                            case 'constrained': return p_.ss($, ($): d_out.Package_Set.D => sh.m.set({
                                "resolved": sh.m.set({
                                    "transformers": sh.m.set({
                                        "astn sealed target": t_marshall.Schema(
                                            schema,
                                            {
                                                'path': $p.path,
                                                'depth': 7,
                                            }
                                        ),
                                        "boilerplate for migrate": t_boilerplate_for_migrate.Schema(schema, {
                                            'depth': 7,
                                            'path': $p.path,
                                        }),
                                        "fountain pen": t_serialize.Schema(schema, {
                                            'path': $p.path,
                                            'depth': 7,
                                        })
                                    }),
                                    "refiners": sh.m.set({
                                        "unresolved": t_resolve.Resolver_Modules($.modules, {
                                            'path': $p.path,
                                            'imports': imports,
                                            'depth': 7,
                                        }),
                                        // "list of characters": t_deserialize_resolved.Schema(schema, {
                                        //     'depth': 7,
                                        //     'path': $p.path,
                                        // }),
                                    }),
                                }),
                                "unresolved": sh.m.set({
                                    // "transformers": sh.m.set({
                                    //     "astn sealed target": t_marshall.Schema(
                                    //         schema,
                                    //         {
                                    //             'path': $p.path,
                                    //             'depth': 7,
                                    //         }
                                    //     ),
                                    // }),
                                    "refiners": sh.m.set({
                                        "astn parse tree": t_unmarshall.Schema(schema, {
                                            'depth': 7,
                                            'path': $p.path,
                                        }),
                                        "list of characters": t_deserialize.Schema(schema, {
                                            'depth': 7,
                                            'path': $p.path,
                                        }),
                                    }),
                                }),
                            }))
                            case 'unconstrained': return p_.ss($, ($) => sh.m.set({
                                "transformers": sh.m.set({
                                    "astn sealed target": t_marshall.Schema(
                                        schema,
                                        {
                                            'path': $p.path,
                                            'depth': 6,
                                        }
                                    ),
                                    "fountain pen": t_serialize.Schema(schema, {
                                        'path': $p.path,
                                        'depth': 6,
                                    }),
                                    "boilerplate for migrate": t_boilerplate_for_migrate.Schema(schema, {
                                        'depth': 6,
                                        'path': $p.path,
                                    }),
                                }),
                                "refiners": sh.m.set({
                                    "astn parse tree": t_unmarshall.Schema(schema, {
                                        'depth': 6,
                                        'path': $p.path,
                                    }),
                                    "list of characters": t_deserialize.Schema(schema, {
                                        'depth': 6,
                                        'path': $p.path,
                                    }),
                                }),
                            }))
                            default: return p_.au($[0])
                        }
                    })
            })
            case 'set': return p_.ss($, ($): d_out.Package_Set.D => Schemas(
                $,
                {
                    'path': $p.path,
                    'omit (de)serializer': $p['omit (de)serializer'],
                }
            ))
            default: return p_.au($[0])
        }
    })
}

export const Schemas: interface_.Schemas = ($, $p) => {
    return sh.m.set(p_.from.dictionary($).map(($, id) => Schema_Tree($, {
        'path': p_.literal.chain(
            $p.path,
                id,
        ),
        'omit (de)serializer': $p['omit (de)serializer']
    })))
}
