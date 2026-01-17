#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "../implementation/manual/commands/serialize_schemas"

import * as d_resources from "../implementation/manual/commands/serialize_schemas"

_pn.run_main_command(
    ($r) => {
        return procedure(
            {
                'write file': $r.commands['write file']
            },
            null,

        )
    },
)
