
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/schema/unmarshall"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/schema/data/unresolved"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

export const Schemas: t_signatures.Schemas = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': Schema_Tree(
                $,
                ($) => abort(
                    $,
                ),
            ),
        }),
    ),
})

export const Schema: t_signatures.Schema = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'imports': _p_change_context(
            $.__get_entry_deprecated(
                'imports',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "imports"],
                    ),
                },
            ),
            ($) => Imports(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'globals': _p_change_context(
            $.__get_entry_deprecated(
                'globals',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "globals"],
                    ),
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
            $.__get_entry_deprecated(
                'modules',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "modules"],
                    ),
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
            $.__get_entry_deprecated(
                'complexity',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "complexity"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
                                        'l state': ['constrained', Resolve_Logic(
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
                                        )['start']['relative'],
                                        'l state': ['unconstrained', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        )],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
    }),
)

export const Imports: t_signatures.Imports = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'schema set child': _p_change_context(
                        $.__get_entry_deprecated(
                            'schema set child',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "schema set child"],
                                ),
                            },
                        ),
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        }),
                    ),
                    'schema': _p_change_context(
                        $.__get_entry_deprecated(
                            'schema',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "schema"],
                                ),
                            },
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        ),
                    ),
                }),
            ),
        }),
    ),
})

export const Modules: t_signatures.Modules = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': Module(
                $,
                ($) => abort(
                    $,
                ),
            ),
        }),
    ),
})

export const Globals: t_signatures.Globals = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'complexity': _p_change_context(
            $.__get_entry_deprecated(
                'complexity',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "complexity"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
                                        'l state': ['constrained', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
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
                                        )['start']['relative'],
                                        'l state': ['unconstrained', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        )],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
        'text types': _p_change_context(
            $.__get_entry_deprecated(
                'text types',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "text types"],
                    ),
                },
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
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
        'number types': _p_change_context(
            $.__get_entry_deprecated(
                'number types',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "number types"],
                    ),
                },
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
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
    }),
)

export const Dictionary: t_signatures.Dictionary = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'value': _p_change_context(
            $.__get_entry_deprecated(
                'value',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "value"],
                    ),
                },
            ),
            ($) => Value(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Value: t_signatures.Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
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
                            )['start']['relative'],
                            'l state': ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
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
                            )['start']['relative'],
                            'l state': ['component', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'type': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'type',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "type"],
                                                ),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['external', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'import': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'import',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "import"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                            'module': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'module',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "module"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'internal':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['internal', {
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['internal acyclic', {
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        ),
                                                                    }],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                    ),
                                    'results': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'results',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "results"],
                                                ),
                                            },
                                        ),
                                        ($) => Value_Results(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'dictionary':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
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
                            )['start']['relative'],
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
                            )['start']['relative'],
                            'l state': ['list', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'value': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'value',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "value"],
                                                ),
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
                                        $.__get_entry_deprecated(
                                            'results',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "results"],
                                                ),
                                            },
                                        ),
                                        ($) => Value_Results(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'nothing':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
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
                            )['start']['relative'],
                            'l state': ['number', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                        )['start']['relative'],
                                                        'l state': ['global', {
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null],
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
                                                        )['start']['relative'],
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
                                                    ['unknown option', $['option']['value']],
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
                            )['start']['relative'],
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
                            )['start']['relative'],
                            'l state': ['reference', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'referent': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'referent',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "referent"],
                                                ),
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
                                        $.__get_entry_deprecated(
                                            'type',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "type"],
                                                ),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['derived', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a nothing', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['selected', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'dictionary': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'dictionary',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "dictionary"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'dependency': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'dependency',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "dependency"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => _p_change_context(
                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a state', null],
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
                                                                                                            )['start']['relative'],
                                                                                                            'l state': ['acyclic', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a nothing', null],
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
                                                                                                            )['start']['relative'],
                                                                                                            'l state': ['cyclic', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a nothing', null],
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
                                                                                                            )['start']['relative'],
                                                                                                            'l state': ['stack', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a nothing', null],
                                                                                                                ),
                                                                                                            )],
                                                                                                        }),
                                                                                                    )
                                                                                                default:
                                                                                                    return abort(
                                                                                                        ['unknown option', $['option']['value']],
                                                                                                    )
                                                                                            }
                                                                                        },
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'state':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['state', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'options': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'options',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "options"],
                                                ),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l dictionary': _p.dictionary.from.dictionary(
                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a dictionary', null],
                                                    ),
                                                ),
                                            ).map(
                                                ($, id) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l entry': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'constraints': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'constraints',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "constraints"],
                                                                        ),
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
                                                                $.__get_entry_deprecated(
                                                                    'description',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "description"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => _p.optional.from.optional(
                                                                    v_unmarshalled_from_parse_tree.Optional(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected an optional', null],
                                                                        ),
                                                                    ),
                                                                ).map(
                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a text', null],
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                            'value': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'value',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "value"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => Value(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        }),
                                    ),
                                    'results': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'results',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "results"],
                                                ),
                                            },
                                        ),
                                        ($) => Value_Results(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'text':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['text', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                        )['start']['relative'],
                                                        'l state': ['global', {
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $,
                                                            )['start']['relative'],
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null],
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
                                                        )['start']['relative'],
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
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Signatures: t_signatures.Signatures = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': Signature(
                $,
                ($) => abort(
                    $,
                ),
            ),
        }),
    ),
})

