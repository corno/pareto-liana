import * as _pi from 'pareto-core/dist/interface'

import {
    signatures, sig, lookup_parameter, value_parameter,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolve_Logic.signatures = signatures(
    {
        "Presence": sig.local({}, {}),
        "Number Type": sig.local({}, {}),
        "Text Type": sig.local({}, {}),
        "Globals": sig.local({}, {}),

        "Group": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling modules": lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Dictionary": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling modules": lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": lookup_parameter("Modules", 'cyclic'),
            }
        ),

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

        "Value Constraints": sig.same_as("Value Reference"),

        "Option Constraints": sig.same_as("Value Reference"),

        "Module": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling modules": lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Module Reference": sig.local(
            {
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "modules": lookup_parameter("Modules"),
            },
        ),
        "Value Reference": sig.same_as("Module Reference"),

        "Value Path": sig.local(
            {
                "module": value_parameter("Module"),
            },
            {},
        ),


        "Value Resolver": sig.local(
            {
                "definition": value_parameter("Value"),
                "list cursor": value_parameter("Value Resolver List Result", 'optional'),
                "linked entry": value_parameter("Benchmark", 'optional'),
                "current dictionary": value_parameter("Dictionary", 'optional'),
                "current ordered dictionary": value_parameter("Dictionary", 'optional'),
                "signature": value_parameter("Signature"),
                "imports": value_parameter("Imports", 'optional'),
                "signatures": value_parameter("Signatures"),
                "modules": value_parameter("Modules"),
                "option constraints": value_parameter("Option Constraint Resolvers", 'optional'),
            },
            {
                // "sibling property resolver stack": lookup_parameter("Value Resolver Group", 'stack'),
                "sibling property resolvers": lookup_parameter("Value Resolver Group"),
                "parent sibling property resolvers": lookup_parameter("Value Resolver Group"),
            }
        ),

        "Possible Value Selection": sig.same_as("Value Resolver"),
        "Guaranteed Value Selection": sig.same_as("Value Resolver"),
        "Benchmark": sig.same_as("Value Resolver"),
        "Optional Value Initialization": sig.same_as("Value Resolver"),
        "Lookup Selection": sig.same_as("Value Resolver"),
        "Option Constraint Resolvers": sig.same_as("Value Resolver"),

        "Value Resolver List Result": sig.same_as("Module Reference"),
        "Value Resolver Group": sig.local(
            {
                "definition": value_parameter("Group"),
                "list cursor": value_parameter("Value Resolver List Result", 'optional'),
                "linked entry": value_parameter("Benchmark", 'optional'),
                "current dictionary": value_parameter("Dictionary", 'optional'),
                "current ordered dictionary": value_parameter("Dictionary", 'optional'),
                "signature": value_parameter("Signature"),
                "imports": value_parameter("Imports", 'optional'),
                "signatures": value_parameter("Signatures"),
                "modules": value_parameter("Modules"),
                "option constraints": value_parameter("Option Constraint Resolvers", 'optional'),
            },
            {
                // "sibling property resolver stack": lookup_parameter("Value Resolver Group", 'stack'),
                "sibling property resolvers": lookup_parameter("Value Resolver Group"),
                "parent sibling property resolvers": lookup_parameter("Value Resolver Group"),
            }
        ),

        "Relative Value Selection": sig.local(
            {
                "value": value_parameter("Value"),
            },
            {},
        ),
        "Constraint": sig.same_as("Relative Value Selection"),
        "Value Constraint Resolvers": sig.same_as("Relative Value Selection"),
        "Value Constraint Resolver": sig.local(
            {},
            {
                "property constraints": lookup_parameter("Value Constraint Resolvers"),
            }
        ),

        "Resolve Logic": sig.local(
            {
                "modules": value_parameter("Modules"),
                "imports": value_parameter("Imports"),
            },
            {},
        ),
        "Signature Parameters": sig.same_as("Resolve Logic"),

        "Signature": sig.local(
            {
                "modules": value_parameter("Modules"),
                "module": value_parameter("Module"),
                "imports": value_parameter("Imports"),
            },
            {
                "sibling signatures": lookup_parameter("Signatures"),
            },
        ),

        "Signatures": sig.local(
            {
                "modules": value_parameter("Modules"),
                "imports": value_parameter("Imports"),
            },
            {},
        ),

        "Module Resolvers": sig.local(
            {
                "signatures": value_parameter("Signatures"),
                "modules": value_parameter("Modules"),
                "imports": value_parameter("Imports"),
            },
            {},
        ),

        "Schemas": sig.local(
            {},
            {
                "sibling schemas": lookup_parameter("Schemas", 'stack'),
            }
        ),

        "Module Specification": sig.local(
            {},
            {
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

        "Reference To Value Constraint Resolver": sig.local(
            {},
            {
                "property constraints": lookup_parameter("Value Constraint Resolvers"),
            }
        ),

        "Modules": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {},
        ),

    },
)