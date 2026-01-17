import * as _pi from 'pareto-core-interface'

import { st } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/schema/data/unresolved"


import { $ as x_alan_light_oldstyle } from "./schemas/alan_light_oldstyle/$.module.astn"
import { $ as x_csv } from "./schemas/csv/$.module.astn"
import { $ as x_html } from "./schemas/html/$.module.astn"
import { $ as x_json_schema } from "./schemas/json_schema/$.module.astn"
import { $ as x_legacy_schema } from "./schemas/legacy_schema/$.module.astn"
import { $ as x_railroad_diagram } from "./schemas/railroad_diagram/$.module.astn"
import { $ as x_regular_expression } from "./schemas/regular_expression/$.module.astn"
import { $ as x_semantic_versioning } from "./schemas/semantic_versioning/$.module.astn"
import { $ as x_xml_parse_result } from "./schemas/xml/parse_result/$.module.astn"
import { $ as x_xml_simple } from "./schemas/xml/simple/$.module.astn"

export const $: g_.Schema_Tree = st.set({
    "alan light oldstyle": x_alan_light_oldstyle,
    "csv": x_csv,
    "html": x_html,
    "json schema": x_json_schema,
    "legacy schema": x_legacy_schema,
    "railroad diagram": x_railroad_diagram,
    "regular expression": x_regular_expression,
    "semantic versioning": x_semantic_versioning,
    "xml parse result": x_xml_parse_result,
    "xml simple": x_xml_simple,
    //"builder configuration": x_builder_configuration,
})