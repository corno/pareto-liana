
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/schema/unmarshall"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/schema/data/unresolved"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

export const Package: t_signatures.Package = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "omit (de)serializer": null,
                    "schema tree": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'omit (de)serializer': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'omit (de)serializer',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Boolean(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['true/false', null],
                        },
                    ),
                ),
                'schema tree': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'schema tree',
                        },
                    ),
                    ($) => Schema_Tree(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Schemas: t_signatures.Schemas = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': Schema_Tree(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            }),
        ),
    }),
)

export const Schema: t_signatures.Schema = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "schema imports": null,
                    "resolver imports": null,
                    "globals": null,
                    "modules": null,
                    "complexity": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'schema imports': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'schema imports',
                        },
                    ),
                    ($) => Schema_Imports(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'resolver imports': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'resolver imports',
                        },
                    ),
                    ($) => Resolver_Imports(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'globals': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'globals',
                        },
                    ),
                    ($) => Globals(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'modules': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'modules',
                        },
                    ),
                    ($) => Modules(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'complexity': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'complexity',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Schema.complexity => {
                                switch ($t) {
                                    case 'constrained':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['constrained', Resolver(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'unconstrained':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['unconstrained', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Schema_Imports: t_signatures.Schema_Imports = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.dictionary.literal(
                                {
                                    "schema set child": null,
                                    "schema": null,
                                },
                            ),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'schema set child': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'schema set child',
                                        },
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        ),
                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    }),
                                ),
                                'schema': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'schema',
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }
                        },
                    ),
                ),
            }),
        ),
    }),
)

export const Modules: t_signatures.Modules = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': Module(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            }),
        ),
    }),
)

export const Globals: t_signatures.Globals = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "complexity": null,
                    "text types": null,
                    "number types": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'complexity': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'complexity',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Globals.complexity => {
                                switch ($t) {
                                    case 'constrained':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['constrained', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'unconstrained':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['unconstrained', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'text types': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'text types',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': Text_Type(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
                'number types': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'number types',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': Number_Type(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
            }
        },
    ),
)

