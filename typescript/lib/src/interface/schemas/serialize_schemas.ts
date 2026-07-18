
import type * as s_resolving from "./resolving.js"
import type * as s_write_file from "./fs_unrestricted_write_file.js"


export type Error =
    | ['error writing file', s_write_file.Error]
    | ['resolving', s_resolving.Error]