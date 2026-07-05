
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Decision": sh.module_(sh.t.group({
            "decision number": sh.prop(sh.t.simple("Integer")),
            "atn decision state": sh.prop(sh.t.simple("Integer")),
            "alternatives": sh.prop(sh.t.dictionary(sh.t.group({
                "alternative number": sh.prop(sh.t.simple("Integer")),
                "token sets": sh.prop(sh.t.dictionary(sh.t.group({
                    "context depth": sh.prop(sh.t.simple("Integer")),
                    "intervals": sh.prop(sh.t.dictionary(sh.t.group({
                        "min": sh.prop(sh.t.simple("Integer")),
                        "max": sh.prop(sh.t.simple("Integer")),
                    }))),
                }))),
            }))),
        })),
    }
)
