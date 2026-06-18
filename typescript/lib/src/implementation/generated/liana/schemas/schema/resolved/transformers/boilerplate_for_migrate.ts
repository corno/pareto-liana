
import * as p_ from 'pareto-core/dist/implementation/transformer'

import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/schema/signatures/resolved/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const Package: t_signatures.Package = ($) => ({
    'omit (de)serializer': p_change_context(
        $['omit (de)serializer'],
        ($) => $,
    ),
    'schema tree': p_change_context(
        $['schema tree'],
        ($) => Schema_Tree(
            $,
        ),
    ),
})

export const Schemas: t_signatures.Schemas = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': Schema_Tree(
                $,
            ),
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Schema: t_signatures.Schema = ($) => ({
    'schema imports': p_change_context(
        $['schema imports'],
        ($) => Schema_Imports(
            $,
        ),
    ),
    'resolver imports': p_change_context(
        $['resolver imports'],
        ($) => Resolver_Imports(
            $,
        ),
    ),
    'globals': p_change_context(
        $['globals'],
        ($) => Globals(
            $,
        ),
    ),
    'modules': p_change_context(
        $['modules'],
        ($) => Modules(
            $,
        ),
    ),
    'complexity': p_change_context(
        $['complexity'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Schema.complexity.l_state => {
                    switch ($[0]) {
                        case 'constrained':
                            return p_.ss(
                                $,
                                ($) => ['constrained', Resolver(
                                    $,
                                )],
                            )
                        case 'unconstrained':
                            return p_.ss(
                                $,
                                ($) => ['unconstrained', null],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Schema_Imports: t_signatures.Schema_Imports = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'schema set child': p_change_context(
                    $['schema set child'],
                    ($) => ({
                        'l location': ['in main document', {
                            'start': {
                                'absolute': 42,
                                'relative': {
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                            'end': {
                                'absolute': 42,
                                'relative': {
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                        }],
                        'l reference': $['l value']['l id'],
                    }),
                ),
                'schema': p_change_context(
                    $['schema'],
                    ($) => null,
                ),
            },
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Modules: t_signatures.Modules = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': Module(
                $,
            ),
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Globals: t_signatures.Globals = ($) => ({
    'complexity': p_change_context(
        $['complexity'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Globals.complexity.l_state => {
                    switch ($[0]) {
                        case 'constrained':
                            return p_.ss(
                                $,
                                ($) => ['constrained', null],
                            )
                        case 'unconstrained':
                            return p_.ss(
                                $,
                                ($) => ['unconstrained', null],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'text types': p_change_context(
        $['text types'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary(
                $,
            ).map(
                ($, id) => ({
                    'l entry': Text_Type(
                        $,
                    ),
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'simple types': p_change_context(
        $['simple types'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary(
                $,
            ).map(
                ($, id) => ({
                    'l entry': Simple_Type(
                        $,
                    ),
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
})

export const Dictionary: t_signatures.Dictionary = ($) => ({
    'value': p_change_context(
        $['value'],
        ($) => Value(
            $,
        ),
    ),
})

export const Value: t_signatures.Value = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l state': p_decide_state(
        $,
        ($): t_out.Value.l_state => {
            switch ($[0]) {
                case 'component':
                    return p_.ss(
                        $,
                        ($) => ['component', {
                            'type': p_change_context(
                                $['type'],
                                ($) => ({
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l state': p_decide_state(
                                        $,
                                        ($): t_out.Value.l_state.component.type_.l_state => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['external', {
                                                            'import': p_change_context(
                                                                $['import'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'module': p_change_context(
                                                                $['module'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                        }],
                                                    )
                                                case 'internal':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['internal', {
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                            'l reference': $['l id'],
                                                        }],
                                                    )
                                                case 'internal acyclic':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['internal acyclic', {
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                            'l reference': $['l id'],
                                                        }],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }),
                            ),
                            'results': p_change_context(
                                $['results'],
                                ($) => Value_Results(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'dictionary':
                    return p_.ss(
                        $,
                        ($) => ['dictionary', Dictionary(
                            $,
                        )],
                    )
                case 'group':
                    return p_.ss(
                        $,
                        ($) => ['group', Group(
                            $,
                        )],
                    )
                case 'list':
                    return p_.ss(
                        $,
                        ($) => ['list', {
                            'value': p_change_context(
                                $['value'],
                                ($) => Value(
                                    $,
                                ),
                            ),
                            'results': p_change_context(
                                $['results'],
                                ($) => Value_Results(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'nothing':
                    return p_.ss(
                        $,
                        ($) => ['nothing', null],
                    )
                case 'simple':
                    return p_.ss(
                        $,
                        ($) => ['simple', {
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l state': p_decide_state(
                                $,
                                ($): t_out.Value.l_state.simple.l_state => {
                                    switch ($[0]) {
                                        case 'global':
                                            return p_.ss(
                                                $,
                                                ($) => ['global', {
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }],
                    )
                case 'optional':
                    return p_.ss(
                        $,
                        ($) => ['optional', Value(
                            $,
                        )],
                    )
                case 'reference':
                    return p_.ss(
                        $,
                        ($) => ['reference', {
                            'referent': p_change_context(
                                $['referent'],
                                ($) => Value_Reference(
                                    $,
                                ),
                            ),
                            'type': p_change_context(
                                $['type'],
                                ($) => ({
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l state': p_decide_state(
                                        $,
                                        ($): t_out.Value.l_state.reference.type_.l_state => {
                                            switch ($[0]) {
                                                case 'derived':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['derived', null],
                                                    )
                                                case 'selected':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['selected', {
                                                            'dictionary': p_change_context(
                                                                $['dictionary'],
                                                                ($) => null,
                                                            ),
                                                            'dependency': p_change_context(
                                                                $['dependency'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l state': p_decide_state(
                                                                        $,
                                                                        ($): t_out.Value.l_state.reference.type_.l_state.selected.dependency.l_state => {
                                                                            switch ($[0]) {
                                                                                case 'acyclic':
                                                                                    return p_.ss(
                                                                                        $,
                                                                                        ($) => ['acyclic', null],
                                                                                    )
                                                                                case 'cyclic':
                                                                                    return p_.ss(
                                                                                        $,
                                                                                        ($) => ['cyclic', null],
                                                                                    )
                                                                                case 'stack':
                                                                                    return p_.ss(
                                                                                        $,
                                                                                        ($) => ['stack', null],
                                                                                    )
                                                                                default:
                                                                                    return p_.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    ),
                                                                }),
                                                            ),
                                                            'results': p_change_context(
                                                                $['results'],
                                                                ($) => Value_Results(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return p_.au(
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
                    return p_.ss(
                        $,
                        ($) => ['state', {
                            'options': p_change_context(
                                $['options'],
                                ($) => ({
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l dictionary': p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ({
                                            'l entry': {
                                                'constraints': p_change_context(
                                                    $['constraints'],
                                                    ($) => Option_Constraints(
                                                        $,
                                                    ),
                                                ),
                                                'description': p_change_context(
                                                    $['description'],
                                                    ($) => p_.from.optional(
                                                        $,
                                                    ).map(
                                                        ($) => $,
                                                    ),
                                                ),
                                                'value': p_change_context(
                                                    $['value'],
                                                    ($) => Value(
                                                        $,
                                                    ),
                                                ),
                                            },
                                            'l location': ['in main document', {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            }],
                                        }),
                                    ),
                                }),
                            ),
                            'results': p_change_context(
                                $['results'],
                                ($) => Value_Results(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'text':
                    return p_.ss(
                        $,
                        ($) => ['text', {
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l state': p_decide_state(
                                $,
                                ($): t_out.Value.l_state.text.l_state => {
                                    switch ($[0]) {
                                        case 'global':
                                            return p_.ss(
                                                $,
                                                ($) => ['global', {
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        case 'local':
                                            return p_.ss(
                                                $,
                                                ($) => ['local', Text_Type(
                                                    $,
                                                )],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Resolver: t_signatures.Resolver = ($) => ({
    'signatures': p_change_context(
        $['signatures'],
        ($) => ({
            'signatures': p_change_context(
                $['signatures'],
                ($) => Resolver_Signatures(
                    $,
                ),
            ),
        }),
    ),
    'modules': p_change_context(
        $['modules'],
        ($) => Resolver_Modules(
            $,
        ),
    ),
})

export const Resolver_Imports: t_signatures.Resolver_Imports = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'schema set child': p_change_context(
                    $['schema set child'],
                    ($) => ({
                        'l location': ['in main document', {
                            'start': {
                                'absolute': 42,
                                'relative': {
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                            'end': {
                                'absolute': 42,
                                'relative': {
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                        }],
                        'l reference': $['l value']['l id'],
                    }),
                ),
                'resolver': p_change_context(
                    $['resolver'],
                    ($) => null,
                ),
            },
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Resolver_Signatures: t_signatures.Resolver_Signatures = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': Resolver_Signature(
                $,
            ),
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Resolver_Signature_Parameters: t_signatures.Resolver_Signature_Parameters = ($) => ({
    'modules': p_change_context(
        $['modules'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary(
                $,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'module': p_change_context(
                            $['module'],
                            ($) => Module_Reference(
                                $,
                            ),
                        ),
                        'presence': p_change_context(
                            $['presence'],
                            ($) => Presence(
                                $,
                            ),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'lookups': p_change_context(
        $['lookups'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary(
                $,
            ).map(
                ($, id) => ({
                    'l entry': {
                        'referent': p_change_context(
                            $['referent'],
                            ($) => Module_Reference(
                                $,
                            ),
                        ),
                        'dictionary': p_change_context(
                            $['dictionary'],
                            ($) => null,
                        ),
                        'type': p_change_context(
                            $['type'],
                            ($) => ({
                                'l location': ['in main document', {
                                    'start': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                    'end': {
                                        'absolute': 42,
                                        'relative': {
                                            'line': 42,
                                            'column': 42,
                                        },
                                    },
                                }],
                                'l state': p_decide_state(
                                    $,
                                    ($): t_out.Resolver_Signature_Parameters.lookups.l_dictionary.D.l_entry.type_.l_state => {
                                        switch ($[0]) {
                                            case 'cyclic':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['cyclic', null],
                                                )
                                            case 'acyclic':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['acyclic', null],
                                                )
                                            case 'stack':
                                                return p_.ss(
                                                    $,
                                                    ($) => ['stack', null],
                                                )
                                            default:
                                                return p_.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                ),
                            }),
                        ),
                        'presence': p_change_context(
                            $['presence'],
                            ($) => Presence(
                                $,
                            ),
                        ),
                    },
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
})

export const Resolver_Value: t_signatures.Resolver_Value = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l state': p_decide_state(
        $,
        ($): t_out.Resolver_Value.l_state => {
            switch ($[0]) {
                case 'component':
                    return p_.ss(
                        $,
                        ($) => ['component', {
                            'definition': p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'location': p_change_context(
                                $['location'],
                                ($) => ({
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l state': p_decide_state(
                                        $,
                                        ($): t_out.Resolver_Value.l_state.component.location.l_state => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['external', {
                                                            'schema import': p_change_context(
                                                                $['schema import'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'resolver import': p_change_context(
                                                                $['resolver import'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'signature': p_change_context(
                                                                $['signature'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                        }],
                                                    )
                                                case 'internal':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['internal', {
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                            'l reference': $['l id'],
                                                        }],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }),
                            ),
                            'signature': p_change_context(
                                $['signature'],
                                ($) => null,
                            ),
                            'arguments': p_change_context(
                                $['arguments'],
                                ($) => p_.from.optional(
                                    $,
                                ).map(
                                    ($) => ({
                                        'modules': p_change_context(
                                            $['modules'],
                                            ($) => p_.from.optional(
                                                $,
                                            ).map(
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l dictionary': p_.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l state': p_decide_state(
                                                                    $,
                                                                    ($): t_out.Resolver_Value.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry.l_state => {
                                                                        switch ($[0]) {
                                                                            case 'optional':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['optional', Resolver_Optional_Value_Initialization(
                                                                                        $,
                                                                                    )],
                                                                                )
                                                                            case 'required':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['required', Resolver_Guaranteed_Value_Selection(
                                                                                        $,
                                                                                    )],
                                                                                )
                                                                            case 'parameter':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['parameter', {
                                                                                        'l location': ['in main document', {
                                                                                            'start': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                            'end': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                        }],
                                                                                        'l reference': $['l id'],
                                                                                    }],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            },
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        ),
                                        'lookups': p_change_context(
                                            $['lookups'],
                                            ($) => p_.from.optional(
                                                $,
                                            ).map(
                                                ($) => ({
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l dictionary': p_.from.dictionary(
                                                        $,
                                                    ).map(
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'l location': ['in main document', {
                                                                    'start': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                    'end': {
                                                                        'absolute': 42,
                                                                        'relative': {
                                                                            'line': 42,
                                                                            'column': 42,
                                                                        },
                                                                    },
                                                                }],
                                                                'l state': p_decide_state(
                                                                    $,
                                                                    ($): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state => {
                                                                        switch ($[0]) {
                                                                            case 'stack':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['stack', {
                                                                                        'l location': ['in main document', {
                                                                                            'start': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                            'end': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                        }],
                                                                                        'l state': p_decide_state(
                                                                                            $,
                                                                                            ($): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.stack.l_state => {
                                                                                                switch ($[0]) {
                                                                                                    case 'empty':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['empty', null],
                                                                                                        )
                                                                                                    case 'push':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['push', {
                                                                                                                'stack': p_change_context(
                                                                                                                    $['stack'],
                                                                                                                    ($) => Resolver_Lookup_Selection(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                                'item': p_change_context(
                                                                                                                    $['item'],
                                                                                                                    ($) => Resolver_Lookup_Selection(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                            }],
                                                                                                        )
                                                                                                    default:
                                                                                                        return p_.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'acyclic':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['acyclic', {
                                                                                        'l location': ['in main document', {
                                                                                            'start': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                            'end': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                        }],
                                                                                        'l state': p_decide_state(
                                                                                            $,
                                                                                            ($): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.acyclic.l_state => {
                                                                                                switch ($[0]) {
                                                                                                    case 'not set':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['not set', null],
                                                                                                        )
                                                                                                    default:
                                                                                                        return p_.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'cyclic':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['cyclic', {
                                                                                        'l location': ['in main document', {
                                                                                            'start': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                            'end': {
                                                                                                'absolute': 42,
                                                                                                'relative': {
                                                                                                    'line': 42,
                                                                                                    'column': 42,
                                                                                                },
                                                                                            },
                                                                                        }],
                                                                                        'l state': p_decide_state(
                                                                                            $,
                                                                                            ($): t_out.Resolver_Value.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state.cyclic.l_state => {
                                                                                                switch ($[0]) {
                                                                                                    case 'not set':
                                                                                                        return p_.ss(
                                                                                                            $,
                                                                                                            ($) => ['not set', null],
                                                                                                        )
                                                                                                    default:
                                                                                                        return p_.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'selection':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['selection', Resolver_Lookup_Selection(
                                                                                        $,
                                                                                    )],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            },
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                        }),
                                                    ),
                                                }),
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                            'constraints': p_change_context(
                                $['constraints'],
                                ($) => Resolver_Value_Constraints(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'dictionary':
                    return p_.ss(
                        $,
                        ($) => ['dictionary', {
                            'definition': p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'resolver': p_change_context(
                                $['resolver'],
                                ($) => Resolver_Value(
                                    $,
                                ),
                            ),
                            'benchmark': p_change_context(
                                $['benchmark'],
                                ($) => p_.from.optional(
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
                    return p_.ss(
                        $,
                        ($) => ['group', Resolver_Value_Group(
                            $,
                        )],
                    )
                case 'list':
                    return p_.ss(
                        $,
                        ($) => ['list', {
                            'definition': p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'resolver': p_change_context(
                                $['resolver'],
                                ($) => Resolver_Value(
                                    $,
                                ),
                            ),
                            'result': p_change_context(
                                $['result'],
                                ($) => p_.from.optional(
                                    $,
                                ).map(
                                    ($) => Resolver_Value_List_Result(
                                        $,
                                    ),
                                ),
                            ),
                        }],
                    )
                case 'nothing':
                    return p_.ss(
                        $,
                        ($) => ['nothing', null],
                    )
                case 'simple':
                    return p_.ss(
                        $,
                        ($) => ['simple', null],
                    )
                case 'optional':
                    return p_.ss(
                        $,
                        ($) => ['optional', {
                            'constraints': p_change_context(
                                $['constraints'],
                                ($) => Resolver_Option_Constraints(
                                    $,
                                ),
                            ),
                            'resolver': p_change_context(
                                $['resolver'],
                                ($) => Resolver_Value(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'reference':
                    return p_.ss(
                        $,
                        ($) => ['reference', {
                            'definition': p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'type': p_change_context(
                                $['type'],
                                ($) => ({
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l state': p_decide_state(
                                        $,
                                        ($): t_out.Resolver_Value.l_state.reference.type_.l_state => {
                                            switch ($[0]) {
                                                case 'derived':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['derived', {
                                                            'value': p_change_context(
                                                                $['value'],
                                                                ($) => Resolver_Guaranteed_Value_Selection(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'selected':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['selected', {
                                                            'definition': p_change_context(
                                                                $['definition'],
                                                                ($) => null,
                                                            ),
                                                            'lookup': p_change_context(
                                                                $['lookup'],
                                                                ($) => Resolver_Lookup_Selection(
                                                                    $,
                                                                ),
                                                            ),
                                                            'constraints': p_change_context(
                                                                $['constraints'],
                                                                ($) => Resolver_Value_Constraints(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return p_.au(
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
                    return p_.ss(
                        $,
                        ($) => ['state', {
                            'definition': p_change_context(
                                $['definition'],
                                ($) => null,
                            ),
                            'options': p_change_context(
                                $['options'],
                                ($) => ({
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l dictionary': p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => ({
                                            'l entry': {
                                                'constraints': p_change_context(
                                                    $['constraints'],
                                                    ($) => Resolver_Option_Constraints(
                                                        $,
                                                    ),
                                                ),
                                                'resolver': p_change_context(
                                                    $['resolver'],
                                                    ($) => Resolver_Value(
                                                        $,
                                                    ),
                                                ),
                                            },
                                            'l location': ['in main document', {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            }],
                                        }),
                                    ),
                                }),
                            ),
                        }],
                    )
                case 'text':
                    return p_.ss(
                        $,
                        ($) => ['text', null],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Module_Specification: t_signatures.Module_Specification = ($) => ({
    'schema': p_change_context(
        $['schema'],
        ($) => Schema_Tree(
            $,
        ),
    ),
    'schema path': p_change_context(
        $['schema path'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l list': p_.from.list(
                $,
            ).map(
                ($) => ({
                    'l item': $,
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'complexity': p_change_context(
        $['complexity'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Module_Specification.complexity.l_state => {
                    switch ($[0]) {
                        case 'constrained':
                            return p_.ss(
                                $,
                                ($) => ['constrained', {
                                    'module resolver': p_change_context(
                                        $['module resolver'],
                                        ($) => $,
                                    ),
                                }],
                            )
                        case 'unconstrained':
                            return p_.ss(
                                $,
                                ($) => ['unconstrained', {
                                    'module': p_change_context(
                                        $['module'],
                                        ($) => $,
                                    ),
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l state': p_decide_state(
        $,
        ($): t_out.Schema_Tree.l_state => {
            switch ($[0]) {
                case 'schema':
                    return p_.ss(
                        $,
                        ($) => ['schema', Schema(
                            $,
                        )],
                    )
                case 'set':
                    return p_.ss(
                        $,
                        ($) => ['set', Schemas(
                            $,
                        )],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Text_Type: t_signatures.Text_Type = ($) => ({
    'type': p_change_context(
        $['type'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Text_Type.type_.l_state => {
                    switch ($[0]) {
                        case 'multi line':
                            return p_.ss(
                                $,
                                ($) => ['multi line', null],
                            )
                        case 'single line':
                            return p_.ss(
                                $,
                                ($) => ['single line', null],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'link': p_change_context(
        $['link'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Text_Type.link.l_state => {
                    switch ($[0]) {
                        case 'no':
                            return p_.ss(
                                $,
                                ($) => ['no', null],
                            )
                        case 'yes':
                            return p_.ss(
                                $,
                                ($) => ['yes', {
                                    'path prefix': p_change_context(
                                        $['path prefix'],
                                        ($) => $,
                                    ),
                                    'path suffix': p_change_context(
                                        $['path suffix'],
                                        ($) => $,
                                    ),
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Simple_Type: t_signatures.Simple_Type = ($) => ({
    'type': p_change_context(
        $['type'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Simple_Type.type_.l_state => {
                    switch ($[0]) {
                        case 'boolean':
                            return p_.ss(
                                $,
                                ($) => ['boolean', null],
                            )
                        case 'date':
                            return p_.ss(
                                $,
                                ($) => ['date', null],
                            )
                        case 'number':
                            return p_.ss(
                                $,
                                ($) => ['number', {
                                    'precision': p_change_context(
                                        $['precision'],
                                        ($) => ({
                                            'l location': ['in main document', {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            }],
                                            'l state': p_decide_state(
                                                $,
                                                ($): t_out.Simple_Type.type_.l_state.number_.precision.l_state => {
                                                    switch ($[0]) {
                                                        case 'approximation':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['approximation', {
                                                                    'significant digits': p_change_context(
                                                                        $['significant digits'],
                                                                        ($) => $,
                                                                    ),
                                                                }],
                                                            )
                                                        case 'exact':
                                                            return p_.ss(
                                                                $,
                                                                ($) => ['exact', {
                                                                    'number of fractional digits': p_change_context(
                                                                        $['number of fractional digits'],
                                                                        ($) => p_.from.optional(
                                                                            $,
                                                                        ).map(
                                                                            ($) => $,
                                                                        ),
                                                                    ),
                                                                    'type': p_change_context(
                                                                        $['type'],
                                                                        ($) => ({
                                                                            'l location': ['in main document', {
                                                                                'start': {
                                                                                    'absolute': 42,
                                                                                    'relative': {
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                },
                                                                                'end': {
                                                                                    'absolute': 42,
                                                                                    'relative': {
                                                                                        'line': 42,
                                                                                        'column': 42,
                                                                                    },
                                                                                },
                                                                            }],
                                                                            'l state': p_decide_state(
                                                                                $,
                                                                                ($): t_out.Simple_Type.type_.l_state.number_.precision.l_state.exact.type_.l_state => {
                                                                                    switch ($[0]) {
                                                                                        case 'integer':
                                                                                            return p_.ss(
                                                                                                $,
                                                                                                ($) => ['integer', null],
                                                                                            )
                                                                                        case 'natural':
                                                                                            return p_.ss(
                                                                                                $,
                                                                                                ($) => ['natural', null],
                                                                                            )
                                                                                        case 'positive natural':
                                                                                            return p_.ss(
                                                                                                $,
                                                                                                ($) => ['positive natural', null],
                                                                                            )
                                                                                        default:
                                                                                            return p_.au(
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
                                                            return p_.au(
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
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Module: t_signatures.Module = ($) => ({
    'root value': p_change_context(
        $['root value'],
        ($) => Value(
            $,
        ),
    ),
})

export const Presence: t_signatures.Presence = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l state': p_decide_state(
        $,
        ($): t_out.Presence.l_state => {
            switch ($[0]) {
                case 'optional':
                    return p_.ss(
                        $,
                        ($) => ['optional', null],
                    )
                case 'required':
                    return p_.ss(
                        $,
                        ($) => ['required', null],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Resolver_Modules: t_signatures.Resolver_Modules = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'signature': p_change_context(
                    $['signature'],
                    ($) => null,
                ),
                'root value resolver': p_change_context(
                    $['root value resolver'],
                    ($) => Resolver_Value(
                        $,
                    ),
                ),
            },
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Resolver_Benchmark: t_signatures.Resolver_Benchmark = ($) => ({
    'selection': p_change_context(
        $['selection'],
        ($) => Resolver_Guaranteed_Value_Selection(
            $['l value'],
        ),
    ),
    'resulting dictionary': p_change_context(
        $['resulting dictionary'],
        ($) => null,
    ),
    'dense': p_change_context(
        $['dense'],
        ($) => $,
    ),
})

export const Group: t_signatures.Group = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'description': p_change_context(
                    $['description'],
                    ($) => p_.from.optional(
                        $,
                    ).map(
                        ($) => $,
                    ),
                ),
                'value': p_change_context(
                    $['value'],
                    ($) => Value(
                        $,
                    ),
                ),
            },
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Value_Reference: t_signatures.Value_Reference = ($) => ({
    'module': p_change_context(
        $['module'],
        ($) => Module_Reference(
            $,
        ),
    ),
    'path': p_change_context(
        $['path'],
        ($) => Value_Path(
            $,
        ),
    ),
})

export const Value_Path: t_signatures.Value_Path = ($) => ({
    'tail': p_change_context(
        $['tail'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l list': p_.from.list(
                $['l value'],
            ).map(
                ($) => ({
                    'l item': p_change_context(
                        $['l item'],
                        ($) => ({
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l state': p_decide_state(
                                $['l value'],
                                ($): t_out.Value_Path.tail.l_list.L.l_item.l_state => {
                                    switch ($[0]) {
                                        case 'dictionary':
                                            return p_.ss(
                                                $,
                                                ($) => ['dictionary', null],
                                            )
                                        case 'group':
                                            return p_.ss(
                                                $,
                                                ($) => ['group', {
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        case 'list':
                                            return p_.ss(
                                                $,
                                                ($) => ['list', null],
                                            )
                                        case 'optional':
                                            return p_.ss(
                                                $,
                                                ($) => ['optional', null],
                                            )
                                        case 'state':
                                            return p_.ss(
                                                $,
                                                ($) => ['state', {
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }),
                    ),
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'resulting node': p_change_context(
        $['resulting node'],
        ($) => null,
    ),
})

export const Module_Reference: t_signatures.Module_Reference = ($) => ({
    'location': p_change_context(
        $['location'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Module_Reference.location.l_state => {
                    switch ($[0]) {
                        case 'internal':
                            return p_.ss(
                                $,
                                ($) => ['internal', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'external':
                            return p_.ss(
                                $,
                                ($) => ['external', {
                                    'import': p_change_context(
                                        $['import'],
                                        ($) => ({
                                            'l location': ['in main document', {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            }],
                                            'l reference': $['l id'],
                                        }),
                                    ),
                                    'module': p_change_context(
                                        $['module'],
                                        ($) => ({
                                            'l location': ['in main document', {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            }],
                                            'l reference': $['l id'],
                                        }),
                                    ),
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'resulting module': p_change_context(
        $['resulting module'],
        ($) => null,
    ),
})

export const Resolver_Signature: t_signatures.Resolver_Signature = ($) => ({
    'module': p_change_context(
        $['module'],
        ($) => null,
    ),
    'parameters': p_change_context(
        $['parameters'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Resolver_Signature.parameters.l_state => {
                    switch ($[0]) {
                        case 'local':
                            return p_.ss(
                                $,
                                ($) => ['local', Resolver_Signature_Parameters(
                                    $,
                                )],
                            )
                        case 'same as':
                            return p_.ss(
                                $,
                                ($) => ['same as', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'resolved parameters': p_change_context(
        $['resolved parameters'],
        ($) => null,
    ),
})

export const Resolver_Relative_Value_Selection: t_signatures.Resolver_Relative_Value_Selection = ($) => ({
    'path': p_change_context(
        $['path'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l list': p_.from.list(
                $['l value'],
            ).map(
                ($) => ({
                    'l item': p_change_context(
                        $['l item'],
                        ($) => ({
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l state': p_decide_state(
                                $,
                                ($): t_out.Resolver_Relative_Value_Selection.path.l_list.L.l_item.l_state => {
                                    switch ($[0]) {
                                        case 'component':
                                            return p_.ss(
                                                $,
                                                ($) => ['component', null],
                                            )
                                        case 'group':
                                            return p_.ss(
                                                $,
                                                ($) => ['group', {
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        case 'reference':
                                            return p_.ss(
                                                $,
                                                ($) => ['reference', {
                                                    'definition': p_change_context(
                                                        $['definition'],
                                                        ($) => null,
                                                    ),
                                                }],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }),
                    ),
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
    'resulting node': p_change_context(
        $['resulting node'],
        ($) => null,
    ),
})

export const Resolver_Lookup_Selection: t_signatures.Resolver_Lookup_Selection = ($) => ({
    'type': p_change_context(
        $['type'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Resolver_Lookup_Selection.type_.l_state => {
                    switch ($[0]) {
                        case 'acyclic':
                            return p_.ss(
                                $,
                                ($) => ['acyclic', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l state': p_decide_state(
                                        $,
                                        ($): t_out.Resolver_Lookup_Selection.type_.l_state.acyclic.l_state => {
                                            switch ($[0]) {
                                                case 'siblings':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['siblings', null],
                                                    )
                                                case 'resolved dictionary':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['resolved dictionary', {
                                                            'selection': p_change_context(
                                                                $['selection'],
                                                                ($) => Resolver_Guaranteed_Value_Selection(
                                                                    $,
                                                                ),
                                                            ),
                                                            'selected dictionary': p_change_context(
                                                                $['selected dictionary'],
                                                                ($) => null,
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }],
                            )
                        case 'cyclic':
                            return p_.ss(
                                $,
                                ($) => ['cyclic', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l state': p_decide_state(
                                        $,
                                        ($): t_out.Resolver_Lookup_Selection.type_.l_state.cyclic.l_state => {
                                            switch ($[0]) {
                                                case 'siblings':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['siblings', null],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }],
                            )
                        case 'parameter':
                            return p_.ss(
                                $,
                                ($) => ['parameter', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'resulting dictionary': p_change_context(
        $['resulting dictionary'],
        ($) => null,
    ),
})

export const Resolver_Constraint: t_signatures.Resolver_Constraint = ($) => ({
    'selection': p_change_context(
        $['selection'],
        ($) => Resolver_Relative_Value_Selection(
            $,
        ),
    ),
    'type': p_change_context(
        $['type'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Resolver_Constraint.type_.l_state => {
                    switch ($[0]) {
                        case 'state':
                            return p_.ss(
                                $,
                                ($) => ['state', {
                                    'selected state': p_change_context(
                                        $['selected state'],
                                        ($) => null,
                                    ),
                                    'option': p_change_context(
                                        $['option'],
                                        ($) => ({
                                            'l location': ['in main document', {
                                                'start': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                                'end': {
                                                    'absolute': 42,
                                                    'relative': {
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                },
                                            }],
                                            'l reference': $['l id'],
                                        }),
                                    ),
                                }],
                            )
                        case 'optional value':
                            return p_.ss(
                                $,
                                ($) => ['optional value', {
                                    'selected optional value': p_change_context(
                                        $['selected optional value'],
                                        ($) => null,
                                    ),
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})

export const Resolver_Option_Constraints: t_signatures.Resolver_Option_Constraints = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'l location': ['in main document', {
                    'start': {
                        'absolute': 42,
                        'relative': {
                            'line': 42,
                            'column': 42,
                        },
                    },
                    'end': {
                        'absolute': 42,
                        'relative': {
                            'line': 42,
                            'column': 42,
                        },
                    },
                }],
                'l state': p_decide_state(
                    $,
                    ($): t_out.Resolver_Option_Constraints.l_dictionary.D.l_entry.l_state => {
                        switch ($[0]) {
                            case 'state':
                                return p_.ss(
                                    $,
                                    ($) => ['state', {
                                        'selection': p_change_context(
                                            $['selection'],
                                            ($) => Resolver_Guaranteed_Value_Selection(
                                                $,
                                            ),
                                        ),
                                        'selected state': p_change_context(
                                            $['selected state'],
                                            ($) => null,
                                        ),
                                        'option': p_change_context(
                                            $['option'],
                                            ($) => ({
                                                'l location': ['in main document', {
                                                    'start': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                    'end': {
                                                        'absolute': 42,
                                                        'relative': {
                                                            'line': 42,
                                                            'column': 42,
                                                        },
                                                    },
                                                }],
                                                'l reference': $['l id'],
                                            }),
                                        ),
                                    }],
                                )
                            case 'assert is set':
                                return p_.ss(
                                    $,
                                    ($) => ['assert is set', Resolver_Possible_Value_Selection(
                                        $,
                                    )],
                                )
                            default:
                                return p_.au(
                                    $[0],
                                )
                        }
                    },
                ),
            },
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Resolver_Optional_Value_Constraints: t_signatures.Resolver_Optional_Value_Constraints = ($) => p_.from.optional(
    $,
).map(
    ($) => Resolver_Value_Constraints(
        $,
    ),
)

export const Resolver_Value_Constraints: t_signatures.Resolver_Value_Constraints = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': Resolver_Value_Constraint(
                $,
            ),
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Resolver_Reference_To_Value_Constraint: t_signatures.Resolver_Reference_To_Value_Constraint = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l reference': $['l id'],
})

export const Resolver_Value_Constraint: t_signatures.Resolver_Value_Constraint = ($) => ({
    'start': p_change_context(
        $['start'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Resolver_Value_Constraint.start.l_state => {
                    switch ($[0]) {
                        case 'value':
                            return p_.ss(
                                $,
                                ($) => ['value', null],
                            )
                        case 'sibling':
                            return p_.ss(
                                $,
                                ($) => ['sibling', Resolver_Reference_To_Value_Constraint(
                                    $,
                                )],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'constraint': p_change_context(
        $['constraint'],
        ($) => Resolver_Constraint(
            $,
        ),
    ),
})

export const Resolver_Optional_Value_Initialization: t_signatures.Resolver_Optional_Value_Initialization = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l state': p_decide_state(
        $,
        ($): t_out.Resolver_Optional_Value_Initialization.l_state => {
            switch ($[0]) {
                case 'not set':
                    return p_.ss(
                        $,
                        ($) => ['not set', null],
                    )
                case 'set':
                    return p_.ss(
                        $,
                        ($) => ['set', Resolver_Guaranteed_Value_Selection(
                            $,
                        )],
                    )
                case 'selection':
                    return p_.ss(
                        $,
                        ($) => ['selection', Resolver_Possible_Value_Selection(
                            $,
                        )],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Resolver_Value_Group: t_signatures.Resolver_Value_Group = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary(
        $,
    ).map(
        ($, id) => ({
            'l entry': {
                'definition': p_change_context(
                    $['definition'],
                    ($) => null,
                ),
                'resolver': p_change_context(
                    $['resolver'],
                    ($) => Resolver_Value(
                        $,
                    ),
                ),
            },
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Resolver_Value_List_Result: t_signatures.Resolver_Value_List_Result = ($) => Module_Reference(
    $,
)

export const Value_Results: t_signatures.Value_Results = ($) => p_.from.optional(
    $,
).map(
    ($) => ({
        'l location': ['in main document', {
            'start': {
                'absolute': 42,
                'relative': {
                    'line': 42,
                    'column': 42,
                },
            },
            'end': {
                'absolute': 42,
                'relative': {
                    'line': 42,
                    'column': 42,
                },
            },
        }],
        'l dictionary': p_.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'l entry': Value_Reference(
                    $,
                ),
                'l location': ['in main document', {
                    'start': {
                        'absolute': 42,
                        'relative': {
                            'line': 42,
                            'column': 42,
                        },
                    },
                    'end': {
                        'absolute': 42,
                        'relative': {
                            'line': 42,
                            'column': 42,
                        },
                    },
                }],
            }),
        ),
    }),
)

export const Option_Constraints: t_signatures.Option_Constraints = ($) => p_.from.optional(
    $,
).map(
    ($) => ({
        'l location': ['in main document', {
            'start': {
                'absolute': 42,
                'relative': {
                    'line': 42,
                    'column': 42,
                },
            },
            'end': {
                'absolute': 42,
                'relative': {
                    'line': 42,
                    'column': 42,
                },
            },
        }],
        'l dictionary': p_.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'l entry': Value_Reference(
                    $,
                ),
                'l location': ['in main document', {
                    'start': {
                        'absolute': 42,
                        'relative': {
                            'line': 42,
                            'column': 42,
                        },
                    },
                    'end': {
                        'absolute': 42,
                        'relative': {
                            'line': 42,
                            'column': 42,
                        },
                    },
                }],
            }),
        ),
    }),
)

export const Resolver_Guaranteed_Value_Selection: t_signatures.Resolver_Guaranteed_Value_Selection = ($) => ({
    'start': p_change_context(
        $['start'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): t_out.Resolver_Guaranteed_Value_Selection.start.l_state => {
                    switch ($[0]) {
                        case 'sibling':
                            return p_.ss(
                                $,
                                ($) => ['sibling', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'parent sibling':
                            return p_.ss(
                                $,
                                ($) => ['parent sibling', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'option constraint':
                            return p_.ss(
                                $,
                                ($) => ['option constraint', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'list cursor':
                            return p_.ss(
                                $,
                                ($) => ['list cursor', null],
                            )
                        case 'linked entry':
                            return p_.ss(
                                $,
                                ($) => ['linked entry', null],
                            )
                        case 'constraint':
                            return p_.ss(
                                $,
                                ($) => ['constraint', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l state': p_decide_state(
                                        $,
                                        ($): t_out.Resolver_Guaranteed_Value_Selection.start.l_state.constraint.l_state => {
                                            switch ($[0]) {
                                                case 'component':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['component', {
                                                            'property': p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'constraint': p_change_context(
                                                                $['constraint'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                        }],
                                                    )
                                                case 'reference':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['reference', {
                                                            'property': p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'constraint': p_change_context(
                                                                $['constraint'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }],
                            )
                        case 'parameter':
                            return p_.ss(
                                $,
                                ($) => ['parameter', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l reference': $['l id'],
                                }],
                            )
                        case 'result':
                            return p_.ss(
                                $,
                                ($) => ['result', {
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                    'l state': p_decide_state(
                                        $,
                                        ($): t_out.Resolver_Guaranteed_Value_Selection.start.l_state.result.l_state => {
                                            switch ($[0]) {
                                                case 'list':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['list', {
                                                            'property': p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'list result': p_change_context(
                                                                $['list result'],
                                                                ($) => null,
                                                            ),
                                                        }],
                                                    )
                                                case 'state':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['state', {
                                                            'property': p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'state': p_change_context(
                                                                $['state'],
                                                                ($) => null,
                                                            ),
                                                            'result': p_change_context(
                                                                $['result'],
                                                                ($) => Module_Reference(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'optional value':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['optional value', {
                                                            'property': p_change_context(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': ['in main document', {
                                                                        'start': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                        'end': {
                                                                            'absolute': 42,
                                                                            'relative': {
                                                                                'line': 42,
                                                                                'column': 42,
                                                                            },
                                                                        },
                                                                    }],
                                                                    'l reference': $['l id'],
                                                                }),
                                                            ),
                                                            'optional value': p_change_context(
                                                                $['optional value'],
                                                                ($) => null,
                                                            ),
                                                            'result': p_change_context(
                                                                $['result'],
                                                                ($) => Module_Reference(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return p_.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                }],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
    'tail': p_change_context(
        $['tail'],
        ($) => Resolver_Relative_Value_Selection(
            $,
        ),
    ),
    'resulting node': p_change_context(
        $['resulting node'],
        ($) => null,
    ),
})

export const Resolver_Possible_Value_Selection: t_signatures.Resolver_Possible_Value_Selection = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l state': p_decide_state(
        $,
        ($): t_out.Resolver_Possible_Value_Selection.l_state => {
            switch ($[0]) {
                case 'parameter':
                    return p_.ss(
                        $,
                        ($) => ['parameter', {
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l reference': $['l id'],
                        }],
                    )
                case 'result':
                    return p_.ss(
                        $,
                        ($) => ['result', {
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l state': p_decide_state(
                                $,
                                ($): t_out.Resolver_Possible_Value_Selection.l_state.result.l_state => {
                                    switch ($[0]) {
                                        case 'state':
                                            return p_.ss(
                                                $,
                                                ($) => ['state', {
                                                    'property': p_change_context(
                                                        $['property'],
                                                        ($) => ({
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                            'l reference': $['l id'],
                                                        }),
                                                    ),
                                                    'state': p_change_context(
                                                        $['state'],
                                                        ($) => null,
                                                    ),
                                                    'result': p_change_context(
                                                        $['result'],
                                                        ($) => Module_Reference(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            )
                                        case 'optional value':
                                            return p_.ss(
                                                $,
                                                ($) => ['optional value', {
                                                    'property': p_change_context(
                                                        $['property'],
                                                        ($) => ({
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                            'l reference': $['l id'],
                                                        }),
                                                    ),
                                                    'optional value': p_change_context(
                                                        $['optional value'],
                                                        ($) => null,
                                                    ),
                                                    'result': p_change_context(
                                                        $['result'],
                                                        ($) => Module_Reference(
                                                            $,
                                                        ),
                                                    ),
                                                }],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
})
