
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/schema/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Schemas: t_signatures.Schemas = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => Schema_Tree(
        $,
    ),
)]

export const Schema: t_signatures.Schema = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "imports": _p_change_context(
            $['imports'],
            ($) => Imports(
                $,
            ),
        ),
        "globals": _p_change_context(
            $['globals'],
            ($) => Globals(
                $,
            ),
        ),
        "modules": _p_change_context(
            $['modules'],
            ($) => Modules(
                $,
            ),
        ),
        "complexity": _p_change_context(
            $['complexity'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'constrained':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'constrained',
                                    'value': Resolve_Logic(
                                        $,
                                    ),
                                }),
                            )
                        case 'unconstrained':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'unconstrained',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Imports: t_signatures.Imports = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ['group', ['verbose', _p.dictionary.literal(
        {
            "schema set child": _p_change_context(
                $['schema set child'],
                ($) => ['text', {
                    'delimiter': ['backtick', null],
                    'value': $['l id'],
                }],
            ),
            "schema": _p_change_context(
                $['schema'],
                ($) => ['nothing', null],
            ),
        },
    )]],
)]

export const Modules: t_signatures.Modules = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => Module(
        $,
    ),
)]

export const Globals: t_signatures.Globals = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "complexity": _p_change_context(
            $['complexity'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'constrained':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'constrained',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'unconstrained':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'unconstrained',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "text types": _p_change_context(
            $['text types'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => Text_Type(
                    $,
                ),
            )],
        ),
        "number types": _p_change_context(
            $['number types'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => Number_Type(
                    $,
                ),
            )],
        ),
    },
)]]

export const Dictionary: t_signatures.Dictionary = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "value": _p_change_context(
            $['value'],
            ($) => Value(
                $,
            ),
        ),
    },
)]]

export const Value: t_signatures.Value = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'boolean',
                        'value': ['nothing', null],
                    }),
                )
            case 'component':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'component',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "type": _p_change_context(
                                    $['type'],
                                    ($) => ['state', _p.decide.state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'external',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "import": _p_change_context(
                                                                        $['import'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                    "module": _p_change_context(
                                                                        $['module'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'internal':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'internal',
                                                            'value': ['text', {
                                                                'delimiter': ['backtick', null],
                                                                'value': $['l id'],
                                                            }],
                                                        }),
                                                    )
                                                case 'internal acyclic':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'internal acyclic',
                                                            'value': ['text', {
                                                                'delimiter': ['backtick', null],
                                                                'value': $['l id'],
                                                            }],
                                                        }),
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                ),
                                "results": _p_change_context(
                                    $['results'],
                                    ($) => Value_Results(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'dictionary':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'dictionary',
                        'value': Dictionary(
                            $,
                        ),
                    }),
                )
            case 'group':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'group',
                        'value': Group(
                            $,
                        ),
                    }),
                )
            case 'list':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'list',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "value": _p_change_context(
                                    $['value'],
                                    ($) => Value(
                                        $,
                                    ),
                                ),
                                "results": _p_change_context(
                                    $['results'],
                                    ($) => Value_Results(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'nothing':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'nothing',
                        'value': ['nothing', null],
                    }),
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'number',
                        'value': ['state', _p.decide.state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'global':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'global',
                                                'value': ['text', {
                                                    'delimiter': ['backtick', null],
                                                    'value': $['l id'],
                                                }],
                                            }),
                                        )
                                    case 'local':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'local',
                                                'value': Number_Type(
                                                    $,
                                                ),
                                            }),
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': Value(
                            $,
                        ),
                    }),
                )
            case 'reference':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'reference',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "referent": _p_change_context(
                                    $['referent'],
                                    ($) => Value_Reference(
                                        $,
                                    ),
                                ),
                                "type": _p_change_context(
                                    $['type'],
                                    ($) => ['state', _p.decide.state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'derived':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'derived',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'selected':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'selected',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "dictionary": _p_change_context(
                                                                        $['dictionary'],
                                                                        ($) => ['nothing', null],
                                                                    ),
                                                                    "dependency": _p_change_context(
                                                                        $['dependency'],
                                                                        ($) => ['state', _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'acyclic':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'acyclic',
                                                                                                'value': ['nothing', null],
                                                                                            }),
                                                                                        )
                                                                                    case 'cyclic':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'cyclic',
                                                                                                'value': ['nothing', null],
                                                                                            }),
                                                                                        )
                                                                                    case 'stack':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'stack',
                                                                                                'value': ['nothing', null],
                                                                                            }),
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0],
                                                                                        )
                                                                                }
                                                                            },
                                                                        )],
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'state':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'state',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "options": _p_change_context(
                                    $['options'],
                                    ($) => ['dictionary', _p.dictionary.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "constraints": _p_change_context(
                                                    $['constraints'],
                                                    ($) => Option_Constraints(
                                                        $,
                                                    ),
                                                ),
                                                "description": _p_change_context(
                                                    $['description'],
                                                    ($) => ['optional', _p.decide.optional(
                                                        $,
                                                        ($): t_out.Value.optional => ['set', ['text', {
                                                            'delimiter': ['quote', null],
                                                            'value': $,
                                                        }]],
                                                        () => ['not set', null],
                                                    )],
                                                ),
                                                "value": _p_change_context(
                                                    $['value'],
                                                    ($) => Value(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    )],
                                ),
                                "results": _p_change_context(
                                    $['results'],
                                    ($) => Value_Results(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'text':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'text',
                        'value': ['state', _p.decide.state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'global':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'global',
                                                'value': ['text', {
                                                    'delimiter': ['backtick', null],
                                                    'value': $['l id'],
                                                }],
                                            }),
                                        )
                                    case 'local':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'local',
                                                'value': Text_Type(
                                                    $,
                                                ),
                                            }),
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Signatures: t_signatures.Signatures = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => Signature(
        $,
    ),
)]

