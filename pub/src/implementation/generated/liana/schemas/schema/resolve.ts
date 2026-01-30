
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as _pdev from "pareto-core-dev"

import * as t_out from "../../../../../interface/generated/liana/schemas/schema/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/schema/resolve"

export const Type: t_signatures.Type = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_node = _p_cc(
            $['node'],
            ($) => Type_Node(
                $,
                ($) => abort(
                    $
                ),
                {
                    'noncircular sibling types': _pdev.implement_me(
                        "IM: selection"
                    ),
                    'possibly circular dependent sibling types': _pdev.implement_me(
                        "IM: selection"
                    ),
                },
                {
                    'globals': $p['globals'],
                    'imports': $p['imports'],
                }
            )
        )
        return {
            'node': prop_node,
        }
    }
)

export const Types: t_signatures.Types = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Types.D => _p_cc(
        $['l entry'],
        ($) => Type(
            $,
            ($) => abort(
                $
            ),
            {
                'noncircular sibling types': _pdev.implement_me(
                    "IM: selection"
                ),
                'possibly circular dependent sibling types': _pdev.implement_me(
                    "IM: selection"
                ),
            },
            {
                'globals': $p['globals'],
                'imports': $p['imports'],
            }
        )
    )
)

export const Globals: t_signatures.Globals = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_complexity = _p_cc(
            $['complexity'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Globals.complexity => {
                    switch ($[0]) {
                        case 'unconstrained':
                            return _p.ss(
                                $,
                                ($) => ['unconstrained', null]
                            )
                        case 'constrained':
                            return _p.ss(
                                $,
                                ($) => ['constrained', null]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        
        const prop_text_types = _p_cc(
            $['text types'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Globals.text_types.D => _p_cc(
                    $['l entry'],
                    ($) => Text_Type(
                        $,
                        ($) => abort(
                            $
                        ),
                        null,
                        null
                    )
                )
            )
        )
        
        const prop_number_types = _p_cc(
            $['number types'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Globals.number_types.D => _p_cc(
                    $['l entry'],
                    ($) => Number_Type(
                        $,
                        ($) => abort(
                            $
                        ),
                        null,
                        null
                    )
                )
            )
        )
        return {
            'complexity': prop_complexity,
            'text types': prop_text_types,
            'number types': prop_number_types,
        }
    }
)

export const Number_Type: t_signatures.Number_Type = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_precision = _p_cc(
            $['precision'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Number_Type.precision => {
                    switch ($[0]) {
                        case 'approximation':
                            return _p.ss(
                                $,
                                ($) => ['approximation', _p.group.resolve(
                                    () => {
                                        
                                        const prop_significant_digits = _p_cc(
                                            $['significant digits'],
                                            ($) => $
                                        )
                                        return {
                                            'significant digits': prop_significant_digits,
                                        }
                                    }
                                )]
                            )
                        case 'exact':
                            return _p.ss(
                                $,
                                ($) => ['exact', _p.group.resolve(
                                    () => {
                                        
                                        const prop_decimal_separator_offset = _p_cc(
                                            $['decimal separator offset'],
                                            ($) => _p.optional.map(
                                                $,
                                                ($) => $
                                            )
                                        )
                                        
                                        const prop_type = _p_cc(
                                            $['type'],
                                            ($) => _p.decide.state(
                                                $['l state'],
                                                ($): t_out.Number_Type.precision.exact.type_ => {
                                                    switch ($[0]) {
                                                        case 'integer':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['integer', null]
                                                            )
                                                        case 'natural':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['natural', null]
                                                            )
                                                        case 'positive natural':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['positive natural', null]
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0]
                                                            )
                                                    }
                                                }
                                            )
                                        )
                                        return {
                                            'decimal separator offset': prop_decimal_separator_offset,
                                            'type': prop_type,
                                        }
                                    }
                                )]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        return {
            'precision': prop_precision,
        }
    }
)

export const Text_Type: t_signatures.Text_Type = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Text_Type.type_ => {
                    switch ($[0]) {
                        case 'multi line':
                            return _p.ss(
                                $,
                                ($) => ['multi line', null]
                            )
                        case 'single line':
                            return _p.ss(
                                $,
                                ($) => ['single line', null]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        return {
            'type': prop_type,
        }
    }
)

export const Type_Reference: t_signatures.Type_Reference = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_location = _p_cc(
            $['location'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Type_Reference.location => {
                    switch ($[0]) {
                        case 'internal':
                            return _p.ss(
                                $,
                                ($) => ['internal', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l reference'],
                                }]
                            )
                        case 'external':
                            return _p.ss(
                                $,
                                ($) => ['external', _p.group.resolve(
                                    () => {
                                        
                                        const prop_import = _p_cc(
                                            $['import'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l reference'],
                                            })
                                        )
                                        
                                        const prop_type = _p_cc(
                                            $['type'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l reference'],
                                            })
                                        )
                                        return {
                                            'import': prop_import,
                                            'type': prop_type,
                                        }
                                    }
                                )]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        
        const prop_resulting_type = _p_cc(
            $['resulting type'],
            ($) => _pdev.implement_me(
                "IM: STATE"
            )
        )
        return {
            'location': prop_location,
            'resulting type': prop_resulting_type,
        }
    }
)

export const Type_Node_Reference: t_signatures.Type_Node_Reference = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_type_location = _p_cc(
            $['type location'],
            ($) => Type_Reference(
                $,
                ($) => abort(
                    $
                ),
                $l,
                $p
            )
        )
        
        const prop_path = _p_cc(
            $['path'],
            ($) => Type_Node_Path(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'type': _pdev.implement_me(
                        "IM: required"
                    ),
                }
            )
        )
        return {
            'type location': prop_type_location,
            'path': prop_path,
        }
    }
)

