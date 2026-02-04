import * as d_file_in_file_out from "./file_in_file_out"

import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export type Error =
    | ['processing', d_fp.Block_Part]
    | ['file in file out', d_file_in_file_out.Command_Error]