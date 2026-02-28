import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/to_be_generated/unmashall_result"
import * as d_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
import * as d_in_astn_parse_tree from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_function from "../../../../interface/to_be_generated/sealed_target_from_unmarshall_result"

//dependencies
import * as t_astn_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

//signatures
export type Document = _pi.Refiner<d_out.Document, d_function.Error, d_in.Document>
export type Value = _pi.Refiner<d_out.Value, d_function.Error, d_in.Value>

export const Found = ($: d_in_astn_parse_tree.Value): d_function.Found => {
    return _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _p.ss($, ($): d_function.Found => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _p.ss($, ($) => ['dictionary', null])
                    case 'group': return _p.ss($, ($) => ['group', null])
                    case 'list': return _p.ss($, ($) => ['list', null])
                    case 'nothing': return _p.ss($, ($) => ['nothing', null])
                    case 'optional': return _p.ss($, ($) => ['optional', null])
                    case 'state': return _p.ss($, ($) => ['state', null])
                    case 'text': return _p.ss($, ($) => ['text', {
                        'value': $.value
                    }])
                    default: return _p.au($[0])
                }
            }))
            case 'include': return _p.ss($, ($) => ['include', null])
            case 'missing data': return _p.ss($, ($) => ['missing data', null])
            default: return _p.au($[0])
        }
    })
}

//implementations
export const Document: Document = ($, abort) => {
    return Value($.content, abort)
}

