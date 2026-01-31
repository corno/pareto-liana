
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as _pdev from "pareto-core-dev"

import * as _p_ls from "pareto-core/dist/lookup_selection"

import * as t_out from "../../../../../interface/generated/liana/schemas/schema/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/schema/resolve"

export const Module: t_signatures.Module = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_root_value = _p_cc(
            $['root value'],
            ($) => Value(
                $,
                ($) => abort(
                    $
                ),
                {
                    'noncircular sibling modules': $l['noncircular sibling modules'],
                    'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
                },
                {
                    'globals': $p['globals'],
                    'imports': $p['imports'],
                }
            )
        )
        return {
            'root value': prop_root_value,
        }
    }
)

export const Modules: t_signatures.Modules = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Modules.D => _p_cc(
        $['l entry'],
        ($) => Module(
            $,
            ($) => abort(
                $
            ),
            {
                'noncircular sibling modules': $a,
                'possibly circular dependent sibling modules': $c,
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

export const Module_Reference: t_signatures.Module_Reference = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_location = _p_cc(
            $['location'],
            ($) => _p.decide.state(
                $['l state'],
                ($): t_out.Module_Reference.location => {
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
                                        
                                        const prop_module = _p_cc(
                                            $['module'],
                                            ($) => ({
                                                'l entry': _pdev.implement_me(
                                                    "IM: FIXME ACYCLIC ENTRY"
                                                ),
                                                'l id': $['l reference'],
                                            })
                                        )
                                        return {
                                            'import': prop_import,
                                            'module': prop_module,
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
        
        const prop_resulting_module = _p_cc(
            $['resulting module'],
            ($) => _pdev.implement_me(
                "IM: STATE"
            )
        )
        return {
            'location': prop_location,
            'resulting module': prop_resulting_module,
        }
    }
)

export const Value_Reference: t_signatures.Value_Reference = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_module = _p_cc(
            $['module'],
            ($) => Module_Reference(
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
            ($) => Value_Path(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'module': prop_module['resulting module'],
                }
            )
        )
        return {
            'module': prop_module,
            'path': prop_path,
        }
    }
)

export const Value_Path: t_signatures.Value_Path = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_tail = _p_cc(
            $['tail'],
            ($) => ({
                'l value': _p.list.map_with_state(
                    $['l list'],
                    _pdev.implement_me(
                        "IM: initial state"
                    ),
                    ($) => ({
                        'l item': _p_cc(
                            $['l item'],
                            ($) => ({
                                'l results': {
                                    'value': _pdev.implement_me(
                                        "IM: result"
                                    ),
                                },
                                'l value': _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Value_Path.tail.l_value.L.l_item.l_value => {
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
                                ),
                            })
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
                'l results': {
                    'result': _pdev.implement_me(
                        "IM: result aggregation"
                    ),
                },
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

export const Value_Results: t_signatures.Value_Results = ($, abort, $l, $p) => _p.optional.map(
    $,
    ($) => _p.dictionary.resolve(
        $['l dictionary'],
        ($, id, $a, $c): t_out.Value_Results.O.D => _p_cc(
            $['l entry'],
            ($) => Value_Reference(
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

export const Option_Constraints: t_signatures.Option_Constraints = ($, abort, $l, $p) => _p.optional.map(
    $,
    ($) => _p.dictionary.resolve(
        $['l dictionary'],
        ($, id, $a, $c): t_out.Option_Constraints.O.D => _p_cc(
            $['l entry'],
            ($) => Value_Reference(
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
                
                const prop_value = _p_cc(
                    $['value'],
                    ($) => Value(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'noncircular sibling modules': $l['noncircular sibling modules'],
                            'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
                        },
                        {
                            'globals': $p['globals'],
                            'imports': $p['imports'],
                        }
                    )
                )
                return {
                    'description': prop_description,
                    'value': prop_value,
                }
            }
        )
    )
)

export const Dictionary: t_signatures.Dictionary = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_value = _p_cc(
            $['value'],
            ($) => Value(
                $,
                ($) => abort(
                    $
                ),
                {
                    'noncircular sibling modules': $l['noncircular sibling modules'],
                    'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
                },
                {
                    'globals': $p['globals'],
                    'imports': $p['imports'],
                }
            )
        )
        return {
            'value': prop_value,
        }
    }
)

export const Value: t_signatures.Value = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Value => {
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
                                    ($): t_out.Value.component.type_ => {
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
                                                            
                                                            const prop_module = _p_cc(
                                                                $['module'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            return {
                                                                'import': prop_import,
                                                                'module': prop_module,
                                                            }
                                                        }
                                                    )]
                                                )
                                            case 'internal acyclic':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['internal acyclic', {
                                                        'l entry': _pdev.implement_me(
                                                            "IM: FIXME ACYCLIC ENTRY"
                                                        ),
                                                        'l id': $['l reference'],
                                                    }]
                                                )
                                            case 'internal':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['internal', {
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
                            
                            const prop_results = _p_cc(
                                $['results'],
                                ($) => Value_Results(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'modules': $l['noncircular sibling modules'],
                                    },
                                    {
                                        'imports': $p['imports'],
                                    }
                                )
                            )
                            return {
                                'type': prop_type,
                                'results': prop_results,
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
                            'noncircular sibling modules': $l['noncircular sibling modules'],
                            'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
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
                            'noncircular sibling modules': $l['noncircular sibling modules'],
                            'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
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
                            
                            const prop_value = _p_cc(
                                $['value'],
                                ($) => Value(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    $l,
                                    $p
                                )
                            )
                            
                            const prop_results = _p_cc(
                                $['results'],
                                ($) => Value_Results(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'modules': $l['noncircular sibling modules'],
                                    },
                                    {
                                        'imports': $p['imports'],
                                    }
                                )
                            )
                            return {
                                'value': prop_value,
                                'results': prop_results,
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
                        ($): t_out.Value.number_ => {
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
                    ($) => ['optional', Value(
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
                                ($) => Value_Reference(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'modules': $l['noncircular sibling modules'],
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
                                    ($): t_out.Value.reference.type_ => {
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
                                                                    ($): t_out.Value.reference.type_.selected.dependency => {
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
                    ($) => ['state', _p.group.resolve(
                        () => {
                            
                            const prop_options = _p_cc(
                                $['options'],
                                ($) => _p.dictionary.resolve(
                                    $['l dictionary'],
                                    ($, id, $a, $c): t_out.Value.state.options.D => _p_cc(
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
                                                        {
                                                            'modules': $l['noncircular sibling modules'],
                                                        },
                                                        {
                                                            'imports': $p['imports'],
                                                        }
                                                    )
                                                )
                                                
                                                const prop_value = _p_cc(
                                                    $['value'],
                                                    ($) => Value(
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
                                                    'constraints': prop_constraints,
                                                    'value': prop_value,
                                                    'description': prop_description,
                                                }
                                            }
                                        )
                                    )
                                )
                            )
                            
                            const prop_results = _p_cc(
                                $['results'],
                                ($) => Value_Results(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'modules': $l['noncircular sibling modules'],
                                    },
                                    {
                                        'imports': $p['imports'],
                                    }
                                )
                            )
                            return {
                                'options': prop_options,
                                'results': prop_results,
                            }
                        }
                    )]
                )
            case 'text':
                return _p.ss(
                    $,
                    ($) => ['text', _p.decide.state(
                        $['l state'],
                        ($): t_out.Value.text => {
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
                'l value': _p.list.map_with_state(
                    $['l list'],
                    _pdev.implement_me(
                        "IM: initial state"
                    ),
                    ($) => ({
                        'l item': _p_cc(
                            $['l item'],
                            ($) => _p.decide.state(
                                $['l state'],
                                ($): t_out.Relative_Value_Selection.path.l_value.L.l_item => {
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
                'l results': {
                    'result': _pdev.implement_me(
                        "IM: result aggregation"
                    ),
                },
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
        
        const prop_modules = _p_cc(
            $['modules'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Signature_Parameters.modules.D => _p_cc(
                    $['l entry'],
                    ($) => _p.group.resolve(
                        () => {
                            
                            const prop_module = _p_cc(
                                $['module'],
                                ($) => Module_Reference(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'modules': _p_ls.acyclic.from_resolved_dictionary(
                                            $p['modules']
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
                                'module': prop_module,
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
                                ($) => Module_Reference(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    {
                                        'modules': _p_ls.acyclic.from_resolved_dictionary(
                                            $p['modules']
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
            'modules': prop_modules,
            'lookups': prop_lookups,
        }
    }
)

export const Signature: t_signatures.Signature = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_module = _p_cc(
            $['module'],
            ($) => $p['module']
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
                                        'modules': $p['modules'],
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
            'module': prop_module,
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
                'sibling signatures': $a,
            },
            {
                'modules': $p['modules'],
                'module': _pdev.implement_me(
                    "IM: LINKED ENTRY"
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
                                                    ($) => Module_Reference(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        {
                                                            'modules': _p_ls.acyclic.from_resolved_dictionary(
                                                                $p['modules']
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
                                                    ($) => Module_Reference(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        {
                                                            'modules': _p_ls.acyclic.from_resolved_dictionary(
                                                                $p['modules']
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
                                                                ($) => Module_Reference(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    {
                                                                        'modules': _p_ls.acyclic.from_resolved_dictionary(
                                                                            $p['modules']
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
                                                                ($) => Module_Reference(
                                                                    $,
                                                                    ($) => abort(
                                                                        $
                                                                    ),
                                                                    {
                                                                        'modules': _p_ls.acyclic.from_resolved_dictionary(
                                                                            $p['modules']
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
                    'value': _pdev.implement_me(
                        "IM: STATE"
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
                        case 'acyclic':
                            return _p.ss(
                                $,
                                ($) => ['acyclic', _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Lookup_Selection.type_.acyclic => {
                                        switch ($[0]) {
                                            case 'siblings':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['siblings', _pdev.implement_me(
                                                        "IM: OPTION CONSTRAINT"
                                                    )]
                                                )
                                            case 'resolved dictionary':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['resolved dictionary', _p.group.resolve(
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
                                            default:
                                                return _p.au(
                                                    $[0]
                                                )
                                        }
                                    }
                                )]
                            )
                        case 'cyclic':
                            return _p.ss(
                                $,
                                ($) => ['cyclic', _p.decide.state(
                                    $['l state'],
                                    ($): t_out.Lookup_Selection.type_.cyclic => {
                                        switch ($[0]) {
                                            case 'siblings':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['siblings', _pdev.implement_me(
                                                        "IM: OPTION CONSTRAINT"
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

export const Module_Resolvers: t_signatures.Module_Resolvers = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Module_Resolvers.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_signature = _p_cc(
                    $['signature'],
                    ($) => _pdev.implement_me(
                        "IM: LINKED ENTRY"
                    )
                )
                
                const prop_root_value_resolver = _p_cc(
                    $['root value resolver'],
                    ($) => Value_Resolver(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'sibling property resolvers': _p_ls.acyclic.not_set(
                            ),
                            'parent sibling property resolvers': _p_ls.acyclic.not_set(
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
                            'signature': prop_signature,
                            'definition': _pdev.implement_me(
                                "IM: LINKED ENTRY"
                            ),
                            'signatures': $p['signatures'],
                            'imports': _p.optional.set(
                                $p['imports']
                            ),
                            'modules': $p['modules'],
                        }
                    )
                )
                return {
                    'signature': prop_signature,
                    'root value resolver': prop_root_value_resolver,
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

export const Option_Constraint_Resolvers: t_signatures.Option_Constraint_Resolvers = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Option_Constraint_Resolvers.D => _p_cc(
        $['l entry'],
        ($) => _p.decide.state(
            $['l state'],
            ($): t_out.Option_Constraint_Resolvers.D => {
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
                                        'property constraints': $l['property constraints'],
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
                    'value': _pdev.implement_me(
                        "IM: STATE"
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
                'property constraints': $a,
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

export const Value_Resolver_Group: t_signatures.Value_Resolver_Group = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Value_Resolver_Group.D => _p_cc(
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
                    ($) => Value_Resolver(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'sibling property resolvers': $a,
                            'parent sibling property resolvers': $l['sibling property resolvers'],
                        },
                        {
                            'definition': _pdev.implement_me(
                                "IM: LINKED ENTRY"
                            ),
                            'modules': $p['modules'],
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

export const Value_Resolver_List_Result: t_signatures.Value_Resolver_List_Result = ($, abort, $l, $p) => Module_Reference(
    $,
    ($) => abort(
        $
    ),
    {
        'modules': $l['modules'],
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
                'l results': {
                    'dictionary': _pdev.implement_me(
                        "IM: result"
                    ),
                },
                'l value': Guaranteed_Value_Selection(
                    $,
                    ($) => abort(
                        $
                    ),
                    $l,
                    $p
                ),
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

export const Value_Resolver: t_signatures.Value_Resolver = ($, abort, $l, $p) => _p.decide.state(
    $['l state'],
    ($): t_out.Value_Resolver => {
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
                                    ($): t_out.Value_Resolver.component.location => {
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
                                                            
                                                            const prop_signature = _p_cc(
                                                                $['signature'],
                                                                ($) => ({
                                                                    'l entry': _pdev.implement_me(
                                                                        "IM: FIXME ACYCLIC ENTRY"
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                })
                                                            )
                                                            return {
                                                                'import': prop_import,
                                                                'signature': prop_signature,
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
                                            
                                            const prop_modules = _p_cc(
                                                $['modules'],
                                                ($) => _p.optional.map(
                                                    $,
                                                    ($) => _p.dictionary.resolve(
                                                        $['l dictionary'],
                                                        ($, id, $a, $c): t_out.Value_Resolver.component.arguments_.O.modules.O.D => _p_cc(
                                                            $['l entry'],
                                                            ($) => _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Value_Resolver.component.arguments_.O.modules.O.D => {
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
                                                        ($, id, $a, $c): t_out.Value_Resolver.component.arguments_.O.lookups.O.D => _p_cc(
                                                            $['l entry'],
                                                            ($) => _p.decide.state(
                                                                $['l state'],
                                                                ($): t_out.Value_Resolver.component.arguments_.O.lookups.O.D => {
                                                                    switch ($[0]) {
                                                                        case 'stack':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['stack', _p.decide.state(
                                                                                    $['l state'],
                                                                                    ($): t_out.Value_Resolver.component.arguments_.O.lookups.O.D.stack => {
                                                                                        switch ($[0]) {
                                                                                            case 'empty':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['empty', null]
                                                                                                )
                                                                                            case 'push':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['push', _p.group.resolve(
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
                                                                                                            
                                                                                                            const prop_item = _p_cc(
                                                                                                                $['item'],
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
                                                                                                                'item': prop_item,
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
                                                                        case 'acyclic':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['acyclic', _p.decide.state(
                                                                                    $['l state'],
                                                                                    ($): t_out.Value_Resolver.component.arguments_.O.lookups.O.D.acyclic => {
                                                                                        switch ($[0]) {
                                                                                            case 'not set':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['not set', null]
                                                                                                )
                                                                                            default:
                                                                                                return _p.au(
                                                                                                    $[0]
                                                                                                )
                                                                                        }
                                                                                    }
                                                                                )]
                                                                            )
                                                                        case 'cyclic':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['cyclic', _p.decide.state(
                                                                                    $['l state'],
                                                                                    ($): t_out.Value_Resolver.component.arguments_.O.lookups.O.D.cyclic => {
                                                                                        switch ($[0]) {
                                                                                            case 'not set':
                                                                                                return _p.ss(
                                                                                                    $,
                                                                                                    ($) => ['not set', null]
                                                                                                )
                                                                                            default:
                                                                                                return _p.au(
                                                                                                    $[0]
                                                                                                )
                                                                                        }
                                                                                    }
                                                                                )]
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
                                                'modules': prop_modules,
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
                                        'value': prop_signature['module']['root value'],
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
                                ($) => Value_Resolver(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    $l,
                                    {
                                        'linked entry': _pdev.implement_me(
                                            "IM: OPTIONAL VALUE2"
                                        ),
                                        'definition': prop_definition['value'],
                                        'current dictionary': _p.optional.set(
                                            prop_definition
                                        ),
                                        'current ordered dictionary': _p.optional.set(
                                            prop_definition
                                        ),
                                        'modules': $p['modules'],
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
                    ($) => ['group', Value_Resolver_Group(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'sibling property resolvers': $l['sibling property resolvers'],
                            'parent sibling property resolvers': $l['sibling property resolvers'],
                        },
                        {
                            'definition': _pdev.implement_me(
                                "IM: OPTION CONSTRAINT"
                            ),
                            'modules': $p['modules'],
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
                                    ($) => Value_Resolver_List_Result(
                                        $,
                                        ($) => abort(
                                            $
                                        ),
                                        {
                                            'modules': _p_ls.acyclic.from_resolved_dictionary(
                                                $p['modules']
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
                                ($) => Value_Resolver(
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
                                            "IM: OPTION CONSTRAINT"
                                        ),
                                        'modules': $p['modules'],
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
                                ($) => Option_Constraint_Resolvers(
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
                                ($) => Value_Resolver(
                                    $,
                                    ($) => abort(
                                        $
                                    ),
                                    $l,
                                    {
                                        'definition': _pdev.implement_me(
                                            "IM: OPTION CONSTRAINT"
                                        ),
                                        'modules': $p['modules'],
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
                                    ($): t_out.Value_Resolver.reference.type_ => {
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
                                                                        'value': prop_lookup['resulting dictionary']['value'],
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
                                    ($, id, $a, $c): t_out.Value_Resolver.state.states.D => _p_cc(
                                        $['l entry'],
                                        ($) => _p.group.resolve(
                                            () => {
                                                
                                                const prop_constraints = _p_cc(
                                                    $['constraints'],
                                                    ($) => Option_Constraint_Resolvers(
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
                                                    ($) => Value_Resolver(
                                                        $,
                                                        ($) => abort(
                                                            $
                                                        ),
                                                        $l,
                                                        {
                                                            'definition': _pdev.implement_me(
                                                                "IM: LINKED ENTRY"
                                                            ),
                                                            'modules': $p['modules'],
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
                    
                    const prop_signatures = _p_cc(
                        $['signatures'],
                        ($) => Signatures(
                            $,
                            ($) => abort(
                                $
                            ),
                            null,
                            {
                                'modules': $p['modules'],
                                'imports': $p['imports'],
                            }
                        )
                    )
                    return {
                        'signatures': prop_signatures,
                    }
                }
            )
        )
        
        const prop_resolvers = _p_cc(
            $['resolvers'],
            ($) => Module_Resolvers(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'signatures': prop_signatures['signatures'],
                    'modules': $p['modules'],
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
                'sibling schemas': _p_ls.stack.push(
                    $l['sibling schemas'],
                    $a
                ),
            },
            null
        )
    )
)

export const Module_Specification: t_signatures.Module_Specification = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_schema = _p_cc(
            $['schema'],
            ($) => Schema_Tree(
                $,
                ($) => abort(
                    $
                ),
                {
                    'sibling schemas': _p_ls.stack.empty(
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
        
        const prop_module = _p_cc(
            $['module'],
            ($) => $
        )
        return {
            'schema': prop_schema,
            'schema path': prop_schema_path,
            'module': prop_module,
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
                            'sibling schemas': $l['sibling schemas'],
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
                            'sibling schemas': $l['sibling schemas'],
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
                    'sibling schemas': $l['sibling schemas'],
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
        
        const prop_modules = _p_cc(
            $['modules'],
            ($) => Modules(
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
                                        'imports': prop_imports,
                                        'modules': prop_modules,
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
            'modules': prop_modules,
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
