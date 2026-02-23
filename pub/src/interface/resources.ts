import * as _pi from 'pareto-core/dist/interface'

import * as d_load_document from "./to_be_generated/load_document"
import * as d_load_file from "./to_be_generated/load_file"

export namespace queries {

    export type load_document = _pi.Query<d_load_document.Result, d_load_document.Error, d_load_document.Parameters>
    export type load_file = _pi.Query<d_load_file.Result, d_load_file.Error, d_load_file.Parameters>

}