

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(

    'constrained',
    {
        "Bestandsnaam": text('single line', ["./data/", ""]),
        "Wachtwoord": text('single line'),
        "Benaming": text('single line'),
        "Omschrijving": text('multi line'),
    },
    {
        "Bedrag": n.integer(2),
        "Dagen": n.positive_natural(null),
        "Datum": n.date(),
        "Promillage": n.natural(null),

    },
)


