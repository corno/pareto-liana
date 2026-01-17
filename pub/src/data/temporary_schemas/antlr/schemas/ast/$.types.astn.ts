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
        "Grammar": type(t.group({
            "name": prop(t.text_global("Text Value")),
            "file name": prop(t.optional(t.text_global("Text Value"))),
            "type": prop(t.state_group({
                "lexer": tstate(t.group({
                    "modes": prop(t.optional(t.dictionary(t.list(t.text_global("Text Value"))))),
                })),
                "parser": tstate(t.nothing()),
                "combined": tstate(t.group({
                    "implicit lexer": prop(t.optional(t.component_cyclic("Grammar"))),
                })),
                "unknown": tstate(t.nothing()),
            })),
            "rules": prop(t.dictionary(t.component("Rule"))),
            "token name to type map": prop(t.dictionary(t.number_global("Integer"))),
            "string literal to type map": prop(t.dictionary(t.number_global("Integer"))),
            "named actions": prop(t.optional(t.dictionary(t.text_global("Multi Line Text")))),
            "imported grammars": prop(t.optional(t.list(t.component_cyclic("Grammar")))),
        })),

        "Rule": type(t.group({
            "modifiers": prop(t.optional(t.list(t.text_global("Text Value")))),
            "args": prop(t.optional(t.text_global("Multi Line Text"))),
            "returns": prop(t.optional(t.text_global("Multi Line Text"))),
            "locals": prop(t.optional(t.text_global("Multi Line Text"))),
            "alternatives": prop(t.list(t.component("Alternative"))),
            "named actions": prop(t.optional(t.dictionary(t.text_global("Multi Line Text")))),
            "exceptions": prop(t.optional(t.list(t.text_global("Multi Line Text")))),
        })),

        "Alternative": type(t.group({
            "elements": prop(t.list(t.component("Element"))),
            "actions": prop(t.optional(t.list(t.text_global("Multi Line Text")))),
            "label": prop(t.optional(t.text_global("Text Value"))),
        })),

        "Element": type(t.state_group({
            "token": tstate(t.group({
                "name": prop(t.text_global("Text Value")),
                "label": prop(t.optional(t.text_global("Text Value"))),
            })),
            "rule": tstate(t.group({
                "name": prop(t.text_global("Text Value")),
                "arguments": prop(t.optional(t.text_global("Multi Line Text"))),
                "label": prop(t.optional(t.text_global("Text Value"))),
            })),
            "action": tstate(t.group({
                "code": prop(t.text_global("Multi Line Text")),
            })),
            "predicate": tstate(t.group({
                "code": prop(t.text_global("Multi Line Text")),
            })),
            "set": tstate(t.group({
                "elements": prop(t.list(t.component_cyclic("Element"))),
            })),
            "range": tstate(t.group({
                "from": prop(t.text_global("Text Value")),
                "to": prop(t.text_global("Text Value")),
            })),
            "wildcard": tstate(t.nothing()),
            "block": tstate(t.group({
                "alternatives": prop(t.list(t.component_cyclic("Alternative"))),
                "ebnf": prop(t.optional(t.state_group({
                    "plus": tstate(t.nothing()),
                    "star": tstate(t.nothing()),
                    "optional": tstate(t.nothing()),
                }))),
            })),
        })),
    }
)