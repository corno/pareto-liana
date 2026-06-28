

import * as sh from "../../../../../shorthands/signatures/manual"


export const $ = sh.signatures(
    {
        "Fiscaal": sh.sig.local({}, {}),
        "Grootboekrekeningen": sh.sig.local({
            "Beheer": sh.parameter.module("Beheer")
        }, {}),

        "Grootboek Categorieen": sh.sig.local({
            "Fiscaal": sh.parameter.module("Fiscaal"),
        }, {
        }),
        
        "Beheer": sh.sig.local({
            "Grootboek Categorieen": sh.parameter.module("Grootboek Categorieen"),
        }, {}),

        "Jaarbeheer": sh.sig.local({
            "Eerste boekjaar": sh.parameter.module("Eerste boekjaar"),
            "Grootboekrekeningen": sh.parameter.module("Grootboekrekeningen"),
        }, {
            "Jaren": sh.parameter.lookup("Jaren"),
        }),
        "Overige balans item": sh.sig.same_as("Jaarbeheer"),

        "Verwijzing naar Informele rekening": sh.sig.local({
            "Jaarbeheer": sh.parameter.module("Jaarbeheer")
        }, {}),
        "Verwijzing naar Bankrekening": sh.sig.local({
            "Jaarbeheer": sh.parameter.module("Jaarbeheer")
        }, {}),
        "Handelstransacties": sh.sig.local({
            "Beheer": sh.parameter.module("Beheer"),
            "Grootboekrekeningen": sh.parameter.module("Grootboekrekeningen"),
            "Jaarbeheer": sh.parameter.module("Jaarbeheer"),
        }, {}),
        
        "Mutaties": sh.sig.local({
            "Beheer": sh.parameter.module("Beheer"),
            "Grootboekrekeningen": sh.parameter.module("Grootboekrekeningen"),
            "Jaarbeheer": sh.parameter.module("Jaarbeheer"),
            "Handelstransacties": sh.parameter.module("Handelstransacties"),
        }, {
            "Jaren": sh.parameter.lookup("Jaren"),
        }),
        "Rekening Mutatie": sh.sig.same_as("Mutaties"),

        "Jaren": sh.sig.local({
            "Beheer": sh.parameter.module("Beheer")
        }, {}),

        "Root": sh.sig.local({}, {}),

        "Eerste boekjaar": sh.sig.local({}, {
            "Jaren": sh.parameter.lookup("Jaren"),
        }),
    },
)