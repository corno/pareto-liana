import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_di from 'pareto-core/dist/data/interface'
import * as p_ti from 'pareto-core/dist/transformer/interface'
import p_unreachable_code_path from 'pareto-core/dist/specials/unreachable_code_path'

import * as sh from 'pareto-core-shorthands/dist/unresolved_data'

import * as d_in from "../../../../interface/generated/liana/schemas/schema/data/resolved"
import * as d_out from "../../../../interface/generated/liana/schemas/astn_schema/data/unresolved"

export const Schema: p_ti.Transformer<d_in.Schema, d_out.Schema> = (
    $
) => ({
    'globals': Globals($.globals),
    'imports': Schema_Imports($['schema imports']),
    'types': sh.dictionary($.modules.__d_map(($) => Module($))),
})

export const Globals: p_ti.Transformer<d_in.Globals, d_out.Globals> = (
    $
) => ({
    //FIXME!! merge the number types with the text types in here
    "text types": sh.dictionary(
        pt.dictionary.from.dictionary(
            pt.dictionary.literal({
                "t": $['text types'].__d_map(($) => {
                    return Text_Type($)
                }),
                "n": $['simple types'].__d_map(($): d_out.Text_Type => {
                    return {
                        'type': sh.state(['single line', null])
                    }
                })
            }),
        ).flatten(
            ($) => $,
            (parent_id, child_id) => parent_id + child_id,
            {
                duplicate_id: () => p_unreachable_code_path("the root dictionary keys are fixed; 't' and 'n'"),
            }

        )
    ),
})

export const Schema_Imports: p_ti.Transformer<d_in.Schema_Imports, d_out.Imports> = (
    $
) => sh.dictionary($.__d_map(($) => ({
    'schema': null,
    'schema set child': sh.reference($['schema set child']['l value']['l id'])
})))

export const Module: p_ti.Transformer<d_in.Module, d_out.Modules.l_dictionary.D.l_entry> = (
    $
) => ({
    'root value': Value($['root value'])
})

export const Value: p_ti.Transformer<d_in.Value, d_out.Value> = (
    $
) => sh.state(pt.decide.state($, ($): d_out.Value.l_state => {
    switch ($[0]) {
        case 'simple': return pt.ss($, ($): d_out.Value.l_state => ['text', sh.state(
            pt.decide.state($, ($): d_out.Value.l_state.text.l_state => {
                switch ($[0]) {
                    case 'global': return pt.ss($, ($) => ['global', sh.reference("n" + $['l id'])])

                    default: return pt.au($[0])
                }
            })
        )])
        case 'list': return pt.ss($, ($) => ['list', {
            'value': Value($.value)
        }])
        case 'nothing': return pt.ss($, ($) => ['nothing', null])
        case 'reference': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
            switch ($[0]) {
                case 'derived': return pt.ss($, ($) => ['nothing', null])
                case 'selected': return pt.ss($, ($) => ['text', sh.state<d_out.Value.l_state.text.l_state>(['local', {
                    'type': sh.state(['single line', null])
                }])])
                default: return pt.au($[0])
            }
        }))
        case 'component': return pt.ss($, ($) => ['component', sh.state(pt.decide.state($.type, ($): d_out.Value.l_state.component.l_state => {
            switch ($[0]) {
                case 'external': return pt.ss($, ($) => ['external', {
                    'import': sh.reference($.import['l id']),
                    'type': sh.reference($.module['l id'])
                }])
                case 'internal acyclic': return pt.ss($, ($) => ['internal acyclic', sh.reference($['l id'])])
                case 'internal': return pt.ss($, ($) => ['internal', sh.reference($['l id'])])
                default: return pt.au($[0])
            }
        }))])
        case 'dictionary': return pt.ss($, ($) => ['dictionary', {
            'ordered': false,
            'value': Value($.value)
        }])
        case 'group': return pt.ss($, ($) => ['group', sh.dictionary($.__d_map(($) => Value($.value)))])
        case 'optional': return pt.ss($, ($) => ['optional', Value($)])
        case 'state': return pt.ss($, ($) => ['state', sh.dictionary($.options.__d_map(($) => Value($.value)))])
        case 'text': return pt.ss($, ($) => ['text', sh.state(pt.decide.state($, ($): d_out.Value.l_state.text.l_state => {
            switch ($[0]) {
                case 'global': return pt.ss($, ($) => ['global', sh.reference("t" + $['l id'])])
                case 'local': return pt.ss($, ($) => ['local', Text_Type($)])
                default: return pt.au($[0])
            }
        }))])
        // case 'type parameter': return pt.ss($, ($) => p_implement_me("xx"))
        default: return pt.au($[0])
    }
}))

export const Text_Type: p_ti.Transformer<d_in.Text_Type, d_out.Text_Type> = (
    $
) => ({
    'type': sh.state(pt.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'multi line': return pt.ss($, ($) => ['multi line', null])
            case 'single line': return pt.ss($, ($) => ['single line', null])
            default: return pt.au($[0])
        }
    }))
})