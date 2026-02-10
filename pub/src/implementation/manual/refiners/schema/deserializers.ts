import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import * as _p_temp from 'pareto-core/dist/assign'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'

//data types
import * as d_out from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_function from "liana-core/dist/interface/to_be_generated/deserialize_resolved"
import * as d_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

//dependencies
import * as r_pareto_schema from "../../../temp/resolvers/schema/unresolved_manual"

// import * as r_parse_tree_to_schema from "../../../generated/liana/schemas/schema/unmarshall"

import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/refiners/parse_tree/list_of_characters"
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'




type Element_And_Rest<T> = {
    'element': T
    'rest': _pi.List<T>
}

export const temp_pop_first_element = <T>($: _pi.List<T>): _pi.Optional_Value<Element_And_Rest<T>> => {
    const arr = $
    return _p.optional.from.optional(
        $.__deprecated_get_possible_item_at(0),
    ).map(
        ($) => ({
            'rest': _p_list_build_deprecated(($i) => {
                let is_first = true
                arr.__l_map(($) => {
                    if (!is_first) {
                        $i['add item']($)
                    }
                    is_first = false
                })
            }),
            'element': $,
        }),
    )
}


export const $x: _pi.Refiner_With_Parameter<d_out.Module, d_function.Error, d_in.List_of_Characters, { 'document resource identifier': string }> = ($, abort, $p) => {

    const x = r_parse_tree_from_text.Document(
        $,
        ($) => abort(['deserialize', ['parse error', $]]),
        {
            'tab size': 4,
            'document resource identifier': $p['document resource identifier']
        },
    )

    const resolved_schema_schema = r_pareto_schema.Type_Specification(
        _p_unreachable_code_path("this should not be used, this is just a placeholder until the real implementation is done"),
        // r_parse_tree_to_schema.Module_Specification(
        //     x.content,
        //     ($) => abort(['unmarshall error', $]),
        // ),
        ($) => abort(['resolve error', $]),
        null,
        null,
    )
    const temp_find_schema = (
        $: d_out.Schema_Tree,
        schema_path: _pi.List<string>,
    ): d_out.Schema => {
        const st = $
        return temp_pop_first_element(schema_path).__decide(
            ($) => {
                const split = $
                return _p_temp.decide.state(st, ($) => {
                    switch ($[0]) {

                        case 'schema': return _p_temp.ss($, ($) => _pdev.implement_me(`(FIXME: make this a reference) the selected tree is a schema, not a set, can't do this step: ${split.element} `))
                        case 'set': return _p_temp.ss($, ($) => $.__get_possible_entry_deprecated(split.element).__decide(
                            ($) => temp_find_schema($, split.rest),
                            () => _pdev.implement_me(`(FIXME: make this a reference) schema not found: ${split.element}`)
                        ))
                        default: return _p_temp.au($[0])
                    }
                })
            },
            () => _p_temp.decide.state($, ($) => {
                switch ($[0]) {
                    case 'schema': return _p_temp.ss($, ($) => $)
                    case 'set': return _p_temp.ss($, ($) => _pdev.implement_me("(FIXME: make this a reference) the selected tree is a set, not a schema"))
                    default: return _p_temp.au($[0])
                }
            })
        )
    }
    const schema = temp_find_schema(resolved_schema_schema.schema, resolved_schema_schema['schema path'])

    const type = schema.modules.__get_possible_entry_deprecated(resolved_schema_schema.module).__decide(
        ($) => $,
        () => {
            schema.modules.__d_map(($, id) => {
                _pdev.log_debug_message(`available type: ${id}`, () => { })
            })
            _pdev.implement_me(`(FIXME: make this a reference) root type ${resolved_schema_schema.module} not found`)
        }
    )

    return type
}