import * as _pi from 'pareto-core-interface'

import {
    resolvers, r, resolver, al, ls, av, gvs, ovi, vst, state, state_constrained, oc, pc, pvs, reference,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"


export const $: g_.Resolvers = resolvers(
    {
        "Type": resolver(r.group({
            "node": r.component("Type Node", {
                "globals": av.parameter("globals"),
                "imports": av.parameter("imports"),
            }, {
                "noncircular sibling types": al.parameter(("noncircular sibling types")),
                "possibly circular dependent sibling types": al.parameter(("possibly circular dependent sibling types")),
            })
        })),

        "Types": resolver(r.dictionary(r.component("Type", {
            "globals": av.parameter("globals"),
            "imports": av.parameter("imports"),
        }, {
            "noncircular sibling types": al.not_circular_dependent_siblings(),
            "possibly circular dependent sibling types": al.possibly_circular_dependent_siblings(),
        }))),

        "Globals": resolver(r.group({
            "complexity": r.state_group({
                "unconstrained": state(r.nothing()),
                "constrained": state(r.nothing()),
            }),
            "text types": r.dictionary(r.component("Text Type", {}, {})),
            "number types": r.dictionary(r.component("Number Type", {}, {})),
        })),

        "Number Type": resolver(r.group({
            "precision": r.state_group({
                "approximation": state(r.group({
                    "significant digits": r.number(),
                })),
                "exact": state(r.group({
                    "decimal separator offset": r.optional(r.number()),
                    "type": r.state_group({
                        "integer": state(r.nothing()),
                        "natural": state(r.nothing()),
                        "positive natural": state(r.nothing()),
                    }),
                })),
            })
        })),

        "Text Type": resolver(r.group({
            "type": r.state_group({
                "multi line": state(r.nothing()),
                "single line": state(r.nothing()),
            }),
        })),

        "Type Reference": resolver(r.group({
            "location": r.state_group(
                {
                    "internal": state(r.reference(ls.parameter("types"))),
                    "external": state_constrained({ "import": oc.assert_set(pvs.parameter("imports")) }, r.group({
                        "import": r.reference(gvs.dictionary(gvs.option_constraint("import", []))),
                        "type": r.reference(gvs.dictionary(gvs.sibling("import", [vst.reference(), vst.group("schema"), vst.reference(), vst.group("types"), vst.component()]))),
                    })),
                }
            ),
            "resulting node": r.reference_derived(gvs.state_group("location", reference("Type Node"), [])),
        })),

        "Type Node Reference": resolver(r.group({
            "type location": r.component("Type Reference", null, null),
            "tail": r.list_with_result(
                r.state_group({
                    "dictionary": state_constrained({ "definition": oc.state(gvs.list_cursor([]), "dictionary") }, r.nothing()),
                    "group": state_constrained({ "definition": oc.state(gvs.list_cursor([]), "group") }, r.reference(gvs.dictionary(gvs.option_constraint("definition", [vst.component()])))),
                    "list": state_constrained({ "definition": oc.state(gvs.list_cursor([]), "list") }, r.nothing()),
                    "optional": state_constrained({ "definition": oc.state(gvs.list_cursor([]), "optional") }, r.nothing()),
                    "state group": state_constrained({ "definition": oc.state(gvs.list_cursor([]), "state group") }, r.reference(gvs.dictionary(gvs.option_constraint("definition", [])))),
                }),
                reference("Type Node"),
            ),
            "resulting node": r.reference_derived(gvs.list("tail", [])),
        })),

        "Group": resolver(r.dictionary(r.group({
            "description": r.optional(r.text()),
            "node": r.component("Type Node",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling types": al.parameter("noncircular sibling types"),
                    "possibly circular dependent sibling types": al.parameter("possibly circular dependent sibling types"),
                }
            ),
        }))),

        "Dictionary": resolver(r.group({
            "node": r.component("Type Node",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling types": al.parameter("noncircular sibling types"),
                    "possibly circular dependent sibling types": al.parameter("possibly circular dependent sibling types"),
                }
            ),
            "ordered": r.boolean(),
        })),

        "Type Node": resolver(r.state_group({
            "boolean": state(r.nothing()),
            "component": state(r.state_group({
                "external": state_constrained({ "import": oc.assert_set(pvs.parameter("imports")) }, r.group({
                    "import": r.reference(gvs.dictionary(gvs.option_constraint("import", []))),
                    "type": r.reference(gvs.dictionary(gvs.sibling("import", [vst.reference(), vst.group("schema"), vst.reference(), vst.group("types"), vst.component()]))),
                })),
                "internal": state(r.reference(ls.parameter("noncircular sibling types"))),
                "internal cyclic": state(r.reference(ls.parameter("possibly circular dependent sibling types"))),
            })),
            "dictionary": state(r.component("Dictionary",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling types": al.parameter("noncircular sibling types"),
                    "possibly circular dependent sibling types": al.parameter("possibly circular dependent sibling types"),
                }
            )),
            "group": state(r.component("Group",
                {
                    "globals": av.parameter("globals"),
                    "imports": av.parameter("imports"),
                },
                {
                    "noncircular sibling types": al.parameter("noncircular sibling types"),
                    "possibly circular dependent sibling types": al.parameter("possibly circular dependent sibling types"),
                }
            )),
            "list": state(r.group({
                "node": r.component("Type Node", null, null),
            })),
            "nothing": state(r.nothing()),
            "number": state(r.state_group({
                "global": state_constrained({ "globals": oc.assert_set(pvs.parameter("globals")) }, r.reference(gvs.dictionary(gvs.option_constraint("globals", [vst.group("number types")])))),
                "local": state(r.component("Number Type", {}, {})),
            })),
            "optional": state(r.component("Type Node", null, null)),
            "reference": state(r.group({
                "referent": r.component("Type Node Reference", {
                    "imports": av.parameter("imports"),
                }, {
                    "types": al.parameter("noncircular sibling types"),
                }),
                "type": r.state_group({
                    "derived": state(r.nothing()),
                    "selected": state_constrained({ "dictionary": oc.state(gvs.sibling("referent", [vst.component(), vst.group("resulting node"), vst.reference()]), "dictionary") }, r.group({
                        "dictionary": r.reference_derived(gvs.option_constraint("dictionary", [])),
                        "dependency": r.state_group({
                            "acyclic": state(r.nothing()),
                            "cyclic": state(r.nothing()),
                            "stack": state(r.nothing()),
                        })
                    })),
                }),
            })),
            "state group": state(r.dictionary(r.group({
                "node": r.component("Type Node", null, null),
                "description": r.optional(r.text()),
            }))),
            "text": state(r.state_group({
                "global": state_constrained({ "globals": oc.assert_set(pvs.parameter("globals")) }, r.reference(gvs.dictionary(gvs.option_constraint("globals", [vst.group("text types")])))),
                "local": state(r.component("Text Type", {}, {})),
            })),
        })),

        "Type Parameters": resolver(r.dictionary(r.nothing())),

        "Relative Value Selection": resolver(r.group({
            "path": r.list_with_result(
                r.state_group({
                    "component": state_constrained({ "definition": oc.state(gvs.list_cursor([]), "component") }, r.nothing()),
                    "group": state_constrained({ "definition": oc.state(gvs.list_cursor([]), "group") }, r.reference(gvs.dictionary(gvs.option_constraint("definition", [vst.component()])))),
                    "reference": state_constrained({ "definition": oc.state(gvs.list_cursor([]), "reference") }, r.group({
                        "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                    })),
                }),
                reference("Type Node"),
            ),
            "resulting node": r.reference_derived(gvs.list("path", [])),
        })),

        "Presence": resolver(r.state_group({
            "optional": state(r.nothing()),
            "required": state(r.nothing()),
        })),

        "Signature Parameters": resolver(r.group({
            "values": r.dictionary(r.group({
                "data type": r.component("Type Reference", {
                    "imports": av.optional(ovi.set(gvs.parameter("imports", []))),
                }, {
                    "types": al.dictionary(gvs.parameter("types", [])),
                }),
                "presence": r.component("Presence", {}, {}),
            })),
            "lookups": r.dictionary(r.group({
                "referent": r.component("Type Reference", {
                    "imports": av.optional(ovi.set(gvs.parameter("imports", []))),
                }, {
                    "types": al.dictionary(gvs.parameter("types", [])),
                }, {
                    "dictionary": pc.property([vst.group("resulting node"), vst.reference()], "dictionary"),
                }),
                "dictionary": r.reference_derived(gvs.component("referent", "dictionary", [])),
                "type": r.state_group({
                    "cyclic": state(r.nothing()),
                    "acyclic": state(r.nothing()),
                    "stack": state(r.nothing()),
                }),
                "presence": r.component("Presence", {}, {}),
            }))
        })),

        "Signature": resolver(r.group({
            "type": r.reference_derived(gvs.parameter("type", [])),
            "parameters": r.state_group(
                {
                    "local": state(r.component("Signature Parameters", {
                        "types": av.parameter("types"),
                        "imports": av.parameter("imports"),
                    }, {})),
                    "same as": state(r.reference(ls.parameter("sibling signatures"))),
                }
            ),
            "resolved parameters": r.reference_derived(gvs.state_group("parameters",
                reference("Signature Parameters"), [])),
        })),

        "Signatures": resolver(r.dictionary_linked(
            'dense',
            gvs.parameter("types", []),
            r.component("Signature", {
                "types": av.parameter("types"),
                "type": av.required(gvs.linked_entry([vst.component()])),
                "imports": av.parameter("imports"),
            }, {
                "sibling signatures": al.not_circular_dependent_siblings(),
            })
        )),

        "Optional Value Initialization": resolver(r.state_group({
            "not set": state(r.nothing()),
            "set": state(r.component("Guaranteed Value Selection", null, null)),
            "selection": state(r.component("Possible Value Selection", null, null)),
        })),

        "Possible Value Selection": resolver(r.state_group({
            "parameter": state(r.reference(gvs.dictionary(gvs.parameter("signature", [vst.group("resolved parameters"), vst.reference(), vst.group("values")])))),
            "result": state(r.state_group({
                "state group": state(r.group({
                    "property": r.reference(ls.parameter("sibling property resolvers"), {
                        "state group": pc.property([vst.group("resolver"), vst.component()], "state group"),
                    }),
                    "state group": r.reference_derived(gvs.reference("property", "state group", [])),
                    "result": r.component("Type Reference", {
                        "imports": av.parameter("imports"),
                    }, {
                        "types": al.dictionary(gvs.parameter("types", [])),
                    }),
                })),
                "optional value": state(r.group({
                    "property": r.reference(ls.parameter("sibling property resolvers"), {
                        "optional": pc.property([vst.group("resolver"), vst.component()], "optional"),
                    }),
                    "optional value": r.reference_derived(gvs.reference("property", "optional", [])),
                    "result": r.component("Type Reference", {
                        "imports": av.parameter("imports"),
                    }, {
                        "types": al.dictionary(gvs.parameter("types", [])),
                    }),
                })),

            }))
        })),

        "Guaranteed Value Selection": resolver(r.group({
            "start": r.state_group(
                {
                    //stack
                    "list cursor": state(r.nothing()),
                    "linked entry": state(r.nothing()),

                    "sibling": state(r.reference(ls.parameter("sibling property resolvers"))),
                    "parent sibling": state(r.reference(ls.parameter("parent sibling property resolvers"))),
                    "option constraint": state_constrained({ "oc": oc.assert_set(pvs.parameter("option constraints")) }, r.reference_stack(gvs.dictionary(gvs.option_constraint("oc", [])))),

                    //siblings
                    "constraint": state(r.state_group({
                        "component": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "component": pc.property([vst.group("resolver"), vst.component()], "component"),
                            }),
                            "constraint": r.reference(gvs.dictionary(gvs.reference("property", "component", [vst.group("constraints"), vst.component()]))),
                        })),
                        "reference": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "reference": pc.property([vst.group("resolver"), vst.component()], "reference"),
                                "selected": pc.constraint("reference", [vst.group("type")], "selected"),
                            }),
                            "constraint": r.reference(gvs.dictionary(gvs.reference("property", "selected", [vst.group("constraints"), vst.component()]))),
                        })),

                    })),
                    "parameter": state(r.reference(gvs.dictionary(gvs.parameter("signature", [vst.group("resolved parameters"), vst.reference(), vst.group("values")])))),
                    "result": state(r.state_group({
                        "list": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "list": pc.property([vst.group("resolver"), vst.component()], "list"),
                                "result": pc.constraint("list", [vst.group("result")]),
                            }),
                            "list result": r.reference_derived(gvs.reference("property", "result", [])),
                        })),
                        "state group": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "state group": pc.property([vst.group("resolver"), vst.component()], "state group"),
                            }),
                            "state group": r.reference_derived(gvs.reference("property", "state group", [])),
                            "result": r.component("Type Reference", {
                                "imports": av.parameter("imports"),
                            }, {
                                "types": al.dictionary(gvs.parameter("types", [])),
                            }),
                        })),
                        "optional value": state(r.group({
                            "property": r.reference(ls.parameter("sibling property resolvers"), {
                                "optional": pc.property([vst.group("resolver"), vst.component()], "optional"),
                            }),
                            "optional value": r.reference_derived(gvs.reference("property", "optional", [])),
                            "result": r.component("Type Reference", {
                                "imports": av.parameter("imports"),
                            }, {
                                "types": al.dictionary(gvs.parameter("types", [])),
                            }),
                        })),

                    }))

                },
            ),
            "tail": r.component("Relative Value Selection", {
                "node": av.required(gvs.state_group("start",
                    reference("Type Node"), [])),
            }, {}),
            "resulting node": r.reference_derived(gvs.sibling("tail", [vst.component(), vst.group("resulting node"), vst.reference()])),
        })),

        "Lookup Selection": resolver(r.group({
            "type": r.state_group(
                {
                    "dictionary": state(r.group({
                        "selection": r.component("Guaranteed Value Selection", null, null, {
                            "dictionary": pc.property([vst.group("resulting node"), vst.reference()], "dictionary"),
                        }),
                        "selected dictionary": r.reference_derived(gvs.component("selection", "dictionary", []))
                    })),
                    "parameter": state(r.reference(gvs.dictionary(gvs.parameter("signature", [vst.group("resolved parameters"), vst.reference(), vst.group("lookups")])))),
                    "not circular dependent siblings": state_constrained(
                        { "cd": oc.assert_set(pvs.parameter("current ordered dictionary")) },
                        r.reference_derived(gvs.option_constraint("cd", []))
                    ),
                    "possibly circular dependent siblings": state_constrained(
                        { "cd": oc.assert_set(pvs.parameter("current dictionary")) },
                        r.reference_derived(gvs.option_constraint("cd", []))
                    ),
                },
            ),
            "resulting dictionary": r.reference_derived(gvs.state_group("type",
                reference("Dictionary"), [])),
        })),

        "Resolvers": resolver(r.dictionary_linked(
            'dense',
            gvs.parameter("signatures", []),
            r.group({
                "signature": r.reference_derived(gvs.linked_entry([])),
                "type resolver": r.component("Node Resolver",
                    {

                        "option constraints": av.optional(ovi.not_set()),
                        "list cursor": av.optional(ovi.not_set()),
                        "linked entry": av.optional(ovi.not_set()),
                        "current ordered dictionary": av.optional(ovi.not_set()),
                        "current dictionary": av.optional(ovi.not_set()),

                        "signature": av.required(gvs.sibling("signature", [vst.reference()])),
                        "definition": av.required(gvs.linked_entry([vst.component(), vst.group("type"), vst.reference(), vst.group("node")])),

                        "signatures": av.parameter("signatures"),
                        "imports": av.optional(ovi.set(gvs.parameter("imports", []))),
                        "types": av.parameter("types"),
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
            "type": r.state_group({
                "state": state_constrained({ "state group": oc.state(gvs.sibling("selection", [vst.component(), vst.group("resulting node"), vst.reference()]), "state group") }, r.group({
                    "selected state group": r.reference_derived(gvs.option_constraint("state group", [])),
                    "state": r.reference(gvs.dictionary(gvs.sibling("selected state group", [vst.reference()]))),
                })),
                "optional value": state_constrained({ "optional": oc.state(gvs.sibling("selection", [vst.component(), vst.group("resulting node"), vst.reference()]), "state group") }, r.group({
                    "selected optional value": r.reference_derived(gvs.option_constraint("optional", [])),
                })),
            }),
        })),

        "Option Constraints": resolver(r.dictionary(r.state_group({
            "state": state(r.group({
                "selection": r.component("Guaranteed Value Selection", null, null, {
                    "state group": pc.property([vst.group("resulting node"), vst.reference()], "state group")
                }),
                "selected state group": r.reference_derived(gvs.component("selection", "state group", [])),
                "state": r.reference(gvs.dictionary(gvs.sibling("selected state group", [vst.reference()]))),
            })),
            "assert is set": state(r.component("Possible Value Selection", null, null)),
        }))),

        "Property Constraint": resolver(r.group({
            "start": r.state_group(
                {
                    "property": state(r.nothing()),
                    "sibling": state(r.component("Reference To Property Constraint", {}, {
                        "property constraints": al.parameter("property constraints"),
                    })),
                }
            ),
            "constraint": r.component("Constraint", {
                "node": av.required(gvs.state_group("start",
                    reference("Type Node"), [])),
            }, {}),
        })),


        "Property Constraints": resolver(r.dictionary(r.component("Property Constraint", {}, {
            "property constraints": al.not_circular_dependent_siblings(),
        }))),

        "Reference To Property Constraint": resolver(r.reference(ls.parameter("property constraints"))), //FIXME: inline

        "Node Resolver Group": resolver(r.dictionary_linked(
            'dense',
            gvs.parameter("definition", []),
            r.group({
                "definition": r.reference_derived(gvs.linked_entry([])),
                "resolver": r.component("Node Resolver",
                    {
                        "definition": av.required(gvs.linked_entry([vst.group("node"), vst.component()])),

                        "types": av.parameter("types"),
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

        "Node Resolver List Result": resolver(r.component("Type Reference", {
            "imports": av.parameter("imports"),
        }, {
            "types": al.parameter("types"),
        })),

        "Benchmark": resolver(r.group({
            "selection": r.component("Guaranteed Value Selection", null, null, {
                "dictionary": pc.property([vst.group("resulting node"), vst.reference()], "dictionary"),
            }),
            "resulting dictionary": r.reference_derived(gvs.component("selection", "dictionary", [])),
            "dense": r.boolean(),
        })),

        "Node Resolver": resolver(r.state_group({
            "boolean": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "boolean") }, r.nothing()),
            "component": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "component") }, r.group({
                "location": r.state_group(
                    {
                        "external": state_constrained(
                            {
                                "import": oc.assert_set(pvs.parameter("imports")),
                            },
                            r.group({
                                "import": r.reference(gvs.dictionary(gvs.option_constraint("import", [])), {
                                    "constrained": pc.property([vst.group("schema"), vst.reference(), vst.group("complexity")], "constrained"),
                                }),
                                "type": r.reference(gvs.dictionary(gvs.reference("import", "constrained", [vst.component(), vst.group("signatures"), vst.group("types"), vst.component()]))),
                            })
                        ),
                        "internal": state(r.reference(gvs.dictionary(gvs.parameter("signatures", [])))),
                    },
                ),
                "signature": r.reference_derived(gvs.state_group("location",
                    reference("Signature"), [])),
                "arguments": r.optional(r.group({
                    "values": r.optional(r.dictionary_linked(
                        'dense',
                        gvs.parent_sibling("signature", [vst.reference(), vst.component(), vst.group("resolved parameters"), vst.reference(), vst.group("values")]),
                        r.state_group({
                            "optional": state(r.component("Optional Value Initialization", null, null)),
                            "required": state(r.component("Guaranteed Value Selection", null, null)),
                            "parameter": state(r.reference(gvs.dictionary(gvs.parameter("signature", [vst.group("resolved parameters"), vst.reference(), vst.group("values")])))),
                        }))
                    ),
                    "lookups": r.optional(r.dictionary_linked(
                        'dense',
                        gvs.parent_sibling("signature", [vst.reference(), vst.component(), vst.group("resolved parameters"), vst.reference(), vst.group("lookups")]),
                        r.state_group({
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
                "constraints": r.component("Property Constraints", {
                    "node": av.required(gvs.sibling("signature", [vst.reference(), vst.component(), vst.group("type"), vst.reference(), vst.group("node"), vst.component(),])),
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
                    "resolver": r.component("Node Resolver",
                        {
                            "linked entry": av.optional(ovi.selection(pvs.optional_value("benchmark",
                                reference("Benchmark"),))),
                            "definition": av.required(gvs.sibling("definition", [vst.reference(), vst.group("node")])),
                            "current dictionary": av.optional(ovi.set(gvs.sibling("definition", []))),
                            "current ordered dictionary": av.optional(ovi.set(gvs.sibling("definition", []))), //FIXME: validate that the dictionary is ordered

                            "types": av.parameter("types"),
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
            "group": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "group") }, r.component("Node Resolver Group",
                {
                    "definition": av.required(gvs.option_constraint("definition", [])),

                    "types": av.parameter("types"),
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

            )),
            "list": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "list") }, r.group({
                "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                "result": r.optional(
                    r.component("Node Resolver List Result", {
                        "imports": av.parameter("imports"),
                    }, {
                        "types": al.dictionary(gvs.parameter("types", [])),
                    }),
                ),
                "resolver": r.component("Node Resolver",
                    {
                        "list cursor": av.optional(ovi.set(gvs.optional_value("result",
                            reference("Node Resolver List Result"), [vst.component()]))),
                        "definition": av.required(gvs.option_constraint("definition", [vst.group("node")])),

                        "types": av.parameter("types"),
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
            "nothing": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "nothing") }, r.nothing()),
            "number": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "number") }, r.nothing()),
            "optional": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "optional") }, r.group({
                "constraints": r.component("Option Constraints", null, null),
                "resolver": r.component("Node Resolver",
                    {
                        "definition": av.required(gvs.option_constraint("definition", [vst.component()])),

                        "types": av.parameter("types"),
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
            "reference": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "reference") }, r.group({
                "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                "type": r.state_group({
                    "derived": state_constrained({ "definition": oc.state(gvs.sibling("definition", [vst.reference(), vst.group("type")]), "derived") }, r.group({
                        "value": r.component("Guaranteed Value Selection", null, null),
                    })),
                    "selected": state_constrained({ "definition": oc.state(gvs.sibling("definition", [vst.reference(), vst.group("type")]), "selected") }, r.group({
                        "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                        "lookup": r.component("Lookup Selection", null, null),
                        "constraints": r.component("Property Constraints", {
                            "node": av.required(gvs.sibling("lookup", [vst.component(), vst.group("resulting dictionary"), vst.reference(), vst.group("node")])),
                        }, {})
                    })),
                }),
            }),),
            "state group": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "state group") }, r.group({
                "definition": r.reference_derived(gvs.option_constraint("definition", [])),
                "states": r.dictionary_linked(
                    'dense',
                    gvs.option_constraint("definition", []),
                    r.group({
                        "constraints": r.component("Option Constraints", null, null),
                        "resolver": r.component("Node Resolver",
                            {
                                "definition": av.required(gvs.linked_entry([ vst.group("node")])),

                                "types": av.parameter("types"),
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
            "text": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "text") }, r.nothing()),
            // "type parameter": state_constrained({ "definition": oc.state(gvs.parameter("definition", []), "type parameter") }, r.nothing()),
        })),

        "Resolve Logic": resolver(r.group({
            "signatures": r.group({
                "types": r.component("Signatures", {
                    "types": av.parameter("types"),
                    "imports": av.parameter("imports"),
                }, {
                }),
            }),
            "resolvers": r.component("Resolvers", {
                "signatures": av.required(gvs.sibling("signatures", [vst.group("types")])),
                "types": av.parameter("types"),
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

        "Type Specification": resolver(r.group({
            "schema": r.component("Schema Tree", {}, {
                "sibling schemas": al.empty_stack(),
            }),
            "schema path": r.list(r.text()),
            "type": r.text(),
        })),


        "Schema Tree": resolver(r.state_group({
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
            "types": r.component("Types", {
                "globals": av.optional(ovi.set(gvs.sibling("globals", []))),
                "imports": av.optional(ovi.set(gvs.sibling("imports", [vst.component()]))),
            }, {
            }),
            "complexity": r.state_group({
                "constrained": state(r.component("Resolve Logic", {
                    "imports": av.required(gvs.sibling("imports", [vst.component()])),
                    "types": av.required(gvs.sibling("types", [vst.component()])),
                }, {})),
                "unconstrained": state(r.nothing()),
            }),
        })),

        "Imports": resolver(r.dictionary(r.group({
            "schema set child": r.reference_stack(ls.parameter("sibling schemas"), {
                "schema": pc.property([vst.component()], "schema"),
            }),
            "schema": r.reference_derived(gvs.reference("schema set child", "schema", [])),
        }))),
    }
)