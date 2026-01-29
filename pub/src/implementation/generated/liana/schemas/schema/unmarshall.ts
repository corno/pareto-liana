
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/schema/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Text_Type: t_signatures.Text_Type = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'type': _p_cc(
            $.__get_entry(
                'type',
                ($) => abort(
                    ['no such entry', "type"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
    })
)

export const Number_Type: t_signatures.Number_Type = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'precision': _p_cc(
            $.__get_entry(
                'precision',
                ($) => abort(
                    ['no such entry', "precision"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
    })
)

export const Globals: t_signatures.Globals = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'complexity': _p_cc(
            $.__get_entry(
                'complexity',
                ($) => abort(
                    ['no such entry', "complexity"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
        'text types': _p_cc(
            $.__get_entry(
                'text types',
                ($) => abort(
                    ['no such entry', "text types"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': Text_Type(
                            $,
                            ($) => abort(
                                $
                            )
                        ),
                    })
                ),
            })
        ),
        'number types': _p_cc(
            $.__get_entry(
                'number types',
                ($) => abort(
                    ['no such entry', "number types"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': Number_Type(
                            $,
                            ($) => abort(
                                $
                            )
                        ),
                    })
                ),
            })
        ),
    })
)

export const Type: t_signatures.Type = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'node': _p_cc(
            $.__get_entry(
                'node',
                ($) => abort(
                    ['no such entry', "node"]
                )
            ),
            ($) => Type_Node(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Types: t_signatures.Types = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': Type(
                $,
                ($) => abort(
                    $
                )
            ),
        })
    ),
})

export const Resolve_Logic: t_signatures.Resolve_Logic = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'signatures': _p_cc(
            $.__get_entry(
                'signatures',
                ($) => abort(
                    ['no such entry', "signatures"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'types': _p_cc(
                        $.__get_entry(
                            'types',
                            ($) => abort(
                                ['no such entry', "types"]
                            )
                        ),
                        ($) => Signatures(
                            $,
                            ($) => abort(
                                $
                            )
                        )
                    ),
                })
            )
        ),
        'resolvers': _p_cc(
            $.__get_entry(
                'resolvers',
                ($) => abort(
                    ['no such entry', "resolvers"]
                )
            ),
            ($) => Resolvers(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Schema: t_signatures.Schema = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'imports': _p_cc(
            $.__get_entry(
                'imports',
                ($) => abort(
                    ['no such entry', "imports"]
                )
            ),
            ($) => Imports(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'globals': _p_cc(
            $.__get_entry(
                'globals',
                ($) => abort(
                    ['no such entry', "globals"]
                )
            ),
            ($) => Globals(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'types': _p_cc(
            $.__get_entry(
                'types',
                ($) => abort(
                    ['no such entry', "types"]
                )
            ),
            ($) => Types(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'complexity': _p_cc(
            $.__get_entry(
                'complexity',
                ($) => abort(
                    ['no such entry', "complexity"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
    })
)

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort) => _p_unreachable_code_path(
)

export const Type_Specification: t_signatures.Type_Specification = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'schema': _p_cc(
            $.__get_entry(
                'schema',
                ($) => abort(
                    ['no such entry', "schema"]
                )
            ),
            ($) => Schema_Tree(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'schema path': _p_cc(
            $.__get_entry(
                'schema path',
                ($) => abort(
                    ['no such entry', "schema path"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'list': v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null]
                    )
                ).__l_map(
                    ($) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'item': v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null]
                            )
                        ),
                    })
                ),
            })
        ),
        'type': _p_cc(
            $.__get_entry(
                'type',
                ($) => abort(
                    ['no such entry', "type"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
    })
)

export const Schemas: t_signatures.Schemas = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': Schema_Tree(
                $,
                ($) => abort(
                    $
                )
            ),
        })
    ),
})

export const Imports: t_signatures.Imports = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'schema set child': _p_cc(
                        $.__get_entry(
                            'schema set child',
                            ($) => abort(
                                ['no such entry', "schema set child"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'id': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'schema': _p_cc(
                        $.__get_entry(
                            'schema',
                            ($) => abort(
                                ['no such entry', "schema"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        )
                    ),
                })
            ),
        })
    ),
})

export const Presence: t_signatures.Presence = ($, abort) => _p_unreachable_code_path(
)

export const Dictionary: t_signatures.Dictionary = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'node': _p_cc(
            $.__get_entry(
                'node',
                ($) => abort(
                    ['no such entry', "node"]
                )
            ),
            ($) => Type_Node(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Signatures: t_signatures.Signatures = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': Signature(
                $,
                ($) => abort(
                    $
                )
            ),
        })
    ),
})

