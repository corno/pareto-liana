
import type * as s_resolving from "./resolving.js"
import type * as s_write_file from "pareto-filesystem-unrestricted-api/modules/unrestricted/interface/schemas/write_file"

export type Error =
    | ['error writing file', s_write_file.Error]
    | ['resolving', s_resolving.Error]