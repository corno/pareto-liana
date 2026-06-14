#!/usr/bin/env -S node --enable-source-maps

import * as ph from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/compile_temp_schemas"

ph.run_main_command(
    ($r) => {
        return procedure(
            null,
            null,
            {
                'make directory': $r['filesystem unrestricted'].commands['make directory'],
                'remove': $r['filesystem unrestricted'].commands.remove,
                'copy': $r['filesystem unrestricted'].commands.copy,
                'log': $r.stream.commands.log,
                'log error': $r.stream.commands['log error'],
                'write file': $r['filesystem unrestricted'].commands['write file'],
            },
        )
    },
)