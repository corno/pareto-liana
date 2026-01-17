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
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {


        "Graph": type(t.group({
            "name": prop(t.optional(t.text_global("Text Value"))),
            "tree": prop(t.component("Tree")),
            "type": prop(t.state_group({
                "undirected": tstate(t.group({
                    "edges": prop(t.list(t.group({
                        "yin": prop(t.component("End Point Specification")),
                        "yang": prop(t.component("End Point Specification")),
                        "attributes": prop(t.component("Edge Attributes")),
                    })))
                })),
                "directed": tstate(t.group({
                    "edges": prop(t.list(t.group({
                        "from": prop(t.component("End Point Specification")),
                        "to": prop(t.component("End Point Specification")),
                        "attributes": prop(t.component("Edge Attributes")),
                    })))
                })),
            })),
        })),

        /**
         * a tree contains nodes and subgraphs
         */
        "Tree": type(t.group({
            "attributes": prop(t.component("Graph Attributes")),
            "elements": prop(t.dictionary(t.state_group({
                "node": tstate(t.group({
                    "attributes": prop(t.component("Node Attributes")),
                })),
                "sub": tstate(t.group({
                    "type": prop(t.state_group({
                        "group": tstate(t.nothing()),
                        "cluster": tstate(t.nothing()),
                        "subgraph": tstate(t.nothing()),
                    })),
                    "tree": prop(t.component_cyclic("Tree")),
                })),
                //}), 'ordered') cannot be ordered until the schema is constrained
            })))
        })),

        "End Point Specification": type(t.group({
            "start": prop(t.text_global("Text Value")),
            "tail": prop(t.list(t.text_global("Text Value"))),
            "port data": prop(t.optional(t.group({
                "port": prop(t.text_global("Text Value")),
                "compass direction": prop(t.optional(t.text_global("Text Value"))),
            }))),
        })),



        "Graph Attributes": type(t.list(t.state_group({
            "concentrate": tstate(t.boolean()),
            "charset": tstate(t.text_global("Text Value")),
            "clusterrank": tstate(t.state_group({
                "none": tstate(t.nothing()),
                "local": tstate(t.nothing()),
                "global": tstate(t.nothing()),
            })),
            "color": tstate(t.text_global("Text Value")),
            "color scheme": tstate(t.text_global("Text Value")),
            "comment": tstate(t.text_global("Text Value")),
            "compound": tstate(t.boolean()),
            "dpi": tstate(t.number_local(n.integer())),
            "font color": tstate(t.text_global("Text Value")),
            "font name": tstate(t.text_global("Text Value")),
            "font path": tstate(t.text_global("Text Value")),
            "font size": tstate(t.number_local(n.integer())),
            "label": tstate(t.text_global("Text Value")),
            "label distance": tstate(t.number_local(n.integer())),
            "label scheme": tstate(t.number_local(n.integer())),
            "label location": tstate(t.state_group({
                "top": tstate(t.nothing()),
                "bottom": tstate(t.nothing()),
            })),
            "landscape": tstate(t.boolean()),
            "layer list": tstate(t.text_global("Text Value")),
            "layer separator": tstate(t.text_global("Text Value")),
            "layers": tstate(t.text_global("Text Value")),
            "margin": tstate(t.text_global("Text Value")),
            "max iteration": tstate(t.number_local(n.integer())),
            "mclimit": tstate(t.number_local(n.integer())),
            "mindist": tstate(t.number_local(n.integer())),
            "mode": tstate(t.state_group({
                "no output": tstate(t.nothing()),
                "out": tstate(t.nothing()),
                "in": tstate(t.nothing()),
                "in out": tstate(t.nothing()),
            })),
            "newrank": tstate(t.boolean()),
            "no loop": tstate(t.boolean()),
            "normalize": tstate(t.boolean()),
            "ordering": tstate(t.state_group({
                "out": tstate(t.nothing()),
                "in": tstate(t.nothing()),
                "in out": tstate(t.nothing()),
            })),
            "orientation": tstate(t.number_local(n.integer())),
            "output order": tstate(t.state_group({
                "breadth first": tstate(t.nothing()),
                "dfs": tstate(t.nothing()),
            })),
            "overlap": tstate(t.text_global("Text Value")),
            "output mode": tstate(t.state_group({
                "edges first": tstate(t.nothing()),
                "nodes first": tstate(t.nothing()),
            })),
            "pack": tstate(t.boolean()),
            "pack mode": tstate(t.state_group({
                "node": tstate(t.nothing()),
                "graph": tstate(t.nothing()),
            })),
            "pad": tstate(t.number_local(n.integer())),
            "page": tstate(t.text_global("Text Value")),
            "quadtree": tstate(t.boolean()),
            "quantum": tstate(t.number_local(n.integer())),
            "rankdir": tstate(t.state_group({
                "top bottom": tstate(t.nothing()),
                "bottom top": tstate(t.nothing()),
                "left right": tstate(t.nothing()),
                "right left": tstate(t.nothing()),
            })),
            "ranksep": tstate(t.text_global("Text Value")),
            "ratio": tstate(t.text_global("Text Value")),
            "remincross": tstate(t.boolean()),
            "rotate": tstate(t.number_local(n.integer())),
            "scale": tstate(t.text_global("Text Value")),
            "searchsize": tstate(t.number_local(n.integer())),
            "sep": tstate(t.text_global("Text Value")),
            "showboxes": tstate(t.boolean()),
            "size": tstate(t.text_global("Text Value")),
            "smoothing": tstate(t.state_group({
                "none": tstate(t.nothing()),
                "spring": tstate(t.nothing()),
                "triangle": tstate(t.nothing()),
            })),
            "sortv": tstate(t.boolean()),
            "splines": tstate(t.text_global("Text Value")),
            "start": tstate(t.number_local(n.integer())),
            "style": tstate(t.text_global("Text Value")),
            "stylesheet": tstate(t.text_global("Text Value")),
            "target": tstate(t.text_global("Text Value")),
            "tooltip": tstate(t.text_global("Text Value")),
            "truecolor": tstate(t.boolean()),
            "viewport": tstate(t.text_global("Text Value")),
            "width": tstate(t.number_local(n.integer())),
            "xdotversion": tstate(t.number_local(n.integer())),
            "xlabel": tstate(t.text_global("Text Value")),
        }))),

        "Node Attributes": type(t.list(t.state_group({
            "color": tstate(t.text_global("Text Value")),
            "colorscheme": tstate(t.text_global("Text Value")),
            "comment": tstate(t.text_global("Text Value")),
            "concentrate": tstate(t.boolean()),
            "fill color": tstate(t.text_global("Text Value")),
            "fixed size": tstate(t.boolean()),
            "font color": tstate(t.text_global("Text Value")),
            "font name": tstate(t.text_global("Text Value")),
            "font size": tstate(t.number_local(n.integer())),
            "group": tstate(t.text_global("Text Value")),
            "height": tstate(t.number_local(n.approximation(10))),
            "image": tstate(t.text_global("Text Value")),
            "label": tstate(t.text_global("Text Value")),
            "labelloc": tstate(t.state_group({
                "top": tstate(t.nothing()),
                "center": tstate(t.nothing()),
                "bottom": tstate(t.nothing()),
            })),
            "layers": tstate(t.text_global("Text Value")),
            "margin": tstate(t.text_global("Text Value")),
            "nojustify": tstate(t.boolean()),
            "orientation": tstate(t.number_local(n.integer())),
            "pen width": tstate(t.number_local(n.approximation(10))),
            "peripheries": tstate(t.number_local(n.integer())),
            "pos": tstate(t.text_global("Text Value")),
            "rects": tstate(t.text_global("Text Value")),
            "regular": tstate(t.boolean()),
            "root": tstate(t.boolean()),
            "shape": tstate(t.text_global("Text Value")),
            "showboxes": tstate(t.boolean()),
            "sides": tstate(t.number_local(n.integer())),
            "skew": tstate(t.number_local(n.approximation(10))),
            "style": tstate(t.text_global("Text Value")),
            "target": tstate(t.text_global("Text Value")),
            "tooltip": tstate(t.text_global("Text Value")),
            "width": tstate(t.number_local(n.approximation(10))),
            "xlabel": tstate(t.text_global("Text Value")),
            "xlp": tstate(t.text_global("Text Value")),
        }))),

        "Edge Attributes": type(t.list(t.state_group({
            "arrowhead": tstate(t.text_global("Text Value")),
            "arrowsize": tstate(t.number_local(n.approximation(10))),
            "arrowtail": tstate(t.text_global("Text Value")),
            "bgcolor": tstate(t.text_global("Text Value")),
            "color": tstate(t.text_global("Text Value")),
            "colorscheme": tstate(t.text_global("Text Value")),
            "comment": tstate(t.text_global("Text Value")),
            "constraint": tstate(t.boolean()),
            "decorate": tstate(t.boolean()),
            "dir": tstate(t.state_group({
                "forward": tstate(t.nothing()),
                "back": tstate(t.nothing()),
                "both": tstate(t.nothing()),
                "none": tstate(t.nothing()),
            })),
            "edge url": tstate(t.text_global("Text Value")),
            "edge lp": tstate(t.text_global("Text Value")),
            "edge target": tstate(t.text_global("Text Value")),
            "edge tooltip": tstate(t.text_global("Text Value")),
            "head lp": tstate(t.text_global("Text Value")),
            "headclip": tstate(t.boolean()),
            "headlabel": tstate(t.text_global("Text Value")),
            "headport": tstate(t.text_global("Text Value")),
            "height": tstate(t.number_local(n.approximation(10))),
            "id": tstate(t.text_global("Text Value")),
            "label": tstate(t.text_global("Text Value")),
            "label distance": tstate(t.number_local(n.approximation(10))),
            "label angle": tstate(t.number_local(n.approximation(10))),
            "label float": tstate(t.boolean()),
            "labelfloat": tstate(t.boolean()),
            "labelhref": tstate(t.text_global("Text Value")),
            "label lp": tstate(t.text_global("Text Value")),
            "layer": tstate(t.text_global("Text Value")),
            "len": tstate(t.number_local(n.approximation(10))),
            "lhead": tstate(t.text_global("Text Value")),
            "lp": tstate(t.text_global("Text Value")),
            "ltail": tstate(t.text_global("Text Value")),
            "minlen": tstate(t.number_local(n.integer())),
            "pen width": tstate(t.number_local(n.approximation(10))),
            "pos": tstate(t.text_global("Text Value")),
            "same head": tstate(t.boolean()),
            "same tail": tstate(t.boolean()),
            "showboxes": tstate(t.boolean()),
            "style": tstate(t.text_global("Text Value")),
            "tail lp": tstate(t.text_global("Text Value")),
            "tailclip": tstate(t.boolean()),
            "taillabel": tstate(t.text_global("Text Value")),
            "tailport": tstate(t.text_global("Text Value")),
            "tooltip": tstate(t.text_global("Text Value")),
            "weight": tstate(t.number_local(n.integer())),
            "xlabel": tstate(t.text_global("Text Value")),
            "xlp": tstate(t.text_global("Text Value")),
        }))),

        /**
         * 
         */
        "Attribute Value": type(t.state_group({
            "number": tstate(t.text_global("Text Value")),
            "string": tstate(t.text_global("Text Value")),
            "html string": tstate(t.text_global("Text Value")),
        })),
    }
)


