import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'


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
        get_entry_depth(id) {
            return -1
        },
    })

}

export const dictionary_to_lookup = <T>(
    dict: _pi.Dictionary<T>,
): _pi.Acyclic_Lookup<T> => ({
    get_entry: (id, abort) => dict.__get_entry(
        id,
        () => abort.no_such_entry(id),
    ),
    __get_entry_raw: (id, abort) => dict.__get_entry_raw(id)
})

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

export const map_with_state = <Source_Element, Target_Element, State, Result_Type>(
    $: _pi.List<Source_Element>,
    initial_state: State,
    handle_value: (
        value: Source_Element,
        state: State
    ) => Target_Element,
    update_state: (
        value: Target_Element,
        state: State
    ) => State,
    wrapup: (
        final_list: _pi.List<Target_Element>,
        final_state: State
    ) => Result_Type,
): Result_Type => {
    let current_state = initial_state
    return wrapup(
        $.__l_map(($) => {
            const result = handle_value($, current_state)
            current_state = update_state(result, current_state)
            return result
        }),
        current_state
    )
}