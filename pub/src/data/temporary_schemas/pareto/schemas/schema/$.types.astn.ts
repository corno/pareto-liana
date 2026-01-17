import * as _pi from 'pareto-core-interface'

import {
    types,
    n,
    t,
    tr,
    type,
    text,
    prop,
    tstate,
    propd,
    tstated,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Type Specification": type(t.group({
            "schema": propd("select 'schema' if you want to have 1 schema, if you have or need multple, select 'set'", t.component("Schema Tree")),
            "schema path": propd("selects the schema in which the root type is specified", t.list(t.text_local(text('single line')))),
            "type": propd("the type that is the root of the document", t.text_local(text('single line'))),
        })),

        "Schema Tree": type(t.state_group({
            "schema": tstated("a single schema", t.component("Schema")),
            "set": tstated("a hierarchy of schemas", t.component_cyclic("Schemas")),
        })),

        "Schemas": type(t.dictionary(t.component("Schema Tree"), 'ordered')),

        "Schema": type(t.group({
            "imports": prop(t.component_cyclic("Imports")),
            "globals": prop(t.component("Globals")),
            "types": prop(t.component("Types")),
            "complexity": prop(t.state_group({
                "constrained": tstate(t.component("Resolve Logic")),
                "unconstrained": tstate(t.nothing()),
            })),
        })),

        "Imports": type(t.dictionary(t.group({
            "schema set child": prop(t.reference_stack("Schemas", [])),
            "schema": prop(t.reference_derived("Schema", [])),
        }))),

        "Globals": type(t.group({
            "complexity": prop(t.state_group({
                "constrained": tstate(t.nothing()),
                "unconstrained": tstate(t.nothing()),
            })),
            "text types": prop(t.dictionary(t.component("Text Type"))),
            "number types": prop(t.dictionary(t.component("Number Type"))),
        })),

        "Types": type(t.dictionary(t.component("Type"), 'ordered')),

        "Resolve Logic": type(t.group({ //FIXME: inline
            "signatures": prop(t.group({ //this is a group because this data is in the file $.signatures.astn.ts
                "types": prop(t.component_cyclic("Signatures"))
            })),
            "resolvers": prop(t.component_cyclic("Resolvers")),
        })),

        "Text Type": type(t.group({
            "type": prop(t.state_group({
                "multi line": tstate(t.nothing()),
                "single line": tstate(t.nothing()),
            })),
        })),

        "Number Type": type(t.group({
            /**
             * is the number an approximation or the exact value?
             * 'variable' is similar to floating point (in programming languages) or scientific notation
             * 'fixed' is similar to integers/positive integers
             */
            "precision": prop(t.state_group({
                /**
                 * variable is similar to scientific notation or floating point (in programming languages)
                 */
                "approximation": tstate(t.group({
                    /**
                     * the total number of digits in the number
                     */
                    "significant digits": prop(t.number_local(n.natural())),
                })),
                /**
                 * fixed is similar to integers/signed integers
                 */
                "exact": tstate(t.group({
                    /**
                     * the number of digits after the decimal point
                     * in the strict mathematical sense, a natural or an integer is a whole number,
                     * but in this context, there can be decimals. However, because the number of decimals (the 'scale') is fixed,
                     * it is trivial to convert these to a whole number; just multiply by 10^offset.
                     */
                    "decimal separator offset": prop(t.optional(t.number_local(n.natural()))),

                    /**
                     * can the number be negative? > 'integer'
                     * can the number be zero? > 'natural'
                     * else > 'positive natural'
                     */
                    "type": prop(t.state_group({
                        "integer": tstate(t.nothing()),
                        "natural": tstate(t.nothing()),
                        "positive natural": tstate(t.nothing()),
                    })),
                })),
            }))
        })),

        "Type": type(t.group({
            "node": prop(t.component_cyclic("Type Node"))
        })),

        //FIXME: inline
        "Presence": type(t.state_group({
            "optional": tstate(t.nothing()),
            "required": tstate(t.nothing()),
        })),

        "Dictionary": type(t.group({
            "node": prop(t.component_cyclic("Type Node")),
            "ordered": prop(t.boolean()),
        })),

        "Signatures": type(t.dictionary(t.component_cyclic("Signature"), 'ordered')),

        "Resolvers": type(t.dictionary(t.group({
            "signature": prop(t.reference_derived("Signatures", [tr.d()])),
            "type resolver": prop(t.component_cyclic("Node Resolver")),
        }), 'ordered')),

        /**
         * the properties in a group are ordered. This way there is a canonical concise representation
         */
        "Group": type(t.dictionary(t.group({
            "description": prop(t.optional(t.text_local(text('multi line')))),
            "node": prop(t.component_cyclic("Type Node"))
        }), 'ordered')),

        "Type Node Reference": type(t.group({ //FIXME: inline
            "type location": prop(t.component("Type Reference")),
            "tail": prop(t.list(
                t.state_group({
                    "dictionary": tstate(t.nothing()),
                    "group": tstate(t.reference("Group", [])),
                    "list": tstate(t.nothing()),
                    "optional": tstate(t.nothing()),
                    "state group": tstate(t.reference("Type Node", [tr.s("state group")])),
                }),
            )),
            "resulting node": prop(t.reference_derived("Type Node", [])),
        })),

        "Type Reference": type(t.group({
            "location": prop(t.state_group({
                "internal": tstate(t.reference("Types", [])),
                "external": tstate(t.group({
                    "import": prop(t.reference("Imports", [])),
                    "type": prop(t.reference("Types", [])),
                })),
            })),
            "resulting node": prop(t.reference_derived("Type Node", [])),
        })),

        "Signature Parameters": type(t.group({ //FIME: inline
            "values": prop(t.dictionary(t.group({
                "data type": prop(t.component("Type Reference")),
                "presence": prop(t.component("Presence")),
            }))),
            "lookups": prop(t.dictionary(t.group({
                "referent": prop(t.component("Type Reference")),
                "dictionary": prop(t.reference_derived("Dictionary", [])),
                "type": prop(t.state_group({
                    "cyclic": tstate(t.nothing()),
                    "acyclic": tstate(t.nothing()),
                    "stack": tstate(t.nothing()),
                })),
                "presence": prop(t.component("Presence")),
            })))
        })),
        
        "Signature": type(t.group({
            "type": prop(t.reference_derived("Type", [])),
            "parameters": prop(t.state_group({
                "local": tstate(t.component("Signature Parameters")),
                "same as": tstate(t.reference("Signatures", [])),
            })),
            "resolved parameters": prop(t.reference_derived("Signature Parameters", [])),
        })),

        "Relative Value Selection": type(t.group({
            "path": prop(t.list(
                t.state_group({
                    "component": tstate(t.nothing()),
                    "group": tstate(t.reference("Group", [])),
                    "reference": tstate(t.group({
                        "definition": prop(t.reference_derived("Type Node", [tr.s("reference")])),
                    })),
                }),
            )),
            "resulting node": prop(t.reference_derived("Type Node", [])),
        })),

        //FIXME: there has to be a guaranteed lookup selection and a possible lookup selection
        "Lookup Selection": type(t.group({
            "type": prop(t.state_group({
                "dictionary": tstate(t.group({
                    "selection": prop(t.component_cyclic("Guaranteed Value Selection")),
                    "selected dictionary": prop(t.reference_derived("Dictionary", [])),
                })),
                "parameter": tstate(t.reference("Signature Parameters", [tr.g("lookups")])),
                "not circular dependent siblings": tstate(t.reference_derived("Dictionary", [])),
                "possibly circular dependent siblings": tstate(t.reference_derived("Dictionary", [])),
            })),
            "resulting dictionary": prop(t.reference_derived("Dictionary", [])),
        })),

        //FIXME: inline
        "Constraint": type(t.group({
            "selection": prop(t.component("Relative Value Selection")),
            //maybe this is reusable
            "type": prop(t.state_group({
                "state": tstate(t.group({
                    "selected state group": prop(t.reference_derived("Type Node", [tr.s("state group")])),
                    "state": prop(t.reference("Type Node", [tr.s("state group")])),
                })),
                "optional value": tstate(t.group({
                    "selected optional value": prop(t.reference_derived("Type Node", [tr.s("optional")])),
                })),
            })),
        })),

        "Option Constraints": type(t.dictionary(t.state_group({
            "state": tstate(t.group({
                "selection": prop(t.component_cyclic("Guaranteed Value Selection")),
                "selected state group": prop(t.reference_derived("Type Node", [tr.s("state group")])),
                "state": prop(t.reference("Type Node", [tr.s("state group")])),
            })),
            "assert is set": tstate(t.component_cyclic("Possible Value Selection")),
        }))),

        "Property Constraints": type(t.dictionary(t.component_cyclic("Property Constraint"), 'ordered')),

        "Reference To Property Constraint": type(t.reference("Property Constraints", [])), //FIXME : inline

        "Property Constraint": type(t.group({
            "start": prop(t.state_group({
                "property": tstate(t.nothing()),
                "sibling": tstate(t.component("Reference To Property Constraint")),
            })),
            "constraint": prop(t.component("Constraint")),
        })),

        "Optional Value Initialization": type(t.state_group({
            "not set": tstate(t.nothing()),
            "set": tstate(t.component_cyclic("Guaranteed Value Selection")),
            "selection": tstate(t.component_cyclic("Possible Value Selection")),
        })),

        "Node Resolver Group": type(t.dictionary(t.group({
            "definition": prop(t.reference_derived("Group", [tr.d()])),
            "resolver": prop(t.component_cyclic("Node Resolver")),
        }), 'ordered')),

        "Node Resolver List Result": type(t.component("Type Reference")),

        "Benchmark": type(t.group({
            "selection": prop(t.component_cyclic("Guaranteed Value Selection")),
            "resulting dictionary": prop(t.reference_derived("Dictionary", [])),
            "dense": prop(t.boolean()),
        })),

        "Type Node": type(t.state_group({
            "boolean": tstate(t.nothing()),
            "component": tstate(t.state_group({
                "external": tstate(t.group({
                    "import": prop(t.reference("Imports", [])),
                    "type": prop(t.reference("Types", [])),
                })),
                "internal": tstate(t.reference("Types", [])),
                "internal cyclic": tstate(t.reference("Types", [], 'cyclic')),
            })),
            "dictionary": tstate(t.component("Dictionary")),
            "group": tstate(t.component("Group")),
            "list": tstate(t.group({
                "node": prop(t.component_cyclic("Type Node")),
            })),
            "nothing": tstate(t.nothing()),
            "number": tstate(t.state_group({
                "global": tstate(t.reference("Globals", [tr.g("number types")])),
                "local": tstate(t.component("Number Type")),
            })),
            "optional": tstate(t.component_cyclic("Type Node")),
            "reference": tstate(t.group({
                "referent": prop(t.component_cyclic("Type Node Reference")),
                "type": prop(t.state_group({
                    "derived": tstate(t.nothing()),
                    "selected": tstate(t.group({
                        "dictionary": prop(t.reference_derived("Dictionary", [])),
                        "dependency": prop(t.state_group({
                            "acyclic": tstate(t.nothing()),
                            "cyclic": tstate(t.nothing()),
                            "stack": tstate(t.nothing()),
                        })),
                    })),
                })),
            })),
            "state group": tstate(t.dictionary(t.group({
                "description": prop(t.optional(t.text_local(text('multi line')))),
                "node": prop(t.component_cyclic("Type Node")),
            }))),
            "text": tstate(t.state_group({
                "global": tstate(t.reference("Globals", [tr.g("text types")])),
                "local": tstate(t.component("Text Type")),
            })),
        })),

        "Node Resolver": type(t.state_group({
            "boolean": tstate(t.nothing()),
            "component": tstate(t.group({
                "location": prop(t.state_group({
                    "external": tstate(t.group({
                        "import": prop(t.reference("Imports", [])),
                        "type": prop(t.reference("Signatures", [])),
                    })),
                    "internal": tstate(t.reference("Signatures", [])),
                })),
                "signature": prop(t.reference_derived("Signatures", [tr.d()])),
                "arguments": prop(t.optional(t.group({
                    "values": prop(t.optional(t.dictionary(t.state_group({
                        "optional": tstate(t.component("Optional Value Initialization")),
                        "required": tstate(t.component_cyclic("Guaranteed Value Selection")),
                        "parameter": tstate(t.reference("Signature Parameters", [tr.g("values")])),
                    })))),
                    "lookups": prop(t.optional(t.dictionary(t.state_group({
                        "empty stack": tstate(t.nothing()),
                        "not set": tstate(t.nothing()),
                        "selection": tstate(t.component("Lookup Selection")),
                        "stack": tstate(t.group({
                            "stack": prop(t.component("Lookup Selection")),
                            "element": prop(t.component("Lookup Selection")),
                        })),
                    })))),
                }))),
                "constraints": prop(t.component("Property Constraints")),
            })),
            "dictionary": tstate(t.group({
                "definition": prop(t.reference_derived("Dictionary", [])),
                "resolver": prop(t.component_cyclic("Node Resolver")),
                "benchmark": prop(t.optional(t.component("Benchmark"))),
            })),
            "group": tstate(t.component("Node Resolver Group")),
            "list": tstate(t.group({
                "definition": prop(t.reference_derived("Type Node", [tr.s("list")])),
                "resolver": prop(t.component_cyclic("Node Resolver")),
                "result": prop(t.optional(t.component("Node Resolver List Result"))),
            })),
            "nothing": tstate(t.nothing()),
            "number": tstate(t.nothing()),
            "optional": tstate(t.group({
                "constraints": prop(t.component("Option Constraints")),
                "resolver": prop(t.component_cyclic("Node Resolver")),
            })),
            "reference": tstate(t.group({
                "definition": prop(t.reference_derived("Type Node", [tr.s("reference")])),
                "type": prop(t.state_group({
                    "derived": tstate(t.group({
                        "value": prop(t.component_cyclic("Guaranteed Value Selection")),
                    })),
                    "selected": tstate(t.group({
                        "definition": prop(t.reference_derived("Type Node", [tr.s("reference"), tr.g("type"), tr.s("selected")])),
                        "lookup": prop(t.component("Lookup Selection")),
                        "constraints": prop(t.component("Property Constraints")),
                    })),
                })),
            })),
            "state group": tstate(t.group({
                "definition": prop(t.reference_derived("Type Node", [tr.s("state group")])),
                "states": prop(t.dictionary(t.group({
                    "constraints": prop(t.component("Option Constraints")),
                    "resolver": prop(t.component_cyclic("Node Resolver")),
                }))),
            })),
            "text": tstate(t.nothing()),
            // "type parameter": t.nothing(),
        })),

        "Guaranteed Value Selection": type(t.group({
            "start": prop(t.state_group({
                //stack
                "sibling": tstate(t.reference("Node Resolver Group", [])),
                "parent sibling": tstate(t.reference("Node Resolver Group", [])),
                "option constraint": tstate(t.reference("Option Constraints", [])),
                "list cursor": tstate(t.nothing()),
                "linked entry": tstate(t.nothing()),

                //siblings
                "constraint": tstate(t.state_group({
                    "component": tstate(t.group({
                        "property": prop(t.reference("Node Resolver Group", [])),
                        "constraint": prop(t.reference("Property Constraints", [])),
                    })),
                    "reference": tstate(t.group({
                        "property": prop(t.reference("Node Resolver Group", [])),
                        "constraint": prop(t.reference("Property Constraints", [])),
                    })),

                })),
                "parameter": tstate(t.reference("Signature Parameters", [tr.g("values")])), //FIXME: validate that presence is 'required'
                "result": tstate(t.state_group({
                    "list": tstate(t.group({
                        "property": prop(t.reference("Node Resolver Group", [])),
                        "list result": prop(t.reference_derived("Node Resolver", [tr.s("list"), tr.g("result"), tr.o()])),
                    })),
                    "state group": tstate(t.group({
                        "property": prop(t.reference("Node Resolver Group", [])),
                        "state group": prop(t.reference_derived("Node Resolver", [tr.s("state group")])),
                        "result": prop(t.component("Type Reference")),
                    })),
                    "optional value": tstate(t.group({
                        "property": prop(t.reference("Node Resolver Group", [])),
                        "optional value": prop(t.reference_derived("Node Resolver", [tr.s("optional")])),
                        "result": prop(t.component("Type Reference")),
                    })),
                }))
            })),
            "tail": prop(t.component("Relative Value Selection")),
            "resulting node": prop(t.reference_derived("Type Node", [])),
        })),

        "Possible Value Selection": type(t.state_group({
            "parameter": tstate(t.reference("Signature Parameters", [tr.g("values")])), //FIXME: validate that presence is 'optional'
            "result": tstate(t.state_group({
                "state group": tstate(t.group({
                    "property": prop(t.reference("Node Resolver Group", [])),
                    "state group": prop(t.reference_derived("Node Resolver", [tr.s("state group")])),
                    "result": prop(t.component("Type Reference")),
                })),
                "optional value": tstate(t.group({
                    "property": prop(t.reference("Node Resolver Group", [])),
                    "optional value": prop(t.reference_derived("Node Resolver", [tr.s("optional")])),
                    "result": prop(t.component("Type Reference")),
                })),
            }))
        })),

    }
)