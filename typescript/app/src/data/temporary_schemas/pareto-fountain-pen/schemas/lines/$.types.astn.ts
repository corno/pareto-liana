import * as sh from "lib/schemas/schema/shorthands/manual"

export const $ = sh.modules(
    {
        "Lines": sh.module_(
sh.t.list(
sh.t.text_global("Output"))),
    }
)


