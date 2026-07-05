#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'

import { $$ as procedure } from "lib/implementation/manual/commands/generate_typescript_cli"

p_h.run_main_command(
    ($r) => {
        return procedure(
            null,
            {
                'read file': $r['filesystem unrestricted'].queries['read file'],
            },
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
