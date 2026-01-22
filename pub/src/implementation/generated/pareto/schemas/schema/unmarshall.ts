    // import * as _p from 'pareto-core/dist/refiner'
    // import * as _pdev from 'pareto-core-dev'
    
    // import * as _i_generic from "../generic/unmarshall"
    // import * as _i_signatures from "../../../../../interface/generated/liana/schemas/schema/unmarshall"
    // import * as _i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
    // import * as _i_out from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"
    
    
    // export const Text_Type: _i_signatures.Text_Type = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'type': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "type",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'multi line': ($): _i_out.Text_Type._type.state_group => ['multi line', _i_generic.process_nothing(
    //                             $,
    //                             null
    //                         )],
    //                         'single line': ($): _i_out.Text_Type._type.state_group => ['single line', _i_generic.process_nothing(
    //                             $,
    //                             null
    //                         )],
    //                     }),
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Number_Type: _i_signatures.Number_Type = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'precision': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "precision",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'approximation': ($): _i_out.Number_Type.precision.state_group => ['approximation', _i_generic.process_group(
    //                             $,
    //                             {
    //                                 'properties': ($) => ({
    //                                     'significant digits': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "significant digits",
    //                                         }
    //                                     ), ($) => _i_generic.process_number(
    //                                         $,
    //                                         {
    //                                             // 'deserializer': $p['value deserializers']['default number'],
    //                                         }
    //                                     )),
    //                                 }),
    //                             }
    //                         )],
    //                         'exact': ($): _i_out.Number_Type.precision.state_group => ['exact', _i_generic.process_group(
    //                             $,
    //                             {
    //                                 'properties': ($) => ({
    //                                     'decimal separator offset': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "decimal separator offset",
    //                                         }
    //                                     ), ($) => _i_generic.process_optional(
    //                                         $,
    //                                         {
    //                                             'value': ($) => _i_generic.process_number(
    //                                                 $,
    //                                                 {
    //                                                     // 'deserializer': $p['value deserializers']['default number'],
    //                                                 }
    //                                             ),
    //                                         }
    //                                     )),
    //                                     'type': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "type",
    //                                         }
    //                                     ), ($) => _i_generic.process_unresolved_state_group(
    //                                         $,
    //                                         {
    //                                             'states': _p.dictionary.literal({
    //                                                 'integer': ($): _i_out.Number_Type.precision.state_group.exact._type.state_group => ['integer', _i_generic.process_nothing(
    //                                                     $,
    //                                                     null
    //                                                 )],
    //                                                 'natural': ($): _i_out.Number_Type.precision.state_group.exact._type.state_group => ['natural', _i_generic.process_nothing(
    //                                                     $,
    //                                                     null
    //                                                 )],
    //                                                 'positive natural': ($): _i_out.Number_Type.precision.state_group.exact._type.state_group => ['positive natural', _i_generic.process_nothing(
    //                                                     $,
    //                                                     null
    //                                                 )],
    //                                             }),
    //                                         }
    //                                     )),
    //                                 }),
    //                             }
    //                         )],
    //                     }),
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Globals: _i_signatures.Globals = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'complexity': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "complexity",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'constrained': ($): _i_out.Globals.complexity.state_group => ['constrained', _i_generic.process_nothing(
    //                             $,
    //                             null
    //                         )],
    //                         'unconstrained': ($): _i_out.Globals.complexity.state_group => ['unconstrained', _i_generic.process_nothing(
    //                             $,
    //                             null
    //                         )],
    //                     }),
    //                 }
    //             )),
    //             'text types': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "text types",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_dictionary(
    //                 $,
    //                 {
    //                     'value': ($) => Text_Type(
    //                         $,
    //                         {
    //                             //
    //                         }
    //                     ),
    //                 }
    //             )),
    //             'number types': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "number types",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_dictionary(
    //                 $,
    //                 {
    //                     'value': ($) => Number_Type(
    //                         $,
    //                         {
    //                             //
    //                         }
    //                     ),
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Presence: _i_signatures.Presence = ($, $p) => _i_generic.process_unresolved_state_group(
    //     $,
    //     {
    //         'states': _p.dictionary.literal({
    //             'optional': ($): _i_out.Presence.state_group => ['optional', _i_generic.process_nothing(
    //                 $,
    //                 null
    //             )],
    //             'required': ($): _i_out.Presence.state_group => ['required', _i_generic.process_nothing(
    //                 $,
    //                 null
    //             )],
    //         }),
    //     }
    // )
    // export const Type_Parameters: _i_signatures.Type_Parameters = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => _i_generic.process_nothing(
    //             $,
    //             null
    //         ),
    //     }
    // )
    // export const Type: _i_signatures.Type = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'type parameters': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "type parameters",
    //                 }
    //             ), ($) => Type_Parameters(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'node': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "node",
    //                 }
    //             ), ($) => Type_Node(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Types: _i_signatures.Types = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => Type(
    //             $,
    //             {
    //                 //
    //             }
    //         ),
    //     }
    // )
    // export const Dictionary: _i_signatures.Dictionary = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'node': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "node",
    //                 }
    //             ), ($) => Type_Node(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'ordered': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "ordered",
    //                 }
    //             ), ($) => _i_generic.process_boolean(
    //                 $,
    //                 {
    //                     // 'deserializer': $p['value deserializers']['boolean'],
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Signatures: _i_signatures.Signatures = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => Signature(
    //             $,
    //             {
    //                 //
    //             }
    //         ),
    //     }
    // )
    // export const Resolvers: _i_signatures.Resolvers = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => _i_generic.process_group(
    //             $,
    //             {
    //                 'properties': ($) => ({
    //                     'signature': _p.deprecated_cc(_i_generic.get_entry(
    //                         $,
    //                         {
    //                             'key': "signature",
    //                         }
    //                     ), ($) => _i_generic.process_derived_reference(
    //                         $,
    //                         null
    //                     )),
    //                     'type resolver': _p.deprecated_cc(_i_generic.get_entry(
    //                         $,
    //                         {
    //                             'key': "type resolver",
    //                         }
    //                     ), ($) => Node_Resolver(
    //                         $,
    //                         {
    //                             //
    //                         }
    //                     )),
    //                 }),
    //             }
    //         ),
    //     }
    // )
    // export const Resolve_Logic: _i_signatures.Resolve_Logic = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'signatures': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "signatures",
    //                 }
    //             ), ($) => _i_generic.process_group(
    //                 $,
    //                 {
    //                     'properties': ($) => ({
    //                         'types': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "types",
    //                             }
    //                         ), ($) => Signatures(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )),
    //                     }),
    //                 }
    //             )),
    //             'resolvers': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "resolvers",
    //                 }
    //             ), ($) => Resolvers(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Group: _i_signatures.Group = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => _i_generic.process_group(
    //             $,
    //             {
    //                 'properties': ($) => ({
    //                     'description': _p.deprecated_cc(_i_generic.get_entry(
    //                         $,
    //                         {
    //                             'key': "description",
    //                         }
    //                     ), ($) => _i_generic.process_optional(
    //                         $,
    //                         {
    //                             'value': ($) => _i_generic.process_text(
    //                                 $,
    //                                 null
    //                             ),
    //                         }
    //                     )),
    //                     'node': _p.deprecated_cc(_i_generic.get_entry(
    //                         $,
    //                         {
    //                             'key': "node",
    //                         }
    //                     ), ($) => Type_Node(
    //                         $,
    //                         {
    //                             //
    //                         }
    //                     )),
    //                 }),
    //             }
    //         ),
    //     }
    // )
    // export const Schema: _i_signatures.Schema = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'imports': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "imports",
    //                 }
    //             ), ($) => Imports(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'globals': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "globals",
    //                 }
    //             ), ($) => Globals(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'types': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "types",
    //                 }
    //             ), ($) => Types(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'complexity': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "complexity",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'constrained': ($): _i_out.Schema.complexity.state_group => ['constrained', Resolve_Logic(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )],
    //                         'unconstrained': ($): _i_out.Schema.complexity.state_group => ['unconstrained', _i_generic.process_nothing(
    //                             $,
    //                             null
    //                         )],
    //                     }),
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Schema_Tree: _i_signatures.Schema_Tree = ($, $p) => _i_generic.process_unresolved_state_group(
    //     $,
    //     {
    //         'states': _p.dictionary.literal({
    //             'schema': ($): _i_out.Schema_Tree.state_group => ['schema', Schema(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )],
    //             'set': ($): _i_out.Schema_Tree.state_group => ['set', Schemas(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )],
    //         }),
    //     }
    // )
    // export const Schemas: _i_signatures.Schemas = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => Schema_Tree(
    //             $,
    //             {
    //                 //
    //             }
    //         ),
    //     }
    // )
    // export const Imports: _i_signatures.Imports = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => _i_generic.process_group(
    //             $,
    //             {
    //                 'properties': ($) => ({
    //                     'schema set child': _p.deprecated_cc(_i_generic.get_entry(
    //                         $,
    //                         {
    //                             'key': "schema set child",
    //                         }
    //                     ), ($) => _i_generic.process_stack_reference(
    //                         $,
    //                         null
    //                     )),
    //                     'schema': _p.deprecated_cc(_i_generic.get_entry(
    //                         $,
    //                         {
    //                             'key': "schema",
    //                         }
    //                     ), ($) => _i_generic.process_derived_reference(
    //                         $,
    //                         null
    //                     )),
    //                 }),
    //             }
    //         ),
    //     }
    // )
    // export const Type_Node: _i_signatures.Type_Node = ($, $p) => _i_generic.process_unresolved_state_group(
    //     $,
    //     {
    //         'states': _p.dictionary.literal({
    //             'boolean': ($): _i_out.Type_Node.state_group => ['boolean', _i_generic.process_nothing(
    //                 $,
    //                 null
    //             )],
    //             'component': ($): _i_out.Type_Node.state_group => ['component', _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'external': ($): _i_out.Type_Node.state_group.component.state_group => ['external', _i_generic.process_group(
    //                             $,
    //                             {
    //                                 'properties': ($) => ({
    //                                     'import': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "import",
    //                                         }
    //                                     ), ($) => _i_generic.process_selected_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                     'type': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "type",
    //                                         }
    //                                     ), ($) => _i_generic.process_selected_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                 }),
    //                             }
    //                         )],
    //                         'internal': ($): _i_out.Type_Node.state_group.component.state_group => ['internal', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'internal cyclic': ($): _i_out.Type_Node.state_group.component.state_group => ['internal cyclic', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                     }),
    //                 }
    //             )],
    //             'dictionary': ($): _i_out.Type_Node.state_group => ['dictionary', Dictionary(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )],
    //             'group': ($): _i_out.Type_Node.state_group => ['group', Group(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )],
    //             'list': ($): _i_out.Type_Node.state_group => ['list', _i_generic.process_group(
    //                 $,
    //                 {
    //                     'properties': ($) => ({
    //                         'node': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "node",
    //                             }
    //                         ), ($) => Type_Node(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )),
    //                     }),
    //                 }
    //             )],
    //             'nothing': ($): _i_out.Type_Node.state_group => ['nothing', _i_generic.process_nothing(
    //                 $,
    //                 null
    //             )],
    //             'number': ($): _i_out.Type_Node.state_group => ['number', _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'global': ($): _i_out.Type_Node.state_group._number.state_group => ['global', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'local': ($): _i_out.Type_Node.state_group._number.state_group => ['local', Number_Type(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )],
    //                     }),
    //                 }
    //             )],
    //             'optional': ($): _i_out.Type_Node.state_group => ['optional', Type_Node(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )],
    //             'reference': ($): _i_out.Type_Node.state_group => ['reference', _i_generic.process_group(
    //                 $,
    //                 {
    //                     'properties': ($) => ({
    //                         'referent': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "referent",
    //                             }
    //                         ), ($) => Type_Node_Reference(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )),
    //                         'type': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "type",
    //                             }
    //                         ), ($) => _i_generic.process_unresolved_state_group(
    //                             $,
    //                             {
    //                                 'states': _p.dictionary.literal({
    //                                     'derived': ($): _i_out.Type_Node.state_group.reference._type.state_group => ['derived', _i_generic.process_nothing(
    //                                         $,
    //                                         null
    //                                     )],
    //                                     'selected': ($): _i_out.Type_Node.state_group.reference._type.state_group => ['selected', _i_generic.process_group(
    //                                         $,
    //                                         {
    //                                             'properties': ($) => ({
    //                                                 'dictionary': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "dictionary",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_derived_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'dependency': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "dependency",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_unresolved_state_group(
    //                                                     $,
    //                                                     {
    //                                                         'states': _p.dictionary.literal({
    //                                                             'acyclic': ($): _i_out.Type_Node.state_group.reference._type.state_group.selected.dependency.state_group => ['acyclic', _i_generic.process_nothing(
    //                                                                 $,
    //                                                                 null
    //                                                             )],
    //                                                             'cyclic': ($): _i_out.Type_Node.state_group.reference._type.state_group.selected.dependency.state_group => ['cyclic', _i_generic.process_nothing(
    //                                                                 $,
    //                                                                 null
    //                                                             )],
    //                                                             'stack': ($): _i_out.Type_Node.state_group.reference._type.state_group.selected.dependency.state_group => ['stack', _i_generic.process_nothing(
    //                                                                 $,
    //                                                                 null
    //                                                             )],
    //                                                         }),
    //                                                     }
    //                                                 )),
    //                                             }),
    //                                         }
    //                                     )],
    //                                 }),
    //                             }
    //                         )),
    //                     }),
    //                 }
    //             )],
    //             'state group': ($): _i_out.Type_Node.state_group => ['state group', _i_generic.process_unresolved_dictionary(
    //                 $,
    //                 {
    //                     'value': ($) => _i_generic.process_group(
    //                         $,
    //                         {
    //                             'properties': ($) => ({
    //                                 'description': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "description",
    //                                     }
    //                                 ), ($) => _i_generic.process_optional(
    //                                     $,
    //                                     {
    //                                         'value': ($) => _i_generic.process_text(
    //                                             $,
    //                                             null
    //                                         ),
    //                                     }
    //                                 )),
    //                                 'node': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "node",
    //                                     }
    //                                 ), ($) => Type_Node(
    //                                     $,
    //                                     {
    //                                         //
    //                                     }
    //                                 )),
    //                             }),
    //                         }
    //                     ),
    //                 }
    //             )],
    //             'text': ($): _i_out.Type_Node.state_group => ['text', _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'global': ($): _i_out.Type_Node.state_group.text.state_group => ['global', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'local': ($): _i_out.Type_Node.state_group.text.state_group => ['local', Text_Type(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )],
    //                     }),
    //                 }
    //             )],
    //         }),
    //     }
    // )
    // export const Type_Reference: _i_signatures.Type_Reference = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'location': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "location",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'internal': ($): _i_out.Type_Reference.location.state_group => ['internal', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'external': ($): _i_out.Type_Reference.location.state_group => ['external', _i_generic.process_group(
    //                             $,
    //                             {
    //                                 'properties': ($) => ({
    //                                     'import': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "import",
    //                                         }
    //                                     ), ($) => _i_generic.process_selected_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                     'type': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "type",
    //                                         }
    //                                     ), ($) => _i_generic.process_selected_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                 }),
    //                             }
    //                         )],
    //                     }),
    //                 }
    //             )),
    //             'resulting node': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "resulting node",
    //                 }
    //             ), ($) => _i_generic.process_derived_reference(
    //                 $,
    //                 null
    //             )),
    //         }),
    //     }
    // )
    // export const Type_Node_Reference: _i_signatures.Type_Node_Reference = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'type location': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "type location",
    //                 }
    //             ), ($) => Type_Reference(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'tail': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "tail",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_list(
    //                 $,
    //                 {
    //                     'value': ($) => _i_generic.process_unresolved_state_group(
    //                         $,
    //                         {
    //                             'states': _p.dictionary.literal({
    //                                 'dictionary': ($): _i_out.Type_Node_Reference.tail.list.L.element.state_group => ['dictionary', _i_generic.process_nothing(
    //                                     $,
    //                                     null
    //                                 )],
    //                                 'group': ($): _i_out.Type_Node_Reference.tail.list.L.element.state_group => ['group', _i_generic.process_selected_reference(
    //                                     $,
    //                                     null
    //                                 )],
    //                                 'list': ($): _i_out.Type_Node_Reference.tail.list.L.element.state_group => ['list', _i_generic.process_nothing(
    //                                     $,
    //                                     null
    //                                 )],
    //                                 'optional': ($): _i_out.Type_Node_Reference.tail.list.L.element.state_group => ['optional', _i_generic.process_nothing(
    //                                     $,
    //                                     null
    //                                 )],
    //                                 'state group': ($): _i_out.Type_Node_Reference.tail.list.L.element.state_group => ['state group', _i_generic.process_selected_reference(
    //                                     $,
    //                                     null
    //                                 )],
    //                             }),
    //                         }
    //                     ),
    //                 }
    //             )),
    //             'resulting node': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "resulting node",
    //                 }
    //             ), ($) => _i_generic.process_derived_reference(
    //                 $,
    //                 null
    //             )),
    //         }),
    //     }
    // )
    // export const Signature_Parameters: _i_signatures.Signature_Parameters = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'values': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "values",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_dictionary(
    //                 $,
    //                 {
    //                     'value': ($) => _i_generic.process_group(
    //                         $,
    //                         {
    //                             'properties': ($) => ({
    //                                 'data type': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "data type",
    //                                     }
    //                                 ), ($) => Type_Reference(
    //                                     $,
    //                                     {
    //                                         //
    //                                     }
    //                                 )),
    //                                 'presence': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "presence",
    //                                     }
    //                                 ), ($) => Presence(
    //                                     $,
    //                                     {
    //                                         //
    //                                     }
    //                                 )),
    //                             }),
    //                         }
    //                     ),
    //                 }
    //             )),
    //             'lookups': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "lookups",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_dictionary(
    //                 $,
    //                 {
    //                     'value': ($) => _i_generic.process_group(
    //                         $,
    //                         {
    //                             'properties': ($) => ({
    //                                 'referent': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "referent",
    //                                     }
    //                                 ), ($) => Type_Reference(
    //                                     $,
    //                                     {
    //                                         //
    //                                     }
    //                                 )),
    //                                 'dictionary': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "dictionary",
    //                                     }
    //                                 ), ($) => _i_generic.process_derived_reference(
    //                                     $,
    //                                     null
    //                                 )),
    //                                 'type': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "type",
    //                                     }
    //                                 ), ($) => _i_generic.process_unresolved_state_group(
    //                                     $,
    //                                     {
    //                                         'states': _p.dictionary.literal({
    //                                             'cyclic': ($): _i_out.Signature_Parameters.lookups.dictionary.D.entry._type.state_group => ['cyclic', _i_generic.process_nothing(
    //                                                 $,
    //                                                 null
    //                                             )],
    //                                             'acyclic': ($): _i_out.Signature_Parameters.lookups.dictionary.D.entry._type.state_group => ['acyclic', _i_generic.process_nothing(
    //                                                 $,
    //                                                 null
    //                                             )],
    //                                             'stack': ($): _i_out.Signature_Parameters.lookups.dictionary.D.entry._type.state_group => ['stack', _i_generic.process_nothing(
    //                                                 $,
    //                                                 null
    //                                             )],
    //                                         }),
    //                                     }
    //                                 )),
    //                                 'presence': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "presence",
    //                                     }
    //                                 ), ($) => Presence(
    //                                     $,
    //                                     {
    //                                         //
    //                                     }
    //                                 )),
    //                             }),
    //                         }
    //                     ),
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Signature: _i_signatures.Signature = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'type': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "type",
    //                 }
    //             ), ($) => _i_generic.process_derived_reference(
    //                 $,
    //                 null
    //             )),
    //             'parameters': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "parameters",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'local': ($): _i_out.Signature.parameters.state_group => ['local', Signature_Parameters(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )],
    //                         'same as': ($): _i_out.Signature.parameters.state_group => ['same as', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                     }),
    //                 }
    //             )),
    //             'resolved parameters': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "resolved parameters",
    //                 }
    //             ), ($) => _i_generic.process_derived_reference(
    //                 $,
    //                 null
    //             )),
    //         }),
    //     }
    // )
    // export const Relative_Value_Selection: _i_signatures.Relative_Value_Selection = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'path': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "path",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_list(
    //                 $,
    //                 {
    //                     'value': ($) => _i_generic.process_unresolved_state_group(
    //                         $,
    //                         {
    //                             'states': _p.dictionary.literal({
    //                                 'component': ($): _i_out.Relative_Value_Selection.path.list.L.element.state_group => ['component', _i_generic.process_nothing(
    //                                     $,
    //                                     null
    //                                 )],
    //                                 'group': ($): _i_out.Relative_Value_Selection.path.list.L.element.state_group => ['group', _i_generic.process_selected_reference(
    //                                     $,
    //                                     null
    //                                 )],
    //                                 'reference': ($): _i_out.Relative_Value_Selection.path.list.L.element.state_group => ['reference', _i_generic.process_group(
    //                                     $,
    //                                     {
    //                                         'properties': ($) => ({
    //                                             'definition': _p.deprecated_cc(_i_generic.get_entry(
    //                                                 $,
    //                                                 {
    //                                                     'key': "definition",
    //                                                 }
    //                                             ), ($) => _i_generic.process_derived_reference(
    //                                                 $,
    //                                                 null
    //                                             )),
    //                                         }),
    //                                     }
    //                                 )],
    //                             }),
    //                         }
    //                     ),
    //                 }
    //             )),
    //             'resulting node': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "resulting node",
    //                 }
    //             ), ($) => _i_generic.process_derived_reference(
    //                 $,
    //                 null
    //             )),
    //         }),
    //     }
    // )
    // export const Lookup_Selection: _i_signatures.Lookup_Selection = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'type': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "type",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'dictionary': ($): _i_out.Lookup_Selection._type.state_group => ['dictionary', _i_generic.process_group(
    //                             $,
    //                             {
    //                                 'properties': ($) => ({
    //                                     'selection': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "selection",
    //                                         }
    //                                     ), ($) => Guaranteed_Value_Selection(
    //                                         $,
    //                                         {
    //                                             //
    //                                         }
    //                                     )),
    //                                     'selected dictionary': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "selected dictionary",
    //                                         }
    //                                     ), ($) => _i_generic.process_derived_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                 }),
    //                             }
    //                         )],
    //                         'parameter': ($): _i_out.Lookup_Selection._type.state_group => ['parameter', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'not circular dependent siblings': ($): _i_out.Lookup_Selection._type.state_group => ['not circular dependent siblings', _i_generic.process_derived_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'possibly circular dependent siblings': ($): _i_out.Lookup_Selection._type.state_group => ['possibly circular dependent siblings', _i_generic.process_derived_reference(
    //                             $,
    //                             null
    //                         )],
    //                     }),
    //                 }
    //             )),
    //             'resulting dictionary': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "resulting dictionary",
    //                 }
    //             ), ($) => _i_generic.process_derived_reference(
    //                 $,
    //                 null
    //             )),
    //         }),
    //     }
    // )
    // export const Constraint: _i_signatures.Constraint = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'selection': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "selection",
    //                 }
    //             ), ($) => Relative_Value_Selection(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'type': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "type",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'state': ($): _i_out.Constraint._type.state_group => ['state', _i_generic.process_group(
    //                             $,
    //                             {
    //                                 'properties': ($) => ({
    //                                     'selected state group': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "selected state group",
    //                                         }
    //                                     ), ($) => _i_generic.process_derived_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                     'state': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "state",
    //                                         }
    //                                     ), ($) => _i_generic.process_selected_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                 }),
    //                             }
    //                         )],
    //                         'optional value': ($): _i_out.Constraint._type.state_group => ['optional value', _i_generic.process_group(
    //                             $,
    //                             {
    //                                 'properties': ($) => ({
    //                                     'selected optional value': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "selected optional value",
    //                                         }
    //                                     ), ($) => _i_generic.process_derived_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                 }),
    //                             }
    //                         )],
    //                     }),
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Option_Constraints: _i_signatures.Option_Constraints = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => _i_generic.process_unresolved_state_group(
    //             $,
    //             {
    //                 'states': _p.dictionary.literal({
    //                     'state': ($): _i_out.Option_Constraints.dictionary.D.entry.state_group => ['state', _i_generic.process_group(
    //                         $,
    //                         {
    //                             'properties': ($) => ({
    //                                 'selection': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "selection",
    //                                     }
    //                                 ), ($) => Guaranteed_Value_Selection(
    //                                     $,
    //                                     {
    //                                         //
    //                                     }
    //                                 )),
    //                                 'selected state group': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "selected state group",
    //                                     }
    //                                 ), ($) => _i_generic.process_derived_reference(
    //                                     $,
    //                                     null
    //                                 )),
    //                                 'state': _p.deprecated_cc(_i_generic.get_entry(
    //                                     $,
    //                                     {
    //                                         'key': "state",
    //                                     }
    //                                 ), ($) => _i_generic.process_selected_reference(
    //                                     $,
    //                                     null
    //                                 )),
    //                             }),
    //                         }
    //                     )],
    //                     'assert is set': ($): _i_out.Option_Constraints.dictionary.D.entry.state_group => ['assert is set', Possible_Value_Selection(
    //                         $,
    //                         {
    //                             //
    //                         }
    //                     )],
    //                 }),
    //             }
    //         ),
    //     }
    // )
    // export const Property_Constraints: _i_signatures.Property_Constraints = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => Property_Constraint(
    //             $,
    //             {
    //                 //
    //             }
    //         ),
    //     }
    // )
    // export const Reference_To_Property_Constraint: _i_signatures.Reference_To_Property_Constraint = ($, $p) => _i_generic.process_selected_reference(
    //     $,
    //     null
    // )
    // export const Property_Constraint: _i_signatures.Property_Constraint = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'start': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "start",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'property': ($): _i_out.Property_Constraint.start.state_group => ['property', _i_generic.process_nothing(
    //                             $,
    //                             null
    //                         )],
    //                         'sibling': ($): _i_out.Property_Constraint.start.state_group => ['sibling', Reference_To_Property_Constraint(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )],
    //                     }),
    //                 }
    //             )),
    //             'constraint': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "constraint",
    //                 }
    //             ), ($) => Constraint(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Optional_Value_Initialization: _i_signatures.Optional_Value_Initialization = ($, $p) => _i_generic.process_unresolved_state_group(
    //     $,
    //     {
    //         'states': _p.dictionary.literal({
    //             'not set': ($): _i_out.Optional_Value_Initialization.state_group => ['not set', _i_generic.process_nothing(
    //                 $,
    //                 null
    //             )],
    //             'set': ($): _i_out.Optional_Value_Initialization.state_group => ['set', Guaranteed_Value_Selection(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )],
    //             'selection': ($): _i_out.Optional_Value_Initialization.state_group => ['selection', Possible_Value_Selection(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )],
    //         }),
    //     }
    // )
    // export const Node_Resolver_Group: _i_signatures.Node_Resolver_Group = ($, $p) => _i_generic.process_unresolved_dictionary(
    //     $,
    //     {
    //         'value': ($) => _i_generic.process_group(
    //             $,
    //             {
    //                 'properties': ($) => ({
    //                     'definition': _p.deprecated_cc(_i_generic.get_entry(
    //                         $,
    //                         {
    //                             'key': "definition",
    //                         }
    //                     ), ($) => _i_generic.process_derived_reference(
    //                         $,
    //                         null
    //                     )),
    //                     'resolver': _p.deprecated_cc(_i_generic.get_entry(
    //                         $,
    //                         {
    //                             'key': "resolver",
    //                         }
    //                     ), ($) => Node_Resolver(
    //                         $,
    //                         {
    //                             //
    //                         }
    //                     )),
    //                 }),
    //             }
    //         ),
    //     }
    // )
    // export const Node_Resolver_List_Result: _i_signatures.Node_Resolver_List_Result = ($, $p) => Type_Reference(
    //     $,
    //     {
    //         //
    //     }
    // )
    // export const Benchmark: _i_signatures.Benchmark = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'selection': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "selection",
    //                 }
    //             ), ($) => Guaranteed_Value_Selection(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'resulting dictionary': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "resulting dictionary",
    //                 }
    //             ), ($) => _i_generic.process_derived_reference(
    //                 $,
    //                 null
    //             )),
    //             'dense': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "dense",
    //                 }
    //             ), ($) => _i_generic.process_boolean(
    //                 $,
    //                 {
    //                     // 'deserializer': $p['value deserializers']['boolean'],
    //                 }
    //             )),
    //         }),
    //     }
    // )
    // export const Type_Specification: _i_signatures.Type_Specification = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'schema': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "schema",
    //                 }
    //             ), ($) => Schema_Tree(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'schema path': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "schema path",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_list(
    //                 $,
    //                 {
    //                     'value': ($) => _i_generic.process_text(
    //                         $,
    //                         null
    //                     ),
    //                 }
    //             )),
    //             'type': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "type",
    //                 }
    //             ), ($) => _i_generic.process_text(
    //                 $,
    //                 null
    //             )),
    //         }),
    //     }
    // )
    // export const Node_Resolver: _i_signatures.Node_Resolver = ($, $p) => _i_generic.process_unresolved_state_group(
    //     $,
    //     {
    //         'states': _p.dictionary.literal({
    //             'boolean': ($): _i_out.Node_Resolver.state_group => ['boolean', _i_generic.process_nothing(
    //                 $,
    //                 null
    //             )],
    //             'component': ($): _i_out.Node_Resolver.state_group => ['component', _i_generic.process_group(
    //                 $,
    //                 {
    //                     'properties': ($) => ({
    //                         'location': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "location",
    //                             }
    //                         ), ($) => _i_generic.process_unresolved_state_group(
    //                             $,
    //                             {
    //                                 'states': _p.dictionary.literal({
    //                                     'external': ($): _i_out.Node_Resolver.state_group.component.location.state_group => ['external', _i_generic.process_group(
    //                                         $,
    //                                         {
    //                                             'properties': ($) => ({
    //                                                 'import': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "import",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_selected_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'type': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "type",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_selected_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                             }),
    //                                         }
    //                                     )],
    //                                     'internal': ($): _i_out.Node_Resolver.state_group.component.location.state_group => ['internal', _i_generic.process_selected_reference(
    //                                         $,
    //                                         null
    //                                     )],
    //                                 }),
    //                             }
    //                         )),
    //                         'signature': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "signature",
    //                             }
    //                         ), ($) => _i_generic.process_derived_reference(
    //                             $,
    //                             null
    //                         )),
    //                         'arguments': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "arguments",
    //                             }
    //                         ), ($) => _i_generic.process_optional(
    //                             $,
    //                             {
    //                                 'value': ($) => _i_generic.process_group(
    //                                     $,
    //                                     {
    //                                         'properties': ($) => ({
    //                                             'values': _p.deprecated_cc(_i_generic.get_entry(
    //                                                 $,
    //                                                 {
    //                                                     'key': "values",
    //                                                 }
    //                                             ), ($) => _i_generic.process_optional(
    //                                                 $,
    //                                                 {
    //                                                     'value': ($) => _i_generic.process_unresolved_dictionary(
    //                                                         $,
    //                                                         {
    //                                                             'value': ($) => _i_generic.process_unresolved_state_group(
    //                                                                 $,
    //                                                                 {
    //                                                                     'states': _p.dictionary.literal({
    //                                                                         'optional': ($): _i_out.Node_Resolver.state_group.component._arguments.O.values.O.dictionary.D.entry.state_group => ['optional', Optional_Value_Initialization(
    //                                                                             $,
    //                                                                             {
    //                                                                                 //
    //                                                                             }
    //                                                                         )],
    //                                                                         'required': ($): _i_out.Node_Resolver.state_group.component._arguments.O.values.O.dictionary.D.entry.state_group => ['required', Guaranteed_Value_Selection(
    //                                                                             $,
    //                                                                             {
    //                                                                                 //
    //                                                                             }
    //                                                                         )],
    //                                                                         'parameter': ($): _i_out.Node_Resolver.state_group.component._arguments.O.values.O.dictionary.D.entry.state_group => ['parameter', _i_generic.process_selected_reference(
    //                                                                             $,
    //                                                                             null
    //                                                                         )],
    //                                                                     }),
    //                                                                 }
    //                                                             ),
    //                                                         }
    //                                                     ),
    //                                                 }
    //                                             )),
    //                                             'lookups': _p.deprecated_cc(_i_generic.get_entry(
    //                                                 $,
    //                                                 {
    //                                                     'key': "lookups",
    //                                                 }
    //                                             ), ($) => _i_generic.process_optional(
    //                                                 $,
    //                                                 {
    //                                                     'value': ($) => _i_generic.process_unresolved_dictionary(
    //                                                         $,
    //                                                         {
    //                                                             'value': ($) => _i_generic.process_unresolved_state_group(
    //                                                                 $,
    //                                                                 {
    //                                                                     'states': _p.dictionary.literal({
    //                                                                         'empty stack': ($): _i_out.Node_Resolver.state_group.component._arguments.O.lookups.O.dictionary.D.entry.state_group => ['empty stack', _i_generic.process_nothing(
    //                                                                             $,
    //                                                                             null
    //                                                                         )],
    //                                                                         'not set': ($): _i_out.Node_Resolver.state_group.component._arguments.O.lookups.O.dictionary.D.entry.state_group => ['not set', _i_generic.process_nothing(
    //                                                                             $,
    //                                                                             null
    //                                                                         )],
    //                                                                         'selection': ($): _i_out.Node_Resolver.state_group.component._arguments.O.lookups.O.dictionary.D.entry.state_group => ['selection', Lookup_Selection(
    //                                                                             $,
    //                                                                             {
    //                                                                                 //
    //                                                                             }
    //                                                                         )],
    //                                                                         'stack': ($): _i_out.Node_Resolver.state_group.component._arguments.O.lookups.O.dictionary.D.entry.state_group => ['stack', _i_generic.process_group(
    //                                                                             $,
    //                                                                             {
    //                                                                                 'properties': ($) => ({
    //                                                                                     'stack': _p.deprecated_cc(_i_generic.get_entry(
    //                                                                                         $,
    //                                                                                         {
    //                                                                                             'key': "stack",
    //                                                                                         }
    //                                                                                     ), ($) => Lookup_Selection(
    //                                                                                         $,
    //                                                                                         {
    //                                                                                             //
    //                                                                                         }
    //                                                                                     )),
    //                                                                                     'element': _p.deprecated_cc(_i_generic.get_entry(
    //                                                                                         $,
    //                                                                                         {
    //                                                                                             'key': "element",
    //                                                                                         }
    //                                                                                     ), ($) => Lookup_Selection(
    //                                                                                         $,
    //                                                                                         {
    //                                                                                             //
    //                                                                                         }
    //                                                                                     )),
    //                                                                                 }),
    //                                                                             }
    //                                                                         )],
    //                                                                     }),
    //                                                                 }
    //                                                             ),
    //                                                         }
    //                                                     ),
    //                                                 }
    //                                             )),
    //                                         }),
    //                                     }
    //                                 ),
    //                             }
    //                         )),
    //                         'constraints': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "constraints",
    //                             }
    //                         ), ($) => Property_Constraints(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )),
    //                     }),
    //                 }
    //             )],
    //             'dictionary': ($): _i_out.Node_Resolver.state_group => ['dictionary', _i_generic.process_group(
    //                 $,
    //                 {
    //                     'properties': ($) => ({
    //                         'definition': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "definition",
    //                             }
    //                         ), ($) => _i_generic.process_derived_reference(
    //                             $,
    //                             null
    //                         )),
    //                         'resolver': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "resolver",
    //                             }
    //                         ), ($) => Node_Resolver(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )),
    //                         'benchmark': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "benchmark",
    //                             }
    //                         ), ($) => _i_generic.process_optional(
    //                             $,
    //                             {
    //                                 'value': ($) => Benchmark(
    //                                     $,
    //                                     {
    //                                         //
    //                                     }
    //                                 ),
    //                             }
    //                         )),
    //                     }),
    //                 }
    //             )],
    //             'group': ($): _i_out.Node_Resolver.state_group => ['group', Node_Resolver_Group(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )],
    //             'list': ($): _i_out.Node_Resolver.state_group => ['list', _i_generic.process_group(
    //                 $,
    //                 {
    //                     'properties': ($) => ({
    //                         'definition': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "definition",
    //                             }
    //                         ), ($) => _i_generic.process_derived_reference(
    //                             $,
    //                             null
    //                         )),
    //                         'resolver': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "resolver",
    //                             }
    //                         ), ($) => Node_Resolver(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )),
    //                         'result': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "result",
    //                             }
    //                         ), ($) => _i_generic.process_optional(
    //                             $,
    //                             {
    //                                 'value': ($) => Node_Resolver_List_Result(
    //                                     $,
    //                                     {
    //                                         //
    //                                     }
    //                                 ),
    //                             }
    //                         )),
    //                     }),
    //                 }
    //             )],
    //             'nothing': ($): _i_out.Node_Resolver.state_group => ['nothing', _i_generic.process_nothing(
    //                 $,
    //                 null
    //             )],
    //             'number': ($): _i_out.Node_Resolver.state_group => ['number', _i_generic.process_nothing(
    //                 $,
    //                 null
    //             )],
    //             'optional': ($): _i_out.Node_Resolver.state_group => ['optional', _i_generic.process_group(
    //                 $,
    //                 {
    //                     'properties': ($) => ({
    //                         'constraints': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "constraints",
    //                             }
    //                         ), ($) => Option_Constraints(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )),
    //                         'resolver': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "resolver",
    //                             }
    //                         ), ($) => Node_Resolver(
    //                             $,
    //                             {
    //                                 //
    //                             }
    //                         )),
    //                     }),
    //                 }
    //             )],
    //             'reference': ($): _i_out.Node_Resolver.state_group => ['reference', _i_generic.process_group(
    //                 $,
    //                 {
    //                     'properties': ($) => ({
    //                         'definition': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "definition",
    //                             }
    //                         ), ($) => _i_generic.process_derived_reference(
    //                             $,
    //                             null
    //                         )),
    //                         'type': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "type",
    //                             }
    //                         ), ($) => _i_generic.process_unresolved_state_group(
    //                             $,
    //                             {
    //                                 'states': _p.dictionary.literal({
    //                                     'derived': ($): _i_out.Node_Resolver.state_group.reference._type.state_group => ['derived', _i_generic.process_group(
    //                                         $,
    //                                         {
    //                                             'properties': ($) => ({
    //                                                 'value': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "value",
    //                                                     }
    //                                                 ), ($) => Guaranteed_Value_Selection(
    //                                                     $,
    //                                                     {
    //                                                         //
    //                                                     }
    //                                                 )),
    //                                             }),
    //                                         }
    //                                     )],
    //                                     'selected': ($): _i_out.Node_Resolver.state_group.reference._type.state_group => ['selected', _i_generic.process_group(
    //                                         $,
    //                                         {
    //                                             'properties': ($) => ({
    //                                                 'definition': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "definition",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_derived_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'lookup': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "lookup",
    //                                                     }
    //                                                 ), ($) => Lookup_Selection(
    //                                                     $,
    //                                                     {
    //                                                         //
    //                                                     }
    //                                                 )),
    //                                                 'constraints': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "constraints",
    //                                                     }
    //                                                 ), ($) => Property_Constraints(
    //                                                     $,
    //                                                     {
    //                                                         //
    //                                                     }
    //                                                 )),
    //                                             }),
    //                                         }
    //                                     )],
    //                                 }),
    //                             }
    //                         )),
    //                     }),
    //                 }
    //             )],
    //             'state group': ($): _i_out.Node_Resolver.state_group => ['state group', _i_generic.process_group(
    //                 $,
    //                 {
    //                     'properties': ($) => ({
    //                         'definition': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "definition",
    //                             }
    //                         ), ($) => _i_generic.process_derived_reference(
    //                             $,
    //                             null
    //                         )),
    //                         'states': _p.deprecated_cc(_i_generic.get_entry(
    //                             $,
    //                             {
    //                                 'key': "states",
    //                             }
    //                         ), ($) => _i_generic.process_unresolved_dictionary(
    //                             $,
    //                             {
    //                                 'value': ($) => _i_generic.process_group(
    //                                     $,
    //                                     {
    //                                         'properties': ($) => ({
    //                                             'constraints': _p.deprecated_cc(_i_generic.get_entry(
    //                                                 $,
    //                                                 {
    //                                                     'key': "constraints",
    //                                                 }
    //                                             ), ($) => Option_Constraints(
    //                                                 $,
    //                                                 {
    //                                                     //
    //                                                 }
    //                                             )),
    //                                             'resolver': _p.deprecated_cc(_i_generic.get_entry(
    //                                                 $,
    //                                                 {
    //                                                     'key': "resolver",
    //                                                 }
    //                                             ), ($) => Node_Resolver(
    //                                                 $,
    //                                                 {
    //                                                     //
    //                                                 }
    //                                             )),
    //                                         }),
    //                                     }
    //                                 ),
    //                             }
    //                         )),
    //                     }),
    //                 }
    //             )],
    //             'text': ($): _i_out.Node_Resolver.state_group => ['text', _i_generic.process_nothing(
    //                 $,
    //                 null
    //             )],
    //         }),
    //     }
    // )
    // export const Guaranteed_Value_Selection: _i_signatures.Guaranteed_Value_Selection = ($, $p) => _i_generic.process_group(
    //     $,
    //     {
    //         'properties': ($) => ({
    //             'start': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "start",
    //                 }
    //             ), ($) => _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'sibling': ($): _i_out.Guaranteed_Value_Selection.start.state_group => ['sibling', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'parent sibling': ($): _i_out.Guaranteed_Value_Selection.start.state_group => ['parent sibling', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'option constraint': ($): _i_out.Guaranteed_Value_Selection.start.state_group => ['option constraint', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'list cursor': ($): _i_out.Guaranteed_Value_Selection.start.state_group => ['list cursor', _i_generic.process_nothing(
    //                             $,
    //                             null
    //                         )],
    //                         'linked entry': ($): _i_out.Guaranteed_Value_Selection.start.state_group => ['linked entry', _i_generic.process_nothing(
    //                             $,
    //                             null
    //                         )],
    //                         'constraint': ($): _i_out.Guaranteed_Value_Selection.start.state_group => ['constraint', _i_generic.process_unresolved_state_group(
    //                             $,
    //                             {
    //                                 'states': _p.dictionary.literal({
    //                                     'component': ($): _i_out.Guaranteed_Value_Selection.start.state_group.constraint.state_group => ['component', _i_generic.process_group(
    //                                         $,
    //                                         {
    //                                             'properties': ($) => ({
    //                                                 'property': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "property",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_selected_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'constraint': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "constraint",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_selected_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                             }),
    //                                         }
    //                                     )],
    //                                     'reference': ($): _i_out.Guaranteed_Value_Selection.start.state_group.constraint.state_group => ['reference', _i_generic.process_group(
    //                                         $,
    //                                         {
    //                                             'properties': ($) => ({
    //                                                 'property': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "property",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_selected_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'constraint': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "constraint",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_selected_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                             }),
    //                                         }
    //                                     )],
    //                                 }),
    //                             }
    //                         )],
    //                         'parameter': ($): _i_out.Guaranteed_Value_Selection.start.state_group => ['parameter', _i_generic.process_selected_reference(
    //                             $,
    //                             null
    //                         )],
    //                         'result': ($): _i_out.Guaranteed_Value_Selection.start.state_group => ['result', _i_generic.process_unresolved_state_group(
    //                             $,
    //                             {
    //                                 'states': _p.dictionary.literal({
    //                                     'list': ($): _i_out.Guaranteed_Value_Selection.start.state_group.result.state_group => ['list', _i_generic.process_group(
    //                                         $,
    //                                         {
    //                                             'properties': ($) => ({
    //                                                 'property': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "property",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_selected_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'list result': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "list result",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_derived_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                             }),
    //                                         }
    //                                     )],
    //                                     'state group': ($): _i_out.Guaranteed_Value_Selection.start.state_group.result.state_group => ['state group', _i_generic.process_group(
    //                                         $,
    //                                         {
    //                                             'properties': ($) => ({
    //                                                 'property': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "property",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_selected_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'state group': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "state group",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_derived_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'result': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "result",
    //                                                     }
    //                                                 ), ($) => Type_Reference(
    //                                                     $,
    //                                                     {
    //                                                         //
    //                                                     }
    //                                                 )),
    //                                             }),
    //                                         }
    //                                     )],
    //                                     'optional value': ($): _i_out.Guaranteed_Value_Selection.start.state_group.result.state_group => ['optional value', _i_generic.process_group(
    //                                         $,
    //                                         {
    //                                             'properties': ($) => ({
    //                                                 'property': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "property",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_selected_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'optional value': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "optional value",
    //                                                     }
    //                                                 ), ($) => _i_generic.process_derived_reference(
    //                                                     $,
    //                                                     null
    //                                                 )),
    //                                                 'result': _p.deprecated_cc(_i_generic.get_entry(
    //                                                     $,
    //                                                     {
    //                                                         'key': "result",
    //                                                     }
    //                                                 ), ($) => Type_Reference(
    //                                                     $,
    //                                                     {
    //                                                         //
    //                                                     }
    //                                                 )),
    //                                             }),
    //                                         }
    //                                     )],
    //                                 }),
    //                             }
    //                         )],
    //                     }),
    //                 }
    //             )),
    //             'tail': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "tail",
    //                 }
    //             ), ($) => Relative_Value_Selection(
    //                 $,
    //                 {
    //                     //
    //                 }
    //             )),
    //             'resulting node': _p.deprecated_cc(_i_generic.get_entry(
    //                 $,
    //                 {
    //                     'key': "resulting node",
    //                 }
    //             ), ($) => _i_generic.process_derived_reference(
    //                 $,
    //                 null
    //             )),
    //         }),
    //     }
    // )
    // export const Possible_Value_Selection: _i_signatures.Possible_Value_Selection = ($, $p) => _i_generic.process_unresolved_state_group(
    //     $,
    //     {
    //         'states': _p.dictionary.literal({
    //             'parameter': ($): _i_out.Possible_Value_Selection.state_group => ['parameter', _i_generic.process_selected_reference(
    //                 $,
    //                 null
    //             )],
    //             'result': ($): _i_out.Possible_Value_Selection.state_group => ['result', _i_generic.process_unresolved_state_group(
    //                 $,
    //                 {
    //                     'states': _p.dictionary.literal({
    //                         'state group': ($): _i_out.Possible_Value_Selection.state_group.result.state_group => ['state group', _i_generic.process_group(
    //                             $,
    //                             {
    //                                 'properties': ($) => ({
    //                                     'property': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "property",
    //                                         }
    //                                     ), ($) => _i_generic.process_selected_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                     'state group': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "state group",
    //                                         }
    //                                     ), ($) => _i_generic.process_derived_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                     'result': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "result",
    //                                         }
    //                                     ), ($) => Type_Reference(
    //                                         $,
    //                                         {
    //                                             //
    //                                         }
    //                                     )),
    //                                 }),
    //                             }
    //                         )],
    //                         'optional value': ($): _i_out.Possible_Value_Selection.state_group.result.state_group => ['optional value', _i_generic.process_group(
    //                             $,
    //                             {
    //                                 'properties': ($) => ({
    //                                     'property': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "property",
    //                                         }
    //                                     ), ($) => _i_generic.process_selected_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                     'optional value': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "optional value",
    //                                         }
    //                                     ), ($) => _i_generic.process_derived_reference(
    //                                         $,
    //                                         null
    //                                     )),
    //                                     'result': _p.deprecated_cc(_i_generic.get_entry(
    //                                         $,
    //                                         {
    //                                             'key': "result",
    //                                         }
    //                                     ), ($) => Type_Reference(
    //                                         $,
    //                                         {
    //                                             //
    //                                         }
    //                                     )),
    //                                 }),
    //                             }
    //                         )],
    //                     }),
    //                 }
    //             )],
    //         }),
    //     }
    // )
