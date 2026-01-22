import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

import * as gen_loc from "../../interface/generated/liana/generic/location"
import * as gen_resolve from "../../interface/generated/liana/generic/resolve"

export type Unresolved_Dictionary<T> = {
    'location': gen_loc.Location
    'dictionary': _pi.Dictionary<{
        'entry': T
        'location': gen_loc.Location
    }>
}

export const resolve_dictionary = <Unresolved, Resolved>(
    $: Unresolved_Dictionary<Unresolved>,
    handle_entry: (
        $: Unresolved,
        $acyclic: _pi.Acyclic_Lookup<Resolved>,
        $cyclic: _pi.Cyclic_Lookup<Resolved>,
    ) => Resolved,
): _pi.Dictionary<Resolved> => _p.dictionary.resolve(
    $.dictionary,
    ($, key, a$, c$) => {
        return handle_entry($['entry'], a$, c$)
    }
)

export const resolve_ordered_dictionary = <Unresolved, Resolved>(
    $: Unresolved_Dictionary<Unresolved>,
    handle_entry: (
        $: Unresolved,
        $acyclic: _pi.Acyclic_Lookup<Resolved>,
        $cyclic: _pi.Cyclic_Lookup<Resolved>,
    ) => Resolved,
): _pi.Dictionary<Resolved> => _p.dictionary.resolve(
    $.dictionary,
    ($, key, a$, c$) => {
        return handle_entry($['entry'], a$, c$)
    }
)

export const resolve_dense_ordered_dictionary = <Unresolved, Resolved, Benchmark>(
    $: Unresolved_Dictionary<Unresolved>,
    abort: _pi.Abort<gen_resolve.Error>,
    benchmark: _pi.Dictionary<Benchmark>,
    handle_entry: (
        $: Unresolved,
        ref: Unresolved_Reference,
        $acyclic: _pi.Acyclic_Lookup<Resolved>,
        $cyclic: _pi.Cyclic_Lookup<Resolved>,
    ) => Resolved,
): _pi.Dictionary<Resolved> => {
    benchmark.__d_map((_, key) => {
        $.dictionary.__get_entry(
            key,
            () => abort({
                'type': ['missing required entry', key],
                'location': $.location,
            })
        )
    })
    return _p.dictionary.resolve(
        $.dictionary,
        ($, key, a$, c$) => {
            return handle_entry($['entry'], { key: key, location: $.location }, a$, c$)
        }
    )
}

export const resolve_dense_dictionary = <Unresolved, Resolved, Benchmark>(
    $: Unresolved_Dictionary<Unresolved>,
    abort: _pi.Abort<gen_resolve.Error>,
    benchmark: _pi.Dictionary<Benchmark>,
    handle_entry: (
        $: Unresolved,
        ref: Unresolved_Reference,
        $acyclic: _pi.Acyclic_Lookup<Resolved>,
        $cyclic: _pi.Cyclic_Lookup<Resolved>,
    ) => Resolved,
): _pi.Dictionary<Resolved> => {
    benchmark.__d_map((_, key) => {
        $.dictionary.__get_entry(
            key,
            () => abort({
                'type': ['missing required entry', key],
                'location': $.location,
            })
        )
    })
    return _p.dictionary.resolve(
        $.dictionary,
        ($, key, a$, c$) => {
            return handle_entry($['entry'], { key: key, location: $.location }, a$, c$)
        }
    )
}

export namespace acyclic {

    export const not_set = <T>(): _pi.Acyclic_Lookup<T> => ({
        get_entry: (id, abort) => abort.no_context_lookup(null),
        __get_entry_raw: (id, abort) => abort.no_context_lookup(null),
    })

}

export namespace cyclic {

    export const not_set = <T>(): _pi.Cyclic_Lookup<T> => ({
        get_entry: (id, abort) => {
            //return abort['no context lookup']()
            return _pdev.implement_me("NCL")
        }
    })

}

export namespace stack {

    export const empty = <T>(): _pi.Stack_Lookup<T> => ({
        get_entry: (id, abort) => abort.no_context_lookup(null),
        get_entry_depth(key) {
            return -1
        },
    })

}

export type Unresolved_Reference = {
    'location': gen_loc.Location
    'key': string
}

export type Resolved_Reference<T> = {
    'entry': T,
    'key': string,
}

export type Resolved_Stack_Reference<T> = {
    'entry': T,
    'key': string,
    'up steps': number,
}

