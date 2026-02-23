
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/schema/boilerplate_for_migrate"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const Package: t_signatures.Package = ($) => ({
    'omit (de)serializer': _p_change_context(
        $['omit (de)serializer'],
        ($) => $,
    ),
    'schema tree': _p_change_context(
        $['schema tree'],
        ($) => Schema_Tree(
            $,
        ),
    ),
})

export const Schemas: t_signatures.Schemas = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': Schema_Tree(
                $,
            ),
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Schema: t_signatures.Schema = ($) => ({
    'schema imports': _p_change_context(
        $['schema imports'],
        ($) => Schema_Imports(
            $,
        ),
    ),
    'resolver imports': _p_change_context(
        $['resolver imports'],
        ($) => Resolver_Imports(
            $,
        ),
    ),
    'globals': _p_change_context(
        $['globals'],
        ($) => Globals(
            $,
        ),
    ),
    'modules': _p_change_context(
        $['modules'],
        ($) => Modules(
            $,
        ),
    ),
    'complexity': _p_change_context(
        $['complexity'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Schema.complexity.l_state => {
                    switch ($[0]) {
                        case 'constrained':
                            return _p.ss(
                                $,
                                ($) => ['constrained', Resolver(
                                    $,
                                )],
                            )
                        case 'unconstrained':
                            return _p.ss(
                                $,
                                ($) => ['unconstrained', null],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Schema_Imports: t_signatures.Schema_Imports = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'schema set child': _p_change_context(
                    $['schema set child'],
                    ($) => ({
                        'l location': {
                            'start': {
                                'absolute': 42,
                                'relative': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                            'end': {
                                'absolute': 42,
                                'relative': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                        },
                        'l reference': $['l value']['l id'],
                    }),
                ),
                'schema': _p_change_context(
                    $['schema'],
                    ($) => null,
                ),
            },
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Modules: t_signatures.Modules = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': Module(
                $,
            ),
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Globals: t_signatures.Globals = ($) => ({
    'complexity': _p_change_context(
        $['complexity'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Globals.complexity.l_state => {
                    switch ($[0]) {
                        case 'constrained':
                            return _p.ss(
                                $,
                                ($) => ['constrained', null],
                            )
                        case 'unconstrained':
                            return _p.ss(
                                $,
                                ($) => ['unconstrained', null],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'text types': _p_change_context(
        $['text types'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l dictionary': _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ({
                    'l entry': Text_Type(
                        $,
                    ),
                    'l location': {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                    },
                }),
            ),
        }),
    ),
    'number types': _p_change_context(
        $['number types'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l dictionary': _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ({
                    'l entry': Number_Type(
                        $,
                    ),
                    'l location': {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                    },
                }),
            ),
        }),
    ),
})

export const Dictionary: t_signatures.Dictionary = ($) => ({
    'value': _p_change_context(
        $['value'],
        ($) => Value(
            $,
        ),
    ),
})

export const Value: t_signatures.Value = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Value.l_state => {
            switch ($[0]) {
                case 'boolean':
                    return _p.ss(
                        $,
                        ($) => ['boolean', null],
                    )
                case 'component':
                    return _p.ss(
                        $,
                        ($) => ['component', {
                            'type': _p_change_context(
                                $['type'],
                                ($) => ({
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Value.l_state.component.type_.l_state => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['external', {
                                                            'import': _p_change_context(
                                                                $['import'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'module': _p_change_context(
                                                                $['module'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                        }],
                                                    )
                                                case 'internal':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal', {
                                                            'l location': {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            },
                                                            'l reference': $['l id'],
                                                        }],
                                                    )
                                                case 'internal acyclic':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal acyclic', {
                                                            'l location': {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            },
                                                            'l reference': $['l id'],
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }),
                            ),
                            'results': _p_change_context(
                                $['results'],
                                ($) => Value_Results(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'dictionary':
                    return _p.ss(
                        $,
                        ($) => ['dictionary', Dictionary(
                            $,
                        )],
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ['group', Group(
                            $,
                        )],
                    )
                case 'list':
                    return _p.ss(
                        $,
                        ($) => ['list', {
                            'value': _p_change_context(
                                $['value'],
                                ($) => Value(
                                    $,
                                ),
                            ),
                            'results': _p_change_context(
                                $['results'],
                                ($) => Value_Results(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'nothing':
                    return _p.ss(
                        $,
                        ($) => ['nothing', null],
                    )
                case 'number':
                    return _p.ss(
                        $,
                        ($) => ['number', {
                            'l location': {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Value.l_state.number_.l_state => {
                                    switch ($[0]) {
                                        case 'global':
                                            return _p.ss(
                                                $,
                                                ($) => ['global', {
                                                    'l location': {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    },
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        case 'local':
                                            return _p.ss(
                                                $,
                                                ($) => ['local', Number_Type(
                                                    $,
                                                )],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }],
                    )
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ['optional', Value(
                            $,
                        )],
                    )
                case 'reference':
                    return _p.ss(
                        $,
                        ($) => ['reference', {
                            'referent': _p_change_context(
                                $['referent'],
                                ($) => Value_Reference(
                                    $,
                                ),
                            ),
                            'type': _p_change_context(
                                $['type'],
                                ($) => ({
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Value.l_state.reference.type_.l_state => {
                                            switch ($[0]) {
                                                case 'derived':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['derived', null],
                                                    )
                                                case 'selected':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['selected', {
                                                            'dictionary': _p_change_context(
                                                                $['dictionary'],
                                                                ($) => null,
                                                            ),
                                                            'dependency': _p_change_context(
                                                                $['dependency'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l state': _p.decide.state(
                                                                        $,
                                                                        ($): t_out.Value.l_state.reference.type_.l_state.selected.dependency.l_state => {
                                                                            switch ($[0]) {
                                                                                case 'acyclic':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['acyclic', null],
                                                                                    )
                                                                                case 'cyclic':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['cyclic', null],
                                                                                    )
                                                                                case 'stack':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ['stack', null],
                                                                                    )
                                                                                default:
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    ),
                                                                }),
                                                            ),
                                                            'results': _p_change_context(
                                                                $['results'],
                                                                ($) => Value_Results(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }),
                            ),
                        }],
                    )
                case 'state':
                    return _p.ss(
                        $,
                        ($) => ['state', {
                            'options': _p_change_context(
                                $['options'],
                                ($) => ({
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l dictionary': _p.dictionary.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ({
                                            'l entry': {
                                                'constraints': _p_change_context(
                                                    $['constraints'],
                                                    ($) => Option_Constraints(
                                                        $,
                                                    ),
                                                ),
                                                'description': _p_change_context(
                                                    $['description'],
                                                    ($) => _p.optional.from.optional(
                                                        $,
                                                    ).map(
                                                        ($) => $,
                                                    ),
                                                ),
                                                'value': _p_change_context(
                                                    $['value'],
                                                    ($) => Value(
                                                        $,
                                                    ),
                                                ),
                                            },
                                            'l location': {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            },
                                        }),
                                    ),
                                }),
                            ),
                            'results': _p_change_context(
                                $['results'],
                                ($) => Value_Results(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'text':
                    return _p.ss(
                        $,
                        ($) => ['text', {
                            'l location': {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Value.l_state.text.l_state => {
                                    switch ($[0]) {
                                        case 'global':
                                            return _p.ss(
                                                $,
                                                ($) => ['global', {
                                                    'l location': {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    },
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        case 'local':
                                            return _p.ss(
                                                $,
                                                ($) => ['local', Text_Type(
                                                    $,
                                                )],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Resolver: t_signatures.Resolver = ($) => ({
    'signatures': _p_change_context(
        $['signatures'],
        ($) => ({
            'signatures': _p_change_context(
                $['signatures'],
                ($) => Resolver_Signatures(
                    $,
                ),
            ),
        }),
    ),
    'modules': _p_change_context(
        $['modules'],
        ($) => Resolver_Modules(
            $,
        ),
    ),
})

export const Resolver_Imports: t_signatures.Resolver_Imports = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'schema set child': _p_change_context(
                    $['schema set child'],
                    ($) => ({
                        'l location': {
                            'start': {
                                'absolute': 42,
                                'relative': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                            'end': {
                                'absolute': 42,
                                'relative': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                        },
                        'l reference': $['l value']['l id'],
                    }),
                ),
                'resolver': _p_change_context(
                    $['resolver'],
                    ($) => null,
                ),
            },
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Resolver_Signatures: t_signatures.Resolver_Signatures = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': Resolver_Signature(
                $,
            ),
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Resolver_Signature_Parameters: t_signatures.Resolver_Signature_Parameters = ($) => ({
    'modules': _p_change_context(
        $['modules'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l dictionary': _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'module': _p_change_context(
                            $['module'],
                            ($) => Module_Reference(
                                $,
                            ),
                        ),
                        'presence': _p_change_context(
                            $['presence'],
                            ($) => Presence(
                                $,
                            ),
                        ),
                    },
                    'l location': {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                    },
                }),
            ),
        }),
    ),
    'lookups': _p_change_context(
        $['lookups'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l dictionary': _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'referent': _p_change_context(
                            $['referent'],
                            ($) => Module_Reference(
                                $,
                            ),
                        ),
                        'dictionary': _p_change_context(
                            $['dictionary'],
                            ($) => null,
                        ),
                        'type': _p_change_context(
                            $['type'],
                            ($) => ({
                                'l location': {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'document resource identifier': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry.type_.l_state => {
                                        switch ($[0]) {
                                            case 'cyclic':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['cyclic', null],
                                                )
                                            case 'acyclic':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['acyclic', null],
                                                )
                                            case 'stack':
                                                return _p.ss(
                                                    $,
                                                    ($) => ['stack', null],
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'presence': _p_change_context(
                            $['presence'],
                            ($) => Presence(
                                $,
                            ),
                        ),
                    },
                    'l location': {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                    },
                }),
            ),
        }),
    ),
})

export const Resolver_Value: t_signatures.Resolver_Value = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Resolver_Value.l_state => {
            switch ($[0]) {
                case 'boolean':
                    return _p.ss(
                        $,
                        ($) => ['boolean', null],
                    )
                case 'component':
                    return _p.ss(
                        $,
                        ($) => ['component', {
                            'definition': _p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'location': _p_change_context(
                                $['location'],
                                ($) => ({
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Resolver_Value.l_state.component.location.l_state => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['external', {
                                                            'schema import': _p_change_context(
                                                                $['schema import'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'resolver import': _p_change_context(
                                                                $['resolver import'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'signature': _p_change_context(
                                                                $['signature'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                        }],
                                                    )
                                                case 'internal':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal', {
                                                            'l location': {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            },
                                                            'l reference': $['l id'],
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }),
                            ),
                            'signature': _p_change_context(
                                $['signature'],
                                ($) => null,
                            ),
                            'arguments': _p_change_context(
                                $['arguments'],
                                ($) => _p.optional.from.optional(
                                    $,
                                ).map(
                                    ($) => ({
                                        'modules': _p_change_context(
                                            $['modules'],
                                            ($) => _p.optional.from.optional(
                                                $,
                                            ).map(
                                                ($) => ({
                                                    'l location': {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    },
                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'l location': {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'document resource identifier': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'document resource identifier': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                },
                                                                'l state': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry.l_state => {
                                                                        switch ($[0]) {
                                                                            case 'optional':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['optional', Resolver_Optional_Value_Initialization(
                                                                                        $,
                                                                                    )],
                                                                                )
                                                                            case 'required':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['required', Resolver_Guaranteed_Value_Selection(
                                                                                        $,
                                                                                    )],
                                                                                )
                                                                            case 'parameter':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['parameter', {
                                                                                        'l location': {
                                                                                            'start': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                            'end': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                        'l reference': $['l id'],
                                                                                    }],
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            },
                                                            'l location': {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            },
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        ),
                                        'lookups': _p_change_context(
                                            $['lookups'],
                                            ($) => _p.optional.from.optional(
                                                $,
                                            ).map(
                                                ($) => ({
                                                    'l location': {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    },
                                                    'l dictionary': _p.dictionary.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'l location': {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'document resource identifier': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'document resource identifier': "implement me",
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                },
                                                                'l state': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state => {
                                                                        switch ($[0]) {
                                                                            case 'stack':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['stack', {
                                                                                        'l location': {
                                                                                            'start': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                            'end': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                        'l state': _p.decide.state(
                                                                                            $,
                                                                                            ($): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.stack.l_state => {
                                                                                                switch ($[0]) {
                                                                                                    case 'empty':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['empty', null],
                                                                                                        )
                                                                                                    case 'push':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['push', {
                                                                                                                'stack': _p_change_context(
                                                                                                                    $['stack'],
                                                                                                                    ($) => Resolver_Lookup_Selection(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                                'item': _p_change_context(
                                                                                                                    $['item'],
                                                                                                                    ($) => Resolver_Lookup_Selection(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            }],
                                                                                                        )
                                                                                                    default:
                                                                                                        return _p.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'acyclic':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['acyclic', {
                                                                                        'l location': {
                                                                                            'start': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                            'end': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                        'l state': _p.decide.state(
                                                                                            $,
                                                                                            ($): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.acyclic.l_state => {
                                                                                                switch ($[0]) {
                                                                                                    case 'not set':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['not set', null],
                                                                                                        )
                                                                                                    default:
                                                                                                        return _p.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'cyclic':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['cyclic', {
                                                                                        'l location': {
                                                                                            'start': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                            'end': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'document resource identifier': "implement me",
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                        'l state': _p.decide.state(
                                                                                            $,
                                                                                            ($): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.cyclic.l_state => {
                                                                                                switch ($[0]) {
                                                                                                    case 'not set':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['not set', null],
                                                                                                        )
                                                                                                    default:
                                                                                                        return _p.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'selection':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['selection', Resolver_Lookup_Selection(
                                                                                        $,
                                                                                    )],
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            },
                                                            'l location': {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            },
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                            'constraints': _p_change_context(
                                $['constraints'],
                                ($) => Resolver_Value_Constraints(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'dictionary':
                    return _p.ss(
                        $,
                        ($) => ['dictionary', {
                            'definition': _p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'resolver': _p_change_context(
                                $['resolver'],
                                ($) => Resolver_Value(
                                    $,
                                ),
                            ),
                            'benchmark': _p_change_context(
                                $['benchmark'],
                                ($) => _p.optional.from.optional(
                                    $,
                                ).map(
                                    ($) => Resolver_Benchmark(
                                        $,
                                    ),
                                ),
                            ),
                        }],
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ['group', Value_Resolver_Group(
                            $,
                        )],
                    )
                case 'list':
                    return _p.ss(
                        $,
                        ($) => ['list', {
                            'definition': _p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'resolver': _p_change_context(
                                $['resolver'],
                                ($) => Resolver_Value(
                                    $,
                                ),
                            ),
                            'result': _p_change_context(
                                $['result'],
                                ($) => _p.optional.from.optional(
                                    $,
                                ).map(
                                    ($) => Value_Resolver_List_Result(
                                        $,
                                    ),
                                ),
                            ),
                        }],
                    )
                case 'nothing':
                    return _p.ss(
                        $,
                        ($) => ['nothing', null],
                    )
                case 'number':
                    return _p.ss(
                        $,
                        ($) => ['number', null],
                    )
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ['optional', {
                            'constraints': _p_change_context(
                                $['constraints'],
                                ($) => Resolver_Option_Constraints(
                                    $,
                                ),
                            ),
                            'resolver': _p_change_context(
                                $['resolver'],
                                ($) => Resolver_Value(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'reference':
                    return _p.ss(
                        $,
                        ($) => ['reference', {
                            'definition': _p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'type': _p_change_context(
                                $['type'],
                                ($) => ({
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Resolver_Value.l_state.reference.type_.l_state => {
                                            switch ($[0]) {
                                                case 'derived':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['derived', {
                                                            'value': _p_change_context(
                                                                $['value'],
                                                                ($) => Resolver_Guaranteed_Value_Selection(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'selected':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['selected', {
                                                            'definition': _p_change_context(
                                                                $['definition'],
                                                                ($) => null,
                                                            ),
                                                            'lookup': _p_change_context(
                                                                $['lookup'],
                                                                ($) => Resolver_Lookup_Selection(
                                                                    $,
                                                                ),
                                                            ),
                                                            'constraints': _p_change_context(
                                                                $['constraints'],
                                                                ($) => Resolver_Value_Constraints(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }),
                            ),
                        }],
                    )
                case 'state':
                    return _p.ss(
                        $,
                        ($) => ['state', {
                            'definition': _p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'states': _p_change_context(
                                $['states'],
                                ($) => ({
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l dictionary': _p.dictionary.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ({
                                            'l entry': {
                                                'constraints': _p_change_context(
                                                    $['constraints'],
                                                    ($) => Resolver_Option_Constraints(
                                                        $,
                                                    ),
                                                ),
                                                'resolver': _p_change_context(
                                                    $['resolver'],
                                                    ($) => Resolver_Value(
                                                        $,
                                                    ),
                                                ),
                                            },
                                            'l location': {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            },
                                        }),
                                    ),
                                }),
                            ),
                        }],
                    )
                case 'text':
                    return _p.ss(
                        $,
                        ($) => ['text', null],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Module_Specification: t_signatures.Module_Specification = ($) => ({
    'schema': _p_change_context(
        $['schema'],
        ($) => Schema_Tree(
            $,
        ),
    ),
    'schema path': _p_change_context(
        $['schema path'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l list': _p.list.from.list(
                $,
            ).map(
                ($) => ({
                    'l item': $,
                    'l location': {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                    },
                }),
            ),
        }),
    ),
    'module': _p_change_context(
        $['module'],
        ($) => $,
    ),
})

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Schema_Tree.l_state => {
            switch ($[0]) {
                case 'schema':
                    return _p.ss(
                        $,
                        ($) => ['schema', Schema(
                            $,
                        )],
                    )
                case 'set':
                    return _p.ss(
                        $,
                        ($) => ['set', Schemas(
                            $,
                        )],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Text_Type: t_signatures.Text_Type = ($) => ({
    'type': _p_change_context(
        $['type'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Text_Type.type_.l_state => {
                    switch ($[0]) {
                        case 'multi line':
                            return _p.ss(
                                $,
                                ($) => ['multi line', null],
                            )
                        case 'single line':
                            return _p.ss(
                                $,
                                ($) => ['single line', null],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Number_Type: t_signatures.Number_Type = ($) => ({
    'precision': _p_change_context(
        $['precision'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Number_Type.precision.l_state => {
                    switch ($[0]) {
                        case 'approximation':
                            return _p.ss(
                                $,
                                ($) => ['approximation', {
                                    'significant digits': _p_change_context(
                                        $['significant digits'],
                                        ($) => $,
                                    ),
                                }],
                            )
                        case 'exact':
                            return _p.ss(
                                $,
                                ($) => ['exact', {
                                    'decimal separator offset': _p_change_context(
                                        $['decimal separator offset'],
                                        ($) => _p.optional.from.optional(
                                            $,
                                        ).map(
                                            ($) => $,
                                        ),
                                    ),
                                    'type': _p_change_context(
                                        $['type'],
                                        ($) => ({
                                            'l location': {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            },
                                            'l state': _p.decide.state(
                                                $,
                                                ($): t_out.Number_Type.precision.l_state.exact.type_.l_state => {
                                                    switch ($[0]) {
                                                        case 'integer':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['integer', null],
                                                            )
                                                        case 'natural':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['natural', null],
                                                            )
                                                        case 'positive natural':
                                                            return _p.ss(
                                                                $,
                                                                ($) => ['positive natural', null],
                                                            )
                                                        default:
                                                            return _p.au(
                                                                $[0],
                                                            )
                                                    }
                                                },
                                            ),
                                        }),
                                    ),
                                }],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Module: t_signatures.Module = ($) => ({
    'root value': _p_change_context(
        $['root value'],
        ($) => Value(
            $,
        ),
    ),
})

export const Presence: t_signatures.Presence = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Presence.l_state => {
            switch ($[0]) {
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ['optional', null],
                    )
                case 'required':
                    return _p.ss(
                        $,
                        ($) => ['required', null],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Resolver_Modules: t_signatures.Resolver_Modules = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'signature': _p_change_context(
                    $['signature'],
                    ($) => null,
                ),
                'root value resolver': _p_change_context(
                    $['root value resolver'],
                    ($) => Resolver_Value(
                        $,
                    ),
                ),
            },
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Resolver_Benchmark: t_signatures.Resolver_Benchmark = ($) => ({
    'selection': _p_change_context(
        $['selection'],
        ($) => Resolver_Guaranteed_Value_Selection(
            $['l value'],
        ),
    ),
    'resulting dictionary': _p_change_context(
        $['resulting dictionary'],
        ($) => null,
    ),
    'dense': _p_change_context(
        $['dense'],
        ($) => $,
    ),
})

export const Group: t_signatures.Group = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'description': _p_change_context(
                    $['description'],
                    ($) => _p.optional.from.optional(
                        $,
                    ).map(
                        ($) => $,
                    ),
                ),
                'value': _p_change_context(
                    $['value'],
                    ($) => Value(
                        $,
                    ),
                ),
            },
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Value_Reference: t_signatures.Value_Reference = ($) => ({
    'module': _p_change_context(
        $['module'],
        ($) => Module_Reference(
            $,
        ),
    ),
    'path': _p_change_context(
        $['path'],
        ($) => Value_Path(
            $,
        ),
    ),
})

export const Value_Path: t_signatures.Value_Path = ($) => ({
    'tail': _p_change_context(
        $['tail'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l list': _p.list.from.list(
                $['l value'],
            ).map(
                ($) => ({
                    'l item': _p_change_context(
                        $['l item'],
                        ($) => ({
                            'l location': {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            },
                            'l state': _p.decide.state(
                                $['l value'],
                                ($): t_out.Value_Path.tail.l_list.L.l_item.l_state => {
                                    switch ($[0]) {
                                        case 'dictionary':
                                            return _p.ss(
                                                $,
                                                ($) => ['dictionary', null],
                                            )
                                        case 'group':
                                            return _p.ss(
                                                $,
                                                ($) => ['group', {
                                                    'l location': {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    },
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        case 'list':
                                            return _p.ss(
                                                $,
                                                ($) => ['list', null],
                                            )
                                        case 'optional':
                                            return _p.ss(
                                                $,
                                                ($) => ['optional', null],
                                            )
                                        case 'state':
                                            return _p.ss(
                                                $,
                                                ($) => ['state', {
                                                    'l location': {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    },
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }),
                    ),
                    'l location': {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                    },
                }),
            ),
        }),
    ),
    'resulting node': _p_change_context(
        $['resulting node'],
        ($) => null,
    ),
})

export const Module_Reference: t_signatures.Module_Reference = ($) => ({
    'location': _p_change_context(
        $['location'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Module_Reference.location.l_state => {
                    switch ($[0]) {
                        case 'internal':
                            return _p.ss(
                                $,
                                ($) => ['internal', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'external':
                            return _p.ss(
                                $,
                                ($) => ['external', {
                                    'import': _p_change_context(
                                        $['import'],
                                        ($) => ({
                                            'l location': {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            },
                                            'l reference': $['l id'],
                                        }),
                                    ),
                                    'module': _p_change_context(
                                        $['module'],
                                        ($) => ({
                                            'l location': {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            },
                                            'l reference': $['l id'],
                                        }),
                                    ),
                                }],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'resulting module': _p_change_context(
        $['resulting module'],
        ($) => null,
    ),
})

export const Resolver_Signature: t_signatures.Resolver_Signature = ($) => ({
    'module': _p_change_context(
        $['module'],
        ($) => null,
    ),
    'parameters': _p_change_context(
        $['parameters'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Resolver_Signature.parameters.l_state => {
                    switch ($[0]) {
                        case 'local':
                            return _p.ss(
                                $,
                                ($) => ['local', Resolver_Signature_Parameters(
                                    $,
                                )],
                            )
                        case 'same as':
                            return _p.ss(
                                $,
                                ($) => ['same as', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l reference': $['l id'],
                                }],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'resolved parameters': _p_change_context(
        $['resolved parameters'],
        ($) => null,
    ),
})

export const Resolver_Relative_Value_Selection: t_signatures.Resolver_Relative_Value_Selection = ($) => ({
    'path': _p_change_context(
        $['path'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l list': _p.list.from.list(
                $['l value'],
            ).map(
                ($) => ({
                    'l item': _p_change_context(
                        $['l item'],
                        ($) => ({
                            'l location': {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Resolver_Relative_Value_Selection.path.l_list.L.l_item.l_state => {
                                    switch ($[0]) {
                                        case 'component':
                                            return _p.ss(
                                                $,
                                                ($) => ['component', null],
                                            )
                                        case 'group':
                                            return _p.ss(
                                                $,
                                                ($) => ['group', {
                                                    'l location': {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    },
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        case 'reference':
                                            return _p.ss(
                                                $,
                                                ($) => ['reference', {
                                                    'definition': _p_change_context(
                                                        $['definition'],
                                                        ($) => null,
                                                    ),
                                                }],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }),
                    ),
                    'l location': {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                        },
                    },
                }),
            ),
        }),
    ),
    'resulting node': _p_change_context(
        $['resulting node'],
        ($) => null,
    ),
})

export const Resolver_Lookup_Selection: t_signatures.Resolver_Lookup_Selection = ($) => ({
    'type': _p_change_context(
        $['type'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Resolver_Lookup_Selection.type_.l_state => {
                    switch ($[0]) {
                        case 'acyclic':
                            return _p.ss(
                                $,
                                ($) => ['acyclic', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Resolver_Lookup_Selection.type_.l_state.acyclic.l_state => {
                                            switch ($[0]) {
                                                case 'siblings':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['siblings', null],
                                                    )
                                                case 'resolved dictionary':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['resolved dictionary', {
                                                            'selection': _p_change_context(
                                                                $['selection'],
                                                                ($) => Resolver_Guaranteed_Value_Selection(
                                                                    $,
                                                                ),
                                                            ),
                                                            'selected dictionary': _p_change_context(
                                                                $['selected dictionary'],
                                                                ($) => null,
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }],
                            )
                        case 'cyclic':
                            return _p.ss(
                                $,
                                ($) => ['cyclic', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Resolver_Lookup_Selection.type_.l_state.cyclic.l_state => {
                                            switch ($[0]) {
                                                case 'siblings':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['siblings', null],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }],
                            )
                        case 'parameter':
                            return _p.ss(
                                $,
                                ($) => ['parameter', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l reference': $['l id'],
                                }],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'resulting dictionary': _p_change_context(
        $['resulting dictionary'],
        ($) => null,
    ),
})

export const Resolver_Contraint: t_signatures.Resolver_Contraint = ($) => ({
    'selection': _p_change_context(
        $['selection'],
        ($) => Resolver_Relative_Value_Selection(
            $,
        ),
    ),
    'type': _p_change_context(
        $['type'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Resolver_Contraint.type_.l_state => {
                    switch ($[0]) {
                        case 'state':
                            return _p.ss(
                                $,
                                ($) => ['state', {
                                    'selected state': _p_change_context(
                                        $['selected state'],
                                        ($) => null,
                                    ),
                                    'option': _p_change_context(
                                        $['option'],
                                        ($) => ({
                                            'l location': {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            },
                                            'l reference': $['l id'],
                                        }),
                                    ),
                                }],
                            )
                        case 'optional value':
                            return _p.ss(
                                $,
                                ($) => ['optional value', {
                                    'selected optional value': _p_change_context(
                                        $['selected optional value'],
                                        ($) => null,
                                    ),
                                }],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Resolver_Option_Constraints: t_signatures.Resolver_Option_Constraints = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'l location': {
                    'start': {
                        'absolute': 42,
                        'relative': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                    },
                    'end': {
                        'absolute': 42,
                        'relative': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                    },
                },
                'l state': _p.decide.state(
                    $,
                    ($): t_out.Resolver_Option_Constraints.l_dictionary.D.l_entry.l_state => {
                        switch ($[0]) {
                            case 'state':
                                return _p.ss(
                                    $,
                                    ($) => ['state', {
                                        'selection': _p_change_context(
                                            $['selection'],
                                            ($) => Resolver_Guaranteed_Value_Selection(
                                                $,
                                            ),
                                        ),
                                        'selected state': _p_change_context(
                                            $['selected state'],
                                            ($) => null,
                                        ),
                                        'option': _p_change_context(
                                            $['option'],
                                            ($) => ({
                                                'l location': {
                                                    'start': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'document resource identifier': "implement me",
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                    'end': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'document resource identifier': "implement me",
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                },
                                                'l reference': $['l id'],
                                            }),
                                        ),
                                    }],
                                )
                            case 'assert is set':
                                return _p.ss(
                                    $,
                                    ($) => ['assert is set', Resolver_Possible_Value_Selection(
                                        $,
                                    )],
                                )
                            default:
                                return _p.au(
                                    $[0],
                                )
                        }
                    },
                ),
            },
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Optional_Value_Constraint_Resolvers: t_signatures.Optional_Value_Constraint_Resolvers = ($) => _p.optional.from.optional(
    $,
).map(
    ($) => Resolver_Value_Constraints(
        $,
    ),
)

export const Resolver_Value_Constraints: t_signatures.Resolver_Value_Constraints = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': Value_Constraint_Resolver(
                $,
            ),
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Reference_To_Value_Constraint_Resolver: t_signatures.Reference_To_Value_Constraint_Resolver = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l reference': $['l id'],
})

export const Value_Constraint_Resolver: t_signatures.Value_Constraint_Resolver = ($) => ({
    'start': _p_change_context(
        $['start'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Value_Constraint_Resolver.start.l_state => {
                    switch ($[0]) {
                        case 'value':
                            return _p.ss(
                                $,
                                ($) => ['value', null],
                            )
                        case 'sibling':
                            return _p.ss(
                                $,
                                ($) => ['sibling', Reference_To_Value_Constraint_Resolver(
                                    $,
                                )],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'constraint': _p_change_context(
        $['constraint'],
        ($) => Resolver_Contraint(
            $,
        ),
    ),
})

export const Resolver_Optional_Value_Initialization: t_signatures.Resolver_Optional_Value_Initialization = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Resolver_Optional_Value_Initialization.l_state => {
            switch ($[0]) {
                case 'not set':
                    return _p.ss(
                        $,
                        ($) => ['not set', null],
                    )
                case 'set':
                    return _p.ss(
                        $,
                        ($) => ['set', Resolver_Guaranteed_Value_Selection(
                            $,
                        )],
                    )
                case 'selection':
                    return _p.ss(
                        $,
                        ($) => ['selection', Resolver_Possible_Value_Selection(
                            $,
                        )],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Value_Resolver_Group: t_signatures.Value_Resolver_Group = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l dictionary': _p.dictionary.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'definition': _p_change_context(
                    $['definition'],
                    ($) => null,
                ),
                'resolver': _p_change_context(
                    $['resolver'],
                    ($) => Resolver_Value(
                        $,
                    ),
                ),
            },
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
        }),
    ),
})

export const Value_Resolver_List_Result: t_signatures.Value_Resolver_List_Result = ($) => Module_Reference(
    $,
)

export const Value_Results: t_signatures.Value_Results = ($) => _p.optional.from.optional(
    $,
).map(
    ($) => ({
        'l location': {
            'start': {
                'absolute': 42,
                'relative': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
            },
            'end': {
                'absolute': 42,
                'relative': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
            },
        },
        'l dictionary': _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'l entry': Value_Reference(
                    $,
                ),
                'l location': {
                    'start': {
                        'absolute': 42,
                        'relative': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                    },
                    'end': {
                        'absolute': 42,
                        'relative': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                    },
                },
            }),
        ),
    }),
)

export const Option_Constraints: t_signatures.Option_Constraints = ($) => _p.optional.from.optional(
    $,
).map(
    ($) => ({
        'l location': {
            'start': {
                'absolute': 42,
                'relative': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
            },
            'end': {
                'absolute': 42,
                'relative': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
            },
        },
        'l dictionary': _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'l entry': Value_Reference(
                    $,
                ),
                'l location': {
                    'start': {
                        'absolute': 42,
                        'relative': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                    },
                    'end': {
                        'absolute': 42,
                        'relative': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                    },
                },
            }),
        ),
    }),
)

export const Resolver_Guaranteed_Value_Selection: t_signatures.Resolver_Guaranteed_Value_Selection = ($) => ({
    'start': _p_change_context(
        $['start'],
        ($) => ({
            'l location': {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                },
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Resolver_Guaranteed_Value_Selection.start.l_state => {
                    switch ($[0]) {
                        case 'sibling':
                            return _p.ss(
                                $,
                                ($) => ['sibling', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'parent sibling':
                            return _p.ss(
                                $,
                                ($) => ['parent sibling', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'option constraint':
                            return _p.ss(
                                $,
                                ($) => ['option constraint', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'list cursor':
                            return _p.ss(
                                $,
                                ($) => ['list cursor', null],
                            )
                        case 'linked entry':
                            return _p.ss(
                                $,
                                ($) => ['linked entry', null],
                            )
                        case 'constraint':
                            return _p.ss(
                                $,
                                ($) => ['constraint', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Resolver_Guaranteed_Value_Selection.start.l_state.constraint.l_state => {
                                            switch ($[0]) {
                                                case 'component':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['component', {
                                                            'property': _p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'constraint': _p_change_context(
                                                                $['constraint'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                        }],
                                                    )
                                                case 'reference':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['reference', {
                                                            'property': _p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'constraint': _p_change_context(
                                                                $['constraint'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }],
                            )
                        case 'parameter':
                            return _p.ss(
                                $,
                                ($) => ['parameter', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'result':
                            return _p.ss(
                                $,
                                ($) => ['result', {
                                    'l location': {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Resolver_Guaranteed_Value_Selection.start.l_state.result.l_state => {
                                            switch ($[0]) {
                                                case 'list':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['list', {
                                                            'property': _p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'list result': _p_change_context(
                                                                $['list result'],
                                                                ($) => null,
                                                            ),
                                                        }],
                                                    )
                                                case 'state':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['state', {
                                                            'property': _p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'state': _p_change_context(
                                                                $['state'],
                                                                ($) => null,
                                                            ),
                                                            'result': _p_change_context(
                                                                $['result'],
                                                                ($) => Module_Reference(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'optional value':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['optional value', {
                                                            'property': _p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'document resource identifier': "implement me",
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    },
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'optional value': _p_change_context(
                                                                $['optional value'],
                                                                ($) => null,
                                                            ),
                                                            'result': _p_change_context(
                                                                $['result'],
                                                                ($) => Module_Reference(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'tail': _p_change_context(
        $['tail'],
        ($) => Resolver_Relative_Value_Selection(
            $,
        ),
    ),
    'resulting node': _p_change_context(
        $['resulting node'],
        ($) => null,
    ),
})

export const Resolver_Possible_Value_Selection: t_signatures.Resolver_Possible_Value_Selection = ($) => ({
    'l location': {
        'start': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        },
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Resolver_Possible_Value_Selection.l_state => {
            switch ($[0]) {
                case 'parameter':
                    return _p.ss(
                        $,
                        ($) => ['parameter', {
                            'l location': {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            },
                            'l reference': $['l id'],
                        }],
                    )
                case 'result':
                    return _p.ss(
                        $,
                        ($) => ['result', {
                            'l location': {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Resolver_Possible_Value_Selection.l_state.result.l_state => {
                                    switch ($[0]) {
                                        case 'state':
                                            return _p.ss(
                                                $,
                                                ($) => ['state', {
                                                    'property': _p_change_context(
                                                        $['property'],
                                                        ($) => ({
                                                            'l location': {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            },
                                                            'l reference': $['l id'],
                                                        }),
                                                    ),
                                                    'state': _p_change_context(
                                                        $['state'],
                                                        ($) => null,
                                                    ),
                                                    'result': _p_change_context(
                                                        $['result'],
                                                        ($) => Module_Reference(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            )
                                        case 'optional value':
                                            return _p.ss(
                                                $,
                                                ($) => ['optional value', {
                                                    'property': _p_change_context(
                                                        $['property'],
                                                        ($) => ({
                                                            'l location': {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            },
                                                            'l reference': $['l id'],
                                                        }),
                                                    ),
                                                    'optional value': _p_change_context(
                                                        $['optional value'],
                                                        ($) => null,
                                                    ),
                                                    'result': _p_change_context(
                                                        $['result'],
                                                        ($) => Module_Reference(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            )
                                        default:
                                            return _p.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    ),
})
