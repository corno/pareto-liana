import * as sh from "../../../../../shorthands/schema/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "Pseudo Reference": sh.text('single line'),
        "Bestandsnaam": sh.text('single line'),
        "Wachtwoord": sh.text('single line'),
        "Benaming": sh.text('single line'),
        "Omschrijving": sh.text('multi line'),
        "text": sh.text('single line'),
    },
    {
        "Bedrag": sh.n.integer(null),
        "Dagen": sh.n.positive_natural(null),
        "Datum": sh.n.integer(null),
        "Promillage": sh.n.natural(null),

    },
)