export const Signature_Parameters: t_signatures.Signature_Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "modules": _p_change_context(
            $['modules'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "module": _p_change_context(
                            $['module'],
                            ($) => Module_Reference(
                                $,
                            ),
                        ),
                        "presence": _p_change_context(
                            $['presence'],
                            ($) => Presence(
                                $,
                            ),
                        ),
                    },
                )]],
            )],
        ),
        "lookups": _p_change_context(
            $['lookups'],
            ($) => ['dictionary', _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        "referent": _p_change_context(
                            $['referent'],
                            ($) => Module_Reference(
                                $,
                            ),
                        ),
                        "dictionary": _p_change_context(
                            $['dictionary'],
                            ($) => ['nothing', null],
                        ),
                        "type": _p_change_context(
                            $['type'],
                            ($) => ['state', _p.decide.state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'cyclic':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'cyclic',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'acyclic':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'acyclic',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'stack':
                                            return _p.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'stack',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                        "presence": _p_change_context(
                            $['presence'],
                            ($) => Presence(
                                $,
                            ),
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const Value_Resolver: t_signatures.Value_Resolver = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'boolean',
                        'value': ['nothing', null],
                    }),
                )
            case 'component':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'component',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "definition": _p_change_context(
                                    $['definition'],
                                    ($) => ['nothing', null],
                                ),
                                "location": _p_change_context(
                                    $['location'],
                                    ($) => ['state', _p.decide.state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'external',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "import": _p_change_context(
                                                                        $['import'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                    "signature": _p_change_context(
                                                                        $['signature'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'internal':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'internal',
                                                            'value': ['text', {
                                                                'delimiter': ['backtick', null],
                                                                'value': $['l id'],
                                                            }],
                                                        }),
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                ),
                                "signature": _p_change_context(
                                    $['signature'],
                                    ($) => ['nothing', null],
                                ),
                                "arguments": _p_change_context(
                                    $['arguments'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "modules": _p_change_context(
                                                    $['modules'],
                                                    ($) => ['optional', _p.decide.optional(
                                                        $,
                                                        ($): t_out.Value.optional => ['set', ['dictionary', _p.dictionary.from.dictionary(
                                                            $,
                                                        ).map(
                                                            ($, id) => ['state', _p.decide.state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'optional':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'optional',
                                                                                    'value': Optional_Value_Initialization(
                                                                                        $,
                                                                                    ),
                                                                                }),
                                                                            )
                                                                        case 'required':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'required',
                                                                                    'value': Guaranteed_Value_Selection(
                                                                                        $,
                                                                                    ),
                                                                                }),
                                                                            )
                                                                        case 'parameter':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'parameter',
                                                                                    'value': ['text', {
                                                                                        'delimiter': ['backtick', null],
                                                                                        'value': $['l id'],
                                                                                    }],
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )],
                                                        )]],
                                                        () => ['not set', null],
                                                    )],
                                                ),
                                                "lookups": _p_change_context(
                                                    $['lookups'],
                                                    ($) => ['optional', _p.decide.optional(
                                                        $,
                                                        ($): t_out.Value.optional => ['set', ['dictionary', _p.dictionary.from.dictionary(
                                                            $,
                                                        ).map(
                                                            ($, id) => ['state', _p.decide.state(
                                                                $,
                                                                ($): t_out.Value.state => {
                                                                    switch ($[0]) {
                                                                        case 'stack':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'stack',
                                                                                    'value': ['state', _p.decide.state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'empty':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'empty',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'push':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'push',
                                                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                {
                                                                                                                    "stack": _p_change_context(
                                                                                                                        $['stack'],
                                                                                                                        ($) => Lookup_Selection(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    "item": _p_change_context(
                                                                                                                        $['item'],
                                                                                                                        ($) => Lookup_Selection(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                },
                                                                                                            )]],
                                                                                                        }),
                                                                                                    )
                                                                                                default:
                                                                                                    return _p.au(
                                                                                                        $[0],
                                                                                                    )
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'acyclic':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'acyclic',
                                                                                    'value': ['state', _p.decide.state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'not set':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'not set',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                default:
                                                                                                    return _p.au(
                                                                                                        $[0],
                                                                                                    )
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'cyclic':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'cyclic',
                                                                                    'value': ['state', _p.decide.state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'not set':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'not set',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                default:
                                                                                                    return _p.au(
                                                                                                        $[0],
                                                                                                    )
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                }),
                                                                            )
                                                                        case 'selection':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ({
                                                                                    'option': 'selection',
                                                                                    'value': Lookup_Selection(
                                                                                        $,
                                                                                    ),
                                                                                }),
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0],
                                                                            )
                                                                    }
                                                                },
                                                            )],
                                                        )]],
                                                        () => ['not set', null],
                                                    )],
                                                ),
                                            },
                                        )]]],
                                        () => ['not set', null],
                                    )],
                                ),
                                "constraints": _p_change_context(
                                    $['constraints'],
                                    ($) => Value_Constraint_Resolvers(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'dictionary':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'dictionary',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "definition": _p_change_context(
                                    $['definition'],
                                    ($) => ['nothing', null],
                                ),
                                "resolver": _p_change_context(
                                    $['resolver'],
                                    ($) => Value_Resolver(
                                        $,
                                    ),
                                ),
                                "benchmark": _p_change_context(
                                    $['benchmark'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Benchmark(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'group':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'group',
                        'value': Value_Resolver_Group(
                            $,
                        ),
                    }),
                )
            case 'list':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'list',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "definition": _p_change_context(
                                    $['definition'],
                                    ($) => ['nothing', null],
                                ),
                                "resolver": _p_change_context(
                                    $['resolver'],
                                    ($) => Value_Resolver(
                                        $,
                                    ),
                                ),
                                "result": _p_change_context(
                                    $['result'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Value_Resolver_List_Result(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'nothing':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'nothing',
                        'value': ['nothing', null],
                    }),
                )
            case 'number':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'number',
                        'value': ['nothing', null],
                    }),
                )
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "constraints": _p_change_context(
                                    $['constraints'],
                                    ($) => Option_Constraint_Resolvers(
                                        $,
                                    ),
                                ),
                                "resolver": _p_change_context(
                                    $['resolver'],
                                    ($) => Value_Resolver(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'reference':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'reference',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "definition": _p_change_context(
                                    $['definition'],
                                    ($) => ['nothing', null],
                                ),
                                "type": _p_change_context(
                                    $['type'],
                                    ($) => ['state', _p.decide.state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'derived':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'derived',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "value": _p_change_context(
                                                                        $['value'],
                                                                        ($) => Guaranteed_Value_Selection(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'selected':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'selected',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "definition": _p_change_context(
                                                                        $['definition'],
                                                                        ($) => ['nothing', null],
                                                                    ),
                                                                    "lookup": _p_change_context(
                                                                        $['lookup'],
                                                                        ($) => Lookup_Selection(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "constraints": _p_change_context(
                                                                        $['constraints'],
                                                                        ($) => Value_Constraint_Resolvers(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'state':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'state',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "definition": _p_change_context(
                                    $['definition'],
                                    ($) => ['nothing', null],
                                ),
                                "states": _p_change_context(
                                    $['states'],
                                    ($) => ['dictionary', _p.dictionary.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "constraints": _p_change_context(
                                                    $['constraints'],
                                                    ($) => Option_Constraint_Resolvers(
                                                        $,
                                                    ),
                                                ),
                                                "resolver": _p_change_context(
                                                    $['resolver'],
                                                    ($) => Value_Resolver(
                                                        $,
                                                    ),
                                                ),
                                            },
                                        )]],
                                    )],
                                ),
                            },
                        )]],
                    }),
                )
            case 'text':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'text',
                        'value': ['nothing', null],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Module_Specification: t_signatures.Module_Specification = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "schema": _p_change_context(
            $['schema'],
            ($) => Schema_Tree(
                $,
            ),
        ),
        "schema path": _p_change_context(
            $['schema path'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            )],
        ),
        "module": _p_change_context(
            $['module'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'schema':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'schema',
                        'value': Schema(
                            $,
                        ),
                    }),
                )
            case 'set':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'set',
                        'value': Schemas(
                            $,
                        ),
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Resolve_Logic: t_signatures.Resolve_Logic = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "signatures": _p_change_context(
            $['signatures'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "signatures": _p_change_context(
                        $['signatures'],
                        ($) => Signatures(
                            $,
                        ),
                    ),
                },
            )]],
        ),
        "resolvers": _p_change_context(
            $['resolvers'],
            ($) => Module_Resolvers(
                $,
            ),
        ),
    },
)]]

