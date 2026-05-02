#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/compile_temp_schemas"

_pn.run_main_command(
    ($r) => {
        return procedure(
            {
                'make directory': $r.commands['make directory'],
                'remove': $r.commands.remove,
                'copy': $r.commands.copy,
                'log': $r.commands.log,
                'log error': $r.commands['log error'],
                'write file': $r.commands['write file'],
            },
            null,
        )
    },
)