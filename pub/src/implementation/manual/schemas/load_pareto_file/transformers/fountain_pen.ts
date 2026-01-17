import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/to_be_generated/load_pareto_file"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data"

export namespace signatures {
    export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>
}

import * as sh from "pareto-fountain-pen/dist/shorthands/block"
import * as t_read_file_to_fountain_pen from "pareto-resources/dist/implementation/manual/schemas/read_file/transformers/fountain_pen"
import * as t_load_pareto_document from "../../load_pareto_document/transformers/fountain_pen"

export const Error: signatures.Error = ($) => _p.sg($, ($) => {
    switch ($[0]) {
        case 'document': return _p.ss($, ($) => t_load_pareto_document.Error($))
        case 'read file': return _p.ss($, ($) => t_read_file_to_fountain_pen.Error($))
        default: return _p.au($[0])
    }
})