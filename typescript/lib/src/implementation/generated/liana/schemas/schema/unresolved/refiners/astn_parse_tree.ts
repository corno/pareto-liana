
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'

import _p_variables from 'pareto-core/dist/implementation/specials/variables'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/schema/signatures/unresolved/refiners/astn_parse_tree"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/schema/data/unresolved"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Package: t_signatures.Package = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "omit (de)serializer": null,
                    "schema tree": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Boolean(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['true/false', null],
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
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
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
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
            'expected properties': _p.literal.dictionary(
                {
                    "schema imports": null,
                    "resolver imports": null,
                    "globals": null,
                    "modules": null,
                    "complexity": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Schema.complexity => {
                                switch ($t) {
                                    case 'constrained':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.literal.dictionary(
                                {
                                    "schema set child": null,
                                    "schema": null,
                                },
                            ),
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                            'subdocument context': _p.literal.not_set(),
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
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
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
            'expected properties': _p.literal.dictionary(
                {
                    "complexity": null,
                    "text types": null,
                    "simple types": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Globals.complexity => {
                                switch ($t) {
                                    case 'constrained':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
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
                'simple types': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'simple types',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': Simple_Type(
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
            'expected properties': _p.literal.dictionary(
                {
                    "value": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
        $['option']['token']['value'],
        ($t): t_out.Value => {
            switch ($t) {
                case 'component':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['component', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "type": null,
                                                "results": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Value.l_state.component.type_ => {
                                                            switch ($t) {
                                                                case 'external':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['external', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "import": null,
                                                                                                "module": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['internal', {
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
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
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['internal acyclic', {
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['list', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "value": null,
                                                "results": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'simple':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['simple', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Value.l_state.simple => {
                                        switch ($t) {
                                            case 'global':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['global', {
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
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
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['reference', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "referent": null,
                                                "type": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Value.l_state.reference.type_ => {
                                                            switch ($t) {
                                                                case 'derived':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['selected', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "dictionary": null,
                                                                                                "dependency": null,
                                                                                                "results": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                        $['option']['token']['value'],
                                                                                                        ($t): t_out.Value.l_state.reference.type_.l_state.selected.dependency => {
                                                                                                            switch ($t) {
                                                                                                                case 'acyclic':
                                                                                                                    return _p_change_context(
                                                                                                                        $['value'],
                                                                                                                        ($) => ({
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
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
                                                                                                                                {
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
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
                                                                                                                                {
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
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
                                                                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['state', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "options": null,
                                                "results": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                            $['entries'],
                                                        ).map(
                                                            ($, id) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l entry': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': _p.literal.dictionary(
                                                                                {
                                                                                    "constraints": null,
                                                                                    "description": null,
                                                                                    "value": null,
                                                                                },
                                                                            ),
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['text', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Value.l_state.text => {
                                        switch ($t) {
                                            case 'global':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['global', {
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
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
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
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
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
            'expected properties': _p.literal.dictionary(
                {
                    "signatures": null,
                    "modules": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.literal.dictionary(
                                    {
                                        "signatures": null,
                                    },
                                ),
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': _p.literal.not_set(),
                                    },
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
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => Resolver_Signatures(
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
                'modules': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'modules',
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => Resolver_Modules(
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
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.literal.dictionary(
                                {
                                    "schema set child": null,
                                    "resolver": null,
                                },
                            ),
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                            'subdocument context': _p.literal.not_set(),
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

export const Resolver_Signatures: t_signatures.Resolver_Signatures = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
                ),
                'l entry': Resolver_Signature(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            }),
        ),
    }),
)

export const Resolver_Signature_Parameters: t_signatures.Resolver_Signature_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "modules": null,
                    "lookups": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "module": null,
                                                        "presence": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                                'subdocument context': _p.literal.not_set(),
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
                                                                'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l dictionary': _p.dictionary.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l entry': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': _p.literal.dictionary(
                                                    {
                                                        "referent": null,
                                                        "dictionary": null,
                                                        "type": null,
                                                        "presence": null,
                                                    },
                                                ),
                                                'subdocument context': _p.literal.not_set(),
                                            },
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                                'subdocument context': _p.literal.not_set(),
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
                                                                'subdocument context': _p.literal.not_set(),
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
                                                                'subdocument context': _p.literal.not_set(),
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
                                                                $['option']['token']['value'],
                                                                ($t): t_out.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry.type_ => {
                                                                    switch ($t) {
                                                                        case 'cyclic':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
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
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
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
                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
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
                                                                'subdocument context': _p.literal.not_set(),
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

export const Resolver_Value: t_signatures.Resolver_Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Resolver_Value => {
            switch ($t) {
                case 'component':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['component', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "definition": null,
                                                "location": null,
                                                "signature": null,
                                                "arguments": null,
                                                "constraints": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Resolver_Value.l_state.component.location => {
                                                            switch ($t) {
                                                                case 'external':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['external', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "schema import": null,
                                                                                                "resolver import": null,
                                                                                                "signature": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['internal', {
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                                'expected properties': _p.literal.dictionary(
                                                                    {
                                                                        "modules": null,
                                                                        "lookups": null,
                                                                    },
                                                                ),
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        ($) => _p_variables(
                                                            () => {
                                                                
                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
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
                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                        $['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l entry': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry => {
                                                                                                        switch ($t) {
                                                                                                            case 'optional':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['optional', Resolver_Optional_Value_Initialization(
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
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['required', Resolver_Guaranteed_Value_Selection(
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
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['parameter', {
                                                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                                                $,
                                                                                                                                {
                                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                                },
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
                                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                                            $['value'],
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
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
                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $['value'],
                                                                                        {
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                                                        $['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                                {
                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                },
                                                                                            ),
                                                                                            'l entry': _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
                                                                                                        switch ($t) {
                                                                                                            case 'stack':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['stack', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.stack => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'empty':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['push', _p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                            {
                                                                                                                                                                'expected properties': _p.literal.dictionary(
                                                                                                                                                                    {
                                                                                                                                                                        "stack": null,
                                                                                                                                                                        "item": null,
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        ($) => _p_variables(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                    {
                                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                                    },
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
                                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        ($) => Resolver_Lookup_Selection(
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
                                                                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        ($) => Resolver_Lookup_Selection(
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
                                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['acyclic', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.acyclic => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'not set':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['cyclic', _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.cyclic => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'not set':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        'l state': ['selection', Resolver_Lookup_Selection(
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
                                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                                            $['value'],
                                                                                                                            {
                                                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Resolver_Value_Constraints(
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['dictionary', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "definition": null,
                                                "resolver": null,
                                                "benchmark": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Resolver_Value(
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                    ($) => Resolver_Benchmark(
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['group', Resolver_Value_Group(
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['list', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "definition": null,
                                                "resolver": null,
                                                "result": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Resolver_Value(
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                    ($) => Resolver_Value_List_Result(
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )],
                        }),
                    )
                case 'simple':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['simple', v_unmarshalled_from_parse_tree.Nothing(
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['optional', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "constraints": null,
                                                "resolver": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Resolver_Option_Constraints(
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
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Resolver_Value(
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['reference', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "definition": null,
                                                "type": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        'subdocument context': _p.literal.not_set(),
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
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Resolver_Value.l_state.reference.type_ => {
                                                            switch ($t) {
                                                                case 'derived':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['derived', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "value": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Resolver_Guaranteed_Value_Selection(
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
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['selected', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "definition": null,
                                                                                                "lookup": null,
                                                                                                "constraints": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Resolver_Lookup_Selection(
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Resolver_Value_Constraints(
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['state', _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.literal.dictionary(
                                            {
                                                "definition": null,
                                                "options": null,
                                            },
                                        ),
                                        'subdocument context': _p.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.literal.not_set(),
                                            },
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
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'options': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'options',
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l dictionary': _p.dictionary.from.dictionary(
                                                            $['entries'],
                                                        ).map(
                                                            ($, id) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l entry': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': _p.literal.dictionary(
                                                                                {
                                                                                    "constraints": null,
                                                                                    "resolver": null,
                                                                                },
                                                                            ),
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    ($) => Resolver_Option_Constraints(
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
                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                        },
                                                                                    ),
                                                                                    ($) => Resolver_Value(
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
            'expected properties': _p.literal.dictionary(
                {
                    "schema": null,
                    "schema path": null,
                    "complexity": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        'l list': _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
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
                'complexity': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'complexity',
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Module_Specification.complexity => {
                                switch ($t) {
                                    case 'constrained':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['constrained', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.literal.dictionary(
                                                                {
                                                                    "module resolver": null,
                                                                },
                                                            ),
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'module resolver': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'module resolver',
                                                                            'subdocument context': _p.literal.not_set(),
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
                                                )],
                                            }),
                                        )
                                    case 'unconstrained':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['unconstrained', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.literal.dictionary(
                                                                {
                                                                    "module": null,
                                                                },
                                                            ),
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
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
                                                                            'subdocument context': _p.literal.not_set(),
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
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Schema_Tree => {
            switch ($t) {
                case 'schema':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
            'expected properties': _p.literal.dictionary(
                {
                    "type": null,
                    "link": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Text_Type.type_ => {
                                switch ($t) {
                                    case 'multi line':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'link': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'link',
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Text_Type.link => {
                                switch ($t) {
                                    case 'no':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['no', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'yes':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['yes', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.literal.dictionary(
                                                                {
                                                                    "path prefix": null,
                                                                    "path suffix": null,
                                                                },
                                                            ),
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'path prefix': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'path prefix',
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'path suffix': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'path suffix',
                                                                            'subdocument context': _p.literal.not_set(),
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
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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

export const Simple_Type: t_signatures.Simple_Type = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "type": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Simple_Type.type_ => {
                                switch ($t) {
                                    case 'boolean':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            }),
                                        )
                                    case 'date':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['date', v_unmarshalled_from_parse_tree.Nothing(
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['number', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.literal.dictionary(
                                                                {
                                                                    "precision": null,
                                                                },
                                                            ),
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
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
                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            $['option']['token']['value'],
                                                                            ($t): t_out.Simple_Type.type_.l_state.number_.precision => {
                                                                                switch ($t) {
                                                                                    case 'approximation':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                'l state': ['approximation', _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                {
                                                                                                                    "significant digits": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                },
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
                                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => v_unmarshalled_from_parse_tree.Number(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'type': ['decimal', null],
                                                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                'l state': ['exact', _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': _p.literal.dictionary(
                                                                                                                {
                                                                                                                    "number of fractional digits": null,
                                                                                                                    "type": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => _p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                                {
                                                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                                                },
                                                                                                            )
                                                                                                            return {
                                                                                                                'number of fractional digits': _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'number of fractional digits',
                                                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                                                                'subdocument context': _p.literal.not_set(),
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
                                                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                                                                            $['option']['token']['value'],
                                                                                                                            ($t): t_out.Simple_Type.type_.l_state.number_.precision.l_state.exact.type_ => {
                                                                                                                                switch ($t) {
                                                                                                                                    case 'integer':
                                                                                                                                        return _p_change_context(
                                                                                                                                            $['value'],
                                                                                                                                            ($) => ({
                                                                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                                                                    $,
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                                                                    $['value'],
                                                                                                                                                    {
                                                                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                                                                    },
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
                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
            'expected properties': _p.literal.dictionary(
                {
                    "root value": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
        $['option']['token']['value'],
        ($t): t_out.Presence => {
            switch ($t) {
                case 'optional':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Resolver_Modules: t_signatures.Resolver_Modules = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.literal.dictionary(
                                {
                                    "signature": null,
                                    "root value resolver": null,
                                },
                            ),
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                            'subdocument context': _p.literal.not_set(),
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
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => Resolver_Value(
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

export const Resolver_Benchmark: t_signatures.Resolver_Benchmark = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "selection": null,
                    "resulting dictionary": null,
                    "dense": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => Resolver_Guaranteed_Value_Selection(
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
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Boolean(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['true/false', null],
                            'subdocument context': _p.literal.not_set(),
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
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.literal.dictionary(
                                {
                                    "description": null,
                                    "value": null,
                                },
                            ),
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                            'subdocument context': _p.literal.not_set(),
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
                                            'subdocument context': _p.literal.not_set(),
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
            'expected properties': _p.literal.dictionary(
                {
                    "module": null,
                    "path": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
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
            'expected properties': _p.literal.dictionary(
                {
                    "tail": null,
                    "resulting node": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        'l list': _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l item': _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['token']['value'],
                                            ($t): t_out.Value_Path.tail.l_list.L.l_item => {
                                                switch ($t) {
                                                    case 'dictionary':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
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
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l state': ['group', {
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
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
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
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
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
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
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l state': ['state', {
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
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
                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                'range': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
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
                            'subdocument context': _p.literal.not_set(),
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
            'expected properties': _p.literal.dictionary(
                {
                    "location": null,
                    "resulting module": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Module_Reference.location => {
                                switch ($t) {
                                    case 'internal':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['internal', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['external', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.literal.dictionary(
                                                                {
                                                                    "import": null,
                                                                    "module": null,
                                                                },
                                                            ),
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
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
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
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
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                            'subdocument context': _p.literal.not_set(),
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

export const Resolver_Signature: t_signatures.Resolver_Signature = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "module": null,
                    "parameters": null,
                    "resolved parameters": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Resolver_Signature.parameters => {
                                switch ($t) {
                                    case 'local':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['local', Resolver_Signature_Parameters(
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['same as', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                            'subdocument context': _p.literal.not_set(),
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

export const Resolver_Relative_Value_Selection: t_signatures.Resolver_Relative_Value_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "path": null,
                    "resulting node": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                            {
                                'subdocument context': _p.literal.not_set(),
                            },
                        ),
                        'l list': _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                        {
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    'l item': _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => _p.decide.text(
                                            $['option']['token']['value'],
                                            ($t): t_out.Resolver_Relative_Value_Selection.path.l_list.L.l_item => {
                                                switch ($t) {
                                                    case 'component':
                                                        return _p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
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
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l state': ['group', {
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
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
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                'l state': ['reference', _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': _p.literal.dictionary(
                                                                                {
                                                                                    "definition": null,
                                                                                },
                                                                            ),
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                'range': v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                    {
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
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
                            'subdocument context': _p.literal.not_set(),
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

export const Resolver_Lookup_Selection: t_signatures.Resolver_Lookup_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "type": null,
                    "resulting dictionary": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Resolver_Lookup_Selection.type_ => {
                                switch ($t) {
                                    case 'acyclic':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['acyclic', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Resolver_Lookup_Selection.type_.l_state.acyclic => {
                                                            switch ($t) {
                                                                case 'siblings':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['resolved dictionary', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "selection": null,
                                                                                                "selected dictionary": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Resolver_Guaranteed_Value_Selection(
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['cyclic', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Resolver_Lookup_Selection.type_.l_state.cyclic => {
                                                            switch ($t) {
                                                                case 'siblings':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['parameter', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                            'subdocument context': _p.literal.not_set(),
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

export const Resolver_Constraint: t_signatures.Resolver_Constraint = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "selection": null,
                    "type": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => Resolver_Relative_Value_Selection(
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Resolver_Constraint.type_ => {
                                switch ($t) {
                                    case 'state':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['state', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.literal.dictionary(
                                                                {
                                                                    "selected state": null,
                                                                    "option": null,
                                                                },
                                                            ),
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
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
                                                                            'subdocument context': _p.literal.not_set(),
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
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                            {
                                                                                'subdocument context': _p.literal.not_set(),
                                                                            },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['optional value', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.literal.dictionary(
                                                                {
                                                                    "selected optional value": null,
                                                                },
                                                            ),
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
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
                                                                            'subdocument context': _p.literal.not_set(),
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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

export const Resolver_Option_Constraints: t_signatures.Resolver_Option_Constraints = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                    ($) => _p.decide.text(
                        $['option']['token']['value'],
                        ($t): t_out.Resolver_Option_Constraints.l_dictionary.D.l_entry => {
                            switch ($t) {
                                case 'state':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            'l state': ['state', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.literal.dictionary(
                                                            {
                                                                "selection": null,
                                                                "selected state": null,
                                                                "option": null,
                                                            },
                                                        ),
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
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
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Resolver_Guaranteed_Value_Selection(
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
                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
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
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            'l state': ['assert is set', Resolver_Possible_Value_Selection(
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
                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                            'range': v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': _p.literal.not_set(),
                                                },
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

export const Resolver_Optional_Value_Constraints: t_signatures.Resolver_Optional_Value_Constraints = ($, abort) => _p.optional.from.optional(
    v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            $,
        ),
    )['optional'],
).map(
    ($) => Resolver_Value_Constraints(
        $,
        ($) => abort(
            $,
        ),
    ),
)

export const Resolver_Value_Constraints: t_signatures.Resolver_Value_Constraints = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
                ),
                'l entry': Resolver_Value_Constraint(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            }),
        ),
    }),
)

export const Resolver_Reference_To_Value_Constraint: t_signatures.Resolver_Reference_To_Value_Constraint = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    'l reference': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            $,
        ),
    ),
})

export const Resolver_Value_Constraint: t_signatures.Resolver_Value_Constraint = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "start": null,
                    "constraint": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Resolver_Value_Constraint.start => {
                                switch ($t) {
                                    case 'value':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['sibling', Resolver_Reference_To_Value_Constraint(
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => Resolver_Constraint(
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

export const Resolver_Optional_Value_Initialization: t_signatures.Resolver_Optional_Value_Initialization = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Resolver_Optional_Value_Initialization => {
            switch ($t) {
                case 'not set':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['set', Resolver_Guaranteed_Value_Selection(
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['selection', Resolver_Possible_Value_Selection(
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Resolver_Value_Group: t_signatures.Resolver_Value_Group = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $['value'],
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        'l dictionary': _p.dictionary.from.dictionary(
            $['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                    {
                        'subdocument context': _p.literal.not_set(),
                    },
                ),
                'l entry': _p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': _p.literal.dictionary(
                                {
                                    "definition": null,
                                    "resolver": null,
                                },
                            ),
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => _p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
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
                                            'subdocument context': _p.literal.not_set(),
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
                                            'subdocument context': _p.literal.not_set(),
                                        },
                                    ),
                                    ($) => Resolver_Value(
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

export const Resolver_Value_List_Result: t_signatures.Resolver_Value_List_Result = ($, abort) => Module_Reference(
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
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        ($) => ({
            'l location': v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            ),
            'l dictionary': _p.dictionary.from.dictionary(
                $['entries'],
            ).map(
                ($, id) => ({
                    'l location': v_parse_tree_to_location.Value(
                        $,
                        {
                            'subdocument context': _p.literal.not_set(),
                        },
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
            {
                'subdocument context': _p.literal.not_set(),
            },
        ),
        ($) => ({
            'l location': v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
            ),
            'l dictionary': _p.dictionary.from.dictionary(
                $['entries'],
            ).map(
                ($, id) => ({
                    'l location': v_parse_tree_to_location.Value(
                        $,
                        {
                            'subdocument context': _p.literal.not_set(),
                        },
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

export const Resolver_Guaranteed_Value_Selection: t_signatures.Resolver_Guaranteed_Value_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "start": null,
                    "tail": null,
                    "resulting node": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Resolver_Guaranteed_Value_Selection.start => {
                                switch ($t) {
                                    case 'sibling':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['sibling', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['parent sibling', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['option constraint', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['constraint', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Resolver_Guaranteed_Value_Selection.start.l_state.constraint => {
                                                            switch ($t) {
                                                                case 'component':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['component', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "constraint": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['reference', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "constraint": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['parameter', {
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                        {
                                                            'subdocument context': _p.literal.not_set(),
                                                        },
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
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                ),
                                                'l state': ['result', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Resolver_Guaranteed_Value_Selection.start.l_state.result => {
                                                            switch ($t) {
                                                                case 'list':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['list', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "list result": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['state', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "state": null,
                                                                                                "result": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            'l state': ['optional value', _p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': _p.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "optional value": null,
                                                                                                "result": null,
                                                                                            },
                                                                                        ),
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                            {
                                                                                                'subdocument context': _p.literal.not_set(),
                                                                                            },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                        $,
                                                                                                        {
                                                                                                            'subdocument context': _p.literal.not_set(),
                                                                                                        },
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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
                            'subdocument context': _p.literal.not_set(),
                        },
                    ),
                    ($) => Resolver_Relative_Value_Selection(
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
                            'subdocument context': _p.literal.not_set(),
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

export const Resolver_Possible_Value_Selection: t_signatures.Resolver_Possible_Value_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Resolver_Possible_Value_Selection => {
            switch ($t) {
                case 'parameter':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['parameter', {
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                    {
                                        'subdocument context': _p.literal.not_set(),
                                    },
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
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                            'l state': ['result', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => _p.decide.text(
                                    $['option']['token']['value'],
                                    ($t): t_out.Resolver_Possible_Value_Selection.l_state.result => {
                                        switch ($t) {
                                            case 'state':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['state', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {
                                                                            "property": null,
                                                                            "state": null,
                                                                            "result": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
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
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
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
                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
                                                        ),
                                                        'l state': ['optional value', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': _p.literal.dictionary(
                                                                        {
                                                                            "property": null,
                                                                            "optional value": null,
                                                                            "result": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                        {
                                                                            'subdocument context': _p.literal.not_set(),
                                                                        },
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
                                                                                    'subdocument context': _p.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => ({
                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                    $,
                                                                                    {
                                                                                        'subdocument context': _p.literal.not_set(),
                                                                                    },
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
                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                                                    'subdocument context': _p.literal.not_set(),
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
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                        'range': v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.literal.not_set(),
                                                            },
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
