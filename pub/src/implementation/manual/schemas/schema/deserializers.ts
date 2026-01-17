import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'
import * as _p_temp from 'pareto-core-transformer'

//data types
import * as d_schema from "../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_deserialize_schema from "../../../../interface/to_be_generated/deserialize_schema"

//dependencies
import * as r_pareto_schema from "../../../temp/resolvers/schema"

// import * as u_pareto_schema from "../../../generated/pareto/schemas/schema/unmarshall"

import * as ds_astn_source from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"




type Element_And_Rest<T> = {
    'element': T
    'rest': _pi.List<T>
}

export const temp_pop_first_element = <T>($: _pi.List<T>): _pi.Optional_Value<Element_And_Rest<T>> => {
    const arr = $
    return $.__get_possible_element_at(0).__o_map(
        ($) => ({
            'rest': _p.list.deprecated_build(($i) => {
                let is_first = true
                arr.__for_each(($) => {
                    if (!is_first) {
                        $i['add element']($)
                    }
                    is_first = false
                })
            }),
            'element': $,
        }),
    )
}


export const $: _pi.Deserializer_With_Parameters<d_schema.Type, d_deserialize_schema.Error, { 'uri': string }> = ($, abort, $p) => {



    const x = ds_astn_source.Document(
        $,
        ($) => abort(['parse error', $]),
        {
            'tab size': 4,
            'uri': $p.uri
        },
    )

    const resolved_schema_schema = r_pareto_schema.Type_Specification(
        _pdev.implement_me("XX"),
        // u_pareto_schema.Type_Specification(
        //     x.content,
        //     {
        //         'value deserializers': {
        //             'boolean': ($) => $ === "true",
        //             'default number': () => 0,
        //             'custom numbers': null
        //         }
        //     }
        // ),
        {
            'location 2 string': ($) => _pdev.implement_me("XX2"), //`${$.start.relative.line}:${$.start.relative.column}`,
            'parameters': {
                'lookups': null,
                'values': null,
            }
        }
    )
    const temp_find_schema = (
        $: d_schema.Schema_Tree,
        schema_path: _pi.List<string>,
    ): d_schema.Schema => {
        const st = $
        return temp_pop_first_element(schema_path).__decide(
            ($) => {
                const split = $
                return _p_temp.sg(st, ($) => {
                    switch ($[0]) {

                        case 'schema': return _p_temp.ss($, ($) => _pdev.implement_me(`(FIXME: make this a reference) the selected tree is a schema, not a set, can't do this step: ${split.element} `))
                        case 'set': return _p_temp.ss($, ($) => $.__get_possible_entry(split.element).__decide(
                            ($) => temp_find_schema($, split.rest),
                            () => _pdev.implement_me(`(FIXME: make this a reference) schema not found: ${split.element}`)
                        ))
                        default: return _p_temp.au($[0])
                    }
                })
            },
            () => _p_temp.sg($, ($) => {
                switch ($[0]) {
                    case 'schema': return _p_temp.ss($, ($) => $)
                    case 'set': return _p_temp.ss($, ($) => _pdev.implement_me(`(FIXME: make this a reference) the selected tree is a set, not a schema`))
                    default: return _p_temp.au($[0])
                }
            })
        )
    }
    const schema = temp_find_schema(resolved_schema_schema.schema, resolved_schema_schema['schema path'])

    const type = schema.types.__get_possible_entry(resolved_schema_schema.type).__decide(
        ($) => $,
        () => {
            schema.types.__d_map(($, key) => {
                _pdev.log_debug_message(`available type: ${key}`, () => { })
            })
            _pdev.implement_me(`(FIXME: make this a reference) root type ${resolved_schema_schema.type} not found`)
        }
    )

    return type
}