import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
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

const no_such_entry_error = sh.a.group.literal({
    "type": sh.a.state.literal(
        "lookup",
        sh.a.state.literal(
            "no such entry",
            sh.a.select(sh.sv.context(["l reference"]))
        )
    ),
    "location": sh.a.select(sh.sv.context(["l location"])),
})

const no_context_lookup_error = sh.a.group.literal({
    "type": sh.a.state.literal(
        "lookup",
        sh.a.state.literal(
            "no context lookup",
            sh.a.nothing()
        )
    ),
    "location": sh.a.select(sh.sv.context(["l location"])),
})

const cycle_detected_error = sh.a.group.literal({
    "type": sh.a.state.literal(
        "lookup",
        sh.a.state.literal(
            "cycle detected",
            sh.a.nothing()
        )
    ),
    "location": sh.a.select(sh.sv.context(["l location"])),
})

const op_pad_dictionary_identifiers = <T>(
    $: _pi.Dictionary<T>,
    $p: {
        'prefix': string,
        'suffix': string
    }
): _pi.Dictionary<T> => _p.dictionary.from.list(
    _p.list.from.dictionary(
        $,
    ).convert(
        ($, id) => ({ 'id': id, value: $ })
    ),
).convert(
    ($) => $p.prefix + $.id + $p.suffix,
    ($) => $.value,
    {
        duplicate_id: () => _p_unreachable_code_path("the padding is fixed") // no possibility of duplicate id's
    }
)

export const Resolver_Modules = (
    $: d_in.Resolver_Modules,
    $p: {
        'path': _pi.List<string>,
        'imports': d_in.Resolver_Imports,
        'depth': number,
    }
): d_out.Package_Set.D => {
    return sh.m.package_(
        ['change context', 'variables', 'lookups', 'unreachable code path'],
        _p.dictionary.literal({
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
                    _p.list.literal(["data", "resolved"])
                ])
            ),
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
                    _p.list.literal([
                        "signatures"
                    ]),
                    _p.list.literal([
                        "resolved"
                    ]),
                    _p.list.literal([
                        "refiners",
                        "unresolved",
                    ])
                ])
            ),
        }),
        _p.dictionary.from.dictionary(
            _p.dictionary.literal({
                "external ": $p.imports.__d_map(($, id) => sh_i.import_.ancestor(3, $['schema set child']['l value']['l id'], [
                    "resolved",
                    "refiners",
                    "unresolved"
                ]))
            }),
        ).flatten(
            ($) => $,
            {
                duplicate_id: () => _p_unreachable_code_path("there is only one root key, 'external '"),
            }

        ),
        $.__d_map(($, id) => sh.algorithm(
            "signatures",
            id,
            ['abort', 'lookups', 'parameters'],
            Resolver_Value(
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
    $: d_in.Resolver_Possible_Value_Selection,
    $p: {
        'tail': _pi.List<d_out.Select_Value.regular.tail.L>
    },
): d_out.Select_Value => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'parameter': return _p.ss($, ($) => sh.sv.parameter($['l id'], $p.tail))
            case 'result': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => sh.sv.implement_me("IM: STATE2")) //quite some work
                    case 'optional value': return _p.ss($, ($) => sh.sv.implement_me("IM: OPTIONAL VALUE2")) //quite some work

                    default: return _p.au($[0])
                }
            }))

            default: return _p.au($[0])
        }
    })
}


export const Optional_Argument_Initialization = (
    $: d_in.Resolver_Optional_Value_Initialization,
): d_out.Assign => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'not set': return _p.ss($, ($) => sh.a.optional.not_set())
        case 'selection': return _p.ss($, ($) => sh.a.select(Possible_Value_Selection($, { 'tail': _p.list.literal([]) })))
        case 'set': return _p.ss($, ($) => sh.a.optional.set(sh.a.select(Resolver_Guaranteed_Value_Selection($, { 'tail': _p.list.literal([]) }))))
        default: return _p.au($[0])
    }
})

