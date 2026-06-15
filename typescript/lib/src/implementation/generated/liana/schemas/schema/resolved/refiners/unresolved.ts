
// import * as _p from 'pareto-core/dist/assign'

// import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

// import * as _p_sl from 'pareto-core/dist/implementation/refiner/select_static_lookup'

// import _p_unreachable_code_path from 'pareto-core/dist/implementation/specials/unreachable_code_path'

// import _p_variables from 'pareto-core/dist/implementation/specials/variables'

// import * as t_out from "../../../../../../../interface/generated/liana/schemas/schema/data/resolved"

// import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/schema/signatures/resolved/refiners/unresolved"

// export const Package: t_signatures.Package = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_omit_$po_de$pc_serializer = _p_change_context(
//             $['omit (de)serializer'],
//             ($) => $,
//         )
        
//         const prop_schema_tree = _p_change_context(
//             $['schema tree'],
//             ($) => Schema_Tree(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 {
//                     'sibling schemas': _p_sl.stack.empty(),
//                 },
//                 null,
//             ),
//         )
//         return {
//             'omit (de)serializer': prop_omit_$po_de$pc_serializer,
//             'schema tree': prop_schema_tree,
//         }
//     },
// )

// export const Module: t_signatures.Module = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_root_value = _p_change_context(
//             $['root value'],
//             ($) => Value(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 {
//                     'noncircular sibling modules': $l['noncircular sibling modules'],
//                     'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
//                 },
//                 {
//                     'globals': $p['globals'],
//                     'imports': $p['imports'],
//                 },
//             ),
//         )
//         return {
//             'root value': prop_root_value,
//         }
//     },
// )

// export const Modules: t_signatures.Modules = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Modules.D => _p_change_context(
//         $['l entry'],
//         ($) => Module(
//             $,
//             ($) => abort(
//                 $,
//             ),
//             {
//                 'noncircular sibling modules': $a,
//                 'possibly circular dependent sibling modules': $c,
//             },
//             {
//                 'globals': $p['globals'],
//                 'imports': $p['imports'],
//             },
//         ),
//     ),
// )

// export const Globals: t_signatures.Globals = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_complexity = _p_change_context(
//             $['complexity'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Globals.complexity => {
//                             switch ($[0]) {
//                                 case 'unconstrained':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['unconstrained', null],
//                                     )
//                                 case 'constrained':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['constrained', null],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
        
//         const prop_text_types = _p_change_context(
//             $['text types'],
//             ($) => _p.dictionary.from.dictionary(
//                 $['l dictionary'],
//             ).resolve_static(
//                 ($, id, $a, $c): t_out.Globals.text_types.D => _p_change_context(
//                     $['l entry'],
//                     ($) => Text_Type(
//                         $,
//                         ($) => abort(
//                             $,
//                         ),
//                         null,
//                         null,
//                     ),
//                 ),
//             ),
//         )
        
//         const prop_number_types = _p_change_context(
//             $['number types'],
//             ($) => _p.dictionary.from.dictionary(
//                 $['l dictionary'],
//             ).resolve_static(
//                 ($, id, $a, $c): t_out.Globals.number_types.D => _p_change_context(
//                     $['l entry'],
//                     ($) => Number_Type(
//                         $,
//                         ($) => abort(
//                             $,
//                         ),
//                         null,
//                         null,
//                     ),
//                 ),
//             ),
//         )
//         return {
//             'complexity': prop_complexity,
//             'text types': prop_text_types,
//             'number types': prop_number_types,
//         }
//     },
// )

// export const Number_Type: t_signatures.Number_Type = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_precision = _p_change_context(
//             $['precision'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Number_Type.precision => {
//                             switch ($[0]) {
//                                 case 'approximation':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['approximation', _p.literal.group_resolve(
//                                             () => {
                                                
//                                                 const prop_significant_digits = _p_change_context(
//                                                     $['significant digits'],
//                                                     ($) => $,
//                                                 )
//                                                 return {
//                                                     'significant digits': prop_significant_digits,
//                                                 }
//                                             },
//                                         )],
//                                     )
//                                 case 'exact':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['exact', _p.literal.group_resolve(
//                                             () => {
                                                
//                                                 const prop_decimal_separator_offset = _p_change_context(
//                                                     $['decimal separator offset'],
//                                                     ($) => _p.optional.from.optional(
//                                                         $,
//                                                     ).map(
//                                                         ($) => $,
//                                                     ),
//                                                 )
                                                
//                                                 const prop_type = _p_change_context(
//                                                     $['type'],
//                                                     ($) => _p_variables(
//                                                         () => {
                                                            
//                                                             const var_location = $['l location']
//                                                             return _p.decide.state(
//                                                                 $['l state'],
//                                                                 ($): t_out.Number_Type.precision.exact.type_ => {
//                                                                     switch ($[0]) {
//                                                                         case 'integer':
//                                                                             return _p.ss(
//                                                                                 $,
//                                                                                 ($) => ['integer', null],
//                                                                             )
//                                                                         case 'natural':
//                                                                             return _p.ss(
//                                                                                 $,
//                                                                                 ($) => ['natural', null],
//                                                                             )
//                                                                         case 'positive natural':
//                                                                             return _p.ss(
//                                                                                 $,
//                                                                                 ($) => ['positive natural', null],
//                                                                             )
//                                                                         default:
//                                                                             return _p.au(
//                                                                                 $[0],
//                                                                             )
//                                                                     }
//                                                                 },
//                                                             )
//                                                         },
//                                                     ),
//                                                 )
//                                                 return {
//                                                     'decimal separator offset': prop_decimal_separator_offset,
//                                                     'type': prop_type,
//                                                 }
//                                             },
//                                         )],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
//         return {
//             'precision': prop_precision,
//         }
//     },
// )

// export const Text_Type: t_signatures.Text_Type = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_type = _p_change_context(
//             $['type'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Text_Type.type_ => {
//                             switch ($[0]) {
//                                 case 'multi line':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['multi line', null],
//                                     )
//                                 case 'single line':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['single line', null],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
//         return {
//             'type': prop_type,
//         }
//     },
// )

// export const Module_Reference: t_signatures.Module_Reference = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_location = _p_change_context(
//             $['location'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Module_Reference.location => {
//                             switch ($[0]) {
//                                 case 'internal':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['internal', {
//                                             'l entry': $l['modules'].get_entry(
//                                                 $['l reference'],
//                                                 {
//                                                     no_such_entry: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     no_context_lookup: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no context lookup', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     cycle_detected: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['cycle detected', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                 },
//                                             ),
//                                             'l id': $['l reference'],
//                                         }],
//                                     )
//                                 case 'external':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['external', _p_variables(
//                                             () => {
                                                
//                                                 const var_constraint_import = _p.decide.optional(
//                                                     $p['imports'],
//                                                     ($) => $,
//                                                     () => abort(
//                                                         {
//                                                             'type': ['constraint', ['optional value is not set', null]],
//                                                             'location': var_location,
//                                                         },
//                                                     ),
//                                                 )
//                                                 return _p.literal.group_resolve(
//                                                     () => {
                                                        
//                                                         const prop_import = _p_change_context(
//                                                             $['import'],
//                                                             ($) => ({
//                                                                 'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                     var_constraint_import,
//                                                                 ).get_entry(
//                                                                     $['l reference'],
//                                                                     {
//                                                                         no_such_entry: () => abort(
//                                                                             {
//                                                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                 'location': $['l location'],
//                                                                             },
//                                                                         ),
//                                                                         no_context_lookup: () => abort(
//                                                                             {
//                                                                                 'type': ['lookup', ['no context lookup', null]],
//                                                                                 'location': $['l location'],
//                                                                             },
//                                                                         ),
//                                                                         cycle_detected: () => abort(
//                                                                             {
//                                                                                 'type': ['lookup', ['cycle detected', null]],
//                                                                                 'location': $['l location'],
//                                                                             },
//                                                                         ),
//                                                                     },
//                                                                 ),
//                                                                 'l id': $['l reference'],
//                                                             }),
//                                                         )
                                                        
//                                                         const prop_module = _p_change_context(
//                                                             $['module'],
//                                                             ($) => ({
//                                                                 'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                     prop_import['l entry']['schema']['modules'],
//                                                                 ).get_entry(
//                                                                     $['l reference'],
//                                                                     {
//                                                                         no_such_entry: () => abort(
//                                                                             {
//                                                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                 'location': $['l location'],
//                                                                             },
//                                                                         ),
//                                                                         no_context_lookup: () => abort(
//                                                                             {
//                                                                                 'type': ['lookup', ['no context lookup', null]],
//                                                                                 'location': $['l location'],
//                                                                             },
//                                                                         ),
//                                                                         cycle_detected: () => abort(
//                                                                             {
//                                                                                 'type': ['lookup', ['cycle detected', null]],
//                                                                                 'location': $['l location'],
//                                                                             },
//                                                                         ),
//                                                                     },
//                                                                 ),
//                                                                 'l id': $['l reference'],
//                                                             }),
//                                                         )
//                                                         return {
//                                                             'import': prop_import,
//                                                             'module': prop_module,
//                                                         }
//                                                     },
//                                                 )
//                                             },
//                                         )],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
        
//         const prop_resulting_module = _p_change_context(
//             $['resulting module'],
//             ($) => _pdev.implement_me(
//                 "IM: STATE",
//             ),
//         )
//         return {
//             'location': prop_location,
//             'resulting module': prop_resulting_module,
//         }
//     },
// )

// export const Value_Reference: t_signatures.Value_Reference = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_module = _p_change_context(
//             $['module'],
//             ($) => Module_Reference(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 $l,
//                 $p,
//             ),
//         )
        
//         const prop_path = _p_change_context(
//             $['path'],
//             ($) => Value_Path(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 null,
//                 {
//                     'module': prop_module['resulting module'],
//                 },
//             ),
//         )
//         return {
//             'module': prop_module,
//             'path': prop_path,
//         }
//     },
// )

// export const Value_Path: t_signatures.Value_Path = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_tail = _p_change_context(
//             $['tail'],
//             ($) => ({
//                 'l value': _p.list.map_with_state(
//                     $['l list'],
//                     _pdev.implement_me(
//                         "IM: initial state",
//                     ),
//                     ($) => ({
//                         'l item': _p_change_context(
//                             $['l item'],
//                             ($) => _p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return {
//                                         'l results': {
//                                             'value': _pdev.implement_me(
//                                                 "IM: value reference",
//                                             ),
//                                         },
//                                         'l value': _p.decide.state(
//                                             $['l state'],
//                                             ($): t_out.Value_Path.tail.l_value.L.l_item.l_value => {
//                                                 switch ($[0]) {
//                                                     case 'dictionary':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => ['dictionary', _p_variables(
//                                                                 () => {
                                                                    
//                                                                     const var_constraint_definition = _p.decide.state(
//                                                                         $,
//                                                                         ($) => {
//                                                                             switch ($[0]) {
//                                                                                 case 'dictionary':
//                                                                                     return _p.ss(
//                                                                                         $,
//                                                                                         ($) => $,
//                                                                                     )
//                                                                                 default:
//                                                                                     return abort(
//                                                                                         {
//                                                                                             'type': ['option constraint', ['no such option', "dictionary"]],
//                                                                                             'location': var_location,
//                                                                                         },
//                                                                                     )
//                                                                             }
//                                                                         },
//                                                                     )
//                                                                     return null
//                                                                 },
//                                                             )],
//                                                         )
//                                                     case 'group':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => ['group', _p_variables(
//                                                                 () => {
                                                                    
//                                                                     const var_constraint_definition = _p.decide.state(
//                                                                         $,
//                                                                         ($) => {
//                                                                             switch ($[0]) {
//                                                                                 case 'group':
//                                                                                     return _p.ss(
//                                                                                         $,
//                                                                                         ($) => $,
//                                                                                     )
//                                                                                 default:
//                                                                                     return abort(
//                                                                                         {
//                                                                                             'type': ['option constraint', ['no such option', "group"]],
//                                                                                             'location': var_location,
//                                                                                         },
//                                                                                     )
//                                                                             }
//                                                                         },
//                                                                     )
//                                                                     return {
//                                                                         'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                             var_constraint_definition,
//                                                                         ).get_entry(
//                                                                             $['l reference'],
//                                                                             {
//                                                                                 no_such_entry: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                                 no_context_lookup: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['no context lookup', null]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                                 cycle_detected: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['cycle detected', null]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                             },
//                                                                         ),
//                                                                         'l id': $['l reference'],
//                                                                     }
//                                                                 },
//                                                             )],
//                                                         )
//                                                     case 'list':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => ['list', _p_variables(
//                                                                 () => {
                                                                    
//                                                                     const var_constraint_definition = _p.decide.state(
//                                                                         $,
//                                                                         ($) => {
//                                                                             switch ($[0]) {
//                                                                                 case 'list':
//                                                                                     return _p.ss(
//                                                                                         $,
//                                                                                         ($) => $,
//                                                                                     )
//                                                                                 default:
//                                                                                     return abort(
//                                                                                         {
//                                                                                             'type': ['option constraint', ['no such option', "list"]],
//                                                                                             'location': var_location,
//                                                                                         },
//                                                                                     )
//                                                                             }
//                                                                         },
//                                                                     )
//                                                                     return null
//                                                                 },
//                                                             )],
//                                                         )
//                                                     case 'optional':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => ['optional', _p_variables(
//                                                                 () => {
                                                                    
//                                                                     const var_constraint_definition = _p.decide.state(
//                                                                         $,
//                                                                         ($) => {
//                                                                             switch ($[0]) {
//                                                                                 case 'optional':
//                                                                                     return _p.ss(
//                                                                                         $,
//                                                                                         ($) => $,
//                                                                                     )
//                                                                                 default:
//                                                                                     return abort(
//                                                                                         {
//                                                                                             'type': ['option constraint', ['no such option', "optional"]],
//                                                                                             'location': var_location,
//                                                                                         },
//                                                                                     )
//                                                                             }
//                                                                         },
//                                                                     )
//                                                                     return null
//                                                                 },
//                                                             )],
//                                                         )
//                                                     case 'state':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => ['state', _p_variables(
//                                                                 () => {
                                                                    
//                                                                     const var_constraint_definition = _p.decide.state(
//                                                                         $,
//                                                                         ($) => {
//                                                                             switch ($[0]) {
//                                                                                 case 'state':
//                                                                                     return _p.ss(
//                                                                                         $,
//                                                                                         ($) => $,
//                                                                                     )
//                                                                                 default:
//                                                                                     return abort(
//                                                                                         {
//                                                                                             'type': ['option constraint', ['no such option', "state"]],
//                                                                                             'location': var_location,
//                                                                                         },
//                                                                                     )
//                                                                             }
//                                                                         },
//                                                                     )
//                                                                     return {
//                                                                         'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                             var_constraint_definition['options'],
//                                                                         ).get_entry(
//                                                                             $['l reference'],
//                                                                             {
//                                                                                 no_such_entry: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                                 no_context_lookup: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['no context lookup', null]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                                 cycle_detected: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['cycle detected', null]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                             },
//                                                                         ),
//                                                                         'l id': $['l reference'],
//                                                                     }
//                                                                 },
//                                                             )],
//                                                         )
//                                                     default:
//                                                         return _p.au(
//                                                             $[0],
//                                                         )
//                                                 }
//                                             },
//                                         ),
//                                     }
//                                 },
//                             ),
//                         ),
//                         'l result': _pdev.implement_me(
//                             "IM: result aggregation",
//                         ),
//                     }),
//                     ($, state) => _pdev.implement_me(
//                         "IM: update state",
//                     ),
//                     ($, state) => _pdev.implement_me(
//                         "IM: wrapup",
//                     ),
//                 ),
//                 'l results': {
//                     'result': _pdev.implement_me(
//                         "IM: result aggregation",
//                     ),
//                 },
//             }),
//         )
        
//         const prop_resulting_node = _p_change_context(
//             $['resulting node'],
//             ($) => _pdev.implement_me(
//                 "IM: LIST",
//             ),
//         )
//         return {
//             'tail': prop_tail,
//             'resulting node': prop_resulting_node,
//         }
//     },
// )

// export const Value_Results: t_signatures.Value_Results = ($, abort, $l, $p) => _p.optional.from.optional(
//     $,
// ).map(
//     ($) => _p.dictionary.from.dictionary(
//         $['l dictionary'],
//     ).resolve_static(
//         ($, id, $a, $c): t_out.Value_Results.O.D => _p_change_context(
//             $['l entry'],
//             ($) => Value_Reference(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 $l,
//                 $p,
//             ),
//         ),
//     ),
// )