export const Dictionary: t_signatures.Dictionary = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "value": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'value': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'value',
                        },
                    ),
                    ($) => Value(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Value: t_signatures.Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Value => {
            switch ($t) {
                case 'boolean':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'component':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['component', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "type": null,
                                                "results": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'type': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Value.l_state.component.type_ => {
                                                            switch ($t) {
                                                                case 'external':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['external', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "import": null,
                                                                                                "module": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'import': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'import',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                            'module': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'module',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'internal':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['internal', {
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        }),
                                                                    )
                                                                case 'internal acyclic':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['internal acyclic', {
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                            'results': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'results',
                                                    },
                                                ),
                                                ($) => Value_Results(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'dictionary':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['dictionary', Dictionary(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'group':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['group', Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'list':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['list', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "value": null,
                                                "results": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'value': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'value',
                                                    },
                                                ),
                                                ($) => Value(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'results': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'results',
                                                    },
                                                ),
                                                ($) => Value_Results(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'nothing':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'number':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['number', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Value.l_state.number_ => {
                                        switch ($t) {
                                            case 'global':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['global', {
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            ),
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    }),
                                                )
                                            case 'local':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['local', Number_Type(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                    }],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'optional':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['optional', Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'reference':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['reference', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "referent": null,
                                                "type": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'referent': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'referent',
                                                    },
                                                ),
                                                ($) => Value_Reference(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'type': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Value.l_state.reference.type_ => {
                                                            switch ($t) {
                                                                case 'derived':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['derived', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'selected':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['selected', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "dictionary": null,
                                                                                                "dependency": null,
                                                                                                "results": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'dictionary': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'dictionary',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'dependency': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'dependency',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => _p.decide.text(
                                                                                                        $['option']['value'],
                                                                                                        ($t): t_out.Value.l_state.reference.type_.l_state.selected.dependency => {
                                                                                                            switch ($t) {
                                                                                                                case 'acyclic':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            'l state': ['acyclic', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'cyclic':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            'l state': ['cyclic', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                case 'stack':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            'l state': ['stack', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            )],
                                                                                                                        }),
                                                                                                                    )
                                                                                                                default:
                                                                                                                    return abort(
                                                                                                                        ['liana', {
                                                                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                            ),
                                                                                                                        }],
                                                                                                                    )
                                                                                                            }
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'results': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'results',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Value_Results(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'state':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['state', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "options": null,
                                                "results": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'options': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'options',
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                            $['entries'],
                                                        ).map(
                                                            ($, id) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l entry': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': _p.dictionary.literal(
                                                                                {
                                                                                    "constraints": null,
                                                                                    "description": null,
                                                                                    "value": null,
                                                                                },
                                                                            ),
                                                                        },
                                                                    ),
                                                                    ($) => _p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            )
                                                                            return {
                                                                                'constraints': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'constraints',
                                                                                        },
                                                                                    ),
                                                                                    ($) => Option_Constraints(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'description': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'description',
                                                                                        },
                                                                                    ),
                                                                                    ($) => _p.optional.from.optional(
                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        )['optional'],
                                                                                    ).map(
                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'value': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'value',
                                                                                        },
                                                                                    ),
                                                                                    ($) => Value(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }
                                                                        },
                                                                    ),
                                                                ),
                                                            }),
                                                        ),
                                                    }),
                                                ),
                                            ),
                                            'results': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'results',
                                                    },
                                                ),
                                                ($) => Value_Results(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'text':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['text', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Value.l_state.text => {
                                        switch ($t) {
                                            case 'global':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['global', {
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            ),
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    }),
                                                )
                                            case 'local':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['local', Text_Type(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                    }],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Resolver: t_signatures.Resolver = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "signatures": null,
                    "resolvers": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'signatures': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'signatures',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.dictionary.literal(
                                    {
                                        "signatures": null,
                                    },
                                ),
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                )
                                return {
                                    'signatures': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'signatures',
                                            },
                                        ),
                                        ($) => Signatures(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }
                            },
                        ),
                    ),
                ),
                'resolvers': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'resolvers',
                        },
                    ),
                    ($) => Module_Resolvers(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Resolver_Imports: t_signatures.Resolver_Imports = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.dictionary.literal(
                                {
                                    "schema set child": null,
                                    "resolver": null,
                                },
                            ),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'schema set child': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'schema set child',
                                        },
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        ),
                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    }),
                                ),
                                'resolver': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'resolver',
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }
                        },
                    ),
                ),
            }),
        ),
    }),
)

export const Signatures: t_signatures.Signatures = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': Signature(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            }),
        ),
    }),
)

export const Signature_Parameters: t_signatures.Signature_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "modules": null,
                    "lookups": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'modules': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'modules',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.dictionary.literal(
                                                    {
                                                        "module": null,
                                                        "presence": null,
                                                    },
                                                ),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                )
                                                return {
                                                    'module': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'module',
                                                            },
                                                        ),
                                                        ($) => Module_Reference(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'presence': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'presence',
                                                            },
                                                        ),
                                                        ($) => Presence(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
                'lookups': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'lookups',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.dictionary.literal(
                                                    {
                                                        "referent": null,
                                                        "dictionary": null,
                                                        "type": null,
                                                        "presence": null,
                                                    },
                                                ),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                )
                                                return {
                                                    'referent': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'referent',
                                                            },
                                                        ),
                                                        ($) => Module_Reference(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'dictionary': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'dictionary',
                                                            },
                                                        ),
                                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                    'type': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'type',
                                                            },
                                                        ),
                                                        ($) => _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.Signature_Parameters.lookups.l_dictionary.D.l_entry.type_ => {
                                                                    switch ($t) {
                                                                        case 'cyclic':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['cyclic', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'acyclic':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['acyclic', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'stack':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    ),
                                                                                    'l state': ['stack', v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['liana', {
                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                }],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    'presence': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'presence',
                                                            },
                                                        ),
                                                        ($) => Presence(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                        ),
                                                    ),
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        }),
                    ),
                ),
            }
        },
    ),
)

