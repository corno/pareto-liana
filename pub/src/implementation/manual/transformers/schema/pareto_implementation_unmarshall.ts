import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import * as _pdev from 'pareto-core-dev'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

//shorthands
import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

//dependencies
import { $$ as op_flatten_dictionary } from "../../../temp_flatten_dictionary"

const location = sh.a.select(
    sh.sv.call(
        sh.call.external("parse tree to location", "Value"),
        sh.a.select(sh.sv.context([])),
        null,
        sh.lookups.not_set(),
        sh.arguments_.not_set(),
        [
            "start",
            "relative"
        ],
    )
)

export const Schema: _pi.Transformer_With_Parameter<
    d_in.Schema,
    d_out.Package_Set.D,
    {
        'depth': number,
        'path': _pi.List<string>,
    }
> = ($, $p) => {
    const constrained = $.complexity[0] === 'constrained'
    return sh.m.package_(
        ['change context', 'list from text'],
        _p.dictionary.literal({
            "signatures": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                _p.list.nested_literal_old([
                    _p.list.literal([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    _p.list.literal(["unmarshall"]),
                ]),
            ),
            "out": sh_i.import_.ancestor(
                $p.depth,
                "interface",
                _p.list.nested_literal_old([
                    _p.list.literal([
                        "generated",
                        "liana",
                        "schemas"
                    ]),
                    $p.path,
                    $.complexity[0] === 'constrained'
                        ? _p.list.literal(["data", "unresolved"])
                        : _p.list.literal(["data"]),
                ]),
            ),
        }),
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "deserialize number": sh_i.import_.external(
                        "liana-core",
                        _p.list.literal([
                            "dist",
                            "implementation",
                            "manual",
                            "primitives",
                            "integer",
                            "deserializers",
                            "decimal",
                        ]),
                    ),
                    "deserialize boolean": sh_i.import_.external(
                        "liana-core",
                        _p.list.literal([
                            "dist",
                            "implementation",
                            "manual",
                            "primitives",
                            "boolean",
                            "deserializers",
                            "true false",
                        ]),
                    ),
                    "unmarshalled from parse tree": sh_i.import_.external(
                        "astn-core",
                        [
                            "dist",
                            "implementation",
                            "manual",
                            "schemas",
                            "unmarshalled",
                            "refiners",
                            "parse tree"
                        ]
                    ),
                    "parse tree to location": sh_i.import_.external(
                        "astn-core",
                        [
                            "dist",
                            "implementation",
                            "manual",
                            "schemas",
                            "parse tree",
                            "transformers",
                            "location"
                        ]
                    ),
                }),
                "external ": $.imports.__d_map(($, id) => constrained
                    ? sh_i.import_.ancestor(3, $['schema set child']['l id'], ["unresolved", "refiners", "astn parse tree"])
                    : sh_i.import_.ancestor(2, $['schema set child']['l id'], ["refiners", "astn parse tree"])
                ),
            }),
            {
                'separator': "",
            },
            () => _p_unreachable_code_path("the keys in the root entry with the empty id do not conflict with the other key: 'external '"),
        ),
        $.modules.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            ['abort'],
            Value(
                $['root value'],
                {
                    'temp type': id,
                    'temp subselection': _p.list.literal([]),
                    'constrained': constrained
                }
            ),
        )),
    )
}

