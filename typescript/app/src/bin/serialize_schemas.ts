#!/usr/bin/env -S node --enable-source-maps

import * as ph from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/serialize_schemas"

ph.run_main_command(
    ($r) => {
        return procedure(
            null,
            null,
            {
                'write file': $r['filesystem unrestricted'].commands['write file'],
                'log error': $r.stream.commands['log error']
            },
        )
    },
)
