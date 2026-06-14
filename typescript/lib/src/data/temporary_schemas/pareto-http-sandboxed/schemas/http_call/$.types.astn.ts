import * as p_di from 'pareto-core/dist/data/interface'

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

        "Parameters": module_(t.group({
            "url": prop(t.group({
                "path": prop(t.list(t.text_global("text"))),
                "query": prop(t.list(t.group({
                    "key": prop(t.text_global("text")),
                    "value": prop(t.text_global("text")),
                }))),
                "fragment": prop(t.optional(t.text_global("text"))),
            })),
            "method": prop(t.state({
                "GET": toption(t.nothing()),
                "POST": toption(t.text_global("multi line text")),
                "PUT": toption(t.text_global("multi line text")),
                "DELETE": toption(t.nothing()),
                "PATCH": toption(t.text_global("multi line text")),
                "HEAD": toption(t.nothing()),
                "OPTIONS": toption(t.nothing()),
                "CONNECT": toption(t.nothing()),
                "TRACE": toption(t.nothing()),
            })),
            "headers": prop(t.dictionary(t.text_global("text"))),
        })),

        "Error": module_(t.state({
            "dns": toption(t.group({
                "hostname": prop(t.text_global("text")),
                "message": prop(t.text_global("text")),
            })),
            "connection": toption(t.state({
                "refused": toption(t.nothing()),
                "reset": toption(t.nothing()),
                "timeout": toption(t.nothing()),
                "unreachable": toption(t.group({
                    "type": prop(t.state({
                        "network": toption(t.nothing()),
                        "host": toption(t.nothing()),
                    })),
                })),
                "other": toption(t.group({
                    "code": prop(t.text_global("text")),
                    "message": prop(t.text_global("text")),
                })),
            })),
            "tls": toption(t.group({
                "code": prop(t.text_global("text")),
                "message": prop(t.text_global("text")),
            })),
            "timeout": toption(t.nothing()), // Application-level timeout
            "aborted": toption(t.nothing()),
            "http": toption(t.component("Response")), // HTTP error responses
            "other": toption(t.group({
                "code": prop(t.optional(t.text_global("text"))),
                "message": prop(t.text_global("text")),
            })),
        })),

        "Result": module_(t.component("Response")),


        "Response": module_(t.group({
            "status": prop(t.simple("status")), // 200-599
            "body": prop(t.optional(t.text_global("multi line text"))),
            "headers": prop(t.dictionary(t.text_global("text"))),
        })),

    }
)


