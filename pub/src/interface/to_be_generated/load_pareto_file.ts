import * as d_lpd from "./load_pareto_document"
import * as d_path from "pareto-resources/dist/interface/generated/pareto/schemas/path/data"
import * as d_unmarshall_result from "./temp_unmashall_result"
import * as d_read_file from "pareto-resources/dist/interface/generated/pareto/schemas/read_file/data"

export type Result = d_unmarshall_result.Node

export type Error =
    | ['read file', d_read_file.Error]
    | ['document', d_lpd.Error]

export type Parameters = {
    'file path': d_path.Node_Path,
}