import * as _pi from 'pareto-core/dist/interface'

import {
    resolver_modules, r, resolver, option, option_constrained, al, ls, av, gvs, rvs, oc,
} from "../../../../../shorthands/resolver"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolver_Modules = resolver_modules(
    {
        "Fiscaal": resolver(r.group({
            "Balans Hoofdcategorieen": r.dictionary(r.group({
                "Zijde": r.state({
                    "Activa": option(r.nothing()),
                    "Passiva": option(r.nothing())
                }),
                "Subcategorieen": r.dictionary(r.nothing())
            })),
            "Resultaat Hoofdcategorieen": r.dictionary(r.group({
                "Zijde": r.state({
                    "Kosten": option(r.nothing()),
                    "Opbrengsten": option(r.nothing())
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
                    "Activa": option(r.nothing()),
                    "Passiva": option(r.nothing())
                }),
                "Subcategorieen": r.dictionary(r.group({
                    "Hoofdcategorie fiscus": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Fiscaal", [rvs.group("Balans Hoofdcategorieen")]))),
                    "Subcategorie fiscus": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("Hoofdcategorie fiscus", [rvs.reference(), rvs.group("Subcategorieen")]))),
                }))
            })),
            "Resultaat": r.dictionary(r.group({
                "Zijde": r.state({
                    "Kosten": option(r.nothing()),
                    "Opbrengsten": option(r.nothing())
                }),
                "Subcategorieen": r.dictionary(r.group({
                    "Hoofdcategorie fiscus": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Fiscaal", [rvs.group("Resultaat Hoofdcategorieen")]))),
                    "Subcategorie fiscus": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("Hoofdcategorie fiscus", [rvs.reference(), rvs.group("Subcategorieen")]))),
                }))
            })),
        })),

        "Beheer": resolver(r.group({
            "BTW-categorieen": r.dictionary(r.group({
                "BTW-heffing": r.state({
                    "Ja": option(r.group({
                        "BTW-promillage": r.number(),
                    })),
                    "Nee": option(r.nothing()),
                })
            })),
            "Grootboekrekeningen": r.group({
                "Balans": r.dictionary(r.group({
                    "Hoofdcategorie": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboek Categorieen", [rvs.group("Balans")]))),
                    "Subcategorie": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("Hoofdcategorie", [rvs.reference(), rvs.group("Subcategorieen")]))),
                    "Zijde": r.state({
                        "Activa": option(r.nothing()),
                        "Passiva": option(r.nothing())
                    }),
                })),
                "Resultaat": r.dictionary(r.group({
                    "Hoofdcategorie": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboek Categorieen", [rvs.group("Resultaat")]))),
                    "Subcategorie": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("Hoofdcategorie", [rvs.reference(), rvs.group("Subcategorieen")]))),
                    "Zijde": r.state({
                        "Kosten": option(r.group({
                            "Correctie op vennootschapsbelasting": r.state({
                                "Ja": option(r.group({
                                    "Correctietype": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboek Categorieen", [rvs.group("Correctietypes vennootschapsbelasting")]))),
                                })),
                                "Nee": option(r.nothing()),
                            })
                        })),
                        "Opbrengsten": option(r.nothing())
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
                                "Project": option(r.group({
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
                    "Bankrekening": option(r.nothing()),
                    "Overig": option(r.nothing()),
                    "Informele rekening": option(r.nothing())
                })
            })),
            "Resultaat": r.dictionary(r.nothing()),
        })),

        "Jaarbeheer": resolver(r.group({
            "Resultaat": r.group({
                "Grootboekrekening voor BTW afrondingen": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Resultaat")]))),
                "Salarisrondes": r.dictionary(r.nothing()),
                "BTW periodes": r.dictionary(r.group({
                    "1. BTW-categorieen": r.dictionary(r.nothing()),
                    "Documenten": r.dictionary(r.group({
                        "Bestand": r.text(),
                    })),
                    "Omschrijving": r.text(),
                    "Status": r.state({
                        "Aangegeven": option(r.group({
                            "Afronding": r.number(),
                            "Bedrag": r.number(),
                            "Datum": r.number(),
                        })),
                        "Openstaand": option(r.nothing()),
                    }),
                })),
            }),
            "Balans": r.group({
                "Beginsaldo nog aan te geven BTW": r.number(),
                "Beginsaldo winstreserve": r.number(),
                "Grootboekrekening voor nog aan te geven BTW": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor resultaat dit jaar": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor winstreserve": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor Inkoop saldo": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor Verkoop saldo": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Informele rekeningen": r.dictionary(r.group({
                    "Beginsaldo": r.number(),
                    "Grootboekrekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                    "Nieuw": r.state({
                        "Ja": option(r.nothing()),
                        "Nee": option_constrained(
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
                    "Grootboekrekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                    "Nieuw": r.state({
                        "Ja": option(r.nothing()),
                        "Nee": option_constrained(
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
            "Grootboekrekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
            "Nieuw": r.state({
                "Ja": option(r.nothing()),
                "Nee": option_constrained(
                    {
                        "Volgend boekjaar": oc.state(gvs.parameter("Eerste boekjaar", []), "Nee"),
                    },
                    r.group({
                        "Balans item": r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("Volgend boekjaar", [rvs.group("Vorig boekjaar"), rvs.reference(), rvs.group("Jaarbeheer"), rvs.component(), rvs.group("Balans"), rvs.group("Overige balans items")])))
                    })
                ),
            }),
        })),

        "Verwijzing naar Informele rekening": resolver(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))),
        "Verwijzing naar Bankrekening": resolver(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Bankrekeningen")])))),

        "Handelstransacties": resolver(r.group({
            "Inkopen": r.dictionary(r.group({
                "Afhandeling": r.state({
                    "Mutaties": option(r.nothing()),
                    "Nog te betalen": option(r.group({
                        "Betalingstermijn": r.number(),
                    })),
                    "Rekening courant": option(r.group({
                        "Rekening courant": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))
                    })),
                }),
                "BTW-regime": r.state({
                    "Binnenland: heffing verlegd": option(r.nothing()),
                    "Geen BTW van toepassing": option(r.nothing()),
                    "Import van buiten de EU": option(r.nothing()),
                    "Intracommunautair": option(r.nothing()),
                    "Standaard": option(r.group({
                        "BTW-periode": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("BTW periodes")]))),
                    })),
                }),
                "Brondocument": r.state({
                    "Toegevoegd": option(r.group({
                        "Document": r.text(),
                    })),
                    "Niet van toepassing": option(r.nothing()),
                    "Ontbreekt": option(r.nothing()),
                }),
                "Datum": r.number(),
                "Regels": r.dictionary(r.group({
                    "Bedrag": r.state({
                        "Bekend": option(r.group({
                            "BTW-bedrag": r.number(),
                            "Bedrag inclusief geheven BTW": r.number(),
                        }))
                    }),
                    "Omschrijving": r.text(),
                    "Type": r.state({
                        "Balans": option(r.group({
                            "Balans item": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Overige balans items")]))),
                        })),
                        "Kosten": option(r.group({
                            "Grootboekrekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Resultaat")]))),
                        })),
                    }),
                })),
                "Type": r.state({
                    "Bonnetje": option(r.nothing()),
                    "Inkoop (met crediteur)": option(r.group({
                        "Crediteur": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Beheer", [rvs.group("Leveranciers")]))),
                        "Factuurnummer": r.text()
                    })),
                    "Loonheffing": option(r.group({
                        "Ronde": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("Salarisrondes")]))),
                    })),
                    "Salaris": option(r.group({
                        "Ronde": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("Salarisrondes")]))),
                        "Medewerker": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Beheer", [rvs.group("Medewerkers")]))),
                    })),
                }),
            })),
            "Verkopen": r.dictionary(r.group({
                "Datum": r.number(),
                "Betalingstermijn": r.number(),
                "BTW-periode": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("BTW periodes")]))),
                "Brondocument": r.state({
                    "Toegevoegd": option(r.group({
                        "Document": r.text()
                    })),
                }),
                "Debiteur": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Beheer", [rvs.group("Klanten")]))),
                "Contracttype": r.state({
                    "Project": option(r.group({
                        "Project": r.reference(ls.acyclic.resolved_dictionary(gvs.parent_sibling("Debiteur", [rvs.reference(), rvs.group("Projecten")]))),
                        "Offerte": r.reference(ls.acyclic.resolved_dictionary(gvs.sibling("Project", [rvs.reference(), rvs.group("Offertes")]))),
                    })),
                    "Licentieovereenkomst": option(r.group({
                        "Overeenkomst": r.reference(ls.acyclic.resolved_dictionary(gvs.parent_sibling("Debiteur", [rvs.reference(), rvs.group("Licentieovereenkomsten")]))),
                    })),
                }),
                "Afhandeling": r.state({
                    "Mutaties": option(r.nothing()),
                    "Rekening courant": option(r.group({
                        "Rekening courant": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")]))),
                    })),
                }),
                "Regels": r.dictionary(r.group({
                    "BTW-regime": r.state({
                        "Intracommunautair": option(r.nothing()),
                        "Standaard": option(r.group({
                            "BTW-categorie": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Beheer", [rvs.group("BTW-categorieen")]))),
                        })),
                        "Binnenland: heffing verlegd": option(r.nothing()),
                    }),
                    "Bedrag exclusief BTW": r.number(),
                    "Contracttype": r.state({
                        "Project": option_constrained({ "Definitie": oc.state(gvs.parent_sibling("Contracttype", []), "Project"), }, r.group({
                            "Opbrengst": r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("Definitie", [rvs.group("Offerte"), rvs.reference(), rvs.group("Opbrengsten")]))),
                        })),
                        "Los": option(r.nothing()),
                        "Licentieovereenkomst": option_constrained({ "Definitie": oc.state(gvs.parent_sibling("Contracttype", []), "Licentieovereenkomst"), }, r.group({
                            "Periode": r.reference(ls.acyclic.resolved_dictionary(gvs.option_constraint("Definitie", [rvs.group("Overeenkomst"), rvs.reference(), rvs.group("Periodes")]))),
                        })),
                    }),
                    "Omschrijving": r.text(),
                    "Type": r.state({
                        "Opbrengsten": option(r.group({
                            "Grootboekrekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Resultaat")]))),
                        })),
                        "Balans": option(r.group({
                            "Balans item": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Overige balans items")]))),
                        })),
                    }),
                })),
            })),
        })),

        "Balans Resultaat Mutatie": resolver(r.group({
            "Jaar": r.optional(r.reference(ls.parameter("Jaren"))), //FIXME het jaar is optioneel, bepaal de juiste handelstransacties en jaarbeheer
            "type": r.state({
                "Inkoop": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Handelstransacties", [rvs.group("Inkopen")])))),
                "Verkoop": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Handelstransacties", [rvs.group("Verkopen")])))),
                "BTW-periode": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("BTW periodes")])))),
            })
        })),

        "Mutaties": resolver(r.group({
            "Verrekenpost mutaties": r.dictionary_linked(
                'sparse',
                gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Verrekenposten")]),
                r.dictionary(r.group({
                    "Bedrag": r.number(),
                    "Afhandeling": r.state({
                        "Resultaat": option(r.component("Balans Resultaat Mutatie", null, null)),
                        "Balans": option(r.state({
                            "Informele rekening": option(r.group({
                                "Informele rekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))
                            })),

                        })),
                    })
                })),
            ),
            "Bankrekening Mutatie Verwerkingen": r.dictionary_linked(
                'sparse',
                gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Bankrekeningen")]),
                r.dictionary(r.state({
                    "Resultaat": option(r.component("Balans Resultaat Mutatie", null, null)),
                    "Balans": option(r.state({
                        "Verrekenpost": option(r.group({
                            "Verrekenpost": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Verrekenposten")])))
                        })),
                        "Informele rekening": option(r.group({
                            "Informele rekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))
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
                    "Grootboekrekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                    "Omschrijving": r.text(),
                })),
            ),
        })),

        "Eerste boekjaar": resolver(r.state({
            "Ja": option(r.nothing()),
            "Nee": option(r.group({
                "Vorig boekjaar": r.reference(ls.parameter("Jaren"))
            })),
        })),

        "Jaren": resolver(r.dictionary(r.group({
            "Afgesloten": r.state({
                "Ja": option(r.nothing()),
                "Nee": option(r.nothing()),
            }),
            "Startdatum boekjaar": r.number(),
            "Grootboekrekeningen": r.component("Grootboekrekeningen", {}, {}),
            "Eerste boekjaar": r.component("Eerste boekjaar", {}, {
                "Jaren": al.acyclic.siblings(),
            }),
            "Jaarbeheer": r.component("Jaarbeheer", {
                "Grootboekrekeningen": av.required(gvs.sibling("Grootboekrekeningen", [])),
                "Eerste boekjaar": av.required(gvs.sibling("Eerste boekjaar", [])),
            }, {
                "Jaren": al.acyclic.siblings(),
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
                "Jaren": al.acyclic.siblings(),
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