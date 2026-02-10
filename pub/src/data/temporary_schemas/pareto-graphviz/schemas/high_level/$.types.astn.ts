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


        "Graph": module_(t.group({
            "name": prop(t.optional(t.text_global("Text Value"))),
            "tree": prop(t.component("Tree")),
            "type": prop(t.state({
                "undirected": toption(t.group({
                    "edges": prop(t.list(t.group({
                        "yin": prop(t.component("End Point Specification")),
                        "yang": prop(t.component("End Point Specification")),
                        "attributes": prop(t.component("Edge Attributes")),
                    })))
                })),
                "directed": toption(t.group({
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
        "Tree": module_(t.group({
            "attributes": prop(t.component("Graph Attributes")),
            "elements": prop(t.dictionary(t.state({
                "node": toption(t.group({
                    "attributes": prop(t.component("Node Attributes")),
                })),
                "sub": toption(t.group({
                    "type": prop(t.state({
                        "group": toption(t.nothing()),
                        "cluster": toption(t.nothing()),
                        "subgraph": toption(t.nothing()),
                    })),
                    "tree": prop(t.component("Tree")),
                })),
                //}), 'ordered') cannot be ordered until the schema is constrained
            })))
        })),

        "End Point Specification": module_(t.group({
            "start": prop(t.text_global("Text Value")),
            "tail": prop(t.list(t.text_global("Text Value"))),
            "port data": prop(t.optional(t.group({
                "port": prop(t.text_global("Text Value")),
                "compass direction": prop(t.optional(t.text_global("Text Value"))),
            }))),
        })),



        "Graph Attributes": module_(t.list(t.state({
            "concentrate": toption(t.boolean()),
            "charset": toption(t.text_global("Text Value")),
            "clusterrank": toption(t.state({
                "none": toption(t.nothing()),
                "local": toption(t.nothing()),
                "global": toption(t.nothing()),
            })),
            "color": toption(t.text_global("Text Value")),
            "color scheme": toption(t.text_global("Text Value")),
            "comment": toption(t.text_global("Text Value")),
            "compound": toption(t.boolean()),
            "dpi": toption(t.number_local(n.integer(null))),
            "font color": toption(t.text_global("Text Value")),
            "font name": toption(t.text_global("Text Value")),
            "font path": toption(t.text_global("Text Value")),
            "font size": toption(t.number_local(n.integer(null))),
            "label": toption(t.text_global("Text Value")),
            "label distance": toption(t.number_local(n.integer(null))),
            "label scheme": toption(t.number_local(n.integer(null))),
            "label location": toption(t.state({
                "top": toption(t.nothing()),
                "bottom": toption(t.nothing()),
            })),
            "landscape": toption(t.boolean()),
            "layer list": toption(t.text_global("Text Value")),
            "layer separator": toption(t.text_global("Text Value")),
            "layers": toption(t.text_global("Text Value")),
            "margin": toption(t.text_global("Text Value")),
            "max iteration": toption(t.number_local(n.integer(null))),
            "mclimit": toption(t.number_local(n.integer(null))),
            "mindist": toption(t.number_local(n.integer(null))),
            "mode": toption(t.state({
                "no output": toption(t.nothing()),
                "out": toption(t.nothing()),
                "in": toption(t.nothing()),
                "in out": toption(t.nothing()),
            })),
            "newrank": toption(t.boolean()),
            "no loop": toption(t.boolean()),
            "normalize": toption(t.boolean()),
            "ordering": toption(t.state({
                "out": toption(t.nothing()),
                "in": toption(t.nothing()),
                "in out": toption(t.nothing()),
            })),
            "orientation": toption(t.number_local(n.integer(null))),
            "output order": toption(t.state({
                "breadth first": toption(t.nothing()),
                "dfs": toption(t.nothing()),
            })),
            "overlap": toption(t.text_global("Text Value")),
            "output mode": toption(t.state({
                "edges first": toption(t.nothing()),
                "nodes first": toption(t.nothing()),
            })),
            "pack": toption(t.boolean()),
            "pack mode": toption(t.state({
                "node": toption(t.nothing()),
                "graph": toption(t.nothing()),
            })),
            "pad": toption(t.number_local(n.integer(null))),
            "page": toption(t.text_global("Text Value")),
            "quadtree": toption(t.boolean()),
            "quantum": toption(t.number_local(n.integer(null))),
            "rankdir": toption(t.state({
                "top bottom": toption(t.nothing()),
                "bottom top": toption(t.nothing()),
                "left right": toption(t.nothing()),
                "right left": toption(t.nothing()),
            })),
            "ranksep": toption(t.text_global("Text Value")),
            "ratio": toption(t.text_global("Text Value")),
            "remincross": toption(t.boolean()),
            "rotate": toption(t.number_local(n.integer(null))),
            "scale": toption(t.text_global("Text Value")),
            "searchsize": toption(t.number_local(n.integer(null))),
            "sep": toption(t.text_global("Text Value")),
            "showboxes": toption(t.boolean()),
            "size": toption(t.text_global("Text Value")),
            "smoothing": toption(t.state({
                "none": toption(t.nothing()),
                "spring": toption(t.nothing()),
                "triangle": toption(t.nothing()),
            })),
            "sortv": toption(t.boolean()),
            "splines": toption(t.text_global("Text Value")),
            "start": toption(t.number_local(n.integer(null))),
            "style": toption(t.text_global("Text Value")),
            "stylesheet": toption(t.text_global("Text Value")),
            "target": toption(t.text_global("Text Value")),
            "tooltip": toption(t.text_global("Text Value")),
            "truecolor": toption(t.boolean()),
            "viewport": toption(t.text_global("Text Value")),
            "width": toption(t.number_local(n.integer(null))),
            "xdotversion": toption(t.number_local(n.integer(null))),
            "xlabel": toption(t.text_global("Text Value")),
        }))),

        "Node Attributes": module_(t.list(t.state({
            "color": toption(t.text_global("Text Value")),
            "colorscheme": toption(t.text_global("Text Value")),
            "comment": toption(t.text_global("Text Value")),
            "concentrate": toption(t.boolean()),
            "fill color": toption(t.text_global("Text Value")),
            "fixed size": toption(t.boolean()),
            "font color": toption(t.text_global("Text Value")),
            "font name": toption(t.text_global("Text Value")),
            "font size": toption(t.number_local(n.integer(null))),
            "group": toption(t.text_global("Text Value")),
            "height": toption(t.number_local(n.approximation(10))),
            "image": toption(t.text_global("Text Value")),
            "label": toption(t.text_global("Text Value")),
            "labelloc": toption(t.state({
                "top": toption(t.nothing()),
                "center": toption(t.nothing()),
                "bottom": toption(t.nothing()),
            })),
            "layers": toption(t.text_global("Text Value")),
            "margin": toption(t.text_global("Text Value")),
            "nojustify": toption(t.boolean()),
            "orientation": toption(t.number_local(n.integer(null))),
            "pen width": toption(t.number_local(n.approximation(10))),
            "peripheries": toption(t.number_local(n.integer(null))),
            "pos": toption(t.text_global("Text Value")),
            "rects": toption(t.text_global("Text Value")),
            "regular": toption(t.boolean()),
            "root": toption(t.boolean()),
            "shape": toption(t.text_global("Text Value")),
            "showboxes": toption(t.boolean()),
            "sides": toption(t.number_local(n.integer(null))),
            "skew": toption(t.number_local(n.approximation(10))),
            "style": toption(t.text_global("Text Value")),
            "target": toption(t.text_global("Text Value")),
            "tooltip": toption(t.text_global("Text Value")),
            "width": toption(t.number_local(n.approximation(10))),
            "xlabel": toption(t.text_global("Text Value")),
            "xlp": toption(t.text_global("Text Value")),
        }))),

        "Edge Attributes": module_(t.list(t.state({
            "arrowhead": toption(t.text_global("Text Value")),
            "arrowsize": toption(t.number_local(n.approximation(10))),
            "arrowtail": toption(t.text_global("Text Value")),
            "bgcolor": toption(t.text_global("Text Value")),
            "color": toption(t.text_global("Text Value")),
            "colorscheme": toption(t.text_global("Text Value")),
            "comment": toption(t.text_global("Text Value")),
            "constraint": toption(t.boolean()),
            "decorate": toption(t.boolean()),
            "dir": toption(t.state({
                "forward": toption(t.nothing()),
                "back": toption(t.nothing()),
                "both": toption(t.nothing()),
                "none": toption(t.nothing()),
            })),
            "edge url": toption(t.text_global("Text Value")),
            "edge lp": toption(t.text_global("Text Value")),
            "edge target": toption(t.text_global("Text Value")),
            "edge tooltip": toption(t.text_global("Text Value")),
            "head lp": toption(t.text_global("Text Value")),
            "headclip": toption(t.boolean()),
            "headlabel": toption(t.text_global("Text Value")),
            "headport": toption(t.text_global("Text Value")),
            "height": toption(t.number_local(n.approximation(10))),
            "id": toption(t.text_global("Text Value")),
            "label": toption(t.text_global("Text Value")),
            "label distance": toption(t.number_local(n.approximation(10))),
            "label angle": toption(t.number_local(n.approximation(10))),
            "label float": toption(t.boolean()),
            "labelfloat": toption(t.boolean()),
            "labelhref": toption(t.text_global("Text Value")),
            "label lp": toption(t.text_global("Text Value")),
            "layer": toption(t.text_global("Text Value")),
            "len": toption(t.number_local(n.approximation(10))),
            "lhead": toption(t.text_global("Text Value")),
            "lp": toption(t.text_global("Text Value")),
            "ltail": toption(t.text_global("Text Value")),
            "minlen": toption(t.number_local(n.integer(null))),
            "pen width": toption(t.number_local(n.approximation(10))),
            "pos": toption(t.text_global("Text Value")),
            "same head": toption(t.boolean()),
            "same tail": toption(t.boolean()),
            "showboxes": toption(t.boolean()),
            "style": toption(t.text_global("Text Value")),
            "tail lp": toption(t.text_global("Text Value")),
            "tailclip": toption(t.boolean()),
            "taillabel": toption(t.text_global("Text Value")),
            "tailport": toption(t.text_global("Text Value")),
            "tooltip": toption(t.text_global("Text Value")),
            "weight": toption(t.number_local(n.integer(null))),
            "xlabel": toption(t.text_global("Text Value")),
            "xlp": toption(t.text_global("Text Value")),
        }))),

        /**
         * 
         */
        "Attribute Value": module_(t.state({
            "number": toption(t.text_global("Text Value")),
            "string": toption(t.text_global("Text Value")),
            "html string": toption(t.text_global("Text Value")),
        })),
    }
)


