import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/expression'
import * as _pdev from 'pareto-core-dev'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "pareto/dist/interface/generated/liana/schemas/implementation/data/resolved"

import * as sh from "pareto/dist/shorthands/implementation"
import * as sh_i from "pareto/dist/shorthands/interface"

const temp_prepend = <T>(
    $: _pi.Dictionary<T>,
    prefix: string
) => {
    const result: { [id: string]: T } = {}
    $.__d_map(($, id) => {
        result[prefix + id] = $
    })
    return _p.dictionary.literal(result)
}
import { $$ as op_flatten_dictionary } from "../../../../temp_flatten_dictionary"

const no_such_entry_error = sh.e.group.literal({
    "type": sh.e.state.literal(
        "lookup",
        sh.e.state.literal(
            "no such entry",
            sh.e.select(sh.s.context(["l reference"]))
        )
    ),
    "location": sh.e.select(sh.s.context(["l location"])),
})

const no_context_lookup_error = sh.e.group.literal({
    "type": sh.e.state.literal(
        "lookup",
        sh.e.state.literal(
            "no context lookup",
            sh.e.nothing()
        )
    ),
    "location": sh.e.select(sh.s.context(["l location"])),
})

const cycle_detected_error = sh.e.group.literal({
    "type": sh.e.state.literal(
        "lookup",
        sh.e.state.literal(
            "cycle detected",
            sh.e.nothing()
        )
    ),
    "location": sh.e.select(sh.s.context(["l location"])),
})

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

export const Module_Resolvers = (
    $: d_in.Module_Resolvers,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Imports
    }
): d_out.Package_Set.D => {
    return sh.m.package_(
        'refiner',
        ['change context', 'variables', 'implement me', 'lookups'],
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
            Value_Resolver(
                $['root value resolver'],
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
        'tail': _pi.List<d_out.Selection.regular.tail.L>
    },
): d_out.Selection => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => sh.s.parameter($['l id'], $p.tail))
            case 'result': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => sh.s.implement_me("IM: STATE2")) //quite some work
                    case 'optional value': return _p.ss($, ($) => sh.s.implement_me("IM: OPTIONAL VALUE2")) //quite some work

                    default: return _p.au($[0])
                }
            }))

            default: return _p.au($[0])
        }
    })
}


export const Optional_Argument_Initialization = (
    $: d_in.Optional_Value_Initialization,
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'not set': return _p.ss($, ($) => sh.e.optional.not_set())
        case 'selection': return _p.ss($, ($) => sh.e.select(Possible_Value_Selection($, { 'tail': _p.list.literal([]) })))
        case 'set': return _p.ss($, ($) => sh.e.optional.set(sh.e.select(Guaranteed_Value_Selection($, { 'tail': _p.list.literal([]) }))))
        default: return _p.au($[0])
    }
})

export const Guaranteed_Value_Selection = (
    $: d_in.Guaranteed_Value_Selection,
    $p: {
        'tail': _pi.List<d_out.Selection.regular.tail.L>
    },
): d_out.Selection => {
    const tail = (): _pi.List<d_out.Selection.regular.tail.L> => _p.list.nested_literal_old([
        _p.list.flatten(
            $.tail.path['l value'],
            ($) => _p.decide.state($['l item'], ($): _pi.List<d_out.Selection.regular.tail.L> => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => _p.list.literal([]))
                    case 'group': return _p.ss($, ($) => _p.list.literal([$['l id']]))
                    case 'reference': return _p.ss($, ($) => _p.decide.state($.definition.type, ($) => {
                        switch ($[0]) {
                            case 'derived': return _p.ss($, ($) => _p.list.literal([]))
                            case 'selected': return _p.ss($, ($) => _p.list.literal(["l entry"]))
                            default: return _p.au($[0])
                        }
                    }))
                    default: return _p.au($[0])
                }
            })
        ),
        $p.tail
    ])
    return _p.decide.state($.start, ($) => {
        switch ($[0]) {
            case 'constraint': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'component': return _p.ss($, ($) => sh.s.implement_me("IM: COMPONENT")) //simple
                    case 'reference': return _p.ss($, ($) => sh.s.implement_me("IM: REFERENCE")) //simple
                    default: return _p.au($[0])
                }
            }))
            case 'list cursor': return _p.ss($, ($) => sh.s.implement_me("IM: LIST CURSOR"))
            case 'linked entry': return _p.ss($, ($) => sh.s.variable("referenced entry", tail()))
            case 'parameter': return _p.ss($, ($) => sh.s.parameter($['l id'], []))
            case 'parent sibling': return _p.ss($, ($) => sh.s.implement_me("IM: PARENT SIBLING"))
            case 'option constraint': return _p.ss($, ($) => sh.s.variable("constraint " + $['l id'], tail()))
            case 'result': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => sh.s.implement_me("IM: STATE"))  // quite some work
                    case 'optional value': return _p.ss($, ($) => sh.s.implement_me("IM: OPTIONAL VALUE")) // quite some work
                    case 'list': return _p.ss($, ($) => sh.s.implement_me("IM: LIST")) // quite some work
                    default: return _p.au($[0])
                }
            }))
            case 'sibling': return _p.ss($, ($) => sh.s.sibling($['l id'], tail()))
            default: return _p.au($[0])
        }
    })
}

