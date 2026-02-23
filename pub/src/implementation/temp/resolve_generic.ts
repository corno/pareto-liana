import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _p_temp from 'pareto-core/dist/select_lookup'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

import * as gen_loc from "astn-core/dist/interface/generated/liana/schemas/location/data"
import * as gen_resolve from "liana-core/dist/interface/to_be_generated/resolve"

//types

export type Unresolved_Reference = {
    'l location': gen_loc.Range
    'l reference': string
}

export type Resolved_Reference<T> = {
    'l entry': T,
    'l id': string,
}

export type Resolved_Stack_Reference<T> = {
    'l entry': T,
    'l id': string,
    'l up steps': number,
}

//functions

export const resolve_dense_dictionary = <Unresolved, Resolved, Benchmark>(
    $: _pi.Dictionary<Unresolved>,
    location: gen_loc.Range,
    abort: _pi.Abort<gen_resolve.Error>,
    benchmark: _pi.Dictionary<Benchmark>,
    handle_entry: (
        $: Unresolved,
        id: string,
        $acyclic: _pi.lookup.Acyclic<Resolved>,
        $cyclic: _pi.lookup.Cyclic<Resolved>,
    ) => Resolved,
): _pi.Dictionary<Resolved> => {
    const xx = _p.decide.dictionary.has_entries(
        _p.dictionary.from.dictionary(
            benchmark,
        ).filter(
            (_, id) => $.__get_possible_entry_deprecated(
                id,
            ).__decide(
                () => _p.optional.literal.not_set<null>(),
                () => _p.optional.literal.set(null),
            )
        ),
        ($) => abort({
            'type': ['missing required entries', $],
            'location': location,
        }),
        () => null
    )
    return _p.dictionary.from.dictionary(
        $,
    ).resolve(
        handle_entry
    )
}
export namespace abort {

    export const state_constraint_found_expected = <T extends readonly [string, any]>(
        found: string,
        expected: T,
        location: gen_loc.Range,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['state', {
            'expected': expected[0],
            'found': found,
        }]],
        'location': location,
    })
    export const state_constraint_expected_found = <T extends readonly [string, any]>(
        expected: string,
        found: T,
        location: gen_loc.Range,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['state', {
            'expected': expected,
            'found': found[0],
        }]],
        'location': location,
    })

    export const same_node_constraint = (
        property: string,
        location: gen_loc.Range,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['same node', property]],
        'location': location,
    })

    export const is_set_assertion = (
        parameter: string,
        location: gen_loc.Range,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['optional value is not set', null]],
        'location': location,
    })

    export const parameter_is_set_assertion = (
        parameter: string,
        location: gen_loc.Range,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['optional value is not set', null]],
        'location': location,
    })
}

export const get_entry_acyclic = <T>(
    lookup: _pi.lookup.Acyclic<T>,
    ref: Unresolved_Reference,
    abort: _pi.Abort<gen_resolve.Error>,
): Resolved_Reference<T> => {
    return {
        'l entry': lookup.get_entry(
            ref['l reference'],
            {
                cycle_detected: () => abort({
                    'type': ['lookup', ['cycle detected', null]],
                    'location': ref['l location'],
                }),
                no_such_entry: () => abort({
                    'type': ['lookup', ['no such entry', ref['l reference']]],
                    'location': ref['l location'],
                }),
                no_context_lookup: () => abort({
                    'type': ['lookup', ['no context lookup', null]],
                    'location': ref['l location'],
                })
            }
        ),
        'l id': ref['l reference'],
    }
}

export const get_entry_cyclic = <T>(
    lookup: _pi.lookup.Cyclic<T>,
    reference: Unresolved_Reference,
    abort: _pi.Abort<gen_resolve.Error>,
): Resolved_Reference<_pi.Circular_Dependency<T>> => {
    return {
        'l id': reference['l reference'],
        'l entry': lookup.get_entry(
            reference['l reference'],
            {
                accessing_cyclic_sibling_before_it_is_resolved: () => _p_unreachable_code_path("this should not happen, this means there is a bug in the implementation of the cyclic lookup, it should not allow access to cyclic entries before they are resolved"),
                no_such_entry: () => abort({
                    'type': ['lookup', ['no such entry', reference['l reference']]],
                    'location': reference['l location'],
                }),
                no_context_lookup: () => abort({
                    'type': ['lookup', ['no context lookup', null]],
                    'location': reference['l location'],
                })
            }
        )
    }
}

export const get_entry_stack = <T>(
    stack: _pi.lookup.Stack<T>,
    reference: Unresolved_Reference,
    abort: _pi.Abort<gen_resolve.Error>,
): Resolved_Stack_Reference<T> => {
    return {
        'l id': reference['l reference'],
        'l up steps': stack.get_entry_depth(
            reference['l reference'],
            {
                cycle_detected: () => abort({
                    'type': ['lookup', ['cycle detected', null]],
                    'location': reference['l location'],
                }),
                no_such_entry: () => abort({
                    'type': ['lookup', ['no such entry', reference['l reference']]],
                    'location': reference['l location'],
                }),
                no_context_lookup: () => abort({
                    'type': ['lookup', ['no context lookup', null]],
                    'location': reference['l location'],
                })
            },
        ),
        'l entry': stack.get_entry(
            reference['l reference'],
            {
                cycle_detected: () => abort({
                    'type': ['lookup', ['cycle detected', null]],
                    'location': reference['l location'],
                }),
                no_such_entry: () => abort({
                    'type': ['lookup', ['no such entry', reference['l reference']]],
                    'location': reference['l location'],
                }),
                no_context_lookup: () => abort({
                    'type': ['lookup', ['no context lookup', null]],
                    'location': reference['l location'],
                })
            }
        )
    }
}

export const temp_assert = <Type, Error>(
    condition: () => _pi.Optional_Value<Error>,
    callback: () => Type,
    abort: _pi.Abort<Error>,
): Type => {
    const c = condition()
    c.__extract_data(
        ($) => {
            abort($)
        },
        () => {

        }
    )
    return callback()
}

export const temp_optional_map = <In, Out>(
    $: _pi.Optional_Value<In>,
    callback: ($: In) => Out,
): _pi.Optional_Value<Out> => _p.optional.from.optional($).map(callback)

export const temp_resolve = <T, Resolved>(
    $: _pi.Dictionary<T>,
    handle_entry: (
        $: T,
        id: string,
        acyclic_lookup: _pi.lookup.Acyclic<Resolved>,
        cyclic_lookup: _pi.lookup.Cyclic<Resolved>,
    ) => Resolved,
): _pi.Dictionary<Resolved> => {
    return _p.dictionary.from.dictionary($).resolve(handle_entry)
}

export const temp_map_list_with_state = <T, Target_Item, State, Result_Type extends { [id: string]: any }>(
    $: _pi.List<T>,
    initial_state: State,
    handle_item: (
        value: T,
        state: State
    ) => Target_Item,
    update_state: (
        value: Target_Item,
        state: State
    ) => State,
    wrapup: (
        final_list: _pi.List<Target_Item>,
        final_state: State
    ) => Result_Type,
): Result_Type => _p.group.from.list($).map_with_state(
    initial_state,
    handle_item,
    update_state,
    wrapup
)
