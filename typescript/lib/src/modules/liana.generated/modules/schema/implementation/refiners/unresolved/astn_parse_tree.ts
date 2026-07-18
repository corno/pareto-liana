
import * as p_ from 'pareto-core/implementation/refiner'
import * as p_di from 'pareto-core/interface/schema'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as t_signatures from "../../../declarations/refiners/unresolved/astn_parse_tree.js"

import * as s_out from "../../../schemas/unresolved.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/modules/value_unmarshalling/implementation/refiners/unmarshalled_value/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/modules/deserialization/implementation/transformers/parse_tree/start_token_range"

export const Package: t_signatures.Package = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "omit (de)serializer": null,
                    "schema tree": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'omit (de)serializer': p_change_context(
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
                'schema tree': p_change_context(
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

export const Schemas: t_signatures.Schemas = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
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

export const Schema: t_signatures.Schema = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
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
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'schema imports': p_change_context(
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
                'resolver imports': p_change_context(
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
                'globals': p_change_context(
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
                'modules': p_change_context(
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
                'complexity': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'complexity',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Schema.complexity => {
                                switch ($t) {
                                    case 'constrained':
                                        return p_change_context(
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
                                        return p_change_context(
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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

export const Schema_Imports: t_signatures.Schema_Imports = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': p_.literal.dictionary(
                                {
                                    "schema set child": null,
                                    "schema": null,
                                },
                            ),
                            
                        },
                    ),
                    ($) => p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'schema set child': p_change_context(
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
                                'schema': p_change_context(
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

export const Modules: t_signatures.Modules = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
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

export const Globals: t_signatures.Globals = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "complexity": null,
                    "text types": null,
                    "simple types": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'complexity': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'complexity',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Globals.complexity => {
                                switch ($t) {
                                    case 'constrained':
                                        return p_change_context(
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
                                        return p_change_context(
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                'text types': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'text types',
                            
                        },
                    ),
                    ($) => p_change_context(
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
                            'l dictionary': p_.from.dictionary($['entries'],
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
                'simple types': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'simple types',
                            
                        },
                    ),
                    ($) => p_change_context(
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
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
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

export const Dictionary: t_signatures.Dictionary = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "value": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'value': p_change_context(
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

export const Value: t_signatures.Value = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): s_out.Value => {
            switch ($t) {
                case 'component':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['component', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "type": null,
                                                "results": null,
                                            },
                                        ),
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'type': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Value.l_state.component.type_ => {
                                                            switch ($t) {
                                                                case 'external':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['external', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "import": null,
                                                                                                "module": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'import': p_change_context(
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
                                                                                            'module': p_change_context(
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
                                                                    return p_change_context(
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
                                                                    return p_change_context(
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                            'results': p_change_context(
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
                    return p_change_context(
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
                    return p_change_context(
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['list', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "value": null,
                                                "results": null,
                                            },
                                        ),
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'value': p_change_context(
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
                                            'results': p_change_context(
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
                    return p_change_context(
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
                case 'simple':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['simple', p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => p_decide_text(
                                    $['option']['token']['value'],
                                    ($t): s_out.Value.l_state.simple => {
                                        switch ($t) {
                                            case 'global':
                                                return p_change_context(
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
                                            default:
                                                return abort(
                                                    ['liana', {
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                    return p_change_context(
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['reference', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "referent": null,
                                                "type": null,
                                            },
                                        ),
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'referent': p_change_context(
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
                                            'type': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Value.l_state.reference.type_ => {
                                                            switch ($t) {
                                                                case 'derived':
                                                                    return p_change_context(
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['selected', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "dictionary": null,
                                                                                                "dependency": null,
                                                                                                "results": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'dictionary': p_change_context(
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
                                                                                            'dependency': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'dependency',
                                                                                                        
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => p_decide_text(
                                                                                                        $['option']['token']['value'],
                                                                                                        ($t): s_out.Value.l_state.reference.type_.l_state.selected.dependency => {
                                                                                                            switch ($t) {
                                                                                                                case 'acyclic':
                                                                                                                    return p_change_context(
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
                                                                                                                    return p_change_context(
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
                                                                                                                    return p_change_context(
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
                                                                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                                                                            'results': p_change_context(
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['state', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "options": null,
                                                "results": null,
                                            },
                                        ),
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'options': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'options',
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
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
                                                        'l dictionary': p_.from.dictionary($['entries'],
                                                        ).map(
                                                            ($, id) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l entry': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': p_.literal.dictionary(
                                                                                {
                                                                                    "constraints": null,
                                                                                    "description": null,
                                                                                    "value": null,
                                                                                },
                                                                            ),
                                                                            
                                                                        },
                                                                    ),
                                                                    ($) => p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            )
                                                                            return {
                                                                                'constraints': p_change_context(
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
                                                                                'description': p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'description',
                                                                                            
                                                                                        },
                                                                                    ),
                                                                                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                                                'value': p_change_context(
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
                                            'results': p_change_context(
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['text', p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => p_decide_text(
                                    $['option']['token']['value'],
                                    ($t): s_out.Value.l_state.text => {
                                        switch ($t) {
                                            case 'global':
                                                return p_change_context(
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
                                                return p_change_context(
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
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Resolver: t_signatures.Resolver = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "signatures": null,
                    "modules": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'signatures': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'signatures',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': p_.literal.dictionary(
                                    {
                                        "signatures": null,
                                    },
                                ),
                                
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                )
                                return {
                                    'signatures': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'signatures',
                                                
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
                'modules': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'modules',
                            
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

export const Resolver_Imports: t_signatures.Resolver_Imports = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': p_.literal.dictionary(
                                {
                                    "schema set child": null,
                                    "resolver": null,
                                },
                            ),
                            
                        },
                    ),
                    ($) => p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'schema set child': p_change_context(
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
                                'resolver': p_change_context(
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

export const Resolver_Signatures: t_signatures.Resolver_Signatures = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
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

export const Resolver_Signature_Parameters: t_signatures.Resolver_Signature_Parameters = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "modules": null,
                    "lookups": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'modules': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'modules',
                            
                        },
                    ),
                    ($) => p_change_context(
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
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "module": null,
                                                        "presence": null,
                                                    },
                                                ),
                                                
                                            },
                                        ),
                                        ($) => p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                )
                                                return {
                                                    'module': p_change_context(
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
                                                    'presence': p_change_context(
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
                'lookups': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'lookups',
                            
                        },
                    ),
                    ($) => p_change_context(
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
                            'l dictionary': p_.from.dictionary($['entries'],
                            ).map(
                                ($, id) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l entry': p_change_context(
                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'expected properties': p_.literal.dictionary(
                                                    {
                                                        "referent": null,
                                                        "dictionary": null,
                                                        "type": null,
                                                        "presence": null,
                                                    },
                                                ),
                                                
                                            },
                                        ),
                                        ($) => p_variables(
                                            () => {
                                                
                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                )
                                                return {
                                                    'referent': p_change_context(
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
                                                    'dictionary': p_change_context(
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
                                                    'type': p_change_context(
                                                        v_unmarshalled_from_parse_tree.Property(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'id': 'type',
                                                                
                                                            },
                                                        ),
                                                        ($) => p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                            ),
                                                            ($) => p_decide_text(
                                                                $['option']['token']['value'],
                                                                ($t): s_out.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry.type_ => {
                                                                    switch ($t) {
                                                                        case 'cyclic':
                                                                            return p_change_context(
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
                                                                            return p_change_context(
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
                                                                            return p_change_context(
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
                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                                    'presence': p_change_context(
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

export const Resolver_Value: t_signatures.Resolver_Value = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): s_out.Resolver_Value => {
            switch ($t) {
                case 'component':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['component', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
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
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': p_change_context(
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
                                            'location': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'location',
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Resolver_Value.l_state.component.location => {
                                                            switch ($t) {
                                                                case 'external':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['external', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "schema import": null,
                                                                                                "resolver import": null,
                                                                                                "signature": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'schema import': p_change_context(
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
                                                                                            'resolver import': p_change_context(
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
                                                                                            'signature': p_change_context(
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
                                                                    return p_change_context(
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                            'signature': p_change_context(
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
                                            'arguments': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'arguments',
                                                        
                                                    },
                                                ),
                                                ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    )['optional'],
                                                ).map(
                                                    ($) => p_change_context(
                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            {
                                                                'expected properties': p_.literal.dictionary(
                                                                    {
                                                                        "modules": null,
                                                                        "lookups": null,
                                                                    },
                                                                ),
                                                                
                                                            },
                                                        ),
                                                        ($) => p_variables(
                                                            () => {
                                                                
                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                    $['value'],
                                                                )
                                                                return {
                                                                    'modules': p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'modules',
                                                                                
                                                                            },
                                                                        ),
                                                                        ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )['optional'],
                                                                        ).map(
                                                                            ($) => p_change_context(
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
                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            ),
                                                                                            'l entry': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => p_decide_text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): s_out.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry => {
                                                                                                        switch ($t) {
                                                                                                            case 'optional':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
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
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
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
                                                                                                                return p_change_context(
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
                                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                                                    'lookups': p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                            {
                                                                                'id': 'lookups',
                                                                                
                                                                            },
                                                                        ),
                                                                        ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            )['optional'],
                                                                        ).map(
                                                                            ($) => p_change_context(
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
                                                                                    'l dictionary': p_.from.dictionary($['entries'],
                                                                                    ).map(
                                                                                        ($, id) => ({
                                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                                $,
                                                                                            ),
                                                                                            'l entry': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => p_decide_text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): s_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry => {
                                                                                                        switch ($t) {
                                                                                                            case 'stack':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['stack', p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => p_decide_text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): s_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.stack => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'empty':
                                                                                                                                            return p_change_context(
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
                                                                                                                                            return p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ({
                                                                                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    'l state': ['push', p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                            {
                                                                                                                                                                'expected properties': p_.literal.dictionary(
                                                                                                                                                                    {
                                                                                                                                                                        "stack": null,
                                                                                                                                                                        "item": null,
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        ($) => p_variables(
                                                                                                                                                            () => {
                                                                                                                                                                
                                                                                                                                                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                    $['value'],
                                                                                                                                                                )
                                                                                                                                                                return {
                                                                                                                                                                    'stack': p_change_context(
                                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            {
                                                                                                                                                                                'id': 'stack',
                                                                                                                                                                                
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        ($) => Resolver_Lookup_Selection(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    'item': p_change_context(
                                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                            $,
                                                                                                                                                                            ($) => abort(
                                                                                                                                                                                $,
                                                                                                                                                                            ),
                                                                                                                                                                            {
                                                                                                                                                                                'id': 'item',
                                                                                                                                                                                
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
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['acyclic', p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => p_decide_text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): s_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.acyclic => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'not set':
                                                                                                                                            return p_change_context(
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
                                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        'l state': ['cyclic', p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    $,
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => p_decide_text(
                                                                                                                                $['option']['token']['value'],
                                                                                                                                ($t): s_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.cyclic => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'not set':
                                                                                                                                            return p_change_context(
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
                                                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ({
                                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                                            $,
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
                                            'constraints': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'constraints',
                                                        
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['dictionary', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "definition": null,
                                                "resolver": null,
                                                "benchmark": null,
                                            },
                                        ),
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': p_change_context(
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
                                            'resolver': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'resolver',
                                                        
                                                    },
                                                ),
                                                ($) => Resolver_Value(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'benchmark': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'benchmark',
                                                        
                                                    },
                                                ),
                                                ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['list', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "definition": null,
                                                "resolver": null,
                                                "result": null,
                                            },
                                        ),
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': p_change_context(
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
                                            'resolver': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'resolver',
                                                        
                                                    },
                                                ),
                                                ($) => Resolver_Value(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'result': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'result',
                                                        
                                                    },
                                                ),
                                                ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                    return p_change_context(
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
                case 'simple':
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['optional', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "constraints": null,
                                                "resolver": null,
                                            },
                                        ),
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'constraints': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'constraints',
                                                        
                                                    },
                                                ),
                                                ($) => Resolver_Option_Constraints(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'resolver': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'resolver',
                                                        
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['reference', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "definition": null,
                                                "type": null,
                                            },
                                        ),
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': p_change_context(
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
                                            'type': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Resolver_Value.l_state.reference.type_ => {
                                                            switch ($t) {
                                                                case 'derived':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['derived', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "value": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'value': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'value',
                                                                                                        
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['selected', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "definition": null,
                                                                                                "lookup": null,
                                                                                                "constraints": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'definition': p_change_context(
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
                                                                                            'lookup': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'lookup',
                                                                                                        
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Resolver_Lookup_Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'constraints': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'constraints',
                                                                                                        
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['state', p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "definition": null,
                                                "options": null,
                                            },
                                        ),
                                        
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'definition': p_change_context(
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
                                            'options': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'options',
                                                        
                                                    },
                                                ),
                                                ($) => p_change_context(
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
                                                        'l dictionary': p_.from.dictionary($['entries'],
                                                        ).map(
                                                            ($, id) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l entry': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': p_.literal.dictionary(
                                                                                {
                                                                                    "constraints": null,
                                                                                    "resolver": null,
                                                                                },
                                                                            ),
                                                                            
                                                                        },
                                                                    ),
                                                                    ($) => p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            )
                                                                            return {
                                                                                'constraints': p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'constraints',
                                                                                            
                                                                                        },
                                                                                    ),
                                                                                    ($) => Resolver_Option_Constraints(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'resolver': p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                        {
                                                                                            'id': 'resolver',
                                                                                            
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
                    return p_change_context(
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Module_Specification: t_signatures.Module_Specification = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "schema": null,
                    "schema path": null,
                    "complexity": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'schema': p_change_context(
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
                'schema path': p_change_context(
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
                        'l list': p_.from.list(v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['items'],
                        ).map(
                            ($) => p_change_context(
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
                'complexity': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'complexity',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Module_Specification.complexity => {
                                switch ($t) {
                                    case 'constrained':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['constrained', p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "module resolver": null,
                                                                },
                                                            ),
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'module resolver': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'module resolver',
                                                                            
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
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['unconstrained', p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "module": null,
                                                                },
                                                            ),
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'module': p_change_context(
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
                                                )],
                                            }),
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): s_out.Schema_Tree => {
            switch ($t) {
                case 'schema':
                    return p_change_context(
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
                    return p_change_context(
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Text_Type: t_signatures.Text_Type = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "type": null,
                    "link": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'type': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Text_Type.type_ => {
                                switch ($t) {
                                    case 'multi line':
                                        return p_change_context(
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
                                        return p_change_context(
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                'link': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'link',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Text_Type.link => {
                                switch ($t) {
                                    case 'no':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
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
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['yes', p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "path prefix": null,
                                                                    "path suffix": null,
                                                                },
                                                            ),
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'path prefix': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'path prefix',
                                                                            
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'path suffix': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'path suffix',
                                                                            
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

export const Simple_Type: t_signatures.Simple_Type = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "type": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'type': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Simple_Type.type_ => {
                                switch ($t) {
                                    case 'boolean':
                                        return p_change_context(
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
                                    case 'date':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
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
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['number', p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "precision": null,
                                                                },
                                                            ),
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'precision': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'precision',
                                                                            
                                                                        },
                                                                    ),
                                                                    ($) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        ($) => p_decide_text(
                                                                            $['option']['token']['value'],
                                                                            ($t): s_out.Simple_Type.type_.l_state.number_.precision => {
                                                                                switch ($t) {
                                                                                    case 'approximation':
                                                                                        return p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l state': ['approximation', p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "significant digits": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                            )
                                                                                                            return {
                                                                                                                'significant digits': p_change_context(
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
                                                                                        return p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ({
                                                                                                'l location': v_parse_tree_to_location.Value(
                                                                                                    $,
                                                                                                ),
                                                                                                'l state': ['exact', p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                        {
                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "number of fractional digits": null,
                                                                                                                    "type": null,
                                                                                                                },
                                                                                                            ),
                                                                                                            
                                                                                                        },
                                                                                                    ),
                                                                                                    ($) => p_variables(
                                                                                                        () => {
                                                                                                            
                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                $['value'],
                                                                                                            )
                                                                                                            return {
                                                                                                                'number of fractional digits': p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'number of fractional digits',
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                                                                                'type': p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'id': 'type',
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => p_decide_text(
                                                                                                                            $['option']['token']['value'],
                                                                                                                            ($t): s_out.Simple_Type.type_.l_state.number_.precision.l_state.exact.type_ => {
                                                                                                                                switch ($t) {
                                                                                                                                    case 'integer':
                                                                                                                                        return p_change_context(
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
                                                                                                                                        return p_change_context(
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
                                                                                                                                        return p_change_context(
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
                                                                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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

export const Module: t_signatures.Module = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "root value": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'root value': p_change_context(
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

export const Presence: t_signatures.Presence = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): s_out.Presence => {
            switch ($t) {
                case 'optional':
                    return p_change_context(
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
                    return p_change_context(
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Resolver_Modules: t_signatures.Resolver_Modules = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': p_.literal.dictionary(
                                {
                                    "signature": null,
                                    "root value resolver": null,
                                },
                            ),
                            
                        },
                    ),
                    ($) => p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'signature': p_change_context(
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
                                'root value resolver': p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'root value resolver',
                                            
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

export const Resolver_Benchmark: t_signatures.Resolver_Benchmark = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "selection": null,
                    "resulting dictionary": null,
                    "dense": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'selection': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'selection',
                            
                        },
                    ),
                    ($) => Resolver_Guaranteed_Value_Selection(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'resulting dictionary': p_change_context(
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
                'dense': p_change_context(
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

export const Group: t_signatures.Group = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': p_.literal.dictionary(
                                {
                                    "description": null,
                                    "value": null,
                                },
                            ),
                            
                        },
                    ),
                    ($) => p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'description': p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'description',
                                            
                                        },
                                    ),
                                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                'value': p_change_context(
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

export const Value_Reference: t_signatures.Value_Reference = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "module": null,
                    "path": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'module': p_change_context(
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
                'path': p_change_context(
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

export const Value_Path: t_signatures.Value_Path = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "tail": null,
                    "resulting node": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'tail': p_change_context(
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
                        'l list': p_.from.list(v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['items'],
                        ).map(
                            ($) => p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l item': p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => p_decide_text(
                                            $['option']['token']['value'],
                                            ($t): s_out.Value_Path.tail.l_list.L.l_item => {
                                                switch ($t) {
                                                    case 'dictionary':
                                                        return p_change_context(
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
                                                        return p_change_context(
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
                                                        return p_change_context(
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
                                                        return p_change_context(
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
                                                        return p_change_context(
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
                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                'resulting node': p_change_context(
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

export const Module_Reference: t_signatures.Module_Reference = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "location": null,
                    "resulting module": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'location': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'location',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Module_Reference.location => {
                                switch ($t) {
                                    case 'internal':
                                        return p_change_context(
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
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['external', p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "import": null,
                                                                    "module": null,
                                                                },
                                                            ),
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'import': p_change_context(
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
                                                                'module': p_change_context(
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                'resulting module': p_change_context(
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

export const Resolver_Signature: t_signatures.Resolver_Signature = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "module": null,
                    "parameters": null,
                    "resolved parameters": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'module': p_change_context(
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
                'parameters': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'parameters',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Resolver_Signature.parameters => {
                                switch ($t) {
                                    case 'local':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
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
                                        return p_change_context(
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                'resolved parameters': p_change_context(
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

export const Resolver_Relative_Value_Selection: t_signatures.Resolver_Relative_Value_Selection = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "path": null,
                    "resulting node": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'path': p_change_context(
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
                        'l list': p_.from.list(v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['items'],
                        ).map(
                            ($) => p_change_context(
                                $['value'],
                                ($) => ({
                                    'l location': v_parse_tree_to_location.Value(
                                        $,
                                    ),
                                    'l item': p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => p_decide_text(
                                            $['option']['token']['value'],
                                            ($t): s_out.Resolver_Relative_Value_Selection.path.l_list.L.l_item => {
                                                switch ($t) {
                                                    case 'component':
                                                        return p_change_context(
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
                                                        return p_change_context(
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
                                                        return p_change_context(
                                                            $['value'],
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                ),
                                                                'l state': ['reference', p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'expected properties': p_.literal.dictionary(
                                                                                {
                                                                                    "definition": null,
                                                                                },
                                                                            ),
                                                                            
                                                                        },
                                                                    ),
                                                                    ($) => p_variables(
                                                                        () => {
                                                                            
                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                            )
                                                                            return {
                                                                                'definition': p_change_context(
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
                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                'resulting node': p_change_context(
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

export const Resolver_Lookup_Selection: t_signatures.Resolver_Lookup_Selection = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "type": null,
                    "resulting dictionary": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'type': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Resolver_Lookup_Selection.type_ => {
                                switch ($t) {
                                    case 'acyclic':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['acyclic', p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Resolver_Lookup_Selection.type_.l_state.acyclic => {
                                                            switch ($t) {
                                                                case 'siblings':
                                                                    return p_change_context(
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['resolved dictionary', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "selection": null,
                                                                                                "selected dictionary": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'selection': p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'id': 'selection',
                                                                                                        
                                                                                                    },
                                                                                                ),
                                                                                                ($) => Resolver_Guaranteed_Value_Selection(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                            'selected dictionary': p_change_context(
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['cyclic', p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Resolver_Lookup_Selection.type_.l_state.cyclic => {
                                                            switch ($t) {
                                                                case 'siblings':
                                                                    return p_change_context(
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                        return p_change_context(
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                'resulting dictionary': p_change_context(
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

export const Resolver_Constraint: t_signatures.Resolver_Constraint = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "selection": null,
                    "type": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'selection': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'selection',
                            
                        },
                    ),
                    ($) => Resolver_Relative_Value_Selection(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'type': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Resolver_Constraint.type_ => {
                                switch ($t) {
                                    case 'state':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['state', p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "selected state": null,
                                                                    "option": null,
                                                                },
                                                            ),
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'selected state': p_change_context(
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
                                                                'option': p_change_context(
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
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['optional value', p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "selected optional value": null,
                                                                },
                                                            ),
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'selected optional value': p_change_context(
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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

export const Resolver_Option_Constraints: t_signatures.Resolver_Option_Constraints = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                    ($) => p_decide_text(
                        $['option']['token']['value'],
                        ($t): s_out.Resolver_Option_Constraints.l_dictionary.D.l_entry => {
                            switch ($t) {
                                case 'state':
                                    return p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            ),
                                            'l state': ['state', p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': p_.literal.dictionary(
                                                            {
                                                                "selection": null,
                                                                "selected state": null,
                                                                "option": null,
                                                            },
                                                        ),
                                                        
                                                    },
                                                ),
                                                ($) => p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                        )
                                                        return {
                                                            'selection': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'selection',
                                                                        
                                                                    },
                                                                ),
                                                                ($) => Resolver_Guaranteed_Value_Selection(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'selected state': p_change_context(
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
                                                            'option': p_change_context(
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
                                    return p_change_context(
                                        $['value'],
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
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

export const Resolver_Optional_Value_Constraints: t_signatures.Resolver_Optional_Value_Constraints = ($, abort) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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

export const Resolver_Value_Constraints: t_signatures.Resolver_Value_Constraints = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
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
    ),
    'l reference': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            $,
        ),
    ),
})

export const Resolver_Value_Constraint: t_signatures.Resolver_Value_Constraint = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "start": null,
                    "constraint": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'start': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'start',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Resolver_Value_Constraint.start => {
                                switch ($t) {
                                    case 'value':
                                        return p_change_context(
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
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
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
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
                'constraint': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'constraint',
                            
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

export const Resolver_Optional_Value_Initialization: t_signatures.Resolver_Optional_Value_Initialization = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): s_out.Resolver_Optional_Value_Initialization => {
            switch ($t) {
                case 'not set':
                    return p_change_context(
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
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
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Resolver_Value_Group: t_signatures.Resolver_Value_Group = ($, abort) => p_change_context(
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
        'l dictionary': p_.from.dictionary($['entries'],
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                ),
                'l entry': p_change_context(
                    v_unmarshalled_from_parse_tree.Verbose_Group(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'expected properties': p_.literal.dictionary(
                                {
                                    "definition": null,
                                    "resolver": null,
                                },
                            ),
                            
                        },
                    ),
                    ($) => p_variables(
                        () => {
                            
                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                $['value'],
                            )
                            return {
                                'definition': p_change_context(
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
                                'resolver': p_change_context(
                                    v_unmarshalled_from_parse_tree.Property(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'id': 'resolver',
                                            
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

export const Value_Results: t_signatures.Value_Results = ($, abort) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            $,
        ),
    )['optional'],
).map(
    ($) => p_change_context(
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
            'l dictionary': p_.from.dictionary($['entries'],
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

export const Option_Constraints: t_signatures.Option_Constraints = ($, abort) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            $,
        ),
    )['optional'],
).map(
    ($) => p_change_context(
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
            'l dictionary': p_.from.dictionary($['entries'],
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

export const Resolver_Guaranteed_Value_Selection: t_signatures.Resolver_Guaranteed_Value_Selection = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "start": null,
                    "tail": null,
                    "resulting node": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'start': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'start',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_decide_text(
                            $['option']['token']['value'],
                            ($t): s_out.Resolver_Guaranteed_Value_Selection.start => {
                                switch ($t) {
                                    case 'sibling':
                                        return p_change_context(
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
                                        return p_change_context(
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
                                        return p_change_context(
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
                                        return p_change_context(
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
                                        return p_change_context(
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
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['constraint', p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Resolver_Guaranteed_Value_Selection.start.l_state.constraint => {
                                                            switch ($t) {
                                                                case 'component':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['component', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "constraint": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': p_change_context(
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
                                                                                            'constraint': p_change_context(
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['reference', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "constraint": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': p_change_context(
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
                                                                                            'constraint': p_change_context(
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                        return p_change_context(
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
                                        return p_change_context(
                                            $['value'],
                                            ($) => ({
                                                'l location': v_parse_tree_to_location.Value(
                                                    $,
                                                ),
                                                'l state': ['result', p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_decide_text(
                                                        $['option']['token']['value'],
                                                        ($t): s_out.Resolver_Guaranteed_Value_Selection.start.l_state.result => {
                                                            switch ($t) {
                                                                case 'list':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['list', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "list result": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': p_change_context(
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
                                                                                            'list result': p_change_context(
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['state', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "state": null,
                                                                                                "result": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': p_change_context(
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
                                                                                            'state': p_change_context(
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
                                                                                            'result': p_change_context(
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
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ({
                                                                            'l location': v_parse_tree_to_location.Value(
                                                                                $,
                                                                            ),
                                                                            'l state': ['optional value', p_change_context(
                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'expected properties': p_.literal.dictionary(
                                                                                            {
                                                                                                "property": null,
                                                                                                "optional value": null,
                                                                                                "result": null,
                                                                                            },
                                                                                        ),
                                                                                        
                                                                                    },
                                                                                ),
                                                                                ($) => p_variables(
                                                                                    () => {
                                                                                        
                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                            $['value'],
                                                                                        )
                                                                                        return {
                                                                                            'property': p_change_context(
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
                                                                                            'optional value': p_change_context(
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
                                                                                            'result': p_change_context(
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
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                'tail': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'tail',
                            
                        },
                    ),
                    ($) => Resolver_Relative_Value_Selection(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'resulting node': p_change_context(
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

export const Resolver_Possible_Value_Selection: t_signatures.Resolver_Possible_Value_Selection = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_decide_text(
        $['option']['token']['value'],
        ($t): s_out.Resolver_Possible_Value_Selection => {
            switch ($t) {
                case 'parameter':
                    return p_change_context(
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
                    return p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            ),
                            'l state': ['result', p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                                ($) => p_decide_text(
                                    $['option']['token']['value'],
                                    ($t): s_out.Resolver_Possible_Value_Selection.l_state.result => {
                                        switch ($t) {
                                            case 'state':
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['state', p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "property": null,
                                                                            "state": null,
                                                                            "result": null,
                                                                        },
                                                                    ),
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'property': p_change_context(
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
                                                                        'state': p_change_context(
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
                                                                        'result': p_change_context(
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
                                                return p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        ),
                                                        'l state': ['optional value', p_change_context(
                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                $,
                                                                ($) => abort(
                                                                    $,
                                                                ),
                                                                {
                                                                    'expected properties': p_.literal.dictionary(
                                                                        {
                                                                            "property": null,
                                                                            "optional value": null,
                                                                            "result": null,
                                                                        },
                                                                    ),
                                                                    
                                                                },
                                                            ),
                                                            ($) => p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'property': p_change_context(
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
                                                                        'optional value': p_change_context(
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
                                                                        'result': p_change_context(
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
                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)
