import * as _pi from 'pareto-core/dist/interface'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Module Set": type(t.dictionary(t.state({
            "module": tstate(t.component("Module")),
            "set": tstate(t.component_cyclic("Module Set")),
        }))),

        "Module": type(t.group({
            "type": prop(t.state({
                "serializer": tstate(t.nothing()),
                "deserializer": tstate(t.nothing()),
                "transformer": tstate(t.nothing()),
                "refiner": tstate(t.nothing()),
            })),
            "specials": prop(t.group({
                "abort": prop(t.boolean()),
                "change context": tstate(t.boolean()),
                "implement me": prop(t.boolean()),
                "iterate": prop(t.boolean()),
                "unreachable code path": prop(t.boolean()),
            })),
            "type imports": prop(t.component_external("interface", "Imports")),
            "variable imports": prop(t.dictionary(t.group({
                "tail": prop(t.list(t.text_global("TBD"))),
                "type": prop(t.state({
                    "ancestor": tstate(t.group({
                        "dependency": prop(t.text_global("TBD")),
                        "number of steps": prop(t.number_local(n.natural(null))),
                    })),
                    "external": tstate(t.text_global("TBD")),
                    "sibling": tstate(t.text_global("TBD")),
                })),
            }))),
            "algorithms": prop(t.dictionary(t.group({
                "type": prop(t.group({
                    "import": prop(t.text_global("TBD")),
                    "type": prop(t.text_global("TBD")),
                })),
                "expression": prop(t.component_cyclic("Expression")),
                "temp has abort": prop(t.boolean()),
                "temp has lookups": prop(t.boolean()),
                "temp has parameters": prop(t.boolean()),
            }))),
        })),

        "Temp Type Node Reference": type(t.group({
            "type": prop(t.group({
                "import": prop(t.text_global("TBD")),
                "type": prop(t.text_global("TBD")),
            })),
            "sub selection": prop(t.list(t.state({
                "dictionary": tstate(t.nothing()),
                "group": tstate(t.text_global("TBD")),
                "list": tstate(t.nothing()),
                "optional": tstate(t.nothing()),
                "state": tstate(t.text_global("TBD")),
            }))),
        })),

        "Expression": type(t.state({
            "decide": tstate(t.group({
                "type": prop(t.state({
                    "boolean": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "if false": prop(t.component_cyclic("Expression")),
                        "if true": prop(t.component_cyclic("Expression")),
                    })),
                    "dictionary": tstate(t.state({
                        "has entries": tstate(t.group({
                            "dictionary": prop(t.component("Selection")),
                            "if true": prop(t.component_cyclic("Expression")),
                            "if false": prop(t.component_cyclic("Expression")),
                        }))
                    })),
                    "list": tstate(t.state({
                        "has first item": tstate(t.group({
                            "list": prop(t.component("Selection")),
                            "if true": prop(t.component_cyclic("Expression")),
                            "if false": prop(t.component_cyclic("Expression")),
                        })),
                        "has last item": tstate(t.group({
                            "list": prop(t.component("Selection")),
                            "if true": prop(t.component_cyclic("Expression")),
                            "if false": prop(t.component_cyclic("Expression")),
                        })),
                        "has items": tstate(t.group({
                            "list": prop(t.component("Selection")),
                            "if true": prop(t.component_cyclic("Expression")),
                            "if false": prop(t.component_cyclic("Expression")),
                        }))
                    })),
                    "optional": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "if not set": prop(t.component_cyclic("Expression")),
                        "if set": prop(t.component_cyclic("Expression")),
                    })),
                    "state": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "type": prop(t.state({
                            "partial": tstate(t.group({
                                "options": prop(t.dictionary(t.component_cyclic("Expression"))),
                                "default": prop(t.component_cyclic("Expression")),
                            })),
                            "full": tstate(t.group({
                                "options": prop(t.dictionary(t.component_cyclic("Expression"))),
                            }))
                        })),
                    })),
                    "text": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "cases": prop(t.dictionary(t.component_cyclic("Expression"))),
                        "default": prop(t.component_cyclic("Expression")),
                    })),
                })),
            })),
            "initialize": tstate(t.state({
                "boolean": tstate(t.state({
                    "literal": tstate(t.state({
                        "false": tstate(t.nothing()),
                        "true": tstate(t.nothing()),
                    })),
                    "not": tstate(t.component("Selection")),
                    "copy": tstate(t.component("Selection")),
                    "dictionary is empty": tstate(t.component("Selection")),
                    "list is empty": tstate(t.component("Selection")),
                })),
                "dictionary": tstate(t.state({
                    "filter": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "entry handler": prop(t.component_cyclic("Expression"))
                    })),
                    "from list": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "get id": prop(t.component_cyclic("Expression")),
                        "get entry": prop(t.component_cyclic("Expression")),
                        "abort": prop(t.component_cyclic("Expression")),
                    })),
                    "literal": tstate(t.dictionary(t.component_cyclic("Expression"))),
                    "map": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "entry handler": prop(t.component_cyclic("Expression"))
                    })),
                    "resolve": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "entry handler": prop(t.component_cyclic("Expression"))
                    })),
                })),
                "group": tstate(t.state({
                    "literal": tstate(t.dictionary(t.component_cyclic("Expression"))),
                    "resolve": tstate(t.dictionary(t.component_cyclic("Expression"))),
                })),
                "list": tstate(t.state({
                    "filter": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "entry handler": prop(t.component_cyclic("Expression"))
                    })),
                    "from dictionary": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "get item": prop(t.component_cyclic("Expression")),
                    })),
                    "literal": tstate(t.list(t.component_cyclic("Expression"))),
                    "map": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "item handler": prop(t.component_cyclic("Expression"))
                    })),
                    "map with state": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "initial state": prop(t.component_cyclic("Expression")),
                        "item handler": prop(t.component_cyclic("Expression")),
                        "update state": prop(t.component_cyclic("Expression")),
                        "wrap up": prop(t.component_cyclic("Expression")),
                    })),
                    "reduce": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "initial state": prop(t.component_cyclic("Expression")),
                        "item handler": prop(t.component_cyclic("Expression")),
                    })),
                    "reverse": tstate(t.group({
                        "source": prop(t.component("Selection")),
                    })),
                })),
                "nothing": tstate(t.nothing()),
                "number": tstate(t.state({
                    "approximation": tstate(t.state({
                        "literal": tstate(t.number_local(n.approximation(10))),
                        "copy": tstate(t.component("Selection")),
                    })),
                    "integer": tstate(t.state({
                        "copy": tstate(t.component("Selection")),
                        "divide": tstate(t.group({
                            "divident": prop(t.component("Selection")),
                            "divisor": prop(t.component("Selection")),
                            "abort": prop(t.component_cyclic("Expression")),
                        })),
                        "literal": tstate(t.number_local(n.integer(null))),
                    })),
                    "natural": tstate(t.state({
                        "literal": tstate(t.number_local(n.natural(null))),
                        "copy": tstate(t.component("Selection")),
                        "number of dictionary entries": tstate(t.group({
                            "dictionary": prop(t.component("Selection"))
                        })),
                        "number of list items": tstate(t.group({
                            "list": prop(t.component("Selection"))
                        })),
                        "source column": tstate(t.nothing()),
                        "source line": tstate(t.nothing()),
                    })),
                })),
                "optional": tstate(t.state({
                    "from boolean": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "get set": prop(t.component_cyclic("Expression")),
                    })),
                    "literal": tstate(t.state({
                        "not set": tstate(t.nothing()),
                        "set": tstate(t.component_cyclic("Expression")),
                    })),
                    "map": tstate(t.group({
                        "source": prop(t.component("Selection")),
                        "set handler": prop(t.component_cyclic("Expression"))
                    })),
                })),
                "state": tstate(t.state({
                    "literal": tstate(t.group({
                        "option": prop(t.text_global("Identifier")),
                        "value": prop(t.component_cyclic("Expression")),
                    }))
                })),
                "text": tstate(t.state({
                    "copy": tstate(t.component("Selection")),
                    "literal": tstate(t.group({
                        "type": prop(t.state({
                            "identifier": tstate(t.nothing()),
                            "freeform": tstate(t.nothing()),
                        })),
                        "value": prop(t.text_local(text('single line'))),
                    })),
                    "source document": tstate(t.nothing()),
                })),
            })),
            "select": tstate(t.component("Selection")),
            "special": tstate(t.state({
                "abort": tstate(t.component_cyclic("Expression")),
                "assert": tstate(t.group({
                    "tester": prop(t.component_cyclic("Expression")),
                    "normal flow": prop(t.component_cyclic("Expression")),
                })),
                "block": tstate(t.group({
                    "variables": prop(t.dictionary(t.group({
                        "type": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "expression": prop(t.component_cyclic("Expression")),
                    }))),
                    "temp ordered variables": prop(t.list(t.group({ //FIXME: remove this as soon as the dependencies can be determined in the variables dictionary
                        "name": prop(t.text_global("Identifier")),
                        "type": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "expression": prop(t.component_cyclic("Expression")),
                    }))),
                    "expression": prop(t.component_cyclic("Expression")),
                })),
                "change context": tstate(t.group({
                    "new context": prop(t.component("Selection")),
                    "expression": prop(t.component_cyclic("Expression")),
                })),
                "implement me": tstate(t.text_local(text('single line'))),
                "iterate": tstate(t.group({
                    "list": prop(t.component("Selection")),
                    "handler": prop(t.component_cyclic("Expression")),
                })),
                "unreachable": tstate(t.nothing()),
                // "deprecated function": tstate(t.group({
                //     "expression": prop(t.component_cyclic("Expression")),
                //     "temp has parameters": prop(t.boolean()),
                //     "temp resulting node": prop(t.optional(t.component("Temp Type Node Reference"))),
                // })),
            })),
        })),

        "Selection": type(t.state({
            "implement me": tstate(t.text_local(text('single line'))),
            "regular": tstate(t.group({
                "start": prop(t.state({
                    "call": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "context": prop(t.component_cyclic("Expression")),
                        "abort": prop(t.optional(t.component_cyclic("Expression"))),
                        "lookups": prop(t.optional(t.state({
                            "initialize": tstate(t.dictionary(t.component_cyclic("Lookup Selection"))),
                            "pass through": tstate(t.nothing()),
                        }))),
                        "arguments": prop(t.optional(t.state({
                            "initialize": tstate(t.dictionary(t.component_cyclic("Expression"))),
                            "pass through": tstate(t.nothing()),
                        }))),
                    })),
                    "context": tstate(t.nothing()),
                    "entry": tstate(t.group({
                        "dictionary": prop(t.component_cyclic("Selection")),
                        "id": prop(t.component_cyclic("Expression")),
                        "abort handler": prop(t.component_cyclic("Expression")),
                    })),
                    "variable": tstate(t.state({
                        "local": tstate(t.text_global("TBD")),
                        "imported": tstate(t.group({
                            "import": prop(t.text_global("TBD")),
                            "variable": prop(t.text_global("TBD")),
                        }))
                    })),
                    "parameter": tstate(t.text_global("TBD")),
                })),
                "tail": prop(t.list(t.text_global("TBD"))),
            }))
        })),

        "Lookup Selection": type(t.state({
            "implement me": tstate(t.text_local(text('single line'))),
            "from resolved dictionary": tstate(t.component_cyclic("Selection")),
            "from siblings": tstate(t.group({
                "cycles allowed": prop(t.boolean()),
            })),
            "from parameter": tstate(t.text_global("TBD")),
            "not set": tstate(t.nothing()),
        })),

    }
)