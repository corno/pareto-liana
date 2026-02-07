import * as _pi from 'pareto-core/dist/interface'

import { resolvers, r, resolver, sig, option, st } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Module_Resolvers = resolvers(
    {

        "Package Set": resolver(r.dictionary(r.state({
            "package": option(r.component("Package", {}, {})),
            "set": option(r.component("Package Set", {}, {})),
        }))),

        "Package": resolver(r.group({
            "specials": r.group({
                "abort": r.boolean(),
                "change context": r.boolean(),
                "implement me": r.boolean(),
                "iterate": r.boolean(),
                "lookups": r.boolean(),
                "list from text": r.boolean(),
                "text from list": r.boolean(),
                "unreachable code path": r.boolean(),
                "variables": r.boolean(),
            }),
            "type imports": r.component_external("interface", "Imports", {}, {}),
            "variable imports": r.dictionary(r.group({
                "tail": r.list(r.text()),
                "type": r.state({
                    "ancestor": option(r.group({
                        "dependency": r.text(),
                        "number of steps": r.number(),
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
                "expression": r.component("Expression", {}, {}),
                "temp has abort": r.boolean(),
                "temp has lookups": r.boolean(),
                "temp has parameters": r.boolean(),
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

        "Expression": resolver(r.state({
            "decide": option(r.group({
                "type": r.state({
                    "boolean": option(r.group({
                        "source": r.component("Value Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Value Type Specification", {}, {})),
                        "if false": r.component("Expression", {}, {}),
                        "if true": r.component("Expression", {}, {}),
                    })),
                    "dictionary": option(r.state({
                        "has entries": option(r.group({
                            "dictionary": r.component("Value Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                    })),
                    "list": option(r.state({
                        "has first item": option(r.group({
                            "list": r.component("Value Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                        "has last item": option(r.group({
                            "list": r.component("Value Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                        "has items": option(r.group({
                            "list": r.component("Value Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                    })),
                    "optional": option(r.group({
                        "source": r.component("Value Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Value Type Specification", {}, {})),
                        "if not set": r.component("Expression", {}, {}),
                        "if set": r.component("Expression", {}, {}),
                    })),
                    "state": option(r.group({
                        "source": r.component("Value Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Value Type Specification", {}, {})),
                        "type": r.state({
                            "partial": option(r.group({
                                "options": r.dictionary(r.component("Expression", {}, {})),
                                "default": r.component("Expression", {}, {}),
                            })),
                            "full": option(r.group({
                                "options": r.dictionary(r.component("Expression", {}, {})),
                            })),
                            "single": option(r.group({
                                "option": r.text(),
                                "if true": r.component("Expression", {}, {}),
                                "if false": r.component("Expression", {}, {}),
                            })),

                        }),
                    })),
                    "text": option(r.group({
                        "source": r.component("Value Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Value Type Specification", {}, {})),
                        "cases": r.dictionary(r.component("Expression", {}, {})),
                        "default": r.component("Expression", {}, {}),
                    })),
                }),
            })),
            "construct": option(r.state({
                "boolean": option(r.state({
                    "literal": option(r.state({
                        "false": option(r.nothing()),
                        "true": option(r.nothing()),
                    })),
                    "source": option(r.group({
                        "selection": r.component("Value Selection", {}, {}),
                        "type": r.state({
                            "boolean": option(r.state({
                                "not": option(r.nothing()),
                                "copy": option(r.nothing()),
                            })),
                            "dictionary": option(r.state({
                                "is empty": option(r.component("Value Selection", {}, {})),
                            })),
                            "list": option(r.state({
                                "is empty": option(r.component("Value Selection", {}, {})),
                            })),
                        }),
                    })),
                })),
                "dictionary": option(r.state({
                    "literal": option(r.dictionary(r.component("Expression", {}, {}))),
                    "source": option(r.group({
                        "selection": r.component("Value Selection", {}, {}),
                        "type": r.state({
                            "dictionary": option(r.state({
                                "filter": option(r.group({
                                    "assign entry": r.component("Expression", {}, {})
                                })),
                                "map": option(r.group({
                                    "assign entry": r.component("Expression", {}, {})
                                })),
                                "resolve": option(r.group({
                                    "assign entry": r.component("Expression", {}, {}),
                                    "temp resulting entry node": r.component("Temp Value Type Specification", {}, {}),
                                })),
                            })),
                            "list": option(r.state({
                                "convert": option(r.group({
                                    "assign id": r.component("Expression", {}, {}),
                                    "assign entry": r.component("Expression", {}, {}),
                                    "abort": r.component("Expression", {}, {}),
                                })),
                            })),
                        }),
                    })),
                })),
                "group": option(r.state({
                    "literal": option(r.group({
                        "properties": r.dictionary(r.component("Expression", {}, {})),
                        "have dependencies": r.boolean(),
                    })),
                })),
                "list": option(r.state({
                    "literal": option(r.list(r.component("Expression", {}, {}))),
                    "source": option(r.group({
                        "selection": r.component("Value Selection", {}, {}),
                        "type": r.state({
                            "dictionary": option(r.state({
                                "convert": option(r.group({
                                    "assign entry": r.component("Expression", {}, {}),
                                })),
                            })),
                            "group": option(r.state({
                            })),
                            "list": option(r.state({
                                "filter": option(r.group({
                                    "assign item": r.component("Expression", {}, {})
                                })),
                                "map": option(r.group({
                                    "assign item": r.component("Expression", {}, {})
                                })),
                                "map with state": option(r.group({
                                    "initialize state": r.component("Expression", {}, {}),
                                    "assign item": r.component("Expression", {}, {}),
                                    "update state": r.component("Expression", {}, {}),
                                    "wrap up": r.component("Expression", {}, {}),
                                })),
                                "reduce": option(r.group({
                                    "initialize state": r.component("Expression", {}, {}),
                                    "assign item": r.component("Expression", {}, {}),
                                })),
                                "reverse": option(r.nothing()),
                            })),
                        }),
                    })),
                })),
                "nothing": option(r.nothing()),
                "number": option(r.state({
                    "approximation": option(r.state({
                        "copy": option(r.component("Value Selection", {}, {})),
                        "literal": option(r.number()),
                    })),
                    "integer": option(r.state({
                        "copy": option(r.component("Value Selection", {}, {})),
                        "divide": option(r.group({
                            "assign dividend": r.component("Value Selection", {}, {}),
                            "assign divisor": r.component("Value Selection", {}, {}),
                            "abort": r.component("Expression", {}, {})
                        })),
                        "literal": option(r.number()),
                    })),
                    "natural": option(r.state({
                        "copy": option(r.component("Value Selection", {}, {})),
                        "literal": option(r.number()),
                        "number of dictionary entries": option(r.group({
                            "dictionary": r.component("Value Selection", {}, {})
                        })),
                        "number of list items": option(r.group({
                            "list": r.component("Value Selection", {}, {})
                        })),
                        "source column": option(r.nothing()),
                        "source line": option(r.nothing()),
                    })),
                })),
                "optional": option(r.state({
                    "literal": option(r.state({
                        "not set": option(r.nothing()),
                        "set": option(r.component("Expression", {}, {})),
                    })),
                    "source": option(r.group({
                        "selection": r.component("Value Selection", {}, {}),
                        "type": r.state({
                            "boolean": option(r.state({
                                "convert": option(r.group({
                                    "assign set": r.component("Expression", {}, {}),
                                })),
                            })),
                            "optional": option(r.state({
                                "map": option(r.group({
                                    "assign set": r.component("Expression", {}, {})
                                })),
                            })),
                        }),
                    })),
                })),
                "state": option(r.state({
                    "literal": option(r.group({
                        "option": r.text(),
                        "assign option": r.component("Expression", {}, {}),
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
                    "source": option(r.group({
                        "selection": r.component("Value Selection", {}, {}),
                        "type": r.state({
                            "text": option(r.state({
                                "copy": option(r.nothing()),
                            })),
                        }),
                    })),
                    "source document": option(r.nothing()),
                })),
            })),
            "select": option(r.component("Value Selection", {}, {})),
            "special": option(r.state({
                "abort": option(r.component("Expression", {}, {})),
                "assert": option(r.group({
                    "tester": r.component("Expression", {}, {}),
                    "normal flow": r.component("Expression", {}, {}),
                })),
                "change context": option(r.group({
                    "new context": r.component("Value Selection", {}, {}),
                    "expression": r.component("Expression", {}, {}),
                })),
                "variables": option(r.group({
                    "variables": r.dictionary(r.component("Expression", {}, {})),
                    "assign": r.component("Expression", {}, {}),
                })),
                "implement me": option(r.text()),
                "iterate": option(r.group({
                    "list": r.component("Value Selection", {}, {}),
                    "assign": r.component("Expression", {}, {}),
                })),
                "unreachable": option(r.group({
                    "explanation": r.text(),
                })),
            })),
        })),

        "Value Selection": resolver(r.state({
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
                        "context": r.component("Expression", {}, {}),
                        "abort": r.optional(r.component("Expression", {}, {})),
                        "lookups": r.optional(r.state({
                            "initialize": option(r.dictionary(r.component("Lookup Selection", {}, {}))),
                            "pass through": option(r.nothing()),
                        })),
                        "arguments": r.optional(r.state({
                            "initialize": option(r.dictionary(r.component("Expression", {}, {}))),
                            "pass through": option(r.nothing()),
                        })),
                    })),
                    "context": option(r.nothing()),
                    "dictionary entry": option(r.group({
                        "dictionary": r.component("Value Selection", {}, {}),
                        "id": r.component("Expression", {}, {}),
                        "abort handler": r.component("Expression", {}, {}),
                    })),
                    "list from text": option(r.group({
                        "source": r.component("Expression", {}, {}),
                        "assign item": r.component("Expression", {}, {}),
                    })),
                    "lookup entry": option(r.group({
                        "lookup": r.component("Lookup Selection", {}, {}),
                        "id": r.component("Expression", {}, {}),
                        "abort handlers": r.group({
                            "no such entry": r.component("Expression", {}, {}),
                            "no context lookup": r.component("Expression", {}, {}),
                            "cycle detected": r.component("Expression", {}, {}),
                        }),
                    })),
                    "lookup entry depth": option(r.group({
                        "lookup": r.component("Lookup Selection", {}, {}),
                        "id": r.component("Expression", {}, {}),
                        "abort handlers": r.group({
                            "no such entry": r.component("Expression", {}, {}),
                            "no context lookup": r.component("Expression", {}, {}),
                            "cycle detected": r.component("Expression", {}, {}),
                        }),
                    })),
                    "parameter": option(r.text()),
                    "parent sibling": option(r.text()),
                    "sibling": option(r.text()),
                    "state": option(r.nothing()),
                    "text from list": option(r.group({
                        "source": r.component("Expression", {}, {}),
                        "assign character": r.component("Expression", {}, {}),
                    })),
                    "variable": option(r.text()),
                }),
                "tail": r.list(r.text()),
            }))
        })),

        "Lookup Selection": resolver(r.state({
            "implement me": option(r.text()),
            "from parameter": option(r.text()),
            "acyclic": option(r.state({
                "not set": option(r.nothing()),
                "siblings": option(r.nothing()),
                "resolved dictionary": option(r.component("Value Selection", {}, {})),
            })),
            "cyclic": option(r.state({
                "not set": option(r.nothing()),
                "siblings": option(r.nothing()),
            })),
            "stack": option(r.state({
                "empty": option(r.nothing()),
                "push": option(r.group({
                    "stack": r.component("Lookup Selection", {}, {}),
                    "acyclic": r.component("Lookup Selection", {}, {}),
                })),
            })),
        })),

    })