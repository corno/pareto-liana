import * as _pdev from 'pareto-core-dev'
import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import {
    wrap_dictionary,
    wrap_state_group,
    wrap_reference,
} from 'pareto-core-internals/dist/algorithm_types/transformer/deprecated_shorthands_for_unresolved'

import { $$ as op_flatten_dictionaries } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"

import * as d_in from "../../../../../interface/generated/pareto/schemas/schema/data/resolved"
import * as d_out from "../../../../../interface/generated/pareto/schemas/astn_schema/data/unresolved"

export const Schema: _pi.Transformer<d_in.Schema, d_out.Schema> = (
    $
) => ({
    'globals': Globals($.globals),
    'imports': Imports($.imports),
    'types': wrap_dictionary($.types.__d_map(($) => Type($))),
})

export const Globals: _pi.Transformer<d_in.Globals, d_out.Globals> = (
    $
) => ({
    //FIXME!! merge the number types with the text types in here
    'text types': wrap_dictionary(op_flatten_dictionaries(
        _p.dictionary.literal({
            "t": $['text types'].__d_map(($) => {
                return Text_Type($)
            }),
            "n": $['number types'].__d_map(($) => {
                return {
                    'type': wrap_state_group(['single line', null])
                }
            })
        }),
        {
            'separator': "",
        },
        () => _p.unreachable_code_path(),
    )),
})

export const Imports: _pi.Transformer<d_in.Imports, d_out.Imports> = (
    $
) => wrap_dictionary($.__d_map(($) => ({
    'schema': null,
    'schema set child': wrap_reference($['schema set child'].key)
})))

export const Type: _pi.Transformer<d_in.Type, d_out.Type> = (
    $
) => ({
    'node': Type_Node($.node)
})

export const Type_Node: _pi.Transformer<d_in.Type_Node, d_out.Type_Node> = (
    $
) => wrap_state_group(_p.sg($, ($): d_out.Type_Node => {
    switch ($[0]) {
        case 'number': return _p.ss($, ($): d_out.Type_Node => ['text', wrap_state_group(_p.sg($, ($): d_out.Type_Node.text => {
            switch ($[0]) {
                case 'global': return _p.ss($, ($) => ['global', wrap_reference("n" + $.key)])
                case 'local': return _p.ss($, ($) => ['local', {
                    'type': wrap_state_group(['single line', null])
                }])
                default: return _p.au($[0])
            }
        }))]) //FIXME
        case 'boolean': return _p.ss($, ($) => ['text', wrap_state_group<d_out.Type_Node.text>(['local', {
            'type': wrap_state_group(['single line', null])
        }])])
        case 'list': return _p.ss($, ($) => ['list', {
            'node': Type_Node($.node)
        }])
        case 'nothing': return _p.ss($, ($) => ['nothing', null])
        case 'reference': return _p.ss($, ($) => _p.sg($.type, ($) => {
            switch ($[0]) {
                case 'derived': return _p.ss($, ($) => ['nothing', null])
                case 'selected': return _p.ss($, ($) => ['text', wrap_state_group<d_out.Type_Node.text>(['local', {
                    'type': wrap_state_group(['single line', null])
                }])])
                default: return _p.au($[0])
            }
        }))
        case 'component': return _p.ss($, ($) => ['component', wrap_state_group(_p.sg($, ($): d_out.Type_Node.component => {
            switch ($[0]) {
                case 'external': return _p.ss($, ($) => ['external', {
                    'import': wrap_reference($.import.key),
                    'type': wrap_reference($.type.key)
                }])
                case 'internal': return _p.ss($, ($) => ['internal', wrap_reference($.key)])
                case 'internal cyclic': return _p.ss($, ($) => ['internal cyclic', wrap_reference($.key)])
                default: return _p.au($[0])
            }
        }))])
        case 'dictionary': return _p.ss($, ($) => ['dictionary', {
            'ordered': $.ordered,
            'node': Type_Node($.node)
        }])
        case 'group': return _p.ss($, ($) => ['group', wrap_dictionary($.dictionary.__d_map(($) => Type_Node($.node)))])
        case 'optional': return _p.ss($, ($) => ['optional', Type_Node($)])
        case 'state group': return _p.ss($, ($) => ['state group', wrap_dictionary($.__d_map(($) => Type_Node($.node)))])
        case 'text': return _p.ss($, ($) => ['text', wrap_state_group(_p.sg($, ($): d_out.Type_Node.text => {
            switch ($[0]) {
                case 'global': return _p.ss($, ($) => ['global', wrap_reference("t" + $.key)])
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
    'type': wrap_state_group(_p.sg($.type, ($) => {
        switch ($[0]) {
            case 'multi line': return _p.ss($, ($) => ['multi line', null])
            case 'single line': return _p.ss($, ($) => ['single line', null])
            default: return _p.au($[0])
        }
    }))
})