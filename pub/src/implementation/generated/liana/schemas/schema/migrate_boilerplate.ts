
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/schema/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"
export const Text_Type: t_signatures.Text_Type = ($,) => ({
    'type': _p.deprecated_cc($['type'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Text_Type.type_.state => {
            switch ($[0]) {
                case 'multi line':
                    return _p.ss($, ($,) => ['multi line', null])
                case 'single line':
                    return _p.ss($, ($,) => ['single line', null])
                default:
                    return _p.au($[0])
            }
        }),
    })),
})
export const Number_Type: t_signatures.Number_Type = ($,) => ({
    'precision': _p.deprecated_cc($['precision'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Number_Type.precision.state => {
            switch ($[0]) {
                case 'approximation':
                    return _p.ss($, ($,) => ['approximation', ({
                        'significant digits': _p.deprecated_cc($['significant digits'], ($,) => $),
                    })])
                case 'exact':
                    return _p.ss($, ($,) => ['exact', ({
                        'decimal separator offset': _p.deprecated_cc($['decimal separator offset'], ($,) => $.__o_map(($,) => $)),
                        'type': _p.deprecated_cc($['type'], ($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'state': _p.decide.state($, ($,): t_out.Number_Type.precision.state.exact.type_.state => {
                                switch ($[0]) {
                                    case 'integer':
                                        return _p.ss($, ($,) => ['integer', null])
                                    case 'natural':
                                        return _p.ss($, ($,) => ['natural', null])
                                    case 'positive natural':
                                        return _p.ss($, ($,) => ['positive natural', null])
                                    default:
                                        return _p.au($[0])
                                }
                            }),
                        })),
                    })])
                default:
                    return _p.au($[0])
            }
        }),
    })),
})
export const Globals: t_signatures.Globals = ($,) => ({
    'complexity': _p.deprecated_cc($['complexity'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Globals.complexity.state => {
            switch ($[0]) {
                case 'constrained':
                    return _p.ss($, ($,) => ['constrained', null])
                case 'unconstrained':
                    return _p.ss($, ($,) => ['unconstrained', null])
                default:
                    return _p.au($[0])
            }
        }),
    })),
    'text types': _p.deprecated_cc($['text types'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,id,) => ({
            'entry': Text_Type($),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'number types': _p.deprecated_cc($['number types'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,id,) => ({
            'entry': Number_Type($),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Type: t_signatures.Type = ($,) => ({
    'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
})
export const Types: t_signatures.Types = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,id,) => ({
        'entry': Type($),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Resolve_Logic: t_signatures.Resolve_Logic = ($,) => ({
    'signatures': _p.deprecated_cc($['signatures'], ($,) => ({
        'types': _p.deprecated_cc($['types'], ($,) => Signatures($)),
    })),
    'resolvers': _p.deprecated_cc($['resolvers'], ($,) => Resolvers($)),
})
export const Schema: t_signatures.Schema = ($,) => ({
    'imports': _p.deprecated_cc($['imports'], ($,) => Imports($)),
    'globals': _p.deprecated_cc($['globals'], ($,) => Globals($)),
    'types': _p.deprecated_cc($['types'], ($,) => Types($)),
    'complexity': _p.deprecated_cc($['complexity'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Schema.complexity.state => {
            switch ($[0]) {
                case 'constrained':
                    return _p.ss($, ($,) => ['constrained', Resolve_Logic($)])
                case 'unconstrained':
                    return _p.ss($, ($,) => ['unconstrained', null])
                default:
                    return _p.au($[0])
            }
        }),
    })),
})
export const Schema_Tree: t_signatures.Schema_Tree = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Schema_Tree.state => {
        switch ($[0]) {
            case 'schema':
                return _p.ss($, ($,) => ['schema', Schema($)])
            case 'set':
                return _p.ss($, ($,) => ['set', Schemas($)])
            default:
                return _p.au($[0])
        }
    }),
})
export const Type_Specification: t_signatures.Type_Specification = ($,) => ({
    'schema': _p.deprecated_cc($['schema'], ($,) => Schema_Tree($)),
    'schema path': _p.deprecated_cc($['schema path'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'list': $.__l_map(($,) => ({
            'item': $,
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'type': _p.deprecated_cc($['type'], ($,) => $),
})
export const Schemas: t_signatures.Schemas = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,id,) => ({
        'entry': Schema_Tree($),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Imports: t_signatures.Imports = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,id,) => ({
        'entry': ({
            'schema set child': _p.deprecated_cc($['schema set child'], ($,) => ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'id': $['id'],
            })),
            'schema': _p.deprecated_cc($['schema'], ($,) => null),
        }),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Presence: t_signatures.Presence = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Presence.state => {
        switch ($[0]) {
            case 'optional':
                return _p.ss($, ($,) => ['optional', null])
            case 'required':
                return _p.ss($, ($,) => ['required', null])
            default:
                return _p.au($[0])
        }
    }),
})
export const Dictionary: t_signatures.Dictionary = ($,) => ({
    'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
})
export const Signatures: t_signatures.Signatures = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,id,) => ({
        'entry': Signature($),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Resolvers: t_signatures.Resolvers = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,id,) => ({
        'entry': ({
            'signature': _p.deprecated_cc($['signature'], ($,) => null),
            'type resolver': _p.deprecated_cc($['type resolver'], ($,) => Node_Resolver($)),
        }),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Group: t_signatures.Group = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,id,) => ({
        'entry': ({
            'description': _p.deprecated_cc($['description'], ($,) => $.__o_map(($,) => $)),
            'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
        }),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Type_Reference: t_signatures.Type_Reference = ($,) => ({
    'location': _p.deprecated_cc($['location'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Type_Reference.location.state => {
            switch ($[0]) {
                case 'internal':
                    return _p.ss($, ($,) => ['internal', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'id': $['id'],
                    })])
                case 'external':
                    return _p.ss($, ($,) => ['external', ({
                        'import': _p.deprecated_cc($['import'], ($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'id': $['id'],
                        })),
                        'type': _p.deprecated_cc($['type'], ($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'id': $['id'],
                        })),
                    })])
                default:
                    return _p.au($[0])
            }
        }),
    })),
    'resulting type': _p.deprecated_cc($['resulting type'], ($,) => null),
})
export const Type_Node: t_signatures.Type_Node = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Type_Node.state => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss($, ($,) => ['boolean', null])
            case 'component':
                return _p.ss($, ($,) => ['component', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Type_Node.state.component.state => {
                        switch ($[0]) {
                            case 'external':
                                return _p.ss($, ($,) => ['external', ({
                                    'import': _p.deprecated_cc($['import'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })),
                                    'type': _p.deprecated_cc($['type'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })),
                                })])
                            case 'internal':
                                return _p.ss($, ($,) => ['internal', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'id': $['id'],
                                })])
                            case 'internal cyclic':
                                return _p.ss($, ($,) => ['internal cyclic', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'id': $['id'],
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })])
            case 'dictionary':
                return _p.ss($, ($,) => ['dictionary', Dictionary($)])
            case 'group':
                return _p.ss($, ($,) => ['group', Group($)])
            case 'list':
                return _p.ss($, ($,) => ['list', ({
                    'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
                    'result': _p.deprecated_cc($['result'], ($,) => $.__o_map(($,) => Type_Reference($))),
                })])
            case 'nothing':
                return _p.ss($, ($,) => ['nothing', null])
            case 'number':
                return _p.ss($, ($,) => ['number', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Type_Node.state.number_.state => {
                        switch ($[0]) {
                            case 'global':
                                return _p.ss($, ($,) => ['global', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'id': $['id'],
                                })])
                            case 'local':
                                return _p.ss($, ($,) => ['local', Number_Type($)])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })])
            case 'optional':
                return _p.ss($, ($,) => ['optional', Type_Node($)])
            case 'reference':
                return _p.ss($, ($,) => ['reference', ({
                    'referent': _p.deprecated_cc($['referent'], ($,) => Type_Node_Reference($)),
                    'type': _p.deprecated_cc($['type'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Type_Node.state.reference.type_.state => {
                            switch ($[0]) {
                                case 'derived':
                                    return _p.ss($, ($,) => ['derived', null])
                                case 'selected':
                                    return _p.ss($, ($,) => ['selected', ({
                                        'dictionary': _p.deprecated_cc($['dictionary'], ($,) => null),
                                        'dependency': _p.deprecated_cc($['dependency'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'state': _p.decide.state($, ($,): t_out.Type_Node.state.reference.type_.state.selected.dependency.state => {
                                                switch ($[0]) {
                                                    case 'acyclic':
                                                        return _p.ss($, ($,) => ['acyclic', null])
                                                    case 'cyclic':
                                                        return _p.ss($, ($,) => ['cyclic', null])
                                                    case 'stack':
                                                        return _p.ss($, ($,) => ['stack', null])
                                                    default:
                                                        return _p.au($[0])
                                                }
                                            }),
                                        })),
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })),
                })])
            case 'state':
                return _p.ss($, ($,) => ['state', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'dictionary': $.__d_map(($,id,) => ({
                        'entry': ({
                            'description': _p.deprecated_cc($['description'], ($,) => $.__o_map(($,) => $)),
                            'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
                        }),
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                    })),
                })])
            case 'text':
                return _p.ss($, ($,) => ['text', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Type_Node.state.text.state => {
                        switch ($[0]) {
                            case 'global':
                                return _p.ss($, ($,) => ['global', ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'id': $['id'],
                                })])
                            case 'local':
                                return _p.ss($, ($,) => ['local', Text_Type($)])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })])
            default:
                return _p.au($[0])
        }
    }),
})
export const Type_Node_Path: t_signatures.Type_Node_Path = ($,) => ({
    'tail': _p.deprecated_cc($['tail'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'list': $['list'].__l_map(($,) => ({
            'item': _p.deprecated_cc($['item'], ($,) => ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'state': _p.decide.state($, ($,): t_out.Type_Node_Path.tail.list.L.item.state => {
                    switch ($[0]) {
                        case 'dictionary':
                            return _p.ss($, ($,) => ['dictionary', null])
                        case 'group':
                            return _p.ss($, ($,) => ['group', ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'id': $['id'],
                            })])
                        case 'list':
                            return _p.ss($, ($,) => ['list', null])
                        case 'optional':
                            return _p.ss($, ($,) => ['optional', null])
                        case 'state':
                            return _p.ss($, ($,) => ['state', ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'id': $['id'],
                            })])
                        default:
                            return _p.au($[0])
                    }
                }),
            })),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'resulting node': _p.deprecated_cc($['resulting node'], ($,) => null),
})
export const Type_Node_Reference: t_signatures.Type_Node_Reference = ($,) => ({
    'type location': _p.deprecated_cc($['type location'], ($,) => Type_Reference($)),
    'path': _p.deprecated_cc($['path'], ($,) => Type_Node_Path($)),
})
export const Signature_Parameters: t_signatures.Signature_Parameters = ($,) => ({
    'values': _p.deprecated_cc($['values'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,id,) => ({
            'entry': ({
                'data type': _p.deprecated_cc($['data type'], ($,) => Type_Reference($)),
                'presence': _p.deprecated_cc($['presence'], ($,) => Presence($)),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'lookups': _p.deprecated_cc($['lookups'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'dictionary': $.__d_map(($,id,) => ({
            'entry': ({
                'referent': _p.deprecated_cc($['referent'], ($,) => Type_Reference($)),
                'dictionary': _p.deprecated_cc($['dictionary'], ($,) => null),
                'type': _p.deprecated_cc($['type'], ($,) => ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Signature_Parameters.lookups.dictionary.D.entry.type_.state => {
                        switch ($[0]) {
                            case 'cyclic':
                                return _p.ss($, ($,) => ['cyclic', null])
                            case 'acyclic':
                                return _p.ss($, ($,) => ['acyclic', null])
                            case 'stack':
                                return _p.ss($, ($,) => ['stack', null])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })),
                'presence': _p.deprecated_cc($['presence'], ($,) => Presence($)),
            }),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
})
export const Signature: t_signatures.Signature = ($,) => ({
    'type': _p.deprecated_cc($['type'], ($,) => null),
    'parameters': _p.deprecated_cc($['parameters'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Signature.parameters.state => {
            switch ($[0]) {
                case 'local':
                    return _p.ss($, ($,) => ['local', Signature_Parameters($)])
                case 'same as':
                    return _p.ss($, ($,) => ['same as', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'id': $['id'],
                    })])
                default:
                    return _p.au($[0])
            }
        }),
    })),
    'resolved parameters': _p.deprecated_cc($['resolved parameters'], ($,) => null),
})
export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($,) => ({
    'path': _p.deprecated_cc($['path'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'list': $['list'].__l_map(($,) => ({
            'item': _p.deprecated_cc($['item'], ($,) => ({
                'location': ({
                    'file': "implement me",
                    'line': 42,
                    'column': 42,
                }),
                'state': _p.decide.state($, ($,): t_out.Relative_Value_Selection.path.list.L.item.state => {
                    switch ($[0]) {
                        case 'component':
                            return _p.ss($, ($,) => ['component', null])
                        case 'group':
                            return _p.ss($, ($,) => ['group', ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'id': $['id'],
                            })])
                        case 'reference':
                            return _p.ss($, ($,) => ['reference', ({
                                'definition': _p.deprecated_cc($['definition'], ($,) => null),
                            })])
                        default:
                            return _p.au($[0])
                    }
                }),
            })),
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
        })),
    })),
    'resulting node': _p.deprecated_cc($['resulting node'], ($,) => null),
})
export const Lookup_Selection: t_signatures.Lookup_Selection = ($,) => ({
    'type': _p.deprecated_cc($['type'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Lookup_Selection.type_.state => {
            switch ($[0]) {
                case 'dictionary':
                    return _p.ss($, ($,) => ['dictionary', ({
                        'selection': _p.deprecated_cc($['selection'], ($,) => Guaranteed_Value_Selection($)),
                        'selected dictionary': _p.deprecated_cc($['selected dictionary'], ($,) => null),
                    })])
                case 'parameter':
                    return _p.ss($, ($,) => ['parameter', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'id': $['id'],
                    })])
                case 'not circular dependent siblings':
                    return _p.ss($, ($,) => ['not circular dependent siblings', null])
                case 'possibly circular dependent siblings':
                    return _p.ss($, ($,) => ['possibly circular dependent siblings', null])
                default:
                    return _p.au($[0])
            }
        }),
    })),
    'resulting dictionary': _p.deprecated_cc($['resulting dictionary'], ($,) => null),
})
export const Constraint: t_signatures.Constraint = ($,) => ({
    'selection': _p.deprecated_cc($['selection'], ($,) => Relative_Value_Selection($)),
    'type': _p.deprecated_cc($['type'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Constraint.type_.state => {
            switch ($[0]) {
                case 'state':
                    return _p.ss($, ($,) => ['state', ({
                        'selected state': _p.deprecated_cc($['selected state'], ($,) => null),
                        'option': _p.deprecated_cc($['option'], ($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'id': $['id'],
                        })),
                    })])
                case 'optional value':
                    return _p.ss($, ($,) => ['optional value', ({
                        'selected optional value': _p.deprecated_cc($['selected optional value'], ($,) => null),
                    })])
                default:
                    return _p.au($[0])
            }
        }),
    })),
})
export const Option_Constraints: t_signatures.Option_Constraints = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,id,) => ({
        'entry': ({
            'location': ({
                'file': "implement me",
                'line': 42,
                'column': 42,
            }),
            'state': _p.decide.state($, ($,): t_out.Option_Constraints.dictionary.D.entry.state => {
                switch ($[0]) {
                    case 'state':
                        return _p.ss($, ($,) => ['state', ({
                            'selection': _p.deprecated_cc($['selection'], ($,) => Guaranteed_Value_Selection($)),
                            'selected state': _p.deprecated_cc($['selected state'], ($,) => null),
                            'option': _p.deprecated_cc($['option'], ($,) => ({
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                                'id': $['id'],
                            })),
                        })])
                    case 'assert is set':
                        return _p.ss($, ($,) => ['assert is set', Possible_Value_Selection($)])
                    default:
                        return _p.au($[0])
                }
            }),
        }),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Property_Constraints: t_signatures.Property_Constraints = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,id,) => ({
        'entry': Property_Constraint($),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Reference_To_Property_Constraint: t_signatures.Reference_To_Property_Constraint = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'id': $['id'],
})
export const Property_Constraint: t_signatures.Property_Constraint = ($,) => ({
    'start': _p.deprecated_cc($['start'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Property_Constraint.start.state => {
            switch ($[0]) {
                case 'property':
                    return _p.ss($, ($,) => ['property', null])
                case 'sibling':
                    return _p.ss($, ($,) => ['sibling', Reference_To_Property_Constraint($)])
                default:
                    return _p.au($[0])
            }
        }),
    })),
    'constraint': _p.deprecated_cc($['constraint'], ($,) => Constraint($)),
})
export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Optional_Value_Initialization.state => {
        switch ($[0]) {
            case 'not set':
                return _p.ss($, ($,) => ['not set', null])
            case 'set':
                return _p.ss($, ($,) => ['set', Guaranteed_Value_Selection($)])
            case 'selection':
                return _p.ss($, ($,) => ['selection', Possible_Value_Selection($)])
            default:
                return _p.au($[0])
        }
    }),
})
export const Node_Resolver_Group: t_signatures.Node_Resolver_Group = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(($,id,) => ({
        'entry': ({
            'definition': _p.deprecated_cc($['definition'], ($,) => null),
            'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
        }),
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
    })),
})
export const Node_Resolver_List_Result: t_signatures.Node_Resolver_List_Result = ($,) => Type_Reference($)
export const Benchmark: t_signatures.Benchmark = ($,) => ({
    'selection': _p.deprecated_cc($['selection'], ($,) => Guaranteed_Value_Selection($)),
    'resulting dictionary': _p.deprecated_cc($['resulting dictionary'], ($,) => null),
    'dense': _p.deprecated_cc($['dense'], ($,) => $),
})
export const Node_Resolver: t_signatures.Node_Resolver = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Node_Resolver.state => {
        switch ($[0]) {
            case 'boolean':
                return _p.ss($, ($,) => ['boolean', null])
            case 'component':
                return _p.ss($, ($,) => ['component', ({
                    'location': _p.deprecated_cc($['location'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Node_Resolver.state.component.location.state => {
                            switch ($[0]) {
                                case 'external':
                                    return _p.ss($, ($,) => ['external', ({
                                        'import': _p.deprecated_cc($['import'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })),
                                        'type': _p.deprecated_cc($['type'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })),
                                    })])
                                case 'internal':
                                    return _p.ss($, ($,) => ['internal', ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })),
                    'signature': _p.deprecated_cc($['signature'], ($,) => null),
                    'arguments': _p.deprecated_cc($['arguments'], ($,) => $.__o_map(($,) => ({
                        'values': _p.deprecated_cc($['values'], ($,) => $.__o_map(($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'dictionary': $.__d_map(($,id,) => ({
                                'entry': ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Node_Resolver.state.component.arguments_.O.values.O.dictionary.D.entry.state => {
                                        switch ($[0]) {
                                            case 'optional':
                                                return _p.ss($, ($,) => ['optional', Optional_Value_Initialization($)])
                                            case 'required':
                                                return _p.ss($, ($,) => ['required', Guaranteed_Value_Selection($)])
                                            case 'parameter':
                                                return _p.ss($, ($,) => ['parameter', ({
                                                    'location': ({
                                                        'file': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'id': $['id'],
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                }),
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                            })),
                        }))),
                        'lookups': _p.deprecated_cc($['lookups'], ($,) => $.__o_map(($,) => ({
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'dictionary': $.__d_map(($,id,) => ({
                                'entry': ({
                                    'location': ({
                                        'file': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                    'state': _p.decide.state($, ($,): t_out.Node_Resolver.state.component.arguments_.O.lookups.O.dictionary.D.entry.state => {
                                        switch ($[0]) {
                                            case 'empty stack':
                                                return _p.ss($, ($,) => ['empty stack', null])
                                            case 'not set':
                                                return _p.ss($, ($,) => ['not set', null])
                                            case 'selection':
                                                return _p.ss($, ($,) => ['selection', Lookup_Selection($)])
                                            case 'stack':
                                                return _p.ss($, ($,) => ['stack', ({
                                                    'stack': _p.deprecated_cc($['stack'], ($,) => Lookup_Selection($)),
                                                    'element': _p.deprecated_cc($['element'], ($,) => Lookup_Selection($)),
                                                })])
                                            default:
                                                return _p.au($[0])
                                        }
                                    }),
                                }),
                                'location': ({
                                    'file': "implement me",
                                    'line': 42,
                                    'column': 42,
                                }),
                            })),
                        }))),
                    }))),
                    'constraints': _p.deprecated_cc($['constraints'], ($,) => Property_Constraints($)),
                })])
            case 'dictionary':
                return _p.ss($, ($,) => ['dictionary', ({
                    'definition': _p.deprecated_cc($['definition'], ($,) => null),
                    'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
                    'benchmark': _p.deprecated_cc($['benchmark'], ($,) => $.__o_map(($,) => Benchmark($))),
                })])
            case 'group':
                return _p.ss($, ($,) => ['group', Node_Resolver_Group($)])
            case 'list':
                return _p.ss($, ($,) => ['list', ({
                    'definition': _p.deprecated_cc($['definition'], ($,) => null),
                    'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
                    'result': _p.deprecated_cc($['result'], ($,) => $.__o_map(($,) => Node_Resolver_List_Result($))),
                })])
            case 'nothing':
                return _p.ss($, ($,) => ['nothing', null])
            case 'number':
                return _p.ss($, ($,) => ['number', null])
            case 'optional':
                return _p.ss($, ($,) => ['optional', ({
                    'constraints': _p.deprecated_cc($['constraints'], ($,) => Option_Constraints($)),
                    'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
                })])
            case 'reference':
                return _p.ss($, ($,) => ['reference', ({
                    'definition': _p.deprecated_cc($['definition'], ($,) => null),
                    'type': _p.deprecated_cc($['type'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Node_Resolver.state.reference.type_.state => {
                            switch ($[0]) {
                                case 'derived':
                                    return _p.ss($, ($,) => ['derived', ({
                                        'value': _p.deprecated_cc($['value'], ($,) => Guaranteed_Value_Selection($)),
                                    })])
                                case 'selected':
                                    return _p.ss($, ($,) => ['selected', ({
                                        'definition': _p.deprecated_cc($['definition'], ($,) => null),
                                        'lookup': _p.deprecated_cc($['lookup'], ($,) => Lookup_Selection($)),
                                        'constraints': _p.deprecated_cc($['constraints'], ($,) => Property_Constraints($)),
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })),
                })])
            case 'state':
                return _p.ss($, ($,) => ['state', ({
                    'definition': _p.deprecated_cc($['definition'], ($,) => null),
                    'states': _p.deprecated_cc($['states'], ($,) => ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'dictionary': $.__d_map(($,id,) => ({
                            'entry': ({
                                'constraints': _p.deprecated_cc($['constraints'], ($,) => Option_Constraints($)),
                                'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
                            }),
                            'location': ({
                                'file': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                        })),
                    })),
                })])
            case 'text':
                return _p.ss($, ($,) => ['text', null])
            default:
                return _p.au($[0])
        }
    }),
})
export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($,) => ({
    'start': _p.deprecated_cc($['start'], ($,) => ({
        'location': ({
            'file': "implement me",
            'line': 42,
            'column': 42,
        }),
        'state': _p.decide.state($, ($,): t_out.Guaranteed_Value_Selection.start.state => {
            switch ($[0]) {
                case 'sibling':
                    return _p.ss($, ($,) => ['sibling', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'id': $['id'],
                    })])
                case 'parent sibling':
                    return _p.ss($, ($,) => ['parent sibling', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'id': $['id'],
                    })])
                case 'option constraint':
                    return _p.ss($, ($,) => ['option constraint', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'id': $['id'],
                    })])
                case 'list cursor':
                    return _p.ss($, ($,) => ['list cursor', null])
                case 'linked entry':
                    return _p.ss($, ($,) => ['linked entry', null])
                case 'constraint':
                    return _p.ss($, ($,) => ['constraint', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Guaranteed_Value_Selection.start.state.constraint.state => {
                            switch ($[0]) {
                                case 'component':
                                    return _p.ss($, ($,) => ['component', ({
                                        'property': _p.deprecated_cc($['property'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })),
                                        'constraint': _p.deprecated_cc($['constraint'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })),
                                    })])
                                case 'reference':
                                    return _p.ss($, ($,) => ['reference', ({
                                        'property': _p.deprecated_cc($['property'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })),
                                        'constraint': _p.deprecated_cc($['constraint'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })),
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })])
                case 'parameter':
                    return _p.ss($, ($,) => ['parameter', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'id': $['id'],
                    })])
                case 'result':
                    return _p.ss($, ($,) => ['result', ({
                        'location': ({
                            'file': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'state': _p.decide.state($, ($,): t_out.Guaranteed_Value_Selection.start.state.result.state => {
                            switch ($[0]) {
                                case 'list':
                                    return _p.ss($, ($,) => ['list', ({
                                        'property': _p.deprecated_cc($['property'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })),
                                        'list result': _p.deprecated_cc($['list result'], ($,) => null),
                                    })])
                                case 'state':
                                    return _p.ss($, ($,) => ['state', ({
                                        'property': _p.deprecated_cc($['property'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })),
                                        'state': _p.deprecated_cc($['state'], ($,) => null),
                                        'result': _p.deprecated_cc($['result'], ($,) => Type_Reference($)),
                                    })])
                                case 'optional value':
                                    return _p.ss($, ($,) => ['optional value', ({
                                        'property': _p.deprecated_cc($['property'], ($,) => ({
                                            'location': ({
                                                'file': "implement me",
                                                'line': 42,
                                                'column': 42,
                                            }),
                                            'id': $['id'],
                                        })),
                                        'optional value': _p.deprecated_cc($['optional value'], ($,) => null),
                                        'result': _p.deprecated_cc($['result'], ($,) => Type_Reference($)),
                                    })])
                                default:
                                    return _p.au($[0])
                            }
                        }),
                    })])
                default:
                    return _p.au($[0])
            }
        }),
    })),
    'tail': _p.deprecated_cc($['tail'], ($,) => Relative_Value_Selection($)),
    'resulting node': _p.deprecated_cc($['resulting node'], ($,) => null),
})
export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($,) => ({
    'location': ({
        'file': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state($, ($,): t_out.Possible_Value_Selection.state => {
        switch ($[0]) {
            case 'parameter':
                return _p.ss($, ($,) => ['parameter', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'id': $['id'],
                })])
            case 'result':
                return _p.ss($, ($,) => ['result', ({
                    'location': ({
                        'file': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                    'state': _p.decide.state($, ($,): t_out.Possible_Value_Selection.state.result.state => {
                        switch ($[0]) {
                            case 'state':
                                return _p.ss($, ($,) => ['state', ({
                                    'property': _p.deprecated_cc($['property'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })),
                                    'state': _p.deprecated_cc($['state'], ($,) => null),
                                    'result': _p.deprecated_cc($['result'], ($,) => Type_Reference($)),
                                })])
                            case 'optional value':
                                return _p.ss($, ($,) => ['optional value', ({
                                    'property': _p.deprecated_cc($['property'], ($,) => ({
                                        'location': ({
                                            'file': "implement me",
                                            'line': 42,
                                            'column': 42,
                                        }),
                                        'id': $['id'],
                                    })),
                                    'optional value': _p.deprecated_cc($['optional value'], ($,) => null),
                                    'result': _p.deprecated_cc($['result'], ($,) => Type_Reference($)),
                                })])
                            default:
                                return _p.au($[0])
                        }
                    }),
                })])
            default:
                return _p.au($[0])
        }
    }),
})