export const Lookup_Selection = (
    $: d_in.Lookup_Selection,
): d_out.Lookup_Selection => _p.decide.state($.type, ($) => {
    switch ($[0]) {
        case 'acyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'resolved dictionary': return _p.ss($, ($) => sh.ls.acyclic.resolved_dictionary(
                    Guaranteed_Value_Selection(
                        $.selection,
                        {
                            'tail': _p.list.literal([]),
                        }
                    )
                ))
                case 'siblings': return _p.ss($, ($) => sh.ls.acyclic.siblings())
                default: return _p.au($[0])
            }
        }))
        case 'cyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'siblings': return _p.ss($, ($) => sh.ls.cyclic.siblings())

                default: return _p.au($[0])
            }
        }))
        case 'parameter': return _p.ss($, ($) => sh.ls.from_parameter($['l id']))
        default: return _p.au($[0])
    }
})

export const Option_Constraint_Resolvers = (
    $: d_in.Option_Constraint_Resolvers,
    $p: {
        sub: d_out.Expression
    },
): d_out.Expression => _p.decide.dictionary.has_entries(
    $,
    ($) => sh.e.variables(
        _p.dictionary.map(
            temp_prepend($, "constraint "),
            ($, id) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => sh.e.decide.state_single(
                        sh.s.context([]),
                        $.option['l id'],
                        sh.e.select(sh.s.context([])),
                        sh.e.abort(sh.e.group.literal({
                            "type": sh.e.state.literal(
                                "option constraint",
                                sh.e.state.literal(
                                    "no such option",
                                    sh.e.text.literal($.option['l id'], 'freeform')
                                )
                            ),
                            "location": sh.e.select(sh.s.variable("location", []))
                        })),
                        null,
                        // sh.type_node_reference("out", $p['sub'], _p.list.literal([]))

                    ))
                    case 'assert is set': return _p.ss($, ($) => sh.e.decide.optional(
                        Possible_Value_Selection($, { 'tail': _p.list.literal([]) }),
                        sh.e.select(sh.s.context([])),
                        sh.e.abort(sh.e.group.literal({
                            "type": sh.e.state.literal(
                                "constraint",
                                sh.e.state.literal(
                                    "optional value is not set",
                                    sh.e.nothing(),
                                )
                            ),
                            "location": sh.e.select(sh.s.variable("location", []))
                        })),
                        // null,
                        // sh.type_node_reference("out", $p['sub'] as any as string, _p.list.literal([]))
                    ))
                    default: return _p.au($[0])
                }
            })
        ),
        $p.sub
    ),
    () => $p.sub
)


//  sh.e.variables(
//     // {
//     //         switch ($[0]) {
//     //     case 'assert is set': return _p.ss($, ($) => sh.e.decide.optional(
//     //         Possible_Value_Selection($, { 'tail': () => _p.list.literal([]) }),
//     //         sh.e.select(sh.s.context([])),
//     //         sh.e.implement_me("IM: assert is set"),
//     //         sh.type_node_reference("out", $p['sub'] as any as string, _p.list.literal([]))
//     //     ))
//     //     case 'state': return _p.ss($, ($) => sh.e.implement_me("IM: state constraint")) // medium work
//     //     default: return _p.au($[0])
//     // }
//     $.__decide(),
//     $p.sub
//  )


