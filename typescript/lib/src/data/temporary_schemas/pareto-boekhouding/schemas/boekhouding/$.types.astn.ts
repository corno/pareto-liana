
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Root": sh.module_(sh.t.group({
            "Fiscaal": sh.prop(sh.t.component("Fiscaal")),
            "Categorieen": sh.prop(sh.t.component("Grootboek Categorieen")),
            "Beheer": sh.prop(sh.t.component("Beheer")),
            "Jaren": sh.prop(sh.t.component("Jaren")),
        })),

        "Fiscaal": sh.module_(sh.t.group({
            "Balans Hoofdcategorieen": sh.prop(sh.t.dictionary(sh.t.group({
                "Zijde": sh.prop(sh.t.state({
                    "Activa": sh.toption(sh.t.nothing()),
                    "Passiva": sh.toption(sh.t.nothing()),
                })),
                "Subcategorieen": sh.prop(sh.t.dictionary(sh.t.nothing())),
            }))),
            "Resultaat Hoofdcategorieen": sh.prop(sh.t.dictionary(sh.t.group({
                "Zijde": sh.prop(sh.t.state({
                    "Kosten": sh.toption(sh.t.nothing()),
                    "Opbrengsten": sh.toption(sh.t.nothing()),
                })),
                "Subcategorieen": sh.prop(sh.t.dictionary(sh.t.nothing()))
            }))),
        })),

        "Grootboek Categorieen": sh.module_(sh.t.group({
            "Correctietypes vennootschapsbelasting": sh.prop(sh.t.dictionary(sh.t.group({
                "Te corrigeren promillage": sh.prop(sh.t.simple("Promillage")),
            }))),
            "Balans": sh.prop(sh.t.dictionary(sh.t.group({
                "Zijde": sh.prop(sh.t.state({
                    "Activa": sh.toption(sh.t.nothing()),
                    "Passiva": sh.toption(sh.t.nothing()),
                })),
                "Subcategorieen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Hoofdcategorie fiscus": sh.prop(sh.t.reference("Fiscaal", [sh.vp.g("Balans Hoofdcategorieen")])),
                    "Subcategorie fiscus": sh.prop(sh.t.reference("Fiscaal", [sh.vp.g("Balans Hoofdcategorieen"), sh.vp.d(), sh.vp.g("Subcategorieen")])),
                })))
            }))),
            "Resultaat": sh.prop(sh.t.dictionary(sh.t.group({
                "Zijde": sh.prop(sh.t.state({
                    "Kosten": sh.toption(sh.t.nothing()),
                    "Opbrengsten": sh.toption(sh.t.nothing()),
                })),
                "Subcategorieen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Hoofdcategorie fiscus": sh.prop(sh.t.reference("Fiscaal", [sh.vp.g("Resultaat Hoofdcategorieen")])),
                    "Subcategorie fiscus": sh.prop(sh.t.reference("Fiscaal", [sh.vp.g("Resultaat Hoofdcategorieen"), sh.vp.d(), sh.vp.g("Subcategorieen")])),
                })))
            }))),
        })),

        "Beheer": sh.module_(sh.t.group({
            "BTW-categorieen": sh.prop(sh.t.dictionary(sh.t.group({
                "BTW-heffing": sh.prop(sh.t.state({
                    "Ja": sh.toption(sh.t.group({
                        "BTW-promillage": sh.prop(sh.t.simple("Promillage")),
                    })),
                    "Nee": sh.toption(sh.t.nothing()),
                }))
            }))),
            "Grootboekrekeningen": sh.prop(sh.t.group({
                "Balans": sh.prop(sh.t.dictionary(sh.t.group({
                    "Hoofdcategorie": sh.prop(sh.t.reference("Grootboek Categorieen", [sh.vp.g("Balans")])),
                    "Subcategorie": sh.prop(sh.t.reference("Grootboek Categorieen", [sh.vp.g("Balans"), sh.vp.d(), sh.vp.g("Subcategorieen")])),
                    "Zijde": sh.prop(sh.t.state({
                        "Activa": sh.toption(sh.t.nothing()),
                        "Passiva": sh.toption(sh.t.nothing()),
                    })),
                }))),
                "Resultaat": sh.prop(sh.t.dictionary(sh.t.group({
                    "Hoofdcategorie": sh.prop(sh.t.reference("Grootboek Categorieen", [sh.vp.g("Resultaat")])),
                    "Subcategorie": sh.prop(sh.t.reference("Grootboek Categorieen", [sh.vp.g("Resultaat"), sh.vp.d(), sh.vp.g("Subcategorieen")])),
                    "Zijde": sh.prop(sh.t.state({
                        "Kosten": sh.toption(sh.t.group({
                            "Correctie op vennootschapsbelasting": sh.prop(sh.t.state({
                                "Ja": sh.toption(sh.t.group({
                                    "Correctietype": sh.prop(sh.t.reference("Grootboek Categorieen", [sh.vp.g("Correctietypes vennootschapsbelasting")])),
                                })),
                                "Nee": sh.toption(sh.t.nothing()),
                            }))
                        })),
                        "Opbrengsten": sh.toption(sh.t.nothing()),
                    })),
                }))),
            })),
            "Rekeningen": sh.prop(sh.t.group({
                "Bank": sh.prop(sh.t.dictionary(sh.t.nothing())),
                "Informeel": sh.prop(sh.t.dictionary(sh.t.nothing())),
            })),
            "Gebruikers": sh.prop(sh.t.dictionary(sh.t.group({
                "Volledige naam": sh.prop(sh.t.text_global("Benaming")),
                "Wachtwoord": sh.prop(sh.t.text_global("Wachtwoord")),
            }))),
            "Klanten": sh.prop(sh.t.dictionary(sh.t.group({
                "Licentieovereenkomsten": sh.prop(sh.t.dictionary(sh.t.group({
                    "Periodes": sh.prop(sh.t.dictionary(sh.t.group({
                        "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                    }))),
                }))),
                "Projecten": sh.prop(sh.t.dictionary(sh.t.group({
                    "Offertes": sh.prop(sh.t.dictionary(sh.t.group({
                        "Opbrengsten": sh.prop(sh.t.dictionary(sh.t.group({
                            "Type": sh.prop(sh.t.state({
                                "Project": sh.toption(sh.t.group({
                                    "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                                    "Betaaldatum": sh.prop(sh.t.simple("Datum")),
                                })),
                            })),
                        }))),
                    }))),
                }))),
            }))),
            "Leveranciers": sh.prop(sh.t.dictionary(sh.t.nothing())),
            "Medewerkers": sh.prop(sh.t.dictionary(sh.t.nothing())),
        })),

        "Grootboekrekeningen": sh.module_(sh.t.group({
            "Balans": sh.prop(sh.t.dictionary(sh.t.group({
                "Stam": sh.prop(sh.t.reference_derived("Beheer", [sh.vp.g("Grootboekrekeningen"), sh.vp.g("Balans"), sh.vp.d()])),
                // "Type": sh.prop(sh.t.state({
                //     "Bankrekening": sh.toption(sh.t.nothing()),
                //     "Overig": sh.toption(sh.t.nothing()),
                //     "Informele rekening": sh.toption(sh.t.nothing()),
                // }))
            }))),
            "Resultaat": sh.prop(sh.t.dictionary(sh.t.group({
                "Stam": sh.prop(sh.t.reference_derived("Beheer", [sh.vp.g("Grootboekrekeningen"), sh.vp.g("Resultaat"), sh.vp.d()])),
            }))),
        })),

        "Jaarbeheer": sh.module_(sh.t.group({
            "Resultaat": sh.prop(sh.t.group({
                "Grootboekrekening voor BTW afrondingen": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Resultaat")])),
                "Salarisrondes": sh.prop(sh.t.dictionary(sh.t.nothing())),

                "BTW periodes": sh.prop(sh.t.dictionary(sh.t.group({
                    "1. BTW-categorieen": sh.prop(sh.t.dictionary(sh.t.nothing())),
                    "Documenten": sh.prop(sh.t.dictionary(sh.t.group({
                        "Bestand": sh.prop(sh.t.text_global("Bestandsnaam")),
                    }))),
                    "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                    "Status": sh.prop(sh.t.state({
                        "Aangegeven": sh.toption(sh.t.group({
                            "Afronding": sh.prop(sh.t.simple("Bedrag")),
                            "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                            "Datum": sh.prop(sh.t.simple("Datum")),
                        })),
                        "Openstaand": sh.toption(sh.t.nothing()),
                    })),
                }))),
            })),
            "Balans": sh.prop(sh.t.group({
                "Grootboekrekening voor nog aan te geven BTW": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Balans")])),
                "Grootboekrekening voor resultaat dit jaar": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Balans")])),
                "Grootboekrekening voor winstreserve": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Balans")])),
                "Grootboekrekening voor Inkoop saldo": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Balans")])),
                "Grootboekrekening voor Verkoop saldo": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Balans")])),
                "Beginsaldo nog aan te geven BTW": sh.prop(sh.t.simple("Bedrag")),
                "Beginsaldo winstreserve": sh.prop(sh.t.simple("Bedrag")),
                
                "Bankrekeningen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Beginsaldo": sh.prop(sh.t.simple("Bedrag")),
                    "Grootboekrekening": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Balans")])),
                    "Nieuw": sh.prop(sh.t.state({
                        "Ja": sh.toption(sh.t.nothing()),
                        "Nee": sh.toption(sh.t.group({
                            "Rekening": sh.prop(sh.t.component("Verwijzing naar Bankrekening")),
                        })),
                    })),
                    "Mutaties": sh.prop(sh.t.dictionary(sh.t.group({
                        "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                        "Datum": sh.prop(sh.t.simple("Datum")),
                        "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                    }))),
                }))),
                "Informele rekeningen": sh.prop_with_description("rekening met tegenpartij", sh.t.dictionary(sh.t.group({
                    "Beginsaldo": sh.prop(sh.t.simple("Bedrag")),
                    "Grootboekrekening": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Balans")])),
                    "Nieuw": sh.prop(sh.t.state({
                        "Ja": sh.toption(sh.t.nothing()),
                        "Nee": sh.toption(sh.t.group({
                            "Rekening": sh.prop(sh.t.component("Verwijzing naar Informele rekening")),
                        })),
                    }))
                }))),
                "Overige balans items": sh.prop_with_description("items die geen bankrekening of informele rekening zijn, denk aan voorraad, reservering e.d.", sh.t.dictionary(sh.t.component("Overige balans item"))),
                "Verrekenposten": sh.prop(sh.t.dictionary(sh.t.nothing())), //tijdelijke posten die aan het eind van het jaar 0 moeten zijn
            })),
        })),

        "Overige balans item": sh.module_(sh.t.group({
            "Beginsaldo": sh.prop(sh.t.simple("Bedrag")),
            "Grootboekrekening": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Balans")])),
            "Nieuw": sh.prop(sh.t.state({
                "Ja": sh.toption(sh.t.nothing()),
                "Nee": sh.toption(sh.t.group({
                    "Balans item": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Overige balans items")])),
                })),
            })),
        })),

        "Verwijzing naar Informele rekening": sh.module_(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Informele rekeningen")])), // FIXME maak van Informele Rekening een type en inline deze verwijzing
        "Verwijzing naar Bankrekening": sh.module_(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Bankrekeningen")])),// FIXME maak van Bankrekening een type en inline deze verwijzing

        "Handelstransacties": sh.module_(sh.t.group({
            "Inkopen": sh.prop(sh.t.dictionary(sh.t.group({
                "Afhandeling": sh.prop(sh.t.state({
                    "Mutaties": sh.toption(sh.t.nothing()),
                    "Nog te betalen": sh.toption(sh.t.group({
                        "Betalingstermijn": sh.prop(sh.t.simple("Dagen")),
                    })),
                    "Rekening courant": sh.toption(sh.t.group({
                        "Rekening courant": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Informele rekeningen")])),
                    })),
                })),
                "BTW-periode": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Resultaat"), sh.vp.g("BTW periodes")])),
                // "BTW-regime": sh.prop(sh.t.state({
                //     "Binnenland: heffing verlegd": sh.toption(sh.t.nothing()),
                //     "Geen BTW van toepassing": sh.toption(sh.t.nothing()),
                //     "Import van buiten de EU": sh.toption(sh.t.nothing()),
                //     "Intracommunautair": sh.toption(sh.t.nothing()),
                //     "Standaard": sh.toption(sh.t.group({
                //     })),
                // })),
                "Brondocument": sh.prop(sh.t.state({
                    "Toegevoegd": sh.toption(sh.t.group({
                        "Document": sh.prop(sh.t.text_global("Bestandsnaam")),
                    })),
                    "Niet van toepassing": sh.toption(sh.t.nothing()),
                    "Ontbreekt": sh.toption(sh.t.nothing()),
                    // "Nog toevoegen": tstate(sh.t.nothing()),
                })),
                "Datum": sh.prop(sh.t.simple("Datum")),
                "Regels": sh.prop(sh.t.dictionary(sh.t.group({
                    "Bedrag": sh.prop(sh.t.state({
                        "Bekend": sh.toption(sh.t.group({
                            //de volgende 2 properties moeten omgedraaid worden
                            "BTW-bedrag": sh.prop(sh.t.simple("Bedrag")),
                            "Bedrag inclusief geheven BTW": sh.prop(sh.t.simple("Bedrag")),
                        }))
                    })),
                    "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                    "Type": sh.prop(sh.t.state({
                        "Balans": sh.toption(sh.t.group({
                            "Balans item": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Overige balans items")])),
                        })),
                        "Kosten": sh.toption(sh.t.group({
                            "Grootboekrekening": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Resultaat")])),
                        })),
                    })),
                }))),
                "Type": sh.prop(sh.t.state({
                    "Bonnetje": sh.toption(sh.t.nothing()),
                    "Inkoop (met crediteur)": sh.toption(sh.t.group({
                        "Crediteur": sh.prop(sh.t.reference("Beheer", [sh.vp.g("Leveranciers")])),
                        "Factuurnummer": sh.prop(sh.t.text_global("Benaming")),
                    })),
                    "Loonheffing": sh.toption(sh.t.group({
                        "Ronde": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Resultaat"), sh.vp.g("Salarisrondes")])),
                    })),
                    "Salaris": sh.toption(sh.t.group({
                        "Ronde": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Resultaat"), sh.vp.g("Salarisrondes")])),
                        "Medewerker": sh.prop(sh.t.reference("Beheer", [sh.vp.g("Medewerkers")])),
                    })),
                })),
            }))),
            "Verkopen": sh.prop(sh.t.dictionary(sh.t.group({
                "Afhandeling": sh.prop(sh.t.state({
                    "Mutaties": sh.toption(sh.t.nothing()),
                    "Rekening courant": sh.toption(sh.t.group({
                        "Rekening courant": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Informele rekeningen")])),
                    })),
                })),
                "Betalingstermijn": sh.prop(sh.t.simple("Dagen")),
                "BTW-periode": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Resultaat"), sh.vp.g("BTW periodes")])),
                "Brondocument": sh.prop(sh.t.state({
                    "Toegevoegd": sh.toption(sh.t.group({
                        "Document": sh.prop(sh.t.text_global("Bestandsnaam"))
                    })),
                })),
                "Debiteur": sh.prop(sh.t.reference("Beheer", [sh.vp.g("Klanten")])),
                "Contracttype": sh.prop(sh.t.state({
                    "Project": sh.toption(sh.t.group({
                        "Project": sh.prop(sh.t.reference("Beheer", [sh.vp.g("Klanten"), sh.vp.d(), sh.vp.g("Projecten")])),
                        "Offerte": sh.prop(sh.t.reference("Beheer", [sh.vp.g("Klanten"), sh.vp.d(), sh.vp.g("Projecten"), sh.vp.d(), sh.vp.g("Offertes")])),
                    })),
                    "Licentieovereenkomst": sh.toption(sh.t.group({
                        "Overeenkomst": sh.prop(sh.t.reference("Beheer", [sh.vp.g("Klanten"), sh.vp.d(), sh.vp.g("Licentieovereenkomsten")])),
                    })),
                })),
                "Datum": sh.prop(sh.t.simple("Datum")),
                "Regels": sh.prop(sh.t.dictionary(sh.t.group({
                    "BTW-regime": sh.prop(sh.t.state({
                        "Intracommunautair": sh.toption(sh.t.nothing()),
                        "Standaard": sh.toption(sh.t.group({
                            "BTW-categorie": sh.prop(sh.t.reference("Beheer", [sh.vp.g("BTW-categorieen")])),
                        })),
                        "Binnenland: heffing verlegd": sh.toption(sh.t.nothing()),
                    })),
                    "Bedrag exclusief BTW": sh.prop(sh.t.simple("Bedrag")),
                    "Contracttype": sh.prop(sh.t.state({
                        "Project": sh.toption(sh.t.group({
                            "Opbrengst": sh.prop(sh.t.reference("Beheer", [sh.vp.g("Klanten"), sh.vp.d(), sh.vp.g("Projecten"), sh.vp.d(), sh.vp.g("Offertes"), sh.vp.d(), sh.vp.g("Opbrengsten")])),
                        })),
                        "Los": sh.toption(sh.t.nothing()),
                        "Licentieovereenkomst": sh.toption(sh.t.group({
                            "Periode": sh.prop(sh.t.reference("Beheer", [sh.vp.g("Klanten"), sh.vp.d(), sh.vp.g("Licentieovereenkomsten"), sh.vp.d(), sh.vp.g("Periodes")])),
                        })),
                    })),
                    "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                    "Type": sh.prop(sh.t.state({
                        "Opbrengsten": sh.toption(sh.t.group({
                            "Grootboekrekening": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Resultaat")])),
                        })),
                        "Balans": sh.toption(sh.t.group({
                            "Balans item": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Overige balans items")])),
                        })),
                    })),
                }))),
            }))),
        })),

        "Mutaties": sh.module_(sh.t.group({
            "Verrekenposten": sh.prop(sh.t.dictionary(sh.t.group({
                "Stam": sh.prop(sh.t.reference_derived("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Verrekenposten"), sh.vp.d()])),
                "Mutaties": sh.prop(sh.t.dictionary(sh.t.group({
                    "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                    "Afhandeling": sh.prop(sh.t.state({
                        "Resultaat": sh.toption(sh.t.component("Rekening Mutatie")),
                        "Balans": sh.toption(sh.t.state({
                            "Informele rekening": sh.toption(sh.t.group({
                                "Informele rekening": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Informele rekeningen")])),
                            })),
                        }))
                    }))
                })))
            }))),
            "Bankrekeningen": sh.prop(sh.t.dictionary(sh.t.group({
                "Stam": sh.prop(sh.t.reference_derived("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Bankrekeningen"), sh.vp.d()])),
                "Mutatie Verwerkingen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Stam": sh.prop(sh.t.reference_derived("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Bankrekeningen"), sh.vp.d(), sh.vp.g("Mutaties"), sh.vp.d()])),
                    "type": sh.prop(sh.t.state({
                        "Resultaat": sh.toption(sh.t.component("Rekening Mutatie")),
                        "Balans": sh.toption(sh.t.state({
                            "Informele rekening": sh.toption(sh.t.group({
                                "Informele rekening": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Informele rekeningen")])),
                            })),
                            "Verrekenpost": sh.toption(sh.t.group({
                                "Verrekenpost": sh.prop(sh.t.reference("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Verrekenposten")])),
                            })),
                        })),
                    }))
                })))
            }))),
            "Overige Balans Items": sh.prop(sh.t.dictionary(sh.t.group({
                "Stam": sh.prop(sh.t.reference_derived("Jaarbeheer", [sh.vp.g("Balans"), sh.vp.g("Overige balans items"), sh.vp.d()])),
                "Memoriaal Boekingen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                    "Datum": sh.prop(sh.t.simple("Datum")),
                    "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                    "Grootboekrekening": sh.prop(sh.t.reference("Grootboekrekeningen", [sh.vp.g("Resultaat")])),
                })))
            }))),
        })),

        "Rekening Mutatie": sh.module_(sh.t.group({
            "Jaar": sh.prop(sh.t.optional(sh.t.reference("Jaren", []))),
            "type": sh.prop(sh.t.state({
                "Inkoop": sh.toption(sh.t.reference("Handelstransacties", [sh.vp.g("Inkopen")])),
                "Verkoop": sh.toption(sh.t.reference("Handelstransacties", [sh.vp.g("Verkopen")])),
                "BTW-periode": sh.toption(sh.t.reference("Jaarbeheer", [sh.vp.g("Resultaat"), sh.vp.g("BTW periodes")])),
            }))
        })),

        "Jaren": sh.module_(sh.t.dictionary(sh.t.group({
            "Afgesloten": sh.prop(sh.t.state({
                "Ja": sh.toption(sh.t.nothing()),
                "Nee": sh.toption(sh.t.nothing()),
            })),
            "Startdatum boekjaar": sh.prop(sh.t.simple("Datum")),
            "Grootboekrekeningen": sh.prop(sh.t.component("Grootboekrekeningen")),
            "Eerste boekjaar": sh.prop(sh.t.component("Eerste boekjaar")),
            "Jaarbeheer": sh.prop(sh.t.component("Jaarbeheer")),
            "Handelstransacties": sh.prop(sh.t.component("Handelstransacties")),
            "Mutaties": sh.prop(sh.t.component("Mutaties")),
        }))),

        "Eerste boekjaar": sh.module_(sh.t.state({
            "Ja": sh.toption(sh.t.nothing()),
            "Nee": sh.toption(sh.t.group({
                "Vorig boekjaar": sh.prop(sh.t.reference("Jaren", [])),
            })),
        })),
    }
)