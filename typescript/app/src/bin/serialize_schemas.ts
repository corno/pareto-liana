#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'

import * as rs_filesystem_unrestricted from "pareto-resource-filesystem-unrestricted/index"
import * as rs_stream from "pareto-resource-stream/index"

import { $$ as c_command } from "lib/implementation/commands/serialize_schemas"

p_h.run_main_command(
    () => {
        return c_command(
            null,
            null,
            {
                'write file': rs_filesystem_unrestricted.$.commands['write file'],
                'log error': rs_stream.$.commands['log error']
            },
        )
    },
)
