import * as pi from 'pareto-core/dist/interface'

import { resolver_modules, r, resolver, option } from "../../../../../shorthands/resolver"


export const $ = resolver_modules(
    {

        "Package Set": resolver(r.dictionary(r.state({
            "package": option(r.component("Package", {}, {})),
            "set": option(r.component("Package Set", {}, {})),
        }))),

        "Package": resolver(r.group({
            "specials": r.group({
                "abort": r.simple(),
                "change context": r.simple(),
                "implement me": r.simple(),
                "iterate": r.simple(),
                "lookups": r.simple(),
                "list from text": r.simple(),
                "text from list": r.simple(),
                "unreachable code path": r.simple(),
                "variables": r.simple(),
            }),
            "type imports": r.component_external("interface", "Imports", {}, {}),
            "variable imports": r.dictionary(r.group({
                "tail": r.list(r.text()),
                "type": r.state({
                    "ancestor": option(r.group({
                        "dependency": r.text(),
                        "number of steps": r.simple(),
                    })),
                    "external": option(r.text()),
                    "sibling": option(r.text()),
                }),
            })),
            "functions": r.dictionary(r.group({
                "type": r.group({
                    "import": r.text(),
                    "type": r.text(),
                }),
                "expression": r.component("Assign", {}, {}),
                "temp has abort": r.simple(),
                "temp has lookups": r.simple(),
                "temp has parameters": r.simple(),
            })),
        })),

        "Temp Value Type Specification": resolver(r.group({
            "type": r.group({
                "import": r.text(),
                "type": r.text(),
            }),
            "sub selection": r.list(r.state({
                "dictionary": option(r.nothing()),
                "group": option(r.text()),
                "list": option(r.nothing()),
                "optional": option(r.nothing()),
                "state": option(r.text()),
            })),
        })),

        "Assign": resolver(r.state({
            "decide": option(r.group({
                "source": r.component("Select Value", {}, {}),
                "type": r.state({
                    "boolean": option(r.group({
                        "temp resulting node": r.optional(r.component("Temp Value Type Specification", {}, {})),
                        "if false": r.component("Assign", {}, {}),
                        "if true": r.component("Assign", {}, {}),
                    })),
                    "optional": option(r.group({
                        "temp resulting node": r.optional(r.component("Temp Value Type Specification", {}, {})),
                        "if not set": r.component("Assign", {}, {}),
                        "if set": r.component("Assign", {}, {}),
                    })),
                    "state": option(r.group({
                        "temp resulting node": r.optional(r.component("Temp Value Type Specification", {}, {})),
                        "type": r.state({
                            "partial": option(r.group({
                                "options": r.dictionary(r.component("Assign", {}, {})),
                                "default": r.component("Assign", {}, {}),
                            })),
                            "full": option(r.group({
                                "options": r.dictionary(r.component("Assign", {}, {})),
                            })),
                            "single": option(r.group({
                                "option": r.text(),
                                "if true": r.component("Assign", {}, {}),
                                "if false": r.component("Assign", {}, {}),
                            })),

                        }),
                    })),
                    "text": option(r.group({
                        "temp resulting node": r.optional(r.component("Temp Value Type Specification", {}, {})),
                        "cases": r.dictionary(r.component("Assign", {}, {})),
                        "default": r.component("Assign", {}, {}),
                    })),
                }),
            })),
            "construct": option(r.state({
                "boolean": option(r.state({
                    "literal": option(r.state({
                        "false": option(r.nothing()),
                        "true": option(r.nothing()),
                    })),
                    "from": option(r.group({
                        "selection": r.component("Select Value", {}, {}),
                        "type": r.state({
                            "boolean": option(r.state({
                                "not": option(r.nothing()),
                                "copy": option(r.nothing()),
                            })),
                            "dictionary": option(r.state({
                                "is empty": option(r.nothing()),
                            })),
                            "list": option(r.state({
                                "is empty": option(r.nothing()),
                            })),
                        }),
                    })),
                })),
                "dictionary": option(r.state({
                    "literal": option(r.dictionary(r.component("Assign", {}, {}))),
                    "from": option(r.group({
                        "selection": r.component("Select Value", {}, {}),
                        "type": r.state({
                            "dictionary": option(r.state({
                                "filter": option(r.group({
                                    "assign entry": r.component("Assign", {}, {})
                                })),
                                "map": option(r.group({
                                    "assign entry": r.component("Assign", {}, {})
                                })),
                                "resolve": option(r.group({
                                    "assign entry": r.component("Assign", {}, {}),
                                    "temp resulting entry node": r.component("Temp Value Type Specification", {}, {}),
                                })),
                            })),
                            "list": option(r.state({
                                "convert": option(r.group({
                                    "assign id": r.component("Assign", {}, {}),
                                    "assign entry": r.component("Assign", {}, {}),
                                    "abort": r.component("Assign", {}, {}),
                                })),
                            })),
                        }),
                    })),
                })),
                "group": option(r.state({
                    "literal": option(r.group({
                        "properties": r.dictionary(r.component("Assign", {}, {})),
                        "have dependencies": r.simple(),
                    })),
                })),
                "list": option(r.state({
                    "literal": option(r.list(r.component("Assign", {}, {}))),
                    "from": option(r.group({
                        "selection": r.component("Select Value", {}, {}),
                        "type": r.state({
                            "dictionary": option(r.state({
                                "convert": option(r.group({
                                    "assign entry": r.component("Assign", {}, {}),
                                })),
                            })),
                            "list": option(r.state({
                                "filter": option(r.group({
                                    "assign item": r.component("Assign", {}, {})
                                })),
                                "map": option(r.group({
                                    "assign item": r.component("Assign", {}, {})
                                })),
                                "map with state": option(r.group({
                                    "initialize state": r.component("Assign", {}, {}),
                                    "assign item": r.component("Assign", {}, {}),
                                    "update state": r.component("Assign", {}, {}),
                                    "wrap up": r.component("Assign", {}, {}),
                                })),
                                "reduce": option(r.group({
                                    "initialize state": r.component("Assign", {}, {}),
                                    "assign item": r.component("Assign", {}, {}),
                                })),
                                "reverse": option(r.nothing()),
                            })),
                        }),
                    })),
                })),
                "nothing": option(r.nothing()),
                "number": option(r.state({
                    "approximation": option(r.state({
                        "copy": option(r.component("Select Value", {}, {})),
                        "literal": option(r.simple()),
                    })),
                    "integer": option(r.state({
                        "copy": option(r.component("Select Value", {}, {})),
                        "divide": option(r.group({
                            "assign dividend": r.component("Select Value", {}, {}),
                            "assign divisor": r.component("Select Value", {}, {}),
                            "abort": r.component("Assign", {}, {})
                        })),
                        "literal": option(r.simple()),
                    })),
                    "natural": option(r.state({
                        "copy": option(r.component("Select Value", {}, {})),
                        "literal": option(r.simple()),
                        "number of dictionary entries": option(r.group({
                            "dictionary": r.component("Select Value", {}, {})
                        })),
                        "number of list items": option(r.group({
                            "list": r.component("Select Value", {}, {})
                        })),
                        "source column": option(r.nothing()),
                        "source line": option(r.nothing()),
                    })),
                })),
                "optional": option(r.state({
                    "literal": option(r.state({
                        "not set": option(r.nothing()),
                        "set": option(r.component("Assign", {}, {})),
                    })),
                    "from": option(r.group({
                        "selection": r.component("Select Value", {}, {}),
                        "type": r.state({
                            "boolean": option(r.state({
                                "convert": option(r.group({
                                    "assign set": r.component("Assign", {}, {}),
                                })),
                            })),
                            "optional": option(r.state({
                                "map": option(r.group({
                                    "assign set": r.component("Assign", {}, {})
                                })),
                            })),
                        }),
                    })),
                })),
                "state": option(r.state({
                    "literal": option(r.group({
                        "option": r.text(),
                        "assign option": r.component("Assign", {}, {}),
                    })),
                })),
                "text": option(r.state({
                    "literal": option(r.group({
                        "type": r.state({
                            "identifier": option(r.nothing()),
                            "freeform": option(r.nothing()),
                        }),
                        "value": r.text(),
                    })),
                    "from": option(r.group({
                        "selection": r.component("Select Value", {}, {}),
                        "type": r.state({
                            "text": option(r.state({
                                "copy": option(r.nothing()),
                            })),
                        }),
                    })),
                    "source document": option(r.nothing()),
                    "entry id": option(r.nothing()),
                    "option name": option(r.nothing()),
                })),
            })),
            "select": option(r.component("Select Value", {}, {})),
            "special": option(r.state({
                "abort": option(r.component("Assign", {}, {})),
                "assert": option(r.group({
                    "tester": r.component("Assign", {}, {}),
                    "normal flow": r.component("Assign", {}, {}),
                })),
                "change context": option(r.group({
                    "new context": r.component("Select Value", {}, {}),
                    "expression": r.component("Assign", {}, {}),
                })),
                "variables": option(r.group({
                    "variables": r.dictionary(r.component("Assign", {}, {})),
                    "assign": r.component("Assign", {}, {}),
                })),
                "implement me": option(r.text()),
                "iterate": option(r.group({
                    "list": r.component("Select Value", {}, {}),
                    "assign": r.component("Assign", {}, {}),
                })),
                "unreachable": option(r.group({
                    "explanation": r.text(),
                })),
            })),
        })),

        "Select Value": resolver(r.state({
            "implement me": option(r.text()),
            "regular": option(r.group({
                "start": r.state({
                    "call": option(r.group({
                        "source": r.state({
                            "local": option(r.text()),
                            "imported": option(r.group({
                                "import": r.text(),
                                "variable": r.text(),
                            })),
                        }),
                        "context": r.component("Assign", {}, {}),
                        "abort": r.optional(r.component("Assign", {}, {})),
                        "lookups": r.optional(r.state({
                            "initialize": option(r.dictionary(r.component("Select Lookup", {}, {}))),
                            "pass through": option(r.nothing()),
                        })),
                        "arguments": r.optional(r.state({
                            "initialize": option(r.dictionary(r.component("Assign", {}, {}))),
                            "pass through": option(r.nothing()),
                        })),
                    })),
                    "context": option(r.nothing()),
                    "dictionary entry": option(r.group({
                        "dictionary": r.component("Select Value", {}, {}),
                        "id": r.component("Assign", {}, {}),
                        "no such entry handler": r.component("Assign", {}, {}),
                    })),
                    "list from text": option(r.group({
                        "source": r.component("Select Value", {}, {}),
                        "assign item": r.component("Assign", {}, {}),
                    })),
                    "lookup entry": option(r.group({
                        "lookup": r.component("Select Lookup", {}, {}),
                        "id": r.component("Assign", {}, {}),
                        "type": r.state({
                            "acyclic": option(r.group({
                                "abort handlers": r.group({
                                    "no such entry": r.component("Assign", {}, {}),
                                    "no context lookup": r.component("Assign", {}, {}),
                                    "cycle detected": r.component("Assign", {}, {}),
                                }),
                            })),
                            "cyclic": option(r.group({
                                "abort handlers": r.group({
                                    "no such entry": r.component("Assign", {}, {}),
                                    "no context lookup": r.component("Assign", {}, {}),
                                    "accessing cyclic sibling before it is resolved": r.component("Assign", {}, {}),
                                }),
                            })),
                            "stack": option(r.group({
                                "abort handlers": r.group({
                                    "no such entry": r.component("Assign", {}, {}),
                                    "no context lookup": r.component("Assign", {}, {}),
                                    "cycle detected": r.component("Assign", {}, {}),
                                }),
                            })),
                        })
                    })),
                    "lookup entry depth": option(r.group({
                        "lookup": r.component("Select Lookup", {}, {}),
                        "id": r.component("Assign", {}, {}),
                        "abort handlers": r.group({
                            "no such entry": r.component("Assign", {}, {}),
                            "no context lookup": r.component("Assign", {}, {}),
                            "cycle detected": r.component("Assign", {}, {}),
                        }),
                    })),
                    "parameter": option(r.text()),
                    "parent sibling": option(r.text()),
                    "sibling": option(r.text()),
                    "state": option(r.nothing()),
                    "text from list": option(r.group({
                        "source": r.component("Select Value", {}, {}),
                        "assign character": r.component("Assign", {}, {}),
                    })),
                    "variable": option(r.text()),
                }),
                "tail": r.list(r.text()),
            }))
        })),

        "Select Lookup": resolver(r.state({
            "implement me": option(r.text()),
            "from parameter": option(r.text()),
            "acyclic": option(r.state({
                "not set": option(r.nothing()),
                "siblings": option(r.nothing()),
                "resolved dictionary": option(r.component("Select Value", {}, {})),
            })),
            "cyclic": option(r.state({
                "not set": option(r.nothing()),
                "siblings": option(r.nothing()),
            })),
            "stack": option(r.state({
                "empty": option(r.nothing()),
                "push": option(r.group({
                    "stack": r.component("Select Lookup", {}, {}),
                    "acyclic": r.component("Select Lookup", {}, {}),
                })),
            })),
        })),

    })