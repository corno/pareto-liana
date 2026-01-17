import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_out from "exupery/dist/interface/generated/pareto/schemas/implementation/data/resolved"
import * as d_out_interface from "exupery/dist/interface/generated/pareto/schemas/interface/data/resolved"

import * as sh from "exupery/dist/shorthands/implementation"
import * as sh_i from "exupery/dist/shorthands/interface"

import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"

const op_pad_dictionary_identifiers = <T>(
    $: _pi.Dictionary<T>,
    $p: {
        'prefix': string,
        'suffix': string
    }
): _pi.Dictionary<T> => _p.dictionary.from_list(
    _p.list.from_dictionary($, ($, key) => ({ 'key': key, value: $ })),
    ($) => $p.prefix + $.key + $p.suffix,
    ($) => $.value,
    () => _p.unreachable_code_path() // no possibility of duplicate keys
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
        op_flatten_dictionary(
            _p.dictionary.literal({
                "": _p.dictionary.literal({
                    "generic": sh_i.import_.external("pareto-core-internals", ["dist", "algorithm types", "refiner", "resolve"]),
                    "out": sh_i.import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["data types", "source"]),
                    ])),
                    "signatures": sh_i.import_.ancestor(5, "interface", _p.list.nested_literal([
                        _p.list.literal(["generated", "pareto", "schemas"]),
                        $p.path,
                        _p.list.literal(["data types", "resolve"]),
                    ])),
                }),
                "r ": $p.imports.__d_map(($, key) => sh_i.import_.ancestor(1, $['schema set child'].key, ["resolve"]))
            }),
            {
                'separator': "",
            },
            () => _p.unreachable_code_path(),
        ),
        {},
        op_pad_dictionary_identifiers(
            $.__d_map(($, key) => sh.algorithm(
                sh.type_reference("signatures", key),
                true,
                true,
                true,
                sh.e.block(
                    [],
                    {
                        "l2s": sh.variable(
                            null,
                            sh.e.select_from_parameter_deprecated("location 2 string", [])
                        ),
                        "params": sh.variable(
                            null,
                            sh.e.select_from_parameter_deprecated("parameters", [])
                        )
                    },
                    Node_Resolver(
                        $['type resolver'],
                        {
                            'temp type': key,
                            'temp subselection': _p.list.literal([])
                        }
                    )
                ),

            )),
            {
                'prefix': "r ",
                'suffix': "",
            }
        )
    )
}



export const Possible_Value_Selection = (
    $: d_in.Possible_Value_Selection,
    $p: {
        'tail': () => _pi.List<d_out.Selection.tail.L>
    },
): d_out.Selection => {
    return _p.sg($, ($) => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => sh.s.from_variable(
                "params",
                _p.list.nested_literal([
                    [
                        "values",
                        $.key
                    ],
                    $p.tail(),
                ]),
            ))
            case 'result': return _p.ss($, ($) => _p.sg($, ($) => {
                switch ($[0]) {
                    case 'state group': return _p.ss($, ($) => sh.s.implement_me()) //quite some work
                    case 'optional value': return _p.ss($, ($) => sh.s.implement_me()) //quite some work

                    default: return _p.au($[0])
                }
            }))

            default: return _p.au($[0])
        }
    })
}


export const Optional_Value_Initialization = (
    $: d_in.Optional_Value_Initialization,
    $p: null,
): d_out.Expression => _p.sg($, ($) => {
    switch ($[0]) {
        case 'not set': return _p.ss($, ($) => sh.e.not_set())
        case 'selection': return _p.ss($, ($) => sh.e.select_deprecated(Possible_Value_Selection($, { 'tail': () => _p.list.literal([]) })))
        case 'set': return _p.ss($, ($) => sh.e.set(sh.e.select_deprecated(Guaranteed_Value_Selection($, { 'tail': () => _p.list.literal([]) }))))
        default: return _p.au($[0])
    }
})