export const Text_Type: t_signatures.Text_Type = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'multi line':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'multi line',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'single line':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'single line',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Number_Type: t_signatures.Number_Type = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "precision": _p_change_context(
            $['precision'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'approximation':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'approximation',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "significant digits": _p_change_context(
                                                $['significant digits'],
                                                ($) => ['text', {
                                                    'delimiter': ['none', null],
                                                    'value': _p_text_from_list(
                                                        v_serialize_number.serialize(
                                                            $,
                                                        ),
                                                        ($) => $,
                                                    ),
                                                }],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        case 'exact':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'exact',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "decimal separator offset": _p_change_context(
                                                $['decimal separator offset'],
                                                ($) => ['optional', _p.decide.optional(
                                                    $,
                                                    ($): t_out.Value.optional => ['set', ['text', {
                                                        'delimiter': ['none', null],
                                                        'value': _p_text_from_list(
                                                            v_serialize_number.serialize(
                                                                $,
                                                            ),
                                                            ($) => $,
                                                        ),
                                                    }]],
                                                    () => ['not set', null],
                                                )],
                                            ),
                                            "type": _p_change_context(
                                                $['type'],
                                                ($) => ['state', _p.decide.state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'integer':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'integer',
                                                                        'value': ['nothing', null],
                                                                    }),
                                                                )
                                                            case 'natural':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'natural',
                                                                        'value': ['nothing', null],
                                                                    }),
                                                                )
                                                            case 'positive natural':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'positive natural',
                                                                        'value': ['nothing', null],
                                                                    }),
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                )],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Module: t_signatures.Module = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "root value": _p_change_context(
            $['root value'],
            ($) => Value(
                $,
            ),
        ),
    },
)]]

