import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"

import * as t_migration_boilerplate from "./pareto_implementation_boilerplate_for_migrate"

import * as t_resolve from "./pareto_implementation_resolve"

import * as t_serialize from "./pareto_implementation_serialize"
import * as t_deserialize from "./pareto_implementation_deserialize"

import * as t_marshall from "./pareto_implementation_marshall"
import * as t_unmarshall from "./pareto_implementation_unmarshall"

export const Schema_Tree = (
    $: d_in.Schema_Tree,
    $p: {
        'path': _pi.List<string>,
        'omit (de)serializer': boolean
    }
): d_out.Package_Set.D => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'schema': return _p.ss($, ($) => {
                const imports = $.imports
                const schema = $

                return $p['omit (de)serializer']
                    ? sh.m.set({})
                    : _p.decide.state($.complexity, ($): d_out.Package_Set.D => {
                        switch ($[0]) {
                            case 'constrained': return _p.ss($, ($): d_out.Package_Set.D => sh.m.set({
                                "resolved": sh.m.set({
                                    "transformers": sh.m.set({
                                        // "astn sealed target": t_marshall.Schema(
                                        //     schema,
                                        //     {
                                        //         'path': $p.path,
                                        //         // 'depth': 3
                                        //     }
                                        // ),
                                        "boilerplate for migrate": t_migration_boilerplate.Schema(schema, {
                                            'depth': 7,
                                            'path': $p.path,
                                        }),
                                        // "unresolved": t_migration_boilerplate.Schema(schema, {
                                        //     'path': $p.path,
                                        // }),
                                        // "text": t_serialize.Schema(schema, {
                                        //     'path': $p.path,
                                        // })
                                    }),
                                    "refiners": sh.m.set({
                                        // "unresolved": t_resolve.Module_Resolvers($.resolvers, {
                                        //     'path': $p.path,
                                        //     'imports': imports
                                        // })
                                    }),
                                }),
                                "unresolved": sh.m.set({
                                    "refiners": sh.m.set({
                                        "astn parse tree": t_unmarshall.Schema(schema, {
                                            'depth': 7,
                                            'path': $p.path,
                                        }),
                                        // "text": t_deserialize.Schema(schema, {
                                        //     'path': $p.path,
                                        // }),
                                    }),
                                }),
                            }))
                            case 'unconstrained': return _p.ss($, ($) => sh.m.set({
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
                                    "boilerplate for migrate": t_migration_boilerplate.Schema(schema, {
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
                            default: return _p.au($[0])
                        }
                    })
            })
            case 'set': return _p.ss($, ($): d_out.Package_Set.D => Schemas(
                        $,
                        {
                            'path': $p.path,
                            'omit (de)serializer': $p['omit (de)serializer'],
                        }
                    ))
            default: return _p.au($[0])
        }
    })
}

export const Schemas = (
    $: d_in.Schemas,
    $p: {
        'path': _pi.List<string>,
        'omit (de)serializer': boolean
    }
): d_out.Package_Set.D => {
    return sh.m.set($.__d_map(($, id) => Schema_Tree($, {
        'path': _p.list.nested_literal_old([
            $p.path,
            [
                id,
            ]
        ]),
        'omit (de)serializer': $p['omit (de)serializer']
    })))
}