export const Signature_Parameters: t_signatures.Signature_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'modules': _p_change_context(
            $.__get_entry_deprecated(
                'modules',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "modules"],
                    ),
                },
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'module': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'module',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "module"],
                                            ),
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
                                    $.__get_entry_deprecated(
                                        'presence',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "presence"],
                                            ),
                                        },
                                    ),
                                    ($) => Presence(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
        'lookups': _p_change_context(
            $.__get_entry_deprecated(
                'lookups',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "lookups"],
                    ),
                },
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l dictionary': _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l entry': _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'referent': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'referent',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "referent"],
                                            ),
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
                                    $.__get_entry_deprecated(
                                        'dictionary',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "dictionary"],
                                            ),
                                        },
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null],
                                        ),
                                    ),
                                ),
                                'type': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'type',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "type"],
                                            ),
                                        },
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.State(
                                            $,
                                            ($) => abort(
                                                ['expected a state', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['cyclic', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['acyclic', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
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
                                                                )['start']['relative'],
                                                                'l state': ['stack', v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return abort(
                                                            ['unknown option', $['option']['value']],
                                                        )
                                                }
                                            },
                                        ),
                                    ),
                                ),
                                'presence': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'presence',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "presence"],
                                            ),
                                        },
                                    ),
                                    ($) => Presence(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }),
                ),
            }),
        ),
    }),
)