export const Presence: t_signatures.Presence = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': ['nothing', null],
                    }),
                )
            case 'required':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'required',
                        'value': ['nothing', null],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Module_Resolvers: t_signatures.Module_Resolvers = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ['group', ['verbose', _p.dictionary.literal(
        {
            "signature": _p_change_context(
                $['signature'],
                ($) => ['nothing', null],
            ),
            "root value resolver": _p_change_context(
                $['root value resolver'],
                ($) => Value_Resolver(
                    $,
                ),
            ),
        },
    )]],
)]

export const Benchmark: t_signatures.Benchmark = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "selection": _p_change_context(
            $['selection'],
            ($) => Guaranteed_Value_Selection(
                $['l value'],
            ),
        ),
        "resulting dictionary": _p_change_context(
            $['resulting dictionary'],
            ($) => ['nothing', null],
        ),
        "dense": _p_change_context(
            $['dense'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': _p_text_from_list(
                    v_serialize_boolean.serialize(
                        $,
                    ),
                    ($) => $,
                ),
            }],
        ),
    },
)]]

export const Group: t_signatures.Group = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ['group', ['verbose', _p.dictionary.literal(
        {
            "description": _p_change_context(
                $['description'],
                ($) => ['optional', _p.decide.optional(
                    $,
                    ($): t_out.Value.optional => ['set', ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }]],
                    () => ['not set', null],
                )],
            ),
            "value": _p_change_context(
                $['value'],
                ($) => Value(
                    $,
                ),
            ),
        },
    )]],
)]

