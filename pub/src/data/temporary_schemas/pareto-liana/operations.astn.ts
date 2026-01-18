import * as _pi from 'pareto-core-interface'

import { operation, set, operations } from "../../../shorthands/module"
import { t, text, n } from "../../../shorthands/schema"
import * as g_ from "../../../interface/generated/pareto/schemas/module/data/unresolved"


export const $: g_.Operations = operations(
    {
        "pure": set({
            // "dictionary": set({
            //     "create single entry dictionary": operation(
            //         { "T": null },
            //         t.identifier_value_pair(t.type_parameter("T")),
            //         {},
            //         t.dictionary(t.type_parameter("T")),
            //     ),
            //     "filter": operation(
            //         { "T": null },
            //         t.dictionary(t.optional(t.type_parameter("T"))),
            //         {},
            //         t.dictionary(t.type_parameter("T")),
            //     ),
            //     "flatten": operation(
            //         { "T": null },
            //         t.dictionary(t.dictionary(t.type_parameter("T"))),
            //         {
            //             "separator": t.text_local(text('single line'))
            //         },
            //         t.dictionary(t.type_parameter("T")),
            //     ),
            //     "group": operation(
            //         { "T": null },
            //         t.dictionary(t.identifier_value_pair(t.type_parameter("T"))),
            //         {},
            //         t.dictionary(t.dictionary(t.type_parameter("T"))),
            //     ),
            //     "pad identifiers": operation(
            //         { "T": null },
            //         t.dictionary(t.type_parameter("T")),
            //         {
            //             "prefix": t.text_local(text('single line')),
            //             "suffix": t.text_local(text('single line'))
            //         },
            //         t.dictionary(t.type_parameter("T")),
            //     ),
            // }),
            // "list": set({
            //     "append": operation(
            //         { "T": null },
            //         t.list(t.type_parameter("T")),
            //         {
            //             "element": t.type_parameter("T")
            //         },
            //         t.list(t.type_parameter("T")),
            //     ),
            //     "filter": operation(
            //         { "T": null },
            //         t.list(t.optional(t.type_parameter("T"))),
            //         {},
            //         t.list(t.type_parameter("T")),
            //     ),
            //     "flatten": operation(
            //         { "T": null },
            //         t.list(t.list(t.type_parameter("T"))),
            //         {},
            //         t.list(t.type_parameter("T")),
            //     ),
            // }),
            // "text": set({
            //     "from list": operation(
            //         {},
            //         t.list(t.text_local(text('single line'))),
            //         {},
            //         t.text_local(text('single line')),
            //     ),
            // }),
        }),
        "impure": set({
            // "dictionary": set({
            //     "is empty": operation(
            //         { "T": null },
            //         t.dictionary(t.type_parameter("T")),
            //         {},
            //         t.boolean(),
            //     ),
            //     "is not empty": operation(
            //         { "T": null },
            //         t.dictionary(t.type_parameter("T")),
            //         {},
            //         t.boolean(),
            //     ),
            //     "merge": operation(
            //         {
            //             "Main": null,
            //             "Supporting": null,
            //         },
            //         t.dictionary(t.type_parameter("Main")),
            //         {
            //             "supporting dictionary": t.dictionary(t.type_parameter("Supporting"))
            //         },
            //         t.dictionary(t.identifier_value_pair(t.type_parameter("Main"))),
            //     ),
            //     "to list, sorted by code point": operation(
            //         { "T": null },
            //         t.dictionary(t.type_parameter("T")),
            //         {},
            //         t.list(t.identifier_value_pair(t.type_parameter("T"))),
            //     ),
            // }),
            // "list": set({
            //     "enrich": operation(
            //         { "T": null },
            //         t.list(t.type_parameter("T")),
            //         {},
            //         t.list(t.group({
            //             "value": t.type_parameter("T"),
            //             "is first": t.boolean(),
            //             "is last": t.boolean(),
            //             "index": t.number_local(n.natural()),
            //         })),
            //     ),
            //     "expect exactly one element": operation(
            //         { "T": null },
            //         t.list(t.type_parameter("T")),
            //         {},
            //         t.optional(t.type_parameter("T")),
            //     ),
            //     "expect more than one element": operation(
            //         { "T": null },
            //         t.list(t.type_parameter("T")),
            //         {},
            //         t.optional(t.list(t.type_parameter("T"))),
            //     ),
            //     "is empty": operation(
            //         { "T": null },
            //         t.list(t.type_parameter("T")),
            //         {},
            //         t.boolean(),
            //     ),
            //     "is not empty": operation(
            //         { "T": null },
            //         t.list(t.type_parameter("T")),
            //         {},
            //         t.boolean(),
            //     ),
            //     "join": operation(
            //         { "T": null },
            //         t.list(t.type_parameter("T")),
            //         {
            //             "separator": t.text_local(text('single line'))
            //         },
            //         t.text_local(text('single line')),
            //     ),
            //     "select clashing keys": operation(
            //         { "T": null },
            //         t.list(t.identifier_value_pair(t.type_parameter("T"))),
            //         {},
            //         t.dictionary(t.list(t.type_parameter("T"))),
            //     ),
            //     "to dictionary, overwrite clashing keys": operation(
            //         { "T": null },
            //         t.list(t.identifier_value_pair(t.type_parameter("T"))),
            //         {},
            //         t.dictionary(t.type_parameter("T")),
            //     ),
            // }),
            // "text": set({
            //     "escape character": operation(
            //         {},
            //         t.text_local(text('single line')),
            //         {
            //             "character code": t.number_local(n.natural()),
            //             "escape character code": t.number_local(n.natural())
            //         },
            //         t.text_local(text('single line')),
            //     ),
            //     "repeat": operation(
            //         {},
            //         t.text_local(text('single line')),
            //         {
            //             "count": t.number_local(n.natural())
            //         },
            //         t.text_local(text('single line')),
            //     ),
            //     "serialize with quote delimiter": operation(
            //         {},
            //         t.text_local(text('single line')),
            //         {},
            //         t.text_local(text('single line')),
            //     ),
            //     "serialize with apostrophe delimiter": operation(
            //         {},
            //         t.text_local(text('single line')),
            //         {},
            //         t.text_local(text('single line')),
            //     ),
            //     "serialize with grave delimiter": operation(
            //         {},
            //         t.text_local(text('single line')),
            //         {},
            //         t.text_local(text('single line')),
            //     ),
            //     "to character list": operation(
            //         {},
            //         t.text_local(text('single line')),
            //         {},
            //         t.list(t.number_local(n.natural())),
            //     ),
            //     "create valid file name": operation(
            //         {},
            //         t.text_local(text('single line')),
            //         {
            //             "replace spaces with underscores": t.boolean()
            //         },
            //         t.text_local(text('single line')),
            //     ),
            // }),
        })
    },
)