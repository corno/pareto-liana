import * as _pi from 'pareto-core/dist/interface'

import {
    resolver_modules, r, resolver, al, ls, av, gvs, ovi, rvs, option, option_constrained, oc, vcr, pvs,
} from "../../../../../shorthands/resolver"
import {
    module_reference,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"


export const $: g_.Resolver_Modules = resolver_modules(
    {
        "Package": resolver(r.group({
            "omit (de)serializer": r.simple_boolean(),
            "schema tree": r.component("Schema Tree", {}, {
                "sibling schemas": al.stack.empty(),
            }),

        })),

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
            "noncircular sibling modules": al.acyclic.siblings(),
            "possibly circular dependent sibling modules": al.cyclic.siblings(),
        }))),

        "Globals": resolver(r.group({
            "complexity": r.state({
                "unconstrained": option(r.nothing()),
                "constrained": option(r.nothing()),
            }),
            "text types": r.dictionary(r.component("Text Type", {}, {})),
            "simple types": r.dictionary(r.component("Simple Type", {}, {})),
        })),

        "Simple Type": resolver(r.group({
            "type": r.state({
                "boolean": option(r.nothing()),
                "date": option(r.nothing()),
                "number": option(r.group({
                    "precision": r.state({
                        "approximation": option(r.group({
                            "significant digits": r.simple_number(),
                        })),
                        "exact": option(r.group({
                            "number of fractional digits": r.optional(r.simple_number()),
                            "type": r.state({
                                "integer": option(r.nothing()),
                                "natural": option(r.nothing()),
                                "positive natural": option(r.nothing()),
                            }),
                        })),
                    })
                })),
            }),
        })),

        "Text Type": resolver(r.group({
            "type": r.state({
                "multi line": option(r.nothing()),
                "single line": option(r.nothing()),
            }),
        })),

        "Module Reference": resolver(r.group({
            "location": r.state(
                {
                    "internal": option(r.reference(ls.parameter("modules"))),
                    "external": option_constrained(
                        {
                            "import": oc.assert_set(pvs.parameter("imports"))
                        }, r.group({
                            "import": r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("import", []))),
                            "module": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("import", [rvs.reference(), rvs.group("schema"), rvs.reference(), rvs.group("modules"), rvs.component()]))),
                        })),
                }
            ),
            "resulting module": r.reference_derived(gvs.state("location", module_reference("Module"), [])),
        })),

        "Value Reference": resolver(r.group({
            "module": r.component("Module Reference", null, null),
            "path": r.component("Value Path", { "module": av.required(gvs.sibling("module", [rvs.component(), rvs.group("resulting module"), rvs.reference()])) }, {}),
        })),

        "Value Path": resolver(r.group({
            "tail": r.list_with_result(
                r.state({
                    "dictionary": option_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "dictionary")
                        }, r.nothing()),
                    "group": option_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "group")
                        }, r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("definition", [rvs.component()])))),
                    "list": option_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "list")
                        }, r.nothing()),
                    "optional": option_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "optional")
                        }, r.nothing()),
                    "state": option_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "state")
                        }, r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("definition", [rvs.group("options")])))),
                }),
                module_reference("Value"),
            ),
            "resulting node": r.reference_derived(gvs.list("tail", [])),
        })),

        "Value Results": resolver(r.optional(r.dictionary(r.component("Value Reference", null, null)))),

        "Option Constraints": resolver(r.optional(r.dictionary(r.component("Value Reference", null, null)))),

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
            "component": option(r.group({
                "type": r.state({
                    "external": option_constrained(
                        {
                            "import": oc.assert_set(pvs.parameter("imports"))
                        }, r.group({
                            "import": r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("import", []))),
                            "module": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("import", [rvs.reference(), rvs.group("schema"), rvs.reference(), rvs.group("modules"), rvs.component()]))),
                        })),
                    "internal acyclic": option(r.reference(ls.parameter("noncircular sibling modules"))),
                    "internal": option(r.reference(ls.parameter("possibly circular dependent sibling modules"))),
                }),
                "results": r.component("Value Results", {
                    "imports": av.parameter("imports"),
                }, {
                    "modules": al.parameter("noncircular sibling modules"),
                }),
            })),
            "dictionary": option(r.component("Dictionary",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            )),
            "group": option(r.component("Group",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling modules": al.parameter("noncircular sibling modules"),
                    "possibly circular dependent sibling modules": al.parameter("possibly circular dependent sibling modules"),
                }
            )),
            "list": option(r.group({
                "value": r.component("Value", null, null),
                "results": r.component("Value Results", {
                    "imports": av.parameter("imports"),
                }, {
                    "modules": al.parameter("noncircular sibling modules"),
                }),
            })),
            "nothing": option(r.nothing()),
            "simple": option(r.state({
                "global": option_constrained(
                    {
                        "globals": oc.assert_set(pvs.parameter("globals"))
                    }, r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("globals", [rvs.group("simple types")])))),
            })),
            "optional": option(r.component("Value", null, null)),
            "reference": option(r.group({
                "referent": r.component("Value Reference", {
                    "imports": av.parameter("imports"),
                }, {
                    "modules": al.parameter("noncircular sibling modules"),
                }),
                "type": r.state({
                    "derived": option(r.nothing()),
                    "selected": option_constrained(
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
                                "acyclic": option(r.nothing()),
                                "cyclic": option(r.nothing()),
                                "stack": option(r.nothing()),
                            }),
                            "results": r.component("Value Results", {
                                "imports": av.parameter("imports"),
                            }, {
                                "modules": al.parameter("noncircular sibling modules"),
                            }),
                        })),
                }),
            })),
            "state": option(r.group({
                "options": r.dictionary(r.group({
                    "constraints": r.component("Option Constraints", {
                        "imports": av.parameter("imports"),
                    }, {
                        "modules": al.parameter("noncircular sibling modules"),
                    }),
                    "value": r.component("Value", null, null),
                    "description": r.optional(r.text()),
                })),
                "results": r.component("Value Results", {
                    "imports": av.parameter("imports"),
                }, {
                    "modules": al.parameter("noncircular sibling modules"),
                }),
            })),
            "text": option(r.state({
                "global": option_constrained(
                    {
                        "globals": oc.assert_set(pvs.parameter("globals"))
                    }, r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("globals", [rvs.group("text types")])))),
                "local": option(r.component("Text Type", {}, {})),
            })),
        })),

        "Resolver Relative Value Selection": resolver(r.group({
            "path": r.list_with_result(
                r.state({
                    "component": option_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "component")
                        }, r.nothing()),
                    "group": option_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "group")
                        }, r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("definition", [rvs.component()])))),
                    "reference": option_constrained(
                        {
                            "definition": oc.state(gvs.list_cursor([]), "reference")
                        },
                        r.group({
                            "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                        })
                    ),
                }),
                module_reference("Value"),
            ),
            "resulting node": r.reference_derived(gvs.list("path", [])),
        })),

        "Presence": resolver(r.state({
            "optional": option(r.nothing()),
            "required": option(r.nothing()),
        })),

        "Resolver Signature Parameters": resolver(r.group({
            "modules": r.dictionary(r.group({
                "module": r.component("Module Reference", {
                    "imports": av.optional(ovi.set(gvs.parameter("imports", []))),
                }, {
                    "modules": al.acyclic.dictionary(gvs.parameter("modules", [])),
                }),
                "presence": r.component("Presence", {}, {}),
            })),
            "lookups": r.dictionary(r.group({
                "referent": r.component_constrained("Module Reference", {
                    "imports": av.optional(ovi.set(gvs.parameter("imports", []))),
                }, {
                    "modules": al.acyclic.dictionary(gvs.parameter("modules", [])),
                }, {
                    "dictionary": vcr.value([rvs.group("resulting module"), rvs.reference(), rvs.group("root value"), rvs.component()], "dictionary"),
                }),
                "dictionary": r.reference_derived(gvs.component("referent", "dictionary", [])),
                "type": r.state({
                    "cyclic": option(r.nothing()),
                    "acyclic": option(r.nothing()),
                    "stack": option(r.nothing()),
                }),
                "presence": r.component("Presence", {}, {}),
            }))
        })),

        "Resolver Signature": resolver(r.group({
            "module": r.reference_derived(gvs.parameter("module", [])),
            "parameters": r.state(
                {
                    "local": option(r.component("Resolver Signature Parameters", {
                        "modules": av.parameter("modules"),
                        "imports": av.parameter("imports"),
                    }, {})),
                    "same as": option(r.reference(ls.parameter("sibling signatures"))),
                }
            ),
            "resolved parameters": r.reference_derived(gvs.state("parameters",
                module_reference("Resolver Signature Parameters"), [])),
        })),

        "Resolver Signatures": resolver(r.dictionary_linked(
            'dense',
            gvs.parameter("modules", []),
            r.component("Resolver Signature", {
                "modules": av.parameter("modules"),
                "module": av.required(gvs.linked_entry([rvs.component()])),
                "imports": av.parameter("imports"),
            }, {
                "sibling signatures": al.acyclic.siblings(),
            })
        )),

        "Resolver Optional Value Initialization": resolver(r.state({
            "not set": option(r.nothing()),
            "set": option(r.component("Resolver Guaranteed Value Selection", null, null)),
            "selection": option(r.component("Resolver Possible Value Selection", null, null)),
        })),

        "Resolver Possible Value Selection": resolver(r.state({
            "parameter": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("signature", [rvs.group("resolved parameters"), rvs.reference(), rvs.group("modules")])))),
            "result": option(r.state({
                "state": option(r.group({
                    "property": r.reference(ls.parameter("sibling property resolvers"), {
                        "state": vcr.value([rvs.group("resolver"), rvs.component()], "state"),
                    }),
                    "state": r.reference_derived(gvs.reference("property", "state", [])),
                    "result": r.component("Module Reference", {
                        "imports": av.parameter("schema imports"),
                    }, {
                        "modules": al.acyclic.dictionary(gvs.parameter("modules", [])),
                    }),
                })),
                "optional value": option(r.group({
                    "property": r.reference(ls.parameter("sibling property resolvers"), {
                        "optional": vcr.value([rvs.group("resolver"), rvs.component()], "optional"),
                    }),
                    "optional value": r.reference_derived(gvs.reference("property", "optional", [])),
                    "result": r.component("Module Reference", {
                        "imports": av.parameter("schema imports"),
                    }, {
                        "modules": al.acyclic.dictionary(gvs.parameter("modules", [])),
                    }),
                })),

            }))
        })),

        "Resolver Guaranteed Value Selection": resolver(r.group({
            "start": r.state(
                {
                    //stack
                    "list cursor": option(r.nothing()),
                    "linked entry": option(r.nothing()),

                    "sibling": option(r.reference(ls.parameter("sibling property resolvers"))),
                    "parent sibling": option(r.reference(ls.parameter("parent sibling property resolvers"))),
                    "option constraint": option_constrained(
                        {
                            "oc": oc.assert_set(pvs.parameter("option constraints"))
                        }, r.reference_stack(ls.acyclic.resolved_dictionary(gvs.option_constraint("oc", [])))),

                    //siblings
                    "constraint": option(r.state({
                        "component": option(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "component": vcr.value([rvs.group("resolver"), rvs.component()], "component"),
                            }),
                            "constraint": r.reference(ls.acyclic.resolved_dictionary(gvs.reference("property", "component", [rvs.group("constraints"), rvs.component()]))),
                        })),
                        "reference": option(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "reference": vcr.value([rvs.group("resolver"), rvs.component()], "reference"),
                                "selected": vcr.constraint("reference", [rvs.group("type")], "selected"),
                            }),
                            "constraint": r.reference(ls.acyclic.resolved_dictionary(gvs.reference("property", "selected", [rvs.group("constraints"), rvs.component()]))),
                        })),

                    })),
                    "parameter": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("signature", [rvs.group("resolved parameters"), rvs.reference(), rvs.group("modules")])))),
                    "result": option(r.state({
                        "list": option(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "list": vcr.value([rvs.group("resolver"), rvs.component()], "list"),
                                "result": vcr.constraint("list", [rvs.group("result")]),
                            }),
                            "list result": r.reference_derived(gvs.reference("property", "result", [])),
                        })),
                        "state": option(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "state": vcr.value([rvs.group("resolver"), rvs.component()], "state"),
                            }),
                            "state": r.reference_derived(gvs.reference("property", "state", [])),
                            "result": r.component("Module Reference", {
                                "imports": av.parameter("schema imports"),
                            }, {
                                "modules": al.acyclic.dictionary(gvs.parameter("modules", [])),
                            }),
                        })),
                        "optional value": option(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "optional": vcr.value([rvs.group("resolver"), rvs.component()], "optional"),
                            }),
                            "optional value": r.reference_derived(gvs.reference("property", "optional", [])),
                            "result": r.component("Module Reference", {
                                "imports": av.parameter("schema imports"),
                            }, {
                                "modules": al.acyclic.dictionary(gvs.parameter("modules", [])),
                            }),
                        })),

                    }))

                },
            ),
            "tail": r.component("Resolver Relative Value Selection", {
                "value": av.required(gvs.state("start",
                    module_reference("Value"), [])),
            }, {}),
            "resulting node": r.reference_derived(gvs.sibling("tail", [rvs.component(), rvs.group("resulting node"), rvs.reference()])),
        })),

        "Resolver Lookup Selection": resolver(r.group({
            "type": r.state(
                {
                    "acyclic": option(r.state({
                        "siblings": option_constrained(
                            {
                                "cd": oc.assert_set(pvs.parameter("current ordered dictionary"))
                            },
                            r.reference_derived(gvs.option_constraint("cd", []))
                        ),
                        "resolved dictionary": option(r.group({
                            "selection": r.component_constrained("Resolver Guaranteed Value Selection", null, null, {
                                "dictionary": vcr.value(
                                    [
                                        rvs.group("resulting node"),
                                        rvs.reference()
                                    ],
                                    "dictionary"
                                ),
                            }),
                            "selected dictionary": r.reference_derived(gvs.component(
                                "selection", "dictionary", []
                            ))
                        })),
                    })),
                    "cyclic": option(r.state({
                        "siblings": option_constrained(
                            {
                                "cd": oc.assert_set(pvs.parameter("current dictionary"))
                            },
                            r.reference_derived(gvs.option_constraint("cd", []))
                        ),
                    })),
                    "parameter": option(r.reference(ls.acyclic.resolved_dictionary(
                        gvs.parameter("signature",
                            [
                                rvs.group("resolved parameters"),
                                rvs.reference(),
                                rvs.group("lookups")
                            ]
                        )
                    ))),
                },
            ),
            "resulting dictionary": r.reference_derived(gvs.state("type",
                module_reference("Dictionary"), [])),
        })),

        "Resolver Modules": resolver(r.dictionary_linked(
            'dense',
            gvs.parameter("signatures", []),
            r.group({
                "signature": r.reference_derived(gvs.linked_entry([])),
                "root value resolver": r.component("Resolver Value",
                    {

                        "option constraints": av.optional(ovi.not_set()),
                        "list cursor": av.optional(ovi.not_set()),
                        "linked entry": av.optional(ovi.not_set()),
                        "current ordered dictionary": av.optional(ovi.not_set()),
                        "current dictionary": av.optional(ovi.not_set()),

                        "signature": av.required(gvs.sibling("signature", [rvs.reference()])),
                        "definition": av.required(gvs.linked_entry([rvs.component(), rvs.group("module"), rvs.reference(), rvs.group("root value")])),

                        "signatures": av.parameter("signatures"),
                        "schema imports": av.optional(ovi.set(gvs.parameter("schema imports", []))),
                        "resolver imports": av.optional(ovi.set(gvs.parameter("resolver imports", []))),
                        "modules": av.parameter("modules"),
                    },
                    {
                        "sibling property resolvers": al.acyclic.not_set(),
                        "parent sibling property resolvers": al.acyclic.not_set(),
                    },
                ),
            })
        )),

        "Resolver Constraint": resolver(r.group({
            "selection": r.component("Resolver Relative Value Selection", null, null),
            "type": r.state({
                "state": option_constrained(
                    {
                        "state": oc.state(gvs.sibling("selection", [rvs.component(), rvs.group("resulting node"), rvs.reference()]), "state")
                    },
                    r.group({
                        "selected state": r.reference_derived(gvs.option_constraint("state", [])),
                        "option": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("selected state", [rvs.reference(), rvs.group("options")]))),
                    })
                ),
                "optional value": option_constrained(
                    {
                        "optional": oc.state(gvs.sibling("selection", [rvs.component(), rvs.group("resulting node"), rvs.reference()]), "state")
                    }, r.group({
                        "selected optional value": r.reference_derived(gvs.option_constraint("optional", [])),
                    })),
            }),
        })),

        "Resolver Option Constraints": resolver(r.dictionary(r.state({
            "state": option(r.group({
                "selection": r.component_constrained("Resolver Guaranteed Value Selection", null, null, {
                    "state": vcr.value([rvs.group("resulting node"), rvs.reference()], "state")
                }),
                "selected state": r.reference_derived(gvs.component("selection", "state", [])),
                "option": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("selected state", [rvs.reference(), rvs.group("options")]))),
            })),
            "assert is set": option(r.component("Resolver Possible Value Selection", null, null)),
        }))),

        "Resolver Value Constraint": resolver(r.group({
            "start": r.state(
                {
                    "value": option(r.nothing()),
                    "sibling": option(r.component("Resolver Reference To Value Constraint", {}, {
                        "property constraints": al.parameter("property constraints"),
                    })),
                }
            ),
            "constraint": r.component("Resolver Constraint", {
                "value": av.required(gvs.state("start",
                    module_reference("Value"), [])),
            }, {}),
        })),

        "Resolver Optional Value Constraints": resolver(r.optional(r.component("Resolver Value Constraints", {
            "value": av.parameter("value"),
        }, {
        }))),

        "Resolver Value Constraints": resolver(r.dictionary(r.component("Resolver Value Constraint", {}, {
            "property constraints": al.acyclic.siblings(),
        }))),

        "Resolver Reference To Value Constraint": resolver(r.reference(ls.parameter("property constraints"))), //FIXME: inline

        "Resolver Value Group": resolver(r.dictionary_linked(
            'dense',
            gvs.parameter("definition", []),
            r.group({
                "definition": r.reference_derived(gvs.linked_entry([])),
                "resolver": r.component("Resolver Value",
                    {
                        "definition": av.required(gvs.linked_entry([rvs.group("value"), rvs.component()])),

                        "modules": av.parameter("modules"),
                        "schema imports": av.parameter("schema imports"),
                        "resolver imports": av.parameter("resolver imports"),
                        "signature": av.parameter("signature"),
                        "signatures": av.parameter("signatures"),
                        "list cursor": av.parameter("list cursor"),
                        "linked entry": av.parameter("linked entry"),
                        "current dictionary": av.parameter("current dictionary"),
                        "option constraints": av.parameter("option constraints"),
                        "current ordered dictionary": av.parameter("current ordered dictionary"),
                    },
                    {
                        "sibling property resolvers": al.acyclic.siblings(),
                        "parent sibling property resolvers": al.parameter("sibling property resolvers"),
                    },
                ),
            })
        )),

        "Resolver Value List Result": resolver(r.component("Module Reference", {
            "imports": av.parameter("imports"),
        }, {
            "modules": al.parameter("modules"),
        })),

        "Resolver Benchmark": resolver(r.group({
            "selection": r.component_constrained("Resolver Guaranteed Value Selection", null, null, {
                "dictionary": vcr.value([rvs.group("resulting node"), rvs.reference()], "dictionary"),
            }),
            "resulting dictionary": r.reference_derived(gvs.component("selection", "dictionary", [])),
            "dense": r.simple_boolean(),
        })),

        "Resolver Value": resolver(r.state({
            "component": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "component")
                },
                r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "location": r.state(
                        {
                            "external": option_constrained(
                                {
                                    "schema import": oc.assert_set(pvs.parameter("schema imports")),
                                    "resolver import": oc.assert_set(pvs.parameter("resolver imports")),
                                },
                                r.group({
                                    "schema import": r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("schema import", [])), {
                                        "constrained": vcr.value([rvs.group("schema"), rvs.reference(), rvs.group("complexity")], "constrained"),
                                    }),
                                    "resolver import": r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("resolver import", [])), {
                                    }),
                                    "signature": r.reference(ls.acyclic.resolved_dictionary(gvs.reference("schema import", "constrained", [rvs.component(), rvs.group("signatures"), rvs.group("signatures"), rvs.component()]))),
                                })
                            ),
                            "internal": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("signatures", [])))),
                        },
                    ),
                    "signature": r.reference_derived(gvs.state("location",
                        module_reference("Resolver Signature"), [])),
                    "arguments": r.optional(r.group({
                        "modules": r.optional(r.dictionary_linked(
                            'dense',
                            gvs.parent_sibling("signature", [rvs.reference(), rvs.component(), rvs.group("resolved parameters"), rvs.reference(), rvs.group("modules")]),
                            r.state({
                                "optional": option(r.component("Resolver Optional Value Initialization", null, null)),
                                "required": option(r.component("Resolver Guaranteed Value Selection", null, null)),
                                "parameter": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("signature", [rvs.group("resolved parameters"), rvs.reference(), rvs.group("modules")])))),
                            }))
                        ),
                        "lookups": r.optional(r.dictionary_linked(
                            'dense',
                            gvs.parent_sibling("signature", [rvs.reference(), rvs.component(), rvs.group("resolved parameters"), rvs.reference(), rvs.group("lookups")]),
                            r.state({
                                "stack": option(r.state({
                                    "empty": option(r.nothing()),
                                    "push": option(r.group({
                                        "stack": r.component("Resolver Lookup Selection", null, null),
                                        "item": r.component("Resolver Lookup Selection", null, null),
                                    })),
                                })),
                                "acyclic": option(r.state({
                                    "not set": option(r.nothing()),

                                })),
                                "cyclic": option(r.state({
                                    "not set": option(r.nothing()),

                                })),
                                "selection": option(r.component("Resolver Lookup Selection", null, null)),
                            }))
                        ),
                    })),
                    "constraints": r.component("Resolver Value Constraints", {
                        "value": av.required(gvs.sibling("signature", [rvs.reference(), rvs.component(), rvs.group("module"), rvs.reference(), rvs.group("root value"), rvs.component(),])),
                    }, {})
                })
            ),
            "dictionary": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "dictionary"),
                },
                r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "benchmark": r.optional(
                        r.component("Resolver Benchmark", null, null)
                    ),
                    "resolver": r.component("Resolver Value",
                        {
                            "linked entry": av.optional(ovi.selection(pvs.optional_value("benchmark",
                                module_reference("Resolver Benchmark"),))),
                            "definition": av.required(gvs.sibling("definition", [rvs.reference(), rvs.group("value")])),
                            "current dictionary": av.optional(ovi.set(gvs.sibling("definition", []))),
                            "current ordered dictionary": av.optional(ovi.set(gvs.sibling("definition", []))), //FIXME: validate that the dictionary is ordered

                            "modules": av.parameter("modules"),
                            "schema imports": av.parameter("schema imports"),
                            "resolver imports": av.parameter("resolver imports"),
                            "signature": av.parameter("signature"),
                            "signatures": av.parameter("signatures"),
                            "list cursor": av.parameter("list cursor"),
                            "option constraints": av.parameter("option constraints"),
                        },
                        null,
                    ),
                })
            ),
            "group": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "group")
                },
                r.component("Resolver Value Group",
                    {
                        "definition": av.required(gvs.option_constraint("definition", [])),

                        "modules": av.parameter("modules"),
                        "schema imports": av.parameter("schema imports"),
                        "resolver imports": av.parameter("resolver imports"),
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
            "list": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "list")
                },
                r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "result": r.optional(
                        r.component("Resolver Value List Result", {
                            "imports": av.parameter("schema imports"),
                        }, {
                            "modules": al.acyclic.dictionary(gvs.parameter("modules", [])),
                        }),
                    ),
                    "resolver": r.component("Resolver Value",
                        {
                            "list cursor": av.optional(ovi.set(gvs.optional_value("result",
                                module_reference("Resolver Value List Result"), [rvs.component()]))),
                            "definition": av.required(gvs.option_constraint("definition", [rvs.group("value")])),

                            "modules": av.parameter("modules"),
                            "schema imports": av.parameter("schema imports"),
                            "resolver imports": av.parameter("resolver imports"),
                            "signature": av.parameter("signature"),
                            "signatures": av.parameter("signatures"),
                            "linked entry": av.parameter("linked entry"),
                            "current dictionary": av.parameter("current dictionary"),
                            "option constraints": av.parameter("option constraints"),
                            "current ordered dictionary": av.parameter("current ordered dictionary"),
                        },
                        null,
                    ),
                })
            ),
            "nothing": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "nothing")
                },
                r.nothing()
            ),
            "simple": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "simple")
                },
                // r.group({
                //     "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                // })
                r.nothing()
            ),
            "optional": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "optional")
                },
                r.group({
                    "constraints": r.component("Resolver Option Constraints", null, null),
                    "resolver": r.component("Resolver Value",
                        {
                            "definition": av.required(gvs.option_constraint("definition", [rvs.component()])),

                            "modules": av.parameter("modules"),
                            "schema imports": av.parameter("schema imports"),
                            "resolver imports": av.parameter("resolver imports"),
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
            "reference": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "reference")
                },
                r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "type": r.state({
                        "derived": option_constrained(
                            {
                                "definition": oc.state(gvs.sibling("definition", [rvs.reference(), rvs.group("type")]), "derived")
                            }, r.group({
                                "value": r.component("Resolver Guaranteed Value Selection", null, null),
                            })),
                        "selected": option_constrained(
                            {
                                "definition": oc.state(gvs.sibling("definition", [rvs.reference(), rvs.group("type")]), "selected")
                            }, r.group({
                                "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                                "lookup": r.component("Resolver Lookup Selection", null, null),
                                "constraints": r.component("Resolver Value Constraints", {
                                    "value": av.required(gvs.sibling("lookup", [rvs.component(), rvs.group("resulting dictionary"), rvs.reference(), rvs.group("value")])),
                                }, {})
                            })),
                    }),
                })
            ),
            "state": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "state")
                },
                r.group({
                    "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    "options": r.dictionary_linked(
                        'dense',
                        gvs.option_constraint("definition", [rvs.group("options")]),
                        r.group({
                            "constraints": r.component("Resolver Option Constraints", null, null),
                            "resolver": r.component("Resolver Value",
                                {
                                    "definition": av.required(gvs.linked_entry([rvs.group("value")])),

                                    "modules": av.parameter("modules"),
                                    "schema imports": av.parameter("schema imports"),
                                    "resolver imports": av.parameter("resolver imports"),
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
                })
            ),
            "text": option_constrained(
                {
                    "definition": oc.state(gvs.parameter("definition", []), "text")
                }, r.nothing()
            ),
        })),

        "Resolver": resolver(r.group({
            "signatures": r.group({
                "signatures": r.component("Resolver Signatures", {
                    "modules": av.parameter("modules"),
                    "imports": av.parameter("schema imports"),
                }, {
                }),
            }),
            "modules": r.component("Resolver Modules", {
                "signatures": av.required(gvs.sibling("signatures", [rvs.group("signatures")])),
                "modules": av.parameter("modules"),
                "schema imports": av.parameter("schema imports"),
                "resolver imports": av.parameter("resolver imports"),
            }, {
            })
        })),

        "Schemas": resolver(r.dictionary(r.component("Schema Tree", {}, {
            "sibling schemas": al.stack.push(
                ls.parameter("sibling schemas"),
                ls.acyclic.siblings()
            ),
        }))),

        "Module Specification": resolver(r.group({
            "schema": r.component("Schema Tree", {}, {
                "sibling schemas": al.stack.empty(),
            }),
            "schema path": r.list(r.text()),
            "module": r.text(),
            //"file suffix": r.text(),
        })),


        "Schema Tree": resolver(r.state({
            "schema": option(r.component("Schema", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            })),
            "set": option(r.component("Schemas", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            }))
        })),

        "Schema": resolver(r.group({
            "schema imports": r.component("Schema Imports", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            }),
            "resolver imports": r.component("Resolver Imports", {}, {
                "sibling schemas": al.parameter("sibling schemas"),
            }),
            "globals": r.component("Globals", {
            }, {}),
            "modules": r.component("Modules", {
                "globals": av.optional(ovi.set(gvs.sibling("globals", []))),
                "imports": av.optional(ovi.set(gvs.sibling("schema imports", [rvs.component()]))),
            }, {
            }),
            "complexity": r.state({
                "constrained": option(r.component("Resolver", {
                    "schema imports": av.required(gvs.sibling("schema imports", [rvs.component()])),
                    "resolver imports": av.required(gvs.sibling("resolver imports", [rvs.component()])),
                    "modules": av.required(gvs.sibling("modules", [rvs.component()])),
                }, {})),
                "unconstrained": option(r.nothing()),
            }),
        })),

        "Schema Imports": resolver(r.dictionary(r.group({
            "schema set child": r.reference_stack(ls.parameter("sibling schemas"), {
                "schema": vcr.value([rvs.component()], "schema"),
            }),
            "schema": r.reference_derived(gvs.reference("schema set child", "schema", [])),
        }))),

        "Resolver Imports": resolver(r.dictionary(r.group({
            "schema set child": r.reference_stack(ls.parameter("sibling schemas"), {
                "resolver": vcr.value([rvs.component()], "schema"),
            }),
            "resolver": r.reference_derived(gvs.reference("schema set child", "resolver", [])),
        }))),
    }
)