export const Value_Reference: t_signatures.Value_Reference = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "module": _p_change_context(
            $['module'],
            ($) => Module_Reference(
                $,
            ),
        ),
        "path": _p_change_context(
            $['path'],
            ($) => Value_Path(
                $,
            ),
        ),
    },
)]]

export const Value_Path: t_signatures.Value_Path = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "tail": _p_change_context(
            $['tail'],
            ($) => ['list', _p.list.from.list(
                $['l value'],
            ).map(
                ($) => _p_change_context(
                    $['l item'],
                    ($) => ['state', _p.decide.state(
                        $['l value'],
                        ($): t_out.Value.state => {
                            switch ($[0]) {
                                case 'dictionary':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'dictionary',
                                            'value': ['nothing', null],
                                        }),
                                    )
                                case 'group':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'group',
                                            'value': ['text', {
                                                'delimiter': ['backtick', null],
                                                'value': $['l id'],
                                            }],
                                        }),
                                    )
                                case 'list':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'list',
                                            'value': ['nothing', null],
                                        }),
                                    )
                                case 'optional':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'optional',
                                            'value': ['nothing', null],
                                        }),
                                    )
                                case 'state':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'state',
                                            'value': ['text', {
                                                'delimiter': ['backtick', null],
                                                'value': $['l id'],
                                            }],
                                        }),
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )],
                ),
            )],
        ),
        "resulting node": _p_change_context(
            $['resulting node'],
            ($) => ['nothing', null],
        ),
    },
)]]

export const Module_Reference: t_signatures.Module_Reference = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "location": _p_change_context(
            $['location'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'internal':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'internal',
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        case 'external':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'external',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "import": _p_change_context(
                                                $['import'],
                                                ($) => ['text', {
                                                    'delimiter': ['backtick', null],
                                                    'value': $['l id'],
                                                }],
                                            ),
                                            "module": _p_change_context(
                                                $['module'],
                                                ($) => ['text', {
                                                    'delimiter': ['backtick', null],
                                                    'value': $['l id'],
                                                }],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "resulting module": _p_change_context(
            $['resulting module'],
            ($) => ['nothing', null],
        ),
    },
)]]

export const Signature: t_signatures.Signature = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "module": _p_change_context(
            $['module'],
            ($) => ['nothing', null],
        ),
        "parameters": _p_change_context(
            $['parameters'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'local':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'local',
                                    'value': Signature_Parameters(
                                        $,
                                    ),
                                }),
                            )
                        case 'same as':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'same as',
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "resolved parameters": _p_change_context(
            $['resolved parameters'],
            ($) => ['nothing', null],
        ),
    },
)]]

export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "path": _p_change_context(
            $['path'],
            ($) => ['list', _p.list.from.list(
                $['l value'],
            ).map(
                ($) => _p_change_context(
                    $['l item'],
                    ($) => ['state', _p.decide.state(
                        $,
                        ($): t_out.Value.state => {
                            switch ($[0]) {
                                case 'component':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'component',
                                            'value': ['nothing', null],
                                        }),
                                    )
                                case 'group':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'group',
                                            'value': ['text', {
                                                'delimiter': ['backtick', null],
                                                'value': $['l id'],
                                            }],
                                        }),
                                    )
                                case 'reference':
                                    return _p.ss(
                                        $,
                                        ($) => ({
                                            'option': 'reference',
                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                {
                                                    "definition": _p_change_context(
                                                        $['definition'],
                                                        ($) => ['nothing', null],
                                                    ),
                                                },
                                            )]],
                                        }),
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )],
                ),
            )],
        ),
        "resulting node": _p_change_context(
            $['resulting node'],
            ($) => ['nothing', null],
        ),
    },
)]]