export const Value_Resolver: t_signatures.Value_Resolver = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
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
                            )['start']['relative'],
                            'l state': ['boolean', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
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
                            )['start']['relative'],
                            'l state': ['component', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'definition': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'definition',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "definition"],
                                                ),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        ),
                                    ),
                                    'location': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'location',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "location"],
                                                ),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['external', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'import': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'import',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "import"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                            'signature': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'signature',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "signature"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'internal':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['internal', {
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        ),
                                                                    }],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                    ),
                                    'signature': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'signature',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "signature"],
                                                ),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        ),
                                    ),
                                    'arguments': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'arguments',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "arguments"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.optional.from.optional(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Group(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a group', null],
                                                    ),
                                                ),
                                                ($) => ({
                                                    'modules': _p_change_context(
                                                        $.__get_entry_deprecated(
                                                            'modules',
                                                            {
                                                                no_such_entry: ($) => abort(
                                                                    ['no such entry', "modules"],
                                                                ),
                                                            },
                                                        ),
                                                        ($) => _p.optional.from.optional(
                                                            v_unmarshalled_from_parse_tree.Optional(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected an optional', null],
                                                                ),
                                                            ),
                                                        ).map(
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a dictionary', null],
                                                                        ),
                                                                    ),
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null],
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
                                                                                                    )['start']['relative'],
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
                                                                                                    )['start']['relative'],
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
                                                                                                    )['start']['relative'],
                                                                                                    'l state': ['parameter', {
                                                                                                        'l location': v_parse_tree_to_location.Value(
                                                                                                            $,
                                                                                                        )['start']['relative'],
                                                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    }],
                                                                                                }),
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']],
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
                                                    'lookups': _p_change_context(
                                                        $.__get_entry_deprecated(
                                                            'lookups',
                                                            {
                                                                no_such_entry: ($) => abort(
                                                                    ['no such entry', "lookups"],
                                                                ),
                                                            },
                                                        ),
                                                        ($) => _p.optional.from.optional(
                                                            v_unmarshalled_from_parse_tree.Optional(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected an optional', null],
                                                                ),
                                                            ),
                                                        ).map(
                                                            ($) => ({
                                                                'l location': v_parse_tree_to_location.Value(
                                                                    $,
                                                                )['start']['relative'],
                                                                'l dictionary': _p.dictionary.from.dictionary(
                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a dictionary', null],
                                                                        ),
                                                                    ),
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l entry': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null],
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
                                                                                                    )['start']['relative'],
                                                                                                    'l state': ['stack', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a state', null],
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
                                                                                                                                )['start']['relative'],
                                                                                                                                'l state': ['empty', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a nothing', null],
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
                                                                                                                                )['start']['relative'],
                                                                                                                                'l state': ['push', _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            ['expected a group', null],
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                    ($) => ({
                                                                                                                                        'stack': _p_change_context(
                                                                                                                                            $.__get_entry_deprecated(
                                                                                                                                                'stack',
                                                                                                                                                {
                                                                                                                                                    no_such_entry: ($) => abort(
                                                                                                                                                        ['no such entry', "stack"],
                                                                                                                                                    ),
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
                                                                                                                                            $.__get_entry_deprecated(
                                                                                                                                                'item',
                                                                                                                                                {
                                                                                                                                                    no_such_entry: ($) => abort(
                                                                                                                                                        ['no such entry', "item"],
                                                                                                                                                    ),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => Lookup_Selection(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                    }),
                                                                                                                                )],
                                                                                                                            }),
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return abort(
                                                                                                                            ['unknown option', $['option']['value']],
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
                                                                                                    )['start']['relative'],
                                                                                                    'l state': ['acyclic', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a state', null],
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
                                                                                                                                )['start']['relative'],
                                                                                                                                'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a nothing', null],
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            }),
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return abort(
                                                                                                                            ['unknown option', $['option']['value']],
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
                                                                                                    )['start']['relative'],
                                                                                                    'l state': ['cyclic', _p_change_context(
                                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a state', null],
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
                                                                                                                                )['start']['relative'],
                                                                                                                                'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        ['expected a nothing', null],
                                                                                                                                    ),
                                                                                                                                )],
                                                                                                                            }),
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return abort(
                                                                                                                            ['unknown option', $['option']['value']],
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
                                                                                                    )['start']['relative'],
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
                                                                                                ['unknown option', $['option']['value']],
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
                                                }),
                                            ),
                                        ),
                                    ),
                                    'constraints': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'constraints',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "constraints"],
                                                ),
                                            },
                                        ),
                                        ($) => Value_Constraint_Resolvers(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'dictionary':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['dictionary', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'definition': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'definition',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "definition"],
                                                ),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        ),
                                    ),
                                    'resolver': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'resolver',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "resolver"],
                                                ),
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
                                        $.__get_entry_deprecated(
                                            'benchmark',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "benchmark"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.optional.from.optional(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => Benchmark(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'group':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
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
                            )['start']['relative'],
                            'l state': ['list', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'definition': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'definition',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "definition"],
                                                ),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        ),
                                    ),
                                    'resolver': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'resolver',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "resolver"],
                                                ),
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
                                        $.__get_entry_deprecated(
                                            'result',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "result"],
                                                ),
                                            },
                                        ),
                                        ($) => _p.optional.from.optional(
                                            v_unmarshalled_from_parse_tree.Optional(
                                                $,
                                                ($) => abort(
                                                    ['expected an optional', null],
                                                ),
                                            ),
                                        ).map(
                                            ($) => Value_Resolver_List_Result(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'nothing':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
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
                            )['start']['relative'],
                            'l state': ['number', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
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
                            )['start']['relative'],
                            'l state': ['optional', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'constraints': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'constraints',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "constraints"],
                                                ),
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
                                        $.__get_entry_deprecated(
                                            'resolver',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "resolver"],
                                                ),
                                            },
                                        ),
                                        ($) => Value_Resolver(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'reference':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['reference', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'definition': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'definition',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "definition"],
                                                ),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        ),
                                    ),
                                    'type': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'type',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "type"],
                                                ),
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['derived', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'value': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'value',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "value"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => Guaranteed_Value_Selection(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'selected':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['selected', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'definition': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'definition',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "definition"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'lookup': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'lookup',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "lookup"],
                                                                                        ),
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
                                                                                $.__get_entry_deprecated(
                                                                                    'constraints',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "constraints"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => Value_Constraint_Resolvers(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        ),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'state':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['state', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'definition': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'definition',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "definition"],
                                                ),
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        ),
                                    ),
                                    'states': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'states',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "states"],
                                                ),
                                            },
                                        ),
                                        ($) => ({
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l dictionary': _p.dictionary.from.dictionary(
                                                v_unmarshalled_from_parse_tree.Dictionary(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a dictionary', null],
                                                    ),
                                                ),
                                            ).map(
                                                ($, id) => ({
                                                    'l location': v_parse_tree_to_location.Value(
                                                        $,
                                                    )['start']['relative'],
                                                    'l entry': _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'constraints': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'constraints',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "constraints"],
                                                                        ),
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
                                                                $.__get_entry_deprecated(
                                                                    'resolver',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "resolver"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => Value_Resolver(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        }),
                                    ),
                                }),
                            )],
                        }),
                    )
                case 'text':
                    return _p_change_context(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $,
                            )['start']['relative'],
                            'l state': ['text', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Module_Specification: t_signatures.Module_Specification = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'schema': _p_change_context(
            $.__get_entry_deprecated(
                'schema',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "schema"],
                    ),
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
            $.__get_entry_deprecated(
                'schema path',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "schema path"],
                    ),
                },
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l list': _p.list.from.list(
                    v_unmarshalled_from_parse_tree.List(
                        $,
                        ($) => abort(
                            ['expected a list', null],
                        ),
                    ),
                ).map(
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l item': v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                ['expected a text', null],
                            ),
                        ),
                    }),
                ),
            }),
        ),
        'module': _p_change_context(
            $.__get_entry_deprecated(
                'module',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "module"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
    }),
)

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
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
                            )['start']['relative'],
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
                            )['start']['relative'],
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
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Resolve_Logic: t_signatures.Resolve_Logic = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'signatures': _p_change_context(
            $.__get_entry_deprecated(
                'signatures',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "signatures"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'signatures': _p_change_context(
                        $.__get_entry_deprecated(
                            'signatures',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "signatures"],
                                ),
                            },
                        ),
                        ($) => Signatures(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                }),
            ),
        ),
        'resolvers': _p_change_context(
            $.__get_entry_deprecated(
                'resolvers',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "resolvers"],
                    ),
                },
            ),
            ($) => Module_Resolvers(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Text_Type: t_signatures.Text_Type = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'type': _p_change_context(
            $.__get_entry_deprecated(
                'type',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "type"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
                                        'l state': ['multi line', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
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
                                        )['start']['relative'],
                                        'l state': ['single line', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        )],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
    }),
)

