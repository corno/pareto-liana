import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

import { m, } from "pareto/dist/shorthands/implementation"

import * as t_migration_boilerplate from "./pareto_implementation_migrate_boilerplate"

import * as t_resolver from "./pareto_implementation_resolve"

import * as t_serialize from "./pareto_implementation_serialize"
// import * as t_deserialize from "./pareto_implementation_deserialize"

import * as t_marshall from "./pareto_implementation_marshall"
import * as t_unmarshall from "./pareto_implementation_unmarshall"

export const Schema_Tree = (
    $: d_in.Schema_Tree,
    $p: {
        'path': _pi.List<string>,
    }
): d_out.Module_Set.D => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'schema': return _p.ss($, ($) => {
                const imports = $.imports
                return m.set(
                    _p.dictionary.filter(
                        _p.dictionary.literal<_pi.Optional_Value<d_out.Module_Set.D>>({
                            "migrate boilerplate": _p.optional.set(t_migration_boilerplate.Schema($, {
                                'path': $p.path,
                                'imports': $.imports,
                                'constrained': $.complexity[0] === 'constrained'
                            })),

                            // "resolve": _p.decide.state($.complexity, ($) => {
                            //     switch ($[0]) {
                            //         case 'constrained': return _p.ss($, ($) => _p.optional.set(t_resolver.Resolvers($.resolvers, {
                            //             'path': $p.path,
                            //             'imports': imports
                            //         })))
                            //         case 'unconstrained': return _p.ss($, ($) => _p.optional.not_set())
                            //         default: return _p.au($[0])
                            //     }
                            // }),
                            "marshall": _p.optional.set(t_marshall.Schema(
                                $,
                                {
                                    'path': $p.path,
                                    'imports': $.imports,
                                    'constrained': $.complexity[0] === 'constrained'
                                }
                            )),
                            // "unmarshall": _p.optional.set(t_unmarshall.Schema($, {
                            //     'path': $p.path,
                            //     'imports': $.imports,
                            //     'constrained': $.complexity[0] === 'constrained'
                            // })),

                            // "serialize": _p.optional.set(t_serialize.Schema($, {
                            //     'path': $p.path,
                            //     'imports': $.imports,
                            //     'constrained': $.complexity[0] === 'constrained'
                            // })),
                            // "deserialize": _p.optional.set(t_deserialize.Schema($, {
                            //     'path': $p.path,
                            //     'imports': $.imports,
                            // })),
                        }),
                        ($) => $
                    )
                )
            })
            case 'set': return _p.ss($, ($): d_out.Module_Set.D => Schemas(
                $,
                {
                    'path': $p.path,
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
    }
): d_out.Module_Set.D => {
    return m.set($.__d_map(($, key) => Schema_Tree($, {
        'path': _p.list.nested_literal_old([
            $p.path,
            [
                key,
            ]
        ]),
    })))
}
