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
            "type imports": prop(t.component_external("interface", "Imports")),
            "variable imports": prop(t.dictionary(t.group({
                "tail": prop(t.list(t.text_global("TBD"))),
                "type": prop(t.state({
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
                "temp has abort": prop(t.boolean()),
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
            "sub selection": prop(t.list(t.state({
                "dictionary": tstate(t.nothing()),
                "group": tstate(t.text_global("TBD")),
                "list": tstate(t.nothing()),
                "optional": tstate(t.nothing()),
                "state": tstate(t.text_global("TBD")),
            }))),
        })),

        "Expression": type(t.state({
            "special": tstate(t.state({
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
                "implement me": tstate(t.text_local(text('single line'))),
                "selection deprecated": tstate(t.component_cyclic("Selection")),
                "unreachable": tstate(t.nothing()),
                // "deprecated function": tstate(t.group({
                //     "expression": prop(t.component_cyclic("Expression")),
                //     "temp has parameters": prop(t.boolean()),
                //     "temp resulting node": prop(t.optional(t.component("Type Node Reference"))),
                // })),
            })),
            "initialize": tstate(t.state({
                "boolean": tstate(t.state({
                    "literal": tstate(t.state({
                        "false": tstate(t.nothing()),
                        "true": tstate(t.nothing()),
                    })),
                    "not": tstate(t.component_cyclic("Selection")),
                })),
                "component": tstate(t.state({
                    "call": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "context": prop(t.component_cyclic("Expression")),
                        "arguments": prop(t.optional(t.dictionary(t.component_cyclic("Expression")))),
                        "abort": prop(t.boolean())
                    })),
                })),
                "dictionary": tstate(t.state({
                    "literal": tstate(t.dictionary(t.component_cyclic("Expression"))),
                    "map": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "entry handler": prop(t.component_cyclic("Expression"))
                    })),
                })),
                "group": tstate(t.dictionary(t.component_cyclic("Expression"))),
                "list": tstate(t.state({
                    "literal": tstate(t.list(t.component_cyclic("Expression"))),
                    "map": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "element handler": prop(t.component_cyclic("Expression"))
                    })),
                })),
                "nothing": tstate(t.nothing()),
                "number": tstate(t.state({
                    "approximation": tstate(t.state({
                        "literal": tstate(t.number_local(n.approximation(10)))
                    })),
                    "integer": tstate(t.state({
                        "literal": tstate(t.number_local(n.integer()))
                    })),
                    "natural": tstate(t.state({
                        "literal": tstate(t.number_local(n.natural()))
                    })),
                })),
                "optional": tstate(t.state({
                    "literal": tstate(t.state({
                        "not set": tstate(t.nothing()),
                        "set": tstate(t.component_cyclic("Expression")),
                    })),
                    "map": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
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
                    "literal": tstate(t.group({
                        "type": prop(t.state({
                            "identifier": tstate(t.nothing()),
                            "freeform": tstate(t.nothing()),
                        })),
                        "value": prop(t.text_local(text('single line'))),
                    }))
                })),
            })),
            "decide": tstate(t.group({
                "type": prop(t.state({
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
                    "state": tstate(t.group({
                        "source": prop(t.component_cyclic("Selection")),
                        "temp resulting node": prop(t.optional(t.component("Type Node Reference"))),
                        "type": prop(t.state({
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
            "start": prop(t.state({
                "implement me": tstate(t.text_local(text('single line'))),
                "abort deprecated": tstate(t.nothing()),

                "argument": tstate(t.text_global("TBD")),
                "call": tstate(t.group({
                    "source": prop(t.component_cyclic("Selection")),
                    "context": prop(t.component_cyclic("Selection")),
                    "arguments": prop(t.optional(t.dictionary(t.component_cyclic("Expression")))),
                })),
                "context": tstate(t.nothing()),
                "entry": tstate(t.group({
                    "dictionary": prop(t.component_cyclic("Selection")),
                    "key": prop(t.component_cyclic("Selection")),
                    "abort handler": prop(t.component("Abort Expression")),
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
        })),

        "Abort Expression": type(t.state({
            "current": tstate(t.nothing()),
            "new": tstate(t.component_cyclic("Expression"))
        }))

    }
)