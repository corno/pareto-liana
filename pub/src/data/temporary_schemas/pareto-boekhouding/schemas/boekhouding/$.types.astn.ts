import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Fiscaal": type(t.group({
            "Balans Hoofdcategorieen": prop(t.dictionary(t.group({
                "Zijde": prop(t.state_group({
                    "Activa": tstate(t.nothing()),
                    "Passiva": tstate(t.nothing()),
                })),
                "Subcategorieen": prop(t.dictionary(t.nothing())),
            }))),
            "Resultaat Hoofdcategorieen": prop(t.dictionary(t.group({
                "Zijde": prop(t.state_group({
                    "Kosten": tstate(t.nothing()),
                    "Opbrengsten": tstate(t.nothing()),
                })),
                "Subcategorieen": prop(t.dictionary(t.nothing()))
            }))),
        })),

        "Grootboek Categorieen": type(t.group({
            "Correctietypes vennootschapsbelasting": prop(t.dictionary(t.group({
                "Te corrigeren promillage": prop(t.number_global("Promillage")),
            }))),
            "Balans": prop(t.dictionary(t.group({
                "Zijde": prop(t.state_group({
                    "Activa": tstate(t.nothing()),
                    "Passiva": tstate(t.nothing()),
                })),
                "Subcategorieen": prop(t.dictionary(t.group({
                    "Hoofdcategorie fiscus": prop(t.reference("Fiscaal", [tr.g("Balans Hoofdcategorieen")])),
                    "Subcategorie fiscus": prop(t.reference("Fiscaal", [tr.g("Balans Hoofdcategorieen"), tr.d(), tr.g("Subcategorieen")])),
                })))
            }))),
            "Resultaat": prop(t.dictionary(t.group({
                "Zijde": prop(t.state_group({
                    "Kosten": tstate(t.nothing()),
                    "Opbrengsten": tstate(t.nothing()),
                })),
                "Subcategorieen": prop(t.dictionary(t.group({
                    "Hoofdcategorie fiscus": prop(t.reference("Fiscaal", [tr.g("Resultaat Hoofdcategorieen")])),
                    "Subcategorie fiscus": prop(t.reference("Fiscaal", [tr.g("Resultaat Hoofdcategorieen"), tr.d(), tr.g("Subcategorieen")])),
                })))
            }))),
        })),

        "Beheer": type(t.group({
            "BTW-categorieen": prop(t.dictionary(t.group({
                "BTW-heffing": prop(t.state_group({
                    "Ja": tstate(t.group({
                        "BTW-promillage": prop(t.number_global("Promillage")),
                    }))
                }))
            }))),
            "Grootboekrekeningen": prop(t.group({
                "Balans": prop(t.dictionary(t.group({
                    "Hoofdcategorie": prop(t.reference("Grootboek Categorieen", [tr.g("Balans")])),
                    "Subcategorie": prop(t.reference("Grootboek Categorieen", [tr.g("Balans"), tr.d(), tr.g("Subcategorieen")])),
                    "Zijde": prop(t.state_group({
                        "Activa": tstate(t.nothing()),
                        "Passiva": tstate(t.nothing()),
                    })),
                }))),
                "Resultaat": prop(t.dictionary(t.group({
                    "Hoofdcategorie": prop(t.reference("Grootboek Categorieen", [tr.g("Resultaat")])),
                    "Subcategorie": prop(t.reference("Grootboek Categorieen", [tr.g("Resultaat"), tr.d(), tr.g("Subcategorieen")])),
                    "Zijde": prop(t.state_group({
                        "Kosten": tstate(t.group({
                            "Correctie op vennootschapsbelasting": prop(t.state_group({
                                "Ja": tstate(t.group({
                                    "Correctietype": prop(t.reference("Grootboek Categorieen", [tr.g("Correctietypes vennootschapsbelasting")])),
                                })),
                                "Nee": tstate(t.nothing()),
                            }))
                        })),
                        "Opbrengsten": tstate(t.nothing()),
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
                            "Type": prop(t.state_group({
                                "Project": tstate(t.group({
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

        "Grootboekrekeningen": type(t.group({
            "Balans": prop(t.dictionary(t.group({
                "Type": prop(t.state_group({
                    "Bankrekening": tstate(t.nothing()),
                    "Overig": tstate(t.nothing()),
                    "Informele rekening": tstate(t.nothing()),
                }))
            }))),
            "Resultaat": prop(t.dictionary(t.nothing())),
        })),

        "Jaarbeheer": type(t.group({
            "Resultaat": prop(t.group({
                "Grootboekrekening voor BTW afrondingen": prop(t.reference("Grootboekrekeningen", [tr.g("Resultaat")])),
                "Salarisrondes": prop(t.dictionary(t.nothing())),

                "BTW periodes": prop(t.dictionary(t.group({
                    "1. BTW-categorieen": prop(t.dictionary(t.nothing())),
                    "Documenten": prop(t.dictionary(t.group({
                        "Bestand": prop(t.text_global("Bestandsnaam")),
                    }))),
                    "Omschrijving": prop(t.text_global("Omschrijving")),
                    "Status": prop(t.state_group({
                        "Aangegeven": tstate(t.group({
                            "Afronding": prop(t.number_global("Bedrag")),
                            "Bedrag": prop(t.number_global("Bedrag")),
                            "Datum": prop(t.number_global("Datum")),
                        })),
                        "Openstaand": tstate(t.nothing()),
                    })),
                }))),
            })),
            "Balans": prop(t.group({
                "Grootboekrekening voor nog aan te geven BTW": prop(t.reference("Grootboekrekeningen", [tr.g("Balans")])),
                "Grootboekrekening voor resultaat dit jaar": prop(t.reference("Grootboekrekeningen", [tr.g("Balans")])),
                "Grootboekrekening voor winstreserve": prop(t.reference("Grootboekrekeningen", [tr.g("Balans")])),
                "Grootboekrekening voor Inkoop saldo": prop(t.reference("Grootboekrekeningen", [tr.g("Balans")])),
                "Grootboekrekening voor Verkoop saldo": prop(t.reference("Grootboekrekeningen", [tr.g("Balans")])),
                "Beginsaldo nog aan te geven BTW": prop(t.number_global("Bedrag")),
                "Beginsaldo winstreserve": prop(t.number_global("Bedrag")),
                "Informele rekeningen": prop(t.dictionary(t.group({
                    "Beginsaldo": prop(t.number_global("Bedrag")),
                    "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [tr.g("Balans")])),
                    "Nieuw": prop(t.state_group({
                        "Ja": tstate(t.nothing()),
                        "Nee": tstate(t.group({
                            "Rekening": prop(t.component_cyclic("Verwijzing naar Informele rekening")),
                        })),
                    }))
                }))),
                "Bankrekeningen": prop(t.dictionary(t.group({
                    "Beginsaldo": prop(t.number_global("Bedrag")),
                    "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [tr.g("Balans")])),
                    "Nieuw": prop(t.state_group({
                        "Ja": tstate(t.nothing()),
                        "Nee": tstate(t.group({
                            "Rekening": prop(t.component_cyclic("Verwijzing naar Bankrekening")),
                        })),
                    })),
                    "Mutaties": prop(t.dictionary(t.group({
                        "Bedrag": prop(t.number_global("Bedrag")),
                        "Datum": prop(t.number_global("Datum")),
                        "Omschrijving": prop(t.text_global("Omschrijving")),
                    }))),
                }))),
                "Overige balans items": prop(t.dictionary(t.component_cyclic("Overige balans item"))),
                "Verrekenposten": prop(t.dictionary(t.nothing())),
            })),
        })),

        "Overige balans item": type(t.group({
            "Beginsaldo": prop(t.number_global("Bedrag")),
            "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [tr.g("Balans")])),
            "Nieuw": prop(t.state_group({
                "Ja": tstate(t.nothing()),
                "Nee": tstate(t.group({
                    "Balans item": prop(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Overige balans items")])),
                })),
            })),
        })),

        "Verwijzing naar Informele rekening": type(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")])), // FIXME maak van Informele Rekening een type en inline deze verwijzing
        "Verwijzing naar Bankrekening": type(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Bankrekeningen")])),// FIXME maak van Bankrekening een type en inline deze verwijzing

        "Handelstransacties": type(t.group({
            "Inkopen": prop(t.dictionary(t.group({
                "Afhandeling": prop(t.state_group({
                    "Mutaties": tstate(t.nothing()),
                    "Rekening courant": tstate(t.group({
                        "Rekening courant": prop(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")])),
                    })),
                })),
                "BTW-regime": prop(t.state_group({
                    "Binnenland: heffing verlegd": tstate(t.nothing()),
                    "Geen BTW van toepassing": tstate(t.nothing()),
                    "Import van buiten de EU": tstate(t.nothing()),
                    "Intracommunautair": tstate(t.nothing()),
                    "Standaard": tstate(t.group({
                        "BTW-periode": prop(t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("BTW periodes")])),
                    })),
                })),
                "Brondocument": prop(t.state_group({
                    "Toegevoegd": tstate(t.group({
                        "Document": prop(t.text_global("Bestandsnaam")),
                    })),
                    "Niet van toepassing": tstate(t.nothing()),
                    "Ontbreekt": tstate(t.nothing()),
                    // "Nog toevoegen": tstate(t.nothing()),
                })),
                "Datum": prop(t.number_global("Datum")),
                "Regels": prop(t.dictionary(t.group({
                    "Bedrag": prop(t.state_group({
                        "Bekend": tstate(t.group({
                            "BTW-bedrag": prop(t.number_global("Bedrag")),
                            "Bedrag inclusief geheven BTW": prop(t.number_global("Bedrag")),
                        }))
                    })),
                    "Omschrijving": prop(t.text_global("Omschrijving")),
                    "Type": prop(t.state_group({
                        "Balans": tstate(t.group({
                            "Balans item": prop(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Overige balans items")])),
                        })),
                        "Kosten": tstate(t.group({
                            "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [tr.g("Resultaat")])),
                        })),
                    })),
                }))),
                "Type": prop(t.state_group({
                    "Bonnetje": tstate(t.nothing()),
                    "Inkoop (met crediteur)": tstate(t.group({
                        "Crediteur": prop(t.reference("Beheer", [tr.g("Leveranciers")])),
                        "Factuurnummer": prop(t.text_global("Benaming")),
                    })),
                    "Loonheffing": tstate(t.group({
                        "Ronde": prop(t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("Salarisrondes")])),
                    })),
                    "Salaris": tstate(t.group({
                        "Ronde": prop(t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("Salarisrondes")])),
                        "Medewerker": prop(t.reference("Beheer", [tr.g("Medewerkers")])),
                    })),
                })),
            }))),
            "Verkopen": prop(t.dictionary(t.group({
                "Afhandeling": prop(t.state_group({
                    "Mutaties": tstate(t.nothing()),
                    "Rekening courant": tstate(t.group({
                        "Rekening courant": prop(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")])),
                    })),
                })),
                "Betalingstermijn": prop(t.number_global("Dagen")),
                "BTW-periode": prop(t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("BTW periodes")])),
                "Brondocument": prop(t.state_group({
                    "Toegevoegd": tstate(t.group({
                        "Document": prop(t.text_global("Bestandsnaam"))
                    })),
                })),
                "Debiteur": prop(t.reference("Beheer", [tr.g("Klanten")])),
                "Contracttype": prop(t.state_group({
                    "Project": tstate(t.group({
                        "Project": prop(t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Projecten")])),
                        "Offerte": prop(t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Projecten"), tr.d(), tr.g("Offertes")])),
                    })),
                    "Licentieovereenkomst": tstate(t.group({
                        "Overeenkomst": prop(t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Licentieovereenkomsten")])),
                    })),
                })),
                "Datum": prop(t.number_global("Datum")),
                "Regels": prop(t.dictionary(t.group({
                    "BTW-regime": prop(t.state_group({
                        "Intracommunautair": tstate(t.nothing()),
                        "Standaard": tstate(t.group({
                            "BTW-categorie": prop(t.reference("Beheer", [tr.g("BTW-categorieen")])),
                        })),
                        "Binnenland: heffing verlegd": tstate(t.nothing()),
                    })),
                    "Bedrag exclusief BTW": prop(t.number_global("Bedrag")),
                    "Contracttype": prop(t.state_group({
                        "Project": tstate(t.group({
                            "Opbrengst": prop(t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Projecten"), tr.d(), tr.g("Offertes"), tr.d(), tr.g("Opbrengsten")])),
                        })),
                        "Los": tstate(t.nothing()),
                        "Licentieovereenkomst": tstate(t.group({
                            "Periode": prop(t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Licentieovereenkomsten"), tr.d(), tr.g("Periodes")])),
                        })),
                    })),
                    "Omschrijving": prop(t.text_global("Omschrijving")),
                    "Type": prop(t.state_group({
                        "Opbrengsten": tstate(t.group({
                            "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [tr.g("Resultaat")])),
                        })),
                        "Balans": tstate(t.group({
                            "Balans item": prop(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Overige balans items")])),
                        })),
                    })),
                }))),
            }))),
        })),

        "Mutaties": type(t.group({
            "Verrekenpost mutaties": prop(t.dictionary(t.dictionary(t.group({
                "Bedrag": prop(t.number_global("Bedrag")),
                "Afhandeling": prop(t.state_group({
                    "Resultaat": tstate(t.component_cyclic("Balans Resultaat Mutatie")),
                    "Balans": tstate(t.state_group({
                        "Informele rekening": tstate(t.group({
                            "Informele rekening": prop(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")])),
                        })),
                    }))
                }))
            })))),
            "Bankrekening Mutatie Verwerkingen": prop(t.dictionary(t.dictionary(t.state_group({
                "Resultaat": tstate(t.component_cyclic("Balans Resultaat Mutatie")),
                "Balans": tstate(t.state_group({
                    "Informele rekening": tstate(t.group({
                        "Informele rekening": prop(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")])),
                    })),
                    "Verrekenpost": tstate(t.group({
                        "Verrekenpost": prop(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Verrekenposten")])),
                    })),
                })),
            })))),
            "Memoriaal boekingen": prop(t.dictionary(t.dictionary(t.group({
                "Bedrag": prop(t.number_global("Bedrag")),
                "Datum": prop(t.number_global("Datum")),
                "Omschrijving": prop(t.text_global("Omschrijving")),
                "Grootboekrekening": prop(t.reference("Grootboekrekeningen", [tr.g("Resultaat")])),
            })))),
        })),

        "Balans Resultaat Mutatie": type(t.group({
            "Jaar": prop(t.optional(t.reference("Jaren", []))),
            "type": prop(t.state_group({
                "Inkoop": tstate(t.reference("Handelstransacties", [tr.g("Inkopen")])),
                "Verkoop": tstate(t.reference("Handelstransacties", [tr.g("Verkopen")])),
                "BTW-periode": tstate(t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("BTW periodes")])),
            }))
        })),

        "Jaren": type(t.dictionary(t.group({
            "Afgesloten": prop(t.state_group({
                "Ja": tstate(t.nothing()),
                "Nee": tstate(t.nothing()),
            })),
            "Startdatum boekjaar": prop(t.number_global("Datum")),
            "Grootboekrekeningen": prop(t.component("Grootboekrekeningen")),
            "Eerste boekjaar": prop(t.component_cyclic("Eerste boekjaar")),
            "Jaarbeheer": prop(t.component("Jaarbeheer")),
            "Handelstransacties": prop(t.component("Handelstransacties")),
            "Mutaties": prop(t.component("Mutaties")),
        }), 'ordered')),

        "Eerste boekjaar": type(t.state_group({
            "Ja": tstate(t.nothing()),
            "Nee": tstate(t.group({
                "Vorig boekjaar": prop(t.reference("Jaren", [])),
            })),
        })),

        "Root": type(t.group({
            "Fiscaal": prop(t.component("Fiscaal")),
            "Categorieen": prop(t.component("Grootboek Categorieen")),
            "Beheer": prop(t.component("Beheer")),
            "Jaren": prop(t.component("Jaren")),
        })),
    }
)