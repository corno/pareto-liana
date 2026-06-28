
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {

        "URI": sh.module_(sh.t.group({
            "scheme": sh.prop(sh.t.text_global("scheme")),
            "hier": sh.prop(sh.t.group({
                "start": sh.prop(sh.t.state({
                    "authority": sh.toption(sh.t.group({
                        "userinfo": sh.prop(sh.t.optional(sh.t.text_global("userinfo"))),
                        "host": sh.prop(sh.t.text_global("host")), // registered name, IPv4 or IP literal
                        // "host": sh.prop(sh.t.state({
                        //     "IP literal": sh.toption(sh.t.text_global("text")), // IPv6 or IPvFuture in brackets
                        //     "IPv4 address": sh.toption(sh.t.text_global("text")),
                        //     "registered name": sh.toption(sh.t.text_global("text")),
                        // })),
                        "port": sh.prop(sh.t.optional(sh.t.simple("port"))),

                    })),
                    "local": sh.toption(sh.t.state({
                        "absolute": sh.toption(sh.t.nothing()), // starts with /, but not //
                        "rootless": sh.toption(sh.t.nothing()), // does not start with /
                    }))
                })),
                "path": sh.prop(sh.t.list(sh.t.text_global("segment"))),
            })),
            "query": sh.prop(sh.t.optional(sh.t.text_global("query"))),
            "fragment": sh.prop(sh.t.optional(sh.t.text_global("fragment"))),
        })),

    }
)