export const Guaranteed_Value_Selection = (
    $: d_in.Guaranteed_Value_Selection,
    $p: {
        'tail': () => _pi.List<d_out.Selection.tail.L>
    },
): d_out.Selection => {
    const tail = (): _pi.List<d_out.Selection.tail.L> => _p.list.nested_literal([
        _p.list.flatten(
            $.tail.path,
            ($) => _p.sg($, ($): _pi.List<d_out.Selection.tail.L> => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => _p.list.literal([]))
                    case 'group': return _p.ss($, ($) => _p.list.literal([$.key]))
                    case 'reference': return _p.ss($, ($) => _p.sg($.definition.type, ($) => {
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
    return _p.sg($.start, ($) => {
        switch ($[0]) {
            case 'constraint': return _p.ss($, ($) => _p.sg($, ($) => {
                switch ($[0]) {

                    case 'component': return _p.ss($, ($) => sh.s.implement_me()) //simple
                    case 'reference': return _p.ss($, ($) => sh.s.implement_me()) //simple
                    default: return _p.au($[0])
                }
            }))
            case 'parameter': return _p.ss($, ($) => sh.s.from_variable(
                "params",
                _p.list.nested_literal([
                    [
                        "values",
                        $.key
                    ],
                    tail(),
                ]),
            ))
            case 'result': return _p.ss($, ($) => _p.sg($, ($) => {
                switch ($[0]) {
                    case 'state group': return _p.ss($, ($) => sh.s.implement_me())  // quite some work
                    case 'optional value': return _p.ss($, ($) => sh.s.implement_me()) // quite some work
                    case 'list': return _p.ss($, ($) => sh.s.implement_me()) // quite some work

                    default: return _p.au($[0])
                }
            }))
            case 'list cursor': return _p.ss($, ($) => sh.s.from_variable(
                "list cursor",
                tail(),
            ))
            case 'linked entry': return _p.ss($, ($) => sh.s.from_variable(
                "linked entry",
                tail(),
            ))
            case 'option constraint': return _p.ss($, ($) => sh.s.from_variable(
                `c ${$.key}`,//FIXME: do the upsteps
                tail(),
            ))
            case 'sibling': return _p.ss($, ($) => sh.s.from_variable(
                `p ${$.key}`,
                tail(),
            ))
            case 'parent sibling': return _p.ss($, ($) => sh.s.from_variable(
                `p ${$.key}`,//FIXME: do the upstep
                tail(),
            ))
            default: return _p.au($[0])
        }
    })
}

export const Lookup_Selection = (
    $: d_in.Lookup_Selection,
    $p: {

    },
): d_out.Selection => _p.sg($.type, ($) => {
    switch ($[0]) {
        case 'dictionary': return _p.ss($, ($) => sh.s.call(
            sh.s.from_variable_import(" i generic", "dictionary to lookup", []),
            Guaranteed_Value_Selection($.selection, {
                'tail': () => $['selected dictionary'].ordered
                    ? _p.list.literal(["dictionary"])
                    : _p.list.literal([]),
            }),
            {

            },
            []
        ))
        case 'not circular dependent siblings': return _p.ss($, ($) => sh.s.from_parameter(
            "not circular dependent siblings",
            []
        ))
        case 'parameter': return _p.ss($, ($) => sh.s.from_variable(
            "params",
            ["lookups", $.key],
        ))
        case 'possibly circular dependent siblings': return _p.ss($, ($) => sh.s.from_parameter(
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
): d_out.Expression => sh.e.block(
    [],
    op_pad_dictionary_identifiers($, { 'prefix': "c ", 'suffix': "" }).__d_map(($) => sh.variable(null, _p.sg($, ($) => {
        switch ($[0]) {
            case 'assert is set': return _p.ss($, ($) => sh.e.decide_optional(
                Possible_Value_Selection($, { 'tail': () => _p.list.literal([]) }),
                sh.e.select_from_context_deprecated([]),
                sh.e.implement_me(),
            ))
            case 'state': return _p.ss($, ($) => sh.e.implement_me()) // medium work
            default: return _p.au($[0])
        }
    }))),
    $p.sub(),
)

export const Node_Resolver = (
    $: d_in.Node_Resolver,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<d_out_interface.Type.reference.sub_selection.L> //can be removed when exupery has type inference
    },
): d_out.Expression => _p.sg($, ($) => {
    switch ($[0]) {
        case 'number': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
        case 'boolean': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
        case 'nothing': return _p.ss($, ($) => sh.e.null_())
        case 'reference': return _p.ss($, ($) => sh.e.select_deprecated(_p.sg($.type, ($): d_out.Selection => {
            switch ($[0]) {
                case 'derived': return _p.ss($, ($) => Guaranteed_Value_Selection($.value, { 'tail': () => _p.list.literal([]) }))
                case 'selected': return _p.ss($, ($) => {
                    const context = $
                    return _p.sg($.definition.dependency, ($) => {
                        switch ($[0]) {
                            case 'acyclic': return _p.ss($, ($) => sh.s.call(
                                sh.s.from_variable_import(" i generic", "get entry", []),
                                Lookup_Selection(context.lookup, {}),
                                {
                                    "reference": sh.e.select_from_context_deprecated([]),
                                    "location 2 string": sh.e.select_from_variable_deprecated("l2s", []),
                                },
                                []
                            ))
                            case 'cyclic': return _p.ss($, ($) => sh.s.call(
                                sh.s.from_variable_import(" i generic", "get possibly circular dependent sibling entry", []),
                                Lookup_Selection(context.lookup, {}),
                                {
                                    "reference": sh.e.select_from_context_deprecated([]),
                                    "location 2 string": sh.e.select_from_variable_deprecated("l2s", []),
                                },
                                []
                            ))
                            case 'stack': return _p.ss($, ($) => sh.s.call(
                                sh.s.from_variable_import(" i generic", "get entry from stack", []),
                                Lookup_Selection(context.lookup, {}),
                                {
                                    "reference": sh.e.select_from_context_deprecated([]),
                                    "location 2 string": sh.e.select_from_variable_deprecated("l2s", []),
                                },
                                []
                            ))
                            default: return _p.au($[0])
                        }
                    })
                })
                default: return _p.au($[0])
            }
        })))
        case 'text': return _p.ss($, ($) => sh.e.select_from_context_deprecated([]))
        case 'component': return _p.ss($, ($) => sh.e.call(
            _p.sg($.location, ($) => {
                switch ($[0]) {
                    case 'external': return _p.ss($, ($) => sh.s.from_variable_import(` i r ${$.import.key}`, `r ${$.type.key}`, []))
                    case 'internal': return _p.ss($, ($) => sh.s.from_variable(`r ${$.key}`, []))
                    default: return _p.au($[0])
                }
            }),
            sh.e.select_from_context_deprecated([]),
            false,
            {
                "location 2 string": sh.e.select_from_variable_deprecated("l2s", []),
                "parameters": $.arguments.__decide(
                    ($) => sh.e.group({
                        "values": $.values.__decide(
                            ($) => sh.e.group($.__d_map(($) => _p.sg($, ($) => {
                                switch ($[0]) {
                                    case 'optional': return _p.ss($, ($) => Optional_Value_Initialization($, null))
                                    case 'parameter': return _p.ss($, ($) => sh.e.select_from_variable_deprecated(
                                        "params",
                                        ["values", $.key],
                                    ))
                                    case 'required': return _p.ss($, ($) => sh.e.select_deprecated(Guaranteed_Value_Selection($, { 'tail': () => _p.list.literal([]) })))

                                    default: return _p.au($[0])
                                }
                            }))),
                            () => sh.e.select_from_variable_deprecated("params", ["values"]),
                        ),
                        "lookups": $.lookups.__decide(
                            ($) => sh.e.group($.__d_map(($) => _p.sg($, ($) => {
                                switch ($[0]) {
                                    case 'empty stack': return _p.ss($, ($) => sh.e.list_literal([]))
                                    case 'not set': return _p.ss($, ($) => sh.e.not_set())
                                    case 'selection': return _p.ss($, ($) => sh.e.select_deprecated(Lookup_Selection($, {})))
                                    case 'stack': return _p.ss($, ($) => sh.e.implement_me()) // quite some work
                                    default: return _p.au($[0])
                                }
                            }))),
                            () => sh.e.select_from_variable_deprecated("params", ["lookups"]),
                        ),
                    }),
                    () => sh.e.select_from_variable_deprecated("params", [])
                )
            },
        ))
        case 'dictionary': return _p.ss($, ($) => sh.e.block(
            [],
            $.benchmark.__decide(
                ($) => _p.dictionary.literal({
                    // "linked entry": e.call(
                    //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.list.literal([]) }),
                    //     e.string("FIXME", 'backtick'),
                    // ),
                    "benchmark": sh.variable(null, sh.e.select_deprecated(Guaranteed_Value_Selection($.selection, { 'tail': () => _p.list.literal([]) }))),
                }),
                () => _p.dictionary.literal({})
            ),
            sh.e.call(
                sh.s.from_variable_import(" i generic", $.definition.ordered ? "resolve ordered dictionary" : "resolve dictionary", []),
                sh.e.select_from_context_deprecated([]),
                false,
                {
                    //"denseness benchmark": e.not_set(),
                    // "map": sh.e.function_deprecated(true, sh.e.block(
                    //     [],
                    //     $.benchmark.__decide(
                    //         ($) => _p.dictionary.literal({
                    //             // "linked entry": e.call(
                    //             //     s.from_context([]), //Value_Selection($.selection, { 'tail': pa.list.literal([]) }),
                    //             //     e.string("FIXME", 'backtick'),
                    //             // ),
                    //             "linked entry": sh.variable(null, sh.e.implement_me()), // quite some work; a call to get_entry() from the selection (Guaranteed_Value_Selection), and then transform an optional value
                    //         }),
                    //         () => _p.dictionary.literal({})
                    //     ),
                    //     sh.e.change_context(
                    //         sh.s.from_context(["value"]),
                    //         Node_Resolver(
                    //             $.resolver,
                    //             {
                    //                 'temp type': $p['temp type'],
                    //                 'temp subselection': _p.list.nested_literal([
                    //                     $p['temp subselection'],
                    //                     [
                    //                         sh_i.sub.dictionary()
                    //                     ]
                    //                 ]),
                    //             }
                    //         )
                    //     )
                    // )),
                    "location 2 string": sh.e.select_from_variable_deprecated("l2s", []),

                }
            )
        ))
        case 'group': return _p.ss($, ($) => sh.e.block(
            $.__to_list(($, key) => sh.temp_ordered_variable(
                `p ${key}`,
                sh.type_node_reference(
                    "out",
                    $p['temp type'],
                    _p.list.nested_literal([
                        $p['temp subselection'],
                        [
                            sh_i.sub.group(key)
                        ]
                    ]),
                ),
                sh.e.change_context(
                    sh.s.from_context([key]),
                    Node_Resolver(
                        $.resolver,
                        {
                            'temp type': $p['temp type'],
                            'temp subselection': _p.list.nested_literal([
                                $p['temp subselection'],
                                [
                                    sh_i.sub.group(key)
                                ]
                            ]),
                        }
                    )
                )
            )),
            {},
            sh.e.group($.__d_map(($, key) => sh.e.select_from_variable_deprecated(`p ${key}`, [])))
        ))
        case 'list': return _p.ss($, ($) => sh.e.list_map(
            sh.s.from_context(["list"]),
            sh.e.change_context(
                sh.s.from_context(["element"]),
                Node_Resolver(
                    $.resolver,
                    {
                        'temp type': $p['temp type'],
                        'temp subselection': _p.list.nested_literal([
                            $p['temp subselection'],
                            [
                                sh_i.sub.list()
                            ]
                        ]),
                    }
                )
            )
        ))
        case 'optional': return _p.ss($, ($) => sh.e.optional_map(
            sh.s.from_context([]),
            Option_Constraints(
                $.constraints,
                {
                    'sub': () => Node_Resolver(
                        $['resolver'],
                        {
                            'temp type': $p['temp type'],
                            'temp subselection': _p.list.nested_literal([
                                $p['temp subselection'],
                                [
                                    sh_i.sub.optional()
                                ]
                            ]),
                        }
                    )
                }
            )
        ))
        case 'state group': return _p.ss($, ($) => sh.e.decide_state_group(
            sh.s.from_context(['state group']),
            $.states.__d_map(($, key) => sh.e.case_(key, Option_Constraints(
                $.constraints,
                {
                    'sub': () => Node_Resolver(
                        $['resolver'],
                        {
                            'temp type': $p['temp type'],
                            'temp subselection': _p.list.nested_literal([
                                $p['temp subselection'],
                                [
                                    sh_i.sub.state_group(key)
                                ]
                            ]),
                        }
                    )
                }
            ))),
            sh.type_node_reference(
                "out",
                $p['temp type'],
                $p['temp subselection'],
            ),
        ))
        // case 'type parameter': return _p.ss($, ($) => _pdev.implement_me()) // a lot of work: the resolvers need to be passed to this resolve function
        default: return _p.au($[0])
    }
})