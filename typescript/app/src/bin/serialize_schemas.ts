#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/serialize_schemas"

_pn.run_main_command(
    ($r) => {
        return procedure(
            {
                'write file': $r['filesystem unrestricted'].commands['write file'](null),
                'log error': $r.stream.commands['log error'](null)
            },
            null,

        )
    },
)
