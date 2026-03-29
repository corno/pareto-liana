import * as _pi from 'pareto-core/dist/interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Globals = globals(

         'unconstrained',
    {
        "Pseudo Reference": text('single line'),
        "Bestandsnaam": text('single line'),
        "Wachtwoord": text('single line'),
        "Benaming": text('single line'),
        "Omschrijving": text('multi line'),
        "text": text('single line'),
    },
    {
        "Bedrag": n.integer(null),
        "Dagen": n.positive_natural(null),
        "Datum": n.integer(null),
        "Promillage": n.natural(null),

    },
)