export const Resolver_Guaranteed_Value_Selection = (
    $: d_in.Resolver_Guaranteed_Value_Selection,
    $p: {
        'tail': _pi.List<d_out.Select_Value.regular.tail.L>
    },
): d_out.Select_Value => {
    const tail = (): _pi.List<d_out.Select_Value.regular.tail.L> => _p.list.nested_literal_old([
        _p.list.from.list(
            $.tail.path['l value'],
        ).flatten(
            ($) => _p.decide.state($['l item'], ($): _pi.List<d_out.Select_Value.regular.tail.L> => {
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
                    case 'component': return _p.ss($, ($) => sh.sv.implement_me("IM: COMPONENT")) //simple
                    case 'reference': return _p.ss($, ($) => sh.sv.sibling($.property['l id'], ["l results", $.constraint['l id']])) //simple
                    default: return _p.au($[0])
                }
            }))
            case 'list cursor': return _p.ss($, ($) => sh.sv.implement_me("IM: LIST CURSOR"))
            case 'linked entry': return _p.ss($, ($) => sh.sv.variable("referenced entry", tail()))
            case 'parameter': return _p.ss($, ($) => sh.sv.parameter($['l id'], []))
            case 'parent sibling': return _p.ss($, ($) => sh.sv.implement_me("IM: PARENT SIBLING"))
            case 'option constraint': return _p.ss($, ($) => sh.sv.variable("constraint " + $['l id'], tail()))
            case 'result': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => sh.sv.implement_me("IM: STATE"))  // quite some work
                    case 'optional value': return _p.ss($, ($) => sh.sv.implement_me("IM: OPTIONAL VALUE")) // quite some work
                    case 'list': return _p.ss($, ($) => sh.sv.implement_me("IM: LIST")) // quite some work
                    default: return _p.au($[0])
                }
            }))
            case 'sibling': return _p.ss($, ($) => sh.sv.sibling($['l id'], tail()))
            default: return _p.au($[0])
        }
    })
}

export const Resolver_Lookup_Selection = (
    $: d_in.Resolver_Lookup_Selection,
): d_out.Select_Lookup => _p.decide.state($.type, ($) => {
    switch ($[0]) {
        case 'acyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'resolved dictionary': return _p.ss($, ($) => sh.sl.acyclic.resolved_dictionary(
                    Resolver_Guaranteed_Value_Selection(
                        $.selection,
                        {
                            'tail': _p.list.literal([]),
                        }
                    )
                ))
                case 'siblings': return _p.ss($, ($) => sh.sl.acyclic.siblings())
                default: return _p.au($[0])
            }
        }))
        case 'cyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'siblings': return _p.ss($, ($) => sh.sl.cyclic.siblings())

                default: return _p.au($[0])
            }
        }))
        case 'parameter': return _p.ss($, ($) => sh.sl.from_parameter($['l id']))
        default: return _p.au($[0])
    }
})

