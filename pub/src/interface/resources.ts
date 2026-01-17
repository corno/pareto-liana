import * as _pi from 'pareto-core-interface'

import * as d_unmarshall_result_types from "./to_be_generated/temp_unmashall_result"
import * as d_load_pareto_document from "./to_be_generated/load_pareto_document"
import * as d_load_pareto_file from "./to_be_generated/load_pareto_file"

export namespace queries {

    export type load_pareto_document = _pi.Query<d_load_pareto_document.Result, d_load_pareto_document.Error, d_load_pareto_document.Parameters>
    export type load_pareto_file = _pi.Query<d_load_pareto_file.Result, d_load_pareto_file.Error, d_load_pareto_file.Parameters>

}