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

        "Module Set": module_(t.dictionary(t.state({
            "module": toption(t.component("Module")),
            "set": toption(t.component("Module Set")),
        }))),

        "Module": module_(t.group({
            "type": prop(t.state({
                "serializer": toption(t.nothing()),
                "deserializer": toption(t.nothing()),
                "transformer": toption(t.nothing()),
                "refiner": toption(t.nothing()),
            })),
            "specials": prop(t.group({
                "abort": prop(t.boolean()),
                "change context": toption(t.boolean()),
                "implement me": prop(t.boolean()),
                "iterate": prop(t.boolean()),
                "unreachable code path": prop(t.boolean()),
                "lookups": prop(t.boolean()),
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
            "algorithms": prop(t.dictionary(t.group({
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

        "Temp Type Node Reference": module_(t.group({
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
                        "source": prop(t.component("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "if false": prop(t.component("Expression")),
                        "if true": prop(t.component("Expression")),
                    })),
                    "dictionary": toption(t.state({
                        "has entries": toption(t.group({
                            "dictionary": prop(t.component("Selection")),
                            "if true": prop(t.component("Expression")),
                            "if false": prop(t.component("Expression")),
                        }))
                    })),
                    "list": toption(t.state({
                        "has first item": toption(t.group({
                            "list": prop(t.component("Selection")),
                            "if true": prop(t.component("Expression")),
                            "if false": prop(t.component("Expression")),
                        })),
                        "has last item": toption(t.group({
                            "list": prop(t.component("Selection")),
                            "if true": prop(t.component("Expression")),
                            "if false": prop(t.component("Expression")),
                        })),
                        "has items": toption(t.group({
                            "list": prop(t.component("Selection")),
                            "if true": prop(t.component("Expression")),
                            "if false": prop(t.component("Expression")),
                        }))
                    })),
                    "optional": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "if not set": prop(t.component("Expression")),
                        "if set": prop(t.component("Expression")),
                    })),
                    "state": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "type": prop(t.state({
                            "partial": toption(t.group({
                                "options": prop(t.dictionary(t.component("Expression"))),
                                "default": prop(t.component("Expression")),
                            })),
                            "full": toption(t.group({
                                "options": prop(t.dictionary(t.component("Expression"))),
                            }))
                        })),
                    })),
                    "text": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Temp Type Node Reference"))),
                        "cases": prop(t.dictionary(t.component("Expression"))),
                        "default": prop(t.component("Expression")),
                    })),
                })),
            })),
            "initialize": toption(t.state({
                "boolean": toption(t.state({
                    "literal": toption(t.state({
                        "false": toption(t.nothing()),
                        "true": toption(t.nothing()),
                    })),
                    "not": toption(t.component("Selection")),
                    "copy": toption(t.component("Selection")),
                    "dictionary is empty": toption(t.component("Selection")),
                    "list is empty": toption(t.component("Selection")),
                })),
                "dictionary": toption(t.state({
                    "filter": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "entry handler": prop(t.component("Expression"))
                    })),
                    "from list": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "get id": prop(t.component("Expression")),
                        "get entry": prop(t.component("Expression")),
                        "abort": prop(t.component("Expression")),
                    })),
                    "literal": toption(t.dictionary(t.component("Expression"))),
                    "map": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "entry handler": prop(t.component("Expression"))
                    })),
                    "resolve": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "entry handler": prop(t.component("Expression")),
                        "temp resulting entry node": prop(t.component("Temp Type Node Reference")),
                    })),
                })),
                "group": toption(t.state({
                    "literal": toption(t.dictionary(t.component("Expression"))),
                    "resolve": toption(t.dictionary(t.component("Expression"))),
                })),
                "list": toption(t.state({
                    "filter": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "entry handler": prop(t.component("Expression"))
                    })),
                    "from dictionary": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "get item": prop(t.component("Expression")),
                    })),
                    "literal": toption(t.list(t.component("Expression"))),
                    "map": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "item handler": prop(t.component("Expression"))
                    })),
                    "map with state": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "initial state": prop(t.component("Expression")),
                        "item handler": prop(t.component("Expression")),
                        "update state": prop(t.component("Expression")),
                        "wrap up": prop(t.component("Expression")),
                    })),
                    "reduce": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "initial state": prop(t.component("Expression")),
                        "item handler": prop(t.component("Expression")),
                    })),
                    "reverse": toption(t.group({
                        "source": prop(t.component("Selection")),
                    })),
                })),
                "nothing": toption(t.nothing()),
                "number": toption(t.state({
                    "approximation": toption(t.state({
                        "literal": toption(t.number_local(n.approximation(10))),
                        "copy": toption(t.component("Selection")),
                    })),
                    "integer": toption(t.state({
                        "copy": toption(t.component("Selection")),
                        "divide": toption(t.group({
                            "divident": prop(t.component("Selection")),
                            "divisor": prop(t.component("Selection")),
                            "abort": prop(t.component("Expression")),
                        })),
                        "literal": toption(t.number_local(n.integer(null))),
                    })),
                    "natural": toption(t.state({
                        "literal": toption(t.number_local(n.natural(null))),
                        "copy": toption(t.component("Selection")),
                        "number of dictionary entries": toption(t.group({
                            "dictionary": prop(t.component("Selection"))
                        })),
                        "number of list items": toption(t.group({
                            "list": prop(t.component("Selection"))
                        })),
                        "source column": toption(t.nothing()),
                        "source line": toption(t.nothing()),
                    })),
                })),
                "optional": toption(t.state({
                    "from boolean": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "get set": prop(t.component("Expression")),
                    })),
                    "literal": toption(t.state({
                        "not set": toption(t.nothing()),
                        "set": toption(t.component("Expression")),
                    })),
                    "map": toption(t.group({
                        "source": prop(t.component("Selection")),
                        "set handler": prop(t.component("Expression"))
                    })),
                })),
                "state": toption(t.state({
                    "literal": toption(t.group({
                        "option": prop(t.text_global("Identifier")),
                        "value": prop(t.component("Expression")),
                    }))
                })),
                "text": toption(t.state({
                    "copy": toption(t.component("Selection")),
                    "literal": toption(t.group({
                        "type": prop(t.state({
                            "identifier": toption(t.nothing()),
                            "freeform": toption(t.nothing()),
                        })),
                        "value": prop(t.text_local(text('single line'))),
                    })),
                    "source document": toption(t.nothing()),
                })),
            })),
            "select": toption(t.component("Selection")),
            "special": toption(t.state({
                "abort": toption(t.component("Expression")),
                "assert": toption(t.group({
                    "tester": prop(t.component("Expression")),
                    "normal flow": prop(t.component("Expression")),
                })),
                "change context": toption(t.group({
                    "new context": prop(t.component("Selection")),
                    "expression": prop(t.component("Expression")),
                })),
                "implement me": toption(t.text_local(text('single line'))),
                "iterate": toption(t.group({
                    "list": prop(t.component("Selection")),
                    "handler": prop(t.component("Expression")),
                })),
                "unreachable": toption(t.nothing()),
            })),
        })),

        "Selection": module_(t.state({
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
                        "dictionary": prop(t.component("Selection")),
                        "id": prop(t.component("Expression")),
                        "abort handler": prop(t.component("Expression")),
                    })),
                    "lookup entry": toption(t.group({
                        "lookup": prop(t.component("Lookup Selection")),
                        "id": prop(t.component("Expression")),
                        "abort handler": prop(t.component("Expression")),
                    })),
                    "parameter": toption(t.text_global("TBD")),
                    "parent sibling": toption(t.text_global("TBD")),
                    "sibling": toption(t.text_global("TBD")),
                    "state": toption(t.nothing()),
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
                "resolved dictionary": toption(t.component("Selection")),
            })),
            "cyclic": toption(t.state({
                "not set": toption(t.nothing()),
                "siblings": toption(t.nothing()),
            })),
        })),

    }
)