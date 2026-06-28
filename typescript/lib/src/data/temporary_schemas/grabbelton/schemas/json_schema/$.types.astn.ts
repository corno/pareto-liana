
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Document": sh.module_(sh.t.group({
            "$schema": sh.prop(sh.t.text_global("url")),
            "$id": sh.prop(sh.t.text_global("url")),
            "type": sh.prop(sh.t.component("Type")),
        })),

        "Type": sh.module_(sh.t.state({
            "array": sh.toption(sh.t.group({
                "minItems": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "maxItems": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "uniqueItems": sh.prop(sh.t.optional(sh.t.simple("boolean"))),
                "oneOf": sh.prop(sh.t.optional(sh.t.list(sh.t.component("Type")))),
                "maxContains": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "minContains": sh.prop(sh.t.optional(sh.t.simple("amount"))),
            })),
            "number": sh.toption(sh.t.group({
                "multipleOf": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "minimum": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "maximum": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "exclusiveMinimum": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "exclusiveMaximum": sh.prop(sh.t.optional(sh.t.simple("amount"))),
            })),
            "object": sh.toption(sh.t.group({
                "minProperties": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "maxProperties": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "required": sh.prop(sh.t.optional(sh.t.list(sh.t.text_global("identifier")))),
                "dependentRequired": sh.prop(sh.t.optional(sh.t.list(sh.t.text_global("identifier")))),
                
                // "properties": sh.t.optional(sh.t.dictionary(sh.t.component("Type"))),
                // "additionalProperties": sh.t.optional(sh.t.component("Type")),
                // "patternProperties": sh.t.optional(sh.t.dictionary(sh.t.component("Type"))),
                // "propertyNames": sh.t.optional(sh.t.component("Type")),
                // "dependencies": sh.t.optional(sh.t.dictionary(sh.t.component("Type"))),
                // "propertyDependencies": sh.t.optional(sh.t.dictionary(sh.t.list(sh.t.text_global("identifier")))),
                // "unevaluatedProperties": sh.t.optional(sh.t.component("Type")),
                // "unevaluatedItems": sh.t.optional(sh.t.component("Type")),
                // "additionalItems": sh.t.optional(sh.t.component("Type")),
                // "minContains": sh.t.optional(sh.t.number_global("amount")),
                // "maxContains": sh.t.optional(sh.t.number_global("amount")),
            })),
            "string": sh.toption(sh.t.group({
                "minLength": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "maxLength": sh.prop(sh.t.optional(sh.t.simple("amount"))),
                "pattern": sh.prop(sh.t.optional(sh.t.text_global("regex"))),
            })),
        }))
    }
)


