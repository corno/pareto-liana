
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {

        "Parameters": sh.module_(sh.t.group({
            "url": sh.prop(sh.t.group({
                "path": sh.prop(sh.t.list(sh.t.text_global("text"))),
                "query": sh.prop(sh.t.list(sh.t.group({
                    "key": sh.prop(sh.t.text_global("text")),
                    "value": sh.prop(sh.t.text_global("text")),
                }))),
                "fragment": sh.prop(sh.t.optional(sh.t.text_global("text"))),
            })),
            "method": sh.prop(sh.t.state({
                "GET": sh.toption(sh.t.nothing()),
                "POST": sh.toption(sh.t.text_global("multi line text")),
                "PUT": sh.toption(sh.t.text_global("multi line text")),
                "DELETE": sh.toption(sh.t.nothing()),
                "PATCH": sh.toption(sh.t.text_global("multi line text")),
                "HEAD": sh.toption(sh.t.nothing()),
                "OPTIONS": sh.toption(sh.t.nothing()),
                "CONNECT": sh.toption(sh.t.nothing()),
                "TRACE": sh.toption(sh.t.nothing()),
            })),
            "headers": sh.prop(sh.t.dictionary(sh.t.text_global("text"))),
        })),

        "Error": sh.module_(sh.t.state({
            "dns": sh.toption(sh.t.group({
                "hostname": sh.prop(sh.t.text_global("text")),
                "message": sh.prop(sh.t.text_global("text")),
            })),
            "connection": sh.toption(sh.t.state({
                "refused": sh.toption(sh.t.nothing()),
                "reset": sh.toption(sh.t.nothing()),
                "timeout": sh.toption(sh.t.nothing()),
                "unreachable": sh.toption(sh.t.group({
                    "type": sh.prop(sh.t.state({
                        "network": sh.toption(sh.t.nothing()),
                        "host": sh.toption(sh.t.nothing()),
                    })),
                })),
                "other": sh.toption(sh.t.group({
                    "code": sh.prop(sh.t.text_global("text")),
                    "message": sh.prop(sh.t.text_global("text")),
                })),
            })),
            "tls": sh.toption(sh.t.group({
                "code": sh.prop(sh.t.text_global("text")),
                "message": sh.prop(sh.t.text_global("text")),
            })),
            "timeout": sh.toption(sh.t.nothing()), // Application-level timeout
            "aborted": sh.toption(sh.t.nothing()),
            "http": sh.toption(sh.t.component("Response")), // HTTP error responses
            "other": sh.toption(sh.t.group({
                "code": sh.prop(sh.t.optional(sh.t.text_global("text"))),
                "message": sh.prop(sh.t.text_global("text")),
            })),
        })),

        "Result": sh.module_(sh.t.component("Response")),


        "Response": sh.module_(sh.t.group({
            "status": sh.prop(sh.t.simple("status")), // 200-599
            "body": sh.prop(sh.t.optional(sh.t.text_global("multi line text"))),
            "headers": sh.prop(sh.t.dictionary(sh.t.text_global("text"))),
        })),

    }
)


