import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/to_be_generated/temp_unmashall_result"
// import * as d_out from "astn/dist/interface/generated/liana/schemas/authoring_target/data"

export type Error = null

// export const Node = (
//     $: d_in.Node,
//     $p: null,
//     abort: _pi.Abort<Error>
// ): d_out.Value => {
//     return {
//         'metadata': {
//             'comments': _p.list.literal(["FIXME COMMENTS"]),
//         },
//         'data': _p.decide.state($.type, ($): d_out.Value.data => {
//             switch ($[0]) {
//                 case 'boolean': return _p.ss($, ($): d_out.Value.data => ['concrete', {
//                     'type': ['text', {
//                         'value': "FIXME_BOOLEAN",
//                         'delimiter': ['none', null],

//                     }]
//                 }])
//                 case 'component': return _pdev.implement_me("xx")
//                 case 'dictionary': return _pdev.implement_me("xx")
//                 case 'group': return _pdev.implement_me("xx")
//                 case 'list': return _pdev.implement_me("xx")
//                 case 'nothing': return _p.ss($, ($) => ['concrete', {
//                     'type': ['nothing', null]
//                 }])
//                 case 'number': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
//                     switch ($[0]) {
//                         case 'valid': return _p.ss($, ($) => ['concrete', {
//                             'type': ['text', {
//                                 'value': "FIXME_NUMBER",
//                                 'delimiter': ['none', null],

//                             }]
//                         }])
//                         case 'invalid': return _p.ss($, ($) => abort(null))
//                         default: return _p.au($[0])
//                     }
//                 }))
//                 case 'optional': return _pdev.implement_me("xx")
//                 case 'reference': return _pdev.implement_me("xx")
//                 case 'state': return _pdev.implement_me("xx")
//                 case 'text': return _p.ss($, ($): d_out.Value.data => ['concrete', {
//                     'type': ['text', {
//                         'value': "FIXME_TEXT",
//                         'delimiter': ['none', null],

//                     }]
//                 }])
//                 default: return _p.au($[0])
//             }
//         })
//     }
// }