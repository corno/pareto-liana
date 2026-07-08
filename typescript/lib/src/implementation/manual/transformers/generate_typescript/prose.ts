import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../../interface/data/generate_typescript.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

export namespace interface_ {
    export type Error = p_i.Transformer<
        d_in.Error,
        d_out.Phrase
    >
}

//dependencies
import * as t_resolve_to_prose from "liana-core/implementation/manual/transformers/resolve/prose"
import * as t_deserialize_to_prose from "liana-core/implementation/manual/transformers/deserialize/prose"
import * as t_read_file_to_prose from "pareto-filesystem-unrestricted-api/implementation/manual/transformers/read_file/prose"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Error: interface_.Error = ($) => {
    return p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'could not read source': return p_.option($, ($) => sh.ph.composed([
                    sh.ph.literal("could not read source"),
                    t_read_file_to_prose.Error($)
                ]))
                case 'could not log': return p_.option($, ($) => sh.ph.literal("could not log"))
                case 'could not remove interface': return p_.option($, ($) => sh.ph.literal("could not remove interface"))
                case 'could not remove implementation': return p_.option($, ($) => sh.ph.literal("could not remove implementation"))
                case 'could not write interface': return p_.option($, ($) => sh.ph.literal("could not write interface"))
                case 'could not write implementation': return p_.option($, ($) => sh.ph.literal("could not write implementation"))
                case 'could not copy generic implementation': return p_.option($, ($) => sh.ph.literal("could not copy generic implementation"))
                case 'could not copy core interface': return p_.option($, ($) => sh.ph.literal("could not copy core interface"))
                case 'could not resolve module': return p_.option($, ($) => sh.ph.composed([
                    t_resolve_to_prose.Error(
                        $.error,
                    )
                ]))
                case 'could not deserialize': return p_.option($, ($) => sh.ph.composed([
                    t_deserialize_to_prose.Error(
                        $.error,
                    )
                ]))
                default: return p_.exhaustive($[0])
            }
        })
}