export const Number_Type: t_signatures.Number_Type = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'precision': _p_change_context(
            $.__get_entry_deprecated(
                'precision',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "precision"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
                                        'l state': ['approximation', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'significant digits': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'significant digits',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "significant digits"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => v_deserialize_number.deserialize(
                                                        _p_list_from_text(
                                                            v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null],
                                                                ),
                                                            ),
                                                            ($) => $,
                                                        ),
                                                        ($) => abort(
                                                            ['not a valid number', null],
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        )],
                                    }),
                                )
                            case 'exact':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l state': ['exact', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'decimal separator offset': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'decimal separator offset',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "decimal separator offset"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => _p.optional.from.optional(
                                                        v_unmarshalled_from_parse_tree.Optional(
                                                            $,
                                                            ($) => abort(
                                                                ['expected an optional', null],
                                                            ),
                                                        ),
                                                    ).map(
                                                        ($) => v_deserialize_number.deserialize(
                                                            _p_list_from_text(
                                                                v_unmarshalled_from_parse_tree.Text(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a text', null],
                                                                    ),
                                                                ),
                                                                ($) => $,
                                                            ),
                                                            ($) => abort(
                                                                ['not a valid number', null],
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                                'type': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'type',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "type"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => _p_change_context(
                                                        v_unmarshalled_from_parse_tree.State(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a state', null],
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
                                                                                )['start']['relative'],
                                                                                'l state': ['integer', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
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
                                                                                )['start']['relative'],
                                                                                'l state': ['natural', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
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
                                                                                )['start']['relative'],
                                                                                'l state': ['positive natural', v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                )],
                                                                            }),
                                                                        )
                                                                    default:
                                                                        return abort(
                                                                            ['unknown option', $['option']['value']],
                                                                        )
                                                                }
                                                            },
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        )],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
    }),
)

