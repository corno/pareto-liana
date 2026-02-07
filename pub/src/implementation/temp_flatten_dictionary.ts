import * as _pi from 'pareto-core/dist/interface'
import * as _pinternals from 'pareto-core/dist/assign'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'

export const $$ = <T>(
    $: _pi.Dictionary<_pi.Dictionary<T>>,
    $p: { 'separator': string },
    abort: _pi.Abort<['duplicate id', null]>
): _pi.Dictionary<T> => _pinternals.dictionary.from.list(
    _p_list_build_deprecated<{ 'id': string, 'value': T }>(($i) => {
        $.__d_map(($, id) => {
            $.__d_map(($, sub_id) => {
                $i['add item']({
                    'id': id + $p.separator + sub_id,
                    'value': $
                })
            })
        })
    }),
).convert(
    ($) => $.id,
    ($) => $.value,
    () => abort(['duplicate id', null]),
)