import * as p_ from 'pareto-core-shorthands/unconstrained_target'
import * as p_temp from 'pareto-core/implementation/transformer'



import type * as d_package from "lib/interface/schemas/compile_temp_schemas"

// import { $ as m_accounting_ruwe_data } from "./accounting_ruwe_data/module.astn.js"
// import { $ as m_antlr } from "./antlr/module.astn.js"
// import { $ as m_astn_to_xml } from "./astn-to-xml/module.astn.js"
// import { $ as m_git } from "./git/module.astn.js"
// import { $ as m_json_to_astn } from "./json-to-astn/module.astn.js"


import { $ as m_astn } from "./astn/module.astn.js"
import { $ as m_astn_core } from "./astn-core/module.astn.js"
import { $ as m_pareto } from "./pareto/module.astn.js"
import { $ as m_pareto_boekhouding } from "./pareto-boekhouding/module.astn.js"
import { $ as m_pareto_development_tools } from "./pareto-development-tools/module.astn.js"
import { $ as m_pareto_fountain_pen } from "./pareto-fountain-pen/module.astn.js"
import { $ as m_pareto_graphviz } from "./pareto-graphviz/module.astn.js"
import { $ as m_pareto_json } from "./pareto-json/module.astn.js"
import { $ as m_pareto_json_schema } from "./pareto-json-schema/module.astn.js"
import { $ as m_pareto_liana } from "./pareto-liana/module.astn.js"
import { $ as m_pareto_lionweb } from "./pareto-lionweb/module.astn.js"
import { $ as m_pareto_resources } from "./pareto-resources/module.astn.js"
import { $ as m_pareto_stream } from "./pareto-stream/module.astn.js"
import { $ as m_pareto_http_sandboxed } from "./pareto-http-sandboxed/module.astn.js"
import { $ as m_pareto_static_html } from "./pareto-static-html/module.astn.js"
import { $ as m_liana_targets } from "./liana-targets/module.astn.js"
// import { $ as m_pareto_test } from "./pareto-test/module.astn.js"
import { $ as m_liana_authoring } from "./liana-authoring/module.astn.js"



export const $: d_package.Packages = p_.dictionary(
    p_temp.literal.dictionary({
        "astn": {
            'target path': "../astn",
            'package': m_astn,
        },
        "astn-core": {
            'target path': "../astn-core",
            'package': m_astn_core,
        },
        "pareto": {
            'target path': "../pareto",
            'package': m_pareto,
        },
        "pareto-boekhouding": {
            'target path': "../pareto-boekhouding",
            'package': m_pareto_boekhouding,
        },
        "pareto-development-tools": {
            'target path': "../pareto-development-tools",
            'package': m_pareto_development_tools,
        },
        "pareto-fountain-pen": {
            'target path': "../pareto-fountain-pen",
            'package': m_pareto_fountain_pen,
        },
        "pareto-graphviz": {
            'target path': "../pareto-graphviz",
            'package': m_pareto_graphviz,
        },
        // "pareto-http-sandboxed": {
        //     'target path': "../pareto-http-sandboxed",
        //     'package': m_pareto_http_sandboxed,
        // },
        "pareto-json": {
            'target path': "../pareto-json",
            'package': m_pareto_json,
        },
        "pareto-json-schema": {
            'target path': "../pareto-json-schema",
            'package': m_pareto_json_schema,
        },
        "pareto-liana": {
            'target path': "../pareto-liana",
            'package': m_pareto_liana,
        },
        "pareto-lionweb": {
            'target path': "../pareto-lionweb",
            'package': m_pareto_lionweb,
        },
        "pareto-resources": {
            'target path': "../pareto-resources",
            'package': m_pareto_resources,
        },
        "pareto-stream": {
            'target path': "../pareto-stream",
            'package': m_pareto_stream,
        },
        "pareto-static-html": {
            'target path': "../pareto-static-html",
            'package': m_pareto_static_html,
        },
        "liana-authoring": {
            'target path': "../liana-authoring",
            'package': m_liana_authoring,
        },
        "liana-targets": {
            'target path': "../liana-targets",
            'package': m_liana_targets,
        },
    })
)