export const Value_Resolver: t_signatures.Value_Resolver = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Value_Resolver => {
            switch ($t) {
                case 'boolean':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'component':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['component', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "definition": null,
                                                "location": null,
                                                "signature": null,
                                                "arguments": null,
                                                "constraints": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'definition',
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'location': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'location',
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Value_Resolver.l_state.component.location => {
                                                            switch ($t) {
                                                                case 'external':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['external', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "schema import": null,
                                                                                                "resolver import": null,
                                                                                                "signature": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'schema import': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'schema import',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                            'resolver import': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'resolver import',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                            'signature': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'signature',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'internal':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['internal', {
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                            'signature': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'signature',
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'arguments': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'arguments',
                                                    },
                                                ),
                                                ($) => _p.optional.from.optional(
                                                    v_unmarshalled_from_parse_tree.Optional(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    )['optional'],
                                                ).map(
                                                    ($) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': _p.dictionary.literal(
                                                                    {
                                                                        "modules": null,
                                                                        "lookups": null,
                                                                    },
                                                                ),
                                                            },
                                                        ),
                                                        ($) => _p_variables(
                                                            () => {
                                                                
                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                )
                                                                return {
                                                                    'modules': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'modules',
                                                                            },
                                                                        ),
                                                                        ($) => _p.optional.from.optional(
                                                                            v_unmarshalled_from_parse_tree.Optional(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )['optional'],
                                                                        ).map(
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                        $['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            ),
                                                                                            'l entry': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['value'],
                                                                                                    ($t): t_out.Value_Resolver.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry => {
                                                                                                        switch ($t) {
                                                                                                            case 'optional':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['optional', Optional_Value_Initialization(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'required':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['required', Guaranteed_Value_Selection(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'parameter':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['parameter', {
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                        }],
                                                                                                                    }),
                                                                                                                )
                                                                                                            default:
                                                                                                                return abort(
                                                                                                                    ['liana', {
                                                                                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                                            $['value'],
                                                                                                                        ),
                                                                                                                    }],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    'lookups': _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'lookups',
                                                                            },
                                                                        ),
                                                                        ($) => _p.optional.from.optional(
                                                                            v_unmarshalled_from_parse_tree.Optional(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )['optional'],
                                                                        ).map(
                                                                            ($) => _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                    ),
                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                        $['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            ),
                                                                                            'l entry': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['value'],
                                                                                                    ($t): t_out.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
                                                                                                        switch ($t) {
                                                                                                            case 'stack':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['stack', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['value'],
                                                                                                                                ($t): t_out.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.stack => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'empty':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    )],
                                                                                                                                                }),
                                                                                                                                            )
                                                                                                                                        case 'push':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['push', _p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                            {
                                                                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                                                                    {
                                                                                                                                                                        "stack": null,
                                                                                                                                                                        "item": null,
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        ($) => _p_variables(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'stack': _p_change_context(
                                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            {
                                                                                                                                                                                'id': 'stack',
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        ($) => Lookup_Selection(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    'item': _p_change_context(
                                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            {
                                                                                                                                                                                'id': 'item',
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        ($) => Lookup_Selection(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                    )],
                                                                                                                                                }),
                                                                                                                                            )
                                                                                                                                        default:
                                                                                                                                            return abort(
                                                                                                                                                ['liana', {
                                                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                    ),
                                                                                                                                                }],
                                                                                                                                            )
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'acyclic':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['acyclic', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['value'],
                                                                                                                                ($t): t_out.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.acyclic => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'not set':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    )],
                                                                                                                                                }),
                                                                                                                                            )
                                                                                                                                        default:
                                                                                                                                            return abort(
                                                                                                                                                ['liana', {
                                                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                    ),
                                                                                                                                                }],
                                                                                                                                            )
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'cyclic':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['cyclic', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['value'],
                                                                                                                                ($t): t_out.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.cyclic => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'not set':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                        $,
                                                                                                                                                        ($) => abort(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    )],
                                                                                                                                                }),
                                                                                                                                            )
                                                                                                                                        default:
                                                                                                                                            return abort(
                                                                                                                                                ['liana', {
                                                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                    ),
                                                                                                                                                }],
                                                                                                                                            )
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            case 'selection':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['selection', Lookup_Selection(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        )],
                                                                                                                    }),
                                                                                                                )
                                                                                                            default:
                                                                                                                return abort(
                                                                                                                    ['liana', {
                                                                                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                                            $['value'],
                                                                                                                        ),
                                                                                                                    }],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            ),
                                                                                        }),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                        ),
                                                                    ),
                                                                }
                                                            },
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'constraints': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'constraints',
                                                    },
                                                ),
                                                ($) => Value_Constraint_Resolvers(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'dictionary':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['dictionary', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "definition": null,
                                                "resolver": null,
                                                "benchmark": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'definition',
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'resolver': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'resolver',
                                                    },
                                                ),
                                                ($) => Value_Resolver(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'benchmark': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'benchmark',
                                                    },
                                                ),
                                                ($) => _p.optional.from.optional(
                                                    v_unmarshalled_from_parse_tree.Optional(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    )['optional'],
                                                ).map(
                                                    ($) => Benchmark(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'group':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['group', Value_Resolver_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'list':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['list', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "definition": null,
                                                "resolver": null,
                                                "result": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'definition',
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'resolver': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'resolver',
                                                    },
                                                ),
                                                ($) => Value_Resolver(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'result': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'result',
                                                    },
                                                ),
                                                ($) => _p.optional.from.optional(
                                                    v_unmarshalled_from_parse_tree.Optional(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    )['optional'],
                                                ).map(
                                                    ($) => Value_Resolver_List_Result(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'nothing':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'number':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['number', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'optional':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['optional', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "constraints": null,
                                                "resolver": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'constraints': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'constraints',
                                                    },
                                                ),
                                                ($) => Option_Constraint_Resolvers(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'resolver': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'resolver',
                                                    },
                                                ),
                                                ($) => Value_Resolver(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'reference':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['reference', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "definition": null,
                                                "type": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'definition',
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'type': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Value_Resolver.l_state.reference.type_ => {
                                                            switch ($t) {
                                                                case 'derived':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['derived', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "value": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'value': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'value',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Guaranteed_Value_Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'selected':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['selected', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "definition": null,
                                                                                                "lookup": null,
                                                                                                "constraints": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'definition': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'definition',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'lookup': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'lookup',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Lookup_Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'constraints': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'constraints',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Value_Constraint_Resolvers(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'state':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['state', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "definition": null,
                                                "states": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'definition',
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'states': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'states',
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                            $['entries'],
                                                        ).map(
                                                            ($, id) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l entry': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': _p.dictionary.literal(
                                                                                {
                                                                                    "constraints": null,
                                                                                    "resolver": null,
                                                                                },
                                                                            ),
                                                                        },
                                                                    ),
                                                                    ($) => _p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            )
                                                                            return {
                                                                                'constraints': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'constraints',
                                                                                        },
                                                                                    ),
                                                                                    ($) => Option_Constraint_Resolvers(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'resolver': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'resolver',
                                                                                        },
                                                                                    ),
                                                                                    ($) => Value_Resolver(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }
                                                                        },
                                                                    ),
                                                                ),
                                                            }),
                                                        ),
                                                    }),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                case 'text':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['text', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Module_Specification: t_signatures.Module_Specification = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "schema": null,
                    "schema path": null,
                    "module": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'schema': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'schema',
                        },
                    ),
                    ($) => Schema_Tree(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'schema path': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'schema path',
                        },
                    ),
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        ),
                        'l list': _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l item': v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                }),
                            ),
                        ),
                    }),
                ),
                'module': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'module',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Schema_Tree => {
            switch ($t) {
                case 'schema':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['schema', Schema(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'set':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['set', Schemas(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Text_Type: t_signatures.Text_Type = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "type": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'type': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Text_Type.type_ => {
                                switch ($t) {
                                    case 'multi line':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['multi line', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'single line':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['single line', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Number_Type: t_signatures.Number_Type = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "precision": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'precision': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'precision',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Number_Type.precision => {
                                switch ($t) {
                                    case 'approximation':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['approximation', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "significant digits": null,
                                                                },
                                                            ),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'significant digits': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'significant digits',
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'type': ['decimal', null],
                                                                        },
                                                                    ),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'exact':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['exact', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "decimal separator offset": null,
                                                                    "type": null,
                                                                },
                                                            ),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'decimal separator offset': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'decimal separator offset',
                                                                        },
                                                                    ),
                                                                    ($) => _p.optional.from.optional(
                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )['optional'],
                                                                    ).map(
                                                                        ($) => v_unmarshalled_from_parse_tree.Number(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'type': ['decimal', null],
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                                'type': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'type',
                                                                        },
                                                                    ),
                                                                    ($) => _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        ($) => _p.decide.text(
                                                                            $['option']['value'],
                                                                            ($t): t_out.Number_Type.precision.l_state.exact.type_ => {
                                                                                switch ($t) {
                                                                                    case 'integer':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l state': ['integer', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            }),
                                                                                        )
                                                                                    case 'natural':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l state': ['natural', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            }),
                                                                                        )
                                                                                    case 'positive natural':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l state': ['positive natural', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            }),
                                                                                        )
                                                                                    default:
                                                                                        return abort(
                                                                                            ['liana', {
                                                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Module: t_signatures.Module = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "root value": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'root value': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'root value',
                        },
                    ),
                    ($) => Value(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Presence: t_signatures.Presence = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Presence => {
            switch ($t) {
                case 'optional':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['optional', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'required':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['required', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Module_Resolvers: t_signatures.Module_Resolvers = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.dictionary.literal(
                                {
                                    "signature": null,
                                    "root value resolver": null,
                                },
                            ),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'signature': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'signature',
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'root value resolver': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'root value resolver',
                                        },
                                    ),
                                    ($) => Value_Resolver(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }
                        },
                    ),
                ),
            }),
        ),
    }),
)