export const Value = (
    $: d_in.Value,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<d_out_interface.Value.reference.sub_selection.L> //can be removed when exupery has type inference
        'constrained': boolean
    },
): d_out.Assign => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.a.select(
                sh.sv.call(
                    sh.call.external("deserialize boolean", "deserialize"),
                    sh.a.select(
                        sh.sv.list_from_text(
                            sh.sv.call(
                                sh.call.external("unmarshalled from parse tree", "Text"),
                                sh.a.select(sh.sv.context([])),
                                sh.a.state.literal("expected a text", sh.a.nothing()),
                                sh.lookups.not_set(),
                                sh.arguments_.not_set(),
                                [],
                            ),
                            sh.a.select(sh.sv.context([])),
                            []

                        )
                    ),
                    sh.a.state.literal("not a valid boolean", sh.a.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                )
            ))
            case 'component': return _p.ss($, ($) => {
                return sh.a.select(
                    sh.sv.call(
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => sh.call.external(`external ${$.import['l id']}`, $.module['l id']))
                                case 'internal': return _p.ss($, ($) => sh.call.local($['l id']))
                                case 'internal acyclic': return _p.ss($, ($) => sh.call.local($['l id']))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.a.select(sh.sv.context([])),
                        sh.a.select(sh.sv.context([])),
                        sh.lookups.not_set(),
                        sh.arguments_.not_set(),
                        [],
                    )
                )
            })
            case 'dictionary': return _p.ss($, ($) => {
                return $p.constrained
                    ? sh.a.group.literal({
                        "l location": location,
                        "l dictionary": sh.a.dictionary.map(
                            sh.sv.call(
                                sh.call.external("unmarshalled from parse tree", "Dictionary"),
                                sh.a.select(sh.sv.context([])),
                                sh.a.state.literal("expected a dictionary", sh.a.nothing()),
                                sh.lookups.not_set(),
                                sh.arguments_.not_set(),
                                [],
                            ),
                            sh.a.group.literal({
                                "l location": location,
                                "l entry": Value(
                                    $.value,
                                    {
                                        'temp type': $p['temp type'],
                                        'temp subselection': _p.list.nested_literal_old([
                                            $p['temp subselection'],
                                            [
                                                sh_i.sub.group("l dictionary"),
                                                sh_i.sub.dictionary(),
                                                sh_i.sub.group("l entry"),

                                            ]
                                        ]),
                                        'constrained': $p.constrained
                                    }
                                )
                            }),
                        )
                    })
                    : sh.a.dictionary.map(
                        sh.sv.call(
                            sh.call.external("unmarshalled from parse tree", "Dictionary"),
                            sh.a.select(sh.sv.context([])),
                            sh.a.state.literal("expected a dictionary", sh.a.nothing()),
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        ),
                        Value(
                            $.value,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': _p.list.nested_literal_old([
                                    $p['temp subselection'],
                                    [
                                        sh_i.sub.dictionary(),
                                    ]
                                ]),
                                'constrained': $p.constrained
                            }
                        ),
                    )
            })
            case 'group': return _p.ss($, ($) => sh.a.change_context(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "Group"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.state.literal("expected a group", sh.a.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                ),
                sh.a.group.literal($.__d_map(($, id) => sh.a.change_context(
                    sh.sv.dictionary_entry(
                        sh.sv.context([]),
                        sh.a.text.literal(id, 'identifier'),
                        sh.a.state.literal("no such entry", sh.a.text.literal(id, 'freeform')),
                        []
                    ),
                    Value(
                        $.value,
                        {
                            'temp type': $p['temp type'],
                            'temp subselection': _p.list.nested_literal_old([
                                $p['temp subselection'],
                                [
                                    sh_i.sub.group(id),
                                ]
                            ]),
                            'constrained': $p.constrained
                        }
                    )
                ))),
            ))
            case 'list': return _p.ss($, ($) => {
                return $p.constrained
                    ? sh.a.group.literal({
                        "l location": location,
                        "l list": sh.a.list.map(
                            sh.sv.call(
                                sh.call.external("unmarshalled from parse tree", "List"),
                                sh.a.select(sh.sv.context([])),
                                sh.a.state.literal("expected a list", sh.a.nothing()),
                                sh.lookups.not_set(),
                                sh.arguments_.not_set(),
                                [],
                            ),
                            sh.a.group.literal({
                                "l location": location,
                                "l item": Value(
                                    $.value,
                                    {
                                        'temp type': $p['temp type'],
                                        'temp subselection': _p.list.nested_literal_old([
                                            $p['temp subselection'],
                                            [
                                                sh_i.sub.group("l list"),
                                                sh_i.sub.list(),
                                                sh_i.sub.group("l item"),
                                            ]
                                        ]),
                                        'constrained': $p.constrained
                                    }
                                )
                            })
                        )
                    })
                    : sh.a.list.map(
                        sh.sv.call(
                            sh.call.external("unmarshalled from parse tree", "List"),
                            sh.a.select(sh.sv.context([])),
                            sh.a.state.literal("expected a list", sh.a.nothing()),
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        ),
                        Value(
                            $.value,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': _p.list.nested_literal_old([
                                    $p['temp subselection'],
                                    [
                                        sh_i.sub.list(),
                                    ]
                                ]),
                                'constrained': $p.constrained
                            }
                        ),
                    )
            })
            case 'nothing': return _p.ss($, ($) => sh.a.select(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "Nothing"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.state.literal("expected a nothing", sh.a.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                )
            ))
            case 'number': return _p.ss($, ($) => sh.a.select(
                sh.sv.call(
                    sh.call.external("deserialize number", "deserialize"),
                    sh.a.select(
                        sh.sv.list_from_text(
                            sh.sv.call(
                                sh.call.external("unmarshalled from parse tree", "Text"),
                                sh.a.select(sh.sv.context([])),
                                sh.a.state.literal("expected a text", sh.a.nothing()),
                                sh.lookups.not_set(),
                                sh.arguments_.not_set(),
                                [],
                            ),
                            sh.a.select(sh.sv.context([])),
                            []

                        )
                    ),
                    sh.a.state.literal("not a valid number", sh.a.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                )
            ))
            case 'optional': return _p.ss($, ($) => sh.a.optional.map(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "Optional"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.state.literal("expected an optional", sh.a.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                ),
                Value(
                    $,
                    {
                        'temp type': $p['temp type'],
                        'temp subselection': _p.list.nested_literal_old([
                            $p['temp subselection'],
                            [
                                sh_i.sub.optional(),
                            ]
                        ]),
                        'constrained': $p.constrained
                    }
                ),
            ))
            case 'reference': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => sh.a.select(
                        sh.sv.call(
                            sh.call.external("unmarshalled from parse tree", "Nothing"),
                            sh.a.select(sh.sv.context([])),
                            sh.a.state.literal("expected a nothing", sh.a.nothing()),
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        )
                    ))
                    case 'selected': return _p.ss($, ($) => sh.a.group.literal({
                        "l location": location,
                        "l reference": sh.a.select(
                            sh.sv.call(
                                sh.call.external("unmarshalled from parse tree", "Text"),
                                sh.a.select(sh.sv.context([])),
                                sh.a.state.literal("expected a text", sh.a.nothing()),
                                sh.lookups.not_set(),
                                sh.arguments_.not_set(),
                                [],
                            )
                        ),
                    }))
                    default: return _p.au($[0])
                }
            }))
            case 'state': return _p.ss($, ($) => sh.a.change_context(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "State"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.state.literal("expected a state", sh.a.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                ),
                sh.a.decide.text(
                    sh.sv.context(["option", "value"]),
                    $.options.__d_map(
                        ($, id) => sh.a.change_context(
                            sh.sv.context(["value"]),
                            $p.constrained
                                ? sh.a.group.literal({
                                    "l location": location,
                                    "l state": sh.a.state.literal(
                                        id,
                                        Value(
                                            $.value,
                                            {
                                                'temp type': $p['temp type'],
                                                'temp subselection': _p.list.nested_literal_old([
                                                    $p['temp subselection'],
                                                    [
                                                        sh_i.sub.group("l state"),
                                                        sh_i.sub.state(id),
                                                    ]
                                                ]),
                                                'constrained': $p.constrained
                                            }
                                        )
                                    )
                                })
                                : sh.a.state.literal(
                                    id,
                                    Value(
                                        $.value,
                                        {
                                            'temp type': $p['temp type'],
                                            'temp subselection': _p.list.nested_literal_old([
                                                $p['temp subselection'],
                                                [
                                                    sh_i.sub.state(id),
                                                ]
                                            ]),
                                            'constrained': $p.constrained
                                        }
                                    )
                                )
                        ),
                    ),
                    sh.a.abort(sh.a.state.literal("unknown option", sh.a.select(sh.sv.context(["option", "value"])))),
                    sh.type_node_reference("out", $p['temp type'], _p.list.nested_literal_old([
                        $p['temp subselection'],
                        [
                        ]
                    ])))
            ))
            case 'text': return _p.ss($, ($) => sh.a.select(
                sh.sv.call(
                    sh.call.external("unmarshalled from parse tree", "Text"),
                    sh.a.select(sh.sv.context([])),
                    sh.a.state.literal("expected a text", sh.a.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                )
            ))
            default: return _p.au($[0])
        }
    })
}
