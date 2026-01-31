import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Document": module_(t.group({
            "$schema": prop(t.text_global("url")),
            "$id": prop(t.text_global("url")),
            "type": prop(t.component("Type")),
        })),

        "Type": module_(t.state({
            "array": toption(t.group({
                "minItems": prop(t.optional(t.number_global("amount"))),
                "maxItems": prop(t.optional(t.number_global("amount"))),
                "uniqueItems": prop(t.optional(t.boolean())),
                "oneOf": prop(t.optional(t.list(t.component("Type")))),
                "maxContains": prop(t.optional(t.number_global("amount"))),
                "minContains": prop(t.optional(t.number_global("amount"))),
            })),
            "number": toption(t.group({
                "multipleOf": prop(t.optional(t.number_global("amount"))),
                "minimum": prop(t.optional(t.number_global("amount"))),
                "maximum": prop(t.optional(t.number_global("amount"))),
                "exclusiveMinimum": prop(t.optional(t.number_global("amount"))),
                "exclusiveMaximum": prop(t.optional(t.number_global("amount"))),
            })),
            "object": toption(t.group({
                "minProperties": prop(t.optional(t.number_global("amount"))),
                "maxProperties": prop(t.optional(t.number_global("amount"))),
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
                "minLength": prop(t.optional(t.number_global("amount"))),
                "maxLength": prop(t.optional(t.number_global("amount"))),
                "pattern": prop(t.optional(t.text_global("regex"))),
            })),
        }))
    }
)


