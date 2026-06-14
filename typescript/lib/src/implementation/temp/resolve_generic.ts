import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'
import * as _p_temp from 'pareto-core/dist/select_static_lookup'
import p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

import * as gen_loc from "liana-core/dist/interface/to_be_generated/document_and_location"
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

export const resolve_dense_dictionary = <Unresolved extends pi.Value, Resolved extends pi.Value, Benchmark extends pi.Value>(
    $: pi.Dictionary<Unresolved>,
    location: gen_loc.Range,
    abort: pi.Abort<gen_resolve.Error>,
    benchmark: pi.Dictionary<Benchmark>,
    handle_entry: (
        $: Unresolved,
        id: string,
        $acyclic: pi.static_lookup.Acyclic<Resolved>,
        $cyclic: pi.static_lookup.Cyclic<Resolved>,
    ) => Resolved,
): pi.Dictionary<Resolved> => {
    const xx = pt.decide.dictionary(
        pt.dictionary.from.dictionary(
            benchmark,
        ).map_optionally(
            (_, id) => $.__get_possible_entry_deprecated(
                id,
            ).__decide(
                () => pt.optional.literal.not_set<null>(),
                () => pt.optional.literal.set(null),
            )
        )
    ).has_entries(
        ($) => abort({
            'type': ['missing required entries', $],
            'location': location,
        }),
        () => null
    )
    return pt.dictionary.from.dictionary(
        $,
    ).resolve_static(
        handle_entry
    )
}
export namespace abort {

    export const state_constraint_found_expected = <T extends pi.State>(
        found: string,
        expected: T,
        location: gen_loc.Range,
        abort: pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['state', {
            'expected': expected[0],
            'found': found,
        }]],
        'location': location,
    })
    export const state_constraint_expected_found = <T extends pi.State>(
        expected: string,
        found: T,
        location: gen_loc.Range,
        abort: pi.Abort<gen_resolve.Error>,
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
        abort: pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['same node', property]],
        'location': location,
    })

    export const is_set_assertion = (
        parameter: string,
        location: gen_loc.Range,
        abort: pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['optional value is not set', null]],
        'location': location,
    })

    export const parameter_is_set_assertion = (
        parameter: string,
        location: gen_loc.Range,
        abort: pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['constraint', ['optional value is not set', null]],
        'location': location,
    })
}

export const get_entry_acyclic = <T extends pi.Value>(
    lookup: pi.static_lookup.Acyclic<T>,
    ref: Unresolved_Reference,
    abort: pi.Abort<gen_resolve.Error>,
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

export const get_entry_cyclic = <T extends pi.Value>(
    lookup: pi.static_lookup.Cyclic<T>,
    reference: Unresolved_Reference,
    abort: pi.Abort<gen_resolve.Error>,
): Resolved_Reference<pi.Circular_Dependency<T>> => {
    return {
        'l id': reference['l reference'],
        'l entry': lookup.get_entry(
            reference['l reference'],
            {
                accessing_cyclic_sibling_before_it_is_resolved: () => p_unreachable_code_path("this should not happen, this means there is a bug in the implementation of the cyclic lookup, it should not allow access to cyclic entries before they are resolved"),
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

export const get_entry_stack = <T extends pi.Value>(
    stack: pi.static_lookup.Stack<T>,
    reference: Unresolved_Reference,
    abort: pi.Abort<gen_resolve.Error>,
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

export const temp_assert = <Type extends pi.Value, Error extends pi.Value>(
    condition: () => pi.Optional_Value<Error>,
    callback: () => Type,
    abort: pi.Abort<Error>,
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

export const temp_optional_map = <In extends pi.Value, Out extends pi.Value>(
    $: pi.Optional_Value<In>,
    callback: ($: In) => Out,
): pi.Optional_Value<Out> => pt.optional.from.optional($).map(callback)

export const temp_resolve = <T extends pi.Value, Resolved extends pi.Value>(
    $: pi.Dictionary<T>,
    handle_entry: (
        $: T,
        id: string,
        acyclic_lookup: pi.static_lookup.Acyclic<Resolved>,
        cyclic_lookup: pi.static_lookup.Cyclic<Resolved>,
    ) => Resolved,
): pi.Dictionary<Resolved> => {
    return pt.dictionary.from.dictionary($).resolve_static(handle_entry)
}

export const temp_map_list_with_state = <T extends pi.Value, Target_Item extends pi.Value, State extends pi.Value, Result_Type extends pi.Group>(
    $: pi.List<T>,
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
        final_list: pi.List<Target_Item>,
        final_state: State
    ) => Result_Type,
): Result_Type => pt.group.from.list($).map_with_state(
    initial_state,
    handle_item,
    update_state,
    wrapup
)
