#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'


import * as rs_filesystem_unrestricted from "pareto-host-nodejs/file_system_unrestricted/index"
import * as rs_stream from "pareto-resource-stream/index"

import { $$ as procedure } from "lib/implementation/manual/commands/generate_typescript_cli"

p_h.run_main_command(
    () => {
        return procedure(
            null,
            {
                'read file': rs_filesystem_unrestricted.$.queries['read file'],
            },
            {
                'make directory': rs_filesystem_unrestricted.$.commands['make directory'],
                'remove': rs_filesystem_unrestricted.$.commands.remove,
                'copy': rs_filesystem_unrestricted.$.commands.copy,
                'log': rs_stream.$.commands.log,
                'log error': rs_stream.$.commands['log error'],
                'write file': rs_filesystem_unrestricted.$.commands['write file'],
            },
        )
    },
)