export const Type_Node_Path: t_signatures.Type_Node_Path = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_tail = _p_cc(
            $['tail'],
            ($) => ({
                'l list': _p.list.map_with_state(
                    $['l list'],
                    _pdev.implement_me(
                        "IM: initial state"
                    ),
                    ($) => ({
                        'l item': _p_cc(
                            $['l item'],
                            ($) => _p.decide.state(
                                $['l state'],
                                ($): t_out.Type_Node_Path.tail.l_list.L.l_item => {
                                    switch ($[0]) {
                                        case 'dictionary':
                                            return _p.ss(
                                                $,
                                                ($) => ['dictionary', null]
                                            )
                                        case 'group':
                                            return _p.ss(
                                                $,
                                                ($) => ['group', {
                                                    'l entry': _pdev.implement_me(
                                                        "IM: FIXME ACYCLIC ENTRY"
                                                    ),
                                                    'l id': $['l reference'],
                                                }]
                                            )
                                        case 'list':
                                            return _p.ss(
                                                $,
                                                ($) => ['list', null]
                                            )
                                        case 'optional':
                                            return _p.ss(
                                                $,
                                                ($) => ['optional', null]
                                            )
                                        case 'state':
                                            return _p.ss(
                                                $,
                                                ($) => ['state', {
                                                    'l entry': _pdev.implement_me(
                                                        "IM: FIXME ACYCLIC ENTRY"
                                                    ),
                                                    'l id': $['l reference'],
                                                }]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )
                        ),
                        'l result': _pdev.implement_me(
                            "IM: result aggregation"
                        ),
                    }),
                    ($, state) => _pdev.implement_me(
                        "IM: update state"
                    ),
                    ($, state) => _pdev.implement_me(
                        "IM: wrapup"
                    )
                ),
                'l result': _pdev.implement_me(
                    "IM: result aggregation"
                ),
            })
        )
        
        const prop_resulting_node = _p_cc(
            $['resulting node'],
            ($) => _pdev.implement_me(
                "IM: LIST"
            )
        )
        return {
            'tail': prop_tail,
            'resulting node': prop_resulting_node,
        }
    }
)

export const Value_Constraints: t_signatures.Value_Constraints = ($, abort, $l, $p) => _p.optional.map(
    $,
    ($) => _p.dictionary.resolve(
        $['l dictionary'],
        ($, id, $a, $c): t_out.Value_Constraints.O.D => _p_cc(
            $['l entry'],
            ($) => Type_Node_Reference(
                $,
                ($) => abort(
                    $
                ),
                $l,
                $p
            )
        )
    )
)

export const Group: t_signatures.Group = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Group.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_description = _p_cc(
                    $['description'],
                    ($) => _p.optional.map(
                        $,
                        ($) => $
                    )
                )
                
                const prop_node = _p_cc(
                    $['node'],
                    ($) => Type_Node(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'noncircular sibling types': _pdev.implement_me(
                                "IM: selection"
                            ),
                            'possibly circular dependent sibling types': _pdev.implement_me(
                                "IM: selection"
                            ),
                        },
                        {
                            'globals': $p['globals'],
                            'imports': $p['imports'],
                        }
                    )
                )
                return {
                    'description': prop_description,
                    'node': prop_node,
                }
            }
        )
    )
)

export const Dictionary: t_signatures.Dictionary = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_node = _p_cc(
            $['node'],
            ($) => Type_Node(
                $,
                ($) => abort(
                    $
                ),
                {
                    'noncircular sibling types': _pdev.implement_me(
                        "IM: selection"
                    ),
                    'possibly circular dependent sibling types': _pdev.implement_me(
                        "IM: selection"
                    ),
                },
                {
                    'globals': $p['globals'],
                    'imports': $p['imports'],
                }
            )
        )
        return {
            'node': prop_node,
        }
    }
)

