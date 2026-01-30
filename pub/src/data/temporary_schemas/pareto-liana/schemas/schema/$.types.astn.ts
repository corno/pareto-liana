import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    t,
    tr,
    module_,
    text,
    prop,
    tstate,
    propd,
    tstated,
} from "../../../../../shorthands/schema"
import * as sh from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Module Specification": module_(t.group({
            "schema": propd("select 'schema' if you want to have 1 schema, if you have or need multple, select 'set'", t.component("Schema Tree")),
            "schema path": propd("selects the schema in which the module is specified", t.list(t.text_local(text('single line')))),
            "module": propd("the module that is the root of the document", t.text_local(text('single line'))),
        })),

        "Schema Tree": module_(t.state({
            "schema": tstated("a single schema", t.component("Schema")),
            "set": tstated("a hierarchy of schemas", t.component_cyclic("Schemas")),
        })),

        "Schemas": module_(t.dictionary(t.component("Schema Tree"))),

        "Schema": module_(t.group({
            "imports": prop(t.component_cyclic("Imports")),
            "globals": prop(t.component("Globals")),
            "modules": prop(t.component("Modules")),
            "complexity": prop(t.state({
                "constrained": tstate(t.component("Resolve Logic")),
                "unconstrained": tstate(t.nothing()),
            })),
        })),

        "Imports": module_(t.dictionary(t.group({
            "schema set child": prop(t.reference_stack("Schemas", [])),
            "schema": prop(t.reference_derived("Schema", [])),
        }))),

        "Globals": module_(t.group({
            "complexity": prop(t.state({
                "constrained": tstate(t.nothing()),
                "unconstrained": tstate(t.nothing()),
            })),
            "text types": prop(t.dictionary(t.component("Text Type"))),
            "number types": prop(t.dictionary(t.component("Number Type"))),
        })),

        "Modules": module_(t.dictionary(t.component("Module"))),

        "Resolve Logic": module_(t.group({ //FIXME: inline
            "signatures": prop(t.group({ //this is a group because this data is in the file $.signatures.astn.ts
                "signatures": prop(t.component_cyclic("Signatures"))
            })),
            "resolvers": prop(t.component_cyclic("Module Resolvers")),
        })),

        "Text Type": module_(t.group({
            "type": prop(t.state({
                "multi line": tstate(t.nothing()),
                "single line": tstate(t.nothing()),
            })),
        })),

        "Number Type": module_(t.group({
            /**
             * is the number an approximation or the exact value?
             * 'variable' is similar to floating point (in programming languages) or scientific notation
             * 'fixed' is similar to integers/positive integers
             */
            "precision": prop(t.state({
                /**
                 * variable is similar to scientific notation or floating point (in programming languages)
                 */
                "approximation": tstate(t.group({
                    /**
                     * the total number of digits in the number
                     */
                    "significant digits": prop(t.number_local(n.natural(null))),
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
                    "decimal separator offset": prop(t.optional(t.number_local(n.natural(null)))),

                    /**
                     * can the number be negative? > 'integer'
                     * can the number be zero? > 'natural'
                     * else > 'positive natural'
                     */
                    "type": prop(t.state({
                        "integer": tstate(t.nothing()),
                        "natural": tstate(t.nothing()),
                        "positive natural": tstate(t.nothing()),
                    })),
                })),
            }))
        })),

        "Module": module_(t.group({
            "root value": prop(t.component_cyclic("Value"))
        })),

        //FIXME: inline
        "Presence": module_(t.state({
            "optional": tstate(t.nothing()),
            "required": tstate(t.nothing()),
        })),

        "Dictionary": module_(t.group({
            "value": prop(t.component_cyclic("Value")),
        })),

        "Signatures": module_(t.dictionary(t.component_cyclic("Signature"))),

        "Module Resolvers": module_(t.dictionary(t.group({
            "signature": prop(t.reference_derived("Signatures", [tr.d()])),
            "root value resolver": prop(t.component_cyclic("Value Resolver")),
        }))),

        "Benchmark": module_(t.group({
            "selection": prop(t.component_constrained("Guaranteed Value Selection", {
                "dictionary": sh.type_node_reference("Value", [tr.s("dictionary")])
            })),
            "resulting dictionary": prop(t.reference_derived("Dictionary", [])),
            "dense": prop(t.boolean()),
        })),

        /**
         * the properties in a group are ordered. This way there is a canonical concise representation
         */
        "Group": module_(t.dictionary(t.group({
            "description": prop(t.optional(t.text_local(text('multi line')))),
            "value": prop(t.component_cyclic("Value"))
        }))),

        "Value Reference": module_(t.group({ //FIXME: inline
            "module": prop(t.component("Module Reference")),
            "path": prop(t.component("Value Path")),
        })),

        "Value Path": module_(t.group({
            "tail": prop(t.path_to_sibling(
                t.state({
                    "dictionary": tstate(t.nothing()),
                    "group": tstate(t.reference("Group", [])),
                    "list": tstate(t.nothing()),
                    "optional": tstate(t.nothing()),
                    "state": tstate(t.reference("Value", [tr.s("state"), tr.g("options")])),
                }),
                "Value"
            )),
            "resulting node": prop(t.reference_derived("Value", [])),

        })),

        "Module Reference": module_(t.group({
            "location": prop(t.state({
                "internal": tstate(t.reference("Modules", [])),
                "external": tstate(t.group({
                    "import": prop(t.reference("Imports", [])),
                    "module": prop(t.reference("Modules", [])),
                })),
            })),
            "resulting module": prop(t.reference_derived("Module", [])),
        })),

        "Signature Parameters": module_(t.group({ //FIME: inline
            "modules": prop(t.dictionary(t.group({
                "module": prop(t.component("Module Reference")),
                "presence": prop(t.component("Presence")),
            }))),
            "lookups": prop(t.dictionary(t.group({
                "referent": prop(t.component("Module Reference")),
                "dictionary": prop(t.reference_derived("Dictionary", [])),
                "type": prop(t.state({
                    "cyclic": tstate(t.nothing()),
                    "acyclic": tstate(t.nothing()),
                    "stack": tstate(t.nothing()),
                })),
                "presence": prop(t.component("Presence")),
            })))
        })),

        "Signature": module_(t.group({
            "module": prop(t.reference_derived("Module", [])),
            "parameters": prop(t.state({
                "local": tstate(t.component("Signature Parameters")),
                "same as": tstate(t.reference("Signatures", [])),
            })),
            "resolved parameters": prop(t.reference_derived("Signature Parameters", [])),
        })),

        "Relative Value Selection": module_(t.group({
            "path": prop(t.path_to_sibling(
                t.state({
                    "component": tstate(t.nothing()),
                    "group": tstate(t.reference("Group", [])),
                    "reference": tstate(t.group({
                        "definition": prop(t.reference_derived("Value", [tr.s("reference")])),
                    })),
                }),
                "Value"
            )),
            "resulting node": prop(t.reference_derived("Value", [])),
        })),

        //FIXME: there has to be a guaranteed lookup selection and a possible lookup selection
        "Lookup Selection": module_(t.group({
            "type": prop(t.state({
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
        "Constraint": module_(t.group({
            "selection": prop(t.component("Relative Value Selection")),
            //maybe this is reusable
            "type": prop(t.state({
                "state": tstate(t.group({
                    "selected state": prop(t.reference_derived("Value", [tr.s("state")])),
                    "option": prop(t.reference("Value", [tr.s("state"), tr.g("options")])),
                })),
                "optional value": tstate(t.group({
                    "selected optional value": prop(t.reference_derived("Value", [tr.s("optional")])),
                })),
            })),
        })),

        "Option Constraints": module_(t.dictionary(t.state({
            "state": tstate(t.group({
                "selection": prop(t.component_cyclic("Guaranteed Value Selection")),
                "selected state": prop(t.reference_derived("Value", [tr.s("state")])),
                "option": prop(t.reference("Value", [tr.s("state"), tr.g("options")])),
            })),
            "assert is set": tstate(t.component_cyclic("Possible Value Selection")),
        }))),

        "Value Constraint Resolvers": module_(t.dictionary(t.component_cyclic("Value Constraint Resolver"))),

        "Reference To Value Constraint Resolver": module_(t.reference("Value Constraint Resolvers", [])), //FIXME : inline

        "Value Constraint Resolver": module_(t.group({
            "start": prop(t.state({
                "property": tstate(t.nothing()),
                "sibling": tstate(t.component("Reference To Value Constraint Resolver")),
            })),
            "constraint": prop(t.component("Constraint")),
        })),

        "Optional Value Initialization": module_(t.state({
            "not set": tstate(t.nothing()),
            "set": tstate(t.component_cyclic("Guaranteed Value Selection")),
            "selection": tstate(t.component_cyclic("Possible Value Selection")),
        })),

        "Value Resolver Group": module_(t.dictionary(t.group({
            "definition": prop(t.reference_derived("Group", [tr.d()])),
            "resolver": prop(t.component_cyclic("Value Resolver")),
        }))),

        "Value Resolver List Result": module_(t.component("Module Reference")),


        "Value": module_(t.state({
            "boolean": tstate(t.nothing()),
            "component": tstate(t.group({
                "type": prop(t.state({
                    "external": tstate(t.group({
                        "import": prop(t.reference("Imports", [])),
                        "module": prop(t.reference("Modules", [])),
                    })),
                    "internal": tstate(t.reference("Modules", [])),
                    "internal cyclic": tstate(t.reference("Modules", [], 'cyclic')),
                })),
                "constraints": prop(t.component("Value Constraints")),
            })),
            "dictionary": tstate(t.component("Dictionary")),
            "group": tstate(t.component("Group")),
            "list": tstate(t.group({
                "value": prop(t.component_cyclic("Value")),
                "result": prop(t.optional(t.component("Module Reference"))),
            })),
            "nothing": tstate(t.nothing()),
            "number": tstate(t.state({
                "global": tstate(t.reference("Globals", [tr.g("number types")])),
                "local": tstate(t.component("Number Type")),
            })),
            "optional": tstate(t.component_cyclic("Value")),
            "reference": tstate(t.group({
                "referent": prop(t.component_cyclic("Value Reference")),
                "type": prop(t.state({
                    "derived": tstate(t.nothing()),
                    "selected": tstate(t.group({
                        "dictionary": prop(t.reference_derived("Dictionary", [])),
                        "dependency": prop(t.state({
                            "acyclic": tstate(t.nothing()),
                            "cyclic": tstate(t.nothing()),
                            "stack": tstate(t.nothing()),
                        })),
                    })),
                })),
            })),
            "state": tstate(t.group({
                "options": prop(t.dictionary(t.group({
                    "description": prop(t.optional(t.text_local(text('multi line')))),
                    "value": prop(t.component_cyclic("Value")),
                }))),
                "constraints": prop(t.component("Value Constraints")),
            })),
            "text": tstate(t.state({
                "global": tstate(t.reference("Globals", [tr.g("text types")])),
                "local": tstate(t.component("Text Type")),
            })),
        })),

        "Value Constraints": module_(t.optional(t.dictionary(t.component_cyclic("Value Reference")))),

        "Value Resolver": module_(t.state({
            "boolean": tstate(t.nothing()),
            "component": tstate(t.group({
                "definition": prop(t.reference_derived("Value", [tr.s("component"),])),

                "location": prop(t.state({
                    "external": tstate(t.group({
                        "import": prop(t.reference("Imports", [])),
                        "signature": prop(t.reference("Signatures", [])),
                    })),
                    "internal": tstate(t.reference("Signatures", [])),
                })),
                "signature": prop(t.reference_derived("Signatures", [tr.d()])),
                "arguments": prop(t.optional(t.group({
                    "modules": prop(t.optional(t.dictionary(t.state({
                        "optional": tstate(t.component("Optional Value Initialization")),
                        "required": tstate(t.component_cyclic("Guaranteed Value Selection")),
                        "parameter": tstate(t.reference("Signature Parameters", [tr.g("modules")])),
                    })))),
                    "lookups": prop(t.optional(t.dictionary(t.state({
                        "empty stack": tstate(t.nothing()),
                        "not set": tstate(t.nothing()),
                        "selection": tstate(t.component("Lookup Selection")),
                        "stack": tstate(t.group({
                            "stack": prop(t.component("Lookup Selection")),
                            "element": prop(t.component("Lookup Selection")),
                        })),
                    })))),
                }))),
                "constraints": prop(t.component("Value Constraint Resolvers")),
            })),
            "dictionary": tstate(t.group({
                "definition": prop(t.reference_derived("Dictionary", [])),
                "resolver": prop(t.component_cyclic("Value Resolver")),
                "benchmark": prop(t.optional(t.component_cyclic("Benchmark"))),
            })),
            "group": tstate(t.component("Value Resolver Group")),
            "list": tstate(t.group({
                "definition": prop(t.reference_derived("Value", [tr.s("list")])),
                "resolver": prop(t.component_cyclic("Value Resolver")),
                "result": prop(t.optional(t.component("Value Resolver List Result"))),
            })),
            "nothing": tstate(t.nothing()),
            "number": tstate(t.nothing()),
            "optional": tstate(t.group({
                "constraints": prop(t.component("Option Constraints")),
                "resolver": prop(t.component_cyclic("Value Resolver")),
            })),
            "reference": tstate(t.group({
                "definition": prop(t.reference_derived("Value", [tr.s("reference")])),
                "type": prop(t.state({
                    "derived": tstate(t.group({
                        "value": prop(t.component_cyclic("Guaranteed Value Selection")),
                    })),
                    "selected": tstate(t.group({
                        "definition": prop(t.reference_derived("Value", [tr.s("reference"), tr.g("type"), tr.s("selected")])),
                        "lookup": prop(t.component("Lookup Selection")),
                        "constraints": prop(t.component("Value Constraint Resolvers")),
                    })),
                })),
            })),
            "state": tstate(t.group({
                "definition": prop(t.reference_derived("Value", [tr.s("state")])),
                "states": prop(t.dictionary(t.group({
                    "constraints": prop(t.component("Option Constraints")),
                    "resolver": prop(t.component_cyclic("Value Resolver")),
                }))),
            })),
            "text": tstate(t.nothing()),
            // "type parameter": t.nothing(),
        })),

        "Guaranteed Value Selection": module_(t.group({
            "start": prop(t.state({
                //stack
                "sibling": tstate(t.reference("Value Resolver Group", [])),
                "parent sibling": tstate(t.reference("Value Resolver Group", [])),
                "option constraint": tstate(t.reference("Option Constraints", [])),
                "list cursor": tstate(t.nothing()),
                "linked entry": tstate(t.nothing()),

                //siblings
                "constraint": tstate(t.state({
                    "component": tstate(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "constraint": prop(t.reference("Value Constraint Resolvers", [])),
                    })),
                    "reference": tstate(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "constraint": prop(t.reference("Value Constraint Resolvers", [])),
                    })),

                })),
                "parameter": tstate(t.reference("Signature Parameters", [tr.g("modules")])), //FIXME: validate that presence is 'required'
                "result": tstate(t.state({
                    "list": tstate(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "list result": prop(t.reference_derived("Value Resolver", [tr.s("list"), tr.g("result"), tr.o()])),
                    })),
                    "state": tstate(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "state": prop(t.reference_derived("Value Resolver", [tr.s("state")])),
                        "result": prop(t.component("Module Reference")),
                    })),
                    "optional value": tstate(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "optional value": prop(t.reference_derived("Value Resolver", [tr.s("optional")])),
                        "result": prop(t.component("Module Reference")),
                    })),
                }))
            })),
            "tail": prop(t.component("Relative Value Selection")),
            "resulting node": prop(t.reference_derived("Value", [])),
        })),

        "Possible Value Selection": module_(t.state({
            "parameter": tstate(t.reference("Signature Parameters", [tr.g("modules")])), //FIXME: validate that presence is 'optional'
            "result": tstate(t.state({
                "state": tstate(t.group({
                    "property": prop(t.reference("Value Resolver Group", [])),
                    "state": prop(t.reference_derived("Value Resolver", [tr.s("state")])),
                    "result": prop(t.component("Module Reference")),
                })),
                "optional value": tstate(t.group({
                    "property": prop(t.reference("Value Resolver Group", [])),
                    "optional value": prop(t.reference_derived("Value Resolver", [tr.s("optional")])),
                    "result": prop(t.component("Module Reference")),
                })),
            }))
        })),

    }
)