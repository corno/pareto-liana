import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Fiscaal": module_(t.group({
            "Balans Hoofdcategorieen": prop(t.dictionary(t.group({
                "Zijde": prop(t.state({
                    "Activa": toption(t.nothing()),
                    "Passiva": toption(t.nothing()),
                })),
                "Subcategorieen": prop(t.dictionary(t.nothing())),
            }))),
            "Resultaat Hoofdcategorieen": prop(t.dictionary(t.group({
                "Zijde": prop(t.state({
                    "Kosten": toption(t.nothing()),
                    "Opbrengsten": toption(t.nothing()),
                })),
                "Subcategorieen": prop(t.dictionary(t.nothing()))
            }))),
        })),

        "Grootboek Categorieen": module_(t.group({
            "Correctietypes vennootschapsbelasting": prop(t.dictionary(t.group({
                "Te corrigeren promillage": prop(t.number_global("Promillage")),
            }))),
            "Balans": prop(t.dictionary(t.group({
                "Zijde": prop(t.state({
                    "Activa": toption(t.nothing()),
                    "Passiva": toption(t.nothing()),
                })),
                "Subcategorieen": prop(t.dictionary(t.group({
                    "Hoofdcategorie fiscus": prop(t.reference("Fiscaal", [vp.g("Balans Hoofdcategorieen")])),
                    "Subcategorie fiscus": prop(t.reference("Fiscaal", [vp.g("Balans Hoofdcategorieen"), vp.d(), vp.g("Subcategorieen")])),
                })))
            }))),
            "Resultaat": prop(t.dictionary(t.group({
                "Zijde": prop(t.state({
                    "Kosten": toption(t.nothing()),
                    "Opbrengsten": toption(t.nothing()),
                })),
                "Subcategorieen": prop(t.dictionary(t.group({
                    "Hoofdcategorie fiscus": prop(t.reference("Fiscaal", [vp.g("Resultaat Hoofdcategorieen")])),
                    "Subcategorie fiscus": prop(t.reference("Fiscaal", [vp.g("Resultaat Hoofdcategorieen"), vp.d(), vp.g("Subcategorieen")])),
                })))
            }))),
        })),

        "Beheer": module_(t.group({
            "BTW-categorieen": prop(t.dictionary(t.group({
                "BTW-heffing": prop(t.state({
                    "Ja": toption(t.group({
                        "BTW-promillage": prop(t.number_global("Promillage")),
                    }))
                }))
            }))),
            "Grootboekrekeningen": prop(t.group({
                "Balans": prop(t.dictionary(t.group({
                    "Hoofdcategorie": prop(t.reference("Grootboek Categorieen", [vp.g("Balans")])),
                    "Subcategorie": prop(t.reference("Grootboek Categorieen", [vp.g("Balans"), vp.d(), vp.g("Subcategorieen")])),
                    "Zijde": prop(t.state({
                        "Activa": toption(t.nothing()),
                        "Passiva": toption(t.nothing()),
                    })),
                }))),
                "Resultaat": prop(t.dictionary(t.group({
                    "Hoofdcategorie": prop(t.reference("Grootboek Categorieen", [vp.g("Resultaat")])),
                    "Subcategorie": prop(t.reference("Grootboek Categorieen", [vp.g("Resultaat"), vp.d(), vp.g("Subcategorieen")])),
                    "Zijde": prop(t.state({
                        "Kosten": toption(t.group({
                            "Correctie op vennootschapsbelasting": prop(t.state({
                                "Ja": toption(t.group({
                                    "Correctietype": prop(t.reference("Grootboek Categorieen", [vp.g("Correctietypes vennootschapsbelasting")])),
                                })),
                                "Nee": toption(t.nothing()),
                            }))
                        })),
                        "Opbrengsten": toption(t.nothing()),
                    })),
                }))),
            })),
            "Rekeningen": prop(t.group({
                "Bank": prop(t.dictionary(t.nothing())),
                "Informeel": prop(t.dictionary(t.nothing())),
            })),
            "Gebruikers": prop(t.dictionary(t.group({
                "Volledige naam": prop(t.text_global("Benaming")),
                "Wachtwoord": prop(t.text_global("Wachtwoord")),
            }))),
            "Klanten": prop(t.dictionary(t.group({
                "Licentieovereenkomsten": prop(t.dictionary(t.group({
                    "Periodes": prop(t.dictionary(t.group({
                        "Bedrag": prop(t.number_global("Bedrag")),
                    }))),
                }))),
                "Projecten": prop(t.dictionary(t.group({
                    "Offertes": prop(t.dictionary(t.group({
                        "Opbrengsten": prop(t.dictionary(t.group({
                            "Type": prop(t.state({
                                "Project": toption(t.group({
                                    "Bedrag": prop(t.number_global("Bedrag")),
                                    "Betaaldatum": prop(t.number_global("Datum")),
                                })),
                            })),
                        }))),
                    }))),
                }))),
            }))),
            "Leveranciers": prop(t.dictionary(t.nothing())),
            "Medewerkers": prop(t.dictionary(t.nothing())),
        })),

        "Grootboekrekeningen": module_(t.group({
            "Balans": prop(t.dictionary(t.group({
                "Type": prop(t.state({
                    "Bankrekening": toption(t.nothing()),
                    "Overig": toption(t.nothing()),
                    "Informele rekening": toption(t.nothing()),
                }))
            }))),
            "Resultaat": prop(t.dictionary(t.nothing())),
        })),

        "Jaarbeheer": module_(t.group({
            "Resultaat": prop(t.group({
                "Grootboekrekening voor BTW afrondingen": prop(t.reference("Grootboekrekeningen", [vp.g("Resultaat")])),
                "Salarisrondes": prop(t.dictionary(t.nothing())),

                "BTW periodes": prop(t.dictionary(t.group({
                    "1. BTW-categorieen": prop(t.dictionary(t.nothing())),
                    "Documenten": prop(t.dictionary(t.group({
                        "Bestand": prop(t.text_global("Bestandsnaam")),
                    }))),
                    "Omschrijving": prop(t.text_global("Omschrijving")),
                    "Status": prop(t.state({
                        "Aangegeven": toption(t.group({
                            "Afronding": prop(t.number_global("Bedrag")),
                            "Bedrag": prop(t.number_global("Bedrag")),
                            "Datum": prop(t.number_global("Datum")),
                        })),
                        "Openstaand": toption(t.nothing()),
                    })),
                }))),
            })),
            "Balans": prop(t.group({
                "Grootboekrekening voor nog aan te geven BTW": prop(t.reference("Grootboekrekeningen", [vp.g("Balans")])),
                "Grootboekrekening voor resultaat dit jaar": prop(t.reference("Grootboekrekeningen", [vp.g("Balans")])),
                "Grootboekrekening voor winstreserve": prop(t.reference("Grootboekrekeningen", [vp.g("Balans")])),
                "Grootboekrekening voor Inkoop saldo": prop(t.reference("Grootboekrekeningen", [vp.g("Balans")])),
                "Grootboekrekening voor Verkoop saldo": prop(t.reference("Grootboekrekeningen", [vp.g("Balans")])),
                "Beginsaldo nog aan te geven BTW": prop(t.number_global("Bedrag")),
                "Beginsaldo winstreserve": prop(t.number_global("Bedrag")),
                "Informele rekeningen": prop(t.dictionary(t.group({
                    "Beginsaldo": prop(t.number_global("Bedrag")),
                    "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [vp.g("Balans")])),
                    "Nieuw": prop(t.state({
                        "Ja": toption(t.nothing()),
                        "Nee": toption(t.group({
                            "Rekening": prop(t.component("Verwijzing naar Informele rekening")),
                        })),
                    }))
                }))),
                "Bankrekeningen": prop(t.dictionary(t.group({
                    "Beginsaldo": prop(t.number_global("Bedrag")),
                    "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [vp.g("Balans")])),
                    "Nieuw": prop(t.state({
                        "Ja": toption(t.nothing()),
                        "Nee": toption(t.group({
                            "Rekening": prop(t.component("Verwijzing naar Bankrekening")),
                        })),
                    })),
                    "Mutaties": prop(t.dictionary(t.group({
                        "Bedrag": prop(t.number_global("Bedrag")),
                        "Datum": prop(t.number_global("Datum")),
                        "Omschrijving": prop(t.text_global("Omschrijving")),
                    }))),
                }))),
                "Overige balans items": prop(t.dictionary(t.component("Overige balans item"))),
                "Verrekenposten": prop(t.dictionary(t.nothing())),
            })),
        })),

        "Overige balans item": module_(t.group({
            "Beginsaldo": prop(t.number_global("Bedrag")),
            "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [vp.g("Balans")])),
            "Nieuw": prop(t.state({
                "Ja": toption(t.nothing()),
                "Nee": toption(t.group({
                    "Balans item": prop(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Overige balans items")])),
                })),
            })),
        })),

        "Verwijzing naar Informele rekening": module_(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Informele rekeningen")])), // FIXME maak van Informele Rekening een type en inline deze verwijzing
        "Verwijzing naar Bankrekening": module_(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Bankrekeningen")])),// FIXME maak van Bankrekening een type en inline deze verwijzing

        "Handelstransacties": module_(t.group({
            "Inkopen": prop(t.dictionary(t.group({
                "Afhandeling": prop(t.state({
                    "Mutaties": toption(t.nothing()),
                    "Rekening courant": toption(t.group({
                        "Rekening courant": prop(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Informele rekeningen")])),
                    })),
                })),
                "BTW-regime": prop(t.state({
                    "Binnenland: heffing verlegd": toption(t.nothing()),
                    "Geen BTW van toepassing": toption(t.nothing()),
                    "Import van buiten de EU": toption(t.nothing()),
                    "Intracommunautair": toption(t.nothing()),
                    "Standaard": toption(t.group({
                        "BTW-periode": prop(t.reference("Jaarbeheer", [vp.g("Resultaat"), vp.g("BTW periodes")])),
                    })),
                })),
                "Brondocument": prop(t.state({
                    "Toegevoegd": toption(t.group({
                        "Document": prop(t.text_global("Bestandsnaam")),
                    })),
                    "Niet van toepassing": toption(t.nothing()),
                    "Ontbreekt": toption(t.nothing()),
                    // "Nog toevoegen": tstate(t.nothing()),
                })),
                "Datum": prop(t.number_global("Datum")),
                "Regels": prop(t.dictionary(t.group({
                    "Bedrag": prop(t.state({
                        "Bekend": toption(t.group({
                            "BTW-bedrag": prop(t.number_global("Bedrag")),
                            "Bedrag inclusief geheven BTW": prop(t.number_global("Bedrag")),
                        }))
                    })),
                    "Omschrijving": prop(t.text_global("Omschrijving")),
                    "Type": prop(t.state({
                        "Balans": toption(t.group({
                            "Balans item": prop(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Overige balans items")])),
                        })),
                        "Kosten": toption(t.group({
                            "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [vp.g("Resultaat")])),
                        })),
                    })),
                }))),
                "Type": prop(t.state({
                    "Bonnetje": toption(t.nothing()),
                    "Inkoop (met crediteur)": toption(t.group({
                        "Crediteur": prop(t.reference("Beheer", [vp.g("Leveranciers")])),
                        "Factuurnummer": prop(t.text_global("Benaming")),
                    })),
                    "Loonheffing": toption(t.group({
                        "Ronde": prop(t.reference("Jaarbeheer", [vp.g("Resultaat"), vp.g("Salarisrondes")])),
                    })),
                    "Salaris": toption(t.group({
                        "Ronde": prop(t.reference("Jaarbeheer", [vp.g("Resultaat"), vp.g("Salarisrondes")])),
                        "Medewerker": prop(t.reference("Beheer", [vp.g("Medewerkers")])),
                    })),
                })),
            }))),
            "Verkopen": prop(t.dictionary(t.group({
                "Afhandeling": prop(t.state({
                    "Mutaties": toption(t.nothing()),
                    "Rekening courant": toption(t.group({
                        "Rekening courant": prop(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Informele rekeningen")])),
                    })),
                })),
                "Betalingstermijn": prop(t.number_global("Dagen")),
                "BTW-periode": prop(t.reference("Jaarbeheer", [vp.g("Resultaat"), vp.g("BTW periodes")])),
                "Brondocument": prop(t.state({
                    "Toegevoegd": toption(t.group({
                        "Document": prop(t.text_global("Bestandsnaam"))
                    })),
                })),
                "Debiteur": prop(t.reference("Beheer", [vp.g("Klanten")])),
                "Contracttype": prop(t.state({
                    "Project": toption(t.group({
                        "Project": prop(t.reference("Beheer", [vp.g("Klanten"), vp.d(), vp.g("Projecten")])),
                        "Offerte": prop(t.reference("Beheer", [vp.g("Klanten"), vp.d(), vp.g("Projecten"), vp.d(), vp.g("Offertes")])),
                    })),
                    "Licentieovereenkomst": toption(t.group({
                        "Overeenkomst": prop(t.reference("Beheer", [vp.g("Klanten"), vp.d(), vp.g("Licentieovereenkomsten")])),
                    })),
                })),
                "Datum": prop(t.number_global("Datum")),
                "Regels": prop(t.dictionary(t.group({
                    "BTW-regime": prop(t.state({
                        "Intracommunautair": toption(t.nothing()),
                        "Standaard": toption(t.group({
                            "BTW-categorie": prop(t.reference("Beheer", [vp.g("BTW-categorieen")])),
                        })),
                        "Binnenland: heffing verlegd": toption(t.nothing()),
                    })),
                    "Bedrag exclusief BTW": prop(t.number_global("Bedrag")),
                    "Contracttype": prop(t.state({
                        "Project": toption(t.group({
                            "Opbrengst": prop(t.reference("Beheer", [vp.g("Klanten"), vp.d(), vp.g("Projecten"), vp.d(), vp.g("Offertes"), vp.d(), vp.g("Opbrengsten")])),
                        })),
                        "Los": toption(t.nothing()),
                        "Licentieovereenkomst": toption(t.group({
                            "Periode": prop(t.reference("Beheer", [vp.g("Klanten"), vp.d(), vp.g("Licentieovereenkomsten"), vp.d(), vp.g("Periodes")])),
                        })),
                    })),
                    "Omschrijving": prop(t.text_global("Omschrijving")),
                    "Type": prop(t.state({
                        "Opbrengsten": toption(t.group({
                            "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [vp.g("Resultaat")])),
                        })),
                        "Balans": toption(t.group({
                            "Balans item": prop(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Overige balans items")])),
                        })),
                    })),
                }))),
            }))),
        })),

        "Mutaties": module_(t.group({
            "Verrekenpost mutaties": prop(t.dictionary(t.dictionary(t.group({
                "Bedrag": prop(t.number_global("Bedrag")),
                "Afhandeling": prop(t.state({
                    "Resultaat": toption(t.component("Balans Resultaat Mutatie")),
                    "Balans": toption(t.state({
                        "Informele rekening": toption(t.group({
                            "Informele rekening": prop(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Informele rekeningen")])),
                        })),
                    }))
                }))
            })))),
            "Bankrekening Mutatie Verwerkingen": prop(t.dictionary(t.dictionary(t.state({
                "Resultaat": toption(t.component("Balans Resultaat Mutatie")),
                "Balans": toption(t.state({
                    "Informele rekening": toption(t.group({
                        "Informele rekening": prop(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Informele rekeningen")])),
                    })),
                    "Verrekenpost": toption(t.group({
                        "Verrekenpost": prop(t.reference("Jaarbeheer", [vp.g("Balans"), vp.g("Verrekenposten")])),
                    })),
                })),
            })))),
            "Memoriaal boekingen": prop(t.dictionary(t.dictionary(t.group({
                "Bedrag": prop(t.number_global("Bedrag")),
                "Datum": prop(t.number_global("Datum")),
                "Omschrijving": prop(t.text_global("Omschrijving")),
                "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [vp.g("Resultaat")])),
            })))),
        })),

        "Balans Resultaat Mutatie": module_(t.group({
            "Jaar": prop(t.optional(t.reference("Jaren", []))),
            "type": prop(t.state({
                "Inkoop": toption(t.reference("Handelstransacties", [vp.g("Inkopen")])),
                "Verkoop": toption(t.reference("Handelstransacties", [vp.g("Verkopen")])),
                "BTW-periode": toption(t.reference("Jaarbeheer", [vp.g("Resultaat"), vp.g("BTW periodes")])),
            }))
        })),

        "Jaren": module_(t.dictionary(t.group({
            "Afgesloten": prop(t.state({
                "Ja": toption(t.nothing()),
                "Nee": toption(t.nothing()),
            })),
            "Startdatum boekjaar": prop(t.number_global("Datum")),
            "Grootboekrekeningen": prop(t.component("Grootboekrekeningen")),
            "Eerste boekjaar": prop(t.component("Eerste boekjaar")),
            "Jaarbeheer": prop(t.component("Jaarbeheer")),
            "Handelstransacties": prop(t.component("Handelstransacties")),
            "Mutaties": prop(t.component("Mutaties")),
        }))),

        "Eerste boekjaar": module_(t.state({
            "Ja": toption(t.nothing()),
            "Nee": toption(t.group({
                "Vorig boekjaar": prop(t.reference("Jaren", [])),
            })),
        })),

        "Root": module_(t.group({
            "Fiscaal": prop(t.component("Fiscaal")),
            "Categorieen": prop(t.component("Grootboek Categorieen")),
            "Beheer": prop(t.component("Beheer")),
            "Jaren": prop(t.component("Jaren")),
        })),
    }
)