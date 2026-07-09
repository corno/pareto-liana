

import * as sh from "lib/shorthands/resolver/manual"


export const $ = sh.resolver_modules(
    {

        "Package Set": sh.resolver(sh.r.dictionary(sh.r.state({
            "package": sh.option(sh.r.component("Package", {}, {})),
            "set": sh.option(sh.r.component("Package Set", {}, {})),
        }))),

        "Package": sh.resolver(sh.r.group({
            "specials": sh.r.group({
                "abort": sh.r.simple(),
                "change context": sh.r.simple(),
                "implement me": sh.r.simple(),
                "iterate": sh.r.simple(),
                "lookups": sh.r.simple(),
                "list from text": sh.r.simple(),
                "text from list": sh.r.simple(),
                "unreachable code path": sh.r.simple(),
                "variables": sh.r.simple(),
            }),
            "type imports": sh.r.component_external("interface", "Imports", {}, {}),
            "variable imports": sh.r.dictionary(sh.r.group({
                "tail": sh.r.list(sh.r.text()),
                "type": sh.r.state({
                    "ancestor": sh.option(sh.r.group({
                        "dependency": sh.r.text(),
                        "number of steps": sh.r.simple(),
                    })),
                    "external": sh.option(sh.r.text()),
                    "sibling": sh.option(sh.r.text()),
                }),
            })),
            "functions": sh.r.dictionary(sh.r.group({
                "type": sh.r.group({
                    "import": sh.r.text(),
                    "type": sh.r.text(),
                }),
                "expression": sh.r.component("Assign", {}, {}),
                "temp has abort": sh.r.simple(),
                "temp has lookups": sh.r.simple(),
                "temp has parameters": sh.r.simple(),
            })),
        })),

        "Temp Value Type Specification": sh.resolver(sh.r.group({
            "type": sh.r.group({
                "import": sh.r.text(),
                "type": sh.r.text(),
            }),
            "sub selection": sh.r.list(sh.r.state({
                "dictionary": sh.option(sh.r.nothing()),
                "group": sh.option(sh.r.text()),
                "list": sh.option(sh.r.nothing()),
                "optional": sh.option(sh.r.nothing()),
                "state": sh.option(sh.r.text()),
            })),
        })),

        "Assign": sh.resolver(sh.r.state({
            "decide": sh.option(sh.r.group({
                "source": sh.r.component("Select Value", {}, {}),
                "type": sh.r.state({
                    "boolean": sh.option(sh.r.group({
                        "temp resulting node": sh.r.optional(sh.r.component("Temp Value Type Specification", {}, {})),
                        "if false": sh.r.component("Assign", {}, {}),
                        "if true": sh.r.component("Assign", {}, {}),
                    })),
                    "optional": sh.option(sh.r.group({
                        "temp resulting node": sh.r.optional(sh.r.component("Temp Value Type Specification", {}, {})),
                        "if not set": sh.r.component("Assign", {}, {}),
                        "if set": sh.r.component("Assign", {}, {}),
                    })),
                    "state": sh.option(sh.r.group({
                        "temp resulting node": sh.r.optional(sh.r.component("Temp Value Type Specification", {}, {})),
                        "type": sh.r.state({
                            "partial": sh.option(sh.r.group({
                                "options": sh.r.dictionary(sh.r.component("Assign", {}, {})),
                                "default": sh.r.component("Assign", {}, {}),
                            })),
                            "full": sh.option(sh.r.group({
                                "options": sh.r.dictionary(sh.r.component("Assign", {}, {})),
                            })),
                            "single": sh.option(sh.r.group({
                                "option": sh.r.text(),
                                "if true": sh.r.component("Assign", {}, {}),
                                "if false": sh.r.component("Assign", {}, {}),
                            })),

                        }),
                    })),
                    "text": sh.option(sh.r.group({
                        "temp resulting node": sh.r.optional(sh.r.component("Temp Value Type Specification", {}, {})),
                        "cases": sh.r.dictionary(sh.r.component("Assign", {}, {})),
                        "default": sh.r.component("Assign", {}, {}),
                    })),
                }),
            })),
            "construct": sh.option(sh.r.state({
                "boolean": sh.option(sh.r.state({
                    "literal": sh.option(sh.r.state({
                        "false": sh.option(sh.r.nothing()),
                        "true": sh.option(sh.r.nothing()),
                    })),
                    "from": sh.option(sh.r.group({
                        "selection": sh.r.component("Select Value", {}, {}),
                        "type": sh.r.state({
                            "boolean": sh.option(sh.r.state({
                                "not": sh.option(sh.r.nothing()),
                                "copy": sh.option(sh.r.nothing()),
                            })),
                            "dictionary": sh.option(sh.r.state({
                                "is empty": sh.option(sh.r.nothing()),
                            })),
                            "list": sh.option(sh.r.state({
                                "is empty": sh.option(sh.r.nothing()),
                            })),
                        }),
                    })),
                })),
                "dictionary": sh.option(sh.r.state({
                    "literal": sh.option(sh.r.dictionary(sh.r.component("Assign", {}, {}))),
                    "from": sh.option(sh.r.group({
                        "selection": sh.r.component("Select Value", {}, {}),
                        "type": sh.r.state({
                            "dictionary": sh.option(sh.r.state({
                                "filter": sh.option(sh.r.group({
                                    "assign entry": sh.r.component("Assign", {}, {})
                                })),
                                "map": sh.option(sh.r.group({
                                    "assign entry": sh.r.component("Assign", {}, {})
                                })),
                                "resolve": sh.option(sh.r.group({
                                    "assign entry": sh.r.component("Assign", {}, {}),
                                    "temp resulting entry node": sh.r.component("Temp Value Type Specification", {}, {}),
                                })),
                            })),
                            "list": sh.option(sh.r.state({
                                "convert": sh.option(sh.r.group({
                                    "assign id": sh.r.component("Assign", {}, {}),
                                    "assign entry": sh.r.component("Assign", {}, {}),
                                    "abort": sh.r.component("Assign", {}, {}),
                                })),
                            })),
                        }),
                    })),
                })),
                "group": sh.option(sh.r.state({
                    "literal": sh.option(sh.r.group({
                        "properties": sh.r.dictionary(sh.r.component("Assign", {}, {})),
                        "have dependencies": sh.r.simple(),
                    })),
                })),
                "list": sh.option(sh.r.state({
                    "literal": sh.option(sh.r.list(sh.r.component("Assign", {}, {}))),
                    "from": sh.option(sh.r.group({
                        "selection": sh.r.component("Select Value", {}, {}),
                        "type": sh.r.state({
                            "dictionary": sh.option(sh.r.state({
                                "convert": sh.option(sh.r.group({
                                    "assign entry": sh.r.component("Assign", {}, {}),
                                })),
                            })),
                            "list": sh.option(sh.r.state({
                                "filter": sh.option(sh.r.group({
                                    "assign item": sh.r.component("Assign", {}, {})
                                })),
                                "map": sh.option(sh.r.group({
                                    "assign item": sh.r.component("Assign", {}, {})
                                })),
                                "map with state": sh.option(sh.r.group({
                                    "initialize state": sh.r.component("Assign", {}, {}),
                                    "assign item": sh.r.component("Assign", {}, {}),
                                    "update state": sh.r.component("Assign", {}, {}),
                                    "wrap up": sh.r.component("Assign", {}, {}),
                                })),
                                "reduce": sh.option(sh.r.group({
                                    "initialize state": sh.r.component("Assign", {}, {}),
                                    "assign item": sh.r.component("Assign", {}, {}),
                                })),
                                "reverse": sh.option(sh.r.nothing()),
                            })),
                        }),
                    })),
                })),
                "nothing": sh.option(sh.r.nothing()),
                "number": sh.option(sh.r.state({
                    "approximation": sh.option(sh.r.state({
                        "copy": sh.option(sh.r.component("Select Value", {}, {})),
                        "literal": sh.option(sh.r.simple()),
                    })),
                    "integer": sh.option(sh.r.state({
                        "copy": sh.option(sh.r.component("Select Value", {}, {})),
                        "divide": sh.option(sh.r.group({
                            "assign dividend": sh.r.component("Select Value", {}, {}),
                            "assign divisor": sh.r.component("Select Value", {}, {}),
                            "abort": sh.r.component("Assign", {}, {})
                        })),
                        "literal": sh.option(sh.r.simple()),
                    })),
                    "natural": sh.option(sh.r.state({
                        "copy": sh.option(sh.r.component("Select Value", {}, {})),
                        "literal": sh.option(sh.r.simple()),
                        "number of dictionary entries": sh.option(sh.r.group({
                            "dictionary": sh.r.component("Select Value", {}, {})
                        })),
                        "number of list items": sh.option(sh.r.group({
                            "list": sh.r.component("Select Value", {}, {})
                        })),
                        "source column": sh.option(sh.r.nothing()),
                        "source line": sh.option(sh.r.nothing()),
                    })),
                })),
                "optional": sh.option(sh.r.state({
                    "literal": sh.option(sh.r.state({
                        "not set": sh.option(sh.r.nothing()),
                        "set": sh.option(sh.r.component("Assign", {}, {})),
                    })),
                    "from": sh.option(sh.r.group({
                        "selection": sh.r.component("Select Value", {}, {}),
                        "type": sh.r.state({
                            "boolean": sh.option(sh.r.state({
                                "convert": sh.option(sh.r.group({
                                    "assign set": sh.r.component("Assign", {}, {}),
                                })),
                            })),
                            "optional": sh.option(sh.r.state({
                                "map": sh.option(sh.r.group({
                                    "assign set": sh.r.component("Assign", {}, {})
                                })),
                            })),
                        }),
                    })),
                })),
                "state": sh.option(sh.r.state({
                    "literal": sh.option(sh.r.group({
                        "option": sh.r.text(),
                        "assign option": sh.r.component("Assign", {}, {}),
                    })),
                })),
                "text": sh.option(sh.r.state({
                    "literal": sh.option(sh.r.group({
                        "type": sh.r.state({
                            "identifier": sh.option(sh.r.nothing()),
                            "freeform": sh.option(sh.r.nothing()),
                        }),
                        "value": sh.r.text(),
                    })),
                    "from": sh.option(sh.r.group({
                        "selection": sh.r.component("Select Value", {}, {}),
                        "type": sh.r.state({
                            "text": sh.option(sh.r.state({
                                "copy": sh.option(sh.r.nothing()),
                            })),
                        }),
                    })),
                    "source document": sh.option(sh.r.nothing()),
                    "entry id": sh.option(sh.r.nothing()),
                    "option name": sh.option(sh.r.nothing()),
                })),
            })),
            "select": sh.option(sh.r.component("Select Value", {}, {})),
            "special": sh.option(sh.r.state({
                "abort": sh.option(sh.r.component("Assign", {}, {})),
                "assert": sh.option(sh.r.group({
                    "tester": sh.r.component("Assign", {}, {}),
                    "normal flow": sh.r.component("Assign", {}, {}),
                })),
                "change context": sh.option(sh.r.group({
                    "new context": sh.r.component("Select Value", {}, {}),
                    "expression": sh.r.component("Assign", {}, {}),
                })),
                "variables": sh.option(sh.r.group({
                    "variables": sh.r.dictionary(sh.r.component("Assign", {}, {})),
                    "assign": sh.r.component("Assign", {}, {}),
                })),
                "implement me": sh.option(sh.r.text()),
                "iterate": sh.option(sh.r.group({
                    "list": sh.r.component("Select Value", {}, {}),
                    "assign": sh.r.component("Assign", {}, {}),
                })),
                "unreachable": sh.option(sh.r.group({
                    "explanation": sh.r.text(),
                })),
            })),
        })),

        "Select Value": sh.resolver(sh.r.state({
            "implement me": sh.option(sh.r.text()),
            "regular": sh.option(sh.r.group({
                "start": sh.r.state({
                    "call": sh.option(sh.r.group({
                        "source": sh.r.state({
                            "local": sh.option(sh.r.text()),
                            "imported": sh.option(sh.r.group({
                                "import": sh.r.text(),
                                "variable": sh.r.text(),
                            })),
                        }),
                        "context": sh.r.component("Assign", {}, {}),
                        "abort": sh.r.optional(sh.r.component("Assign", {}, {})),
                        "lookups": sh.r.optional(sh.r.state({
                            "initialize": sh.option(sh.r.dictionary(sh.r.component("Select Lookup", {}, {}))),
                            "pass through": sh.option(sh.r.nothing()),
                        })),
                        "arguments": sh.r.optional(sh.r.state({
                            "initialize": sh.option(sh.r.dictionary(sh.r.component("Assign", {}, {}))),
                            "pass through": sh.option(sh.r.nothing()),
                        })),
                    })),
                    "context": sh.option(sh.r.nothing()),
                    "dictionary entry": sh.option(sh.r.group({
                        "dictionary": sh.r.component("Select Value", {}, {}),
                        "id": sh.r.component("Assign", {}, {}),
                        "no such entry handler": sh.r.component("Assign", {}, {}),
                    })),
                    "list from text": sh.option(sh.r.group({
                        "source": sh.r.component("Select Value", {}, {}),
                        "assign item": sh.r.component("Assign", {}, {}),
                    })),
                    "lookup entry": sh.option(sh.r.group({
                        "lookup": sh.r.component("Select Lookup", {}, {}),
                        "id": sh.r.component("Assign", {}, {}),
                        "type": sh.r.state({
                            "acyclic": sh.option(sh.r.group({
                                "abort handlers": sh.r.group({
                                    "no such entry": sh.r.component("Assign", {}, {}),
                                    "no context lookup": sh.r.component("Assign", {}, {}),
                                    "cycle detected": sh.r.component("Assign", {}, {}),
                                }),
                            })),
                            "cyclic": sh.option(sh.r.group({
                                "abort handlers": sh.r.group({
                                    "no such entry": sh.r.component("Assign", {}, {}),
                                    "no context lookup": sh.r.component("Assign", {}, {}),
                                    "accessing cyclic sibling before it is resolved": sh.r.component("Assign", {}, {}),
                                }),
                            })),
                            "stack": sh.option(sh.r.group({
                                "abort handlers": sh.r.group({
                                    "no such entry": sh.r.component("Assign", {}, {}),
                                    "no context lookup": sh.r.component("Assign", {}, {}),
                                    "cycle detected": sh.r.component("Assign", {}, {}),
                                }),
                            })),
                        })
                    })),
                    "lookup entry depth": sh.option(sh.r.group({
                        "lookup": sh.r.component("Select Lookup", {}, {}),
                        "id": sh.r.component("Assign", {}, {}),
                        "abort handlers": sh.r.group({
                            "no such entry": sh.r.component("Assign", {}, {}),
                            "no context lookup": sh.r.component("Assign", {}, {}),
                            "cycle detected": sh.r.component("Assign", {}, {}),
                        }),
                    })),
                    "parameter": sh.option(sh.r.text()),
                    "parent sibling": sh.option(sh.r.text()),
                    "sibling": sh.option(sh.r.text()),
                    "state": sh.option(sh.r.nothing()),
                    "text from list": sh.option(sh.r.group({
                        "source": sh.r.component("Select Value", {}, {}),
                        "assign character": sh.r.component("Assign", {}, {}),
                    })),
                    "variable": sh.option(sh.r.text()),
                }),
                "tail": sh.r.list(sh.r.text()),
            }))
        })),

        "Select Lookup": sh.resolver(sh.r.state({
            "implement me": sh.option(sh.r.text()),
            "from parameter": sh.option(sh.r.text()),
            "acyclic": sh.option(sh.r.state({
                "not set": sh.option(sh.r.nothing()),
                "siblings": sh.option(sh.r.nothing()),
                "resolved dictionary": sh.option(sh.r.component("Select Value", {}, {})),
            })),
            "cyclic": sh.option(sh.r.state({
                "not set": sh.option(sh.r.nothing()),
                "siblings": sh.option(sh.r.nothing()),
            })),
            "stack": sh.option(sh.r.state({
                "empty": sh.option(sh.r.nothing()),
                "push": sh.option(sh.r.group({
                    "stack": sh.r.component("Select Lookup", {}, {}),
                    "acyclic": sh.r.component("Select Lookup", {}, {}),
                })),
            })),
        })),

    })