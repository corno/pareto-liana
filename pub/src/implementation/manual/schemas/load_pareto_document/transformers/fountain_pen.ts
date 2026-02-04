import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/to_be_generated/load_pareto_document"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

export namespace signatures {
    export type Error = _pi.Transformer<d_in.Error, d_out.Block_Part>
}

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


import * as d_liana_deserialize from "../../../../../interface/to_be_generated/deserialize_schema"
import * as d_unmarshall from "../../../../../interface/generated/liana/generic/unmarshall"
import * as d_resolve from "../../../../../interface/generated/liana/generic/resolve"

//dependencies
import * as t_deserialize_parse_tree_to_fountain_pen from "astn-core/dist/implementation/manual/schemas/deserialize_parse_tree/transformers/fountain_pen"


export const Resolve_Error = ($: d_resolve.Error): d_out.Block_Part => _p.decide.state($.type, ($) => {
    switch ($[0]) {
        case 'constraint': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'state': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("state constraint violated, expected '"),
                    sh.b.literal($.expected),
                    sh.b.literal("', but found '"),
                    sh.b.literal($.found),
                    sh.b.literal("'")
                ]))
                case 'missingoptional value': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("the optional value to which this state is constrained is not set")
                ]))
                case 'same node': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("the value is expected to be the same as another node, but it is not ("),
                    sh.b.literal($),
                    sh.b.literal(")")
                ]))
                default: return _p.au($[0])
            }
        }))
        case 'lookup': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'cycle detected': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("cycle detected in references")
                ]))
                case 'no context lookup': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("there is no context lookup to lookup this reference in")
                ]))
                case 'no such entry': return _p.ss($, ($) => sh.b.sub([
                    sh.b.literal("the referenced dictionary does not contain an entry named '"),
                    sh.b.literal($),
                    sh.b.literal("'")
                ]))
                default: return _p.au($[0])
            }
        }))
        case 'missing required entries': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("the following required entries are missing: "),
            sh.b.indent([
                sh.g.list($.__to_list(($, key) => sh.g.nested_block([
                    sh.b.literal("'"),
                    sh.b.literal(key),
                    sh.b.literal("'")
                ])) )
            ])
        ]))
        default: return _p.au($[0])
    }
})


export const Unmarshall_Error = ($: d_unmarshall.Error): d_out.Block_Part => _p.decide.state($, ($) => {
    switch ($[0]) {

        case 'expected a dictionary': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("expected a dictionary")
        ]))
        case 'expected a group': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("expected a group")
        ]))
        case 'expected a list': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("expected a list")
        ]))
        case 'expected a nothing': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("expected a nothing ( ~ )")
        ]))
        case 'expected an optional': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("expected an optional ( ~ or * -value- )")
        ]))
        case 'expected a state': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("expected a state ( one of the allowed options )")
        ]))
        case 'expected a text': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("expected a text")
        ]))
        case 'not a valid number': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("not a valid number")
        ]))
        case 'not a valid boolean': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("not a valid boolean")
        ]))
        case 'no such entry': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("no such entry: '"),
            sh.b.literal($),
            sh.b.literal("'")
        ]))
        case 'unknown option': return _p.ss($, ($) => sh.b.sub([
            sh.b.literal("unknown option: '"),
            sh.b.literal($),
            sh.b.literal("'")
        ]))
        default: return _p.au($[0])
    }
})

export const Liana_Error = ($: d_liana_deserialize.Error): d_out.Block_Part => _p.decide.state($, ($) => {
    switch ($[0]) {

        case 'parse error': return _p.ss($, ($) => t_deserialize_parse_tree_to_fountain_pen.Error($, { 'position info': ['zero based', null] }))
        case 'unmarshall error': return _p.ss($, ($) => Unmarshall_Error($))
        case 'resolve errorx': return _p.ss($, ($) => Resolve_Error($))
        default: return _p.au($[0])
    }
})

export const Error: signatures.Error = ($) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'no schema file': return _p.ss($, ($) => sh.b.literal("no schema file @ ${$['file location']}"))
        case 'deserialize': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {

                case 'schema error': return _p.ss($, ($) => {
                    return sh.b.sub([
                        sh.b.literal("error in schema @ ${$['file location']}: "),
                        Liana_Error($.error)
                    ])
                })
                case 'unmarshall error': return _p.ss($, ($) => sh.b.literal("error during marshalling (TBD)"))
                case 'parse error': return _p.ss($, ($) => t_deserialize_parse_tree_to_fountain_pen.Error($, { 'position info': ['zero based', null] }))
                default: return _p.au($[0])
            }
        }))
        default: return _p.au($[0])
    }
})