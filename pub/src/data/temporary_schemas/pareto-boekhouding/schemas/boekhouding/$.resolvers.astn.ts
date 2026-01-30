import * as _pi from 'pareto-core/dist/interface'

import {
    resolvers, r, resolver, state, state_constrained, al, ls, av, gvs, rvs, oc,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Module_Resolvers = resolvers(
    {
        "Fiscaal": resolver(r.group({
            "Balans Hoofdcategorieen": r.dictionary(r.group({
                "Zijde": r.state({
                    "Activa": state(r.nothing()),
                    "Passiva": state(r.nothing())
                }),
                "Subcategorieen": r.dictionary(r.nothing())
            })),
            "Resultaat Hoofdcategorieen": r.dictionary(r.group({
                "Zijde": r.state({
                    "Kosten": state(r.nothing()),
                    "Opbrengsten": state(r.nothing())
                }),
                "Subcategorieen": r.dictionary(r.nothing())
            })),
        })),

        "Grootboek Categorieen": resolver(r.group({
            "Correctietypes vennootschapsbelasting": r.dictionary(r.group({
                "Te corrigeren promillage": r.number(),
            })),
            "Balans": r.dictionary(r.group({
                "Zijde": r.state({
                    "Activa": state(r.nothing()),
                    "Passiva": state(r.nothing())
                }),
                "Subcategorieen": r.dictionary(r.group({
                    "Hoofdcategorie fiscus": r.reference(gvs.dictionary(gvs.parameter("Fiscaal", [rvs.group("Balans Hoofdcategorieen")]))),
                    "Subcategorie fiscus": r.reference(gvs.dictionary(gvs.sibling("Hoofdcategorie fiscus", [rvs.reference(), rvs.group("Subcategorieen")]))),
                }))
            })),
            "Resultaat": r.dictionary(r.group({
                "Zijde": r.state({
                    "Kosten": state(r.nothing()),
                    "Opbrengsten": state(r.nothing())
                }),
                "Subcategorieen": r.dictionary(r.group({
                    "Hoofdcategorie fiscus": r.reference(gvs.dictionary(gvs.parameter("Fiscaal", [rvs.group("Resultaat Hoofdcategorieen")]))),
                    "Subcategorie fiscus": r.reference(gvs.dictionary(gvs.sibling("Hoofdcategorie fiscus", [rvs.reference(), rvs.group("Subcategorieen")]))),
                }))
            })),
        })),

        "Beheer": resolver(r.group({
            "BTW-categorieen": r.dictionary(r.group({
                "BTW-heffing": r.state({
                    "Ja": state(r.group({
                        "BTW-promillage": r.number(),
                    }))
                })
            })),
            "Grootboekrekeningen": r.group({
                "Balans": r.dictionary(r.group({
                    "Hoofdcategorie": r.reference(gvs.dictionary(gvs.parameter("Grootboek Categorieen", [rvs.group("Balans")]))),
                    "Subcategorie": r.reference(gvs.dictionary(gvs.sibling("Hoofdcategorie", [rvs.reference(), rvs.group("Subcategorieen")]))),
                    "Zijde": r.state({
                        "Activa": state(r.nothing()),
                        "Passiva": state(r.nothing())
                    }),
                })),
                "Resultaat": r.dictionary(r.group({
                    "Hoofdcategorie": r.reference(gvs.dictionary(gvs.parameter("Grootboek Categorieen", [rvs.group("Resultaat")]))),
                    "Subcategorie": r.reference(gvs.dictionary(gvs.sibling("Hoofdcategorie", [rvs.reference(), rvs.group("Subcategorieen")]))),
                    "Zijde": r.state({
                        "Kosten": state(r.group({
                            "Correctie op vennootschapsbelasting": r.state({
                                "Ja": state(r.group({
                                    "Correctietype": r.reference(gvs.dictionary(gvs.parameter("Grootboek Categorieen", [rvs.group("Correctietypes vennootschapsbelasting")]))),
                                })),
                                "Nee": state(r.nothing()),
                            })
                        })),
                        "Opbrengsten": state(r.nothing())
                    }),
                })),
            }),
            "Rekeningen": r.group({
                "Bank": r.dictionary(r.nothing()),
                "Informeel": r.dictionary(r.nothing()),

            }),
            "Gebruikers": r.dictionary(r.group({
                "Volledige naam": r.text(),
                "Wachtwoord": r.text(),
            })),
            "Klanten": r.dictionary(r.group({
                "Licentieovereenkomsten": r.dictionary(r.group({
                    "Periodes": r.dictionary(r.group({
                        "Bedrag": r.number(),
                    })),
                })),
                "Projecten": r.dictionary(r.group({
                    "Offertes": r.dictionary(r.group({
                        "Opbrengsten": r.dictionary(r.group({
                            "Type": r.state({
                                "Project": state(r.group({
                                    "Bedrag": r.number(),
                                    "Betaaldatum": r.number(),
                                })),
                            }),
                        })),
                    })),
                })),
            })),
            "Leveranciers": r.dictionary(r.nothing()),
            "Medewerkers": r.dictionary(r.nothing()),
        })),

        "Grootboekrekeningen": resolver(r.group({
            "Balans": r.dictionary(r.group({
                "Type": r.state({
                    "Bankrekening": state(r.nothing()),
                    "Overig": state(r.nothing()),
                    "Informele rekening": state(r.nothing())
                })
            })),
            "Resultaat": r.dictionary(r.nothing()),
        })),

        "Jaarbeheer": resolver(r.group({
            "Resultaat": r.group({
                "Grootboekrekening voor BTW afrondingen": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Resultaat")]))),
                "Salarisrondes": r.dictionary(r.nothing()),
                "BTW periodes": r.dictionary(r.group({
                    "1. BTW-categorieen": r.dictionary(r.nothing()),
                    "Documenten": r.dictionary(r.group({
                        "Bestand": r.text(),
                    })),
                    "Omschrijving": r.text(),
                    "Status": r.state({
                        "Aangegeven": state(r.group({
                            "Afronding": r.number(),
                            "Bedrag": r.number(),
                            "Datum": r.number(),
                        })),
                        "Openstaand": state(r.nothing()),
                    }),
                })),
            }),
            "Balans": r.group({
                "Beginsaldo nog aan te geven BTW": r.number(),
                "Beginsaldo winstreserve": r.number(),
                "Grootboekrekening voor nog aan te geven BTW": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor resultaat dit jaar": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor winstreserve": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor Inkoop saldo": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor Verkoop saldo": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Informele rekeningen": r.dictionary(r.group({
                    "Beginsaldo": r.number(),
                    "Grootboekrekening": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                    "Nieuw": r.state({
                        "Ja": state(r.nothing()),
                        "Nee": state_constrained(
                            {
                                "Niet Nieuw": oc.state(gvs.parameter("Eerste boekjaar", []), "Nee"),
                            },
                            r.group({
                                "Rekening": r.component("Verwijzing naar Informele rekening", {
                                    "Jaarbeheer": av.required(gvs.option_constraint("Niet Nieuw", [rvs.group("Vorig boekjaar"), rvs.reference(), rvs.group("Jaarbeheer"), rvs.component()])),
                                }, {}),
                            })
                        ),
                    })
                })),
                "Bankrekeningen": r.dictionary(r.group({
                    "Beginsaldo": r.number(),
                    "Grootboekrekening": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                    "Nieuw": r.state({
                        "Ja": state(r.nothing()),
                        "Nee": state_constrained(
                            {
                                "Niet Nieuw": oc.state(gvs.parameter("Eerste boekjaar", []), "Nee"),
                            },
                            r.group({
                                "Rekening": r.component("Verwijzing naar Bankrekening", {
                                    "Jaarbeheer": av.required(gvs.option_constraint("Niet Nieuw", [rvs.group("Vorig boekjaar"), rvs.reference(), rvs.group("Jaarbeheer"), rvs.component()])),
                                }, {}),
                            })
                        ),
                    }),
                    "Mutaties": r.dictionary(r.group({
                        "Bedrag": r.number(),
                        "Datum": r.number(),
                        "Omschrijving": r.text(),
                    })),
                })),
                "Overige balans items": r.dictionary(r.component("Overige balans item", null, null)),
                "Verrekenposten": r.dictionary(r.nothing()),

            }),
        })),

        "Overige balans item": resolver(r.group({
            "Beginsaldo": r.number(),
            "Grootboekrekening": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
            "Nieuw": r.state({
                "Ja": state(r.nothing()),
                "Nee": state_constrained(
                    {
                        "Volgend boekjaar": oc.state(gvs.parameter("Eerste boekjaar", []), "Nee"),
                    },
                    r.group({
                        "Balans item": r.reference(gvs.dictionary(gvs.option_constraint("Volgend boekjaar", [rvs.group("Vorig boekjaar"), rvs.reference(), rvs.group("Jaarbeheer"), rvs.component(), rvs.group("Balans"), rvs.group("Overige balans items")])))
                    })
                ),
            }),
        })),

        "Verwijzing naar Informele rekening": resolver(r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))),
        "Verwijzing naar Bankrekening": resolver(r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Bankrekeningen")])))),

        "Handelstransacties": resolver(r.group({
            "Inkopen": r.dictionary(r.group({
                "Afhandeling": r.state({
                    "Mutaties": state(r.nothing()),
                    "Rekening courant": state(r.group({
                        "Rekening courant": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))
                    })),
                }),
                "BTW-regime": r.state({
                    "Binnenland: heffing verlegd": state(r.nothing()),
                    "Geen BTW van toepassing": state(r.nothing()),
                    "Import van buiten de EU": state(r.nothing()),
                    "Intracommunautair": state(r.nothing()),
                    "Standaard": state(r.group({
                        "BTW-periode": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("BTW periodes")]))),
                    })),
                }),
                "Brondocument": r.state({
                    "Toegevoegd": state(r.group({
                        "Document": r.text(),
                    })),
                    "Niet van toepassing": state(r.nothing()),
                    "Ontbreekt": state(r.nothing()),
                }),
                "Datum": r.number(),
                "Regels": r.dictionary(r.group({
                    "Bedrag": r.state({
                        "Bekend": state(r.group({
                            "BTW-bedrag": r.number(),
                            "Bedrag inclusief geheven BTW": r.number(),
                        }))
                    }),
                    "Omschrijving": r.text(),
                    "Type": r.state({
                        "Balans": state(r.group({
                            "Balans item": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Overige balans items")]))),
                        })),
                        "Kosten": state(r.group({
                            "Grootboekrekening": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Resultaat")]))),
                        })),
                    }),
                })),
                "Type": r.state({
                    "Bonnetje": state(r.nothing()),
                    "Inkoop (met crediteur)": state(r.group({
                        "Crediteur": r.reference(gvs.dictionary(gvs.parameter("Beheer", [rvs.group("Leveranciers")]))),
                        "Factuurnummer": r.text()
                    })),
                    "Loonheffing": state(r.group({
                        "Ronde": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("Salarisrondes")]))),
                    })),
                    "Salaris": state(r.group({
                        "Ronde": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("Salarisrondes")]))),
                        "Medewerker": r.reference(gvs.dictionary(gvs.parameter("Beheer", [rvs.group("Medewerkers")]))),
                    })),
                }),
            })),
            "Verkopen": r.dictionary(r.group({
                "Datum": r.number(),
                "Betalingstermijn": r.number(),
                "BTW-periode": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("BTW periodes")]))),
                "Brondocument": r.state({
                    "Toegevoegd": state(r.group({
                        "Document": r.text()
                    })),
                }),
                "Debiteur": r.reference(gvs.dictionary(gvs.parameter("Beheer", [rvs.group("Klanten")]))),
                "Contracttype": r.state({
                    "Project": state(r.group({
                        "Project": r.reference(gvs.dictionary(gvs.parent_sibling("Debiteur", [rvs.reference(), rvs.group("Projecten")]))),
                        "Offerte": r.reference(gvs.dictionary(gvs.sibling("Project", [rvs.reference(), rvs.group("Offertes")]))),
                    })),
                    "Licentieovereenkomst": state(r.group({
                        "Overeenkomst": r.reference(gvs.dictionary(gvs.parent_sibling("Debiteur", [rvs.reference(), rvs.group("Licentieovereenkomsten")]))),
                    })),
                }),
                "Afhandeling": r.state({
                    "Mutaties": state(r.nothing()),
                    "Rekening courant": state(r.group({
                        "Rekening courant": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")]))),
                    })),
                }),
                "Regels": r.dictionary(r.group({
                    "BTW-regime": r.state({
                        "Intracommunautair": state(r.nothing()),
                        "Standaard": state(r.group({
                            "BTW-categorie": r.reference(gvs.dictionary(gvs.parameter("Beheer", [rvs.group("BTW-categorieen")]))),
                        })),
                        "Binnenland: heffing verlegd": state(r.nothing()),
                    }),
                    "Bedrag exclusief BTW": r.number(),
                    "Contracttype": r.state({
                        "Project": state_constrained({ "Definitie": oc.state(gvs.parent_sibling("Contracttype", []), "Project"), }, r.group({
                            "Opbrengst": r.reference(gvs.dictionary(gvs.option_constraint("Definitie", [rvs.group("Offerte"), rvs.reference(), rvs.group("Opbrengsten")]))),
                        })),
                        "Los": state(r.nothing()),
                        "Licentieovereenkomst": state_constrained({ "Definitie": oc.state(gvs.parent_sibling("Contracttype", []), "Licentieovereenkomst"), }, r.group({
                            "Periode": r.reference(gvs.dictionary(gvs.option_constraint("Definitie", [rvs.group("Overeenkomst"), rvs.reference(), rvs.group("Periodes")]))),
                        })),
                    }),
                    "Omschrijving": r.text(),
                    "Type": r.state({
                        "Opbrengsten": state(r.group({
                            "Grootboekrekening": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Resultaat")]))),
                        })),
                        "Balans": state(r.group({
                            "Balans item": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Overige balans items")]))),
                        })),
                    }),
                })),
            })),
        })),

        "Balans Resultaat Mutatie": resolver(r.group({
            "Jaar": r.optional(r.reference(ls.parameter("Jaren"))),
            "type": r.state({
                "Inkoop": state(r.reference(gvs.dictionary(gvs.parameter("Handelstransacties", [rvs.group("Inkopen")])))),
                "Verkoop": state(r.reference(gvs.dictionary(gvs.parameter("Handelstransacties", [rvs.group("Verkopen")])))),
                "BTW-periode": state(r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("BTW periodes")])))),
            })
        })),

        "Mutaties": resolver(r.group({
            "Verrekenpost mutaties": r.dictionary_linked(
                'sparse',
                gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Verrekenposten")]),
                r.dictionary(r.group({
                    "Bedrag": r.number(),
                    "Afhandeling": r.state({
                        "Resultaat": state(r.component("Balans Resultaat Mutatie", null, null)),
                        "Balans": state(r.state({
                            "Informele rekening": state(r.group({
                                "Informele rekening": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))
                            })),

                        })),
                    })
                })),
            ),
            "Bankrekening Mutatie Verwerkingen": r.dictionary_linked(
                'sparse',
                gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Bankrekeningen")]),
                r.dictionary(r.state({
                    "Resultaat": state(r.component("Balans Resultaat Mutatie", null, null)),
                    "Balans": state(r.state({
                        "Verrekenpost": state(r.group({
                            "Verrekenpost": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Verrekenposten")])))
                        })),
                        "Informele rekening": state(r.group({
                            "Informele rekening": r.reference(gvs.dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))
                        })),
                    })),
                })),
            ),
            "Memoriaal boekingen": r.dictionary_linked(
                'sparse',
                gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Overige balans items")]),
                r.dictionary(r.group({
                    "Bedrag": r.number(),
                    "Datum": r.number(),
                    "Grootboekrekening": r.reference(gvs.dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                    "Omschrijving": r.text(),
                })),
            ),
        })),

        "Eerste boekjaar": resolver(r.state({
            "Ja": state(r.nothing()),
            "Nee": state(r.group({
                "Vorig boekjaar": r.reference(ls.parameter("Jaren"))
            })),
        })),

        "Jaren": resolver(r.dictionary(r.group({
            "Afgesloten": r.state({
                "Ja": state(r.nothing()),
                "Nee": state(r.nothing()),
            }),
            "Startdatum boekjaar": r.number(),
            "Grootboekrekeningen": r.component("Grootboekrekeningen", {}, {}),
            "Eerste boekjaar": r.component("Eerste boekjaar", {}, {
                "Jaren": al.not_circular_dependent_siblings(),
            }),
            "Jaarbeheer": r.component("Jaarbeheer", {
                "Grootboekrekeningen": av.required(gvs.sibling("Grootboekrekeningen", [])),
                "Eerste boekjaar": av.required(gvs.sibling("Eerste boekjaar", [])),
            }, {
                "Jaren": al.not_circular_dependent_siblings(),
            }),
            "Handelstransacties": r.component("Handelstransacties", {
                "Beheer": av.parameter("Beheer"),
                "Grootboekrekeningen": av.required(gvs.sibling("Grootboekrekeningen", [])),
                "Jaarbeheer": av.required(gvs.sibling("Jaarbeheer", []))
            }, {}),
            "Mutaties": r.component("Mutaties", {
                "Beheer": av.parameter("Beheer"),
                "Grootboekrekeningen": av.required(gvs.sibling("Grootboekrekeningen", [])),
                "Jaarbeheer": av.required(gvs.sibling("Jaarbeheer", [])),
                "Handelstransacties": av.required(gvs.sibling("Handelstransacties", []))
            }, {
                "Jaren": al.not_circular_dependent_siblings()
            }),
        }))),

        "Root": resolver(r.group({
            "Fiscaal": r.component("Fiscaal", {}, {}),
            "Categorieen": r.component("Grootboek Categorieen", {
                "Fiscaal": av.required(gvs.sibling("Fiscaal", [])),
            }, {}),
            "Beheer": r.component("Beheer", {
                "Grootboek Categorieen": av.required(gvs.sibling("Categorieen", [])),
            }, {}),
            "Jaren": r.component("Jaren", {
                "Beheer": av.required(gvs.sibling("Beheer", []))
            }, {}),
        })),
    }
)