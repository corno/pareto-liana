
import * as sh from "../../../../../shorthands/signatures"

export const $ = sh.signatures(
    {
        "Package": sh.sig.local({}, {}),
        "Presence": sh.sig.local({}, {}),
        "Simple Type": sh.sig.local({}, {}),
        "Text Type": sh.sig.local({}, {}),
        "Globals": sh.sig.local({}, {}),

        "Group": sh.sig.local(
            {
                "globals": sh.value_parameter("Globals", 'optional'),
                "imports": sh.value_parameter("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": sh.lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": sh.lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Dictionary": sh.sig.local(
            {
                "globals": sh.value_parameter("Globals", 'optional'),
                "imports": sh.value_parameter("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": sh.lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": sh.lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Value": sh.sig.local(
            {
                "globals": sh.value_parameter("Globals", 'optional'),
                "imports": sh.value_parameter("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": sh.lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": sh.lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Value Results": sh.sig.same_as("Value Reference"),

        "Option Constraints": sh.sig.same_as("Value Reference"),

        "Module": sh.sig.local(
            {
                "globals": sh.value_parameter("Globals", 'optional'),
                "imports": sh.value_parameter("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": sh.lookup_parameter("Modules"),
                "possibly circular dependent sibling modules": sh.lookup_parameter("Modules", 'cyclic'),
            }
        ),

        "Module Reference": sh.sig.local(
            {
                "imports": sh.value_parameter("Schema Imports", 'optional'),
            },
            {
                "modules": sh.lookup_parameter("Modules"),
            },
        ),
        "Value Reference": sh.sig.same_as("Module Reference"),

        "Value Path": sh.sig.local(
            {
                "module": sh.value_parameter("Module"),
            },
            {},
        ),
        "Schemas": sh.sig.local(
            {},
            {
                "sibling schemas": sh.lookup_parameter("Schemas", 'stack'),
            }
        ),


        "Resolver Value": sh.sig.local(
            {
                "definition": sh.value_parameter("Value"),
                "list cursor": sh.value_parameter("Resolver Value List Result", 'optional'),
                "linked entry": sh.value_parameter("Resolver Benchmark", 'optional'),
                "current dictionary": sh.value_parameter("Dictionary", 'optional'),
                "current ordered dictionary": sh.value_parameter("Dictionary", 'optional'),
                "signature": sh.value_parameter("Resolver Signature"),
                "schema imports": sh.value_parameter("Schema Imports", 'optional'),
                "resolver imports": sh.value_parameter("Resolver Imports", 'optional'),
                "signatures": sh.value_parameter("Resolver Signatures"),
                "modules": sh.value_parameter("Modules"),
                "option constraints": sh.value_parameter("Resolver Option Constraints", 'optional'),
            },
            {
                // "sibling property resolver stack": sh.lookup_parameter("Resolver Value Group", 'stack'),
                "sibling property resolvers": sh.lookup_parameter("Resolver Value Group"),
                "parent sibling property resolvers": sh.lookup_parameter("Resolver Value Group"),
            }
        ),

        "Resolver Possible Value Selection": sh.sig.same_as("Resolver Value"),
        "Resolver Guaranteed Value Selection": sh.sig.same_as("Resolver Value"),
        "Resolver Benchmark": sh.sig.same_as("Resolver Value"),
        "Resolver Optional Value Initialization": sh.sig.same_as("Resolver Value"),
        "Resolver Lookup Selection": sh.sig.same_as("Resolver Value"),
        "Resolver Option Constraints": sh.sig.same_as("Resolver Value"),

        "Resolver Value List Result": sh.sig.same_as("Module Reference"),
        "Resolver Value Group": sh.sig.local(
            {
                "definition": sh.value_parameter("Group"),
                "list cursor": sh.value_parameter("Resolver Value List Result", 'optional'),
                "linked entry": sh.value_parameter("Resolver Benchmark", 'optional'),
                "current dictionary": sh.value_parameter("Dictionary", 'optional'),
                "current ordered dictionary": sh.value_parameter("Dictionary", 'optional'),
                "signature": sh.value_parameter("Resolver Signature"),
                "schema imports": sh.value_parameter("Schema Imports", 'optional'),
                "resolver imports": sh.value_parameter("Resolver Imports", 'optional'),
                "signatures": sh.value_parameter("Resolver Signatures"),
                "modules": sh.value_parameter("Modules"),
                "option constraints": sh.value_parameter("Resolver Option Constraints", 'optional'),
            },
            {
                // "sibling property resolver stack": sh.lookup_parameter("Resolver Value Group", 'stack'),
                "sibling property resolvers": sh.lookup_parameter("Resolver Value Group"),
                "parent sibling property resolvers": sh.lookup_parameter("Resolver Value Group"),
            }
        ),

        "Resolver Relative Value Selection": sh.sig.local(
            {
                "value": sh.value_parameter("Value"),
            },
            {},
        ),
        "Resolver Constraint": sh.sig.same_as("Resolver Relative Value Selection"),
        "Resolver Optional Value Constraints": sh.sig.same_as("Resolver Relative Value Selection"),
        "Resolver Value Constraints": sh.sig.same_as("Resolver Relative Value Selection"),
        "Resolver Value Constraint": sh.sig.local(
            {},
            {
                "property constraints": sh.lookup_parameter("Resolver Value Constraints"),
            }
        ),

        "Resolver": sh.sig.local(
            {
                "modules": sh.value_parameter("Modules"),
                "resolver imports": sh.value_parameter("Resolver Imports"),
                "schema imports": sh.value_parameter("Schema Imports"),
            },
            {},
        ),
        "Resolver Signature Parameters": sh.sig.local(
            {
                "modules": sh.value_parameter("Modules"),
                "imports": sh.value_parameter("Schema Imports"),
            },
            {},
        ),

        "Resolver Signature": sh.sig.local(
            {
                "modules": sh.value_parameter("Modules"),
                "module": sh.value_parameter("Module"),
                "imports": sh.value_parameter("Schema Imports"),
            },
            {
                "sibling signatures": sh.lookup_parameter("Resolver Signatures"),
            },
        ),

        "Resolver Signatures": sh.sig.local(
            {
                "modules": sh.value_parameter("Modules"),
                "imports": sh.value_parameter("Schema Imports"),
            },
            {},
        ),

        "Resolver Modules": sh.sig.local(
            {
                "signatures": sh.value_parameter("Resolver Signatures"),
                "modules": sh.value_parameter("Modules"),
                "schema imports": sh.value_parameter("Schema Imports"),
                "resolver imports": sh.value_parameter("Resolver Imports"),
            },
            {},
        ),

        "Resolver Reference To Value Constraint": sh.sig.local(
            {},
            {
                "property constraints": sh.lookup_parameter("Resolver Value Constraints"),
            }
        ),
        "Resolver Imports": sh.sig.same_as("Schemas"),

        "Module Specification": sh.sig.local(
            {},
            {
            }
        ),

        "Schema Tree": sh.sig.local(
            {},
            {
                "sibling schemas": sh.lookup_parameter("Schemas", 'stack'),
            }
        ),
        "Schema": sh.sig.same_as("Schemas"),
        "Schema Imports": sh.sig.same_as("Schemas"),


        "Modules": sh.sig.local(
            {
                "globals": sh.value_parameter("Globals", 'optional'),
                "imports": sh.value_parameter("Schema Imports", 'optional'),
            },
            {},
        ),

    },
)