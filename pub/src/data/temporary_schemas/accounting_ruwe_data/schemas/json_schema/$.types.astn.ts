import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Document": type(t.group({
            "$schema": prop(t.text_global("url")),
            "$id": prop(t.text_global("url")),
            "type": prop(t.component("Type")),
        })),

        "Type": type(t.state_group({
            "array": tstate(t.group({
                "minItems": prop(t.optional(t.number_global("amount"))),
                "maxItems": prop(t.optional(t.number_global("amount"))),
                "uniqueItems": prop(t.optional(t.boolean())),
                "oneOf": prop(t.optional(t.list(t.component_cyclic("Type")))),
                "maxContains": prop(t.optional(t.number_global("amount"))),
                "minContains": prop(t.optional(t.number_global("amount"))),
            })),
            "number": tstate(t.group({
                "multipleOf": prop(t.optional(t.number_global("amount"))),
                "minimum": prop(t.optional(t.number_global("amount"))),
                "maximum": prop(t.optional(t.number_global("amount"))),
                "exclusiveMinimum": prop(t.optional(t.number_global("amount"))),
                "exclusiveMaximum": prop(t.optional(t.number_global("amount"))),
            })),
            "object": tstate(t.group({
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
            "string": tstate(t.group({
                "minLength": prop(t.optional(t.number_global("amount"))),
                "maxLength": prop(t.optional(t.number_global("amount"))),
                "pattern": prop(t.optional(t.text_global("regex"))),
            })),
        }))
    }
)


