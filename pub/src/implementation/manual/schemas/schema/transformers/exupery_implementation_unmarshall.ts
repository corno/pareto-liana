import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

//data types
import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data/resolved"
import * as d_out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data/resolved"

//shorthands
import * as sh from "exupery/dist/shorthands/implementation"
import * as sh_i from "exupery/dist/shorthands/interface"

//dependencies
import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"

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
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "generic": sh_i.import_.ancestor(2, "generic", ["unmarshall"]),
                    "signatures": sh_i.import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["unmarshall"]),
                    ])),
                    "in": sh_i.import_.ancestor(5, "interface", ["generated", "pareto", "core", "astn source"]),
                    "out": sh_i.import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["data types", "target"]),
                    ])),
                }),
                "r ": $p.imports.__d_map(($, key) => sh_i.import_.ancestor(1, $['schema set child'].key, ["unmarshall"]))
            }),
            {
                'separator': "",
            },
            () => _p.unreachable_code_path(),
        ),
        {},
        $.types.__d_map(($, key) => sh.algorithm(
            sh.type_reference("signatures", key),
            false,
            false,
            false,
            Type_Node(
                $.node,
                {
                    'temp type': key,
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
        'temp subselection': _pi.List<d_out_interface.Type.reference.sub_selection.L> //can be removed when exupery has type inference
        'constrained': boolean
    },
): d_out.Expression => {
    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => sh.e.call(
                sh.s.from_variable_import(" i generic", "process boolean", []),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                    "deserializer": sh.e.select_from_parameter_deprecated("value deserializers", ["boolean"]),
                })
            ))
            case 'component': return _p.ss($, ($) => sh.e.call(
                _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => sh.s.from_variable_import(` i r ${$.import.key}`, $.type.key, []))
                        case 'internal': return _p.ss($, ($) => sh.s.from_variable($.key, []))
                        case 'internal cyclic': return _p.ss($, ($) => sh.s.from_variable($.key, []))
                        default: return _p.au($[0])
                    }
                }),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                    "value deserializers": sh.e.select_from_parameter_deprecated("value deserializers", []),
                }),
            ))
            case 'dictionary': return _p.ss($, ($) => sh.e.call(
                sh.s.from_variable_import(" i generic", $p.constrained ? "process unresolved dictionary" : "process unconstrained dictionary", []),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                    // "value": sh.e.function_deprecated(
                    //     false,
                    //     Type_Node(
                    //         $.node,
                    //         {
                    //             'temp type': $p['temp type'],
                    //             'temp subselection': _p.list.nested_literal([
                    //                 $p['temp subselection'],
                    //                 [
                    //                     sh_i.sub.dictionary(),
                    //                 ]
                    //             ]),
                    //             'constrained': $p.constrained
                    //         }
                    //     ),
                    // ),
                })
            ))
            case 'group': return _p.ss($, ($) => sh.e.call(
                sh.s.from_variable_import(" i generic", "process group", []),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                    // "properties": sh.e.function_deprecated(
                    //     false,
                    //     sh.e.group(
                    //         $.dictionary.__d_map(
                    //             ($, key) => sh.e.change_context(
                    //                 sh.s.call(
                    //                     sh.s.from_variable_import(" i generic", "get entry", []),
                    //                     sh.s.from_context([]),
                    //                     _p.dictionary.literal({
                    //                         "key": sh.e.string(key, 'quote'),
                    //                     }),
                    //                     [],
                    //                 ),
                    //                 Type_Node(
                    //                     $.node,
                    //                     {
                    //                         'temp type': $p['temp type'],
                    //                         'temp subselection': _p.list.nested_literal([
                    //                             $p['temp subselection'],
                    //                             [
                    //                                 sh_i.sub.group(key),
                    //                             ]
                    //                         ]),
                    //                         'constrained': $p.constrained
                    //                     }
                    //                 )
                    //             )
                    //         )
                    //     )
                    // ),
                })
            ))
            case 'list': return _p.ss($, ($) => sh.e.call(
                sh.s.from_variable_import(" i generic", $p.constrained ? "process unresolved list" : "process unconstrained list", []),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                    // "value": sh.e.function_deprecated(
                    //     false,
                    //     Type_Node(
                    //         $.node,
                    //         {
                    //             'temp type': $p['temp type'],
                    //             'temp subselection': _p.list.nested_literal([
                    //                 $p['temp subselection'],
                    //                 [
                    //                     sh_i.sub.list(),
                    //                 ]
                    //             ]),
                    //             'constrained': $p.constrained
                    //         }
                    //     ),
                    // ),
                })
            ))
            case 'nothing': return _p.ss($, ($) => sh.e.call(
                sh.s.from_variable_import(" i generic", "process nothing", []),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                })
            ))
            case 'number': return _p.ss($, ($) => sh.e.call(
                sh.s.from_variable_import(" i generic", "process number", []),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                    "deserializer": sh.e.select_from_parameter_deprecated("value deserializers", _p.sg($, ($) => {
                        switch ($[0]) {
                            case 'global': return _p.ss($, ($) => ["custom numbers", $.key])
                            case 'local': return _p.ss($, ($) => ["default number"])
                            default: return _p.au($[0])
                        }
                    })),
                }),
            ))
            case 'optional': return _p.ss($, ($) => sh.e.call(
                sh.s.from_variable_import(" i generic", "process optional", []),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                    // "value": sh.e.function_deprecated(
                    //     false,
                    //     Type_Node(
                    //         $,
                    //         {
                    //             'temp type': $p['temp type'],
                    //             'temp subselection': _p.list.nested_literal([
                    //                 $p['temp subselection'],
                    //                 [
                    //                     sh_i.sub.optional(),
                    //                 ]
                    //             ]),
                    //             'constrained': $p.constrained
                    //         }
                    //     ),
                    // ),
                })
            ))
            case 'reference': return _p.ss($, ($) => _p.sg($.type, ($) => {
                switch ($[0]) {
                    case 'derived': return _p.ss($, ($) => sh.e.call(
                        sh.s.from_variable_import(" i generic", "process derived reference", []),
                        sh.e.select_from_context_deprecated([]),
                        false,
                        _p.dictionary.literal({
                        })
                    ))
                    case 'selected': return _p.ss($, ($) => sh.e.call(
                        sh.s.from_variable_import(" i generic", _p.sg($.dependency, ($) => {
                            switch ($[0]) {
                                case 'acyclic': return "process selected reference"
                                case 'cyclic': return "process selected reference"
                                case 'stack': return "process stack reference"
                                default: return _p.au($[0])
                            }
                        }), []),
                        sh.e.select_from_context_deprecated([]),
                        false,
                        _p.dictionary.literal({
                        })
                    ))
                    default: return _p.au($[0])
                }
            }))
            case 'state group': return _p.ss($, ($) => sh.e.call(
                sh.s.from_variable_import(" i generic", $p.constrained ? "process unresolved state group" : "process unconstrained state group", []),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                    // "states": sh.e.dictionary_literal(
                    //     $.__d_map(
                    //         ($, key) => sh.e.function_deprecated(
                    //             false,
                    //             sh.e.case_(
                    //                 key,
                    //                 Type_Node(
                    //                     $.node,
                    //                     {
                    //                         'temp type': $p['temp type'],
                    //                         'temp subselection': _p.list.nested_literal([
                    //                             $p['temp subselection'],
                    //                             [
                    //                                 sh_i.sub.state_group(key),
                    //                             ]
                    //                         ]),
                    //                         'constrained': $p.constrained
                    //                     }
                    //                 )
                    //             ),
                    //             sh.type_node_reference("out", $p['temp type'], _p.list.nested_literal([
                    //                 $p['temp subselection'],
                    //                 [
                    //                     //sh_i.sub.group("SG"),
                    //                 ]
                    //             ]))
                    //         )
                    //     )
                    // )
                })
            ))
            case 'text': return _p.ss($, ($) => sh.e.call(
                sh.s.from_variable_import(" i generic", "process text", []),
                sh.e.select_from_context_deprecated([]),
                false,
                _p.dictionary.literal({
                })
            ))
            default: return _p.au($[0])
        }
    })
}
