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
                "type": r.component("Type Reference", {}, {}),
                "expression": r.component("Expression", {}, {}),
                "temp has abort": r.boolean(),
                "temp has lookups": r.boolean(),
                "temp has parameters": r.boolean(),
            })),
        })),

        "Type Reference": resolver(r.group({
            "import": r.text(),
            "type": r.text(),
        })),

        "Type Node Reference": resolver(r.group({
            "type": r.component("Type Reference", {}, {}),
            "sub selection": r.list(r.state({
                "dictionary": state(r.nothing()),
                "group": state(r.text()),
                "list": state(r.nothing()),
                "optional": state(r.nothing()),
                "state": state(r.text()),
            })),
        })),

        "Expression": resolver(r.state({
            "special": state(r.state({
                "abort": state(r.component("Expression", {}, {})),
                "block": state(r.group({
                    "variables": r.dictionary(r.group({
                        "type": r.optional(r.component("Type Node Reference", {}, {})),
                        "expression": r.component("Expression", {}, {}),
                    })),
                    "temp ordered variables": r.list(r.group({
                        "name": r.text(),
                        "type": r.optional(r.component("Type Node Reference", {}, {})),
                        "expression": r.component("Expression", {}, {}),
                    })),
                    "expression": r.component("Expression", {}, {}),
                })),
                "change context": state(r.group({
                    "new context": r.component("Selection", {}, {}),
                    "expression": r.component("Expression", {}, {}),
                })),
                "implement me": state(r.text()),
                "selection deprecated": state(r.component("Selection", {}, {})),
                "unreachable": state(r.nothing()),
                // "deprecated function": state(r.group({
                //     "expression": r.component("Expression", {}, {}),
                //     "temp has parameters": r.boolean(),
                //     "temp resulting node": r.optional(r.component("Type Node Reference", {}, {})),
                // })),
            })),
            "initialize": state(r.state({
                "boolean": state(r.state({
                    "literal": state(r.state({
                        "false": state(r.nothing()),
                        "true": state(r.nothing()),
                    })),
                    "not": state(r.component("Selection", {}, {})),
                })),
                "component": state(r.state({
                    "call": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "context": r.component("Expression", {}, {}),
                        "arguments": r.optional(r.dictionary(r.component("Expression", {}, {}))),
                        "abort": r.optional(r.component("Expression", {}, {}))
                    })),
                })),
                "dictionary": state(r.state({
                    "literal": state(r.dictionary(r.component("Expression", {}, {}))),
                    "map": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {})
                    })),
                })),
                "group": state(r.dictionary(r.component("Expression", {}, {}))),
                "list": state(r.state({
                    "literal": state(r.list(r.component("Expression", {}, {}))),
                    "map": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "item handler": r.component("Expression", {}, {})
                    })),
                })),
                "nothing": state(r.nothing()),
                "number": state(r.state({
                    "approximation": state(r.state({
                        "literal": state(r.number())
                    })),
                    "integer": state(r.state({
                        "literal": state(r.number())
                    })),
                    "natural": state(r.state({
                        "literal": state(r.number())
                    })),
                })),
                "optional": state(r.state({
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
                    "literal": state(r.group({
                        "type": r.state({
                            "identifier": state(r.nothing()),
                            "freeform": state(r.nothing()),
                        }),
                        "value": r.text(),
                    }))
                })),
            })),
            "decide": state(r.group({
                "type": r.state({
                    "boolean": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Type Node Reference", {}, {})),
                        "if false": r.component("Expression", {}, {}),
                        "if true": r.component("Expression", {}, {}),
                    })),
                    "optional": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Type Node Reference", {}, {})),
                        "if not set": r.component("Expression", {}, {}),
                        "if set": r.component("Expression", {}, {}),
                    })),
                    "state": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Type Node Reference", {}, {})),
                        "type": r.state({
                            "partial": state(r.group({
                                "cases": r.dictionary(r.component("Expression", {}, {})),
                                "default": r.component("Expression", {}, {}),
                            })),
                            "full": state(r.group({
                                "cases": r.dictionary(r.component("Expression", {}, {})),
                            }))
                        }),
                    })),
                }),
            })),
        })),

        "Selection": resolver(r.group({
            "start": r.state({
                "abort deprecated": state(r.nothing()),
                "argument": state(r.text()),
                "call": state(r.group({
                    "source": r.component("Selection", {}, {}),
                    "context": r.component("Selection", {}, {}),
                    "arguments": r.optional(r.dictionary(r.component("Expression", {}, {}))),
                })),
                "context": state(r.nothing()),
                "entry": state(r.group({
                    "dictionary": r.component("Selection", {}, {}),
                    "id": r.component("Selection", {}, {}),
                    "abort handler": r.component("Abort Expression", {}, {}),
                })),
                "implement me": state(r.text()),
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
        })),

        "Abort Expression": resolver(r.state({
            "current": state(r.nothing()),
            "new": state(r.component("Expression", {}, {}))
        })),

    })