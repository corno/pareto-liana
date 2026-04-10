#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as p_write_to_directory } from "pareto-fountain-pen-file-structure/dist/implementation/manual/commands/write_to_directory"
import { $$ as p_write_to_file } from "pareto-fountain-pen-file-structure/dist/implementation/manual/commands/write_to_file"
import { $$ as procedure } from "../implementation/manual/commands/generate_typescript_cli"

_pn.run_main_command(
    ($r) => {
        return procedure(
            {
                'make directory': $r.commands['make directory'],
                'remove': $r.commands.remove,
                'copy': $r.commands.copy,
                'log': $r.commands.log,
                'log error': $r.commands['log error'],
                'write to directory': p_write_to_directory(
                    {
                        'remove': $r.commands.remove,
                        'write to_file': p_write_to_file(
                            {
                                'make directory': $r.commands['make directory'],
                                'write file': $r.commands['write file'],
                            },
                            null,
                        ),
                    },
                    null,
                )
            },
            {
                'read file': $r.queries['read file'],
            },

        )
    },
)
