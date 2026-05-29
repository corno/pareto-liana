import * as sh from "../../../../../shorthands/resolver"

export const $ = sh.resolver_modules(
    {
        "Package": sh.resolver(sh.r.group({
            "omit (de)serializer": sh.r.simple(),
            "schema tree": sh.r.component("Schema Tree", {}, {
                "sibling schemas": sh.al.stack.empty(),
            }),

        })),

        "Module": sh.resolver(sh.r.group({
            "root value": sh.r.component("Value", {
                "globals": sh.av.parameter("globals"),
                "imports": sh.av.parameter("imports"),
            }, {
                "noncircular sibling modules": sh.al.parameter(("noncircular sibling modules")),
                "possibly circular dependent sibling modules": sh.al.parameter(("possibly circular dependent sibling modules")),
            })
        })),

        "Modules": sh.resolver(sh.r.dictionary(sh.r.component("Module", {
            "globals": sh.av.parameter("globals"),
            "imports": sh.av.parameter("imports"),
        }, {
            "noncircular sibling modules": sh.al.acyclic.siblings(),
            "possibly circular dependent sibling modules": sh.al.cyclic.siblings(),
        }))),

        "Globals": sh.resolver(sh.r.group({
            "complexity": sh.r.state({
                "unconstrained": sh.option(sh.r.nothing()),
                "constrained": sh.option(sh.r.nothing()),
            }),
            "text types": sh.r.dictionary(sh.r.component("Text Type", {}, {})),
            "simple types": sh.r.dictionary(sh.r.component("Simple Type", {}, {})),
        })),

        "Simple Type": sh.resolver(sh.r.group({
            "type": sh.r.state({
                "boolean": sh.option(sh.r.nothing()),
                "date": sh.option(sh.r.nothing()),
                "number": sh.option(sh.r.group({
                    "precision": sh.r.state({
                        "approximation": sh.option(sh.r.group({
                            "significant digits": sh.r.simple(),
                        })),
                        "exact": sh.option(sh.r.group({
                            "number of fractional digits": sh.r.optional(sh.r.simple()),
                            "type": sh.r.state({
                                "integer": sh.option(sh.r.nothing()),
                                "natural": sh.option(sh.r.nothing()),
                                "positive natural": sh.option(sh.r.nothing()),
                            }),
                        })),
                    })
                })),
            }),
        })),

        "Text Type": sh.resolver(sh.r.group({
            "type": sh.r.state({
                "multi line": sh.option(sh.r.nothing()),
                "single line": sh.option(sh.r.nothing()),
            }),
        })),

        "Module Reference": sh.resolver(sh.r.group({
            "location": sh.r.state(
                {
                    "internal": sh.option(sh.r.reference(sh.ls.parameter("modules"))),
                    "external": sh.option_constrained(
                        {
                            "import": sh.oc.assert_set(sh.pvs.parameter("imports"))
                        }, sh.r.group({
                            "import": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("import", []))),
                            "module": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("import", [sh.rvs.reference(), sh.rvs.group("schema"), sh.rvs.reference(), sh.rvs.group("modules"), sh.rvs.component()]))),
                        })),
                }
            ),
            "resulting module": sh.r.reference_derived(sh.gvs.state("location", sh.module_reference("Module"), [])),
        })),

        "Value Reference": sh.resolver(sh.r.group({
            "module": sh.r.component("Module Reference", null, null),
            "path": sh.r.component("Value Path", { "module": sh.av.required(sh.gvs.sibling("module", [sh.rvs.component(), sh.rvs.group("resulting module"), sh.rvs.reference()])) }, {}),
        })),

        "Value Path": sh.resolver(sh.r.group({
            "tail": sh.r.list_with_result(
                sh.r.state({
                    "dictionary": sh.option_constrained(
                        {
                            "definition": sh.oc.state(sh.gvs.list_cursor([]), "dictionary")
                        }, sh.r.nothing()),
                    "group": sh.option_constrained(
                        {
                            "definition": sh.oc.state(sh.gvs.list_cursor([]), "group")
                        }, sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("definition", [sh.rvs.component()])))),
                    "list": sh.option_constrained(
                        {
                            "definition": sh.oc.state(sh.gvs.list_cursor([]), "list")
                        }, sh.r.nothing()),
                    "optional": sh.option_constrained(
                        {
                            "definition": sh.oc.state(sh.gvs.list_cursor([]), "optional")
                        }, sh.r.nothing()),
                    "state": sh.option_constrained(
                        {
                            "definition": sh.oc.state(sh.gvs.list_cursor([]), "state")
                        }, sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("definition", [sh.rvs.group("options")])))),
                }),
                sh.module_reference("Value"),
            ),
            "resulting node": sh.r.reference_derived(sh.gvs.list("tail", [])),
        })),

        "Value Results": sh.resolver(sh.r.optional(sh.r.dictionary(sh.r.component("Value Reference", null, null)))),

        "Option Constraints": sh.resolver(sh.r.optional(sh.r.dictionary(sh.r.component("Value Reference", null, null)))),

        "Group": sh.resolver(sh.r.dictionary(sh.r.group({
            "description": sh.r.optional(sh.r.text()),
            "value": sh.r.component("Value",
                {
                    "globals": sh.av.parameter("globals"),
                    "imports": sh.av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": sh.al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": sh.al.parameter("possibly circular dependent sibling modules"),
                }
            ),
        }))),

        "Dictionary": sh.resolver(sh.r.group({
            "value": sh.r.component("Value",
                {
                    "globals": sh.av.parameter("globals"),
                    "imports": sh.av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": sh.al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": sh.al.parameter("possibly circular dependent sibling modules"),
                }
            ),
        })),

        "Value": sh.resolver(sh.r.state({
            "component": sh.option(sh.r.group({
                "type": sh.r.state({
                    "external": sh.option_constrained(
                        {
                            "import": sh.oc.assert_set(sh.pvs.parameter("imports"))
                        }, sh.r.group({
                            "import": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("import", []))),
                            "module": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("import", [sh.rvs.reference(), sh.rvs.group("schema"), sh.rvs.reference(), sh.rvs.group("modules"), sh.rvs.component()]))),
                        })),
                    "internal acyclic": sh.option(sh.r.reference(sh.ls.parameter("noncircular sibling modules"))),
                    "internal": sh.option(sh.r.reference(sh.ls.parameter("possibly circular dependent sibling modules"))),
                }),
                "results": sh.r.component("Value Results", {
                    "imports": sh.av.parameter("imports"),
                }, {
                    "modules": sh.al.parameter("noncircular sibling modules"),
                }),
            })),
            "dictionary": sh.option(sh.r.component("Dictionary",
                {
                    "globals": sh.av.parameter("globals"),
                    "imports": sh.av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": sh.al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": sh.al.parameter("possibly circular dependent sibling modules"),
                }
            )),
            "group": sh.option(sh.r.component("Group",
                {
                    "globals": sh.av.parameter("globals"),
                    "imports": sh.av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": sh.al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": sh.al.parameter("possibly circular dependent sibling modules"),
                }
            )),
            "list": sh.option(sh.r.group({
                "value": sh.r.component("Value", null, null),
                "results": sh.r.component("Value Results", {
                    "imports": sh.av.parameter("imports"),
                }, {
                    "modules": sh.al.parameter("noncircular sibling modules"),
                }),
            })),
            "nothing": sh.option(sh.r.nothing()),
            "simple": sh.option(sh.r.state({
                "global": sh.option_constrained(
                    {
                        "globals": sh.oc.assert_set(sh.pvs.parameter("globals"))
                    }, sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("globals", [sh.rvs.group("simple types")])))),
            })),
            "optional": sh.option(sh.r.component("Value", null, null)),
            "reference": sh.option(sh.r.group({
                "referent": sh.r.component("Value Reference", {
                    "imports": sh.av.parameter("imports"),
                }, {
                    "modules": sh.al.parameter("noncircular sibling modules"),
                }),
                "type": sh.r.state({
                    "derived": sh.option(sh.r.nothing()),
                    "selected": sh.option_constrained(
                        {
                            "dictionary": sh.oc.state(
                                sh.gvs.sibling(
                                    "referent",
                                    [sh.rvs.component(), sh.rvs.group("module"), sh.rvs.component(), sh.rvs.group("resulting module"), sh.rvs.reference(), sh.rvs.group("root value"), sh.rvs.component()]
                                ),
                                "dictionary"
                            )
                        }, sh.r.group({
                            "dictionary": sh.r.reference_derived(sh.gvs.option_constraint("dictionary", [])),
                            "dependency": sh.r.state({
                                "acyclic": sh.option(sh.r.nothing()),
                                "cyclic": sh.option(sh.r.nothing()),
                                "stack": sh.option(sh.r.nothing()),
                            }),
                            "results": sh.r.component("Value Results", {
                                "imports": sh.av.parameter("imports"),
                            }, {
                                "modules": sh.al.parameter("noncircular sibling modules"),
                            }),
                        })),
                }),
            })),
            "state": sh.option(sh.r.group({
                "options": sh.r.dictionary(sh.r.group({
                    "constraints": sh.r.component("Option Constraints", {
                        "imports": sh.av.parameter("imports"),
                    }, {
                        "modules": sh.al.parameter("noncircular sibling modules"),
                    }),
                    "value": sh.r.component("Value", null, null),
                    "description": sh.r.optional(sh.r.text()),
                })),
                "results": sh.r.component("Value Results", {
                    "imports": sh.av.parameter("imports"),
                }, {
                    "modules": sh.al.parameter("noncircular sibling modules"),
                }),
            })),
            "text": sh.option(sh.r.state({
                "global": sh.option_constrained(
                    {
                        "globals": sh.oc.assert_set(sh.pvs.parameter("globals"))
                    }, sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("globals", [sh.rvs.group("text types")])))),
                "local": sh.option(sh.r.component("Text Type", {}, {})),
            })),
        })),

        "Resolver Relative Value Selection": sh.resolver(sh.r.group({
            "path": sh.r.list_with_result(
                sh.r.state({
                    "component": sh.option_constrained(
                        {
                            "definition": sh.oc.state(sh.gvs.list_cursor([]), "component")
                        }, sh.r.nothing()),
                    "group": sh.option_constrained(
                        {
                            "definition": sh.oc.state(sh.gvs.list_cursor([]), "group")
                        }, sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("definition", [sh.rvs.component()])))),
                    "reference": sh.option_constrained(
                        {
                            "definition": sh.oc.state(sh.gvs.list_cursor([]), "reference")
                        },
                        sh.r.group({
                            "definition": sh.r.reference_derived(sh.gvs.option_constraint("definition", [])),
                        })
                    ),
                }),
                sh.module_reference("Value"),
            ),
            "resulting node": sh.r.reference_derived(sh.gvs.list("path", [])),
        })),

        "Presence": sh.resolver(sh.r.state({
            "optional": sh.option(sh.r.nothing()),
            "required": sh.option(sh.r.nothing()),
        })),

        "Resolver Signature Parameters": sh.resolver(sh.r.group({
            "modules": sh.r.dictionary(sh.r.group({
                "module": sh.r.component("Module Reference", {
                    "imports": sh.av.optional(sh.ovi.set(sh.gvs.parameter("imports", []))),
                }, {
                    "modules": sh.al.acyclic.dictionary(sh.gvs.parameter("modules", [])),
                }),
                "presence": sh.r.component("Presence", {}, {}),
            })),
            "lookups": sh.r.dictionary(sh.r.group({
                "referent": sh.r.component_constrained("Module Reference", {
                    "imports": sh.av.optional(sh.ovi.set(sh.gvs.parameter("imports", []))),
                }, {
                    "modules": sh.al.acyclic.dictionary(sh.gvs.parameter("modules", [])),
                }, {
                    "dictionary": sh.vcr.value([sh.rvs.group("resulting module"), sh.rvs.reference(), sh.rvs.group("root value"), sh.rvs.component()], "dictionary"),
                }),
                "dictionary": sh.r.reference_derived(sh.gvs.component("referent", "dictionary", [])),
                "type": sh.r.state({
                    "cyclic": sh.option(sh.r.nothing()),
                    "acyclic": sh.option(sh.r.nothing()),
                    "stack": sh.option(sh.r.nothing()),
                }),
                "presence": sh.r.component("Presence", {}, {}),
            }))
        })),

        "Resolver Signature": sh.resolver(sh.r.group({
            "module": sh.r.reference_derived(sh.gvs.parameter("module", [])),
            "parameters": sh.r.state(
                {
                    "local": sh.option(sh.r.component("Resolver Signature Parameters", {
                        "modules": sh.av.parameter("modules"),
                        "imports": sh.av.parameter("imports"),
                    }, {})),
                    "same as": sh.option(sh.r.reference(sh.ls.parameter("sibling signatures"))),
                }
            ),
            "resolved parameters": sh.r.reference_derived(sh.gvs.state("parameters",
                sh.module_reference("Resolver Signature Parameters"), [])),
        })),

        "Resolver Signatures": sh.resolver(sh.r.dictionary_linked(
            'dense',
            sh.gvs.parameter("modules", []),
            sh.r.component("Resolver Signature", {
                "modules": sh.av.parameter("modules"),
                "module": sh.av.required(sh.gvs.linked_entry([sh.rvs.component()])),
                "imports": sh.av.parameter("imports"),
            }, {
                "sibling signatures": sh.al.acyclic.siblings(),
            })
        )),

        "Resolver Optional Value Initialization": sh.resolver(sh.r.state({
            "not set": sh.option(sh.r.nothing()),
            "set": sh.option(sh.r.component("Resolver Guaranteed Value Selection", null, null)),
            "selection": sh.option(sh.r.component("Resolver Possible Value Selection", null, null)),
        })),

        "Resolver Possible Value Selection": sh.resolver(sh.r.state({
            "parameter": sh.option(sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("signature", [sh.rvs.group("resolved parameters"), sh.rvs.reference(), sh.rvs.group("modules")])))),
            "result": sh.option(sh.r.state({
                "state": sh.option(sh.r.group({
                    "property": sh.r.reference(sh.ls.parameter("sibling property resolvers"), {
                        "state": sh.vcr.value([sh.rvs.group("resolver"), sh.rvs.component()], "state"),
                    }),
                    "state": sh.r.reference_derived(sh.gvs.reference("property", "state", [])),
                    "result": sh.r.component("Module Reference", {
                        "imports": sh.av.parameter("schema imports"),
                    }, {
                        "modules": sh.al.acyclic.dictionary(sh.gvs.parameter("modules", [])),
                    }),
                })),
                "optional value": sh.option(sh.r.group({
                    "property": sh.r.reference(sh.ls.parameter("sibling property resolvers"), {
                        "optional": sh.vcr.value([sh.rvs.group("resolver"), sh.rvs.component()], "optional"),
                    }),
                    "optional value": sh.r.reference_derived(sh.gvs.reference("property", "optional", [])),
                    "result": sh.r.component("Module Reference", {
                        "imports": sh.av.parameter("schema imports"),
                    }, {
                        "modules": sh.al.acyclic.dictionary(sh.gvs.parameter("modules", [])),
                    }),
                })),

            }))
        })),

        "Resolver Guaranteed Value Selection": sh.resolver(sh.r.group({
            "start": sh.r.state(
                {
                    //stack
                    "list cursor": sh.option(sh.r.nothing()),
                    "linked entry": sh.option(sh.r.nothing()),

                    "sibling": sh.option(sh.r.reference(sh.ls.parameter("sibling property resolvers"))),
                    "parent sibling": sh.option(sh.r.reference(sh.ls.parameter("parent sibling property resolvers"))),
                    "option constraint": sh.option_constrained(
                        {
                            "oc": sh.oc.assert_set(sh.pvs.parameter("option constraints"))
                        }, sh.r.reference_stack(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("oc", [])))),

                    //siblings
                    "constraint": sh.option(sh.r.state({
                        "component": sh.option(sh.r.group({
                            "property": sh.r.reference(sh.ls.parameter("sibling property resolvers"), {
                                "component": sh.vcr.value([sh.rvs.group("resolver"), sh.rvs.component()], "component"),
                            }),
                            "constraint": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.reference("property", "component", [sh.rvs.group("constraints"), sh.rvs.component()]))),
                        })),
                        "reference": sh.option(sh.r.group({
                            "property": sh.r.reference(sh.ls.parameter("sibling property resolvers"), {
                                "reference": sh.vcr.value([sh.rvs.group("resolver"), sh.rvs.component()], "reference"),
                                "selected": sh.vcr.constraint("reference", [sh.rvs.group("type")], "selected"),
                            }),
                            "constraint": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.reference("property", "selected", [sh.rvs.group("constraints"), sh.rvs.component()]))),
                        })),

                    })),
                    "parameter": sh.option(sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("signature", [sh.rvs.group("resolved parameters"), sh.rvs.reference(), sh.rvs.group("modules")])))),
                    "result": sh.option(sh.r.state({
                        "list": sh.option(sh.r.group({
                            "property": sh.r.reference(sh.ls.parameter("sibling property resolvers"), {
                                "list": sh.vcr.value([sh.rvs.group("resolver"), sh.rvs.component()], "list"),
                                "result": sh.vcr.constraint("list", [sh.rvs.group("result")]),
                            }),
                            "list result": sh.r.reference_derived(sh.gvs.reference("property", "result", [])),
                        })),
                        "state": sh.option(sh.r.group({
                            "property": sh.r.reference(sh.ls.parameter("sibling property resolvers"), {
                                "state": sh.vcr.value([sh.rvs.group("resolver"), sh.rvs.component()], "state"),
                            }),
                            "state": sh.r.reference_derived(sh.gvs.reference("property", "state", [])),
                            "result": sh.r.component("Module Reference", {
                                "imports": sh.av.parameter("schema imports"),
                            }, {
                                "modules": sh.al.acyclic.dictionary(sh.gvs.parameter("modules", [])),
                            }),
                        })),
                        "optional value": sh.option(sh.r.group({
                            "property": sh.r.reference(sh.ls.parameter("sibling property resolvers"), {
                                "optional": sh.vcr.value([sh.rvs.group("resolver"), sh.rvs.component()], "optional"),
                            }),
                            "optional value": sh.r.reference_derived(sh.gvs.reference("property", "optional", [])),
                            "result": sh.r.component("Module Reference", {
                                "imports": sh.av.parameter("schema imports"),
                            }, {
                                "modules": sh.al.acyclic.dictionary(sh.gvs.parameter("modules", [])),
                            }),
                        })),

                    }))

                },
            ),
            "tail": sh.r.component("Resolver Relative Value Selection", {
                "value": sh.av.required(sh.gvs.state("start",
                    sh.module_reference("Value"), [])),
            }, {}),
            "resulting node": sh.r.reference_derived(sh.gvs.sibling("tail", [sh.rvs.component(), sh.rvs.group("resulting node"), sh.rvs.reference()])),
        })),

        "Resolver Lookup Selection": sh.resolver(sh.r.group({
            "type": sh.r.state(
                {
                    "acyclic": sh.option(sh.r.state({
                        "siblings": sh.option_constrained(
                            {
                                "cd": sh.oc.assert_set(sh.pvs.parameter("current ordered dictionary"))
                            },
                            sh.r.reference_derived(sh.gvs.option_constraint("cd", []))
                        ),
                        "resolved dictionary": sh.option(sh.r.group({
                            "selection": sh.r.component_constrained("Resolver Guaranteed Value Selection", null, null, {
                                "dictionary": sh.vcr.value(
                                    [
                                        sh.rvs.group("resulting node"),
                                        sh.rvs.reference()
                                    ],
                                    "dictionary"
                                ),
                            }),
                            "selected dictionary": sh.r.reference_derived(sh.gvs.component(
                                "selection", "dictionary", []
                            ))
                        })),
                    })),
                    "cyclic": sh.option(sh.r.state({
                        "siblings": sh.option_constrained(
                            {
                                "cd": sh.oc.assert_set(sh.pvs.parameter("current dictionary"))
                            },
                            sh.r.reference_derived(sh.gvs.option_constraint("cd", []))
                        ),
                    })),
                    "parameter": sh.option(sh.r.reference(sh.ls.acyclic.resolved_dictionary(
                        sh.gvs.parameter("signature",
                            [
                                sh.rvs.group("resolved parameters"),
                                sh.rvs.reference(),
                                sh.rvs.group("lookups")
                            ]
                        )
                    ))),
                },
            ),
            "resulting dictionary": sh.r.reference_derived(sh.gvs.state("type",
                sh.module_reference("Dictionary"), [])),
        })),

        "Resolver Modules": sh.resolver(sh.r.dictionary_linked(
            'dense',
            sh.gvs.parameter("signatures", []),
            sh.r.group({
                "signature": sh.r.reference_derived(sh.gvs.linked_entry([])),
                "root value resolver": sh.r.component("Resolver Value",
                    {

                        "option constraints": sh.av.optional(sh.ovi.not_set()),
                        "list cursor": sh.av.optional(sh.ovi.not_set()),
                        "linked entry": sh.av.optional(sh.ovi.not_set()),
                        "current ordered dictionary": sh.av.optional(sh.ovi.not_set()),
                        "current dictionary": sh.av.optional(sh.ovi.not_set()),

                        "signature": sh.av.required(sh.gvs.sibling("signature", [sh.rvs.reference()])),
                        "definition": sh.av.required(sh.gvs.linked_entry([sh.rvs.component(), sh.rvs.group("module"), sh.rvs.reference(), sh.rvs.group("root value")])),

                        "signatures": sh.av.parameter("signatures"),
                        "schema imports": sh.av.optional(sh.ovi.set(sh.gvs.parameter("schema imports", []))),
                        "resolver imports": sh.av.optional(sh.ovi.set(sh.gvs.parameter("resolver imports", []))),
                        "modules": sh.av.parameter("modules"),
                    },
                    {
                        "sibling property resolvers": sh.al.acyclic.not_set(),
                        "parent sibling property resolvers": sh.al.acyclic.not_set(),
                    },
                ),
            })
        )),

        "Resolver Constraint": sh.resolver(sh.r.group({
            "selection": sh.r.component("Resolver Relative Value Selection", null, null),
            "type": sh.r.state({
                "state": sh.option_constrained(
                    {
                        "state": sh.oc.state(sh.gvs.sibling("selection", [sh.rvs.component(), sh.rvs.group("resulting node"), sh.rvs.reference()]), "state")
                    },
                    sh.r.group({
                        "selected state": sh.r.reference_derived(sh.gvs.option_constraint("state", [])),
                        "option": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("selected state", [sh.rvs.reference(), sh.rvs.group("options")]))),
                    })
                ),
                "optional value": sh.option_constrained(
                    {
                        "optional": sh.oc.state(sh.gvs.sibling("selection", [sh.rvs.component(), sh.rvs.group("resulting node"), sh.rvs.reference()]), "state")
                    }, sh.r.group({
                        "selected optional value": sh.r.reference_derived(sh.gvs.option_constraint("optional", [])),
                    })),
            }),
        })),

        "Resolver Option Constraints": sh.resolver(sh.r.dictionary(sh.r.state({
            "state": sh.option(sh.r.group({
                "selection": sh.r.component_constrained("Resolver Guaranteed Value Selection", null, null, {
                    "state": sh.vcr.value([sh.rvs.group("resulting node"), sh.rvs.reference()], "state")
                }),
                "selected state": sh.r.reference_derived(sh.gvs.component("selection", "state", [])),
                "option": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("selected state", [sh.rvs.reference(), sh.rvs.group("options")]))),
            })),
            "assert is set": sh.option(sh.r.component("Resolver Possible Value Selection", null, null)),
        }))),

        "Resolver Value Constraint": sh.resolver(sh.r.group({
            "start": sh.r.state(
                {
                    "value": sh.option(sh.r.nothing()),
                    "sibling": sh.option(sh.r.component("Resolver Reference To Value Constraint", {}, {
                        "property constraints": sh.al.parameter("property constraints"),
                    })),
                }
            ),
            "constraint": sh.r.component("Resolver Constraint", {
                "value": sh.av.required(sh.gvs.state("start",
                    sh.module_reference("Value"), [])),
            }, {}),
        })),

        "Resolver Optional Value Constraints": sh.resolver(sh.r.optional(sh.r.component("Resolver Value Constraints", {
            "value": sh.av.parameter("value"),
        }, {
        }))),

        "Resolver Value Constraints": sh.resolver(sh.r.dictionary(sh.r.component("Resolver Value Constraint", {}, {
            "property constraints": sh.al.acyclic.siblings(),
        }))),

        "Resolver Reference To Value Constraint": sh.resolver(sh.r.reference(sh.ls.parameter("property constraints"))), //FIXME: inline

        "Resolver Value Group": sh.resolver(sh.r.dictionary_linked(
            'dense',
            sh.gvs.parameter("definition", []),
            sh.r.group({
                "definition": sh.r.reference_derived(sh.gvs.linked_entry([])),
                "resolver": sh.r.component("Resolver Value",
                    {
                        "definition": sh.av.required(sh.gvs.linked_entry([sh.rvs.group("value"), sh.rvs.component()])),

                        "modules": sh.av.parameter("modules"),
                        "schema imports": sh.av.parameter("schema imports"),
                        "resolver imports": sh.av.parameter("resolver imports"),
                        "signature": sh.av.parameter("signature"),
                        "signatures": sh.av.parameter("signatures"),
                        "list cursor": sh.av.parameter("list cursor"),
                        "linked entry": sh.av.parameter("linked entry"),
                        "current dictionary": sh.av.parameter("current dictionary"),
                        "option constraints": sh.av.parameter("option constraints"),
                        "current ordered dictionary": sh.av.parameter("current ordered dictionary"),
                    },
                    {
                        "sibling property resolvers": sh.al.acyclic.siblings(),
                        "parent sibling property resolvers": sh.al.parameter("sibling property resolvers"),
                    },
                ),
            })
        )),

        "Resolver Value List Result": sh.resolver(sh.r.component("Module Reference", {
            "imports": sh.av.parameter("imports"),
        }, {
            "modules": sh.al.parameter("modules"),
        })),

        "Resolver Benchmark": sh.resolver(sh.r.group({
            "selection": sh.r.component_constrained("Resolver Guaranteed Value Selection", null, null, {
                "dictionary": sh.vcr.value([sh.rvs.group("resulting node"), sh.rvs.reference()], "dictionary"),
            }),
            "resulting dictionary": sh.r.reference_derived(sh.gvs.component("selection", "dictionary", [])),
            "dense": sh.r.simple(),
        })),

        "Resolver Value": sh.resolver(sh.r.state({
            "component": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "component")
                },
                sh.r.group({
                    "definition": sh.r.reference_derived(sh.gvs.option_constraint("definition", [])),
                    "location": sh.r.state(
                        {
                            "external": sh.option_constrained(
                                {
                                    "schema import": sh.oc.assert_set(sh.pvs.parameter("schema imports")),
                                    "resolver import": sh.oc.assert_set(sh.pvs.parameter("resolver imports")),
                                },
                                sh.r.group({
                                    "schema import": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("schema import", [])), {
                                        "constrained": sh.vcr.value([sh.rvs.group("schema"), sh.rvs.reference(), sh.rvs.group("complexity")], "constrained"),
                                    }),
                                    "resolver import": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("resolver import", [])), {
                                    }),
                                    "signature": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.reference("schema import", "constrained", [sh.rvs.component(), sh.rvs.group("signatures"), sh.rvs.group("signatures"), sh.rvs.component()]))),
                                })
                            ),
                            "internal": sh.option(sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("signatures", [])))),
                        },
                    ),
                    "signature": sh.r.reference_derived(sh.gvs.state("location",
                        sh.module_reference("Resolver Signature"), [])),
                    "arguments": sh.r.optional(sh.r.group({
                        "modules": sh.r.optional(sh.r.dictionary_linked(
                            'dense',
                            sh.gvs.parent_sibling("signature", [sh.rvs.reference(), sh.rvs.component(), sh.rvs.group("resolved parameters"), sh.rvs.reference(), sh.rvs.group("modules")]),
                            sh.r.state({
                                "optional": sh.option(sh.r.component("Resolver Optional Value Initialization", null, null)),
                                "required": sh.option(sh.r.component("Resolver Guaranteed Value Selection", null, null)),
                                "parameter": sh.option(sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("signature", [sh.rvs.group("resolved parameters"), sh.rvs.reference(), sh.rvs.group("modules")])))),
                            }))
                        ),
                        "lookups": sh.r.optional(sh.r.dictionary_linked(
                            'dense',
                            sh.gvs.parent_sibling("signature", [sh.rvs.reference(), sh.rvs.component(), sh.rvs.group("resolved parameters"), sh.rvs.reference(), sh.rvs.group("lookups")]),
                            sh.r.state({
                                "stack": sh.option(sh.r.state({
                                    "empty": sh.option(sh.r.nothing()),
                                    "push": sh.option(sh.r.group({
                                        "stack": sh.r.component("Resolver Lookup Selection", null, null),
                                        "item": sh.r.component("Resolver Lookup Selection", null, null),
                                    })),
                                })),
                                "acyclic": sh.option(sh.r.state({
                                    "not set": sh.option(sh.r.nothing()),

                                })),
                                "cyclic": sh.option(sh.r.state({
                                    "not set": sh.option(sh.r.nothing()),

                                })),
                                "selection": sh.option(sh.r.component("Resolver Lookup Selection", null, null)),
                            }))
                        ),
                    })),
                    "constraints": sh.r.component("Resolver Value Constraints", {
                        "value": sh.av.required(sh.gvs.sibling("signature", [sh.rvs.reference(), sh.rvs.component(), sh.rvs.group("module"), sh.rvs.reference(), sh.rvs.group("root value"), sh.rvs.component(),])),
                    }, {})
                })
            ),
            "dictionary": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "dictionary"),
                },
                sh.r.group({
                    "definition": sh.r.reference_derived(sh.gvs.option_constraint("definition", [])),
                    "benchmark": sh.r.optional(
                        sh.r.component("Resolver Benchmark", null, null)
                    ),
                    "resolver": sh.r.component("Resolver Value",
                        {
                            "linked entry": sh.av.optional(sh.ovi.selection(sh.pvs.optional_value("benchmark",
                                sh.module_reference("Resolver Benchmark"),))),
                            "definition": sh.av.required(sh.gvs.sibling("definition", [sh.rvs.reference(), sh.rvs.group("value")])),
                            "current dictionary": sh.av.optional(sh.ovi.set(sh.gvs.sibling("definition", []))),
                            "current ordered dictionary": sh.av.optional(sh.ovi.set(sh.gvs.sibling("definition", []))), //FIXME: validate that the dictionary is ordered

                            "modules": sh.av.parameter("modules"),
                            "schema imports": sh.av.parameter("schema imports"),
                            "resolver imports": sh.av.parameter("resolver imports"),
                            "signature": sh.av.parameter("signature"),
                            "signatures": sh.av.parameter("signatures"),
                            "list cursor": sh.av.parameter("list cursor"),
                            "option constraints": sh.av.parameter("option constraints"),
                        },
                        null,
                    ),
                })
            ),
            "group": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "group")
                },
                sh.r.component("Resolver Value Group",
                    {
                        "definition": sh.av.required(sh.gvs.option_constraint("definition", [])),

                        "modules": sh.av.parameter("modules"),
                        "schema imports": sh.av.parameter("schema imports"),
                        "resolver imports": sh.av.parameter("resolver imports"),
                        "signature": sh.av.parameter("signature"),
                        "signatures": sh.av.parameter("signatures"),
                        "list cursor": sh.av.parameter("list cursor"),
                        "linked entry": sh.av.parameter("linked entry"),
                        "current dictionary": sh.av.parameter("current dictionary"),
                        "option constraints": sh.av.parameter("option constraints"),
                        "current ordered dictionary": sh.av.parameter("current ordered dictionary"),
                    },
                    {
                        "sibling property resolvers": sh.al.parameter("sibling property resolvers"),
                        "parent sibling property resolvers": sh.al.parameter("sibling property resolvers"),
                    },

                )
            ),
            "list": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "list")
                },
                sh.r.group({
                    "definition": sh.r.reference_derived(sh.gvs.option_constraint("definition", [])),
                    "result": sh.r.optional(
                        sh.r.component("Resolver Value List Result", {
                            "imports": sh.av.parameter("schema imports"),
                        }, {
                            "modules": sh.al.acyclic.dictionary(sh.gvs.parameter("modules", [])),
                        }),
                    ),
                    "resolver": sh.r.component("Resolver Value",
                        {
                            "list cursor": sh.av.optional(sh.ovi.set(sh.gvs.optional_value("result",
                                sh.module_reference("Resolver Value List Result"), [sh.rvs.component()]))),
                            "definition": sh.av.required(sh.gvs.option_constraint("definition", [sh.rvs.group("value")])),

                            "modules": sh.av.parameter("modules"),
                            "schema imports": sh.av.parameter("schema imports"),
                            "resolver imports": sh.av.parameter("resolver imports"),
                            "signature": sh.av.parameter("signature"),
                            "signatures": sh.av.parameter("signatures"),
                            "linked entry": sh.av.parameter("linked entry"),
                            "current dictionary": sh.av.parameter("current dictionary"),
                            "option constraints": sh.av.parameter("option constraints"),
                            "current ordered dictionary": sh.av.parameter("current ordered dictionary"),
                        },
                        null,
                    ),
                })
            ),
            "nothing": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "nothing")
                },
                sh.r.nothing()
            ),
            "simple": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "simple")
                },
                // sh.r.group({
                //     "definition": sh.r.reference_derived(sh.gvs.option_constraint("definition", [])),
                // })
                sh.r.nothing()
            ),
            "optional": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "optional")
                },
                sh.r.group({
                    "constraints": sh.r.component("Resolver Option Constraints", null, null),
                    "resolver": sh.r.component("Resolver Value",
                        {
                            "definition": sh.av.required(sh.gvs.option_constraint("definition", [sh.rvs.component()])),

                            "modules": sh.av.parameter("modules"),
                            "schema imports": sh.av.parameter("schema imports"),
                            "resolver imports": sh.av.parameter("resolver imports"),
                            "signature": sh.av.parameter("signature"),
                            "signatures": sh.av.parameter("signatures"),
                            "list cursor": sh.av.parameter("list cursor"),
                            "linked entry": sh.av.parameter("linked entry"),
                            "current dictionary": sh.av.parameter("current dictionary"),
                            "option constraints": sh.av.parameter("option constraints"),
                            "current ordered dictionary": sh.av.parameter("current ordered dictionary"),
                        },
                        null,
                    ),
                })
            ),
            "reference": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "reference")
                },
                sh.r.group({
                    "definition": sh.r.reference_derived(sh.gvs.option_constraint("definition", [])),
                    "type": sh.r.state({
                        "derived": sh.option_constrained(
                            {
                                "definition": sh.oc.state(sh.gvs.sibling("definition", [sh.rvs.reference(), sh.rvs.group("type")]), "derived")
                            }, sh.r.group({
                                "value": sh.r.component("Resolver Guaranteed Value Selection", null, null),
                            })),
                        "selected": sh.option_constrained(
                            {
                                "definition": sh.oc.state(sh.gvs.sibling("definition", [sh.rvs.reference(), sh.rvs.group("type")]), "selected")
                            }, sh.r.group({
                                "definition": sh.r.reference_derived(sh.gvs.option_constraint("definition", [])),
                                "lookup": sh.r.component("Resolver Lookup Selection", null, null),
                                "constraints": sh.r.component("Resolver Value Constraints", {
                                    "value": sh.av.required(sh.gvs.sibling("lookup", [sh.rvs.component(), sh.rvs.group("resulting dictionary"), sh.rvs.reference(), sh.rvs.group("value")])),
                                }, {})
                            })),
                    }),
                })
            ),
            "state": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "state")
                },
                sh.r.group({
                    "definition": sh.r.reference_derived(sh.gvs.option_constraint("definition", [])),
                    "options": sh.r.dictionary_linked(
                        'dense',
                        sh.gvs.option_constraint("definition", [sh.rvs.group("options")]),
                        sh.r.group({
                            "constraints": sh.r.component("Resolver Option Constraints", null, null),
                            "resolver": sh.r.component("Resolver Value",
                                {
                                    "definition": sh.av.required(sh.gvs.linked_entry([sh.rvs.group("value")])),

                                    "modules": sh.av.parameter("modules"),
                                    "schema imports": sh.av.parameter("schema imports"),
                                    "resolver imports": sh.av.parameter("resolver imports"),
                                    "signature": sh.av.parameter("signature"),
                                    "signatures": sh.av.parameter("signatures"),
                                    "list cursor": sh.av.parameter("list cursor"),
                                    "linked entry": sh.av.parameter("linked entry"),
                                    "current dictionary": sh.av.parameter("current dictionary"),
                                    "option constraints": sh.av.parameter("option constraints"),
                                    "current ordered dictionary": sh.av.parameter("current ordered dictionary"),
                                },
                                null,
                            ),
                        })
                    ),
                })
            ),
            "text": sh.option_constrained(
                {
                    "definition": sh.oc.state(sh.gvs.parameter("definition", []), "text")
                }, sh.r.nothing()
            ),
        })),

        "Resolver": sh.resolver(sh.r.group({
            "signatures": sh.r.group({
                "signatures": sh.r.component("Resolver Signatures", {
                    "modules": sh.av.parameter("modules"),
                    "imports": sh.av.parameter("schema imports"),
                }, {
                }),
            }),
            "modules": sh.r.component("Resolver Modules", {
                "signatures": sh.av.required(sh.gvs.sibling("signatures", [sh.rvs.group("signatures")])),
                "modules": sh.av.parameter("modules"),
                "schema imports": sh.av.parameter("schema imports"),
                "resolver imports": sh.av.parameter("resolver imports"),
            }, {
            })
        })),

        "Schemas": sh.resolver(sh.r.dictionary(sh.r.component("Schema Tree", {}, {
            "sibling schemas": sh.al.stack.push(
                sh.ls.parameter("sibling schemas"),
                sh.ls.acyclic.siblings()
            ),
        }))),

        "Module Specification": sh.resolver(sh.r.group({
            "schema": sh.r.component("Schema Tree", {}, {
                "sibling schemas": sh.al.stack.empty(),
            }),
            "schema path": sh.r.list(sh.r.text()),
            "complexity": sh.r.state({
                "constrained": sh.option(sh.r.group({
                    "module resolver": sh.r.text(),
                })),
                "unconstrained": sh.option(sh.r.group({
                    "module": sh.r.text(),

                }))
            }),
            //"file suffix": sh.r.text(),
        })),


        "Schema Tree": sh.resolver(sh.r.state({
            "schema": sh.option(sh.r.component("Schema", {}, {
                "sibling schemas": sh.al.parameter("sibling schemas"),
            })),
            "set": sh.option(sh.r.component("Schemas", {}, {
                "sibling schemas": sh.al.parameter("sibling schemas"),
            }))
        })),

        "Schema": sh.resolver(sh.r.group({
            "schema imports": sh.r.component("Schema Imports", {}, {
                "sibling schemas": sh.al.parameter("sibling schemas"),
            }),
            "resolver imports": sh.r.component("Resolver Imports", {}, {
                "sibling schemas": sh.al.parameter("sibling schemas"),
            }),
            "globals": sh.r.component("Globals", {
            }, {}),
            "modules": sh.r.component("Modules", {
                "globals": sh.av.optional(sh.ovi.set(sh.gvs.sibling("globals", []))),
                "imports": sh.av.optional(sh.ovi.set(sh.gvs.sibling("schema imports", [sh.rvs.component()]))),
            }, {
            }),
            "complexity": sh.r.state({
                "constrained": sh.option(sh.r.component("Resolver", {
                    "schema imports": sh.av.required(sh.gvs.sibling("schema imports", [sh.rvs.component()])),
                    "resolver imports": sh.av.required(sh.gvs.sibling("resolver imports", [sh.rvs.component()])),
                    "modules": sh.av.required(sh.gvs.sibling("modules", [sh.rvs.component()])),
                }, {})),
                "unconstrained": sh.option(sh.r.nothing()),
            }),
        })),

        "Schema Imports": sh.resolver(sh.r.dictionary(sh.r.group({
            "schema set child": sh.r.reference_stack(sh.ls.parameter("sibling schemas"), {
                "schema": sh.vcr.value([sh.rvs.component()], "schema"),
            }),
            "schema": sh.r.reference_derived(sh.gvs.reference("schema set child", "schema", [])),
        }))),

        "Resolver Imports": sh.resolver(sh.r.dictionary(sh.r.group({
            "schema set child": sh.r.reference_stack(sh.ls.parameter("sibling schemas"), {
                "resolver": sh.vcr.value([sh.rvs.component()], "schema"),
            }),
            "resolver": sh.r.reference_derived(sh.gvs.reference("schema set child", "resolver", [])),
        }))),
    }
)