import * as gen_loc from "./location"

export type Error = {
    'type': Error__type,
    'location': gen_loc.Location,
}

export type Error__type =
    | ['cyclic lookup in acyclic context', string]
    | ['missing denseness entry', string]
    | ['no context lookup', null]
    | ['not the same node', string]
    | ['wrong state', {
        'expected': string

        'found': string
    }]
    | ['tbd', string]