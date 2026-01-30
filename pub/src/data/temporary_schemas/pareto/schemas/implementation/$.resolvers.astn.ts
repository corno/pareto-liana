import * as _pi from 'pareto-core/dist/interface'

import { resolvers, r, resolver, sig, state, st } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolvers = resolvers(
    {

        "Module Set": resolver(r.dictionary(r.state({
            "module": state(r.component("Module", {}, {})),
            "set": state(r.component("Module Set", {}, {})),
        }))),

        "Module": resolver(r.group({
            "type": r.state({
                "serializer": state(r.nothing()),
                "deserializer": state(r.nothing()),
                "transformer": state(r.nothing()),
                "refiner": state(r.nothing()),
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
                    "ancestor": state(r.group({
                        "dependency": r.text(),
                        "number of steps": r.number(),
                    })),
                    "external": state(r.text()),
                    "sibling": state(r.text()),
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
                "dictionary": state(r.nothing()),
                "group": state(r.text()),
                "list": state(r.nothing()),
                "optional": state(r.nothing()),
                "state": state(r.text()),
            })),
        })),

        "Expression": resolver(r.state({
            "decide": state(r.group({
                "type": r.state({
                    "boolean": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "if false": r.component("Expression", {}, {}),
                        "if true": r.component("Expression", {}, {}),
                    })),
                    "dictionary": state(r.state({
                        "has entries": state(r.group({
                            "dictionary": r.component("Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                    })),
                    "list": state(r.state({
                        "has first item": state(r.group({
                            "list": r.component("Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                        "has last item": state(r.group({
                            "list": r.component("Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                        "has items": state(r.group({
                            "list": r.component("Selection", {}, {}),
                            "if false": r.component("Expression", {}, {}),
                            "if true": r.component("Expression", {}, {}),
                        })),
                    })),
                    "optional": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "if not set": r.component("Expression", {}, {}),
                        "if set": r.component("Expression", {}, {}),
                    })),
                    "state": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "type": r.state({
                            "partial": state(r.group({
                                "options": r.dictionary(r.component("Expression", {}, {})),
                                "default": r.component("Expression", {}, {}),
                            })),
                            "full": state(r.group({
                                "options": r.dictionary(r.component("Expression", {}, {})),
                            }))
                        }),
                    })),
                    "text": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "cases": r.dictionary(r.component("Expression", {}, {})),
                        "default": r.component("Expression", {}, {}),
                    })),
                }),
            })),
            "initialize": state(r.state({
                "boolean": state(r.state({
                    "literal": state(r.state({
                        "false": state(r.nothing()),
                        "true": state(r.nothing()),
                    })),
                    "not": state(r.component("Selection", {}, {})),
                    "copy": state(r.component("Selection", {}, {})),
                    "dictionary is empty": state(r.component("Selection", {}, {})),
                    "list is empty": state(r.component("Selection", {}, {})),
                })),
                "dictionary": state(r.state({
                    "filter": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {})
                    })),
                    "from list": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "get id": r.component("Expression", {}, {}),
                        "get entry": r.component("Expression", {}, {}),
                        "abort": r.component("Expression", {}, {}),
                    })),
                    "literal": state(r.dictionary(r.component("Expression", {}, {}))),
                    "map": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {})
                    })),
                    "resolve": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {})
                    })),
                })),
                "group": state(r.state({
                    "literal": state(r.dictionary(r.component("Expression", {}, {}))),
                    "resolve": state(r.dictionary(r.component("Expression", {}, {}))),
                })),
                "list": state(r.state({
                    "filter": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {})
                    })),
                    "from dictionary": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "get item": r.component("Expression", {}, {}),
                    })),
                    "literal": state(r.list(r.component("Expression", {}, {}))),
                    "map": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "item handler": r.component("Expression", {}, {})
                    })),
                    "map with state": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "initial state": r.component("Expression", {}, {}),
                        "item handler": r.component("Expression", {}, {}),
                        "update state": r.component("Expression", {}, {}),
                        "wrap up": r.component("Expression", {}, {}),
                    })),
                    "reduce": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "initial state": r.component("Expression", {}, {}),
                        "item handler": r.component("Expression", {}, {}),
                    })),
                    "reverse": state(r.group({
                        "source": r.component("Selection", {}, {}),
                    })),
                })),
                "nothing": state(r.nothing()),
                "number": state(r.state({
                    "approximation": state(r.state({
                        "copy": state(r.component("Selection", {}, {})),
                        "literal": state(r.number()),
                    })),
                    "integer": state(r.state({
                        "copy": state(r.component("Selection", {}, {})),
                        "divide": state(r.group({
                            "divident": r.component("Selection", {}, {}),
                            "divisor": r.component("Selection", {}, {}),
                            "abort": r.component("Expression", {}, {})
                        })),
                        "literal": state(r.number()),
                    })),
                    "natural": state(r.state({
                        "copy": state(r.component("Selection", {}, {})),
                        "literal": state(r.number()),
                        "number of dictionary entries": state(r.group({
                            "dictionary": r.component("Selection", {}, {})
                        })),
                        "number of list items": state(r.group({
                            "list": r.component("Selection", {}, {})
                        })),
                        "source column": state(r.nothing()),
                        "source line": state(r.nothing()),
                    })),
                })),
                "optional": state(r.state({
                    "from boolean": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "get set": r.component("Expression", {}, {}),
                    })),
                    "literal": state(r.state({
                        "not set": state(r.nothing()),
                        "set": state(r.component("Expression", {}, {})),
                    })),
                    "map": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "set handler": r.component("Expression", {}, {})
                    })),
                })),
                "state": state(r.state({
                    "literal": state(r.group({
                        "option": r.text(),
                        "value": r.component("Expression", {}, {}),
                    })),
                })),
                "text": state(r.state({
                    "copy": state(r.component("Selection", {}, {})),
                    "literal": state(r.group({
                        "type": r.state({
                            "identifier": state(r.nothing()),
                            "freeform": state(r.nothing()),
                        }),
                        "value": r.text(),
                    })),
                    "source document": state(r.nothing()),
                })),
            })),
            "select": state(r.component("Selection", {}, {})),
            "special": state(r.state({
                "abort": state(r.component("Expression", {}, {})),
                "assert": state(r.group({
                    "tester": r.component("Expression", {}, {}),
                    "normal flow": r.component("Expression", {}, {}),
                })),
                "block": state(r.group({
                    "variables": r.dictionary(r.group({
                        "type": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "expression": r.component("Expression", {}, {}),
                    })),
                    "temp ordered variables": r.list(r.group({
                        "name": r.text(),
                        "type": r.optional(r.component("Temp Type Node Reference", {}, {})),
                        "expression": r.component("Expression", {}, {}),
                    })),
                    "expression": r.component("Expression", {}, {}),
                })),
                "change context": state(r.group({
                    "new context": r.component("Selection", {}, {}),
                    "expression": r.component("Expression", {}, {}),
                })),
                "implement me": state(r.text()),
                "iterate": state(r.group({
                    "list": r.component("Selection", {}, {}),
                    "handler": r.component("Expression", {}, {}),
                })),
                "unreachable": state(r.nothing()),
                // "deprecated function": state(r.group({
                //     "expression": r.component("Expression", {}, {}),
                //     "temp has parameters": r.boolean(),
                //     "temp resulting node": r.optional(r.component("Temp Type Node Reference", {}, {})),
                // })),
            })),
        })),

        "Selection": resolver(r.state({
            "implement me": state(r.text()),
            "regular": state(r.group({
                "start": r.state({
                    "call": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "context": r.component("Expression", {}, {}),
                        "abort": r.optional(r.component("Expression", {}, {})),
                        "lookups": r.optional(r.state({
                            "initialize": state(r.dictionary(r.component("Lookup Selection", {}, {}))),
                            "pass through": state(r.nothing()),
                        })),
                        "arguments": r.optional(r.state({
                            "initialize": state(r.dictionary(r.component("Expression", {}, {}))),
                            "pass through": state(r.nothing()),
                        })),
                    })),
                    "context": state(r.nothing()),
                    "entry": state(r.group({
                        "dictionary": r.component("Selection", {}, {}),
                        "id": r.component("Expression", {}, {}),
                        "abort handler": r.component("Expression", {}, {}),
                    })),
                    "parameter": state(r.text()),
                    "variable": state(r.state({
                        "local": state(r.text()),
                        "imported": state(r.group({
                            "import": r.text(),
                            "variable": r.text(),
                        })),
                    })),
                }),
                "tail": r.list(r.text()),
            }))
        })),

        "Lookup Selection": resolver(r.state({
            "implement me": state(r.text()),
            "from resolved dictionary": state(r.component("Selection", {}, {})),
            "from siblings": state(r.group({
                "cycles allowed": r.boolean()
            })),
            "from parameter": state(r.text()),
            "not set": state(r.nothing()),
        })),

    })