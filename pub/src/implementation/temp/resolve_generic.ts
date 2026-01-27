import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import * as _p_temp from './temp_core'

import * as gen_loc from "../../interface/generated/liana/generic/location"
import * as gen_resolve from "../../interface/generated/liana/generic/resolve"

//types

export type Unresolved_Reference = {
    'location': gen_loc.Location
    'id': string
}

export type Resolved_Reference<T> = {
    'entry': T,
    'id': string,
}

export type Resolved_Stack_Reference<T> = {
    'entry': T,
    'id': string,
    'up steps': number,
}

//functions

export const resolve_dense_dictionary = <Unresolved, Resolved, Benchmark>(
    $: _pi.Dictionary<Unresolved>,
    location: gen_loc.Location,
    abort: _pi.Abort<gen_resolve.Error>,
    benchmark: _pi.Dictionary<Benchmark>,
    handle_entry: (
        $: Unresolved,
        id: string,
        $acyclic: _pi.Acyclic_Lookup<Resolved>,
        $cyclic: _pi.Cyclic_Lookup<Resolved>,
    ) => Resolved,
): _pi.Dictionary<Resolved> => {
    const xx  = _p.decide.dictionary.has_entries(
        _p.dictionary.filter(
            benchmark,
            (_, id) => $.__get_possible_entry(
                id,
            ).__decide(
                () => _p.optional.not_set<null>(),
                () => _p.optional.set(null),
            )
        ),
        ($) => abort({
            'type': ['missing required entries', $],
            'location': location,
        }),
        () => null
    )
    return _p.dictionary.resolve(
        $,
        handle_entry
    )
}
export namespace abort {

    export const state_constraint = <T extends readonly [string, any]>(
        found: string,
        expected: T,
        location: gen_loc.Location,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['state', {
            'expected': expected[0],
            'found': found,
        }]],
        'location': location,
    })

    export const same_node_constraint = (
        property: string,
        location: gen_loc.Location,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['same node', property]],
        'location': location,
    })

    export const is_set_assertion = (
        parameter: string,
        location: gen_loc.Location,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['optional value', ['set', parameter]]],
        'location': location,
    })
}

export const get_entry_acyclic = <T>(
    lookup: _pi.Acyclic_Lookup<T>,
    ref: Unresolved_Reference,
    abort: _pi.Abort<gen_resolve.Error>,
): Resolved_Reference<T> => {
    return {
        'entry': lookup.get_entry(
            ref.id,
            {
                cyclic: () => abort({
                    'type': ['lookup', ['cyclic lookup in acyclic context', ref.id]],
                    'location': ref.location,
                }),
                no_such_entry: () => abort({
                    'type': ['lookup', ['no such entry', ref.id]],
                    'location': ref.location,
                }),
                no_context_lookup: () => abort({
                    'type': ['lookup', ['optional lookup not set', null]],
                    'location': ref.location,
                })
            }
        ),
        'id': ref.id,
    }
}

export const get_entry_cyclic = <T>(
    lookup: _pi.Cyclic_Lookup<T>,
    reference: Unresolved_Reference,
    abort: _pi.Abort<gen_resolve.Error>,
): Resolved_Reference<_pi.Circular_Dependency<T>> => {
    return {
        'id': reference.id,
        'entry': lookup.get_entry(
            reference.id,
            {
                accessing_cyclic_before_resolved: () => _p.unreachable_code_path(),
                no_such_entry: () => abort({
                    'type': ['lookup', ['no such entry', reference.id]],
                    'location': reference.location,
                }),
                no_context_lookup: () => abort({
                    'type': ['lookup', ['optional lookup not set', null]],
                    'location': reference.location,
                })
            }
        )
    }
}

export const get_entry_stack = <T>(
    stack: _pi.Stack_Lookup<T>,
    reference: Unresolved_Reference,
    abort: _pi.Abort<gen_resolve.Error>,
): Resolved_Stack_Reference<T> => {
    return {
        'id': reference.id,
        'up steps': stack.get_entry_depth(
            reference.id,
            {
                cyclic: () => abort({
                    'type': ['lookup', ['cyclic lookup in acyclic context', reference.id]],
                    'location': reference.location,
                }),
                no_such_entry: () => abort({
                    'type': ['lookup', ['no such entry', reference.id]],
                    'location': reference.location,
                }),
                no_context_lookup: () => abort({
                    'type': ['lookup', ['optional lookup not set', null]],
                    'location': reference.location,
                })
            },
        ),
        'entry': stack.get_entry(
            reference.id,
            {
                cyclic: () => abort({
                    'type': ['lookup', ['cyclic lookup in acyclic context', reference.id]],
                    'location': reference.location,
                }),
                no_such_entry: () => abort({
                    'type': ['lookup', ['no such entry', reference.id]],
                    'location': reference.location,
                }),
                no_context_lookup: () => abort({
                    'type': ['lookup', ['optional lookup not set', null]],
                    'location': reference.location,
                })
            }
        )
    }
}
