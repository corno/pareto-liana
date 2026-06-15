

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
        "Grammar": module_(t.group({
            "name": prop(t.text_global("Text Value")),
            "file name": prop(t.optional(t.text_global("Text Value"))),
            "type": prop(t.state({
                "lexer": toption(t.group({
                    "modes": prop(t.optional(t.dictionary(t.list(t.text_global("Text Value"))))),
                })),
                "parser": toption(t.nothing()),
                "combined": toption(t.group({
                    "implicit lexer": prop(t.optional(t.component("Grammar"))),
                })),
                "unknown": toption(t.nothing()),
            })),
            "rules": prop(t.dictionary(t.component("Rule"))),
            "token name to type map": prop(t.dictionary(t.simple("Integer"))),
            "string literal to type map": prop(t.dictionary(t.simple("Integer"))),
            "named actions": prop(t.optional(t.dictionary(t.text_global("Multi Line Text")))),
            "imported grammars": prop(t.optional(t.list(t.component("Grammar")))),
        })),

        "Rule": module_(t.group({
            "modifiers": prop(t.optional(t.list(t.text_global("Text Value")))),
            "args": prop(t.optional(t.text_global("Multi Line Text"))),
            "returns": prop(t.optional(t.text_global("Multi Line Text"))),
            "locals": prop(t.optional(t.text_global("Multi Line Text"))),
            "alternatives": prop(t.list(t.component("Alternative"))),
            "named actions": prop(t.optional(t.dictionary(t.text_global("Multi Line Text")))),
            "exceptions": prop(t.optional(t.list(t.text_global("Multi Line Text")))),
        })),

        "Alternative": module_(t.group({
            "items": prop(t.list(t.component("Item"))),
            "actions": prop(t.optional(t.list(t.text_global("Multi Line Text")))),
            "label": prop(t.optional(t.text_global("Text Value"))),
        })),

        "Item": module_(t.state({
            "token": toption(t.group({
                "name": prop(t.text_global("Text Value")),
                "label": prop(t.optional(t.text_global("Text Value"))),
            })),
            "rule": toption(t.group({
                "name": prop(t.text_global("Text Value")),
                "arguments": prop(t.optional(t.text_global("Multi Line Text"))),
                "label": prop(t.optional(t.text_global("Text Value"))),
            })),
            "action": toption(t.group({
                "code": prop(t.text_global("Multi Line Text")),
            })),
            "predicate": toption(t.group({
                "code": prop(t.text_global("Multi Line Text")),
            })),
            "set": toption(t.group({
                "items": prop(t.list(t.component("Item"))),
            })),
            "range": toption(t.group({
                "from": prop(t.text_global("Text Value")),
                "to": prop(t.text_global("Text Value")),
            })),
            "wildcard": toption(t.nothing()),
            "block": toption(t.group({
                "alternatives": prop(t.list(t.component("Alternative"))),
                "ebnf": prop(t.optional(t.state({
                    "plus": toption(t.nothing()),
                    "star": toption(t.nothing()),
                    "optional": toption(t.nothing()),
                }))),
            })),
        })),
    }
)