import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    t,
    module_,
    text,
    prop,
    toption,
    prop_with_description,
    toption_with_description,
    value_reference,
    vp,
} from "../../../../../shorthands/schema"
import * as sh from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Package": module_(t.group({
            "omit (de)serializer": prop(t.boolean()),
            "schema tree": prop(t.component("Schema Tree")),
        })),

        "Value": module_(t.state({
            "boolean": toption(t.nothing()),
            "component": toption(t.group({
                "type": prop(t.state({
                    "external": toption(t.group({
                        "import": prop(t.reference("Schema Imports", [])),
                        "module": prop(t.reference("Modules", [])),
                    })),
                    "internal": toption(t.reference("Modules", [], 'cyclic')),
                    "internal acyclic": toption(t.reference("Modules", [])), //I don't think this will ever be needed
                })),
                "results": prop(t.component("Value Results")),
            })),
            "dictionary": toption(t.component("Dictionary")),
            "group": toption(t.component("Group")),
            "list": toption(t.group({
                "value": prop(t.component("Value")),
                "results": prop(t.component("Value Results")),
            })),
            "nothing": toption(t.nothing()),
            "number": toption(t.state({
                "global": toption(t.reference("Globals", [vp.g("number types")])),
                "local": toption(t.component("Number Type")),
            })),
            "optional": toption(t.component("Value")),
            "reference": toption(t.group({
                "referent": prop(t.component("Value Reference")),
                "type": prop(t.state({
                    "derived": toption(t.nothing()),
                    "selected": toption(t.group({
                        "dictionary": prop(t.reference_derived("Dictionary", [])),
                        "dependency": prop(t.state({
                            "acyclic": toption(t.nothing()),
                            "cyclic": toption(t.nothing()),
                            "stack": toption(t.nothing()),
                        })),
                        "results": prop(t.component("Value Results")),
                    })),
                })),
            })),
            "state": toption(t.group({
                "options": prop(t.dictionary(t.group({
                    "constraints": prop(t.component("Option Constraints")),
                    "description": prop(t.optional(t.text_local(text('multi line')))),
                    "value": prop(t.component("Value")),
                }))),
                "results": prop(t.component("Value Results")),
            })),
            "text": toption(t.state({
                "global": toption(t.reference("Globals", [vp.g("text types")])),
                "local": toption(t.component("Text Type")),
            })),
        })),

        "Resolver Value": module_(t.state({
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
                            "schema import": prop(t.reference("Schema Imports", [])),
                            "resolver import": prop(t.reference("Resolver Imports", [])),
                            "signature": prop(t.reference("Resolver Signatures", [])),
                        })),
                        "internal": toption(t.reference("Resolver Signatures", [])),
                    })),
                    "signature": prop(t.reference_derived("Resolver Signatures", [vp.d()])),
                    "arguments": prop(t.optional(t.group({
                        "modules": prop(t.optional(t.dictionary(t.state({
                            "optional": toption(t.component("Resolver Optional Value Initialization")),
                            "required": toption(t.component("Resolver Guaranteed Value Selection")),
                            "parameter": toption(t.reference("Resolver Signature Parameters", [vp.g("modules")])),
                        })))),
                        "lookups": prop(t.optional(t.dictionary(t.state({
                            "stack": toption(t.state({
                                "empty": toption(t.nothing()),
                                "push": toption(t.group({
                                    "stack": prop(t.component("Resolver Lookup Selection")),
                                    "item": prop(t.component("Resolver Lookup Selection")),
                                })),
                            })),
                            "acyclic": toption(t.state({
                                "not set": toption(t.nothing()),
                            })),
                            "cyclic": toption(t.state({
                                "not set": toption(t.nothing()),
                            })),
                            "selection": toption(t.component("Resolver Lookup Selection")),
                        })))),
                    }))),
                    "constraints": prop(t.component("Resolver Value Constraints")),
                })
            ),
            "dictionary": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("dictionary")])
                },
                t.group({
                    "definition": prop(t.reference_derived("Dictionary", [])),
                    "resolver": prop(t.component("Resolver Value")),
                    "benchmark": prop(t.optional(t.component("Resolver Benchmark"))),
                })
            ),
            "group": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("group")])
                },
                t.component("Resolver Value Group")
            ),
            "list": sh.toption_constrained(
                {
                    "definition": value_reference("Value", [vp.s("list")])
                },
                t.group({
                    "definition": prop(t.reference_derived("Value", [vp.s("list")])),
                    "resolver": prop(t.component("Resolver Value")),
                    "result": prop(t.optional(t.component("Resolver Value List Result"))),
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
                    "constraints": prop(t.component("Resolver Option Constraints")),
                    "resolver": prop(t.component("Resolver Value")),
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
                            "value": prop(t.component("Resolver Guaranteed Value Selection")),
                        })),
                        "selected": toption(t.group({
                            "definition": prop(t.reference_derived("Value", [vp.s("reference"), vp.g("type"), vp.s("selected")])),
                            "lookup": prop(t.component("Resolver Lookup Selection")),
                            "constraints": prop(t.component("Resolver Value Constraints")),
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
                        "constraints": prop(t.component("Resolver Option Constraints")),
                        "resolver": prop(t.component("Resolver Value")),
                    }))
                    ),
                })),
            "text": toption(t.nothing()),
            // "type parameter": t.nothing(),
        })),

        "Module Specification": module_(t.group({
            "schema": prop_with_description("select 'schema' if you want to have 1 schema, if you have or need multple, select 'set'", t.component("Schema Tree")),
            "schema path": prop_with_description("selects the schema in which the module is specified", t.list(t.text_local(text('single line')))),
            "module": prop_with_description("the module that is the root of the document", t.text_local(text('single line'))),
        })),

        "Schema Tree": module_(t.state({
            "schema": toption_with_description("a single schema", t.component("Schema")),
            "set": toption_with_description("a hierarchy of schemas", t.component("Schemas")),
        })),

        "Schemas": module_(t.dictionary(t.component("Schema Tree"))),

        "Schema": module_(t.group({
            "schema imports": prop(t.component("Schema Imports")),
            "resolver imports": prop(t.component("Resolver Imports")),
            "globals": prop(t.component("Globals")),
            "modules": prop(t.component("Modules")),
            "complexity": prop(t.state({
                "constrained": toption(t.component("Resolver")),
                "unconstrained": toption(t.nothing()),
            })),
        })),

        "Schema Imports": module_(t.dictionary(t.group({
            "schema set child": prop(t.reference_stack("Schemas", [], {
                "schema": sh.value_reference("Schema", []),
            })),
            "schema": prop(t.reference_derived("Schema", [])),
        }))),

        "Resolver Imports": module_(t.dictionary(t.group({
            "schema set child": prop(t.reference_stack("Schemas", [], {
                "resolver": sh.value_reference("Resolver", []),
            })),
            "resolver": prop(t.reference_derived("Resolver", [])),
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

        "Resolver": module_(t.group({ //FIXME: inline
            "signatures": prop(t.group({ //this is a group because this data is in the file $.signatures.astn.ts
                "signatures": prop(t.component("Resolver Signatures"))
            })),
            "modules": prop(t.component("Resolver Modules")),
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
            "root value": prop(t.component("Value"))
        })),

        //FIXME: inline
        "Presence": module_(t.state({
            "optional": toption(t.nothing()),
            "required": toption(t.nothing()),
        })),

        "Dictionary": module_(t.group({
            "value": prop(t.component("Value")),
        })),

        "Resolver Signatures": module_(t.dictionary(t.component("Resolver Signature"))),

        "Resolver Modules": module_(t.dictionary(t.group({
            "signature": prop(t.reference_derived("Resolver Signatures", [vp.d()])),
            "root value resolver": prop(t.component("Resolver Value")),
        }))),

        "Resolver Benchmark": module_(t.group({
            "selection": prop(t.component_with_results("Resolver Guaranteed Value Selection", {
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
            "value": prop(t.component("Value"))
        }))),

        "Value Reference": module_(t.group({ //FIXME: inline
            "module": prop(t.component("Module Reference")),
            "path": prop(t.component("Value Path")),
        })),

        "Value Path": module_(t.group({
            "tail": prop(t.list_with_results(
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
                {
                    "result": value_reference("Value", [])
                }
            )),
            "resulting node": prop(t.reference_derived("Value", [])),

        })),

        "Module Reference": module_(t.group({
            "location": prop(t.state({
                "internal": toption(t.reference("Modules", [])),
                "external": toption(t.group({
                    "import": prop(t.reference("Schema Imports", [])),
                    "module": prop(t.reference("Modules", [])),
                })),
            })),
            "resulting module": prop(t.reference_derived("Module", [])),
        })),

        "Resolver Signature Parameters": module_(t.group({ //FIME: inline
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

        "Resolver Signature": module_(t.group({
            "module": prop(t.reference_derived("Module", [])),
            "parameters": prop(t.state({
                "local": toption(t.component("Resolver Signature Parameters")),
                "same as": toption(t.reference("Resolver Signatures", [])),
            })),
            "resolved parameters": prop(t.reference_derived("Resolver Signature Parameters", [])),
        })),

        "Resolver Relative Value Selection": module_(t.group({
            "path": prop(t.list_with_results(
                t.state({
                    "component": toption(t.nothing()),
                    "group": toption(t.reference("Group", [])),
                    "reference": toption(t.group({
                        "definition": prop(t.reference_derived("Value", [vp.s("reference")])),
                    })),
                }),
                {
                    "result": value_reference("Value", [])
                }
            )),
            "resulting node": prop(t.reference_derived("Value", [])),
        })),

        "Resolver Lookup Selection": module_(t.group({
            "type": prop(t.state({
                "acyclic": toption(t.state({
                    "siblings": toption(t.reference_derived("Dictionary", [])),
                    "resolved dictionary": toption(t.group({
                        "selection": prop(t.component("Resolver Guaranteed Value Selection")),
                        "selected dictionary": prop(t.reference_derived("Dictionary", [])),
                    })),
                })),
                "cyclic": toption(t.state({
                    "siblings": toption(t.reference_derived("Dictionary", [])),
                })),
                "parameter": toption(t.reference("Resolver Signature Parameters", [vp.g("lookups")])),
            })),
            "resulting dictionary": prop(t.reference_derived("Dictionary", [])),
        })),

        //FIXME: inline
        "Resolver Constraint": module_(t.group({ //should be "Constraint Resolver"
            "selection": prop(t.component("Resolver Relative Value Selection")),
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

        "Resolver Option Constraints": module_(t.dictionary(t.state({
            "state": toption(t.group({
                "selection": prop(t.component("Resolver Guaranteed Value Selection")),
                "selected state": prop(t.reference_derived("Value", [vp.s("state")])),
                "option": prop(t.reference("Value", [vp.s("state"), vp.g("options")])),
            })),
            "assert is set": toption(t.component("Resolver Possible Value Selection")),
        }))),

        "Resolver Optional Value Constraints": module_(t.optional(t.component("Resolver Value Constraints"))),
        "Resolver Value Constraints": module_(t.dictionary(t.component("Resolver Value Constraint"))),

        "Resolver Reference To Value Constraint": module_(t.reference("Resolver Value Constraints", [])), //FIXME : inline

        "Resolver Value Constraint": module_(t.group({
            "start": prop(t.state({
                "value": toption(t.nothing()),
                "sibling": toption(t.component("Resolver Reference To Value Constraint")),
            })),
            "constraint": prop(t.component("Resolver Constraint")),
        })),

        "Resolver Optional Value Initialization": module_(t.state({
            "not set": toption(t.nothing()),
            "set": toption(t.component("Resolver Guaranteed Value Selection")),
            "selection": toption(t.component("Resolver Possible Value Selection")),
        })),

        "Resolver Value Group": module_(t.dictionary(t.group({
            "definition": prop(t.reference_derived("Group", [vp.d()])),
            "resolver": prop(t.component("Resolver Value")),
        }))),

        "Resolver Value List Result": module_(t.component("Module Reference")),

        "Value Results": module_(t.optional(t.dictionary(t.component("Value Reference")))),

        "Option Constraints": module_(t.optional(t.dictionary(t.component("Value Reference")))),

        "Resolver Guaranteed Value Selection": module_(t.group({
            "start": prop(t.state({
                //stack
                "sibling": toption(t.reference("Resolver Value Group", [])),
                "parent sibling": toption(t.reference("Resolver Value Group", [])),
                "option constraint": toption(t.reference("Resolver Option Constraints", [])),
                "list cursor": toption(t.nothing()),
                "linked entry": toption(t.nothing()),

                //siblings
                "constraint": toption(t.state({
                    "component": toption(t.group({
                        "property": prop(t.reference("Resolver Value Group", [])),
                        "constraint": prop(t.reference("Resolver Value Constraints", [])),
                    })),
                    "reference": toption(t.group({
                        "property": prop(t.reference("Resolver Value Group", [])),
                        "constraint": prop(t.reference("Resolver Value Constraints", [])),
                    })),

                })),
                "parameter": toption(t.reference("Resolver Signature Parameters", [vp.g("modules")])), //FIXME: validate that presence is 'required'
                "result": toption(t.state({
                    "list": toption(t.group({
                        "property": prop(t.reference("Resolver Value Group", [])),
                        "list result": prop(t.reference_derived("Resolver Value", [vp.s("list"), vp.g("result"), vp.o()])),
                    })),
                    "state": toption(t.group({
                        "property": prop(t.reference("Resolver Value Group", [])),
                        "state": prop(t.reference_derived("Resolver Value", [vp.s("state")])),
                        "result": prop(t.component("Module Reference")),
                    })),
                    "optional value": toption(t.group({
                        "property": prop(t.reference("Resolver Value Group", [])),
                        "optional value": prop(t.reference_derived("Resolver Value", [vp.s("optional")])),
                        "result": prop(t.component("Module Reference")),
                    })),
                }))
            })),
            "tail": prop(t.component("Resolver Relative Value Selection")),
            "resulting node": prop(t.reference_derived("Value", [])),
        })),

        "Resolver Possible Value Selection": module_(t.state({
            "parameter": toption(t.reference("Resolver Signature Parameters", [vp.g("modules")])), //FIXME: validate that presence is 'optional'
            "result": toption(t.state({
                "state": toption(t.group({
                    "property": prop(t.reference("Resolver Value Group", [])),
                    "state": prop(t.reference_derived("Resolver Value", [vp.s("state")])),
                    "result": prop(t.component("Module Reference")),
                })),
                "optional value": toption(t.group({
                    "property": prop(t.reference("Resolver Value Group", [])),
                    "optional value": prop(t.reference_derived("Resolver Value", [vp.s("optional")])),
                    "result": prop(t.component("Module Reference")),
                })),
            }))
        })),

    }
)