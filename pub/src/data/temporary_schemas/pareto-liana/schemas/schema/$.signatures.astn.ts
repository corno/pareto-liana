import * as _pi from 'pareto-core/dist/interface'

import {
    signatures, sig, lookup_parameter, value_parameter,
} from "../../../../../shorthands/signatures"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolver.signatures = signatures(
    {
        "Package": sig.local({}, {}),
        "Presence": sig.local({}, {}),
        "Number Type": sig.local({}, {}),
        "Text Type": sig.local({}, {}),
        "Globals": sig.local({}, {}),

        "Group": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Dictionary": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Value": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Value Results": sig.same_as("Value Reference"),

        "Option Constraints": sig.same_as("Value Reference"),

        "Module": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Module Reference": sig.local(
            {
                "imports": value_parameter("Schema Imports", 'optional'),
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


        "Resolver Value": sig.local(
            {
                "definition": value_parameter("Value"),
                "list cursor": value_parameter("Value Resolver List Result", 'optional'),
                "linked entry": value_parameter("Resolver Benchmark", 'optional'),
                "current dictionary": value_parameter("Dictionary", 'optional'),
                "current ordered dictionary": value_parameter("Dictionary", 'optional'),
                "signature": value_parameter("Resolver Signature"),
                "schema imports": value_parameter("Schema Imports", 'optional'),
                "resolver imports": value_parameter("Resolver Imports", 'optional'),
                "signatures": value_parameter("Resolver Signatures"),
                "modules": value_parameter("Modules"),
                "option constraints": value_parameter("Resolver Option Constraints", 'optional'),
            },
            {
                // "sibling property resolver stack": lookup_parameter("Value Resolver Group", 'stack'),
                "sibling property resolvers": lookup_parameter("Value Resolver Group"),
                "parent sibling property resolvers": lookup_parameter("Value Resolver Group"),
            }
        ),

        "Resolver Possible Value Selection": sig.same_as("Resolver Value"),
        "Resolver Guaranteed Value Selection": sig.same_as("Resolver Value"),
        "Resolver Benchmark": sig.same_as("Resolver Value"),
        "Resolver Optional Value Initialization": sig.same_as("Resolver Value"),
        "Resolver Lookup Selection": sig.same_as("Resolver Value"),
        "Resolver Option Constraints": sig.same_as("Resolver Value"),

        "Value Resolver List Result": sig.same_as("Module Reference"),
        "Value Resolver Group": sig.local(
            {
                "definition": value_parameter("Group"),
                "list cursor": value_parameter("Value Resolver List Result", 'optional'),
                "linked entry": value_parameter("Resolver Benchmark", 'optional'),
                "current dictionary": value_parameter("Dictionary", 'optional'),
                "current ordered dictionary": value_parameter("Dictionary", 'optional'),
                "signature": value_parameter("Resolver Signature"),
                "schema imports": value_parameter("Schema Imports", 'optional'),
                "resolver imports": value_parameter("Resolver Imports", 'optional'),
                "signatures": value_parameter("Resolver Signatures"),
                "modules": value_parameter("Modules"),
                "option constraints": value_parameter("Resolver Option Constraints", 'optional'),
            },
            {
                // "sibling property resolver stack": lookup_parameter("Value Resolver Group", 'stack'),
                "sibling property resolvers": lookup_parameter("Value Resolver Group"),
                "parent sibling property resolvers": lookup_parameter("Value Resolver Group"),
            }
        ),

        "Resolver Relative Value Selection": sig.local(
            {
                "value": value_parameter("Value"),
            },
            {},
        ),
        "Resolver Constraint": sig.same_as("Resolver Relative Value Selection"),
        "Optional Value Constraint Resolvers": sig.same_as("Resolver Relative Value Selection"),
        "Resolver Value Constraints": sig.same_as("Resolver Relative Value Selection"),
        "Value Constraint Resolver": sig.local(
            {},
            {
                "property constraints": lookup_parameter("Resolver Value Constraints"),
            }
        ),

        "Resolver": sig.local(
            {
                "modules": value_parameter("Modules"),
                "resolver imports": value_parameter("Resolver Imports"),
                "schema imports": value_parameter("Schema Imports"),
            },
            {},
        ),
        "Resolver Signature Parameters": sig.local(
            {
                "modules": value_parameter("Modules"),
                "imports": value_parameter("Schema Imports"),
            },
            {},
        ),

        "Resolver Signature": sig.local(
            {
                "modules": value_parameter("Modules"),
                "module": value_parameter("Module"),
                "imports": value_parameter("Schema Imports"),
            },
            {
                "sibling signatures": lookup_parameter("Resolver Signatures"),
            },
        ),

        "Resolver Signatures": sig.local(
            {
                "modules": value_parameter("Modules"),
                "imports": value_parameter("Schema Imports"),
            },
            {},
        ),

        "Resolver Modules": sig.local(
            {
                "signatures": value_parameter("Resolver Signatures"),
                "modules": value_parameter("Modules"),
                "schema imports": value_parameter("Schema Imports"),
                "resolver imports": value_parameter("Resolver Imports"),
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
        "Schema Imports": sig.same_as("Schemas"),
        "Resolver Imports": sig.same_as("Schemas"),

        "Reference To Value Constraint Resolver": sig.local(
            {},
            {
                "property constraints": lookup_parameter("Resolver Value Constraints"),
            }
        ),

        "Modules": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Schema Imports", 'optional'),
            },
            {},
        ),

    },
)