export const Option_Constraints = (
    $: d_in.Resolver_Option_Constraints,
    $p: {
        sub: d_out.Assign
    },
): d_out.Assign => _p.decide.dictionary($).has_entries(
    ($) => sh.a.variables(
        _p.dictionary.from.dictionary(
            temp_prepend($, "constraint "),
        ).map(
            ($, id) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'state': return _p.ss($, ($) => sh.a.decide.state_single(
                        sh.sv.context([]),
                        $.option['l id'],
                        sh.a.select(sh.sv.context([])),
                        sh.a.abort(sh.a.group.literal({
                            "type": sh.a.state.literal(
                                "option constraint",
                                sh.a.state.literal(
                                    "no such option",
                                    sh.a.text.literal($.option['l id'], 'freeform')
                                )
                            ),
                            "location": sh.a.select(sh.sv.variable("location", []))
                        })),
                        null,
                        // sh.type_node_reference("out", $p['sub'], _p.list.literal([]))

                    ))
                    case 'assert is set': return _p.ss($, ($) => sh.a.decide.optional(
                        Possible_Value_Selection($, { 'tail': _p.list.literal([]) }),
                        sh.a.select(sh.sv.context([])),
                        sh.a.abort(sh.a.group.literal({
                            "type": sh.a.state.literal(
                                "constraint",
                                sh.a.state.literal(
                                    "optional value is not set",
                                    sh.a.nothing(),
                                )
                            ),
                            "location": sh.a.select(sh.sv.variable("location", []))
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


//  sh.a.variables(
//     // {
//     //         switch ($[0]) {
//     //     case 'assert is set': return _p.ss($, ($) => sh.a.decide.optional(
//     //         Possible_Value_Selection($, { 'tail': () => _p.list.literal([]) }),
//     //         sh.a.select(sh.sv.context([])),
//     //         sh.a.implement_me("IM: assert is set"),
//     //         sh.type_node_reference("out", $p['sub'] as any as string, _p.list.literal([]))
//     //     ))
//     //     case 'state': return _p.ss($, ($) => sh.a.implement_me("IM: state constraint")) // medium work
//     //     default: return _p.au($[0])
//     // }
//     $.__decide(),
//     $p.sub
//  )


export const Resolver_Value = (
    $: d_in.Resolver_Value,
    $p: {
        'temp type': string
        'temp subselection': _pi.List<d_out.Temp_Value_Type_Specification.sub_selection.L> //can be removed when pareto has type inference
    },
): d_out.Assign => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => sh.a.select(sh.sv.context([])))

        case 'component': return _p.ss($, ($) => {

            const results = $.definition.results

            return Value_Results(
                $.definition.results,
                {
                    'base type': sh.a.select(
                        sh.sv.call(
                            _p.decide.state($.location, ($) => {
                                switch ($[0]) {
                                    case 'external': return _p.ss($, ($) => sh.call.external("external " + $['resolver import']['l id'], $.signature['l id']))
                                    case 'internal': return _p.ss($, ($) => sh.call.local($['l id']))
                                    default: return _p.au($[0])
                                }
                            }),
                            sh.a.select(sh.sv.context(_p.boolean.from.optional($.definition.results).is_set() ? [] : [])),
                            sh.a.select(sh.sv.context([])),
                            $.arguments.__decide(
                                ($) => $.lookups.__decide(
                                    ($) => sh.lookups.initialize($.__d_map(
                                        ($) => _p.decide.state($, ($) => {
                                            switch ($[0]) {
                                                case 'acyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                                    switch ($[0]) {
                                                        case 'not set': return _p.ss($, ($) => sh.sl.acyclic.not_set())
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                case 'cyclic': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                                    switch ($[0]) {
                                                        case 'not set': return _p.ss($, ($) => sh.sl.cyclic.not_set())
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                case 'stack': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                                    switch ($[0]) {
                                                        case 'empty': return _p.ss($, ($) => sh.sl.stack.empty())
                                                        case 'push': return _p.ss($, ($) => sh.sl.stack.push(
                                                            Resolver_Lookup_Selection($['stack']),
                                                            Resolver_Lookup_Selection($['item']),
                                                        ))
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                case 'selection': return _p.ss($, ($) => Resolver_Lookup_Selection($))
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
                                                case 'required': return _p.ss($, ($) => sh.a.select(
                                                    Resolver_Guaranteed_Value_Selection(
                                                        $,
                                                        {
                                                            'tail': _p.list.literal([]),
                                                        }
                                                    )
                                                ))
                                                case 'parameter': return _p.ss($, ($) => sh.a.select(sh.sv.parameter($['l id'], [])))
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
                ($) => sh.a.dictionary.from.dictionary.resolve( //FIXME: validate denseness
                    sh.sv.context(["l dictionary"]),
                    sh.a.change_context(
                        sh.sv.context(["l entry"]),
                        sh.a.variables(
                            {
                                "location": sh.a.select(sh.sv.context(["l location"])),
                                "referenced entry": sh.a.implement_me("IM: referenced entry"),
                            },
                            Resolver_Value(
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
                () => sh.a.dictionary.from.dictionary.resolve(
                    sh.sv.context(["l dictionary"]),
                    sh.a.change_context(
                        sh.sv.context(["l entry"]),
                        Resolver_Value(
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
        case 'group': return _p.ss($, ($) => sh.a.group.literal_resolve(
            $.__d_map(
                ($, id) => sh.a.change_context(
                    sh.sv.context([id]),
                    Resolver_Value(
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
            const resolver: d_in.Resolver_Value = $.resolver
            const results = $.definition.results
            return $.result.__decide(
                ($) => sh.a.group.literal({
                    "l value": sh.a.list.from.list.map_with_state(
                        sh.sv.context(["l list"]),
                        sh.a.implement_me("IM: initial state"),
                        sh.a.group.literal({
                            "l item": sh.a.change_context(
                                sh.sv.context(["l item"]),
                                Resolver_Value(
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
                            "l result": sh.a.implement_me("IM: result aggregation") //depends on the aggregation
                        }),
                        sh.a.implement_me("IM: update state"),
                        sh.a.implement_me("IM: wrapup"),
                    ),
                    "l results": sh.a.group.literal({
                        "result": sh.a.implement_me("IM: result aggregation") //this one is hardcode for now
                    })
                }),
                () => sh.a.list.from.list.map(
                    sh.sv.context(["l list"]),
                    sh.a.change_context(
                        sh.sv.context(["l item"]),
                        Resolver_Value(
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
        case 'nothing': return _p.ss($, ($) => sh.a.nothing())
        case 'number': return _p.ss($, ($) => sh.a.select(sh.sv.context([])))
        case 'optional': return _p.ss($, ($) => sh.a.optional.map(
            sh.sv.context([]),
            Resolver_Value( //FIX option constraints and value results
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
                case 'derived': return _p.ss($, ($) => sh.a.select(
                    Resolver_Guaranteed_Value_Selection(
                        $.value,
                        {
                            'tail': _p.list.literal([])
                        }
                    )
                ))
                case 'selected': return _p.ss($, ($) => {
                    const x = $.lookup
                    const x_out = Resolver_Lookup_Selection(x)
                    return Value_Constraints(
                        $.constraints,
                        {
                            'sub': _p.decide.state($.definition.dependency, ($) => {
                                switch ($[0]) {
                                    case 'stack': return _p.ss($, ($) => sh.a.group.literal({
                                        "l entry": sh.a.select(sh.sv.lookup_entry_acyclic(
                                            x_out,
                                            sh.a.select(sh.sv.context(["l reference"])),
                                            no_such_entry_error,
                                            no_context_lookup_error,
                                            cycle_detected_error,

                                        )),
                                        "l id": sh.a.select(sh.sv.context(["l reference"])),
                                        // "l up steps": sh.a.implement_me("IM: FIXME UPSTEPS"),
                                        "l up steps": sh.a.select(sh.sv.lookup_depth(
                                            x_out,
                                            sh.a.select(sh.sv.context(["l reference"])),
                                            no_such_entry_error,
                                            no_context_lookup_error,
                                            cycle_detected_error,

                                        )),
                                    }))
                                    case 'acyclic': return _p.ss($, ($) => sh.a.group.literal({
                                        // "l entry": sh.a.implement_me("IM: FIXME ACYCLIC ENTRY"),
                                        "l entry": sh.a.select(sh.sv.lookup_entry_acyclic(
                                            x_out,
                                            sh.a.select(sh.sv.context(["l reference"])),
                                            no_such_entry_error,
                                            no_context_lookup_error,
                                            cycle_detected_error,

                                        )),
                                        "l id": sh.a.select(sh.sv.context(["l reference"])),
                                    }))
                                    case 'cyclic': return _p.ss($, ($) => sh.a.group.literal({
                                        "l entry": sh.a.select(sh.sv.lookup_entry_cyclic(
                                            x_out,
                                            sh.a.select(sh.sv.context(["l reference"])),
                                            no_such_entry_error,
                                            no_context_lookup_error,
                                            sh.a.unreachable("the generated resolver should take care of accessing before resolved"),

                                        )),
                                        "l id": sh.a.select(sh.sv.context(["l reference"])),
                                    }))
                                    default: return _p.au($[0])
                                }
                            })
                        }
                    )
                })
                default: return _p.au($[0])
            }
        }))
        case 'state': return _p.ss($, ($) => {
            const results = $.definition.results
            return sh.a.variables(
                {
                    "location": sh.a.select(sh.sv.context(["l location"])),
                },
                Value_Results(
                    $.definition.results,
                    {
                        'base type': sh.a.decide.state(
                            sh.sv.context(["l state"]),
                            $.options.__d_map(($, id) => sh.a.state.literal(id, Option_Constraints(
                                $.constraints,
                                {
                                    'sub': Resolver_Value(
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
        case 'text': return _p.ss($, ($) => sh.a.select(sh.sv.context([])))
        default: return _p.au($[0])
    }
})

export const Value_Constraint = (
    $: d_in.Resolver_Value_Constraint,
): d_out.Assign => {
    return Constraint(
        $.constraint,
        {
            'sub': _p.decide.state($.start, ($) => {
                switch ($[0]) {
                    case 'value': return _p.ss($, ($) => sh.sv.implement_me("IM: constraint result1"))
                    case 'sibling': return _p.ss($, ($) => sh.sv.implement_me("IM: constraint result2"))
                    default: return _p.au($[0])
                }
            })
        }
    )
}

export const Constraint = (
    $: d_in.Resolver_Constraint,
    $p: {
        sub: d_out.Select_Value
    }
): d_out.Assign => {
    const rvs = Relative_Value_Selection($.selection, { sub: $p.sub })
    return _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'state': return _p.ss($, ($) => sh.a.decide.state_single(
                rvs,
                $.option['l id'],
                sh.a.select(sh.sv.context([])),
                sh.a.abort(sh.a.group.literal({
                    "type": sh.a.state.literal(
                        "constraint",
                        sh.a.state.literal(
                            "state",
                            sh.a.group.literal({
                                "expected": sh.a.text.literal($.option['l id'], 'freeform'),
                                "found": sh.a.text.option_name(),
                            })
                        )
                    ),
                    "location": sh.a.select(sh.sv.variable("location", []))
                })), null,
            ))
            case 'optional value': return _p.ss($, ($) => sh.a.implement_me("IM: constraint2"))
            default: return _p.au($[0])
        }
    })
}

export const Relative_Value_Selection = (
    $: d_in.Resolver_Relative_Value_Selection,
    $p: {
        sub: d_out.Select_Value
    }
): d_out.Select_Value => {
    $.path['l value'].__l_map(($) => null)
    return sh.sv.implement_me("IM: rvs")
}

export const Value_Constraints = (
    $: d_in.Resolver_Value_Constraints,
    $p: {
        sub: d_out.Assign
    }
): d_out.Assign => {
    return _p.decide.dictionary($).has_entries(
        () => sh.a.group.literal_resolve({
            "l value": $p.sub,
            "l results": sh.a.variables(
                {
                    "location": sh.a.select(sh.sv.context(["l location"])),
                },
                sh.a.group.literal($.__d_map(($, id) => Value_Constraint($)))
            ),
        }),
        () => $p.sub
    )
}

export const Value_Reference = (
    $: d_in.Value_Reference,

): d_out.Assign => {
    return sh.a.implement_me("IM: value reference")
}

export const Value_Results = (
    $: d_in.Value_Results,
    $p: {
        'base type': d_out.Assign
    }
): d_out.Assign => {
    return _p.decide.optional(
        $,
        ($) => sh.a.group.literal({
            "l results": sh.a.group.literal(
                _p.dictionary.from.dictionary(
                    $,
                ).map(
                    ($) => Value_Reference($)
                )
            ),
            "l value": $p['base type'],
        }),
        () => $p['base type']
    )
}