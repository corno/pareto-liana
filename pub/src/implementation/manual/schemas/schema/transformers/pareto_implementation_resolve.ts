import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'
import { _p_unreachable_code_path } from 'pareto-core/dist/unreachable_code_path'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "../../../../temp_flatten_dictionary"

const op_pad_dictionary_identifiers = <T>(
    $: _pi.Dictionary<T>,
    $p: {
        'prefix': string,
        'suffix': string
    }
): _pi.Dictionary<T> => _p.dictionary.from_list(
    _p.list.from_dictionary($, ($, id) => ({ 'id': id, value: $ })),
    ($) => $p.prefix + $.id + $p.suffix,
    ($) => $.value,
    () => _p_unreachable_code_path() // no possibility of duplicate id's
)

export const Resolvers = (
    $: d_in.Resolvers,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports
    }
): d_out.Module_Set.D => {
    return sh.m.module(
        'refiner',
        false,
        true,
        true,
        false,
        false,
        _p.dictionary.literal({
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
                    _p.list.literal(["data", "resolved"])
                ])
            ),
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
                    _p.list.literal(["resolve"])
                ])
            ),
        }),
        op_flatten_dictionary(
            _p.dictionary.literal({
                "external ": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(1, $['schema set child']['l id'], ["resolve"]))
            }),
            {
                'separator': "",
            },
            () => _p_unreachable_code_path(),
        ),
        $.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            true,
            true,
            true,
            Node_Resolver(
                $['type resolver'],
                {
                    'temp type': id,
                    'temp subselection': _p.list.literal([])
                }
            ),
        ))
    )
}



export const Possible_Value_Selection = (
    $: d_in.Possible_Value_Selection,
    $p: {
        'tail': () => _pi.List<d_out.Selection.regular.tail.L>
    },
): d_out.Selection => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => sh.s.implement_me("KLJ"))
            // case 'parameter': return _p.ss($, ($) => sh.s.from_variable(
            //     "params",
            //     _p.list.nested_literal_old([
            //         [
            //             "values",
            //             $['l id']
            //         ],
            //         $p.tail(),
            //     ]),
            // ))
            case 'result': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => sh.s.implement_me("STATE2")) //quite some work
                    case 'optional value': return _p.ss($, ($) => sh.s.implement_me("OPTIONAL VALUE2")) //quite some work

                    default: return _p.au($[0])
                }
            }))

            default: return _p.au($[0])
        }
    })
}


export const Optional_Value_Initialization = (
    $: d_in.Optional_Value_Initialization,
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'not set': return _p.ss($, ($) => sh.e.optional.not_set())
        case 'selection': return _p.ss($, ($) => sh.e.select(Possible_Value_Selection($, { 'tail': () => _p.list.literal([]) })))
        case 'set': return _p.ss($, ($) => sh.e.optional.set(sh.e.select(Guaranteed_Value_Selection($, { 'tail': () => _p.list.literal([]) }))))
        default: return _p.au($[0])
    }
})

export const Guaranteed_Value_Selection = (
    $: d_in.Guaranteed_Value_Selection,
    $p: {
        'tail': () => _pi.List<d_out.Selection.regular.tail.L>
    },
): d_out.Selection => {
    const tail = (): _pi.List<d_out.Selection.regular.tail.L> => _p.list.nested_literal_old([
        _p.list.flatten(
            $.tail.path['l list'],
            ($) => _p.decide.state($['l item'], ($): _pi.List<d_out.Selection.regular.tail.L> => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => _p.list.literal([]))
                    case 'group': return _p.ss($, ($) => _p.list.literal([$['l id']]))
                    case 'reference': return _p.ss($, ($) => _p.decide.state($.definition.type, ($) => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => _p.list.literal([]))
                            case 'selected': return _p.ss($, ($) => _p.list.literal(["entry"]))
                            default: return _p.au($[0])
                        }
                    }))
                    default: return _p.au($[0])
                }
            })
        ),
        $p.tail()
    ])
    return _p.decide.state($.start, ($) => {
        switch ($[0]) {
            case 'constraint': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {

                    case 'component': return _p.ss($, ($) => sh.s.implement_me("COMPONENT")) //simple
                    case 'reference': return _p.ss($, ($) => sh.s.implement_me("REFERENCE")) //simple
                    default: return _p.au($[0])
                }
            }))
            case 'parameter': return _p.ss($, ($) => sh.s.parameter($['l id'], []))
            case 'result': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => sh.s.implement_me("STATE"))  // quite some work
                    case 'optional value': return _p.ss($, ($) => sh.s.implement_me("OPTIONAL VALUE")) // quite some work
                    case 'list': return _p.ss($, ($) => sh.s.implement_me("LIST")) // quite some work

                    default: return _p.au($[0])
                }
            }))
            case 'list cursor': return _p.ss($, ($) => sh.s.implement_me("LIST CURSOR"))
            // case 'list cursor': return _p.ss($, ($) => sh.s.from_variable(
            //     "list cursor",
            //     tail(),
            // ))
            case 'linked entry': return _p.ss($, ($) => sh.s.implement_me("LINKED ENTRY"))
            // case 'linked entry': return _p.ss($, ($) => sh.s.from_variable(
            //     "linked entry",
            //     tail(),
            // ))

            case 'option constraint': return _p.ss($, ($) => sh.s.implement_me("OPTION CONSTRAINT"))
            // case 'option constraint': return _p.ss($, ($) => sh.s.from_variable(
            //     `c ${$['l id']}`,//FIXME: do the upsteps
            //     tail(),
            // ))

            case 'sibling': return _p.ss($, ($) => sh.s.sibling($['l id'], tail()))
            case 'parent sibling': return _p.ss($, ($) => sh.s.implement_me("PARENT SIBLING"))
            // case 'parent sibling': return _p.ss($, ($) => sh.s.from_variable(
            //     `p ${$['l id']}`,//FIXME: do the upstep
            //     tail(),
            // ))
            default: return _p.au($[0])
        }
    })
}

