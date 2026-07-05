
import * as sh from "../../../../../shorthands/schema/manual.js"



export const $ = sh.modules(
    {

        "Package Set": sh.module_(sh.t.dictionary(sh.t.state({
            "package": sh.toption(sh.t.component("Package")),
            "set": sh.toption(sh.t.component("Package Set")),
        }))),

        "Package": sh.module_(sh.t.group({
            "specials": sh.prop(sh.t.group({
                "abort": sh.prop(sh.t.simple("boolean")),
                "change context": sh.toption(sh.t.simple("boolean")),
                "implement me": sh.prop(sh.t.simple("boolean")),
                "iterate": sh.prop(sh.t.simple("boolean")),
                "lookups": sh.prop(sh.t.simple("boolean")),
                "list from text": sh.prop(sh.t.simple("boolean")),
                "text from list": sh.prop(sh.t.simple("boolean")),
                "unreachable code path": sh.prop(sh.t.simple("boolean")),
                "variables": sh.prop(sh.t.simple("boolean")),
            })),
            "type imports": sh.prop(sh.t.component_external("interface", "Imports")),
            "variable imports": sh.prop(sh.t.dictionary(sh.t.group({
                "tail": sh.prop(sh.t.list(sh.t.text_global("TBD"))),
                "type": sh.prop(sh.t.state({
                    "ancestor": sh.toption(sh.t.group({
                        "dependency": sh.prop(sh.t.text_global("TBD")),
                        "number of steps": sh.prop(sh.t.simple("Natural")),
                    })),
                    "external": sh.toption(sh.t.text_global("TBD")),
                    "sibling": sh.toption(sh.t.text_global("TBD")),
                })),
            }))),
            "functions": sh.prop(sh.t.dictionary(sh.t.group({
                "type": sh.prop(sh.t.group({
                    "import": sh.prop(sh.t.text_global("TBD")),
                    "type": sh.prop(sh.t.text_global("TBD")),
                })),
                "expression": sh.prop(sh.t.component("Assign")),
                "temp has abort": sh.prop(sh.t.simple("boolean")),
                "temp has lookups": sh.prop(sh.t.simple("boolean")),
                "temp has parameters": sh.prop(sh.t.simple("boolean")),
            }))),
        })),

        "Temp Value Type Specification": sh.module_(sh.t.group({
            "type": sh.prop(sh.t.group({
                "import": sh.prop(sh.t.text_global("TBD")),
                "type": sh.prop(sh.t.text_global("TBD")),
            })),
            "sub selection": sh.prop(sh.t.list(sh.t.state({
                "dictionary": sh.toption(sh.t.nothing()),
                "group": sh.toption(sh.t.text_global("TBD")),
                "list": sh.toption(sh.t.nothing()),
                "optional": sh.toption(sh.t.nothing()),
                "state": sh.toption(sh.t.text_global("TBD")),
            }))),
        })),

        "Assign": sh.module_(sh.t.state({
            "decide": sh.toption(sh.t.group({
                "source": sh.prop(sh.t.component("Select Value")),
                "type": sh.prop(sh.t.state({
                    "boolean": sh.toption(sh.t.group({
                        "temp resulting node": sh.prop(sh.t.optional(sh.t.component("Temp Value Type Specification"))),
                        "if false": sh.prop(sh.t.component("Assign")),
                        "if true": sh.prop(sh.t.component("Assign")),
                    })),
                    "optional": sh.toption(sh.t.group({
                        "temp resulting node": sh.prop(sh.t.optional(sh.t.component("Temp Value Type Specification"))),
                        "if not set": sh.prop(sh.t.component("Assign")),
                        "if set": sh.prop(sh.t.component("Assign")),
                    })),
                    "state": sh.toption(sh.t.group({
                        "temp resulting node": sh.prop(sh.t.optional(sh.t.component("Temp Value Type Specification"))),
                        "type": sh.prop(sh.t.state({
                            "partial": sh.toption(sh.t.group({
                                "options": sh.prop(sh.t.dictionary(sh.t.component("Assign"))),
                                "default": sh.prop(sh.t.component("Assign")),
                            })),
                            "full": sh.toption(sh.t.group({
                                "options": sh.prop(sh.t.dictionary(sh.t.component("Assign"))),
                            })),
                            "single": sh.toption(sh.t.group({
                                "option": sh.prop(sh.t.text_global("Identifier")),
                                "if true": sh.prop(sh.t.component("Assign")),
                                "if false": sh.prop(sh.t.component("Assign")),
                            })),
                        })),
                    })),
                    "text": sh.toption(sh.t.group({
                        "temp resulting node": sh.prop(sh.t.optional(sh.t.component("Temp Value Type Specification"))),
                        "cases": sh.prop(sh.t.dictionary(sh.t.component("Assign"))),
                        "default": sh.prop(sh.t.component("Assign")),
                    })),
                })),
            })),
            "construct": sh.toption(sh.t.state({
                "boolean": sh.toption(sh.t.state({
                    "literal": sh.toption(sh.t.state({
                        "false": sh.toption(sh.t.nothing()),
                        "true": sh.toption(sh.t.nothing()),
                    })),
                    "from": sh.toption(sh.t.group({
                        "selection": sh.prop(sh.t.component("Select Value")),
                        "type": sh.prop(sh.t.state({
                            "boolean": sh.toption(sh.t.state({
                                "not": sh.toption(sh.t.nothing()),
                                "copy": sh.toption(sh.t.nothing()),
                            })),
                            "dictionary": sh.toption(sh.t.state({
                                "is empty": sh.toption(sh.t.nothing()),
                            })),
                            "list": sh.toption(sh.t.state({
                                "is empty": sh.toption(sh.t.nothing()),
                            })),
                        })),
                    })),
                })),
                "dictionary": sh.toption(sh.t.state({
                    "literal": sh.toption(sh.t.dictionary(sh.t.component("Assign"))),
                    "from": sh.toption(sh.t.group({
                        "selection": sh.prop(sh.t.component("Select Value")),
                        "type": sh.prop(sh.t.state({
                            "dictionary": sh.toption(sh.t.state({
                                "filter": sh.toption(sh.t.group({
                                    "assign entry": sh.prop(sh.t.component("Assign"))
                                })),
                                "map": sh.toption(sh.t.group({
                                    "assign entry": sh.prop(sh.t.component("Assign"))
                                })),
                                "resolve": sh.toption(sh.t.group({
                                    "assign entry": sh.prop(sh.t.component("Assign")),
                                    "temp resulting entry node": sh.prop(sh.t.component("Temp Value Type Specification")),
                                })),
                            })),
                            "list": sh.toption(sh.t.state({
                                "convert": sh.toption(sh.t.group({
                                    "assign id": sh.prop(sh.t.component("Assign")),
                                    "assign entry": sh.prop(sh.t.component("Assign")),
                                    "abort": sh.prop(sh.t.component("Assign")),
                                })),
                            })),
                        })),
                    })),
                })),
                "group": sh.toption(sh.t.state({
                    "literal": sh.toption(sh.t.group({
                        "properties": sh.prop(sh.t.dictionary(sh.t.component("Assign"))),
                        "have dependencies": sh.prop(sh.t.simple("boolean")),
                    })),
                })),
                "list": sh.toption(sh.t.state({
                    "literal": sh.toption(sh.t.list(sh.t.component("Assign"))),
                    "from": sh.toption(sh.t.group({
                        "selection": sh.prop(sh.t.component("Select Value")),
                        "type": sh.prop(sh.t.state({
                            "dictionary": sh.toption(sh.t.state({
                                "convert": sh.toption(sh.t.group({
                                    "assign entry": sh.prop(sh.t.component("Assign")),
                                })),
                            })),
                            "list": sh.toption(sh.t.state({
                                "filter": sh.toption(sh.t.group({
                                    "assign item": sh.prop(sh.t.component("Assign"))
                                })),
                                "map": sh.toption(sh.t.group({
                                    "assign item": sh.prop(sh.t.component("Assign"))
                                })),
                                "map with state": sh.toption(sh.t.group({
                                    "initialize state": sh.prop(sh.t.component("Assign")),
                                    "assign item": sh.prop(sh.t.component("Assign")),
                                    "update state": sh.prop(sh.t.component("Assign")),
                                    "wrap up": sh.prop(sh.t.component("Assign")),
                                })),
                                "reduce": sh.toption(sh.t.group({
                                    "initialize state": sh.prop(sh.t.component("Assign")),
                                    "assign item": sh.prop(sh.t.component("Assign")),
                                })),
                                "reverse": sh.toption(sh.t.nothing()),
                            })),
                        })),
                    })),
                })),
                "nothing": sh.toption(sh.t.nothing()),
                "number": sh.toption(sh.t.state({
                    "approximation": sh.toption(sh.t.state({
                        "literal": sh.toption(sh.t.simple("Approximation")),
                        "copy": sh.toption(sh.t.component("Select Value")),
                    })),
                    "integer": sh.toption(sh.t.state({
                        "copy": sh.toption(sh.t.component("Select Value")),
                        "divide": sh.toption(sh.t.group({
                            "assign dividend": sh.prop(sh.t.component("Select Value")),
                            "assign divisor": sh.prop(sh.t.component("Select Value")),
                            "abort": sh.prop(sh.t.component("Assign")),
                        })),
                        "literal": sh.toption(sh.t.simple("Integer")),
                    })),
                    "natural": sh.toption(sh.t.state({
                        "literal": sh.toption(sh.t.simple("Natural")),
                        "copy": sh.toption(sh.t.component("Select Value")),
                        "number of dictionary entries": sh.toption(sh.t.group({
                            "dictionary": sh.prop(sh.t.component("Select Value"))
                        })),
                        "number of list items": sh.toption(sh.t.group({
                            "list": sh.prop(sh.t.component("Select Value"))
                        })),
                        "source column": sh.toption(sh.t.nothing()),
                        "source line": sh.toption(sh.t.nothing()),
                    })),
                })),
                "optional": sh.toption(sh.t.state({
                    "literal": sh.toption(sh.t.state({
                        "not set": sh.toption(sh.t.nothing()),
                        "set": sh.toption(sh.t.component("Assign")),
                    })),
                    "from": sh.toption(sh.t.group({
                        "selection": sh.prop(sh.t.component("Select Value")),
                        "type": sh.prop(sh.t.state({
                            "boolean": sh.toption(sh.t.state({
                                "convert": sh.toption(sh.t.group({
                                    "assign set": sh.prop(sh.t.component("Assign")),
                                })),
                            })),
                            "optional": sh.toption(sh.t.state({
                                "map": sh.toption(sh.t.group({
                                    "assign set": sh.prop(sh.t.component("Assign"))
                                })),
                            })),
                        })),
                    })),
                })),
                "state": sh.toption(sh.t.state({
                    "literal": sh.toption(sh.t.group({
                        "option": sh.prop(sh.t.text_global("Identifier")),
                        "assign option": sh.prop(sh.t.component("Assign")),
                    }))
                })),
                "text": sh.toption(sh.t.state({
                    "literal": sh.toption(sh.t.group({
                        "type": sh.prop(sh.t.state({
                            "identifier": sh.toption(sh.t.nothing()),
                            "freeform": sh.toption(sh.t.nothing()),
                        })),
                        "value": sh.prop(sh.t.text_global("text")),
                    })),
                    "from": sh.toption(sh.t.group({
                        "selection": sh.prop(sh.t.component("Select Value")),
                        "type": sh.prop(sh.t.state({
                            "text": sh.toption(sh.t.state({
                                "copy": sh.toption(sh.t.nothing()),
                            })),
                        })),
                    })),
                    "source document": sh.toption(sh.t.nothing()),
                    "entry id": sh.toption(sh.t.nothing()),
                    "option name": sh.toption(sh.t.nothing()),
                })),
            })),
            "select": sh.toption(sh.t.component("Select Value")),
            "special": sh.toption(sh.t.state({
                "abort": sh.toption(sh.t.component("Assign")),
                "assert": sh.toption(sh.t.group({
                    "tester": sh.prop(sh.t.component("Assign")),
                    "normal flow": sh.prop(sh.t.component("Assign")),
                })),
                "change context": sh.toption(sh.t.group({
                    "new context": sh.prop(sh.t.component("Select Value")),
                    "expression": sh.prop(sh.t.component("Assign")),
                })),
                "variables": sh.toption(sh.t.group({
                    "variables": sh.prop(sh.t.dictionary(sh.t.component("Assign"))),
                    "assign": sh.prop(sh.t.component("Assign")),
                })),
                "implement me": sh.toption(sh.t.text_global("text")),
                "iterate": sh.toption(sh.t.group({
                    "list": sh.prop(sh.t.component("Select Value")),
                    "assign": sh.prop(sh.t.component("Assign")),
                })),
                "unreachable": sh.toption(sh.t.group({
                    "explanation": sh.prop(sh.t.text_global("text")),
                })),
            })),
        })),

        "Select Value": sh.module_(sh.t.state({
            "implement me": sh.toption(sh.t.text_global("text")),
            "regular": sh.toption(sh.t.group({
                "start": sh.prop(sh.t.state({
                    "call": sh.toption(sh.t.group({
                        "source": sh.prop(sh.t.state({
                            "local": sh.toption(sh.t.text_global("TBD")),
                            "imported": sh.toption(sh.t.group({
                                "import": sh.prop(sh.t.text_global("TBD")),
                                "variable": sh.prop(sh.t.text_global("TBD")),
                            }))
                        })),
                        "context": sh.prop(sh.t.component("Assign")),
                        "abort": sh.prop(sh.t.optional(sh.t.component("Assign"))),
                        "lookups": sh.prop(sh.t.optional(sh.t.state({
                            "initialize": sh.toption(sh.t.dictionary(sh.t.component("Select Lookup"))),
                            "pass through": sh.toption(sh.t.nothing()),
                        }))),
                        "arguments": sh.prop(sh.t.optional(sh.t.state({
                            "initialize": sh.toption(sh.t.dictionary(sh.t.component("Assign"))),
                            "pass through": sh.toption(sh.t.nothing()),
                        }))),
                    })),
                    "context": sh.toption(sh.t.nothing()),
                    "dictionary entry": sh.toption(sh.t.group({
                        "dictionary": sh.prop(sh.t.component("Select Value")),
                        "id": sh.prop(sh.t.component("Assign")),
                        "no such entry handler": sh.prop(sh.t.component("Assign")),
                    })),
                    "list from text": sh.toption(sh.t.group({
                        "source": sh.prop(sh.t.component("Select Value")),
                        "assign item": sh.prop(sh.t.component("Assign")),
                    })),
                    "lookup entry": sh.toption(sh.t.group({
                        "lookup": sh.prop(sh.t.component("Select Lookup")),
                        "id": sh.prop(sh.t.component("Assign")),
                        "type": sh.prop(sh.t.state({
                            "acyclic": sh.toption(sh.t.group({
                                "abort handlers": sh.prop(sh.t.group({
                                    "no such entry": sh.prop(sh.t.component("Assign")),
                                    "no context lookup": sh.prop(sh.t.component("Assign")),
                                    "cycle detected": sh.prop(sh.t.component("Assign")),
                                })),
                            })),
                            "cyclic": sh.toption(sh.t.group({
                                "abort handlers": sh.prop(sh.t.group({
                                    "no such entry": sh.prop(sh.t.component("Assign")),
                                    "no context lookup": sh.prop(sh.t.component("Assign")),
                                    "accessing cyclic sibling before it is resolved": sh.prop(sh.t.component("Assign")),
                                })),
                            })),
                            "stack": sh.toption(sh.t.group({
                                "abort handlers": sh.prop(sh.t.group({
                                    "no such entry": sh.prop(sh.t.component("Assign")),
                                    "no context lookup": sh.prop(sh.t.component("Assign")),
                                    "cycle detected": sh.prop(sh.t.component("Assign")),
                                })),
                            })),
                        }))
                    })),
                    "lookup entry depth": sh.toption(sh.t.group({
                        "lookup": sh.prop(sh.t.component("Select Lookup")),
                        "id": sh.prop(sh.t.component("Assign")),
                        "abort handlers": sh.prop(sh.t.group({
                            "no such entry": sh.prop(sh.t.component("Assign")),
                            "no context lookup": sh.prop(sh.t.component("Assign")),
                            "cycle detected": sh.prop(sh.t.component("Assign")),
                        })),
                    })),
                    "parameter": sh.toption(sh.t.text_global("TBD")),
                    "parent sibling": sh.toption(sh.t.text_global("TBD")),
                    "sibling": sh.toption(sh.t.text_global("TBD")),
                    "state": sh.toption(sh.t.nothing()),
                    "text from list": sh.toption(sh.t.group({
                        "source": sh.prop(sh.t.component("Select Value")),
                        "assign character": sh.prop(sh.t.component("Assign")),
                    })),
                    "variable": sh.toption(sh.t.text_global("TBD")),
                })),
                "tail": sh.prop(sh.t.list(sh.t.text_global("TBD"))),
            }))
        })),

        "Select Lookup": sh.module_(sh.t.state({
            "implement me": sh.toption(sh.t.text_global("text")),
            "from parameter": sh.toption(sh.t.text_global("TBD")),
            "stack": sh.toption(sh.t.state({
                "empty": sh.toption(sh.t.nothing()),
                "push": sh.toption(sh.t.group({
                    "stack": sh.prop(sh.t.component("Select Lookup")),
                    "acyclic": sh.toption(sh.t.component("Select Lookup")),
                })),
            })),
            "acyclic": sh.toption(sh.t.state({
                "not set": sh.toption(sh.t.nothing()),
                "siblings": sh.toption(sh.t.nothing()),
                "resolved dictionary": sh.toption(sh.t.component("Select Value")),
            })),
            "cyclic": sh.toption(sh.t.state({
                "not set": sh.toption(sh.t.nothing()),
                "siblings": sh.toption(sh.t.nothing()),
            })),
        })),

    }
)