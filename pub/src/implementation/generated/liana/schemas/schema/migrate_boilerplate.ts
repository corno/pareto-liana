
import * as _p from "pareto-core/dist/transformer"

// import * as t_signatures from "../../../../../interface/generated/liana/schemas/schema/migrate_boilerplate"

// import * as t_out from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"
// export const Text_Type: t_signatures.Text_Type = ($) => ({
//     'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Text_Type.type_ => {
//         switch ($[0]) {
//             case 'multi line': return _p.ss($, ($) => ['multi line', null])
//             case 'single line': return _p.ss($, ($) => ['single line', null])
//             default: return _p.au($[0])
//         }
//     })),
// })
// export const Number_Type: t_signatures.Number_Type = ($) => ({
//     'precision': _p.deprecated_cc($['precision'], ($) => _p.deprecated_cc($, ($): t_out.Number_Type.precision => {
//         switch ($[0]) {
//             case 'approximation': return _p.ss($, ($) => ['approximation', ({
//                 'significant digits': _p.deprecated_cc($['significant digits'], ($) => $),
//             })])
//             case 'exact': return _p.ss($, ($) => ['exact', ({
//                 'decimal separator offset': _p.deprecated_cc($['decimal separator offset'], ($) => $.__o_map(($) => $)),
//                 'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Number_Type.precision.exact.type_ => {
//                     switch ($[0]) {
//                         case 'integer': return _p.ss($, ($) => ['integer', null])
//                         case 'natural': return _p.ss($, ($) => ['natural', null])
//                         case 'positive natural': return _p.ss($, ($) => ['positive natural', null])
//                         default: return _p.au($[0])
//                     }
//                 })),
//             })])
//             default: return _p.au($[0])
//         }
//     })),
// })
// export const Globals: t_signatures.Globals = ($) => ({
//     'complexity': _p.deprecated_cc($['complexity'], ($) => _p.deprecated_cc($, ($): t_out.Globals.complexity => {
//         switch ($[0]) {
//             case 'constrained': return _p.ss($, ($) => ['constrained', null])
//             case 'unconstrained': return _p.ss($, ($) => ['unconstrained', null])
//             default: return _p.au($[0])
//         }
//     })),
//     'text types': _p.deprecated_cc($['text types'], ($) => $.__d_map(($) => Text_Type(
//         $
//     ))),
//     'number types': _p.deprecated_cc($['number types'], ($) => $.__d_map(($) => Number_Type(
//         $
//     ))),
// })
// export const Type: t_signatures.Type = ($) => ({
//     'node': _p.deprecated_cc($['node'], ($) => Type_Node(
//         $
//     )),
// })
// export const Types: t_signatures.Types = ($) => $.__d_map(($) => Type(
//     $
// ))
// export const Resolve_Logic: t_signatures.Resolve_Logic = ($) => ({
//     'signatures': _p.deprecated_cc($['signatures'], ($) => ({
//         'types': _p.deprecated_cc($['types'], ($) => Signatures(
//             $
//         )),
//     })),
//     'resolvers': _p.deprecated_cc($['resolvers'], ($) => Resolvers(
//         $
//     )),
// })
// export const Schema: t_signatures.Schema = ($) => ({
//     'imports': _p.deprecated_cc($['imports'], ($) => Imports(
//         $
//     )),
//     'globals': _p.deprecated_cc($['globals'], ($) => Globals(
//         $
//     )),
//     'types': _p.deprecated_cc($['types'], ($) => Types(
//         $
//     )),
//     'complexity': _p.deprecated_cc($['complexity'], ($) => _p.deprecated_cc($, ($): t_out.Schema.complexity => {
//         switch ($[0]) {
//             case 'constrained': return _p.ss($, ($) => ['constrained', Resolve_Logic(
//                 $
//             )])
//             case 'unconstrained': return _p.ss($, ($) => ['unconstrained', null])
//             default: return _p.au($[0])
//         }
//     })),
// })
// export const Schema_Tree: t_signatures.Schema_Tree = ($) => _p.deprecated_cc($, ($): t_out.Schema_Tree => {
//     switch ($[0]) {
//         case 'schema': return _p.ss($, ($) => ['schema', Schema(
//             $
//         )])
//         case 'set': return _p.ss($, ($) => ['set', Schemas(
//             $
//         )])
//         default: return _p.au($[0])
//     }
// })
// export const Type_Specification: t_signatures.Type_Specification = ($) => ({
//     'schema': _p.deprecated_cc($['schema'], ($) => Schema_Tree(
//         $
//     )),
//     'schema path': _p.deprecated_cc($['schema path'], ($) => $.__l_map(($) => $)),
//     'type': _p.deprecated_cc($['type'], ($) => $),
// })
// export const Schemas: t_signatures.Schemas = ($) => $.__d_map(($) => Schema_Tree(
//     $
// ))
// export const Imports: t_signatures.Imports = ($) => $.__d_map(($) => ({
//     'schema set child': _p.deprecated_cc($['schema set child'], ($) => $['key']),
//     'schema': _p.deprecated_cc($['schema'], ($) => null),
// }))
// export const Presence: t_signatures.Presence = ($) => _p.deprecated_cc($, ($): t_out.Presence => {
//     switch ($[0]) {
//         case 'optional': return _p.ss($, ($) => ['optional', null])
//         case 'required': return _p.ss($, ($) => ['required', null])
//         default: return _p.au($[0])
//     }
// })
// export const Dictionary: t_signatures.Dictionary = ($) => ({
//     'node': _p.deprecated_cc($['node'], ($) => Type_Node(
//         $
//     )),
// })
// export const Signatures: t_signatures.Signatures = ($) => $.__d_map(($) => Signature(
//     $
// ))
// export const Resolvers: t_signatures.Resolvers = ($) => $.__d_map(($) => ({
//     'signature': _p.deprecated_cc($['signature'], ($) => null),
//     'type resolver': _p.deprecated_cc($['type resolver'], ($) => Node_Resolver(
//         $
//     )),
// }))
// export const Group: t_signatures.Group = ($) => $.__d_map(($) => ({
//     'description': _p.deprecated_cc($['description'], ($) => $.__o_map(($) => $)),
//     'node': _p.deprecated_cc($['node'], ($) => Type_Node(
//         $
//     )),
// }))
// export const Type_Node: t_signatures.Type_Node = ($) => _p.deprecated_cc($, ($): t_out.Type_Node => {
//     switch ($[0]) {
//         case 'boolean': return _p.ss($, ($) => ['boolean', null])
//         case 'component': return _p.ss($, ($) => ['component', _p.deprecated_cc($, ($): t_out.Type_Node.component => {
//             switch ($[0]) {
//                 case 'external': return _p.ss($, ($) => ['external', ({
//                     'import': _p.deprecated_cc($['import'], ($) => $['key']),
//                     'type': _p.deprecated_cc($['type'], ($) => $['key']),
//                 })])
//                 case 'internal': return _p.ss($, ($) => ['internal', $['key']])
//                 case 'internal cyclic': return _p.ss($, ($) => ['internal cyclic', $['key']])
//                 default: return _p.au($[0])
//             }
//         })])
//         case 'dictionary': return _p.ss($, ($) => ['dictionary', Dictionary(
//             $
//         )])
//         case 'group': return _p.ss($, ($) => ['group', Group(
//             $
//         )])
//         case 'list': return _p.ss($, ($) => ['list', ({
//             'node': _p.deprecated_cc($['node'], ($) => Type_Node(
//                 $
//             )),
//         })])
//         case 'nothing': return _p.ss($, ($) => ['nothing', null])
//         case 'number': return _p.ss($, ($) => ['number', _p.deprecated_cc($, ($): t_out.Type_Node.number_ => {
//             switch ($[0]) {
//                 case 'global': return _p.ss($, ($) => ['global', $['key']])
//                 case 'local': return _p.ss($, ($) => ['local', Number_Type(
//                     $
//                 )])
//                 default: return _p.au($[0])
//             }
//         })])
//         case 'optional': return _p.ss($, ($) => ['optional', Type_Node(
//             $
//         )])
//         case 'reference': return _p.ss($, ($) => ['reference', ({
//             'referent': _p.deprecated_cc($['referent'], ($) => Type_Node_Reference(
//                 $
//             )),
//             'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Type_Node.reference.type_ => {
//                 switch ($[0]) {
//                     case 'derived': return _p.ss($, ($) => ['derived', null])
//                     case 'selected': return _p.ss($, ($) => ['selected', ({
//                         'dictionary': _p.deprecated_cc($['dictionary'], ($) => null),
//                         'dependency': _p.deprecated_cc($['dependency'], ($) => _p.deprecated_cc($, ($): t_out.Type_Node.reference.type_.selected.dependency => {
//                             switch ($[0]) {
//                                 case 'acyclic': return _p.ss($, ($) => ['acyclic', null])
//                                 case 'cyclic': return _p.ss($, ($) => ['cyclic', null])
//                                 case 'stack': return _p.ss($, ($) => ['stack', null])
//                                 default: return _p.au($[0])
//                             }
//                         })),
//                     })])
//                     default: return _p.au($[0])
//                 }
//             })),
//         })])
//         case 'state group': return _p.ss($, ($) => ['state group', $.__d_map(($) => ({
//             'description': _p.deprecated_cc($['description'], ($) => $.__o_map(($) => $)),
//             'node': _p.deprecated_cc($['node'], ($) => Type_Node(
//                 $
//             )),
//         }))])
//         case 'text': return _p.ss($, ($) => ['text', _p.deprecated_cc($, ($): t_out.Type_Node.text => {
//             switch ($[0]) {
//                 case 'global': return _p.ss($, ($) => ['global', $['key']])
//                 case 'local': return _p.ss($, ($) => ['local', Text_Type(
//                     $
//                 )])
//                 default: return _p.au($[0])
//             }
//         })])
//         default: return _p.au($[0])
//     }
// })
// export const Type_Reference: t_signatures.Type_Reference = ($) => ({
//     'location': _p.deprecated_cc($['location'], ($) => _p.deprecated_cc($, ($): t_out.Type_Reference.location => {
//         switch ($[0]) {
//             case 'internal': return _p.ss($, ($) => ['internal', $['key']])
//             case 'external': return _p.ss($, ($) => ['external', ({
//                 'import': _p.deprecated_cc($['import'], ($) => $['key']),
//                 'type': _p.deprecated_cc($['type'], ($) => $['key']),
//             })])
//             default: return _p.au($[0])
//         }
//     })),
//     'resulting node': _p.deprecated_cc($['resulting node'], ($) => null),
// })
// export const Type_Node_Reference: t_signatures.Type_Node_Reference = ($) => ({
//     'type location': _p.deprecated_cc($['type location'], ($) => Type_Reference(
//         $
//     )),
//     'tail': _p.deprecated_cc($['tail'], ($) => $.__l_map(($) => _p.deprecated_cc($, ($): t_out.Type_Node_Reference.tail.L => {
//         switch ($[0]) {
//             case 'dictionary': return _p.ss($, ($) => ['dictionary', null])
//             case 'group': return _p.ss($, ($) => ['group', $['key']])
//             case 'list': return _p.ss($, ($) => ['list', null])
//             case 'optional': return _p.ss($, ($) => ['optional', null])
//             case 'state group': return _p.ss($, ($) => ['state group', $['key']])
//             default: return _p.au($[0])
//         }
//     }))),
//     'resulting node': _p.deprecated_cc($['resulting node'], ($) => null),
// })
// export const Signature_Parameters: t_signatures.Signature_Parameters = ($) => ({
//     'values': _p.deprecated_cc($['values'], ($) => $.__d_map(($) => ({
//         'data type': _p.deprecated_cc($['data type'], ($) => Type_Reference(
//             $
//         )),
//         'presence': _p.deprecated_cc($['presence'], ($) => Presence(
//             $
//         )),
//     }))),
//     'lookups': _p.deprecated_cc($['lookups'], ($) => $.__d_map(($) => ({
//         'referent': _p.deprecated_cc($['referent'], ($) => Type_Reference(
//             $
//         )),
//         'dictionary': _p.deprecated_cc($['dictionary'], ($) => null),
//         'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Signature_Parameters.lookups.D.type_ => {
//             switch ($[0]) {
//                 case 'cyclic': return _p.ss($, ($) => ['cyclic', null])
//                 case 'acyclic': return _p.ss($, ($) => ['acyclic', null])
//                 case 'stack': return _p.ss($, ($) => ['stack', null])
//                 default: return _p.au($[0])
//             }
//         })),
//         'presence': _p.deprecated_cc($['presence'], ($) => Presence(
//             $
//         )),
//     }))),
// })
// export const Signature: t_signatures.Signature = ($) => ({
//     'type': _p.deprecated_cc($['type'], ($) => null),
//     'parameters': _p.deprecated_cc($['parameters'], ($) => _p.deprecated_cc($, ($): t_out.Signature.parameters => {
//         switch ($[0]) {
//             case 'local': return _p.ss($, ($) => ['local', Signature_Parameters(
//                 $
//             )])
//             case 'same as': return _p.ss($, ($) => ['same as', $['key']])
//             default: return _p.au($[0])
//         }
//     })),
//     'resolved parameters': _p.deprecated_cc($['resolved parameters'], ($) => null),
// })
// export const Relative_Value_Selection: t_signatures.Relative_Value_Selection = ($) => ({
//     'path': _p.deprecated_cc($['path'], ($) => $.__l_map(($) => _p.deprecated_cc($, ($): t_out.Relative_Value_Selection.path.L => {
//         switch ($[0]) {
//             case 'component': return _p.ss($, ($) => ['component', null])
//             case 'group': return _p.ss($, ($) => ['group', $['key']])
//             case 'reference': return _p.ss($, ($) => ['reference', ({
//                 'definition': _p.deprecated_cc($['definition'], ($) => null),
//             })])
//             default: return _p.au($[0])
//         }
//     }))),
//     'resulting node': _p.deprecated_cc($['resulting node'], ($) => null),
// })
// export const Lookup_Selection: t_signatures.Lookup_Selection = ($) => ({
//     'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Lookup_Selection.type_ => {
//         switch ($[0]) {
//             case 'dictionary': return _p.ss($, ($) => ['dictionary', ({
//                 'selection': _p.deprecated_cc($['selection'], ($) => Guaranteed_Value_Selection(
//                     $
//                 )),
//                 'selected dictionary': _p.deprecated_cc($['selected dictionary'], ($) => null),
//             })])
//             case 'parameter': return _p.ss($, ($) => ['parameter', $['key']])
//             case 'not circular dependent siblings': return _p.ss($, ($) => ['not circular dependent siblings', null])
//             case 'possibly circular dependent siblings': return _p.ss($, ($) => ['possibly circular dependent siblings', null])
//             default: return _p.au($[0])
//         }
//     })),
//     'resulting dictionary': _p.deprecated_cc($['resulting dictionary'], ($) => null),
// })
// export const Constraint: t_signatures.Constraint = ($) => ({
//     'selection': _p.deprecated_cc($['selection'], ($) => Relative_Value_Selection(
//         $
//     )),
//     'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Constraint.type_ => {
//         switch ($[0]) {
//             case 'state': return _p.ss($, ($) => ['state', ({
//                 'selected state group': _p.deprecated_cc($['selected state group'], ($) => null),
//                 'state': _p.deprecated_cc($['state'], ($) => $['key']),
//             })])
//             case 'optional value': return _p.ss($, ($) => ['optional value', ({
//                 'selected optional value': _p.deprecated_cc($['selected optional value'], ($) => null),
//             })])
//             default: return _p.au($[0])
//         }
//     })),
// })
// export const Option_Constraints: t_signatures.Option_Constraints = ($) => $.__d_map(($) => _p.deprecated_cc($, ($): t_out.Option_Constraints.D => {
//     switch ($[0]) {
//         case 'state': return _p.ss($, ($) => ['state', ({
//             'selection': _p.deprecated_cc($['selection'], ($) => Guaranteed_Value_Selection(
//                 $
//             )),
//             'selected state group': _p.deprecated_cc($['selected state group'], ($) => null),
//             'state': _p.deprecated_cc($['state'], ($) => $['key']),
//         })])
//         case 'assert is set': return _p.ss($, ($) => ['assert is set', Possible_Value_Selection(
//             $
//         )])
//         default: return _p.au($[0])
//     }
// }))
// export const Property_Constraints: t_signatures.Property_Constraints = ($) => $.__d_map(($) => Property_Constraint(
//     $
// ))
// export const Reference_To_Property_Constraint: t_signatures.Reference_To_Property_Constraint = ($) => $['key']
// export const Property_Constraint: t_signatures.Property_Constraint = ($) => ({
//     'start': _p.deprecated_cc($['start'], ($) => _p.deprecated_cc($, ($): t_out.Property_Constraint.start => {
//         switch ($[0]) {
//             case 'property': return _p.ss($, ($) => ['property', null])
//             case 'sibling': return _p.ss($, ($) => ['sibling', Reference_To_Property_Constraint(
//                 $
//             )])
//             default: return _p.au($[0])
//         }
//     })),
//     'constraint': _p.deprecated_cc($['constraint'], ($) => Constraint(
//         $
//     )),
// })
// export const Optional_Value_Initialization: t_signatures.Optional_Value_Initialization = ($) => _p.deprecated_cc($, ($): t_out.Optional_Value_Initialization => {
//     switch ($[0]) {
//         case 'not set': return _p.ss($, ($) => ['not set', null])
//         case 'set': return _p.ss($, ($) => ['set', Guaranteed_Value_Selection(
//             $
//         )])
//         case 'selection': return _p.ss($, ($) => ['selection', Possible_Value_Selection(
//             $
//         )])
//         default: return _p.au($[0])
//     }
// })
// export const Node_Resolver_Group: t_signatures.Node_Resolver_Group = ($) => $.__d_map(($) => ({
//     'definition': _p.deprecated_cc($['definition'], ($) => null),
//     'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
//         $
//     )),
// }))
// export const Node_Resolver_List_Result: t_signatures.Node_Resolver_List_Result = ($) => Type_Reference(
//     $
// )
// export const Benchmark: t_signatures.Benchmark = ($) => ({
//     'selection': _p.deprecated_cc($['selection'], ($) => Guaranteed_Value_Selection(
//         $
//     )),
//     'resulting dictionary': _p.deprecated_cc($['resulting dictionary'], ($) => null),
//     'dense': _p.deprecated_cc($['dense'], ($) => $),
// })
// export const Node_Resolver: t_signatures.Node_Resolver = ($) => _p.deprecated_cc($, ($): t_out.Node_Resolver => {
//     switch ($[0]) {
//         case 'boolean': return _p.ss($, ($) => ['boolean', null])
//         case 'component': return _p.ss($, ($) => ['component', ({
//             'location': _p.deprecated_cc($['location'], ($) => _p.deprecated_cc($, ($): t_out.Node_Resolver.component.location => {
//                 switch ($[0]) {
//                     case 'external': return _p.ss($, ($) => ['external', ({
//                         'import': _p.deprecated_cc($['import'], ($) => $['key']),
//                         'type': _p.deprecated_cc($['type'], ($) => $['key']),
//                     })])
//                     case 'internal': return _p.ss($, ($) => ['internal', $['key']])
//                     default: return _p.au($[0])
//                 }
//             })),
//             'signature': _p.deprecated_cc($['signature'], ($) => null),
//             'arguments': _p.deprecated_cc($['arguments'], ($) => $.__o_map(($) => ({
//                 'values': _p.deprecated_cc($['values'], ($) => $.__o_map(($) => $.__d_map(($) => _p.deprecated_cc($, ($): t_out.Node_Resolver.component.arguments_.O.values.O.D => {
//                     switch ($[0]) {
//                         case 'optional': return _p.ss($, ($) => ['optional', Optional_Value_Initialization(
//                             $
//                         )])
//                         case 'required': return _p.ss($, ($) => ['required', Guaranteed_Value_Selection(
//                             $
//                         )])
//                         case 'parameter': return _p.ss($, ($) => ['parameter', $['key']])
//                         default: return _p.au($[0])
//                     }
//                 })))),
//                 'lookups': _p.deprecated_cc($['lookups'], ($) => $.__o_map(($) => $.__d_map(($) => _p.deprecated_cc($, ($): t_out.Node_Resolver.component.arguments_.O.lookups.O.D => {
//                     switch ($[0]) {
//                         case 'empty stack': return _p.ss($, ($) => ['empty stack', null])
//                         case 'not set': return _p.ss($, ($) => ['not set', null])
//                         case 'selection': return _p.ss($, ($) => ['selection', Lookup_Selection(
//                             $
//                         )])
//                         case 'stack': return _p.ss($, ($) => ['stack', ({
//                             'stack': _p.deprecated_cc($['stack'], ($) => Lookup_Selection(
//                                 $
//                             )),
//                             'element': _p.deprecated_cc($['element'], ($) => Lookup_Selection(
//                                 $
//                             )),
//                         })])
//                         default: return _p.au($[0])
//                     }
//                 })))),
//             }))),
//             'constraints': _p.deprecated_cc($['constraints'], ($) => Property_Constraints(
//                 $
//             )),
//         })])
//         case 'dictionary': return _p.ss($, ($) => ['dictionary', ({
//             'definition': _p.deprecated_cc($['definition'], ($) => null),
//             'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
//                 $
//             )),
//             'benchmark': _p.deprecated_cc($['benchmark'], ($) => $.__o_map(($) => Benchmark(
//                 $
//             ))),
//         })])
//         case 'group': return _p.ss($, ($) => ['group', Node_Resolver_Group(
//             $
//         )])
//         case 'list': return _p.ss($, ($) => ['list', ({
//             'definition': _p.deprecated_cc($['definition'], ($) => null),
//             'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
//                 $
//             )),
//             'result': _p.deprecated_cc($['result'], ($) => $.__o_map(($) => Node_Resolver_List_Result(
//                 $
//             ))),
//         })])
//         case 'nothing': return _p.ss($, ($) => ['nothing', null])
//         case 'number': return _p.ss($, ($) => ['number', null])
//         case 'optional': return _p.ss($, ($) => ['optional', ({
//             'constraints': _p.deprecated_cc($['constraints'], ($) => Option_Constraints(
//                 $
//             )),
//             'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
//                 $
//             )),
//         })])
//         case 'reference': return _p.ss($, ($) => ['reference', ({
//             'definition': _p.deprecated_cc($['definition'], ($) => null),
//             'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Node_Resolver.reference.type_ => {
//                 switch ($[0]) {
//                     case 'derived': return _p.ss($, ($) => ['derived', ({
//                         'value': _p.deprecated_cc($['value'], ($) => Guaranteed_Value_Selection(
//                             $
//                         )),
//                     })])
//                     case 'selected': return _p.ss($, ($) => ['selected', ({
//                         'definition': _p.deprecated_cc($['definition'], ($) => null),
//                         'lookup': _p.deprecated_cc($['lookup'], ($) => Lookup_Selection(
//                             $
//                         )),
//                         'constraints': _p.deprecated_cc($['constraints'], ($) => Property_Constraints(
//                             $
//                         )),
//                     })])
//                     default: return _p.au($[0])
//                 }
//             })),
//         })])
//         case 'state group': return _p.ss($, ($) => ['state group', ({
//             'definition': _p.deprecated_cc($['definition'], ($) => null),
//             'states': _p.deprecated_cc($['states'], ($) => $.__d_map(($) => ({
//                 'constraints': _p.deprecated_cc($['constraints'], ($) => Option_Constraints(
//                     $
//                 )),
//                 'resolver': _p.deprecated_cc($['resolver'], ($) => Node_Resolver(
//                     $
//                 )),
//             }))),
//         })])
//         case 'text': return _p.ss($, ($) => ['text', null])
//         default: return _p.au($[0])
//     }
// })
// export const Guaranteed_Value_Selection: t_signatures.Guaranteed_Value_Selection = ($) => ({
//     'start': _p.deprecated_cc($['start'], ($) => _p.deprecated_cc($, ($): t_out.Guaranteed_Value_Selection.start => {
//         switch ($[0]) {
//             case 'sibling': return _p.ss($, ($) => ['sibling', $['key']])
//             case 'parent sibling': return _p.ss($, ($) => ['parent sibling', $['key']])
//             case 'option constraint': return _p.ss($, ($) => ['option constraint', $['key']])
//             case 'list cursor': return _p.ss($, ($) => ['list cursor', null])
//             case 'linked entry': return _p.ss($, ($) => ['linked entry', null])
//             case 'constraint': return _p.ss($, ($) => ['constraint', _p.deprecated_cc($, ($): t_out.Guaranteed_Value_Selection.start.constraint => {
//                 switch ($[0]) {
//                     case 'component': return _p.ss($, ($) => ['component', ({
//                         'property': _p.deprecated_cc($['property'], ($) => $['key']),
//                         'constraint': _p.deprecated_cc($['constraint'], ($) => $['key']),
//                     })])
//                     case 'reference': return _p.ss($, ($) => ['reference', ({
//                         'property': _p.deprecated_cc($['property'], ($) => $['key']),
//                         'constraint': _p.deprecated_cc($['constraint'], ($) => $['key']),
//                     })])
//                     default: return _p.au($[0])
//                 }
//             })])
//             case 'parameter': return _p.ss($, ($) => ['parameter', $['key']])
//             case 'result': return _p.ss($, ($) => ['result', _p.deprecated_cc($, ($): t_out.Guaranteed_Value_Selection.start.result => {
//                 switch ($[0]) {
//                     case 'list': return _p.ss($, ($) => ['list', ({
//                         'property': _p.deprecated_cc($['property'], ($) => $['key']),
//                         'list result': _p.deprecated_cc($['list result'], ($) => null),
//                     })])
//                     case 'state group': return _p.ss($, ($) => ['state group', ({
//                         'property': _p.deprecated_cc($['property'], ($) => $['key']),
//                         'state group': _p.deprecated_cc($['state group'], ($) => null),
//                         'result': _p.deprecated_cc($['result'], ($) => Type_Reference(
//                             $
//                         )),
//                     })])
//                     case 'optional value': return _p.ss($, ($) => ['optional value', ({
//                         'property': _p.deprecated_cc($['property'], ($) => $['key']),
//                         'optional value': _p.deprecated_cc($['optional value'], ($) => null),
//                         'result': _p.deprecated_cc($['result'], ($) => Type_Reference(
//                             $
//                         )),
//                     })])
//                     default: return _p.au($[0])
//                 }
//             })])
//             default: return _p.au($[0])
//         }
//     })),
//     'tail': _p.deprecated_cc($['tail'], ($) => Relative_Value_Selection(
//         $
//     )),
//     'resulting node': _p.deprecated_cc($['resulting node'], ($) => null),
// })
// export const Possible_Value_Selection: t_signatures.Possible_Value_Selection = ($) => _p.deprecated_cc($, ($): t_out.Possible_Value_Selection => {
//     switch ($[0]) {
//         case 'parameter': return _p.ss($, ($) => ['parameter', $['key']])
//         case 'result': return _p.ss($, ($) => ['result', _p.deprecated_cc($, ($): t_out.Possible_Value_Selection.result => {
//             switch ($[0]) {
//                 case 'state group': return _p.ss($, ($) => ['state group', ({
//                     'property': _p.deprecated_cc($['property'], ($) => $['key']),
//                     'state group': _p.deprecated_cc($['state group'], ($) => null),
//                     'result': _p.deprecated_cc($['result'], ($) => Type_Reference(
//                         $
//                     )),
//                 })])
//                 case 'optional value': return _p.ss($, ($) => ['optional value', ({
//                     'property': _p.deprecated_cc($['property'], ($) => $['key']),
//                     'optional value': _p.deprecated_cc($['optional value'], ($) => null),
//                     'result': _p.deprecated_cc($['result'], ($) => Type_Reference(
//                         $
//                     )),
//                 })])
//                 default: return _p.au($[0])
//             }
//         })])
//         default: return _p.au($[0])
//     }
// })
