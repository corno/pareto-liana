

import {
    signatures, sig, parameter,
} from "../../../../../shorthands/signatures/manual"


export const $ = signatures(
    {
        "Text Type": sig.local({}, {}),
        "Globals": sig.local({}, {}),

        "Value": sig.local(
            {
                "globals": parameter.module("Globals", 'optional'),
                "imports": parameter.module("Imports", 'optional'),
            },
            {
                "noncircular sibling modules": parameter.lookup("Modules"),
                "possibly circular dependent sibling modules": parameter.lookup("Modules", 'cyclic'),
            }
        ),

        "Schemas": sig.local(
            {},
            {
                "sibling schemas": parameter.lookup("Schemas", 'stack'),
            }
        ),

        "Schema Tree": sig.local(
            {},
            {
                "sibling schemas": parameter.lookup("Schemas", 'stack'),
            }
        ),
        "Schema": sig.same_as("Schemas"),
        "Imports": sig.same_as("Schemas"),

        "Modules": sig.local(
            {
                "globals": parameter.module("Globals", 'optional'),
                "imports": parameter.module("Imports", 'optional'),
            },
            {},
        ),

    },
)