export const Module: t_signatures.Module = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'root value': _p_change_context(
            $.__get_entry_deprecated(
                'root value',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "root value"],
                    ),
                },
            ),
            ($) => Value(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Presence: t_signatures.Presence = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
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
                            )['start']['relative'],
                            'l state': ['optional', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
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
                            )['start']['relative'],
                            'l state': ['required', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Module_Resolvers: t_signatures.Module_Resolvers = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'signature': _p_change_context(
                        $.__get_entry_deprecated(
                            'signature',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "signature"],
                                ),
                            },
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        ),
                    ),
                    'root value resolver': _p_change_context(
                        $.__get_entry_deprecated(
                            'root value resolver',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "root value resolver"],
                                ),
                            },
                        ),
                        ($) => Value_Resolver(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                }),
            ),
        }),
    ),
})

export const Benchmark: t_signatures.Benchmark = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'selection': _p_change_context(
            $.__get_entry_deprecated(
                'selection',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "selection"],
                    ),
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
            $.__get_entry_deprecated(
                'resulting dictionary',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "resulting dictionary"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null],
                ),
            ),
        ),
        'dense': _p_change_context(
            $.__get_entry_deprecated(
                'dense',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "dense"],
                    ),
                },
            ),
            ($) => v_deserialize_boolean.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid boolean', null],
                ),
            ),
        ),
    }),
)

export const Group: t_signatures.Group = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'description': _p_change_context(
                        $.__get_entry_deprecated(
                            'description',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "description"],
                                ),
                            },
                        ),
                        ($) => _p.optional.from.optional(
                            v_unmarshalled_from_parse_tree.Optional(
                                $,
                                ($) => abort(
                                    ['expected an optional', null],
                                ),
                            ),
                        ).map(
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                    ),
                    'value': _p_change_context(
                        $.__get_entry_deprecated(
                            'value',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "value"],
                                ),
                            },
                        ),
                        ($) => Value(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                }),
            ),
        }),
    ),
})

export const Value_Reference: t_signatures.Value_Reference = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'module': _p_change_context(
            $.__get_entry_deprecated(
                'module',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "module"],
                    ),
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
            $.__get_entry_deprecated(
                'path',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "path"],
                    ),
                },
            ),
            ($) => Value_Path(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Value_Path: t_signatures.Value_Path = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'tail': _p_change_context(
            $.__get_entry_deprecated(
                'tail',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "tail"],
                    ),
                },
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l list': _p.list.from.list(
                    v_unmarshalled_from_parse_tree.List(
                        $,
                        ($) => abort(
                            ['expected a list', null],
                        ),
                    ),
                ).map(
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l item': _p_change_context(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    ['expected a state', null],
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
                                                    )['start']['relative'],
                                                    'l state': ['dictionary', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
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
                                                    )['start']['relative'],
                                                    'l state': ['group', {
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
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
                                                    )['start']['relative'],
                                                    'l state': ['list', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
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
                                                    )['start']['relative'],
                                                    'l state': ['optional', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
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
                                                    )['start']['relative'],
                                                    'l state': ['state', {
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    }],
                                                }),
                                            )
                                        default:
                                            return abort(
                                                ['unknown option', $['option']['value']],
                                            )
                                    }
                                },
                            ),
                        ),
                    }),
                ),
            }),
        ),
        'resulting node': _p_change_context(
            $.__get_entry_deprecated(
                'resulting node',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "resulting node"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null],
                ),
            ),
        ),
    }),
)

export const Module_Reference: t_signatures.Module_Reference = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'location': _p_change_context(
            $.__get_entry_deprecated(
                'location',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "location"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
                                        'l state': ['internal', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
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
                                        )['start']['relative'],
                                        'l state': ['external', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'import': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'import',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "import"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                                'module': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'module',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "module"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        )],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
        'resulting module': _p_change_context(
            $.__get_entry_deprecated(
                'resulting module',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "resulting module"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null],
                ),
            ),
        ),
    }),
)

