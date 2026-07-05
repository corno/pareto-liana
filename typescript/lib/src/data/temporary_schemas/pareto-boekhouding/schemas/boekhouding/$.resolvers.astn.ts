
import * as sh from "../../../../../shorthands/resolver/manual.js"


export const $ = sh.resolver_modules(
    {
        "Fiscaal": sh.resolver(sh.r.group({
            "Balans Hoofdcategorieen": sh.r.dictionary(sh.r.group({
                "Zijde": sh.r.state({
                    "Activa": sh.option(sh.r.nothing()),
                    "Passiva": sh.option(sh.r.nothing())
                }),
                "Subcategorieen": sh.r.dictionary(sh.r.nothing())
            })),
            "Resultaat Hoofdcategorieen": sh.r.dictionary(sh.r.group({
                "Zijde": sh.r.state({
                    "Kosten": sh.option(sh.r.nothing()),
                    "Opbrengsten": sh.option(sh.r.nothing())
                }),
                "Subcategorieen": sh.r.dictionary(sh.r.nothing())
            })),
        })),

        "Grootboek Categorieen": sh.resolver(sh.r.group({
            "Correctietypes vennootschapsbelasting": sh.r.dictionary(sh.r.group({
                "Te corrigeren promillage": sh.r.simple(),
            })),
            "Balans": sh.r.dictionary(sh.r.group({
                "Zijde": sh.r.state({
                    "Activa": sh.option(sh.r.nothing()),
                    "Passiva": sh.option(sh.r.nothing())
                }),
                "Subcategorieen": sh.r.dictionary(sh.r.group({
                    "Hoofdcategorie fiscus": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Fiscaal", [sh.rvs.group("Balans Hoofdcategorieen")]))),
                    "Subcategorie fiscus": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("Hoofdcategorie fiscus", [sh.rvs.reference(), sh.rvs.group("Subcategorieen")]))),
                }))
            })),
            "Resultaat": sh.r.dictionary(sh.r.group({
                "Zijde": sh.r.state({
                    "Kosten": sh.option(sh.r.nothing()),
                    "Opbrengsten": sh.option(sh.r.nothing())
                }),
                "Subcategorieen": sh.r.dictionary(sh.r.group({
                    "Hoofdcategorie fiscus": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Fiscaal", [sh.rvs.group("Resultaat Hoofdcategorieen")]))),
                    "Subcategorie fiscus": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("Hoofdcategorie fiscus", [sh.rvs.reference(), sh.rvs.group("Subcategorieen")]))),
                }))
            })),
        })),

        "Beheer": sh.resolver(sh.r.group({
            "BTW-categorieen": sh.r.dictionary(sh.r.group({
                "BTW-heffing": sh.r.state({
                    "Ja": sh.option(sh.r.group({
                        "BTW-promillage": sh.r.simple(),
                    })),
                    "Nee": sh.option(sh.r.nothing()),
                })
            })),
            "Grootboekrekeningen": sh.r.group({
                "Balans": sh.r.dictionary(sh.r.group({
                    "Hoofdcategorie": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboek Categorieen", [sh.rvs.group("Balans")]))),
                    "Subcategorie": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("Hoofdcategorie", [sh.rvs.reference(), sh.rvs.group("Subcategorieen")]))),
                    "Zijde": sh.r.state({
                        "Activa": sh.option(sh.r.nothing()),
                        "Passiva": sh.option(sh.r.nothing())
                    }),
                })),
                "Resultaat": sh.r.dictionary(sh.r.group({
                    "Hoofdcategorie": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboek Categorieen", [sh.rvs.group("Resultaat")]))),
                    "Subcategorie": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("Hoofdcategorie", [sh.rvs.reference(), sh.rvs.group("Subcategorieen")]))),
                    "Zijde": sh.r.state({
                        "Kosten": sh.option(sh.r.group({
                            "Correctie op vennootschapsbelasting": sh.r.state({
                                "Ja": sh.option(sh.r.group({
                                    "Correctietype": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboek Categorieen", [sh.rvs.group("Correctietypes vennootschapsbelasting")]))),
                                })),
                                "Nee": sh.option(sh.r.nothing()),
                            })
                        })),
                        "Opbrengsten": sh.option(sh.r.nothing())
                    }),
                })),
            }),
            "Rekeningen": sh.r.group({
                "Bank": sh.r.dictionary(sh.r.nothing()),
                "Informeel": sh.r.dictionary(sh.r.nothing()),

            }),
            "Gebruikers": sh.r.dictionary(sh.r.group({
                "Volledige naam": sh.r.text(),
                "Wachtwoord": sh.r.text(),
            })),
            "Klanten": sh.r.dictionary(sh.r.group({
                "Licentieovereenkomsten": sh.r.dictionary(sh.r.group({
                    "Periodes": sh.r.dictionary(sh.r.group({
                        "Bedrag": sh.r.simple(),
                    })),
                })),
                "Projecten": sh.r.dictionary(sh.r.group({
                    "Offertes": sh.r.dictionary(sh.r.group({
                        "Opbrengsten": sh.r.dictionary(sh.r.group({
                            "Type": sh.r.state({
                                "Project": sh.option(sh.r.group({
                                    "Bedrag": sh.r.simple(),
                                    "Betaaldatum": sh.r.simple(),
                                })),
                            }),
                        })),
                    })),
                })),
            })),
            "Leveranciers": sh.r.dictionary(sh.r.nothing()),
            "Medewerkers": sh.r.dictionary(sh.r.nothing()),
        })),

        "Grootboekrekeningen": sh.resolver(sh.r.group({
            "Balans": sh.r.dictionary_linked(
                'sparse',
                sh.gvs.parameter("Beheer", [sh.rvs.group("Grootboekrekeningen"), sh.rvs.group("Balans")]),
                sh.r.group({
                    "Stam": sh.r.reference_derived(sh.gvs.linked_entry([])),
                    // "Type": sh.r.state({
                    //     "Bankrekening": sh.option(sh.r.nothing()),
                    //     "Overig": sh.option(sh.r.nothing()),
                    //     "Informele rekening": sh.option(sh.r.nothing())
                    // })
                })
            ),
            "Resultaat": sh.r.dictionary_linked(
                'sparse',
                sh.gvs.parameter("Beheer", [sh.rvs.group("Grootboekrekeningen"), sh.rvs.group("Resultaat")]),
                sh.r.group({
                    "Stam": sh.r.reference_derived(sh.gvs.linked_entry([]))
                }),
            ),
        })),

        "Jaarbeheer": sh.resolver(sh.r.group({
            "Resultaat": sh.r.group({
                "Grootboekrekening voor BTW afrondingen": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Resultaat")]))),
                "Salarisrondes": sh.r.dictionary(sh.r.nothing()),
                "BTW periodes": sh.r.dictionary(sh.r.group({
                    "1. BTW-categorieen": sh.r.dictionary(sh.r.nothing()),
                    "Documenten": sh.r.dictionary(sh.r.group({
                        "Bestand": sh.r.text(),
                    })),
                    "Omschrijving": sh.r.text(),
                    "Status": sh.r.state({
                        "Aangegeven": sh.option(sh.r.group({
                            "Afronding": sh.r.simple(),
                            "Bedrag": sh.r.simple(),
                            "Datum": sh.r.simple(),
                        })),
                        "Openstaand": sh.option(sh.r.nothing()),
                    }),
                })),
            }),
            "Balans": sh.r.group({
                "Beginsaldo nog aan te geven BTW": sh.r.simple(),
                "Beginsaldo winstreserve": sh.r.simple(),
                "Grootboekrekening voor nog aan te geven BTW": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Balans")]))),
                "Grootboekrekening voor resultaat dit jaar": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Balans")]))),
                "Grootboekrekening voor winstreserve": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Balans")]))),
                "Grootboekrekening voor Inkoop saldo": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Balans")]))),
                "Grootboekrekening voor Verkoop saldo": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Balans")]))),
                "Informele rekeningen": sh.r.dictionary(sh.r.group({
                    "Beginsaldo": sh.r.simple(),
                    "Grootboekrekening": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Balans")]))),
                    "Nieuw": sh.r.state({
                        "Ja": sh.option(sh.r.nothing()),
                        "Nee": sh.option_constrained(
                            {
                                "Niet Nieuw": sh.oc.state(sh.gvs.parameter("Eerste boekjaar", []), "Nee"),
                            },
                            sh.r.group({
                                "Rekening": sh.r.component("Verwijzing naar Informele rekening", {
                                    "Jaarbeheer": sh.av.required(sh.gvs.option_constraint("Niet Nieuw", [sh.rvs.group("Vorig boekjaar"), sh.rvs.reference(), sh.rvs.group("Jaarbeheer"), sh.rvs.component()])),
                                }, {}),
                            })
                        ),
                    })
                })),
                "Bankrekeningen": sh.r.dictionary(sh.r.group({
                    "Beginsaldo": sh.r.simple(),
                    "Grootboekrekening": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Balans")]))),
                    "Nieuw": sh.r.state({
                        "Ja": sh.option(sh.r.nothing()),
                        "Nee": sh.option_constrained(
                            {
                                "Niet Nieuw": sh.oc.state(sh.gvs.parameter("Eerste boekjaar", []), "Nee"),
                            },
                            sh.r.group({
                                "Rekening": sh.r.component("Verwijzing naar Bankrekening", {
                                    "Jaarbeheer": sh.av.required(sh.gvs.option_constraint("Niet Nieuw", [sh.rvs.group("Vorig boekjaar"), sh.rvs.reference(), sh.rvs.group("Jaarbeheer"), sh.rvs.component()])),
                                }, {}),
                            })
                        ),
                    }),
                    "Mutaties": sh.r.dictionary(sh.r.group({
                        "Bedrag": sh.r.simple(),
                        "Datum": sh.r.simple(),
                        "Omschrijving": sh.r.text(),
                    })),
                })),
                "Overige balans items": sh.r.dictionary(sh.r.component("Overige balans item", null, null)),
                "Verrekenposten": sh.r.dictionary(sh.r.nothing()),

            }),
        })),

        "Overige balans item": sh.resolver(sh.r.group({
            "Beginsaldo": sh.r.simple(),
            "Grootboekrekening": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Balans")]))),
            "Nieuw": sh.r.state({
                "Ja": sh.option(sh.r.nothing()),
                "Nee": sh.option_constrained(
                    {
                        "Volgend boekjaar": sh.oc.state(sh.gvs.parameter("Eerste boekjaar", []), "Nee"),
                    },
                    sh.r.group({
                        "Balans item": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("Volgend boekjaar", [sh.rvs.group("Vorig boekjaar"), sh.rvs.reference(), sh.rvs.group("Jaarbeheer"), sh.rvs.component(), sh.rvs.group("Balans"), sh.rvs.group("Overige balans items")])))
                    })
                ),
            }),
        })),

        "Verwijzing naar Informele rekening": sh.resolver(sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Informele rekeningen")])))),
        "Verwijzing naar Bankrekening": sh.resolver(sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Bankrekeningen")])))),

        "Handelstransacties": sh.resolver(sh.r.group({
            "Inkopen": sh.r.dictionary(sh.r.group({
                "Afhandeling": sh.r.state({
                    "Mutaties": sh.option(sh.r.nothing()),
                    "Nog te betalen": sh.option(sh.r.group({
                        "Betalingstermijn": sh.r.simple(),
                    })),
                    "Rekening courant": sh.option(sh.r.group({
                        "Rekening courant": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Informele rekeningen")])))
                    })),
                }),
                "BTW-periode": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Resultaat"), sh.rvs.group("BTW periodes")]))),
                // "BTW-regime": sh.r.state({
                //     "Binnenland: heffing verlegd": sh.option(sh.r.nothing()),
                //     "Geen BTW van toepassing": sh.option(sh.r.nothing()),
                //     "Import van buiten de EU": sh.option(sh.r.nothing()),
                //     "Intracommunautair": sh.option(sh.r.nothing()),
                //     "Standaard": sh.option(sh.r.group({
                //     })),
                // }),
                "Brondocument": sh.r.state({
                    "Toegevoegd": sh.option(sh.r.group({
                        "Document": sh.r.text(),
                    })),
                    "Niet van toepassing": sh.option(sh.r.nothing()),
                    "Ontbreekt": sh.option(sh.r.nothing()),
                }),
                "Datum": sh.r.simple(),
                "Regels": sh.r.dictionary(sh.r.group({
                    "Bedrag": sh.r.state({
                        "Bekend": sh.option(sh.r.group({
                            "BTW-bedrag": sh.r.simple(),
                            "Bedrag inclusief geheven BTW": sh.r.simple(),
                        }))
                    }),
                    "Omschrijving": sh.r.text(),
                    "Type": sh.r.state({
                        "Balans": sh.option(sh.r.group({
                            "Balans item": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Overige balans items")]))),
                        })),
                        "Kosten": sh.option(sh.r.group({
                            "Grootboekrekening": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Resultaat")]))),
                        })),
                    }),
                })),
                "Type": sh.r.state({
                    "Bonnetje": sh.option(sh.r.nothing()),
                    "Inkoop (met crediteur)": sh.option(sh.r.group({
                        "Crediteur": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Beheer", [sh.rvs.group("Leveranciers")]))),
                        "Factuurnummer": sh.r.text()
                    })),
                    "Loonheffing": sh.option(sh.r.group({
                        "Ronde": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Resultaat"), sh.rvs.group("Salarisrondes")]))),
                    })),
                    "Salaris": sh.option(sh.r.group({
                        "Ronde": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Resultaat"), sh.rvs.group("Salarisrondes")]))),
                        "Medewerker": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Beheer", [sh.rvs.group("Medewerkers")]))),
                    })),
                }),
            })),
            "Verkopen": sh.r.dictionary(sh.r.group({
                "Datum": sh.r.simple(),
                "Betalingstermijn": sh.r.simple(),
                "BTW-periode": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Resultaat"), sh.rvs.group("BTW periodes")]))),
                "Brondocument": sh.r.state({
                    "Toegevoegd": sh.option(sh.r.group({
                        "Document": sh.r.text()
                    })),
                }),
                "Debiteur": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Beheer", [sh.rvs.group("Klanten")]))),
                "Contracttype": sh.r.state({
                    "Project": sh.option(sh.r.group({
                        "Project": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parent_sibling("Debiteur", [sh.rvs.reference(), sh.rvs.group("Projecten")]))),
                        "Offerte": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.sibling("Project", [sh.rvs.reference(), sh.rvs.group("Offertes")]))),
                    })),
                    "Licentieovereenkomst": sh.option(sh.r.group({
                        "Overeenkomst": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parent_sibling("Debiteur", [sh.rvs.reference(), sh.rvs.group("Licentieovereenkomsten")]))),
                    })),
                }),
                "Afhandeling": sh.r.state({
                    "Mutaties": sh.option(sh.r.nothing()),
                    "Rekening courant": sh.option(sh.r.group({
                        "Rekening courant": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Informele rekeningen")]))),
                    })),
                }),
                "Regels": sh.r.dictionary(sh.r.group({
                    "BTW-regime": sh.r.state({
                        "Intracommunautair": sh.option(sh.r.nothing()),
                        "Standaard": sh.option(sh.r.group({
                            "BTW-categorie": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Beheer", [sh.rvs.group("BTW-categorieen")]))),
                        })),
                        "Binnenland: heffing verlegd": sh.option(sh.r.nothing()),
                    }),
                    "Bedrag exclusief BTW": sh.r.simple(),
                    "Contracttype": sh.r.state({
                        "Project": sh.option_constrained({ "Definitie": sh.oc.state(sh.gvs.parent_sibling("Contracttype", []), "Project"), }, sh.r.group({
                            "Opbrengst": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("Definitie", [sh.rvs.group("Offerte"), sh.rvs.reference(), sh.rvs.group("Opbrengsten")]))),
                        })),
                        "Los": sh.option(sh.r.nothing()),
                        "Licentieovereenkomst": sh.option_constrained({ "Definitie": sh.oc.state(sh.gvs.parent_sibling("Contracttype", []), "Licentieovereenkomst"), }, sh.r.group({
                            "Periode": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.option_constraint("Definitie", [sh.rvs.group("Overeenkomst"), sh.rvs.reference(), sh.rvs.group("Periodes")]))),
                        })),
                    }),
                    "Omschrijving": sh.r.text(),
                    "Type": sh.r.state({
                        "Opbrengsten": sh.option(sh.r.group({
                            "Grootboekrekening": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Resultaat")]))),
                        })),
                        "Balans": sh.option(sh.r.group({
                            "Balans item": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Overige balans items")]))),
                        })),
                    }),
                })),
            })),
        })),

        "Rekening Mutatie": sh.resolver(sh.r.group({
            "Jaar": sh.r.optional(sh.r.reference(sh.ls.parameter("Jaren"))), //FIXME het jaar is optioneel, bepaal de juiste handelstransacties en jaarbeheer
            "type": sh.r.state({
                "Inkoop": sh.option(sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Handelstransacties", [sh.rvs.group("Inkopen")])))),
                "Verkoop": sh.option(sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Handelstransacties", [sh.rvs.group("Verkopen")])))),
                "BTW-periode": sh.option(sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Resultaat"), sh.rvs.group("BTW periodes")])))),
            })
        })),

        "Mutaties": sh.resolver(sh.r.group({
            "Verrekenposten": sh.r.dictionary_linked(
                'sparse',
                sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Verrekenposten")]),
                sh.r.group({
                    "Stam": sh.r.reference_derived(sh.gvs.linked_entry([])),
                    "Mutaties": sh.r.dictionary(sh.r.group({
                        "Bedrag": sh.r.simple(),
                        "Afhandeling": sh.r.state({
                            "Resultaat": sh.option(sh.r.component("Rekening Mutatie", null, null)),
                            "Balans": sh.option(sh.r.state({
                                "Informele rekening": sh.option(sh.r.group({
                                    "Informele rekening": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Informele rekeningen")])))
                                })),

                            })),
                        })
                    }))
                }),
            ),
            "Bankrekeningen": sh.r.dictionary_linked(
                'sparse',
                sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Bankrekeningen")]),
                sh.r.group({
                    "Stam": sh.r.reference_derived(sh.gvs.linked_entry([])),
                    "Mutatie Verwerkingen": sh.r.dictionary(sh.r.group({
                        "Stam": sh.r.reference_derived(sh.gvs.linked_entry([])),
                        "type": sh.r.state({
                            "Resultaat": sh.option(sh.r.component("Rekening Mutatie", null, null)),
                            "Balans": sh.option(sh.r.state({
                                "Verrekenpost": sh.option(sh.r.group({
                                    "Verrekenpost": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Verrekenposten")])))
                                })),
                                "Informele rekening": sh.option(sh.r.group({
                                    "Informele rekening": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Informele rekeningen")])))
                                })),
                            })),
                        })
                    }))
                })
            ),
            "Overige Balans Items": sh.r.dictionary_linked(
                'sparse',
                sh.gvs.parameter("Jaarbeheer", [sh.rvs.group("Balans"), sh.rvs.group("Overige balans items")]),
                sh.r.group({
                    "Stam": sh.r.reference_derived(sh.gvs.linked_entry([])),
                    "Memoriaal Boekingen": sh.r.dictionary(sh.r.group({
                        "Bedrag": sh.r.simple(),
                        "Datum": sh.r.simple(),
                        "Grootboekrekening": sh.r.reference(sh.ls.acyclic.resolved_dictionary(sh.gvs.parameter("Grootboekrekeningen", [sh.rvs.group("Balans")]))),
                        "Omschrijving": sh.r.text(),
                    })),
                })),
        })),

        "Eerste boekjaar": sh.resolver(sh.r.state({
            "Ja": sh.option(sh.r.nothing()),
            "Nee": sh.option(sh.r.group({
                "Vorig boekjaar": sh.r.reference(sh.ls.parameter("Jaren"))
            })),
        })),

        "Jaren": sh.resolver(sh.r.dictionary(sh.r.group({
            "Afgesloten": sh.r.state({
                "Ja": sh.option(sh.r.nothing()),
                "Nee": sh.option(sh.r.nothing()),
            }),
            "Startdatum boekjaar": sh.r.simple(),
            "Grootboekrekeningen": sh.r.component("Grootboekrekeningen", {
                "Beheer": sh.av.parameter("Beheer"),
            }, {}),
            "Eerste boekjaar": sh.r.component("Eerste boekjaar", {}, {
                "Jaren": sh.al.acyclic.siblings(),
            }),
            "Jaarbeheer": sh.r.component("Jaarbeheer", {
                "Grootboekrekeningen": sh.av.required(sh.gvs.sibling("Grootboekrekeningen", [])),
                "Eerste boekjaar": sh.av.required(sh.gvs.sibling("Eerste boekjaar", [])),
            }, {
                "Jaren": sh.al.acyclic.siblings(),
            }),
            "Handelstransacties": sh.r.component("Handelstransacties", {
                "Beheer": sh.av.parameter("Beheer"),
                "Grootboekrekeningen": sh.av.required(sh.gvs.sibling("Grootboekrekeningen", [])),
                "Jaarbeheer": sh.av.required(sh.gvs.sibling("Jaarbeheer", []))
            }, {}),
            "Mutaties": sh.r.component("Mutaties", {
                "Beheer": sh.av.parameter("Beheer"),
                "Grootboekrekeningen": sh.av.required(sh.gvs.sibling("Grootboekrekeningen", [])),
                "Jaarbeheer": sh.av.required(sh.gvs.sibling("Jaarbeheer", [])),
                "Handelstransacties": sh.av.required(sh.gvs.sibling("Handelstransacties", []))
            }, {
                "Jaren": sh.al.acyclic.siblings(),
            }),
        }))),

        "Root": sh.resolver(sh.r.group({
            "Fiscaal": sh.r.component("Fiscaal", {}, {}),
            "Categorieen": sh.r.component("Grootboek Categorieen", {
                "Fiscaal": sh.av.required(sh.gvs.sibling("Fiscaal", [])),
            }, {}),
            "Beheer": sh.r.component("Beheer", {
                "Grootboek Categorieen": sh.av.required(sh.gvs.sibling("Categorieen", [])),
            }, {}),
            "Jaren": sh.r.component("Jaren", {
                "Beheer": sh.av.required(sh.gvs.sibling("Beheer", []))
            }, {}),
        })),
    }
)