export const Type_Node: t_signatures.Type_Node = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Type_Node => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ['boolean', null]
                )
            case 'component':
                return _p.ss(
                    $,
                    ($) => ['component', _p.group.resolve(
                        () => {
                            
                            const prop_type = _p_cc(
                                $['type'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Type_Node.component.type_ => {
                                        switch ($[0]) {
                                            case 'external':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['external', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_import = _p_cc(
                                                                $['import'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            
                                                            const prop_type = _p_cc(
                                                                $['type'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            return {
                                                                'import': prop_import,
                                                                'type': prop_type,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'internal':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['internal', {
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME ACYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l reference'],
                                                    }]
                                                )
                                            case 'internal cyclic':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['internal cyclic', {
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME CYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l reference'],
                                                    }]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_constraints = _p_cc(
                                $['constraints'],
                                ($) => Value_Constraints(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'types': _pdev.implement_me(
                                            "IM: selection"
                                        ),
                                    },
                                    {
                                        'imports': $p['imports'],
                                    }
                                )
                            )
                            return {
                                'type': prop_type,
                                'constraints': prop_constraints,
                            }
                        }
                    )]
                )
            case 'dictionary':
                return _p.ss(
                    $,
                    ($) => ['dictionary', Dictionary(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'noncircular sibling types': _pdev.implement_me(
                                "IM: selection"
                            ),
                            'possibly circular dependent sibling types': _pdev.implement_me(
                                "IM: selection"
                            ),
                        },
                        {
                            'globals': $p['globals'],
                            'imports': $p['imports'],
                        }
                    )]
                )
            case 'group':
                return _p.ss(
                    $,
                    ($) => ['group', Group(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'noncircular sibling types': _pdev.implement_me(
                                "IM: selection"
                            ),
                            'possibly circular dependent sibling types': _pdev.implement_me(
                                "IM: selection"
                            ),
                        },
                        {
                            'globals': $p['globals'],
                            'imports': $p['imports'],
                        }
                    )]
                )
            case 'list':
                return _p.ss(
                    $,
                    ($) => ['list', _p.group.resolve(
                        () => {
                            
                            const prop_node = _p_cc(
                                $['node'],
                                ($) => Type_Node(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    $l,
                                    $p
                                )
                            )
                            
                            const prop_result = _p_cc(
                                $['result'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => Type_Reference(
                                        $,
                                        ($) => abort(
                                            $
                                        ),
                                        {
                                            'types': _pdev.implement_me(
                                                "IM: selection"
                                            ),
                                        },
                                        {
                                            'imports': $p['imports'],
                                        }
                                    )
                                )
                            )
                            return {
                                'node': prop_node,
                                'result': prop_result,
                            }
                        }
                    )]
                )
            case 'nothing':
                return _p.ss(
                    $,
                    ($) => ['nothing', null]
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ['number', _p.decide.state(
                        $['l state'],
                        ($): t_out.Type_Node.number_ => {
                            switch ($[0]) {
                                case 'global':
                                    return _p.ss(
                                        $,
                                        ($) => ['global', {
                                            'l entry': _pdev.implement_me(
                                                "IM: FIXME ACYCLIC ENTRY"
                                            ),
                                            'l id': $['l reference'],
                                        }]
                                    )
                                case 'local':
                                    return _p.ss(
                                        $,
                                        ($) => ['local', Number_Type(
                                            $,
                                            ($) => abort(
                                                $
                                            ),
                                            null,
                                            null
                                        )]
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
                    )]
                )
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ['optional', Type_Node(
                        $,
                        ($) => abort(
                            $
                        ),
                        $l,
                        $p
                    )]
                )
            case 'reference':
                return _p.ss(
                    $,
                    ($) => ['reference', _p.group.resolve(
                        () => {
                            
                            const prop_referent = _p_cc(
                                $['referent'],
                                ($) => Type_Node_Reference(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'types': _pdev.implement_me(
                                            "IM: selection"
                                        ),
                                    },
                                    {
                                        'imports': $p['imports'],
                                    }
                                )
                            )
                            
                            const prop_type = _p_cc(
                                $['type'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Type_Node.reference.type_ => {
                                        switch ($[0]) {
                                            case 'derived':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['derived', null]
                                                )
                                            case 'selected':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['selected', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_dictionary = _p_cc(
                                                                $['dictionary'],
                                                                ($) => _pdev.implement_me(
                                                                    "IM: OPTION CONSTRAINT"
                                                                )
                                                            )
                                                            
                                                            const prop_dependency = _p_cc(
                                                                $['dependency'],
                                                                ($) => _p.decide.state(
                                                                    $['l state'],
                                                                    ($): t_out.Type_Node.reference.type_.selected.dependency => {
                                                                        switch ($[0]) {
                                                                            case 'acyclic':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['acyclic', null]
                                                                                )
                                                                            case 'cyclic':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['cyclic', null]
                                                                                )
                                                                            case 'stack':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['stack', null]
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0]
                                                                                )
                                                                        }
                                                                    }
                                                                )
                                                            )
                                                            return {
                                                                'dictionary': prop_dictionary,
                                                                'dependency': prop_dependency,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            return {
                                'referent': prop_referent,
                                'type': prop_type,
                            }
                        }
                    )]
                )
            case 'state':
                return _p.ss(
                    $,
                    ($) => ['state', _p.dictionary.resolve(
                        $['l dictionary'],
                        ($, id, $a, $c): t_out.Type_Node.state.D => _p_cc(
                            $['l entry'],
                            ($) => _p.group.resolve(
                                () => {
                                    
                                    const prop_node = _p_cc(
                                        $['node'],
                                        ($) => Type_Node(
                                            $,
                                            ($) => abort(
                                                $
                                            ),
                                            $l,
                                            $p
                                        )
                                    )
                                    
                                    const prop_description = _p_cc(
                                        $['description'],
                                        ($) => _p.optional.map(
                                            $,
                                            ($) => $
                                        )
                                    )
                                    return {
                                        'node': prop_node,
                                        'description': prop_description,
                                    }
                                }
                            )
                        )
                    )]
                )
            case 'text':
                return _p.ss(
                    $,
                    ($) => ['text', _p.decide.state(
                        $['l state'],
                        ($): t_out.Type_Node.text => {
                            switch ($[0]) {
                                case 'global':
                                    return _p.ss(
                                        $,
                                        ($) => ['global', {
                                            'l entry': _pdev.implement_me(
                                                "IM: FIXME ACYCLIC ENTRY"
                                            ),
                                            'l id': $['l reference'],
                                        }]
                                    )
                                case 'local':
                                    return _p.ss(
                                        $,
                                        ($) => ['local', Text_Type(
                                            $,
                                            ($) => abort(
                                                $
                                            ),
                                            null,
                                            null
                                        )]
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
                    )]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_path = _p_cc(
            $['path'],
            ($) => ({
                'l list': _p.list.map_with_state(
                    $['l list'],
                    _pdev.implement_me(
                        "IM: initial state"
                    ),
                    ($) => ({
                        'l item': _p_cc(
                            $['l item'],
                            ($) => _p.decide.state(
                                $['l state'],
                                ($): t_out.Relative_Value_Selection.path.l_list.L.l_item => {
                                    switch ($[0]) {
                                        case 'component':
                                            return _p.ss(
                                                $,
                                                ($) => ['component', null]
                                            )
                                        case 'group':
                                            return _p.ss(
                                                $,
                                                ($) => ['group', {
                                                    'l entry': _pdev.implement_me(
                                                        "IM: FIXME ACYCLIC ENTRY"
                                                    ),
                                                    'l id': $['l reference'],
                                                }]
                                            )
                                        case 'reference':
                                            return _p.ss(
                                                $,
                                                ($) => ['reference', _p.group.resolve(
                                                    () => {
                                                        
                                                        const prop_definition = _p_cc(
                                                            $['definition'],
                                                            ($) => _pdev.implement_me(
                                                                "IM: OPTION CONSTRAINT"
                                                            )
                                                        )
                                                        return {
                                                            'definition': prop_definition,
                                                        }
                                                    }
                                                )]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            )
                        ),
                        'l result': _pdev.implement_me(
                            "IM: result aggregation"
                        ),
                    }),
                    ($, state) => _pdev.implement_me(
                        "IM: update state"
                    ),
                    ($, state) => _pdev.implement_me(
                        "IM: wrapup"
                    )
                ),
                'l result': _pdev.implement_me(
                    "IM: result aggregation"
                ),
            })
        )
        
        const prop_resulting_node = _p_cc(
            $['resulting node'],
            ($) => _pdev.implement_me(
                "IM: LIST"
            )
        )
        return {
            'path': prop_path,
            'resulting node': prop_resulting_node,
        }
    }
)

export const Presence: t_signatures.Presence = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Presence => {
        switch ($[0]) {
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ['optional', null]
                )
            case 'required':
                return _p.ss(
                    $,
                    ($) => ['required', null]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Signature_Parameters: t_signatures.Signature_Parameters = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_values = _p_cc(
            $['values'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Signature_Parameters.values.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_data_type = _p_cc(
                                $['data type'],
                                ($) => Type_Reference(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'types': _pdev.implement_me(
                                            "IM: selection"
                                        ),
                                    },
                                    {
                                        'imports': _p.optional.set(
                                            $p['imports']
                                        ),
                                    }
                                )
                            )
                            
                            const prop_presence = _p_cc(
                                $['presence'],
                                ($) => Presence(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    null,
                                    null
                                )
                            )
                            return {
                                'data type': prop_data_type,
                                'presence': prop_presence,
                            }
                        }
                    )
                )
            )
        )
        
        const prop_lookups = _p_cc(
            $['lookups'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Signature_Parameters.lookups.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_referent = _p_cc(
                                $['referent'],
                                ($) => Type_Reference(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'types': _pdev.implement_me(
                                            "IM: selection"
                                        ),
                                    },
                                    {
                                        'imports': _p.optional.set(
                                            $p['imports']
                                        ),
                                    }
                                )
                            )
                            
                            const prop_dictionary = _p_cc(
                                $['dictionary'],
                                ($) => _pdev.implement_me(
                                    "IM: COMPONENT"
                                )
                            )
                            
                            const prop_type = _p_cc(
                                $['type'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Signature_Parameters.lookups.D.type_ => {
                                        switch ($[0]) {
                                            case 'cyclic':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['cyclic', null]
                                                )
                                            case 'acyclic':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['acyclic', null]
                                                )
                                            case 'stack':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['stack', null]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_presence = _p_cc(
                                $['presence'],
                                ($) => Presence(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    null,
                                    null
                                )
                            )
                            return {
                                'referent': prop_referent,
                                'dictionary': prop_dictionary,
                                'type': prop_type,
                                'presence': prop_presence,
                            }
                        }
                    )
                )
            )
        )
        return {
            'values': prop_values,
            'lookups': prop_lookups,
        }
    }
)

export const Signature: t_signatures.Signature = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_type = _p_cc(
            $['type'],
            ($) => $p['type']
        )
        
        const prop_parameters = _p_cc(
            $['parameters'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Signature.parameters => {
                    switch ($[0]) {
                        case 'local':
                            return _p.ss(
                                $,
                                ($) => ['local', Signature_Parameters(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    null,
                                    {
                                        'types': $p['types'],
                                        'imports': $p['imports'],
                                    }
                                )]
                            )
                        case 'same as':
                            return _p.ss(
                                $,
                                ($) => ['same as', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l reference'],
                                }]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        
        const prop_resolved_parameters = _p_cc(
            $['resolved parameters'],
            ($) => _pdev.implement_me(
                "IM: STATE"
            )
        )
        return {
            'type': prop_type,
            'parameters': prop_parameters,
            'resolved parameters': prop_resolved_parameters,
        }
    }
)

export const Signatures: t_signatures.Signatures = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Signatures.D => _p_cc(
        $['l entry'],
        ($) => Signature(
            $,
            ($) => abort(
                $
            ),
            {
                'sibling signatures': _pdev.implement_me(
                    "IM: selection"
                ),
            },
            {
                'types': $p['types'],
                'type': _pdev.implement_me(
                    "IM: required"
                ),
                'imports': $p['imports'],
            }
        )
    )
)

export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Optional_Value_Initialization => {
        switch ($[0]) {
            case 'not set':
                return _p.ss(
                    $,
                    ($) => ['not set', null]
                )
            case 'set':
                return _p.ss(
                    $,
                    ($) => ['set', Guaranteed_Value_Selection(
                        $,
                        ($) => abort(
                            $
                        ),
                        $l,
                        $p
                    )]
                )
            case 'selection':
                return _p.ss(
                    $,
                    ($) => ['selection', Possible_Value_Selection(
                        $,
                        ($) => abort(
                            $
                        ),
                        $l,
                        $p
                    )]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Possible_Value_Selection => {
        switch ($[0]) {
            case 'parameter':
                return _p.ss(
                    $,
                    ($) => ['parameter', {
                        'l entry': _pdev.implement_me(
                            "IM: FIXME ACYCLIC ENTRY"
                        ),
                        'l id': $['l reference'],
                    }]
                )
            case 'result':
                return _p.ss(
                    $,
                    ($) => ['result', _p.decide.state(
                        $['l state'],
                        ($): t_out.Possible_Value_Selection.result => {
                            switch ($[0]) {
                                case 'state':
                                    return _p.ss(
                                        $,
                                        ($) => ['state', _p.group.resolve(
                                            () => {
                                                
                                                const prop_property = _p_cc(
                                                    $['property'],
                                                    ($) => ({
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME ACYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l reference'],
                                                    })
                                                )
                                                
                                                const prop_state = _p_cc(
                                                    $['state'],
                                                    ($) => _pdev.implement_me(
                                                        "IM: REFERENCE"
                                                    )
                                                )
                                                
                                                const prop_result = _p_cc(
                                                    $['result'],
                                                    ($) => Type_Reference(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        {
                                                            'types': _pdev.implement_me(
                                                                "IM: selection"
                                                            ),
                                                        },
                                                        {
                                                            'imports': $p['imports'],
                                                        }
                                                    )
                                                )
                                                return {
                                                    'property': prop_property,
                                                    'state': prop_state,
                                                    'result': prop_result,
                                                }
                                            }
                                        )]
                                    )
                                case 'optional value':
                                    return _p.ss(
                                        $,
                                        ($) => ['optional value', _p.group.resolve(
                                            () => {
                                                
                                                const prop_property = _p_cc(
                                                    $['property'],
                                                    ($) => ({
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME ACYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l reference'],
                                                    })
                                                )
                                                
                                                const prop_optional_value = _p_cc(
                                                    $['optional value'],
                                                    ($) => _pdev.implement_me(
                                                        "IM: REFERENCE"
                                                    )
                                                )
                                                
                                                const prop_result = _p_cc(
                                                    $['result'],
                                                    ($) => Type_Reference(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        {
                                                            'types': _pdev.implement_me(
                                                                "IM: selection"
                                                            ),
                                                        },
                                                        {
                                                            'imports': $p['imports'],
                                                        }
                                                    )
                                                )
                                                return {
                                                    'property': prop_property,
                                                    'optional value': prop_optional_value,
                                                    'result': prop_result,
                                                }
                                            }
                                        )]
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
                    )]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_start = _p_cc(
            $['start'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Guaranteed_Value_Selection.start => {
                    switch ($[0]) {
                        case 'list cursor':
                            return _p.ss(
                                $,
                                ($) => ['list cursor', null]
                            )
                        case 'linked entry':
                            return _p.ss(
                                $,
                                ($) => ['linked entry', null]
                            )
                        case 'sibling':
                            return _p.ss(
                                $,
                                ($) => ['sibling', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l reference'],
                                }]
                            )
                        case 'parent sibling':
                            return _p.ss(
                                $,
                                ($) => ['parent sibling', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l reference'],
                                }]
                            )
                        case 'option constraint':
                            return _p.ss(
                                $,
                                ($) => ['option constraint', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l reference'],
                                }]
                            )
                        case 'constraint':
                            return _p.ss(
                                $,
                                ($) => ['constraint', _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Guaranteed_Value_Selection.start.constraint => {
                                        switch ($[0]) {
                                            case 'component':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['component', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_property = _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            
                                                            const prop_constraint = _p_cc(
                                                                $['constraint'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            return {
                                                                'property': prop_property,
                                                                'constraint': prop_constraint,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'reference':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['reference', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_property = _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            
                                                            const prop_constraint = _p_cc(
                                                                $['constraint'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            return {
                                                                'property': prop_property,
                                                                'constraint': prop_constraint,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )]
                            )
                        case 'parameter':
                            return _p.ss(
                                $,
                                ($) => ['parameter', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l reference'],
                                }]
                            )
                        case 'result':
                            return _p.ss(
                                $,
                                ($) => ['result', _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Guaranteed_Value_Selection.start.result => {
                                        switch ($[0]) {
                                            case 'list':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['list', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_property = _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            
                                                            const prop_list_result = _p_cc(
                                                                $['list result'],
                                                                ($) => _pdev.implement_me(
                                                                    "IM: REFERENCE"
                                                                )
                                                            )
                                                            return {
                                                                'property': prop_property,
                                                                'list result': prop_list_result,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'state':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['state', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_property = _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            
                                                            const prop_state = _p_cc(
                                                                $['state'],
                                                                ($) => _pdev.implement_me(
                                                                    "IM: REFERENCE"
                                                                )
                                                            )
                                                            
                                                            const prop_result = _p_cc(
                                                                $['result'],
                                                                ($) => Type_Reference(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    {
                                                                        'types': _pdev.implement_me(
                                                                            "IM: selection"
                                                                        ),
                                                                    },
                                                                    {
                                                                        'imports': $p['imports'],
                                                                    }
                                                                )
                                                            )
                                                            return {
                                                                'property': prop_property,
                                                                'state': prop_state,
                                                                'result': prop_result,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'optional value':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['optional value', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_property = _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            
                                                            const prop_optional_value = _p_cc(
                                                                $['optional value'],
                                                                ($) => _pdev.implement_me(
                                                                    "IM: REFERENCE"
                                                                )
                                                            )
                                                            
                                                            const prop_result = _p_cc(
                                                                $['result'],
                                                                ($) => Type_Reference(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    {
                                                                        'types': _pdev.implement_me(
                                                                            "IM: selection"
                                                                        ),
                                                                    },
                                                                    {
                                                                        'imports': $p['imports'],
                                                                    }
                                                                )
                                                            )
                                                            return {
                                                                'property': prop_property,
                                                                'optional value': prop_optional_value,
                                                                'result': prop_result,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        
        const prop_tail = _p_cc(
            $['tail'],
            ($) => Relative_Value_Selection(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'node': _pdev.implement_me(
                        "IM: required"
                    ),
                }
            )
        )
        
        const prop_resulting_node = _p_cc(
            $['resulting node'],
            ($) => prop_tail['resulting node']
        )
        return {
            'start': prop_start,
            'tail': prop_tail,
            'resulting node': prop_resulting_node,
        }
    }
)

export const Lookup_Selection: t_signatures.Lookup_Selection = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Lookup_Selection.type_ => {
                    switch ($[0]) {
                        case 'dictionary':
                            return _p.ss(
                                $,
                                ($) => ['dictionary', _p.group.resolve(
                                    () => {
                                        
                                        const prop_selection = _p_cc(
                                            $['selection'],
                                            ($) => Guaranteed_Value_Selection(
                                                $,
                                                ($) => abort(
                                                    $
                                                ),
                                                $l,
                                                $p
                                            )
                                        )
                                        
                                        const prop_selected_dictionary = _p_cc(
                                            $['selected dictionary'],
                                            ($) => _pdev.implement_me(
                                                "IM: COMPONENT"
                                            )
                                        )
                                        return {
                                            'selection': prop_selection,
                                            'selected dictionary': prop_selected_dictionary,
                                        }
                                    }
                                )]
                            )
                        case 'parameter':
                            return _p.ss(
                                $,
                                ($) => ['parameter', {
                                    'l entry': _pdev.implement_me(
                                        "IM: FIXME ACYCLIC ENTRY"
                                    ),
                                    'l id': $['l reference'],
                                }]
                            )
                        case 'not circular dependent siblings':
                            return _p.ss(
                                $,
                                ($) => ['not circular dependent siblings', _pdev.implement_me(
                                    "IM: OPTION CONSTRAINT"
                                )]
                            )
                        case 'possibly circular dependent siblings':
                            return _p.ss(
                                $,
                                ($) => ['possibly circular dependent siblings', _pdev.implement_me(
                                    "IM: OPTION CONSTRAINT"
                                )]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        
        const prop_resulting_dictionary = _p_cc(
            $['resulting dictionary'],
            ($) => _pdev.implement_me(
                "IM: STATE"
            )
        )
        return {
            'type': prop_type,
            'resulting dictionary': prop_resulting_dictionary,
        }
    }
)

export const Resolvers: t_signatures.Resolvers = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Resolvers.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_signature = _p_cc(
                    $['signature'],
                    ($) => _pdev.implement_me(
                        "IM: LINKED ENTRY"
                    )
                )
                
                const prop_type_resolver = _p_cc(
                    $['type resolver'],
                    ($) => Node_Resolver(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'sibling property resolvers': _pdev.implement_me(
                                "IM: not set"
                            ),
                            'parent sibling property resolvers': _pdev.implement_me(
                                "IM: not set"
                            ),
                        },
                        {
                            'option constraints': _p.optional.not_set(
                            ),
                            'list cursor': _p.optional.not_set(
                            ),
                            'linked entry': _p.optional.not_set(
                            ),
                            'current ordered dictionary': _p.optional.not_set(
                            ),
                            'current dictionary': _p.optional.not_set(
                            ),
                            'signature': _pdev.implement_me(
                                "IM: required"
                            ),
                            'definition': _pdev.implement_me(
                                "IM: required"
                            ),
                            'signatures': $p['signatures'],
                            'imports': _p.optional.set(
                                $p['imports']
                            ),
                            'types': $p['types'],
                        }
                    )
                )
                return {
                    'signature': prop_signature,
                    'type resolver': prop_type_resolver,
                }
            }
        )
    )
)

export const Constraint: t_signatures.Constraint = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_selection = _p_cc(
            $['selection'],
            ($) => Relative_Value_Selection(
                $,
                ($) => abort(
                    $
                ),
                $l,
                $p
            )
        )
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Constraint.type_ => {
                    switch ($[0]) {
                        case 'state':
                            return _p.ss(
                                $,
                                ($) => ['state', _p.group.resolve(
                                    () => {
                                        
                                        const prop_selected_state = _p_cc(
                                            $['selected state'],
                                            ($) => _pdev.implement_me(
                                                "IM: OPTION CONSTRAINT"
                                            )
                                        )
                                        
                                        const prop_option = _p_cc(
                                            $['option'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l reference'],
                                            })
                                        )
                                        return {
                                            'selected state': prop_selected_state,
                                            'option': prop_option,
                                        }
                                    }
                                )]
                            )
                        case 'optional value':
                            return _p.ss(
                                $,
                                ($) => ['optional value', _p.group.resolve(
                                    () => {
                                        
                                        const prop_selected_optional_value = _p_cc(
                                            $['selected optional value'],
                                            ($) => _pdev.implement_me(
                                                "IM: OPTION CONSTRAINT"
                                            )
                                        )
                                        return {
                                            'selected optional value': prop_selected_optional_value,
                                        }
                                    }
                                )]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        return {
            'selection': prop_selection,
            'type': prop_type,
        }
    }
)

export const Option_Constraints: t_signatures.Option_Constraints = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Option_Constraints.D => _p_cc(
        $['l entry'],
        ($) => _p.decide.state(
            $['l state'],
            ($): t_out.Option_Constraints.D => {
                switch ($[0]) {
                    case 'state':
                        return _p.ss(
                            $,
                            ($) => ['state', _p.group.resolve(
                                () => {
                                    
                                    const prop_selection = _p_cc(
                                        $['selection'],
                                        ($) => Guaranteed_Value_Selection(
                                            $,
                                            ($) => abort(
                                                $
                                            ),
                                            $l,
                                            $p
                                        )
                                    )
                                    
                                    const prop_selected_state = _p_cc(
                                        $['selected state'],
                                        ($) => _pdev.implement_me(
                                            "IM: COMPONENT"
                                        )
                                    )
                                    
                                    const prop_option = _p_cc(
                                        $['option'],
                                        ($) => ({
                                            'l entry': _pdev.implement_me(
                                                "IM: FIXME ACYCLIC ENTRY"
                                            ),
                                            'l id': $['l reference'],
                                        })
                                    )
                                    return {
                                        'selection': prop_selection,
                                        'selected state': prop_selected_state,
                                        'option': prop_option,
                                    }
                                }
                            )]
                        )
                    case 'assert is set':
                        return _p.ss(
                            $,
                            ($) => ['assert is set', Possible_Value_Selection(
                                $,
                                ($) => abort(
                                    $
                                ),
                                $l,
                                $p
                            )]
                        )
                    default:
                        return _p.au(
                            $[0]
                        )
                }
            }
        )
    )
)

export const Value_Constraint_Resolver: t_signatures.Value_Constraint_Resolver = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_start = _p_cc(
            $['start'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Value_Constraint_Resolver.start => {
                    switch ($[0]) {
                        case 'property':
                            return _p.ss(
                                $,
                                ($) => ['property', null]
                            )
                        case 'sibling':
                            return _p.ss(
                                $,
                                ($) => ['sibling', Reference_To_Value_Constraint_Resolver(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'property constraints': _pdev.implement_me(
                                            "IM: selection"
                                        ),
                                    },
                                    null
                                )]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        
        const prop_constraint = _p_cc(
            $['constraint'],
            ($) => Constraint(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'node': _pdev.implement_me(
                        "IM: required"
                    ),
                }
            )
        )
        return {
            'start': prop_start,
            'constraint': prop_constraint,
        }
    }
)

export const Value_Constraint_Resolvers: t_signatures.Value_Constraint_Resolvers = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Value_Constraint_Resolvers.D => _p_cc(
        $['l entry'],
        ($) => Value_Constraint_Resolver(
            $,
            ($) => abort(
                $
            ),
            {
                'property constraints': _pdev.implement_me(
                    "IM: selection"
                ),
            },
            null
        )
    )
)

export const Reference_To_Value_Constraint_Resolver: t_signatures.Reference_To_Value_Constraint_Resolver = ($, abort, $l, $p) => ({
    'l entry': _pdev.implement_me(
        "IM: FIXME ACYCLIC ENTRY"
    ),
    'l id': $['l reference'],
})

export const Node_Resolver_Group: t_signatures.Node_Resolver_Group = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Node_Resolver_Group.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_definition = _p_cc(
                    $['definition'],
                    ($) => _pdev.implement_me(
                        "IM: LINKED ENTRY"
                    )
                )
                
                const prop_resolver = _p_cc(
                    $['resolver'],
                    ($) => Node_Resolver(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'sibling property resolvers': _pdev.implement_me(
                                "IM: selection"
                            ),
                            'parent sibling property resolvers': _pdev.implement_me(
                                "IM: selection"
                            ),
                        },
                        {
                            'definition': _pdev.implement_me(
                                "IM: required"
                            ),
                            'types': $p['types'],
                            'imports': $p['imports'],
                            'signature': $p['signature'],
                            'signatures': $p['signatures'],
                            'list cursor': $p['list cursor'],
                            'linked entry': $p['linked entry'],
                            'current dictionary': $p['current dictionary'],
                            'option constraints': $p['option constraints'],
                            'current ordered dictionary': $p['current ordered dictionary'],
                        }
                    )
                )
                return {
                    'definition': prop_definition,
                    'resolver': prop_resolver,
                }
            }
        )
    )
)

export const Node_Resolver_List_Result: t_signatures.Node_Resolver_List_Result = ($, abort, $l, $p) => Type_Reference(
    $,
    ($) => abort(
        $
    ),
    {
        'types': _pdev.implement_me(
            "IM: selection"
        ),
    },
    {
        'imports': $p['imports'],
    }
)

export const Benchmark: t_signatures.Benchmark = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_selection = _p_cc(
            $['selection'],
            ($) => ({
                'l component': Guaranteed_Value_Selection(
                    $,
                    ($) => abort(
                        $
                    ),
                    $l,
                    $p
                ),
                'l constraints': {
                    'dictionary': _pdev.implement_me(
                        "IM: constraint"
                    ),
                },
            })
        )
        
        const prop_resulting_dictionary = _p_cc(
            $['resulting dictionary'],
            ($) => _pdev.implement_me(
                "IM: COMPONENT"
            )
        )
        
        const prop_dense = _p_cc(
            $['dense'],
            ($) => $
        )
        return {
            'selection': prop_selection,
            'resulting dictionary': prop_resulting_dictionary,
            'dense': prop_dense,
        }
    }
)

export const Node_Resolver: t_signatures.Node_Resolver = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Node_Resolver => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ['boolean', null]
                )
            case 'component':
                return _p.ss(
                    $,
                    ($) => ['component', _p.group.resolve(
                        () => {
                            
                            const prop_definition = _p_cc(
                                $['definition'],
                                ($) => _pdev.implement_me(
                                    "IM: OPTION CONSTRAINT"
                                )
                            )
                            
                            const prop_location = _p_cc(
                                $['location'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Node_Resolver.component.location => {
                                        switch ($[0]) {
                                            case 'external':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['external', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_import = _p_cc(
                                                                $['import'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            
                                                            const prop_type = _p_cc(
                                                                $['type'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            return {
                                                                'import': prop_import,
                                                                'type': prop_type,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'internal':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['internal', {
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME ACYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l reference'],
                                                    }]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            
                            const prop_signature = _p_cc(
                                $['signature'],
                                ($) => _pdev.implement_me(
                                    "IM: STATE"
                                )
                            )
                            
                            const prop_arguments = _p_cc(
                                $['arguments'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => _p.group.resolve(
                                        () => {
                                            
                                            const prop_values = _p_cc(
                                                $['values'],
                                                ($) => _p.optional.map(
                                                    $,
                                                    ($) => _p.dictionary.resolve(
                                                        $['l dictionary'],
                                                        ($, id, $a, $c): t_out.Node_Resolver.component.arguments_.O.values.O.D => _p_cc(
                                                            $['l entry'],
                                                            ($) => _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Node_Resolver.component.arguments_.O.values.O.D => {
                                                                    switch ($[0]) {
                                                                        case 'optional':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['optional', Optional_Value_Initialization(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    ),
                                                                                    $l,
                                                                                    $p
                                                                                )]
                                                                            )
                                                                        case 'required':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['required', Guaranteed_Value_Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    ),
                                                                                    $l,
                                                                                    $p
                                                                                )]
                                                                            )
                                                                        case 'parameter':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['parameter', {
                                                                                    'l entry': _pdev.implement_me(
                                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                                    ),
                                                                                    'l id': $['l reference'],
                                                                                }]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                            
                                            const prop_lookups = _p_cc(
                                                $['lookups'],
                                                ($) => _p.optional.map(
                                                    $,
                                                    ($) => _p.dictionary.resolve(
                                                        $['l dictionary'],
                                                        ($, id, $a, $c): t_out.Node_Resolver.component.arguments_.O.lookups.O.D => _p_cc(
                                                            $['l entry'],
                                                            ($) => _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Node_Resolver.component.arguments_.O.lookups.O.D => {
                                                                    switch ($[0]) {
                                                                        case 'empty stack':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['empty stack', null]
                                                                            )
                                                                        case 'not set':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['not set', null]
                                                                            )
                                                                        case 'selection':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['selection', Lookup_Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $
                                                                                    ),
                                                                                    $l,
                                                                                    $p
                                                                                )]
                                                                            )
                                                                        case 'stack':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['stack', _p.group.resolve(
                                                                                    () => {
                                                                                        
                                                                                        const prop_stack = _p_cc(
                                                                                            $['stack'],
                                                                                            ($) => Lookup_Selection(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                ),
                                                                                                $l,
                                                                                                $p
                                                                                            )
                                                                                        )
                                                                                        
                                                                                        const prop_element = _p_cc(
                                                                                            $['element'],
                                                                                            ($) => Lookup_Selection(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $
                                                                                                ),
                                                                                                $l,
                                                                                                $p
                                                                                            )
                                                                                        )
                                                                                        return {
                                                                                            'stack': prop_stack,
                                                                                            'element': prop_element,
                                                                                        }
                                                                                    }
                                                                                )]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                            return {
                                                'values': prop_values,
                                                'lookups': prop_lookups,
                                            }
                                        }
                                    )
                                )
                            )
                            
                            const prop_constraints = _p_cc(
                                $['constraints'],
                                ($) => Value_Constraint_Resolvers(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    null,
                                    {
                                        'node': _pdev.implement_me(
                                            "IM: required"
                                        ),
                                    }
                                )
                            )
                            return {
                                'definition': prop_definition,
                                'location': prop_location,
                                'signature': prop_signature,
                                'arguments': prop_arguments,
                                'constraints': prop_constraints,
                            }
                        }
                    )]
                )
            case 'dictionary':
                return _p.ss(
                    $,
                    ($) => ['dictionary', _p.group.resolve(
                        () => {
                            
                            const prop_definition = _p_cc(
                                $['definition'],
                                ($) => _pdev.implement_me(
                                    "IM: OPTION CONSTRAINT"
                                )
                            )
                            
                            const prop_benchmark = _p_cc(
                                $['benchmark'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => Benchmark(
                                        $,
                                        ($) => abort(
                                            $
                                        ),
                                        $l,
                                        $p
                                    )
                                )
                            )
                            
                            const prop_resolver = _p_cc(
                                $['resolver'],
                                ($) => Node_Resolver(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    $l,
                                    {
                                        'linked entry': _pdev.implement_me(
                                            "IM: OPTIONAL VALUE2"
                                        ),
                                        'definition': _pdev.implement_me(
                                            "IM: required"
                                        ),
                                        'current dictionary': _p.optional.set(
                                            prop_definition
                                        ),
                                        'current ordered dictionary': _p.optional.set(
                                            prop_definition
                                        ),
                                        'types': $p['types'],
                                        'imports': $p['imports'],
                                        'signature': $p['signature'],
                                        'signatures': $p['signatures'],
                                        'list cursor': $p['list cursor'],
                                        'option constraints': $p['option constraints'],
                                    }
                                )
                            )
                            return {
                                'definition': prop_definition,
                                'benchmark': prop_benchmark,
                                'resolver': prop_resolver,
                            }
                        }
                    )]
                )
            case 'group':
                return _p.ss(
                    $,
                    ($) => ['group', Node_Resolver_Group(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'sibling property resolvers': _pdev.implement_me(
                                "IM: selection"
                            ),
                            'parent sibling property resolvers': _pdev.implement_me(
                                "IM: selection"
                            ),
                        },
                        {
                            'definition': _pdev.implement_me(
                                "IM: required"
                            ),
                            'types': $p['types'],
                            'imports': $p['imports'],
                            'signature': $p['signature'],
                            'signatures': $p['signatures'],
                            'list cursor': $p['list cursor'],
                            'linked entry': $p['linked entry'],
                            'current dictionary': $p['current dictionary'],
                            'option constraints': $p['option constraints'],
                            'current ordered dictionary': $p['current ordered dictionary'],
                        }
                    )]
                )
            case 'list':
                return _p.ss(
                    $,
                    ($) => ['list', _p.group.resolve(
                        () => {
                            
                            const prop_definition = _p_cc(
                                $['definition'],
                                ($) => _pdev.implement_me(
                                    "IM: OPTION CONSTRAINT"
                                )
                            )
                            
                            const prop_result = _p_cc(
                                $['result'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => Node_Resolver_List_Result(
                                        $,
                                        ($) => abort(
                                            $
                                        ),
                                        {
                                            'types': _pdev.implement_me(
                                                "IM: selection"
                                            ),
                                        },
                                        {
                                            'imports': $p['imports'],
                                        }
                                    )
                                )
                            )
                            
                            const prop_resolver = _p_cc(
                                $['resolver'],
                                ($) => Node_Resolver(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    $l,
                                    {
                                        'list cursor': _p.optional.set(
                                            _pdev.implement_me(
                                                "IM: OPTIONAL VALUE"
                                            )
                                        ),
                                        'definition': _pdev.implement_me(
                                            "IM: required"
                                        ),
                                        'types': $p['types'],
                                        'imports': $p['imports'],
                                        'signature': $p['signature'],
                                        'signatures': $p['signatures'],
                                        'linked entry': $p['linked entry'],
                                        'current dictionary': $p['current dictionary'],
                                        'option constraints': $p['option constraints'],
                                        'current ordered dictionary': $p['current ordered dictionary'],
                                    }
                                )
                            )
                            return {
                                'definition': prop_definition,
                                'result': prop_result,
                                'resolver': prop_resolver,
                            }
                        }
                    )]
                )
            case 'nothing':
                return _p.ss(
                    $,
                    ($) => ['nothing', null]
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ['number', null]
                )
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ['optional', _p.group.resolve(
                        () => {
                            
                            const prop_constraints = _p_cc(
                                $['constraints'],
                                ($) => Option_Constraints(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    $l,
                                    $p
                                )
                            )
                            
                            const prop_resolver = _p_cc(
                                $['resolver'],
                                ($) => Node_Resolver(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    $l,
                                    {
                                        'definition': _pdev.implement_me(
                                            "IM: required"
                                        ),
                                        'types': $p['types'],
                                        'imports': $p['imports'],
                                        'signature': $p['signature'],
                                        'signatures': $p['signatures'],
                                        'list cursor': $p['list cursor'],
                                        'linked entry': $p['linked entry'],
                                        'current dictionary': $p['current dictionary'],
                                        'option constraints': $p['option constraints'],
                                        'current ordered dictionary': $p['current ordered dictionary'],
                                    }
                                )
                            )
                            return {
                                'constraints': prop_constraints,
                                'resolver': prop_resolver,
                            }
                        }
                    )]
                )
            case 'reference':
                return _p.ss(
                    $,
                    ($) => ['reference', _p.group.resolve(
                        () => {
                            
                            const prop_definition = _p_cc(
                                $['definition'],
                                ($) => _pdev.implement_me(
                                    "IM: OPTION CONSTRAINT"
                                )
                            )
                            
                            const prop_type = _p_cc(
                                $['type'],
                                ($) => _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Node_Resolver.reference.type_ => {
                                        switch ($[0]) {
                                            case 'derived':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['derived', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_value = _p_cc(
                                                                $['value'],
                                                                ($) => Guaranteed_Value_Selection(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    $l,
                                                                    $p
                                                                )
                                                            )
                                                            return {
                                                                'value': prop_value,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'selected':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['selected', _p.group.resolve(
                                                        () => {
                                                            
                                                            const prop_definition = _p_cc(
                                                                $['definition'],
                                                                ($) => _pdev.implement_me(
                                                                    "IM: OPTION CONSTRAINT"
                                                                )
                                                            )
                                                            
                                                            const prop_lookup = _p_cc(
                                                                $['lookup'],
                                                                ($) => Lookup_Selection(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    $l,
                                                                    $p
                                                                )
                                                            )
                                                            
                                                            const prop_constraints = _p_cc(
                                                                $['constraints'],
                                                                ($) => Value_Constraint_Resolvers(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    null,
                                                                    {
                                                                        'node': _pdev.implement_me(
                                                                            "IM: required"
                                                                        ),
                                                                    }
                                                                )
                                                            )
                                                            return {
                                                                'definition': prop_definition,
                                                                'lookup': prop_lookup,
                                                                'constraints': prop_constraints,
                                                            }
                                                        }
                                                    )]
                                                )
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )
                            )
                            return {
                                'definition': prop_definition,
                                'type': prop_type,
                            }
                        }
                    )]
                )
            case 'state':
                return _p.ss(
                    $,
                    ($) => ['state', _p.group.resolve(
                        () => {
                            
                            const prop_definition = _p_cc(
                                $['definition'],
                                ($) => _pdev.implement_me(
                                    "IM: OPTION CONSTRAINT"
                                )
                            )
                            
                            const prop_states = _p_cc(
                                $['states'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Node_Resolver.state.states.D => _p_cc(
                                        $['l entry'],
                                        ($) => _p.group.resolve(
                                            () => {
                                                
                                                const prop_constraints = _p_cc(
                                                    $['constraints'],
                                                    ($) => Option_Constraints(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        $l,
                                                        $p
                                                    )
                                                )
                                                
                                                const prop_resolver = _p_cc(
                                                    $['resolver'],
                                                    ($) => Node_Resolver(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        $l,
                                                        {
                                                            'definition': _pdev.implement_me(
                                                                "IM: required"
                                                            ),
                                                            'types': $p['types'],
                                                            'imports': $p['imports'],
                                                            'signature': $p['signature'],
                                                            'signatures': $p['signatures'],
                                                            'list cursor': $p['list cursor'],
                                                            'linked entry': $p['linked entry'],
                                                            'current dictionary': $p['current dictionary'],
                                                            'option constraints': $p['option constraints'],
                                                            'current ordered dictionary': $p['current ordered dictionary'],
                                                        }
                                                    )
                                                )
                                                return {
                                                    'constraints': prop_constraints,
                                                    'resolver': prop_resolver,
                                                }
                                            }
                                        )
                                    )
                                )
                            )
                            return {
                                'definition': prop_definition,
                                'states': prop_states,
                            }
                        }
                    )]
                )
            case 'text':
                return _p.ss(
                    $,
                    ($) => ['text', null]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Resolve_Logic: t_signatures.Resolve_Logic = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_signatures = _p_cc(
            $['signatures'],
            ($) => _p.group.resolve(
                () => {
                    
                    const prop_types = _p_cc(
                        $['types'],
                        ($) => Signatures(
                            $,
                            ($) => abort(
                                $
                            ),
                            null,
                            {
                                'types': $p['types'],
                                'imports': $p['imports'],
                            }
                        )
                    )
                    return {
                        'types': prop_types,
                    }
                }
            )
        )
        
        const prop_resolvers = _p_cc(
            $['resolvers'],
            ($) => Resolvers(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'signatures': _pdev.implement_me(
                        "IM: required"
                    ),
                    'types': $p['types'],
                    'imports': $p['imports'],
                }
            )
        )
        return {
            'signatures': prop_signatures,
            'resolvers': prop_resolvers,
        }
    }
)

export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Schemas.D => _p_cc(
        $['l entry'],
        ($) => Schema_Tree(
            $,
            ($) => abort(
                $
            ),
            {
                'sibling schemas': _pdev.implement_me(
                    "IM: stack"
                ),
            },
            null
        )
    )
)

export const Type_Specification: t_signatures.Type_Specification = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_schema = _p_cc(
            $['schema'],
            ($) => Schema_Tree(
                $,
                ($) => abort(
                    $
                ),
                {
                    'sibling schemas': _pdev.implement_me(
                        "IM: empty stack"
                    ),
                },
                null
            )
        )
        
        const prop_schema_path = _p_cc(
            $['schema path'],
            ($) => _p.list.map(
                $['l list'],
                ($) => _p_cc(
                    $['l item'],
                    ($) => $
                )
            )
        )
        
        const prop_type = _p_cc(
            $['type'],
            ($) => $
        )
        return {
            'schema': prop_schema,
            'schema path': prop_schema_path,
            'type': prop_type,
        }
    }
)

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Schema_Tree => {
        switch ($[0]) {
            case 'schema':
                return _p.ss(
                    $,
                    ($) => ['schema', Schema(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'sibling schemas': _pdev.implement_me(
                                "IM: selection"
                            ),
                        },
                        null
                    )]
                )
            case 'set':
                return _p.ss(
                    $,
                    ($) => ['set', Schemas(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'sibling schemas': _pdev.implement_me(
                                "IM: selection"
                            ),
                        },
                        null
                    )]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Schema: t_signatures.Schema = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_imports = _p_cc(
            $['imports'],
            ($) => Imports(
                $,
                ($) => abort(
                    $
                ),
                {
                    'sibling schemas': _pdev.implement_me(
                        "IM: selection"
                    ),
                },
                null
            )
        )
        
        const prop_globals = _p_cc(
            $['globals'],
            ($) => Globals(
                $,
                ($) => abort(
                    $
                ),
                null,
                null
            )
        )
        
        const prop_types = _p_cc(
            $['types'],
            ($) => Types(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'globals': _p.optional.set(
                        prop_globals
                    ),
                    'imports': _p.optional.set(
                        prop_imports
                    ),
                }
            )
        )
        
        const prop_complexity = _p_cc(
            $['complexity'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Schema.complexity => {
                    switch ($[0]) {
                        case 'constrained':
                            return _p.ss(
                                $,
                                ($) => ['constrained', Resolve_Logic(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    null,
                                    {
                                        'imports': _pdev.implement_me(
                                            "IM: required"
                                        ),
                                        'types': _pdev.implement_me(
                                            "IM: required"
                                        ),
                                    }
                                )]
                            )
                        case 'unconstrained':
                            return _p.ss(
                                $,
                                ($) => ['unconstrained', null]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
        return {
            'imports': prop_imports,
            'globals': prop_globals,
            'types': prop_types,
            'complexity': prop_complexity,
        }
    }
)

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Imports.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_schema_set_child = _p_cc(
                    $['schema set child'],
                    ($) => ({
                        'l entry': _pdev.implement_me(
                            "IM: FIXME ENTRY FROM STACK"
                        ),
                        'l id': $['l reference'],
                        'l up steps': _pdev.implement_me(
                            "IM: FIXME UPSTEPS"
                        ),
                    })
                )
                
                const prop_schema = _p_cc(
                    $['schema'],
                    ($) => _pdev.implement_me(
                        "IM: REFERENCE"
                    )
                )
                return {
                    'schema set child': prop_schema_set_child,
                    'schema': prop_schema,
                }
            }
        )
    )
)