export const get_entry_from_stack = <T>(
    stack: _pi.Stack_Lookup<T>,
    reference: Unresolved_Reference,
    abort: _pi.Abort<gen_resolve.Error>,
): Resolved_Stack_Reference<T> => {
    return {
        'key': reference.key,
        'up steps': stack.get_entry_depth(
            reference.key,
            {
                cyclic: () => abort({
                    'type': ['cyclic lookup in acyclic context', reference.key],
                    'location': reference.location,
                }),
                no_such_entry: () => abort({
                    'type': ['no such entry', reference.key],
                    'location': reference.location,
                }),
                no_context_lookup: () => abort({
                    'type': ['no context lookup', null],
                    'location': reference.location,
                })
            },
        ),
        'entry': stack.get_entry(
            reference.key,
            {
                cyclic: () => abort({
                    'type': ['cyclic lookup in acyclic context', reference.key],
                    'location': reference.location,
                }),
                no_such_entry: () => abort({
                    'type': ['no such entry', reference.key],
                    'location': reference.location,
                }),
                no_context_lookup: () => abort({
                    'type': ['no context lookup', null],
                    'location': reference.location,
                })
            }
        )
    }
}

export namespace abort {

    export const wrong_state = (
        expected: string,
        found: string,
        location: gen_loc.Location,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['wrong state', {
            'expected': expected,
            'found': found,
        }],
        'location': location,
    })

    export const not_the_same_node = (
        property: string,
        location: gen_loc.Location,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['not the same node', property],
        'location': location,
    })

    export const tbd = (
        desc: string,
        location: gen_loc.Location,
        abort: _pi.Abort<gen_resolve.Error>,
    ) => abort({
        'type': ['tbd', desc],
        'location': location,
    })
}

export const dictionary_to_lookup = <T>(
    dict: _pi.Dictionary<T>,
    x: null,
): _pi.Acyclic_Lookup<T> => ({
    get_entry: (id, abort) => dict.__get_entry(
        id,
        () => abort.no_such_entry(id),
    ),
    __get_entry_raw: (id, abort) => dict.__get_entry_raw(id)
})

export const get_entry = <T>(
    lookup: _pi.Acyclic_Lookup<T>,
    id: Unresolved_Reference,
    abort: _pi.Abort<gen_resolve.Error>,
): Resolved_Reference<T> => {
    return {
        'entry': lookup.get_entry(
            id.key,
            {
                cyclic: () => abort({
                    'type': ['cyclic lookup in acyclic context', id.key],
                    'location': id.location,
                }),
                no_such_entry: () => abort({
                    'type': ['no such entry', id.key],
                    'location': id.location,
                }),
                no_context_lookup: () => abort({
                    'type': ['no context lookup', null],
                    'location': id.location,
                })
            }
        ),
        'key': id.key,
    }
}

export const push_stack = <T>(
    stack: _pi.Stack_Lookup<T>,
    acyclic: _pi.Acyclic_Lookup<T>,
): _pi.Stack_Lookup<T> => {
    return ({
        get_entry: (id, abort) => {
            const temp = acyclic.__get_entry_raw(
                id,
                abort,
            )
            if (temp === null) {
                return stack.get_entry(
                    id,
                    abort,
                )
            }
            return temp[0]
        },
        get_entry_depth: (id, abort) => {

            const temp = acyclic.__get_entry_raw(
                id,
                abort,
            )
            if (temp === null) {
                return 1 + stack.get_entry_depth(
                    id,
                    abort,
                )
            }
            return 0
        }
    })
}

export const get_possibly_circular_dependent_sibling_entry = <T>(
    lookup: _pi.Cyclic_Lookup<T>,
    reference: Unresolved_Reference,
    abort: _pi.Abort<gen_resolve.Error>,
): Resolved_Reference<_pi.Circular_Dependency<T>> => {
    return {
        'key': reference.key,
        'entry': lookup.get_entry(
            reference.key,
            {
                accessing_cyclic_before_resolved: () => _p.unreachable_code_path(),
                no_such_entry: () => abort({
                    'type': ['no such entry', reference.key],
                    'location': reference.location,
                }),
                no_context_lookup: () => abort({
                    'type': ['no context lookup', null],
                    'location': reference.location,
                })
            }
        )
    }
}

export type Resolved_Path<Resolved, Referred> = {
    'referred': Referred,
    'list': _pi.List<Resolved_Step<Resolved, Referred>>
}

export type Resolved_Step<Resolved, Referred> = {
    '_': Resolved,
    'referred': Referred,
}

export const resolve_path = <Unresolved, Resolved, Referred>(
    source: {
        'list': _pi.List<{
            'element': Unresolved,
            'location': gen_loc.Location,
        }>,
        'location': gen_loc.Location,
    },
    seed: Referred,
    handle_step: (
        $: Unresolved,
        current: Referred,
    ) => Resolved_Step<Resolved, Referred>,
): Resolved_Path<Resolved, Referred> => {
    let current = seed
    return {
        'list': _p.list.deprecated_build<Resolved_Step<Resolved, Referred>>(($i) => {
            source.list.__for_each(($) => {
                const step = handle_step($['element'], current)
                $i['add element'](step)
                current = step.referred
            })
        }),
        'referred': current
    }
}