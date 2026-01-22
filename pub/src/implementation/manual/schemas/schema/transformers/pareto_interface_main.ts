import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/pareto/schemas/interface/data/resolved"

import { m } from "pareto/dist/shorthands/interface"

import * as t_migrate_boilerplate from "./pareto_interface_migrate_boilerplate"
import * as t_resolve from "./pareto_interface_resolve"
import * as t_types from "./pareto_interface_types"

import * as t_marshall from "./pareto_interface_marshall"
import * as t_unmarshall from "./pareto_interface_unmarshall"

import * as t_serialize from "./pareto_interface_serialize"
import * as t_deserialize from "./pareto_interface_deserialize"


// import * as operations from "pareto-standard-operations"

// const op = {
//     'filter dictionary': operations.pure.dictionary.filter
// }

export const Schema = ($: d_in.Schema): d_out.Module_Set.D => {
    const schema = $
    const constrained: boolean = _p.sg($.complexity, ($) => {
        switch ($[0]) {
            case 'constrained': return _p.ss($, ($) => true)
            case 'unconstrained': return _p.ss($, ($) => false)
            default: return _p.au($[0])
        }
    })
    return m.set(_p.dictionary.filter(
        _p.dictionary.literal<_pi.Optional_Value<d_out.Module_Set.D>>({
            "data.ts": constrained
                ? _p.optional.not_set()

                : _p.optional.set(t_types.Schema(
                    schema,
                    {
                        'imports': schema.imports,
                        'depth': 0,
                        'type': ['unconstrained', null],
                    }
                )),
            "data": constrained
                ? _p.optional.set(
                    m.set(_p.dictionary.literal({
                        "resolved.ts": t_types.Schema(
                            schema,
                            {
                                'imports': schema.imports,
                                'depth': 1,
                                'type': ['resolved', null],
                            }
                        ),
                        "unresolved.ts": t_types.Schema(
                            schema,
                            {
                                'imports': schema.imports,
                                'depth': 1,
                                'type': ['unresolved', null],
                            }
                        ),
                    }))
                )
                : _p.optional.not_set(),

            "resolve.ts":_p.sg($.complexity, ($) => {
                switch ($[0]) {
                    case 'constrained': return _p.ss($, ($) =>  _p.optional.set(t_resolve.Signatures(
                        $.signatures.types
                    )))
                    case 'unconstrained': return _p.ss($, ($) => _p.optional.not_set())
                    default: return _p.au($[0])
                }
            }),
            "migrate boilerplate.ts": _p.optional.set(t_migrate_boilerplate.Schema(
                schema,
                {
                    'constrained': constrained
                }
            )),
            // "unmarshall.ts": t_unmarshall.Schema(
            //     schema,
            //     {
            //         'constrained': constrained
            //     }
            // ),
            // "marshall.ts": t_marshall.Schema(schema),
            // "serialize.ts": t_serialize.Schema(
            //     schema,
            //     {
            //         'imports': schema.imports,
            //     }
            // ),
            // "deserialize.ts": t_deserialize.Schema(
            //     schema,
            // ),


        }),
        ($) => $
    ))
}

export const Schema_Tree = ($: d_in.Schema_Tree): d_out.Module_Set.D => _p.sg($, ($) => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => Schema($))
        case 'set': return _p.ss($, ($) => Schemas($))
        default: return _p.au($[0])
    }
})


export const Schemas = ($: d_in.Schemas): d_out.Module_Set.D => m.set($.__d_map(($) => _p.sg($, ($) => {
    switch ($[0]) {
        case 'schema': return _p.ss($, ($) => Schema($))
        case 'set': return _p.ss($, ($) => Schemas($))
        default: return _p.au($[0])
    }
})))