

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {

        "URI": module_(t.group({
            "scheme": prop(t.text_global("scheme")),
            "hier": prop(t.group({
                "start": prop(t.state({
                    "authority": toption(t.group({
                        "userinfo": prop(t.optional(t.text_global("userinfo"))),
                        "host": prop(t.text_global("host")), // registered name, IPv4 or IP literal
                        // "host": prop(t.state({
                        //     "IP literal": toption(t.text_global("text")), // IPv6 or IPvFuture in brackets
                        //     "IPv4 address": toption(t.text_global("text")),
                        //     "registered name": toption(t.text_global("text")),
                        // })),
                        "port": prop(t.optional(t.simple("port"))),

                    })),
                    "local": toption(t.state({
                        "absolute": toption(t.nothing()), // starts with /, but not //
                        "rootless": toption(t.nothing()), // does not start with /
                    }))
                })),
                "path": prop(t.list(t.text_global("segment"))),
            })),
            "query": prop(t.optional(t.text_global("query"))),
            "fragment": prop(t.optional(t.text_global("fragment"))),
        })),

    }
)


