
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Root": sh.module_(sh.t.group({
            "Bankrekeningen": sh.prop(sh.t.dictionary(sh.t.group({}))),
            "Beheer": sh.prop(sh.t.group({
                "Balans": sh.prop(sh.t.group({
                    "Grootboekrekeningen": sh.prop(sh.t.dictionary(sh.t.group({
                        "Hoofdcategorie": sh.prop(sh.t.text_global("Pseudo Reference")),
                        "Subcategorie": sh.prop(sh.t.text_global("Pseudo Reference")),
                        "Zijde": sh.prop(sh.t.state({
                            "Activa": sh.toption(sh.t.group({})),
                            "Passiva": sh.toption(sh.t.group({})),
                        })),
                    }))),
                    "Hoofdcategorieen": sh.prop(sh.t.dictionary(sh.t.group({
                        "Zijde": sh.prop(sh.t.state({
                            "Activa": sh.toption(sh.t.group({})),
                            "Passiva": sh.toption(sh.t.group({})),
                        })),
                        "Subcategorieen": sh.prop(sh.t.dictionary(sh.t.group({
                            "Hoofdcategorie fiscus": sh.prop(sh.t.text_global("Pseudo Reference")),
                            "Subcategorie fiscus": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })))
                    }))),
                    "Hoofdcategorieen fiscus": sh.prop(sh.t.dictionary(sh.t.group({
                        "Zijde": sh.prop(sh.t.state({
                            "Activa": sh.toption(sh.t.group({})),
                            "Passiva": sh.toption(sh.t.group({})),
                        })),
                        "Subcategorieen": sh.prop(sh.t.dictionary(sh.t.group({})))
                    }))),
                })),
                "BTW-categorieen": sh.prop(sh.t.dictionary(sh.t.group({
                    "BTW-heffing": sh.prop(sh.t.state({
                        "Ja": sh.toption(sh.t.group({
                            "BTW-promillage": sh.prop(sh.t.simple("Promillage")),
                        })),
                        "Nee": sh.toption(sh.t.group({}))
                    }))
                }))),
                "Gebruikers": sh.prop(sh.t.dictionary(sh.t.group({
                    "Volledige naam": sh.prop(sh.t.text_global("Benaming")),
                    "Wachtwoord": sh.prop(sh.t.text_global("Wachtwoord")),
                }))),
                "Huidige datum": sh.prop(sh.t.simple("Datum")),
                "Resultaat": sh.prop(sh.t.group({
                    "Correctietypes vennootschapsbelasting": sh.prop(sh.t.dictionary(sh.t.group({
                        "Te corrigeren promillage": sh.prop(sh.t.simple("Promillage")),
                    }))),
                    "Grootboekrekeningen": sh.prop(sh.t.dictionary(sh.t.group({
                        "Hoofdcategorie": sh.prop(sh.t.text_global("Pseudo Reference")),
                        "Subcategorie": sh.prop(sh.t.text_global("Pseudo Reference")),
                        "Zijde": sh.prop(sh.t.state({
                            "Kosten": sh.toption(sh.t.group({
                                "Correctie op vennootschapsbelasting": sh.prop(sh.t.state({
                                    "Ja": sh.toption(sh.t.group({
                                        "Correctietype": sh.prop(sh.t.text_global("Pseudo Reference")),
                                    })),
                                    "Nee": sh.toption(sh.t.group({})),
                                }))
                            })),
                            "Opbrengsten": sh.toption(sh.t.group({})),
                        })),
                    }))),
                    "Hoofdcategorieen": sh.prop(sh.t.dictionary(sh.t.group({
                        "Zijde": sh.prop(sh.t.state({
                            "Kosten": sh.toption(sh.t.group({})),
                            "Opbrengsten": sh.toption(sh.t.group({})),
                        })),
                        "Subcategorieen": sh.prop(sh.t.dictionary(sh.t.group({
                            "Hoofdcategorie fiscus": sh.prop(sh.t.text_global("Pseudo Reference")),
                            "Subcategorie fiscus": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })))
                    }))),
                    "Hoofdcategorieen fiscus": sh.prop(sh.t.dictionary(sh.t.group({
                        "Zijde": sh.prop(sh.t.state({
                            "Kosten": sh.toption(sh.t.group({})),
                            "Opbrengsten": sh.toption(sh.t.group({})),
                        })),
                        "Subcategorieen": sh.prop(sh.t.dictionary(sh.t.group({})))
                    }))),
                }))
            })),
            "Informele rekeningen": sh.prop(sh.t.dictionary(sh.t.group({}))),
            "Jaren": sh.prop(sh.t.dictionary(sh.t.group({
                "Afgesloten": sh.prop(sh.t.state({
                    "Ja": sh.toption(sh.t.group({})),
                    "Nee": sh.toption(sh.t.group({})),
                })),
                "Balans grootboekrekeningen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Type": sh.prop(sh.t.state({
                        "Bankrekening": sh.toption(sh.t.group({})),
                        "Overig": sh.toption(sh.t.group({})),
                        "Informele rekening": sh.toption(sh.t.group({})),
                    }))
                }))),
                "Bankrekeningen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Beginsaldo": sh.prop(sh.t.simple("Bedrag")),
                    "Grootboekrekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                    "Mutaties": sh.prop(sh.t.dictionary(sh.t.group({
                        "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                        "Datum": sh.prop(sh.t.simple("Datum")),
                        "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                        "Status": sh.prop(sh.t.state({
                            "Nog te verwerken": sh.toption(sh.t.group({})),
                            "Verwerkt": sh.toption(sh.t.group({
                                "Afhandeling": sh.prop(sh.t.state({
                                    "Inkoop": sh.toption(sh.t.group({
                                        "Jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                                        "Inkoop": sh.prop(sh.t.text_global("Pseudo Reference")),
                                    })),
                                    "Verrekenpost": sh.toption(sh.t.group({
                                        "Verrekenpost": sh.prop(sh.t.text_global("Pseudo Reference")),
                                    })),
                                    "BTW-periode": sh.toption(sh.t.group({
                                        "Jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                                        "BTW-periode": sh.prop(sh.t.text_global("Pseudo Reference")),
                                    })),
                                    "Verkoop": sh.toption(sh.t.group({
                                        "Jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                                        "Verkoop": sh.prop(sh.t.text_global("Pseudo Reference")),
                                    })),
                                    "Informele rekening": sh.toption(sh.t.group({
                                        "Informele rekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                                    })),
                                }))
                            })),
                        }))
                    }))),
                    "Nieuw": sh.prop(sh.t.state({
                        "Ja": sh.toption(sh.t.group({})),
                        "Nee": sh.toption(sh.t.group({
                            "Jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                            "Rekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                    })),
                }))),
                "Beginsaldo nog aan te geven BTW": sh.prop(sh.t.simple("Bedrag")),
                "Beginsaldo winstreserve": sh.prop(sh.t.simple("Bedrag")),
                "BTW periode saldo": sh.prop(sh.t.group({
                    "Grootboekrekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                })),
                "BTW periodes": sh.prop(sh.t.dictionary(sh.t.group({
                    "1. BTW-categorieen": sh.prop(sh.t.dictionary(sh.t.group({}))),
                    "Documenten": sh.prop(sh.t.dictionary(sh.t.group({
                        "Bestand": sh.prop(sh.t.component("Bestandsnaam")),
                    }))),
                    "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                    "Status": sh.prop(sh.t.state({
                        "Aangegeven": sh.toption(sh.t.group({
                            "Afronding": sh.prop(sh.t.simple("Bedrag")),
                            "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                            "Datum": sh.prop(sh.t.simple("Datum")),
                        })),
                        "Openstaand": sh.toption(sh.t.group({})),
                    })),
                }))),
                "Eerste boekjaar": sh.prop(sh.t.state({
                    "Ja": sh.toption(sh.t.group({})),
                    "Nee": sh.toption(sh.t.group({
                        "Vorig boekjaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                    })),
                })),
                "Grootboekrekening voor BTW afrondingen": sh.prop(sh.t.text_global("Pseudo Reference")),
                "Grootboekrekening voor nog aan te geven BTW": sh.prop(sh.t.text_global("Pseudo Reference")),
                "Grootboekrekening voor resultaat dit jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                "Grootboekrekening voor winstreserve": sh.prop(sh.t.text_global("Pseudo Reference")),
                "Informele rekeningen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Beginsaldo": sh.prop(sh.t.simple("Bedrag")),
                    "Grootboekrekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                    "Nieuw": sh.prop(sh.t.state({
                        "Ja": sh.toption(sh.t.group({})),
                        "Nee": sh.toption(sh.t.group({
                            "Jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                            "Rekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                    }))
                }))),
                "Inkopen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Afhandeling": sh.prop(sh.t.state({
                        "Nog te betalen": sh.toption(sh.t.group({
                            "Betalingstermijn": sh.prop(sh.t.simple("Dagen")),
                        })),
                        "Mutaties": sh.toption(sh.t.group({})),
                        "Rekening courant": sh.toption(sh.t.group({
                            "Rekening courant": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                    })),
                    "BTW-regime": sh.prop(sh.t.state({
                        "Binnenland: heffing verlegd": sh.toption(sh.t.group({
                            "BTW-periode": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                        "Geen BTW van toepassing": sh.toption(sh.t.group({
                            "BTW-periode": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                        "Import van buiten de EU": sh.toption(sh.t.group({
                            "BTW-periode": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                        "Intracommunautair": sh.toption(sh.t.group({
                            "BTW-periode": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                        "Standaard": sh.toption(sh.t.group({
                            "BTW-periode": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                    })),
                    "Brondocument": sh.prop(sh.t.state({
                        "Toegevoegd": sh.toption(sh.t.group({
                            "Document": sh.prop(sh.t.component("Bestandsnaam")),
                        })),
                        "Niet van toepassing": sh.toption(sh.t.group({})),
                        "Ontbreekt": sh.toption(sh.t.group({})),
                        "Nog toevoegen": sh.toption(sh.t.group({})),
                    })),
                    "Datum": sh.prop(sh.t.simple("Datum")),
                    "Regels": sh.prop(sh.t.dictionary(sh.t.group({
                        "Bedrag": sh.prop(sh.t.state({
                            "Bekend": sh.toption(sh.t.group({
                                "BTW-bedrag": sh.prop(sh.t.simple("Bedrag")),
                                "Bedrag inclusief geheven BTW": sh.prop(sh.t.simple("Bedrag")),
                            }))
                        })),
                        "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                        "Type": sh.prop(sh.t.state({
                            "Balans": sh.toption(sh.t.group({
                                "Balans item": sh.prop(sh.t.text_global("Pseudo Reference")),
                            })),
                            "Kosten": sh.toption(sh.t.group({
                                "Grootboekrekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                            })),
                        })),
                    }))),
                    "Type": sh.prop(sh.t.state({
                        "Bonnetje": sh.toption(sh.t.group({})),
                        "Inkoop (met crediteur)": sh.toption(sh.t.group({
                            "Crediteur": sh.prop(sh.t.text_global("Pseudo Reference")),
                            "Factuurnummer": sh.prop(sh.t.text_global("Benaming"))
                        })),
                        "Loonheffing": sh.toption(sh.t.group({
                            "Ronde": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                        "Salaris": sh.toption(sh.t.group({
                            "Ronde": sh.prop(sh.t.text_global("Pseudo Reference")),
                            "Medewerker": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                    })),
                }))),
                "Inkoop saldo": sh.prop(sh.t.group({
                    "Grootboekrekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                })),
                "Overige balans items": sh.prop(sh.t.dictionary(sh.t.group({
                    "Beginsaldo": sh.prop(sh.t.simple("Bedrag")),
                    "Grootboekrekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                    "Memoriaal boekingen": sh.prop(sh.t.dictionary(sh.t.group({
                        "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                        "Datum": sh.prop(sh.t.simple("Datum")),
                        "Grootboekrekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                        "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                    }))),
                    "Nieuw": sh.prop(sh.t.state({
                        "Ja": sh.toption(sh.t.group({})),
                        "Nee": sh.toption(sh.t.group({
                            "Jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                            "Balans item": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                    })),
                }))),
                "Resultaat grootboekrekeningen": sh.prop(sh.t.dictionary(sh.t.group({}))),
                "Salarisrondes": sh.prop(sh.t.dictionary(sh.t.group({}))),
                "Startdatum boekjaar": sh.prop(sh.t.simple("Datum")),
                "Verkoop saldo": sh.prop(sh.t.group({
                    "Grootboekrekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                })),
                "Verkopen": sh.prop(sh.t.dictionary(sh.t.group({
                    "Afhandeling": sh.prop(sh.t.state({
                        "Mutaties": sh.toption(sh.t.group({})),
                        "Rekening courant": sh.toption(sh.t.group({
                            "Rekening courant": sh.prop(sh.t.text_global("Pseudo Reference"))
                        })),
                    })),
                    "Betalingstermijn": sh.prop(sh.t.simple("Dagen")),
                    "BTW-periode": sh.prop(sh.t.text_global("Pseudo Reference")),
                    "Brondocument": sh.prop(sh.t.state({
                        "Toegevoegd": sh.toption(sh.t.group({
                            "Document": sh.prop(sh.t.component("Bestandsnaam"))
                        })),
                    })),
                    "Contracttype": sh.prop(sh.t.state({
                        "Project": sh.toption(sh.t.group({
                            "Project": sh.prop(sh.t.text_global("Pseudo Reference")),
                            "Offerte": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                        "Licentieovereenkomst": sh.toption(sh.t.group({
                            "Overeenkomst": sh.prop(sh.t.text_global("Pseudo Reference")),
                        })),
                    })),
                    "Datum": sh.prop(sh.t.simple("Datum")),
                    "Debiteur": sh.prop(sh.t.text_global("Pseudo Reference")),
                    "Regels": sh.prop(sh.t.dictionary(sh.t.group({
                        "BTW-regime": sh.prop(sh.t.state({
                            "Intracommunautair": sh.toption(sh.t.group({})),
                            "Standaard": sh.toption(sh.t.group({
                                "BTW-categorie": sh.prop(sh.t.text_global("Pseudo Reference")),
                            })),
                            "Binnenland: heffing verlegd": sh.toption(sh.t.group({})),
                        })),
                        "Bedrag exclusief BTW": sh.prop(sh.t.simple("Bedrag")),
                        "Contracttype": sh.prop(sh.t.state({
                            "Project": sh.toption(sh.t.group({
                                "Opbrengst": sh.prop(sh.t.text_global("Pseudo Reference")),
                            })),
                            "Los": sh.toption(sh.t.group({})),
                            "Licentieovereenkomst": sh.toption(sh.t.group({
                                "Periode": sh.prop(sh.t.text_global("Pseudo Reference"))
                            })),
                        })),
                        "Omschrijving": sh.prop(sh.t.text_global("Omschrijving")),
                        "Type": sh.prop(sh.t.state({
                            "Opbrengsten": sh.toption(sh.t.group({
                                "Grootboekrekening": sh.prop(sh.t.text_global("Pseudo Reference")),
                            })),
                            "Balans": sh.toption(sh.t.group({
                                "Balans item": sh.prop(sh.t.text_global("Pseudo Reference")),
                            })),
                        })),
                    }))),
                }))),
                "Verrekenposten": sh.prop(sh.t.dictionary(sh.t.group({
                    "Mutaties": sh.prop(sh.t.dictionary(sh.t.group({
                        "Bedrag": sh.prop(sh.t.simple("Bedrag")),
                        "Afhandeling": sh.prop(sh.t.state({
                            "Inkoop": sh.toption(sh.t.group({
                                "Jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                                "Inkoop": sh.prop(sh.t.text_global("Pseudo Reference")),
                            })),
                            "Informele rekening": sh.toption(sh.t.group({
                                "Informele rekening": sh.prop(sh.t.text_global("Pseudo Reference"))
                            })),
                            "Verkoop": sh.toption(sh.t.group({
                                "Jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                                "Verkoop": sh.prop(sh.t.text_global("Pseudo Reference")),
                            })),
                            "BTW-periode": sh.toption(sh.t.group({
                                "Jaar": sh.prop(sh.t.text_global("Pseudo Reference")),
                                "BTW-periode": sh.prop(sh.t.text_global("Pseudo Reference")),
                            })),
                        }))
                    })))
                }))),
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
            "Leveranciers": sh.prop(sh.t.dictionary(sh.t.group({}))),
            "Medewerkers": sh.prop(sh.t.dictionary(sh.t.group({}))),
        })),
        
        // "Bestandsnaam": type(sh.t.group({
        //     "Naam": sh.prop(sh.t.text_global("text")),
        //     "Extensie": sh.prop(sh.t.text_global("text")),
        // }))  

        "Bestandsnaam": sh.module_(sh.t.group({
            "stem": sh.prop(sh.t.text_global("text")),
            "extension": sh.prop(sh.t.text_global("text")),
        })),
    }
)