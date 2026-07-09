#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'

import * as rs_filesystem_unrestricted from "pareto-resource-filesystem-unrestricted/index"
import * as rs_stream from "pareto-resource-stream/index"

import { $$ as c_command } from "lib/implementation/commands/compile_temp_schemas"

p_h.run_main_command(
    () => {
        return c_command(
            null,
            null,
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