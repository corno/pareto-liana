import * as sh from "../../../../../shorthands/signatures/manual.js"

export const $ = sh.signatures(
    {
        "Text Type": sh.sig.local({}, {}),
        "Globals": sh.sig.local({}, {}),

        "Value": sh.sig.local(
            {
                "globals": sh.parameter.module("Globals", 'optional'),
                "imports": sh.parameter.module("Imports", 'optional'),
            },
            {
                "noncircular sibling modules": sh.parameter.lookup("Modules"),
                "possibly circular dependent sibling modules": sh.parameter.lookup("Modules", 'cyclic'),
            }
        ),

        "Schemas": sh.sig.local(
            {},
            {
                "sibling schemas": sh.parameter.lookup("Schemas", 'stack'),
            }
        ),

        "Schema Tree": sh.sig.local(
            {},
            {
                "sibling schemas": sh.parameter.lookup("Schemas", 'stack'),
            }
        ),
        "Schema": sh.sig.same_as("Schemas"),
        "Imports": sh.sig.same_as("Schemas"),

        "Modules": sh.sig.local(
            {
                "globals": sh.parameter.module("Globals", 'optional'),
                "imports": sh.parameter.module("Imports", 'optional'),
            },
            {},
        ),

    },
)