export const Value: Value = ($, abort) => {
    const definition_path = $['definition path']
    return _p.decide.state($.unmarshalled, ($): d_out.Value => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($): d_out.Value => ['text', {
                'value': _p.decide.state($['found value type'], ($) => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => $.instance.value)
                        default: return _p.ss($, ($) => abort({
                            'definition path': definition_path,
                            'type': ['boolean', ['wrong type', null]],
                            'range': t_astn_parse_tree_to_location.Value($)
                        }))
                    }
                }),
                'delimiter': ['none', null],

            }])
            case 'component': return _p.ss($, ($) => Value($.value, abort))
            case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.decide.state($['found value type'], ($): d_out.Value.dictionary => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => {
                        const dictionary_range = $.instance['{'].range
                        return $.entries.__d_map(($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'unique': return _p.ss($, ($) => $['optional value'].__decide(
                                    ($) => Value($, abort),
                                    () => abort({
                                        'definition path': definition_path,
                                        'type': ['dictionary', ['foo', null]],
                                        'range': $['id value pair'].id.range
                                    })
                                ))
                                case 'multiple': return _p.ss($, ($) => abort({
                                    'definition path': definition_path,
                                    'type': ['dictionary', ['foo', null]],
                                    'range': dictionary_range
                                }))
                                default: return _p.au($[0])

                            }
                        }))
                    })
                    case 'invalid': return _p.ss($, ($) => abort({
                        'definition path': definition_path,
                        'type': ['dictionary', ['wrong type', Found($)]],
                        'range': t_astn_parse_tree_to_location.Value($)
                    }))
                    default: return _p.au($[0])
                }
            })])
            case 'group': return _p.ss($, ($) => ['group', ['verbose', _p.decide.state($['found value type'], ($): d_out.Value.group.verbose => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => {
                        const group_start_token = _p.decide.state($.instance, ($): d_in_astn_parse_tree.Structural_Token => {
                            switch ($[0]) {
                                case 'dictionary': return _p.ss($, ($) => $['{'])
                                case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'verbose': return _p.ss($, ($) => $['('])
                                        case 'concise': return _p.ss($, ($) => $['<'])
                                        default: return _p.au($[0])
                                    }
                                }))
                                case 'list': return _p.ss($, ($) => $['['])
                                default: return _p.au($[0])
                            }
                        })
                        return _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'verbose': return _p.ss($, ($): d_out.Value.group.verbose => $.properties.__d_map(($, id) => _p.decide.list($).has_single_item(
                                    ($) => $.value.__decide(
                                        ($) => Value($, abort),
                                        () => abort({
                                            'definition path': definition_path,
                                            'type': ['group', ['missing property', {
                                                'name': id
                                            }]],
                                            'range': group_start_token.range
                                        })
                                    ),
                                    () => abort({
                                        'definition path': definition_path,
                                        'type': ['group', ['superfluous property', {
                                            'name': id
                                        }]],
                                        'range': group_start_token.range
                                    }),
                                    () => abort({
                                        'definition path': definition_path,
                                        'type': ['group', ['missing property', {
                                            'name': id
                                        }]],
                                        'range': group_start_token.range
                                    })
                                )))
                                case 'concise': return _p.ss($, ($): d_out.Value.group.verbose => {
                                    return $.properties.__d_map(($, id) => $.__decide(
                                        ($) => Value($, abort),
                                        () => abort({
                                            'definition path': definition_path,
                                            'type': ['group', ['missing property', {
                                                'name': id
                                            }]],
                                            'range': group_start_token.range
                                        })
                                    ))
                                })
                                default: return _p.au($[0])
                            }
                        })
                    })
                    case 'invalid': return _p.ss($, ($) => abort({
                        'definition path': definition_path,
                        'type': ['group', ['wrong type', null]],
                        'range': t_astn_parse_tree_to_location.Value($)
                    }))
                    default: return _p.au($[0])
                }
            })]])
            case 'list': return _p.ss($, ($) => ['list', _p.decide.state($['found value type'], ($): d_out.Value.list => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => $.items.__l_map(($) => Value($, abort)))
                    case 'invalid': return _p.ss($, ($) => abort({
                        'definition path': definition_path,
                        'type': ['list', ['wrong type', null]],
                        'range': t_astn_parse_tree_to_location.Value($)
                    }))
                    default: return _p.au($[0])
                }
            })])
            case 'nothing': return _p.ss($, ($): d_out.Value => ['nothing', null])
            case 'number': return _p.ss($, ($): d_out.Value => ['text', {
                'value': _p.decide.state($['found value type'], ($) => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => $.instance.value)
                        default: return _p.ss($, ($) => abort({
                            'definition path': definition_path,
                            'type': ['number', ['wrong type', null]],
                            'range': t_astn_parse_tree_to_location.Value($)
                        }))
                    }
                }),
                'delimiter': ['none', null],

            }])
            case 'optional': return _p.ss($, ($): d_out.Value => ['optional', _p.decide.state($['found value type'], ($): d_out.Value.optional => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => _p.decide.state($, ($): d_out.Value.optional => {
                        switch ($[0]) {
                            case 'set': return _p.ss($, ($) => ['set', Value($['child value'], abort)])
                            case 'not set': return _p.ss($, ($) => ['not set', null])
                            default: return _p.au($[0])
                        }
                    }))
                    case 'invalid': return _p.ss($, ($) => abort({
                        'definition path': definition_path,
                        'type': ['optional', ['wrong type', null]],
                        'range': t_astn_parse_tree_to_location.Value($)
                    }))
                    default: return _p.au($[0])
                }
            })])
            case 'reference': return _p.ss($, ($): d_out.Value => ['text', {
                'value': _p.decide.state($['found value type'], ($) => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => $.instance.value)
                        default: return _p.ss($, ($) => abort({
                            'definition path': definition_path,
                            'type': ['reference', ['wrong type', null]],
                            'range': t_astn_parse_tree_to_location.Value($)
                        }))
                    }
                }),
                'delimiter': ['backtick', null],

            }])
            case 'state': return _p.ss($, ($): d_out.Value => ['state', _p.decide.state($['found value type'], ($): d_out.Value.state => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => {
                        const start_token = _p.decide.state($.instance, ($): d_in_astn_parse_tree.Structural_Token => {
                            switch ($[0]) {
                                case 'list': return _p.ss($, ($) => $['['])
                                case 'state': return _p.ss($, ($) => $['|'])
                                default: return _p.au($[0])
                            }
                        })
                        return _p.decide.state($['option processing'], ($) => {
                            switch ($[0]) {
                                case 'missing data': return _p.ss($, ($) => abort({
                                    'definition path': definition_path,
                                    'type': ['state', ['missing data', null]],
                                    'range': $.range
                                }))
                                case 'success': return _p.ss($, ($) => ({
                                    'option': $['option name'],
                                    'value': Value($.value, abort)
                                }))
                                case 'unknown option': return _p.ss($, ($) => abort({
                                    'definition path': definition_path,
                                    'type': ['state', ['unknown option', null]],
                                    'range': $.token.range
                                }))
                                case 'list format': return _p.ss($, ($) => _p.decide.state($, ($) => {
                                    switch ($[0]) {
                                        case 'missing option item': return _p.ss($, ($) => abort({
                                            'definition path': definition_path,
                                            'type': ['state', ['missing option item', null]],
                                            'range': start_token.range
                                        }))
                                        case 'option item is not a text': return _p.ss($, ($) => abort({
                                            'definition path': definition_path,
                                            'type': ['state', ['option item is not a text', null]],
                                            'range': t_astn_parse_tree_to_location.Value($.value)
                                        }))
                                        case 'missing value item': return _p.ss($, ($) => abort({
                                            'definition path': definition_path,
                                            'type': ['state', ['missing value item', null]],
                                            'range': start_token.range
                                        }))
                                        case 'too many items': return _p.ss($, ($) => abort({
                                            'definition path': definition_path,
                                            'type': ['state', ['too many items', null]],
                                            'range': start_token.range
                                        }))
                                        default: return _p.au($[0])
                                    }
                                }))
                                default: return _p.au($[0])
                            }
                        })
                    })
                    case 'invalid': return _p.ss($, ($): d_out.Value.state => abort({
                        'definition path': definition_path,
                        'type': ['state', ['wrong type', Found($)]],
                        'range': t_astn_parse_tree_to_location.Value($)
                    }))

                    default: return _p.au($[0])
                }
            })])
            case 'text': return _p.ss($, ($): d_out.Value => ['text', {
                'value': _p.decide.state($['found value type'], ($) => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => $.instance.value)
                        default: return _p.ss($, ($) => abort({
                            'definition path': definition_path,
                            'type': ['text', ['wrong type', null]],
                            'range': t_astn_parse_tree_to_location.Value($)
                        }))
                    }
                }),
                'delimiter': ['quote', null],

            }])
            default: return _p.au($[0])
        }
    })
}
