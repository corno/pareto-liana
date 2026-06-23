import * as sh from "../../../../../shorthands/schema/manual"

export const $ = sh.modules(
    {
        "Package": sh.module_(
            sh.t.group({
                "omit (de)serializer": sh.prop(
                    sh.t.simple("boolean")),
                "schema tree": sh.prop(
                    sh.t.component("Schema Tree")),
            })),

        "Value": sh.module_(
            sh.t.state({
                "component": sh.toption_with_description("Reference to another type defined in a module (reusable named type)", sh.t.group({
                    "type": sh.prop(
                        sh.t.state({
                            "external": sh.toption_with_description("Reference a type from an imported schema", sh.t.group({
                                "import": sh.prop(
                                    sh.t.reference("Schema Imports", [])),
                                "module": sh.prop(
                                    sh.t.reference("Modules", [])),
                            })),
                            "internal": sh.toption_with_description("Reference a type within the same schema (allows cycles)", sh.t.reference("Modules", [], 'cyclic')),
                            "internal acyclic": sh.toption_with_description("Reference a type within the same schema (no cycles)", sh.t.reference("Modules", [])), //I don't think this will ever be needed
                        })),
                    "results": sh.prop(
                        sh.t.component("Value Results")),
                })),
                "dictionary": sh.toption_with_description("Indexed collection of named values (like a map or hash table)", sh.t.component("Dictionary")),
                "group": sh.toption_with_description("Ordered collection of properties, each with a specific name and type", sh.t.component("Group")),
                "list": sh.toption_with_description("Ordered sequence of values of the same type", sh.t.group({
                    "value": sh.prop(
                        sh.t.component("Value")),
                    "results": sh.prop(
                        sh.t.component("Value Results")),
                })),
                "nothing": sh.toption_with_description("Empty value (unit type, no data)", sh.t.nothing()),
                "simple": sh.toption_with_description("Primitive value types: boolean, number, or date", sh.t.state({
                    "global": sh.toption(
                        sh.t.reference("Globals", [sh.vp.g("simple types")])),
                })),
                "optional": sh.toption_with_description("Value that may or may not be present", sh.t.component("Value")),
                "reference": sh.toption_with_description("Pointer to another value in the data (like a foreign key)", sh.t.group({
                    "referent": sh.prop_with_description("What this reference points to", sh.t.component("Value Reference")),
                    "type": sh.prop(
                        sh.t.state({
                            "derived": sh.toption_with_description("Reference type is automatically derived from the target", sh.t.nothing()),
                            "selected": sh.toption_with_description("Explicitly select which dictionary entry to reference", sh.t.group({
                                "dictionary": sh.prop(
                                    sh.t.reference_derived("Dictionary", [])),
                                "dependency": sh.prop_with_description("How this reference affects dependency order", sh.t.state({
                                    "acyclic": sh.toption_with_description("No circular dependencies (default for cross-module references)", sh.t.nothing()),
                                    "cyclic": sh.toption_with_description("Allows circular instance references (only within same dictionary)", sh.t.nothing()),
                                    "stack": sh.toption_with_description("Push onto dependency stack for multi-level lookups", sh.t.nothing()),
                                })),
                                "results": sh.prop(
                                    sh.t.component("Value Results")),
                            })),
                        })),
                })),
                "state": sh.toption_with_description("Tagged union: value is one of several named options (like a sum type or enum)", sh.t.group({
                    "options": sh.prop_with_description("The possible variants, each with its own name and associated data", sh.t.dictionary(
                        sh.t.group({
                            "constraints": sh.prop(
                                sh.t.component("Option Constraints")),
                            "description": sh.prop_with_description("Documentation shown in IDE for this option", sh.t.optional(
                                sh.t.text_global("multi line text"))),
                            "value": sh.prop(
                                sh.t.component("Value")),
                        }))),
                    "results": sh.prop(
                        sh.t.component("Value Results")),
                })),
                "text": sh.toption_with_description("String value (single-line or multi-line)", sh.t.state({
                    "global": sh.toption_with_description("Use a globally defined text type", sh.t.reference("Globals", [sh.vp.g("text types")])),
                    "local": sh.toption_with_description("Define the text type inline", sh.t.component("Text Type")),
                })),
            })),

        "Resolver Value": sh.module_(
            sh.t.state({
                "component": sh.toption_constrained(
                    {
                        "definition": sh.value_reference("Value", [sh.vp.s("component")])
                    },
                    sh.t.group({
                        "definition": sh.prop(
                            sh.t.reference_derived("Value", [sh.vp.s("component"),])),

                        "location": sh.prop(
                            sh.t.state({
                                "external": sh.toption(
                                    sh.t.group({
                                        "schema import": sh.prop(
                                            sh.t.reference("Schema Imports", [])),
                                        "resolver import": sh.prop(
                                            sh.t.reference("Resolver Imports", [])),
                                        "signature": sh.prop(
                                            sh.t.reference("Resolver Signatures", [])),
                                    })),
                                "internal": sh.toption(
                                    sh.t.reference("Resolver Signatures", [])),
                            })),
                        "signature": sh.prop(
                            sh.t.reference_derived("Resolver Signatures", [sh.vp.d()])),
                        "arguments": sh.prop(
                            sh.t.optional(
                                sh.t.group({
                                    "modules": sh.prop(
                                        sh.t.optional(
                                            sh.t.dictionary(
                                                sh.t.state({
                                                    "optional": sh.toption(
                                                        sh.t.component("Resolver Optional Value Initialization")),
                                                    "required": sh.toption(
                                                        sh.t.component("Resolver Guaranteed Value Selection")),
                                                    "parameter": sh.toption(
                                                        sh.t.reference("Resolver Signature Parameters", [sh.vp.g("modules")])),
                                                })))),
                                    "lookups": sh.prop(
                                        sh.t.optional(
                                            sh.t.dictionary(
                                                sh.t.state({
                                                    "stack": sh.toption(
                                                        sh.t.state({
                                                            "empty": sh.toption(
                                                                sh.t.nothing()),
                                                            "push": sh.toption(
                                                                sh.t.group({
                                                                    "stack": sh.prop(
                                                                        sh.t.component("Resolver Lookup Selection")),
                                                                    "item": sh.prop(
                                                                        sh.t.component("Resolver Lookup Selection")),
                                                                })),
                                                        })),
                                                    "acyclic": sh.toption(
                                                        sh.t.state({
                                                            "not set": sh.toption(
                                                                sh.t.nothing()),
                                                        })),
                                                    "cyclic": sh.toption(
                                                        sh.t.state({
                                                            "not set": sh.toption(
                                                                sh.t.nothing()),
                                                        })),
                                                    "selection": sh.toption(
                                                        sh.t.component("Resolver Lookup Selection")),
                                                })))),
                                }))),
                        "constraints": sh.prop(
                            sh.t.component("Resolver Value Constraints")),
                    })
                ),
                "dictionary": sh.toption_constrained(
                    {
                        "definition": sh.value_reference("Value", [sh.vp.s("dictionary")])
                    },
                    sh.t.group({
                        "definition": sh.prop(
                            sh.t.reference_derived("Dictionary", [])),
                        "resolver": sh.prop(
                            sh.t.component("Resolver Value")),
                        "benchmark": sh.prop(
                            sh.t.optional(
                                sh.t.component("Resolver Benchmark"))),
                    })
                ),
                "group": sh.toption_constrained(
                    {
                        "definition": sh.value_reference("Value", [sh.vp.s("group")])
                    },
                    sh.t.component("Resolver Value Group")
                ),
                "list": sh.toption_constrained(
                    {
                        "definition": sh.value_reference("Value", [sh.vp.s("list")])
                    },
                    sh.t.group({
                        "definition": sh.prop(
                            sh.t.reference_derived("Value", [sh.vp.s("list")])),
                        "resolver": sh.prop(
                            sh.t.component("Resolver Value")),
                        "result": sh.prop(
                            sh.t.optional(
                                sh.t.component("Resolver Value List Result"))),
                    })
                ),
                "nothing": sh.toption_constrained(
                    {
                        "definition": sh.value_reference("Value", [sh.vp.s("nothing")])
                    },
                    sh.t.nothing()
                ),
                "simple": sh.toption_constrained(
                    {
                        "definition": sh.value_reference("Value", [sh.vp.s("simple")])
                    },
                    sh.t.nothing(),
                    // sh.t.group({
                    //     "definition": sh.prop(
                    //sh.t.reference_derived("Value", [sh.vp.s("simple")])),

                    // })
                ),
                "optional": sh.toption_constrained(
                    {
                        "definition": sh.value_reference("Value", [sh.vp.s("optional")])
                    },
                    sh.t.group({
                        "constraints": sh.prop(
                            sh.t.component("Resolver Option Constraints")),
                        "resolver": sh.prop(
                            sh.t.component("Resolver Value")),
                    })
                ),
                "reference": sh.toption_constrained(
                    {
                        "definition": sh.value_reference("Value", [sh.vp.s("reference")])
                    },
                    sh.t.group({
                        "definition": sh.prop(
                            sh.t.reference_derived("Value", [sh.vp.s("reference")])),
                        "type": sh.prop(
                            sh.t.state({
                                "derived": sh.toption(
                                    sh.t.group({
                                        "value": sh.prop(
                                            sh.t.component("Resolver Guaranteed Value Selection")),
                                    })),
                                "selected": sh.toption(
                                    sh.t.group({
                                        "definition": sh.prop(
                                            sh.t.reference_derived("Value", [sh.vp.s("reference"), sh.vp.g("type"), sh.vp.s("selected")])),
                                        "lookup": sh.prop(
                                            sh.t.component("Resolver Lookup Selection")),
                                        "constraints": sh.prop(
                                            sh.t.component("Resolver Value Constraints")),
                                    })),
                            })),
                    })
                ),
                "state": sh.toption_constrained(
                    {
                        "definition": sh.value_reference("Value", [sh.vp.s("state")])
                    },
                    sh.t.group({
                        "definition": sh.prop(
                            sh.t.reference_derived("Value", [sh.vp.s("state")])),
                        "options": sh.prop(
                            sh.t.dictionary(
                                sh.t.group({
                                    "constraints": sh.prop(
                                        sh.t.component("Resolver Option Constraints")),
                                    "resolver": sh.prop(
                                        sh.t.component("Resolver Value")),
                                }))
                        ),
                    })),
                "text": sh.toption(
                    sh.t.nothing()),
                // "type parameter": sh.t.nothing(),
            })),

        "Module Specification": sh.module_(
            sh.t.group({
                "schema": sh.prop_with_description("select 'schema' if you want to have 1 schema, if you have or need multple, select 'set'", sh.t.component("Schema Tree")),
                "schema path": sh.prop_with_description("selects the schema in which the module is specified", sh.t.list(
                    sh.t.text_global("text"))),
                "complexity": sh.prop(
                    sh.t.state({
                        "constrained": sh.toption(
                            sh.t.group({
                                "module resolver": sh.prop_with_description("the module resolver that is the root of the document (the resolver gives access to the module definition as well)", sh.t.text_global("text")),
                            })),
                        "unconstrained": sh.toption(
                            sh.t.group({
                                "module": sh.prop_with_description("the module that is the root of the document", sh.t.text_global("text")),
                            }))
                    })),
                //"file suffix": sh.prop_with_description("the expected and suggested file suffix for a instance file, for example 'my_instance.my_suffix.lna'", sh.t.text_global("text")),
            })),

        "Schema Tree": sh.module_(
            sh.t.state({
                "schema": sh.toption_with_description("a single schema", sh.t.component("Schema")),
                "set": sh.toption_with_description("a hierarchy of schemas", sh.t.component("Schemas")),
            })),

        "Schemas": sh.module_(
            sh.t.dictionary(
                sh.t.component("Schema Tree"))),

        "Schema": sh.module_(
            sh.t.group({
                "schema imports": sh.prop(
                    sh.t.component("Schema Imports")),
                "resolver imports": sh.prop(
                    sh.t.component("Resolver Imports")),
                "globals": sh.prop(
                    sh.t.component("Globals")),
                "modules": sh.prop(
                    sh.t.component("Modules")),
                "complexity": sh.prop_with_description("Whether this schema includes resolver definitions", sh.t.state({
                    "constrained": sh.toption_with_description("Schema has resolvers for validation and transformation", sh.t.component("Resolver")),
                    "unconstrained": sh.toption_with_description("Schema only defines structure, no resolvers", sh.t.nothing()),
                })),
            })),

        "Schema Imports": sh.module_(
            sh.t.dictionary(
                sh.t.group({
                    "schema set child": sh.prop(
                        sh.t.reference_stack("Schemas", [], {
                            "schema": sh.value_reference("Schema", []),
                        })),
                    "schema": sh.prop(
                        sh.t.reference_derived("Schema", [])),
                }))),

        "Resolver Imports": sh.module_(
            sh.t.dictionary(
                sh.t.group({
                    "schema set child": sh.prop(
                        sh.t.reference_stack("Schemas", [], {
                            "resolver": sh.value_reference("Resolver", []),
                        })),
                    "resolver": sh.prop(
                        sh.t.reference_derived("Resolver", [])),
                }))),

        "Globals": sh.module_(
            sh.t.group({
                "complexity": sh.prop(
                    sh.t.state({
                        "constrained": sh.toption(
                            sh.t.nothing()),
                        "unconstrained": sh.toption(
                            sh.t.nothing()),
                    })),
                "text types": sh.prop(
                    sh.t.dictionary(
                        sh.t.component("Text Type"))),
                "simple types": sh.prop(
                    sh.t.dictionary(
                        sh.t.component("Simple Type"))),
            })),

        "Modules": sh.module_(
            sh.t.dictionary(
                sh.t.component("Module"))),

        "Resolver": sh.module_(
            sh.t.group({ //FIXME: inline
                "signatures": sh.prop(
                    sh.t.group({ //this is a group because this data is in the file $.signatures.astn.ts
                        "signatures": sh.prop(
                            sh.t.component("Resolver Signatures"))
                    })),
                "modules": sh.prop(
                    sh.t.component("Resolver Modules")),
            })),

        "Text Type": sh.module_(
            sh.t.group({
                "type": sh.prop(
                    sh.t.state({
                        "multi line": sh.toption_with_description("Text can contain line breaks (like a textarea)", sh.t.nothing()),
                        "single line": sh.toption_with_description("Text on a single line (like an input field)", sh.t.nothing()),
                    })),
                "link": sh.prop(
                    sh.t.state({
                        "no": sh.toption(
                            sh.t.nothing()),
                        "yes": sh.toption(
                            sh.t.group({
                                "path prefix": sh.prop(
                                    sh.t.text_global("text")),
                                "path suffix": sh.prop(
                                    sh.t.text_global("text")),
                            })),
                    })),
            })),

        "Simple Type": sh.module_(
            sh.t.group({
                "type": sh.prop(
                    sh.t.state({
                        "boolean": sh.toption(
                            sh.t.nothing()),
                        "date": sh.toption(
                            sh.t.nothing()),
                        "number": sh.toption(
                            sh.t.group({
                                /**
                                 * is the number an approximation or the exact value?
                                 * 'variable' is similar to floating point (in programming languages) or scientific notation
                                 * 'fixed' is similar to integers/positive integers
                                 */
                                "precision": sh.prop(
                                    sh.t.state({
                                        /**
                                         * variable is similar to scientific notation or floating point (in programming languages)
                                         */
                                        "approximation": sh.toption(
                                            sh.t.group({
                                                /**
                                                 * the total number of digits in the number
                                                 */
                                                "significant digits": sh.prop(
                                                    sh.t.simple("Natural")),
                                            })),
                                        /**
                                         * fixed is similar to integers/signed integers
                                         */
                                        "exact": sh.toption(
                                            sh.t.group({
                                                /**
                                                 * the number of digits after the decimal point
                                                 * in the strict mathematical sense, a natural or an integer is a whole number,
                                                 * but in this context, there can be decimals. However, because the number of decimals (the 'scale') is fixed,
                                                 * it is trivial to convert these to a whole number; just multiply by 10^offset.
                                                 */
                                                "number of fractional digits": sh.prop(
                                                    sh.t.optional(
                                                        sh.t.simple("Natural"))),

                                                /**
                                                 * can the number be negative? > 'integer'
                                                 * can the number be zero? > 'natural'
                                                 * else > 'positive natural'
                                                 */
                                                "type": sh.prop(
                                                    sh.t.state({
                                                        "integer": sh.toption(
                                                            sh.t.nothing()),
                                                        "natural": sh.toption(
                                                            sh.t.nothing()),
                                                        "positive natural": sh.toption(
                                                            sh.t.nothing()),
                                                    })),
                                            })),
                                    }))

                            })),
                    })),
            })),

        "Module": sh.module_(
            sh.t.group({
                "root value": sh.prop(
                    sh.t.component("Value"))
            })),

        //FIXME: inline
        "Presence": sh.module_(
            sh.t.state({
                "optional": sh.toption_with_description("This parameter may be omitted", sh.t.nothing()),
                "required": sh.toption_with_description("This parameter must be provided", sh.t.nothing()),
            })),

        "Dictionary": sh.module_(
            sh.t.group({
                "value": sh.prop_with_description("The type of each entry in this dictionary", sh.t.component("Value")),
            })),

        "Resolver Signatures": sh.module_(
            sh.t.dictionary(
                sh.t.component("Resolver Signature"))),

        "Resolver Modules": sh.module_(
            sh.t.dictionary(
                sh.t.group({
                    "signature": sh.prop(
                        sh.t.reference_derived("Resolver Signatures", [sh.vp.d()])),
                    "root value resolver": sh.prop(
                        sh.t.component("Resolver Value")),
                }))),

        "Resolver Benchmark": sh.module_(
            sh.t.group({
                "selection": sh.prop(
                    sh.t.component_with_results("Resolver Guaranteed Value Selection", {
                        "dictionary": sh.value_reference("Value", [sh.vp.s("dictionary")])
                    })),
                "resulting dictionary": sh.prop(
                    sh.t.reference_derived("Dictionary", [])),
                "dense": sh.prop(
                    sh.t.simple("boolean")),
            })),

        /**
         * the properties in a group are ordered. This way there is a canonical concise representation
         */
        "Group": sh.module_(
            sh.t.dictionary(
                sh.t.group({
                    "description": sh.prop_with_description("Documentation shown in IDE for this property", sh.t.optional(
                        sh.t.text_global("multi line text"))),
                    "value": sh.prop_with_description("The type of this property", sh.t.component("Value"))
                }))),

        "Value Reference": sh.module_(
            sh.t.group({ //FIXME: inline
                "module": sh.prop(
                    sh.t.component("Module Reference")),
                "path": sh.prop(
                    sh.t.component("Value Path")),
            })),

        "Value Path": sh.module_(
            sh.t.group({
                "tail": sh.prop_with_description("Navigate through nested structures: groups, states, dictionaries, lists, optionals", sh.t.list_with_results(
                    sh.t.state_with_result(
                        {
                            "dictionary": sh.toption_with_description("Navigate into a dictionary's values", sh.t.nothing()),
                            "group": sh.toption_with_description("Navigate to a specific property in a group", sh.t.reference("Group", [])),
                            "list": sh.toption_with_description("Navigate into a list's elements", sh.t.nothing()),
                            "optional": sh.toption_with_description("Navigate into an optional's value", sh.t.nothing()),
                            "state": sh.toption_with_description("Navigate to a specific option in a state", sh.t.reference("Value", [sh.vp.s("state"), sh.vp.g("options")])),
                        },
                        {
                            "value": sh.value_reference("Value", [])
                        }

                    ),
                    {
                        "result": sh.value_reference("Value", [])
                    }
                )),
                "resulting node": sh.prop(
                    sh.t.reference_derived("Value", [])),

            })),

        "Module Reference": sh.module_(
            sh.t.group({
                "location": sh.prop_with_description("Where the referenced module is defined", sh.t.state({
                    "internal": sh.toption_with_description("Module is in the same schema", sh.t.reference("Modules", [])),
                    "external": sh.toption_with_description("Module is in an imported schema", sh.t.group({
                        "import": sh.prop(
                            sh.t.reference("Schema Imports", [])),
                        "module": sh.prop(
                            sh.t.reference("Modules", [])),
                    })),
                })),
                "resulting module": sh.prop(
                    sh.t.reference_derived("Module", [])),
            })),

        "Resolver Signature Parameters": sh.module_(
            sh.t.group({ //FIME: inline
                "modules": sh.prop(
                    sh.t.dictionary(
                        sh.t.group({
                            "module": sh.prop(
                                sh.t.component("Module Reference")),
                            "presence": sh.prop(
                                sh.t.component("Presence")),
                        }))),
                "lookups": sh.prop(
                    sh.t.dictionary(
                        sh.t.group({
                            "referent": sh.prop(
                                sh.t.component("Module Reference")),
                            "dictionary": sh.prop(
                                sh.t.reference_derived("Dictionary", [])),
                            "type": sh.prop(
                                sh.t.state({
                                    "cyclic": sh.toption(
                                        sh.t.nothing()),
                                    "acyclic": sh.toption(
                                        sh.t.nothing()),
                                    "stack": sh.toption(
                                        sh.t.nothing()),
                                })),
                            "presence": sh.prop(
                                sh.t.component("Presence")),
                        })))
            })),

        "Resolver Signature": sh.module_(
            sh.t.group({
                "module": sh.prop(
                    sh.t.reference_derived("Module", [])),
                "parameters": sh.prop(
                    sh.t.state({
                        "local": sh.toption(
                            sh.t.component("Resolver Signature Parameters")),
                        "same as": sh.toption(
                            sh.t.reference("Resolver Signatures", [])),
                    })),
                "resolved parameters": sh.prop(
                    sh.t.reference_derived("Resolver Signature Parameters", [])),
            })),

        "Resolver Relative Value Selection": sh.module_(
            sh.t.group({
                "path": sh.prop(
                    sh.t.list_with_results(
                        sh.t.state({
                            "component": sh.toption(
                                sh.t.nothing()),
                            "group": sh.toption(
                                sh.t.reference("Group", [])),
                            "reference": sh.toption(
                                sh.t.group({
                                    "definition": sh.prop(
                                        sh.t.reference_derived("Value", [sh.vp.s("reference")])),
                                })),
                        }),
                        {
                            "result": sh.value_reference("Value", [])
                        }
                    )),
                "resulting node": sh.prop(
                    sh.t.reference_derived("Value", [])),
            })),

        "Resolver Lookup Selection": sh.module_(
            sh.t.group({
                "type": sh.prop(
                    sh.t.state({
                        "acyclic": sh.toption(
                            sh.t.state({
                                "siblings": sh.toption(
                                    sh.t.reference_derived("Dictionary", [])),
                                "resolved dictionary": sh.toption(
                                    sh.t.group({
                                        "selection": sh.prop(
                                            sh.t.component("Resolver Guaranteed Value Selection")),
                                        "selected dictionary": sh.prop(
                                            sh.t.reference_derived("Dictionary", [])),
                                    })),
                            })),
                        "cyclic": sh.toption(
                            sh.t.state({
                                "siblings": sh.toption(
                                    sh.t.reference_derived("Dictionary", [])),
                            })),
                        "parameter": sh.toption(
                            sh.t.reference("Resolver Signature Parameters", [sh.vp.g("lookups")])),
                    })),
                "resulting dictionary": sh.prop(
                    sh.t.reference_derived("Dictionary", [])),
            })),

        //FIXME: inline
        "Resolver Constraint": sh.module_(
            sh.t.group({ //should be "Constraint Resolver"
                "selection": sh.prop(
                    sh.t.component("Resolver Relative Value Selection")),
                //maybe this is reusable
                "type": sh.prop(
                    sh.t.state({
                        "state": sh.toption(
                            sh.t.group({
                                "selected state": sh.prop(
                                    sh.t.reference_derived("Value", [sh.vp.s("state")])),
                                "option": sh.prop(
                                    sh.t.reference("Value", [sh.vp.s("state"), sh.vp.g("options")])),
                            })),
                        "optional value": sh.toption(
                            sh.t.group({
                                "selected optional value": sh.prop(
                                    sh.t.reference_derived("Value", [sh.vp.s("optional")])),
                            })),
                    })),
            })),

        "Resolver Option Constraints": sh.module_(
            sh.t.dictionary(
                sh.t.state({
                    "state": sh.toption(
                        sh.t.group({
                            "selection": sh.prop(
                                sh.t.component("Resolver Guaranteed Value Selection")),
                            "selected state": sh.prop(
                                sh.t.reference_derived("Value", [sh.vp.s("state")])),
                            "option": sh.prop(
                                sh.t.reference("Value", [sh.vp.s("state"), sh.vp.g("options")])),
                        })),
                    "assert is set": sh.toption(
                        sh.t.component("Resolver Possible Value Selection")),
                }))),

        "Resolver Optional Value Constraints": sh.module_(
            sh.t.optional(
                sh.t.component("Resolver Value Constraints"))),
        "Resolver Value Constraints": sh.module_(
            sh.t.dictionary(
                sh.t.component("Resolver Value Constraint"))),

        "Resolver Reference To Value Constraint": sh.module_(
            sh.t.reference("Resolver Value Constraints", [])), //FIXME : inline

        "Resolver Value Constraint": sh.module_(
            sh.t.group({
                "start": sh.prop(
                    sh.t.state({
                        "value": sh.toption(
                            sh.t.nothing()),
                        "sibling": sh.toption(
                            sh.t.component("Resolver Reference To Value Constraint")),
                    })),
                "constraint": sh.prop(
                    sh.t.component("Resolver Constraint")),
            })),

        "Resolver Optional Value Initialization": sh.module_(
            sh.t.state({
                "not set": sh.toption(
                    sh.t.nothing()),
                "set": sh.toption(
                    sh.t.component("Resolver Guaranteed Value Selection")),
                "selection": sh.toption(
                    sh.t.component("Resolver Possible Value Selection")),
            })),

        "Resolver Value Group": sh.module_(
            sh.t.dictionary(
                sh.t.group({
                    "definition": sh.prop(
                        sh.t.reference_derived("Group", [sh.vp.d()])),
                    "resolver": sh.prop(
                        sh.t.component("Resolver Value")),
                }))),

        "Resolver Value List Result": sh.module_(
            sh.t.component("Module Reference")),

        "Value Results": sh.module_(
            sh.t.optional(
                sh.t.dictionary(
                    sh.t.component("Value Reference")))),

        "Option Constraints": sh.module_(
            sh.t.optional(
                sh.t.dictionary(
                    sh.t.component("Value Reference")))),

        "Resolver Guaranteed Value Selection": sh.module_(
            sh.t.group({
                "start": sh.prop(
                    sh.t.state({
                        //stack
                        "sibling": sh.toption(
                            sh.t.reference("Resolver Value Group", [])),
                        "parent sibling": sh.toption(
                            sh.t.reference("Resolver Value Group", [])),
                        "option constraint": sh.toption(
                            sh.t.reference("Resolver Option Constraints", [])),
                        "list cursor": sh.toption(
                            sh.t.nothing()),
                        "linked entry": sh.toption(
                            sh.t.nothing()),

                        //siblings
                        "constraint": sh.toption(
                            sh.t.state({
                                "component": sh.toption(
                                    sh.t.group({
                                        "property": sh.prop(
                                            sh.t.reference("Resolver Value Group", [])),
                                        "constraint": sh.prop(
                                            sh.t.reference("Resolver Value Constraints", [])),
                                    })),
                                "reference": sh.toption(
                                    sh.t.group({
                                        "property": sh.prop(
                                            sh.t.reference("Resolver Value Group", [])),
                                        "constraint": sh.prop(
                                            sh.t.reference("Resolver Value Constraints", [])),
                                    })),

                            })),
                        "parameter": sh.toption(
                            sh.t.reference("Resolver Signature Parameters", [sh.vp.g("modules")])), //FIXME: validate that presence is 'required'
                        "result": sh.toption(
                            sh.t.state({
                                "list": sh.toption(
                                    sh.t.group({
                                        "property": sh.prop(
                                            sh.t.reference("Resolver Value Group", [])),
                                        "list result": sh.prop(
                                            sh.t.reference_derived("Resolver Value", [sh.vp.s("list"), sh.vp.g("result"), sh.vp.o()])),
                                    })),
                                "state": sh.toption(
                                    sh.t.group({
                                        "property": sh.prop(
                                            sh.t.reference("Resolver Value Group", [])),
                                        "state": sh.prop(
                                            sh.t.reference_derived("Resolver Value", [sh.vp.s("state")])),
                                        "result": sh.prop(
                                            sh.t.component("Module Reference")),
                                    })),
                                "optional value": sh.toption(
                                    sh.t.group({
                                        "property": sh.prop(
                                            sh.t.reference("Resolver Value Group", [])),
                                        "optional value": sh.prop(
                                            sh.t.reference_derived("Resolver Value", [sh.vp.s("optional")])),
                                        "result": sh.prop(
                                            sh.t.component("Module Reference")),
                                    })),
                            }))
                    })),
                "tail": sh.prop(
                    sh.t.component("Resolver Relative Value Selection")),
                "resulting node": sh.prop(
                    sh.t.reference_derived("Value", [])),
            })),

        "Resolver Possible Value Selection": sh.module_(
            sh.t.state({
                "parameter": sh.toption(
                    sh.t.reference("Resolver Signature Parameters", [sh.vp.g("modules")])), //FIXME: validate that presence is 'optional'
                "result": sh.toption(
                    sh.t.state({
                        "state": sh.toption(
                            sh.t.group({
                                "property": sh.prop(
                                    sh.t.reference("Resolver Value Group", [])),
                                "state": sh.prop(
                                    sh.t.reference_derived("Resolver Value", [sh.vp.s("state")])),
                                "result": sh.prop(
                                    sh.t.component("Module Reference")),
                            })),
                        "optional value": sh.toption(
                            sh.t.group({
                                "property": sh.prop(
                                    sh.t.reference("Resolver Value Group", [])),
                                "optional value": sh.prop(
                                    sh.t.reference_derived("Resolver Value", [sh.vp.s("optional")])),
                                "result": sh.prop(
                                    sh.t.component("Module Reference")),
                            })),
                    }))
            })),
    }
)