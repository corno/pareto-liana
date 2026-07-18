import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../interface/schemas/serialize_schemas.js"
import * as s_out from "../../../interface/schemas/paragraph.js"


//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

//dependencies
import * as ser_resolving from "liana-core/modules/resolved_document_deserialization/implementation/serializers/resolving"
import * as ser_write_file from "pareto-filesystem-unrestricted-api/modules/unrestricted/implementation/serializers/write_file"
import * as ser_location from "astn-core/modules/deserialization/implementation/serializers/location"

export const Error: p_.Transformer_With_Parameter<
    s_in.Error,
    s_out.Phrase,
    {
        'id': string
    }
> = ($, $p) => sh.ph.composed([
    sh.ph.text("Error serializing schema for module '"),
    sh.ph.text($p.id),
    sh.ph.text("': "),
    p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'resolving': return p_.ss($, ($) => sh.ph.composed([
                    sh.ph.text(
                        ser_location.Range(
                            $.location,
                            {
                                'character location reporting': ['one based', null]
                            }
                        )
                    ),
                    sh.ph.text(": "),
                    sh.ph.text(
                        ser_resolving.Error(
                            $,
                        )
                    )
                ]))
                case 'error writing file': return p_.ss($, ($) => sh.ph.text(ser_write_file.Error($)))
                default: return p_.exhaustive($[0])
            }
        })
])