export const Benchmark: t_signatures.Benchmark = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "selection": null,
                    "resulting dictionary": null,
                    "dense": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'selection': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'selection',
                        },
                    ),
                    ($) => Guaranteed_Value_Selection(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'resulting dictionary': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'resulting dictionary',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'dense': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'dense',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Boolean(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['true/false', null],
                        },
                    ),
                ),
            }
        },
    ),
)

export const Group: t_signatures.Group = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.dictionary.literal(
                                {
                                    "description": null,
                                    "value": null,
                                },
                            ),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'description': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'description',
                                        },
                                    ),
                                    ($) => _p.optional.from.optional(
                                        v_unmarshalled_from_parse_tree.Optional(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        )['optional'],
                                    ).map(
                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                ),
                                'value': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'value',
                                        },
                                    ),
                                    ($) => Value(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }
                        },
                    ),
                ),
            }),
        ),
    }),
)

export const Value_Reference: t_signatures.Value_Reference = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "module": null,
                    "path": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'module': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'module',
                        },
                    ),
                    ($) => Module_Reference(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'path': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'path',
                        },
                    ),
                    ($) => Value_Path(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Value_Path: t_signatures.Value_Path = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "tail": null,
                    "resulting node": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'tail': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'tail',
                        },
                    ),
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        ),
                        'l list': _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l item': _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Value_Path.tail.l_list.L.l_item => {
                                                switch ($t) {
                                                    case 'dictionary':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'group':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['group', {
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    ),
                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                }],
                                                            }),
                                                        )
                                                    case 'list':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['list', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'optional':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['optional', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'state':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['state', {
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    ),
                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                }],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['liana', {
                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                'range': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                            }],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        ),
                    }),
                ),
                'resulting node': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'resulting node',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Module_Reference: t_signatures.Module_Reference = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "location": null,
                    "resulting module": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'location': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'location',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Module_Reference.location => {
                                switch ($t) {
                                    case 'internal':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['internal', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
                                        )
                                    case 'external':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['external', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "import": null,
                                                                    "module": null,
                                                                },
                                                            ),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'import': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'import',
                                                                        },
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                                'module': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'module',
                                                                        },
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'resulting module': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'resulting module',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Signature: t_signatures.Signature = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "module": null,
                    "parameters": null,
                    "resolved parameters": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'module': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'module',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'parameters': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'parameters',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Signature.parameters => {
                                switch ($t) {
                                    case 'local':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['local', Signature_Parameters(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'same as':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['same as', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'resolved parameters': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'resolved parameters',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "path": null,
                    "resulting node": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'path': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'path',
                        },
                    ),
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        ),
                        'l list': _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l item': _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['value'],
                                            ($t): t_out.Relative_Value_Selection.path.l_list.L.l_item => {
                                                switch ($t) {
                                                    case 'component':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['component', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    case 'group':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['group', {
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    ),
                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                }],
                                                            }),
                                                        )
                                                    case 'reference':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['reference', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': _p.dictionary.literal(
                                                                                {
                                                                                    "definition": null,
                                                                                },
                                                                            ),
                                                                        },
                                                                    ),
                                                                    ($) => _p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            )
                                                                            return {
                                                                                'definition': _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'definition',
                                                                                        },
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }
                                                                        },
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['liana', {
                                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                                'range': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                ),
                                                            }],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                }),
                            ),
                        ),
                    }),
                ),
                'resulting node': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'resulting node',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Lookup_Selection: t_signatures.Lookup_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "type": null,
                    "resulting dictionary": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'type': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Lookup_Selection.type_ => {
                                switch ($t) {
                                    case 'acyclic':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['acyclic', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Lookup_Selection.type_.l_state.acyclic => {
                                                            switch ($t) {
                                                                case 'siblings':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'resolved dictionary':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['resolved dictionary', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "selection": null,
                                                                                                "selected dictionary": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'selection': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'selection',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Guaranteed_Value_Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'selected dictionary': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'selected dictionary',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'cyclic':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['cyclic', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Lookup_Selection.type_.l_state.cyclic => {
                                                            switch ($t) {
                                                                case 'siblings':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'parameter':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['parameter', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'resulting dictionary': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'resulting dictionary',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Constraint: t_signatures.Constraint = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "selection": null,
                    "type": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'selection': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'selection',
                        },
                    ),
                    ($) => Relative_Value_Selection(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'type': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Constraint.type_ => {
                                switch ($t) {
                                    case 'state':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['state', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "selected state": null,
                                                                    "option": null,
                                                                },
                                                            ),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'selected state': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'selected state',
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'option': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'option',
                                                                        },
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        ),
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'optional value':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['optional value', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "selected optional value": null,
                                                                },
                                                            ),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'selected optional value': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'selected optional value',
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Option_Constraint_Resolvers: t_signatures.Option_Constraint_Resolvers = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                    ($) => _p.decide.text(
                        $['option']['value'],
                        ($t): t_out.Option_Constraint_Resolvers.l_dictionary.D.l_entry => {
                            switch ($t) {
                                case 'state':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            ),
                                            'l state': ['state', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {
                                                                "selection": null,
                                                                "selected state": null,
                                                                "option": null,
                                                            },
                                                        ),
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        )
                                                        return {
                                                            'selection': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'selection',
                                                                    },
                                                                ),
                                                                ($) => Guaranteed_Value_Selection(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'selected state': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'selected state',
                                                                    },
                                                                ),
                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'option': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'option',
                                                                    },
                                                                ),
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    ),
                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                }),
                                                            ),
                                                        }
                                                    },
                                                ),
                                            )],
                                        }),
                                    )
                                case 'assert is set':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            ),
                                            'l state': ['assert is set', Possible_Value_Selection(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        }),
                                    )
                                default:
                                    return abort(
                                        ['liana', {
                                            'type': ['state', ['unknown option', $['option']['value']]],
                                            'range': v_parse_tree_to_location.Value(
                                                $['value'],
                                            ),
                                        }],
                                    )
                            }
                        },
                    ),
                ),
            }),
        ),
    }),
)

