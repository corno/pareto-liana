
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/schema/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Text_Type: t_signatures.Text_Type = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'multi line':
                return _p.ss($, ($,) => ({
                    'option': 'multi line',
                    'value': ['nothing', null],
                }))
            case 'single line':
                return _p.ss($, ($,) => ({
                    'option': 'single line',
                    'value': ['nothing', null],
                }))
            default:
                return _p.au($[0])
        }
    })]),
}))]]
export const Number_Type: t_signatures.Number_Type = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'precision': _p.deprecated_cc($['precision'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'approximation':
                return _p.ss($, ($,) => ({
                    'option': 'approximation',
                    'value': ['group', ['verbose', _p.dictionary.literal(({
                        'significant digits': _p.deprecated_cc($['significant digits'], ($,) => ['text', ({
                            'delimiter': ['none', null],
                            'value': v_serialize_number.serialize($),
                        })]),
                    }))]],
                }))
            case 'exact':
                return _p.ss($, ($,) => ({
                    'option': 'exact',
                    'value': ['group', ['verbose', _p.dictionary.literal(({
                        'decimal separator offset': _p.deprecated_cc($['decimal separator offset'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['text', ({
                            'delimiter': ['none', null],
                            'value': v_serialize_number.serialize($),
                        })]], () => ['not set', null])]),
                        'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                            switch ($[0]) {
                                case 'integer':
                                    return _p.ss($, ($,) => ({
                                        'option': 'integer',
                                        'value': ['nothing', null],
                                    }))
                                case 'natural':
                                    return _p.ss($, ($,) => ({
                                        'option': 'natural',
                                        'value': ['nothing', null],
                                    }))
                                case 'positive natural':
                                    return _p.ss($, ($,) => ({
                                        'option': 'positive natural',
                                        'value': ['nothing', null],
                                    }))
                                default:
                                    return _p.au($[0])
                            }
                        })]),
                    }))]],
                }))
            default:
                return _p.au($[0])
        }
    })]),
}))]]
export const Globals: t_signatures.Globals = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'complexity': _p.deprecated_cc($['complexity'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'constrained':
                return _p.ss($, ($,) => ({
                    'option': 'constrained',
                    'value': ['nothing', null],
                }))
            case 'unconstrained':
                return _p.ss($, ($,) => ({
                    'option': 'unconstrained',
                    'value': ['nothing', null],
                }))
            default:
                return _p.au($[0])
        }
    })]),
    'text types': _p.deprecated_cc($['text types'], ($,) => ['dictionary', $.__d_map(($,key,) => Text_Type($))]),
    'number types': _p.deprecated_cc($['number types'], ($,) => ['dictionary', $.__d_map(($,key,) => Number_Type($))]),
}))]]
export const Type: t_signatures.Type = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
}))]]
export const Types: t_signatures.Types = ($,) => ['dictionary', $.__d_map(($,key,) => Type($))]
export const Resolve_Logic: t_signatures.Resolve_Logic = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'signatures': _p.deprecated_cc($['signatures'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
        'types': _p.deprecated_cc($['types'], ($,) => Signatures($)),
    }))]]),
    'resolvers': _p.deprecated_cc($['resolvers'], ($,) => Resolvers($)),
}))]]
export const Schema: t_signatures.Schema = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'imports': _p.deprecated_cc($['imports'], ($,) => Imports($)),
    'globals': _p.deprecated_cc($['globals'], ($,) => Globals($)),
    'types': _p.deprecated_cc($['types'], ($,) => Types($)),
    'complexity': _p.deprecated_cc($['complexity'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'constrained':
                return _p.ss($, ($,) => ({
                    'option': 'constrained',
                    'value': Resolve_Logic($),
                }))
            case 'unconstrained':
                return _p.ss($, ($,) => ({
                    'option': 'unconstrained',
                    'value': ['nothing', null],
                }))
            default:
                return _p.au($[0])
        }
    })]),
}))]]
export const Schema_Tree: t_signatures.Schema_Tree = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'schema':
            return _p.ss($, ($,) => ({
                'option': 'schema',
                'value': Schema($),
            }))
        case 'set':
            return _p.ss($, ($,) => ({
                'option': 'set',
                'value': Schemas($),
            }))
        default:
            return _p.au($[0])
    }
})]
export const Type_Specification: t_signatures.Type_Specification = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'schema': _p.deprecated_cc($['schema'], ($,) => Schema_Tree($)),
    'schema path': _p.deprecated_cc($['schema path'], ($,) => ['list', $.__l_map(($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'type': _p.deprecated_cc($['type'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
}))]]
export const Schemas: t_signatures.Schemas = ($,) => ['dictionary', $.__d_map(($,key,) => Schema_Tree($))]
export const Imports: t_signatures.Imports = ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
    'schema set child': _p.deprecated_cc($['schema set child'], ($,) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $['id'],
    })]),
    'schema': _p.deprecated_cc($['schema'], ($,) => ['nothing', null]),
}))]])]
export const Presence: t_signatures.Presence = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'optional':
            return _p.ss($, ($,) => ({
                'option': 'optional',
                'value': ['nothing', null],
            }))
        case 'required':
            return _p.ss($, ($,) => ({
                'option': 'required',
                'value': ['nothing', null],
            }))
        default:
            return _p.au($[0])
    }
})]
export const Dictionary: t_signatures.Dictionary = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
}))]]
export const Signatures: t_signatures.Signatures = ($,) => ['dictionary', $.__d_map(($,key,) => Signature($))]
export const Resolvers: t_signatures.Resolvers = ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
    'signature': _p.deprecated_cc($['signature'], ($,) => ['nothing', null]),
    'type resolver': _p.deprecated_cc($['type resolver'], ($,) => Node_Resolver($)),
}))]])]
export const Group: t_signatures.Group = ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
    'description': _p.deprecated_cc($['description'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]], () => ['not set', null])]),
    'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
}))]])]
export const Type_Reference: t_signatures.Type_Reference = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'location': _p.deprecated_cc($['location'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'internal':
                return _p.ss($, ($,) => ({
                    'option': 'internal',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            case 'external':
                return _p.ss($, ($,) => ({
                    'option': 'external',
                    'value': ['group', ['verbose', _p.dictionary.literal(({
                        'import': _p.deprecated_cc($['import'], ($,) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['id'],
                        })]),
                        'type': _p.deprecated_cc($['type'], ($,) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['id'],
                        })]),
                    }))]],
                }))
            default:
                return _p.au($[0])
        }
    })]),
    'resulting type': _p.deprecated_cc($['resulting type'], ($,) => ['nothing', null]),
}))]]
export const Type_Node: t_signatures.Type_Node = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'boolean':
            return _p.ss($, ($,) => ({
                'option': 'boolean',
                'value': ['nothing', null],
            }))
        case 'component':
            return _p.ss($, ($,) => ({
                'option': 'component',
                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'external':
                            return _p.ss($, ($,) => ({
                                'option': 'external',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'import': _p.deprecated_cc($['import'], ($,) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['id'],
                                    })]),
                                    'type': _p.deprecated_cc($['type'], ($,) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['id'],
                                    })]),
                                }))]],
                            }))
                        case 'internal':
                            return _p.ss($, ($,) => ({
                                'option': 'internal',
                                'value': ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['id'],
                                })],
                            }))
                        case 'internal cyclic':
                            return _p.ss($, ($,) => ({
                                'option': 'internal cyclic',
                                'value': ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['id'],
                                })],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })],
            }))
        case 'dictionary':
            return _p.ss($, ($,) => ({
                'option': 'dictionary',
                'value': Dictionary($),
            }))
        case 'group':
            return _p.ss($, ($,) => ({
                'option': 'group',
                'value': Group($),
            }))
        case 'list':
            return _p.ss($, ($,) => ({
                'option': 'list',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
                    'result': _p.deprecated_cc($['result'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', Type_Reference($)], () => ['not set', null])]),
                }))]],
            }))
        case 'nothing':
            return _p.ss($, ($,) => ({
                'option': 'nothing',
                'value': ['nothing', null],
            }))
        case 'number':
            return _p.ss($, ($,) => ({
                'option': 'number',
                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'global':
                            return _p.ss($, ($,) => ({
                                'option': 'global',
                                'value': ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['id'],
                                })],
                            }))
                        case 'local':
                            return _p.ss($, ($,) => ({
                                'option': 'local',
                                'value': Number_Type($),
                            }))
                        default:
                            return _p.au($[0])
                    }
                })],
            }))
        case 'optional':
            return _p.ss($, ($,) => ({
                'option': 'optional',
                'value': Type_Node($),
            }))
        case 'reference':
            return _p.ss($, ($,) => ({
                'option': 'reference',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'referent': _p.deprecated_cc($['referent'], ($,) => Type_Node_Reference($)),
                    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'derived':
                                return _p.ss($, ($,) => ({
                                    'option': 'derived',
                                    'value': ['nothing', null],
                                }))
                            case 'selected':
                                return _p.ss($, ($,) => ({
                                    'option': 'selected',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'dictionary': _p.deprecated_cc($['dictionary'], ($,) => ['nothing', null]),
                                        'dependency': _p.deprecated_cc($['dependency'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                            switch ($[0]) {
                                                case 'acyclic':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'acyclic',
                                                        'value': ['nothing', null],
                                                    }))
                                                case 'cyclic':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'cyclic',
                                                        'value': ['nothing', null],
                                                    }))
                                                case 'stack':
                                                    return _p.ss($, ($,) => ({
                                                        'option': 'stack',
                                                        'value': ['nothing', null],
                                                    }))
                                                default:
                                                    return _p.au($[0])
                                            }
                                        })]),
                                    }))]],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })]),
                }))]],
            }))
        case 'state':
            return _p.ss($, ($,) => ({
                'option': 'state',
                'value': ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                    'description': _p.deprecated_cc($['description'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]], () => ['not set', null])]),
                    'node': _p.deprecated_cc($['node'], ($,) => Type_Node($)),
                }))]])],
            }))
        case 'text':
            return _p.ss($, ($,) => ({
                'option': 'text',
                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'global':
                            return _p.ss($, ($,) => ({
                                'option': 'global',
                                'value': ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $['id'],
                                })],
                            }))
                        case 'local':
                            return _p.ss($, ($,) => ({
                                'option': 'local',
                                'value': Text_Type($),
                            }))
                        default:
                            return _p.au($[0])
                    }
                })],
            }))
        default:
            return _p.au($[0])
    }
})]
export const Type_Node_Path: t_signatures.Type_Node_Path = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'tail': _p.deprecated_cc($['tail'], ($,) => ['list', $['list'].__l_map(($,) => _p.deprecated_cc($['item'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'dictionary':
                return _p.ss($, ($,) => ({
                    'option': 'dictionary',
                    'value': ['nothing', null],
                }))
            case 'group':
                return _p.ss($, ($,) => ({
                    'option': 'group',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            case 'list':
                return _p.ss($, ($,) => ({
                    'option': 'list',
                    'value': ['nothing', null],
                }))
            case 'optional':
                return _p.ss($, ($,) => ({
                    'option': 'optional',
                    'value': ['nothing', null],
                }))
            case 'state':
                return _p.ss($, ($,) => ({
                    'option': 'state',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            default:
                return _p.au($[0])
        }
    })]))]),
    'resulting node': _p.deprecated_cc($['resulting node'], ($,) => ['nothing', null]),
}))]]
export const Type_Node_Reference: t_signatures.Type_Node_Reference = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'type location': _p.deprecated_cc($['type location'], ($,) => Type_Reference($)),
    'path': _p.deprecated_cc($['path'], ($,) => Type_Node_Path($)),
}))]]
export const Signature_Parameters: t_signatures.Signature_Parameters = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'values': _p.deprecated_cc($['values'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
        'data type': _p.deprecated_cc($['data type'], ($,) => Type_Reference($)),
        'presence': _p.deprecated_cc($['presence'], ($,) => Presence($)),
    }))]])]),
    'lookups': _p.deprecated_cc($['lookups'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
        'referent': _p.deprecated_cc($['referent'], ($,) => Type_Reference($)),
        'dictionary': _p.deprecated_cc($['dictionary'], ($,) => ['nothing', null]),
        'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
            switch ($[0]) {
                case 'cyclic':
                    return _p.ss($, ($,) => ({
                        'option': 'cyclic',
                        'value': ['nothing', null],
                    }))
                case 'acyclic':
                    return _p.ss($, ($,) => ({
                        'option': 'acyclic',
                        'value': ['nothing', null],
                    }))
                case 'stack':
                    return _p.ss($, ($,) => ({
                        'option': 'stack',
                        'value': ['nothing', null],
                    }))
                default:
                    return _p.au($[0])
            }
        })]),
        'presence': _p.deprecated_cc($['presence'], ($,) => Presence($)),
    }))]])]),
}))]]
export const Signature: t_signatures.Signature = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'type': _p.deprecated_cc($['type'], ($,) => ['nothing', null]),
    'parameters': _p.deprecated_cc($['parameters'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'local':
                return _p.ss($, ($,) => ({
                    'option': 'local',
                    'value': Signature_Parameters($),
                }))
            case 'same as':
                return _p.ss($, ($,) => ({
                    'option': 'same as',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            default:
                return _p.au($[0])
        }
    })]),
    'resolved parameters': _p.deprecated_cc($['resolved parameters'], ($,) => ['nothing', null]),
}))]]
export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'path': _p.deprecated_cc($['path'], ($,) => ['list', $['list'].__l_map(($,) => _p.deprecated_cc($['item'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'component':
                return _p.ss($, ($,) => ({
                    'option': 'component',
                    'value': ['nothing', null],
                }))
            case 'group':
                return _p.ss($, ($,) => ({
                    'option': 'group',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            case 'reference':
                return _p.ss($, ($,) => ({
                    'option': 'reference',
                    'value': ['group', ['verbose', _p.dictionary.literal(({
                        'definition': _p.deprecated_cc($['definition'], ($,) => ['nothing', null]),
                    }))]],
                }))
            default:
                return _p.au($[0])
        }
    })]))]),
    'resulting node': _p.deprecated_cc($['resulting node'], ($,) => ['nothing', null]),
}))]]
export const Lookup_Selection: t_signatures.Lookup_Selection = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'dictionary':
                return _p.ss($, ($,) => ({
                    'option': 'dictionary',
                    'value': ['group', ['verbose', _p.dictionary.literal(({
                        'selection': _p.deprecated_cc($['selection'], ($,) => Guaranteed_Value_Selection($)),
                        'selected dictionary': _p.deprecated_cc($['selected dictionary'], ($,) => ['nothing', null]),
                    }))]],
                }))
            case 'parameter':
                return _p.ss($, ($,) => ({
                    'option': 'parameter',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            case 'not circular dependent siblings':
                return _p.ss($, ($,) => ({
                    'option': 'not circular dependent siblings',
                    'value': ['nothing', null],
                }))
            case 'possibly circular dependent siblings':
                return _p.ss($, ($,) => ({
                    'option': 'possibly circular dependent siblings',
                    'value': ['nothing', null],
                }))
            default:
                return _p.au($[0])
        }
    })]),
    'resulting dictionary': _p.deprecated_cc($['resulting dictionary'], ($,) => ['nothing', null]),
}))]]
export const Constraint: t_signatures.Constraint = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'selection': _p.deprecated_cc($['selection'], ($,) => Relative_Value_Selection($)),
    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'state':
                return _p.ss($, ($,) => ({
                    'option': 'state',
                    'value': ['group', ['verbose', _p.dictionary.literal(({
                        'selected state': _p.deprecated_cc($['selected state'], ($,) => ['nothing', null]),
                        'option': _p.deprecated_cc($['option'], ($,) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['id'],
                        })]),
                    }))]],
                }))
            case 'optional value':
                return _p.ss($, ($,) => ({
                    'option': 'optional value',
                    'value': ['group', ['verbose', _p.dictionary.literal(({
                        'selected optional value': _p.deprecated_cc($['selected optional value'], ($,) => ['nothing', null]),
                    }))]],
                }))
            default:
                return _p.au($[0])
        }
    })]),
}))]]
export const Option_Constraints: t_signatures.Option_Constraints = ($,) => ['dictionary', $.__d_map(($,key,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'state':
            return _p.ss($, ($,) => ({
                'option': 'state',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'selection': _p.deprecated_cc($['selection'], ($,) => Guaranteed_Value_Selection($)),
                    'selected state': _p.deprecated_cc($['selected state'], ($,) => ['nothing', null]),
                    'option': _p.deprecated_cc($['option'], ($,) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })]),
                }))]],
            }))
        case 'assert is set':
            return _p.ss($, ($,) => ({
                'option': 'assert is set',
                'value': Possible_Value_Selection($),
            }))
        default:
            return _p.au($[0])
    }
})])]
export const Property_Constraints: t_signatures.Property_Constraints = ($,) => ['dictionary', $.__d_map(($,key,) => Property_Constraint($))]
export const Reference_To_Property_Constraint: t_signatures.Reference_To_Property_Constraint = ($,) => ['text', ({
    'delimiter': ['backtick', null],
    'value': $['id'],
})]
export const Property_Constraint: t_signatures.Property_Constraint = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'start': _p.deprecated_cc($['start'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'property':
                return _p.ss($, ($,) => ({
                    'option': 'property',
                    'value': ['nothing', null],
                }))
            case 'sibling':
                return _p.ss($, ($,) => ({
                    'option': 'sibling',
                    'value': Reference_To_Property_Constraint($),
                }))
            default:
                return _p.au($[0])
        }
    })]),
    'constraint': _p.deprecated_cc($['constraint'], ($,) => Constraint($)),
}))]]
export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'not set':
            return _p.ss($, ($,) => ({
                'option': 'not set',
                'value': ['nothing', null],
            }))
        case 'set':
            return _p.ss($, ($,) => ({
                'option': 'set',
                'value': Guaranteed_Value_Selection($),
            }))
        case 'selection':
            return _p.ss($, ($,) => ({
                'option': 'selection',
                'value': Possible_Value_Selection($),
            }))
        default:
            return _p.au($[0])
    }
})]
export const Node_Resolver_Group: t_signatures.Node_Resolver_Group = ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
    'definition': _p.deprecated_cc($['definition'], ($,) => ['nothing', null]),
    'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
}))]])]
export const Node_Resolver_List_Result: t_signatures.Node_Resolver_List_Result = ($,) => Type_Reference($)
export const Benchmark: t_signatures.Benchmark = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'selection': _p.deprecated_cc($['selection'], ($,) => Guaranteed_Value_Selection($)),
    'resulting dictionary': _p.deprecated_cc($['resulting dictionary'], ($,) => ['nothing', null]),
    'dense': _p.deprecated_cc($['dense'], ($,) => ['text', ({
        'delimiter': ['none', null],
        'value': v_serialize_boolean.serialize($),
    })]),
}))]]
export const Node_Resolver: t_signatures.Node_Resolver = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'boolean':
            return _p.ss($, ($,) => ({
                'option': 'boolean',
                'value': ['nothing', null],
            }))
        case 'component':
            return _p.ss($, ($,) => ({
                'option': 'component',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'location': _p.deprecated_cc($['location'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'external':
                                return _p.ss($, ($,) => ({
                                    'option': 'external',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'import': _p.deprecated_cc($['import'], ($,) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]),
                                        'type': _p.deprecated_cc($['type'], ($,) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]),
                                    }))]],
                                }))
                            case 'internal':
                                return _p.ss($, ($,) => ({
                                    'option': 'internal',
                                    'value': ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['id'],
                                    })],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })]),
                    'signature': _p.deprecated_cc($['signature'], ($,) => ['nothing', null]),
                    'arguments': _p.deprecated_cc($['arguments'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(({
                        'values': _p.deprecated_cc($['values'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['dictionary', $.__d_map(($,key,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                            switch ($[0]) {
                                case 'optional':
                                    return _p.ss($, ($,) => ({
                                        'option': 'optional',
                                        'value': Optional_Value_Initialization($),
                                    }))
                                case 'required':
                                    return _p.ss($, ($,) => ({
                                        'option': 'required',
                                        'value': Guaranteed_Value_Selection($),
                                    }))
                                case 'parameter':
                                    return _p.ss($, ($,) => ({
                                        'option': 'parameter',
                                        'value': ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })],
                                    }))
                                default:
                                    return _p.au($[0])
                            }
                        })])]], () => ['not set', null])]),
                        'lookups': _p.deprecated_cc($['lookups'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', ['dictionary', $.__d_map(($,key,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                            switch ($[0]) {
                                case 'empty stack':
                                    return _p.ss($, ($,) => ({
                                        'option': 'empty stack',
                                        'value': ['nothing', null],
                                    }))
                                case 'not set':
                                    return _p.ss($, ($,) => ({
                                        'option': 'not set',
                                        'value': ['nothing', null],
                                    }))
                                case 'selection':
                                    return _p.ss($, ($,) => ({
                                        'option': 'selection',
                                        'value': Lookup_Selection($),
                                    }))
                                case 'stack':
                                    return _p.ss($, ($,) => ({
                                        'option': 'stack',
                                        'value': ['group', ['verbose', _p.dictionary.literal(({
                                            'stack': _p.deprecated_cc($['stack'], ($,) => Lookup_Selection($)),
                                            'element': _p.deprecated_cc($['element'], ($,) => Lookup_Selection($)),
                                        }))]],
                                    }))
                                default:
                                    return _p.au($[0])
                            }
                        })])]], () => ['not set', null])]),
                    }))]]], () => ['not set', null])]),
                    'constraints': _p.deprecated_cc($['constraints'], ($,) => Property_Constraints($)),
                }))]],
            }))
        case 'dictionary':
            return _p.ss($, ($,) => ({
                'option': 'dictionary',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'definition': _p.deprecated_cc($['definition'], ($,) => ['nothing', null]),
                    'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
                    'benchmark': _p.deprecated_cc($['benchmark'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', Benchmark($)], () => ['not set', null])]),
                }))]],
            }))
        case 'group':
            return _p.ss($, ($,) => ({
                'option': 'group',
                'value': Node_Resolver_Group($),
            }))
        case 'list':
            return _p.ss($, ($,) => ({
                'option': 'list',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'definition': _p.deprecated_cc($['definition'], ($,) => ['nothing', null]),
                    'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
                    'result': _p.deprecated_cc($['result'], ($,) => ['optional', $.__decide(($,): t_out.Value.optional => ['set', Node_Resolver_List_Result($)], () => ['not set', null])]),
                }))]],
            }))
        case 'nothing':
            return _p.ss($, ($,) => ({
                'option': 'nothing',
                'value': ['nothing', null],
            }))
        case 'number':
            return _p.ss($, ($,) => ({
                'option': 'number',
                'value': ['nothing', null],
            }))
        case 'optional':
            return _p.ss($, ($,) => ({
                'option': 'optional',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'constraints': _p.deprecated_cc($['constraints'], ($,) => Option_Constraints($)),
                    'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
                }))]],
            }))
        case 'reference':
            return _p.ss($, ($,) => ({
                'option': 'reference',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'definition': _p.deprecated_cc($['definition'], ($,) => ['nothing', null]),
                    'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'derived':
                                return _p.ss($, ($,) => ({
                                    'option': 'derived',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'value': _p.deprecated_cc($['value'], ($,) => Guaranteed_Value_Selection($)),
                                    }))]],
                                }))
                            case 'selected':
                                return _p.ss($, ($,) => ({
                                    'option': 'selected',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'definition': _p.deprecated_cc($['definition'], ($,) => ['nothing', null]),
                                        'lookup': _p.deprecated_cc($['lookup'], ($,) => Lookup_Selection($)),
                                        'constraints': _p.deprecated_cc($['constraints'], ($,) => Property_Constraints($)),
                                    }))]],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })]),
                }))]],
            }))
        case 'state':
            return _p.ss($, ($,) => ({
                'option': 'state',
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'definition': _p.deprecated_cc($['definition'], ($,) => ['nothing', null]),
                    'states': _p.deprecated_cc($['states'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                        'constraints': _p.deprecated_cc($['constraints'], ($,) => Option_Constraints($)),
                        'resolver': _p.deprecated_cc($['resolver'], ($,) => Node_Resolver($)),
                    }))]])]),
                }))]],
            }))
        case 'text':
            return _p.ss($, ($,) => ({
                'option': 'text',
                'value': ['nothing', null],
            }))
        default:
            return _p.au($[0])
    }
})]
export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'start': _p.deprecated_cc($['start'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
        switch ($[0]) {
            case 'sibling':
                return _p.ss($, ($,) => ({
                    'option': 'sibling',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            case 'parent sibling':
                return _p.ss($, ($,) => ({
                    'option': 'parent sibling',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            case 'option constraint':
                return _p.ss($, ($,) => ({
                    'option': 'option constraint',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            case 'list cursor':
                return _p.ss($, ($,) => ({
                    'option': 'list cursor',
                    'value': ['nothing', null],
                }))
            case 'linked entry':
                return _p.ss($, ($,) => ({
                    'option': 'linked entry',
                    'value': ['nothing', null],
                }))
            case 'constraint':
                return _p.ss($, ($,) => ({
                    'option': 'constraint',
                    'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'component':
                                return _p.ss($, ($,) => ({
                                    'option': 'component',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'property': _p.deprecated_cc($['property'], ($,) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]),
                                        'constraint': _p.deprecated_cc($['constraint'], ($,) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]),
                                    }))]],
                                }))
                            case 'reference':
                                return _p.ss($, ($,) => ({
                                    'option': 'reference',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'property': _p.deprecated_cc($['property'], ($,) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]),
                                        'constraint': _p.deprecated_cc($['constraint'], ($,) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]),
                                    }))]],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })],
                }))
            case 'parameter':
                return _p.ss($, ($,) => ({
                    'option': 'parameter',
                    'value': ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $['id'],
                    })],
                }))
            case 'result':
                return _p.ss($, ($,) => ({
                    'option': 'result',
                    'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                        switch ($[0]) {
                            case 'list':
                                return _p.ss($, ($,) => ({
                                    'option': 'list',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'property': _p.deprecated_cc($['property'], ($,) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]),
                                        'list result': _p.deprecated_cc($['list result'], ($,) => ['nothing', null]),
                                    }))]],
                                }))
                            case 'state':
                                return _p.ss($, ($,) => ({
                                    'option': 'state',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'property': _p.deprecated_cc($['property'], ($,) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]),
                                        'state': _p.deprecated_cc($['state'], ($,) => ['nothing', null]),
                                        'result': _p.deprecated_cc($['result'], ($,) => Type_Reference($)),
                                    }))]],
                                }))
                            case 'optional value':
                                return _p.ss($, ($,) => ({
                                    'option': 'optional value',
                                    'value': ['group', ['verbose', _p.dictionary.literal(({
                                        'property': _p.deprecated_cc($['property'], ($,) => ['text', ({
                                            'delimiter': ['backtick', null],
                                            'value': $['id'],
                                        })]),
                                        'optional value': _p.deprecated_cc($['optional value'], ($,) => ['nothing', null]),
                                        'result': _p.deprecated_cc($['result'], ($,) => Type_Reference($)),
                                    }))]],
                                }))
                            default:
                                return _p.au($[0])
                        }
                    })],
                }))
            default:
                return _p.au($[0])
        }
    })]),
    'tail': _p.deprecated_cc($['tail'], ($,) => Relative_Value_Selection($)),
    'resulting node': _p.deprecated_cc($['resulting node'], ($,) => ['nothing', null]),
}))]]
export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'parameter':
            return _p.ss($, ($,) => ({
                'option': 'parameter',
                'value': ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $['id'],
                })],
            }))
        case 'result':
            return _p.ss($, ($,) => ({
                'option': 'result',
                'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                    switch ($[0]) {
                        case 'state':
                            return _p.ss($, ($,) => ({
                                'option': 'state',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'property': _p.deprecated_cc($['property'], ($,) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['id'],
                                    })]),
                                    'state': _p.deprecated_cc($['state'], ($,) => ['nothing', null]),
                                    'result': _p.deprecated_cc($['result'], ($,) => Type_Reference($)),
                                }))]],
                            }))
                        case 'optional value':
                            return _p.ss($, ($,) => ({
                                'option': 'optional value',
                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                    'property': _p.deprecated_cc($['property'], ($,) => ['text', ({
                                        'delimiter': ['backtick', null],
                                        'value': $['id'],
                                    })]),
                                    'optional value': _p.deprecated_cc($['optional value'], ($,) => ['nothing', null]),
                                    'result': _p.deprecated_cc($['result'], ($,) => Type_Reference($)),
                                }))]],
                            }))
                        default:
                            return _p.au($[0])
                    }
                })],
            }))
        default:
            return _p.au($[0])
    }
})]
