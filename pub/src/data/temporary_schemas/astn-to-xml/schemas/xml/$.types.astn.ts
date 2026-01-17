import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "XML Document": type(t.group({
            "declaration": prop(t.optional(t.group({
                "version": prop(t.text_local(text('single line'))), // typically "1.0"
                "encoding": prop(t.optional(t.text_local(text('single line')))), // UTF-8, UTF-16, etc.
                "standalone": prop(t.optional(t.boolean())), // yes/no
            }))),
            "root element": prop(t.component("XML Element")),
            "processing instructions": prop(t.list(t.component("Processing Instruction"))),
        })),

        "XML Element": type(t.group({
            "name": prop(t.text_local(text('single line'))),
            "namespace": prop(t.optional(t.text_local(text('single line')))), // namespace URI
            "prefix": prop(t.optional(t.text_local(text('single line')))), // namespace prefix
            "attributes": prop(t.dictionary(t.group({
                "value": prop(t.text_local(text('single line'))),
                "namespace": prop(t.optional(t.text_local(text('single line')))),
            }))),
            "content": prop(t.component("XML Content")),
            "self closing": prop(t.boolean()), // whether to render as <tag/> vs <tag></tag>
        })),

        "XML Content": type(t.state_group({
            "empty": tstate(t.group({})),
            "text only": tstate(t.component("XML Text Content")),
            "elements only": tstate(t.list(t.component_cyclic("XML Element"))),
            "mixed": tstate(t.list(t.component("XML Node"))),
        })),

        "XML Text Content": type(t.group({
            "value": prop(t.text_local(text('multi line'))),
            "preserve whitespace": prop(t.boolean()), // xml:space="preserve"
            "escape": prop(t.state_group({
                "auto": tstate(t.group({})), // automatically escape < > & " '
                "cdata": tstate(t.group({})), // wrap in <![CDATA[...]]>
                "none": tstate(t.group({})), // assume already escaped
            })),
        })),

        "XML Node": type(t.state_group({
            "element": tstate(t.component_cyclic("XML Element")),
            "text": tstate(t.component("XML Text Content")),
            "comment": tstate(t.group({
                "content": prop(t.text_local(text('multi line'))),
            })),
            "cdata": tstate(t.group({
                "content": prop(t.text_local(text('multi line'))),
            })),
            "processing instruction": tstate(t.component("Processing Instruction")),
        })),

        "Processing Instruction": type(t.group({
            "target": prop(t.text_local(text('single line'))), // PI target name
            "data": prop(t.optional(t.text_local(text('multi line')))), // PI data
        })),

        // Complete formatting options
        "XML Formatting Options": type(t.state_group({
            "compact": tstate(t.nothing()), // no unnecessary whitespace
            "pretty": tstate(t.group({
                "indent": prop(t.text_local(text('single line'))),
                "max line length": prop(t.optional(t.number_local(n.natural()))), // wrap long attributes
                "preserve mixed content": prop(t.boolean()), // don't add whitespace in mixed content
            })),
            "custom": tstate(t.group({
                "before element": prop(t.optional(t.text_local(text('single line')))),
                "after element": prop(t.optional(t.text_local(text('single line')))),
                "before attribute": prop(t.optional(t.text_local(text('single line')))),
                "after attribute": prop(t.optional(t.text_local(text('single line')))),
            })),
        })),
    }
)