// export const Option_Constraints: t_signatures.Option_Constraints = ($, abort, $l, $p) => _p.optional.from.optional(
//     $,
// ).map(
//     ($) => _p.dictionary.from.dictionary(
//         $['l dictionary'],
//     ).resolve_static(
//         ($, id, $a, $c): t_out.Option_Constraints.O.D => _p_change_context(
//             $['l entry'],
//             ($) => Value_Reference(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 $l,
//                 $p,
//             ),
//         ),
//     ),
// )

// export const Group: t_signatures.Group = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Group.D => _p_change_context(
//         $['l entry'],
//         ($) => _p.literal.group_resolve(
//             () => {
                
//                 const prop_description = _p_change_context(
//                     $['description'],
//                     ($) => _p.optional.from.optional(
//                         $,
//                     ).map(
//                         ($) => $,
//                     ),
//                 )
                
//                 const prop_value = _p_change_context(
//                     $['value'],
//                     ($) => Value(
//                         $,
//                         ($) => abort(
//                             $,
//                         ),
//                         {
//                             'noncircular sibling modules': $l['noncircular sibling modules'],
//                             'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
//                         },
//                         {
//                             'globals': $p['globals'],
//                             'imports': $p['imports'],
//                         },
//                     ),
//                 )
//                 return {
//                     'description': prop_description,
//                     'value': prop_value,
//                 }
//             },
//         ),
//     ),
// )

// export const Dictionary: t_signatures.Dictionary = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_value = _p_change_context(
//             $['value'],
//             ($) => Value(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 {
//                     'noncircular sibling modules': $l['noncircular sibling modules'],
//                     'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
//                 },
//                 {
//                     'globals': $p['globals'],
//                     'imports': $p['imports'],
//                 },
//             ),
//         )
//         return {
//             'value': prop_value,
//         }
//     },
// )

// export const Value: t_signatures.Value = ($, abort, $l, $p) => _p_variables(
//     () => {
        
//         const var_location = $['l location']
//         return _p.decide.state(
//             $['l state'],
//             ($): t_out.Value => {
//                 switch ($[0]) {
//                     case 'boolean':
//                         return _p.ss(
//                             $,
//                             ($) => ['boolean', null],
//                         )
//                     case 'component':
//                         return _p.ss(
//                             $,
//                             ($) => ['component', _p.literal.group_resolve(
//                                 () => {
                                    
//                                     const prop_type = _p_change_context(
//                                         $['type'],
//                                         ($) => _p_variables(
//                                             () => {
                                                
//                                                 const var_location = $['l location']
//                                                 return _p.decide.state(
//                                                     $['l state'],
//                                                     ($): t_out.Value.component.type_ => {
//                                                         switch ($[0]) {
//                                                             case 'external':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['external', _p_variables(
//                                                                         () => {
                                                                            
//                                                                             const var_constraint_import = _p.decide.optional(
//                                                                                 $p['imports'],
//                                                                                 ($) => $,
//                                                                                 () => abort(
//                                                                                     {
//                                                                                         'type': ['constraint', ['optional value is not set', null]],
//                                                                                         'location': var_location,
//                                                                                     },
//                                                                                 ),
//                                                                             )
//                                                                             return _p.literal.group_resolve(
//                                                                                 () => {
                                                                                    
//                                                                                     const prop_import = _p_change_context(
//                                                                                         $['import'],
//                                                                                         ($) => ({
//                                                                                             'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                                 var_constraint_import,
//                                                                                             ).get_entry(
//                                                                                                 $['l reference'],
//                                                                                                 {
//                                                                                                     no_such_entry: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     no_context_lookup: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     cycle_detected: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['cycle detected', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 },
//                                                                                             ),
//                                                                                             'l id': $['l reference'],
//                                                                                         }),
//                                                                                     )
                                                                                    
