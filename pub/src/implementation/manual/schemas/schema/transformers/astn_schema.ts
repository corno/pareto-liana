import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import { _p_unreachable_code_path } from 'pareto-core/dist/unreachable_code_path'

import * as sh from 'pareto-core-shorthands/dist/unresolved_data'

import { $$ as op_flatten_dictionary } from "../../../../temp_flatten_dictionary"

import * as d_in from "../../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "../../../../../interface/generated/liana/schemas/astn_schema/data/unresolved"

export const Schema: _pi.Transformer<d_in.Schema, d_out.Schema> = (
    $
) => ({
    'globals': Globals($.globals),
    'imports': Imports($.imports),
    'types': sh.dictionary($.modules.__d_map(($) => Module($))),
})

export const Globals: _pi.Transformer<d_in.Globals, d_out.Globals> = (
    $
) => ({
    //FIXME!! merge the number types with the text types in here
    'text types': sh.dictionary(op_flatten_dictionary(
        _p.dictionary.literal({
            "t": $['text types'].__d_map(($) => {
                return Text_Type($)
            }),
            "n": $['number types'].__d_map(($) => {
                return {
                    'type': sh.state(['single line', null])
                }
            })
        }),
        {
            'separator': "",
        },
        () => _p_unreachable_code_path(),
    )),
})

export const Imports: _pi.Transformer<d_in.Imports, d_out.Imports> = (
    $
) => sh.dictionary($.__d_map(($) => ({
    'schema': null,
    'schema set child': sh.reference($['schema set child']['l id'])
})))

export const Module: _pi.Transformer<d_in.Module, d_out.Modules.l_dictionary.D.l_entry> = (
    $
) => ({
    'root value': Value($['root value'])
})

export const Value: _pi.Transformer<d_in.Value, d_out.Value> = (
    $
) => sh.state(_p.decide.state($, ($): d_out.Value.l_state => {
    switch ($[0]) {
        case 'number': return _p.ss($, ($): d_out.Value.l_state => ['text', sh.state(
            _p.decide.state($, ($): d_out.Value.l_state.text.l_state => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($) => ['global', sh.reference("n" + $['l id'])])
                    case 'local': return _p.ss($, ($) => ['local', {
                        'type': sh.state(['single line', null])
                    }])
                    default: return _p.au($[0])
                }
            })
        )])
        case 'boolean': return _p.ss($, ($) => ['text', sh.state<d_out.Value.l_state.text.l_state>(
            ['local', {
                'type': sh.state(['single line', null])
            }]
        )])
        case 'list': return _p.ss($, ($) => ['list', {
            'value': Value($.value)
        }])
        case 'nothing': return _p.ss($, ($) => ['nothing', null])
        case 'reference': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'derived': return _p.ss($, ($) => ['nothing', null])
                case 'selected': return _p.ss($, ($) => ['text', sh.state<d_out.Value.l_state.text.l_state>(['local', {
                    'type': sh.state(['single line', null])
                }])])
                default: return _p.au($[0])
            }
        }))
        case 'component': return _p.ss($, ($) => ['component', sh.state(_p.decide.state($.type, ($): d_out.Value.l_state.component.l_state => {
            switch ($[0]) {
                case 'external': return _p.ss($, ($) => ['external', {
                    'import': sh.reference($.import['l id']),
                    'type': sh.reference($.module['l id'])
                }])
                case 'internal acyclic': return _p.ss($, ($) => ['internal acyclic', sh.reference($['l id'])])
                case 'internal': return _p.ss($, ($) => ['internal', sh.reference($['l id'])])
                default: return _p.au($[0])
            }
        }))])
        case 'dictionary': return _p.ss($, ($) => ['dictionary', {
            'ordered': false,
            'value': Value($.value)
        }])
        case 'group': return _p.ss($, ($) => ['group', sh.dictionary($.__d_map(($) => Value($.value)))])
        case 'optional': return _p.ss($, ($) => ['optional', Value($)])
        case 'state': return _p.ss($, ($) => ['state', sh.dictionary($.options.__d_map(($) => Value($.value)))])
        case 'text': return _p.ss($, ($) => ['text', sh.state(_p.decide.state($, ($): d_out.Value.l_state.text.l_state => {
            switch ($[0]) {
                case 'global': return _p.ss($, ($) => ['global', sh.reference("t" + $['l id'])])
                case 'local': return _p.ss($, ($) => ['local', Text_Type($)])
                default: return _p.au($[0])
            }
        }))])
        // case 'type parameter': return _p.ss($, ($) => _pdev.implement_me("xx"))
        default: return _p.au($[0])
    }
}))

export const Text_Type: _pi.Transformer<d_in.Text_Type, d_out.Text_Type> = (
    $
) => ({
    'type': sh.state(_p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'multi line': return _p.ss($, ($) => ['multi line', null])
            case 'single line': return _p.ss($, ($) => ['single line', null])
            default: return _p.au($[0])
        }
    }))
})