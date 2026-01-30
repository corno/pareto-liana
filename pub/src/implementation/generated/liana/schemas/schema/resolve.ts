
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

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
                        'selection'
                    ),
                    'possibly circular dependent sibling types': _pdev.implement_me(
                        'selection'
                    ),
                },
                {
                    'globals': _pdev.implement_me(
                        "parameter"
                    ),
                    'imports': _pdev.implement_me(
                        "parameter"
                    ),
                }
            )
        )
        return {
            'node': prop_node,
        }
    }
)

export const Types: t_signatures.Types = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Globals: t_signatures.Globals = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_complexity = _p_cc(
            $['complexity'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_text_types = _p_cc(
            $['text types'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_number_types = _p_cc(
            $['number types'],
            ($) => _p_unreachable_code_path(
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
            ($) => _p_unreachable_code_path(
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
            ($) => _p_unreachable_code_path(
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
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_resulting_type = _p_cc(
            $['resulting type'],
            ($) => _p_unreachable_code_path(
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
                $p,
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
                        "required"
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
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_resulting_node = _p_cc(
            $['resulting node'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'tail': prop_tail,
            'resulting node': prop_resulting_node,
        }
    }
)

export const Group: t_signatures.Group = ($, abort, $l, $p) => _p_unreachable_code_path(
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
                        'selection'
                    ),
                    'possibly circular dependent sibling types': _pdev.implement_me(
                        'selection'
                    ),
                },
                {
                    'globals': _pdev.implement_me(
                        "parameter"
                    ),
                    'imports': _pdev.implement_me(
                        "parameter"
                    ),
                }
            )
        )
        return {
            'node': prop_node,
        }
    }
)

export const Type_Node: t_signatures.Type_Node = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_path = _p_cc(
            $['path'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_resulting_node = _p_cc(
            $['resulting node'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'path': prop_path,
            'resulting node': prop_resulting_node,
        }
    }
)

export const Presence: t_signatures.Presence = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Signature_Parameters: t_signatures.Signature_Parameters = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_values = _p_cc(
            $['values'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_lookups = _p_cc(
            $['lookups'],
            ($) => _p_unreachable_code_path(
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
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_parameters = _p_cc(
            $['parameters'],
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_resolved_parameters = _p_cc(
            $['resolved parameters'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'type': prop_type,
            'parameters': prop_parameters,
            'resolved parameters': prop_resolved_parameters,
        }
    }
)

export const Signatures: t_signatures.Signatures = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_start = _p_cc(
            $['start'],
            ($) => _p_unreachable_code_path(
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
                        "required"
                    ),
                }
            )
        )
        
        const prop_resulting_node = _p_cc(
            $['resulting node'],
            ($) => _p_unreachable_code_path(
            )
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
            ($) => _p_unreachable_code_path(
            )
        )
        
        const prop_resulting_dictionary = _p_cc(
            $['resulting dictionary'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'type': prop_type,
            'resulting dictionary': prop_resulting_dictionary,
        }
    }
)

export const Resolvers: t_signatures.Resolvers = ($, abort, $l, $p) => _p_unreachable_code_path(
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
                $p,
            )
        )
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'selection': prop_selection,
            'type': prop_type,
        }
    }
)

export const Option_Constraints: t_signatures.Option_Constraints = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Property_Constraint: t_signatures.Property_Constraint = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_start = _p_cc(
            $['start'],
            ($) => _p_unreachable_code_path(
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
                        "required"
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

export const Property_Constraints: t_signatures.Property_Constraints = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Reference_To_Property_Constraint: t_signatures.Reference_To_Property_Constraint = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Node_Resolver_Group: t_signatures.Node_Resolver_Group = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Node_Resolver_List_Result: t_signatures.Node_Resolver_List_Result = ($, abort, $l, $p) => Type_Reference(
    $,
    ($) => abort(
        $
    ),
    {
        'types': _pdev.implement_me(
            'selection'
        ),
    },
    {
        'imports': _pdev.implement_me(
            "parameter"
        ),
    }
)

export const Benchmark: t_signatures.Benchmark = ($, abort, $l, $p) => _p.group.resolve(
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
        
        const prop_resulting_dictionary = _p_cc(
            $['resulting dictionary'],
            ($) => _p_unreachable_code_path(
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

export const Node_Resolver: t_signatures.Node_Resolver = ($, abort, $l, $p) => _p_unreachable_code_path(
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
                                'types': _pdev.implement_me(
                                    "parameter"
                                ),
                                'imports': _pdev.implement_me(
                                    "parameter"
                                ),
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
                        "required"
                    ),
                    'types': _pdev.implement_me(
                        "parameter"
                    ),
                    'imports': _pdev.implement_me(
                        "parameter"
                    ),
                }
            )
        )
        return {
            'signatures': prop_signatures,
            'resolvers': prop_resolvers,
        }
    }
)

export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => _p_unreachable_code_path(
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
                        'empty stack'
                    ),
                },
                null
            )
        )
        
        const prop_schema_path = _p_cc(
            $['schema path'],
            ($) => _p_unreachable_code_path(
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

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $l, $p) => _p_unreachable_code_path(
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
                        'selection'
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
                    'globals': _pdev.implement_me(
                        "optional"
                    ),
                    'imports': _pdev.implement_me(
                        "optional"
                    ),
                }
            )
        )
        
        const prop_complexity = _p_cc(
            $['complexity'],
            ($) => _p_unreachable_code_path(
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

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => _p_unreachable_code_path(
)
