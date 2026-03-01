import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_out from "../../../../interface/to_be_generated/unmashall_result"
import * as d_function from "../../../../interface/to_be_generated/deserialize_unmarshall_result"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"



export type Value = _pi.Refiner_With_Parameter<d_out.Value, d_function.Error, d_in.Text, d_function. Parameters>
export type Document = _pi.Refiner_With_Parameter<d_out.Document, d_function.Error, d_in.Text, d_function.Parameters>

//depencencies
import * as t_from_loc from "./list_of_characters"

export const Document: Document = ($, abort, $p) => {
    return {
        'content': Value($, abort, $p)
    }
}

export const Value: Value = ($, abort, $p) => t_from_loc.Value(
    _p_list_from_text(
        $,
        ($) => $
    ),
    abort,
    $p
)