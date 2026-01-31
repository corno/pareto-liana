import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "XML Document": module_(t.group({
            "declaration": prop(t.optional(t.group({
                "version": prop(t.text_local(text('single line'))), // typically "1.0"
                "encoding": prop(t.optional(t.text_local(text('single line')))), // UTF-8, UTF-16, etc.
                "standalone": prop(t.optional(t.boolean())), // yes/no
            }))),
            "root element": prop(t.component("XML Element")),
            "processing instructions": prop(t.list(t.component("Processing Instruction"))),
        })),

        "XML Element": module_(t.group({
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

        "XML Content": module_(t.state({
            "empty": toption(t.group({})),
            "text only": toption(t.component("XML Text Content")),
            "elements only": toption(t.list(t.component_cyclic("XML Element"))),
            "mixed": toption(t.list(t.component("XML Node"))),
        })),

        "XML Text Content": module_(t.group({
            "value": prop(t.text_local(text('multi line'))),
            "preserve whitespace": prop(t.boolean()), // xml:space="preserve"
            "escape": prop(t.state({
                "auto": toption(t.group({})), // automatically escape < > & " '
                "cdata": toption(t.group({})), // wrap in <![CDATA[...]]>
                "none": toption(t.group({})), // assume already escaped
            })),
        })),

        "XML Node": module_(t.state({
            "element": toption(t.component_cyclic("XML Element")),
            "text": toption(t.component("XML Text Content")),
            "comment": toption(t.group({
                "content": prop(t.text_local(text('multi line'))),
            })),
            "cdata": toption(t.group({
                "content": prop(t.text_local(text('multi line'))),
            })),
            "processing instruction": toption(t.component("Processing Instruction")),
        })),

        "Processing Instruction": module_(t.group({
            "target": prop(t.text_local(text('single line'))), // PI target name
            "data": prop(t.optional(t.text_local(text('multi line')))), // PI data
        })),

        // Complete formatting options
        "XML Formatting Options": module_(t.state({
            "compact": toption(t.nothing()), // no unnecessary whitespace
            "pretty": toption(t.group({
                "indent": prop(t.text_local(text('single line'))),
                "max line length": prop(t.optional(t.number_local(n.natural(null)))), // wrap long attributes
                "preserve mixed content": prop(t.boolean()), // don't add whitespace in mixed content
            })),
            "custom": toption(t.group({
                "before element": prop(t.optional(t.text_local(text('single line')))),
                "after element": prop(t.optional(t.text_local(text('single line')))),
                "before attribute": prop(t.optional(t.text_local(text('single line')))),
                "after attribute": prop(t.optional(t.text_local(text('single line')))),
            })),
        })),
    }
)


