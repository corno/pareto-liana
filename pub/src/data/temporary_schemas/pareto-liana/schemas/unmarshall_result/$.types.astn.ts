import * as _pi from 'pareto-core-interface'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"


export const $: g_.Types = types(
    {
        // "Document": type(t.group({
        //     "content": t.component("Node"),
        // })),

        // "Node": type(t.group({
        //     "value": t.reference_derived_external("parse tree", "Value", []),
        //     "type": t.component("Node Type"),
        // })),

        // "Node Type": type(t.state_group({
        //     "boolean": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("boolean")]),
        //         "found value type": t.state_group({
        //             "valid": t.group({
        //                 "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("string")]),
        //                 "range": t.reference_derived_external("token", "Range", []),
        //                 "correct string type": t.boolean(),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "component": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("component")]),
        //         "node": t.component_cyclic("Node"),
        //     }),

        //     "dictionary": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("dictionary")]),
        //         "found value type": t.state_group({
        //             "valid": t.group({
        //                 "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("indexed collection")]),
        //                 "entries": t.dictionary(t.state_group({
        //                     "unique": t.component("Entry Data"),
        //                     "multiple": t.list(t.component("Entry Data")),
        //                 })),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "group": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("group")]),
        //         "found value type": t.state_group({
        //             "valid": t.state_group({
        //                 "indexed": t.group({
        //                     "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("indexed collection")]),
        //                     "content": t.component("Group Content"),
        //                 }),
        //                 "ordered": t.group({
        //                     "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("ordered collection")]),
        //                     "content": t.component("Group Content"),
        //                 }),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "identifier value pair": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("identifier value pair")]),
        //     }),
        //     "list": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("list")]),
        //         "found value type": t.state_group({
        //             "valid": t.group({
        //                 "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("ordered collection")]),
        //                 "elements": t.list(t.component_cyclic("Node")),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "nothing": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("nothing")]),
        //         "found value type": t.state_group({
        //             "valid": t.group({
        //                 "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("not set")]),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "number": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("number")]),
        //         "found value type": t.state_group({
        //             "valid": t.group({
        //                 "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("string")]),
        //                 "range": t.reference_derived_external("token", "Range", []),
        //                 "correct string type": t.boolean(),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "optional": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("optional")]),
        //         "found value type": t.state_group({
        //             "valid": t.state_group({
        //                 "set": t.group({
        //                     "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("set optional value")]),
        //                     "child node": t.component_cyclic("Node"),
        //                 }),
        //                 "not set": t.group({
        //                     "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("not set")]),
        //                 }),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "reference": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("reference")]),
        //         "found value type": t.state_group({
        //             "valid": t.group({
        //                 "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("string")]),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "state": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("state group")]),
        //         "found value type": t.state_group({
        //             "valid": t.state_group({
        //                 "value type": t.state_group({
        //                     "state": t.group({
        //                         "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("tagged value")]),
        //                         "found state definition": t.optional(t.group({
        //                             "definition": t.reference_derived_external("schema", "Type Node", [tr.s("state group")]),
        //                             "node": t.component_cyclic("Node"),
        //                         })),
        //                     }),
        //                 }),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "text": t.group({
        //         "definition": t.reference_derived_external("schema", "Type Node", [tr.s("text")]),
        //         "found value type": t.state_group({
        //             "valid": t.group({
        //                 "value": t.reference_derived_external("parse tree", "Concrete Value", [tr.s("string")]),
        //             }),
        //             "invalid": t.reference_derived_external("token", "Range", []),
        //         }),
        //     }),
        //     "type parameter": t.text_local(text('single line')),
        // })),

        // "Group Content": type(t.group({
        //     "properties": t.dictionary(t.state_group({
        //         "missing": t.reference_derived_external("token", "Range", []),
        //         "unique": t.component("Entry Data"),
        //         "multiple": t.list(t.component("Entry Data")),
        //     })),
        //     "superfluous entries": t.dictionary(t.list(t.reference_derived_external("token", "Range", []))),
        // })),

        // "Entry Data": type(t.group({
        //     "key": t.reference_derived_external("parse tree", "String", []),
        //     "node": t.component("Optional Node"),
        // })),

        // "Optional Node": type(t.optional(t.component_cyclic("Node"))),
    }
)