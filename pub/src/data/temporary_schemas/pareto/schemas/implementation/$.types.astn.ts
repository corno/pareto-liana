import * as _pi from 'pareto-core-interface'

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

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Module Set": type(t.dictionary(t.state_group({
            "module": tstate(t.component("Module")),
            "set": tstate(t.component_cyclic("Module Set")),
        }))),

        "Module": type(t.group({
            "type": prop(t.state_group({
                "serializer": tstate(t.nothing()),
                "deserializer": tstate(t.nothing()),
                "transformer": tstate(t.nothing()),
                "refiner": tstate(t.nothing()),
            })),
            "type imports": prop(t.component_external("interface", "Imports")),
            "variable imports": prop(t.dictionary(t.group({
                "tail": prop(t.list(t.text_global("TBD"))),
                "type": prop(t.state_group({
                    "ancestor": tstate(t.group({
                        "dependency": prop(t.text_global("TBD")),
                        "number of steps": prop(t.number_local(n.natural())),
                    })),
                    "external": tstate(t.text_global("TBD")),
                    "sibling": tstate(t.text_global("TBD")),
                })),
            }))),
            "algorithms": prop(t.dictionary(t.group({
                "type": prop(t.component("Type Reference")),
                "expression": prop(t.component_cyclic("Expression")),
                "temp has error": prop(t.boolean()),
                "temp has lookups": prop(t.boolean()),
                "temp has parameters": prop(t.boolean()),
            }))),
        })),

        "Type Reference": type(t.group({
            "import": prop(t.text_global("TBD")),
            "type": prop(t.text_global("TBD")),
        })),

        "Type Node Reference": type(t.group({
            "type": prop(t.component("Type Reference")),
            "sub selection": prop(t.list(t.state_group({
                "dictionary": tstate(t.nothing()),
                "group": tstate(t.text_global("TBD")),
                "list": tstate(t.nothing()),
                "optional": tstate(t.nothing()),
                "state group": tstate(t.text_global("TBD")),
            }))),
        })),

        "Expression": type(t.state_group({
            "special": tstate(t.state_group({
                "abort": tstate(t.component_cyclic("Expression")),
                "block": tstate(t.group({
                    "variables": prop(t.dictionary(t.group({
                        "type": prop(t.optional(t.component("Type Node Reference"))),
                        "expression": prop(t.component_cyclic("Expression")),
                    }))),
                    "temp ordered variables": prop(t.list(t.group({ //FIXME: remove this as soon as the dependencies can be determined in the variables dictionary
                        "name": prop(t.text_global("Identifier")),
                        "type": prop(t.optional(t.component("Type Node Reference"))),
                        "expression": prop(t.component_cyclic("Expression")),
                    }))),
                    "expression": prop(t.component_cyclic("Expression")),
                })),
                "change context": tstate(t.group({
                    "new context": prop(t.component_cyclic("Selection")),
                    "expression": prop(t.component_cyclic("Expression")),
                })),
                "implement me": tstate(t.nothing()),
                "selection deprecated": tstate(t.component_cyclic("Selection")),
                "unreachable": tstate(t.nothing()),
                "deprecated function": tstate(t.group({
                    "expression": prop(t.component_cyclic("Expression")),
                    "temp has parameters": prop(t.boolean()),
                    "temp resulting node": prop(t.optional(t.component("Type Node Reference"))),
                })),
            })),
            "initialize": tstate(t.state_group({
                "boolean": tstate(t.state_group({
                    "literal": tstate(t.state_group({
                        "false": tstate(t.nothing()),
                        "true": tstate(t.nothing()),
                    })),
                    "not": tstate(t.component_cyclic("Selection")),
                })),
                "component": tstate(t.state_group({
                    "call": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "context": prop(t.component_cyclic("Expression")),
                        "arguments": prop(t.optional(t.dictionary(t.component_cyclic("Expression")))),
                        "abort": prop(t.boolean())
                    })),
                })),
                "dictionary": tstate(t.state_group({
                    "literal": tstate(t.dictionary(t.component_cyclic("Expression"))),
                    "map": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "entry handler": prop(t.component_cyclic("Expression"))
                    })),
                })),
                "group": tstate(t.dictionary(t.component_cyclic("Expression"))),
                "list": tstate(t.state_group({
                    "literal": tstate(t.list(t.component_cyclic("Expression"))),
                    "map": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "element handler": prop(t.component_cyclic("Expression"))
                    })),
                })),
                "nothing": tstate(t.nothing()),
                "number": tstate(t.state_group({
                    "approximation": tstate(t.state_group({
                        "literal": tstate(t.number_local(n.approximation(10)))
                    })),
                    "integer": tstate(t.state_group({
                        "literal": tstate(t.number_local(n.integer()))
                    })),
                    "natural": tstate(t.state_group({
                        "literal": tstate(t.number_local(n.natural()))
                    })),
                })),
                "optional": tstate(t.state_group({
                    "literal": tstate(t.state_group({
                        "not set": tstate(t.nothing()),
                        "set": tstate(t.component_cyclic("Expression")),
                    })),
                    "map": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "set handler": prop(t.component_cyclic("Expression"))
                    })),
                })),
                "state group": tstate(t.state_group({
                    "literal": tstate(t.group({
                        "state": prop(t.text_global("Identifier")),
                        "value": prop(t.component_cyclic("Expression")),
                    }))
                })),
                "text": tstate(t.state_group({
                    "literal": tstate(t.group({
                        "delimiter": prop(t.state_group({
                            "backtick": tstate(t.nothing()),
                            "quote": tstate(t.nothing()),
                        })),
                        "value": prop(t.text_local(text('single line'))),
                    }))
                })),
            })),
            "decide": tstate(t.group({
                "type": prop(t.state_group({
                    "boolean": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Type Node Reference"))),
                        "if false": prop(t.component_cyclic("Expression")),
                        "if true": prop(t.component_cyclic("Expression")),
                    })),
                    "optional": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Type Node Reference"))),
                        "if not set": prop(t.component_cyclic("Expression")),
                        "if set": prop(t.component_cyclic("Expression")),
                    })),
                    "state group": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Type Node Reference"))),
                        "type": prop(t.state_group({
                            "partial": tstate(t.group({
                                "cases": prop(t.dictionary(t.component_cyclic("Expression"))),
                                "default": prop(t.component_cyclic("Expression")),
                            })),
                            "full": tstate(t.group({
                                "cases": prop(t.dictionary(t.component_cyclic("Expression"))),
                            }))
                        })),
                    })),
                })),
            })),
        })),

        "Selection": type(t.group({
            "start": prop(t.state_group({
                "implement me": tstate(t.nothing()),
                "abort deprecated": tstate(t.nothing()),

                "call": tstate(t.group({
                    "source": prop(t.component_cyclic("Selection")),
                    "context": prop(t.component_cyclic("Selection")),
                    "arguments": prop(t.optional(t.dictionary(t.component_cyclic("Expression")))),
                })),
                "argument": tstate(t.text_global("TBD")),
                "context": tstate(t.nothing()),
                "variable": tstate(t.text_global("TBD")),
                "parameter": tstate(t.text_global("TBD")),
                "imported variable": tstate(t.group({
                    "import": prop(t.text_global("TBD")),
                    "variable": prop(t.text_global("TBD")),
                }))
            })),
            "tail": prop(t.list(t.text_global("TBD"))),
        })),

    }
)