export const Value_Resolver = (
    $: d_in.Value_Resolver,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<d_out.Temp_Type_Node_Reference.sub_selection.L> //can be removed when exupery has type inference
    },
): d_out.Expression => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => sh.e.select(sh.s.context([])))

        case 'component': return _p.ss($, ($) => {

            const results = $.definition.results

            return Value_Results(
                $.definition.results,
                {
                    'base type': sh.e.select(
                        sh.s.call(
                            _p.decide.state($.location, ($) => {
                                switch ($[0]) {
                                    case 'external': return _p.ss($, ($) => sh.call.external("external " + $.import['l id'], $.signature['l id']))
                                    case 'internal': return _p.ss($, ($) => sh.call.local($['l id']))
                                    default: return _p.au($[0])
                                }
                            }),
                            sh.e.select(sh.s.context(_p.boolean.optional_is_set($.definition.results) ? [] : [])),
                            sh.e.select(sh.s.context([])),
                            $.arguments.__decide(
                                ($) => $.lookups.__decide(
                                    ($) => sh.lookups.initialize($.__d_map(
                                        ($) => _p.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'acyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                                    switch ($[0]) {
                                                        case 'not set': return _p.ss($, ($) => sh.ls.acyclic.not_set())
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                case 'cyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                                    switch ($[0]) {
                                                        case 'not set': return _p.ss($, ($) => sh.ls.cyclic.not_set())
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                case 'stack': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                                    switch ($[0]) {
                                                        case 'empty': return _p.ss($, ($) => sh.ls.stack.empty())
                                                        case 'push': return _p.ss($, ($) => sh.ls.stack.push(
                                                            Lookup_Selection($['stack']),
                                                            Lookup_Selection($['item']),
                                                        ))
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                case 'selection': return _p.ss($, ($) => Lookup_Selection($))
                                                default: return _p.au($[0])
                                            }
                                        }),
                                    )),
                                    () => sh.lookups.pass_through()
                                ),
                                () => sh.lookups.not_set()
                            ),
                            $.arguments.__decide(
                                ($) => $.modules.__decide(
                                    ($) => sh.arguments_.initialize($.__d_map(
                                        ($) => _p.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'optional': return _p.ss($, ($) => Optional_Argument_Initialization($))
                                                case 'required': return _p.ss($, ($) => sh.e.select(
                                                    Guaranteed_Value_Selection(
                                                        $,
                                                        {
                                                            'tail': _p.list.literal([]),
                                                        }
                                                    )
                                                ))
                                                case 'parameter': return _p.ss($, ($) => sh.e.select(sh.s.parameter($['l id'], [])))
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
                    )
                }
            )
        })
        case 'dictionary': return _p.ss($, ($) => {
            const resolver = $.resolver
            return $.benchmark.__decide(
                ($) => sh.e.dictionary.resolve( //FIXME: validate denseness
                    sh.s.context(["l dictionary"]),
                    sh.e.change_context(
                        sh.s.context(["l entry"]),
                        sh.e.variables(
                            {
                                "referenced entry": sh.e.implement_me("IM: referenced entry"),
                            },
                            Value_Resolver(
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
                        Value_Resolver(
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
        case 'group': return _p.ss($, ($) => sh.e.group.resolve(
            $.__d_map(
                ($, id) => sh.e.change_context(
                    sh.s.context([id]),
                    Value_Resolver(
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
            const resolver: d_in.Value_Resolver = $.resolver
            const results = $.definition.results
            return $.result.__decide(
                ($) => sh.e.group.literal({
                    "l value": sh.e.list.map_with_state(
                        sh.s.context(["l list"]),
                        sh.e.implement_me("IM: initial state"),
                        sh.e.group.literal({
                            "l item": sh.e.change_context(
                                sh.s.context(["l item"]),
                                Value_Resolver(
                                    resolver,
                                    {
                                        'temp type': $p['temp type'],
                                        'temp subselection': _p.list.nested_literal_old([
                                            $p['temp subselection'],
                                            [
                                                sh_i.sub.group("l value"),
                                                sh_i.sub.list(),
                                                sh_i.sub.group("l item"),
                                            ]
                                        ]),
                                    }
                                ),
                            ),
                            "l result": sh.e.implement_me("IM: result aggregation") //depends on the aggregation
                        }),
                        sh.e.implement_me("IM: update state"),
                        sh.e.implement_me("IM: wrapup"),
                    ),
                    "l results": sh.e.group.literal({
                        "result": sh.e.implement_me("IM: result aggregation") //this one is hardcode for now
                    })
                }),
                () => sh.e.list.map(
                    sh.s.context(["l list"]),
                    sh.e.change_context(
                        sh.s.context(["l item"]),
                        Value_Resolver(
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
        case 'nothing': return _p.ss($, ($) => sh.e.nothing())
        case 'number': return _p.ss($, ($) => sh.e.select(sh.s.context([])))
        case 'optional': return _p.ss($, ($) => sh.e.optional.map(
            sh.s.context([]),
            Value_Resolver( //FIX option constraints and value results
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
        case 'reference': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'derived': return _p.ss($, ($) => sh.e.select(
                    Guaranteed_Value_Selection(
                        $.value,
                        {
                            'tail': _p.list.literal([])
                        }
                    )
                ))
                case 'selected': return _p.ss($, ($) => {
                    const x = $.lookup
                    const x_out = Lookup_Selection(x)
                    return _p.decide.state($.definition.dependency, ($) => {
                        switch ($[0]) {
                            case 'stack': return _p.ss($, ($) => sh.e.group.literal({
                                // "l entry": sh.e.implement_me("IM: FIXME ENTRY FROM STACK"),
                                "l entry": sh.e.select(sh.s.lookup_entry(
                                    x_out,
                                    sh.e.select(sh.s.context(["l reference"])),
                                    no_such_entry_error,
                                    no_context_lookup_error,
                                    cycle_detected_error,

                                )),
                                "l id": sh.e.select(sh.s.context(["l reference"])),
                                // "l up steps": sh.e.implement_me("IM: FIXME UPSTEPS"),
                                "l up steps": sh.e.select(sh.s.lookup_depth(
                                    x_out,
                                    sh.e.select(sh.s.context(["l reference"])),
                                    no_such_entry_error,
                                    no_context_lookup_error,
                                    cycle_detected_error,

                                )),
                            }))
                            case 'acyclic': return _p.ss($, ($) => sh.e.group.literal({
                                // "l entry": sh.e.implement_me("IM: FIXME ACYCLIC ENTRY"),
                                "l entry": sh.e.select(sh.s.lookup_entry(
                                    x_out,
                                    sh.e.select(sh.s.context(["l reference"])),
                                    no_such_entry_error,
                                    no_context_lookup_error,
                                    cycle_detected_error,

                                )),
                                "l id": sh.e.select(sh.s.context(["l reference"])),
                            }))
                            case 'cyclic': return _p.ss($, ($) => sh.e.group.literal({
                                "l entry": sh.e.implement_me("IM: FIXME CYCLIC ENTRY"),

                                // "l entry": sh.e.select(sh.s.lookup_entry(
                                //     x_out,
                                //     sh.e.select(sh.s.context(["l reference"])),
                                //     no_such_entry_error,
                                //     no_context_lookup_error,
                                //     sh.e.unreachable(), //this can only happen if there is a bug in this generator

                                // )),
                                "l id": sh.e.select(sh.s.context(["l reference"])),
                            }))
                            default: return _p.au($[0])
                        }
                    })
                })
                default: return _p.au($[0])
            }
        }))
        case 'state': return _p.ss($, ($) => {
            const results = $.definition.results
            return sh.e.variables(
                {
                    "location": sh.e.select(sh.s.context(["l location"])),
                },
                Value_Results(
                    $.definition.results,
                    {
                        'base type': sh.e.decide.state(
                            sh.s.context(["l state"]),
                            $.states.__d_map(($, id) => sh.e.state.literal(id, Option_Constraint_Resolvers(
                                $.constraints,
                                {
                                    'sub': Value_Resolver(
                                        $['resolver'],
                                        {
                                            'temp type': $p['temp type'],
                                            'temp subselection': _p.list.nested_literal_old([
                                                $p['temp subselection'],
                                                _p.decide.optional(
                                                    results,
                                                    () => [
                                                        sh_i.sub.group("l value"),
                                                        sh_i.sub.state(id),
                                                    ],
                                                    () => [
                                                        sh_i.sub.state(id),
                                                    ]
                                                )
                                            ]),
                                        }
                                    )
                                }
                            ))),
                            sh.type_node_reference(
                                "out",
                                $p['temp type'], _p.list.nested_literal_old([
                                    $p['temp subselection'],
                                    _p.decide.optional(
                                        results,
                                        () => [
                                            sh_i.sub.group("l value"),
                                        ],
                                        () => []
                                    ),
                                ]),
                            ),
                        )
                    }
                )
            )
        })
        case 'text': return _p.ss($, ($) => sh.e.select(sh.s.context([])))
        default: return _p.au($[0])
    }
})

export const Value_Results = (
    $: d_in.Value_Results,
    $p: {
        'base type': d_out.Expression
    }
): d_out.Expression => {
    return _p.decide.optional(
        $,
        ($) => sh.e.group.literal({
            "l results": sh.e.group.literal(_p.dictionary.map(
                $,
                (): d_out.Expression => sh.e.implement_me("IM: result")
            )),
            "l value": $p['base type'],
        }),
        () => $p['base type']
    )
}