export const Resolvers: t_signatures.Resolvers = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'signature': _p_cc(
                        $.__get_entry(
                            'signature',
                            ($) => abort(
                                ['no such entry', "signature"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        )
                    ),
                    'type resolver': _p_cc(
                        $.__get_entry(
                            'type resolver',
                            ($) => abort(
                                ['no such entry', "type resolver"]
                            )
                        ),
                        ($) => Node_Resolver(
                            $,
                            ($) => abort(
                                $
                            )
                        )
                    ),
                })
            ),
        })
    ),
})

export const Group: t_signatures.Group = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'description': _p_cc(
                        $.__get_entry(
                            'description',
                            ($) => abort(
                                ['no such entry', "description"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                ['expected an optional', null]
                            )
                        ).__o_map(
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        )
                    ),
                    'node': _p_cc(
                        $.__get_entry(
                            'node',
                            ($) => abort(
                                ['no such entry', "node"]
                            )
                        ),
                        ($) => Type_Node(
                            $,
                            ($) => abort(
                                $
                            )
                        )
                    ),
                })
            ),
        })
    ),
})

export const Type_Reference: t_signatures.Type_Reference = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'location': _p_cc(
            $.__get_entry(
                'location',
                ($) => abort(
                    ['no such entry', "location"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
        'resulting type': _p_cc(
            $.__get_entry(
                'resulting type',
                ($) => abort(
                    ['no such entry', "resulting type"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null]
                )
            )
        ),
    })
)

export const Type_Node: t_signatures.Type_Node = ($, abort) => _p_unreachable_code_path(
)

export const Type_Node_Path: t_signatures.Type_Node_Path = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'tail': _p_cc(
            $.__get_entry(
                'tail',
                ($) => abort(
                    ['no such entry', "tail"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'list': v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null]
                    )
                ).__l_map(
                    ($) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'item': _p_unreachable_code_path(
                        ),
                    })
                ),
            })
        ),
        'resulting node': _p_cc(
            $.__get_entry(
                'resulting node',
                ($) => abort(
                    ['no such entry', "resulting node"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null]
                )
            )
        ),
    })
)

export const Type_Node_Reference: t_signatures.Type_Node_Reference = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'type location': _p_cc(
            $.__get_entry(
                'type location',
                ($) => abort(
                    ['no such entry', "type location"]
                )
            ),
            ($) => Type_Reference(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'path': _p_cc(
            $.__get_entry(
                'path',
                ($) => abort(
                    ['no such entry', "path"]
                )
            ),
            ($) => Type_Node_Path(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Signature_Parameters: t_signatures.Signature_Parameters = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'values': _p_cc(
            $.__get_entry(
                'values',
                ($) => abort(
                    ['no such entry', "values"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'data type': _p_cc(
                                    $.__get_entry(
                                        'data type',
                                        ($) => abort(
                                            ['no such entry', "data type"]
                                        )
                                    ),
                                    ($) => Type_Reference(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    )
                                ),
                                'presence': _p_cc(
                                    $.__get_entry(
                                        'presence',
                                        ($) => abort(
                                            ['no such entry', "presence"]
                                        )
                                    ),
                                    ($) => Presence(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    )
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
        'lookups': _p_cc(
            $.__get_entry(
                'lookups',
                ($) => abort(
                    ['no such entry', "lookups"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'referent': _p_cc(
                                    $.__get_entry(
                                        'referent',
                                        ($) => abort(
                                            ['no such entry', "referent"]
                                        )
                                    ),
                                    ($) => Type_Reference(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    )
                                ),
                                'dictionary': _p_cc(
                                    $.__get_entry(
                                        'dictionary',
                                        ($) => abort(
                                            ['no such entry', "dictionary"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null]
                                        )
                                    )
                                ),
                                'type': _p_cc(
                                    $.__get_entry(
                                        'type',
                                        ($) => abort(
                                            ['no such entry', "type"]
                                        )
                                    ),
                                    ($) => _p_unreachable_code_path(
                                    )
                                ),
                                'presence': _p_cc(
                                    $.__get_entry(
                                        'presence',
                                        ($) => abort(
                                            ['no such entry', "presence"]
                                        )
                                    ),
                                    ($) => Presence(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    )
                                ),
                            })
                        ),
                    })
                ),
            })
        ),
    })
)

export const Signature: t_signatures.Signature = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'type': _p_cc(
            $.__get_entry(
                'type',
                ($) => abort(
                    ['no such entry', "type"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null]
                )
            )
        ),
        'parameters': _p_cc(
            $.__get_entry(
                'parameters',
                ($) => abort(
                    ['no such entry', "parameters"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
        'resolved parameters': _p_cc(
            $.__get_entry(
                'resolved parameters',
                ($) => abort(
                    ['no such entry', "resolved parameters"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null]
                )
            )
        ),
    })
)

export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'path': _p_cc(
            $.__get_entry(
                'path',
                ($) => abort(
                    ['no such entry', "path"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'list': v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null]
                    )
                ).__l_map(
                    ($) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'item': _p_unreachable_code_path(
                        ),
                    })
                ),
            })
        ),
        'resulting node': _p_cc(
            $.__get_entry(
                'resulting node',
                ($) => abort(
                    ['no such entry', "resulting node"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null]
                )
            )
        ),
    })
)