export const Lookup_Selection: t_signatures.Lookup_Selection = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'acyclic':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'acyclic',
                                    'value': ['state', _p.decide.state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'siblings':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'siblings',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                case 'resolved dictionary':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'resolved dictionary',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "selection": _p_change_context(
                                                                        $['selection'],
                                                                        ($) => Guaranteed_Value_Selection(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    "selected dictionary": _p_change_context(
                                                                        $['selected dictionary'],
                                                                        ($) => ['nothing', null],
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                }),
                            )
                        case 'cyclic':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'cyclic',
                                    'value': ['state', _p.decide.state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'siblings':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'siblings',
                                                            'value': ['nothing', null],
                                                        }),
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                }),
                            )
                        case 'parameter':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'parameter',
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "resulting dictionary": _p_change_context(
            $['resulting dictionary'],
            ($) => ['nothing', null],
        ),
    },
)]]

export const Constraint: t_signatures.Constraint = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "selection": _p_change_context(
            $['selection'],
            ($) => Relative_Value_Selection(
                $,
            ),
        ),
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'state':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'state',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "selected state": _p_change_context(
                                                $['selected state'],
                                                ($) => ['nothing', null],
                                            ),
                                            "option": _p_change_context(
                                                $['option'],
                                                ($) => ['text', {
                                                    'delimiter': ['backtick', null],
                                                    'value': $['l id'],
                                                }],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        case 'optional value':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'optional value',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "selected optional value": _p_change_context(
                                                $['selected optional value'],
                                                ($) => ['nothing', null],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Option_Constraint_Resolvers: t_signatures.Option_Constraint_Resolvers = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'state':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'state',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "selection": _p_change_context(
                                        $['selection'],
                                        ($) => Guaranteed_Value_Selection(
                                            $,
                                        ),
                                    ),
                                    "selected state": _p_change_context(
                                        $['selected state'],
                                        ($) => ['nothing', null],
                                    ),
                                    "option": _p_change_context(
                                        $['option'],
                                        ($) => ['text', {
                                            'delimiter': ['backtick', null],
                                            'value': $['l id'],
                                        }],
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'assert is set':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'assert is set',
                            'value': Possible_Value_Selection(
                                $,
                            ),
                        }),
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )],
)]

export const Value_Constraint_Resolvers: t_signatures.Value_Constraint_Resolvers = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => Value_Constraint_Resolver(
        $,
    ),
)]

export const Reference_To_Value_Constraint_Resolver: t_signatures.Reference_To_Value_Constraint_Resolver = ($) => ['text', {
    'delimiter': ['backtick', null],
    'value': $['l id'],
}]

export const Value_Constraint_Resolver: t_signatures.Value_Constraint_Resolver = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "start": _p_change_context(
            $['start'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'property':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'property',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'sibling':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'sibling',
                                    'value': Reference_To_Value_Constraint_Resolver(
                                        $,
                                    ),
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "constraint": _p_change_context(
            $['constraint'],
            ($) => Constraint(
                $,
            ),
        ),
    },
)]]

export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'not set':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'not set',
                        'value': ['nothing', null],
                    }),
                )
            case 'set':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'set',
                        'value': Guaranteed_Value_Selection(
                            $,
                        ),
                    }),
                )
            case 'selection':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'selection',
                        'value': Possible_Value_Selection(
                            $,
                        ),
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Value_Resolver_Group: t_signatures.Value_Resolver_Group = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ['group', ['verbose', _p.dictionary.literal(
        {
            "definition": _p_change_context(
                $['definition'],
                ($) => ['nothing', null],
            ),
            "resolver": _p_change_context(
                $['resolver'],
                ($) => Value_Resolver(
                    $,
                ),
            ),
        },
    )]],
)]

export const Value_Resolver_List_Result: t_signatures.Value_Resolver_List_Result = ($) => Module_Reference(
    $,
)

