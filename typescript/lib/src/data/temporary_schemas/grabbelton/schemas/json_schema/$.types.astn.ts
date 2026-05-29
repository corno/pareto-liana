import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "Document": module_(t.group({
            "$schema": prop(t.text_global("url")),
            "$id": prop(t.text_global("url")),
            "type": prop(t.component("Type")),
        })),

        "Type": module_(t.state({
            "array": toption(t.group({
                "minItems": prop(t.optional(t.simple("amount"))),
                "maxItems": prop(t.optional(t.simple("amount"))),
                "uniqueItems": prop(t.optional(t.simple("boolean"))),
                "oneOf": prop(t.optional(t.list(t.component("Type")))),
                "maxContains": prop(t.optional(t.simple("amount"))),
                "minContains": prop(t.optional(t.simple("amount"))),
            })),
            "number": toption(t.group({
                "multipleOf": prop(t.optional(t.simple("amount"))),
                "minimum": prop(t.optional(t.simple("amount"))),
                "maximum": prop(t.optional(t.simple("amount"))),
                "exclusiveMinimum": prop(t.optional(t.simple("amount"))),
                "exclusiveMaximum": prop(t.optional(t.simple("amount"))),
            })),
            "object": toption(t.group({
                "minProperties": prop(t.optional(t.simple("amount"))),
                "maxProperties": prop(t.optional(t.simple("amount"))),
                "required": prop(t.optional(t.list(t.text_global("identifier")))),
                "dependentRequired": prop(t.optional(t.list(t.text_global("identifier")))),
                
                // "properties": t.optional(t.dictionary(t.component("Type"))),
                // "additionalProperties": t.optional(t.component("Type")),
                // "patternProperties": t.optional(t.dictionary(t.component("Type"))),
                // "propertyNames": t.optional(t.component("Type")),
                // "dependencies": t.optional(t.dictionary(t.component("Type"))),
                // "propertyDependencies": t.optional(t.dictionary(t.list(t.text_global("identifier")))),
                // "unevaluatedProperties": t.optional(t.component("Type")),
                // "unevaluatedItems": t.optional(t.component("Type")),
                // "additionalItems": t.optional(t.component("Type")),
                // "minContains": t.optional(t.number_global("amount")),
                // "maxContains": t.optional(t.number_global("amount")),
            })),
            "string": toption(t.group({
                "minLength": prop(t.optional(t.simple("amount"))),
                "maxLength": prop(t.optional(t.simple("amount"))),
                "pattern": prop(t.optional(t.text_global("regex"))),
            })),
        }))
    }
)


