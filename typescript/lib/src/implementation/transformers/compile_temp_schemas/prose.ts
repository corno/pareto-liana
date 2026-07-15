import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "../../../interface/schemas/compile_temp_schemas.js"
namespace declarations {
    export type Error = p_.Transformer_With_Parameter<
        s_in.Error,
        s_out.Phrase,
        s_parameters.Parameters
    >
}

//dependencies
import * as t_resolve_to_prose from "liana-core/implementation/transformers/resolve/prose"
import * as t_location_to_prose from "liana-core/implementation/transformers/location/prose"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose_simple/deprecated"

export const Error: declarations.Error = ($, $p) => sh.ph.composed([
    sh.ph.text("error in package '"),
    sh.ph.text($p.id),
    sh.ph.text("': "),
    p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'could not log': return p_.option($, ($) => sh.ph.text("could not log"))
                case 'could not remove interface': return p_.option($, ($) => sh.ph.text("could not remove interface"))
                case 'could not remove implementation': return p_.option($, ($) => sh.ph.text("could not remove implementation"))
                case 'could not write interface': return p_.option($, ($) => sh.ph.text("could not write interface"))
                case 'could not write implementation': return p_.option($, ($) => sh.ph.text("could not write implementation"))
                case 'could not copy generic implementation': return p_.option($, ($) => sh.ph.text("could not copy generic implementation"))
                case 'could not copy core interface': return p_.option($, ($) => sh.ph.text("could not copy core interface"))
                case 'could not deserialize module': return p_.option($, ($) => sh.ph.composed([
                    t_location_to_prose.Range(
                        $.location,
                        {
                            'document resource identifier': "unknown DRI",
                            'character location reporting': ['one based', null],
                        }
                    ),
                    sh.ph.text(": "),
                    t_resolve_to_prose.Error(
                        $,
                    )
                ]))
                default: return p_.exhaustive($[0])
            }
        })
])