import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data/resolved"
import * as d_out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data/resolved"

import { m, } from "exupery/dist/shorthands/implementation"

import * as t_migration_boilerplate from "./exupery_implementation_migrate_boilerplate"

import * as t_resolver from "./exupery_implementation_resolve"

import * as t_serialize from "./exupery_implementation_serialize"
// import * as t_deserialize from "./exupery_implementation_deserialize"

import * as t_marshall from "./exupery_implementation_marshall"
import * as t_unmarshall from "./exupery_implementation_unmarshall"

export const Schema_Tree = (
    $: d_in.Schema_Tree,
    $p: {
        'path': _pi.List<string>,
    }
): d_out.Module_Set.D => {
    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'schema': return _p.ss($, ($) => {
                const imports = $.imports
                return m.set(
                    _p.dictionary.filter(
                        _p.dictionary.literal<_pi.Optional_Value<d_out.Module_Set.D>>({
                            // "migration boilerplate.ts": _p.optional.set(t_migration_boilerplate.Schema($, {
                            //     'path': $p.path,
                            //     'imports': $.imports,
                            //     'constrained': $.complexity[0] === 'constrained'
                            // })),

                            // "resolve.ts": _p.sg($.complexity, ($) => {
                            //     switch ($[0]) {
                            //         case 'constrained': return _p.ss($, ($) => _p.optional.set(t_resolver.Resolvers($.resolvers, {
                            //             'path': $p.path,
                            //             'imports': imports
                            //         })))
                            //         case 'unconstrained': return _p.ss($, ($) => _p.optional.not_set())
                            //         default: return _p.au($[0])
                            //     }
                            // }),
                            // "marshall.ts": _p.optional.set(t_marshall.Schema($, {
                            //     'path': $p.path,
                            //     'imports': $.imports,
                            //     'constrained': $.complexity[0] === 'constrained'
                            // })),
                            // "unmarshall.ts": _p.optional.set(t_unmarshall.Schema($, {
                            //     'path': $p.path,
                            //     'imports': $.imports,
                            //     'constrained': $.complexity[0] === 'constrained'
                            // })),

                            // "serialize.ts": _p.optional.set(t_serialize.Schema($, {
                            //     'path': $p.path,
                            //     'imports': $.imports,
                            //     'constrained': $.complexity[0] === 'constrained'
                            // })),
                            // "deserialize.ts": _p.optional.set(t_deserialize.Schema($, {
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
        'path': _p.list.nested_literal([
            $p.path,
            [
                key,
            ]
        ]),
    })))
}
