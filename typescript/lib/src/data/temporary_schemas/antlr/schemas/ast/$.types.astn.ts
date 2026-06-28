
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Grammar": sh.module_(sh.t.group({
            "name": sh.prop(sh.t.text_global("Text Value")),
            "file name": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            "type": sh.prop(sh.t.state({
                "lexer": sh.toption(sh.t.group({
                    "modes": sh.prop(sh.t.optional(sh.t.dictionary(sh.t.list(sh.t.text_global("Text Value"))))),
                })),
                "parser": sh.toption(sh.t.nothing()),
                "combined": sh.toption(sh.t.group({
                    "implicit lexer": sh.prop(sh.t.optional(sh.t.component("Grammar"))),
                })),
                "unknown": sh.toption(sh.t.nothing()),
            })),
            "rules": sh.prop(sh.t.dictionary(sh.t.component("Rule"))),
            "token name to type map": sh.prop(sh.t.dictionary(sh.t.simple("Integer"))),
            "string literal to type map": sh.prop(sh.t.dictionary(sh.t.simple("Integer"))),
            "named actions": sh.prop(sh.t.optional(sh.t.dictionary(sh.t.text_global("Multi Line Text")))),
            "imported grammars": sh.prop(sh.t.optional(sh.t.list(sh.t.component("Grammar")))),
        })),

        "Rule": sh.module_(sh.t.group({
            "modifiers": sh.prop(sh.t.optional(sh.t.list(sh.t.text_global("Text Value")))),
            "args": sh.prop(sh.t.optional(sh.t.text_global("Multi Line Text"))),
            "returns": sh.prop(sh.t.optional(sh.t.text_global("Multi Line Text"))),
            "locals": sh.prop(sh.t.optional(sh.t.text_global("Multi Line Text"))),
            "alternatives": sh.prop(sh.t.list(sh.t.component("Alternative"))),
            "named actions": sh.prop(sh.t.optional(sh.t.dictionary(sh.t.text_global("Multi Line Text")))),
            "exceptions": sh.prop(sh.t.optional(sh.t.list(sh.t.text_global("Multi Line Text")))),
        })),

        "Alternative": sh.module_(sh.t.group({
            "items": sh.prop(sh.t.list(sh.t.component("Item"))),
            "actions": sh.prop(sh.t.optional(sh.t.list(sh.t.text_global("Multi Line Text")))),
            "label": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
        })),

        "Item": sh.module_(sh.t.state({
            "token": sh.toption(sh.t.group({
                "name": sh.prop(sh.t.text_global("Text Value")),
                "label": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            })),
            "rule": sh.toption(sh.t.group({
                "name": sh.prop(sh.t.text_global("Text Value")),
                "arguments": sh.prop(sh.t.optional(sh.t.text_global("Multi Line Text"))),
                "label": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            })),
            "action": sh.toption(sh.t.group({
                "code": sh.prop(sh.t.text_global("Multi Line Text")),
            })),
            "predicate": sh.toption(sh.t.group({
                "code": sh.prop(sh.t.text_global("Multi Line Text")),
            })),
            "set": sh.toption(sh.t.group({
                "items": sh.prop(sh.t.list(sh.t.component("Item"))),
            })),
            "range": sh.toption(sh.t.group({
                "from": sh.prop(sh.t.text_global("Text Value")),
                "to": sh.prop(sh.t.text_global("Text Value")),
            })),
            "wildcard": sh.toption(sh.t.nothing()),
            "block": sh.toption(sh.t.group({
                "alternatives": sh.prop(sh.t.list(sh.t.component("Alternative"))),
                "ebnf": sh.prop(sh.t.optional(sh.t.state({
                    "plus": sh.toption(sh.t.nothing()),
                    "star": sh.toption(sh.t.nothing()),
                    "optional": sh.toption(sh.t.nothing()),
                }))),
            })),
        })),
    }
)