export const Lookup_Selection: t_signatures.Lookup_Selection = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'type': _p_cc(
            $.__get_entry(
                'type',
                ($) => abort(
                    ['no such entry', "type"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
        'resulting dictionary': _p_cc(
            $.__get_entry(
                'resulting dictionary',
                ($) => abort(
                    ['no such entry', "resulting dictionary"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null]
                )
            )
        ),
    })
)

export const Constraint: t_signatures.Constraint = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'selection': _p_cc(
            $.__get_entry(
                'selection',
                ($) => abort(
                    ['no such entry', "selection"]
                )
            ),
            ($) => Relative_Value_Selection(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'type': _p_cc(
            $.__get_entry(
                'type',
                ($) => abort(
                    ['no such entry', "type"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
    })
)

export const Option_Constraints: t_signatures.Option_Constraints = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': _p_unreachable_code_path(
            ),
        })
    ),
})

export const Property_Constraints: t_signatures.Property_Constraints = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': Property_Constraint(
                $,
                ($) => abort(
                    $
                )
            ),
        })
    ),
})

export const Reference_To_Property_Constraint: t_signatures.Reference_To_Property_Constraint = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'id': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null]
        )
    ),
})

export const Property_Constraint: t_signatures.Property_Constraint = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'start': _p_cc(
            $.__get_entry(
                'start',
                ($) => abort(
                    ['no such entry', "start"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
        'constraint': _p_cc(
            $.__get_entry(
                'constraint',
                ($) => abort(
                    ['no such entry', "constraint"]
                )
            ),
            ($) => Constraint(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($, abort) => _p_unreachable_code_path(
)

export const Node_Resolver_Group: t_signatures.Node_Resolver_Group = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'definition': _p_cc(
                        $.__get_entry(
                            'definition',
                            ($) => abort(
                                ['no such entry', "definition"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        )
                    ),
                    'resolver': _p_cc(
                        $.__get_entry(
                            'resolver',
                            ($) => abort(
                                ['no such entry', "resolver"]
                            )
                        ),
                        ($) => Node_Resolver(
                            $,
                            ($) => abort(
                                $
                            )
                        )
                    ),
                })
            ),
        })
    ),
})

export const Node_Resolver_List_Result: t_signatures.Node_Resolver_List_Result = ($, abort) => Type_Reference(
    $,
    ($) => abort(
        $
    )
)

export const Benchmark: t_signatures.Benchmark = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'selection': _p_cc(
            $.__get_entry(
                'selection',
                ($) => abort(
                    ['no such entry', "selection"]
                )
            ),
            ($) => Guaranteed_Value_Selection(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'resulting dictionary': _p_cc(
            $.__get_entry(
                'resulting dictionary',
                ($) => abort(
                    ['no such entry', "resulting dictionary"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null]
                )
            )
        ),
        'dense': _p_cc(
            $.__get_entry(
                'dense',
                ($) => abort(
                    ['no such entry', "dense"]
                )
            ),
            ($) => v_deserialize_boolean.deserialize(
                v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                ),
                ($) => abort(
                    ['not a valid boolean', null]
                )
            )
        ),
    })
)

export const Node_Resolver: t_signatures.Node_Resolver = ($, abort) => _p_unreachable_code_path(
)

export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'start': _p_cc(
            $.__get_entry(
                'start',
                ($) => abort(
                    ['no such entry', "start"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
        'tail': _p_cc(
            $.__get_entry(
                'tail',
                ($) => abort(
                    ['no such entry', "tail"]
                )
            ),
            ($) => Relative_Value_Selection(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'resulting node': _p_cc(
            $.__get_entry(
                'resulting node',
                ($) => abort(
                    ['no such entry', "resulting node"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null]
                )
            )
        ),
    })
)

export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($, abort) => _p_unreachable_code_path(
)