export const Lookup_Selection = (
    $: d_in.Lookup_Selection,
    $p: {

    },
): d_out.Selection => _p.decide.state($.type, ($) => {
    switch ($[0]) {
        case 'dictionary': return _p.ss($, ($) => sh.s.call(
            sh.call.external(" i generic", "dictionary to lookup"),
            sh.e.select(Guaranteed_Value_Selection($.selection, {
                'tail': () => _p.list.literal([]),
            })),
            null,
            sh.lookups.not_set(),
            sh.arguments_.not_set(),
            []
        ))
        case 'not circular dependent siblings': return _p.ss($, ($) => sh.s.parameter(
            "not circular dependent siblings",
            []
        ))
        // case 'parameter': return _p.ss($, ($) => sh.s.from_variable(
        //     "params",
        //     ["lookups", $['l id']],
        // ))
        case 'parameter': return _p.ss($, ($) => sh.s.implement_me("IOJFS"))
        case 'possibly circular dependent siblings': return _p.ss($, ($) => sh.s.parameter(
            "possibly circular dependent siblings",
            []
        ))
        default: return _p.au($[0])
    }
})

export const Option_Constraints = (
    $: d_in.Option_Constraints,
    $p: {
        sub: () => d_out.Expression
    },
): d_out.Expression => sh.e.implement_me("option constraints")
//      sh.e.block(
//     [],
//     op_pad_dictionary_identifiers($, { 'prefix': "c ", 'suffix': "" }).__d_map(($) => sh.variable(null, _p.decide.state($, ($) => {
//         switch ($[0]) {
//             case 'assert is set': return _p.ss($, ($) => sh.e.decide.optional(
//                 Possible_Value_Selection($, { 'tail': () => _p.list.literal([]) }),
//                 sh.e.select(sh.s.context([])),
//                 sh.e.implement_me("assert is set"),
//                 sh.type_node_reference("out", $p['sub'] as any as string, _p.list.literal([]))
//             ))
//             case 'state': return _p.ss($, ($) => sh.e.implement_me("state constraint")) // medium work
//             default: return _p.au($[0])
//         }
//     }))),
//     $p.sub(),
// )