export const Signature: t_signatures.Signature = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'module': _p_change_context(
            $.__get_entry_deprecated(
                'module',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "module"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null],
                ),
            ),
        ),
        'parameters': _p_change_context(
            $.__get_entry_deprecated(
                'parameters',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "parameters"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
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
                                        )['start']['relative'],
                                        'l state': ['same as', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                        }],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
        'resolved parameters': _p_change_context(
            $.__get_entry_deprecated(
                'resolved parameters',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "resolved parameters"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null],
                ),
            ),
        ),
    }),
)

export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'path': _p_change_context(
            $.__get_entry_deprecated(
                'path',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "path"],
                    ),
                },
            ),
            ($) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l list': _p.list.from.list(
                    v_unmarshalled_from_parse_tree.List(
                        $,
                        ($) => abort(
                            ['expected a list', null],
                        ),
                    ),
                ).map(
                    ($) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $,
                        )['start']['relative'],
                        'l item': _p_change_context(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    ['expected a state', null],
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
                                                    )['start']['relative'],
                                                    'l state': ['component', v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
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
                                                    )['start']['relative'],
                                                    'l state': ['group', {
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
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
                                                    )['start']['relative'],
                                                    'l state': ['reference', _p_change_context(
                                                        v_unmarshalled_from_parse_tree.Group(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a group', null],
                                                            ),
                                                        ),
                                                        ($) => ({
                                                            'definition': _p_change_context(
                                                                $.__get_entry_deprecated(
                                                                    'definition',
                                                                    {
                                                                        no_such_entry: ($) => abort(
                                                                            ['no such entry', "definition"],
                                                                        ),
                                                                    },
                                                                ),
                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                    $,
                                                                    ($) => abort(
                                                                        ['expected a nothing', null],
                                                                    ),
                                                                ),
                                                            ),
                                                        }),
                                                    )],
                                                }),
                                            )
                                        default:
                                            return abort(
                                                ['unknown option', $['option']['value']],
                                            )
                                    }
                                },
                            ),
                        ),
                    }),
                ),
            }),
        ),
        'resulting node': _p_change_context(
            $.__get_entry_deprecated(
                'resulting node',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "resulting node"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null],
                ),
            ),
        ),
    }),
)

export const Lookup_Selection: t_signatures.Lookup_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'type': _p_change_context(
            $.__get_entry_deprecated(
                'type',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "type"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
                                        'l state': ['acyclic', _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a nothing', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['resolved dictionary', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'selection': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'selection',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "selection"],
                                                                                        ),
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
                                                                                $.__get_entry_deprecated(
                                                                                    'selected dictionary',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "selected dictionary"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
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
                                        )['start']['relative'],
                                        'l state': ['cyclic', _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['siblings', v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a nothing', null],
                                                                        ),
                                                                    )],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
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
                                        )['start']['relative'],
                                        'l state': ['parameter', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                        }],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
        'resulting dictionary': _p_change_context(
            $.__get_entry_deprecated(
                'resulting dictionary',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "resulting dictionary"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null],
                ),
            ),
        ),
    }),
)

export const Constraint: t_signatures.Constraint = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'selection': _p_change_context(
            $.__get_entry_deprecated(
                'selection',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "selection"],
                    ),
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
            $.__get_entry_deprecated(
                'type',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "type"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
                                        'l state': ['state', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'selected state': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'selected state',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "selected state"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    ),
                                                ),
                                                'option': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'option',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "option"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        )],
                                    }),
                                )
                            case 'optional value':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l state': ['optional value', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'selected optional value': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'selected optional value',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "selected optional value"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    ),
                                                ),
                                            }),
                                        )],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
    }),
)

export const Option_Constraint_Resolvers: t_signatures.Option_Constraint_Resolvers = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
                                        'l state': ['state', _p_change_context(
                                            v_unmarshalled_from_parse_tree.Group(
                                                $,
                                                ($) => abort(
                                                    ['expected a group', null],
                                                ),
                                            ),
                                            ($) => ({
                                                'selection': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'selection',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "selection"],
                                                            ),
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
                                                    $.__get_entry_deprecated(
                                                        'selected state',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "selected state"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a nothing', null],
                                                        ),
                                                    ),
                                                ),
                                                'option': _p_change_context(
                                                    $.__get_entry_deprecated(
                                                        'option',
                                                        {
                                                            no_such_entry: ($) => abort(
                                                                ['no such entry', "option"],
                                                            ),
                                                        },
                                                    ),
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                            $,
                                                            ($) => abort(
                                                                ['expected a text', null],
                                                            ),
                                                        ),
                                                    }),
                                                ),
                                            }),
                                        )],
                                    }),
                                )
                            case 'assert is set':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
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
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        }),
    ),
})

