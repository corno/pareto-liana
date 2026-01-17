import * as _pi from 'pareto-core-interface'

import { resolvers, r, resolver, sig, state, st } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Resolvers = resolvers(
    {

        "Module Set": resolver(r.dictionary(r.state_group({
            "module": state(r.component("Module", {}, {})),
            "set": state(r.component("Module Set", {}, {})),
        }))),

        "Module": resolver(r.group({
            "type": r.state_group({
                "serializer": state(r.nothing()),
                "deserializer": state(r.nothing()),
                "transformer": state(r.nothing()),
                "refiner": state(r.nothing()),
            }),
            "type imports": r.component_external("interface", "Imports", {}, {}),
            "variable imports": r.dictionary(r.group({
                "tail": r.list(r.text()),
                "type": r.state_group({
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
                "temp has error": r.boolean(),
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
            "sub selection": r.list(r.state_group({
                "dictionary": state(r.nothing()),
                "group": state(r.text()),
                "list": state(r.nothing()),
                "optional": state(r.nothing()),
                "state group": state(r.text()),
            })),
        })),

        "Expression": resolver(r.state_group({
            "special": state(r.state_group({
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
                "implement me": state(r.nothing()),
                "selection deprecated": state(r.component("Selection", {}, {})),
                "unreachable": state(r.nothing()),
                "deprecated function": state(r.group({
                    "expression": r.component("Expression", {}, {}),
                    "temp has parameters": r.boolean(),
                    "temp resulting node": r.optional(r.component("Type Node Reference", {}, {})),
                })),
            })),
            "initialize": state(r.state_group({
                "boolean": state(r.state_group({
                    "literal": state(r.state_group({
                        "false": state(r.nothing()),
                        "true": state(r.nothing()),
                    })),
                    "not": state(r.component("Selection", {}, {})),
                })),
                "component": state(r.state_group({
                    "call": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "context": r.component("Expression", {}, {}),
                        "arguments": r.optional(r.dictionary(r.component("Expression", {}, {}))),
                        "abort": r.boolean()
                    })),
                })),
                "dictionary": state(r.state_group({
                    "literal": state(r.dictionary(r.component("Expression", {}, {}))),
                    "map": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "entry handler": r.component("Expression", {}, {})
                    })),
                })),
                "group": state(r.dictionary(r.component("Expression", {}, {}))),
                "list": state(r.state_group({
                    "literal": state(r.list(r.component("Expression", {}, {}))),
                    "map": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "element handler": r.component("Expression", {}, {})
                    })),
                })),
                "nothing": state(r.nothing()),
                "number": state(r.state_group({
                    "approximation": state(r.state_group({
                        "literal": state(r.number())
                    })),
                    "integer": state(r.state_group({
                        "literal": state(r.number())
                    })),
                    "natural": state(r.state_group({
                        "literal": state(r.number())
                    })),
                })),
                "optional": state(r.state_group({
                    "literal": state(r.state_group({
                        "not set": state(r.nothing()),
                        "set": state(r.component("Expression", {}, {})),
                    })),
                    "map": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "set handler": r.component("Expression", {}, {})
                    })),
                })),
                "state group": state(r.state_group({
                    "literal": state(r.group({
                        "state": r.text(),
                        "value": r.component("Expression", {}, {}),
                    })),
                })),
                "text": state(r.state_group({
                    "literal": state(r.group({
                        "delimiter": r.state_group({
                            "backtick": state(r.nothing()),
                            "quote": state(r.nothing()),
                        }),
                        "value": r.text(),
                    }))
                })),
            })),
            "decide": state(r.group({
                "type": r.state_group({
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
                    "state group": state(r.group({
                        "source": r.component("Selection", {}, {}),
                        "temp resulting node": r.optional(r.component("Type Node Reference", {}, {})),
                        "type": r.state_group({
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
            "start": r.state_group({
                "implement me": state(r.nothing()),
                "abort deprecated": state(r.nothing()),
                "call": state(r.group({
                    "source": r.component("Selection", {}, {}),
                    "context": r.component("Selection", {}, {}),
                    "arguments": r.optional(r.dictionary(r.component("Expression", {}, {}))),
                })),
                "argument": state(r.text()),
                "context": state(r.nothing()),
                "variable": state(r.text()),
                "parameter": state(r.text()),
                "imported variable": state(r.group({
                    "import": r.text(),
                    "variable": r.text(),
                })),
            }),
            "tail": r.list(r.text()),
        })),

    })