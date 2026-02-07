import * as _p from 'pareto-core/dist/assign'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as d_path from "pareto-resources/dist/interface/generated/liana/schemas/path/data"

const replace = ($: string, search: number, replace: number): string => {
    return _p_text_from_list(
        _p_list_from_text<number>(
            $,
            ($) => $ === search ? replace : $,
        ),
        ($) => $
    )
}

export const replace_space_in_context_path = ($: d_path.Node_Path): d_path.Node_Path => {
    const replace_space = ($: string): string => {
        return replace($, 32, 95 /* space -> underscore */)
    }
    return {
        'context': {
            'start': $.context.start,
            'subpath': $.context.subpath.__l_map(($) => replace_space($)),
        },
        'node': replace_space($.node)
    }
}