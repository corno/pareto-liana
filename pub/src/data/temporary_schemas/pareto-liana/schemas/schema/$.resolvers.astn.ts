import * as _pi from 'pareto-core/dist/interface'

import {
    resolvers, r, resolver, al, ls, av, gvs, ovi, rvs, state, state_constrained, oc, pc, pvs, reference,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"


export const $: g_.Module_Resolvers = resolvers(
    {
        "Module": resolver(r.group({
            "root value": r.component("Value", {
                "globals": av.parameter("globals"),
                "imports": av.parameter("imports"),
            }, {
                "noncircular sibling modules": al.parameter(("noncircular sibling modules")),
                "possibly circular dependent sibling modules": al.parameter(("possibly circular dependent sibling modules")),
            })
        })),

        "Modules": resolver(r.dictionary(r.component("Module", {
            "globals": av.parameter("globals"),
            "imports": av.parameter("imports"),
        }, {
            "noncircular sibling modules": al.not_circular_dependent_siblings(),
            "possibly circular dependent sibling modules": al.possibly_circular_dependent_siblings(),
        }))),

        "Globals": resolver(r.group({
            "complexity": r.state({
                "unconstrained": state(r.nothing()),
                "constrained": state(r.nothing()),
            }),
            "text types": r.dictionary(r.component("Text Type", {}, {})),
            "number types": r.dictionary(r.component("Number Type", {}, {})),
        })),

        "Number Type": resolver(r.group({
            "precision": r.state({
                "approximation": state(r.group({
                    "significant digits": r.number(),
                })),
                "exact": state(r.group({
                    "decimal separator offset": r.optional(r.number()),
                    "type": r.state({
                        "integer": state(r.nothing()),
                        "natural": state(r.nothing()),
                        "positive natural": state(r.nothing()),
                    }),
                })),
            })
        })),

        "Text Type": resolver(r.group({
            "type": r.state({
                "multi line": state(r.nothing()),
                "single line": state(r.nothing()),
            }),
        })),

        "Module Reference": resolver(r.group({
            "location": r.state(
                {
                    "internal": state(r.reference(ls.parameter("modules"))),
                    "external": state_constrained(
                        {
                            "import": oc.assert_set(pvs.parameter("imports"))
                        }, r.group({
                            "import": r.reference(gvs.dictionary(gvs.option_constraint("import", []))),
                            "module": r.reference(gvs.dictionary(gvs.sibling("import", [rvs.reference(), rvs.group("schema"), rvs.reference(), rvs.group("modules"), rvs.component()]))),
                        })),
                }
            ),
            "resulting module": r.reference_derived(gvs.state("location", reference("Module"), [])),
        })),

        "Value Reference": resolver(r.group({
            "module": r.component("Module Reference", null, null),
            "path": r.component("Value Path", { "module": av.required(gvs.sibling("module", [rvs.component(), rvs.group("resulting module"), rvs.reference()])) }, {}),
        })),

        "Value Path": resolver(r.group({
            "tail": r.list_with_result(
                r.state({
                    "dictionary": state_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "dictionary")
                        }, r.nothing()),
                    "group": state_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "group")
                        }, r.reference(gvs.dictionary(gvs.option_constraint("definition", [rvs.component()])))),
                    "list": state_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "list")
                        }, r.nothing()),
                    "optional": state_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "optional")
                        }, r.nothing()),
                    "state": state_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "state")
                        }, r.reference(gvs.dictionary(gvs.option_constraint("definition", [rvs.group("options")])))),
                }),
                reference("Value"),
            ),
            "resulting node": r.reference_derived(gvs.list("tail", [])),
        })),

        "Value Constraints": resolver(r.optional(r.dictionary(r.component("Value Reference", null, null)))),

        "Group": resolver(r.dictionary(r.group({
            "description": r.optional(r.text()),
            "value": r.component("Value",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            ),
        }))),

        "Dictionary": resolver(r.group({
            "value": r.component("Value",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            ),
        })),

        "Value": resolver(r.state({
            "boolean": state(r.nothing()),
            "component": state(r.group({
                "type": r.state({
                    "external": state_constrained(
                        {
                            "import": oc.assert_set(pvs.parameter("imports"))
                        }, r.group({
                            "import": r.reference(gvs.dictionary(gvs.option_constraint("import", []))),
                            "module": r.reference(gvs.dictionary(gvs.sibling("import", [rvs.reference(), rvs.group("schema"), rvs.reference(), rvs.group("modules"), rvs.component()]))),
                        })),
                    "internal": state(r.reference(ls.parameter("noncircular sibling modules"))),
                    "internal cyclic": state(r.reference(ls.parameter("possibly circular dependent sibling modules"))),
                }),
                "constraints": r.component("Value Constraints", {
                    "imports": av.parameter("imports"),
                }, {
                    "modules": al.parameter("noncircular sibling modules"),
                }),
            })),
            "dictionary": state(r.component("Dictionary",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            )),
            "group": state(r.component("Group",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            )),
            "list": state(r.group({
                "value": r.component("Value", null, null),
                "result": r.optional(r.component("Module Reference", {
                    "imports": av.parameter("imports"),
                }, {
                    "modules": al.parameter("noncircular sibling modules"),
                })),
            })),
            "nothing": state(r.nothing()),
            "number": state(r.state({
                "global": state_constrained(
                    {
                        "globals": oc.assert_set(pvs.parameter("globals"))
                    }, r.reference(gvs.dictionary(gvs.option_constraint("globals", [rvs.group("number types")])))),
                "local": state(r.component("Number Type", {}, {})),
            })),
            "optional": state(r.component("Value", null, null)),
            "reference": state(r.group({
                "referent": r.component("Value Reference", {
                    "imports": av.parameter("imports"),
                }, {
                    "modules": al.parameter("noncircular sibling modules"),
                }),
                "type": r.state({
                    "derived": state(r.nothing()),
                    "selected": state_constrained(
                        {
                            "dictionary": oc.state(
                                gvs.sibling(
                                    "referent",
                                    [rvs.component(), rvs.group("module"), rvs.component(), rvs.group("resulting module"), rvs.reference(), rvs.group("root value"), rvs.component()]
                                ),
                                "dictionary"
                            )
                        }, r.group({
                            "dictionary": r.reference_derived(gvs.option_constraint("dictionary", [])),
                            "dependency": r.state({
                                "acyclic": state(r.nothing()),
                                "cyclic": state(r.nothing()),
                                "stack": state(r.nothing()),
                            })
                        })),
                }),
            })),
            "state": state(r.group({
                "options": r.dictionary(r.group({
                    "value": r.component("Value", null, null),
                    "description": r.optional(r.text()),
                })),
                "constraints": r.component("Value Constraints", {
                    "imports": av.parameter("imports"),
                }, {
                    "modules": al.parameter("noncircular sibling modules"),
                }),
            })),
            "text": state(r.state({
                "global": state_constrained(
                    {
                        "globals": oc.assert_set(pvs.parameter("globals"))
                    }, r.reference(gvs.dictionary(gvs.option_constraint("globals", [rvs.group("text types")])))),
                "local": state(r.component("Text Type", {}, {})),
            })),
        })),

        "Relative Value Selection": resolver(r.group({
            "path": r.list_with_result(
                r.state({
                    "component": state_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "component")
                        }, r.nothing()),
                    "group": state_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "group")
                        }, r.reference(gvs.dictionary(gvs.option_constraint("definition", [rvs.component()])))),
                    "reference": state_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "reference")
                        },
                        r.group({
                            "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                        })
                    ),
                }),
                reference("Value"),
            ),
            "resulting node": r.reference_derived(gvs.list("path", [])),
        })),

        "Presence": resolver(r.state({
            "optional": state(r.nothing()),
            "required": state(r.nothing()),
        })),

        "Signature Parameters": resolver(r.group({
            "modules": r.dictionary(r.group({
                "module": r.component("Module Reference", {
                    "imports": av.optional(ovi.set(gvs.parameter("imports", []))),
                }, {
                    "modules": al.dictionary(gvs.parameter("modules", [])),
                }),
                "presence": r.component("Presence", {}, {}),
            })),
            "lookups": r.dictionary(r.group({
                "referent": r.component_constrained("Module Reference", {
                    "imports": av.optional(ovi.set(gvs.parameter("imports", []))),
                }, {
                    "modules": al.dictionary(gvs.parameter("modules", [])),
                }, {
                    "dictionary": pc.property([rvs.group("resulting module"), rvs.reference(), rvs.group("root value"), rvs.component()], "dictionary"),
                }),
                "dictionary": r.reference_derived(gvs.component("referent", "dictionary", [])),
                "type": r.state({
                    "cyclic": state(r.nothing()),
                    "acyclic": state(r.nothing()),
                    "stack": state(r.nothing()),
                }),
                "presence": r.component("Presence", {}, {}),
            }))
        })),

        "Signature": resolver(r.group({
            "module": r.reference_derived(gvs.parameter("module", [])),
            "parameters": r.state(
                {
                    "local": state(r.component("Signature Parameters", {
                        "modules": av.parameter("modules"),
                        "imports": av.parameter("imports"),
                    }, {})),
                    "same as": state(r.reference(ls.parameter("sibling signatures"))),
                }
            ),
            "resolved parameters": r.reference_derived(gvs.state("parameters",
                reference("Signature Parameters"), [])),
        })),

        "Signatures": resolver(r.dictionary_linked(
            'dense',
            gvs.parameter("modules", []),
            r.component("Signature", {
                "modules": av.parameter("modules"),
                "module": av.required(gvs.linked_entry([rvs.component()])),
                "imports": av.parameter("imports"),
            }, {
                "sibling signatures": al.not_circular_dependent_siblings(),
            })
        )),

        "Optional Value Initialization": resolver(r.state({
            "not set": state(r.nothing()),
            "set": state(r.component("Guaranteed Value Selection", null, null)),
            "selection": state(r.component("Possible Value Selection", null, null)),
        })),

        "Possible Value Selection": resolver(r.state({
            "parameter": state(r.reference(gvs.dictionary(gvs.parameter("signature", [rvs.group("resolved parameters"), rvs.reference(), rvs.group("modules")])))),
            "result": state(r.state({
                "state": state(r.group({
                    "property": r.reference(ls.parameter("sibling property resolvers"), {
                        "state": pc.property([rvs.group("resolver"), rvs.component()], "state"),
                    }),
                    "state": r.reference_derived(gvs.reference("property", "state", [])),
                    "result": r.component("Module Reference", {
                        "imports": av.parameter("imports"),
                    }, {
                        "modules": al.dictionary(gvs.parameter("modules", [])),
                    }),
                })),
                "optional value": state(r.group({
                    "property": r.reference(ls.parameter("sibling property resolvers"), {
                        "optional": pc.property([rvs.group("resolver"), rvs.component()], "optional"),
                    }),
                    "optional value": r.reference_derived(gvs.reference("property", "optional", [])),
                    "result": r.component("Module Reference", {
                        "imports": av.parameter("imports"),
                    }, {
                        "modules": al.dictionary(gvs.parameter("modules", [])),
                    }),
                })),

            }))
        })),

        "Guaranteed Value Selection": resolver(r.group({
            "start": r.state(
                {
                    //stack
                    "list cursor": state(r.nothing()),
                    "linked entry": state(r.nothing()),

                    "sibling": state(r.reference(ls.parameter("sibling property resolvers"))),
                    "parent sibling": state(r.reference(ls.parameter("parent sibling property resolvers"))),
                    "option constraint": state_constrained(
                        {
                            "oc": oc.assert_set(pvs.parameter("option constraints"))
                        }, r.reference_stack(gvs.dictionary(gvs.option_constraint("oc", [])))),

                    //siblings
                    "constraint": state(r.state({
                        "component": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "component": pc.property([rvs.group("resolver"), rvs.component()], "component"),
                            }),
                            "constraint": r.reference(gvs.dictionary(gvs.reference("property", "component", [rvs.group("constraints"), rvs.component()]))),
                        })),
                        "reference": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "reference": pc.property([rvs.group("resolver"), rvs.component()], "reference"),
                                "selected": pc.constraint("reference", [rvs.group("type")], "selected"),
                            }),
                            "constraint": r.reference(gvs.dictionary(gvs.reference("property", "selected", [rvs.group("constraints"), rvs.component()]))),
                        })),

                    })),
                    "parameter": state(r.reference(gvs.dictionary(gvs.parameter("signature", [rvs.group("resolved parameters"), rvs.reference(), rvs.group("modules")])))),
                    "result": state(r.state({
                        "list": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "list": pc.property([rvs.group("resolver"), rvs.component()], "list"),
                                "result": pc.constraint("list", [rvs.group("result")]),
                            }),
                            "list result": r.reference_derived(gvs.reference("property", "result", [])),
                        })),
                        "state": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "state": pc.property([rvs.group("resolver"), rvs.component()], "state"),
                            }),
                            "state": r.reference_derived(gvs.reference("property", "state", [])),
                            "result": r.component("Module Reference", {
                                "imports": av.parameter("imports"),
                            }, {
                                "modules": al.dictionary(gvs.parameter("modules", [])),
                            }),
                        })),
                        "optional value": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "optional": pc.property([rvs.group("resolver"), rvs.component()], "optional"),
                            }),
                            "optional value": r.reference_derived(gvs.reference("property", "optional", [])),
                            "result": r.component("Module Reference", {
                                "imports": av.parameter("imports"),
                            }, {
                                "modules": al.dictionary(gvs.parameter("modules", [])),
                            }),
                        })),

                    }))

                },
            ),
            "tail": r.component("Relative Value Selection", {
                "value": av.required(gvs.state("start",
                    reference("Value"), [])),
            }, {}),
            "resulting node": r.reference_derived(gvs.sibling("tail", [rvs.component(), rvs.group("resulting node"), rvs.reference()])),
        })),

        "Lookup Selection": resolver(r.group({
            "type": r.state(
                {
                    "dictionary": state(r.group({
                        "selection": r.component_constrained("Guaranteed Value Selection", null, null, {
                            "dictionary": pc.property([rvs.group("resulting node"), rvs.reference()], "dictionary"),
                        }),
                        "selected dictionary": r.reference_derived(gvs.component("selection", "dictionary", []))
                    })),
                    "parameter": state(r.reference(gvs.dictionary(gvs.parameter("signature", [rvs.group("resolved parameters"), rvs.reference(), rvs.group("lookups")])))),
                    "not circular dependent siblings": state_constrained(
                        {
                            "cd": oc.assert_set(pvs.parameter("current ordered dictionary"))
                        },
                        r.reference_derived(gvs.option_constraint("cd", []))
                    ),
                    "possibly circular dependent siblings": state_constrained(
                        {
                            "cd": oc.assert_set(pvs.parameter("current dictionary"))
                        },
                        r.reference_derived(gvs.option_constraint("cd", []))
                    ),
                },
            ),
            "resulting dictionary": r.reference_derived(gvs.state("type",
                reference("Dictionary"), [])),
        })),

        "Module Resolvers": resolver(r.dictionary_linked(
            'dense',
            gvs.parameter("signatures", []),
            r.group({
                "signature": r.reference_derived(gvs.linked_entry([])),
                "root value resolver": r.component("Value Resolver",
                    {

                        "option constraints": av.optional(ovi.not_set()),
                        "list cursor": av.optional(ovi.not_set()),
                        "linked entry": av.optional(ovi.not_set()),
                        "current ordered dictionary": av.optional(ovi.not_set()),
                        "current dictionary": av.optional(ovi.not_set()),

                        "signature": av.required(gvs.sibling("signature", [rvs.reference()])),
                        "definition": av.required(gvs.linked_entry([rvs.component(), rvs.group("module"), rvs.reference(), rvs.group("root value")])),

                        "signatures": av.parameter("signatures"),
                        "imports": av.optional(ovi.set(gvs.parameter("imports", []))),
                        "modules": av.parameter("modules"),
                    },
                    {
                        "sibling property resolvers": al.not_set(),
                        "parent sibling property resolvers": al.not_set(),
                    },
                ),
            })
        )),

        "Constraint": resolver(r.group({
            "selection": r.component("Relative Value Selection", null, null),
            "type": r.state({
                "state": state_constrained(
                    {
                        "state": oc.state(gvs.sibling("selection", [rvs.component(), rvs.group("resulting node"), rvs.reference()]), "state")
                    },
                    r.group({
                        "selected state": r.reference_derived(gvs.option_constraint("state", [])),
                        "option": r.reference(gvs.dictionary(gvs.sibling("selected state", [rvs.reference(), rvs.group("options")]))),
                    })
                ),
                "optional value": state_constrained(
                    {
                        "optional": oc.state(gvs.sibling("selection", [rvs.component(), rvs.group("resulting node"), rvs.reference()]), "state")
                    }, r.group({
                        "selected optional value": r.reference_derived(gvs.option_constraint("optional", [])),
                    })),
            }),
        })),

        "Option Constraints": resolver(r.dictionary(r.state({
            "state": state(r.group({
                "selection": r.component_constrained("Guaranteed Value Selection", null, null, {
                    "state": pc.property([rvs.group("resulting node"), rvs.reference()], "state")
                }),
                "selected state": r.reference_derived(gvs.component("selection", "state", [])),
                "option": r.reference(gvs.dictionary(gvs.sibling("selected state", [rvs.reference(), rvs.group("options")]))),
            })),
            "assert is set": state(r.component("Possible Value Selection", null, null)),
        }))),

        "Value Constraint Resolver": resolver(r.group({
            "start": r.state(
                {
                    "property": state(r.nothing()),
                    "sibling": state(r.component("Reference To Value Constraint Resolver", {}, {
                        "property constraints": al.parameter("property constraints"),
                    })),
                }
            ),
            "constraint": r.component("Constraint", {
                "value": av.required(gvs.state("start",
                    reference("Value"), [])),
            }, {}),
        })),


        "Value Constraint Resolvers": resolver(r.dictionary(r.component("Value Constraint Resolver", {}, {
            "property constraints": al.not_circular_dependent_siblings(),
        }))),

        "Reference To Value Constraint Resolver": resolver(r.reference(ls.parameter("property constraints"))), //FIXME: inline

        "Value Resolver Group": resolver(r.dictionary_linked(
            'dense',
            gvs.parameter("definition", []),
            r.group({
                "definition": r.reference_derived(gvs.linked_entry([])),
                "resolver": r.component("Value Resolver",
                    {
                        "definition": av.required(gvs.linked_entry([rvs.group("value"), rvs.component()])),

                        "modules": av.parameter("modules"),
                        "imports": av.parameter("imports"),
                        "signature": av.parameter("signature"),
                        "signatures": av.parameter("signatures"),
                        "list cursor": av.parameter("list cursor"),
                        "linked entry": av.parameter("linked entry"),
                        "current dictionary": av.parameter("current dictionary"),
                        "option constraints": av.parameter("option constraints"),
                        "current ordered dictionary": av.parameter("current ordered dictionary"),
                    },
                    {
                        "sibling property resolvers": al.not_circular_dependent_siblings(),
                        "parent sibling property resolvers": al.parameter("sibling property resolvers"),
                    },
                ),
            })
        )),

        "Value Resolver List Result": resolver(r.component("Module Reference", {
            "imports": av.parameter("imports"),
        }, {
            "modules": al.parameter("modules"),
        })),

        "Benchmark": resolver(r.group({
            "selection": r.component_constrained("Guaranteed Value Selection", null, null, {
                "dictionary": pc.property([rvs.group("resulting node"), rvs.reference()], "dictionary"),
            }),
            "resulting dictionary": r.reference_derived(gvs.component("selection", "dictionary", [])),
            "dense": r.boolean(),
        })),

        "Value Resolver": resolver(r.state({
            "boolean": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "boolean")
                }, r.nothing()),
            "component": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "component")
                }, r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "location": r.state(
                        {
                            "external": state_constrained(
                                {
                                    "import": oc.assert_set(pvs.parameter("imports")),
                                },
                                r.group({
                                    "import": r.reference(gvs.dictionary(gvs.option_constraint("import", [])), {
                                        "constrained": pc.property([rvs.group("schema"), rvs.reference(), rvs.group("complexity")], "constrained"),
                                    }),
                                    "signature": r.reference(gvs.dictionary(gvs.reference("import", "constrained", [rvs.component(), rvs.group("signatures"), rvs.group("signatures"), rvs.component()]))),
                                })
                            ),
                            "internal": state(r.reference(gvs.dictionary(gvs.parameter("signatures", [])))),
                        },
                    ),
                    "signature": r.reference_derived(gvs.state("location",
                        reference("Signature"), [])),
                    "arguments": r.optional(r.group({
                        "modules": r.optional(r.dictionary_linked(
                            'dense',
                            gvs.parent_sibling("signature", [rvs.reference(), rvs.component(), rvs.group("resolved parameters"), rvs.reference(), rvs.group("modules")]),
                            r.state({
                                "optional": state(r.component("Optional Value Initialization", null, null)),
                                "required": state(r.component("Guaranteed Value Selection", null, null)),
                                "parameter": state(r.reference(gvs.dictionary(gvs.parameter("signature", [rvs.group("resolved parameters"), rvs.reference(), rvs.group("modules")])))),
                            }))
                        ),
                        "lookups": r.optional(r.dictionary_linked(
                            'dense',
                            gvs.parent_sibling("signature", [rvs.reference(), rvs.component(), rvs.group("resolved parameters"), rvs.reference(), rvs.group("lookups")]),
                            r.state({
                                "empty stack": state(r.nothing()),
                                "not set": state(r.nothing()),
                                "selection": state(r.component("Lookup Selection", null, null)),
                                "stack": state(r.group({
                                    "stack": r.component("Lookup Selection", null, null),
                                    "element": r.component("Lookup Selection", null, null),
                                })),
                            }))
                        ),
                    })),
                    "constraints": r.component("Value Constraint Resolvers", {
                        "value": av.required(gvs.sibling("signature", [rvs.reference(), rvs.component(), rvs.group("module"), rvs.reference(), rvs.group("root value"), rvs.component(),])),
                    }, {})
                })),
            "dictionary": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "dictionary"),
                },
                r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "benchmark": r.optional(
                        r.component("Benchmark", null, null)
                    ),
                    "resolver": r.component("Value Resolver",
                        {
                            "linked entry": av.optional(ovi.selection(pvs.optional_value("benchmark",
                                reference("Benchmark"),))),
                            "definition": av.required(gvs.sibling("definition", [rvs.reference(), rvs.group("value")])),
                            "current dictionary": av.optional(ovi.set(gvs.sibling("definition", []))),
                            "current ordered dictionary": av.optional(ovi.set(gvs.sibling("definition", []))), //FIXME: validate that the dictionary is ordered

                            "modules": av.parameter("modules"),
                            "imports": av.parameter("imports"),
                            "signature": av.parameter("signature"),
                            "signatures": av.parameter("signatures"),
                            "list cursor": av.parameter("list cursor"),
                            "option constraints": av.parameter("option constraints"),
                        },
                        null,
                    ),
                })
            ),
            "group": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "group")
                },
                r.component("Value Resolver Group",
                    {
                        "definition": av.required(gvs.option_constraint("definition", [])),

                        "modules": av.parameter("modules"),
                        "imports": av.parameter("imports"),
                        "signature": av.parameter("signature"),
                        "signatures": av.parameter("signatures"),
                        "list cursor": av.parameter("list cursor"),
                        "linked entry": av.parameter("linked entry"),
                        "current dictionary": av.parameter("current dictionary"),
                        "option constraints": av.parameter("option constraints"),
                        "current ordered dictionary": av.parameter("current ordered dictionary"),
                    },
                    {
                        "sibling property resolvers": al.parameter("sibling property resolvers"),
                        "parent sibling property resolvers": al.parameter("sibling property resolvers"),
                    },

                )
            ),
            "list": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "list")
                }, r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "result": r.optional(
                        r.component("Value Resolver List Result", {
                            "imports": av.parameter("imports"),
                        }, {
                            "modules": al.dictionary(gvs.parameter("modules", [])),
                        }),
                    ),
                    "resolver": r.component("Value Resolver",
                        {
                            "list cursor": av.optional(ovi.set(gvs.optional_value("result",
                                reference("Value Resolver List Result"), [rvs.component()]))),
                            "definition": av.required(gvs.option_constraint("definition", [rvs.group("value")])),

                            "modules": av.parameter("modules"),
                            "imports": av.parameter("imports"),
                            "signature": av.parameter("signature"),
                            "signatures": av.parameter("signatures"),
                            "linked entry": av.parameter("linked entry"),
                            "current dictionary": av.parameter("current dictionary"),
                            "option constraints": av.parameter("option constraints"),
                            "current ordered dictionary": av.parameter("current ordered dictionary"),
                        },
                        null,
                    ),
                })),
            "nothing": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "nothing")
                }, r.nothing()),
            "number": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "number")
                }, r.nothing()),
            "optional": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "optional")
                }, r.group({
                    "constraints": r.component("Option Constraints", null, null),
                    "resolver": r.component("Value Resolver",
                        {
                            "definition": av.required(gvs.option_constraint("definition", [rvs.component()])),

                            "modules": av.parameter("modules"),
                            "imports": av.parameter("imports"),
                            "signature": av.parameter("signature"),
                            "signatures": av.parameter("signatures"),
                            "list cursor": av.parameter("list cursor"),
                            "linked entry": av.parameter("linked entry"),
                            "current dictionary": av.parameter("current dictionary"),
                            "option constraints": av.parameter("option constraints"),
                            "current ordered dictionary": av.parameter("current ordered dictionary"),
                        },
                        null,
                    ),
                })),
            "reference": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "reference")
                }, r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "type": r.state({
                        "derived": state_constrained(
                            {
                                "definition": oc.state(gvs.sibling("definition", [rvs.reference(), rvs.group("type")]), "derived")
                            }, r.group({
                                "value": r.component("Guaranteed Value Selection", null, null),
                            })),
                        "selected": state_constrained(
                            {
                                "definition": oc.state(gvs.sibling("definition", [rvs.reference(), rvs.group("type")]), "selected")
                            }, r.group({
                                "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                                "lookup": r.component("Lookup Selection", null, null),
                                "constraints": r.component("Value Constraint Resolvers", {
                                    "value": av.required(gvs.sibling("lookup", [rvs.component(), rvs.group("resulting dictionary"), rvs.reference(), rvs.group("value")])),
                                }, {})
                            })),
                    }),
                }),),
            "state": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "state")
                }, r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "states": r.dictionary_linked(
                        'dense',
                        gvs.option_constraint("definition", [ rvs.group("options")]),
                        r.group({
                            "constraints": r.component("Option Constraints", null, null),
                            "resolver": r.component("Value Resolver",
                                {
                                    "definition": av.required(gvs.linked_entry([rvs.group("value")])),

                                    "modules": av.parameter("modules"),
                                    "imports": av.parameter("imports"),
                                    "signature": av.parameter("signature"),
                                    "signatures": av.parameter("signatures"),
                                    "list cursor": av.parameter("list cursor"),
                                    "linked entry": av.parameter("linked entry"),
                                    "current dictionary": av.parameter("current dictionary"),
                                    "option constraints": av.parameter("option constraints"),
                                    "current ordered dictionary": av.parameter("current ordered dictionary"),
                                },
                                null,
                            ),
                        })
                    ),
                })),
            "text": state_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "text")
                }, r.nothing()),
            // "type parameter": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "type parameter") }, r.nothing()),
        })),

        "Resolve Logic": resolver(r.group({
            "signatures": r.group({
                "signatures": r.component("Signatures", {
                    "modules": av.parameter("modules"),
                    "imports": av.parameter("imports"),
                }, {
                }),
            }),
            "resolvers": r.component("Module Resolvers", {
                "signatures": av.required(gvs.sibling("signatures", [rvs.group("signatures")])),
                "modules": av.parameter("modules"),
                "imports": av.parameter("imports"),
            }, {
            })
        })),

        "Schemas": resolver(r.dictionary(r.component("Schema Tree", {}, {
            "sibling schemas": al.stack(
                ls.parameter("sibling schemas"),
                ls.not_circular_dependent_siblings()
            ),
        }))),

        "Module Specification": resolver(r.group({
            "schema": r.component("Schema Tree", {}, {
                "sibling schemas": al.empty_stack(),
            }),
            "schema path": r.list(r.text()),
            "module": r.text(),
        })),


        "Schema Tree": resolver(r.state({
            "schema": state(r.component("Schema", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            })),
            "set": state(r.component("Schemas", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            }))
        })),

        "Schema": resolver(r.group({
            "imports": r.component("Imports", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            }),
            "globals": r.component("Globals", {
            }, {}),
            "modules": r.component("Modules", {
                "globals": av.optional(ovi.set(gvs.sibling("globals", []))),
                "imports": av.optional(ovi.set(gvs.sibling("imports", [rvs.component()]))),
            }, {
            }),
            "complexity": r.state({
                "constrained": state(r.component("Resolve Logic", {
                    "imports": av.required(gvs.sibling("imports", [rvs.component()])),
                    "modules": av.required(gvs.sibling("modules", [rvs.component()])),
                }, {})),
                "unconstrained": state(r.nothing()),
            }),
        })),

        "Imports": resolver(r.dictionary(r.group({
            "schema set child": r.reference_stack(ls.parameter("sibling schemas"), {
                "schema": pc.property([rvs.component()], "schema"),
            }),
            "schema": r.reference_derived(gvs.reference("schema set child", "schema", [])),
        }))),
    }
)