export const Optional_Value_Constraint_Resolvers: t_signatures.Optional_Value_Constraint_Resolvers = ($, abort) => _p.optional.from.optional(
    v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            $,
        ),
    )['optional'],
).map(
    ($) => Value_Constraint_Resolvers(
        $,
        ($) => abort(
            $,
        ),
    ),
)

export const Value_Constraint_Resolvers: t_signatures.Value_Constraint_Resolvers = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': Value_Constraint_Resolver(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            }),
        ),
    }),
)

export const Reference_To_Value_Constraint_Resolver: t_signatures.Reference_To_Value_Constraint_Resolver = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    ),
    'l reference': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            $,
        ),
    ),
})

export const Value_Constraint_Resolver: t_signatures.Value_Constraint_Resolver = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "start": null,
                    "constraint": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'start': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'start',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Value_Constraint_Resolver.start => {
                                switch ($t) {
                                    case 'value':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['value', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'sibling':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['sibling', Reference_To_Value_Constraint_Resolver(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'constraint': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'constraint',
                        },
                    ),
                    ($) => Constraint(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Optional_Value_Initialization => {
            switch ($t) {
                case 'not set':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'set':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['set', Guaranteed_Value_Selection(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'selection':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['selection', Possible_Value_Selection(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Value_Resolver_Group: t_signatures.Value_Resolver_Group = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.dictionary.literal(
                                {
                                    "definition": null,
                                    "resolver": null,
                                },
                            ),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'definition': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'definition',
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'resolver': _p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'resolver',
                                        },
                                    ),
                                    ($) => Value_Resolver(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }
                        },
                    ),
                ),
            }),
        ),
    }),
)

