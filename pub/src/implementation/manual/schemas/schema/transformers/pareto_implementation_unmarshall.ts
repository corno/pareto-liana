import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'
import { _p_unreachable_code_path } from 'pareto-core/dist/unreachable_code_path'

//data types
import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"
import * as d_out_interface from "pareto/dist/interface/generated/liana/schemas/interface/data/resolved"

//shorthands
import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

//dependencies
import { $$ as op_flatten_dictionary } from "../../../../temp_flatten_dictionary"

const location = sh.e.select(
    sh.s.call(
        sh.call.external("parse tree to location", "Value"),
        sh.e.select(sh.s.context([])),
        null,
        sh.lookups.not_set(),
        sh.arguments_.not_set(),
        [
            "start",
            "relative"
        ],
    )
)

export const Schema: _pi.Transformer_With_Parameters<
    d_in.Schema,
    d_out.Module_Set.D,
    {
        'path': _pi.List<string>,
        'imports': d_in.Imports,
        'constrained': boolean
    }
> = ($, $p) => {
    return sh.m.module(
        'refiner',
        false,
        true,
        false,
        false,
        false,
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "signatures": sh_i.import_.ancestor(
                        5,
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
                        5,
                        "interface",
                        _p.list.nested_literal_old([
                            _p.list.literal([
                                "generated",
                                "liana",
                                "schemas"
                            ]),
                            $p.path,
                            $p.constrained
                                ? _p.list.literal(["data", "unresolved"])
                                : _p.list.literal(["data"]),
                        ]),
                    ),
                }),
                "external ": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child']['l id'], ["unmarshall"])),
            }),
            {
                'separator': "",
            },
            () => _p_unreachable_code_path(),
        ),
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
                "external ": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child']['l id'], ["unmarshall"]))
            }),
            {
                'separator': "",
            },
            () => _p_unreachable_code_path(),
        ),
        $.modules.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            true,
            false,
            false,
            Value(
                $['root value'],
                {
                    'temp type': id,
                    'temp subselection': _p.list.literal([]),
                    'constrained': $p.constrained
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
): d_out.Expression => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.e.select(
                sh.s.call(
                    sh.call.external("deserialize boolean", "deserialize"),
                    sh.e.select(
                        sh.s.call(
                            sh.call.external("unmarshalled from parse tree", "Text"),
                            sh.e.select(sh.s.context([])),
                            sh.e.state.literal("expected a text", sh.e.nothing()),
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        )
                    ),
                    sh.e.state.literal("not a valid boolean", sh.e.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                )
            ))
            case 'component': return _p.ss($, ($) => {
                return sh.e.select(
                    sh.s.call(
                        _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => sh.call.external(`external ${$.import['l id']}`, $.module['l id']))
                                case 'internal': return _p.ss($, ($) => sh.call.local($['l id']))
                                case 'internal cyclic': return _p.ss($, ($) => sh.call.local($['l id']))
                                default: return _p.au($[0])
                            }
                        }),
                        sh.e.select(sh.s.context([])),
                        sh.e.select(sh.s.context([])),
                        sh.lookups.not_set(),
                        sh.arguments_.not_set(),
                        [],
                    )
                )
            })
            case 'dictionary': return _p.ss($, ($) => {
                return $p.constrained
                    ? sh.e.group.literal({
                        "l location": location,
                        "l dictionary": sh.e.dictionary.map(
                            sh.s.call(
                                sh.call.external("unmarshalled from parse tree", "Dictionary"),
                                sh.e.select(sh.s.context([])),
                                sh.e.state.literal("expected a dictionary", sh.e.nothing()),
                                sh.lookups.not_set(),
                                sh.arguments_.not_set(),
                                [],
                            ),
                            sh.e.group.literal({
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
                    : sh.e.dictionary.map(
                        sh.s.call(
                            sh.call.external("unmarshalled from parse tree", "Dictionary"),
                            sh.e.select(sh.s.context([])),
                            sh.e.state.literal("expected a dictionary", sh.e.nothing()),
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
            case 'group': return _p.ss($, ($) => sh.e.change_context(
                sh.s.call(
                    sh.call.external("unmarshalled from parse tree", "Group"),
                    sh.e.select(sh.s.context([])),
                    sh.e.state.literal("expected a group", sh.e.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                ),
                sh.e.group.literal($.__d_map(($, id) => sh.e.change_context(
                    sh.s.dictionary_entry(
                        sh.s.context([]),
                        sh.e.text.literal(id, 'identifier'),
                        sh.e.state.literal("no such entry", sh.e.text.literal(id, 'freeform')),
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
                    ? sh.e.group.literal({
                        "l location": location,
                        "l list": sh.e.list.map(
                            sh.s.call(
                                sh.call.external("unmarshalled from parse tree", "List"),
                                sh.e.select(sh.s.context([])),
                                sh.e.state.literal("expected a list", sh.e.nothing()),
                                sh.lookups.not_set(),
                                sh.arguments_.not_set(),
                                [],
                            ),
                            sh.e.group.literal({
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
                    : sh.e.list.map(
                        sh.s.call(
                            sh.call.external("unmarshalled from parse tree", "List"),
                            sh.e.select(sh.s.context([])),
                            sh.e.state.literal("expected a list", sh.e.nothing()),
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
            case 'nothing': return _p.ss($, ($) => sh.e.select(
                sh.s.call(
                    sh.call.external("unmarshalled from parse tree", "Nothing"),
                    sh.e.select(sh.s.context([])),
                    sh.e.state.literal("expected a nothing", sh.e.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                )
            ))
            case 'number': return _p.ss($, ($) => sh.e.select(
                sh.s.call(
                    sh.call.external("deserialize number", "deserialize"),
                    sh.e.select(
                        sh.s.call(
                            sh.call.external("unmarshalled from parse tree", "Text"),
                            sh.e.select(sh.s.context([])),
                            sh.e.state.literal("expected a text", sh.e.nothing()),
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        )
                    ),
                    sh.e.state.literal("not a valid number", sh.e.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                )
            ))
            case 'optional': return _p.ss($, ($) => sh.e.optional.map(
                sh.s.call(
                    sh.call.external("unmarshalled from parse tree", "Optional"),
                    sh.e.select(sh.s.context([])),
                    sh.e.state.literal("expected an optional", sh.e.nothing()),
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
                    case 'derived': return _p.ss($, ($) => sh.e.select(
                        sh.s.call(
                            sh.call.external("unmarshalled from parse tree", "Nothing"),
                            sh.e.select(sh.s.context([])),
                            sh.e.state.literal("expected a nothing", sh.e.nothing()),
                            sh.lookups.not_set(),
                            sh.arguments_.not_set(),
                            [],
                        )
                    ))
                    case 'selected': return _p.ss($, ($) => sh.e.group.literal({
                        "l location": location,
                        "l reference": sh.e.select(
                            sh.s.call(
                                sh.call.external("unmarshalled from parse tree", "Text"),
                                sh.e.select(sh.s.context([])),
                                sh.e.state.literal("expected a text", sh.e.nothing()),
                                sh.lookups.not_set(),
                                sh.arguments_.not_set(),
                                [],
                            )
                        ),
                    }))
                    default: return _p.au($[0])
                }
            }))
            case 'state': return _p.ss($, ($) => sh.e.change_context(
                sh.s.call(
                    sh.call.external("unmarshalled from parse tree", "State"),
                    sh.e.select(sh.s.context([])),
                    sh.e.state.literal("expected a state", sh.e.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                ),
                sh.e.decide.text(
                    sh.s.context(["option", "value"]),
                    $.options.__d_map(
                        ($, id) => sh.e.change_context(
                            sh.s.context(["value"]),
                            $p.constrained
                                ? sh.e.group.literal({
                                    "l location": location,
                                    "l state": sh.e.state.literal(
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
                                : sh.e.state.literal(
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
                    sh.e.abort(sh.e.state.literal("unknown option", sh.e.select(sh.s.context(["option", "value"])))),
                    sh.type_node_reference("out", $p['temp type'], _p.list.nested_literal_old([
                        $p['temp subselection'],
                        [
                        ]
                    ])))
            ))
            case 'text': return _p.ss($, ($) => sh.e.select(
                sh.s.call(
                    sh.call.external("unmarshalled from parse tree", "Text"),
                    sh.e.select(sh.s.context([])),
                    sh.e.state.literal("expected a text", sh.e.nothing()),
                    sh.lookups.not_set(),
                    sh.arguments_.not_set(),
                    [],
                )
            ))
            default: return _p.au($[0])
        }
    })
}
