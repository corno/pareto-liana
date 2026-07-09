

import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Directory": sh.module_(
            sh.t.state({
                "dictionary": sh.toption(
                    sh.t.component("Directory")),
                "group": sh.toption(
                    sh.t.dictionary(
                        sh.t.state({
                            "directory": sh.toption(
                                sh.t.component("Directory")),
                            "file": sh.toption(
                                sh.t.state({
                                    "manual": sh.toption(
                                        sh.t.nothing()),
                                    "generated": sh.toption(
                                        sh.t.group({
                                            "commit to git": sh.prop(
                                                sh.t.simple("boolean"))
                                        })),
                                })),
                        }))),
                "wildcards": sh.toption(
                    sh.t.group({
                        "required directories": sh.prop(
                            sh.t.simple("Natural")),
                        "additional directories allowed": sh.prop(
                            sh.t.simple("boolean")),
                        "extensions": sh.prop(
                            sh.t.list(
                                sh.t.text_global("text"))),
                        "warn": sh.prop(
                            sh.t.simple("boolean")),
                    })),
                "freeform": sh.toption(
                    sh.t.nothing()),
                "ignore": sh.toption(
                    sh.t.nothing()),
                "generated": sh.toption(
                    sh.t.group({
                        "commit to git": sh.prop(
                            sh.t.simple("boolean"))
                    })),
            })),
    }
)