//                                                                                     const prop_module = _p_change_context(
//                                                                                         $['module'],
//                                                                                         ($) => ({
//                                                                                             'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                                 prop_import['l entry']['schema']['modules'],
//                                                                                             ).get_entry(
//                                                                                                 $['l reference'],
//                                                                                                 {
//                                                                                                     no_such_entry: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     no_context_lookup: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     cycle_detected: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['cycle detected', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 },
//                                                                                             ),
//                                                                                             'l id': $['l reference'],
//                                                                                         }),
//                                                                                     )
//                                                                                     return {
//                                                                                         'import': prop_import,
//                                                                                         'module': prop_module,
//                                                                                     }
//                                                                                 },
//                                                                             )
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             case 'internal acyclic':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['internal acyclic', {
//                                                                         'l entry': $l['noncircular sibling modules'].get_entry(
//                                                                             $['l reference'],
//                                                                             {
//                                                                                 no_such_entry: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                                 no_context_lookup: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['no context lookup', null]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                                 cycle_detected: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['cycle detected', null]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                             },
//                                                                         ),
//                                                                         'l id': $['l reference'],
//                                                                     }],
//                                                                 )
//                                                             case 'internal':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['internal', {
//                                                                         'l entry': $l['possibly circular dependent sibling modules'].get_entry(
//                                                                             $['l reference'],
//                                                                             {
//                                                                                 no_such_entry: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                                 no_context_lookup: () => abort(
//                                                                                     {
//                                                                                         'type': ['lookup', ['no context lookup', null]],
//                                                                                         'location': $['l location'],
//                                                                                     },
//                                                                                 ),
//                                                                                 accessing_cyclic_sibling_before_it_is_resolved: () => abort(
//                                                                                     _p_unreachable_code_path(
//                                                                                         "the generated resolver should take care of accessing before resolved",
//                                                                                     ),
//                                                                                 ),
//                                                                             },
//                                                                         ),
//                                                                         'l id': $['l reference'],
//                                                                     }],
//                                                                 )
//                                                             default:
//                                                                 return _p.au(
//                                                                     $[0],
//                                                                 )
//                                                         }
//                                                     },
//                                                 )
//                                             },
//                                         ),
//                                     )
                                    
//                                     const prop_results = _p_change_context(
//                                         $['results'],
//                                         ($) => Value_Results(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             {
//                                                 'modules': $l['noncircular sibling modules'],
//                                             },
//                                             {
//                                                 'imports': $p['imports'],
//                                             },
//                                         ),
//                                     )
//                                     return {
//                                         'type': prop_type,
//                                         'results': prop_results,
//                                     }
//                                 },
//                             )],
//                         )
//                     case 'dictionary':
//                         return _p.ss(
//                             $,
//                             ($) => ['dictionary', Dictionary(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 {
//                                     'noncircular sibling modules': $l['noncircular sibling modules'],
//                                     'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
//                                 },
//                                 {
//                                     'globals': $p['globals'],
//                                     'imports': $p['imports'],
//                                 },
//                             )],
//                         )
//                     case 'group':
//                         return _p.ss(
//                             $,
//                             ($) => ['group', Group(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 {
//                                     'noncircular sibling modules': $l['noncircular sibling modules'],
//                                     'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
//                                 },
//                                 {
//                                     'globals': $p['globals'],
//                                     'imports': $p['imports'],
//                                 },
//                             )],
//                         )
//                     case 'list':
//                         return _p.ss(
//                             $,
//                             ($) => ['list', _p.literal.group_resolve(
//                                 () => {
                                    
//                                     const prop_value = _p_change_context(
//                                         $['value'],
//                                         ($) => Value(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             $l,
//                                             $p,
//                                         ),
//                                     )
                                    
//                                     const prop_results = _p_change_context(
//                                         $['results'],
//                                         ($) => Value_Results(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             {
//                                                 'modules': $l['noncircular sibling modules'],
//                                             },
//                                             {
//                                                 'imports': $p['imports'],
//                                             },
//                                         ),
//                                     )
//                                     return {
//                                         'value': prop_value,
//                                         'results': prop_results,
//                                     }
//                                 },
//                             )],
//                         )
//                     case 'nothing':
//                         return _p.ss(
//                             $,
//                             ($) => ['nothing', null],
//                         )
//                     case 'number':
//                         return _p.ss(
//                             $,
//                             ($) => ['number', _p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return _p.decide.state(
//                                         $['l state'],
//                                         ($): t_out.Value.number_ => {
//                                             switch ($[0]) {
//                                                 case 'global':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => ['global', _p_variables(
//                                                             () => {
                                                                
//                                                                 const var_constraint_globals = _p.decide.optional(
//                                                                     $p['globals'],
//                                                                     ($) => $,
//                                                                     () => abort(
//                                                                         {
//                                                                             'type': ['constraint', ['optional value is not set', null]],
//                                                                             'location': var_location,
//                                                                         },
//                                                                     ),
//                                                                 )
//                                                                 return {
//                                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                         var_constraint_globals['number types'],
//                                                                     ).get_entry(
//                                                                         $['l reference'],
//                                                                         {
//                                                                             no_such_entry: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                             no_context_lookup: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                             cycle_detected: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                         },
//                                                                     ),
//                                                                     'l id': $['l reference'],
//                                                                 }
//                                                             },
//                                                         )],
//                                                     )
//                                                 case 'local':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => ['local', Number_Type(
//                                                             $,
//                                                             ($) => abort(
//                                                                 $,
//                                                             ),
//                                                             null,
//                                                             null,
//                                                         )],
//                                                     )
//                                                 default:
//                                                     return _p.au(
//                                                         $[0],
//                                                     )
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     case 'optional':
//                         return _p.ss(
//                             $,
//                             ($) => ['optional', Value(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 $l,
//                                 $p,
//                             )],
//                         )
//                     case 'reference':
//                         return _p.ss(
//                             $,
//                             ($) => ['reference', _p.literal.group_resolve(
//                                 () => {
                                    
//                                     const prop_referent = _p_change_context(
//                                         $['referent'],
//                                         ($) => Value_Reference(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             {
//                                                 'modules': $l['noncircular sibling modules'],
//                                             },
//                                             {
//                                                 'imports': $p['imports'],
//                                             },
//                                         ),
//                                     )
                                    
//                                     const prop_type = _p_change_context(
//                                         $['type'],
//                                         ($) => _p_variables(
//                                             () => {
                                                
//                                                 const var_location = $['l location']
//                                                 return _p.decide.state(
//                                                     $['l state'],
//                                                     ($): t_out.Value.reference.type_ => {
//                                                         switch ($[0]) {
//                                                             case 'derived':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['derived', null],
//                                                                 )
//                                                             case 'selected':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['selected', _p_variables(
//                                                                         () => {
                                                                            
//                                                                             const var_constraint_dictionary = _p.decide.state(
//                                                                                 $,
//                                                                                 ($) => {
//                                                                                     switch ($[0]) {
//                                                                                         case 'dictionary':
//                                                                                             return _p.ss(
//                                                                                                 $,
//                                                                                                 ($) => $,
//                                                                                             )
//                                                                                         default:
//                                                                                             return abort(
//                                                                                                 {
//                                                                                                     'type': ['option constraint', ['no such option', "dictionary"]],
//                                                                                                     'location': var_location,
//                                                                                                 },
//                                                                                             )
//                                                                                     }
//                                                                                 },
//                                                                             )
//                                                                             return _p.literal.group_resolve(
//                                                                                 () => {
                                                                                    
//                                                                                     const prop_dictionary = _p_change_context(
//                                                                                         $['dictionary'],
//                                                                                         ($) => var_constraint_dictionary,
//                                                                                     )
                                                                                    
//                                                                                     const prop_dependency = _p_change_context(
//                                                                                         $['dependency'],
//                                                                                         ($) => _p_variables(
//                                                                                             () => {
                                                                                                
//                                                                                                 const var_location = $['l location']
//                                                                                                 return _p.decide.state(
//                                                                                                     $['l state'],
//                                                                                                     ($): t_out.Value.reference.type_.selected.dependency => {
//                                                                                                         switch ($[0]) {
//                                                                                                             case 'acyclic':
//                                                                                                                 return _p.ss(
//                                                                                                                     $,
//                                                                                                                     ($) => ['acyclic', null],
//                                                                                                                 )
//                                                                                                             case 'cyclic':
//                                                                                                                 return _p.ss(
//                                                                                                                     $,
//                                                                                                                     ($) => ['cyclic', null],
//                                                                                                                 )
//                                                                                                             case 'stack':
//                                                                                                                 return _p.ss(
//                                                                                                                     $,
//                                                                                                                     ($) => ['stack', null],
//                                                                                                                 )
//                                                                                                             default:
//                                                                                                                 return _p.au(
//                                                                                                                     $[0],
//                                                                                                                 )
//                                                                                                         }
//                                                                                                     },
//                                                                                                 )
//                                                                                             },
//                                                                                         ),
//                                                                                     )
                                                                                    
//                                                                                     const prop_results = _p_change_context(
//                                                                                         $['results'],
//                                                                                         ($) => Value_Results(
//                                                                                             $,
//                                                                                             ($) => abort(
//                                                                                                 $,
//                                                                                             ),
//                                                                                             {
//                                                                                                 'modules': $l['noncircular sibling modules'],
//                                                                                             },
//                                                                                             {
//                                                                                                 'imports': $p['imports'],
//                                                                                             },
//                                                                                         ),
//                                                                                     )
//                                                                                     return {
//                                                                                         'dictionary': prop_dictionary,
//                                                                                         'dependency': prop_dependency,
//                                                                                         'results': prop_results,
//                                                                                     }
//                                                                                 },
//                                                                             )
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             default:
//                                                                 return _p.au(
//                                                                     $[0],
//                                                                 )
//                                                         }
//                                                     },
//                                                 )
//                                             },
//                                         ),
//                                     )
//                                     return {
//                                         'referent': prop_referent,
//                                         'type': prop_type,
//                                     }
//                                 },
//                             )],
//                         )
//                     case 'state':
//                         return _p.ss(
//                             $,
//                             ($) => ['state', _p.literal.group_resolve(
//                                 () => {
                                    
//                                     const prop_options = _p_change_context(
//                                         $['options'],
//                                         ($) => _p.dictionary.from.dictionary(
//                                             $['l dictionary'],
//                                         ).resolve_static(
//                                             ($, id, $a, $c): t_out.Value.state.options.D => _p_change_context(
//                                                 $['l entry'],
//                                                 ($) => _p.literal.group_resolve(
//                                                     () => {
                                                        
//                                                         const prop_constraints = _p_change_context(
//                                                             $['constraints'],
//                                                             ($) => Option_Constraints(
//                                                                 $,
//                                                                 ($) => abort(
//                                                                     $,
//                                                                 ),
//                                                                 {
//                                                                     'modules': $l['noncircular sibling modules'],
//                                                                 },
//                                                                 {
//                                                                     'imports': $p['imports'],
//                                                                 },
//                                                             ),
//                                                         )
                                                        
//                                                         const prop_value = _p_change_context(
//                                                             $['value'],
//                                                             ($) => Value(
//                                                                 $,
//                                                                 ($) => abort(
//                                                                     $,
//                                                                 ),
//                                                                 $l,
//                                                                 $p,
//                                                             ),
//                                                         )
                                                        
//                                                         const prop_description = _p_change_context(
//                                                             $['description'],
//                                                             ($) => _p.optional.from.optional(
//                                                                 $,
//                                                             ).map(
//                                                                 ($) => $,
//                                                             ),
//                                                         )
//                                                         return {
//                                                             'constraints': prop_constraints,
//                                                             'value': prop_value,
//                                                             'description': prop_description,
//                                                         }
//                                                     },
//                                                 ),
//                                             ),
//                                         ),
//                                     )
                                    
//                                     const prop_results = _p_change_context(
//                                         $['results'],
//                                         ($) => Value_Results(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             {
//                                                 'modules': $l['noncircular sibling modules'],
//                                             },
//                                             {
//                                                 'imports': $p['imports'],
//                                             },
//                                         ),
//                                     )
//                                     return {
//                                         'options': prop_options,
//                                         'results': prop_results,
//                                     }
//                                 },
//                             )],
//                         )
//                     case 'text':
//                         return _p.ss(
//                             $,
//                             ($) => ['text', _p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return _p.decide.state(
//                                         $['l state'],
//                                         ($): t_out.Value.text => {
//                                             switch ($[0]) {
//                                                 case 'global':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => ['global', _p_variables(
//                                                             () => {
                                                                
//                                                                 const var_constraint_globals = _p.decide.optional(
//                                                                     $p['globals'],
//                                                                     ($) => $,
//                                                                     () => abort(
//                                                                         {
//                                                                             'type': ['constraint', ['optional value is not set', null]],
//                                                                             'location': var_location,
//                                                                         },
//                                                                     ),
//                                                                 )
//                                                                 return {
//                                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                         var_constraint_globals['text types'],
//                                                                     ).get_entry(
//                                                                         $['l reference'],
//                                                                         {
//                                                                             no_such_entry: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                             no_context_lookup: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                             cycle_detected: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                         },
//                                                                     ),
//                                                                     'l id': $['l reference'],
//                                                                 }
//                                                             },
//                                                         )],
//                                                     )
//                                                 case 'local':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => ['local', Text_Type(
//                                                             $,
//                                                             ($) => abort(
//                                                                 $,
//                                                             ),
//                                                             null,
//                                                             null,
//                                                         )],
//                                                     )
//                                                 default:
//                                                     return _p.au(
//                                                         $[0],
//                                                     )
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     default:
//                         return _p.au(
//                             $[0],
//                         )
//                 }
//             },
//         )
//     },
// )

// export const Resolver_Relative_Value_Selection: t_signatures.Resolver_Relative_Value_Selection = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_path = _p_change_context(
//             $['path'],
//             ($) => ({
//                 'l value': _p.list.map_with_state(
//                     $['l list'],
//                     _pdev.implement_me(
//                         "IM: initial state",
//                     ),
//                     ($) => ({
//                         'l item': _p_change_context(
//                             $['l item'],
//                             ($) => _p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return _p.decide.state(
//                                         $['l state'],
//                                         ($): t_out.Resolver_Relative_Value_Selection.path.l_value.L.l_item => {
//                                             switch ($[0]) {
//                                                 case 'component':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => ['component', _p_variables(
//                                                             () => {
                                                                
//                                                                 const var_constraint_definition = _p.decide.state(
//                                                                     $,
//                                                                     ($) => {
//                                                                         switch ($[0]) {
//                                                                             case 'component':
//                                                                                 return _p.ss(
//                                                                                     $,
//                                                                                     ($) => $,
//                                                                                 )
//                                                                             default:
//                                                                                 return abort(
//                                                                                     {
//                                                                                         'type': ['option constraint', ['no such option', "component"]],
//                                                                                         'location': var_location,
//                                                                                     },
//                                                                                 )
//                                                                         }
//                                                                     },
//                                                                 )
//                                                                 return null
//                                                             },
//                                                         )],
//                                                     )
//                                                 case 'group':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => ['group', _p_variables(
//                                                             () => {
                                                                
//                                                                 const var_constraint_definition = _p.decide.state(
//                                                                     $,
//                                                                     ($) => {
//                                                                         switch ($[0]) {
//                                                                             case 'group':
//                                                                                 return _p.ss(
//                                                                                     $,
//                                                                                     ($) => $,
//                                                                                 )
//                                                                             default:
//                                                                                 return abort(
//                                                                                     {
//                                                                                         'type': ['option constraint', ['no such option', "group"]],
//                                                                                         'location': var_location,
//                                                                                     },
//                                                                                 )
//                                                                         }
//                                                                     },
//                                                                 )
//                                                                 return {
//                                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                         var_constraint_definition,
//                                                                     ).get_entry(
//                                                                         $['l reference'],
//                                                                         {
//                                                                             no_such_entry: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                             no_context_lookup: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                             cycle_detected: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                         },
//                                                                     ),
//                                                                     'l id': $['l reference'],
//                                                                 }
//                                                             },
//                                                         )],
//                                                     )
//                                                 case 'reference':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => ['reference', _p_variables(
//                                                             () => {
                                                                
//                                                                 const var_constraint_definition = _p.decide.state(
//                                                                     $,
//                                                                     ($) => {
//                                                                         switch ($[0]) {
//                                                                             case 'reference':
//                                                                                 return _p.ss(
//                                                                                     $,
//                                                                                     ($) => $,
//                                                                                 )
//                                                                             default:
//                                                                                 return abort(
//                                                                                     {
//                                                                                         'type': ['option constraint', ['no such option', "reference"]],
//                                                                                         'location': var_location,
//                                                                                     },
//                                                                                 )
//                                                                         }
//                                                                     },
//                                                                 )
//                                                                 return _p.literal.group_resolve(
//                                                                     () => {
                                                                        
//                                                                         const prop_definition = _p_change_context(
//                                                                             $['definition'],
//                                                                             ($) => var_constraint_definition,
//                                                                         )
//                                                                         return {
//                                                                             'definition': prop_definition,
//                                                                         }
//                                                                     },
//                                                                 )
//                                                             },
//                                                         )],
//                                                     )
//                                                 default:
//                                                     return _p.au(
//                                                         $[0],
//                                                     )
//                                             }
//                                         },
//                                     )
//                                 },
//                             ),
//                         ),
//                         'l result': _pdev.implement_me(
//                             "IM: result aggregation",
//                         ),
//                     }),
//                     ($, state) => _pdev.implement_me(
//                         "IM: update state",
//                     ),
//                     ($, state) => _pdev.implement_me(
//                         "IM: wrapup",
//                     ),
//                 ),
//                 'l results': {
//                     'result': _pdev.implement_me(
//                         "IM: result aggregation",
//                     ),
//                 },
//             }),
//         )
        
//         const prop_resulting_node = _p_change_context(
//             $['resulting node'],
//             ($) => _pdev.implement_me(
//                 "IM: LIST",
//             ),
//         )
//         return {
//             'path': prop_path,
//             'resulting node': prop_resulting_node,
//         }
//     },
// )

// export const Presence: t_signatures.Presence = ($, abort, $l, $p) => _p_variables(
//     () => {
        
//         const var_location = $['l location']
//         return _p.decide.state(
//             $['l state'],
//             ($): t_out.Presence => {
//                 switch ($[0]) {
//                     case 'optional':
//                         return _p.ss(
//                             $,
//                             ($) => ['optional', null],
//                         )
//                     case 'required':
//                         return _p.ss(
//                             $,
//                             ($) => ['required', null],
//                         )
//                     default:
//                         return _p.au(
//                             $[0],
//                         )
//                 }
//             },
//         )
//     },
// )

// export const Resolver_Signature_Parameters: t_signatures.Resolver_Signature_Parameters = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_modules = _p_change_context(
//             $['modules'],
//             ($) => _p.dictionary.from.dictionary(
//                 $['l dictionary'],
//             ).resolve_static(
//                 ($, id, $a, $c): t_out.Resolver_Signature_Parameters.modules.D => _p_change_context(
//                     $['l entry'],
//                     ($) => _p.literal.group_resolve(
//                         () => {
                            
//                             const prop_module = _p_change_context(
//                                 $['module'],
//                                 ($) => Module_Reference(
//                                     $,
//                                     ($) => abort(
//                                         $,
//                                     ),
//                                     {
//                                         'modules': _p_sl.acyclic.from_resolved_dictionary(
//                                             $p['modules'],
//                                         ),
//                                     },
//                                     {
//                                         'imports': _p.literal.set(
//                                             $p['imports'],
//                                         ),
//                                     },
//                                 ),
//                             )
                            
//                             const prop_presence = _p_change_context(
//                                 $['presence'],
//                                 ($) => Presence(
//                                     $,
//                                     ($) => abort(
//                                         $,
//                                     ),
//                                     null,
//                                     null,
//                                 ),
//                             )
//                             return {
//                                 'module': prop_module,
//                                 'presence': prop_presence,
//                             }
//                         },
//                     ),
//                 ),
//             ),
//         )
        
//         const prop_lookups = _p_change_context(
//             $['lookups'],
//             ($) => _p.dictionary.from.dictionary(
//                 $['l dictionary'],
//             ).resolve_static(
//                 ($, id, $a, $c): t_out.Resolver_Signature_Parameters.lookups.D => _p_change_context(
//                     $['l entry'],
//                     ($) => _p.literal.group_resolve(
//                         () => {
                            
//                             const prop_referent = _p_change_context(
//                                 $['referent'],
//                                 ($) => Module_Reference(
//                                     $,
//                                     ($) => abort(
//                                         $,
//                                     ),
//                                     {
//                                         'modules': _p_sl.acyclic.from_resolved_dictionary(
//                                             $p['modules'],
//                                         ),
//                                     },
//                                     {
//                                         'imports': _p.literal.set(
//                                             $p['imports'],
//                                         ),
//                                     },
//                                 ),
//                             )
                            
//                             const prop_dictionary = _p_change_context(
//                                 $['dictionary'],
//                                 ($) => _pdev.implement_me(
//                                     "IM: COMPONENT",
//                                 ),
//                             )
                            
//                             const prop_type = _p_change_context(
//                                 $['type'],
//                                 ($) => _p_variables(
//                                     () => {
                                        
//                                         const var_location = $['l location']
//                                         return _p.decide.state(
//                                             $['l state'],
//                                             ($): t_out.Resolver_Signature_Parameters.lookups.D.type_ => {
//                                                 switch ($[0]) {
//                                                     case 'cyclic':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => ['cyclic', null],
//                                                         )
//                                                     case 'acyclic':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => ['acyclic', null],
//                                                         )
//                                                     case 'stack':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => ['stack', null],
//                                                         )
//                                                     default:
//                                                         return _p.au(
//                                                             $[0],
//                                                         )
//                                                 }
//                                             },
//                                         )
//                                     },
//                                 ),
//                             )
                            
//                             const prop_presence = _p_change_context(
//                                 $['presence'],
//                                 ($) => Presence(
//                                     $,
//                                     ($) => abort(
//                                         $,
//                                     ),
//                                     null,
//                                     null,
//                                 ),
//                             )
//                             return {
//                                 'referent': prop_referent,
//                                 'dictionary': prop_dictionary,
//                                 'type': prop_type,
//                                 'presence': prop_presence,
//                             }
//                         },
//                     ),
//                 ),
//             ),
//         )
//         return {
//             'modules': prop_modules,
//             'lookups': prop_lookups,
//         }
//     },
// )

// export const Resolver_Signature: t_signatures.Resolver_Signature = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_module = _p_change_context(
//             $['module'],
//             ($) => $p['module'],
//         )
        
//         const prop_parameters = _p_change_context(
//             $['parameters'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Resolver_Signature.parameters => {
//                             switch ($[0]) {
//                                 case 'local':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['local', Resolver_Signature_Parameters(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             null,
//                                             {
//                                                 'modules': $p['modules'],
//                                                 'imports': $p['imports'],
//                                             },
//                                         )],
//                                     )
//                                 case 'same as':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['same as', {
//                                             'l entry': $l['sibling signatures'].get_entry(
//                                                 $['l reference'],
//                                                 {
//                                                     no_such_entry: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     no_context_lookup: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no context lookup', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     cycle_detected: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['cycle detected', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                 },
//                                             ),
//                                             'l id': $['l reference'],
//                                         }],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
        
//         const prop_resolved_parameters = _p_change_context(
//             $['resolved parameters'],
//             ($) => _pdev.implement_me(
//                 "IM: STATE",
//             ),
//         )
//         return {
//             'module': prop_module,
//             'parameters': prop_parameters,
//             'resolved parameters': prop_resolved_parameters,
//         }
//     },
// )

// export const Resolver_Signatures: t_signatures.Resolver_Signatures = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Resolver_Signatures.D => _p_change_context(
//         $['l entry'],
//         ($) => _p_variables(
//             () => {
                
//                 const var_location = $['l location']
                
//                 const var_referenced_entry = _pdev.implement_me(
//                     "IM: referenced entry",
//                 )
//                 return Resolver_Signature(
//                     $,
//                     ($) => abort(
//                         $,
//                     ),
//                     {
//                         'sibling signatures': $a,
//                     },
//                     {
//                         'modules': $p['modules'],
//                         'module': var_referenced_entry,
//                         'imports': $p['imports'],
//                     },
//                 )
//             },
//         ),
//     ),
// )

// export const Resolver_Optional_Value_Initialization: t_signatures.Resolver_Optional_Value_Initialization = ($, abort, $l, $p) => _p_variables(
//     () => {
        
//         const var_location = $['l location']
//         return _p.decide.state(
//             $['l state'],
//             ($): t_out.Resolver_Optional_Value_Initialization => {
//                 switch ($[0]) {
//                     case 'not set':
//                         return _p.ss(
//                             $,
//                             ($) => ['not set', null],
//                         )
//                     case 'set':
//                         return _p.ss(
//                             $,
//                             ($) => ['set', Resolver_Guaranteed_Value_Selection(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 $l,
//                                 $p,
//                             )],
//                         )
//                     case 'selection':
//                         return _p.ss(
//                             $,
//                             ($) => ['selection', Resolver_Possible_Value_Selection(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 $l,
//                                 $p,
//                             )],
//                         )
//                     default:
//                         return _p.au(
//                             $[0],
//                         )
//                 }
//             },
//         )
//     },
// )

// export const Resolver_Possible_Value_Selection: t_signatures.Resolver_Possible_Value_Selection = ($, abort, $l, $p) => _p_variables(
//     () => {
        
//         const var_location = $['l location']
//         return _p.decide.state(
//             $['l state'],
//             ($): t_out.Resolver_Possible_Value_Selection => {
//                 switch ($[0]) {
//                     case 'parameter':
//                         return _p.ss(
//                             $,
//                             ($) => ['parameter', {
//                                 'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                     $p['signature'],
//                                 ).get_entry(
//                                     $['l reference'],
//                                     {
//                                         no_such_entry: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         no_context_lookup: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no context lookup', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         cycle_detected: () => abort(
//                                             {
//                                                 'type': ['lookup', ['cycle detected', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                     },
//                                 ),
//                                 'l id': $['l reference'],
//                             }],
//                         )
//                     case 'result':
//                         return _p.ss(
//                             $,
//                             ($) => ['result', _p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return _p.decide.state(
//                                         $['l state'],
//                                         ($): t_out.Resolver_Possible_Value_Selection.result => {
//                                             switch ($[0]) {
//                                                 case 'state':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => ['state', _p.literal.group_resolve(
//                                                             () => {
                                                                
//                                                                 const prop_property = _p_change_context(
//                                                                     $['property'],
//                                                                     ($) => _p.literal.group_resolve(
//                                                                         () => {
                                                                            
//                                                                             const prop_l_value = {
//                                                                                 'l entry': $l['sibling property resolvers'].get_entry(
//                                                                                     $['l reference'],
//                                                                                     {
//                                                                                         no_such_entry: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         no_context_lookup: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no context lookup', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         cycle_detected: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['cycle detected', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                     },
//                                                                                 ),
//                                                                                 'l id': $['l reference'],
//                                                                             }
                                                                            
//                                                                             const prop_l_results = _p_variables(
//                                                                                 () => {
                                                                                    
//                                                                                     const var_location = $['l location']
//                                                                                     return {
//                                                                                         'state': _p.decide.state(
//                                                                                             _pdev.implement_me(
//                                                                                                 "IM: rvs",
//                                                                                             ),
//                                                                                             ($) => {
//                                                                                                 switch ($[0]) {
//                                                                                                     case 'state':
//                                                                                                         return _p.ss(
//                                                                                                             $,
//                                                                                                             ($) => $,
//                                                                                                         )
//                                                                                                     default:
//                                                                                                         return abort(
//                                                                                                             {
//                                                                                                                 'type': ['constraint', ['state', {
//                                                                                                                     'expected': "state",
//                                                                                                                     'found': $[0],
//                                                                                                                 }]],
//                                                                                                                 'location': var_location,
//                                                                                                             },
//                                                                                                         )
//                                                                                                 }
//                                                                                             },
//                                                                                         ),
//                                                                                     }
//                                                                                 },
//                                                                             )
//                                                                             return {
//                                                                                 'l value': prop_l_value,
//                                                                                 'l results': prop_l_results,
//                                                                             }
//                                                                         },
//                                                                     ),
//                                                                 )
                                                                
//                                                                 const prop_state = _p_change_context(
//                                                                     $['state'],
//                                                                     ($) => prop_property['l results']['state'],
//                                                                 )
                                                                
//                                                                 const prop_result = _p_change_context(
//                                                                     $['result'],
//                                                                     ($) => Module_Reference(
//                                                                         $,
//                                                                         ($) => abort(
//                                                                             $,
//                                                                         ),
//                                                                         {
//                                                                             'modules': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                 $p['modules'],
//                                                                             ),
//                                                                         },
//                                                                         {
//                                                                             'imports': $p['schema imports'],
//                                                                         },
//                                                                     ),
//                                                                 )
//                                                                 return {
//                                                                     'property': prop_property,
//                                                                     'state': prop_state,
//                                                                     'result': prop_result,
//                                                                 }
//                                                             },
//                                                         )],
//                                                     )
//                                                 case 'optional value':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => ['optional value', _p.literal.group_resolve(
//                                                             () => {
                                                                
//                                                                 const prop_property = _p_change_context(
//                                                                     $['property'],
//                                                                     ($) => _p.literal.group_resolve(
//                                                                         () => {
                                                                            
//                                                                             const prop_l_value = {
//                                                                                 'l entry': $l['sibling property resolvers'].get_entry(
//                                                                                     $['l reference'],
//                                                                                     {
//                                                                                         no_such_entry: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         no_context_lookup: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no context lookup', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         cycle_detected: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['cycle detected', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                     },
//                                                                                 ),
//                                                                                 'l id': $['l reference'],
//                                                                             }
                                                                            
//                                                                             const prop_l_results = _p_variables(
//                                                                                 () => {
                                                                                    
//                                                                                     const var_location = $['l location']
//                                                                                     return {
//                                                                                         'optional': _p.decide.state(
//                                                                                             _pdev.implement_me(
//                                                                                                 "IM: rvs",
//                                                                                             ),
//                                                                                             ($) => {
//                                                                                                 switch ($[0]) {
//                                                                                                     case 'optional':
//                                                                                                         return _p.ss(
//                                                                                                             $,
//                                                                                                             ($) => $,
//                                                                                                         )
//                                                                                                     default:
//                                                                                                         return abort(
//                                                                                                             {
//                                                                                                                 'type': ['constraint', ['state', {
//                                                                                                                     'expected': "optional",
//                                                                                                                     'found': $[0],
//                                                                                                                 }]],
//                                                                                                                 'location': var_location,
//                                                                                                             },
//                                                                                                         )
//                                                                                                 }
//                                                                                             },
//                                                                                         ),
//                                                                                     }
//                                                                                 },
//                                                                             )
//                                                                             return {
//                                                                                 'l value': prop_l_value,
//                                                                                 'l results': prop_l_results,
//                                                                             }
//                                                                         },
//                                                                     ),
//                                                                 )
                                                                
//                                                                 const prop_optional_value = _p_change_context(
//                                                                     $['optional value'],
//                                                                     ($) => prop_property['l results']['optional'],
//                                                                 )
                                                                
//                                                                 const prop_result = _p_change_context(
//                                                                     $['result'],
//                                                                     ($) => Module_Reference(
//                                                                         $,
//                                                                         ($) => abort(
//                                                                             $,
//                                                                         ),
//                                                                         {
//                                                                             'modules': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                 $p['modules'],
//                                                                             ),
//                                                                         },
//                                                                         {
//                                                                             'imports': $p['schema imports'],
//                                                                         },
//                                                                     ),
//                                                                 )
//                                                                 return {
//                                                                     'property': prop_property,
//                                                                     'optional value': prop_optional_value,
//                                                                     'result': prop_result,
//                                                                 }
//                                                             },
//                                                         )],
//                                                     )
//                                                 default:
//                                                     return _p.au(
//                                                         $[0],
//                                                     )
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     default:
//                         return _p.au(
//                             $[0],
//                         )
//                 }
//             },
//         )
//     },
// )

// export const Resolver_Guaranteed_Value_Selection: t_signatures.Resolver_Guaranteed_Value_Selection = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_start = _p_change_context(
//             $['start'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Resolver_Guaranteed_Value_Selection.start => {
//                             switch ($[0]) {
//                                 case 'list cursor':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['list cursor', null],
//                                     )
//                                 case 'linked entry':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['linked entry', null],
//                                     )
//                                 case 'sibling':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['sibling', {
//                                             'l entry': $l['sibling property resolvers'].get_entry(
//                                                 $['l reference'],
//                                                 {
//                                                     no_such_entry: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     no_context_lookup: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no context lookup', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     cycle_detected: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['cycle detected', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                 },
//                                             ),
//                                             'l id': $['l reference'],
//                                         }],
//                                     )
//                                 case 'parent sibling':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['parent sibling', {
//                                             'l entry': $l['parent sibling property resolvers'].get_entry(
//                                                 $['l reference'],
//                                                 {
//                                                     no_such_entry: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     no_context_lookup: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no context lookup', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     cycle_detected: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['cycle detected', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                 },
//                                             ),
//                                             'l id': $['l reference'],
//                                         }],
//                                     )
//                                 case 'option constraint':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['option constraint', _p_variables(
//                                             () => {
                                                
//                                                 const var_constraint_oc = _p.decide.optional(
//                                                     $p['option constraints'],
//                                                     ($) => $,
//                                                     () => abort(
//                                                         {
//                                                             'type': ['constraint', ['optional value is not set', null]],
//                                                             'location': var_location,
//                                                         },
//                                                     ),
//                                                 )
//                                                 return {
//                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                         var_constraint_oc,
//                                                     ).get_entry(
//                                                         $['l reference'],
//                                                         {
//                                                             no_such_entry: () => abort(
//                                                                 {
//                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                     'location': $['l location'],
//                                                                 },
//                                                             ),
//                                                             no_context_lookup: () => abort(
//                                                                 {
//                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                     'location': $['l location'],
//                                                                 },
//                                                             ),
//                                                             cycle_detected: () => abort(
//                                                                 {
//                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                     'location': $['l location'],
//                                                                 },
//                                                             ),
//                                                         },
//                                                     ),
//                                                     'l id': $['l reference'],
//                                                 }
//                                             },
//                                         )],
//                                     )
//                                 case 'constraint':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['constraint', _p_variables(
//                                             () => {
                                                
//                                                 const var_location = $['l location']
//                                                 return _p.decide.state(
//                                                     $['l state'],
//                                                     ($): t_out.Resolver_Guaranteed_Value_Selection.start.constraint => {
//                                                         switch ($[0]) {
//                                                             case 'component':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['component', _p.literal.group_resolve(
//                                                                         () => {
                                                                            
//                                                                             const prop_property = _p_change_context(
//                                                                                 $['property'],
//                                                                                 ($) => _p.literal.group_resolve(
//                                                                                     () => {
                                                                                        
//                                                                                         const prop_l_value = {
//                                                                                             'l entry': $l['sibling property resolvers'].get_entry(
//                                                                                                 $['l reference'],
//                                                                                                 {
//                                                                                                     no_such_entry: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     no_context_lookup: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     cycle_detected: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['cycle detected', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 },
//                                                                                             ),
//                                                                                             'l id': $['l reference'],
//                                                                                         }
                                                                                        
//                                                                                         const prop_l_results = _p_variables(
//                                                                                             () => {
                                                                                                
//                                                                                                 const var_location = $['l location']
//                                                                                                 return {
//                                                                                                     'component': _p.decide.state(
//                                                                                                         _pdev.implement_me(
//                                                                                                             "IM: rvs",
//                                                                                                         ),
//                                                                                                         ($) => {
//                                                                                                             switch ($[0]) {
//                                                                                                                 case 'component':
//                                                                                                                     return _p.ss(
//                                                                                                                         $,
//                                                                                                                         ($) => $,
//                                                                                                                     )
//                                                                                                                 default:
//                                                                                                                     return abort(
//                                                                                                                         {
//                                                                                                                             'type': ['constraint', ['state', {
//                                                                                                                                 'expected': "component",
//                                                                                                                                 'found': $[0],
//                                                                                                                             }]],
//                                                                                                                             'location': var_location,
//                                                                                                                         },
//                                                                                                                     )
//                                                                                                             }
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 }
//                                                                                             },
//                                                                                         )
//                                                                                         return {
//                                                                                             'l value': prop_l_value,
//                                                                                             'l results': prop_l_results,
//                                                                                         }
//                                                                                     },
//                                                                                 ),
//                                                                             )
                                                                            
//                                                                             const prop_constraint = _p_change_context(
//                                                                                 $['constraint'],
//                                                                                 ($) => ({
//                                                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                         prop_property['l results']['component'],
//                                                                                     ).get_entry(
//                                                                                         $['l reference'],
//                                                                                         {
//                                                                                             no_such_entry: () => abort(
//                                                                                                 {
//                                                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                     'location': $['l location'],
//                                                                                                 },
//                                                                                             ),
//                                                                                             no_context_lookup: () => abort(
//                                                                                                 {
//                                                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                                                     'location': $['l location'],
//                                                                                                 },
//                                                                                             ),
//                                                                                             cycle_detected: () => abort(
//                                                                                                 {
//                                                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                                                     'location': $['l location'],
//                                                                                                 },
//                                                                                             ),
//                                                                                         },
//                                                                                     ),
//                                                                                     'l id': $['l reference'],
//                                                                                 }),
//                                                                             )
//                                                                             return {
//                                                                                 'property': prop_property,
//                                                                                 'constraint': prop_constraint,
//                                                                             }
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             case 'reference':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['reference', _p.literal.group_resolve(
//                                                                         () => {
                                                                            
//                                                                             const prop_property = _p_change_context(
//                                                                                 $['property'],
//                                                                                 ($) => _p.literal.group_resolve(
//                                                                                     () => {
                                                                                        
//                                                                                         const prop_l_value = {
//                                                                                             'l entry': $l['sibling property resolvers'].get_entry(
//                                                                                                 $['l reference'],
//                                                                                                 {
//                                                                                                     no_such_entry: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     no_context_lookup: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     cycle_detected: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['cycle detected', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 },
//                                                                                             ),
//                                                                                             'l id': $['l reference'],
//                                                                                         }
                                                                                        
//                                                                                         const prop_l_results = _p_variables(
//                                                                                             () => {
                                                                                                
//                                                                                                 const var_location = $['l location']
//                                                                                                 return {
//                                                                                                     'reference': _p.decide.state(
//                                                                                                         _pdev.implement_me(
//                                                                                                             "IM: rvs",
//                                                                                                         ),
//                                                                                                         ($) => {
//                                                                                                             switch ($[0]) {
//                                                                                                                 case 'reference':
//                                                                                                                     return _p.ss(
//                                                                                                                         $,
//                                                                                                                         ($) => $,
//                                                                                                                     )
//                                                                                                                 default:
//                                                                                                                     return abort(
//                                                                                                                         {
//                                                                                                                             'type': ['constraint', ['state', {
//                                                                                                                                 'expected': "reference",
//                                                                                                                                 'found': $[0],
//                                                                                                                             }]],
//                                                                                                                             'location': var_location,
//                                                                                                                         },
//                                                                                                                     )
//                                                                                                             }
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     'selected': _p.decide.state(
//                                                                                                         _pdev.implement_me(
//                                                                                                             "IM: rvs",
//                                                                                                         ),
//                                                                                                         ($) => {
//                                                                                                             switch ($[0]) {
//                                                                                                                 case 'selected':
//                                                                                                                     return _p.ss(
//                                                                                                                         $,
//                                                                                                                         ($) => $,
//                                                                                                                     )
//                                                                                                                 default:
//                                                                                                                     return abort(
//                                                                                                                         {
//                                                                                                                             'type': ['constraint', ['state', {
//                                                                                                                                 'expected': "selected",
//                                                                                                                                 'found': $[0],
//                                                                                                                             }]],
//                                                                                                                             'location': var_location,
//                                                                                                                         },
//                                                                                                                     )
//                                                                                                             }
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 }
//                                                                                             },
//                                                                                         )
//                                                                                         return {
//                                                                                             'l value': prop_l_value,
//                                                                                             'l results': prop_l_results,
//                                                                                         }
//                                                                                     },
//                                                                                 ),
//                                                                             )
                                                                            
//                                                                             const prop_constraint = _p_change_context(
//                                                                                 $['constraint'],
//                                                                                 ($) => ({
//                                                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                         prop_property['l results']['selected'],
//                                                                                     ).get_entry(
//                                                                                         $['l reference'],
//                                                                                         {
//                                                                                             no_such_entry: () => abort(
//                                                                                                 {
//                                                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                     'location': $['l location'],
//                                                                                                 },
//                                                                                             ),
//                                                                                             no_context_lookup: () => abort(
//                                                                                                 {
//                                                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                                                     'location': $['l location'],
//                                                                                                 },
//                                                                                             ),
//                                                                                             cycle_detected: () => abort(
//                                                                                                 {
//                                                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                                                     'location': $['l location'],
//                                                                                                 },
//                                                                                             ),
//                                                                                         },
//                                                                                     ),
//                                                                                     'l id': $['l reference'],
//                                                                                 }),
//                                                                             )
//                                                                             return {
//                                                                                 'property': prop_property,
//                                                                                 'constraint': prop_constraint,
//                                                                             }
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             default:
//                                                                 return _p.au(
//                                                                     $[0],
//                                                                 )
//                                                         }
//                                                     },
//                                                 )
//                                             },
//                                         )],
//                                     )
//                                 case 'parameter':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['parameter', {
//                                             'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                 $p['signature'],
//                                             ).get_entry(
//                                                 $['l reference'],
//                                                 {
//                                                     no_such_entry: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     no_context_lookup: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no context lookup', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     cycle_detected: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['cycle detected', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                 },
//                                             ),
//                                             'l id': $['l reference'],
//                                         }],
//                                     )
//                                 case 'result':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['result', _p_variables(
//                                             () => {
                                                
//                                                 const var_location = $['l location']
//                                                 return _p.decide.state(
//                                                     $['l state'],
//                                                     ($): t_out.Resolver_Guaranteed_Value_Selection.start.result => {
//                                                         switch ($[0]) {
//                                                             case 'list':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['list', _p.literal.group_resolve(
//                                                                         () => {
                                                                            
//                                                                             const prop_property = _p_change_context(
//                                                                                 $['property'],
//                                                                                 ($) => _p.literal.group_resolve(
//                                                                                     () => {
                                                                                        
//                                                                                         const prop_l_value = {
//                                                                                             'l entry': $l['sibling property resolvers'].get_entry(
//                                                                                                 $['l reference'],
//                                                                                                 {
//                                                                                                     no_such_entry: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     no_context_lookup: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     cycle_detected: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['cycle detected', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 },
//                                                                                             ),
//                                                                                             'l id': $['l reference'],
//                                                                                         }
                                                                                        
//                                                                                         const prop_l_results = _p_variables(
//                                                                                             () => {
                                                                                                
//                                                                                                 const var_location = $['l location']
//                                                                                                 return {
//                                                                                                     'list': _p.decide.state(
//                                                                                                         _pdev.implement_me(
//                                                                                                             "IM: rvs",
//                                                                                                         ),
//                                                                                                         ($) => {
//                                                                                                             switch ($[0]) {
//                                                                                                                 case 'list':
//                                                                                                                     return _p.ss(
//                                                                                                                         $,
//                                                                                                                         ($) => $,
//                                                                                                                     )
//                                                                                                                 default:
//                                                                                                                     return abort(
//                                                                                                                         {
//                                                                                                                             'type': ['constraint', ['state', {
//                                                                                                                                 'expected': "list",
//                                                                                                                                 'found': $[0],
//                                                                                                                             }]],
//                                                                                                                             'location': var_location,
//                                                                                                                         },
//                                                                                                                     )
//                                                                                                             }
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     'result': _pdev.implement_me(
//                                                                                                         "IM: constraint2",
//                                                                                                     ),
//                                                                                                 }
//                                                                                             },
//                                                                                         )
//                                                                                         return {
//                                                                                             'l value': prop_l_value,
//                                                                                             'l results': prop_l_results,
//                                                                                         }
//                                                                                     },
//                                                                                 ),
//                                                                             )
                                                                            
//                                                                             const prop_list_result = _p_change_context(
//                                                                                 $['list result'],
//                                                                                 ($) => prop_property['l results']['result'],
//                                                                             )
//                                                                             return {
//                                                                                 'property': prop_property,
//                                                                                 'list result': prop_list_result,
//                                                                             }
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             case 'state':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['state', _p.literal.group_resolve(
//                                                                         () => {
                                                                            
//                                                                             const prop_property = _p_change_context(
//                                                                                 $['property'],
//                                                                                 ($) => _p.literal.group_resolve(
//                                                                                     () => {
                                                                                        
//                                                                                         const prop_l_value = {
//                                                                                             'l entry': $l['sibling property resolvers'].get_entry(
//                                                                                                 $['l reference'],
//                                                                                                 {
//                                                                                                     no_such_entry: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     no_context_lookup: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     cycle_detected: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['cycle detected', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 },
//                                                                                             ),
//                                                                                             'l id': $['l reference'],
//                                                                                         }
                                                                                        
//                                                                                         const prop_l_results = _p_variables(
//                                                                                             () => {
                                                                                                
//                                                                                                 const var_location = $['l location']
//                                                                                                 return {
//                                                                                                     'state': _p.decide.state(
//                                                                                                         _pdev.implement_me(
//                                                                                                             "IM: rvs",
//                                                                                                         ),
//                                                                                                         ($) => {
//                                                                                                             switch ($[0]) {
//                                                                                                                 case 'state':
//                                                                                                                     return _p.ss(
//                                                                                                                         $,
//                                                                                                                         ($) => $,
//                                                                                                                     )
//                                                                                                                 default:
//                                                                                                                     return abort(
//                                                                                                                         {
//                                                                                                                             'type': ['constraint', ['state', {
//                                                                                                                                 'expected': "state",
//                                                                                                                                 'found': $[0],
//                                                                                                                             }]],
//                                                                                                                             'location': var_location,
//                                                                                                                         },
//                                                                                                                     )
//                                                                                                             }
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 }
//                                                                                             },
//                                                                                         )
//                                                                                         return {
//                                                                                             'l value': prop_l_value,
//                                                                                             'l results': prop_l_results,
//                                                                                         }
//                                                                                     },
//                                                                                 ),
//                                                                             )
                                                                            
//                                                                             const prop_state = _p_change_context(
//                                                                                 $['state'],
//                                                                                 ($) => prop_property['l results']['state'],
//                                                                             )
                                                                            
//                                                                             const prop_result = _p_change_context(
//                                                                                 $['result'],
//                                                                                 ($) => Module_Reference(
//                                                                                     $,
//                                                                                     ($) => abort(
//                                                                                         $,
//                                                                                     ),
//                                                                                     {
//                                                                                         'modules': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                             $p['modules'],
//                                                                                         ),
//                                                                                     },
//                                                                                     {
//                                                                                         'imports': $p['schema imports'],
//                                                                                     },
//                                                                                 ),
//                                                                             )
//                                                                             return {
//                                                                                 'property': prop_property,
//                                                                                 'state': prop_state,
//                                                                                 'result': prop_result,
//                                                                             }
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             case 'optional value':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['optional value', _p.literal.group_resolve(
//                                                                         () => {
                                                                            
//                                                                             const prop_property = _p_change_context(
//                                                                                 $['property'],
//                                                                                 ($) => _p.literal.group_resolve(
//                                                                                     () => {
                                                                                        
//                                                                                         const prop_l_value = {
//                                                                                             'l entry': $l['sibling property resolvers'].get_entry(
//                                                                                                 $['l reference'],
//                                                                                                 {
//                                                                                                     no_such_entry: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     no_context_lookup: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     cycle_detected: () => abort(
//                                                                                                         {
//                                                                                                             'type': ['lookup', ['cycle detected', null]],
//                                                                                                             'location': $['l location'],
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 },
//                                                                                             ),
//                                                                                             'l id': $['l reference'],
//                                                                                         }
                                                                                        
//                                                                                         const prop_l_results = _p_variables(
//                                                                                             () => {
                                                                                                
//                                                                                                 const var_location = $['l location']
//                                                                                                 return {
//                                                                                                     'optional': _p.decide.state(
//                                                                                                         _pdev.implement_me(
//                                                                                                             "IM: rvs",
//                                                                                                         ),
//                                                                                                         ($) => {
//                                                                                                             switch ($[0]) {
//                                                                                                                 case 'optional':
//                                                                                                                     return _p.ss(
//                                                                                                                         $,
//                                                                                                                         ($) => $,
//                                                                                                                     )
//                                                                                                                 default:
//                                                                                                                     return abort(
//                                                                                                                         {
//                                                                                                                             'type': ['constraint', ['state', {
//                                                                                                                                 'expected': "optional",
//                                                                                                                                 'found': $[0],
//                                                                                                                             }]],
//                                                                                                                             'location': var_location,
//                                                                                                                         },
//                                                                                                                     )
//                                                                                                             }
//                                                                                                         },
//                                                                                                     ),
//                                                                                                 }
//                                                                                             },
//                                                                                         )
//                                                                                         return {
//                                                                                             'l value': prop_l_value,
//                                                                                             'l results': prop_l_results,
//                                                                                         }
//                                                                                     },
//                                                                                 ),
//                                                                             )
                                                                            
//                                                                             const prop_optional_value = _p_change_context(
//                                                                                 $['optional value'],
//                                                                                 ($) => prop_property['l results']['optional'],
//                                                                             )
                                                                            
//                                                                             const prop_result = _p_change_context(
//                                                                                 $['result'],
//                                                                                 ($) => Module_Reference(
//                                                                                     $,
//                                                                                     ($) => abort(
//                                                                                         $,
//                                                                                     ),
//                                                                                     {
//                                                                                         'modules': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                             $p['modules'],
//                                                                                         ),
//                                                                                     },
//                                                                                     {
//                                                                                         'imports': $p['schema imports'],
//                                                                                     },
//                                                                                 ),
//                                                                             )
//                                                                             return {
//                                                                                 'property': prop_property,
//                                                                                 'optional value': prop_optional_value,
//                                                                                 'result': prop_result,
//                                                                             }
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             default:
//                                                                 return _p.au(
//                                                                     $[0],
//                                                                 )
//                                                         }
//                                                     },
//                                                 )
//                                             },
//                                         )],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
        
//         const prop_tail = _p_change_context(
//             $['tail'],
//             ($) => Resolver_Relative_Value_Selection(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 null,
//                 {
//                     'value': _pdev.implement_me(
//                         "IM: STATE",
//                     ),
//                 },
//             ),
//         )
        
//         const prop_resulting_node = _p_change_context(
//             $['resulting node'],
//             ($) => prop_tail['resulting node'],
//         )
//         return {
//             'start': prop_start,
//             'tail': prop_tail,
//             'resulting node': prop_resulting_node,
//         }
//     },
// )

// export const Resolver_Lookup_Selection: t_signatures.Resolver_Lookup_Selection = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_type = _p_change_context(
//             $['type'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Resolver_Lookup_Selection.type_ => {
//                             switch ($[0]) {
//                                 case 'acyclic':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['acyclic', _p_variables(
//                                             () => {
                                                
//                                                 const var_location = $['l location']
//                                                 return _p.decide.state(
//                                                     $['l state'],
//                                                     ($): t_out.Resolver_Lookup_Selection.type_.acyclic => {
//                                                         switch ($[0]) {
//                                                             case 'siblings':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['siblings', _p_variables(
//                                                                         () => {
                                                                            
//                                                                             const var_constraint_cd = _p.decide.optional(
//                                                                                 $p['current ordered dictionary'],
//                                                                                 ($) => $,
//                                                                                 () => abort(
//                                                                                     {
//                                                                                         'type': ['constraint', ['optional value is not set', null]],
//                                                                                         'location': var_location,
//                                                                                     },
//                                                                                 ),
//                                                                             )
//                                                                             return var_constraint_cd
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             case 'resolved dictionary':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['resolved dictionary', _p.literal.group_resolve(
//                                                                         () => {
                                                                            
//                                                                             const prop_selection = _p_change_context(
//                                                                                 $['selection'],
//                                                                                 ($) => Resolver_Guaranteed_Value_Selection(
//                                                                                     $,
//                                                                                     ($) => abort(
//                                                                                         $,
//                                                                                     ),
//                                                                                     $l,
//                                                                                     $p,
//                                                                                 ),
//                                                                             )
                                                                            
//                                                                             const prop_selected_dictionary = _p_change_context(
//                                                                                 $['selected dictionary'],
//                                                                                 ($) => _pdev.implement_me(
//                                                                                     "IM: COMPONENT",
//                                                                                 ),
//                                                                             )
//                                                                             return {
//                                                                                 'selection': prop_selection,
//                                                                                 'selected dictionary': prop_selected_dictionary,
//                                                                             }
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             default:
//                                                                 return _p.au(
//                                                                     $[0],
//                                                                 )
//                                                         }
//                                                     },
//                                                 )
//                                             },
//                                         )],
//                                     )
//                                 case 'cyclic':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['cyclic', _p_variables(
//                                             () => {
                                                
//                                                 const var_location = $['l location']
//                                                 return _p.decide.state(
//                                                     $['l state'],
//                                                     ($): t_out.Resolver_Lookup_Selection.type_.cyclic => {
//                                                         switch ($[0]) {
//                                                             case 'siblings':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => ['siblings', _p_variables(
//                                                                         () => {
                                                                            
//                                                                             const var_constraint_cd = _p.decide.optional(
//                                                                                 $p['current dictionary'],
//                                                                                 ($) => $,
//                                                                                 () => abort(
//                                                                                     {
//                                                                                         'type': ['constraint', ['optional value is not set', null]],
//                                                                                         'location': var_location,
//                                                                                     },
//                                                                                 ),
//                                                                             )
//                                                                             return var_constraint_cd
//                                                                         },
//                                                                     )],
//                                                                 )
//                                                             default:
//                                                                 return _p.au(
//                                                                     $[0],
//                                                                 )
//                                                         }
//                                                     },
//                                                 )
//                                             },
//                                         )],
//                                     )
//                                 case 'parameter':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['parameter', {
//                                             'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                 $p['signature'],
//                                             ).get_entry(
//                                                 $['l reference'],
//                                                 {
//                                                     no_such_entry: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     no_context_lookup: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['no context lookup', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                     cycle_detected: () => abort(
//                                                         {
//                                                             'type': ['lookup', ['cycle detected', null]],
//                                                             'location': $['l location'],
//                                                         },
//                                                     ),
//                                                 },
//                                             ),
//                                             'l id': $['l reference'],
//                                         }],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
        
//         const prop_resulting_dictionary = _p_change_context(
//             $['resulting dictionary'],
//             ($) => _pdev.implement_me(
//                 "IM: STATE",
//             ),
//         )
//         return {
//             'type': prop_type,
//             'resulting dictionary': prop_resulting_dictionary,
//         }
//     },
// )

// export const Resolver_Modules: t_signatures.Resolver_Modules = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Resolver_Modules.D => _p_change_context(
//         $['l entry'],
//         ($) => _p_variables(
//             () => {
                
//                 const var_location = $['l location']
                
//                 const var_referenced_entry = _pdev.implement_me(
//                     "IM: referenced entry",
//                 )
//                 return _p.literal.group_resolve(
//                     () => {
                        
//                         const prop_signature = _p_change_context(
//                             $['signature'],
//                             ($) => var_referenced_entry,
//                         )
                        
//                         const prop_root_value_resolver = _p_change_context(
//                             $['root value resolver'],
//                             ($) => Resolver_Value(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 {
//                                     'sibling property resolvers': _p_sl.acyclic.not_set(),
//                                     'parent sibling property resolvers': _p_sl.acyclic.not_set(),
//                                 },
//                                 {
//                                     'option constraints': _p.literal.not_set(),
//                                     'list cursor': _p.literal.not_set(),
//                                     'linked entry': _p.literal.not_set(),
//                                     'current ordered dictionary': _p.literal.not_set(),
//                                     'current dictionary': _p.literal.not_set(),
//                                     'signature': prop_signature,
//                                     'definition': var_referenced_entry['module']['root value'],
//                                     'signatures': $p['signatures'],
//                                     'schema imports': _p.literal.set(
//                                         $p['schema imports'],
//                                     ),
//                                     'resolver imports': _p.literal.set(
//                                         $p['resolver imports'],
//                                     ),
//                                     'modules': $p['modules'],
//                                 },
//                             ),
//                         )
//                         return {
//                             'signature': prop_signature,
//                             'root value resolver': prop_root_value_resolver,
//                         }
//                     },
//                 )
//             },
//         ),
//     ),
// )

// export const Resolver_Constraint: t_signatures.Resolver_Constraint = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_selection = _p_change_context(
//             $['selection'],
//             ($) => Resolver_Relative_Value_Selection(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 $l,
//                 $p,
//             ),
//         )
        
//         const prop_type = _p_change_context(
//             $['type'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Resolver_Constraint.type_ => {
//                             switch ($[0]) {
//                                 case 'state':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['state', _p_variables(
//                                             () => {
                                                
//                                                 const var_constraint_state = _p.decide.state(
//                                                     $,
//                                                     ($) => {
//                                                         switch ($[0]) {
//                                                             case 'state':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => $,
//                                                                 )
//                                                             default:
//                                                                 return abort(
//                                                                     {
//                                                                         'type': ['option constraint', ['no such option', "state"]],
//                                                                         'location': var_location,
//                                                                     },
//                                                                 )
//                                                         }
//                                                     },
//                                                 )
//                                                 return _p.literal.group_resolve(
//                                                     () => {
                                                        
//                                                         const prop_selected_state = _p_change_context(
//                                                             $['selected state'],
//                                                             ($) => var_constraint_state,
//                                                         )
                                                        
//                                                         const prop_option = _p_change_context(
//                                                             $['option'],
//                                                             ($) => ({
//                                                                 'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                     prop_selected_state['options'],
//                                                                 ).get_entry(
//                                                                     $['l reference'],
//                                                                     {
//                                                                         no_such_entry: () => abort(
//                                                                             {
//                                                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                 'location': $['l location'],
//                                                                             },
//                                                                         ),
//                                                                         no_context_lookup: () => abort(
//                                                                             {
//                                                                                 'type': ['lookup', ['no context lookup', null]],
//                                                                                 'location': $['l location'],
//                                                                             },
//                                                                         ),
//                                                                         cycle_detected: () => abort(
//                                                                             {
//                                                                                 'type': ['lookup', ['cycle detected', null]],
//                                                                                 'location': $['l location'],
//                                                                             },
//                                                                         ),
//                                                                     },
//                                                                 ),
//                                                                 'l id': $['l reference'],
//                                                             }),
//                                                         )
//                                                         return {
//                                                             'selected state': prop_selected_state,
//                                                             'option': prop_option,
//                                                         }
//                                                     },
//                                                 )
//                                             },
//                                         )],
//                                     )
//                                 case 'optional value':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['optional value', _p_variables(
//                                             () => {
                                                
//                                                 const var_constraint_optional = _p.decide.state(
//                                                     $,
//                                                     ($) => {
//                                                         switch ($[0]) {
//                                                             case 'state':
//                                                                 return _p.ss(
//                                                                     $,
//                                                                     ($) => $,
//                                                                 )
//                                                             default:
//                                                                 return abort(
//                                                                     {
//                                                                         'type': ['option constraint', ['no such option', "state"]],
//                                                                         'location': var_location,
//                                                                     },
//                                                                 )
//                                                         }
//                                                     },
//                                                 )
//                                                 return _p.literal.group_resolve(
//                                                     () => {
                                                        
//                                                         const prop_selected_optional_value = _p_change_context(
//                                                             $['selected optional value'],
//                                                             ($) => var_constraint_optional,
//                                                         )
//                                                         return {
//                                                             'selected optional value': prop_selected_optional_value,
//                                                         }
//                                                     },
//                                                 )
//                                             },
//                                         )],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
//         return {
//             'selection': prop_selection,
//             'type': prop_type,
//         }
//     },
// )

// export const Resolver_Option_Constraints: t_signatures.Resolver_Option_Constraints = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Resolver_Option_Constraints.D => _p_change_context(
//         $['l entry'],
//         ($) => _p_variables(
//             () => {
                
//                 const var_location = $['l location']
//                 return _p.decide.state(
//                     $['l state'],
//                     ($): t_out.Resolver_Option_Constraints.D => {
//                         switch ($[0]) {
//                             case 'state':
//                                 return _p.ss(
//                                     $,
//                                     ($) => ['state', _p.literal.group_resolve(
//                                         () => {
                                            
//                                             const prop_selection = _p_change_context(
//                                                 $['selection'],
//                                                 ($) => Resolver_Guaranteed_Value_Selection(
//                                                     $,
//                                                     ($) => abort(
//                                                         $,
//                                                     ),
//                                                     $l,
//                                                     $p,
//                                                 ),
//                                             )
                                            
//                                             const prop_selected_state = _p_change_context(
//                                                 $['selected state'],
//                                                 ($) => _pdev.implement_me(
//                                                     "IM: COMPONENT",
//                                                 ),
//                                             )
                                            
//                                             const prop_option = _p_change_context(
//                                                 $['option'],
//                                                 ($) => ({
//                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                         prop_selected_state['options'],
//                                                     ).get_entry(
//                                                         $['l reference'],
//                                                         {
//                                                             no_such_entry: () => abort(
//                                                                 {
//                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                     'location': $['l location'],
//                                                                 },
//                                                             ),
//                                                             no_context_lookup: () => abort(
//                                                                 {
//                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                     'location': $['l location'],
//                                                                 },
//                                                             ),
//                                                             cycle_detected: () => abort(
//                                                                 {
//                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                     'location': $['l location'],
//                                                                 },
//                                                             ),
//                                                         },
//                                                     ),
//                                                     'l id': $['l reference'],
//                                                 }),
//                                             )
//                                             return {
//                                                 'selection': prop_selection,
//                                                 'selected state': prop_selected_state,
//                                                 'option': prop_option,
//                                             }
//                                         },
//                                     )],
//                                 )
//                             case 'assert is set':
//                                 return _p.ss(
//                                     $,
//                                     ($) => ['assert is set', Resolver_Possible_Value_Selection(
//                                         $,
//                                         ($) => abort(
//                                             $,
//                                         ),
//                                         $l,
//                                         $p,
//                                     )],
//                                 )
//                             default:
//                                 return _p.au(
//                                     $[0],
//                                 )
//                         }
//                     },
//                 )
//             },
//         ),
//     ),
// )

// export const Resolver_Value_Constraint: t_signatures.Resolver_Value_Constraint = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_start = _p_change_context(
//             $['start'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Resolver_Value_Constraint.start => {
//                             switch ($[0]) {
//                                 case 'value':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['value', null],
//                                     )
//                                 case 'sibling':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['sibling', Resolver_Reference_To_Value_Constraint(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             {
//                                                 'property constraints': $l['property constraints'],
//                                             },
//                                             null,
//                                         )],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
        
//         const prop_constraint = _p_change_context(
//             $['constraint'],
//             ($) => Resolver_Constraint(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 null,
//                 {
//                     'value': _pdev.implement_me(
//                         "IM: STATE",
//                     ),
//                 },
//             ),
//         )
//         return {
//             'start': prop_start,
//             'constraint': prop_constraint,
//         }
//     },
// )

// export const Resolver_Optional_Value_Constraints: t_signatures.Resolver_Optional_Value_Constraints = ($, abort, $l, $p) => _p.optional.from.optional(
//     $,
// ).map(
//     ($) => Resolver_Value_Constraints(
//         $,
//         ($) => abort(
//             $,
//         ),
//         null,
//         {
//             'value': $p['value'],
//         },
//     ),
// )

// export const Resolver_Value_Constraints: t_signatures.Resolver_Value_Constraints = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Resolver_Value_Constraints.D => _p_change_context(
//         $['l entry'],
//         ($) => Resolver_Value_Constraint(
//             $,
//             ($) => abort(
//                 $,
//             ),
//             {
//                 'property constraints': $a,
//             },
//             null,
//         ),
//     ),
// )

// export const Resolver_Reference_To_Value_Constraint: t_signatures.Resolver_Reference_To_Value_Constraint = ($, abort, $l, $p) => ({
//     'l entry': $l['property constraints'].get_entry(
//         $['l reference'],
//         {
//             no_such_entry: () => abort(
//                 {
//                     'type': ['lookup', ['no such entry', $['l reference']]],
//                     'location': $['l location'],
//                 },
//             ),
//             no_context_lookup: () => abort(
//                 {
//                     'type': ['lookup', ['no context lookup', null]],
//                     'location': $['l location'],
//                 },
//             ),
//             cycle_detected: () => abort(
//                 {
//                     'type': ['lookup', ['cycle detected', null]],
//                     'location': $['l location'],
//                 },
//             ),
//         },
//     ),
//     'l id': $['l reference'],
// })

// export const Resolver_Value_Group: t_signatures.Resolver_Value_Group = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Resolver_Value_Group.D => _p_change_context(
//         $['l entry'],
//         ($) => _p_variables(
//             () => {
                
//                 const var_location = $['l location']
                
//                 const var_referenced_entry = _pdev.implement_me(
//                     "IM: referenced entry",
//                 )
//                 return _p.literal.group_resolve(
//                     () => {
                        
//                         const prop_definition = _p_change_context(
//                             $['definition'],
//                             ($) => var_referenced_entry,
//                         )
                        
//                         const prop_resolver = _p_change_context(
//                             $['resolver'],
//                             ($) => Resolver_Value(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 {
//                                     'sibling property resolvers': $a,
//                                     'parent sibling property resolvers': $l['sibling property resolvers'],
//                                 },
//                                 {
//                                     'definition': var_referenced_entry['value'],
//                                     'modules': $p['modules'],
//                                     'schema imports': $p['schema imports'],
//                                     'resolver imports': $p['resolver imports'],
//                                     'signature': $p['signature'],
//                                     'signatures': $p['signatures'],
//                                     'list cursor': $p['list cursor'],
//                                     'linked entry': $p['linked entry'],
//                                     'current dictionary': $p['current dictionary'],
//                                     'option constraints': $p['option constraints'],
//                                     'current ordered dictionary': $p['current ordered dictionary'],
//                                 },
//                             ),
//                         )
//                         return {
//                             'definition': prop_definition,
//                             'resolver': prop_resolver,
//                         }
//                     },
//                 )
//             },
//         ),
//     ),
// )

// export const Resolver_Value_List_Result: t_signatures.Resolver_Value_List_Result = ($, abort, $l, $p) => Module_Reference(
//     $,
//     ($) => abort(
//         $,
//     ),
//     {
//         'modules': $l['modules'],
//     },
//     {
//         'imports': $p['imports'],
//     },
// )

// export const Resolver_Benchmark: t_signatures.Resolver_Benchmark = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_selection = _p_change_context(
//             $['selection'],
//             ($) => ({
//                 'l results': {
//                     'dictionary': _pdev.implement_me(
//                         "IM: value reference",
//                     ),
//                 },
//                 'l value': Resolver_Guaranteed_Value_Selection(
//                     $,
//                     ($) => abort(
//                         $,
//                     ),
//                     $l,
//                     $p,
//                 ),
//             }),
//         )
        
//         const prop_resulting_dictionary = _p_change_context(
//             $['resulting dictionary'],
//             ($) => _pdev.implement_me(
//                 "IM: COMPONENT",
//             ),
//         )
        
//         const prop_dense = _p_change_context(
//             $['dense'],
//             ($) => $,
//         )
//         return {
//             'selection': prop_selection,
//             'resulting dictionary': prop_resulting_dictionary,
//             'dense': prop_dense,
//         }
//     },
// )

// export const Resolver_Value: t_signatures.Resolver_Value = ($, abort, $l, $p) => _p_variables(
//     () => {
        
//         const var_location = $['l location']
//         return _p.decide.state(
//             $['l state'],
//             ($): t_out.Resolver_Value => {
//                 switch ($[0]) {
//                     case 'boolean':
//                         return _p.ss(
//                             $,
//                             ($) => ['boolean', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'boolean':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "boolean"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return null
//                                 },
//                             )],
//                         )
//                     case 'component':
//                         return _p.ss(
//                             $,
//                             ($) => ['component', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'component':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "component"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return _p.literal.group_resolve(
//                                         () => {
                                            
//                                             const prop_definition = _p_change_context(
//                                                 $['definition'],
//                                                 ($) => var_constraint_definition,
//                                             )
                                            
//                                             const prop_location = _p_change_context(
//                                                 $['location'],
//                                                 ($) => _p_variables(
//                                                     () => {
                                                        
//                                                         const var_location = $['l location']
//                                                         return _p.decide.state(
//                                                             $['l state'],
//                                                             ($): t_out.Resolver_Value.component.location => {
//                                                                 switch ($[0]) {
//                                                                     case 'external':
//                                                                         return _p.ss(
//                                                                             $,
//                                                                             ($) => ['external', _p_variables(
//                                                                                 () => {
                                                                                    
//                                                                                     const var_constraint_schema_import = _p.decide.optional(
//                                                                                         $p['schema imports'],
//                                                                                         ($) => $,
//                                                                                         () => abort(
//                                                                                             {
//                                                                                                 'type': ['constraint', ['optional value is not set', null]],
//                                                                                                 'location': var_location,
//                                                                                             },
//                                                                                         ),
//                                                                                     )
                                                                                    
//                                                                                     const var_constraint_resolver_import = _p.decide.optional(
//                                                                                         $p['resolver imports'],
//                                                                                         ($) => $,
//                                                                                         () => abort(
//                                                                                             {
//                                                                                                 'type': ['constraint', ['optional value is not set', null]],
//                                                                                                 'location': var_location,
//                                                                                             },
//                                                                                         ),
//                                                                                     )
//                                                                                     return _p.literal.group_resolve(
//                                                                                         () => {
                                                                                            
//                                                                                             const prop_schema_import = _p_change_context(
//                                                                                                 $['schema import'],
//                                                                                                 ($) => _p.literal.group_resolve(
//                                                                                                     () => {
                                                                                                        
//                                                                                                         const prop_l_value = {
//                                                                                                             'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                                                 var_constraint_schema_import,
//                                                                                                             ).get_entry(
//                                                                                                                 $['l reference'],
//                                                                                                                 {
//                                                                                                                     no_such_entry: () => abort(
//                                                                                                                         {
//                                                                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                                             'location': $['l location'],
//                                                                                                                         },
//                                                                                                                     ),
//                                                                                                                     no_context_lookup: () => abort(
//                                                                                                                         {
//                                                                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                                                                             'location': $['l location'],
//                                                                                                                         },
//                                                                                                                     ),
//                                                                                                                     cycle_detected: () => abort(
//                                                                                                                         {
//                                                                                                                             'type': ['lookup', ['cycle detected', null]],
//                                                                                                                             'location': $['l location'],
//                                                                                                                         },
//                                                                                                                     ),
//                                                                                                                 },
//                                                                                                             ),
//                                                                                                             'l id': $['l reference'],
//                                                                                                         }
                                                                                                        
//                                                                                                         const prop_l_results = _p_variables(
//                                                                                                             () => {
                                                                                                                
//                                                                                                                 const var_location = $['l location']
//                                                                                                                 return {
//                                                                                                                     'constrained': _p.decide.state(
//                                                                                                                         _pdev.implement_me(
//                                                                                                                             "IM: rvs",
//                                                                                                                         ),
//                                                                                                                         ($) => {
//                                                                                                                             switch ($[0]) {
//                                                                                                                                 case 'constrained':
//                                                                                                                                     return _p.ss(
//                                                                                                                                         $,
//                                                                                                                                         ($) => $,
//                                                                                                                                     )
//                                                                                                                                 default:
//                                                                                                                                     return abort(
//                                                                                                                                         {
//                                                                                                                                             'type': ['constraint', ['state', {
//                                                                                                                                                 'expected': "constrained",
//                                                                                                                                                 'found': $[0],
//                                                                                                                                             }]],
//                                                                                                                                             'location': var_location,
//                                                                                                                                         },
//                                                                                                                                     )
//                                                                                                                             }
//                                                                                                                         },
//                                                                                                                     ),
//                                                                                                                 }
//                                                                                                             },
//                                                                                                         )
//                                                                                                         return {
//                                                                                                             'l value': prop_l_value,
//                                                                                                             'l results': prop_l_results,
//                                                                                                         }
//                                                                                                     },
//                                                                                                 ),
//                                                                                             )
                                                                                            
//                                                                                             const prop_resolver_import = _p_change_context(
//                                                                                                 $['resolver import'],
//                                                                                                 ($) => ({
//                                                                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                                         var_constraint_resolver_import,
//                                                                                                     ).get_entry(
//                                                                                                         $['l reference'],
//                                                                                                         {
//                                                                                                             no_such_entry: () => abort(
//                                                                                                                 {
//                                                                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                                     'location': $['l location'],
//                                                                                                                 },
//                                                                                                             ),
//                                                                                                             no_context_lookup: () => abort(
//                                                                                                                 {
//                                                                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                                                                     'location': $['l location'],
//                                                                                                                 },
//                                                                                                             ),
//                                                                                                             cycle_detected: () => abort(
//                                                                                                                 {
//                                                                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                                                                     'location': $['l location'],
//                                                                                                                 },
//                                                                                                             ),
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     'l id': $['l reference'],
//                                                                                                 }),
//                                                                                             )
                                                                                            
//                                                                                             const prop_signature = _p_change_context(
//                                                                                                 $['signature'],
//                                                                                                 ($) => ({
//                                                                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                                         prop_schema_import['l results']['constrained'],
//                                                                                                     ).get_entry(
//                                                                                                         $['l reference'],
//                                                                                                         {
//                                                                                                             no_such_entry: () => abort(
//                                                                                                                 {
//                                                                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                                     'location': $['l location'],
//                                                                                                                 },
//                                                                                                             ),
//                                                                                                             no_context_lookup: () => abort(
//                                                                                                                 {
//                                                                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                                                                     'location': $['l location'],
//                                                                                                                 },
//                                                                                                             ),
//                                                                                                             cycle_detected: () => abort(
//                                                                                                                 {
//                                                                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                                                                     'location': $['l location'],
//                                                                                                                 },
//                                                                                                             ),
//                                                                                                         },
//                                                                                                     ),
//                                                                                                     'l id': $['l reference'],
//                                                                                                 }),
//                                                                                             )
//                                                                                             return {
//                                                                                                 'schema import': prop_schema_import,
//                                                                                                 'resolver import': prop_resolver_import,
//                                                                                                 'signature': prop_signature,
//                                                                                             }
//                                                                                         },
//                                                                                     )
//                                                                                 },
//                                                                             )],
//                                                                         )
//                                                                     case 'internal':
//                                                                         return _p.ss(
//                                                                             $,
//                                                                             ($) => ['internal', {
//                                                                                 'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                     $p['signatures'],
//                                                                                 ).get_entry(
//                                                                                     $['l reference'],
//                                                                                     {
//                                                                                         no_such_entry: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         no_context_lookup: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no context lookup', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         cycle_detected: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['cycle detected', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                     },
//                                                                                 ),
//                                                                                 'l id': $['l reference'],
//                                                                             }],
//                                                                         )
//                                                                     default:
//                                                                         return _p.au(
//                                                                             $[0],
//                                                                         )
//                                                                 }
//                                                             },
//                                                         )
//                                                     },
//                                                 ),
//                                             )
                                            
//                                             const prop_signature = _p_change_context(
//                                                 $['signature'],
//                                                 ($) => _pdev.implement_me(
//                                                     "IM: STATE",
//                                                 ),
//                                             )
                                            
//                                             const prop_arguments = _p_change_context(
//                                                 $['arguments'],
//                                                 ($) => _p.optional.from.optional(
//                                                     $,
//                                                 ).map(
//                                                     ($) => _p.literal.group_resolve(
//                                                         () => {
                                                            
//                                                             const prop_modules = _p_change_context(
//                                                                 $['modules'],
//                                                                 ($) => _p.optional.from.optional(
//                                                                     $,
//                                                                 ).map(
//                                                                     ($) => _p.dictionary.from.dictionary(
//                                                                         $['l dictionary'],
//                                                                     ).resolve_static(
//                                                                         ($, id, $a, $c): t_out.Resolver_Value.component.arguments_.O.modules.O.D => _p_change_context(
//                                                                             $['l entry'],
//                                                                             ($) => _p_variables(
//                                                                                 () => {
                                                                                    
//                                                                                     const var_location = $['l location']
                                                                                    
//                                                                                     const var_referenced_entry = _pdev.implement_me(
//                                                                                         "IM: referenced entry",
//                                                                                     )
//                                                                                     return _p_variables(
//                                                                                         () => {
                                                                                            
//                                                                                             const var_location = $['l location']
//                                                                                             return _p.decide.state(
//                                                                                                 $['l state'],
//                                                                                                 ($): t_out.Resolver_Value.component.arguments_.O.modules.O.D => {
//                                                                                                     switch ($[0]) {
//                                                                                                         case 'optional':
//                                                                                                             return _p.ss(
//                                                                                                                 $,
//                                                                                                                 ($) => ['optional', Resolver_Optional_Value_Initialization(
//                                                                                                                     $,
//                                                                                                                     ($) => abort(
//                                                                                                                         $,
//                                                                                                                     ),
//                                                                                                                     $l,
//                                                                                                                     $p,
//                                                                                                                 )],
//                                                                                                             )
//                                                                                                         case 'required':
//                                                                                                             return _p.ss(
//                                                                                                                 $,
//                                                                                                                 ($) => ['required', Resolver_Guaranteed_Value_Selection(
//                                                                                                                     $,
//                                                                                                                     ($) => abort(
//                                                                                                                         $,
//                                                                                                                     ),
//                                                                                                                     $l,
//                                                                                                                     $p,
//                                                                                                                 )],
//                                                                                                             )
//                                                                                                         case 'parameter':
//                                                                                                             return _p.ss(
//                                                                                                                 $,
//                                                                                                                 ($) => ['parameter', {
//                                                                                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                                                         $p['signature'],
//                                                                                                                     ).get_entry(
//                                                                                                                         $['l reference'],
//                                                                                                                         {
//                                                                                                                             no_such_entry: () => abort(
//                                                                                                                                 {
//                                                                                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                                                     'location': $['l location'],
//                                                                                                                                 },
//                                                                                                                             ),
//                                                                                                                             no_context_lookup: () => abort(
//                                                                                                                                 {
//                                                                                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                                                                                     'location': $['l location'],
//                                                                                                                                 },
//                                                                                                                             ),
//                                                                                                                             cycle_detected: () => abort(
//                                                                                                                                 {
//                                                                                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                                                                                     'location': $['l location'],
//                                                                                                                                 },
//                                                                                                                             ),
//                                                                                                                         },
//                                                                                                                     ),
//                                                                                                                     'l id': $['l reference'],
//                                                                                                                 }],
//                                                                                                             )
//                                                                                                         default:
//                                                                                                             return _p.au(
//                                                                                                                 $[0],
//                                                                                                             )
//                                                                                                     }
//                                                                                                 },
//                                                                                             )
//                                                                                         },
//                                                                                     )
//                                                                                 },
//                                                                             ),
//                                                                         ),
//                                                                     ),
//                                                                 ),
//                                                             )
                                                            
//                                                             const prop_lookups = _p_change_context(
//                                                                 $['lookups'],
//                                                                 ($) => _p.optional.from.optional(
//                                                                     $,
//                                                                 ).map(
//                                                                     ($) => _p.dictionary.from.dictionary(
//                                                                         $['l dictionary'],
//                                                                     ).resolve_static(
//                                                                         ($, id, $a, $c): t_out.Resolver_Value.component.arguments_.O.lookups.O.D => _p_change_context(
//                                                                             $['l entry'],
//                                                                             ($) => _p_variables(
//                                                                                 () => {
                                                                                    
//                                                                                     const var_location = $['l location']
                                                                                    
//                                                                                     const var_referenced_entry = _pdev.implement_me(
//                                                                                         "IM: referenced entry",
//                                                                                     )
//                                                                                     return _p_variables(
//                                                                                         () => {
                                                                                            
//                                                                                             const var_location = $['l location']
//                                                                                             return _p.decide.state(
//                                                                                                 $['l state'],
//                                                                                                 ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D => {
//                                                                                                     switch ($[0]) {
//                                                                                                         case 'stack':
//                                                                                                             return _p.ss(
//                                                                                                                 $,
//                                                                                                                 ($) => ['stack', _p_variables(
//                                                                                                                     () => {
                                                                                                                        
//                                                                                                                         const var_location = $['l location']
//                                                                                                                         return _p.decide.state(
//                                                                                                                             $['l state'],
//                                                                                                                             ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D.stack => {
//                                                                                                                                 switch ($[0]) {
//                                                                                                                                     case 'empty':
//                                                                                                                                         return _p.ss(
//                                                                                                                                             $,
//                                                                                                                                             ($) => ['empty', null],
//                                                                                                                                         )
//                                                                                                                                     case 'push':
//                                                                                                                                         return _p.ss(
//                                                                                                                                             $,
//                                                                                                                                             ($) => ['push', _p.literal.group_resolve(
//                                                                                                                                                 () => {
                                                                                                                                                    
//                                                                                                                                                     const prop_stack = _p_change_context(
//                                                                                                                                                         $['stack'],
//                                                                                                                                                         ($) => Resolver_Lookup_Selection(
//                                                                                                                                                             $,
//                                                                                                                                                             ($) => abort(
//                                                                                                                                                                 $,
//                                                                                                                                                             ),
//                                                                                                                                                             $l,
//                                                                                                                                                             $p,
//                                                                                                                                                         ),
//                                                                                                                                                     )
                                                                                                                                                    
//                                                                                                                                                     const prop_item = _p_change_context(
//                                                                                                                                                         $['item'],
//                                                                                                                                                         ($) => Resolver_Lookup_Selection(
//                                                                                                                                                             $,
//                                                                                                                                                             ($) => abort(
//                                                                                                                                                                 $,
//                                                                                                                                                             ),
//                                                                                                                                                             $l,
//                                                                                                                                                             $p,
//                                                                                                                                                         ),
//                                                                                                                                                     )
//                                                                                                                                                     return {
//                                                                                                                                                         'stack': prop_stack,
//                                                                                                                                                         'item': prop_item,
//                                                                                                                                                     }
//                                                                                                                                                 },
//                                                                                                                                             )],
//                                                                                                                                         )
//                                                                                                                                     default:
//                                                                                                                                         return _p.au(
//                                                                                                                                             $[0],
//                                                                                                                                         )
//                                                                                                                                 }
//                                                                                                                             },
//                                                                                                                         )
//                                                                                                                     },
//                                                                                                                 )],
//                                                                                                             )
//                                                                                                         case 'acyclic':
//                                                                                                             return _p.ss(
//                                                                                                                 $,
//                                                                                                                 ($) => ['acyclic', _p_variables(
//                                                                                                                     () => {
                                                                                                                        
//                                                                                                                         const var_location = $['l location']
//                                                                                                                         return _p.decide.state(
//                                                                                                                             $['l state'],
//                                                                                                                             ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D.acyclic => {
//                                                                                                                                 switch ($[0]) {
//                                                                                                                                     case 'not set':
//                                                                                                                                         return _p.ss(
//                                                                                                                                             $,
//                                                                                                                                             ($) => ['not set', null],
//                                                                                                                                         )
//                                                                                                                                     default:
//                                                                                                                                         return _p.au(
//                                                                                                                                             $[0],
//                                                                                                                                         )
//                                                                                                                                 }
//                                                                                                                             },
//                                                                                                                         )
//                                                                                                                     },
//                                                                                                                 )],
//                                                                                                             )
//                                                                                                         case 'cyclic':
//                                                                                                             return _p.ss(
//                                                                                                                 $,
//                                                                                                                 ($) => ['cyclic', _p_variables(
//                                                                                                                     () => {
                                                                                                                        
//                                                                                                                         const var_location = $['l location']
//                                                                                                                         return _p.decide.state(
//                                                                                                                             $['l state'],
//                                                                                                                             ($): t_out.Resolver_Value.component.arguments_.O.lookups.O.D.cyclic => {
//                                                                                                                                 switch ($[0]) {
//                                                                                                                                     case 'not set':
//                                                                                                                                         return _p.ss(
//                                                                                                                                             $,
//                                                                                                                                             ($) => ['not set', null],
//                                                                                                                                         )
//                                                                                                                                     default:
//                                                                                                                                         return _p.au(
//                                                                                                                                             $[0],
//                                                                                                                                         )
//                                                                                                                                 }
//                                                                                                                             },
//                                                                                                                         )
//                                                                                                                     },
//                                                                                                                 )],
//                                                                                                             )
//                                                                                                         case 'selection':
//                                                                                                             return _p.ss(
//                                                                                                                 $,
//                                                                                                                 ($) => ['selection', Resolver_Lookup_Selection(
//                                                                                                                     $,
//                                                                                                                     ($) => abort(
//                                                                                                                         $,
//                                                                                                                     ),
//                                                                                                                     $l,
//                                                                                                                     $p,
//                                                                                                                 )],
//                                                                                                             )
//                                                                                                         default:
//                                                                                                             return _p.au(
//                                                                                                                 $[0],
//                                                                                                             )
//                                                                                                     }
//                                                                                                 },
//                                                                                             )
//                                                                                         },
//                                                                                     )
//                                                                                 },
//                                                                             ),
//                                                                         ),
//                                                                     ),
//                                                                 ),
//                                                             )
//                                                             return {
//                                                                 'modules': prop_modules,
//                                                                 'lookups': prop_lookups,
//                                                             }
//                                                         },
//                                                     ),
//                                                 ),
//                                             )
                                            
//                                             const prop_constraints = _p_change_context(
//                                                 $['constraints'],
//                                                 ($) => Resolver_Value_Constraints(
//                                                     $,
//                                                     ($) => abort(
//                                                         $,
//                                                     ),
//                                                     null,
//                                                     {
//                                                         'value': prop_signature['module']['root value'],
//                                                     },
//                                                 ),
//                                             )
//                                             return {
//                                                 'definition': prop_definition,
//                                                 'location': prop_location,
//                                                 'signature': prop_signature,
//                                                 'arguments': prop_arguments,
//                                                 'constraints': prop_constraints,
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     case 'dictionary':
//                         return _p.ss(
//                             $,
//                             ($) => ['dictionary', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'dictionary':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "dictionary"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return _p.literal.group_resolve(
//                                         () => {
                                            
//                                             const prop_definition = _p_change_context(
//                                                 $['definition'],
//                                                 ($) => var_constraint_definition,
//                                             )
                                            
//                                             const prop_benchmark = _p_change_context(
//                                                 $['benchmark'],
//                                                 ($) => _p.optional.from.optional(
//                                                     $,
//                                                 ).map(
//                                                     ($) => Resolver_Benchmark(
//                                                         $,
//                                                         ($) => abort(
//                                                             $,
//                                                         ),
//                                                         $l,
//                                                         $p,
//                                                     ),
//                                                 ),
//                                             )
                                            
//                                             const prop_resolver = _p_change_context(
//                                                 $['resolver'],
//                                                 ($) => Resolver_Value(
//                                                     $,
//                                                     ($) => abort(
//                                                         $,
//                                                     ),
//                                                     $l,
//                                                     {
//                                                         'linked entry': _pdev.implement_me(
//                                                             "IM: OPTIONAL VALUE2",
//                                                         ),
//                                                         'definition': prop_definition['value'],
//                                                         'current dictionary': _p.literal.set(
//                                                             prop_definition,
//                                                         ),
//                                                         'current ordered dictionary': _p.literal.set(
//                                                             prop_definition,
//                                                         ),
//                                                         'modules': $p['modules'],
//                                                         'schema imports': $p['schema imports'],
//                                                         'resolver imports': $p['resolver imports'],
//                                                         'signature': $p['signature'],
//                                                         'signatures': $p['signatures'],
//                                                         'list cursor': $p['list cursor'],
//                                                         'option constraints': $p['option constraints'],
//                                                     },
//                                                 ),
//                                             )
//                                             return {
//                                                 'definition': prop_definition,
//                                                 'benchmark': prop_benchmark,
//                                                 'resolver': prop_resolver,
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     case 'group':
//                         return _p.ss(
//                             $,
//                             ($) => ['group', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'group':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "group"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return Resolver_Value_Group(
//                                         $,
//                                         ($) => abort(
//                                             $,
//                                         ),
//                                         {
//                                             'sibling property resolvers': $l['sibling property resolvers'],
//                                             'parent sibling property resolvers': $l['sibling property resolvers'],
//                                         },
//                                         {
//                                             'definition': var_constraint_definition,
//                                             'modules': $p['modules'],
//                                             'schema imports': $p['schema imports'],
//                                             'resolver imports': $p['resolver imports'],
//                                             'signature': $p['signature'],
//                                             'signatures': $p['signatures'],
//                                             'list cursor': $p['list cursor'],
//                                             'linked entry': $p['linked entry'],
//                                             'current dictionary': $p['current dictionary'],
//                                             'option constraints': $p['option constraints'],
//                                             'current ordered dictionary': $p['current ordered dictionary'],
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     case 'list':
//                         return _p.ss(
//                             $,
//                             ($) => ['list', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'list':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "list"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return _p.literal.group_resolve(
//                                         () => {
                                            
//                                             const prop_definition = _p_change_context(
//                                                 $['definition'],
//                                                 ($) => var_constraint_definition,
//                                             )
                                            
//                                             const prop_result = _p_change_context(
//                                                 $['result'],
//                                                 ($) => _p.optional.from.optional(
//                                                     $,
//                                                 ).map(
//                                                     ($) => Resolver_Value_List_Result(
//                                                         $,
//                                                         ($) => abort(
//                                                             $,
//                                                         ),
//                                                         {
//                                                             'modules': _p_sl.acyclic.from_resolved_dictionary(
//                                                                 $p['modules'],
//                                                             ),
//                                                         },
//                                                         {
//                                                             'imports': $p['schema imports'],
//                                                         },
//                                                     ),
//                                                 ),
//                                             )
                                            
//                                             const prop_resolver = _p_change_context(
//                                                 $['resolver'],
//                                                 ($) => Resolver_Value(
//                                                     $,
//                                                     ($) => abort(
//                                                         $,
//                                                     ),
//                                                     $l,
//                                                     {
//                                                         'list cursor': _p.literal.set(
//                                                             _pdev.implement_me(
//                                                                 "IM: OPTIONAL VALUE",
//                                                             ),
//                                                         ),
//                                                         'definition': var_constraint_definition['value'],
//                                                         'modules': $p['modules'],
//                                                         'schema imports': $p['schema imports'],
//                                                         'resolver imports': $p['resolver imports'],
//                                                         'signature': $p['signature'],
//                                                         'signatures': $p['signatures'],
//                                                         'linked entry': $p['linked entry'],
//                                                         'current dictionary': $p['current dictionary'],
//                                                         'option constraints': $p['option constraints'],
//                                                         'current ordered dictionary': $p['current ordered dictionary'],
//                                                     },
//                                                 ),
//                                             )
//                                             return {
//                                                 'definition': prop_definition,
//                                                 'result': prop_result,
//                                                 'resolver': prop_resolver,
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     case 'nothing':
//                         return _p.ss(
//                             $,
//                             ($) => ['nothing', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'nothing':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "nothing"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return null
//                                 },
//                             )],
//                         )
//                     case 'number':
//                         return _p.ss(
//                             $,
//                             ($) => ['number', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'number':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "number"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return null
//                                 },
//                             )],
//                         )
//                     case 'optional':
//                         return _p.ss(
//                             $,
//                             ($) => ['optional', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'optional':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "optional"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return _p.literal.group_resolve(
//                                         () => {
                                            
//                                             const prop_constraints = _p_change_context(
//                                                 $['constraints'],
//                                                 ($) => Resolver_Option_Constraints(
//                                                     $,
//                                                     ($) => abort(
//                                                         $,
//                                                     ),
//                                                     $l,
//                                                     $p,
//                                                 ),
//                                             )
                                            
//                                             const prop_resolver = _p_change_context(
//                                                 $['resolver'],
//                                                 ($) => Resolver_Value(
//                                                     $,
//                                                     ($) => abort(
//                                                         $,
//                                                     ),
//                                                     $l,
//                                                     {
//                                                         'definition': var_constraint_definition,
//                                                         'modules': $p['modules'],
//                                                         'schema imports': $p['schema imports'],
//                                                         'resolver imports': $p['resolver imports'],
//                                                         'signature': $p['signature'],
//                                                         'signatures': $p['signatures'],
//                                                         'list cursor': $p['list cursor'],
//                                                         'linked entry': $p['linked entry'],
//                                                         'current dictionary': $p['current dictionary'],
//                                                         'option constraints': $p['option constraints'],
//                                                         'current ordered dictionary': $p['current ordered dictionary'],
//                                                     },
//                                                 ),
//                                             )
//                                             return {
//                                                 'constraints': prop_constraints,
//                                                 'resolver': prop_resolver,
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     case 'reference':
//                         return _p.ss(
//                             $,
//                             ($) => ['reference', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'reference':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "reference"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return _p.literal.group_resolve(
//                                         () => {
                                            
//                                             const prop_definition = _p_change_context(
//                                                 $['definition'],
//                                                 ($) => var_constraint_definition,
//                                             )
                                            
//                                             const prop_type = _p_change_context(
//                                                 $['type'],
//                                                 ($) => _p_variables(
//                                                     () => {
                                                        
//                                                         const var_location = $['l location']
//                                                         return _p.decide.state(
//                                                             $['l state'],
//                                                             ($): t_out.Resolver_Value.reference.type_ => {
//                                                                 switch ($[0]) {
//                                                                     case 'derived':
//                                                                         return _p.ss(
//                                                                             $,
//                                                                             ($) => ['derived', _p_variables(
//                                                                                 () => {
                                                                                    
//                                                                                     const var_constraint_definition = _p.decide.state(
//                                                                                         $,
//                                                                                         ($) => {
//                                                                                             switch ($[0]) {
//                                                                                                 case 'derived':
//                                                                                                     return _p.ss(
//                                                                                                         $,
//                                                                                                         ($) => $,
//                                                                                                     )
//                                                                                                 default:
//                                                                                                     return abort(
//                                                                                                         {
//                                                                                                             'type': ['option constraint', ['no such option', "derived"]],
//                                                                                                             'location': var_location,
//                                                                                                         },
//                                                                                                     )
//                                                                                             }
//                                                                                         },
//                                                                                     )
//                                                                                     return _p.literal.group_resolve(
//                                                                                         () => {
                                                                                            
//                                                                                             const prop_value = _p_change_context(
//                                                                                                 $['value'],
//                                                                                                 ($) => Resolver_Guaranteed_Value_Selection(
//                                                                                                     $,
//                                                                                                     ($) => abort(
//                                                                                                         $,
//                                                                                                     ),
//                                                                                                     $l,
//                                                                                                     $p,
//                                                                                                 ),
//                                                                                             )
//                                                                                             return {
//                                                                                                 'value': prop_value,
//                                                                                             }
//                                                                                         },
//                                                                                     )
//                                                                                 },
//                                                                             )],
//                                                                         )
//                                                                     case 'selected':
//                                                                         return _p.ss(
//                                                                             $,
//                                                                             ($) => ['selected', _p_variables(
//                                                                                 () => {
                                                                                    
//                                                                                     const var_constraint_definition = _p.decide.state(
//                                                                                         $,
//                                                                                         ($) => {
//                                                                                             switch ($[0]) {
//                                                                                                 case 'selected':
//                                                                                                     return _p.ss(
//                                                                                                         $,
//                                                                                                         ($) => $,
//                                                                                                     )
//                                                                                                 default:
//                                                                                                     return abort(
//                                                                                                         {
//                                                                                                             'type': ['option constraint', ['no such option', "selected"]],
//                                                                                                             'location': var_location,
//                                                                                                         },
//                                                                                                     )
//                                                                                             }
//                                                                                         },
//                                                                                     )
//                                                                                     return _p.literal.group_resolve(
//                                                                                         () => {
                                                                                            
//                                                                                             const prop_definition = _p_change_context(
//                                                                                                 $['definition'],
//                                                                                                 ($) => var_constraint_definition,
//                                                                                             )
                                                                                            
//                                                                                             const prop_lookup = _p_change_context(
//                                                                                                 $['lookup'],
//                                                                                                 ($) => Resolver_Lookup_Selection(
//                                                                                                     $,
//                                                                                                     ($) => abort(
//                                                                                                         $,
//                                                                                                     ),
//                                                                                                     $l,
//                                                                                                     $p,
//                                                                                                 ),
//                                                                                             )
                                                                                            
//                                                                                             const prop_constraints = _p_change_context(
//                                                                                                 $['constraints'],
//                                                                                                 ($) => Resolver_Value_Constraints(
//                                                                                                     $,
//                                                                                                     ($) => abort(
//                                                                                                         $,
//                                                                                                     ),
//                                                                                                     null,
//                                                                                                     {
//                                                                                                         'value': prop_lookup['resulting dictionary']['value'],
//                                                                                                     },
//                                                                                                 ),
//                                                                                             )
//                                                                                             return {
//                                                                                                 'definition': prop_definition,
//                                                                                                 'lookup': prop_lookup,
//                                                                                                 'constraints': prop_constraints,
//                                                                                             }
//                                                                                         },
//                                                                                     )
//                                                                                 },
//                                                                             )],
//                                                                         )
//                                                                     default:
//                                                                         return _p.au(
//                                                                             $[0],
//                                                                         )
//                                                                 }
//                                                             },
//                                                         )
//                                                     },
//                                                 ),
//                                             )
//                                             return {
//                                                 'definition': prop_definition,
//                                                 'type': prop_type,
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     case 'state':
//                         return _p.ss(
//                             $,
//                             ($) => ['state', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'state':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "state"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return _p.literal.group_resolve(
//                                         () => {
                                            
//                                             const prop_definition = _p_change_context(
//                                                 $['definition'],
//                                                 ($) => var_constraint_definition,
//                                             )
                                            
//                                             const prop_states = _p_change_context(
//                                                 $['states'],
//                                                 ($) => _p.dictionary.from.dictionary(
//                                                     $['l dictionary'],
//                                                 ).resolve_static(
//                                                     ($, id, $a, $c): t_out.Resolver_Value.state.states.D => _p_change_context(
//                                                         $['l entry'],
//                                                         ($) => _p_variables(
//                                                             () => {
                                                                
//                                                                 const var_location = $['l location']
                                                                
//                                                                 const var_referenced_entry = _pdev.implement_me(
//                                                                     "IM: referenced entry",
//                                                                 )
//                                                                 return _p.literal.group_resolve(
//                                                                     () => {
                                                                        
//                                                                         const prop_constraints = _p_change_context(
//                                                                             $['constraints'],
//                                                                             ($) => Resolver_Option_Constraints(
//                                                                                 $,
//                                                                                 ($) => abort(
//                                                                                     $,
//                                                                                 ),
//                                                                                 $l,
//                                                                                 $p,
//                                                                             ),
//                                                                         )
                                                                        
//                                                                         const prop_resolver = _p_change_context(
//                                                                             $['resolver'],
//                                                                             ($) => Resolver_Value(
//                                                                                 $,
//                                                                                 ($) => abort(
//                                                                                     $,
//                                                                                 ),
//                                                                                 $l,
//                                                                                 {
//                                                                                     'definition': var_referenced_entry['value'],
//                                                                                     'modules': $p['modules'],
//                                                                                     'schema imports': $p['schema imports'],
//                                                                                     'resolver imports': $p['resolver imports'],
//                                                                                     'signature': $p['signature'],
//                                                                                     'signatures': $p['signatures'],
//                                                                                     'list cursor': $p['list cursor'],
//                                                                                     'linked entry': $p['linked entry'],
//                                                                                     'current dictionary': $p['current dictionary'],
//                                                                                     'option constraints': $p['option constraints'],
//                                                                                     'current ordered dictionary': $p['current ordered dictionary'],
//                                                                                 },
//                                                                             ),
//                                                                         )
//                                                                         return {
//                                                                             'constraints': prop_constraints,
//                                                                             'resolver': prop_resolver,
//                                                                         }
//                                                                     },
//                                                                 )
//                                                             },
//                                                         ),
//                                                     ),
//                                                 ),
//                                             )
//                                             return {
//                                                 'definition': prop_definition,
//                                                 'states': prop_states,
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     case 'text':
//                         return _p.ss(
//                             $,
//                             ($) => ['text', _p_variables(
//                                 () => {
                                    
//                                     const var_constraint_definition = _p.decide.state(
//                                         $,
//                                         ($) => {
//                                             switch ($[0]) {
//                                                 case 'text':
//                                                     return _p.ss(
//                                                         $,
//                                                         ($) => $,
//                                                     )
//                                                 default:
//                                                     return abort(
//                                                         {
//                                                             'type': ['option constraint', ['no such option', "text"]],
//                                                             'location': var_location,
//                                                         },
//                                                     )
//                                             }
//                                         },
//                                     )
//                                     return null
//                                 },
//                             )],
//                         )
//                     default:
//                         return _p.au(
//                             $[0],
//                         )
//                 }
//             },
//         )
//     },
// )

// export const Resolver: t_signatures.Resolver = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_signatures = _p_change_context(
//             $['signatures'],
//             ($) => _p.literal.group_resolve(
//                 () => {
                    
//                     const prop_signatures = _p_change_context(
//                         $['signatures'],
//                         ($) => Resolver_Signatures(
//                             $,
//                             ($) => abort(
//                                 $,
//                             ),
//                             null,
//                             {
//                                 'modules': $p['modules'],
//                                 'imports': $p['schema imports'],
//                             },
//                         ),
//                     )
//                     return {
//                         'signatures': prop_signatures,
//                     }
//                 },
//             ),
//         )
        
//         const prop_modules = _p_change_context(
//             $['modules'],
//             ($) => Resolver_Modules(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 null,
//                 {
//                     'signatures': prop_signatures['signatures'],
//                     'modules': $p['modules'],
//                     'schema imports': $p['schema imports'],
//                     'resolver imports': $p['resolver imports'],
//                 },
//             ),
//         )
//         return {
//             'signatures': prop_signatures,
//             'modules': prop_modules,
//         }
//     },
// )

// export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Schemas.D => _p_change_context(
//         $['l entry'],
//         ($) => Schema_Tree(
//             $,
//             ($) => abort(
//                 $,
//             ),
//             {
//                 'sibling schemas': _p_sl.stack.push(
//                     $l['sibling schemas'],
//                     $a,
//                 ),
//             },
//             null,
//         ),
//     ),
// )

// export const Module_Specification: t_signatures.Module_Specification = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_schema = _p_change_context(
//             $['schema'],
//             ($) => Schema_Tree(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 {
//                     'sibling schemas': _p_sl.stack.empty(),
//                 },
//                 null,
//             ),
//         )
        
//         const prop_schema_path = _p_change_context(
//             $['schema path'],
//             ($) => _p.list.from.list(
//                 $['l list'],
//             ).map(
//                 ($) => _p_change_context(
//                     $['l item'],
//                     ($) => $,
//                 ),
//             ),
//         )
        
//         const prop_module = _p_change_context(
//             $['module'],
//             ($) => $,
//         )
//         return {
//             'schema': prop_schema,
//             'schema path': prop_schema_path,
//             'module': prop_module,
//         }
//     },
// )

// export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $l, $p) => _p_variables(
//     () => {
        
//         const var_location = $['l location']
//         return _p.decide.state(
//             $['l state'],
//             ($): t_out.Schema_Tree => {
//                 switch ($[0]) {
//                     case 'schema':
//                         return _p.ss(
//                             $,
//                             ($) => ['schema', Schema(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 {
//                                     'sibling schemas': $l['sibling schemas'],
//                                 },
//                                 null,
//                             )],
//                         )
//                     case 'set':
//                         return _p.ss(
//                             $,
//                             ($) => ['set', Schemas(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 {
//                                     'sibling schemas': $l['sibling schemas'],
//                                 },
//                                 null,
//                             )],
//                         )
//                     default:
//                         return _p.au(
//                             $[0],
//                         )
//                 }
//             },
//         )
//     },
// )

// export const Schema: t_signatures.Schema = ($, abort, $l, $p) => _p.literal.group_resolve(
//     () => {
        
//         const prop_schema_imports = _p_change_context(
//             $['schema imports'],
//             ($) => Schema_Imports(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 {
//                     'sibling schemas': $l['sibling schemas'],
//                 },
//                 null,
//             ),
//         )
        
//         const prop_resolver_imports = _p_change_context(
//             $['resolver imports'],
//             ($) => Resolver_Imports(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 {
//                     'sibling schemas': $l['sibling schemas'],
//                 },
//                 null,
//             ),
//         )
        
//         const prop_globals = _p_change_context(
//             $['globals'],
//             ($) => Globals(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 null,
//                 null,
//             ),
//         )
        
//         const prop_modules = _p_change_context(
//             $['modules'],
//             ($) => Modules(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 null,
//                 {
//                     'globals': _p.literal.set(
//                         prop_globals,
//                     ),
//                     'imports': _p.literal.set(
//                         prop_schema_imports,
//                     ),
//                 },
//             ),
//         )
        
//         const prop_complexity = _p_change_context(
//             $['complexity'],
//             ($) => _p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return _p.decide.state(
//                         $['l state'],
//                         ($): t_out.Schema.complexity => {
//                             switch ($[0]) {
//                                 case 'constrained':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['constrained', Resolver(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             null,
//                                             {
//                                                 'schema imports': prop_schema_imports,
//                                                 'resolver imports': prop_resolver_imports,
//                                                 'modules': prop_modules,
//                                             },
//                                         )],
//                                     )
//                                 case 'unconstrained':
//                                     return _p.ss(
//                                         $,
//                                         ($) => ['unconstrained', null],
//                                     )
//                                 default:
//                                     return _p.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
//         return {
//             'schema imports': prop_schema_imports,
//             'resolver imports': prop_resolver_imports,
//             'globals': prop_globals,
//             'modules': prop_modules,
//             'complexity': prop_complexity,
//         }
//     },
// )

// export const Schema_Imports: t_signatures.Schema_Imports = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Schema_Imports.D => _p_change_context(
//         $['l entry'],
//         ($) => _p.literal.group_resolve(
//             () => {
                
//                 const prop_schema_set_child = _p_change_context(
//                     $['schema set child'],
//                     ($) => _p.literal.group_resolve(
//                         () => {
                            
//                             const prop_l_value = {
//                                 'l entry': $l['sibling schemas'].get_entry(
//                                     $['l reference'],
//                                     {
//                                         no_such_entry: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         no_context_lookup: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no context lookup', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         cycle_detected: () => abort(
//                                             {
//                                                 'type': ['lookup', ['cycle detected', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                     },
//                                 ),
//                                 'l id': $['l reference'],
//                                 'l up steps': $l['sibling schemas'].get_entry_depth(
//                                     $['l reference'],
//                                     {
//                                         no_such_entry: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         no_context_lookup: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no context lookup', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         cycle_detected: () => abort(
//                                             {
//                                                 'type': ['lookup', ['cycle detected', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                     },
//                                 ),
//                             }
                            
//                             const prop_l_results = _p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return {
//                                         'schema': _p.decide.state(
//                                             _pdev.implement_me(
//                                                 "IM: rvs",
//                                             ),
//                                             ($) => {
//                                                 switch ($[0]) {
//                                                     case 'schema':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => $,
//                                                         )
//                                                     default:
//                                                         return abort(
//                                                             {
//                                                                 'type': ['constraint', ['state', {
//                                                                     'expected': "schema",
//                                                                     'found': $[0],
//                                                                 }]],
//                                                                 'location': var_location,
//                                                             },
//                                                         )
//                                                 }
//                                             },
//                                         ),
//                                     }
//                                 },
//                             )
//                             return {
//                                 'l value': prop_l_value,
//                                 'l results': prop_l_results,
//                             }
//                         },
//                     ),
//                 )
                
//                 const prop_schema = _p_change_context(
//                     $['schema'],
//                     ($) => prop_schema_set_child['l results']['schema'],
//                 )
//                 return {
//                     'schema set child': prop_schema_set_child,
//                     'schema': prop_schema,
//                 }
//             },
//         ),
//     ),
// )

// export const Resolver_Imports: t_signatures.Resolver_Imports = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
//     $['l dictionary'],
// ).resolve_static(
//     ($, id, $a, $c): t_out.Resolver_Imports.D => _p_change_context(
//         $['l entry'],
//         ($) => _p.literal.group_resolve(
//             () => {
                
//                 const prop_schema_set_child = _p_change_context(
//                     $['schema set child'],
//                     ($) => _p.literal.group_resolve(
//                         () => {
                            
//                             const prop_l_value = {
//                                 'l entry': $l['sibling schemas'].get_entry(
//                                     $['l reference'],
//                                     {
//                                         no_such_entry: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         no_context_lookup: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no context lookup', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         cycle_detected: () => abort(
//                                             {
//                                                 'type': ['lookup', ['cycle detected', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                     },
//                                 ),
//                                 'l id': $['l reference'],
//                                 'l up steps': $l['sibling schemas'].get_entry_depth(
//                                     $['l reference'],
//                                     {
//                                         no_such_entry: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         no_context_lookup: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no context lookup', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         cycle_detected: () => abort(
//                                             {
//                                                 'type': ['lookup', ['cycle detected', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                     },
//                                 ),
//                             }
                            
//                             const prop_l_results = _p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return {
//                                         'resolver': _p.decide.state(
//                                             _pdev.implement_me(
//                                                 "IM: rvs",
//                                             ),
//                                             ($) => {
//                                                 switch ($[0]) {
//                                                     case 'schema':
//                                                         return _p.ss(
//                                                             $,
//                                                             ($) => $,
//                                                         )
//                                                     default:
//                                                         return abort(
//                                                             {
//                                                                 'type': ['constraint', ['state', {
//                                                                     'expected': "schema",
//                                                                     'found': $[0],
//                                                                 }]],
//                                                                 'location': var_location,
//                                                             },
//                                                         )
//                                                 }
//                                             },
//                                         ),
//                                     }
//                                 },
//                             )
//                             return {
//                                 'l value': prop_l_value,
//                                 'l results': prop_l_results,
//                             }
//                         },
//                     ),
//                 )
                
//                 const prop_resolver = _p_change_context(
//                     $['resolver'],
//                     ($) => prop_schema_set_child['l results']['resolver'],
//                 )
//                 return {
//                     'schema set child': prop_schema_set_child,
//                     'resolver': prop_resolver,
//                 }
//             },
//         ),
//     ),
// )
