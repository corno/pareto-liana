import * as _pi from 'pareto-core-interface'

import { signatures, sig, value_parameter, lookup_parameter, sig_params } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Resolve_Logic.signatures = signatures(
    {
        "Fiscaal": sig.local({}, {}),
        "Grootboekrekeningen": sig.local({}, {}),

        "Grootboek Categorieen": sig.local({
            "Fiscaal": value_parameter("Fiscaal"),
        }, {
        }),
        
        "Beheer": sig.local({
            "Grootboek Categorieen": value_parameter("Grootboek Categorieen"),
        }, {}),

        "Jaarbeheer": sig.local({
            "Eerste boekjaar": value_parameter("Eerste boekjaar"),
            "Grootboekrekeningen": value_parameter("Grootboekrekeningen"),
        }, {
            "Jaren": lookup_parameter("Jaren"),
        }),
        "Overige balans item": sig.same_as("Jaarbeheer"),

        "Verwijzing naar Informele rekening": sig.local({
            "Jaarbeheer": value_parameter("Jaarbeheer")
        }, {}),
        "Verwijzing naar Bankrekening": sig.local({
            "Jaarbeheer": value_parameter("Jaarbeheer")
        }, {}),
        "Handelstransacties": sig.local({
            "Beheer": value_parameter("Beheer"),
            "Grootboekrekeningen": value_parameter("Grootboekrekeningen"),
            "Jaarbeheer": value_parameter("Jaarbeheer"),
        }, {}),
        
        "Mutaties": sig.local({
            "Beheer": value_parameter("Beheer"),
            "Grootboekrekeningen": value_parameter("Grootboekrekeningen"),
            "Jaarbeheer": value_parameter("Jaarbeheer"),
            "Handelstransacties": value_parameter("Handelstransacties"),
        }, {
            "Jaren": lookup_parameter("Jaren"),
        }),
        "Balans Resultaat Mutatie": sig.same_as("Mutaties"),

        "Jaren": sig.local({
            "Beheer": value_parameter("Beheer")
        }, {}),

        "Root": sig.local({}, {}),

        "Eerste boekjaar": sig.local({}, {
            "Jaren": lookup_parameter("Jaren"),
        }),
    },
)