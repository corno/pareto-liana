
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "M3": sh.module_(sh.t.group({
            "id": sh.prop(sh.t.component_external("generic", "ID")),
            "properties": sh.prop(sh.t.group({
                "version": sh.prop(sh.t.text_global("text")),
            })),
            "references": sh.prop(sh.t.group({
                "dependencies": sh.prop(sh.t.component_external("generic", "References")),
            })),
            "containments": sh.prop(sh.t.group({
                "entities": sh.prop(sh.t.dictionary(sh.t.group({
                    "id": sh.prop(sh.t.component_external("generic", "ID")),
                    "classifier": sh.prop(sh.t.state({
                        "Classifier": sh.toption(sh.t.group({
                            "classifier": sh.prop(sh.t.state({
                                "Concept": sh.toption(sh.t.group({
                                    "properties": sh.prop(sh.t.group({
                                        "abstract": sh.prop(sh.t.text_global("text")),
                                        "partition": sh.prop(sh.t.text_global("text")),
                                    })),
                                    "references": sh.prop(sh.t.group({
                                        "extends": sh.prop(sh.t.component_external("generic", "Optional Reference")),
                                        "implements": sh.prop(sh.t.component_external("generic", "References")),
                                    })),

                                })),
                                "Interface": sh.toption(sh.t.group({
                                    "references": sh.prop(sh.t.group({
                                        "extends": sh.prop(sh.t.component_external("generic", "References")),
                                    })),
                                })),
                                //annotation needs to be implemented
                            })),
                            "containments": sh.prop(sh.t.group({
                                "features": sh.prop(sh.t.dictionary(sh.t.group({
                                    "id": sh.prop(sh.t.component_external("generic", "ID")),
                                    "classifier": sh.prop(sh.t.state({
                                        "Property": sh.toption(sh.t.group({
                                            "references": sh.prop(sh.t.group({
                                                "type": sh.prop(sh.t.component_external("generic", "Singular Reference")),
                                            })),
                                        })),
                                        "Link": sh.toption(sh.t.group({
                                            "classifier": sh.prop(sh.t.state({
                                                "Containment": sh.toption(sh.t.nothing()),
                                                "Reference": sh.toption(sh.t.nothing()),
                                            })),
                                            "properties": sh.prop(sh.t.group({
                                                "multiple": sh.prop(sh.t.text_global("text")),
                                            })),
                                            "references": sh.prop(sh.t.group({
                                                "type": sh.prop(sh.t.component_external("generic", "Singular Reference")),
                                            })),
                                        })),
                                    })),
                                    "properties": sh.prop(sh.t.group({
                                        "optional": sh.prop(sh.t.text_global("text")),
                                    })),
                                }))),
                            })),
                        })),
                        "Datatype": sh.toption(sh.t.state({
                            "Enumeration": sh.toption(sh.t.dictionary(sh.t.group({
                                "id": sh.prop(sh.t.component_external("generic", "ID")),
                            }))),
                            // structured data type and primitive type need to be implemented
                        })),
                    })),
                }))),
            }))
        })),
    }
)