export const Value_Resolver_List_Result: t_signatures.Value_Resolver_List_Result = ($, abort) => Module_Reference(
    $,
    ($) => abort(
        $,
    ),
)

export const Value_Results: t_signatures.Value_Results = ($, abort) => _p.optional.from.optional(
    v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            $,
        ),
    )['optional'],
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                $,
            ),
        ),
        ($) => ({
            'l location': v_parse_tree_to_location.Value(
                $['value'],
            ),
            'l dictionary': _p.dictionary.from.dictionary(
                $['entries'],
            ).map(
                ($, id) => ({
                    'l location': v_parse_tree_to_location.Value(
                        $,
                    ),
                    'l entry': Value_Reference(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                }),
            ),
        }),
    ),
)

export const Option_Constraints: t_signatures.Option_Constraints = ($, abort) => _p.optional.from.optional(
    v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            $,
        ),
    )['optional'],
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                $,
            ),
        ),
        ($) => ({
            'l location': v_parse_tree_to_location.Value(
                $['value'],
            ),
            'l dictionary': _p.dictionary.from.dictionary(
                $['entries'],
            ).map(
                ($, id) => ({
                    'l location': v_parse_tree_to_location.Value(
                        $,
                    ),
                    'l entry': Value_Reference(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                }),
            ),
        }),
    ),
)

