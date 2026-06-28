import * as sh from "../../../../../shorthands/schema/manual"

export const $ = sh.globals(

    'constrained',
    {
        "Bestandsnaam": sh.text('single line', ["./data/", ""]),
        "Wachtwoord": sh.text('single line'),
        "Benaming": sh.text('single line'),
        "Omschrijving": sh.text('multi line'),
    },
    {
        "Bedrag": sh.n.integer(2),
        "Dagen": sh.n.positive_natural(null),
        "Datum": sh.n.date(),
        "Promillage": sh.n.natural(null),

    },
)


