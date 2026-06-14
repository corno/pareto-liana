import * as pi from 'pareto-core/dist/interface'

import {
    resolver_modules, r, resolver, option, option_constrained, al, ls, av, gvs, rvs, oc,
} from "../../../../../shorthands/resolver"


export const $ = resolver_modules(
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
                "Te corrigeren promillage": r.simple(),
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
                        "BTW-promillage": r.simple(),
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
                        "Bedrag": r.simple(),
                    })),
                })),
                "Projecten": r.dictionary(r.group({
                    "Offertes": r.dictionary(r.group({
                        "Opbrengsten": r.dictionary(r.group({
                            "Type": r.state({
                                "Project": option(r.group({
                                    "Bedrag": r.simple(),
                                    "Betaaldatum": r.simple(),
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
            "Balans": r.dictionary_linked(
                'sparse',
                gvs.parameter("Beheer", [rvs.group("Grootboekrekeningen"), rvs.group("Balans")]),
                r.group({
                    "Stam": r.reference_derived(gvs.linked_entry([])),
                    // "Type": r.state({
                    //     "Bankrekening": option(r.nothing()),
                    //     "Overig": option(r.nothing()),
                    //     "Informele rekening": option(r.nothing())
                    // })
                })
            ),
            "Resultaat": r.dictionary_linked(
                'sparse',
                gvs.parameter("Beheer", [rvs.group("Grootboekrekeningen"), rvs.group("Resultaat")]),
                r.group({
                    "Stam": r.reference_derived(gvs.linked_entry([]))
                }),
            ),
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
                            "Afronding": r.simple(),
                            "Bedrag": r.simple(),
                            "Datum": r.simple(),
                        })),
                        "Openstaand": option(r.nothing()),
                    }),
                })),
            }),
            "Balans": r.group({
                "Beginsaldo nog aan te geven BTW": r.simple(),
                "Beginsaldo winstreserve": r.simple(),
                "Grootboekrekening voor nog aan te geven BTW": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor resultaat dit jaar": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor winstreserve": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor Inkoop saldo": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Grootboekrekening voor Verkoop saldo": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                "Informele rekeningen": r.dictionary(r.group({
                    "Beginsaldo": r.simple(),
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
                    "Beginsaldo": r.simple(),
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
                        "Bedrag": r.simple(),
                        "Datum": r.simple(),
                        "Omschrijving": r.text(),
                    })),
                })),
                "Overige balans items": r.dictionary(r.component("Overige balans item", null, null)),
                "Verrekenposten": r.dictionary(r.nothing()),

            }),
        })),

        "Overige balans item": resolver(r.group({
            "Beginsaldo": r.simple(),
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
                        "Betalingstermijn": r.simple(),
                    })),
                    "Rekening courant": option(r.group({
                        "Rekening courant": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))
                    })),
                }),
                "BTW-periode": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("BTW periodes")]))),
                // "BTW-regime": r.state({
                //     "Binnenland: heffing verlegd": option(r.nothing()),
                //     "Geen BTW van toepassing": option(r.nothing()),
                //     "Import van buiten de EU": option(r.nothing()),
                //     "Intracommunautair": option(r.nothing()),
                //     "Standaard": option(r.group({
                //     })),
                // }),
                "Brondocument": r.state({
                    "Toegevoegd": option(r.group({
                        "Document": r.text(),
                    })),
                    "Niet van toepassing": option(r.nothing()),
                    "Ontbreekt": option(r.nothing()),
                }),
                "Datum": r.simple(),
                "Regels": r.dictionary(r.group({
                    "Bedrag": r.state({
                        "Bekend": option(r.group({
                            "BTW-bedrag": r.simple(),
                            "Bedrag inclusief geheven BTW": r.simple(),
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
                "Datum": r.simple(),
                "Betalingstermijn": r.simple(),
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
                    "Bedrag exclusief BTW": r.simple(),
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

        "Rekening Mutatie": resolver(r.group({
            "Jaar": r.optional(r.reference(ls.parameter("Jaren"))), //FIXME het jaar is optioneel, bepaal de juiste handelstransacties en jaarbeheer
            "type": r.state({
                "Inkoop": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Handelstransacties", [rvs.group("Inkopen")])))),
                "Verkoop": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Handelstransacties", [rvs.group("Verkopen")])))),
                "BTW-periode": option(r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Resultaat"), rvs.group("BTW periodes")])))),
            })
        })),

        "Mutaties": resolver(r.group({
            "Verrekenposten": r.dictionary_linked(
                'sparse',
                gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Verrekenposten")]),
                r.group({
                    "Stam": r.reference_derived(gvs.linked_entry([])),
                    "Mutaties": r.dictionary(r.group({
                        "Bedrag": r.simple(),
                        "Afhandeling": r.state({
                            "Resultaat": option(r.component("Rekening Mutatie", null, null)),
                            "Balans": option(r.state({
                                "Informele rekening": option(r.group({
                                    "Informele rekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))
                                })),

                            })),
                        })
                    }))
                }),
            ),
            "Bankrekeningen": r.dictionary_linked(
                'sparse',
                gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Bankrekeningen")]),
                r.group({
                    "Stam": r.reference_derived(gvs.linked_entry([])),
                    "Mutatie Verwerkingen": r.dictionary(r.group({
                        "Stam": r.reference_derived(gvs.linked_entry([])),
                        "type": r.state({
                            "Resultaat": option(r.component("Rekening Mutatie", null, null)),
                            "Balans": option(r.state({
                                "Verrekenpost": option(r.group({
                                    "Verrekenpost": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Verrekenposten")])))
                                })),
                                "Informele rekening": option(r.group({
                                    "Informele rekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Informele rekeningen")])))
                                })),
                            })),
                        })
                    }))
                })
            ),
            "Overige Balans Items": r.dictionary_linked(
                'sparse',
                gvs.parameter("Jaarbeheer", [rvs.group("Balans"), rvs.group("Overige balans items")]),
                r.group({
                    "Stam": r.reference_derived(gvs.linked_entry([])),
                    "Memoriaal Boekingen": r.dictionary(r.group({
                        "Bedrag": r.simple(),
                        "Datum": r.simple(),
                        "Grootboekrekening": r.reference(ls.acyclic.resolved_dictionary(gvs.parameter("Grootboekrekeningen", [rvs.group("Balans")]))),
                        "Omschrijving": r.text(),
                    })),
                })),
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
            "Startdatum boekjaar": r.simple(),
            "Grootboekrekeningen": r.component("Grootboekrekeningen", {
                "Beheer": av.parameter("Beheer"),
            }, {}),
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