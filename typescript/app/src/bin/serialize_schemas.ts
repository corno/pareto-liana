#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'

import { $$ as procedure } from "lib/implementation/manual/commands/serialize_schemas"

p_h.run_main_command(
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
