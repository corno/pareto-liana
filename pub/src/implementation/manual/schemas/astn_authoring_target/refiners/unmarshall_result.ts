import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

import * as d_in from "../../../../../interface/to_be_generated/temp_unmashall_result"
import * as d_out from "astn/dist/interface/generated/pareto/schemas/authoring_target/data"

export type Error = null

export const Node = (
    $: d_in.Node,
    $p: null,
    abort: _pi.Abort<Error>
): d_out.Value => {
    return {
        'type': _p.sg($.type, ($) => {
            switch ($[0]) {
                case 'boolean': return _p.ss($, ($): d_out.Value._type => ['text', {
                    'value': "FIXME_BOOLEAN",
                    'delimiter': ['none', null],

                }])
                case 'component': return _pdev.implement_me("xx")
                case 'dictionary': return _pdev.implement_me("xx")
                case 'group': return _pdev.implement_me("xx")
                case 'list': return _pdev.implement_me("xx")
                case 'nothing': return _p.ss($, ($) => ['nothing', null])
                case 'number': return _p.ss($, ($): d_out.Value._type => _p.sg($['found value type'], ($) => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => ['text', {
                            'value': $.value.value,
                            'delimiter': ['none', null],
                        }])
                        case 'invalid': return _p.ss($, ($) => abort(null))
                        default: return _p.au($[0])
                    }
                }))
                case 'optional': return _pdev.implement_me("xx")
                case 'reference': return _pdev.implement_me("xx")
                case 'state group': return _pdev.implement_me("xx")
                case 'text': return _p.ss($, ($): d_out.Value._type => ['text', {
                    'value': "FIXME_TEXT",
                    'delimiter': ['none', null],

                }])
                default: return _p.au($[0])
            }
        })
    }
}