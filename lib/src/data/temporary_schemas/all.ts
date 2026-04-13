import * as _p from 'pareto-core-shorthands/dist/unconstrained' //should be unresolved_data I think

import * as _pi from 'pareto-core/dist/interface'

import * as d_package from "../../interface/to_be_generated/compile_temp_schemas"

// import { $ as m_accounting_ruwe_data } from "./accounting_ruwe_data/module.astn"
// import { $ as m_antlr } from "./antlr/module.astn"
// import { $ as m_astn_to_xml } from "./astn-to-xml/module.astn"
// import { $ as m_git } from "./git/module.astn"
// import { $ as m_json_to_astn } from "./json-to-astn/module.astn"


import { $ as m_astn } from "./astn/module.astn"
import { $ as m_astn_core } from "./astn-core/module.astn"
import { $ as m_pareto } from "./pareto/module.astn"
import { $ as m_pareto_boekhouding } from "./pareto-boekhouding/module.astn"
import { $ as m_pareto_development_tools } from "./pareto-development-tools/module.astn"
import { $ as m_pareto_fountain_pen } from "./pareto-fountain-pen/module.astn"
import { $ as m_pareto_graphviz } from "./pareto-graphviz/module.astn"
import { $ as m_pareto_json } from "./pareto-json/module.astn"
import { $ as m_pareto_liana } from "./pareto-liana/module.astn"
import { $ as m_pareto_lionweb } from "./pareto-lionweb/module.astn"
import { $ as m_pareto_resources } from "./pareto-resources/module.astn"
import { $ as m_pareto_static_html } from "./pareto-static-html/module.astn"
import { $ as m_liana_targets } from "./liana-targets/module.astn"
// import { $ as m_pareto_test } from "./pareto-test/module.astn"
import { $ as m_liana_authoring } from "./liana-authoring/module.astn"



export const $ = _p.dictionary.literal<d_package.Parameters>({
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
    "pareto-json": {
        'target path': "../pareto-json",
        'package': m_pareto_json,
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
    "pareto-static-html": {
        'target path': "../pareto-static-html",
        'package': m_pareto_static_html,
    },
    "liana-targets": {
        'target path': "../liana-targets",
        'package': m_liana_targets,
    },
    // "pareto-test": {
    //     'target path': "../pareto-test",
    //     'module': m_pareto_test,
    // },
    "liana-authoring": {
        'target path': "../liana-authoring",
        'package': m_liana_authoring,
    },
    // "accounting_ruwe_data": {
    //     'target path': "../../../pareto-rosetta/accounting_ruwe_data",
    //     'module': m_accounting_ruwe_data,
    // },
    // "antlr": {
    //     'target path': "../../../pareto-rosetta/antlr",
    //     'module': m_antlr,
    // },
    // "astn-to-xml": {
    //     'target path': "../astn-to-xml",
    //     'module': m_astn_to_xml,
    // },
    // "json-to-astn": {
    //     'target path': "../../../pareto-rosetta/json-to-astn",
    //     'module': m_json_to_astn,
    // },
    // "git": {
    //     'target path': "../git",
    //     'module': m_git,
    // },
})