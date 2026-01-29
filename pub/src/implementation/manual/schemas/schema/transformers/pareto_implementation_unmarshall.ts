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
        sh.s.from_variable_import("parse tree to location", "Value", []),
        sh.e.select(sh.s.from_context([])),
        null,
        null,
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
                "external ": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child'].id, ["unmarshall"])),
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
                "external ": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child'].id, ["unmarshall"]))
            }),
            {
                'separator': "",
            },
            () => _p_unreachable_code_path(),
        ),
        $.types.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            true,
            false,
            false,
            Type_Node(
                $.node,
                {
                    'temp type': id,
                    'temp subselection': _p.list.literal([]),
                    'constrained': $p.constrained
                }
            ),
        )),
    )
}

export const Type_Node = (
    $: d_in.Type_Node,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<d_out_interface.Type_Node.reference.sub_selection.L> //can be removed when exupery has type inference
        'constrained': boolean
    },
): d_out.Expression => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.e.select(
                sh.s.call(
                    sh.s.from_variable_import("deserialize boolean", "deserialize", []),
                    sh.e.select(
                        sh.s.call(
                            sh.s.from_variable_import("unmarshalled from parse tree", "Text", []),
                            sh.e.select(sh.s.from_context([])),
                            sh.e.state.literal("expected a text", sh.e.nothing()),
                            null,
                            [],
                        )
                    ),
                    sh.e.state.literal("not a valid boolean", sh.e.nothing()),
                    null,
                    [],
                )
            ))
            case 'component': return _p.ss($, ($) => sh.e.select(
                sh.s.call(
                    _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'external': return _p.ss($, ($) => sh.s.from_variable_import(`external ${$.import.id}`, $.type.id, []))
                            case 'internal': return _p.ss($, ($) => sh.s.from_variable($.id, []))
                            case 'internal cyclic': return _p.ss($, ($) => sh.s.from_variable($.id, []))
                            default: return _p.au($[0])
                        }
                    }),
                    sh.e.select(sh.s.from_context([])),
                    sh.e.select(sh.s.from_context([])),
                    null,
                    [],
                )
            ))
            case 'dictionary': return _p.ss($, ($) => {
                return $p.constrained
                    ? sh.e.group({
                        "location": location,
                        "dictionary": sh.e.dictionary.map(
                            sh.s.call(
                                sh.s.from_variable_import("unmarshalled from parse tree", "Dictionary", []),
                                sh.e.select(sh.s.from_context([])),
                                sh.e.state.literal("expected a dictionary", sh.e.nothing()),
                                null,
                                [],
                            ),
                            sh.e.group({
                                "location": location,
                                "entry": Type_Node(
                                    $.node,
                                    {
                                        'temp type': $p['temp type'],
                                        'temp subselection': _p.list.nested_literal_old([
                                            $p['temp subselection'],
                                            [
                                                sh_i.sub.group("dictionary"),
                                                sh_i.sub.dictionary(),
                                                sh_i.sub.group("entry"),

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
                            sh.s.from_variable_import("unmarshalled from parse tree", "Dictionary", []),
                            sh.e.select(sh.s.from_context([])),
                            sh.e.state.literal("expected a dictionary", sh.e.nothing()),
                            null,
                            [],
                        ),
                        Type_Node(
                            $.node,
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
                    sh.s.from_variable_import("unmarshalled from parse tree", "Group", []),
                    sh.e.select(sh.s.from_context([])),
                    sh.e.state.literal("expected a group", sh.e.nothing()),
                    null,
                    [],
                ),
                sh.e.group($.__d_map(($, id) => sh.e.change_context(
                    sh.s.from_entry(
                        sh.s.from_context([]),
                        sh.e.text.literal(id, 'identifier'),
                        sh.e.state.literal("no such entry", sh.e.text.literal(id, 'freeform')),
                        []
                    ),
                    Type_Node(
                        $.node,
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
                    ? sh.e.group({
                        "location": location,
                        "list": sh.e.list.map(
                            sh.s.call(
                                sh.s.from_variable_import("unmarshalled from parse tree", "List", []),
                                sh.e.select(sh.s.from_context([])),
                                sh.e.state.literal("expected a list", sh.e.nothing()),
                                null,
                                [],
                            ),
                            sh.e.group({
                                "location": location,
                                "item": Type_Node(
                                    $.node,
                                    {
                                        'temp type': $p['temp type'],
                                        'temp subselection': _p.list.nested_literal_old([
                                            $p['temp subselection'],
                                            [
                                                sh_i.sub.group("list"),
                                                sh_i.sub.list(),
                                                sh_i.sub.group("item"),
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
                            sh.s.from_variable_import("unmarshalled from parse tree", "List", []),
                            sh.e.select(sh.s.from_context([])),
                            sh.e.state.literal("expected a list", sh.e.nothing()),
                            null,
                            [],
                        ),
                        Type_Node(
                            $.node,
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
                    sh.s.from_variable_import("unmarshalled from parse tree", "Nothing", []),
                    sh.e.select(sh.s.from_context([])),
                    sh.e.state.literal("expected a nothing", sh.e.nothing()),
                    null,
                    [],
                )
            ))
            case 'number': return _p.ss($, ($) => sh.e.select(
                sh.s.call(
                    sh.s.from_variable_import("deserialize number", "deserialize", []),
                    sh.e.select(
                        sh.s.call(
                            sh.s.from_variable_import("unmarshalled from parse tree", "Text", []),
                            sh.e.select(sh.s.from_context([])),
                            sh.e.state.literal("expected a text", sh.e.nothing()),
                            null,
                            [],
                        )
                    ),
                    sh.e.state.literal("not a valid number", sh.e.nothing()),
                    null,
                    [],
                )
            ))
            case 'optional': return _p.ss($, ($) => sh.e.optional.map(
                sh.s.call(
                    sh.s.from_variable_import("unmarshalled from parse tree", "Optional", []),
                    sh.e.select(sh.s.from_context([])),
                    sh.e.state.literal("expected an optional", sh.e.nothing()),
                    null,
                    [],
                ),
                Type_Node(
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
                            sh.s.from_variable_import("unmarshalled from parse tree", "Nothing", []),
                            sh.e.select(sh.s.from_context([])),
                            sh.e.state.literal("expected a nothing", sh.e.nothing()),
                            null,
                            [],
                        )
                    ))
                    case 'selected': return _p.ss($, ($) => sh.e.group({
                        "location": location,
                        "id": sh.e.select(
                            sh.s.call(
                                sh.s.from_variable_import("unmarshalled from parse tree", "Text", []),
                                sh.e.select(sh.s.from_context([])),
                                sh.e.state.literal("expected a text", sh.e.nothing()),
                                null,
                                [],
                            )
                        ),
                    }))
                    default: return _p.au($[0])
                }
            }))
            case 'state': return _p.ss($, ($) => sh.e.change_context(
                sh.s.call(
                    sh.s.from_variable_import("unmarshalled from parse tree", "State", []),
                    sh.e.select(sh.s.from_context([])),
                    sh.e.state.literal("expected a state", sh.e.nothing()),
                    null,
                    [],
                ),
                sh.e.decide.text(
                    sh.s.from_context(["option", "value"]),
                    $.__d_map(
                        ($, id) => sh.e.change_context(
                            sh.s.from_context(["value"]),
                            $p.constrained
                                ? sh.e.group({
                                    "location": location,
                                    "state": sh.e.state.literal(
                                        id,
                                        Type_Node(
                                            $.node,
                                            {
                                                'temp type': $p['temp type'],
                                                'temp subselection': _p.list.nested_literal_old([
                                                    $p['temp subselection'],
                                                    [
                                                        sh_i.sub.group("state"),
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
                                    Type_Node(
                                        $.node,
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
                    sh.e.abort(sh.e.state.literal("unknown option", sh.e.select(sh.s.from_context(["option", "value"])))),
                    sh.type_node_reference("out", $p['temp type'], _p.list.nested_literal_old([
                        $p['temp subselection'],
                        [
                            //sh_i.sub.group("SG"),
                        ]
                    ])))
            ))
            case 'text': return _p.ss($, ($) => sh.e.select(
                sh.s.call(
                    sh.s.from_variable_import("unmarshalled from parse tree", "Text", []),
                    sh.e.select(sh.s.from_context([])),
                    sh.e.state.literal("expected a text", sh.e.nothing()),
                    null,
                    [],
                )
            ))
            default: return _p.au($[0])
        }
    })
}
