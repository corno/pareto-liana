import * as p_di from 'pareto-core/dist/data/interface'

import {
    signatures, sig, lookup_parameter, value_parameter,
} from "../../../../../shorthands/signatures"


export const $ = signatures(
    {
        "Text Type": sig.local({}, {}),
        "Globals": sig.local({}, {}),

        "Value": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling modules": lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Schemas": sig.local(
            {},
            {
                "sibling schemas": lookup_parameter("Schemas", 'stack'),
            }
        ),

        "Schema Tree": sig.local(
            {},
            {
                "sibling schemas": lookup_parameter("Schemas", 'stack'),
            }
        ),
        "Schema": sig.same_as("Schemas"),
        "Imports": sig.same_as("Schemas"),

        "Modules": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {},
        ),

    },
)