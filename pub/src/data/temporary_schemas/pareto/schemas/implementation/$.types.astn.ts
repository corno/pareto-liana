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
                "expression": prop(t.component("Expression")),
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

        "Expression": module_(t.state({
            "decide": toption(t.group({
                "type": prop(t.state({
                    "boolean": toption(t.group({
                        "source": prop(t.component("Value Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Value Type Specification"))),
                        "if false": prop(t.component("Expression")),
                        "if true": prop(t.component("Expression")),
                    })),
                    "dictionary": toption(t.state({
                        "has entries": toption(t.group({
                            "dictionary": prop(t.component("Value Selection")),
                            "if true": prop(t.component("Expression")),
                            "if false": prop(t.component("Expression")),
                        }))
                    })),
                    "list": toption(t.state({
                        "has first item": toption(t.group({
                            "list": prop(t.component("Value Selection")),
                            "if true": prop(t.component("Expression")),
                            "if false": prop(t.component("Expression")),
                        })),
                        "has last item": toption(t.group({
                            "list": prop(t.component("Value Selection")),
                            "if true": prop(t.component("Expression")),
                            "if false": prop(t.component("Expression")),
                        })),
                        "has items": toption(t.group({
                            "list": prop(t.component("Value Selection")),
                            "if true": prop(t.component("Expression")),
                            "if false": prop(t.component("Expression")),
                        }))
                    })),
                    "optional": toption(t.group({
                        "source": prop(t.component("Value Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Value Type Specification"))),
                        "if not set": prop(t.component("Expression")),
                        "if set": prop(t.component("Expression")),
                    })),
                    "state": toption(t.group({
                        "source": prop(t.component("Value Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Value Type Specification"))),
                        "type": prop(t.state({
                            "partial": toption(t.group({
                                "options": prop(t.dictionary(t.component("Expression"))),
                                "default": prop(t.component("Expression")),
                            })),
                            "full": toption(t.group({
                                "options": prop(t.dictionary(t.component("Expression"))),
                            })),
                            "single": toption(t.group({
                                "option": prop(t.text_global("Identifier")),
                                "if true": prop(t.component("Expression")),
                                "if false": prop(t.component("Expression")),
                            })),
                        })),
                    })),
                    "text": toption(t.group({
                        "source": prop(t.component("Value Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Value Type Specification"))),
                        "cases": prop(t.dictionary(t.component("Expression"))),
                        "default": prop(t.component("Expression")),
                    })),
                })),
            })),
            "construct": toption(t.state({
                "boolean": toption(t.state({
                    "literal": toption(t.state({
                        "false": toption(t.nothing()),
                        "true": toption(t.nothing()),
                    })),
                    "source": toption(t.group({
                        "selection": prop(t.component("Value Selection")),
                        "type": prop(t.state({
                            "boolean": toption(t.state({
                                "not": toption(t.nothing()),
                                "copy": toption(t.nothing()),
                            })),
                            "dictionary": toption(t.state({
                                "is empty": toption(t.component("Value Selection")),
                            })),
                            "list": toption(t.state({
                                "is empty": toption(t.component("Value Selection")),
                            })),
                        })),
                    })),
                })),
                "dictionary": toption(t.state({
                    "literal": toption(t.dictionary(t.component("Expression"))),
                    "source": toption(t.group({
                        "selection": prop(t.component("Value Selection")),
                        "type": prop(t.state({
                            "dictionary": toption(t.state({
                                "filter": toption(t.group({
                                    "assign entry": prop(t.component("Expression"))
                                })),
                                "map": toption(t.group({
                                    "assign entry": prop(t.component("Expression"))
                                })),
                                "resolve": toption(t.group({
                                    "assign entry": prop(t.component("Expression")),
                                    "temp resulting entry node": prop(t.component("Temp Value Type Specification")),
                                })),
                            })),
                            "list": toption(t.state({
                                "convert": toption(t.group({
                                    "assign id": prop(t.component("Expression")),
                                    "assign entry": prop(t.component("Expression")),
                                    "abort": prop(t.component("Expression")),
                                })),
                            })),
                        })),
                    })),
                })),
                "group": toption(t.state({
                    "literal": toption(t.group({
                        "properties": prop(t.dictionary(t.component("Expression"))),
                        "have dependencies": prop(t.boolean()),
                    })),
                })),
                "list": toption(t.state({
                    "literal": toption(t.list(t.component("Expression"))),
                    "source": toption(t.group({
                        "selection": prop(t.component("Value Selection")),
                        "type": prop(t.state({
                            "dictionary": toption(t.state({
                                "convert": toption(t.group({
                                    "assign entry": prop(t.component("Expression")),
                                })),
                            })),
                            "group": toption(t.state({

                            })),
                            "list": toption(t.state({
                                "filter": toption(t.group({
                                    "assign item": prop(t.component("Expression"))
                                })),
                                "map": toption(t.group({
                                    "assign item": prop(t.component("Expression"))
                                })),
                                "map with state": toption(t.group({
                                    "initialize state": prop(t.component("Expression")),
                                    "assign item": prop(t.component("Expression")),
                                    "update state": prop(t.component("Expression")),
                                    "wrap up": prop(t.component("Expression")),
                                })),
                                "reduce": toption(t.group({
                                    "initialize state": prop(t.component("Expression")),
                                    "assign item": prop(t.component("Expression")),
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
                        "copy": toption(t.component("Value Selection")),
                    })),
                    "integer": toption(t.state({
                        "copy": toption(t.component("Value Selection")),
                        "divide": toption(t.group({
                            "assign dividend": prop(t.component("Value Selection")),
                            "assign divisor": prop(t.component("Value Selection")),
                            "abort": prop(t.component("Expression")),
                        })),
                        "literal": toption(t.number_local(n.integer(null))),
                    })),
                    "natural": toption(t.state({
                        "literal": toption(t.number_local(n.natural(null))),
                        "copy": toption(t.component("Value Selection")),
                        "number of dictionary entries": toption(t.group({
                            "dictionary": prop(t.component("Value Selection"))
                        })),
                        "number of list items": toption(t.group({
                            "list": prop(t.component("Value Selection"))
                        })),
                        "source column": toption(t.nothing()),
                        "source line": toption(t.nothing()),
                    })),
                })),
                "optional": toption(t.state({
                    "literal": toption(t.state({
                        "not set": toption(t.nothing()),
                        "set": toption(t.component("Expression")),
                    })),
                    "source": toption(t.group({
                        "selection": prop(t.component("Value Selection")),
                        "type": prop(t.state({
                            "boolean": toption(t.state({
                                "convert": toption(t.group({
                                    "assign set": prop(t.component("Expression")),
                                })),
                            })),
                            "optional": toption(t.state({
                                "map": toption(t.group({
                                    "assign set": prop(t.component("Expression"))
                                })),
                            })),
                        })),
                    })),
                })),
                "state": toption(t.state({
                    "literal": toption(t.group({
                        "option": prop(t.text_global("Identifier")),
                        "assign option": prop(t.component("Expression")),
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
                    "source": toption(t.group({
                        "selection": prop(t.component("Value Selection")),
                        "type": prop(t.state({
                            "text": toption(t.state({
                                "copy": toption(t.nothing()),
                            })),
                        })),
                    })),
                    "source document": toption(t.nothing()),
                })),
            })),
            "select": toption(t.component("Value Selection")),
            "special": toption(t.state({
                "abort": toption(t.component("Expression")),
                "assert": toption(t.group({
                    "tester": prop(t.component("Expression")),
                    "normal flow": prop(t.component("Expression")),
                })),
                "change context": toption(t.group({
                    "new context": prop(t.component("Value Selection")),
                    "expression": prop(t.component("Expression")),
                })),
                "variables": toption(t.group({
                    "variables": prop(t.dictionary(t.component("Expression"))),
                    "assign": prop(t.component("Expression")),
                })),
                "implement me": toption(t.text_local(text('single line'))),
                "iterate": toption(t.group({
                    "list": prop(t.component("Value Selection")),
                    "assign": prop(t.component("Expression")),
                })),
                "unreachable": toption(t.group({
                    "explanation": prop(t.text_local(text('single line'))),
                })),
            })),
        })),

        "Value Selection": module_(t.state({
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
                        "context": prop(t.component("Expression")),
                        "abort": prop(t.optional(t.component("Expression"))),
                        "lookups": prop(t.optional(t.state({
                            "initialize": toption(t.dictionary(t.component("Lookup Selection"))),
                            "pass through": toption(t.nothing()),
                        }))),
                        "arguments": prop(t.optional(t.state({
                            "initialize": toption(t.dictionary(t.component("Expression"))),
                            "pass through": toption(t.nothing()),
                        }))),
                    })),
                    "context": toption(t.nothing()),
                    "dictionary entry": toption(t.group({
                        "dictionary": prop(t.component("Value Selection")),
                        "id": prop(t.component("Expression")),
                        "abort handler": prop(t.component("Expression")),
                    })),
                    "list from text": toption(t.group({
                        "source": prop(t.component("Expression")),
                        "assign item": prop(t.component("Expression")),
                    })),
                    "lookup entry": toption(t.group({
                        "lookup": prop(t.component("Lookup Selection")),
                        "id": prop(t.component("Expression")),
                        "abort handlers": prop(t.group({
                            "no such entry": prop(t.component("Expression")),
                            "no context lookup": prop(t.component("Expression")),
                            "cycle detected": prop(t.component("Expression")),
                        })),
                    })),
                    "lookup entry depth": toption(t.group({
                        "lookup": prop(t.component("Lookup Selection")),
                        "id": prop(t.component("Expression")),
                        "abort handlers": prop(t.group({
                            "no such entry": prop(t.component("Expression")),
                            "no context lookup": prop(t.component("Expression")),
                            "cycle detected": prop(t.component("Expression")),
                        })),
                    })),
                    "parameter": toption(t.text_global("TBD")),
                    "parent sibling": toption(t.text_global("TBD")),
                    "sibling": toption(t.text_global("TBD")),
                    "state": toption(t.nothing()),
                    "text from list": toption(t.group({
                        "source": prop(t.component("Expression")),
                        "assign character": prop(t.component("Expression")),
                    })),
                    "variable": toption(t.text_global("TBD")),
                })),
                "tail": prop(t.list(t.text_global("TBD"))),
            }))
        })),

        "Lookup Selection": module_(t.state({
            "implement me": toption(t.text_local(text('single line'))),
            "from parameter": toption(t.text_global("TBD")),
            "stack": toption(t.state({
                "empty": toption(t.nothing()),
                "push": toption(t.group({
                    "stack": prop(t.component("Lookup Selection")),
                    "acyclic": toption(t.component("Lookup Selection")),
                })),
            })),
            "acyclic": toption(t.state({
                "not set": toption(t.nothing()),
                "siblings": toption(t.nothing()),
                "resolved dictionary": toption(t.component("Value Selection")),
            })),
            "cyclic": toption(t.state({
                "not set": toption(t.nothing()),
                "siblings": toption(t.nothing()),
            })),
        })),

    }
)