import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Package Set": module_(t.dictionary(t.state({
            "package": toption(t.component("Package")),
            "set": toption(t.component("Package Set")),
        }))),

        "Package": module_(t.group({
            "specials": prop(t.group({
                "abort": prop(t.boolean()),
                "change context": toption(t.boolean()),
                "implement me": prop(t.boolean()),
                "iterate": prop(t.boolean()),
                "lookups": prop(t.boolean()),
                "list from text": prop(t.boolean()),
                "text from list": prop(t.boolean()),
                "unreachable code path": prop(t.boolean()),
                "variables": prop(t.boolean()),
            })),
            "type imports": prop(t.component_external("interface", "Imports")),
            "variable imports": prop(t.dictionary(t.group({
                "tail": prop(t.list(t.text_global("TBD"))),
                "type": prop(t.state({
                    "ancestor": toption(t.group({
                        "dependency": prop(t.text_global("TBD")),
                        "number of steps": prop(t.number_local(n.natural(null))),
                    })),
                    "external": toption(t.text_global("TBD")),
                    "sibling": toption(t.text_global("TBD")),
                })),
            }))),
            "functions": prop(t.dictionary(t.group({
                "type": prop(t.group({
                    "import": prop(t.text_global("TBD")),
                    "type": prop(t.text_global("TBD")),
                })),
                "expression": prop(t.component("Assign")),
                "temp has abort": prop(t.boolean()),
                "temp has lookups": prop(t.boolean()),
                "temp has parameters": prop(t.boolean()),
            }))),
        })),

        "Temp Value Type Specification": module_(t.group({
            "type": prop(t.group({
                "import": prop(t.text_global("TBD")),
                "type": prop(t.text_global("TBD")),
            })),
            "sub selection": prop(t.list(t.state({
                "dictionary": toption(t.nothing()),
                "group": toption(t.text_global("TBD")),
                "list": toption(t.nothing()),
                "optional": toption(t.nothing()),
                "state": toption(t.text_global("TBD")),
            }))),
        })),

        "Assign": module_(t.state({
            "decide": toption(t.group({
                "source": prop(t.component("Select Value")),
                "type": prop(t.state({
                    "boolean": toption(t.group({
                        "temp resulting node": prop(t.optional(t.component("Temp Value Type Specification"))),
                        "if false": prop(t.component("Assign")),
                        "if true": prop(t.component("Assign")),
                    })),
                    "dictionary": toption(t.state({
                        "has entries": toption(t.group({
                            "if true": prop(t.component("Assign")),
                            "if false": prop(t.component("Assign")),
                        }))
                    })),
                    "list": toption(t.state({
                        "has first item": toption(t.group({
                            "if true": prop(t.component("Assign")),
                            "if false": prop(t.component("Assign")),
                        })),
                        "has last item": toption(t.group({
                            "if true": prop(t.component("Assign")),
                            "if false": prop(t.component("Assign")),
                        })),
                        "has items": toption(t.group({
                            "if true": prop(t.component("Assign")),
                            "if false": prop(t.component("Assign")),
                        }))
                    })),
                    "optional": toption(t.group({
                        "temp resulting node": prop(t.optional(t.component("Temp Value Type Specification"))),
                        "if not set": prop(t.component("Assign")),
                        "if set": prop(t.component("Assign")),
                    })),
                    "state": toption(t.group({
                        "temp resulting node": prop(t.optional(t.component("Temp Value Type Specification"))),
                        "type": prop(t.state({
                            "partial": toption(t.group({
                                "options": prop(t.dictionary(t.component("Assign"))),
                                "default": prop(t.component("Assign")),
                            })),
                            "full": toption(t.group({
                                "options": prop(t.dictionary(t.component("Assign"))),
                            })),
                            "single": toption(t.group({
                                "option": prop(t.text_global("Identifier")),
                                "if true": prop(t.component("Assign")),
                                "if false": prop(t.component("Assign")),
                            })),
                        })),
                    })),
                    "text": toption(t.group({
                        "temp resulting node": prop(t.optional(t.component("Temp Value Type Specification"))),
                        "cases": prop(t.dictionary(t.component("Assign"))),
                        "default": prop(t.component("Assign")),
                    })),
                })),
            })),
            "construct": toption(t.state({
                "boolean": toption(t.state({
                    "literal": toption(t.state({
                        "false": toption(t.nothing()),
                        "true": toption(t.nothing()),
                    })),
                    "from": toption(t.group({
                        "selection": prop(t.component("Select Value")),
                        "type": prop(t.state({
                            "boolean": toption(t.state({
                                "not": toption(t.nothing()),
                                "copy": toption(t.nothing()),
                            })),
                            "dictionary": toption(t.state({
                                "is empty": toption(t.nothing()),
                            })),
                            "list": toption(t.state({
                                "is empty": toption(t.nothing()),
                            })),
                        })),
                    })),
                })),
                "dictionary": toption(t.state({
                    "literal": toption(t.dictionary(t.component("Assign"))),
                    "from": toption(t.group({
                        "selection": prop(t.component("Select Value")),
                        "type": prop(t.state({
                            "dictionary": toption(t.state({
                                "filter": toption(t.group({
                                    "assign entry": prop(t.component("Assign"))
                                })),
                                "map": toption(t.group({
                                    "assign entry": prop(t.component("Assign"))
                                })),
                                "resolve": toption(t.group({
                                    "assign entry": prop(t.component("Assign")),
                                    "temp resulting entry node": prop(t.component("Temp Value Type Specification")),
                                })),
                            })),
                            "list": toption(t.state({
                                "convert": toption(t.group({
                                    "assign id": prop(t.component("Assign")),
                                    "assign entry": prop(t.component("Assign")),
                                    "abort": prop(t.component("Assign")),
                                })),
                            })),
                        })),
                    })),
                })),
                "group": toption(t.state({
                    "literal": toption(t.group({
                        "properties": prop(t.dictionary(t.component("Assign"))),
                        "have dependencies": prop(t.boolean()),
                    })),
                })),
                "list": toption(t.state({
                    "literal": toption(t.list(t.component("Assign"))),
                    "from": toption(t.group({
                        "selection": prop(t.component("Select Value")),
                        "type": prop(t.state({
                            "dictionary": toption(t.state({
                                "convert": toption(t.group({
                                    "assign entry": prop(t.component("Assign")),
                                })),
                            })),
                            "list": toption(t.state({
                                "filter": toption(t.group({
                                    "assign item": prop(t.component("Assign"))
                                })),
                                "map": toption(t.group({
                                    "assign item": prop(t.component("Assign"))
                                })),
                                "map with state": toption(t.group({
                                    "initialize state": prop(t.component("Assign")),
                                    "assign item": prop(t.component("Assign")),
                                    "update state": prop(t.component("Assign")),
                                    "wrap up": prop(t.component("Assign")),
                                })),
                                "reduce": toption(t.group({
                                    "initialize state": prop(t.component("Assign")),
                                    "assign item": prop(t.component("Assign")),
                                })),
                                "reverse": toption(t.nothing()),
                            })),
                        })),
                    })),
                })),
                "nothing": toption(t.nothing()),
                "number": toption(t.state({
                    "approximation": toption(t.state({
                        "literal": toption(t.number_local(n.approximation(10))),
                        "copy": toption(t.component("Select Value")),
                    })),
                    "integer": toption(t.state({
                        "copy": toption(t.component("Select Value")),
                        "divide": toption(t.group({
                            "assign dividend": prop(t.component("Select Value")),
                            "assign divisor": prop(t.component("Select Value")),
                            "abort": prop(t.component("Assign")),
                        })),
                        "literal": toption(t.number_local(n.integer(null))),
                    })),
                    "natural": toption(t.state({
                        "literal": toption(t.number_local(n.natural(null))),
                        "copy": toption(t.component("Select Value")),
                        "number of dictionary entries": toption(t.group({
                            "dictionary": prop(t.component("Select Value"))
                        })),
                        "number of list items": toption(t.group({
                            "list": prop(t.component("Select Value"))
                        })),
                        "source column": toption(t.nothing()),
                        "source line": toption(t.nothing()),
                    })),
                })),
                "optional": toption(t.state({
                    "literal": toption(t.state({
                        "not set": toption(t.nothing()),
                        "set": toption(t.component("Assign")),
                    })),
                    "from": toption(t.group({
                        "selection": prop(t.component("Select Value")),
                        "type": prop(t.state({
                            "boolean": toption(t.state({
                                "convert": toption(t.group({
                                    "assign set": prop(t.component("Assign")),
                                })),
                            })),
                            "optional": toption(t.state({
                                "map": toption(t.group({
                                    "assign set": prop(t.component("Assign"))
                                })),
                            })),
                        })),
                    })),
                })),
                "state": toption(t.state({
                    "literal": toption(t.group({
                        "option": prop(t.text_global("Identifier")),
                        "assign option": prop(t.component("Assign")),
                    }))
                })),
                "text": toption(t.state({
                    "literal": toption(t.group({
                        "type": prop(t.state({
                            "identifier": toption(t.nothing()),
                            "freeform": toption(t.nothing()),
                        })),
                        "value": prop(t.text_local(text('single line'))),
                    })),
                    "from": toption(t.group({
                        "selection": prop(t.component("Select Value")),
                        "type": prop(t.state({
                            "text": toption(t.state({
                                "copy": toption(t.nothing()),
                            })),
                        })),
                    })),
                    "source document": toption(t.nothing()),
                })),
            })),
            "select": toption(t.component("Select Value")),
            "special": toption(t.state({
                "abort": toption(t.component("Assign")),
                "assert": toption(t.group({
                    "tester": prop(t.component("Assign")),
                    "normal flow": prop(t.component("Assign")),
                })),
                "change context": toption(t.group({
                    "new context": prop(t.component("Select Value")),
                    "expression": prop(t.component("Assign")),
                })),
                "variables": toption(t.group({
                    "variables": prop(t.dictionary(t.component("Assign"))),
                    "assign": prop(t.component("Assign")),
                })),
                "implement me": toption(t.text_local(text('single line'))),
                "iterate": toption(t.group({
                    "list": prop(t.component("Select Value")),
                    "assign": prop(t.component("Assign")),
                })),
                "unreachable": toption(t.group({
                    "explanation": prop(t.text_local(text('single line'))),
                })),
            })),
        })),

        "Select Value": module_(t.state({
            "implement me": toption(t.text_local(text('single line'))),
            "regular": toption(t.group({
                "start": prop(t.state({
                    "call": toption(t.group({
                        "source": prop(t.state({
                            "local": toption(t.text_global("TBD")),
                            "imported": toption(t.group({
                                "import": prop(t.text_global("TBD")),
                                "variable": prop(t.text_global("TBD")),
                            }))
                        })),
                        "context": prop(t.component("Assign")),
                        "abort": prop(t.optional(t.component("Assign"))),
                        "lookups": prop(t.optional(t.state({
                            "initialize": toption(t.dictionary(t.component("Select Lookup"))),
                            "pass through": toption(t.nothing()),
                        }))),
                        "arguments": prop(t.optional(t.state({
                            "initialize": toption(t.dictionary(t.component("Assign"))),
                            "pass through": toption(t.nothing()),
                        }))),
                    })),
                    "context": toption(t.nothing()),
                    "dictionary entry": toption(t.group({
                        "dictionary": prop(t.component("Select Value")),
                        "id": prop(t.component("Assign")),
                        "abort handler": prop(t.component("Assign")),
                    })),
                    "list from text": toption(t.group({
                        "source": prop(t.component("Select Value")),
                        "assign item": prop(t.component("Assign")),
                    })),
                    "lookup entry": toption(t.group({
                        "lookup": prop(t.component("Select Lookup")),
                        "id": prop(t.component("Assign")),
                        "abort handlers": prop(t.group({
                            "no such entry": prop(t.component("Assign")),
                            "no context lookup": prop(t.component("Assign")),
                            "cycle detected": prop(t.component("Assign")),
                        })),
                    })),
                    "lookup entry depth": toption(t.group({
                        "lookup": prop(t.component("Select Lookup")),
                        "id": prop(t.component("Assign")),
                        "abort handlers": prop(t.group({
                            "no such entry": prop(t.component("Assign")),
                            "no context lookup": prop(t.component("Assign")),
                            "cycle detected": prop(t.component("Assign")),
                        })),
                    })),
                    "parameter": toption(t.text_global("TBD")),
                    "parent sibling": toption(t.text_global("TBD")),
                    "sibling": toption(t.text_global("TBD")),
                    "state": toption(t.nothing()),
                    "text from list": toption(t.group({
                        "source": prop(t.component("Select Value")),
                        "assign character": prop(t.component("Assign")),
                    })),
                    "variable": toption(t.text_global("TBD")),
                })),
                "tail": prop(t.list(t.text_global("TBD"))),
            }))
        })),

        "Select Lookup": module_(t.state({
            "implement me": toption(t.text_local(text('single line'))),
            "from parameter": toption(t.text_global("TBD")),
            "stack": toption(t.state({
                "empty": toption(t.nothing()),
                "push": toption(t.group({
                    "stack": prop(t.component("Select Lookup")),
                    "acyclic": toption(t.component("Select Lookup")),
                })),
            })),
            "acyclic": toption(t.state({
                "not set": toption(t.nothing()),
                "siblings": toption(t.nothing()),
                "resolved dictionary": toption(t.component("Select Value")),
            })),
            "cyclic": toption(t.state({
                "not set": toption(t.nothing()),
                "siblings": toption(t.nothing()),
            })),
        })),

    }
)