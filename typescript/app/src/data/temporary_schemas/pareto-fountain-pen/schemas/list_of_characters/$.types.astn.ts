import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        
        "List of Characters": sh.module_(
sh.t.list(
sh.t.simple("Natural"))),

    }
)


