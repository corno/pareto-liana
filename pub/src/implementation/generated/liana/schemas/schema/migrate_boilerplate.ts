
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/schema/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const Text_Type: t_signatures.Text_Type = ($) => ({
    'type': _p_cc(
        $['type'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Text_Type.type_.l_state => {
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
            ),
        })
    ),
})

export const Number_Type: t_signatures.Number_Type = ($) => ({
    'precision': _p_cc(
        $['precision'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Number_Type.precision.l_state => {
                    switch ($[0]) {
                        case 'approximation':
                            return _p.ss(
                                $,
                                ($) => ['approximation', {
                                    'significant digits': _p_cc(
                                        $['significant digits'],
                                        ($) => $
                                    ),
                                }]
                            )
                        case 'exact':
                            return _p.ss(
                                $,
                                ($) => ['exact', {
                                    'decimal separator offset': _p_cc(
                                        $['decimal separator offset'],
                                        ($) => _p.optional.map(
                                            $,
                                            ($) => $
                                        )
                                    ),
                                    'type': _p_cc(
                                        $['type'],
                                        ($) => ({
                                            'l location': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                            'l state': _p.decide.state(
                                                $,
                                                ($): t_out.Number_Type.precision.l_state.exact.type_.l_state => {
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
                                            ),
                                        })
                                    ),
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
})

export const Globals: t_signatures.Globals = ($) => ({
    'complexity': _p_cc(
        $['complexity'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Globals.complexity.l_state => {
                    switch ($[0]) {
                        case 'constrained':
                            return _p.ss(
                                $,
                                ($) => ['constrained', null]
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
            ),
        })
    ),
    'text types': _p_cc(
        $['text types'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': _p.dictionary.map(
                $,
                ($, id) => ({
                    'l entry': Text_Type(
                        $
                    ),
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'number types': _p_cc(
        $['number types'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': _p.dictionary.map(
                $,
                ($, id) => ({
                    'l entry': Number_Type(
                        $
                    ),
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
})

export const Module: t_signatures.Module = ($) => ({
    'value': _p_cc(
        $['value'],
        ($) => Value(
            $
        )
    ),
})

export const Modules: t_signatures.Modules = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': Module(
                $
            ),
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Resolve_Logic: t_signatures.Resolve_Logic = ($) => ({
    'signatures': _p_cc(
        $['signatures'],
        ($) => ({
            'signatures': _p_cc(
                $['signatures'],
                ($) => Signatures(
                    $
                )
            ),
        })
    ),
    'resolvers': _p_cc(
        $['resolvers'],
        ($) => Resolvers(
            $
        )
    ),
})

export const Schema: t_signatures.Schema = ($) => ({
    'imports': _p_cc(
        $['imports'],
        ($) => Imports(
            $
        )
    ),
    'globals': _p_cc(
        $['globals'],
        ($) => Globals(
            $
        )
    ),
    'modules': _p_cc(
        $['modules'],
        ($) => Modules(
            $
        )
    ),
    'complexity': _p_cc(
        $['complexity'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Schema.complexity.l_state => {
                    switch ($[0]) {
                        case 'constrained':
                            return _p.ss(
                                $,
                                ($) => ['constrained', Resolve_Logic(
                                    $
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
            ),
        })
    ),
})

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Schema_Tree.l_state => {
            switch ($[0]) {
                case 'schema':
                    return _p.ss(
                        $,
                        ($) => ['schema', Schema(
                            $
                        )]
                    )
                case 'set':
                    return _p.ss(
                        $,
                        ($) => ['set', Schemas(
                            $
                        )]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})

export const Type_Specification: t_signatures.Type_Specification = ($) => ({
    'schema': _p_cc(
        $['schema'],
        ($) => Schema_Tree(
            $
        )
    ),
    'schema path': _p_cc(
        $['schema path'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l list': _p.list.map(
                $,
                ($) => ({
                    'l item': $,
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'type': _p_cc(
        $['type'],
        ($) => $
    ),
})

export const Schemas: t_signatures.Schemas = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': Schema_Tree(
                $
            ),
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Imports: t_signatures.Imports = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'schema set child': _p_cc(
                    $['schema set child'],
                    ($) => ({
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l reference': $['l id'],
                    })
                ),
                'schema': _p_cc(
                    $['schema'],
                    ($) => null
                ),
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Presence: t_signatures.Presence = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Presence.l_state => {
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
    ),
})

export const Dictionary: t_signatures.Dictionary = ($) => ({
    'value': _p_cc(
        $['value'],
        ($) => Value(
            $
        )
    ),
})

export const Signatures: t_signatures.Signatures = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': Signature(
                $
            ),
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Resolvers: t_signatures.Resolvers = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'signature': _p_cc(
                    $['signature'],
                    ($) => null
                ),
                'type resolver': _p_cc(
                    $['type resolver'],
                    ($) => Value_Resolver(
                        $
                    )
                ),
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Group: t_signatures.Group = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'description': _p_cc(
                    $['description'],
                    ($) => _p.optional.map(
                        $,
                        ($) => $
                    )
                ),
                'value': _p_cc(
                    $['value'],
                    ($) => Value(
                        $
                    )
                ),
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Value_Resolver_Group: t_signatures.Value_Resolver_Group = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'definition': _p_cc(
                    $['definition'],
                    ($) => null
                ),
                'resolver': _p_cc(
                    $['resolver'],
                    ($) => Value_Resolver(
                        $
                    )
                ),
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Value_Constraints: t_signatures.Value_Constraints = ($) => _p.optional.map(
    $,
    ($) => ({
        'l location': {
            'document resource identifier': "implement me",
            'line': 42,
            'column': 42,
        },
        'l dictionary': _p.dictionary.map(
            $,
            ($, id) => ({
                'l entry': Value_Reference(
                    $
                ),
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
            })
        ),
    })
)

export const Module_Reference: t_signatures.Module_Reference = ($) => ({
    'location': _p_cc(
        $['location'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
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
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l reference': $['l id'],
                                }]
                            )
                        case 'external':
                            return _p.ss(
                                $,
                                ($) => ['external', {
                                    'import': _p_cc(
                                        $['import'],
                                        ($) => ({
                                            'l location': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                            'l reference': $['l id'],
                                        })
                                    ),
                                    'type': _p_cc(
                                        $['type'],
                                        ($) => ({
                                            'l location': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                            'l reference': $['l id'],
                                        })
                                    ),
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
    'resulting type': _p_cc(
        $['resulting type'],
        ($) => null
    ),
})

export const Value: t_signatures.Value = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Value.l_state => {
            switch ($[0]) {
                case 'boolean':
                    return _p.ss(
                        $,
                        ($) => ['boolean', null]
                    )
                case 'component':
                    return _p.ss(
                        $,
                        ($) => ['component', {
                            'type': _p_cc(
                                $['type'],
                                ($) => ({
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Value.l_state.component.type_.l_state => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['external', {
                                                            'import': _p_cc(
                                                                $['import'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                            'type': _p_cc(
                                                                $['type'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                        }]
                                                    )
                                                case 'internal':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal', {
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l reference': $['l id'],
                                                        }]
                                                    )
                                                case 'internal cyclic':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal cyclic', {
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l reference': $['l id'],
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
                            'constraints': _p_cc(
                                $['constraints'],
                                ($) => Value_Constraints(
                                    $
                                )
                            ),
                        }]
                    )
                case 'dictionary':
                    return _p.ss(
                        $,
                        ($) => ['dictionary', Dictionary(
                            $
                        )]
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ['group', Group(
                            $
                        )]
                    )
                case 'list':
                    return _p.ss(
                        $,
                        ($) => ['list', {
                            'value': _p_cc(
                                $['value'],
                                ($) => Value(
                                    $
                                )
                            ),
                            'result': _p_cc(
                                $['result'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => Module_Reference(
                                        $
                                    )
                                )
                            ),
                        }]
                    )
                case 'nothing':
                    return _p.ss(
                        $,
                        ($) => ['nothing', null]
                    )
                case 'number':
                    return _p.ss(
                        $,
                        ($) => ['number', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
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
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l reference': $['l id'],
                                                }]
                                            )
                                        case 'local':
                                            return _p.ss(
                                                $,
                                                ($) => ['local', Number_Type(
                                                    $
                                                )]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            ),
                        }]
                    )
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ['optional', Value(
                            $
                        )]
                    )
                case 'reference':
                    return _p.ss(
                        $,
                        ($) => ['reference', {
                            'referent': _p_cc(
                                $['referent'],
                                ($) => Value_Reference(
                                    $
                                )
                            ),
                            'type': _p_cc(
                                $['type'],
                                ($) => ({
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Value.l_state.reference.type_.l_state => {
                                            switch ($[0]) {
                                                case 'derived':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['derived', null]
                                                    )
                                                case 'selected':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['selected', {
                                                            'dictionary': _p_cc(
                                                                $['dictionary'],
                                                                ($) => null
                                                            ),
                                                            'dependency': _p_cc(
                                                                $['dependency'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l state': _p.decide.state(
                                                                        $,
                                                                        ($): t_out.Value.l_state.reference.type_.l_state.selected.dependency.l_state => {
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
                                                                    ),
                                                                })
                                                            ),
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
                        }]
                    )
                case 'state':
                    return _p.ss(
                        $,
                        ($) => ['state', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l dictionary': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': {
                                        'description': _p_cc(
                                            $['description'],
                                            ($) => _p.optional.map(
                                                $,
                                                ($) => $
                                            )
                                        ),
                                        'value': _p_cc(
                                            $['value'],
                                            ($) => Value(
                                                $
                                            )
                                        ),
                                    },
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                })
                            ),
                        }]
                    )
                case 'text':
                    return _p.ss(
                        $,
                        ($) => ['text', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
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
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l reference': $['l id'],
                                                }]
                                            )
                                        case 'local':
                                            return _p.ss(
                                                $,
                                                ($) => ['local', Text_Type(
                                                    $
                                                )]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            ),
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

export const Option_Constraints: t_signatures.Option_Constraints = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'l location': {
                    'document resource identifier': "implement me",
                    'line': 42,
                    'column': 42,
                },
                'l state': _p.decide.state(
                    $,
                    ($): t_out.Option_Constraints.l_dictionary.D.l_entry.l_state => {
                        switch ($[0]) {
                            case 'state':
                                return _p.ss(
                                    $,
                                    ($) => ['state', {
                                        'selection': _p_cc(
                                            $['selection'],
                                            ($) => Guaranteed_Value_Selection(
                                                $
                                            )
                                        ),
                                        'selected state': _p_cc(
                                            $['selected state'],
                                            ($) => null
                                        ),
                                        'option': _p_cc(
                                            $['option'],
                                            ($) => ({
                                                'l location': {
                                                    'document resource identifier': "implement me",
                                                    'line': 42,
                                                    'column': 42,
                                                },
                                                'l reference': $['l id'],
                                            })
                                        ),
                                    }]
                                )
                            case 'assert is set':
                                return _p.ss(
                                    $,
                                    ($) => ['assert is set', Possible_Value_Selection(
                                        $
                                    )]
                                )
                            default:
                                return _p.au(
                                    $[0]
                                )
                        }
                    }
                ),
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Value_Constraint_Resolvers: t_signatures.Value_Constraint_Resolvers = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': Value_Constraint_Resolver(
                $
            ),
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Signature_Parameters: t_signatures.Signature_Parameters = ($) => ({
    'modules': _p_cc(
        $['modules'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': _p.dictionary.map(
                $,
                ($, id) => ({
                    'l entry': {
                        'module': _p_cc(
                            $['module'],
                            ($) => Module_Reference(
                                $
                            )
                        ),
                        'presence': _p_cc(
                            $['presence'],
                            ($) => Presence(
                                $
                            )
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'lookups': _p_cc(
        $['lookups'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': _p.dictionary.map(
                $,
                ($, id) => ({
                    'l entry': {
                        'referent': _p_cc(
                            $['referent'],
                            ($) => Module_Reference(
                                $
                            )
                        ),
                        'dictionary': _p_cc(
                            $['dictionary'],
                            ($) => null
                        ),
                        'type': _p_cc(
                            $['type'],
                            ($) => ({
                                'l location': {
                                    'document resource identifier': "implement me",
                                    'line': 42,
                                    'column': 42,
                                },
                                'l state': _p.decide.state(
                                    $,
                                    ($): t_out.Signature_Parameters.lookups.l_dictionary.D.l_entry.type_.l_state => {
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
                                ),
                            })
                        ),
                        'presence': _p_cc(
                            $['presence'],
                            ($) => Presence(
                                $
                            )
                        ),
                    },
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
})

export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Optional_Value_Initialization.l_state => {
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
                            $
                        )]
                    )
                case 'selection':
                    return _p.ss(
                        $,
                        ($) => ['selection', Possible_Value_Selection(
                            $
                        )]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})

export const Lookup_Selection: t_signatures.Lookup_Selection = ($) => ({
    'type': _p_cc(
        $['type'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Lookup_Selection.type_.l_state => {
                    switch ($[0]) {
                        case 'dictionary':
                            return _p.ss(
                                $,
                                ($) => ['dictionary', {
                                    'selection': _p_cc(
                                        $['selection'],
                                        ($) => Guaranteed_Value_Selection(
                                            $
                                        )
                                    ),
                                    'selected dictionary': _p_cc(
                                        $['selected dictionary'],
                                        ($) => null
                                    ),
                                }]
                            )
                        case 'parameter':
                            return _p.ss(
                                $,
                                ($) => ['parameter', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l reference': $['l id'],
                                }]
                            )
                        case 'not circular dependent siblings':
                            return _p.ss(
                                $,
                                ($) => ['not circular dependent siblings', null]
                            )
                        case 'possibly circular dependent siblings':
                            return _p.ss(
                                $,
                                ($) => ['possibly circular dependent siblings', null]
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
    'resulting dictionary': _p_cc(
        $['resulting dictionary'],
        ($) => null
    ),
})

export const Value_Resolver_List_Result: t_signatures.Value_Resolver_List_Result = ($) => Module_Reference(
    $
)

export const Value_Resolver: t_signatures.Value_Resolver = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Value_Resolver.l_state => {
            switch ($[0]) {
                case 'boolean':
                    return _p.ss(
                        $,
                        ($) => ['boolean', null]
                    )
                case 'component':
                    return _p.ss(
                        $,
                        ($) => ['component', {
                            'definition': _p_cc(
                                $['definition'],
                                ($) => null
                            ),
                            'location': _p_cc(
                                $['location'],
                                ($) => ({
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Value_Resolver.l_state.component.location.l_state => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['external', {
                                                            'import': _p_cc(
                                                                $['import'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                            'type': _p_cc(
                                                                $['type'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                        }]
                                                    )
                                                case 'internal':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal', {
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l reference': $['l id'],
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
                            'signature': _p_cc(
                                $['signature'],
                                ($) => null
                            ),
                            'arguments': _p_cc(
                                $['arguments'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => ({
                                        'modules': _p_cc(
                                            $['modules'],
                                            ($) => _p.optional.map(
                                                $,
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l dictionary': _p.dictionary.map(
                                                        $,
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l state': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Value_Resolver.l_state.component.arguments_.O.modules.O.l_dictionary.D.l_entry.l_state => {
                                                                        switch ($[0]) {
                                                                            case 'optional':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['optional', Optional_Value_Initialization(
                                                                                        $
                                                                                    )]
                                                                                )
                                                                            case 'required':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['required', Guaranteed_Value_Selection(
                                                                                        $
                                                                                    )]
                                                                                )
                                                                            case 'parameter':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['parameter', {
                                                                                        'l location': {
                                                                                            'document resource identifier': "implement me",
                                                                                            'line': 42,
                                                                                            'column': 42,
                                                                                        },
                                                                                        'l reference': $['l id'],
                                                                                    }]
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0]
                                                                                )
                                                                        }
                                                                    }
                                                                ),
                                                            },
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        })
                                                    ),
                                                })
                                            )
                                        ),
                                        'lookups': _p_cc(
                                            $['lookups'],
                                            ($) => _p.optional.map(
                                                $,
                                                ($) => ({
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l dictionary': _p.dictionary.map(
                                                        $,
                                                        ($, id) => ({
                                                            'l entry': {
                                                                'l location': {
                                                                    'document resource identifier': "implement me",
                                                                    'line': 42,
                                                                    'column': 42,
                                                                },
                                                                'l state': _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Value_Resolver.l_state.component.arguments_.O.lookups.O.l_dictionary.D.l_entry.l_state => {
                                                                        switch ($[0]) {
                                                                            case 'empty stack':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['empty stack', null]
                                                                                )
                                                                            case 'not set':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['not set', null]
                                                                                )
                                                                            case 'selection':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['selection', Lookup_Selection(
                                                                                        $
                                                                                    )]
                                                                                )
                                                                            case 'stack':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['stack', {
                                                                                        'stack': _p_cc(
                                                                                            $['stack'],
                                                                                            ($) => Lookup_Selection(
                                                                                                $
                                                                                            )
                                                                                        ),
                                                                                        'element': _p_cc(
                                                                                            $['element'],
                                                                                            ($) => Lookup_Selection(
                                                                                                $
                                                                                            )
                                                                                        ),
                                                                                    }]
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0]
                                                                                )
                                                                        }
                                                                    }
                                                                ),
                                                            },
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        })
                                                    ),
                                                })
                                            )
                                        ),
                                    })
                                )
                            ),
                            'constraints': _p_cc(
                                $['constraints'],
                                ($) => Value_Constraint_Resolvers(
                                    $
                                )
                            ),
                        }]
                    )
                case 'dictionary':
                    return _p.ss(
                        $,
                        ($) => ['dictionary', {
                            'definition': _p_cc(
                                $['definition'],
                                ($) => null
                            ),
                            'resolver': _p_cc(
                                $['resolver'],
                                ($) => Value_Resolver(
                                    $
                                )
                            ),
                            'benchmark': _p_cc(
                                $['benchmark'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => Benchmark(
                                        $
                                    )
                                )
                            ),
                        }]
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ['group', Value_Resolver_Group(
                            $
                        )]
                    )
                case 'list':
                    return _p.ss(
                        $,
                        ($) => ['list', {
                            'definition': _p_cc(
                                $['definition'],
                                ($) => null
                            ),
                            'resolver': _p_cc(
                                $['resolver'],
                                ($) => Value_Resolver(
                                    $
                                )
                            ),
                            'result': _p_cc(
                                $['result'],
                                ($) => _p.optional.map(
                                    $,
                                    ($) => Value_Resolver_List_Result(
                                        $
                                    )
                                )
                            ),
                        }]
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
                        ($) => ['optional', {
                            'constraints': _p_cc(
                                $['constraints'],
                                ($) => Option_Constraints(
                                    $
                                )
                            ),
                            'resolver': _p_cc(
                                $['resolver'],
                                ($) => Value_Resolver(
                                    $
                                )
                            ),
                        }]
                    )
                case 'reference':
                    return _p.ss(
                        $,
                        ($) => ['reference', {
                            'definition': _p_cc(
                                $['definition'],
                                ($) => null
                            ),
                            'type': _p_cc(
                                $['type'],
                                ($) => ({
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Value_Resolver.l_state.reference.type_.l_state => {
                                            switch ($[0]) {
                                                case 'derived':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['derived', {
                                                            'value': _p_cc(
                                                                $['value'],
                                                                ($) => Guaranteed_Value_Selection(
                                                                    $
                                                                )
                                                            ),
                                                        }]
                                                    )
                                                case 'selected':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['selected', {
                                                            'definition': _p_cc(
                                                                $['definition'],
                                                                ($) => null
                                                            ),
                                                            'lookup': _p_cc(
                                                                $['lookup'],
                                                                ($) => Lookup_Selection(
                                                                    $
                                                                )
                                                            ),
                                                            'constraints': _p_cc(
                                                                $['constraints'],
                                                                ($) => Value_Constraint_Resolvers(
                                                                    $
                                                                )
                                                            ),
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
                        }]
                    )
                case 'state':
                    return _p.ss(
                        $,
                        ($) => ['state', {
                            'definition': _p_cc(
                                $['definition'],
                                ($) => null
                            ),
                            'states': _p_cc(
                                $['states'],
                                ($) => ({
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l dictionary': _p.dictionary.map(
                                        $,
                                        ($, id) => ({
                                            'l entry': {
                                                'constraints': _p_cc(
                                                    $['constraints'],
                                                    ($) => Option_Constraints(
                                                        $
                                                    )
                                                ),
                                                'resolver': _p_cc(
                                                    $['resolver'],
                                                    ($) => Value_Resolver(
                                                        $
                                                    )
                                                ),
                                            },
                                            'l location': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                        })
                                    ),
                                })
                            ),
                        }]
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
    ),
})

export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($) => ({
    'path': _p_cc(
        $['path'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l list': _p.list.map(
                $['l list'],
                ($) => ({
                    'l item': _p_cc(
                        $['l item'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Relative_Value_Selection.path.l_list.L.l_item.l_state => {
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
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l reference': $['l id'],
                                                }]
                                            )
                                        case 'reference':
                                            return _p.ss(
                                                $,
                                                ($) => ['reference', {
                                                    'definition': _p_cc(
                                                        $['definition'],
                                                        ($) => null
                                                    ),
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
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'resulting node': _p_cc(
        $['resulting node'],
        ($) => null
    ),
})

export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($) => ({
    'start': _p_cc(
        $['start'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Guaranteed_Value_Selection.start.l_state => {
                    switch ($[0]) {
                        case 'sibling':
                            return _p.ss(
                                $,
                                ($) => ['sibling', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l reference': $['l id'],
                                }]
                            )
                        case 'parent sibling':
                            return _p.ss(
                                $,
                                ($) => ['parent sibling', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l reference': $['l id'],
                                }]
                            )
                        case 'option constraint':
                            return _p.ss(
                                $,
                                ($) => ['option constraint', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l reference': $['l id'],
                                }]
                            )
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
                        case 'constraint':
                            return _p.ss(
                                $,
                                ($) => ['constraint', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Guaranteed_Value_Selection.start.l_state.constraint.l_state => {
                                            switch ($[0]) {
                                                case 'component':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['component', {
                                                            'property': _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                            'constraint': _p_cc(
                                                                $['constraint'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                        }]
                                                    )
                                                case 'reference':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['reference', {
                                                            'property': _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                            'constraint': _p_cc(
                                                                $['constraint'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                        }]
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    ),
                                }]
                            )
                        case 'parameter':
                            return _p.ss(
                                $,
                                ($) => ['parameter', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l reference': $['l id'],
                                }]
                            )
                        case 'result':
                            return _p.ss(
                                $,
                                ($) => ['result', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l state': _p.decide.state(
                                        $,
                                        ($): t_out.Guaranteed_Value_Selection.start.l_state.result.l_state => {
                                            switch ($[0]) {
                                                case 'list':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['list', {
                                                            'property': _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                            'list result': _p_cc(
                                                                $['list result'],
                                                                ($) => null
                                                            ),
                                                        }]
                                                    )
                                                case 'state':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['state', {
                                                            'property': _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                            'state': _p_cc(
                                                                $['state'],
                                                                ($) => null
                                                            ),
                                                            'result': _p_cc(
                                                                $['result'],
                                                                ($) => Module_Reference(
                                                                    $
                                                                )
                                                            ),
                                                        }]
                                                    )
                                                case 'optional value':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['optional value', {
                                                            'property': _p_cc(
                                                                $['property'],
                                                                ($) => ({
                                                                    'l location': {
                                                                        'document resource identifier': "implement me",
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                    'l reference': $['l id'],
                                                                })
                                                            ),
                                                            'optional value': _p_cc(
                                                                $['optional value'],
                                                                ($) => null
                                                            ),
                                                            'result': _p_cc(
                                                                $['result'],
                                                                ($) => Module_Reference(
                                                                    $
                                                                )
                                                            ),
                                                        }]
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    ),
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
    'tail': _p_cc(
        $['tail'],
        ($) => Relative_Value_Selection(
            $
        )
    ),
    'resulting node': _p_cc(
        $['resulting node'],
        ($) => null
    ),
})

export const Benchmark: t_signatures.Benchmark = ($) => ({
    'selection': _p_cc(
        $['selection'],
        ($) => Guaranteed_Value_Selection(
            $['l component']
        )
    ),
    'resulting dictionary': _p_cc(
        $['resulting dictionary'],
        ($) => null
    ),
    'dense': _p_cc(
        $['dense'],
        ($) => $
    ),
})

export const Value_Path: t_signatures.Value_Path = ($) => ({
    'tail': _p_cc(
        $['tail'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l list': _p.list.map(
                $['l list'],
                ($) => ({
                    'l item': _p_cc(
                        $['l item'],
                        ($) => ({
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Value_Path.tail.l_list.L.l_item.l_state => {
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
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l reference': $['l id'],
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
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l reference': $['l id'],
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
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
    'resulting node': _p_cc(
        $['resulting node'],
        ($) => null
    ),
})

export const Value_Reference: t_signatures.Value_Reference = ($) => ({
    'type location': _p_cc(
        $['type location'],
        ($) => Module_Reference(
            $
        )
    ),
    'path': _p_cc(
        $['path'],
        ($) => Value_Path(
            $
        )
    ),
})

export const Signature: t_signatures.Signature = ($) => ({
    'module': _p_cc(
        $['module'],
        ($) => null
    ),
    'parameters': _p_cc(
        $['parameters'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Signature.parameters.l_state => {
                    switch ($[0]) {
                        case 'local':
                            return _p.ss(
                                $,
                                ($) => ['local', Signature_Parameters(
                                    $
                                )]
                            )
                        case 'same as':
                            return _p.ss(
                                $,
                                ($) => ['same as', {
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                    'l reference': $['l id'],
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
    'resolved parameters': _p_cc(
        $['resolved parameters'],
        ($) => null
    ),
})

export const Constraint: t_signatures.Constraint = ($) => ({
    'selection': _p_cc(
        $['selection'],
        ($) => Relative_Value_Selection(
            $
        )
    ),
    'type': _p_cc(
        $['type'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Constraint.type_.l_state => {
                    switch ($[0]) {
                        case 'state':
                            return _p.ss(
                                $,
                                ($) => ['state', {
                                    'selected state': _p_cc(
                                        $['selected state'],
                                        ($) => null
                                    ),
                                    'option': _p_cc(
                                        $['option'],
                                        ($) => ({
                                            'l location': {
                                                'document resource identifier': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            },
                                            'l reference': $['l id'],
                                        })
                                    ),
                                }]
                            )
                        case 'optional value':
                            return _p.ss(
                                $,
                                ($) => ['optional value', {
                                    'selected optional value': _p_cc(
                                        $['selected optional value'],
                                        ($) => null
                                    ),
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
})

export const Reference_To_Value_Constraint_Resolver: t_signatures.Reference_To_Value_Constraint_Resolver = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l reference': $['l id'],
})

export const Value_Constraint_Resolver: t_signatures.Value_Constraint_Resolver = ($) => ({
    'start': _p_cc(
        $['start'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Value_Constraint_Resolver.start.l_state => {
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
                                    $
                                )]
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
    'constraint': _p_cc(
        $['constraint'],
        ($) => Constraint(
            $
        )
    ),
})

export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Possible_Value_Selection.l_state => {
            switch ($[0]) {
                case 'parameter':
                    return _p.ss(
                        $,
                        ($) => ['parameter', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l reference': $['l id'],
                        }]
                    )
                case 'result':
                    return _p.ss(
                        $,
                        ($) => ['result', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Possible_Value_Selection.l_state.result.l_state => {
                                    switch ($[0]) {
                                        case 'state':
                                            return _p.ss(
                                                $,
                                                ($) => ['state', {
                                                    'property': _p_cc(
                                                        $['property'],
                                                        ($) => ({
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l reference': $['l id'],
                                                        })
                                                    ),
                                                    'state': _p_cc(
                                                        $['state'],
                                                        ($) => null
                                                    ),
                                                    'result': _p_cc(
                                                        $['result'],
                                                        ($) => Module_Reference(
                                                            $
                                                        )
                                                    ),
                                                }]
                                            )
                                        case 'optional value':
                                            return _p.ss(
                                                $,
                                                ($) => ['optional value', {
                                                    'property': _p_cc(
                                                        $['property'],
                                                        ($) => ({
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l reference': $['l id'],
                                                        })
                                                    ),
                                                    'optional value': _p_cc(
                                                        $['optional value'],
                                                        ($) => null
                                                    ),
                                                    'result': _p_cc(
                                                        $['result'],
                                                        ($) => Module_Reference(
                                                            $
                                                        )
                                                    ),
                                                }]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            ),
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
