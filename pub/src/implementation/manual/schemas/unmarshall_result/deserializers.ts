import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'


import * as d_load_pareto_document from "../../../../interface/to_be_generated/load_pareto_document"
import * as d_parse_tree from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

import * as d_schema from "../../../../interface/generated/liana/schemas/schema/data/resolved"


export type Schema_And_Instance = {
    'schema type': d_schema.Module
    'instance': d_parse_tree.Document
}

export type Parameters = {
    'instance path': string
    'schema content': string
    'schema path': string
}


import * as d_unmarshall_result_types from "../../../../interface/to_be_generated/temp_unmashall_result"
import * as d_deserialize_unmarshall_result from "../../../../interface/to_be_generated/deserialize_unmarshall_result"
import * as d_text from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as api from "../../../../interface/to_be_generated/load_pareto_document"

//depencencies

import * as tu_dynamic_unmarshall from "./refiners/astn_parse_tree"

import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"

import { $x as load_schema } from "../schema/deserializers"

//implementation

export const $$x: _pi.Refiner_With_Parameter<d_unmarshall_result_types.Node, d_deserialize_unmarshall_result.Error, d_text.List_of_Characters, Parameters> = ($, abort, $p) => {
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