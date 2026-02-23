// import * as _p from 'pareto-core/dist/assign'
// import * as _pi from 'pareto-core/dist/interface'

// //data types
// import * as d_in from "../../../../interface/to_be_generated/unmashall_result"
// import * as d_out from "astn/dist/interface/generated/liana/schemas/authoring_target/data"
// import * as d_function from "../../../../interface/to_be_generated/authoring_target_from_unmarshall_result"

// //dependencies
// // import * as t_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

// //signatures
// export type Document = _pi.Refiner<d_out.Document, d_function.Error, d_in.Document>
// export type Value = _pi.Refiner<d_out.Value, d_function.Error, d_in.Value>
// export type Concrete_Value = _pi.Refiner<d_out.Value.data.concrete, d_function.Error, d_in.Value>

// //implementations
// export const Document: Document = ($, abort) => {
//     return {
//         'header': _p.optional.literal.not_set(),
//         'content': Value($.content, abort)
//     }
// }

// export const Value: Value = ($, abort) => {
//     return {
//         'metadata': {
//             'comments': _p.list.literal(["FIXME COMMENTS"]),
//         },
//         'data': ['concrete', Concrete_Value($, abort)]
//     }
// }

// export const Concrete_Value: Concrete_Value = ($, abort) => {
//     return _p.decide.state($.unmarshalled, ($): d_out.Value.data.concrete => {
//         switch ($[0]) {
//             case 'boolean': return _p.ss($, ($) => ({
//                 'type': ['text', {
//                     'value': _p.decide.state($['found value type'], ($) => {
//                         switch ($[0]) {
//                             case 'valid': return _p.ss($, ($) => $.instance.value)
//                             case 'invalid': return _p.ss($, ($) => abort(null))
//                             default: return _p.au($[0])
//                         }
//                     }),
//                     'delimiter': ['none', null],

//                 }]
//             }))
//             case 'component': return _p.ss($, ($) => Concrete_Value($.value, abort))
//             case 'dictionary': return _p.ss($, ($) => ({
//                 'type': ['dictionary', _p.decide.state($['found value type'], ($) => {
//                     switch ($[0]) {
//                         case 'valid': return _p.ss($, ($) => $.instance.entries.)
//                         case 'invalid': return _p.ss($, ($) => abort(null))
//                         default: return _p.au($[0])
//                     }
//                 })]
//             }))
//             case 'group': return _p.ss($, ($) => )
//             case 'list': return _p.ss($, ($) => )
//             case 'nothing': return _p.ss($, ($) => )
//             case 'number': return _p.ss($, ($) => ({
//                 'type': ['text', {
//                     'value': _p.decide.state($['found value type'], ($) => {
//                         switch ($[0]) {
//                             case 'valid': return _p.ss($, ($) => $.instance.value)
//                             case 'invalid': return _p.ss($, ($) => abort(null))
//                             default: return _p.au($[0])
//                         }
//                     }),
//                     'delimiter': ['none', null],

//                 }]
//             }))
//             case 'optional': return _p.ss($, ($): d_out.Value.data.concrete => ({
//                 'type': ['optional', _p.decide.state($['found value type'], ($): d_out.Value.data.concrete.type_.optional => {
//                     switch ($[0]) {
//                         case 'valid': return _p.ss($, ($) => _p.decide.state($, ($): d_out.Value.data.concrete.type_.optional => {
//                             switch ($[0]) {
//                                 case 'set': return _p.ss($, ($) => ['set', Value($['child node'], abort)])
//                                 case 'not set': return _p.ss($, ($) => ['not set', null])
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         case 'invalid': return _p.ss($, ($) => abort(null))
//                         default: return _p.au($[0])
//                     }
//                 })]
//             }))
//             case 'reference': return _p.ss($, ($) => ({
//                 'type': ['text', {
//                     'value': _p.decide.state($['found value type'], ($) => {
//                         switch ($[0]) {
//                             case 'valid': return _p.ss($, ($) => $.instance.value)
//                             case 'invalid': return _p.ss($, ($) => abort(null))
//                             default: return _p.au($[0])
//                         }
//                     }),
//                     'delimiter': ['none', null],

//                 }]
//             }))
//             case 'state': return _p.ss($, ($) => ({
//                 'type': ['state', _p.decide.state($['found value type'], ($) => {
//                     switch ($[0]) {
//                         case 'valid': return _p.ss($, ($) => _p.decide.state($['value type'], ($) => {
//                             switch ($[0]) {
//                                 case 'state': return _p.ss($, ($) => _p.decide.state($['value substatus'], ($) => {
//                                     switch ($[0]) {
//                                         case 'missing data': return _p.ss($, ($) => ['missing data', null])
//                                         case 'set': return _p.ss($, ($) => ['set', Value($., abort)])
//                                         default: return _p.au($[0])
//                                     }
//                                 }))
//                                 default: return _p.au($[0])
//                             }
//                         }))
//                         case 'invalid': return _p.ss($, ($) => abort(null))

//                         default: return _p.au($[0])
//                     }
//                 })]
//             }))
//             case 'text': return _p.ss($, ($) => ({
//                 'type': ['text', {
//                     'value': _p.decide.state($['found value type'], ($) => {
//                         switch ($[0]) {
//                             case 'valid': return _p.ss($, ($) => $.instance.value)
//                             case 'invalid': return _p.ss($, ($) => abort(null))
//                             default: return _p.au($[0])
//                         }
//                     }),
//                     'delimiter': ['none', null],

//                 }]
//             }))
//             default: return _p.au($[0])
//         }
//     })
// }

// // export const Node = (
// //     $: d_in.Node,
// //     $p: null,
// //     abort: _pi.Abort<Error>
// // ): d_out.Value => {
// //     return {
// //         'metadata': {
// //             'comments': _p.list.literal(["FIXME COMMENTS"]),
// //         },
// //         'data': _p.decide.state($.type, ($): d_out.Value.data => {
// //             switch ($[0]) {

// //                 case 'component': return _pdev.implement_me("xx")
// //                 case 'dictionary': return _pdev.implement_me("xx")
// //                 case 'group': return _pdev.implement_me("xx")
// //                 case 'list': return _pdev.implement_me("xx")
// //                 case 'nothing': return _p.ss($, ($) => ['concrete', {
// //                     'type': ['nothing', null]
// //                 }])
// //                 case 'number': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
// //                     switch ($[0]) {
// //                         case 'valid': return _p.ss($, ($) => ['concrete', {
// //                             'type': ['text', {
// //                                 'value': "FIXME_NUMBER",
// //                                 'delimiter': ['none', null],

// //                             }]
// //                         }])
// //                         case 'invalid': return _p.ss($, ($) => abort(null))
// //                         default: return _p.au($[0])
// //                     }
// //                 }))
// //                 case 'optional': return _pdev.implement_me("xx")
// //                 case 'reference': return _pdev.implement_me("xx")
// //                 case 'state': return _pdev.implement_me("xx")
// //                 case 'text': return _p.ss($, ($): d_out.Value.data => ['concrete', {
// //                     'type': ['text', {
// //                         'value': "FIXME_TEXT",
// //                         'delimiter': ['none', null],

// //                     }]
// //                 }])
// //                 default: return _p.au($[0])
// //             }
// //         })
// //     }
// // }