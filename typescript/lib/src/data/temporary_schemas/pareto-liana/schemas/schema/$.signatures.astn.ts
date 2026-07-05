
import * as sh from "../../../../../shorthands/signatures/manual.js"

export const $ = sh.signatures(
    {
        "Package": sh.sig.local({}, {}),
        "Presence": sh.sig.local({}, {}),
        "Simple Type": sh.sig.local({}, {}),
        "Text Type": sh.sig.local({}, {}),
        "Globals": sh.sig.local({}, {}),

        "Group": sh.sig.local(
            {
                "globals": sh.parameter.module("Globals", 'optional'),
                "imports": sh.parameter.module("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": sh.parameter.lookup("Modules"),
                "possibly circular dependent sibling modules": sh.parameter.lookup("Modules", 'cyclic'),
            }
        ),

        "Dictionary": sh.sig.local(
            {
                "globals": sh.parameter.module("Globals", 'optional'),
                "imports": sh.parameter.module("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": sh.parameter.lookup("Modules"),
                "possibly circular dependent sibling modules": sh.parameter.lookup("Modules", 'cyclic'),
            }
        ),

        "Value": sh.sig.local(
            {
                "globals": sh.parameter.module("Globals", 'optional'),
                "imports": sh.parameter.module("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": sh.parameter.lookup("Modules"),
                "possibly circular dependent sibling modules": sh.parameter.lookup("Modules", 'cyclic'),
            }
        ),

        "Value Results": sh.sig.same_as("Value Reference"),

        "Option Constraints": sh.sig.same_as("Value Reference"),

        "Module": sh.sig.local(
            {
                "globals": sh.parameter.module("Globals", 'optional'),
                "imports": sh.parameter.module("Schema Imports", 'optional'),
            },
            {
                "noncircular sibling modules": sh.parameter.lookup("Modules"),
                "possibly circular dependent sibling modules": sh.parameter.lookup("Modules", 'cyclic'),
            }
        ),

        "Module Reference": sh.sig.local(
            {
                "imports": sh.parameter.module("Schema Imports", 'optional'),
            },
            {
                "modules": sh.parameter.lookup("Modules"),
            },
        ),
        "Value Reference": sh.sig.same_as("Module Reference"),

        "Value Path": sh.sig.local(
            {
                "module": sh.parameter.module("Module"),
            },
            {},
        ),
        "Schemas": sh.sig.local(
            {},
            {
                "sibling schemas": sh.parameter.lookup("Schemas", 'stack'),
            }
        ),


        "Resolver Value": sh.sig.local(
            {
                "definition": sh.parameter.module("Value"),
                "list cursor": sh.parameter.module("Resolver Value List Result", 'optional'),
                "linked entry": sh.parameter.module("Resolver Benchmark", 'optional'),
                "current dictionary": sh.parameter.module("Dictionary", 'optional'),
                "current ordered dictionary": sh.parameter.module("Dictionary", 'optional'),
                "signature": sh.parameter.module("Resolver Signature"),
                "schema imports": sh.parameter.module("Schema Imports", 'optional'),
                "resolver imports": sh.parameter.module("Resolver Imports", 'optional'),
                "signatures": sh.parameter.module("Resolver Signatures"),
                "modules": sh.parameter.module("Modules"),
                "option constraints": sh.parameter.module("Resolver Option Constraints", 'optional'),
            },
            {
                // "sibling property resolver stack": sh.parameter.lookup("Resolver Value Group", 'stack'),
                "sibling property resolvers": sh.parameter.lookup("Resolver Value Group"),
                "parent sibling property resolvers": sh.parameter.lookup("Resolver Value Group"),
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
                "definition": sh.parameter.module("Group"),
                "list cursor": sh.parameter.module("Resolver Value List Result", 'optional'),
                "linked entry": sh.parameter.module("Resolver Benchmark", 'optional'),
                "current dictionary": sh.parameter.module("Dictionary", 'optional'),
                "current ordered dictionary": sh.parameter.module("Dictionary", 'optional'),
                "signature": sh.parameter.module("Resolver Signature"),
                "schema imports": sh.parameter.module("Schema Imports", 'optional'),
                "resolver imports": sh.parameter.module("Resolver Imports", 'optional'),
                "signatures": sh.parameter.module("Resolver Signatures"),
                "modules": sh.parameter.module("Modules"),
                "option constraints": sh.parameter.module("Resolver Option Constraints", 'optional'),
            },
            {
                // "sibling property resolver stack": sh.parameter.lookup("Resolver Value Group", 'stack'),
                "sibling property resolvers": sh.parameter.lookup("Resolver Value Group"),
                "parent sibling property resolvers": sh.parameter.lookup("Resolver Value Group"),
            }
        ),

        "Resolver Relative Value Selection": sh.sig.local(
            {
                "value": sh.parameter.module("Value"),
            },
            {},
        ),
        "Resolver Constraint": sh.sig.same_as("Resolver Relative Value Selection"),
        "Resolver Optional Value Constraints": sh.sig.same_as("Resolver Relative Value Selection"),
        "Resolver Value Constraints": sh.sig.same_as("Resolver Relative Value Selection"),
        "Resolver Value Constraint": sh.sig.local(
            {},
            {
                "property constraints": sh.parameter.lookup("Resolver Value Constraints"),
            }
        ),

        "Resolver": sh.sig.local(
            {
                "modules": sh.parameter.module("Modules"),
                "resolver imports": sh.parameter.module("Resolver Imports"),
                "schema imports": sh.parameter.module("Schema Imports"),
            },
            {},
        ),
        "Resolver Signature Parameters": sh.sig.local(
            {
                "modules": sh.parameter.module("Modules"),
                "imports": sh.parameter.module("Schema Imports"),
            },
            {},
        ),

        "Resolver Signature": sh.sig.local(
            {
                "modules": sh.parameter.module("Modules"),
                "module": sh.parameter.module("Module"),
                "imports": sh.parameter.module("Schema Imports"),
            },
            {
                "sibling signatures": sh.parameter.lookup("Resolver Signatures"),
            },
        ),

        "Resolver Signatures": sh.sig.local(
            {
                "modules": sh.parameter.module("Modules"),
                "imports": sh.parameter.module("Schema Imports"),
            },
            {},
        ),

        "Resolver Modules": sh.sig.local(
            {
                "signatures": sh.parameter.module("Resolver Signatures"),
                "modules": sh.parameter.module("Modules"),
                "schema imports": sh.parameter.module("Schema Imports"),
                "resolver imports": sh.parameter.module("Resolver Imports"),
            },
            {},
        ),

        "Resolver Reference To Value Constraint": sh.sig.local(
            {},
            {
                "property constraints": sh.parameter.lookup("Resolver Value Constraints"),
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
                "sibling schemas": sh.parameter.lookup("Schemas", 'stack'),
            }
        ),
        "Schema": sh.sig.same_as("Schemas"),
        "Schema Imports": sh.sig.same_as("Schemas"),


        "Modules": sh.sig.local(
            {
                "globals": sh.parameter.module("Globals", 'optional'),
                "imports": sh.parameter.module("Schema Imports", 'optional'),
            },
            {},
        ),

    },
)