export const Value_Results: t_signatures.Value_Results = ($) => ['optional', _p.decide.optional(
    $,
    ($): t_out.Value.optional => ['set', ['dictionary', _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => Value_Reference(
            $,
        ),
    )]],
    () => ['not set', null],
)]

export const Option_Constraints: t_signatures.Option_Constraints = ($) => ['optional', _p.decide.optional(
    $,
    ($): t_out.Value.optional => ['set', ['dictionary', _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => Value_Reference(
            $,
        ),
    )]],
    () => ['not set', null],
)]

export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "start": _p_change_context(
            $['start'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'sibling':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'sibling',
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        case 'parent sibling':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'parent sibling',
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        case 'option constraint':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'option constraint',
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        case 'list cursor':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'list cursor',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'linked entry':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'linked entry',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'constraint':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'constraint',
                                    'value': ['state', _p.decide.state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'component':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'component',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "property": _p_change_context(
                                                                        $['property'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                    "constraint": _p_change_context(
                                                                        $['constraint'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'reference':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'reference',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "property": _p_change_context(
                                                                        $['property'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                    "constraint": _p_change_context(
                                                                        $['constraint'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                }),
                            )
                        case 'parameter':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'parameter',
                                    'value': ['text', {
                                        'delimiter': ['backtick', null],
                                        'value': $['l id'],
                                    }],
                                }),
                            )
                        case 'result':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'result',
                                    'value': ['state', _p.decide.state(
                                        $,
                                        ($): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'list':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'list',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "property": _p_change_context(
                                                                        $['property'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                    "list result": _p_change_context(
                                                                        $['list result'],
                                                                        ($) => ['nothing', null],
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'state':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'state',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "property": _p_change_context(
                                                                        $['property'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                    "state": _p_change_context(
                                                                        $['state'],
                                                                        ($) => ['nothing', null],
                                                                    ),
                                                                    "result": _p_change_context(
                                                                        $['result'],
                                                                        ($) => Module_Reference(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                case 'optional value':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ({
                                                            'option': 'optional value',
                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                {
                                                                    "property": _p_change_context(
                                                                        $['property'],
                                                                        ($) => ['text', {
                                                                            'delimiter': ['backtick', null],
                                                                            'value': $['l id'],
                                                                        }],
                                                                    ),
                                                                    "optional value": _p_change_context(
                                                                        $['optional value'],
                                                                        ($) => ['nothing', null],
                                                                    ),
                                                                    "result": _p_change_context(
                                                                        $['result'],
                                                                        ($) => Module_Reference(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                },
                                                            )]],
                                                        }),
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
        "tail": _p_change_context(
            $['tail'],
            ($) => Relative_Value_Selection(
                $,
            ),
        ),
        "resulting node": _p_change_context(
            $['resulting node'],
            ($) => ['nothing', null],
        ),
    },
)]]

export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'parameter':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'parameter',
                        'value': ['text', {
                            'delimiter': ['backtick', null],
                            'value': $['l id'],
                        }],
                    }),
                )
            case 'result':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'result',
                        'value': ['state', _p.decide.state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'state':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'state',
                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        "property": _p_change_context(
                                                            $['property'],
                                                            ($) => ['text', {
                                                                'delimiter': ['backtick', null],
                                                                'value': $['l id'],
                                                            }],
                                                        ),
                                                        "state": _p_change_context(
                                                            $['state'],
                                                            ($) => ['nothing', null],
                                                        ),
                                                        "result": _p_change_context(
                                                            $['result'],
                                                            ($) => Module_Reference(
                                                                $,
                                                            ),
                                                        ),
                                                    },
                                                )]],
                                            }),
                                        )
                                    case 'optional value':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'optional value',
                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        "property": _p_change_context(
                                                            $['property'],
                                                            ($) => ['text', {
                                                                'delimiter': ['backtick', null],
                                                                'value': $['l id'],
                                                            }],
                                                        ),
                                                        "optional value": _p_change_context(
                                                            $['optional value'],
                                                            ($) => ['nothing', null],
                                                        ),
                                                        "result": _p_change_context(
                                                            $['result'],
                                                            ($) => Module_Reference(
                                                                $,
                                                            ),
                                                        ),
                                                    },
                                                )]],
                                            }),
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]