export const Value_Constraint_Resolvers: t_signatures.Value_Constraint_Resolvers = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': Value_Constraint_Resolver(
                $,
                ($) => abort(
                    $,
                ),
            ),
        }),
    ),
})

export const Reference_To_Value_Constraint_Resolver: t_signatures.Reference_To_Value_Constraint_Resolver = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l reference': v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null],
        ),
    ),
})

export const Value_Constraint_Resolver: t_signatures.Value_Constraint_Resolver = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'start': _p_change_context(
            $.__get_entry_deprecated(
                'start',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "start"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
                    ),
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Value_Constraint_Resolver.start => {
                        switch ($t) {
                            case 'property':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $,
                                        )['start']['relative'],
                                        'l state': ['property', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
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
                                        )['start']['relative'],
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
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
        'constraint': _p_change_context(
            $.__get_entry_deprecated(
                'constraint',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "constraint"],
                    ),
                },
            ),
            ($) => Constraint(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
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
                            )['start']['relative'],
                            'l state': ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null],
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
                            )['start']['relative'],
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
                            )['start']['relative'],
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
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)

export const Value_Resolver_Group: t_signatures.Value_Resolver_Group = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $,
    )['start']['relative'],
    'l dictionary': _p.dictionary.from.dictionary(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null],
            ),
        ),
    ).map(
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $,
            )['start']['relative'],
            'l entry': _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'definition': _p_change_context(
                        $.__get_entry_deprecated(
                            'definition',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "definition"],
                                ),
                            },
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        ),
                    ),
                    'resolver': _p_change_context(
                        $.__get_entry_deprecated(
                            'resolver',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "resolver"],
                                ),
                            },
                        ),
                        ($) => Value_Resolver(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                }),
            ),
        }),
    ),
})

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
            ['expected an optional', null],
        ),
    ),
).map(
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $,
        )['start']['relative'],
        'l dictionary': _p.dictionary.from.dictionary(
            v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null],
                ),
            ),
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l entry': Value_Reference(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            }),
        ),
    }),
)

