import * as _pi from 'pareto-core-interface'

import {
    n,
    types,

    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Root": type(t.group({
            "Bankrekeningen": prop(t.dictionary(t.group({}))),
            "Beheer": prop(t.group({
                "Balans": prop(t.group({
                    "Grootboekrekeningen": prop(t.dictionary(t.group({
                        "Hoofdcategorie": prop(t.text_global("Pseudo Reference")),
                        "Subcategorie": prop(t.text_global("Pseudo Reference")),
                        "Zijde": prop(t.state_group({
                            "Activa": tstate(t.group({})),
                            "Passiva": tstate(t.group({})),
                        })),
                    }))),
                    "Hoofdcategorieen": prop(t.dictionary(t.group({
                        "Zijde": prop(t.state_group({
                            "Activa": tstate(t.group({})),
                            "Passiva": tstate(t.group({})),
                        })),
                        "Subcategorieen": prop(t.dictionary(t.group({
                            "Hoofdcategorie fiscus": prop(t.text_global("Pseudo Reference")),
                            "Subcategorie fiscus": prop(t.text_global("Pseudo Reference")),
                        })))
                    }))),
                    "Hoofdcategorieen fiscus": prop(t.dictionary(t.group({
                        "Zijde": prop(t.state_group({
                            "Activa": tstate(t.group({})),
                            "Passiva": tstate(t.group({})),
                        })),
                        "Subcategorieen": prop(t.dictionary(t.group({})))
                    }))),
                })),
                "BTW-categorieen": prop(t.dictionary(t.group({
                    "BTW-heffing": prop(t.state_group({
                        "Ja": tstate(t.group({
                            "BTW-promillage": prop(t.number_global("Promillage")),
                        })),
                        "Nee": tstate(t.group({}))
                    }))
                }))),
                "Gebruikers": prop(t.dictionary(t.group({
                    "Volledige naam": prop(t.text_global("Benaming")),
                    "Wachtwoord": prop(t.text_global("Wachtwoord")),
                }))),
                "Huidige datum": prop(t.number_global("Datum")),
                "Resultaat": prop(t.group({
                    "Correctietypes vennootschapsbelasting": prop(t.dictionary(t.group({
                        "Te corrigeren promillage": prop(t.number_global("Promillage")),
                    }))),
                    "Grootboekrekeningen": prop(t.dictionary(t.group({
                        "Hoofdcategorie": prop(t.text_global("Pseudo Reference")),
                        "Subcategorie": prop(t.text_global("Pseudo Reference")),
                        "Zijde": prop(t.state_group({
                            "Kosten": tstate(t.group({
                                "Correctie op vennootschapsbelasting": prop(t.state_group({
                                    "Ja": tstate(t.group({
                                        "Correctietype": prop(t.text_global("Pseudo Reference")),
                                    })),
                                    "Nee": tstate(t.group({})),
                                }))
                            })),
                            "Opbrengsten": tstate(t.group({})),
                        })),
                    }))),
                    "Hoofdcategorieen": prop(t.dictionary(t.group({
                        "Zijde": prop(t.state_group({
                            "Kosten": tstate(t.group({})),
                            "Opbrengsten": tstate(t.group({})),
                        })),
                        "Subcategorieen": prop(t.dictionary(t.group({
                            "Hoofdcategorie fiscus": prop(t.text_global("Pseudo Reference")),
                            "Subcategorie fiscus": prop(t.text_global("Pseudo Reference")),
                        })))
                    }))),
                    "Hoofdcategorieen fiscus": prop(t.dictionary(t.group({
                        "Zijde": prop(t.state_group({
                            "Kosten": tstate(t.group({})),
                            "Opbrengsten": tstate(t.group({})),
                        })),
                        "Subcategorieen": prop(t.dictionary(t.group({})))
                    }))),
                }))
            })),
            "Informele rekeningen": prop(t.dictionary(t.group({}))),
            "Jaren": prop(t.dictionary(t.group({
                "Afgesloten": prop(t.state_group({
                    "Ja": tstate(t.group({})),
                    "Nee": tstate(t.group({})),
                })),
                "Balans grootboekrekeningen": prop(t.dictionary(t.group({
                    "Type": prop(t.state_group({
                        "Bankrekening": tstate(t.group({})),
                        "Overig": tstate(t.group({})),
                        "Informele rekening": tstate(t.group({})),
                    }))
                }))),
                "Bankrekeningen": prop(t.dictionary(t.group({
                    "Beginsaldo": prop(t.number_global("Bedrag")),
                    "Grootboekrekening": prop(t.text_global("Pseudo Reference")),
                    "Mutaties": prop(t.dictionary(t.group({
                        "Bedrag": prop(t.number_global("Bedrag")),
                        "Datum": prop(t.number_global("Datum")),
                        "Omschrijving": prop(t.text_global("Omschrijving")),
                        "Status": prop(t.state_group({
                            "Nog te verwerken": tstate(t.group({})),
                            "Verwerkt": tstate(t.group({
                                "Afhandeling": prop(t.state_group({
                                    "Inkoop": tstate(t.group({
                                        "Jaar": prop(t.text_global("Pseudo Reference")),
                                        "Inkoop": prop(t.text_global("Pseudo Reference")),
                                    })),
                                    "Verrekenpost": tstate(t.group({
                                        "Verrekenpost": prop(t.text_global("Pseudo Reference")),
                                    })),
                                    "BTW-periode": tstate(t.group({
                                        "Jaar": prop(t.text_global("Pseudo Reference")),
                                        "BTW-periode": prop(t.text_global("Pseudo Reference")),
                                    })),
                                    "Verkoop": tstate(t.group({
                                        "Jaar": prop(t.text_global("Pseudo Reference")),
                                        "Verkoop": prop(t.text_global("Pseudo Reference")),
                                    })),
                                    "Informele rekening": tstate(t.group({
                                        "Informele rekening": prop(t.text_global("Pseudo Reference")),
                                    })),
                                }))
                            })),
                        }))
                    }))),
                    "Nieuw": prop(t.state_group({
                        "Ja": tstate(t.group({})),
                        "Nee": tstate(t.group({
                            "Jaar": prop(t.text_global("Pseudo Reference")),
                            "Rekening": prop(t.text_global("Pseudo Reference")),
                        })),
                    })),
                }))),
                "Beginsaldo nog aan te geven BTW": prop(t.number_global("Bedrag")),
                "Beginsaldo winstreserve": prop(t.number_global("Bedrag")),
                "BTW periode saldo": prop(t.group({
                    "Grootboekrekening": prop(t.text_global("Pseudo Reference")),
                })),
                "BTW periodes": prop(t.dictionary(t.group({
                    "1. BTW-categorieen": prop(t.dictionary(t.group({}))),
                    "Documenten": prop(t.dictionary(t.group({
                        "Bestand": prop(t.component("Bestandsnaam")),
                    }))),
                    "Omschrijving": prop(t.text_global("Omschrijving")),
                    "Status": prop(t.state_group({
                        "Aangegeven": tstate(t.group({
                            "Afronding": prop(t.number_global("Bedrag")),
                            "Bedrag": prop(t.number_global("Bedrag")),
                            "Datum": prop(t.number_global("Datum")),
                        })),
                        "Openstaand": tstate(t.group({})),
                    })),
                }))),
                "Eerste boekjaar": prop(t.state_group({
                    "Ja": tstate(t.group({})),
                    "Nee": tstate(t.group({
                        "Vorig boekjaar": prop(t.text_global("Pseudo Reference")),
                    })),
                })),
                "Grootboekrekening voor BTW afrondingen": prop(t.text_global("Pseudo Reference")),
                "Grootboekrekening voor nog aan te geven BTW": prop(t.text_global("Pseudo Reference")),
                "Grootboekrekening voor resultaat dit jaar": prop(t.text_global("Pseudo Reference")),
                "Grootboekrekening voor winstreserve": prop(t.text_global("Pseudo Reference")),
                "Informele rekeningen": prop(t.dictionary(t.group({
                    "Beginsaldo": prop(t.number_global("Bedrag")),
                    "Grootboekrekening": prop(t.text_global("Pseudo Reference")),
                    "Nieuw": prop(t.state_group({
                        "Ja": tstate(t.group({})),
                        "Nee": tstate(t.group({
                            "Jaar": prop(t.text_global("Pseudo Reference")),
                            "Rekening": prop(t.text_global("Pseudo Reference")),
                        })),
                    }))
                }))),
                "Inkopen": prop(t.dictionary(t.group({
                    "Afhandeling": prop(t.state_group({
                        "Mutaties": tstate(t.group({})),
                        "Rekening courant": tstate(t.group({
                            "Rekening courant": prop(t.text_global("Pseudo Reference")),
                        })),
                    })),
                    "BTW-regime": prop(t.state_group({
                        "Binnenland: heffing verlegd": tstate(t.group({})),
                        "Geen BTW van toepassing": tstate(t.group({
                            "BTW-periode": prop(t.text_global("Pseudo Reference")),
                        })),
                        "Import van buiten de EU": tstate(t.group({})),
                        "Intracommunautair": tstate(t.group({})),
                        "Standaard": tstate(t.group({
                            "BTW-periode": prop(t.text_global("Pseudo Reference")),
                        })),
                    })),
                    "Brondocument": prop(t.state_group({
                        "Toegevoegd": tstate(t.group({
                            "Document": prop(t.component("Bestandsnaam")),
                        })),
                        "Niet van toepassing": tstate(t.group({})),
                        "Ontbreekt": tstate(t.group({})),
                        "Nog toevoegen": tstate(t.group({})),
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
                                "Balans item": prop(t.text_global("Pseudo Reference")),
                            })),
                            "Kosten": tstate(t.group({
                                "Grootboekrekening": prop(t.text_global("Pseudo Reference")),
                            })),
                        })),
                    }))),
                    "Type": prop(t.state_group({
                        "Bonnetje": tstate(t.group({})),
                        "Inkoop (met crediteur)": tstate(t.group({
                            "Crediteur": prop(t.text_global("Pseudo Reference")),
                            "Factuurnummer": prop(t.text_global("Benaming"))
                        })),
                        "Loonheffing": tstate(t.group({
                            "Ronde": prop(t.text_global("Pseudo Reference")),
                        })),
                        "Salaris": tstate(t.group({
                            "Ronde": prop(t.text_global("Pseudo Reference")),
                            "Medewerker": prop(t.text_global("Pseudo Reference")),
                        })),
                    })),
                }))),
                "Inkoop saldo": prop(t.group({
                    "Grootboekrekening": prop(t.text_global("Pseudo Reference")),
                })),
                "Overige balans items": prop(t.dictionary(t.group({
                    "Beginsaldo": prop(t.number_global("Bedrag")),
                    "Grootboekrekening": prop(t.text_global("Pseudo Reference")),
                    "Memoriaal boekingen": prop(t.dictionary(t.group({
                        "Bedrag": prop(t.number_global("Bedrag")),
                        "Datum": prop(t.number_global("Datum")),
                        "Grootboekrekening": prop(t.text_global("Pseudo Reference")),
                        "Omschrijving": prop(t.text_global("Omschrijving")),
                    }))),
                    "Nieuw": prop(t.state_group({
                        "Ja": tstate(t.group({})),
                        "Nee": tstate(t.group({
                            "Jaar": prop(t.text_global("Pseudo Reference")),
                            "Balans item": prop(t.text_global("Pseudo Reference")),
                        })),
                    })),
                }))),
                "Resultaat grootboekrekeningen": prop(t.dictionary(t.group({}))),
                "Salarisrondes": prop(t.dictionary(t.group({}))),
                "Startdatum boekjaar": prop(t.number_global("Datum")),
                "Verkoop saldo": prop(t.group({
                    "Grootboekrekening": prop(t.text_global("Pseudo Reference")),
                })),
                "Verkopen": prop(t.dictionary(t.group({
                    "Afhandeling": prop(t.state_group({
                        "Mutaties": tstate(t.group({})),
                        "Rekening courant": tstate(t.group({
                            "Rekening courant": prop(t.text_global("Pseudo Reference"))
                        })),
                    })),
                    "Betalingstermijn": prop(t.number_global("Dagen")),
                    "BTW-periode": prop(t.text_global("Pseudo Reference")),
                    "Brondocument": prop(t.state_group({
                        "Toegevoegd": tstate(t.group({
                            "Document": prop(t.component("Bestandsnaam"))
                        })),
                    })),
                    "Contracttype": prop(t.state_group({
                        "Project": tstate(t.group({
                            "Project": prop(t.text_global("Pseudo Reference")),
                            "Offerte": prop(t.text_global("Pseudo Reference")),
                        })),
                        "Licentieovereenkomst": tstate(t.group({
                            "Overeenkomst": prop(t.text_global("Pseudo Reference")),
                        })),
                    })),
                    "Datum": prop(t.number_global("Datum")),
                    "Debiteur": prop(t.text_global("Pseudo Reference")),
                    "Regels": prop(t.dictionary(t.group({
                        "BTW-regime": prop(t.state_group({
                            "Intracommunautair": tstate(t.group({})),
                            "Standaard": tstate(t.group({
                                "BTW-categorie": prop(t.text_global("Pseudo Reference")),
                            })),
                            "Binnenland: heffing verlegd": tstate(t.group({})),
                        })),
                        "Bedrag exclusief BTW": prop(t.number_global("Bedrag")),
                        "Contracttype": prop(t.state_group({
                            "Project": tstate(t.group({
                                "Opbrengst": prop(t.text_global("Pseudo Reference")),
                            })),
                            "Los": tstate(t.group({})),
                            "Licentieovereenkomst": tstate(t.group({
                                "Periode": prop(t.text_global("Pseudo Reference"))
                            })),
                        })),
                        "Omschrijving": prop(t.text_global("Omschrijving")),
                        "Type": prop(t.state_group({
                            "Opbrengsten": tstate(t.group({
                                "Grootboekrekening": prop(t.text_global("Pseudo Reference")),
                            })),
                            "Balans": tstate(t.group({
                                "Balans item": prop(t.text_global("Pseudo Reference")),
                            })),
                        })),
                    }))),
                }))),
                "Verrekenposten": prop(t.dictionary(t.group({
                    "Mutaties": prop(t.dictionary(t.group({
                        "Bedrag": prop(t.number_global("Bedrag")),
                        "Afhandeling": prop(t.state_group({
                            "Inkoop": tstate(t.group({
                                "Jaar": prop(t.text_global("Pseudo Reference")),
                                "Inkoop": prop(t.text_global("Pseudo Reference")),
                            })),
                            "Informele rekening": tstate(t.group({
                                "Informele rekening": prop(t.text_global("Pseudo Reference"))
                            })),
                            "Verkoop": tstate(t.group({
                                "Jaar": prop(t.text_global("Pseudo Reference")),
                                "Verkoop": prop(t.text_global("Pseudo Reference")),
                            })),
                            "BTW-periode": tstate(t.group({
                                "Jaar": prop(t.text_global("Pseudo Reference")),
                                "BTW-periode": prop(t.text_global("Pseudo Reference")),
                            })),
                        }))
                    })))
                }))),
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
            "Leveranciers": prop(t.dictionary(t.group({}))),
            "Medewerkers": prop(t.dictionary(t.group({}))),
        })),
        
        // "Bestandsnaam": type(t.group({
        //     "Naam": prop(t.text_local(text('single line'))),
        //     "Extensie": prop(t.text_local(text('single line'))),
        // }))  

        "Bestandsnaam": type(t.text_local(text('single line'))),
    }
)