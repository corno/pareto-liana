import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "M3": module_(t.group({
            "id": prop(t.component_external("generic", "ID")),
            "properties": prop(t.group({
                "version": prop(t.text_global("text")),
            })),
            "references": prop(t.group({
                "dependencies": prop(t.component_external("generic", "References")),
            })),
            "containments": prop(t.group({
                "entities": prop(t.dictionary(t.group({
                    "id": prop(t.component_external("generic", "ID")),
                    "classifier": prop(t.state({
                        "Classifier": toption(t.group({
                            "classifier": prop(t.state({
                                "Concept": toption(t.group({
                                    "properties": prop(t.group({
                                        "abstract": prop(t.text_global("text")),
                                        "partition": prop(t.text_global("text")),
                                    })),
                                    "references": prop(t.group({
                                        "extends": prop(t.component_external("generic", "Optional Reference")),
                                        "implements": prop(t.component_external("generic", "References")),
                                    })),

                                })),
                                "Interface": toption(t.group({
                                    "references": prop(t.group({
                                        "extends": prop(t.component_external("generic", "References")),
                                    })),
                                })),
                                //annotation needs to be implemented
                            })),
                            "containments": prop(t.group({
                                "features": prop(t.dictionary(t.group({
                                    "id": prop(t.component_external("generic", "ID")),
                                    "classifier": prop(t.state({
                                        "Property": toption(t.group({
                                            "references": prop(t.group({
                                                "type": prop(t.component_external("generic", "Singular Reference")),
                                            })),
                                        })),
                                        "Link": toption(t.group({
                                            "classifier": prop(t.state({
                                                "Containment": toption(t.nothing()),
                                                "Reference": toption(t.nothing()),
                                            })),
                                            "properties": prop(t.group({
                                                "multiple": prop(t.text_global("text")),
                                            })),
                                            "references": prop(t.group({
                                                "type": prop(t.component_external("generic", "Singular Reference")),
                                            })),
                                        })),
                                    })),
                                    "properties": prop(t.group({
                                        "optional": prop(t.text_global("text")),
                                    })),
                                }))),
                            })),
                        })),
                        "Datatype": toption(t.state({
                            "Enumeration": toption(t.dictionary(t.group({
                                "id": prop(t.component_external("generic", "ID")),
                            }))),
                            // structured data type and primitive type need to be implemented
                        })),
                    })),
                }))),
            }))
        })),
    }
)