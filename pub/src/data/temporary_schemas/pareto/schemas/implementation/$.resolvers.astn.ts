import * as _pi from 'pareto-core/dist/interface'

import { resolvers, r, resolver, sig, option, st } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Module_Resolvers = resolvers(
    {

        "Module Set": resolver(r.dictionary(r.state({
            "module": option(r.component("Module", {}, {})),
            "set": option(r.component("Module Set", {}, {})),
        }))),

        "Module": resolver(r.group({
            "type": r.state({
                "serializer": option(r.nothing()),
                "deserializer": option(r.nothing()),
                "transformer": option(r.nothing()),
                "refiner": option(r.nothing()),
            }),
            "specials": r.group({
                "abort": r.boolean(),
                "change context": r.boolean(),
                "implement me": r.boolean(),
                "iterate": r.boolean(),
                "unreachable code path": r.boolean(),
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
            "algorithms": r.dictionary(r.group({
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

        "Temp Type Node Reference": resolver(r.group({
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
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "if false": r.component("Expression", {}, {}),
                        "if true": r.component("Expression", {}, {}),
                    })),
                    "dictionary": option(r.state({
                        "has entries": option(r.group({
                            "dictionary": r.component("Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                    })),
                    "list": option(r.state({
                        "has first item": option(r.group({
                            "list": r.component("Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                        "has last item": option(r.group({
                            "list": r.component("Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                        "has items": option(r.group({
                            "list": r.component("Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                    })),
                    "optional": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "if not set": r.component("Expression", {}, {}),
                        "if set": r.component("Expression", {}, {}),
                    })),
                    "state": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "type": r.state({
                            "partial": option(r.group({
                                "options": r.dictionary(r.component("Expression", {}, {})),
                                "default": r.component("Expression", {}, {}),
                            })),
                            "full": option(r.group({
                                "options": r.dictionary(r.component("Expression", {}, {})),
                            }))
                        }),
                    })),
                    "text": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "cases": r.dictionary(r.component("Expression", {}, {})),
                        "default": r.component("Expression", {}, {}),
                    })),
                }),
            })),
            "initialize": option(r.state({
                "boolean": option(r.state({
                    "literal": option(r.state({
                        "false": option(r.nothing()),
                        "true": option(r.nothing()),
                    })),
                    "not": option(r.component("Selection", {}, {})),
                    "copy": option(r.component("Selection", {}, {})),
                    "dictionary is empty": option(r.component("Selection", {}, {})),
                    "list is empty": option(r.component("Selection", {}, {})),
                })),
                "dictionary": option(r.state({
                    "filter": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {})
                    })),
                    "from list": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "get id": r.component("Expression", {}, {}),
                        "get entry": r.component("Expression", {}, {}),
                        "abort": r.component("Expression", {}, {}),
                    })),
                    "literal": option(r.dictionary(r.component("Expression", {}, {}))),
                    "map": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {})
                    })),
                    "resolve": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {}),
                        "temp resulting entry node": r.component("Temp Type Node Reference", {}, {}),
                    })),
                })),
                "group": option(r.state({
                    "literal": option(r.dictionary(r.component("Expression", {}, {}))),
                    "resolve": option(r.dictionary(r.component("Expression", {}, {}))),
                })),
                "list": option(r.state({
                    "filter": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {})
                    })),
                    "from dictionary": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "get item": r.component("Expression", {}, {}),
                    })),
                    "literal": option(r.list(r.component("Expression", {}, {}))),
                    "map": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "item handler": r.component("Expression", {}, {})
                    })),
                    "map with state": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "initial state": r.component("Expression", {}, {}),
                        "item handler": r.component("Expression", {}, {}),
                        "update state": r.component("Expression", {}, {}),
                        "wrap up": r.component("Expression", {}, {}),
                    })),
                    "reduce": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "initial state": r.component("Expression", {}, {}),
                        "item handler": r.component("Expression", {}, {}),
                    })),
                    "reverse": option(r.group({
                        "source": r.component("Selection", {}, {}),
                    })),
                })),
                "nothing": option(r.nothing()),
                "number": option(r.state({
                    "approximation": option(r.state({
                        "copy": option(r.component("Selection", {}, {})),
                        "literal": option(r.number()),
                    })),
                    "integer": option(r.state({
                        "copy": option(r.component("Selection", {}, {})),
                        "divide": option(r.group({
                            "divident": r.component("Selection", {}, {}),
                            "divisor": r.component("Selection", {}, {}),
                            "abort": r.component("Expression", {}, {})
                        })),
                        "literal": option(r.number()),
                    })),
                    "natural": option(r.state({
                        "copy": option(r.component("Selection", {}, {})),
                        "literal": option(r.number()),
                        "number of dictionary entries": option(r.group({
                            "dictionary": r.component("Selection", {}, {})
                        })),
                        "number of list items": option(r.group({
                            "list": r.component("Selection", {}, {})
                        })),
                        "source column": option(r.nothing()),
                        "source line": option(r.nothing()),
                    })),
                })),
                "optional": option(r.state({
                    "from boolean": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "get set": r.component("Expression", {}, {}),
                    })),
                    "literal": option(r.state({
                        "not set": option(r.nothing()),
                        "set": option(r.component("Expression", {}, {})),
                    })),
                    "map": option(r.group({
                        "source": r.component("Selection", {}, {}),
                        "set handler": r.component("Expression", {}, {})
                    })),
                })),
                "state": option(r.state({
                    "literal": option(r.group({
                        "option": r.text(),
                        "value": r.component("Expression", {}, {}),
                    })),
                })),
                "text": option(r.state({
                    "copy": option(r.component("Selection", {}, {})),
                    "literal": option(r.group({
                        "type": r.state({
                            "identifier": option(r.nothing()),
                            "freeform": option(r.nothing()),
                        }),
                        "value": r.text(),
                    })),
                    "source document": option(r.nothing()),
                })),
            })),
            "select": option(r.component("Selection", {}, {})),
            "special": option(r.state({
                "abort": option(r.component("Expression", {}, {})),
                "assert": option(r.group({
                    "tester": r.component("Expression", {}, {}),
                    "normal flow": r.component("Expression", {}, {}),
                })),
                "change context": option(r.group({
                    "new context": r.component("Selection", {}, {}),
                    "expression": r.component("Expression", {}, {}),
                })),
                "implement me": option(r.text()),
                "iterate": option(r.group({
                    "list": r.component("Selection", {}, {}),
                    "handler": r.component("Expression", {}, {}),
                })),
                "unreachable": option(r.nothing()),
            })),
        })),

        "Selection": resolver(r.state({
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
                        "dictionary": r.component("Selection", {}, {}),
                        "id": r.component("Expression", {}, {}),
                        "abort handler": r.component("Expression", {}, {}),
                    })),
                    "lookup entry": option(r.group({
                        "lookup": r.component("Lookup Selection", {}, {}),
                        "id": r.component("Expression", {}, {}),
                        "abort handler": r.component("Expression", {}, {}),
                    })),
                    "parameter": option(r.text()),
                    "parent sibling": option(r.text()),
                    "sibling": option(r.text()),
                    "state": option(r.nothing()),
                }),
                "tail": r.list(r.text()),
            }))
        })),

        "Lookup Selection": resolver(r.state({
            "implement me": option(r.text()),
            "from resolved dictionary": option(r.component("Selection", {}, {})),
            "from siblings": option(r.group({
                "cycles allowed": r.boolean()
            })),
            "from parameter": option(r.text()),
            "not set": option(r.nothing()),
        })),

    })