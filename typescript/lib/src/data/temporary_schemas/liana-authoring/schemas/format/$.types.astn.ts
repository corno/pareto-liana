import * as p_di from 'pareto-core/dist/data/interface'

import {
    modules,
    t,
    module_,
    n,
    text,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {

        "Result": module_(t.component_external("text edits", "Text Edits")),

        "Error": module_(t.group({
            "message": prop(t.text_global("text")),
        })),

        "Parameters": module_(t.group({
            "options": prop(t.group({
                "insert spaces": prop(t.simple("boolean")),
                "preserve delimiters": prop(t.simple("boolean")),
                "preserve final newline state": prop(t.simple("boolean")),
                "preserve commas": prop(t.simple("boolean")),
                "indent string": prop(t.text_global("text")),
            })),
        })),

    }
)