export const Node_Resolver = (
    $: d_in.Node_Resolver,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<d_out.Temp_Type_Node_Reference.sub_selection.L> //can be removed when exupery has type inference
    },
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => sh.e.select(sh.s.context([])))

        case 'component': return _p.ss($, ($) => sh.e.select(
            sh.s.call(
                _p.decide.state($.location, ($) => {
                    switch ($[0]) {
                        case 'external': return _p.ss($, ($) => sh.call.external("external " + $.import['l id'], $.type['l id']))
                        case 'internal': return _p.ss($, ($) => sh.call.local($['l id']))
                        default: return _p.au($[0])
                    }
                }),
                sh.e.select(sh.s.context([])),
                sh.e.select(sh.s.context([])),
                $.arguments.__decide(
                    ($) => $.lookups.__decide(
                        ($) => sh.lookups.initialize($.__d_map(
                            ($) => _p.decide.state($, ($) => {
                                switch ($[0]) {
                                    case 'empty stack': return _p.ss($, ($) => sh.ls.implement_me("empty stack"))
                                    case 'not set': return _p.ss($, ($) => sh.ls.implement_me("not set"))
                                    case 'selection': return _p.ss($, ($) => sh.ls.implement_me("selection"))
                                    case 'stack': return _p.ss($, ($) => sh.ls.implement_me("stack"))
                                    //                                 case 'empty stack': return _p.ss($, ($) => sh.e.list.literal([]))
                                    //                                 case 'not set': return _p.ss($, ($) => sh.e.optional.not_set())
                                    //                                 case 'selection': return _p.ss($, ($) => sh.e.select(Lookup_Selection($, {})))
                                    //                                 case 'stack': return _p.ss($, ($) => sh.e.implement_me("stack")) // quite some work
                                    default: return _p.au($[0])
                                }
                            }),
                        )),
                        () => sh.lookups.pass_through()
                    ),
                    () => sh.lookups.not_set()
                ),
                $.arguments.__decide(
                    ($) => $.values.__decide(
                        ($) => sh.arguments_.initialize($.__d_map(
                            ($) => _p.decide.state($, ($) => {
                                switch ($[0]) {
                                    case 'optional': return _p.ss($, ($) => Optional_Value_Initialization($))
                                    case 'required': return _p.ss($, ($) => sh.e.implement_me("required"))
                                    case 'parameter': return _p.ss($, ($) => sh.e.select(sh.s.parameter($['l id'], [])))
                                    //                                 case 'optional': return _p.ss($, ($) => Optional_Value_Initialization($, null))
                                    //                                 case 'parameter': return _p.ss($, ($) => sh.e.select(sh.s.from_variable(
                                    //                                     "params",
                                    //                                     ["values", $.id],
                                    //                                 )))
                                    //                                 case 'required': return _p.ss($, ($) => sh.e.select(Guaranteed_Value_Selection($, { 'tail': () => _p.list.literal([]) })))
                                    default: return _p.au($[0])
                                }
                            }),
                        )),
                        () => sh.arguments_.pass_through()
                    ),
                    () => sh.arguments_.not_set()
                ),
                [],
            )
        ))
        case 'dictionary': return _p.ss($, ($) => {
            const resolver = $.resolver
            return $.benchmark.__decide(
                ($) => sh.e.dictionary.resolve( //FIXME: validate denseness
                    sh.s.context(["l dictionary"]),
                    sh.e.change_context(
                        sh.s.context(["l entry"]),
                        Node_Resolver(
                            resolver,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': _p.list.nested_literal_old([
                                    $p['temp subselection'],
                                    [
                                        sh_i.sub.dictionary(),
                                    ]
                                ]),
                            }

                        )
                    ),
                    sh.type_node_reference("out", $p['temp type'], _p.list.nested_literal_old([
                        $p['temp subselection'],
                        [
                            sh_i.sub.dictionary(),
                        ]
                    ]))

                ),
                () => sh.e.dictionary.resolve(
                    sh.s.context(["l dictionary"]),
                    sh.e.change_context(
                        sh.s.context(["l entry"]),
                        Node_Resolver(
                            $.resolver,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': _p.list.nested_literal_old([
                                    $p['temp subselection'],
                                    [
                                        sh_i.sub.dictionary(),
                                    ]
                                ]),
                            }

                        )
                    ),
                    sh.type_node_reference("out", $p['temp type'], _p.list.nested_literal_old([
                        $p['temp subselection'],
                        [
                            sh_i.sub.dictionary(),
                        ]
                    ]))

                )
            )
        })
        // case 'dictionary': return _p.ss($, ($) => sh.e.block(
        //     [],
        //     $.benchmark.__decide(
        //         ($) => _p.dictionary.literal({
        //             // "linked entry": e.call(
        //             //     s.context([]), //Value_Selection($.selection, { 'tail': pa.list.literal([]) }),
        //             //     e.string("FIXME", 'backtick'),
        //             // ),
        //             "benchmark": sh.variable(null, sh.e.select(Guaranteed_Value_Selection($.selection, { 'tail': () => _p.list.literal([]) }))),
        //         }),
        //         () => _p.dictionary.literal({})
        //     ),
        //     sh.e.select(
        //         sh.s.call(
        //             sh.s.from_variable_import(" i generic", "resolve dictionary", []),
        //             sh.e.select(sh.s.context([])),
        //             null,
        //             {
        //                 //"denseness benchmark": e.not_set(),
        //                 // "map": sh.e.function_deprecated(true, sh.e.block(
        //                 //     [],
        //                 //     $.benchmark.__decide(
        //                 //         ($) => _p.dictionary.literal({
        //                 //             // "linked entry": e.call(
        //                 //             //     s.context([]), //Value_Selection($.selection, { 'tail': pa.list.literal([]) }),
        //                 //             //     e.string("FIXME", 'backtick'),
        //                 //             // ),
        //                 //             "linked entry": sh.variable(null, sh.e.implement_me()), // quite some work; a call to get_entry() from the selection (Guaranteed_Value_Selection), and then transform an optional value
        //                 //         }),
        //                 //         () => _p.dictionary.literal({})
        //                 //     ),
        //                 //     sh.e.change_context(
        //                 //         sh.s.context(["value"]),
        //                 //         Node_Resolver(
        //                 //             $.resolver,
        //                 //             {
        //                 //                 'temp type': $p['temp type'],
        //                 //                 'temp subselection': _p.list.nested_literal_old([
        //                 //                     $p['temp subselection'],
        //                 //                     [
        //                 //                         sh_i.sub.dictionary()
        //                 //                     ]
        //                 //                 ]),
        //                 //             }
        //                 //         )
        //                 //     )
        //                 // )),

        //             },
        //             [],
        //         )
        //     )
        // ))
        case 'group': return _p.ss($, ($) => sh.e.group.resolve(
            $.__d_map(
                ($, id) => sh.e.change_context(
                    sh.s.context([id]),
                    Node_Resolver(
                        $.resolver,
                        {
                            'temp type': $p['temp type'],
                            'temp subselection': _p.list.nested_literal_old([
                                $p['temp subselection'],
                                [
                                    sh_i.sub.group(id)
                                ]
                            ]),
                        }
                    )
                )
            )
        ))
        case 'list': return _p.ss($, ($) => {
            const resolver = $.resolver
            return $.result.__decide(
                ($) => sh.e.group.literal({
                    "l list": sh.e.list.map_with_state(
                        sh.s.context(["l list"]),
                        sh.e.implement_me("initial state"), //depends on the aggregation
                        sh.e.group.literal({
                            "l item": sh.e.change_context(
                                sh.s.context(["l item"]),
                                Node_Resolver(
                                    resolver,
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
                                    }
                                ),
                            ),
                            "l result": sh.e.implement_me("result aggregation") //depends on the aggregation
                        }),
                        sh.e.implement_me("update state"),
                        sh.e.implement_me("wrapup"),
                    ),
                    "l result": sh.e.implement_me("result aggregation") //depends on the aggregation
                }),
                () => sh.e.list.map(
                    sh.s.context(["l list"]),
                    sh.e.change_context(
                        sh.s.context(["l item"]),
                        Node_Resolver(
                            $.resolver,
                            {
                                'temp type': $p['temp type'],
                                'temp subselection': _p.list.nested_literal_old([
                                    $p['temp subselection'],
                                    [
                                        sh_i.sub.list()
                                    ]
                                ]),
                            }
                        )
                    )
                )
            )
        })
        // case 'list': return _p.ss($, ($) => sh.e.list.map(
        //     sh.s.context(["list"]),
        //     sh.e.change_context(
        //         sh.s.context(["element"]),
        //         Node_Resolver(
        //             $.resolver,
        //             {
        //                 'temp type': $p['temp type'],
        //                 'temp subselection': _p.list.nested_literal_old([
        //                     $p['temp subselection'],
        //                     [
        //                         sh.sub.list()
        //                     ]
        //                 ]),
        //             }
        //         )
        //     )
        // ))
        case 'nothing': return _p.ss($, ($) => sh.e.nothing())
        case 'number': return _p.ss($, ($) => sh.e.select(sh.s.context([])))
        case 'optional': return _p.ss($, ($) => sh.e.optional.map(
            sh.s.context([]),
            Node_Resolver(
                $.resolver,
                {
                    'temp type': $p['temp type'],
                    'temp subselection': _p.list.nested_literal_old([
                        $p['temp subselection'],
                        [
                            sh_i.sub.optional()
                        ]
                    ]),
                }
            )
        ))
        // case 'optional': return _p.ss($, ($) => sh.e.optional.map(
        //     sh.s.context([]),
        //     Option_Constraints(
        //         $.constraints,
        //         {
        //             'sub': () => Node_Resolver(
        //                 $['resolver'],
        //                 {
        //                     'temp type': $p['temp type'],
        //                     'temp subselection': _p.list.nested_literal_old([
        //                         $p['temp subselection'],
        //                         [
        //                             sh.sub.optional()
        //                         ]
        //                     ]),
        //                 }
        //             )
        //         }
        //     )
        // ))
        case 'reference': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'derived': return _p.ss($, ($) => sh.e.implement_me("SDFS"))
                case 'selected': return _p.ss($, ($) => _p.decide.state($.definition.dependency, ($) => {
                    switch ($[0]) {
                        case 'stack': return _p.ss($, ($) => sh.e.group.literal({
                            "l entry": sh.e.implement_me("sss"),
                            "l id": sh.e.implement_me("sss"),
                            "l up steps": sh.e.implement_me("sss"),
                        }))
                        case 'acyclic': return _p.ss($, ($) => sh.e.group.literal({
                            "l entry": sh.e.implement_me("sss"),
                            "l id": sh.e.implement_me("sss"),
                        }))
                        case 'cyclic': return _p.ss($, ($) => sh.e.group.literal({
                            "l entry": sh.e.implement_me("sss"),
                            "l id": sh.e.implement_me("sss"),
                        }))
                        default: return _p.au($[0])
                    }
                }))
                default: return _p.au($[0])
            }
        }))
        // case 'reference': return _p.ss($, ($) => sh.e.select(_p.decide.state($.type, ($): d_out.Selection => {
        //     switch ($[0]) {
        //         case 'derived': return _p.ss($, ($) => Guaranteed_Value_Selection($.value, { 'tail': () => _p.list.literal([]) }))
        //         case 'selected': return _p.ss($, ($) => {
        //             const context = $
        //             return _p.decide.state($.definition.dependency, ($) => {
        //                 switch ($[0]) {
        //                     case 'acyclic': return _p.ss($, ($) => sh.s.call(
        //                         sh.s.from_variable_import(" i generic", "get entry", []),
        //                         sh.e.select(Lookup_Selection(context.lookup, {})),
        //                         null,
        //                         {
        //                             "reference": sh.e.select(sh.s.context([])),
        //                         },
        //                         [],
        //                     ))
        //                     case 'cyclic': return _p.ss($, ($) => sh.s.call(
        //                         sh.s.from_variable_import(" i generic", "get possibly circular dependent sibling entry", []),
        //                         sh.e.select(Lookup_Selection(context.lookup, {})),
        //                         null,
        //                         {
        //                             "reference": sh.e.select(sh.s.context([])),
        //                         },
        //                         [],
        //                     ))
        //                     case 'stack': return _p.ss($, ($) => sh.s.call(
        //                         sh.s.from_variable_import(" i generic", "get entry from stack", []),
        //                         sh.e.select(Lookup_Selection(context.lookup, {})),
        //                         null,
        //                         {
        //                             "reference": sh.e.select(sh.s.context([])),
        //                         },
        //                         [],
        //                     ))
        //                     default: return _p.au($[0])
        //                 }
        //             })
        //         })
        //         default: return _p.au($[0])
        //     }
        // })))
        case 'state': return _p.ss($, ($) => sh.e.decide.state(
            sh.s.context(["l state"]),
            $.states.__d_map(($, id) => sh.e.state.literal(id, Node_Resolver(
                $['resolver'],
                {
                    'temp type': $p['temp type'],
                    'temp subselection': _p.list.nested_literal_old([
                        $p['temp subselection'],
                        [
                            sh_i.sub.state(id)
                        ]
                    ]),
                }
            ))),
            sh.type_node_reference(
                "out",
                $p['temp type'],
                $p['temp subselection'],
            ),
        ))
        // case 'state': return _p.ss($, ($) => sh.e.decide.state(
        //     sh.s.context(['state']),
        //     $.states.__d_map(($, id) => sh.e.state.literal(id, Option_Constraints(
        //         $.constraints,
        //         {
        //             'sub': () => Node_Resolver(
        //                 $['resolver'],
        //                 {
        //                     'temp type': $p['temp type'],
        //                     'temp subselection': _p.list.nested_literal_old([
        //                         $p['temp subselection'],
        //                         [
        //                             sh.sub.state(id)
        //                         ]
        //                     ]),
        //                 }
        //             )
        //         }
        //     ))),
        //     sh.type_node_reference(
        //         "out",
        //         $p['temp type'],
        //         $p['temp subselection'],
        //     ),
        // ))
        case 'text': return _p.ss($, ($) => sh.e.select(sh.s.context([])))
        default: return _p.au($[0])
    }
})