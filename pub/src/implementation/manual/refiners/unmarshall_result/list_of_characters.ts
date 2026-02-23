import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_parse_tree from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_schema from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "../../../../interface/to_be_generated/unmashall_result"
import * as d_function from "../../../../interface/to_be_generated/deserialize_unmarshall_result"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

type Parameters = {
    'instance path': string
    'schema content': string
    'schema path': string
}

export type Value = _pi.Refiner_With_Parameter<d_out.Value, d_function.Error, d_in.List_of_Characters, Parameters>
export type Document = _pi.Refiner_With_Parameter<d_out.Document, d_function.Error, d_in.List_of_Characters, Parameters>

//depencencies
import * as tu_dynamic_unmarshall from "./astn_parse_tree"
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/refiners/parse_tree/list_of_characters"
import { $x as load_schema } from "../schema/deserializers"

export const Document: Document = ($, abort, $p) => {
    return {
        'content': Value($, abort, $p)
    }
}

export const Value: Value = ($, abort, $p) => {
    const x = load_schema(
        _p_list_from_text(
            $p['schema content'],
            ($) => $
        ),
        ($) => abort(['schema error', {
            'error': $,
            'file location': $p['schema path'],
        }]),
        {
            'document resource identifier': $p['schema path'],
        }
    )

    const x2 = r_parse_tree_from_text.Document(
        $,
        ($) => abort(['parse error', $]),
        {
            'tab size': 4,
            'document resource identifier': $p['instance path']
        },
    )

    const x3 = tu_dynamic_unmarshall.Node(
        x2.content,
        {
            'definition': x['root value'],
        }
    )
    return x3
}