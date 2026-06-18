

import { signatures, sig, parameter, sig_params } from "../../../../../shorthands/signatures"


export const $ = signatures(
    {
        "Fiscaal": sig.local({}, {}),
        "Grootboekrekeningen": sig.local({
            "Beheer": parameter.module("Beheer")
        }, {}),

        "Grootboek Categorieen": sig.local({
            "Fiscaal": parameter.module("Fiscaal"),
        }, {
        }),
        
        "Beheer": sig.local({
            "Grootboek Categorieen": parameter.module("Grootboek Categorieen"),
        }, {}),

        "Jaarbeheer": sig.local({
            "Eerste boekjaar": parameter.module("Eerste boekjaar"),
            "Grootboekrekeningen": parameter.module("Grootboekrekeningen"),
        }, {
            "Jaren": parameter.lookup("Jaren"),
        }),
        "Overige balans item": sig.same_as("Jaarbeheer"),

        "Verwijzing naar Informele rekening": sig.local({
            "Jaarbeheer": parameter.module("Jaarbeheer")
        }, {}),
        "Verwijzing naar Bankrekening": sig.local({
            "Jaarbeheer": parameter.module("Jaarbeheer")
        }, {}),
        "Handelstransacties": sig.local({
            "Beheer": parameter.module("Beheer"),
            "Grootboekrekeningen": parameter.module("Grootboekrekeningen"),
            "Jaarbeheer": parameter.module("Jaarbeheer"),
        }, {}),
        
        "Mutaties": sig.local({
            "Beheer": parameter.module("Beheer"),
            "Grootboekrekeningen": parameter.module("Grootboekrekeningen"),
            "Jaarbeheer": parameter.module("Jaarbeheer"),
            "Handelstransacties": parameter.module("Handelstransacties"),
        }, {
            "Jaren": parameter.lookup("Jaren"),
        }),
        "Rekening Mutatie": sig.same_as("Mutaties"),

        "Jaren": sig.local({
            "Beheer": parameter.module("Beheer")
        }, {}),

        "Root": sig.local({}, {}),

        "Eerste boekjaar": sig.local({}, {
            "Jaren": parameter.lookup("Jaren"),
        }),
    },
)