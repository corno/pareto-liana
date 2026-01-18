import * as _pi from 'pareto-core-interface'

import {
    signatures, sig, lookup_parameter, value_parameter,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

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
                "noncircular sibling types": lookup_parameter("Types"),
                "possibly circular dependent sibling types": lookup_parameter("Types", 'cyclic'),
            }
        ),

        "Dictionary": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling types": lookup_parameter("Types"),
                "possibly circular dependent sibling types": lookup_parameter("Types", 'cyclic'),
            }
        ),

        "Type Node": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling types": lookup_parameter("Types"),
                "possibly circular dependent sibling types": lookup_parameter("Types", 'cyclic'),
            }
        ),

        "Type": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "noncircular sibling types": lookup_parameter("Types"),
                "possibly circular dependent sibling types": lookup_parameter("Types", 'cyclic'),
            }
        ),

        "Type Reference": sig.local(
            {
                "imports": value_parameter("Imports", 'optional'),
            },
            {
                "types": lookup_parameter("Types"),
            },
        ),
        "Type Node Reference": sig.same_as("Type Reference"),


        "Node Resolver": sig.local(
            {
                "definition": value_parameter("Type Node"),
                "list cursor": value_parameter("Node Resolver List Result", 'optional'),
                "linked entry": value_parameter("Benchmark", 'optional'),
                "current dictionary": value_parameter("Dictionary", 'optional'),
                "current ordered dictionary": value_parameter("Dictionary", 'optional'),
                "signature": value_parameter("Signature"),
                "imports": value_parameter("Imports", 'optional'),
                "signatures": value_parameter("Signatures"),
                "types": value_parameter("Types"),
                "option constraints": value_parameter("Option Constraints", 'optional'),
            },
            {
                // "sibling property resolver stack": lookup_parameter("Node Resolver Group", 'stack'),
                "sibling property resolvers": lookup_parameter("Node Resolver Group"),
                "parent sibling property resolvers": lookup_parameter("Node Resolver Group"),
            }
        ),

        "Possible Value Selection": sig.same_as("Node Resolver"),
        "Guaranteed Value Selection": sig.same_as("Node Resolver"),
        "Benchmark": sig.same_as("Node Resolver"),
        "Optional Value Initialization": sig.same_as("Node Resolver"),
        "Lookup Selection": sig.same_as("Node Resolver"),
        "Option Constraints": sig.same_as("Node Resolver"),

        "Node Resolver List Result": sig.same_as("Type Reference"),
        "Node Resolver Group": sig.local(
            {
                "definition": value_parameter("Group"),
                "list cursor": value_parameter("Node Resolver List Result", 'optional'),
                "linked entry": value_parameter("Benchmark", 'optional'),
                "current dictionary": value_parameter("Dictionary", 'optional'),
                "current ordered dictionary": value_parameter("Dictionary", 'optional'),
                "signature": value_parameter("Signature"),
                "imports": value_parameter("Imports", 'optional'),
                "signatures": value_parameter("Signatures"),
                "types": value_parameter("Types"),
                "option constraints": value_parameter("Option Constraints", 'optional'),
            },
            {
                // "sibling property resolver stack": lookup_parameter("Node Resolver Group", 'stack'),
                "sibling property resolvers": lookup_parameter("Node Resolver Group"),
                "parent sibling property resolvers": lookup_parameter("Node Resolver Group"),
            }
        ),

        "Relative Value Selection": sig.local(
            {
                "node": value_parameter("Type Node"),
            },
            {},
        ),
        "Constraint": sig.same_as("Relative Value Selection"),
        "Property Constraints": sig.same_as("Relative Value Selection"),
        "Property Constraint": sig.local(
            {},
            {
                "property constraints": lookup_parameter("Property Constraints"),
            }
        ),

        "Resolve Logic": sig.local(
            {
                "types": value_parameter("Types"),
                "imports": value_parameter("Imports"),
            },
            {},
        ),
        "Signature Parameters": sig.same_as("Resolve Logic"),

        "Signature": sig.local(
            {
                "types": value_parameter("Types"),
                "type": value_parameter("Type"),
                "imports": value_parameter("Imports"),
            },
            {
                "sibling signatures": lookup_parameter("Signatures"),
            },
        ),

        "Signatures": sig.local(
            {
                "types": value_parameter("Types"),
                "imports": value_parameter("Imports"),
            },
            {},
        ),

        "Resolvers": sig.local(
            {
                "signatures": value_parameter("Signatures"),
                "types": value_parameter("Types"),
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

        "Type Specification": sig.local(
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

        "Reference To Property Constraint": sig.local(
            {},
            {
                "property constraints": lookup_parameter("Property Constraints"),
            }
        ),

        "Types": sig.local(
            {
                "globals": value_parameter("Globals", 'optional'),
                "imports": value_parameter("Imports", 'optional'),
            },
            {},
        ),

    },
)