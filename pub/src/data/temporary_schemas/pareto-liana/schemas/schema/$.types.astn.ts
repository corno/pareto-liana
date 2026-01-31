import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    t,
    vp,
    module_,
    text,
    prop,
    toption,
    prop_with_description,
    toption_with_description,
    value_reference
} from "../../../../../shorthands/schema"
import * as sh from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Module Specification": module_(t.group({
            "schema": prop_with_description("select 'schema' if you want to have 1 schema, if you have or need multple, select 'set'", t.component("Schema Tree")),
            "schema path": prop_with_description("selects the schema in which the module is specified", t.list(t.text_local(text('single line')))),
            "module": prop_with_description("the module that is the root of the document", t.text_local(text('single line'))),
        })),

        "Schema Tree": module_(t.state({
            "schema": toption_with_description("a single schema", t.component("Schema")),
            "set": toption_with_description("a hierarchy of schemas", t.component_cyclic("Schemas")),
        })),

        "Schemas": module_(t.dictionary(t.component("Schema Tree"))),

        "Schema": module_(t.group({
            "imports": prop(t.component_cyclic("Imports")),
            "globals": prop(t.component("Globals")),
            "modules": prop(t.component("Modules")),
            "complexity": prop(t.state({
                "constrained": toption(t.component("Resolve Logic")),
                "unconstrained": toption(t.nothing()),
            })),
        })),

        "Imports": module_(t.dictionary(t.group({
            "schema set child": prop(t.reference_stack("Schemas", [])),
            "schema": prop(t.reference_derived("Schema", [])),
        }))),

        "Globals": module_(t.group({
            "complexity": prop(t.state({
                "constrained": toption(t.nothing()),
                "unconstrained": toption(t.nothing()),
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
                "multi line": toption(t.nothing()),
                "single line": toption(t.nothing()),
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
                "approximation": toption(t.group({
                    /**
                     * the total number of digits in the number
                     */
                    "significant digits": prop(t.number_local(n.natural(null))),
                })),
                /**
                 * fixed is similar to integers/signed integers
                 */
                "exact": toption(t.group({
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
                        "integer": toption(t.nothing()),
                        "natural": toption(t.nothing()),
                        "positive natural": toption(t.nothing()),
                    })),
                })),
            }))
        })),

        "Module": module_(t.group({
            "root value": prop(t.component_cyclic("Value"))
        })),

        //FIXME: inline
        "Presence": module_(t.state({
            "optional": toption(t.nothing()),
            "required": toption(t.nothing()),
        })),

        "Dictionary": module_(t.group({
            "value": prop(t.component_cyclic("Value")),
        })),

        "Signatures": module_(t.dictionary(t.component_cyclic("Signature"))),

        "Module Resolvers": module_(t.dictionary(t.group({
            "signature": prop(t.reference_derived("Signatures", [vp.d()])),
            "root value resolver": prop(t.component_cyclic("Value Resolver")),
        }))),

        "Benchmark": module_(t.group({
            "selection": prop(t.component_constrained("Guaranteed Value Selection", {
                "dictionary": sh.value_reference("Value", [vp.s("dictionary")])
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
                t.state_with_result(
                    {
                        "dictionary": toption(t.nothing()),
                        "group": toption(t.reference("Group", [])),
                        "list": toption(t.nothing()),
                        "optional": toption(t.nothing()),
                        "state": toption(t.reference("Value", [vp.s("state"), vp.g("options")])),
                    },
                    {
                        "value": value_reference("Value", [])
                    }

                ),
                "Value"
            )),
            "resulting node": prop(t.reference_derived("Value", [])),

        })),

        "Module Reference": module_(t.group({
            "location": prop(t.state({
                "internal": toption(t.reference("Modules", [])),
                "external": toption(t.group({
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
                    "cyclic": toption(t.nothing()),
                    "acyclic": toption(t.nothing()),
                    "stack": toption(t.nothing()),
                })),
                "presence": prop(t.component("Presence")),
            })))
        })),

        "Signature": module_(t.group({
            "module": prop(t.reference_derived("Module", [])),
            "parameters": prop(t.state({
                "local": toption(t.component("Signature Parameters")),
                "same as": toption(t.reference("Signatures", [])),
            })),
            "resolved parameters": prop(t.reference_derived("Signature Parameters", [])),
        })),

        "Relative Value Selection": module_(t.group({
            "path": prop(t.path_to_sibling(
                t.state({
                    "component": toption(t.nothing()),
                    "group": toption(t.reference("Group", [])),
                    "reference": toption(t.group({
                        "definition": prop(t.reference_derived("Value", [vp.s("reference")])),
                    })),
                }),
                "Value"
            )),
            "resulting node": prop(t.reference_derived("Value", [])),
        })),

        //FIXME: there has to be a guaranteed lookup selection and a possible lookup selection
        "Lookup Selection": module_(t.group({
            "type": prop(t.state({
                "dictionary": toption(t.group({
                    "selection": prop(t.component_cyclic("Guaranteed Value Selection")),
                    "selected dictionary": prop(t.reference_derived("Dictionary", [])),
                })),
                "parameter": toption(t.reference("Signature Parameters", [vp.g("lookups")])),
                "not circular dependent siblings": toption(t.reference_derived("Dictionary", [])),
                "possibly circular dependent siblings": toption(t.reference_derived("Dictionary", [])),
            })),
            "resulting dictionary": prop(t.reference_derived("Dictionary", [])),
        })),

        //FIXME: inline
        "Constraint": module_(t.group({
            "selection": prop(t.component("Relative Value Selection")),
            //maybe this is reusable
            "type": prop(t.state({
                "state": toption(t.group({
                    "selected state": prop(t.reference_derived("Value", [vp.s("state")])),
                    "option": prop(t.reference("Value", [vp.s("state"), vp.g("options")])),
                })),
                "optional value": toption(t.group({
                    "selected optional value": prop(t.reference_derived("Value", [vp.s("optional")])),
                })),
            })),
        })),

        "Option Constraint Resolvers": module_(t.dictionary(t.state({
            "state": toption(t.group({
                "selection": prop(t.component_cyclic("Guaranteed Value Selection")),
                "selected state": prop(t.reference_derived("Value", [vp.s("state")])),
                "option": prop(t.reference("Value", [vp.s("state"), vp.g("options")])),
            })),
            "assert is set": toption(t.component_cyclic("Possible Value Selection")),
        }))),

        "Value Constraint Resolvers": module_(t.dictionary(t.component_cyclic("Value Constraint Resolver"))),

        "Reference To Value Constraint Resolver": module_(t.reference("Value Constraint Resolvers", [])), //FIXME : inline

        "Value Constraint Resolver": module_(t.group({
            "start": prop(t.state({
                "property": toption(t.nothing()),
                "sibling": toption(t.component("Reference To Value Constraint Resolver")),
            })),
            "constraint": prop(t.component("Constraint")),
        })),

        "Optional Value Initialization": module_(t.state({
            "not set": toption(t.nothing()),
            "set": toption(t.component_cyclic("Guaranteed Value Selection")),
            "selection": toption(t.component_cyclic("Possible Value Selection")),
        })),

        "Value Resolver Group": module_(t.dictionary(t.group({
            "definition": prop(t.reference_derived("Group", [vp.d()])),
            "resolver": prop(t.component_cyclic("Value Resolver")),
        }))),

        "Value Resolver List Result": module_(t.component("Module Reference")),


        "Value": module_(t.state({
            "boolean": toption(t.nothing()),
            "component": toption(t.group({
                "type": prop(t.state({
                    "external": toption(t.group({
                        "import": prop(t.reference("Imports", [])),
                        "module": prop(t.reference("Modules", [])),
                    })),
                    "internal": toption(t.reference("Modules", [])),
                    "internal cyclic": toption(t.reference("Modules", [], 'cyclic')),
                })),
                "constraints": prop(t.component("Value Constraints")),
            })),
            "dictionary": toption(t.component("Dictionary")),
            "group": toption(t.component("Group")),
            "list": toption(t.group({
                "value": prop(t.component_cyclic("Value")),
                "result": prop(t.optional(t.component("Module Reference"))),
            })),
            "nothing": toption(t.nothing()),
            "number": toption(t.state({
                "global": toption(t.reference("Globals", [vp.g("number types")])),
                "local": toption(t.component("Number Type")),
            })),
            "optional": toption(t.component_cyclic("Value")),
            "reference": toption(t.group({
                "referent": prop(t.component_cyclic("Value Reference")),
                "type": prop(t.state({
                    "derived": toption(t.nothing()),
                    "selected": toption(t.group({
                        "dictionary": prop(t.reference_derived("Dictionary", [])),
                        "dependency": prop(t.state({
                            "acyclic": toption(t.nothing()),
                            "cyclic": toption(t.nothing()),
                            "stack": toption(t.nothing()),
                        })),
                    })),
                })),
            })),
            "state": toption(t.group({
                "options": prop(t.dictionary(t.group({
                    "constraints": prop(t.component("Option Constraints")),
                    "description": prop(t.optional(t.text_local(text('multi line')))),
                    "value": prop(t.component_cyclic("Value")),
                }))),
                "constraints": prop(t.component("Value Constraints")),
            })),
            "text": toption(t.state({
                "global": toption(t.reference("Globals", [vp.g("text types")])),
                "local": toption(t.component("Text Type")),
            })),
        })),

        "Value Constraints": module_(t.optional(t.dictionary(t.component_cyclic("Value Reference")))),

        "Option Constraints": module_(t.optional(t.dictionary(t.component_cyclic("Value Reference")))),

        "Value Resolver": module_(t.state({
            "boolean": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("boolean")])
                },
                t.nothing()
            ),
            "component": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("component")])
                },
                t.group({
                    "definition": prop(t.reference_derived("Value", [vp.s("component"),])),

                    "location": prop(t.state({
                        "external": toption(t.group({
                            "import": prop(t.reference("Imports", [])),
                            "signature": prop(t.reference("Signatures", [])),
                        })),
                        "internal": toption(t.reference("Signatures", [])),
                    })),
                    "signature": prop(t.reference_derived("Signatures", [vp.d()])),
                    "arguments": prop(t.optional(t.group({
                        "modules": prop(t.optional(t.dictionary(t.state({
                            "optional": toption(t.component("Optional Value Initialization")),
                            "required": toption(t.component_cyclic("Guaranteed Value Selection")),
                            "parameter": toption(t.reference("Signature Parameters", [vp.g("modules")])),
                        })))),
                        "lookups": prop(t.optional(t.dictionary(t.state({
                            "empty stack": toption(t.nothing()),
                            "not set": toption(t.nothing()),
                            "selection": toption(t.component("Lookup Selection")),
                            "stack": toption(t.group({
                                "stack": prop(t.component("Lookup Selection")),
                                "element": prop(t.component("Lookup Selection")),
                            })),
                        })))),
                    }))),
                    "constraints": prop(t.component("Value Constraint Resolvers")),
                })
            ),
            "dictionary": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("dictionary")])
                },
                t.group({
                    "definition": prop(t.reference_derived("Dictionary", [])),
                    "resolver": prop(t.component_cyclic("Value Resolver")),
                    "benchmark": prop(t.optional(t.component_cyclic("Benchmark"))),
                })
            ),
            "group": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("group")])
                },
                t.component("Value Resolver Group")
            ),
            "list": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("list")])
                },
                t.group({
                    "definition": prop(t.reference_derived("Value", [vp.s("list")])),
                    "resolver": prop(t.component_cyclic("Value Resolver")),
                    "result": prop(t.optional(t.component("Value Resolver List Result"))),
                })
            ),
            "nothing": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("nothing")])
                },
                t.nothing()
            ),
            "number": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("number")])
                },
                t.nothing()
            ),
            "optional": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("optional")])
                },
                t.group({
                    "constraints": prop(t.component("Option Constraint Resolvers")),
                    "resolver": prop(t.component_cyclic("Value Resolver")),
                })
            ),
            "reference": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("reference")])
                },
                t.group({
                    "definition": prop(t.reference_derived("Value", [vp.s("reference")])),
                    "type": prop(t.state({
                        "derived": toption(t.group({
                            "value": prop(t.component_cyclic("Guaranteed Value Selection")),
                        })),
                        "selected": toption(t.group({
                            "definition": prop(t.reference_derived("Value", [vp.s("reference"), vp.g("type"), vp.s("selected")])),
                            "lookup": prop(t.component("Lookup Selection")),
                            "constraints": prop(t.component("Value Constraint Resolvers")),
                        })),
                    })),
                })
            ),
            "state": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("state")])
                },
                t.group({
                    "definition": prop(t.reference_derived("Value", [vp.s("state")])),
                    "states": prop(t.dictionary(t.group({
                        "constraints": prop(t.component("Option Constraint Resolvers")),
                        "resolver": prop(t.component_cyclic("Value Resolver")),
                    }))
                    ),
                })),
            "text": toption(t.nothing()),
            // "type parameter": t.nothing(),
        })),

        "Guaranteed Value Selection": module_(t.group({
            "start": prop(t.state({
                //stack
                "sibling": toption(t.reference("Value Resolver Group", [])),
                "parent sibling": toption(t.reference("Value Resolver Group", [])),
                "option constraint": toption(t.reference("Option Constraint Resolvers", [])),
                "list cursor": toption(t.nothing()),
                "linked entry": toption(t.nothing()),

                //siblings
                "constraint": toption(t.state({
                    "component": toption(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "constraint": prop(t.reference("Value Constraint Resolvers", [])),
                    })),
                    "reference": toption(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "constraint": prop(t.reference("Value Constraint Resolvers", [])),
                    })),

                })),
                "parameter": toption(t.reference("Signature Parameters", [vp.g("modules")])), //FIXME: validate that presence is 'required'
                "result": toption(t.state({
                    "list": toption(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "list result": prop(t.reference_derived("Value Resolver", [vp.s("list"), vp.g("result"), vp.o()])),
                    })),
                    "state": toption(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "state": prop(t.reference_derived("Value Resolver", [vp.s("state")])),
                        "result": prop(t.component("Module Reference")),
                    })),
                    "optional value": toption(t.group({
                        "property": prop(t.reference("Value Resolver Group", [])),
                        "optional value": prop(t.reference_derived("Value Resolver", [vp.s("optional")])),
                        "result": prop(t.component("Module Reference")),
                    })),
                }))
            })),
            "tail": prop(t.component("Relative Value Selection")),
            "resulting node": prop(t.reference_derived("Value", [])),
        })),

        "Possible Value Selection": module_(t.state({
            "parameter": toption(t.reference("Signature Parameters", [vp.g("modules")])), //FIXME: validate that presence is 'optional'
            "result": toption(t.state({
                "state": toption(t.group({
                    "property": prop(t.reference("Value Resolver Group", [])),
                    "state": prop(t.reference_derived("Value Resolver", [vp.s("state")])),
                    "result": prop(t.component("Module Reference")),
                })),
                "optional value": toption(t.group({
                    "property": prop(t.reference("Value Resolver Group", [])),
                    "optional value": prop(t.reference_derived("Value Resolver", [vp.s("optional")])),
                    "result": prop(t.component("Module Reference")),
                })),
            }))
        })),

    }
)