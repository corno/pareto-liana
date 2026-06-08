#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/compile_temp_schemas"

_pn.run_main_command(
    ($r) => {
        return procedure(
            {
                'make directory': $r['filesystem unrestricted'].commands['make directory'](null),
                'remove': $r['filesystem unrestricted'].commands.remove(null),
                'copy': $r['filesystem unrestricted'].commands.copy(null),
                'log': $r.stream.commands.log(null),
                'log error': $r.stream.commands['log error'](null),
                'write file': $r['filesystem unrestricted'].commands['write file'](null),
            },
            null,
        )
    },
)