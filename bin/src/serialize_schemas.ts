#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/serialize_schemas"

_pn.run_main_command(
    ($r) => {
        return procedure(
            {
                'write file': $r.commands['write file'],
                'log error': $r.commands['log error']
            },
            null,

        )
    },
)