export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "start": null,
                    "tail": null,
                    "resulting node": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'start': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'start',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Guaranteed_Value_Selection.start => {
                                switch ($t) {
                                    case 'sibling':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['sibling', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
                                        )
                                    case 'parent sibling':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['parent sibling', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
                                        )
                                    case 'option constraint':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['option constraint', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
                                        )
                                    case 'list cursor':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['list cursor', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'linked entry':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['linked entry', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'constraint':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['constraint', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Guaranteed_Value_Selection.start.l_state.constraint => {
                                                            switch ($t) {
                                                                case 'component':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['component', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "property": null,
                                                                                                "constraint": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'property',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                            'constraint': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'constraint',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'reference':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['reference', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "property": null,
                                                                                                "constraint": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'property',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                            'constraint': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'constraint',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'parameter':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['parameter', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    ),
                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            }),
                                        )
                                    case 'result':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['result', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Guaranteed_Value_Selection.start.l_state.result => {
                                                            switch ($t) {
                                                                case 'list':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['list', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "property": null,
                                                                                                "list result": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'property',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                            'list result': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'list result',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'state':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['state', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "property": null,
                                                                                                "state": null,
                                                                                                "result": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'property',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                            'state': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'state',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'result': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'result',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Module_Reference(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                case 'optional value':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['optional value', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.dictionary.literal(
                                                                                            {
                                                                                                "property": null,
                                                                                                "optional value": null,
                                                                                                "result": null,
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'property',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                    ),
                                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            ),
                                                                                            'optional value': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'optional value',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'result': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'result',
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Module_Reference(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        }
                                                                                    },
                                                                                ),
                                                                            )],
                                                                        }),
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'tail': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'tail',
                        },
                    ),
                    ($) => Relative_Value_Selection(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'resulting node': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'resulting node',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Possible_Value_Selection => {
            switch ($t) {
                case 'parameter':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['parameter', {
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                ),
                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            }],
                        }),
                    )
                case 'result':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['result', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Possible_Value_Selection.l_state.result => {
                                        switch ($t) {
                                            case 'state':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['state', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "property": null,
                                                                            "state": null,
                                                                            "result": null,
                                                                        },
                                                                    ),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'property': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'property',
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                        'state': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'state',
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'result': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'result',
                                                                                },
                                                                            ),
                                                                            ($) => Module_Reference(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            case 'optional value':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['optional value', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.dictionary.literal(
                                                                        {
                                                                            "property": null,
                                                                            "optional value": null,
                                                                            "result": null,
                                                                        },
                                                                    ),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'property': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'property',
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                ),
                                                                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                        'optional value': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'optional value',
                                                                                },
                                                                            ),
                                                                            ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'result': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'result',
                                                                                },
                                                                            ),
                                                                            ($) => Module_Reference(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        ),
                                                    }],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)