export const Option_Constraints: t_signatures.Option_Constraints = ($, abort) => _p.optional.from.optional(
    v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            ['expected an optional', null],
        ),
    ),
).map(
    ($) => ({
        'l location': v_parse_tree_to_location.Value(
            $,
        )['start']['relative'],
        'l dictionary': _p.dictionary.from.dictionary(
            v_unmarshalled_from_parse_tree.Dictionary(
                $,
                ($) => abort(
                    ['expected a dictionary', null],
                ),
            ),
        ).map(
            ($, id) => ({
                'l location': v_parse_tree_to_location.Value(
                    $,
                )['start']['relative'],
                'l entry': Value_Reference(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            }),
        ),
    }),
)

export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'start': _p_change_context(
            $.__get_entry_deprecated(
                'start',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "start"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
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
                                        )['start']['relative'],
                                        'l state': ['sibling', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
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
                                        )['start']['relative'],
                                        'l state': ['parent sibling', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
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
                                        )['start']['relative'],
                                        'l state': ['option constraint', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
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
                                        )['start']['relative'],
                                        'l state': ['list cursor', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
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
                                        )['start']['relative'],
                                        'l state': ['linked entry', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
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
                                        )['start']['relative'],
                                        'l state': ['constraint', _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['component', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'property': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'property',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "property"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                            'constraint': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'constraint',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "constraint"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'reference':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['reference', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'property': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'property',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "property"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                            'constraint': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'constraint',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "constraint"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
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
                                        )['start']['relative'],
                                        'l state': ['parameter', {
                                            'l location': v_parse_tree_to_location.Value(
                                                $,
                                            )['start']['relative'],
                                            'l reference': v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
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
                                        )['start']['relative'],
                                        'l state': ['result', _p_change_context(
                                            v_unmarshalled_from_parse_tree.State(
                                                $,
                                                ($) => abort(
                                                    ['expected a state', null],
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
                                                                    )['start']['relative'],
                                                                    'l state': ['list', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'property': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'property',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "property"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                            'list result': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'list result',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "list result"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'state':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['state', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'property': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'property',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "property"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                            'state': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'state',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "state"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'result': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'result',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "result"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => Module_Reference(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        case 'optional value':
                                                            return _p_change_context(
                                                                $['value'],
                                                                ($) => ({
                                                                    'l location': v_parse_tree_to_location.Value(
                                                                        $,
                                                                    )['start']['relative'],
                                                                    'l state': ['optional value', _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.Group(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a group', null],
                                                                            ),
                                                                        ),
                                                                        ($) => ({
                                                                            'property': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'property',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "property"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => ({
                                                                                    'l location': v_parse_tree_to_location.Value(
                                                                                        $,
                                                                                    )['start']['relative'],
                                                                                    'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                }),
                                                                            ),
                                                                            'optional value': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'optional value',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "optional value"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected a nothing', null],
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                            'result': _p_change_context(
                                                                                $.__get_entry_deprecated(
                                                                                    'result',
                                                                                    {
                                                                                        no_such_entry: ($) => abort(
                                                                                            ['no such entry', "result"],
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                ($) => Module_Reference(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                }),
                                                            )
                                                        default:
                                                            return abort(
                                                                ['unknown option', $['option']['value']],
                                                            )
                                                    }
                                                },
                                            ),
                                        )],
                                    }),
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
        'tail': _p_change_context(
            $.__get_entry_deprecated(
                'tail',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "tail"],
                    ),
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
            $.__get_entry_deprecated(
                'resulting node',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "resulting node"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Nothing(
                $,
                ($) => abort(
                    ['expected a nothing', null],
                ),
            ),
        ),
    }),
)

export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
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
                            )['start']['relative'],
                            'l state': ['parameter', {
                                'l location': v_parse_tree_to_location.Value(
                                    $,
                                )['start']['relative'],
                                'l reference': v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
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
                            )['start']['relative'],
                            'l state': ['result', _p_change_context(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null],
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
                                                        )['start']['relative'],
                                                        'l state': ['state', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'property': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'property',
                                                                        {
                                                                            no_such_entry: ($) => abort(
                                                                                ['no such entry', "property"],
                                                                            ),
                                                                        },
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                                'state': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'state',
                                                                        {
                                                                            no_such_entry: ($) => abort(
                                                                                ['no such entry', "state"],
                                                                            ),
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a nothing', null],
                                                                        ),
                                                                    ),
                                                                ),
                                                                'result': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'result',
                                                                        {
                                                                            no_such_entry: ($) => abort(
                                                                                ['no such entry', "result"],
                                                                            ),
                                                                        },
                                                                    ),
                                                                    ($) => Module_Reference(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }),
                                                        )],
                                                    }),
                                                )
                                            case 'optional value':
                                                return _p_change_context(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $,
                                                        )['start']['relative'],
                                                        'l state': ['optional value', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'property': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'property',
                                                                        {
                                                                            no_such_entry: ($) => abort(
                                                                                ['no such entry', "property"],
                                                                            ),
                                                                        },
                                                                    ),
                                                                    ($) => ({
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $,
                                                                        )['start']['relative'],
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a text', null],
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ),
                                                                'optional value': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'optional value',
                                                                        {
                                                                            no_such_entry: ($) => abort(
                                                                                ['no such entry', "optional value"],
                                                                            ),
                                                                        },
                                                                    ),
                                                                    ($) => v_unmarshalled_from_parse_tree.Nothing(
                                                                        $,
                                                                        ($) => abort(
                                                                            ['expected a nothing', null],
                                                                        ),
                                                                    ),
                                                                ),
                                                                'result': _p_change_context(
                                                                    $.__get_entry_deprecated(
                                                                        'result',
                                                                        {
                                                                            no_such_entry: ($) => abort(
                                                                                ['no such entry', "result"],
                                                                            ),
                                                                        },
                                                                    ),
                                                                    ($) => Module_Reference(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            }),
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']],
                                                )
                                        }
                                    },
                                ),
                            )],
                        }),
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)
